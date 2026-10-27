import re

repl = {
    'src/sections/HeroSection.ts': [
        ('class="nav__logo" src="${assets.hero.logo}" alt=""', 'class="nav__logo" src="${assets.hero.logo}" alt="Logo Scripta"'),
        ('hero__card-img--code" src="${assets.hero.cardCode}" alt=""', 'hero__card-img--code" src="${assets.hero.cardCode}" alt="Ilustrasi kode — layanan teknologi"'),
        ('hero__card-img--ruler" src="${assets.hero.cardRuler}" alt=""', 'hero__card-img--ruler" src="${assets.hero.cardRuler}" alt="Ilustrasi pensil dan penggaris — layanan kreatif"'),
        ('hero__card-img--book" src="${assets.hero.cardBook}" alt=""', 'hero__card-img--book" src="${assets.hero.cardBook}" alt="Ilustrasi buku — layanan edukasi"'),
        ('src="${assets.icons.figma}" alt=""', 'src="${assets.icons.figma}" alt="Figma"'),
        ('src="${assets.hero.iconGithub}" alt=""', 'src="${assets.hero.iconGithub}" alt="GitHub"'),
        ('src="${assets.icons.instagram}" alt=""', 'src="${assets.icons.instagram}" alt="Instagram"'),
        ('src="${assets.icons.twitch}" alt=""', 'src="${assets.icons.twitch}" alt="Twitch"'),
        ('src="${assets.icons.twitter}" alt=""', 'src="${assets.icons.twitter}" alt="Twitter"'),
    ],
    'src/sections/ServicesSection.ts': [
        ('services__web-img" src="${assets.services.webDev}" alt=""', 'services__web-img" src="${assets.services.webDev}" alt="Jasa pembuatan website dan web development"'),
        ('services__game-img" src="${assets.services.gameDev}" alt=""', 'services__game-img" src="${assets.services.gameDev}" alt="Jasa game development"'),
        ('services__app-img" src="${assets.services.appDev}" alt=""', 'services__app-img" src="${assets.services.appDev}" alt="Jasa pembuatan aplikasi mobile dan web"'),
        ('services__educ-img" src="${assets.services.education}" alt=""', 'services__educ-img" src="${assets.services.education}" alt="Les online dan jasa ilustrasi digital"'),
    ],
    'src/sections/ProcessSection.ts': [
        ('process__tile-icon--1" src="${assets.process.iconMessage}" alt=""', 'process__tile-icon--1" src="${assets.process.iconMessage}" alt="Ikon diskusi"'),
        ('process__tile-icon--2" src="${assets.process.iconMap}" alt=""', 'process__tile-icon--2" src="${assets.process.iconMap}" alt="Ikon perencanaan"'),
        ('process__tile-icon--3" src="${assets.process.iconPencil}" alt=""', 'process__tile-icon--3" src="${assets.process.iconPencil}" alt="Ikon pembuatan"'),
    ],
}

for f, pairs in repl.items():
    t = open(f, encoding='utf-8').read()
    n = 0
    for old, new in pairs:
        if old in t:
            t = t.replace(old, new)
            n += 1
        else:
            print('MISS', f, old[:60])
    open(f, 'w', encoding='utf-8').write(t)
    print('done', f, n, 'replaced')
