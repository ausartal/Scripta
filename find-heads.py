import glob, re

for f in sorted(glob.glob('src/sections/*.ts')):
    t = open(f, encoding='utf-8').read()
    name = f.replace('\\', '/').split('/')[-1]
    for m in re.finditer(r'class="[^"]*(?:heading|title)[^"]*"[^>]*>[^<]{3,70}<', t):
        print(name, '::', m.group(0)[:120])
