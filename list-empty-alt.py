import re, glob

for f in sorted(glob.glob('src/sections/*.ts')) + sorted(glob.glob('src/widgets/*.ts')):
    t = open(f, encoding='utf-8').read()
    for m in re.finditer(r'<img[^>]*>', t):
        tag = m.group(0)
        if 'alt=""' in tag:
            print(f.replace('\\','/').split('/')[-1], '::', tag[:130])
