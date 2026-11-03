# 🎓 30-IDUM Maktabtest — Zamonaviy Ta'lim & 3D Virtual Laboratoriya Platformasi

![Version](https://img.shields.io/badge/versiya-2.0.0-blue.svg)
![Status](https://img.shields.io/badge/holat-faol-success.svg)
![Deployment](https://img.shields.io/badge/deploy-Vercel%20Ready-black.svg)
![Offline](https://img.shields.io/badge/offline-100%25%20ishlaydi-orange.svg)

**30-sonli Ixtisoslashtirilgan Davlat Umumta'lim Maktabi (30-IDUM)** o'quvchilari va ustozlari uchun maxsus yaratilgan interaktiv ta'lim, 3D fan laboratoriyalari, sinflar reytingi va 1–11 sinf fan olimpiadasi platformasi.

---

## 🌟 Asosiy Imkoniyatlar

### 1. 🏅 1–11 Sinflar uchun Fan Olimpiadasi & Blitz Bellashuv
- **1-sinfdan 11-sinfgacha** har bir sinf darajasiga moslashtirilgan maxsus savollar banki:
  - **1-sinf**: Boshlang'ich mantiq, hisoblash, alifbo, tabiat va sodda ingliz tili.
  - **2–4 sinflar**: Boshlang'ich matematika, ona tili, o'qish, atrofimizdagi olam.
  - **5–9 sinflar**: Matematika, Fizika, Kimyo, Biologiya, Tarix, Ingliz tili, Informatika.
  - **10–11 sinflar**: Murakkab fanlar, oliy matematika elementlari, organik kimyo, molekulyar biologiya, dasturlash va umumiy intellekt.
- 45 soniyalik dinamik taymer, to'g'ri javoblar zanjiri (Combo Multiplier x2.5 gacha).
- Yakunda **30-IDUM Rasmiy Oltin Diplomi/Sertifikati** avtomatik generatsiya qilinadi.

### 2. 🧪 4 ta Interaktiv 3D Fan Laboratoriyasi (Three.js)
1. **Fizika Lab**: 3D Quyosh Sistemasi, sayyoralarning orbital harakati, tortishish qonuni va tezlik boshqaruvi.
2. **Kimyo Lab**: 3D Molekula va Atomlar (Suv $H_2O$, Metan $CH_4$, Karbonat angidrid $CO_2$, Kislorod $O_2$), elektron bulutlari va valentlik bog'lari.
3. **Biologiya Lab**: 3D Tirik Hujayra tuzilishi (Yadro, Mitoxondriya, Membrana) va aylanuvchi DNK qo'sh spiral modeli.
4. **Texnologiya & Muhandislik Lab**: 3D Sanoat Robot-Manipulyatori, 3D Printer lazerli chop etish simulyatsiyasi, tishli g'ildiraklar (Gear train) mexanizmi.

### 3. 📊 24 ta Sinf Reytingi va 686 O'quvchi Tahlili
- **1-A, 1-B, 1-D** dan to **11-A, 11-B** gacha jami **24 ta sinf** bo'yicha to'liq monitoring.
- Har bir sinf bo'yicha alohida tahlil:
  - **Eng ko'p harakat qilgan faol o'quvchilar** (Top o'quvchilar, yulduzlar va ballar).
  - **Yordamga muhtoj o'quvchilar** (Ustoz alohida e'tibor qaratishi kerak bo'lganlar).
- Sinfning umumiy o'rtacha bali, faollik foizi va umumiy reytingdagi o'rni.

### 4. 🎖️ 8 ta Yutuq va Medallar Tizimi (Achievements)
- *Birinchi Qadam, Snayper (100%), Chaqmoq Tezlik, Laborant, Bosh Muhandis, Qomusiy Aql, Maktab Chempioni, Olimpiada Qahramoni*.
- Medallar ochilganda animatsiyali tabriknoma (Toast celebration) paydo bo'ladi.

### 5. 🔊 100% Offline Ovoz Effektlari & Savollarni O'qish
- Hech qanday tashqi audio fayllarsiz, to'g'ridan-to'g'ri brauzerning **Web Audio API** orqali ishlovchi toza sintezlangan tovushlar (to'g'ri, xato, g'alaba fanfarasi).
- **Web Speech API** orqali savollarni ovozli o'qib berish tugmasi.

### 6. 📱 100% Moslashuvchan va Offline Ishlash
- Telefon, planshet, noutbuk va katta ekranlarda mukammal ko'rinadi.
- Bitta fayl (`30-maktabtest.html`) orqali internetsiz ham ishlaydi.

---

## 🚀 GitHub va Vercel-ga Joylash Bo'yicha Qo'llanma

### 1-QADAM: GitHub-da Yangi Repozitoriy Ochish
1. [GitHub](https://github.com) ga kiring: profilingiz: **`asrordev14`**
2. Yangi repozitoriy yarating: [https://github.com/new](https://github.com/new)
3. **Repository name** qismiga: `30-maktabtest` deb yozing.
4. **Public** ni tanlang.
5. *"Add a README file"* yoki boshqa katakchalarga tegmang (bo'sh bo'lsin).
6. **"Create repository"** tugmasini bosing.

---

### 2-QADAM: Loyihani GitHub-ga Yuklash (Terminal / PowerShell orqali)
Loyiha papkasida (`c:\Users\Hp\Downloads\new`) quyidagi buyruqlarni ketma-ket bajaring:

```bash
# 1. Repozitoriyni boshlash
git init
git branch -M main

# 2. Barcha fayllarni saqlash
git add .
git commit -m "feat: 30-IDUM maktabtest ta'lim platformasi to'liq versiya"

# 3. O'zingizning GitHub repozitoriyangizga ulash
git remote add origin https://github.com/asrordev14/30-maktabtest.git

# 4. GitHub-ga yuklash (push)
git push -u origin main
```

*(Eslatma: Agar GitHub parolini yoki Personal Access Token so'rasa, GitHub hisobingiz orqali tasdiqlang).*

---

### 3-QADAM: Vercel-ga 1 Daqiqada Bepul Joylash (Deploy)

1. [Vercel.com](https://vercel.com) saytiga kiring.
2. **"Continue with GitHub"** orqali kiring.
3. Bosh sahifada **"Add New..."** tugmasini bosing va **"Project"** ni tanlang.
4. Repozitoriyalar ro'yxatidan **`30-maktabtest`** ni topib, yonidagi **"Import"** tugmasini bosing.
5. Sozlamalarga tegmang (Framework: *Other*, Root Directory: `./`).
6. **"Deploy"** tugmasini bosing!
7. 10–15 soniyada saytingiz butun dunyo uchun ochiladi:
   👉 **`https://30-maktabtest.vercel.app`**

> Har safar kompyuteringizda o'zgarish qilib `git push` qilganingizda, Vercel saytni avtomatik yangilab boradi!

---

## 💻 Mahalliy Kompyuterda Ishga Tushirish

- **1-usul (Tavsiya etiladi)**: `START_SAYT.bat` yoki `START_LOCALHOST.bat` faylini ikki marta bosing. Mahalliy server (`http://localhost:8080`) ochiladi.
- **2-usul (Bitta fayl / Offline)**: `30-maktabtest.html` faylini istalgan brauzerda (Chrome, Edge) to'g'ridan-to'g'ri oching.

---

## 📁 Loyiha Strukturasi

```text
├── index.html               # Asosiy veb-ilova (barcha sahifalar, laboratoriyalar, reyting)
├── 30-maktabtest.html       # 100% bitta mustaqil oflayn fayl (CSS va JS ichida jamlangan)
├── 30-maktabtest-loyiha.zip  # Loyihaning to'liq arxiv nusxasi
├── vercel.json              # Vercel sozlamalari (cleanUrls, keshlash, xavfsizlik)
├── .gitignore               # Git-ga kiritilmaydigan fayllar
├── README.md                # Loyiha hujjatlari va ko'rsatmalar
├── css/
│   ├── main.css             # Asosiy stillar va animatsiyalar
│   ├── labs.css             # 3D laboratoriyalar stillari
│   └── responsive.css       # Mobil moslashuvchanlik
├── js/
│   ├── app.js               # Asosiy ilova mantiqi va navigatsiya
│   ├── sound-and-badges.js  # Web Audio tovushlar, 8 medal va 1-11 sinf olimpiadasi
│   ├── lab-3d.js            # 3D laboratoriyalar mantiqi (Three.js)
│   ├── ratings.js           # 24 ta sinf reytingi va 686 o'quvchi statistikasi
│   └── tests.js             # Fan testlari bazasi
├── data/                    # JSON ma'lumotlar va sinf bazalari
└── assets/                  # Rasm va resurslar
```

---

## 👨‍🏫 Muallif va Rivojlantiruvchi
- **Tashkilot**: 30-sonli IDUM
- **GitHub**: [@asrordev14](https://github.com/asrordev14)
- **Email**: altinbayevanvar@gmail.com
