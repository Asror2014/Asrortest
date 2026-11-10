/**
 * 30-maktabtest - 3D Laboratoriya Jonli Tushuntirish va Ilmiy Tahlil Tizimi
 * Har bir laboratoriya (Kimyo, Fizika, Astronomiya, Biologiya, Geometriya)
 * uchun o'ng tomondagi maxsus interaktiv tushuntirish paneli
 */

window.LAB_EXPLANATIONS = {
  // ============================================================
  // 1. KIMYO TAJRIBALARI
  // ============================================================
  chemistry: {
    'copper-acid': {
      title: "Mis va sulfat kislota reaksiyasi",
      formula: "Cu + 2H₂SO₄(kons.) ⎯→ CuSO₄ + SO₂↑ + 2H₂O",
      desc: "Mis parchasi sulfat kislota eritmasiga tushganda oksidlanish-qaytarilish reaksiyasi boshlanadi. Idishdagi eritma asta-sekin mis (Cu²⁺) ionlari hisobiga go'zal zangori (ko'k) rangga aylanadi va vodorod/oltingugurt gazi shiddat bilan pufakchalar hosil qilib ajraladi.",
      activeDesc: "🟢 REAKSIYA KETMOQDA: Mis parchasi kislotada erimoqda, eritma quyuq ko'k rangga o'tmoqda va shiddatli gaz pufakchalari yuqoriga ko'tarilmoqda!",
      points: [
        "Idish tubidagi mis bo'lagining erishi",
        "Suyuqlik yuzasiga ko'tarilayotgan gaz pufakchalari",
        "Eritma rangining tiniq holatdan yorqin ko'k rangga o'zgarishi"
      ],
      fact: "Mis sulfat (CuSO₄) xalq tilida 'to'tiyo' deb ataladi va bog'dorchilikda daraxtlarni zararkunanda zamburug'lardan himoya qilishda mashhur vositadir."
    },
    'electrolysis': {
      title: "Suvning elektr toki ta'sirida parchalanishi",
      formula: "2H₂O ⎯(elektr toki)⎯→ 2H₂↑ (katod) + O₂↑ (anod)",
      desc: "Suvdan o'zgarmas elektr toki o'tganda suv molekulalari tarkibiy elementlari bo'lgan vodorod va kislorod gazlariga parchalanadi. Katod (manfiy qutb)da vodorod, anod (musbat qutb)da esa kislorod ajraladi.",
      activeDesc: "🟢 ELEKTROLIZ DAVOM ETMOQDA: Katod va anod elektrodlari atrofida tinimsiz gaz pufakchalari hosil bo'lmoqda. Katodda ajralayotgan vodorod hajmi kisloroddan 2 barobar ko'proq!",
      points: [
        "Katodda vodorod (H₂) pufakchalarining shiddatli ajralishi",
        "Anodda kislorod (O₂) pufakchalarining to'planishi",
        "Hajmlar nisbati aniq 2 : 1 bo'lishi"
      ],
      fact: "Suv elektrolizi orqali olinadigan toza vodorod kelajakning eng ekologik toza va xavfsiz yonilg'isi (yashil vodorod) hisoblanadi."
    },
    'volcano': {
      title: "Kimyoviy vulqon (Kislota-asos reaksiyasi)",
      formula: "NaHCO₃ + CH₃COOH ⎯→ CH₃COONa + H₂O + CO₂↑",
      desc: "Natriy gidrokarbonat (iste'mol sodasi) va sirka kislotasi o'rtasidagi shiddatli neytrallanish reaksiyasi. Reaksiya natijasida ko'p miqdorda karbonat angidrid (CO₂) gazi ko'pik hosil qilib, vulqon otilishi kabi tashqariga otiladi.",
      activeDesc: "🟢 VULQON OTILMOQDA: Gaz ajralishi va qizil ko'pik hosil bo'lishi eng yuqori cho'qqiga chiqdi! Kuchli bosim ostida massa otilib chiqmoqda.",
      points: [
        "Qizil-olovrang ko'pikning konusdan yuqoriga otilishi",
        "Reaksiya natijasida CO₂ gazining shiddatli ajralishi",
        "Harorat o'zgarishi va shishish effekti"
      ],
      fact: "Ushbu reaksiya oshpazlikda pishiriq xamirini g'ovakli va yumshoq qilishda hamda ko'pikli o't o'chirgichlarda keng qo'llaniladi."
    },
    'indicators': {
      title: "Muhit ko'rsatkichlari (Lakmus, Fenolftalein)",
      formula: "pH = -lg[H⁺] (Kislotali < 7 | Neytral = 7 | Ishqoriy > 7)",
      desc: "Turli eritmalar kislotali, neytral yoki ishqoriy muhitga egaligini indikatorlar rangi orqali aniqlash tajribasi. Lakmus kislotada qizil, ishqorda ko'k rang beradi. Fenolftalein esa ishqorda yorqin malina rangiga kiradi.",
      activeDesc: "🟢 INDIKATOR TA'SIRI: Eritmaga tomizilgan reagent muhitning vodorod ko'rsatkichini (pH) darhol rang o'zgarishi orqali ko'rsatmoqda!",
      points: [
        "Eritma rangining bir necha soniyada o'zgarishi",
        "pH shkalasi bo'yicha muhitning aniqlanishi",
        "Neytrallashganda rangning qayta o'zgarishi"
      ],
      fact: "Inson qonining pH darajasi juda qat'iy (7.35–7.45) bo'lib, uning ozgina o'zgarishi ham organizm uchun jiddiy xavf tug'diradi."
    },
    'crystal': {
      title: "To'yingan eritmada kristallanish jarayoni",
      formula: "Tuz (erigan) ⎯(sovush/bug'lanish)⎯→ Kristall panjara",
      desc: "Issiq to'yingan tuz eritmasi sovuganda yoki suyuqlik bug'langanda, ortiqcha tuz molekulalari qat'iy geometrik tartibda birlashib, qirrali go'zal kristall panjaralar hosil qiladi.",
      activeDesc: "🟢 KRISTALL O'SMOQDA: Eritma markazida kristall karkasi qatlam-qatlam bo'lib o'smoqda va qirralari yorug'likda yaltiramoqda!",
      points: [
        "Kristallning qirrali geometrik shakli",
        "Yorug'likning kristall qirralarida sinishi",
        "Sekin-asta hajmning kengayishi"
      ],
      fact: "Tabiatdagi barcha qimmatbaho toshlar (olmos, zumrad, yoqut) yer qa'rida millionlab yillar davomida mana shunday kristallanish orqali hosil bo'lgan."
    }
  },

  // ============================================================
  // 2. FIZIKA TAJRIBALARI
  // ============================================================
  physics: {
    'free-fall': {
      title: "Jismning erkin tushishi (Gravitatsiya)",
      formula: "h = ½gt² | v = gt | g ≈ 9.8 m/s²",
      desc: "Jism faqat Yerning tortish kuchi ta'sirida pastga qarab tushadi. Nyuton qonuniga ko'ra, havosiz fazoda jism massasidan qat'i nazar bir xil tezlanish (g = 9.8 m/s²) bilan yerga tushadi.",
      activeDesc: "🟢 TUSHISH JARAYONI: Jism pastga tezlanuvchan harakat qilmoqda. Har bir millisekundda uning kinetik energiyasi ortib, potensial energiyasi kamaymoqda!",
      points: [
        "Tushish vaqtining balandlik kvadrat ildiziga proporsionalligi",
        "Tezlikning tushish davomida chiziqli ortib borishi",
        "Massa tushish tezligiga ta'sir qilmasligi"
      ],
      fact: "Galiley Piza minorasidan har xil og'irlikdagi sharlarni tashlab, ularning bir vaqtda tushishini birinchi bo'lib isbotlagan."
    },
    'spring': {
      title: "Prujinali tebranishlar (Guk qonuni)",
      formula: "F = -k·x | T = 2π√(m / k)",
      desc: "Elastiklik kuchi ta'sirida yuz beradigan garmonik tebranishlar. Prujina qancha qattiq (k) bo'lsa, tebranishlar shuncha tezlashadi. Massa (m) ortsa, davr (T) uzayadi.",
      activeDesc: "🟢 TEBRANISH KETMOQDA: Prujina cho'zilib-qisqarmoqda. Potensial va kinetik energiya bir-biriga doimiy aylanmoqda.",
      points: [
        "Muvozanat nuqtasida tezlik maksimal bo'lishi",
        "Eng chekka nuqtalarda tezlik nolga teng bo'lishi",
        "Energiya saqlanish qonunining namoyon bo'lishi"
      ],
      fact: "Avtomobil amortizatorlari va mexanik soatlarning prujina tizimlari aynan shu qonuniyat asosida ishlaydi."
    },
    'pendulum': {
      title: "Ipga osilgan yukning tebranishi (Matematik mayatnik)",
      formula: "T = 2π√(L / g)",
      desc: "Uzunligi L bo'lgan ipga osilgan yukning kichik burchaklardagi tebranishi. E'tibor bering: mayatnik tebranish davri yukning massasiga bog'liq emas, faqat ip uzunligiga bog'liq!",
      activeDesc: "🟢 MAYATNIK HARAKATDA: Mayatnik o'z davriy tebranishini davom ettirmoqda. Amplituda va chastota qat'iy saqlanmoqda.",
      points: [
        "Ip uzunligi 4 barobar ortsa, tebranish davri 2 barobar uzayadi",
        "Massa o'zgarganda tebranish vaqti o'zgarmasligi",
        "Og'irlik kuchi va taranglik kuchining natijasi"
      ],
      fact: "Fransuz fizigi Jan Fuko 1851-yilda ulkan mayatnik yordamida Yerning o'z o'qi atrofida aylanishini ko'rgazmali isbotlab bergan."
    },
    'archimedes': {
      title: "Suyuqlikdagi itaruvchi kuch (Arximed qonuni)",
      formula: "F_A = ρ_suyuqlik · g · V_botgan",
      desc: "Suyuqlikka botirilgan jismga uning siqib chiqargan suyuqligi og'irligiga teng bo'lgan yuqoriga yo'nalgan itaruvchi kuch ta'sir qiladi. Agar jism zichligi suyuqlikdan kichik bo'lsa, u suzadi.",
      activeDesc: "🟢 ITARUVCHI KUCH TA'SIRI: Suyuqlik idishga botirilayotgan jismni yuqoriga itarmoqda. Siqib chiqarilgan suv hajmi o'lchanmoqda.",
      points: [
        "Jism to'liq botganda itaruvchi kuch maksimalga yetishi",
        "Jismning suyuqlikdagi og'irligi kamayishi",
        "Suzish sharti: ρ_jism < ρ_suv"
      ],
      fact: "O'n minglab tonna og'irlikdagi ulkan po'lat kemalarning cho'kmasdan suv yuzida suzishi aynan Arximed qonuni tufaylidir."
    },
    'optics': {
      title: "Yorug'lik nurlarining sinishi (Snellius qonuni)",
      formula: "n₁ · sin(α) = n₂ · sin(β)",
      desc: "Yorug'lik nuri bir muhitdan (havodan) ikkinchi zichroq muhitga (suv yoki shishaga) o'tganda tarqalish tezligi o'zgaradi va nur o'z yo'nalishini sindiradi.",
      activeDesc: "🟢 NUR TARQALMOQDA: Tushish burchagi va sinish burchagi o'rtasidagi optik qonuniyat ko'rinmoqda.",
      points: [
        "Zichroq muhitga o'tganda nurning perpendikulyarga yaqinlashishi",
        "To'la ichki qaytish hodisasining chegarasi",
        "Muhit sindirish ko'rsatkichining ta'siri"
      ],
      fact: "Kamalak hosil bo'lishi, ko'zoynak linzalari va yuqori tezlikdagi optik tolali internet kabellari yorug'lik sinishi asosida ishlaydi."
    },
    'ohm': {
      title: "Zanjir qismi uchun Om qonuni",
      formula: "I = U / R | Quvvat: P = U · I",
      desc: "Elektr zanjiridagi tok kuchi (I) kuchlanishga (U) to'g'ri proporsional va o'tkazgich qarshiligiga (R) teskari proporsionaldir. Qarshilik ortsa, tok kamayadi.",
      activeDesc: "🟢 TOK OQMOQDA: Elektronlar yo'naltirilgan harakati ampermetr va voltmetr ko'rsatkichlarida aks etmoqda.",
      points: [
        "Kuchlanish oshirilganda tok kuchining chiziqli o'sishi",
        "Qarshilik oshirilganda tok kuchining kamayishi",
        "Elektr energiyasining issiqlikka aylanishi"
      ],
      fact: "Georg Om bu qonunni kashf qilganda zamondoshlari unga ishonishmagan, ammo bugungi butun zamonaviy elektrotexnika shu qonunga tayanadi."
    }
  },

  // ============================================================
  // 3. ASTRONOMIYA TAJRIBALARI
  // ============================================================
  astronomy: {
    'solar-system': {
      title: "Quyosh va 8 ta asosiy sayyora",
      formula: "T² / R³ = const (Keplerning 3-qonuni)",
      desc: "Quyosh atrofida Merkuriy, Venera, Yer, Mars, Yupiter, Saturn, Uran va Neptun aylanadi. Quyoshga eng yaqin Merkuriy bor-yo'g'i 88 kunda aylanib chiqsa, eng uzoqdagi Neptunga 165 yil kerak bo'ladi.",
      activeDesc: "🟢 SAYYORALAR HARAKATDA: Sayyoralar real nisbatdagi burchak tezliklari bilan orbitalari bo'ylab aylanmoqda.",
      points: [
        "Ichki sayyoralarning tez, tashqi gigantlarning sokin aylanishi",
        "Saturn halqalari va sayyoralarning Quyoshdan masofasi",
        "Markaziy tortishish kuchi va orbital barqarorlik"
      ],
      fact: "Quyosh massasi butun Quyosh tizimidagi jami moddalarning 99.86% qismini tashkil etadi."
    },
    'moon-phases': {
      title: "Oyning Yer atrofida aylanishi va fazalari",
      formula: "Sinodik oy davri = 29.5 kun",
      desc: "Oy o'zidan yorug'lik chiqarmaydi, u faqat Quyosh nurini qaytaradi. Yer, Oy va Quyoshning fazoviy holati o'zgarishi natijasida biz yangi oy, yarim oy va to'lin oyni ko'ramiz.",
      activeDesc: "🟢 OY ORBITADA HARAKATLANMOQDA: Quyosh yoritayotgan tomon va Yerdan ko'rinadigan qism fazasi o'zgarmoqda.",
      points: [
        "Yangi oy (Oy qorong'u) dan To'lin oy (to'liq yorug')gacha davr",
        "Oyning doim bir tomoni Yerga qarab turishi (sinxron aylanish)",
        "Quyosh va Oy tutilishlari mexanizmi"
      ],
      fact: "Dengiz va okeanlardagi suv ko'tarilishi va qaytishi aynan Oyning gravitatsiya kuchi ta'sirida yuz beradi."
    },
    'planetary-orbit': {
      title: "Keplerning 1-qonuni: Elliptik harakat",
      formula: "r = p / (1 + e·cos θ)",
      desc: "Barcha sayyoralar Quyosh atrofida aylanma emas, balki ellips shaklidagi orbitalar bo'ylab harakatlanadi. Quyosh bu ellipsning fokuslaridan birida joylashgan.",
      activeDesc: "🟢 ELLIPTIK TEZLIK: Sayyora Quyoshga yaqinlashganda (perigeliy) tezlashadi, uzoqlashganda (afeliy) sekinlashadi.",
      points: [
        "Tezlikning masofaga bog'liq ravishda o'zgarishi",
        "Radius-vektorning teng vaqtlarda teng yuzalarni chizishi (Kepler 2-qonuni)",
        "Gravitatsion tortishish maydoni ta'siri"
      ],
      fact: "Elliptik orbitalar tufayli Yerdan Quyoshgacha bo'lgan masofa yil davomida 147 milliondan 152 million kilometrgacha o'zgarib turadi."
    },
    'sun-earth': {
      title: "Yer o'qining og'ish burchagi va fasllar",
      formula: "Yer o'qi og'ishi = 23.5° | Yil davri = 365.25 kun",
      desc: "Yer o'qining 23.5 gradusga og'ganligi tufayli yil davomida Quyosh nurlari Yer sirtiga turli burchak ostida tushadi. Shu sababli sayyoramizda Bahor, Yoz, Kuz va Qish fasllari almashadi.",
      activeDesc: "🟢 SUTKALIK VA YILLIK AYLANISH: Yer o'z o'qi atrofida (kun/tun) va Quyosh atrofida (fasllar) aylanmoqda.",
      points: [
        "Quyoshga qaragan yarimsharda yoz, teskari yarimsharda qish bo'lishi",
        "Qutbiy tun va qutbiy kun hodisalari",
        "Kun va tun tengligi (21-mart va 23-sentabr)"
      ],
      fact: "Agar Yer o'qi og'maganida edi, fasllar umuman bo'lmasdi va har bir hududda har kuni bir xil ob-havo hukm surardi."
    }
  },

  // ============================================================
  // 4. BIOLOGIYA TAJRIBALARI
  // ============================================================
  biology: {
    'human-lungs': {
      title: "O'pka va Nafas Olish Tizimi",
      formula: "Nafas tezligi: 16-20 marta/daqiqada | Oâ‚‚ (kislorod) âž” Qon âž” COâ‚‚ (gaz)",
      desc: "Inson nafas olganda diafragma pastga tushadi, ko'krak qafasi kengayadi va havo traxeya orqali o'pka bronxlariga kiradi. Alveolalarda kislorod qonga o'tadi, karbonat angidrid esa nafas chiqarilganda tashqariga chiqariladi.",
      activeDesc: "ðŸ« O'PKA NAFAS OLMOQDA: Diafragma va o'pka to'qimalari ritmik kengayib-toraymoqda, havo oqimi alveolalarga yetib bormoqda!",
      points: [
        "Traxeya va asosiy bronxlar (Havo o'tkazuvchi yo'llar)",
        "O'ng va chap o'pka bo'laklari (O'pka to'qimalari)",
        "Diafragma mushagining ko'tarilib-tushishi",
        "Alveolalar orqali gaz almashinuvi jarayoni"
      ],
      fact: "Ikkala o'pkadagi barcha mayda alveolalar yuzasini yoyib chiqsa, uning umumiy maydoni butun boshli tennis korti (taxminan 75-100 mÂ²) hajmiga teng bo'ladi!"
    },
    'heart': {
      title: "3D Urib turuvchi yurak anatomiyasi",
      formula: "Puls: 60-80 zarba/daq | Qon bosimi: 120/80 mm sim.ust.",
      desc: "Yurak inson tanasining tinimsiz ishlaydigan mushakli nasosidir. U 4 ta kameradan (2 ta bo'lmacha va 2 ta qorincha) iborat. Chap qorincha kislorodga boy qonni butun tanaga (katta qon aylanish doirasiga) haydaydi.",
      activeDesc: "🟢 YURAK URMOQDA: Sistola (qisqarish) va Diastola (bo'shashish) fazalari almashmoqda. Qon tomirlari bo'ylab kislorodli qon yetkazilmoqda.",
      points: [
        "Mushaklar qisqarishi (puls tezligini slayderda boshqarish mumkin)",
        "Aorta va o'pka arteriyalariga qon chiqishi",
        "Klapanlarning bir tomonga ochilib-yopilishi"
      ],
      fact: "Inson yuragi bir kunda o'rtacha 100,000 marta uradi va hayot davomida 200 million litrdan ortiq qon haydaydi!"
    },
    'dna': {
      title: "DNK molekulasi va irsiy axborot kodi",
      formula: "A = T (2 ta vodorod bog') | G ≡ C (3 ta vodorod bog')",
      desc: "DNK (Dezoksiribonuklein kislota) tirik organizmlarning butun genetik dasturini saqlaydi. U ikkita spiraldan iborat bo'lib, komplementarlik qoidasiga muvofiq Adenin Timin bilan, Guanin Sitozin bilan bog'lanadi.",
      activeDesc: "🟢 DNK SPIRALI: Qo'sh spiral fazoda aylanmoqda, genetik kod juftliklari (A-T va G-C) aniq ko'rinmoqda.",
      points: [
        "Shakar-fosfat karkasi va nukleotidlar zanjiri",
        "Spirallarning bir-birini aniq to'ldirishi",
        "Irsiy xususiyatlarning kodlanishi"
      ],
      fact: "Bitta inson hujayrasidagi DNK yozib yoyilsa, uzunligi qariyb 2 metrni tashkil qiladi!"
    },
    'cell': {
      title: "Tiriklikning asosiy birligi — Hujayra",
      formula: "Tarkibi: Yadro + Sitoplazma + Membrana + Organoidlar",
      desc: "Hujayra barcha tirik organizmlarning tuzilish birligidir. Yadroda irsiy axborot saqlanadi, mitoxondriyalar energiya (ATF) ishlab chiqaradi, ribosomalar oqsil sintezlaydi.",
      activeDesc: "🟢 HUJAYRA ORGANOIDLARI: Membrana ichida sitoplazma va asosiy organoidlarning harakati va vazifalari.",
      points: [
        "Yadro va yadrocha joylashuvi",
        "Mitoxondriyalar va endoplazmatik to'r",
        "Hujayra qobig'i va moddalar almashinuvi"
      ],
      fact: "Inson tanasi taxminan 30 trilliondan ortiq tirik hujayralardan tashkil topgan."
    },
    'skeleton': {
      title: "Harakat va tayanch tizimi (Inson skeleti)",
      formula: "Katta odamda: 206 ta suyak | Chaqaloqda: ~270 ta suyak",
      desc: "Skelet inson tanasiga shakl beradi, harakatlanish imkonini yaratadi va ichki a'zolarni (miya, yurak, o'pka) himoya qiladi. Suyaklar bo'g'inlar va boylamlar orqali o'zaro tutashgan.",
      activeDesc: "🟢 SKELET ANATOMIYASI: Kalla suyagi, umurtqa pog'onasi, qovurg'alar va qo'l-oyoq suyaklari.",
      points: [
        "Umurtqa pog'onasining S-simon elastik egilishi",
        "Bo'g'inlarning harakatchanlik mexanizmi",
        "Suyak iligi va qon hosil qilish vazifasi"
      ],
      fact: "Inson tanasidagi eng uzun va baquvvat suyak son suyagi bo'lib, u kishi vaznidan 30 barobar og'irroq yukni ko'tara oladi."
    },
    'brain': {
      title: "Oliy asab faoliyati va tafakkur markazi (Bosh miya)",
      formula: "Tarkibi: ~86 milliard neyron | ~100 trillion sinaps",
      desc: "Bosh miya insonning barcha fikrlari, his-tuyg'ulari, xotirasi, nutqi va harakatlarini boshqaruvchi markaziy kompyuterdir. O'ng va chap yarim sharlar qadoqsimon tana orqali bog'langan.",
      activeDesc: "🟢 MIYA PO'STLOG'I: Bosh miya yarim sharlari, miyacha (muvozanat) va miya ustuni (nafas/yurak boshqaruvi).",
      points: [
        "Miya po'stlog'idagi burmalar (egat va pushtalar)",
        "Miyacha va orqa miya bilan tutashuvi",
        "Elektr signallari (neyronlar impulsi) o'tishi"
      ],
      fact: "Inson miyasi tana vaznining atigi 2% qismini tashkil etsada, butun organizm iste'mol qiladigan kislorod va energiyaning 20% dan ortig'ini sarflaydi."
    }
  },

  // ============================================================
  // 5. GEOMETRIYA SHAKLLARI
  // ============================================================
  geometry: {
    'cube': {
      title: "To'g'ri burchakli Parallelepiped va Kub",
      formula: "Hajm: V = a · b · c | To'la sirt: S = 2(ab + bc + ac)",
      desc: "Fazoviy 3D jism. Barcha yoqlari to'g'ri to'rtburchaklardan iborat. 8 ta uchi, 12 ta qirrasi va 6 ta yog'i bor. Barcha qirralari teng bo'lsa (a=b=c), kub hosil bo'ladi (V = a³).",
      activeDesc: "🟢 O'LCHAMLAR O'ZGARMOQDA: Slayderlar yordamida uzunlik, kenglik va balandlik o'zgarganda hajm va sirt real vaqtda qayta hisoblanmoqda!",
      points: [
        "Qirralar nisbatining hajmga ta'siri",
        "Fazoviy diagonal: d = √(a² + b² + c²)",
        "Yoqlar yuzasining hisoblanishi"
      ],
      fact: "Kub tabiatdagi eng mustahkam simmetrik shakllardan biri bo'lib, osh tuzi (NaCl) kristallari kubik shaklida o'sadi."
    },
    'pyramid': {
      title: "Muntazam to'rtburchakli piramida",
      formula: "Hajm: V = ⅓ · S_asos · h | S_asos = a²",
      desc: "Asosi kvadrat bo'lib, yon yoqlari umumiy uchga ega bo'lgan 4 ta teng yonli uchburchakdan iborat ko'pyoq. Piramida hajmi xuddi shunday asos va balandlikka ega prizma hajmining roppa-rosa uchdan bir qismiga tengdir.",
      activeDesc: "🟢 PIRAMIDA PARAMETRLARI: Balandlik (h) va asos tomoni (a) o'zgarishi piramidaning qiyaligi va fazoviy hajmiga ta'sir qilmoqda.",
      points: [
        "Uchidan asos markaziga tushirilgan balandlik (h)",
        "Yon yoq balandligi — apofema (l)",
        "Yon sirt yuzasi: S_yon = ½ · P_asos · l"
      ],
      fact: "Qadimgi Misrdagi Xeops piramidasi deyarli 4000 yil davomida insoniyat tomonidan qurilgan Yer yuzidagi eng baland inshoot bo'lib turgan."
    },
    'cylinder': {
      title: "Aylanma jism — Silindr",
      formula: "Hajm: V = π · R² · H | Yon sirt: S_yon = 2π·R·H",
      desc: "To'g'ri to'rtburchakning bir tomoni atrofida aylanishidan hosil bo'lgan jism. Ikkita parallel doiraviy asos va yon sirtdan iborat.",
      activeDesc: "🟢 SILINDR VA RADIUS: Radius (R) yoki balandlik (H) o'zgarganda silindr sig'imi (hajmi) keskin ortadi.",
      points: [
        "Radius 2 barobar ortsa, hajm 4 barobar kattalashadi (R² bog'liqlik)",
        "Yon sirtining yoyilmasi to'g'ri to'rtburchakdan iborat",
        "To'la sirt: S_to'la = 2πR(R + H)"
      ],
      fact: "Trubalar, bochkalar, idishlar va quvurlar nega silindr shaklida yasaladi? Chunki silindr eng kam material sarflab, eng katta hajmni sig'diradi."
    },
    'cone': {
      title: "Aylanma jism — Konus",
      formula: "Hajm: V = ⅓ · π · R² · H | Yon sirt: S_yon = π · R · L",
      desc: "To'g'ri burchakli uchburchakning katetlaridan biri atrofida aylanishidan hosil bo'ladi. Asosi doira bo'lib, uchi konus tepasida joylashgan.",
      activeDesc: "🟢 KONUS STEREOMETRIYASI: Yasovchi (L), balandlik (H) va radius (R) o'zaro Pifagor teoremasi orqali bog'langan (L² = R² + H²).",
      points: [
        "Konus hajmi silindr hajmining ⅓ qismini tashkil qiladi",
        "Yasovchi to'g'ri chiziqning aylanish burchagi",
        "Yon sirti yoyilmasi doiraviy sektor bo'ladi"
      ],
      fact: "Konus shakli aerodinamikada juda muhim — raketalar va samolyotlarning burun qismi havoni yorib o'tish uchun aynan konus shaklida yasaladi."
    },
    'sphere': {
      title: "Fazoviy Shar va Sfera",
      formula: "Hajm: V = ⁴/₃ · π · R³ | Sirt yuzi: S = 4π · R²",
      desc: "Yarim doiraning o'z diametri atrofida aylanishidan hosil bo'ladi. Fazoda markazdan bir xil masofada (R) joylashgan barcha nuqtalar to'plamidir. Fazodagi eng mukammal simmetrik shakl.",
      activeDesc: "🟢 SHAR RADIUSI: Radius (R) o'zgarganda hajm kubik darajada (R³) juda tez kengayadi.",
      points: [
        "Berilgan sirt yuzasi uchun eng maksimal hajmga ega shakl",
        "Har qanday kesimining aylana bo'lishi",
        "Barcha yo'nalishlarda to'liq izotropik simmetriya"
      ],
      fact: "Nega sayyoralar, yulduzlar va sovun pufakchalari shar shaklida bo'ladi? Chunki tortishish kuchi va sirt taranglik kuchi moddani eng kam energiyali shar holatiga keltiradi."
    }
  },

  // ============================================================
  // 6. TEXNOLOGIYA VA MUHANDISLIK TAJRIBALARI
  // ============================================================
  // ============================================================
  // 7. GEOGRAFIYA VA YER TUZILISHI TAJRIBALARI
  // ============================================================
  geography: {
    'earth-layers': {
      title: "Yerning Ichki Qatlamlari (Litosfera, Mantiya, Yadro)",
      formula: "R_yer â‰ˆ 6371 km | Yadro harorati: T â‰ˆ 5000-6000Â°C | Bosim: P â‰ˆ 3.6 mln atm",
      desc: "Sayyoramiz bir necha konsentrik qatlamlardan iborat. Eng yupqa tashqi qatlam - Yer qobig'i (5-70 km). Uning ostida qovushqoq mantiya (2900 km gacha), suyuq tashqi yadro (2200 km) va og'ir temir-nikelli ichki qattiq yadro (1220 km) joylashgan.",
      activeDesc: "ðŸŒ 3D YER QATLAMLARI KO'Z OLDINGIZDA: Sferaning chorak qismi ochiq kesimda ko'rinib turibdi. Slider orqali qatlamlarni ajratib ko'rishingiz mumkin!",
      points: [
        "Yer qobig'i (Crust) - qalinligi 5-70 km, biz yashaydigan tog' va okeanlar",
        "Mantiya (Mantle) - 2900 km gacha cho'zilgan, magma va konveksiya harakatlari",
        "Tashqi yadro (Outer core) - suyuq erigan temir va nikel, Yer magnit maydonini yaratadi",
        "Ichki yadro (Inner core) - o'ta yuqori bosim tufayli qattiq metall sfera (6000Â°C)"
      ],
      fact: "Yerning markazidagi harorat (taxminan 6000Â°C) Quyosh sirtidagi harorat bilan deyarli tengdir!"
    },
    'volcano': {
      title: "Vulqon Otilishi va Litosfera Plitalari",
      formula: "Litosfera plitalari tezligi: v â‰ˆ 2-10 sm/yil | Magma bosimi: P = ÏÂ·gÂ·h",
      desc: "Litosfera plitalarining o'zaro to'qnashuvi yoki ajralishi natijasida Yer ostidagi magma yuqori bosim ostida yuqoriga intiladi. Magma kamerasidan vulqon trubkasi orqali kraterdan lava, qizigan kul va gazlar shiddat bilan otilib chiqadi.",
      activeDesc: "ðŸŒ‹ VULQON OTILMOQDA: Magma kamerasidan yuqoriga qizil lava oqimlari va vulqon kullari otilmoqda! Yon tomonlarda litosfera plitalarining surilishi ko'rsatilgan.",
      points: [
        "Yer osti magma kamerasi (Magma reservoir) - qaynoq suyuq tog' jinsi",
        "Markaziy vulqon kanali va krater (Vent & Crater)",
        "Yonbag'irlardan oqib tushuvchi lava daryolari",
        "Litosfera plitalarining o'zaro to'qnashuv zonalari (Subduksiya)"
      ],
      fact: "Tinch okeani atrofidagi 'Olovli halqa' (Ring of Fire) zonasida dunyodagi harakatdagi vulqonlarning 75% dan ortig'i joylashgan."
    },
    'water-cycle': {
      title: "Suvning Tabiatda Aylanishi (Gidrologik sikl)",
      formula: "Bug'lanish (Evaporation) âž” Kondensatsiya (Clouds) âž” Yog'in (Precipitation) âž” Oqim (Runoff)",
      desc: "Quyosh energiyasi ta'sirida okean, dengiz va ko'llardagi suv bug'lanib yuqoriga ko'tariladi. Sovuq balandlikda bug'lar quyuqlashib bulutlarni hosil qiladi. Bulutlar to'yingach, yomg'ir va qor ko'rinishida yerga yog'adi va daryolar orqali yana okeanga qaytadi.",
      activeDesc: "ðŸ’§ SUV SIKLI JONLI HARAKATDA: Okeandan bug'lanayotgan zarrachalar osmonga ko'tarilib, tog'lar ustida yomg'irga aylanmoqda va daryo bo'ylab yana okeanga oqib tushmoqda!",
      points: [
        "Bug'lanish (Evaporation) - Quyosh nuri suvni bug'ga aylantiradi",
        "Kondensatsiya (Condensation) - Havo soviydi va mayda tomchilardan bulutlar shakllanadi",
        "Yog'in (Precipitation) - Yomg'ir, do'l va qor yog'ishi",
        "Yerusti va yerosti oqimi - Daryolar orqali yana okeanga qaytish"
      ],
      fact: "Yerdagi suvning 97% dan ortig'i sho'r okean suvlari bo'lib, inson ichishi mumkin bo'lgan chuchuk suv atigi 2.5% ni tashkil qiladi va uning katta qismi muzliklarda saqlanadi."
    },
    'uzbekistan-relief': {
      title: "O'zbekiston Relyefi va 3D Landshafti",
      formula: "Eng baland nuqta: Hazrat Sulton (4643 m) | Eng past nuqta: Mingbuloq (-12.8 m)",
      desc: "O'zbekiston hududi relyefi sharqdan g'arbga tomon pasayib boradi. Sharqiy va janubi-sharqiy qismini baland Tyanshan va Pomir-Oloy tog' tizmalari, g'arbiy va shimoli-g'arbiy qismini esa ulkan Qizilqum cho'li va Turon pasttekisligi egallaydi.",
      activeDesc: "ðŸ”ï¸ 3D O'ZBEKISTON HUDUDI: Sharqda qorli cho'qqilar (Hazrat Sulton, Chatqol), markazda Qizilqum, daryolar (Amudaryo, Sirdaryo) va Orol dengizi havzasi namoyon bo'lmoqda!",
      points: [
        "Sharqiy baland tog'li mintaqa (Hisor, Tyanshan, Farg'ona vodiysi atrofi)",
        "Qizilqum cho'li - ulkan qum tepalari va platolar",
        "Amudaryo va Sirdaryo - O'zbekistonning ikki buyuk daryosi",
        "Orol dengizi havzasi va Ustyurt platosi"
      ],
      fact: "O'zbekiston dunyoda dengizga chiqish uchun kamida ikkita davlat chegarasini kesib o'tish talab qilinadigan (Double landlocked) ikki davlatdan biridir (ikkinchisi Lixtenshteyn)."
    }
  },

  // ============================================================
  // 8. KOMPYUTER VA IT ARXITEKTURASI TAJRIBALARI
  // ============================================================
  computer: {
    'pc-inside': {
      title: "Kompyuter Tizim Bloki Ichi (PC Hardware)",
      formula: "CPU (GGS) + RAM (GB) + GPU (VRAM) + SSD (MB/s) | Von Neumann arxitekturasi",
      desc: "Zamonaviy shaxsiy kompyuterning barcha asosiy tugunlari ko'rsatilgan. Motherboard (ona plata) ustida protsessor (CPU) hisoblaydi, RAM dasturlar uchun tezkor ishchi maydon beradi, GPU 3D tasvirlarni chizadi, SSD esa barcha fayllarni uzoq muddat saqlaydi.",
      activeDesc: "ðŸ–¥ï¸ KOMPYUTER ISHLAMOQDA: Ventilyatorlar (CPU va GPU kulerlari) aylanmoqda, RGB yoritish tizimi ishlamoqda. Komponent ustiga bosib, uning vazifasini bilib oling!",
      points: [
        "CPU (Protsessor) - Hisoblash yuragi, sovutgich va radiator bilan ta'minlangan",
        "RAM (DDR5 Operativ xotira) - O'ta tezkor ma'lumotlar buferi",
        "GPU (Videokarta) - 3D poligonlar va grafikalarni sekundiga 100+ kadrda chizadi",
        "NVMe M.2 SSD - Sekundiga 5000+ MB tezlikda o'quvchi doimiy xotira",
        "PSU (Quvvat bloki) - Butun tizimni barqaror elektr energiyasi bilan ta'minlaydi"
      ],
      fact: "Zamonaviy protsessor mikrosxemasida inson sochidan minglab marta ingichka bo'lgan 10 milliarddan ortiq mikroskopik tranzistorlar joylashgan!"
    },
    'logic-gates': {
      title: "Mantiqiy Elementlar (Logic Gates 3D)",
      formula: "AND: Y = A Â· B | OR: Y = A + B | NOT: Y = Â¬A | XOR: Y = A âŠ• B",
      desc: "Barcha kompyuterlar, protsessorlar va smartfonlar mantiqiy elementlar (darvozalar) asosida ishlaydi. 0 (past kuchlanish, 0V) va 1 (yuqori kuchlanish, 5V) signallari mantiqiy amallar yordamida qayta ishlanadi va kompyuter hisob-kitoblarini hosil qiladi.",
      activeDesc: "âš¡ SXEMA FAOL: Kirish kalitlarini (A va B) bosib holatni o'zgartiring (0 yoki 1). Chiqish lampochkasi (LED) mantiqiy shartga ko'ra yonadi yoki o'chadi!",
      points: [
        "AND (VA) - Faqat ikkala kirish ham 1 bo'lganda chiqish 1 bo'ladi",
        "OR (YOKI) - Hech bo'lmaganda bitta kirish 1 bo'lsa, chiqish 1 bo'ladi",
        "NOT (INKOR) - Kirishni teskarisiga aylantiradi (0 âž” 1, 1 âž” 0)",
        "XOR (Istisno YOKI) - Kirishlar har xil bo'lgandagina chiqish 1 bo'ladi"
      ],
      fact: "Kvant kompyuterlari an'anaviy 0 va 1 (bitlar) o'rniga superpozitsiya holatidagi kubitlar (qubits) bilan ishlaydi, bu ularga milliardlab hisoblarni parallel bajarish imkonini beradi."
    },
    'network-flow': {
      title: "Internet va Ma'lumotlar Oqimi (Computer Networks)",
      formula: "TCP/IP protokoli | Paket uzatish: Paket = Sarlavha (IP) + Ma'lumot + Tekshiruv",
      desc: "Internetda har qanday veb-sayt, rasm yoki video mayda bo'lakchalarga - ma'lumotlar paketlariga bo'linadi. Router va serverlar orqali har bir paket o'z manziliga boradi va foydalanuvchi kompyuterida qayta butun faylga birlashtiriladi.",
      activeDesc: "ðŸŒ TARMOQDA TRAFIK OQIMI: Server, Bulut, Router va Mijozlar o'rtasida ma'lumotlar paketlari (yashil sharchalar) yugurmoqda!",
      points: [
        "Server - Veb-saytlar va ma'lumotlar bazasini saqlovchi markaziy kompyuter",
        "Router (Marshrutizator) - Paketlarni eng optimal yo'l orqali yo'naltiruvchi qurilma",
        "Wi-Fi / Ethernet - Qurilmalarni tarmoqqa simli va simsiz bog'lovchi kanal",
        "Client (Mijoz) - Maktab kompyuteri, noutbuk yoki smartfon"
      ],
      fact: "Dunyo bo'ylab har sekundda internet orqali 100 000 gigabaytdan ortiq ma'lumot uzatiladi va uning asosiy qismi okeanlar tubiga yotqizilgan suvosti optik kabellari orqali o'tadi."
    }
  },
  technology: {
    'robot-arm': {
      title: "Sanoat Roboti Qo'li (4-DoF Manipulator)",
      formula: "Koordinatalar: (X, Y, Z) | Erkinlik darajasi: 4-DoF | Tork: M = F × r",
      desc: "Zamonaviy avtomatlashtirilgan zavodlarda qo'llaniladigan ko'p bo'g'imli robot qo'li. Baza (burilish), yelka va bilak servomotorlari orqali harakatlanadi. Qisqich (gripper) yuklarni ushlab, kerakli koordinataga aniq ko'chiradi.",
      activeDesc: "🤖 ROBOT HARAKATLANMOQDA: Servomotorlar dasturlangan burchaklar bo'yicha bo'g'imlarni burmoqda, qisqich yukni ushlab koordinata bo'ylab ko'chirmoqda!",
      points: [
        "Baza aylanish burchagi (-180° dan +180° gacha)",
        "Yelka va bilak bo'g'imlarining fazoviy koordinatasi",
        "Pnevmatik/mexanik qisqich orqali yukni ushlash",
        "Avtomatlashtirilgan saralash va yig'ish sikli"
      ],
      fact: "Zamonaviy avtomobil zavodlarida (masalan, UzAuto Motors) payvandlash va bo'yash ishlarining 90% dan ortig'ini aynan mana shunday sanoat robot-qo'llari bajaradi."
    },
    'gears': {
      title: "Tishli G'ildiraklar va Reduktor (Gear Transmission)",
      formula: "Uzatish nisbati: i = z₂ / z₁ = n₁ / n₂ | Aylanuvchi moment: M₂ = M₁ × i",
      desc: "Mexanik energiyani bitta valdan ikkinchisiga uzatish va aylanish tezligini o'zgartirish mexanizmi. Kichik tishli g'ildirak (z₁=12) katta g'ildirakni (z₃=28) aylantirganda, tezlik kamayadi, lekin quvvat (aylanuvchi moment) keskin ortadi.",
      activeDesc: "⚙️ TISHLI UZATMA ISHLAMOQDA: G'ildiraklar tishlashib teskari yo'nalishlarda aylanmoqda. Uzatish nisbatiga qarab moment va tezlik o'zgarmoqda!",
      points: [
        "Tishlar soni nisbati (z₁ : z₂ : z₃)",
        "Aylanish yo'nalishlarining teskari bo'lishi",
        "Tezlik kamayganda aylanuvchi momentning oshishi (Oltin mexanika qoidasi)"
      ],
      fact: "Mexanikaning 'Oltin qoidasi': kuchdan necha marta yutsak, masofada (yoki tezlikda) shuncha marta yutqazamiz."
    },
    'engine': {
      title: "4 Taktli Ichki Yonuv Dvigateli (4-Stroke Engine)",
      formula: "Faza: 720° aylanish (4 takt) | FIK: η = (Q₁ - Q₂) / Q₁ ≈ 35-40%",
      desc: "Silindr ichidagi porshenning ilgarilama-qaytma harakatini tirsakli val yordamida aylanma harakatga aylantiruvchi issiqlik dvigateli. 1. Kiritish, 2. Siqish, 3. Yonish/Ishchi yo'l (shamcha uchquni va portlash), 4. Chiqarish taktlaridan iborat.",
      activeDesc: "🚗 DVIGATEL ISHLAMOQDA: Porshen yuqoriga va pastga harakatlanmoqda, klapanlar o'z vaqtida ochilib-yopilmoqda, shamcha uchqun sochib yoqilg'ini portlatmoqda!",
      points: [
        "1-takt: Kiritish (yonilg'i aralashmasi kirishi)",
        "2-takt: Siqish (porshen gazni siqadi)",
        "3-takt: Yonish / Ishchi yo'l (shamcha uchquni, quvvat hosil bo'lishi)",
        "4-takt: Chiqarish (tutun va gazlarning chiqib ketishi)"
      ],
      fact: "Dunyo bo'ylab har kuni millionlab avtomobillar, mototsikllar va generatorlar aynan 1876-yilda Nikolaus Otto tomonidan kashf etilgan 4 taktli sikl asosida harakatlanadi."
    },
    '3d-printer': {
      title: "3D Printer Qatlamli Bosma (Additive Manufacturing)",
      formula: "Qatlam qalinligi: 0.1 - 0.3 mm | Nozzle harorati: 210°C | Stol: 60°C",
      desc: "FDM (Fused Deposition Modeling) texnologiyasi: plastik filament (PLA/ABS) qizdirilgan ekstruder orqali eritilib, dastur kodi (G-code) asosida qatlam-qatlam qilib quyiladi va real fazoviy buyum hosil qilinadi.",
      activeDesc: "🖨️ 3D BOSIB CHIQARILMOQDA: Ekstruder 210°C da eritilgan filamentni koordinatalar bo'yicha qatlamlab termo-stol ustiga yotqizmoqda!",
      points: [
        "X, Y va Z o'qlari bo'yicha koordinatali harakat",
        "Plastik ipning (filament) erishi va qotishi",
        "Qatlam qalinligi va bosish tezligining o'zaro bog'liqligi"
      ],
      fact: "Hozirgi kunda 3D printerlar yordamida nafaqat plastik o'yinchoqlar, balki haqiqiy uylar, samolyot dvigateli detallari va hatto inson organlari karkaslari ham bosib chiqarilmoqda!"
    },
    'wind-turbine': {
      title: "Shamol Turbinasi va Yashil Energiya",
      formula: "Shamol quvvati: P = ½ · ρ · A · v³ (v - shamol tezligi)",
      desc: "Shamolning kinetik energiyasini rotordagi 3 ta aerodinamik qanot orqali mexanik harakatga, so'ngra generator orqali elektr energiyasiga aylantiruvchi ekologik toza stansiya.",
      activeDesc: "💨 SHAMOL GENERATORI ISHLAMOQDA: Havo oqimi qanotlarni aylantirmoqda, generator elektr toki ishlab chiqarib, ko'cha chiroqlari va xonadonlarni quvvatlamoqda!",
      points: [
        "Shamol tezligi oshganda quvvatning kub darajada oshishi",
        "Rotor qanotlarining aerodinamik ko'tarish kuchi",
        "Yashil, atmosferaga zararli gazlarsiz toza energiya"
      ],
      fact: "Bitta zamonaviy ulkan shamol turbinasi atigi 1 marta to'liq aylanganda o'rtacha bir xonadonning butun bir kunlik elektr energiyasi ehtiyojini qondira oladi."
    }
  }
};

// ============================================================
// O'NG TOMONDAGI IZOH PANELINI YANGILASH FUNKSIYASI
// ============================================================
window.currentLabState = {
  subject: 'chemistry',
  experiment: 'copper-acid',
  isRunning: false
};

window.updateLabExplanation = function(subject, experimentKey, isRunning) {
  if (!subject) subject = window.currentLabState.subject || 'chemistry';
  if (!experimentKey) experimentKey = window.currentLabState.experiment || 'copper-acid';
  if (isRunning !== undefined) window.currentLabState.isRunning = isRunning;
  
  window.currentLabState.subject = subject;
  window.currentLabState.experiment = experimentKey;

  var subjData = window.LAB_EXPLANATIONS[subject];
  if (!subjData) return;

  var exp = subjData[experimentKey];
  if (!exp) return;

  // DOM elementlarni topish
  var prefix = subject.substring(0, 4); // chem, phys, astr, biol, geom, tech
  if (subject === 'chemistry') prefix = 'chem';
  else if (subject === 'physics') prefix = 'phys';
  else if (subject === 'astronomy') prefix = 'astr';
  else if (subject === 'biology') prefix = 'bio';
  else if (subject === 'geometry') prefix = 'geom';
  else if (subject === 'technology') prefix = 'tech';

  var badgeEl = document.getElementById(prefix + '-status-badge');
  var statusTextEl = document.getElementById(prefix + '-status-text');
  var titleEl = document.getElementById(prefix + '-info-title');
  var descEl = document.getElementById(prefix + '-info-desc');
  var formulaEl = document.getElementById(prefix + '-info-formula');
  var pointsEl = document.getElementById(prefix + '-info-points');
  var factEl = document.getElementById(prefix + '-info-fact');

  if (titleEl) titleEl.textContent = exp.title;
  if (descEl) {
    descEl.textContent = window.currentLabState.isRunning ? exp.activeDesc : exp.desc;
  }
  if (formulaEl) formulaEl.textContent = exp.formula;
  if (factEl) factEl.textContent = exp.fact;

  if (pointsEl && Array.isArray(exp.points)) {
    pointsEl.innerHTML = '';
    exp.points.forEach(function(pt) {
      var li = document.createElement('li');
      li.innerHTML = '<i class="fas fa-check-circle"></i> ' + pt;
      pointsEl.appendChild(li);
    });
  }

  // Status badge yangilash
  if (badgeEl && statusTextEl) {
    if (window.currentLabState.isRunning) {
      badgeEl.className = 'info-status-badge running';
      statusTextEl.innerHTML = '<strong>🟢 Jarayon ketmoqda...</strong>';
    } else {
      badgeEl.className = 'info-status-badge waiting';
      statusTextEl.innerHTML = '<strong>🟡 Kutilmoqda</strong> (Boshlashni bosing)';
    }
  }
};

// Barcha faol 3D laboratoriyalarni xatosiz qayta o'lchash (distortion & stretch yo'qotish)
window.triggerAllLabResizes = function() {
  window.dispatchEvent(new Event('resize'));

  if (window.chemLab && typeof window.chemLab.onWindowResize === 'function') window.chemLab.onWindowResize();
  if (window.chemistryLabInstance && typeof window.chemistryLabInstance.onWindowResize === 'function') window.chemistryLabInstance.onWindowResize();

  if (window.physLab && typeof window.physLab.onWindowResize === 'function') window.physLab.onWindowResize();
  if (window.physicsLabInstance && typeof window.physicsLabInstance.onWindowResize === 'function') window.physicsLabInstance.onWindowResize();

  if (window.astronomyLab && typeof window.astronomyLab.onWindowResize === 'function') window.astronomyLab.onWindowResize();
  if (window.astronomyLabInstance && typeof window.astronomyLabInstance.onWindowResize === 'function') window.astronomyLabInstance.onWindowResize();

  if (window.biologyLab && typeof window.biologyLab.onWindowResize === 'function') window.biologyLab.onWindowResize();
  if (window.biologyLabInstance && typeof window.biologyLabInstance.onWindowResize === 'function') window.biologyLabInstance.onWindowResize();

  if (window.geometryLab && typeof window.geometryLab.onWindowResize === 'function') window.geometryLab.onWindowResize();
  if (window.geometryLabInstance && typeof window.geometryLabInstance.onWindowResize === 'function') window.geometryLabInstance.onWindowResize();

  if (window.technologyLabInstance && typeof window.technologyLabInstance.onWindowResize === 'function') window.technologyLabInstance.onWindowResize();
  if (window.geographyLabInstance && typeof window.geographyLabInstance.onWindowResize === 'function') window.geographyLabInstance.onWindowResize();
  if (window.computerLabInstance && typeof window.computerLabInstance.onWindowResize === 'function') window.computerLabInstance.onWindowResize();
};

// Panelni ochish/yopish (Collapse/Expand)
window.toggleLabInfoPanel = function(subject) {
  if (!subject) subject = window.currentLabState.subject || 'chemistry';
  var panelId = subject + '-info-panel';
  var panel = document.getElementById(panelId);
  var btn = document.getElementById(subject + '-info-toggle-btn') || document.querySelector('#' + subject + '-canvas-container .lab-info-toggle-btn');
  
  if (panel) {
    panel.classList.toggle('collapsed');
    var isCollapsed = panel.classList.contains('collapsed');
    if (btn) {
      btn.classList.toggle('active', !isCollapsed);
    }

    // Animatsiya davomida va tugaganida kadrlar bo'yicha proporsiyalarni to'liq qayta hisoblash
    window.triggerAllLabResizes();
    var delays = [30, 80, 150, 220, 310, 380, 500];
    delays.forEach(function(d) {
      setTimeout(function() {
        window.triggerAllLabResizes();
      }, d);
    });

    if (!panel._transitionAttached) {
      panel._transitionAttached = true;
      panel.addEventListener('transitionend', function() {
        window.triggerAllLabResizes();
      });
    }
  }
};

// Tajriba boshlanganda izohni faollashtirish uchun bridge
window.hookLabExplanationControls = function() {
  // Kimyo
  var origChemStart = window.startChemistryExperiment;
  window.startChemistryExperiment = function() {
    if (origChemStart) origChemStart();
    window.updateLabExplanation('chemistry', window.currentLabState.experiment, true);
  };
  var origChemPause = window.pauseChemistryExperiment;
  window.pauseChemistryExperiment = function() {
    if (origChemPause) origChemPause();
    window.updateLabExplanation('chemistry', window.currentLabState.experiment, false);
    var st = document.getElementById('chem-status-text');
    if (st) st.innerHTML = '<strong>⏸ To\'xtatildi (Pauza)</strong>';
  };
  var origChemReset = window.resetChemistryExperiment;
  window.resetChemistryExperiment = function() {
    if (origChemReset) origChemReset();
    window.updateLabExplanation('chemistry', window.currentLabState.experiment, false);
  };

  // Fizika
  var origPhysStart = window.startPhysicsExperiment;
  window.startPhysicsExperiment = function() {
    if (origPhysStart) origPhysStart();
    window.updateLabExplanation('physics', window.currentLabState.experiment, true);
  };
  var origPhysPause = window.pausePhysicsExperiment;
  window.pausePhysicsExperiment = function() {
    if (origPhysPause) origPhysPause();
    window.updateLabExplanation('physics', window.currentLabState.experiment, false);
    var st = document.getElementById('phys-status-text');
    if (st) st.innerHTML = '<strong>⏸ To\'xtatildi (Pauza)</strong>';
  };
  var origPhysReset = window.resetPhysicsExperiment;
  window.resetPhysicsExperiment = function() {
    if (origPhysReset) origPhysReset();
    window.updateLabExplanation('physics', window.currentLabState.experiment, false);
  };

  // Astronomiya
  var origAstroStart = window.startAstronomyExperiment;
  window.startAstronomyExperiment = function() {
    if (origAstroStart) origAstroStart();
    window.updateLabExplanation('astronomy', window.currentLabState.experiment, true);
  };
  var origAstroPause = window.pauseAstronomyExperiment;
  window.pauseAstronomyExperiment = function() {
    if (origAstroPause) origAstroPause();
    window.updateLabExplanation('astronomy', window.currentLabState.experiment, false);
    var st = document.getElementById('astr-status-text');
    if (st) st.innerHTML = '<strong>⏸ To\'xtatildi (Pauza)</strong>';
  };
  var origAstroReset = window.resetAstronomyExperiment;
  window.resetAstronomyExperiment = function() {
    if (origAstroReset) origAstroReset();
    window.updateLabExplanation('astronomy', window.currentLabState.experiment, false);
  };

  // Biologiya
  var origBioStart = window.startBiologyExperiment;
  window.startBiologyExperiment = function() {
    if (origBioStart) origBioStart();
    window.updateLabExplanation('biology', window.currentLabState.experiment, true);
  };
  var origBioPause = window.pauseBiologyExperiment;
  window.pauseBiologyExperiment = function() {
    if (origBioPause) origBioPause();
    window.updateLabExplanation('biology', window.currentLabState.experiment, false);
    var st = document.getElementById('bio-status-text');
    if (st) st.innerHTML = '<strong>⏸ To\'xtatildi (Pauza)</strong>';
  };
  var origBioReset = window.resetBiologyExperiment;
  window.resetBiologyExperiment = function() {
    if (origBioReset) origBioReset();
    window.updateLabExplanation('biology', window.currentLabState.experiment, false);
  };

  // Geometriya
  var origGeomStart = window.startGeometryExperiment;
  window.startGeometryExperiment = function() {
    if (origGeomStart) origGeomStart();
    window.updateLabExplanation('geometry', window.currentLabState.experiment, true);
  };
  var origGeomPause = window.pauseGeometryExperiment;
  window.pauseGeometryExperiment = function() {
    if (origGeomPause) origGeomPause();
    window.updateLabExplanation('geometry', window.currentLabState.experiment, false);
    var st = document.getElementById('geom-status-text');
    if (st) st.innerHTML = '<strong>⏸ To\'xtatildi (Pauza)</strong>';
  };
  var origGeomReset = window.resetGeometryExperiment;
  window.resetGeometryExperiment = function() {
    if (origGeomReset) origGeomReset();
    window.updateLabExplanation('geometry', window.currentLabState.experiment, false);
  };

  // Tajriba tanlanganda avtomatik yangilash
  var origChemSelect = window.selectChemistryExperiment;
  window.selectChemistryExperiment = function(name) {
    if (origChemSelect) origChemSelect(name);
    var mapped = name;
    if (name === 'water-electrolysis') mapped = 'electrolysis';
    window.updateLabExplanation('chemistry', mapped, false);
  };

  var origPhysSelect = window.selectPhysicsExperiment;
  window.selectPhysicsExperiment = function(name) {
    if (origPhysSelect) origPhysSelect(name);
    window.updateLabExplanation('physics', name, false);
  };

  var origAstroSelect = window.selectAstronomyExperiment;
  window.selectAstronomyExperiment = function(name) {
    if (origAstroSelect) origAstroSelect(name);
    window.updateLabExplanation('astronomy', name, false);
  };

  var origBioSelect = window.selectBiologyExperiment;
  window.selectBiologyExperiment = function(name) {
    if (origBioSelect) origBioSelect(name);
    window.updateLabExplanation('biology', name, false);
  };

  var origGeomSelect = window.selectGeometryExperiment;
  window.selectGeometryExperiment = function(name) {
    if (origGeomSelect) origGeomSelect(name);
    window.updateLabExplanation('geometry', name, false);
  };
};

// Sahifa yuklanganda ishga tushirish
document.addEventListener('DOMContentLoaded', function() {
  window.hookLabExplanationControls();
  window.updateLabExplanation('chemistry', 'copper-acid', false);
  window.updateLabExplanation('physics', 'free-fall', false);
  window.updateLabExplanation('astronomy', 'solar-system', false);
  window.updateLabExplanation('biology', 'heart', false);
  window.updateLabExplanation('geometry', 'cube', false);
  window.updateLabExplanation('geography', 'earth-layers', false);
  window.updateLabExplanation('computer', 'pc-inside', false);
});
