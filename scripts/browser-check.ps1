param([string]$BaseUrl = 'http://127.0.0.1:5173', [switch]$Capture, [switch]$InteractionsOnly)
$ErrorActionPreference = 'Stop'
$sessionName = 'scripta-qa'
$reviewPath = Join-Path $PSScriptRoot '../.impeccable/review'
New-Item -ItemType Directory -Force $reviewPath | Out-Null
function Invoke-BrowserJs([string]$Script) {
  $result = $Script | agent-browser.cmd --session $sessionName eval --stdin --json | ConvertFrom-Json
  if (-not $result.success) { throw ($result | ConvertTo-Json -Depth 6) }
  return $result.data.result
}
function Assert-True([bool]$Condition, [string]$Message) { if (-not $Condition) { throw $Message } }
$settle = @'
Promise.all([document.fonts.ready, ...Array.from(document.images, image => { image.loading = 'eager'; return image.decode().catch(() => {}); })]).then(() => ({width: innerWidth, scrollWidth: document.documentElement.scrollWidth, heading: document.querySelector('h1')?.textContent, broken: Array.from(document.images).filter(image => !image.naturalWidth).map(image => image.getAttribute('src'))}))
'@
$routes = @('/', '/services', '/portfolio', '/portfolio/curio', '/pricing', '/about', '/how-it-works', '/faq', '/contact', '/privacy', '/missing-page')
foreach ($width in $(if ($InteractionsOnly) { @() } else { @(1440, 768, 390) })) {
  agent-browser.cmd --session $sessionName set viewport $width 1000 | Out-Null
  foreach ($route in $routes) {
    agent-browser.cmd --session $sessionName open "$BaseUrl$route" | Out-Null
    $state = Invoke-BrowserJs $settle
    Assert-True ($state.scrollWidth -le $width) "Horizontal overflow at $route ($width): $($state.scrollWidth)"
    Assert-True ($state.broken.Count -eq 0) "Broken images at ${route}: $($state.broken -join ', ')"
    Assert-True (-not [string]::IsNullOrWhiteSpace($state.heading)) "No page heading at $route"
    Write-Output "PASS $width $route"
    if ($Capture -and $route -in @('/', '/pricing', '/portfolio', '/contact')) {
      $routeName = if ($route -eq '/') { 'home' } else { $route.Trim('/') }
      agent-browser.cmd --session $sessionName screenshot (Join-Path $reviewPath "$routeName-$width.png") --full | Out-Null
    }
  }
}
agent-browser.cmd --session $sessionName open "$BaseUrl/portfolio" | Out-Null
agent-browser.cmd --session $sessionName find role button click --name Next --exact | Out-Null
$state = Invoke-BrowserJs "({page:new URLSearchParams(location.search).get('page'),title:document.querySelector('.project-card > h3').textContent})"
Assert-True ($state.page -eq '2' -and $state.title -like '*Little Steps*') 'Portfolio next page failed'
agent-browser.cmd --session $sessionName find role button click --name Website --exact | Out-Null
$state = Invoke-BrowserJs "({page:new URLSearchParams(location.search).get('page'),count:document.querySelectorAll('.project-card').length,title:document.querySelector('.project-card > h3').textContent})"
Assert-True (-not $state.page -and $state.count -eq 1 -and $state.title -like '*Common Ground*') 'Portfolio filter/reset failed'
agent-browser.cmd --session $sessionName open "$BaseUrl/portfolio?page=999" | Out-Null
$state = Invoke-BrowserJs "document.querySelector('.pagination [aria-current=page]').textContent"
Assert-True ($state -eq '2') 'Invalid page not clamped'
agent-browser.cmd --session $sessionName open "$BaseUrl/pricing" | Out-Null
agent-browser.cmd --session $sessionName click '.pricing-card--featured .button' | Out-Null
$selected = Invoke-BrowserJs "document.getElementById('package').value"
Assert-True ($selected -eq 'Build') 'Pricing package not passed into contact'
agent-browser.cmd --session $sessionName fill '#name' 'Scripta QA' | Out-Null
agent-browser.cmd --session $sessionName fill '#email' 'qa@example.com' | Out-Null
agent-browser.cmd --session $sessionName select '#service' 'Web Development' | Out-Null
agent-browser.cmd --session $sessionName fill '#description' 'A responsive website for a community learning project.' | Out-Null
agent-browser.cmd --session $sessionName find role button click --name 'Prepare My Brief' | Out-Null
$brief = Invoke-BrowserJs "document.querySelector('.brief-result pre')?.textContent"
Assert-True ($brief -like '*Package: Build*' -and $brief -like '*has not been sent*') 'Prepared brief is missing context or honest status'
agent-browser.cmd --session $sessionName open "$BaseUrl/faq" | Out-Null
agent-browser.cmd --session $sessionName fill '#faq-search' 'zzzznothing' | Out-Null
$empty = Invoke-BrowserJs "Boolean(document.querySelector('.faq-empty'))"
Assert-True $empty 'FAQ empty state missing'
agent-browser.cmd --session $sessionName find role button click --name 'Clear filters' | Out-Null
$count = Invoke-BrowserJs "document.querySelectorAll('.faq-list details').length"
Assert-True ($count -eq 8) 'FAQ reset failed'
agent-browser.cmd --session $sessionName find role button click --name 'Open navigation' | Out-Null
$menu = Invoke-BrowserJs "document.querySelector('.menu-toggle').getAttribute('aria-expanded')"
Assert-True ($menu -eq 'true') 'Mobile menu did not open'
agent-browser.cmd --session $sessionName press Escape | Out-Null
$menu = Invoke-BrowserJs "document.querySelector('.menu-toggle').getAttribute('aria-expanded')"
Assert-True ($menu -eq 'false') 'Mobile Escape did not close menu'
Write-Output 'PASS pagination, filter reset, invalid page, package handoff, brief preparation, FAQ search, mobile menu and Escape'
agent-browser.cmd --session $sessionName errors
