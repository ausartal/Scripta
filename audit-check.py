import re
import glob

html = open('index.html', encoding='utf-8').read()
print('=== index.html head ===')
print(html[:800])

ts = ''
for f in glob.glob('src/sections/*.ts'):
    ts += open(f, encoding='utf-8').read() + '\n'

h_tags = re.findall(r'<h[1-6][^>]*>', ts)
print('h tags in sections:', h_tags)

alts = re.findall(r'alt="[^"]*"', ts)
print('alt attrs total:', len(alts), 'sample:', alts[:8])

imgs = re.findall(r'<img[^>]*>', ts)
noalt = [i for i in imgs if 'alt=' not in i]
print('img total:', len(imgs), 'without alt:', len(noalt))

heads = re.findall(r'class="[^"]*(?:heading|title|label)[^"]*"[^>]*>([^<]{3,60})<', ts)
print('heading-like text:')
for h in heads[:15]:
    print('  -', h.strip())
