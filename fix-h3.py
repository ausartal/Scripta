import re

files = ['src/sections/HeroSection.ts', 'src/sections/ServicesSection.ts', 'src/sections/ProcessSection.ts', 'src/sections/PricingSection.ts']
for f in files:
    t = open(f, encoding='utf-8').read()
    orig = t
    # hero card titles
    t = t.replace('<p class="hero__card-title">', '<h3 class="hero__card-title">')
    t = re.sub(r'(<h3 class="hero__card-title">[^<]+)</p>', r'\1</h3>', t)
    # services card titles
    t = t.replace('<p class="services__card-title">', '<h3 class="services__card-title">')
    t = t.replace('<p class="services__card-title services__card-title--educ">', '<h3 class="services__card-title services__card-title--educ">')
    t = re.sub(r'(<h3 class="services__card-title[^"]*">[^<]+)</p>', r'\1</h3>', t)
    # process step titles
    t = t.replace('<p class="process__step-title">', '<h3 class="process__step-title">')
    t = re.sub(r'(<h3 class="process__step-title">[^<]+)</p>', r'\1</h3>', t)
    if t != orig:
        open(f, 'w', encoding='utf-8').write(t)
        print('updated', f)
    else:
        print('no change', f)
