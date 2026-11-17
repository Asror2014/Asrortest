# 🎓 30-IDUM Maktabtest — Zamonaviy Ta'lim & 3D Virtual Laboratoriya Platformasi

![Version](https://img.shields.io/badge/versiya-2.5.0-blue.svg)
![Status](https://img.shields.io/badge/holat-faol-success.svg)
![Deployment](https://img.shields.io/badge/deploy-Vercel%20%26%20GitHub%20Pages%20Ready-black.svg)
![Offline](https://img.shields.io/badge/offline-100%25%20ishlaydi-orange.svg)

**30-sonli Ixtisoslashtirilgan Davlat Umumta'lim Maktabi (30-IDUM)** o'quvchilari va ustozlari uchun maxsus yaratilgan interaktiv ta'lim portali: 1,756+ rasmiy fan testlari, 3D interaktiv laboratoriyalar, Kitobxonlik (100 ta jahon va o'zbek durdonasi), 24 ta sinf reytingi va 1–11 sinf fan olimpiadasi.

---

## 🌟 Asosiy Imkoniyatlar

### 1. 📖 Kitobxonlik va Elektron Kutubxona (E-Library)
- **100 ta eng sara durdona asar** (O'zbek mumtoz va jahon adabiyoti, bolalar sarguzashtlari, shaxsiy rivojlanish).
- **35 ta to'liq interaktiv kitob**: Bobma-bob mutolaa, qahramonlar tahlili, mashhur iqtiboslar, audio eshitish, tungi rejim va shrift o'lchamini sozlash.
- **Interaktiv adabiy viktorinalar**: Asar mazmuni bo'yicha A, B, C, D variantli testlar va Kitobxonlik XP reytingi.

### 2. 📝 1,756+ Rasmiy Fan Testlari & Barcha Fanlar
- **Boshlang'ich (1–4 sinflar)**: Matematika, Ona tili, O'qish savodxonligi, Musiqa, Tabiiy fanlar.
- **O'rta va yuqori (5–11 sinflar)**: Matematika, Ona tili va Adabiyot, Fizika, Kimyo, Biologiya, Tarix, Geografiya, Musiqa, Informatika, Ingliz tili.
- Rasmiy monitoring va maktab dasturi talablari asosida shakllantirilgan.

### 3. 🏅 1–11 Sinflar uchun Fan Olimpiadasi & Blitz Bellashuv
- 1-sinfdan 11-sinfgacha har bir sinf darajasiga moslashtirilgan mantiqiy va fan savollari.
- 45 soniyalik dinamik taymer, Combo Multiplier (x2.5 gacha) va natijaviy **30-IDUM Rasmiy Oltin Diplomi/Sertifikati** (jsPDF orqali yuklab olish va chop etish).

### 4. 🧪 4 ta Interaktiv 3D Fan Laboratoriyasi (Three.js)
1. **Fizika Lab**: 3D Quyosh Sistemasi, sayyoralarning orbital harakati, tortishish qonuni va tezlik boshqaruvi.
2. **Kimyo Lab**: 3D Molekula va Atomlar ($H_2O$, $CH_4$, $CO_2$, $O_2$), elektron bulutlari va bog'lar.
3. **Biologiya Lab**: 3D Tirik Hujayra tuzilishi (Yadro, Mitoxondriya, Membrana) va DNK qo'sh spiral modeli.
4. **Texnologiya & Muhandislik Lab**: 3D Sanoat Robot-Manipulyatori, 3D Lazerli chop etish simulyatsiyasi, tishli uzatmalar mexanizmi.

### 5. 📊 24 ta Sinf Reytingi va 686 O'quvchi Tahlili
- 1-A dan 11-B gacha 24 ta sinf bo'yicha real vaqt monitoringi, faol o'quvchilar va sinf yulduzlari statistikasi.

### 6. 🎖️ 8 ta Yutuq va Medallar Tizimi
- *Birinchi Qadam, Snayper (100%), Chaqmoq Tezlik, Laborant, Bosh Muhandis, Qomusiy Aql, Maktab Chempioni, Olimpiada Qahramoni*.

### 7. 🔊 100% Offline Ovoz Effektlari & Speech API
- Brauzerning **Web Audio API** orqali toza sintezlangan tovushlar va **Web Speech API** orqali savollarni ovozli o'qish.

---

## 🚀 GitHub va Vercel-ga Chiqarish

### ⚡ 1-Bosqichli Tezkor Deploy (Vercel):
👉 **[Vercel orqali ishga tushirish](https://vercel.com/new/clone?repository-url=https://github.com/Asror2014/30-maktabtest)**

### 🌐 GitHub Pages orqali Bepul Sayt Qilish:
1. GitHub repozitoriyangizga kiring: `https://github.com/Asror2014/30-maktabtest`
2. **Settings** (Sozlamalar) ➔ Chap menyudan **Pages** bo'limiga o'ting.
3. **Branch** qismida `main` va `/ (root)` ni tanlang va **Save** bosing.
4. 1 daqiqada sizga bepul havola beriladi: `https://asror2014.github.io/30-maktabtest/`

---

## 💻 Mahalliy Kompyuterda Ishga Tushirish

- **1-usul**: `START_SAYT.bat` yoki `START_LOCALHOST.bat` faylini bosing (`http://localhost:8080`).
- **2-usul**: `30-maktabtest.html` faylini istalgan brauzerda to'g'ridan-to'g'ri oching (100% internetsiz ishlaydi).

---

## 📁 Loyiha Strukturasi

```text
├── index.html                # Asosiy veb-ilova (barcha sahifalar, laboratoriyalar, reyting)
├── 30-maktabtest.html        # 100% bitta mustaqil oflayn fayl (CSS va JS ichida jamlangan)
├── 30-maktabtest-loyiha.zip   # Loyihaning to'liq arxiv nusxasi
├── vercel.json               # Vercel sozlamalari (cleanUrls, keshlash, xavfsizlik)
├── .gitignore                # Git-ga kiritilmaydigan fayllar
├── README.md                 # Loyiha hujjatlari va ko'rsatmalar
├── css/
│   ├── style.css             # Asosiy stillar
│   └── master_fix.css        # Yangi modullar, kitobxonlik va mukammal dizayn
└── js/
    ├── app.js                # Asosiy ilova boshqaruvi
    ├── data.js               # 1,756+ rasmiy testlar bazasi
    ├── library.js            # 100 ta kitob va viktorinalar moduli
    ├── sound-and-badges.js   # Ovozlar, medallar va olimpiada
    └── lab-*.js              # 3D laboratoriyalar mantiqi
```

---

## 👨‍🏫 Muallif va Rivojlantiruvchi
- **Tashkilot**: 30-sonli IDUM
- **GitHub**: [@Asror2014](https://github.com/Asror2014)
