/**
 * 30-IDUM Maktab Test Platformasi - "Kitobxonlik va Elektron Kutubxona" Moduli
 * 35 ta To'liq Interaktiv Shoh Asar (Boblar, Viktorinalar, Iqtiboslar, Qahramonlar, Audio)
 * hamda 100 ta Jahon va O'zbek Mumtoz Durdonalari Katalogi.
 */

(function () {
  'use strict';

// ============================================================
// PART 1: O'ZBEK BADIIY VA MUMTOZ DURDONALARI (1-12)
// ============================================================
var BOOKS_PART_1 = [
  {
    id: 'otkan-kunlar',
    title: "O'tkan Kunlar",
    author: "Abdulla Qodiriy",
    year: "1926",
    category: "uzbek",
    categoryName: "O'zbek Badiiy Durdonalari",
    badge: "O'zbek Romanchiligi Asosi",
    coverGradient: "linear-gradient(135deg, #1e3a8a, #0284c7)",
    icon: "fa-feather-pointed",
    pages: 360,
    readTime: "5.5 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "O'zbek adabiyotidagi birinchi tarixiy roman. XIX asr o'rtalaridagi Toshkent va Marg'ilon hayoti, Otabek va Kumushbibining pok muhabbati hamda yurt taqdiri fojiasi aks etgan shoh asar.",
    quotes: [
      "«Modomiki, biz yangi davrga qadam qo'ydik, har bir ishda yangilik bo'lishi lozim.»",
      "«Sevgi — inson ko'nglini poklovchi eng buyuk xilqatdir.»"
    ],
    characters: [
      { name: "Otabek", desc: "Toshkentlik Yusufbek hojining o'g'li, adolatparvar, ilg'or fikrli yigit." },
      { name: "Kumushbibi", desc: "Marg'ilonlik Mirzakarim qutidorning qizi, sadoqat va go'zallik timsoli." },
      { name: "Zaynab", desc: "Otabekning ikkinchi xotini, rashk va fojia qurboni." },
      { name: "Yusufbek hoji", desc: "Otabekning otasi, el-yurt tinchligini o'ylaydigan dono arbob." }
    ],
    chapters: [
      {
        title: "1-bob: Marg'ilon mehmonxonasida",
        content: `1265-hijriy yil, dalv oyining yigirmanchi kunlari... Marg'ilonning mashhur choyxonasida Toshkentdan kelgan yosh yigit — Otabek o'tirar edi. Uning qaddi-qomati kelishgan, nigohlarida o'zgacha bir donolik va samimiyat jilvalanardi.\n\nOtabek Marg'ilonga savdo ishlari bilan kelgan bo'lsa-da, uning ko'ngli doimo ilm-ma'rifat, yurtning obodligi va adolat haqidagi o'ylar bilan band edi. Choyxona ahlidan biri unga qarab: "Bu yigit oddiy savdogarga o'xshamaydi, suhbatida hikmat bor", deb shivirladi.\n\nShu kuni Marg'ilon ko'chalarida kechgan tasodif Otabekning butun umrini tubdan o'zgartirib yuboradigan buyuk muhabbat — Kumushbibi bilan uchrashuv sari qo'yilgan ilk qadam edi.`
      },
      {
        title: "2-bob: Muhabbat va Sadoqat siri",
        content: `Kumushbibining ostonasi ostonalar ichida eng tabarruki edi. Otabek uning jamolini ko'rgan lahzada butun borliqni unutdi. Bu shunchaki ko'ngil xushligi emas, ikki buyuk qalbning abadiy rishtasi edi.\n\n"Inson sevgisi bilan ulug'dir", der edi Otabek o'z do'stlariga. "Qachonki millat o'z qizlarini, onalarini e'zozlasa, oila muqaddas saqlansa, o'sha yurt qudratli va yengilmas bo'ladi." Kumushbibi ham Otabekning sadoqatiga butun vujudi bilan ishondi va uning har bir so'zini qalbida ardoqladi.`
      }
    ],
    quiz: [
      {
        q: "\"O'tkan kunlar\" romanining bosh qahramoni Otabek qaysi shahardan Marg'ilonga kelgan edi?",
        options: ["Toshkentdan", "Buxorodan", "Samarqanddan", "Qo'qondan"],
        answer: 0,
        explanation: "Otabek Toshkentlik savdogar Yusufbek hojining o'g'li bo'lib, Marg'ilonga savdo ishlari bilan kelgan."
      },
      {
        q: "Romanda Kumushbibining otasining ismi kim edi?",
        options: ["Mirzakarim qutidor", "Ziyo shohichi", "Akrambek", "Hasanali"],
        answer: 0,
        explanation: "Kumushbibining otasi Marg'ilonning obro'li kishilaridan biri — Mirzakarim qutidor edi."
      },
      {
        q: "\"O'tkan kunlar\" romani nechanchi yillarda yaratilgan va o'zbek adabiyotida qanday o'rin tutadi?",
        options: [
          "1920-yillarda yozilgan va o'zbek romanchiligining birinchi romanidir",
          "1950-yillarda yozilgan hikoyalar to'plami",
          "XIX asrda yozilgan doston",
          "2000-yillarda yozilgan sahna asari"
        ],
        answer: 0,
        explanation: "Abdulla Qodiriy bu asarni 1920-yillarda yozgan bo'lib, u o'zbek adabiyotidagi ilk romandir."
      },
      {
        q: "Otabekning eng sodiq va dono xizmatkori hamda yo'ldoshi kim edi?",
        options: ["Hasanali", "Usta Alim", "Homid", "Rahmat"],
        answer: 0,
        explanation: "Hasanali Yusufbek hoji xonadonining uzoq yillik dono va sadoqatli kishisi edi."
      },
      {
        q: "Asarda salbiy xarakterga ega bo'lib, Otabekka xiyonat qilgan shaxs kim?",
        options: ["Homid", "Mirzakarim", "Ziyo shohichi", "Qutidor"],
        answer: 0,
        explanation: "Homid Otabek va Kumush o'rtasiga nifoq solishga uringan asosiy fitnachi obrazdir."
      }
    ]
  },
  {
    id: 'mehrobdan-chayon',
    title: "Mehrobdan Chayon",
    author: "Abdulla Qodiriy",
    year: "1928",
    category: "uzbek",
    categoryName: "O'zbek Badiiy Durdonalari",
    badge: "Tarixiy Roman",
    coverGradient: "linear-gradient(135deg, #7c2d12, #ea580c)",
    icon: "fa-scroll",
    pages: 320,
    readTime: "5.0 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "Qo'qon xonligi davridagi xudbinlik, munofiqlik va saroy fitnalari fonida Anvar va Ra'noning fidokorona muhabbati tasvirlangan nodir tarixiy asar.",
    quotes: [
      "«Mehrobki poklik makoni edi, undan chayon chiqishi xalqning eng katta fojiasidir.»",
      "«Haqiqat egiladi, bukiladi, ammo aslo sinmaydi!»"
    ],
    characters: [
      { name: "Anvar", desc: "Iqtidorli kotib, jasur, halol va xalqparvar yigit." },
      { name: "Ra'no", desc: "Go'zal, zehnli, adabiyotsevar va vafodor qiz." },
      { name: "Xudoyorxon", desc: "Qo'qon xoni, zolim va kayf-safo orqasidan quvgan hukmdor." },
      { name: "Solih maxdum", desc: "Ra'noning otasi, ta'magir va qiziqqon mudarris." }
    ],
    chapters: [
      {
        title: "1-bob: Mirzo Anvarning xon saroyidagi xizmati",
        content: `Qo'qon xonining mahkamasida mirzolar ichida eng zehnlisi va xati husnisi Anvar edi. U yetimlikda o'sgan bo'lsa-da, o'tkir aqli va to'g'riso'zligi tufayli saroyda katta e'tibor qozondi.\n\nBiroq saroy ahli uning halolligini ko'ra olmas, har qadamida poyloqchilik qilib, unga choh qazishga urinardi. Anvarning butun quvonchi esa Solih maxdum xonadonida unib-o'sgan Ra'no bilan bo'lgan ma'sum suhbatlarida edi.`
      },
      {
        title: "2-bob: Ra'noning xon haramiga talab qilinishi",
        content: `Kutilmaganda saroydan xabarchi keldi: Xudoyorxon Ra'noning go'zalligini eshitib, uni o'z haramiga olishni buyurgan edi. Bu xabar Solih maxdum uyida momaqaldiroqdek yangradi.\n\nRa'no Anvardan o'zga hech kimga ko'ngil bermasligini aytdi. Anvar esa sevgan yorini zolim xon changalidan qutqarish uchun hatto o'z jonini fido qilishga tayyor ekanini bildirdi.`
      }
    ],
    quiz: [
      {
        q: "\"Mehrobdan chayon\" romanidagi bosh qahramon yigit kim?",
        options: ["Anvar", "Otabek", "Mirvali", "Mamat"],
        answer: 0,
        explanation: "Romanning bosh qahramoni — saroyda xattotlik qilgan iqtidorli yigit Anvardir."
      },
      {
        q: "Asarda qaysi xonlik davridagi voqealar aks ettirilgan?",
        options: ["Qo'qon xonligi", "Xiva xonligi", "Buxoro amirligi", "Toshkent bekligi"],
        answer: 0,
        explanation: "Voqealar XIX asrda Qo'qon xonligida, Xudoyorxon hukmronligi davrida sodir bo'ladi."
      },
      {
        q: "Anvarning sevgan qizi Ra'noning otasi kim edi?",
        options: ["Solih maxdum", "Mirzakarim qutidor", "Ziyo shohichi", "Qobil bobo"],
        answer: 0,
        explanation: "Ra'noning otasi — xarakteri qiziq va tejamkor Solih maxdum bo'lgan."
      },
      {
        q: "Asar nomidagi «chayon» ramzi kimlarga nisbatan ishlatilgan?",
        options: [
          "Din niqobi ostida fitna uyushtiruvchi riyokorlarga",
          "Haqiqiy zahardor hasharotlarga",
          "Saroy qorovullariga",
          "Oddiy hunarmandlarga"
        ],
        answer: 0,
        explanation: "Muallif muqaddas mehrob atrofidagi riyokor va munofiq kimsalarni zaharli chayonga qiyoslagan."
      },
      {
        q: "Anvar va Ra'no asar oxirida qanday qismatga erishadilar?",
        options: [
          "Barcha sinovlarni yengib, baxtli turmush quradilar",
          "Ikkalasi ham qatl etiladi",
          "Xon ularni boshqa yurtga badarg'a qiladi",
          "Anvar saroyda bosh vazir bo'lib qoladi"
        ],
        answer: 0,
        explanation: "Anvar o'z aqli va jasorati bilan xon oldida haqiqatni isbotlab, Ra'no bilan oila quradi."
      }
    ]
  },
  {
    id: 'kecha-va-kunduz',
    title: "Kecha va Kunduz",
    author: "Abdulhamid Cho'lpon",
    year: "1936",
    category: "uzbek",
    categoryName: "O'zbek Badiiy Durdonalari",
    badge: "Jadid Adabiyoti Cho'qqisi",
    coverGradient: "linear-gradient(135deg, #312e81, #4338ca)",
    icon: "fa-cloud-moon",
    pages: 310,
    readTime: "4.8 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "Jadid adabiyotining ulug' namoyondasi Cho'lpon qalamiga mansub roman. Zebining fojiali taqdiri orqali butun xalqning mustamlakachilik va nodonlik kishanlari ostidagi ruhiy fojiasi ochib beriladi.",
    quotes: [
      "«Ko'ngil ozodligi bo'lmagan joyda hech qanday baxt bo'lishi mumkin emas.»",
      "«Go'zallik va san'at qalbni yorituvchi quyoshdir.»"
    ],
    characters: [
      { name: "Zebi", desc: "Qo'shiqchi, oqko'ngil, quvnoq qiz, taqdir qurboni." },
      { name: "Miryoqub", desc: "Mingboshining iqtidorli noibi, keyinchalik ko'zi ochilgan shaxs." },
      { name: "Akbarali mingboshi", desc: "Mansabparast, ayollarga hirs qo'ygan hukmdor." },
      { name: "Razzoq so'fi", desc: "Zebining otasi, mutaassib va xudbin inson." }
    ],
    chapters: [
      {
        title: "1-bob: Zebining beg'ubor bahori",
        content: `Bahor kunlarining birida qishloq chetidagi bog'larda qizlar jam bo'lib, xonish qilar edilar. Ular orasida Zebining ovozi butun tabiatni sehrlab qo'ygandek mayin va jarangdor edi.\n\nZebi dunyoning qora o'yinlaridan bexabar, faqat ezgulik va qo'shiqlar olamida yashardi. Ammo uning otasi Razzoq so'fining qattiqqo'lligi qizning barcha orzulari ustiga qora parda tortishga shaylanardi.`
      },
      {
        title: "2-bob: Qorong'u tunning boshlanishi",
        content: `Akbarali mingboshi Zebini ko'rib, uni to'rtinchi xotinlikka olishga qaror qildi. Razzoq so'fi esa boylik va mansab ilinjida qizining ko'z yoshlariga qaramay rozilik berdi.\n\nShu tariqa, Zebining oppoq orzulari mudhish saroy changalida so'na boshladi. Cho'lpon bu orqali millatning jaholat va qaramlik uyqusida yotgan fojiasini aks ettirgan edi.`
      }
    ],
    quiz: [
      {
        q: "\"Kecha va kunduz\" romanining bosh qahramoni kim?",
        options: ["Zebi", "Kumush", "Oybarchin", "Anora"],
        answer: 0,
        explanation: "Romanning bosh qahramoni — fojiali taqdirga duchor bo'lgan beg'ubor qiz Zebi."
      },
      {
        q: "Zebining otasi Razzoq so'fi qanday kasb yoki mashg'ulot egasi edi?",
        options: ["Mutaassib so'fi va do'ppido'z", "Bosh mirzo", "Savdogar", "Bog'bon"],
        answer: 0,
        explanation: "Razzoq so'fi o'ta mutaassib, diniy marosimlarga qattiq yopishgan va do'ppi tikuvchi inson bo'lgan."
      },
      {
        q: "Asarda ichki ruhiy o'zgarishga uchrab, ilm va taraqqiyot yo'lini tushuna boshlagan obraz kim?",
        options: ["Miryoqub", "Akbarali mingboshi", "Razzoq so'fi", "Qurbonqul"],
        answer: 0,
        explanation: "Miryoqub sayohatlar va uchrashuvlar orqali ko'zi ochilib, yangi dunyoqarashga o'tadi."
      },
      {
        q: "Asar muallifi Abdulhamid Cho'lpon qaysi adabiy harakatning yetakchisi edi?",
        options: ["Jadid adabiyoti", "Romantizm", "Klassitsizm", "Sentimentalizm"],
        answer: 0,
        explanation: "Cho'lpon XX asr boshidagi o'zbek jadid adabiyotining eng yorqin namoyondalaridan biridir."
      },
      {
        q: "\"Kecha va kunduz\" romanining «Kunduz» qismi nega saqlanib qolmagan?",
        options: [
          "Qatag'on davrida yo'q qilingan va fojiali ravishda yo'qolgan",
          "Muallif uni yozishga ulgurmagan",
          "Chet elda nashr etilgan",
          "Faqat birinchi qism rejalashtirilgan edi"
        ],
        answer: 0,
        explanation: "Cho'lpon qatag'onga uchragach, roman ikkinchi qismining qo'lyozmasi bedarak yo'qolgan."
      }
    ]
  },
  {
    id: 'shum-bola',
    title: "Shum Bola",
    author: "G'afur G'ulom",
    year: "1936",
    category: "uzbek",
    categoryName: "O'zbek Badiiy Durdonalari",
    badge: "O'zbek Qissachiligi Gavhari",
    coverGradient: "linear-gradient(135deg, #047857, #10b981)",
    icon: "fa-face-laugh-wink",
    pages: 200,
    readTime: "3.2 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "XX asr boshidagi Toshkent ko'chalari, bolalik sho'xliklari, xalq yumori va yetim bolaning hayot sinovlaridagi topqirligi aks etgan mashhur qissa.",
    quotes: [
      "«Qorin to'ysa, ko'ngil to'q bo'ladi, degan gap bor, ammo topqirlik hamisha boshni omon saqlaydi.»",
      "«Har qanday qiyin vaziyatda ham kulgidan kuch olish kerak.»"
    ],
    characters: [
      { name: "Qoravoy (Shum bola)", desc: "Epchil, sho'x, so'zga chechan va topqir yetim bola." },
      { name: "Omon", desc: "Shum bolaning sadoqatli do'sti va sarguzashtdosh sherigi." },
      { name: "Boyota", desc: "Qoravoyni ishlatib, haqini bermoqchi bo'lmagan xasis boy." }
    ],
    chapters: [
      {
        title: "1-bob: Sarhovuz bo'yidagi sho'xlik",
        content: `Mening otim Qoravoy. Toshkentning Shayxontohur dahasida ulg'ayganman. Boshimdan kechmagan savdolar qolmadi desam ham bo'ladi.\n\nKunlardan bir kun do'stim Omon bilan sarhovuz bo'yida xurmo sotuvchini boplamoqchi bo'ldik. Mening tilim shirin, gapim pishiq edi. Biron yerda och qolsam, yo'lini topib qornimni to'ydirar edim.`
      },
      {
        title: "2-bob: Xasis boyning xizmatida",
        content: `Bir kuni qishloqdagi katta boyning xizmatiga kirdim. Boy meni aldab tekinga ishlatmoqchi bo'ldi. Men esa uning har bir hiylasiga o'n karra zukkolik bilan javob qaytardim.\n\nBoy oxiri: "Ey shum bola, seni shayton ham alday olmaydi", deb lol qoldi.`
      }
    ],
    quiz: [
      {
        q: "\"Shum bola\" qissasining muallifi kim?",
        options: ["G'afur G'ulom", "Abdulla Qahhor", "Said Ahmad", "Oybek"],
        answer: 0,
        explanation: "Asar O'zbekiston xalq shoiri va yozuvchisi G'afur G'ulom tomonidan yozilgan."
      },
      {
        q: "Shum bolaning asl ismi nima edi?",
        options: ["Qoravoy", "Hoshimjon", "Akrom", "Soli"],
        answer: 0,
        explanation: "Qissadagi bosh qahramonning asl ismi Qoravoy bo'lgan."
      },
      {
        q: "Qissadagi voqealar asosan qaysi shahar va uning atrofida kechadi?",
        options: ["Toshkent", "Samarqand", "Buxoro", "Farg'ona"],
        answer: 0,
        explanation: "Voqealar XX asr boshlaridagi qadimiy Toshkent mahallalarida boshlanadi."
      },
      {
        q: "Shum bola qanday fazilati bilan qiyin vaziyatlardan chiqib ketadi?",
        options: ["Topqirligi va hozirjavobligi", "Katta boyligi", "Kuchliligi", "Sehrli buyumlari"],
        answer: 0,
        explanation: "Shum bola o'zining zukkoligi, boy tili va hazil-mutoyibasi bilan har qanday qiyin vaziyatdan omon chiqadi."
      },
      {
        q: "\"Shum bola\" asari bo'yicha suratga olingan mashhur kinofilm rejissyori kim?",
        options: ["Damir Salimov", "Shuhrat Abbosov", "Ali Hamroyev", "Yormat Sharipov"],
        answer: 0,
        explanation: "1977-yilda ekranlashtirilgan afsonaviy film rejissyori Damir Salimovdir."
      }
    ]
  },
  {
    id: 'yulduzli-tunlar',
    title: "Yulduzli Tunlar (Bobur)",
    author: "Pirimqul Qodirov",
    year: "1978",
    category: "uzbek",
    categoryName: "O'zbek Badiiy Durdonalari",
    badge: "Tarixiy Shoh Asar",
    coverGradient: "linear-gradient(135deg, #1e1b4b, #4338ca)",
    icon: "fa-star-and-crescent",
    pages: 520,
    readTime: "7.5 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "Zahiriddin Muhammad Boburning murakkab va buyuk hayot yo'li, Farg'onadan Hindistongacha kechgan kurashlari, saltanat bunyod etishi va ulkan ijodiy merosi haqidagi tengsiz tarixiy roman.",
    quotes: [
      "«Tole' yo'qi jonimga balolig' bo'ldi, Har ishnikim ayladim — xatolig' bo'ldi.»",
      "«Vatan sevgisi har bir insonning qon-qoniga singgan muqaddas tuyg'udir.»"
    ],
    characters: [
      { name: "Bobur Mirzo", desc: "Temuriy shahzoda, sarkarda, buyuk shoir va davlat arbobi." },
      { name: "Xonzodabegim", desc: "Boburning mehribon va fidoyi opasi." },
      { name: "Qosimbek", desc: "Boburning sadoqatli beklaridan biri." },
      { name: "Humoyun Mirzo", desc: "Boburning to'ng'ich o'g'li va vorisi." }
    ],
    chapters: [
      {
        title: "1-bob: Andijon taxti va 12 yoshli shahzoda",
        content: `Umarshayx Mirzoning to'satdan vafotidan so'ng, Andijon taxtiga o'n ikki yoshli Zahiriddin o'tirdi. Hali bolalik shavqi ketmagan ko'zlarida temuriyona g'urur va mas'uliyat porlardi.\n\nAtrofdagi amakilari va xonlar yosh shahzodani taxtdan ag'darish payiga tushdilar. Biroq Boburning aql-zakovati va sadoqatli beklari uni birinchi to'siqlardan omon olib chiqdi.`
      },
      {
        title: "2-bob: Boburiy saltanat sari",
        content: `Samarqand uchun kurashlar, muvaffaqiyatsizliklar va nihoyat Kobul orqali Hindiston zaminiga yurish... Bobur qayerga bormasin, Andijonning qovunlarini, ona yurtining musaffo havosini qo'msab yashadi.\n\nU dunyoga «Boburnoma»dek bebaho asarni qoldirib, nafaqat qilich bilan, balki qalam bilan ham buyuk saltanat qurdi.`
      }
    ],
    quiz: [
      {
        q: "\"Yulduzli tunlar\" romani kimning hayotiga bag'ishlangan?",
        options: ["Zahiriddin Muhammad Bobur", "Amir Temur", "Alisher Navoiy", "Mirzo Ulug'bek"],
        answer: 0,
        explanation: "Asar buyuk sarkarda va shoir Zahiriddin Muhammad Bobur hayotiga bag'ishlangan."
      },
      {
        q: "Bobur necha yoshida Andijon taxtiga o'tirgan?",
        options: ["12 yoshida", "16 yoshida", "20 yoshida", "25 yoshida"],
        answer: 0,
        explanation: "Otasi Umarshayx Mirzo vafot etgach, Bobur 12 yoshida taxtga o'tiradi."
      },
      {
        q: "Pirimqul Qodirovning ushbu romanining davomi sifatida yozilgan asar qaysi?",
        options: ["«Avlodlar dovoni» (Akbar)", "«Ufq»", "«Chin muhabbat»", "«Qora ko'zlar»"],
        answer: 0,
        explanation: "Boburning avlodlari haqidagi davomiy roman «Avlodlar dovoni» deb ataladi."
      },
      {
        q: "Boburning jahon adabiyoti xazinasiga kirgan mashhur memuar asari qaysi?",
        options: ["«Boburnoma»", "«Xamsa»", "«Tarixi Rashidiy»", "«Devoni Foniy»"],
        answer: 0,
        explanation: "«Boburnoma» — Boburning shaxsiy xotiralari va tarixiy kuzatuvlaridir."
      },
      {
        q: "Bobur Hindistonda qaysi qudratli sulolaga asos solgan?",
        options: ["Boburiylar (Buyuk Mo'g'ullar) sulolasi", "Somoniylar", "G'aznaviylar", "Usmoniylar"],
        answer: 0,
        explanation: "Bobur Hindistonda 300 yildan ortiq hukm surgan Boburiylar sulolasiga asos solgan."
      }
    ]
  },
  {
    id: 'ikki-eshik-orasi',
    title: "Ikki Eshik Orasi",
    author: "O'tkir Hoshimov",
    year: "1986",
    category: "uzbek",
    categoryName: "O'zbek Badiiy Durdonalari",
    badge: "Inson Qadri Romani",
    coverGradient: "linear-gradient(135deg, #1c1917, #57534e)",
    icon: "fa-door-open",
    pages: 480,
    readTime: "6.5 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "Urush yillaridagi o'zbek xalqining matonati, mehr-oqibati va murakkab taqdirlari to'qqiz nafar qahramon tilidan hayotiy va ta'sirchan hikoya qilinadi.",
    quotes: [
      "«Tug'ilish — birinchi eshik, o'lim — ikkinchi eshik. Odam bolasi bu ikki eshik orasidan oq yuz bilan o'tishi kerak.»",
      "«Mehr — dunyoni ushlab turgan eng buyuk ustundir.»"
    ],
    characters: [
      { name: "Kimsan", desc: "Urushga ketib halok bo'lgan mard va oriyatli o'zbek o'g'loni." },
      { name: "Robiya", desc: "Sadoqatli, matonatli, sevgisiga vafodor ayol." },
      { name: "Umar zakon", desc: "Xudbin, kazzob, o'z manfaatini hamma narsadan ustun qo'yuvchi kishi." },
      { name: "Shomurod", desc: "Urushdan yarador bo'lib qaytgan, haqiqatgo'y inson." }
    ],
    chapters: [
      {
        title: "1-bob: Kimsanning frontga ketishi",
        content: `Mahalla bo'ylab g'amgin ovoz tarqaldi. Qishloq yigitlari birin-ketin jang maydoniga jo'nab ketmoqda edilar. Kimsan Robiyaning ko'zlariga boqib: "Men albatta qaytaman, Robi", dedi.\n\nAmmo urush shafqatsiz edi. O'zbek ayollarining sabri, mehr-oqibati va matonati har qanday qurol-yarog'dan ko'ra kuchliroq bo'lib chiqdi.`
      },
      {
        title: "2-bob: Haqiqat va Qismat hisobi",
        content: `Yillar o'tib urush tugadi. Kimdir qaytdi, kimdir esa qora xat orqali mangu qahramonga aylandi. Ammo hayot ikki eshik orasidagi sinovlardan iborat edi.\n\nHar bir inson o'z vijdoniga javob beradigan kun keladi. Robiyaning vafodorligi va Kimsanning xotirasi xalq qalbida abadiy muhrlandi.`
      }
    ],
    quiz: [
      {
        q: "\"Ikki eshik orasi\" romanining muallifi kim?",
        options: ["O'tkir Hoshimov", "Said Ahmad", "Tohir Malik", "Shukur Xolmirzayev"],
        answer: 0,
        explanation: "Roman taniqli o'zbek adibi O'tkir Hoshimov tomonidan yozilgan."
      },
      {
        q: "Asarda «ikki eshik» iborasi nimani anglatadi?",
        options: [
          "Tug'ilish va o'lim orasidagi inson umrini",
          "Hovli va ko'cha eshigini",
          "Maktab va universitet eshigini",
          "Uy va ishxona eshigini"
        ],
        answer: 0,
        explanation: "Muallif tug'ilish va o'lim orasidagi foniy dunyoni «ikki eshik orasi» deb ataydi."
      },
      {
        q: "Asarda salbiy va munofiq xarakter egasi bo'lgan personaj kim?",
        options: ["Umar zakon", "Kimsan", "Shomurod", "Munavvar"],
        answer: 0,
        explanation: "Umar zakon o'z manfaati uchun birovlarni sotishdan qaytmaydigan kimsadir."
      },
      {
        q: "Roman qanday usulda (kompozitsiyada) yozilgan?",
        options: [
          "Turli qahramonlar tilidan hikoya qilinadi",
          "Faqat muallifning xotiralari tarzida",
          "Xatlar to'plami ko'rinishida",
          "She'riy doston shaklida"
        ],
        answer: 0,
        explanation: "Asar to'qqiz nafar qahramonning o'z tili va nigohi orqali hikoya qilinadi."
      },
      {
        q: "Kimsanning sevgilisi va sadoqat timsoli bo'lgan ayol kim?",
        options: ["Robiya", "Zebi", "Kumush", "Jamila"],
        answer: 0,
        explanation: "Kimsanning sevgilisi Robiya bo'lib, u sadoqat va sabr timsoli sifatida tasvirlanadi."
      }
    ]
  },
  {
    id: 'dunyoning-ishlari',
    title: "Dunyoning Ishlari",
    author: "O'tkir Hoshimov",
    year: "1982",
    category: "uzbek",
    categoryName: "O'zbek Badiiy Durdonalari",
    badge: "Ona Madhiyasi",
    coverGradient: "linear-gradient(135deg, #065f46, #059669)",
    icon: "fa-heart",
    pages: 260,
    readTime: "3.8 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "Mushtipar onalarning buyuk mehri, bolalik xotiralari va dunyoning o'tkinchi tashvishlari haqida yozilgan eng samimiy va ko'z yoshlarga to'la o'zbek qissasi.",
    quotes: [
      "«Dunyoning eng buyuk mo''jizasi — Onadir!»",
      "«Onang hayot ekan, sen bolasan. Ona ketgach, bir zumda ulg'ayasan.»"
    ],
    characters: [
      { name: "Ona", desc: "Fidoyi, mehribon, farzandlari uchun borini beruvchi o'zbek onasi." },
      { name: "Muallif (bola)", desc: "Onasining mehrini ulg'aygach teranroq anglagan o'g'il." }
    ],
    chapters: [
      {
        title: "1-bob: Haqqush qissasi va Onamning sabog'i",
        content: `Kechki payt bog'da haqqush sayrardi. Onam menga haqqushning afsonasini aytib berdi: ikki aka-uka bir-biriga mehr qo'ygan, ammo birgina adashish sababli ayrilib qolgan ekan.\n\n"Bolam, birovning haqidan qo'rq, doimo halol bo'l", der edi onam. Uning har bir so'zi qalbimga oltin harflar bilan muhrlanardi.`
      },
      {
        title: "2-bob: Iltijo va Onamning oq sochi",
        content: `Kasal bo'lib qolgan kunlarimda onam boshimda tunlarni tonglarga ulardi. Uning duolari meni oyoqqa turg'azardi.\n\nUlg'ayib qarasam, onamning sochlariga oq tushibdi. Bu oq sochlar bizning baxtimiz, tinchligimiz uchun to'langan qimmatli to'lov edi.`
      }
    ],
    quiz: [
      {
        q: "\"Dunyoning ishlari\" qissasi asosiy mavzusi nima?",
        options: [
          "Ona madhi va ona mehrining ulug'vorligi",
          "Urushdagi texnikalar",
          "Qadimiy savdo yo'llari",
          "Sayyoralarga sayohat"
        ],
        answer: 0,
        explanation: "Asar bag'rikeng, fidoyi o'zbek onasiga atalgan adabiy haykaldir."
      },
      {
        q: "Asar muallifi kim?",
        options: ["O'tkir Hoshimov", "O'lmas Umarbekov", "Erkin Vohidov", "Asqad Muxtor"],
        answer: 0,
        explanation: "Ushbu qissa O'tkir Hoshimov qalamiga mansub."
      },
      {
        q: "Qissadagi novellalardan biri qanday nomlanadi?",
        options: ["«Haqqush qissasi»", "«Sehrli qalpoqcha»", "«Oltin kuz»", "«Yetti o'g'ri»"],
        answer: 0,
        explanation: "«Haqqush qissasi» asardagi eng ta'sirli boblardan biridir."
      },
      {
        q: "Muallif onasini nima uchun eng buyuk mo''jiza deb hisoblaydi?",
        options: [
          "Farzandlari uchun butun borlig'ini ayamagani va cheksiz mehri uchun",
          "Juda boy bo'lgani uchun",
          "Ko'p tillarni bilgani uchun",
          "Dunyo bo'ylab sayohat qilgani uchun"
        ],
        answer: 0,
        explanation: "Onaning cheksiz mehri, sabri va fidoyiligi eng buyuk mo''jizadir."
      },
      {
        q: "\"Dunyoning ishlari\" asari qaysi janrga mansub?",
        options: ["Qissa (novellalar turkumi)", "Tarixiy doston", "Detektiv roman", "Pyesa"],
        answer: 0,
        explanation: "Asar bir-biriga bog'langan samimiy novellalardan iborat qissadir."
      }
    ]
  },
  {
    id: 'daftar-hoshiyasidagi-bitiklar',
    title: "Daftar Hoshiyasidagi Bitiklar",
    author: "O'tkir Hoshimov",
    year: "2001",
    category: "growth",
    categoryName: "Shaxsiy Rivojlanish & Hikmat",
    badge: "Falsafiy Aforizmlar",
    coverGradient: "linear-gradient(135deg, #831843, #be185d)",
    icon: "fa-book-bookmark",
    pages: 220,
    readTime: "3.0 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "Hayot, insoniy munosabatlar, vaqt qadri, vijdon va ma'naviyat haqidagi chuqur falsafiy o'ylar hamda ibratli hikmatlar majmuasi.",
    quotes: [
      "«Vaqt — eng odil hakam. U har bir narsani o'z o'rniga qo'yadi.»",
      "«Kichik quvonchlardan zavqlanmagan inson katta baxtga ham yetolmaydi.»"
    ],
    characters: [
      { name: "Muallif / Donishmand", desc: "Hayot tajribasini yosh avlodga hikmat qilib qoldirayotgan adib." }
    ],
    chapters: [
      {
        title: "1-bob: Inson va Vijdon haqida bitiklar",
        content: `Daftar hoshiyasiga tushgan har bir bitik — yillar davomida to'plangan achchiq va chuchuk tajribalar hosilasidir.\n\nInson qachon qariydi? Qachonki orzulari xotiralarga aylanganda. Vijdon shunday tuyg'uki, u uyqu bilmaydi. Agar vijdoning tinch bo'lsa, eng qattiq tosh ustida ham rohatlanib uxlashing mumkin.`
      },
      {
        title: "2-bob: Vaqt va Do'stlik siri",
        content: `Do'stlik savdo emas, unda hisob-kitob bo'lmaydi. Yaxshi do'st — sening kamchiliklaringni bilib turib ham seni qadrlaydigan insondir.\n\nVaqt esa oqib ketayotgan daryo. Unga bir marta tushgan toshni qaytarib ololmaysan. Shunday ekan, har bir onni ezgu amallar bilan bezash zarur.`
      }
    ],
    quiz: [
      {
        q: "\"Daftar hoshiyasidagi bitiklar\" kitobining janri qanday?",
        options: ["Falsafiy aforizmlar va hikmatlar", "Detektiv hikoyalar", "Ilmiy maqolalar", "Fantastika"],
        answer: 0,
        explanation: "Kitob hayotiy kuzatishlar va falsafiy aforizmlardan iborat."
      },
      {
        q: "Asarda inson qachon qariydi deb aytiladi?",
        options: [
          "Orzulari xotiralarga aylanganida",
          "Sochiga oq tushganida",
          "Nafaqaga chiqqanida",
          "Ko'zoynak taqqanida"
        ],
        answer: 0,
        explanation: "Muallif inson orzulari xotiralarga aylanganda qariydi deb yozgan."
      },
      {
        q: "Muallif do'stlik haqida qanday fikr bildiradi?",
        options: [
          "Do'stlikda hisob-kitob va manfaat bo'lmasligi kerak",
          "Faqat boy kishilar bilan do'stlashish lozim",
          "Do'stlik faqat bolalikda bo'ladi",
          "Do'stlar doimo birga yashashi shart"
        ],
        answer: 0,
        explanation: "Haqiqiy do'stlik beminnat va hisob-kitobsiz bo'lishi lozim."
      },
      {
        q: "Asar muallifi O'tkir Hoshimov qaysi unvon sohibi bo'lgan?",
        options: ["O'zbekiston xalq yozuvchisi", "Xalq baxshisi", "Akademik", "Davlat kotibi"],
        answer: 0,
        explanation: "O'tkir Hoshimov O'zbekiston xalq yozuvchisi unvoniga sazovor bo'lgan."
      },
      {
        q: "Kitob o'quvchiga qanday asosiy saboqni beradi?",
        options: [
          "Vaqtni qadrlash va vijdon bilan yashashni",
          "Faqat moddiy boylik to'plashni",
          "Boshqalardan ajralib yashashni",
          "Tez boyib ketish sirlarini"
        ],
        answer: 0,
        explanation: "Kitob insoniylik, vaqt qadri va pok vijdon haqida ibrat beradi."
      }
    ]
  },
  {
    id: 'xamsa',
    title: "Xamsa",
    author: "Alisher Navoiy",
    year: "1485",
    category: "uzbek",
    categoryName: "O'zbek Badiiy Durdonalari",
    badge: "Turkiy Adabiyot Shoh Asari",
    coverGradient: "linear-gradient(135deg, #134e4a, #0d9488)",
    icon: "fa-book-quran",
    pages: 600,
    readTime: "8.0 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "Hazrat Alisher Navoiy tomonidan turkiy tilda yaratilgan birinchi beshlik: «Hayrat ul-abror», «Farhod va Shirin», «Layli va Majnun», «Sab'ai sayyor», «Saddi Iskandariy».",
    quotes: [
      "«Olam ahli bilingizkim, ish emas dushmanlig', Yor o'lung bir-biringizgakim, erur yorlig' ish.»",
      "«Naf'ing agar xalqqa beshakdurur, Bilki, bu naf' o'zingga ko'prakdurur.»"
    ],
    characters: [
      { name: "Farhod", desc: "Ilm, hunar va cheksiz muhabbat timsoli bo'lgan pahlavon." },
      { name: "Shirin", desc: "Go'zallik, vafodorlik va olijanoblik malikasi." },
      { name: "Majnun (Qays)", desc: "Haqiqiy pok ilohiy muhabbat yo'lida jon fido qilgan oshiq." },
      { name: "Navoiy", desc: "Turkiy tilni jahon darajasiga ko'targan daho shoir va mutafakkir." }
    ],
    chapters: [
      {
        title: "1-bob: Farhodning mehnat va hunar siri",
        content: `Farhod yoshligidanoq nafaqat davlat boshqaruvini, balki tosh yo'nish, me'morchilik va muhandislik hunarlarini ham qunt bilan egalladi. U o'z mehnati bilan xalqqa suv olib kelish, qoyalarni teshib ariq qazishni sharaf deb bildi.\n\nNavoiy Farhod timsolida komil inson g'oyasini kuyladi: kimki xalq dardiga darmon bo'lsa, o'sha inson haqiqiy qahramondir.`
      },
      {
        title: "2-bob: Layli va Majnunning pok muhabbati",
        content: `Maktab ostonasida boshlangan samimiy tuyg'u butun olamni lol qoldiradigan muhabbat afsonasiga aylandi. Majnun uchun bu sevgining har bir zarbasi qalbini poklovchi ilohiy nurni berardi.\n\nNavoiy ushbu doston orqali inson ruhiyatining eng yuksak cho'qqilarini, sadoqat va vafoning abadiyligini ochib berdi.`
      }
    ],
    quiz: [
      {
        q: "Alisher Navoiy «Xamsa»sini qaysi tilda yaratgan?",
        options: ["Turkiy (Eski o'zbek tili)", "Farsiy", "Arabiy", "Lotin"],
        answer: 0,
        explanation: "Navoiy turkiy tilda ilk bor mukammal «Xamsa» yaratib, turkiy tilning qudratini isbotlagan."
      },
      {
        q: "Navoiy «Xamsa»si nechta dostondan iborat?",
        options: ["5 ta doston", "3 ta doston", "7 ta doston", "10 ta doston"],
        answer: 0,
        explanation: "«Xamsa» so'zi arabcha «beshlik» degan ma'noni bildiradi va 5 dostondan tashkil topgan."
      },
      {
        q: "Navoiy «Xamsa»sining birinchi falsafiy dostoni qaysi?",
        options: ["«Hayrat ul-abror»", "«Farhod va Shirin»", "«Layli va Majnun»", "«Saddi Iskandariy»"],
        answer: 0,
        explanation: "«Hayrat ul-abror» (Yaxshi kishilarning hayratlanishi) ilk falsafiy dostonidir."
      },
      {
        q: "«Farhod va Shirin» dostonida Farhod qaysi hunarni puxta egallaydi?",
        options: ["Tosh yo'nish va me'morlik", "Zargarlik", "Tikuvchilik", "Kulolchilik"],
        answer: 0,
        explanation: "Farhod tosh yo'nish, tog'ni teshib ariq ochish va muhandislik hunarini mukammal o'rganadi."
      },
      {
        q: "«Xamsa» yaratilgan yil qaysi davrga to'g'ri keladi?",
        options: ["1483-1485 yillar", "1501-1505 yillar", "1441 yil", "1370 yil"],
        answer: 0,
        explanation: "Hazrat Navoiy ushbu buyuk beshlikni 1483–1485 yillarda qisqa muddatda yozib bitirgan."
      }
    ]
  },
  {
    id: 'boburnoma',
    title: "Boburnoma",
    author: "Zahiriddin Muhammad Bobur",
    year: "1530",
    category: "uzbek",
    categoryName: "O'zbek Badiiy Durdonalari",
    badge: "Jahon Qomusiy Merosi",
    coverGradient: "linear-gradient(135deg, #854d0e, #ca8a04)",
    icon: "fa-compass",
    pages: 420,
    readTime: "6.0 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "Bobur Mirzoning shaxsiy xotiralari, Farg'ona, Samarqand, Afg'oniston va Hindistonning tabiati, odamlari, mevalari, hayvonot olami va tarixiy janglarining haqqoniy tavsifi.",
    quotes: [
      "«Har kimki vafo qilsa — vafo topqusidur, Har kimki jafo qilsa — jafo topqusidur.»",
      "«Yaxshiliq qilg'il, agar qo'lingdan kelsa!»"
    ],
    characters: [
      { name: "Bobur", desc: "Zafarlar va mag'lubiyatlarni xolis qalamga olgan shoh va shoir." }
    ],
    chapters: [
      {
        title: "1-bob: Andijon va Farg'ona viloyati tavsifi",
        content: `Farg'ona viloyati beshinchi iqlimdandur. Kengligi va obodligi bilan mashhurdur. Andijon shahri uning poytaxtidur. Don-duni mo'l, mevalari g'oyat totlidur, xususan qovun va uzumi beqiyosdur.\n\nOdamlari turkiygo'y va xushsuhbatdurlar. Mirzo Ulug'bek davrida bu yerda ko'plab bog'lar va ariqlar barpo etilgan edi.`
      },
      {
        title: "2-bob: Hindiston hayvonot va nabotot olami",
        content: `Hindiston g'aroyib bir o'lkadur. Bizning yerlarga o'xshamaydigan o'zgacha bir olam: tog'lari, daryolari, daraxtlari va hayvonlari mutlaqo boshqacha.\n\nFili ulkan va aqlli jonivordur, u odamning har bir buyrug'ini tushunadi. Tovuslari esa ko'z qamashtiruvchi go'zal parlar bilan bezangan.`
      }
    ],
    quiz: [
      {
        q: "\"Boburnoma\" asari qaysi janrga oid?",
        options: ["Tarixiy-memuar (avtobiografik solnoma)", "Doston", "Roman", "Ertak"],
        answer: 0,
        explanation: "Asar jahon adabiyotidagi eng dastlabki va mukammal memuar (xotira) durdonalaridandir."
      },
      {
        q: "Asarda qaysi hududlarning tabiati va geografiyasi batafsil yoritilgan?",
        options: [
          "Farg'ona, Movarounnahr, Afg'oniston va Hindiston",
          "Faqat Yevropa",
          "Amerika va Afrika",
          "Faqat Xitoy"
        ],
        answer: 0,
        explanation: "Bobur o'zi bosib o'tgan Markaziy Osiyo, Kobul va Hindiston yerlarini batafsil tasvirlaydi."
      },
      {
        q: "\"Boburnoma\" qaysi tilda yozilgan?",
        options: ["Eski turkiy (o'zbek) tilida", "Forschada", "Arabchada", "Urdu tilida"],
        answer: 0,
        explanation: "Bobur o'z xotiralarini ona tili bo'lmish turkiy tilda ravon va sodda uslubda yozgan."
      },
      {
        q: "Bobur asarda qaysi shaharning qovunlarini o'zgacha mehr bilan eslaydi?",
        options: ["Andijon va Farg'ona qovunlarini", "Misr qovunlarini", "Eron tarvuzlarini", "Hindiston mevalarini"],
        answer: 0,
        explanation: "Bobur umr bo'yi ona yurti Andijonning shirin qovunlarini sog'inib yashaydi."
      },
      {
        q: "\"Boburnoma\" dunyoning qancha tillariga tarjima qilingan?",
        options: ["30 dan ortiq jahon tillariga", "Faqat 2 ta tilga", "Hech qaysi tilga", "Faqat rus tiliga"],
        answer: 0,
        explanation: "Asar ingliz, fransuz, nemis, yapon kabi o'nlab dunyo tillariga tarjima qilingan."
      }
    ]
  },
  {
    id: 'ufq',
    title: "Ufq (Trilogiya)",
    author: "Said Ahmad",
    year: "1974",
    category: "uzbek",
    categoryName: "O'zbek Badiiy Durdonalari",
    badge: "O'zbek Trilogiyasi",
    coverGradient: "linear-gradient(135deg, #c2410c, #f97316)",
    icon: "fa-sun",
    pages: 620,
    readTime: "8.5 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "Katta Farg'ona kanali qurilishi, Ikkinchi jahon urushi yillari va urushdan keyingi tiklanish davrini qamrab olgan Said Ahmadning monumental trilogiyasi.",
    quotes: [
      "«Inson matonati har qanday to'siqni yengib o'tishga qodirdir.»",
      "«Qalb pokligi bo'lmasa, har qanday yutuq omonatdir.»"
    ],
    characters: [
      { name: "Ikromjon", desc: "Or-nomusli, qat'iyatli, fojialarni mardonavor yenggan ota." },
      { name: "Jannat xola", desc: "Mehribon, g'amxo'r va sabrli o'zbek onasi." },
      { name: "Tursunboy", desc: "Frontdan qochgan, o'z oilasiga dog' tushirgan fojiali obraz." },
      { name: "Dildor", desc: "Vafodor va matonatli o'zbek kelini." }
    ],
    chapters: [
      {
        title: "1-bob: Katta Farg'ona kanali hayqirig'i",
        content: `O'n minglab odamlar ketmon va belkurak bilan Farg'ona vodiysiga obi hayot olib kirish uchun birlashgan edilar. Har bir qazilgan metrda xalqning birdamligi va qudrati ko'rinardi.\n\nIkromjon va Jannat xola bu ulkan bunyodkorlikning boshida turib, kelajakka katta umid bilan boqishardi.`
      },
      {
        title: "2-bob: Urush sinovlari va Ota oriyati",
        content: `Urush boshlangach, qishloq xonadonlariga og'ir sinovlar yog'ildi. Ikromjon o'g'li Tursunboyning qilmishini bilgach, yuragiga xanjar urilgandek bo'ldi.\n\nO'zbek xalqining oriyati, mehr-oqibati va qadriyatlari bu asarda butun bo'y-basti bilan ko'rsatilgan.`
      }
    ],
    quiz: [
      {
        q: "\"Ufq\" trilogiyasining muallifi kim?",
        options: ["Said Ahmad", "O'tkir Hoshimov", "G'afur G'ulom", "Abdulla Qahhor"],
        answer: 0,
        explanation: "Asar O'zbekiston Qahramoni va xalq yozuvchisi Said Ahmad qalamiga mansub."
      },
      {
        q: "\"Ufq\" asari necha qism (kitob)dan iborat?",
        options: ["3 qismdan (Trilogiya)", "2 qismdan", "4 qismdan", "Yagona roman"],
        answer: 0,
        explanation: "«Qirq besh kun», «Hijron kunlarida», «Ufq bo'sag'asida» nomli uch qismdan iborat."
      },
      {
        q: "Asarda qaysi ulkan tarixiy bunyodkorlik voqeasi tasvirlanadi?",
        options: ["Katta Farg'ona kanali qurilishi", "Toshkent metrosi", "Orol dengizi to'g'oni", "Chorvoq suv ombori"],
        answer: 0,
        explanation: "Trilogiyaning birinchi kitobida Katta Farg'ona kanali qurilishi keng yoritilgan."
      },
      {
        q: "Trilogiyada or-nomusli ota timsoli bo'lgan bosh qahramon kim?",
        options: ["Ikromjon", "Tursunboy", "Nizomjon", "Mirvali"],
        answer: 0,
        explanation: "Ikromjon — oriyatli, halol va matonatli o'zbek otasi timsoli."
      },
      {
        q: "Said Ahmad yana qaysi mashhur komediya asari bilan mashhur?",
        options: ["«Kelinlar qo'zg'oloni»", "«Maysaraning ishi»", "«Boy ila xizmatchi»", "«Paranji sirlari»"],
        answer: 0,
        explanation: "Said Ahmad «Kelinlar qo'zg'oloni» pyesasi bilan ham butun dunyoga tanilgan."
      }
    ]
  },
  {
    id: 'qutadgu-bilig',
    title: "Qutadg'u Bilig",
    author: "Yusuf Xos Hojib",
    year: "1069",
    category: "uzbek",
    categoryName: "O'zbek Badiiy Durdonalari",
    badge: "Qadimiy Hikmat Durlari",
    coverGradient: "linear-gradient(135deg, #4c1d95, #6d28d9)",
    icon: "fa-scale-balanced",
    pages: 380,
    readTime: "5.5 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "«Saodatga eltuvchi bilim» — Qoraxoniylar davrida yaratilgan, davlat boshqaruvi, adolat, aql, qanoat va insoniylik qoidalarini she'riy doston shaklida ifodalagan qadimiy turkiy durdona.",
    quotes: [
      "«Zakovat qayda bo'lsa — ulug'lik bo'lur, Bilim kimda bo'lsa — buyuklik bo'lur.»",
      "«Adolat — davlatning eng mustahkam poydevoridir.»"
    ],
    characters: [
      { name: "Kuntug'di (Hukmdor)", desc: "Adolat va qonun timsoli." },
      { name: "Oytoldi (Vazir)", desc: "Davlat va baxt timsoli." },
      { name: "O'gdulmish (Vazir o'g'li)", desc: "Aql va zakovat timsoli." },
      { name: "O'zg'urmish (Zohid)", desc: "Qanoat va oxirat timsoli." }
    ],
    chapters: [
      {
        title: "1-bob: Bilim va Aqlning fazilati",
        content: `Yusuf Xos Hojib aytadi: insonni hayvonotdan ajratib turuvchi narsa bu — aql va bilimdir. Bilimli inson qorong'u tunda mash'ala kabi yo'l ko'rsatadi.\n\nHukmdor o'z fuqarolariga adolat bilan qarashi, olimlarni hurmat qilishi va ilm egalarini qo'llab-quvvatlashi lozim.`
      },
      {
        title: "2-bob: Adolat va Qanoat siri",
        content: `Kuntug'di adolat tarozisini teng ushladi. Chunki adolatsiz saltanat xuddi qum ustiga qurilgan saroy kabi tezda qulab tushadi.\n\nO'zg'urmish esa qanoatning buyuk boylik ekanini, ochko'zlik insonni tubanlikka olib borishini ta'kidlaydi.`
      }
    ],
    quiz: [
      {
        q: "\"Qutadg'u bilig\" so'zining ma'nosi nima?",
        options: ["«Saodatga eltuvchi bilim»", "«Tarix saboqlari»", "«Donolik kitobi»", "«Yulduzlar ilmi»"],
        answer: 0,
        explanation: "«Qut» — saodat, baxt; «bilig» — bilim, ya'ni «Saodatga eltuvchi bilim» degan ma'noni bildiradi."
      },
      {
        q: "Asar muallifi kim?",
        options: ["Yusuf Xos Hojib", "Mahmud Qoshg'ariy", "Ahmad Yugnakiy", "Xoja Ahmad Yassaviy"],
        answer: 0,
        explanation: "Asar XI asrda Qoshg'arda yashagan mutafakkir Yusuf Xos Hojib tomonidan yozilgan."
      },
      {
        q: "Dostonda Kuntug'di elik (hukmdor) nimaning timsoli?",
        options: ["Adolat va qonun timsoli", "Aql timsoli", "Boylik timsoli", "Qanoat timsoli"],
        answer: 0,
        explanation: "Kuntug'di — to'g'rilik, qonun va adolat ramzidir."
      },
      {
        q: "Asar qaysi qadimiy turkiy davlat davrida yaratilgan?",
        options: ["Qoraxoniylar davlati", "G'aznaviylar davlati", "Saljuqiylar", "Temuriylar"],
        answer: 0,
        explanation: "Asar 1069–1070 yillarda Qoraxoniylar davlatida yozilgan."
      },
      {
        q: "\"Qutadg'u bilig\" qanday vaznda yozilgan?",
        options: ["Aruz vaznida (mutaqorib bahrida)", "Barmoq vaznida", "Erkin she'r", "Nasriy bayon"],
        answer: 0,
        explanation: "Doston turkiy tildagi aruz vaznining mutaqorib bahrida yozilgan ilk buyuk namunadir."
      }
    ]
  }
];

// ============================================================
// PART 2: BOLALAR VA JAHON KLASSIKASI (13-24)
// ============================================================
var BOOKS_PART_2 = [
  {
    id: 'sariq-devni-minib',
    title: "Sariq Devni Minib",
    author: "Xudoyberdi To'xtaboyev",
    year: "1968",
    category: "kids",
    categoryName: "Bolalar & Sarguzasht",
    badge: "O'zbek Bolalar Klassikasi",
    coverGradient: "linear-gradient(135deg, #d97706, #b45309)",
    icon: "fa-wand-magic-sparkles",
    pages: 280,
    readTime: "4.5 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "Hoshimjonning sehrli qalpoqcha topib olishi, dangasalik va maqtanchoqlik tufayli boshiga tushgan qiziqarli hamda ibratli sarguzashtlari. Butun dunyo bolalari sevib o'qiydigan o'zbek ertak-qissasi.",
    quotes: [
      "«Hunar o'rganmay turib, sehr-jodu bilan baxtli bo'lib bo'lmaydi.»",
      "«Har bir yutuqning orqasida tinimsiz peshona teri va sabr yotadi.»"
    ],
    characters: [
      { name: "Hoshimjon", desc: "Bosh qahramon, biroz dangasa ammo topqir va samimiy bolakay." },
      { name: "Oyposhsha xola", desc: "Hoshimjonning mehribon va koyuvchi onasi." },
      { name: "Dono o'qituvchi", desc: "Hoshimjonga haqiqiy ilm va mehnat qadrini tushuntirgan muallim." }
    ],
    chapters: [
      {
        title: "1-bob: Sehrli qalpoqchaning topilishi",
        content: `Eski sandiqni titkilayotib, bir chekkada chang bosib yotgan g'alati kigiz qalpoqchaga ko'zim tushdi. Qalpoqchani boshimga kiygan edim, ko'zguda o'zimni ko'rmay qoldim!\n\n"Yo tavba, nahotki ko'rinmas bo'lib qolgan bo'lsam?!" deb baqirib yubordim. Shu kundan boshlab mening butun hayotim ostin-ustun bo'lib ketdi. Sehrli kuch menga baxt emas, faqat sarguzasht va tashvish keltirishini hali bilmas edim.`
      },
      {
        title: "2-bob: Ko'rinmas bolaning maktabdagi qiliqlari",
        content: `Maktabga borib darsda o'tirdim. Hamma meni yo'q deb o'ylardi. O'qituvchining jurnali o'z-o'zidan varaqlanar, doskaga bo'r o'zi yozardi.\n\nBolalar hayron, muallimlar dovdirab qoldi. Ammo bu qiliqlarim bilan bilim ololmasligimni, yolg'on va dangasalik uzoqqa bormasligini tez orada o'z boshimdan o'tkazib tushunib yetdim.`
      }
    ],
    quiz: [
      {
        q: "\"Sariq devni minib\" qissasining bosh qahramoni kim?",
        options: ["Hoshimjon", "Qoravoy", "Akrom", "Doniyor"],
        answer: 0,
        explanation: "Asarning bosh qahramoni — sehrli qalpoqchani topib olgan Hoshimjondir."
      },
      {
        q: "Hoshimjon sandiqdan qanday sehrli buyum topib oladi?",
        options: ["Sehrli qalpoqcha (ko'rinmas qiluvchi)", "Uchar gilam", "Sehrli tayoqcha", "Oltin kalit"],
        answer: 0,
        explanation: "Hoshimjon boshiga kiysa odamni ko'rinmas qilib qo'yadigan sehrli qalpoqchani topadi."
      },
      {
        q: "Asar muallifi Xudoyberdi To'xtaboyev qanday unvonga ega bo'lgan?",
        options: ["O'zbekiston xalq yozuvchisi", "Xalq shoiri", "Akademik", "Davlat mukofoti laureati"],
        answer: 0,
        explanation: "Xudoyberdi To'xtaboyev O'zbekiston xalq yozuvchisi va jahon bolalar adabiyoti klassigidir."
      },
      {
        q: "Hoshimjon qissaning oxirida qanday xulosaga keladi?",
        options: [
          "Sehr-jodu emas, halol mehnat va ilm insonni baxtli qilishini anglaydi",
          "Yana bitta sehrli buyum izlashga ketadi",
          "Ko'rinmas bo'lib yashashni davom ettiradi",
          "Sayohatga jo'nab ketadi"
        ],
        answer: 0,
        explanation: "Hoshimjon sehrli qalpoqchadan voz kechib, o'z kuchi va mehnati bilan o'qishga ahd qiladi."
      },
      {
        q: "Ushbu asar chet tillariga qanday nomlar bilan tarjima qilingan?",
        options: [
          "«Sehrli qalpoqcha» va «Sariq devni minib»",
          "«Oltin kuz»",
          "«Bolalik xotiralari»",
          "«Uchar gilamcha»"
        ],
        answer: 0,
        explanation: "Asar nemis, fransuz, rus va boshqa 30 dan ortiq tillarda millionlab nusxada nashr etilgan."
      }
    ]
  },
  {
    id: 'shirin-qovunlar',
    title: "Shirin Qovunlar Mamlakati",
    author: "Xudoyberdi To'xtaboyev",
    year: "1977",
    category: "kids",
    categoryName: "Bolalar & Sarguzasht",
    badge: "Sarguzasht & Fantastika",
    coverGradient: "linear-gradient(135deg, #15803d, #65a30d)",
    icon: "fa-seedling",
    pages: 240,
    readTime: "3.5 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "Sehrli qovun urug'lari, do'stlik sadoqati va bolalarning sirli mamlakat bo'ylab kechgan hayajonli sayohati haqidagi sarguzasht qissa.",
    quotes: [
      "«Dunyodagi eng shirin meva — halol mehnat mevasi!»",
      "«Haqiqiy do'st kulfatda ham, quvonchda ham yoningda turadi.»"
    ],
    characters: [
      { name: "Akrom", desc: "Sarguzashtsevar va jasur o'quvchi." },
      { name: "Mirvali", desc: "Topqir, kulgisevar va do'stiga sodiq sherik." },
      { name: "Qovunpaz bobo", desc: "Mo''jizakor qovunlar yetishtiruvchi donishmand bog'bon." }
    ],
    chapters: [
      {
        title: "1-bob: Bog'dagi sirli urug'lar",
        content: `Bobomning bog'ida pishgan qovunlarning hidi butun qishloqni tutib ketardi. Bir kuni bobom menga eski charm xaltachani ko'rsatdi: "Bu oddiy urug' emas, bolam, har bir urug'ida buyuk qudrat yashiringan."\n\nDo'stim Mirvali bilan urug'larni ekkanimizda, ko'z o'ngimizda osmonga bo'y cho'zgan ulkan mo''jizaviy qovunlar paydo bo'ldi.`
      },
      {
        title: "2-bob: Shirin Qovunlar yurtiga parvoz",
        content: `Biz ulkan qovun ichiga kirib o'tirdik va u xuddi havo sharidek ko'kka ko'tarildi. Pastda daryolar, yam-yashil vodiylar kaftdek ko'rinardi.\n\nBiz bolalik orzusi haqiqatga aylanadigan, mehnatsevar odamlar yashaydigan Shirin Qovunlar mamlakatiga yetib bordik.`
      }
    ],
    quiz: [
      {
        q: "\"Shirin qovunlar mamlakati\" asarining muallifi kim?",
        options: ["Xudoyberdi To'xtaboyev", "Anvar Obidjon", "Zahir A'lam", "Po'lat Mo'min"],
        answer: 0,
        explanation: "Asar atoqli bolalar adibi Xudoyberdi To'xtaboyev tomonidan yaratilgan."
      },
      {
        q: "Asarda qahramonlarga sarguzasht eshigini ochgan narsa nima edi?",
        options: ["Sehrli qovun urug'lari", "Eski xarita", "Sehrli kitob", "Yashirin g'or"],
        answer: 0,
        explanation: "Ekilganda mo''jizakor hosil beruvchi qadimiy qovun urug'lari sarguzasht sababchisi bo'ladi."
      },
      {
        q: "Asar bolalarga qanday bosh g'oyani singdiradi?",
        options: [
          "Halol mehnat, tabiatni sevish va do'stlik qadrini",
          "Darslardan qochishni",
          "Tezda boy bo'lib ketishni",
          "Faqat uxlashni"
        ],
        answer: 0,
        explanation: "Qissa dehqonchilik mehnati, sadoqat va do'stlik tuyg'ularini tarannum etadi."
      },
      {
        q: "Akromning sodiq hamrohi va do'stining ismi kim?",
        options: ["Mirvali", "Hoshimjon", "Rustam", "Sobir"],
        answer: 0,
        explanation: "Akromning sadoqatli va quvnoq do'sti — Mirvaliy bo'lgan."
      },
      {
        q: "Xudoyberdi To'xtaboyev qaysi xalqaro mukofot bilan taqdirlangan?",
        options: ["G.X. Andersen nomidagi xalqaro faxriy diplom", "Nobel mukofoti", "Oskar", "Pulitser"],
        answer: 0,
        explanation: "Adib bolalar adabiyotidagi xizmatlari uchun Andersen xalqaro faxriy diplomiga sazovor bo'lgan."
      }
    ]
  },
  {
    id: 'sehrli-qalpoqcha',
    title: "Sehrli Qalpoqcha (Amanullo va Zumrad)",
    author: "Xudoyberdi To'xtaboyev",
    year: "1972",
    category: "kids",
    categoryName: "Bolalar & Sarguzasht",
    badge: "Ertak-Qissa",
    coverGradient: "linear-gradient(135deg, #0284c7, #06b6d4)",
    icon: "fa-hat-wizard",
    pages: 210,
    readTime: "3.2 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "Adolat, mehr-oqibat va bolalarning qiziqarli sarguzashtlari orqali ezgulikning yovuzlik ustidan g'alabasi tarannum etilgan quvnoq asar.",
    quotes: [
      "«Qalbing toza bo'lsa, har qanday mo''jiza senga do'st bo'ladi.»",
      "«Yaxshilik qilgan inson aslo yutqazmaydi.»"
    ],
    characters: [
      { name: "Amanullo", desc: "Zehnli va odobli qahramon." },
      { name: "Zumrad", desc: "Mehnatkash, oqko'ngil qizcha." }
    ],
    chapters: [
      {
        title: "1-bob: Kutilmagan sovg'a",
        content: `Qishloq chetidagi qadimiy chinor tagida bolalar ajoyib bir hodisaga guvoh bo'ldilar. Daraxt kovagidan topilgan sirli buyum ularni yangi sinovlar sari chorladi.\n\nAmanullo va Zumrad bu sirni faqat yaxshilik yo'lida ishlatishga ahd qildilar.`
      },
      {
        title: "2-bob: Ezgulik yo'lidagi sinov",
        content: `Yovuz niyatli kishilar sirli kuchni o'z manfaatlari yo'lida ishlatmoqchi bo'lishdi. Ammo bolalarning aqli va o'zaro hamjihatligi barcha hiylalarni chippakka chiqardi.`
      }
    ],
    quiz: [
      {
        q: "\"Sehrli qalpoqcha\" turkumidagi asarlar qaysi yozuvchi qalamiga mansub?",
        options: ["Xudoyberdi To'xtaboyev", "G'afur G'ulom", "Oybek", "Said Ahmad"],
        answer: 0,
        explanation: "Asar bolalar adibi Xudoyberdi To'xtaboyev tomonidan yozilgan."
      },
      {
        q: "Asarda qahramonlarga eng katta yordam bergan fazilat nima?",
        options: ["Aql-zakovat va ahillik", "Baland bo'y", "Ko'p pul", "Jismoniy qurol"],
        answer: 0,
        explanation: "Bolalarning birdamligi, samimiyligi va to'g'riso'zligi ularga g'alaba keltiradi."
      },
      {
        q: "Ushbu ertak-qissaning bosh g'oyasi nima?",
        options: ["Ezgulikning yovuzlik ustidan g'alabasi", "Tabiatni ifloslantirish", "Darslardan qochish", "Yolg'onchilik"],
        answer: 0,
        explanation: "Asar hamisha adolat va ezgulik barqaror bo'lishini ko'rsatadi."
      },
      {
        q: "Muallif o'z asarlarida bolalarni nimalarga chorlaydi?",
        options: ["Kitob o'qish, bilim olish va mehnatga", "Faqat o'yin o'ynashga", "Dangasalikka", "Maktanishga"],
        answer: 0,
        explanation: "Xudoyberdi To'xtaboyev yoshlarni ilmga, kitobxonlikka va halollikka undagan."
      },
      {
        q: "Xudoyberdi To'xtaboyev qaysi viloyatda tug'ilgan?",
        options: ["Farg'ona viloyatida (Beshariq)", "Samarqandda", "Xorazmda", "Buxoroda"],
        answer: 0,
        explanation: "Yozuvchi Farg'ona viloyatining Katta Tagob qishlog'ida dunyoga kelgan."
      }
    ]
  },
  {
    id: 'molxona',
    title: "Molxona (Hayvonlar Xo'jaligi)",
    author: "Jorj Oruell",
    year: "1945",
    category: "world",
    categoryName: "Jahon Klassikasi",
    badge: "Falsafiy Masal-Satira",
    coverGradient: "linear-gradient(135deg, #7f1d1d, #b91c1c)",
    icon: "fa-piggy-bank",
    pages: 140,
    readTime: "2.5 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "Fermadagi jonivorlarning zulmdan qutulish va adolatli jamiyat qurish uchun boshlagan isyoni hamda hokimiyat ta'sirida erkinlik g'oyalarining qanday buzib ko'rsatilishi haqidagi mashhur antiutopik satira.",
    quotes: [
      "«Barcha hayvonlar tengdir, ammo ba'zi hayvonlar boshqalardan ko'ra tengroqdirlar.»",
      "«To'rtta oyoq — yaxshi, ikki oyoq — yomon!»"
    ],
    characters: [
      { name: "Napoleon", desc: "Ayyor, shafqatsiz cho'chqa, fermada mutlaq diktatura o'rnatadi." },
      { name: "Snouboll", desc: "G'oyaviy, islohotchi cho'chqa, keyinchalik quvg'in qilinadi." },
      { name: "Bokser", desc: "Mehnatkash ot, «Men yanada ko'proq ishlayman» shiori ostida fidokorona yashaydi." },
      { name: "Mayjor", desc: "Eski donishmand cho'chqa, isyon g'oyasini ilgari surgan asoschi." }
    ],
    chapters: [
      {
        title: "1-bob: Mayjorning vasiyati va Isyon tongi",
        content: `Janob Jons fermasida zulm ostida yashayotgan jonivorlar qari Mayjorning chorlovi bilan omborga to'plandilar. Mayjor ularga insoniyatning shafqatsizligi, hayvonlar mehnati ekspluatatsiya qilinayotgani haqida so'zladi.\n\n"Barcha hayvonlar birodardir! Biz o'z huquqlarimiz uchun birlashishimiz lozim", dedi u. Mayjor vafot etgach, jonivorlar Jonsni quvib chiqarib, fermani o'z qo'llariga oldilar.`
      },
      {
        title: "2-bob: Yetti aqidaning o'zgarishi va Hokimiyat fojiasi",
        content: `Devorga yetti aqida yozildi. Eng asosiysi: "Barcha hayvonlar tengdir" degan qoida edi. Biroq vaqt o'tishi bilan Napoleon boshchiligidagi cho'chqalar hokimiyatni to'liq o'zlashtirib oldilar.\n\nAqidalar birin-ketin o'chirilib, oxiri mashhur so'zga aylandi: "Barcha hayvonlar tengdir, ammo ba'zi hayvonlar boshqalardan ko'ra tengroqdirlar." Jonivorlar derazadan cho'chqalarga va odamlarga qarab, kim cho'chqa, kim odam ekanini ajrata olmay qoldilar.`
      }
    ],
    quiz: [
      {
        q: "\"Molxona\" (Animal Farm) qissasining muallifi kim?",
        options: ["Jorj Oruell (George Orwell)", "Ernest Xeminguey", "Frants Kafka", "Rey Bredberi"],
        answer: 0,
        explanation: "Asar mashhur ingliz yozuvchisi Jorj Oruell tomonidan 1945-yilda yozilgan."
      },
      {
        q: "Fermadagi jonivorlarni isyonga da'vat etgan qari donishmand cho'chqaning ismi nima?",
        options: ["Mayjor", "Napoleon", "Snouboll", "Bokser"],
        answer: 0,
        explanation: "Qari Mayjor jonivorlarga ozodlik haqida tush ko'rganini aytib, isyonga ruhlantiradi."
      },
      {
        q: "Asarning eng mashhur va yakuniy o'zgargan shiori qaysi?",
        options: [
          "«Barcha hayvonlar tengdir, ammo ba'zilari tengroqdirlar»",
          "«Hamma hayvonlar erkin»",
          "«Insonlar bizning do'stimiz»",
          "«Ishlash shart emas»"
        ],
        answer: 0,
        explanation: "Bu mashhur aforizm diktatura va tengsizlikning ramziy ifodasiga aylangan."
      },
      {
        q: "«Men yanada ko'proq ishlayman» shiori bilan mehnat qilgan fojiali qahramon kim?",
        options: ["Bokser (ot)", "Klover", "Benjamin", "Mozes"],
        answer: 0,
        explanation: "Bokser halol va fidokorona mehnat qiladi, ammo keksaygach xoinlarcha sotib yuboriladi."
      },
      {
        q: "Jorj Oruell bu asar orqali qanday tuzumni satira (fosh) qilgan?",
        options: [
          "Totalitar tuzum va shaxsga sig'inish diktaturasini",
          "Fermerlik texnikalarini",
          "Kosmik parvozlarni",
          "Qadimgi Rim tarixini"
        ],
        answer: 0,
        explanation: "Oruell inqilobiy g'oyalarning diktatura va zulmga aylanish xavfini o'tkir satira orqali ochib bergan."
      }
    ]
  },
  {
    id: 'oq-kema',
    title: "Oq Kema",
    author: "Chingiz Aytmatov",
    year: "1970",
    category: "world",
    categoryName: "Jahon Badiiy Durdonasi",
    badge: "Dramatik Shoh Asar",
    coverGradient: "linear-gradient(135deg, #0e7490, #0284c7)",
    icon: "fa-ship",
    pages: 180,
    readTime: "3.0 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "Issiqko'l bo'yidagi o'rmon qo'ynida yashovchi yetti yoshli orzumand yetim bola, uning bobosi Mo'min chol va Shoxdor Ona bug'u afsonasi haqidagi lirik va fojeiy qissa.",
    quotes: [
      "«Bolalik — inson umrining poydevoridir. U qanday qurilsa, umr binosi ham shunday bo'ladi.»",
      "«Odam bolasi o'z vijdoni oldida javobgar bo'lib yashashi kerak.»"
    ],
    characters: [
      { name: "Bola", desc: "Yetim, durbin orqali Oq kema sari suzib ketishni orzu qiluvchi yetti yoshli pok qalb." },
      { name: "Mo'min bobo", desc: "Mehribon, sodda, Ona bug'u afsonasini nevarasiga uqtirgan kishi." },
      { name: "O'rozqul", desc: "Zolim, aroqxo'r, tabiat va insoniyat qadrini bilmaydigan o'rmonchi." }
    ],
    chapters: [
      {
        title: "1-bob: Issiqko'l sohilidagi bolalik va Durbin",
        content: `Bolaning ikkita ertagi bor edi. Biri o'zining ertagi bo'lib, unga ko'ra bola baliqqa aylanib, Issiqko'lda suzib yurgan viqorli Oq kemaga yetib borar va u yerda xizmat qilayotgan otasiga ko'rinardi.\n\nIkkinchi ertakni esa Mo'min bobosi aytib bergandi: bu qadimiy va muqaddas Shoxdor Ona bug'u afsonasi edi.`
      },
      {
        title: "2-bob: Ona bug'uning fojiasi",
        content: `O'rmonga uzoq yillardan so'ng Ona bug'u qaytib keldi. Bolaning quvonchi cheksiz edi. Ammo O'rozqulning shafqatsizligi va aroqxo'rligi bu muqaddas jonivorning qonini to'kishga olib keldi.\n\nMo'min boboning majburan bu ishga sherik qilinishi bolaning yuragidagi barcha pok orzularni sindirdi. Bola daryo tomon chopib, baliq bo'lib suzib ketishni tanladi...`
      }
    ],
    quiz: [
      {
        q: "\"Oq kema\" qissasining muallifi kim?",
        options: ["Chingiz Aytmatov", "Rasul Hamzatov", "Vasiliy Shukshin", "Nodar Dumbadze"],
        answer: 0,
        explanation: "Asar buyuk qirg'iz va jahon adibi Chingiz Aytmatov tomonidan yaratilgan."
      },
      {
        q: "Bosh qahramon bo'lgan bolaning yoshi nechada edi?",
        options: ["7 yoshda", "12 yoshda", "15 yoshda", "5 yoshda"],
        answer: 0,
        explanation: "Qissadagi orzumand yetim bolakay 7 yoshda bo'lgan."
      },
      {
        q: "Mo'min bobo nevarasiga qaysi qadimiy totemik afsonani aytib berardi?",
        options: ["Shoxdor Ona bug'u afsonasini", "Oltin baliq ertagini", "Semurg' qush afsonasini", "Uchar ot qissasini"],
        answer: 0,
        explanation: "Bug'u urug'ining muqaddas himoyachisi — Shoxdor Ona bug'u afsonasi asar markazida turadi."
      },
      {
        q: "Bolakay durbini orqali nimalarni tomosha qilardi?",
        options: [
          "Issiqko'lda suzayotgan Oq kemani va tog'larni",
          "Faqat avtobuslarni",
          "Shahardagi uylarni",
          "Yulduzlarni"
        ],
        answer: 0,
        explanation: "Bola baland tepalikka chiqib, ko'lda suzayotgan oppoq kemani mehr bilan kuzatardi."
      },
      {
        q: "Qissaning fojeiy yakunida bola nima qilishni orzu qiladi?",
        options: [
          "Baliqqa aylanib, daryo bo'ylab Oq kema sari suzib ketishni",
          "Shahar maktabiga qochib ketishni",
          "O'rmonchi bo'lishni",
          "Ovchi bo'lishni"
        ],
        answer: 0,
        explanation: "Bola yovuzlikka to'la dunyodan baliq kabi poklik sari suzib ketishni afzal ko'radi."
      }
    ]
  },
  {
    id: 'alvido-gulsari',
    title: "Alvido, Gulsari!",
    author: "Chingiz Aytmatov",
    year: "1966",
    category: "world",
    categoryName: "Jahon Badiiy Durdonasi",
    badge: "Sadoqat va Hayot Qissasi",
    coverGradient: "linear-gradient(135deg, #1e293b, #475569)",
    icon: "fa-horse",
    pages: 220,
    readTime: "3.5 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "Keksaygan cho'pon Tanabay va uning sadoqatli yo'rg'asi Gulsarining birgalikda kechirgan shonli, zahmatli va fojiali umr yo'li orqali inson va tabiat uyg'unligi aks etgan shoh asar.",
    quotes: [
      "«Ot — insonning qanotidir. Sadoqatli do'stdan ayrilish esa yurakni pora qiladi.»",
      "«Haqiqat yo'lida chekilgan zahmat hech qachon zoye ketmaydi.»"
    ],
    characters: [
      { name: "Tanabay", desc: "Halol, qat'iyatli, butun umrini mehnatga bag'ishlagan cho'pon." },
      { name: "Gulsari", desc: "Tez yurar, go'zal, egasiga cheksiz sadoqatli yo'rg'a ot." }
    ],
    chapters: [
      {
        title: "1-bob: Gulsarining so'nggi nafaslari",
        content: `Qorli tog' yo'lida keksaygan Tanabay o'zining sevimli oti Gulsari bilan to'xtadi. Ot holdan toygan, ko'zlarida butun umrning xotiralari charx urardi.\n\nTanabay uning yoniga cho'kkalab, yoshlik yillarini, Gulsarining shamoldek yelgan chog'larini ko'z oldiga keltirdi.`
      },
      {
        title: "2-bob: Yoshlik shukuhi va Sadoqat darsi",
        content: `Gulsari oddiy ot emas, Tanabayning qalb sirdoshi edi. Kolxoz rahbarlarining zulmi, qishning qahraton sinovlarida ham ular bir-biriga tayanch bo'ldilar.\n\nInson va jonivor o'rtasidagi bu ulug' rishta sadoqatning eng yuksak cho'qqisi edi.`
      }
    ],
    quiz: [
      {
        q: "\"Alvido, Gulsari!\" asaridagi Gulsari kim yoki nima?",
        options: ["Sadoqatli yo'rg'a ot", "Bosh qahramonning qizi", "Katta daryo", "Qadimiy qishloq"],
        answer: 0,
        explanation: "Gulsari — Tanabayning afsonaviy, tez yurar va sadoqatli yo'rg'a oti."
      },
      {
        q: "Asarning bosh qahramoni bo'lgan keksa cho'pon kim?",
        options: ["Tanabay", "Mo'min bobo", "Yedigey", "Ilyos"],
        answer: 0,
        explanation: "Tanabay — umrini chorvachilik va halol mehnatga bag'ishlagan qahramon."
      },
      {
        q: "Asar qaysi buyuk yozuvchi tomonidan yozilgan?",
        options: ["Chingiz Aytmatov", "Muxtor Avezov", "O'lmas Umarbekov", "Shukur Xolmirzayev"],
        answer: 0,
        explanation: "Asar Chingiz Aytmatovning eng mashhur lirik-falsafiy qissalaridandir."
      },
      {
        q: "Asardagi asosiy falsafiy g'oya nima?",
        options: [
          "Inson va tabiat uyg'unligi hamda sadoqat qadri",
          "Faqat boylik orttirish",
          "Kosmik kashfiyotlar",
          "Shahar hayoti qulayliklari"
        ],
        answer: 0,
        explanation: "Asar inson va jonivor o'rtasidagi vafodorlik, vijdon va hayot sinovlarini kuylaydi."
      },
      {
        q: "Asar qaysi xalqaro mukofotlarga loyiq ko'rilgan?",
        options: ["Davlat mukofoti va jahon miqyosidagi e'tirof", "Pulitser", "Oskar", "Buker"],
        answer: 0,
        explanation: "Qissa sobiq ittifoq davlat mukofotiga sazovor bo'lib, jahon tillariga tarjima qilingan."
      }
    ]
  },
  {
    id: 'asrga-tatigulik-kun',
    title: "Asrga Tatigulik Kun",
    author: "Chingiz Aytmatov",
    year: "1980",
    category: "world",
    categoryName: "Jahon Badiiy Durdonasi",
    badge: "Falsafiy Roman-Ogohnoma",
    coverGradient: "linear-gradient(135deg, #78350f, #b45309)",
    icon: "fa-hourglass-half",
    pages: 420,
    readTime: "6.0 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "Sario'zak biyobonidagi Boranli bekatida kechgan bir kunlik dafn marosimi orqali insoniyat xotirasi, Mankurt afsonasi va koinot sirlari mohirona bog'langan roman.",
    quotes: [
      "«O'z o'tmishini, ota-onasini unutgan inson — eng katta fojiadir.»",
      "«Xotira — insonni inson qilib turuvchi yagona ruhiy mezon.»"
    ],
    characters: [
      { name: "Yedigey (Bo'ronli)", desc: "Matonatli temiryo'lchi, do'stiga sodiq oqsoqol." },
      { name: "Qozong'ap", desc: "Yedigeyning vafot etgan donishmand safdoshi." },
      { name: "Nayman ona", desc: "Mankurt o'g'lini qutqarishga uringan fojiali ona." },
      { name: "Sobitjon", desc: "O'z ildizlarini unutgan, manqurtlashgan zamonaviy kimsa." }
    ],
    chapters: [
      {
        title: "1-bob: Bo'ronli bekatidagi sukunat",
        content: `Sario'zak sahrosi cheksiz edi. Temiryo'l relslari quyosh tig'ida yaltirardi. Bo'ronli bekatida keksaygan Qozong'ap olamdan o'tdi.\n\nYedigey o'zining sevimli tuyasi Qaranorga minib, do'stini qadimiy Ana-Beyit qabristoniga dafn etish uchun yo'lga chiqdi. Bu bir kunlik yo'l uning butun bir asrlik hayotini ko'z oldiga keltirdi.`
      },
      {
        title: "2-bob: Mankurt afsonasi va Ona faryodi",
        content: `Qadimda jujanlar asir tushgan yigitlarning boshiga tuya terisini kiydirib, xotirasidan mahrum qilishar, ularni «mankurt»ga aylantirishardi.\n\nNayman ona o'z o'g'lini izlab cho'llarga bordi. "Isming nima, o'g'lim? Otangning ismi kim?!" deb yig'ladi. Ammo xotirasini yo'qotgan o'g'il o'z onasiga kamondan o'q uzdi...`
      }
    ],
    quiz: [
      {
        q: "\"Asrga tatigulik kun\" romanining muallifi kim?",
        options: ["Chingiz Aytmatov", "Oybek", "Pirimqul Qodirov", "Sharaf Rashidov"],
        answer: 0,
        explanation: "Asar qirg'iz va jahon adabiyoti dahosi Chingiz Aytmatov tomonidan yozilgan."
      },
      {
        q: "Asarda tarixiy xotiradan mahrum qilingan shaxslarga nisbatan qanday atama ishlatilgan?",
        options: ["Mankurt", "Darvesh", "Qul", "Badarg'a"],
        answer: 0,
        explanation: "«Mankurt» — o'z o'tmishi, onasi va milliy ildizlarini unutgan kimsaning ramzi."
      },
      {
        q: "Bosh qahramon Bo'ronli Yedigey qaysi soha vakili edi?",
        options: ["Cho'l bekatidagi temiryo'lchi", "Astronavt", "O'qituvchi", "Harbiy dengizchi"],
        answer: 0,
        explanation: "Yedigey Sario'zak biyobonidagi olis Boranli bekatida xizmat qilgan temiryo'lchidir."
      },
      {
        q: "Qadimiy qabriston nomi qanday atalardi?",
        options: ["Ana-Beyit", "Shohi Zinda", "Chor Bakr", "Xoja Ahror"],
        answer: 0,
        explanation: "Ana-Beyit (Ona qabri) — Mankurt o'g'li qo'lida halok bo'lgan Ona dafn etilgan muqaddas joy."
      },
      {
        q: "Romanda afsona bilan birga qaysi ilmiy-fantastik chiziq ham mavjud?",
        options: [
          "«O'rmon ko'kragi» sayyorasi bilan aloqa va kosmik stansiya",
          "Vaqt mashinasi",
          "Yer osti sivilizatsiyasi",
          "Klonlash loyihasi"
        ],
        answer: 0,
        explanation: "Aytmatov asarda o'zga sayyoraliklar bilan aloqani falsafiy metafora sifatida kiritgan."
      }
    ]
  },
  {
    id: 'kichik-shahzoda',
    title: "Kichik Shahzoda",
    author: "Antuan de Sent-Ekzyuperi",
    year: "1943",
    category: "world",
    categoryName: "Jahon Klassikasi",
    badge: "Falsafiy Shoh Asar",
    coverGradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    icon: "fa-star",
    pages: 110,
    readTime: "2.0 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "Sahroyi Kabirga qulagan uchuvchi va mittigina sayyoradan kelgan sirli bola haqidagi butun jahon bolalari va kattalari uchun tengsiz falsafiy ertak.",
    quotes: [
      "«Faqat qalb bilan ko'rgandagina haqiqatni ko'rish mumkin. Eng muhim narsalar ko'zga ko'rinmaydi.»",
      "«Sen o'zing o'rgatgan, boqib olgan har bir mavjudot uchun umrbod javobgarsan.»"
    ],
    characters: [
      { name: "Kichik Shahzoda", desc: "B-612 asteroididan kelgan beg'ubor, qiziquvchan bolakay." },
      { name: "Uchuvchi", desc: "Saxarada samolyoti buzilib qolgan hikoyachi." },
      { name: "Tulki", desc: "Shahzodaga do'stlik va sadoqat sirini o'rgatgan dono jonivor." },
      { name: "Atirgul", desc: "Shahzodaning sevimli, nozik va erka guli." }
    ],
    chapters: [
      {
        title: "1-bob: B-612 sayyorasi va Atirgul",
        content: `Kichik Shahzodaning uyi bir uychalik keladigan kichkina sayyora — B-612 asteroidi edi. U yerda uchta kichik vulqon va har kuni tozalanadigan baobab nihollari bor edi.\n\nKunlarning birida sayyorada g'aroyib go'zal Atirgul unib chiqdi. U juda nozik va injiq edi. Shahzoda uni jon-dilidan sevib qoldi, ammo gulning erkaliklarini tushunolmay sayohatga otlandi.`
      },
      {
        title: "2-bob: Tulkivoyning buyuk siri",
        content: `Yer sayyorasida Shahzoda dono Tulki bilan uchrashdi. Tulki unga o'rgatilish, ya'ni do'stlashish qadrini tushuntirdi.\n\n"Agar sen meni o'rgatsang, biz bir-birimizga kerak bo'lamiz. Sen men uchun dunyoda yagona bo'lasan, men ham sen uchun yagona bo'laman. Eng asosiysi — eng muhim narsalarni ko'z bilan ko'rib bo'lmaydi, ularni faqat yurak bilan his etish mumkin", dedi Tulki.`
      }
    ],
    quiz: [
      {
        q: "Kichik Shahzoda qaysi asteroiddan uchib kelgan edi?",
        options: ["B-612", "A-100", "Mars-7", "S-300"],
        answer: 0,
        explanation: "Asarda bolaning uyi B-612 raqamli mittigina asteroid ekani aytiladi."
      },
      {
        q: "Kichik Shahzodaga do'stlik siri va qalb ko'zi haqida saboq bergan jonzot kim?",
        options: ["Tulkivoy", "Ilon", "Qo'zichoq", "Qurbaqa"],
        answer: 0,
        explanation: "Dono Tulkivoy unga «faqat qalb bilan ko'rgandagina haqiqatni ko'rish mumkin»ligini uqtiradi."
      },
      {
        q: "Asar muallifi Antuan de Sent-Ekzyuperining asosiy kasbi nima bo'lgan?",
        options: ["Harbiy uchuvchi va adib", "Shifokor", "Arxeolog", "Dengizchi"],
        answer: 0,
        explanation: "Ekzyuperi professional harbiy va fuqaro uchuvchisi bo'lgan."
      },
      {
        q: "Kichik Shahzodaning sayyorasida doimo xavf soluvchi ulkan daraxtlar qaysilar edi?",
        options: ["Baobab daraxtlari", "Chinorlar", "Qarag'aylar", "Bambuklar"],
        answer: 0,
        explanation: "Shahzoda sayyorasini yorib yubormasligi uchun har tong baobab nihollarini yulib tashlardi."
      },
      {
        q: "Shahzoda o'z sayyorasidagi qaysi nozik gulni sog'inib yashaydi?",
        options: ["Qizil Atirgulni", "Lolani", "Moychechakni", "Binafshani"],
        answer: 0,
        explanation: "U o'z sayyorasida yolg'iz qolgan injiq ammo go'zal Atirgulini qattiq sog'inadi."
      }
    ]
  },
  {
    id: 'robinzon-kruzo',
    title: "Robinzon Kruzo",
    author: "Daniel Defo",
    year: "1719",
    category: "world",
    categoryName: "Jahon Klassikasi",
    badge: "Sarguzasht Shoh Asari",
    coverGradient: "linear-gradient(135deg, #065f46, #047857)",
    icon: "fa-island-tropical",
    pages: 340,
    readTime: "5.0 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "Kema halokatidan so'ng kimsasiz orolga tushib qolgan Robinzon Kruzoning 28 yil davomida tabiat qiyinchiliklariga qarshi ko'rsatgan aql-zakovati va tengsiz iroda kuchi.",
    quotes: [
      "«Inson har qanday sharoitda ham umidini yo'qotmasligi va qo'llari bilan o'z taqdirini yaratishi kerak.»",
      "«Mehnat va sabr — barcha qiyinchiliklarning kalitidir.»"
    ],
    characters: [
      { name: "Robinzon Kruzo", desc: "Matonatli, har qanday narsani yasashni o'rgangan dengizchi." },
      { name: "Juma (Friday)", desc: "Robinzon qutqarib olgan sadoqatli hinduiy do'sti." }
    ],
    chapters: [
      {
        title: "1-bob: Kimsasiz oroldagi ilk tong",
        content: `Dahshatli dovuldan so'ng ko'zimni ochsam, o'zimni qumloq qirg'oqda ko'rdim. Kema cho'kib ketgan, do'stlarimdan birortasi tirik qolmagan edi.\n\nMen bir lahza tushkunlikka tushdim. Ammo yig'i-sig'i bilan tirik qolib bo'lmasdi. Kemadan omon qolgan asboblarni olib chiqib, o'zimga boshpana qurishga va olov yoqishga kirishdim.`
      },
      {
        title: "2-bob: Juma bilan uchrashuv va yangi hayot",
        content: `Orolda yolg'iz yashayotganimning yigirma to'rtinchi yilida qum ustida inson oyog'ining izini ko'rdim. Bu odamxo'rlardan qochayotgan begunoh bir yigit edi.\n\nMen uni qutqarib oldim va uchrashgan kunimiz sharafiga unga "Juma" deb nom berdim. Juma mening eng vafodor do'stim va yordamchimga aylandi.`
      }
    ],
    quiz: [
      {
        q: "Robinzon Kruzo kimsasiz orolda necha yil yashaydi?",
        options: ["28 yil", "10 yil", "15 yil", "40 yil"],
        answer: 0,
        explanation: "Robinzon Kruzo orolda jami 28 yil, 2 oy va 19 kun yashaydi."
      },
      {
        q: "Robinzon o'zi qutqargan va do'stlashgan yigitga qanday ism qo'yadi?",
        options: ["Juma (Friday)", "Shanba", "Maykl", "Tom"],
        answer: 0,
        explanation: "Uni aynan juma kuni qutqargani sababli unga «Juma» deb ism beradi."
      },
      {
        q: "\"Robinzon Kruzo\" romanining muallifi kim?",
        options: ["Daniel Defo (Daniel Defoe)", "Jonatan Svift", "Jil Vern", "Valter Skott"],
        answer: 0,
        explanation: "Asar ingliz yozuvchisi Daniel Defo tomonidan 1719-yilda yaratilgan."
      },
      {
        q: "Robinzon orolda o'ziga oziq-ovqat topish uchun nimalar bilan shug'ullanadi?",
        options: [
          "Yovvoyi echkilarni xonakilashtiradi va arpa yetishtiradi",
          "Faqat dengizdan baliq tutadi",
          "Meva-cheva sotib oladi",
          "Faqat yovvoyi qushlarni ovlaydi"
        ],
        answer: 0,
        explanation: "U arpa va sholi ekadi, yovvoyi echkilarni boqib sut va pishloq oladi."
      },
      {
        q: "Robinzon orolda vaqt hisobini qanday yuritgan?",
        options: [
          "Yog'och ustunga har kuni bittadan chiziq tortib borgan",
          "Qum soati bilan",
          "Quyoshga qarab daftar tutgan",
          "Vaqtni hisoblamagan"
        ],
        answer: 0,
        explanation: "U katta yog'och xoch o'rnatib, har bir o'tgan kun uchun unga tirqish chertib borgan."
      }
    ]
  },
  {
    id: 'graf-monte-kristo',
    title: "Graf Monte-Kristo",
    author: "Aleksandr Dyuma",
    year: "1844",
    category: "world",
    categoryName: "Jahon Klassikasi",
    badge: "Intiqom va Adolat",
    coverGradient: "linear-gradient(135deg, #1e1b4b, #312e81)",
    icon: "fa-gem",
    pages: 680,
    readTime: "9.0 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "Xiyonat qurboni bo'lib mudhish If qasriga 14 yil qamalgan Edmond Dantesning qochishi, sirli xazinani topishi va Monte-Kristo grafi sifatida adolat o'rnatishi haqidagi shoh asar.",
    quotes: [
      "«Insonning butun donoligi ikki so'zda mujassam: Kutmoq va Umid qilmoq!»",
      "«Adolat kechikishi mumkin, ammo aslo yo'qolmaydi.»"
    ],
    characters: [
      { name: "Edmond Dantes (Graf)", desc: "Adolat va qasos timsoliga aylangan mard dengizchi." },
      { name: "Abbat Faria", desc: "Zindondagi donishmand ustoz, xazina sirini ochgan kishi." },
      { name: "Mersedes", desc: "Dantesning birinchi muhabbati." },
      { name: "Danglar", desc: "Xiyonatkor xatni yozgan dushman." }
    ],
    chapters: [
      {
        title: "1-bob: If qasridagi zindon va Abbat Faria",
        content: `Yosh dengizchi Edmond Dantes o'z to'yi kuni soxta chaquv bilan hibsga olindi va dengiz o'rtasidagi If qasri zindoniga tashlandi. O'n to'rt yil davomida qorong'u katakda o'tirdi.\n\nU yerda qo'shni zindondan yo'l qazib chiqqan donishmand Abbat Faria bilan tanishdi. Faria unga ilm, tillar, falsafani o'rgatdi va o'limi oldidan Monte-Kristo orolidagi beqiyos xazina sirini topshirdi.`
      },
      {
        title: "2-bob: Zindondan qochish va Grafning qaytishi",
        content: `Dantes qopga solingan murda o'rniga kirib, If qasri devoridan to'lqinli dengizga uloqtirildi. Jasorat bilan suzib chiqib, oroldagi xazinani topdi.\n\nEndi u oddiy dengizchi emas, qudratli va boy Graf Monte-Kristo edi. U o'ziga yovuzlik qilgan xiyonatkorlarni o'z gunohlari bilan jazolashga kirishdi.`
      }
    ],
    quiz: [
      {
        q: "\"Graf Monte-Kristo\" romanining bosh qahramonining asl ismi nima?",
        options: ["Edmond Dantes", "D'Artanyan", "Jan Valjan", "Rastinyak"],
        answer: 0,
        explanation: "Bosh qahramon — Marsellik yosh dengizchi Edmond Dantesdir."
      },
      {
        q: "Dantes necha yil If qasrida nohaq qamoqda o'tiradi?",
        options: ["14 yil", "5 yil", "20 yil", "10 yil"],
        answer: 0,
        explanation: "U 14 yil davomida qattiq tartibli If qasrida zindonda saqlanadi."
      },
      {
        q: "Dantesga zindonda ilm o'rgatgan va xazina sirini ochgan shaxs kim?",
        options: ["Abbat Faria", "Mersedes", "Fernan", "Danglar"],
        answer: 0,
        explanation: "Abbat Faria unga barcha fanlarni o'rgatib, Monte-Kristo orolidagi xazinani vasiyat qiladi."
      },
      {
        q: "Aleksandr Dyuma qaysi davlat adabiyotining yirik vakili?",
        options: ["Fransiya", "Angliya", "Germaniya", "Ispaniya"],
        answer: 0,
        explanation: "Aleksandr Dyuma XIX asr fransuz romantik adabiyotining buyuk vakilidir."
      },
      {
        q: "Asarning bosh falsafiy xulosasi qaysi mashhur so'zlarda ifodalanadi?",
        options: [
          "«Kutmoq va umid qilmoq!»",
          "«Faqat jang qilmoq!»",
          "«Hammani kechirmoq!»",
          "«Mol-dunyo ortidan quvmoq!»"
        ],
        answer: 0,
        explanation: "«Attendre et espérer» (Kutmoq va umid qilmoq) — romanning asosiy falsafasi."
      }
    ]
  },
  {
    id: 'uch-mushketyor',
    title: "Uch Mushketyor",
    author: "Aleksandr Dyuma",
    year: "1844",
    category: "world",
    categoryName: "Jahon Klassikasi",
    badge: "Tarixiy Sarguzasht",
    coverGradient: "linear-gradient(135deg, #1e3a8a, #1d4ed8)",
    icon: "fa-shield-halved",
    pages: 560,
    readTime: "7.0 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "Gaskoniyalik yosh yigit d'Artanyan va uch jasur do'sti — Atos, Portos, Aramisning qirolicha sharafini himoya qilishdagi xavfli va qiziqarli sarguzashtlari.",
    quotes: [
      "«Birlashgan bir kishi uchun, bir kishi hamma uchun!» (Barchamiz birimiz uchun, birimiz barchamiz uchun!)",
      "«Jasorat — har qanday dushmanning yuragiga qo'rquv soluvchi quroldir.»"
    ],
    characters: [
      { name: "d'Artanyan", desc: "Qo'rqmas, epchil, jasur gaskoniyalik yigit." },
      { name: "Atos", desc: "Og'ir-bosiq, aslzoda va donishmand mushketyor." },
      { name: "Portos", desc: "Bahaybat, kuchli va hazilkash do'st." },
      { name: "Aramis", desc: "Nafis didli, shoirtabiat va epchil jangchi." }
    ],
    chapters: [
      {
        title: "1-bob: Parij sari yo'l va Uch duel",
        content: `Sariq otga mingan yosh gaskoniyalik d'Artanyan Parijga qirol mushketyori bo'lish orzusi bilan yetib keldi. O'zining mag'rurligi sababli bir kunda ketma-ket uchta buyuk mushketyor — Atos, Portos va Aramis bilan duelga kelishib qo'ydi.\n\nAmmo kutilmaganda kardinal gvardiyachilari yetib kelgach, to'rt yigit birlashib ularga qarshi jangga kirdilar. Bu mangu do'stlikning boshlanishi edi.`
      },
      {
        title: "2-bob: Qirolicha marjonlari va Londonga xavfli safar",
        content: `Kardinal Rishelye qirolichani fosh qilish uchun unga hadya etilgan olmos marjonlarni talab qildi. Marjonlar esa Londonda, gersog Bukingemda edi.\n\nD'Artanyan va do'stlari dushman pistirmalarini yorib o'tib, marjonlarni vaqtida Parijga olib kelishdi va qirolichaning sharafini saqlab qolishdi.`
      }
    ],
    quiz: [
      {
        q: "Mushketyorlarning mashhur shiori qaysi?",
        options: [
          "«Birimiz barchamiz uchun, barchamiz birimiz uchun!»",
          "«Faqat oldinga!»",
          "«G'alaba yoki o'lim!»",
          "«Katta boylik bizniki!»"
        ],
        answer: 0,
        explanation: "«Tous pour un, un pour tous» — dunyodagi eng mashhur do'stlik shiori."
      },
      {
        q: "Parijga kelgan bosh qahramon qaysi viloyatdan edi?",
        options: ["Gaskoniya", "Normandiya", "Bretan", "Provans"],
        answer: 0,
        explanation: "D'Artanyan Fransiyaning janubidagi tog'li Gaskoniya viloyatidan kelgan."
      },
      {
        q: "Uch mushketyorning ismlari qanday edi?",
        options: ["Atos, Portos va Aramis", "Robin, Jon, Artur", "Napoleon, Snouboll, Bokser", "Edmond, Faria, Fernan"],
        answer: 0,
        explanation: "Uch sadoqatli do'st — Atos, Portos va Aramis edi."
      },
      {
        q: "Mushketyorlar qaysi qimmatbaho buyumni olib kelish uchun Londonga yo'l oladilar?",
        options: ["Qirolichaning olmos marjonlarini", "Oltin tojini", "Maxfiy kitobni", "Sehrli qilichni"],
        answer: 0,
        explanation: "Ular qirolicha Anna Avstriyskayaning olmos zinalarini (marjonlarini) olib kelishadi."
      },
      {
        q: "Mushketyorlarning asosiy raqibi bo'lgan davlat arbobi kim edi?",
        options: ["Kardinal Rishelye", "Qirol Lyudovik", "Mazarin", "Fuke"],
        answer: 0,
        explanation: "Kardinal Rishelye qirol saroyida katta qudratga ega bo'lgan asosiy raqib edi."
      }
    ]
  },
  {
    id: 'sherlok-xolms',
    title: "Sherlok Xolms Sarguzashtlari",
    author: "Artur Konan Doyl",
    year: "1892",
    category: "world",
    categoryName: "Jahon Klassikasi",
    badge: "Klassik Detektiv Shohi",
    coverGradient: "linear-gradient(135deg, #334155, #1e293b)",
    icon: "fa-magnifying-glass",
    pages: 360,
    readTime: "5.2 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "Beyker-strit 221B xonadonida yashovchi afsonaviy xususiy detektiv Sherlok Xolms va doktor Vatsonning deduksiya usuli orqali eng chigal jinoyatlarni fosh etishi.",
    quotes: [
      "«Barcha imkonsiz variantlarni chiqarib tashlasangiz, qolgani qanchalik g'alati bo'lmasin, aynan o'sha haqiqatdir!»",
      "«Siz shunchaki ko'rasiz, ammo kuzatmaysiz. Ko'rish bilan kuzatish o'rtasida katta farq bor.»"
    ],
    characters: [
      { name: "Sherlok Xolms", desc: "Deduksiya dahosi, skripkachi, favqulodda zehn egasi." },
      { name: "Doktor Vatson", desc: "Sadoqatli hamroh, harbiy shifokor va solnomachi." },
      { name: "Professor Moriarti", desc: "Jinoyat olamining yashirin dahosi va dushmani." }
    ],
    chapters: [
      {
        title: "1-bob: Beyker-strit 221B dagi suhbat",
        content: `Londonni qalin tuman qoplagan edi. Kamin yonida o'tirgan Xolms unga qarab turganimni sezib: "Vatson, siz bugun ertalab kasalxonaga bordingiz va pochtadan xat jo'natmadingiz, to'g'rimi?" dedi.\n\nMen hayratda qoldim. U esa oddiygina kiyimimdagi loy dog'i va etiklarimning bog'ichiga qarab buni aniqlaganini aytdi. Bu uning mashhur deduksiya usuli edi.`
      },
      {
        title: "2-bob: Baskervillar iti va botqoqlik siri",
        content: `Devonshir botqoqliklarida tunda dahshatli uvillagan ovoz eshitilardi. Qadimiy Baskervillar urug'ini ta'qib qiluvchi olovli afsonaviy it haqiqatan ham mavjudmi?\n\nXolms o'zining sovuqqon mantig'i bilan bu sirning tagiga yetdi: afsonaning ortida ochko'z bir insonning rejalashtirgan makr-hiylasi yotardi.`
      }
    ],
    quiz: [
      {
        q: "Sherlok Xolmsning Londondagi mashhur manzili qaysi?",
        options: ["Beyker-strit 221B", "Oksford-strit 10", "Pikadilli 45", "Fleet-strit 12"],
        answer: 0,
        explanation: "Detektivning afsonaviy manzili — Baker Street 221B."
      },
      {
        q: "Sherlok Xolms haqidagi asarlarning muallifi kim?",
        options: ["Artur Konan Doyl (Arthur Conan Doyle)", "Agata Kristi", "Edgar Allan Po", "Jorj Simenon"],
        answer: 0,
        explanation: "Asarlar ingliz shifokori va yozuvchisi ser Artur Konan Doyl tomonidan yozilgan."
      },
      {
        q: "Xolms jinoyatlarni fosh etishda qaysi ilmiy usulga tayanadi?",
        options: ["Deduksiya usuli (xususiydan umumiyga mantiqiy xulosa)", "Faqat fol ochish", "Tasodif", "Kuch ishlatish"],
        answer: 0,
        explanation: "Xolms mayda detallarni kuzatish orqali haqiqatni topuvchi deduksiya usulini qo'llaydi."
      },
      {
        q: "Sherlok Xolmsning eng sadoqatli do'sti va xotiranavisi kim?",
        options: ["Doktor Jon Vatson", "Lestred", "Maykroft", "Moriarti"],
        answer: 0,
        explanation: "Doktor Jon Vatson uning hamkori va sarguzashtlarini qog'ozga tushiruvchi do'stidir."
      },
      {
        q: "Sherlok Xolms qaysi musiqa asbobini chalishni yaxshi ko'rardi?",
        options: ["Skripka", "Pianino", "Gitara", "Nay"],
        answer: 0,
        explanation: "Xolms chuqur o'yga cho'mganda yoki dam olganda skripka chalishni xush ko'rardi."
      }
    ]
  }
];

// ============================================================
// PART 3: SARGUZASHT, ILM, RIVOJLANISH VA DUNYO HIKMATI (25-35)
// ============================================================
var BOOKS_PART_3 = [
  {
    id: 'tom-soyer',
    title: "Tom Soyerning Sarguzashtlari",
    author: "Mark Tven",
    year: "1876",
    category: "kids",
    categoryName: "Bolalar & Sarguzasht",
    badge: "Jahon Bolalar Klassikasi",
    coverGradient: "linear-gradient(135deg, #b45309, #d97706)",
    icon: "fa-sailboat",
    pages: 280,
    readTime: "4.2 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "Missisipi daryosi sohilidagi Sent-Pitersberg shaharchasida yashovchi quvnoq, sho'x va topqir Tom Soyer hamda uning do'sti Geklberri Finning unutilmas sarguzashtlari.",
    quotes: [
      "«Ish — inson bajarishga majbur bo'lgan narsa. O'yin esa — ko'ngli tusagan ishdir.»",
      "«Haqiqiy do'stlik har qanday boylikdan ustun turadi.»"
    ],
    characters: [
      { name: "Tom Soyer", desc: "Topqir, xayolparast, jasur va erkinliksevar bola." },
      { name: "Geklberri Fin", desc: "Daryo bo'yida o'zicha yashovchi, sadoqatli do'st." },
      { name: "Polli xola", desc: "Tomni tarbiyalovchi, qattiqqo'l ammo mehribon xola." },
      { name: "Bekki Tatcher", desc: "Tomning ko'ngil qo'ygan go'zal sinfdosh qizi." }
    ],
    chapters: [
      {
        title: "1-bob: Devorni oqlash san'ati",
        content: `Shanba kuni ertalab butun tabiat quyosh nurida jilvalanardi. Faqat Tomgina qo'lida cho'tka va bir chelak ohak bilan uzun devor oldida xo'rsinib turardi. Xolasi uni jazoga tortgan edi.\n\nKo'p o'tmay bolalar o'yinchoqlarini ko'tarib kela boshladilar. Tom esa devor bo'yashni shunday mahorat va zavq bilan bajardiki, qolgan bolalar navbat bilan bo'yash uchun o'zlarining bor narsalarini Tomga berdilar.`
      },
      {
        title: "2-bob: Orolga qochish va G'or siri",
        content: `Tom va Gek daryo o'rtasidagi Jekson oroliga qochib, qaroqchilik o'ynashga qaror qildilar. Shaharcha ahli ularni cho'kib ketdi deb o'ylab, cherkovda janoza o'qiyotganida, bolalar kulib kirib keldilar.\n\nKeyinroq Mak-Dugal g'orida yo'qolib qolgan Tom o'z aqli va jasorati bilan Bekkini qorong'ulikdan olib chiqdi.`
      }
    ],
    quiz: [
      {
        q: "\"Tom Soyerning sarguzashtlari\" asarining muallifi kim?",
        options: ["Mark Tven (Mark Twain)", "Jek London", "Ernest Xeminguey", "Teodor Drayzer"],
        answer: 0,
        explanation: "Asar mashhur amerikalik yozuvchi Mark Tven tomonidan yozilgan."
      },
      {
        q: "Tom Soyer devor bo'yash jazosidan qanday qutuladi?",
        options: [
          "Buni qiziqarli san'at qilib ko'rsatib, boshqa bolalarga o'z narsalari evaziga bo'yatadi",
          "Kechasi qochib ketadi",
          "Polli xoladan kechirim so'rab yig'laydi",
          "Bo'yoqni to'kib yuboradi"
        ],
        answer: 0,
        explanation: "Tom ishni havas qiladigan qilib ko'rsatib, bolalarning o'yinchoqlarini oladi."
      },
      {
        q: "Tom Soyerning eng yaqin sarguzashtdosh do'sti kim?",
        options: ["Geklberri Fin", "Sid", "Jo Garper", "Jim"],
        answer: 0,
        explanation: "Tomning eng yaqin do'sti — erkin tabiatli Geklberri Fin edi."
      },
      {
        q: "Asardagi voqealar qaysi mashhur Amerika daryosi bo'yida kechadi?",
        options: ["Missisipi daryosi", "Amazonka", "Nil", "Kolorado"],
        answer: 0,
        explanation: "Voqealar Missisipi daryosi bo'yidagi Sent-Pitersberg shaharchasida yuz beradi."
      },
      {
        q: "Tom va Bekki Tatcher qayerda adashib qoladilar?",
        options: ["Mak-Dugal g'orida", "O'rmonda", "Kema ichida", "Cho'lda"],
        answer: 0,
        explanation: "Ular ko'p labirintli Mak-Dugal g'orida adashib qolishadi."
      }
    ]
  },
  {
    id: 'chol-va-dengiz',
    title: "Chol va Dengiz",
    author: "Ernest Xeminguey",
    year: "1952",
    category: "world",
    categoryName: "Jahon Klassikasi",
    badge: "Nobel Mukofoti Shoh Asari",
    coverGradient: "linear-gradient(135deg, #0369a1, #0284c7)",
    icon: "fa-fish-fins",
    pages: 130,
    readTime: "2.5 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "Keksa kubalik baliqchi Santyagoning 84 kunlik omadsizlikdan so'ng ulkan marlin balig'i va akulalarga qarshi ochiq dengizdagi tengsiz matonati haqidagi qissa.",
    quotes: [
      "«Inson yengilish uchun yaratilmagan. Uni yo'q qilish mumkin, ammo yengib bo'lmaydi!»",
      "«Har bir yangi kun — yangi bir umiddir.»"
    ],
    characters: [
      { name: "Santyago", desc: "Keksa, ko'zlari dengizdek moviy, yengilmas irodali baliqchi." },
      { name: "Manolin", desc: "Cholga mehr qo'ygan, unga hamisha g'amxo'rlik qiluvchi yosh shogirdi." }
    ],
    chapters: [
      {
        title: "1-bob: 84 kunlik omadsizlik va Ochiq okean",
        content: `Chol Golfstrim oqimida yolg'iz qayiqda baliq ovlardi. Sakson to'rt kun davomida uning to'riga bitta ham baliq ilinmadi. Boshqalar uni «omadsiz» deyishdi.\n\nAmmo Santyago umidini uzmadi. Sakson beshinchi kuni u qirg'oqdan ancha uzoqqa, moviy tubsizlik tomon yo'l oldi. Va to'satdan qarmoq ipi qattiq tortildi: dengiz tubida ulkan bir jonzot ilingan edi.`
      },
      {
        title: "2-bob: Marlin bilan olishuv va Akulalar hamlasi",
        content: `Ikki kecha-kunduz chol bahaybat marlin balig'i bilan olishdi. Qo'llari qonab, madorsiz qolsa-da, orqaga chekinmadi. Balikni yengib qayig'iga bog'ladi.\n\nBiroq qon hidini sezgan akulalar galasi hamla qildi. Santyago so'nggi nafasigacha kurashdi. Qirg'oqqa baliqning faqat ulkan skeleti yetib kelgan bo'lsa-da, chol o'z ruhi bilan yengilmasligini butun olamga isbotladi.`
      }
    ],
    quiz: [
      {
        q: "\"Chol va dengiz\" asaridagi bosh qahramon keksa baliqchining ismi nima?",
        options: ["Santyago", "Manolin", "Diego", "Pedro"],
        answer: 0,
        explanation: "Bosh qahramon — yengilmas matonat timsoli bo'lgan Santyagodir."
      },
      {
        q: "Asarning eng mashhur falsafiy aforizmi qaysi?",
        options: [
          "«Insonni yo'q qilish mumkin, ammo yengib bo'lmaydi!»",
          "«Dengiz barchani yutadi»",
          "«Baliq ovlash oson ish emas»",
          "«Pul hamma narsani hal qiladi»"
        ],
        answer: 0,
        explanation: "«Man is not made for defeat. A man can be destroyed but not defeated» — inson irodasining madhiyasidir."
      },
      {
        q: "Ernest Xeminguey ushbu asari uchun qaysi oliy mukofotga sazovor bo'lgan?",
        options: ["Adabiyot bo'yicha Nobel mukofoti (va Pulitser mukofoti)", "Oskar", "Olimpiada medali", "Buker"],
        answer: 0,
        explanation: "Asar Pulitser va 1954-yildagi Nobel mukofotiga sazovor bo'lgan."
      },
      {
        q: "Chol qancha kun davomida umuman baliq tutolmay yurgan edi?",
        options: ["84 kun", "40 kun", "100 kun", "30 kun"],
        answer: 0,
        explanation: "Chol 84 kun baliq tutolmaydi, 85-kuni buyuk marlinni tutadi."
      },
      {
        q: "Santyagoning yagona yosh do'sti va shogirdining ismi nima?",
        options: ["Manolin", "Tom", "Jim", "Artur"],
        answer: 0,
        explanation: "Yosh Manolin choldan baliqchilik sirini o'rganadi va unga mehr bilan qaraydi."
      }
    ]
  },
  {
    id: 'kitob-1984',
    title: "1984",
    author: "Jorj Oruell",
    year: "1949",
    category: "world",
    categoryName: "Jahon Klassikasi",
    badge: "Antiutopiya Shoh Asari",
    coverGradient: "linear-gradient(135deg, #18181b, #3f3f46)",
    icon: "fa-eye",
    pages: 320,
    readTime: "5.0 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "«Katta Og'a seni kuzatmoqda!» — Mutlaq nazorat, soxtalashtirilgan tarix va inson erkinligi uchun kurash haqida ogohlantiruvchi daho darajasidagi antiutopiya.",
    quotes: [
      "«Urush — bu tinchlik. Erkinlik — bu qullik. Jaholat — bu kuch.»",
      "«O'tmishni kim nazorat qilsa, kelajakni ham o'sha boshqaradi.»"
    ],
    characters: [
      { name: "Uinston Smit", desc: "Haqiqat vazirligi xodimi, tizimga qarshi qalbida isyon ko'targan inson." },
      { name: "Juliya", desc: "Uinstonning sevgilisi va hamfikri." },
      { name: "O'Brayen", desc: "Ichki partiyaning sirli va ayyor vakili." },
      { name: "Katta Og'a (Big Brother)", desc: "Tizimning ko'rinmas, mutlaq hukmdori timsoli." }
    ],
    chapters: [
      {
        title: "1-bob: Teleekranlar nazorati va Yashirin kundalik",
        content: `Har bir xonadonda, har bir ko'chada teleekranlar tunu-kun odamlarni kuzatar edi. Ularni o'chirib bo'lmasdi. Har bir so'z, har bir yuz ifodasi partiya tomonidan tekshirilardi.\n\nUinston Smit burchakdagi ko'rinmas joyga o'tirib, taqiqlangan kundalik daftarni ochdi va unga o'zining erkin fikrlarini yozishga jur'at etdi: "Katta Og'aga o'lim!" Bu fikriy jinoyatning boshlanishi edi.`
      },
      {
        title: "2-bob: 101-xona va Inson irodasining sinishi",
        content: `Muhabbat vazirligining yerto'lasida Uinston O'Brayen bilan yuzlashdi. Tizim insonni shunchaki jazolamoqchi emas, balki uning butun qalbidagi haqiqatni yo'q qilib, uni partiyani sevishga majburlamoqchi edi.\n\n101-xonadagi dahshatli qo'rquv qarshisida Uinston eng sevimli insonidan voz kechdi va tizimning quliga aylandi.`
      }
    ],
    quiz: [
      {
        q: "\"1984\" romanining muallifi kim?",
        options: ["Jorj Oruell (George Orwell)", "Oldos Xaksli", "Rey Bredberi", "Gerbert Uells"],
        answer: 0,
        explanation: "Asar Jorj Oruellning 1949-yilda nashr etilgan eng mashhur antiutopik romanidir."
      },
      {
        q: "Partiyaning hamma joyda ilingan mashhur ogohlantiruvchi shiori qanday?",
        options: [
          "«Katta Og'a seni kuzatmoqda!» (Big Brother is Watching You)",
          "«Hamma ishga!»",
          "«Tinchlik bo'lsin!»",
          "«Kitob o'qing!»"
        ],
        answer: 0,
        explanation: "«Big Brother is Watching You» romanning asosiy ramziy shioridir."
      },
      {
        q: "Romandagi uchta paradoksal shior qaysi?",
        options: [
          "Urush — tinchlik, Erkinlik — qullik, Jaholat — kuch",
          "Bilim — boylik, Mehnat — rohat, Do'stlik — baxt",
          "O'qish — o'rganish, Intilish — yuksalish",
          "Tezlik — quvvat, Sadoqat — g'alaba"
        ],
        answer: 0,
        explanation: "«War is peace, Freedom is slavery, Ignorance is strength» partiyaning bosh shiorlaridir."
      },
      {
        q: "Bosh qahramon Uinston Smit qaysi vazirlikda xizmat qilardi?",
        options: ["Haqiqat vazirligida (tarixiy gazetalarni qayta yozish bo'limi)", "Mudofaa", "Sog'liqni saqlash", "Tashqi ishlar"],
        answer: 0,
        explanation: "U Haqiqat vazirligida (Ministry of Truth) o'tmish xabarlarini partiya xohishiga qarab o'zgartirardi."
      },
      {
        q: "Tizimda erkin fikrlash qanday ataladi va eng og'ir jinoyat hisoblanadi?",
        options: ["«Fikriy jinoyat» (Thoughtcrime)", "O'g'rilik", "Xiyonat", "Beparvolik"],
        answer: 0,
        explanation: "«Fikriy jinoyat» (fikrda tizimga shubha qilish) o'lim bilan jazolanardi."
      }
    ]
  },
  {
    id: 'farengeyt-451',
    title: "Farengeyt bo'yicha 451 daraja",
    author: "Rey Bredberi",
    year: "1953",
    category: "world",
    categoryName: "Jahon Klassikasi",
    badge: "Ilmiy-Fantastik Ogohnoma",
    coverGradient: "linear-gradient(135deg, #991b1b, #ea580c)",
    icon: "fa-fire-flame-curved",
    pages: 240,
    readTime: "3.5 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "Kitoblar taqiqlangan va ularni yoqib kulga aylantiruvchi «o't o'chiruvchilar» jamiyati haqidagi ogohlantiruvchi roman. Guy Montegning kitoblar sehri va insoniyat tafakkurini qutqarish yo'lidagi isyoni.",
    quotes: [
      "«Kitobni yoqishdan ham kattaroq jinoyat bor: uni o'qimaslik!»",
      "«Olov hamma narsani yo'q qilishi mumkin, ammo qalbga ekilgan fikrni yoqib bo'lmaydi.»"
    ],
    characters: [
      { name: "Guy Monteg", desc: "Kitoblarni yoquvchi o't o'chiruvchi, keyinchalik kitoblarni qutqaruvchi qahramon." },
      { name: "Klarissa", desc: "Dunyoga bolalarcha hayrat bilan boquvchi, Monteg ko'zini ochgan qiz." },
      { name: "Bitti", desc: "Kitoblarni yaxshi biladigan, ammo ularni yoqishga buyruq beruvchi brandmeyster." }
    ],
    chapters: [
      {
        title: "1-bob: Yoqish lazzati va Klarissa bilan uchrashuv",
        content: `Yoqish yoqimli edi. Qog'ozlarning qora kaptarlar kabi alanga ichida qanot qoqishi Montegga o'zgacha zavq berardi. Farengeyt bo'yicha 451 daraja — bu qog'oz yonib ketadigan harorat edi.\n\nBir kuni kechqurun Monteg yosh qizaloq Klarissa bilan uchrashdi. Klarissa unga qarab: "Siz hech qachon kitoblarni o'qib ko'rganmisiz? Siz haqiqatan ham baxtlimisiz?" deb so'radi. Bu savol Montegning butun dunyosini larzaga soldi.`
      },
      {
        title: "2-bob: Kitob-odamlar va intellektual tirilish",
        content: `Monteg o'z uyida kitoblarni yashira boshladi. Ta'qiblardan qochib o'rmonga yetib borganida, u yerda yashirinib yurgan olimlar va kitobxonlar bilan uchrashdi.\n\nHar bir inson bittadan kitobni yod olgan edi: kimdir «Platon», kimdir «Shekspir», kimdir «Injil» edi. Ular insoniyat kitoblari xotiralarda mangu yashashini isbotladilar.`
      }
    ],
    quiz: [
      {
        q: "Farengeyt bo'yicha 451 daraja harorat nimani anglatadi?",
        options: [
          "Qog'oz o'z-o'zidan yonib ketadigan haroratni",
          "Suv qaynash nuqtasini",
          "Quyosh haroratini",
          "Temir erish haroratini"
        ],
        answer: 0,
        explanation: "Bu qog'ozning alanga olib yonish harorati (taxminan 233 °C) hisoblanadi."
      },
      {
        q: "Asar muallifi mashhur fantast adib kim?",
        options: ["Rey Bredberi (Ray Bradbury)", "Ayzek Azimov", "Artur Klark", "Stanislav Lem"],
        answer: 0,
        explanation: "Asar amerikalik fantast yozuvchi Rey Bredberi tomonidan yozilgan."
      },
      {
        q: "Romandagi «o't o'chiruvchilar» qanday vazifani bajarishardi?",
        options: [
          "Kitoblarni qidirib topib, yoqib yuborishardi",
          "Oddiy yong'inlarni o'chirishardi",
          "Bino qurishardi",
          "Daraxt ekishardi"
        ],
        answer: 0,
        explanation: "Bu antiutopik jamiyatda o't o'chiruvchilar kitoblarni yoqish bilan shug'ullanishadi."
      },
      {
        q: "Monteg qochib borgan o'rmondagi odamlar kitoblarni qanday saqlab qolishardi?",
        options: [
          "Har biri bitta kitobni to'liq yodlab olgan edi («Kitob-odamlar»)",
          "Yer ostiga ko'mib",
          "Kompyuter disklarida",
          "Toshlarga o'yib"
        ],
        answer: 0,
        explanation: "Har bir olim va adib bittadan kitobni yodlab olib, kelajak avlodga yetkazishga tayyor edi."
      },
      {
        q: "Montegga «Siz baxtlimisiz?» deb savol bergan nurli qiz kim edi?",
        options: ["Klarissa Maklellan", "Mildred", "Faber", "Bitti"],
        answer: 0,
        explanation: "Klarissa unga tabiat, fikrlash va baxt haqida o'ylashga sababchi bo'ladi."
      }
    ]
  },
  {
    id: 'garri-potter',
    title: "Garri Potter va Falsafa Toshi",
    author: "J.K. Rouling",
    year: "1997",
    category: "kids",
    categoryName: "Bolalar & Fantastika",
    badge: "Sehrli Olam Klassikasi",
    coverGradient: "linear-gradient(135deg, #701a75, #a21caf)",
    icon: "fa-broom",
    pages: 330,
    readTime: "4.8 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "Yetim bolakay Garrining sehrgarlik maktabi Xogvartsga taklif qilinishi, do'stlari Ron va Germiona bilan kechgan sehrli va xavfli sarguzashtlari.",
    quotes: [
      "«Bizning kimligimizni qobiliyatlarimiz emas, balki qilgan tanlovlarimiz ko'rsatadi.»",
      "«Qorong'ulik qanchalik quyuq bo'lmasin, bitta kichik uchqun ham uni yoritishi mumkin.»"
    ],
    characters: [
      { name: "Garri Potter", desc: "Peshonasida chaqmoqsimon chandiq bo'lgan mo''jizakor sehrgar bola." },
      { name: "Ron Uizli", desc: "Qizilsoch, samimiy va sadoqatli do'st." },
      { name: "Germiona Greynjer", desc: "Hamma narsani kitobdan biladigan a'lochi qiz." },
      { name: "Albus Dambldor", desc: "Xogvarts maktabining eng buyuk va dono direktori." }
    ],
    chapters: [
      {
        title: "1-bob: Tirik qolgan bola va Xogvarts maktubi",
        content: `Durslilar oilasida shkaf tagidagi qorong'u xonachada yashovchi Garri Potter o'zining kimligini bilmasdi. U o'n bir yoshga to'lgan kuni ulkan bahaybat Xagrid eshikni buzib kirdi.\n\n"Garri, sen sehrgarsan!" dedi Xagrid. Garri qo'liga Xogvarts sehrgarlik maktabining taklifnomasini oldi. 9 va 3/4 platformasidan qizil poyezd uni sehrli dunyo sari olib ketdi.`
      },
      {
        title: "2-bob: Falsafa toshi va Do'stlik sinovi",
        content: `Garri, Ron va Germiona maktab yerto'lasida yashiringan Falsafa toshini yovuz Lord Voldemortdan qutqarish uchun xavfli sinovlarga kirdilar: ulkan uchboshli it, sehrli shaxmat va mantiqiy topishmoqlar.\n\nGarri toza yuragi tufayli ko'zgudan toshni topdi va yovuzlik ustidan ilk g'alabasini qozondi.`
      }
    ],
    quiz: [
      {
        q: "Garri Potter Xogvartsga boradigan poyezdga qaysi platformadan chiqadi?",
        options: ["Platforma 9 ¾ (to'qqiz-u to'rtdan uch)", "Platforma 10", "Platforma 7", "Platforma 1"],
        answer: 0,
        explanation: "King-Kross vokzalidagi mashhur sehrli devor ortidagi 9 ¾ platformasi."
      },
      {
        q: "Garri Potterning sevimli jonivori va pochtachisi kim edi?",
        options: ["Hedvig (oq boyo'g'li)", "Mushuk", "Qurbaqa", "Kalamush"],
        answer: 0,
        explanation: "Hedvig — Garriga Xagrid sovg'a qilgan oq boyo'g'li."
      },
      {
        q: "Sehrgarlar o'ynaydigan supurvada uchib o'ynaladigan mashhur sport turi nima?",
        options: ["Kviddich (Quidditch)", "Sehrli futbol", "Basketbol", "Shaxmat"],
        answer: 0,
        explanation: "Kviddich — sehrgarlar olamidagi eng mashhur havo sporti."
      },
      {
        q: "Garri Xogvartsda qaysi fakultetga qabul qilinadi?",
        options: ["Griffindor (Gryffindor)", "Slizerin", "Kogtevran", "Puffenduy"],
        answer: 0,
        explanation: "Sehrli saralash qalpoqchasi Garrini jasurlar makoni bo'lmish Griffindorga tanlaydi."
      },
      {
        q: "Garri Potter turkumining muallifi kim?",
        options: ["J.K. Rouling (J.K. Rowling)", "J.R.R. Tolkin", "K.S. Lyuis", "Filip Pulman"],
        answer: 0,
        explanation: "Kitoblar britaniyalik yozuvchi Joan Ketlin Rouling tomonidan yozilgan."
      }
    ]
  },
  {
    id: 'atom-odatlar',
    title: "Atom Odatlar",
    author: "Jeyms Klir",
    year: "2018",
    category: "growth",
    categoryName: "Shaxsiy Rivojlanish & Psixologiya",
    badge: "Bestseller Qo'llanma",
    coverGradient: "linear-gradient(135deg, #059669, #10b981)",
    icon: "fa-chart-line",
    pages: 280,
    readTime: "4.0 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "Kichik o'zgarishlarning ulkan natijalari. Har kuni 1% ga yaxshilanish qoidasi va yomon odatlardan qutulib, foydali ko'nikmalarni avtomatlashtirish sirlari.",
    quotes: [
      "«Siz maqsadlaringiz darajasiga ko'tarilmaysiz, siz o'z tizimlaringiz darajasiga tushasiz.»",
      "«Har kuni 1% yaxshilansangiz, bir yilda 37 baravar kuchliroq bo'lasiz!»"
    ],
    characters: [
      { name: "Jeyms Klir", desc: "Odatlar shakllanishi bo'yicha dunyoga mashhur tadqiqotchi." }
    ],
    chapters: [
      {
        title: "1-bob: 1% qoidasining hayratlanarli kuchi",
        content: `Odamlar ko'pincha muvaffaqiyat bir kechada katta sakrash bilan keladi deb o'ylashadi. Aslida esa har kuni qilingan mittigina to'g'ri odat vaqt o'tishi bilan mislsiz natija beradi.\n\nAgar siz har kuni o'z ustingizda 1% ishlasangiz, 365 kundan keyin siz avvalgi holatingizdan 37 baravar ustun bo'lasiz. Aksincha, har kuni 1% orqaga ketsangiz, deyarli nolga tushib qolasiz.`
      },
      {
        title: "2-bob: Odatlarni shakllantirishning 4 qoidasi",
        content: `Yaxshi odatni qanday osonlashtirish mumkin? Birinchidan, uni ko'zga ko'rinarli qiling. Ikkinchidan, uni jozibali qiling. Uchinchidan, uni oson bajarsa bo'ladigan qiling. To'rtinchidan, uning natijasidan qoniqish hosil qiling.`
      }
    ],
    quiz: [
      {
        q: "\"Atom odatlar\" kitobining muallifi kim?",
        options: ["Jeyms Klir (James Clear)", "Stiven Kovi", "Brayan Treysi", "Deyl Karnegi"],
        answer: 0,
        explanation: "Asar amerikalik tadqiqotchi va yozuvchi Jeyms Klir qalamiga mansub."
      },
      {
        q: "Kitobdagi mashhur matematik qoida bo'yicha har kuni 1% yaxshilanish bir yilda qanday natija beradi?",
        options: ["37 baravar yaxshilanish", "2 baravar", "5 baravar", "O'zgarmaydi"],
        answer: 0,
        explanation: "1.01 ning 365-darajasi taxminan 37.78 ga teng bo'lib, 37 baravarlik natijani ko'rsatadi."
      },
      {
        q: "Odatlarni yo'lga qo'yishda eng muhim tamoyil nima?",
        options: [
          "Maqsadlar emas, balki kundalik tizim (odatlar zanjiri)",
          "Faqat omad",
          "Katta pullar sarflash",
          "Birovga havas qilish"
        ],
        answer: 0,
        explanation: "Muallif: «Siz maqsadlar darajasiga emas, tizimlaringiz darajasiga tayanasiz» deb uqtiradi."
      },
      {
        q: "Kitobda «2 daqiqa qoidasi» nimani anglatadi?",
        options: [
          "Har qanday yangi odatni dastlab 2 daqiqada bajariladigan shaklda boshlash",
          "2 daqiqa uxlash",
          "2 daqiqa choy ichish",
          "2 daqiqa yugurish"
        ],
        answer: 0,
        explanation: "Yangi odatni boshlashni osonlashtirish uchun uni 2 daqiqalik qadamga aylantirish lozim."
      },
      {
        q: "\"Atom\" so'zi kitob kontekstida nimani anglatadi?",
        options: [
          "Kichik, zarradek, ammo ulkan energiya manbai bo'lgan odatlarni",
          "Yadro qurolini",
          "Kimyo fanini",
          "Elektr tokini"
        ],
        answer: 0,
        explanation: "Atom — eng kichik birlik bo'lsa-da, ulkan qudrat poydevoridir."
      }
    ]
  },
  {
    id: 'boy-ota-kambagal-ota',
    title: "Boy Ota, Kambag'al Ota",
    author: "Robert Kiosaki",
    year: "1997",
    category: "growth",
    categoryName: "Moliyaviy Savodxonlik",
    badge: "Moliyaviy Bestseller",
    coverGradient: "linear-gradient(135deg, #1e1b4b, #4338ca)",
    icon: "fa-sack-dollar",
    pages: 250,
    readTime: "3.8 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "Moliyaviy mustaqillik, aktiv va passivlar farqi, pullarni o'zingiz uchun ishlashga majbur qilish sirlari haqidagi dunyodagi eng mashhur moliya darsligi.",
    quotes: [
      "«Kambag'allar va o'rta qatlam pul uchun ishlaydi. Boylar esa pullarni o'zlari uchun ishlashga majbur qiladilar!»",
      "«Eng buyuk aktiv — bu sizning miyangizdir. Unga sarmoya kiriting.»"
    ],
    characters: [
      { name: "Robert Kiosaki", desc: "Ikki otaning ta'limotini solishtirgan muallif." },
      { name: "Boy ota", desc: "Do'stining otasi, maktabni bitirmagan ammo moliya bilimdoni." },
      { name: "Kambag'al ota", desc: "Robertning o'z otasi, oliy ma'lumotli professor ammo moliyaviy qiyinchilikda yashagan." }
    ],
    chapters: [
      {
        title: "1-bob: Ikki ota va ikki xil dunyoqarash",
        content: `Mening ikki otam bor edi: biri oliy ma'lumotli professor, biri esa maktabni ham bitirmagan tadbirkor. Biri: "Pul — barcha yomonliklarning ildizi", derdi. Ikkinchisi esa: "Pul yetishmasligi — barcha yomonliklarning ildizidir", derdi.\n\nMen to'qqiz yoshimda boy otamdan moliyaviy savodxonlik saboqlarini olishga qaror qildim.`
      },
      {
        title: "2-bob: Aktiv va Passiv farqi",
        content: `Boy bo'lishning birinchi qoidasi juda oddiy: siz aktiv va passiv o'rtasidagi farqni bilishingiz va faqat aktivlarni sotib olishingiz kerak.\n\nAktiv — bu sizning cho'ntagingizga pul soladigan narsadir. Passiv esa — cho'ntagingizdan pulni sug'urib oladigan narsadir.`
      }
    ],
    quiz: [
      {
        q: "\"Boy ota, kambag'al ota\" kitobining muallifi kim?",
        options: ["Robert Kiosaki (Robert Kiyosaki)", "Uorren Baffet", "Ilon Mask", "Bill Geyts"],
        answer: 0,
        explanation: "Kitob amerikalik tadbirkor va investor Robert Kiosaki tomonidan yozilgan."
      },
      {
        q: "Kiosaki bo'yicha «Aktiv» nima?",
        options: [
          "Sizning cho'ntagingizga pul keltiruvchi manba",
          "Faqat qimmat mashina",
          "Katta qarzlar",
          "Chiroyli kiyimlar"
        ],
        answer: 0,
        explanation: "Aktiv — egasiga doimiy daromad keltiruvchi har qanday mol-mulk yoki investitsiyadir."
      },
      {
        q: "Muallif insonning eng katta aktivi deb nimani biladi?",
        options: ["O'z aqli va bilimi (moliyaviy aql)", "Katta uy", "Oltin taqinchoq", "Litsenziya"],
        answer: 0,
        explanation: "Insonning eng qimmatli sarmoyasi — uning o'z bilimiga kiritgan sarmoyasidir."
      },
      {
        q: "Kiosaki qanday doiraviy qaramlikni «Kalamushlar poygasi» (Rat race) deb ataydi?",
        options: [
          "Ishlash, maosh olish, qarz to'lash va yana qaytadan ishlash aylanasini",
          "Sport musobaqasini",
          "Stol o'yinini",
          "Sayohat qilishni"
        ],
        answer: 0,
        explanation: "Oylikdan oylikkacha yashab, xarajatlar ortidan quvishni «kalamushlar poygasi» deb ataydi."
      },
      {
        q: "Ushbu kitob butun dunyoda qancha nusxada sotilgan?",
        options: ["40 milliondan ortiq", "100 ming", "1 million", "500 ming"],
        answer: 0,
        explanation: "Kitob 50 dan ortiq tillarda 40 milliondan ortiq adadda chop etilgan."
      }
    ]
  },
  {
    id: 'muvaffaqiyatli-insonlar',
    title: "Muvaffaqiyatli Insonlarning 7 Ko'nikmasi",
    author: "Stiven Kovi",
    year: "1989",
    category: "growth",
    categoryName: "Shaxsiy Rivojlanish & Liderlik",
    badge: "Liderlik Darsligi",
    coverGradient: "linear-gradient(135deg, #0f766e, #14b8a6)",
    icon: "fa-award",
    pages: 380,
    readTime: "5.5 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "Shaxsiy samaradorlik, liderlik, o'zaro hamkorlik («G'alaba/G'alaba») va xarakter etikasini shakllantirish bo'yicha dunyodagi eng mashhur qo'llanma.",
    quotes: [
      "«Reaktiv bo'lmang, proaktiv bo'ling — o'z hayotingiz uchun mas'uliyatni to'liq o'z zimmangizga oling!»",
      "«Tugashini ko'z oldingizga keltirib boshlang.»"
    ],
    characters: [
      { name: "Stiven Kovi", desc: "Insoniy rivojlanish va boshqaruv bo'yicha buyuk donishmand." }
    ],
    chapters: [
      {
        title: "1-bob: 1-ko'nikma: Proaktiv bo'ling",
        content: `Hayotingizda nima sodir bo'lishi muhim emas, unga qanday munosabat bildirishingiz muhimdir. Reaktiv odamlar ob-havoga, boshqalarning kayfiyatiga bog'liq bo'lib yashaydilar.\n\nProaktiv odamlar esa o'z ob-havosini o'zlari bilan olib yuradilar. Ular boshqalarni ayblash o'rniga, "Men nima qila olaman?" deb harakatga tushadilar.`
      },
      {
        title: "2-bob: Arini charxlab turing (Sharpen the saw)",
        content: `O'rmonda bir odam to'mtoq arra bilan daraxt kesayotgan ekan. Unga: "Bir daqiqa to'xtab arrani charxlasangiz bo'lmaydimi?" deyishsa, u: "Vaqtim yo'q, daraxt kesishim kerak!" debdi.\n\nInson ham jismoniy, aqliy, ma'naviy va ijtimoiy jihatdan o'zini charxlab, rivojlantirib turmasa, kuchi tezda tugaydi.`
      }
    ],
    quiz: [
      {
        q: "\"Muvaffaqiyatli insonlarning 7 ko'nikmasi\" kitobining muallifi kim?",
        options: ["Stiven Kovi (Stephen Covey)", "Jeyms Klir", "Brayan Treysi", "Deyl Karnegi"],
        answer: 0,
        explanation: "Kitob doktor Stiven Kovi tomonidan yozilgan."
      },
      {
        q: "Kitobdagi 1-asosiy ko'nikma nima?",
        options: ["Proaktiv bo'ling (O'z hayotingizga mas'ul bo'ling)", "Tezroq gapiring", "Boylik to'plang", "Dam oling"],
        answer: 0,
        explanation: "1-ko'nikma — «Be Proactive» (Proaktiv bo'ling va tashabbusni oling)."
      },
      {
        q: "Kovi ta'riflagan «G'alaba/G'alaba» (Win-Win) tamoyili nimani anglatadi?",
        options: [
          "Ikkala tomon ham yutadigan, o'zaro manfaatli qaror topish",
          "Faqat o'zing yutib, sherigingni yengish",
          "O'yinni tark etish",
          "Hech kim yutmasligi"
        ],
        answer: 0,
        explanation: "«Win-Win» — har ikki tomon uchun ham adolatli va foydali hamkorlikdir."
      },
      {
        q: "«Arrani charxlash» ko'nikmasi nima haqida?",
        options: [
          "O'z aqli, sog'lig'i va ruhiyatini doimiy yangilab va o'stirib borish",
          "Haqiqiy duradgorlik qurollari haqida",
          "Daraxt kesish haqida",
          "Ko'p ishlash haqida"
        ],
        answer: 0,
        explanation: "Bu insonning to'rt sohada (jismoniy, aqliy, ma'naviy, hissiy) o'zini yangilashidir."
      },
      {
        q: "Kitob dunyo bo'ylab necha million nusxada chop etilgan?",
        options: ["40 milliondan ortiq", "1 million", "500 ming", "10 million"],
        answer: 0,
        explanation: "Kitob dunyodagi eng nufuzli liderlik qo'llanmasi sifatida 40 milliondan ziyod sotilgan."
      }
    ]
  },
  {
    id: 'gulliver',
    title: "Gulliverning Sayohatlari",
    author: "Jonatan Svift",
    year: "1726",
    category: "world",
    categoryName: "Jahon Klassikasi",
    badge: "Satirik Sarguzasht",
    coverGradient: "linear-gradient(135deg, #1e40af, #3b82f6)",
    icon: "fa-ship",
    pages: 310,
    readTime: "4.5 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "Kema shifokori Lemuel Gulliverning mittivoylar yurti Liliputiya va bahaybat odamlar mamlakati Brobdingnegga qilgan ajoyib, falsafiy va satirik sayohatlari.",
    quotes: [
      "«Kichik odamlarning g'ururi ba'zan eng baland tog'lardan ham ulkanroq bo'ladi.»",
      "«Haqiqiy aql o'z o'lchamingni bilishda va kamtarlikda namoyon bo'ladi.»"
    ],
    characters: [
      { name: "Lemuel Gulliver", desc: "Dengizchi, shifokor, turli g'aroyib xalqlarni o'rgangan sayyoh." },
      { name: "Liliputlar imperatori", desc: "O'zi mitti, ammo manman va kibrli hukmdor." }
    ],
    chapters: [
      {
        title: "1-bob: Liliputlar mamlakatidagi uyg'onish",
        content: `Dovuldan so'ng ko'zimni ochsam, maysazorda chalqancha yotgan edim. Qimirlay olmadim: qo'l-oyoqlarim va qalin sochlarim yerga mitti arqonchalar bilan mixlab tashlangan edi!\n\nKo'kragim ustida o'n besh santimetrcha keladigan, qo'lida kamon tutgan mitti bir odamcha turardi. Men mittivoylar saltanati — Liliputiyaga tushib qolgan edim.`
      },
      {
        title: "2-bob: Bahaybatlar mamlakatiga tushish",
        content: `Keyingi sayohatimda esa buning aksi bo'ldi: men bahaybat odamlar yurti — Brobdingnegga tushdim. U yerda har bir kishi minoradek baland, maysalar esa baland daraxtdek edi.\n\nBu yerda men o'zimni liliputdek his qildim va inson kibri qanchalik bema'ni ekanini chuqur tushundim.`
      }
    ],
    quiz: [
      {
        q: "Gulliver birinchi bo'lib tushib qolgan mittivoylar mamlakati qanday nomlanadi?",
        options: ["Liliputiya", "Brobdingneg", "Laputa", "Guanaxani"],
        answer: 0,
        explanation: "Mittivoy odamchalar mamlakati Liliputiya deb ataladi."
      },
      {
        q: "\"Gulliverning sayohatlari\" asarining muallifi kim?",
        options: ["Jonatan Svift (Jonathan Swift)", "Daniel Defo", "Jyul Vern", "Gerbert Uells"],
        answer: 0,
        explanation: "Asar irlandiyalik satirik yozuvchi Jonatan Svift tomonidan 1726-yilda yozilgan."
      },
      {
        q: "Gulliverning kasbi nima edi?",
        options: ["Kema shifokori", "Kapitan", "Oshpaz", "Askarlar boshlig'i"],
        answer: 0,
        explanation: "Lemuel Gulliver dengiz kemalarida xizmat qilgan mohir jarroh-shifokor edi."
      },
      {
        q: "Liliputlar Gulliverni qanday nom bilan atashadi?",
        options: ["«Tog'dek Odam» (Man-Mountain)", "Dev", "Hukmdor", "Sehrgar"],
        answer: 0,
        explanation: "Liliputlar uni o'z tillarida «Kuinsbus Flestrin» (Tog'dek Odam) deb atashadi."
      },
      {
        q: "Svift bu asar orqali nimalarni tanqid qilgan?",
        options: [
          "Jamiyatdagi adolatsizlik, urushlar va insoniyat kibrini",
          "Faqat dengiz sayohatlarini",
          "Ob-havoni",
          "Kemalarning sekin yurishini"
        ],
        answer: 0,
        explanation: "Asar siyosiy fitnalar, kibr va urushlarni ayovsiz fosh etuvchi mashhur satiradir."
      }
    ]
  },
  {
    id: 'alximik',
    title: "Alximik",
    author: "Paulo Koelo",
    year: "1988",
    category: "growth",
    categoryName: "Falsafiy Masal-Roman",
    badge: "Jahon Fenomeni",
    coverGradient: "linear-gradient(135deg, #b45309, #d97706)",
    icon: "fa-gem",
    pages: 200,
    readTime: "3.0 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "Andalusiyalik yosh cho'pon Santyagoning o'z «O'zlik Qismati» (Taqdir Yo'li) va Misr ehromlari ostidagi xazinani izlab kechgan mo''jizaviy va falsafiy sayohati.",
    quotes: [
      "«Qachonki sen biron narsani chin dildan istasang, butun Koinot sening orzuing amalga oshishi uchun yordamga keladi.»",
      "«Eng qimmatli xazina — o'z yuragingning tubida yashiringandir.»"
    ],
    characters: [
      { name: "Santyago", desc: "Orzusiga ergashgan yosh andalusiyalik cho'pon yigit." },
      { name: "Alximik", desc: "Saxrodagi donishmand ustoz, metallni oltinga aylantirish sirini biluvchi zot." },
      { name: "Fotima", desc: "Saxro vohasidagi go'zal qiz, haqiqiy muhabbat timsoli." }
    ],
    chapters: [
      {
        title: "1-bob: Cho'ponning tushi va Qadimiy podshoh",
        content: `Santyago Andalusiya dalalarida qo'ylarini boqib yurardi. U bir xil tush ko'rdi: bolakay uni Misr ehromlari oldiga boshlab borar va u yerda katta xazina yashiringanini aytardi.\n\nSantyago qadimiy Salim podshohi Melxisedek bilan uchrashdi. Donishmand unga: "Har bir insonning o'z Taqdir Yo'li bor. Unga ergashish — insonning yer yuzidagi yagona burchidir", deb o'rgatdi.`
      },
      {
        title: "2-bob: Saxrodagi imtihon va Xazina siri",
        content: `Santyago butun saxroni kesib o'tib, donishmand Alximik bilan do'stlashdi. U shamol bilan, quyosh bilan gaplashishni va qalb ovozini tinglashni o'rgandi.\n\nMisr ehromlariga yetib borib yerni qaziganida, xazina aslida o'zi tush ko'rgan eski cherkov tagida ekanini tushunib yetdi. Eng katta saboq esa uning bosib o'tgan buyuk ma'naviy yo'li edi.`
      }
    ],
    quiz: [
      {
        q: "\"Alximik\" romanining bosh qahramoni kim?",
        options: ["Santyago", "Paulo", "Melxisedek", "Ali"],
        answer: 0,
        explanation: "Bosh qahramon — andalusiyalik yosh cho'pon Santyagodir."
      },
      {
        q: "Asarning eng mashhur falsafiy iqtibosi qaysi?",
        options: [
          "«Sen biron narsani chin dildan istasang, butun Koinot senga yordamga keladi»",
          "«Faqat pul to'pla»",
          "«Saxroda suv yo'q»",
          "«Hech kimga ishonma»"
        ],
        answer: 0,
        explanation: "Bu aforizm Paulo Koeloning butun dunyo bo'ylab mashhur bo'lgan bosh g'oyasidir."
      },
      {
        q: "Santyago qaysi mo''jizaviy obidalar yonidan xazinani qidirishga boradi?",
        options: ["Misr ehromlari yonidan", "Toj Mahal", "Ermitaj", "Kolizey"],
        answer: 0,
        explanation: "U tushida ko'rgan Misr ehromlari sari uzoq yo'lga chiqadi."
      },
      {
        q: "Asar muallifi Paulo Koelo qaysi mamlakat adibi?",
        options: ["Braziliya", "Ispaniya", "Italiya", "Argentina"],
        answer: 0,
        explanation: "Paulo Koelo mashhur braziliyalik adib bo'lib, asarini portugal tilida yozgan."
      },
      {
        q: "\"Alximik\" dunyoning qancha tiliga tarjima qilinib Ginnes rekordiga kirgan?",
        options: ["80 dan ortiq tilga", "10 ta tilga", "5 ta tilga", "Faqat ingliz tiliga"],
        answer: 0,
        explanation: "Kitob tirik muallif asarlari ichida eng ko'p (80 dan ortiq) tilga tarjima qilingani bilan rekord qo'ygan."
      }
    ]
  },
  {
    id: 'urush-va-tinchlik',
    title: "Urush va Tinchlik",
    author: "Lev Tolstoy",
    year: "1869",
    category: "world",
    categoryName: "Jahon Klassikasi",
    badge: "Epik Shoh Asar",
    coverGradient: "linear-gradient(135deg, #1e3a8a, #172554)",
    icon: "fa-chess-rook",
    pages: 900,
    readTime: "12.0 soat",
    rating: 5.0,
    audioAvailable: true,
    description: "XIX asr boshidagi Napoleon urushlari davrida yashagan yuzlab qahramonlar, Pyer Bezuxov, Andrey Bolkonskiy va Natasha Rostovalarning ma'naviy izlanishlari, muhabbati va xalq matonati haqidagi epik doston.",
    quotes: [
      "«Haqiqiy buyuklik soddalik, ezgulik va haqiqat bo'lgan joydadir.»",
      "«Sevgi — inson ruhiyatining eng yuksak qudratidir.»"
    ],
    characters: [
      { name: "Andrey Bolkonskiy", desc: "Shon-sharaf izlagan, ammo so'ngra hayotning asl qadrini anglagan knyaz." },
      { name: "Pyer Bezuxov", desc: "Samimiy, adolatparvar, ezgulik yo'lini izlagan aslzoda." },
      { name: "Natasha Rostova", desc: "Hayotsevar, quvnoq, samimiylik va mehr timsoli." }
    ],
    chapters: [
      {
        title: "1-bob: Austerlits osmoni va Andrey Bolkonskiy",
        content: `Austerlits jang maydonida yarador bo'lib yiqilgan knyaz Andrey ko'zini ochib osmonga qaradi. Qonli jang, baqir-chaqirlar endi unga mayda va ahamiyatsiz tuyuldi.\n\nUning tepasida cheksiz, sokin, moviy osmon suzib yurardi. Bolkonskiy shon-sharaf ortidan quvish qanchalik bema'nilik ekanini, hayotning har bir soniyasi naqadar muqaddasligini ilk bor anglab yetdi.`
      },
      {
        title: "2-bob: Natasha Rostovaning birinchi bali",
        content: `Peterburgdagi hashamatli saroyda musiqa yangrardi. Oq libosdagi yosh Natasha Rostova hayajondan titrab birinchi balga qadam qo'ydi.\n\nKnyaz Andrey uning jamolini ko'rib, barcha dardlarini unutdi. Bu raqs butun asardagi eng go'zal, samimiy va pokiza daqiqalardan biri bo'lib qoldi.`
      }
    ],
    quiz: [
      {
        q: "\"Urush va tinchlik\" epik romanining muallifi kim?",
        options: ["Lev Tolstoy", "Fyodor Dostoyevskiy", "Anton Chexov", "Aleksandr Pushkin"],
        answer: 0,
        explanation: "Asar rus va jahon adabiyoti dahosi Lev Nikolayevich Tolstoy tomonidan yozilgan."
      },
      {
        q: "Asarda qaysi mashhur tarixiy urush voqealari tasvirlangan?",
        options: [
          "1812-yilgi Vatan urushi va Napoleon bilan janglar",
          "Birinchi jahon urushi",
          "Qrim urushi",
          "Shimoliy urush"
        ],
        answer: 0,
        explanation: "Roman 1805–1812 yillardagi Napoleon Bonapartga qarshi urushlarni qamrab oladi."
      },
      {
        q: "Asardagi eng samimiy, hayotsevar ayol qahramon kim?",
        options: ["Natasha Rostova", "Elen Kuragina", "Mariya Bolkonskaya", "Sonya"],
        answer: 0,
        explanation: "Natasha Rostova — asarning ruhiy yuragi bo'lgan go'zal va samimiy obrazdir."
      },
      {
        q: "Knyaz Andrey Bolkonskiy hayotning asl mohiyatini qaysi jangda osmonga boqib anglaydi?",
        options: ["Austerlits jangi", "Borodino jangi", "Smolensk jangi", "Vaterloo jangi"],
        answer: 0,
        explanation: "Austerlits maydonida yaralangan Andrey sokin osmonga qarab haqiqiy tinchlikni his etadi."
      },
      {
        q: "\"Urush va tinchlik\" romani nechta jilddan (tomdan) iborat?",
        options: ["4 jilddan", "2 jilddan", "1 jilddan", "7 jilddan"],
        answer: 0,
        explanation: "Asar to'rtta katta jild va epilogdan iborat ulkan epopeyadir."
      }
    ]
  }
];

// ============================================================
// PART 4: 100 TA SHOH ASAR KUTUBXONA KATALOGI
// ============================================================
var CATALOG_100_DATA = [
  // 1-10: O'zbek mumtoz durdonalari
  { num: 1, id: 'otkan-kunlar', title: "O'tkan Kunlar", author: "Abdulla Qodiriy", year: "1926", category: "O'zbek adabiyoti", isInteractive: true, desc: "O'zbek romanchiligining ilk gultoji, Otabek va Kumush muhabbati." },
  { num: 2, id: 'mehrobdan-chayon', title: "Mehrobdan Chayon", author: "Abdulla Qodiriy", year: "1928", category: "O'zbek adabiyoti", isInteractive: true, desc: "Qo'qon xonligi davridagi saroy fitnalari va Anvar-Ra'no sevgisi." },
  { num: 3, id: 'kecha-va-kunduz', title: "Kecha va Kunduz", author: "Abdulhamid Cho'lpon", year: "1936", category: "O'zbek adabiyoti", isInteractive: true, desc: "Jadid adabiyotining ulug' fojiasi, Zebining qismati va ozodlik nolasi." },
  { num: 4, id: 'shum-bola', title: "Shum Bola", author: "G'afur G'ulom", year: "1936", category: "O'zbek adabiyoti", isInteractive: true, desc: "Qoravoyning quvnoq, sho'x va hayotiy sarguzashtlari." },
  { num: 5, id: 'yulduzli-tunlar', title: "Yulduzli Tunlar (Bobur)", author: "Pirimqul Qodirov", year: "1978", category: "O'zbek adabiyoti", isInteractive: true, desc: "Zahiriddin Muhammad Boburning shonli va ziddiyatli hayot yo'li." },
  { num: 6, id: 'ikki-eshik-orasi', title: "Ikki Eshik Orasi", author: "O'tkir Hoshimov", year: "1986", category: "O'zbek adabiyoti", isInteractive: true, desc: "Urush yillaridagi o'zbek xalqining sabr-matonati va mehr-oqibati." },
  { num: 7, id: 'dunyoning-ishlari', title: "Dunyoning Ishlari", author: "O'tkir Hoshimov", year: "1982", category: "O'zbek adabiyoti", isInteractive: true, desc: "Ona mehrining cheksizligi va samimiy bolalik xotiralari." },
  { num: 8, id: 'daftar-hoshiyasidagi-bitiklar', title: "Daftar Hoshiyasidagi Bitiklar", author: "O'tkir Hoshimov", year: "2001", category: "Shaxsiy rivojlanish", isInteractive: true, desc: "Hayot, vijdon va insoniylik haqidagi teran aforizmlar." },
  { num: 9, id: 'xamsa', title: "Xamsa", author: "Alisher Navoiy", year: "1485", category: "O'zbek adabiyoti", isInteractive: true, desc: "Turkiy tildagi buyuk beshlik, Farhod, Majnun va Iskandar dostonlari." },
  { num: 10, id: 'boburnoma', title: "Boburnoma", author: "Zahiriddin Muhammad Bobur", year: "1530", category: "O'zbek adabiyoti", isInteractive: true, desc: "O'rta asrlarning tengsiz memuari va qomusiy ensiklopediyasi." },

  // 11-20: O'zbek va qardosh adabiyot
  { num: 11, id: 'ufq', title: "Ufq (Trilogiya)", author: "Said Ahmad", year: "1974", category: "O'zbek adabiyoti", isInteractive: true, desc: "Katta Farg'ona kanali va urush yillaridagi el matonati." },
  { num: 12, id: 'qutadgu-bilig', title: "Qutadg'u Bilig", author: "Yusuf Xos Hojib", year: "1069", category: "O'zbek adabiyoti", isInteractive: true, desc: "Saodatga eltuvchi bilim, adolatli davlat va zakovat qonunlari." },
  { num: 13, id: 'sariq-devni-minib', title: "Sariq Devni Minib", author: "Xudoyberdi To'xtaboyev", year: "1968", category: "Bolalar & Fantastika", isInteractive: true, desc: "Hoshimjonning sehrli qalpoqcha bilan kechgan qiziq sarguzashtlari." },
  { num: 14, id: 'shirin-qovunlar', title: "Shirin Qovunlar Mamlakati", author: "Xudoyberdi To'xtaboyev", year: "1977", category: "Bolalar & Fantastika", isInteractive: true, desc: "Sehrli qovun urug'lari va bolalarning sirli yurtga parvozi." },
  { num: 15, id: 'sehrli-qalpoqcha', title: "Sehrli Qalpoqcha", author: "Xudoyberdi To'xtaboyev", year: "1972", category: "Bolalar & Fantastika", isInteractive: true, desc: "Amanullo va Zumradning ezgulik yo'lidagi quvnoq sarguzashti." },
  { num: 16, id: 'molxona', title: "Molxona (Hayvonlar Xo'jaligi)", author: "Jorj Oruell", year: "1945", category: "Jahon klassikasi", isInteractive: true, desc: "Tenglik va erkinlik g'oyalari atrofidagi antiutopik satira." },
  { num: 17, id: 'oq-kema', title: "Oq Kema", author: "Chingiz Aytmatov", year: "1970", category: "Jahon klassikasi", isInteractive: true, desc: "Yetti yoshli orzumand bola va Shoxdor Ona bug'u afsonasi." },
  { num: 18, id: 'alvido-gulsari', title: "Alvido, Gulsari!", author: "Chingiz Aytmatov", year: "1966", category: "Jahon klassikasi", isInteractive: true, desc: "Tanabay cho'pon va yo'rg'a Gulsarining vafodorlik tarixi." },
  { num: 19, id: 'asrga-tatigulik-kun', title: "Asrga Tatigulik Kun", author: "Chingiz Aytmatov", year: "1980", category: "Jahon klassikasi", isInteractive: true, desc: "Sario'zak biyoboni, Mankurt fojiasi va koinot sirlari." },
  { num: 20, id: 'kichik-shahzoda', title: "Kichik Shahzoda", author: "Antuan de Sent-Ekzyuperi", year: "1943", category: "Jahon klassikasi", isInteractive: true, desc: "B-612 sayyorasidan kelgan bolakay va qalb ko'zi bilan ko'rish siri." },

  // 21-35: Jahon klassikasi, detektiv va fantastika
  { num: 21, id: 'robinzon-kruzo', title: "Robinzon Kruzo", author: "Daniel Defo", year: "1719", category: "Jahon klassikasi", isInteractive: true, desc: "Kimsasiz orolda 28 yil kechgan inson irodasi g'alabasi." },
  { num: 22, id: 'graf-monte-kristo', title: "Graf Monte-Kristo", author: "Aleksandr Dyuma", year: "1844", category: "Jahon klassikasi", isInteractive: true, desc: "Edmond Dantesning If qasridan qochishi va adolat tantanasi." },
  { num: 23, id: 'uch-mushketyor', title: "Uch Mushketyor", author: "Aleksandr Dyuma", year: "1844", category: "Jahon klassikasi", isInteractive: true, desc: "«Birimiz barchamiz uchun!» shiori ostidagi jasorat daryosi." },
  { num: 24, id: 'sherlok-xolms', title: "Sherlok Xolms Sarguzashtlari", author: "Artur Konan Doyl", year: "1892", category: "Jahon klassikasi", isInteractive: true, desc: "Beyker-strit 221B dagi deduksiya dahosi va doktor Vatson." },
  { num: 25, id: 'tom-soyer', title: "Tom Soyerning Sarguzashtlari", author: "Mark Tven", year: "1876", category: "Bolalar & Fantastika", isInteractive: true, desc: "Missisipi sohilidagi sho'x bolalik va g'or xazinasi." },
  { num: 26, id: 'chol-va-dengiz', title: "Chol va Dengiz", author: "Ernest Xeminguey", year: "1952", category: "Jahon klassikasi", isInteractive: true, desc: "«Insonni yo'q qilish mumkin, ammo yengib bo'lmaydi!»" },
  { num: 27, id: 'kitob-1984', title: "1984", author: "Jorj Oruell", year: "1949", category: "Jahon klassikasi", isInteractive: true, desc: "«Katta Og'a seni kuzatmoqda!» — mutlaq nazorat haqidagi ogohnoma." },
  { num: 28, id: 'farengeyt-451', title: "Farengeyt bo'yicha 451 daraja", author: "Rey Bredberi", year: "1953", category: "Jahon klassikasi", isInteractive: true, desc: "Kitoblarni yoquvchi jamiyat va tafakkur ozodligi isyoni." },
  { num: 29, id: 'garri-potter', title: "Garri Potter va Falsafa Toshi", author: "J.K. Rouling", year: "1997", category: "Bolalar & Fantastika", isInteractive: true, desc: "Xogvarts sehrgarlik maktabi va do'stlikning yovuzlik ustidan zafari." },
  { num: 30, id: 'atom-odatlar', title: "Atom Odatlar", author: "Jeyms Klir", year: "2018", category: "Shaxsiy rivojlanish", isInteractive: true, desc: "Har kuni 1% ga yaxshilanish va foydali odatlarni avtomatlashtirish." },
  { num: 31, id: 'boy-ota-kambagal-ota', title: "Boy Ota, Kambag'al Ota", author: "Robert Kiosaki", year: "1997", category: "Shaxsiy rivojlanish", isInteractive: true, desc: "Aktiv va passiv farqi hamda moliyaviy mustaqillik sirlari." },
  { num: 32, id: 'muvaffaqiyatli-insonlar', title: "Muvaffaqiyatli Insonlarning 7 Ko'nikmasi", author: "Stiven Kovi", year: "1989", category: "Shaxsiy rivojlanish", isInteractive: true, desc: "Proaktivlik, Win-Win va xarakter yetukligi qo'llanmasi." },
  { num: 33, id: 'gulliver', title: "Gulliverning Sayohatlari", author: "Jonatan Svift", year: "1726", category: "Jahon klassikasi", isInteractive: true, desc: "Liliputlar va bahaybatlar mamlakatidagi satirik sarguzasht." },
  { num: 34, id: 'alximik', title: "Alximik", author: "Paulo Koelo", year: "1988", category: "Shaxsiy rivojlanish", isInteractive: true, desc: "Cho'pon Santyagoning O'zlik Qismati va Misr ehromlari xazinasi." },
  { num: 35, id: 'urush-va-tinchlik', title: "Urush va Tinchlik", author: "Lev Tolstoy", year: "1869", category: "Jahon klassikasi", isInteractive: true, desc: "1812-yilgi urush, Bolkonskiy, Pyer va Natasha Rostovaning ruhiy olami." },

  // 36-50: Qo'shimcha o'zbek adabiyoti durdonalari
  { num: 36, id: null, title: "Navoiy", author: "Oybek", year: "1945", category: "O'zbek adabiyoti", isInteractive: false, desc: "Hazrat Navoiyning hayoti, ijodi va Husayn Boyqaro davridagi kurashlari." },
  { num: 37, id: null, title: "Qutlug' Qon", author: "Oybek", year: "1940", category: "O'zbek adabiyoti", isInteractive: false, desc: "Yo'lchi va Gulnorning muhabbati hamda chor mustamlakachiligiga qarshi isyon." },
  { num: 38, id: null, title: "Sarob", author: "Abdulla Qahhor", year: "1937", category: "O'zbek adabiyoti", isInteractive: false, desc: "Munisbekning xomxayollari va ruhiy fojealari tahlili." },
  { num: 39, id: null, title: "Sinchalak", author: "Abdulla Qahhor", year: "1958", category: "O'zbek adabiyoti", isInteractive: false, desc: "Saida obraz orqali jamiyatdagi eskicha qarashlarga zarba beruvchi qissa." },
  { num: 40, id: null, title: "O'tmishdan Ertaklar", author: "Abdulla Qahhor", year: "1965", category: "O'zbek adabiyoti", isInteractive: false, desc: "Muallifning bolalikdagi og'ir, ammo saboqli xotiralari." },
  { num: 41, id: null, title: "Chinor", author: "Asqad Muxtor", year: "1969", category: "O'zbek adabiyoti", isInteractive: false, desc: "Ochil buvaning shajarasi va avlodlar o'rtasidagi ma'naviy vorisiylik." },
  { num: 42, id: null, title: "Avlodlar Dovoni", author: "Pirimqul Qodirov", year: "1989", category: "O'zbek adabiyoti", isInteractive: false, desc: "Boburning davomchilari — Humoyun va Akbarshoh davridagi Hindiston." },
  { num: 43, id: null, title: "Humoyun va Akbar", author: "Pirimqul Qodirov", year: "1994", category: "O'zbek adabiyoti", isInteractive: false, desc: "Boburiylar sulolasining Hindistondagi madaniy yuksalishi." },
  { num: 44, id: null, title: "Yulduzlar Mangu Yonadi", author: "Tog'ay Murod", year: "1976", category: "O'zbek adabiyoti", isInteractive: false, desc: "Kurash, polvonlik ruhiyati va o'zbekona g'urur qissasi." },
  { num: 45, id: null, title: "Otamdan Qolgan Dalalar", author: "Tog'ay Murod", year: "1993", category: "O'zbek adabiyoti", isInteractive: false, desc: "Dehqon mehnati, paxta yakkahokimligi va o'zbek dehqonining fojiasi." },
  { num: 46, id: null, title: "Bu Dunyoda O'lib Bo'lmaydi", author: "Tog'ay Murod", year: "1999", category: "O'zbek adabiyoti", isInteractive: false, desc: "Mustaqillik arafasidagi ijtimoiy-ruhiy o'zgarishlar romani." },
  { num: 47, id: null, title: "Shaytanat (1-5 kitob)", author: "Tohir Malik", year: "1992", category: "O'zbek adabiyoti", isInteractive: false, desc: "Asadbekning qismati orqali jinoyat va jazo, qasos va kechirim dramasi." },
  { num: 48, id: null, title: "Murdalar Gapirmaydilar", author: "Tohir Malik", year: "1999", category: "O'zbek adabiyoti", isInteractive: false, desc: "Giyohvandlik balosiga qarshi ogohlantiruvchi o'tkir detektiv." },
  { num: 49, id: null, title: "Tug'yon", author: "Ibrohim Rahim", year: "1975", category: "O'zbek adabiyoti", isInteractive: false, desc: "Daryolar bo'ysundirilishi va muhandislar jasorati." },
  { num: 50, id: null, title: "Diyonat", author: "Odil Yoqubov", year: "1977", category: "O'zbek adabiyoti", isInteractive: false, desc: "Olimlar o'rtasidagi vijdon, halollik va ilm yo'lidagi kurashlar." },

  // 51-65: O'zbek tarixiy va ma'rifiy asarlari
  { num: 51, id: null, title: "Ulug'bek Xazinasi", author: "Odil Yoqubov", year: "1973", category: "O'zbek adabiyoti", isInteractive: false, desc: "Mirzo Ulug'bek fojiasi va uning rasadxonadagi bebaho yulduzlar jadvali." },
  { num: 52, id: null, title: "Ko'hna Dunyo", author: "Odil Yoqubov", year: "1982", category: "O'zbek adabiyoti", isInteractive: false, desc: "Beruniy va Ibn Sino o'rtasidagi do'stlik, ilmiy bahslar va donishmandlik." },
  { num: 53, id: null, title: "Kuhna Qasr", author: "Shukur Xolmirzayev", year: "1987", category: "O'zbek adabiyoti", isInteractive: false, desc: "Surxondaryo tog'laridagi qadimiy an'analar va inson ruhiyati." },
  { num: 54, id: null, title: "Olabo'ji", author: "Shukur Xolmirzayev", year: "1992", category: "O'zbek adabiyoti", isInteractive: false, desc: "Tabiatni asrash va insonning ma'naviy qiyofasi tahlili." },
  { num: 55, id: null, title: "Odam Ato va Momo Havo Bolalari", author: "Murod Muhammad Do'st", year: "1985", category: "O'zbek adabiyoti", isInteractive: false, desc: "Qishloq ahli orzulari va yangi davrga intilishlari." },
  { num: 56, id: null, title: "Galatepaga Qaytish", author: "Murod Muhammad Do'st", year: "1983", category: "O'zbek adabiyoti", isInteractive: false, desc: "Ziyoli insonning o'z o'tmishi va qishlog'i oldidagi ma'naviy burchi." },
  { num: 57, id: null, title: "Lolazor", author: "Murod Muhammad Do'st", year: "1988", category: "O'zbek adabiyoti", isInteractive: false, desc: "Davlat boshqaruvi va sobiq tuzum kirdikorlarini fosh qiluvchi roman." },
  { num: 58, id: null, title: "Ruhlar Isyoni", author: "Erkin Vohidov", year: "1979", category: "O'zbek adabiyoti", isInteractive: false, desc: "Bengaliyalik shoir Nazrul Islom haqidagi erkinlik doston-monologi." },
  { num: 59, id: null, title: "O'zbegim", author: "Erkin Vohidov", year: "1968", category: "O'zbek adabiyoti", isInteractive: false, desc: "O'zbek xalqining ming yillik tarixi va faxrini madh etgan qasida." },
  { num: 60, id: null, title: "O'zbekiston", author: "Abdulla Oripov", year: "1971", category: "O'zbek adabiyoti", isInteractive: false, desc: "Vatan madhiyasi bo'lgan o'lmas she'rlar va dostonlar to'plami." },
  { num: 61, id: null, title: "Jannatga Yo'l", author: "Abdulla Oripov", year: "1978", category: "O'zbek adabiyoti", isInteractive: false, desc: "Inson vijdoni, ezgulik va oxirat mas'uliyati haqidagi falsafiy doston." },
  { num: 62, id: null, title: "Temurtuzuklari", author: "Sohibqiron Amir Temur", year: "1400", category: "O'zbek adabiyoti", isInteractive: false, desc: "«Kuch — adolatdadir!» — buyuk sarkardaning saltanat boshqaruv qoidalari." },
  { num: 63, id: null, title: "Zafarnoma", author: "Sharafiddin Ali Yazdiy", year: "1425", category: "O'zbek adabiyoti", isInteractive: false, desc: "Amir Temurning g'alabalari va bunyodkorlik ishlari tarixi." },
  { num: 64, id: null, title: "Devonu Lug'otit Turk", author: "Mahmud Qoshg'ariy", year: "1074", category: "O'zbek adabiyoti", isInteractive: false, desc: "Qadimiy turkiy qabilalar tili, geografiyasi va maqollari xazinasi." },
  { num: 65, id: null, title: "Hibat ul-Haqoyiq", author: "Ahmad Yugnakiy", year: "XII asr", category: "O'zbek adabiyoti", isInteractive: false, desc: "«Haqiqatlar armug'oni» — axloq-odob va til odobi haqida hikmatlar." },

  // 66-80: Jahon adabiyoti klassikalari
  { num: 66, id: null, title: "Jinoyat va Jazo", author: "Fyodor Dostoyevskiy", year: "1866", category: "Jahon klassikasi", isInteractive: false, desc: "Raskolnikovning vijdon azoblari va ma'naviy najot topishi." },
  { num: 67, id: null, title: "Idiot (Telba)", author: "Fyodor Dostoyevskiy", year: "1869", category: "Jahon klassikasi", isInteractive: false, desc: "Knyaz Mishkinning samimiy ezguligi va xudbin jamiyat qarama-qarshiligi." },
  { num: 68, id: null, title: "Aka-Uka Karamazovlar", author: "Fyodor Dostoyevskiy", year: "1880", category: "Jahon klassikasi", isInteractive: false, desc: "Iymon, erkin iroda va oilaviy ehtiroslar fojiasi." },
  { num: 69, id: null, title: "Anna Karenina", author: "Lev Tolstoy", year: "1877", category: "Jahon klassikasi", isInteractive: false, desc: "Sevgi, oilaviy burch va jamiyat qoliplari orasidagi fojeiy taqdir." },
  { num: 70, id: null, title: "Iqrornoma", author: "Lev Tolstoy", year: "1882", category: "Jahon klassikasi", isInteractive: false, desc: "Tolstoyning hayot ma'nosi va ruhiy qanoat izlanishlari." },
  { num: 71, id: null, title: "Faust", author: "Iogann Volfgang Gyote", year: "1808", category: "Jahon klassikasi", isInteractive: false, desc: "Doktor Faust va Mefistofel: ilm, haqiqat va qalb erkinligi kurashi." },
  { num: 72, id: null, title: "Hamleth", author: "Uilyam Shekspir", year: "1601", category: "Jahon klassikasi", isInteractive: false, desc: "«Bo'lmoq yo bo'lmaslik — mana masala!» Daniya shahzodasi fojiasi." },
  { num: 73, id: null, title: "Otello", author: "Uilyam Shekspir", year: "1603", category: "Jahon klassikasi", isInteractive: false, desc: "Yagoning makkorligi va Otelloning rashk girdobidagi fojiasi." },
  { num: 74, id: null, title: "Qirol Lir", author: "Uilyam Shekspir", year: "1606", category: "Jahon klassikasi", isInteractive: false, desc: "Otalik mehri, soxta xushomadlar va haqiqiy sadoqat sinovi." },
  { num: 75, id: null, title: "Don Kixot", author: "Migel de Servantes", year: "1605", category: "Jahon klassikasi", isInteractive: false, desc: "La-Manchalik orzumand ritsar va uning sadoqatli quroldoshi Sancho Pansa." },
  { num: 76, id: null, title: "Xo'rlanganlar (Les Misérables)", author: "Viktor Gyugo", year: "1862", category: "Jahon klassikasi", isInteractive: false, desc: "Jan Valjan, Kozetta va inspektor Javerning adolat yo'lidagi to'qnashuvi." },
  { num: 77, id: null, title: "Parij Bibi Maryam Ibodatxonasi", author: "Viktor Gyugo", year: "1831", category: "Jahon klassikasi", isInteractive: false, desc: "Kvazimodo, Esmeralda va Frolloning muhabbat fojiasi." },
  { num: 78, id: null, title: "Yuz Yillik Yolg'izlik", author: "Gabriel Garsia Markes", year: "1967", category: "Jahon klassikasi", isInteractive: false, desc: "Buendia avlodining sehrli realizm uslubidagi yetti avlodlik tarixi." },
  { num: 79, id: null, title: "Oshkora Qotillik Qissasi", author: "Gabriel Garsia Markes", year: "1981", category: "Jahon klassikasi", isInteractive: false, desc: "Barcha bilgan, ammo hech kim to'xtatmagan qotillik tahlili." },
  { num: 80, id: null, title: "Vabo (La Peste)", author: "Alber Kamyu", year: "1947", category: "Jahon klassikasi", isInteractive: false, desc: "Oran shahridagi epidemiyaga qarshi doktor Rie boshchiligidagi insoniy burch." },

  // 81-100: Sarguzasht, zamonaviy bestsellerlar, ilm va shaxsiy o'sish
  { num: 81, id: null, title: "Begona (L'Étranger)", author: "Alber Kamyu", year: "1942", category: "Jahon klassikasi", isInteractive: false, desc: "Merso obrazi orqali jamiyat qoliplari va ekzistensial yolg'izlik." },
  { num: 82, id: null, title: "Evgeniy Onegin", author: "Aleksandr Pushkin", year: "1833", category: "Jahon klassikasi", isInteractive: false, desc: "She'riy roman: Onegin, Tatyana va o'sha davr rus jamiyati qomusi." },
  { num: 83, id: null, title: "Kapitan Qizi", author: "Aleksandr Pushkin", year: "1836", category: "Jahon klassikasi", isInteractive: false, desc: "Grinyov va Masha Mironovaning muhabbati hamda Pugachyov qo'zg'oloni." },
  { num: 84, id: null, title: "Kavkaz Asiri", author: "Lev Tolstoy", year: "1872", category: "Jahon klassikasi", isInteractive: false, desc: "Jilinning matonati va Dina ismli qizaloqning mehr-shafqati." },
  { num: 85, id: null, title: "Kapitan Grant Bolalari", author: "Jyul Vern", year: "1868", category: "Bolalar & Fantastika", isInteractive: false, desc: "37-paralleldan topilgan shisha xat va dunyo bo'ylab sarguzashtli qidiruv." },
  { num: 86, id: null, title: "O'n Besh Yoshli Kapitan", author: "Jyul Vern", year: "1878", category: "Bolalar & Fantastika", isInteractive: false, desc: "Dik Sendning kemani qutqarishdagi qat'iyati va jasorati." },
  { num: 87, id: null, title: "Suv Ostida 80 Ming Kilometr", author: "Jyul Vern", year: "1870", category: "Bolalar & Fantastika", isInteractive: false, desc: "Kapitan Nemo va uning afsonaviy «Nautilus» suvosti kemasi sirlari." },
  { num: 88, id: null, title: "Oskar va Pushti Xonim", author: "Erik-Emmanuel Shmitt", year: "2002", category: "Jahon klassikasi", isInteractive: false, desc: "O'n yoshli bolaning har bir kunni o'n yil deb qabul qilib yashagan ta'sirli qissasi." },
  { num: 89, id: null, title: "Martin Iden", author: "Jek London", year: "1909", category: "Jahon klassikasi", isInteractive: false, desc: "Oddiy dengizchining yuksak irodasi bilan buyuk yozuvchi bo'lib yetishishi." },
  { num: 90, id: null, title: "Oq So'yloq", author: "Jek London", year: "1906", category: "Bolalar & Fantastika", isInteractive: false, desc: "Yovvoyi bo'ri bolasining insoniy mehr ta'sirida sadoqatli do'stga aylanishi." },
  { num: 91, id: null, title: "Hayotga Muhabbat", author: "Jek London", year: "1905", category: "Jahon klassikasi", isInteractive: false, desc: "Shimol qahratonida ochlik va o'limni yengib o'tgan inson irodasi." },
  { num: 92, id: null, title: "Sehrli Shlyapa (Mumi-trollar)", author: "Tuve Yansson", year: "1948", category: "Bolalar & Fantastika", isInteractive: false, desc: "Mumi-dol vodiysidagi qiziqarli va mehribon ertaklar olami." },
  { num: 93, id: null, title: "Dunyoning Eng Dono Odamiga Maktub", author: "Robin Sharma", year: "1997", category: "Shaxsiy rivojlanish", isInteractive: false, desc: "Ferrarisini sotgan rohib: xotirjamlik va muvozanatli yashash sirlari." },
  { num: 94, id: null, title: "Ongosti Mo''jizalari", author: "Jon Kexo", year: "1987", category: "Shaxsiy rivojlanish", isInteractive: false, desc: "Ongosti kuchidan foydalanib, maqsadlarga erishish sirlari." },
  { num: 95, id: null, title: "O'yla va Boy Bo'l", author: "Napoleon Xill", year: "1937", category: "Shaxsiy rivojlanish", isInteractive: false, desc: "500 dan ortiq milliarderlarning muvaffaqiyat tamoyillari tahlili." },
  { num: 96, id: null, title: "Sapiens: Insoniyatning Qisqacha Tarixi", author: "Yuval Noy Xarari", year: "2011", category: "Ilm-fan & Falsafa", isInteractive: false, desc: "Insoniyatning ibtidoiy davrlardan sun'iy intellekt davrigacha bo'lgan evolyutsiyasi." },
  { num: 97, id: null, title: "Qisqa Vaqt Tarixi", author: "Stiven Xoking", year: "1988", category: "Ilm-fan & Falsafa", isInteractive: false, desc: "Katta portlash, qora tuynuklar va koinotning paydo bo'lish sirlari." },
  { num: 98, id: null, title: "G'alati Hodisalar", author: "Artur Klark", year: "1968", category: "Bolalar & Fantastika", isInteractive: false, desc: "Kosmik sayohatlar va kelajak sivilizatsiyalari haqida tasavvurlar." },
  { num: 99, id: null, title: "Ulug'bek Burji", author: "Maksud Shayxzoda", year: "1958", category: "O'zbek adabiyoti", isInteractive: false, desc: "Mirzo Ulug'bek fojiasi va ilm g'alabasiga bag'ishlangan she'riy tragediya." },
  { num: 100, id: null, title: "Jaloliddin Manguberdi", author: "Maksud Shayxzoda", year: "1944", category: "O'zbek adabiyoti", isInteractive: false, desc: "Chingizxonga qarshi mardonavor kurashgan buyuk sarkardaning qahramonligi." }
];

// ============================================================
// LIBRARY ENGINE & CONTROLLER
// ============================================================

var ALL_BOOKS = [].concat(BOOKS_PART_1, BOOKS_PART_2, BOOKS_PART_3);

var LibraryManager = {
  books: ALL_BOOKS,
  catalog: CATALOG_100_DATA,
  activeCategory: 'all',
  searchQuery: '',
  currentBook: null,
  currentChapterIdx: 0,
  fontSize: 18,
  theme: 'dark', // 'dark', 'sepia', 'light'
  readingTimerInterval: null,
  readingSeconds: 0,
  isSpeaking: false,
  catalogSearchQuery: '',
  catalogActiveCategory: 'all',

  quizState: {
    book: null,
    currentQ: 0,
    score: 0,
    answers: []
  },

  init: function () {
    this.loadSavedStats();
    this.renderStatsWidget();
    this.renderBooks();
    this.setupEventListeners();
  },

  loadSavedStats: function () {
    try {
      var raw = localStorage.getItem('lib_reading_stats');
      this.stats = raw ? JSON.parse(raw) : {
        minutesToday: 15,
        totalMinutes: 185,
        booksFinished: 5,
        currentStreak: 4,
        xpEarned: 450,
        favorites: ['otkan-kunlar', 'molxona', 'oq-kema', 'sariq-devni-minib']
      };
    } catch (e) {
      this.stats = {
        minutesToday: 15,
        totalMinutes: 185,
        booksFinished: 5,
        currentStreak: 4,
        xpEarned: 450,
        favorites: ['otkan-kunlar', 'molxona', 'oq-kema', 'sariq-devni-minib']
      };
    }
  },

  saveStats: function () {
    try {
      localStorage.setItem('lib_reading_stats', JSON.stringify(this.stats));
    } catch (e) {}
    this.renderStatsWidget();
  },

  setupEventListeners: function () {
    var self = this;
    var searchInput = document.getElementById('lib-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', function (e) {
        self.searchQuery = e.target.value.toLowerCase().trim();
        self.renderBooks();
      });
    }

    var catSearchInput = document.getElementById('lib-catalog-search-input');
    if (catSearchInput) {
      catSearchInput.addEventListener('input', function (e) {
        self.catalogSearchQuery = e.target.value.toLowerCase().trim();
        self.renderCatalogGrid();
      });
    }
  },

  setCategory: function (cat) {
    this.activeCategory = cat;
    document.querySelectorAll('.lib-filter-chip').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-cat') === cat);
    });
    this.renderBooks();
    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  },

  renderStatsWidget: function () {
    var minTodayEl = document.getElementById('lib-stat-minutes-today');
    var totalBooksEl = document.getElementById('lib-stat-books-count');
    var streakEl = document.getElementById('lib-stat-streak');
    var xpEl = document.getElementById('lib-stat-xp');
    var progressEl = document.getElementById('lib-stat-goal-progress');

    if (minTodayEl) minTodayEl.textContent = this.stats.minutesToday + ' daqiqa';
    if (totalBooksEl) totalBooksEl.textContent = this.stats.booksFinished + ' ta kitob';
    if (streakEl) streakEl.textContent = this.stats.currentStreak + ' kun';
    if (xpEl) xpEl.textContent = this.stats.xpEarned + ' XP';

    // Kunlik maqsad: 20 daqiqa
    var percent = Math.min(100, Math.round((this.stats.minutesToday / 20) * 100));
    if (progressEl) {
      progressEl.style.width = percent + '%';
      var label = document.getElementById('lib-stat-goal-label');
      if (label) label.textContent = percent + '% (Maqsad: 20 daq)';
    }
  },

  renderBooks: function () {
    var container = document.getElementById('lib-books-grid');
    if (!container) return;

    var self = this;
    var filtered = this.books.filter(function (b) {
      // Kategoriya filtri
      if (self.activeCategory === 'favorites') {
        if (!self.stats.favorites.includes(b.id)) return false;
      } else if (self.activeCategory !== 'all' && b.category !== self.activeCategory) {
        return false;
      }

      // Qidiruv filtri
      if (self.searchQuery) {
        var matchTitle = b.title.toLowerCase().indexOf(self.searchQuery) !== -1;
        var matchAuthor = b.author.toLowerCase().indexOf(self.searchQuery) !== -1;
        var matchDesc = b.description.toLowerCase().indexOf(self.searchQuery) !== -1;
        if (!matchTitle && !matchAuthor && !matchDesc) return false;
      }

      return true;
    });

    // Count badge
    var countBadge = document.getElementById('lib-books-count-badge');
    if (countBadge) {
      countBadge.textContent = filtered.length + ' ta asar ko\'rsatilmoqda (Jami 35 ta to\'liq kitob)';
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="lib-empty-state">
          <i class="fas fa-book-open"></i>
          <h3>Hech qanday asar topilmadi</h3>
          <p>Qidiruv so'zini o'zgartiring yoki boshqa toifani tanlang.</p>
        </div>
      `;
      return;
    }

    var html = '';
    filtered.forEach(function (book) {
      var isFav = self.stats.favorites.includes(book.id);
      html += `
        <div class="lib-book-card">
          <div class="lib-book-cover" style="background: ${book.coverGradient};">
            <span class="book-badge">${book.badge}</span>
            <div class="book-icon-wrap"><i class="fas ${book.icon}"></i></div>
            <h4 class="book-cover-title">${book.title}</h4>
            <span class="book-cover-author">${book.author}</span>
            <button class="book-fav-btn ${isFav ? 'active' : ''}" onclick="window.LibraryManager.toggleFavorite('${book.id}', event)" title="Sevimli asarlarga qo'shish">
              <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
            </button>
          </div>
          <div class="lib-book-body">
            <div class="book-meta-row">
              <span class="book-cat-tag"><i class="fas fa-tag"></i> ${book.categoryName}</span>
              <span class="book-rating"><i class="fas fa-star"></i> ${book.rating}</span>
            </div>
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author"><i class="fas fa-user-pen"></i> ${book.author} (${book.year})</p>
            <p class="book-desc">${book.description}</p>
            <div class="book-metrics">
              <span><i class="fas fa-file-lines"></i> ${book.pages} bet</span>
              <span><i class="fas fa-clock"></i> ~${book.readTime}</span>
              ${book.audioAvailable ? '<span><i class="fas fa-headphones" style="color:#38bdf8;"></i> Audio</span>' : ''}
            </div>
            <div class="book-actions">
              <button class="btn btn-primary btn-sm btn-read" onclick="window.LibraryManager.openReader('${book.id}')">
                <i class="fas fa-book-reader"></i> Mutolaa
              </button>
              <button class="btn btn-outline btn-sm btn-quiz" onclick="window.LibraryManager.openQuiz('${book.id}')">
                <i class="fas fa-circle-question"></i> Asar Testi
              </button>
            </div>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  },

  toggleFavorite: function (bookId, event) {
    if (event) event.stopPropagation();
    var idx = this.stats.favorites.indexOf(bookId);
    if (idx !== -1) {
      this.stats.favorites.splice(idx, 1);
      if (window.showToast) window.showToast('Sevimlilardan chiqarildi', 'info');
    } else {
      this.stats.favorites.push(bookId);
      if (window.showToast) window.showToast("Sevimlilarga qo'shildi! ❤️", 'success');
    }
    this.saveStats();
    this.renderBooks();
    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  },

  // ============================================================
  // MUTOLAA ZALI (READER MODAL)
  // ============================================================
  openReader: function (bookId, chapterIdx) {
    var book = this.books.find(function (b) { return b.id === bookId; });
    if (!book) return;

    this.currentBook = book;
    this.currentChapterIdx = chapterIdx || 0;
    this.readingSeconds = 0;

    var modal = document.getElementById('book-reader-modal');
    if (!modal) return;

    document.getElementById('reader-book-title').textContent = book.title;
    document.getElementById('reader-book-author').textContent = book.author + ' (' + book.year + ')';

    // Boblar dropdown'i
    var select = document.getElementById('reader-chapter-select');
    if (select) {
      select.innerHTML = '';
      book.chapters.forEach(function (ch, idx) {
        var opt = document.createElement('option');
        opt.value = idx;
        opt.textContent = ch.title;
        select.appendChild(opt);
      });
      select.value = this.currentChapterIdx;
      select.onchange = function () {
        window.LibraryManager.loadChapter(parseInt(this.value, 10));
      };
    }

    this.loadChapter(this.currentChapterIdx);
    this.setTheme(this.theme);
    this.applyFontSize();

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Mutolaa taymerini ishga tushirish (har 60 soniyada statistika yangilanadi)
    var self = this;
    clearInterval(this.readingTimerInterval);
    this.readingTimerInterval = setInterval(function () {
      self.readingSeconds += 1;
      var min = Math.floor(self.readingSeconds / 60);
      var sec = self.readingSeconds % 60;
      var timerEl = document.getElementById('reader-timer-display');
      if (timerEl) {
        timerEl.textContent = (min < 10 ? '0' : '') + min + ':' + (sec < 10 ? '0' : '') + sec;
      }

      // Har 1 daqiqa mutolaa uchun
      if (self.readingSeconds % 60 === 0) {
        self.stats.minutesToday += 1;
        self.stats.totalMinutes += 1;
        self.stats.xpEarned += 2; // Har daqiqaga 2 XP
        self.saveStats();
        if (window.AccountsManager) {
          window.AccountsManager.addScore(2, "Mutolaa daqiqasi (" + book.title + ")");
        }
      }
    }, 1000);

    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  },

  loadChapter: function (idx) {
    if (!this.currentBook || !this.currentBook.chapters[idx]) return;
    this.currentChapterIdx = idx;

    var chapter = this.currentBook.chapters[idx];
    var titleEl = document.getElementById('reader-ch-title');
    var bodyEl = document.getElementById('reader-ch-body');
    var quotesBox = document.getElementById('reader-quotes-box');
    var charBox = document.getElementById('reader-char-box');

    if (titleEl) titleEl.textContent = chapter.title;
    if (bodyEl) {
      var paras = chapter.content.split('\n\n');
      var html = '';
      paras.forEach(function (p) {
        if (p.trim()) html += '<p>' + p.replace(/\n/g, '<br>') + '</p>';
      });
      bodyEl.innerHTML = html;
    }

    // Iqtiboslar
    if (quotesBox) {
      if (this.currentBook.quotes && this.currentBook.quotes.length > 0) {
        var qHtml = '<h4><i class="fas fa-quote-left"></i> Asardan Mashhur Iqtiboslar:</h4><ul>';
        this.currentBook.quotes.forEach(function (q) {
          qHtml += '<li>' + q + '</li>';
        });
        qHtml += '</ul>';
        quotesBox.innerHTML = qHtml;
        quotesBox.style.display = 'block';
      } else {
        quotesBox.style.display = 'none';
      }
    }

    // Qahramonlar
    if (charBox) {
      if (this.currentBook.characters && this.currentBook.characters.length > 0) {
        var cHtml = '<h4><i class="fas fa-users"></i> Asar Qahramonlari:</h4><div class="chars-grid">';
        this.currentBook.characters.forEach(function (c) {
          cHtml += '<div class="char-chip"><strong>' + c.name + ':</strong> <span>' + c.desc + '</span></div>';
        });
        cHtml += '</div>';
        charBox.innerHTML = cHtml;
        charBox.style.display = 'block';
      } else {
        charBox.style.display = 'none';
      }
    }

    // Scroll to top
    var scrollPane = document.getElementById('reader-scroll-content');
    if (scrollPane) scrollPane.scrollTop = 0;
  },

  closeReader: function () {
    var modal = document.getElementById('book-reader-modal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = '';

    clearInterval(this.readingTimerInterval);
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    this.isSpeaking = false;

    if (this.readingSeconds >= 60) {
      if (window.showToast) {
        window.showToast("Barakalla! " + Math.round(this.readingSeconds / 60) + " daqiqa mutolaa qilindi 📚", 'success');
      }
    }
    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  },

  setTheme: function (theme) {
    this.theme = theme;
    var pane = document.getElementById('reader-sheet');
    if (pane) {
      pane.classList.remove('theme-dark', 'theme-sepia', 'theme-light');
      pane.classList.add('theme-' + theme);
    }
    document.querySelectorAll('.reader-theme-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-theme') === theme);
    });
  },

  changeFontSize: function (delta) {
    this.fontSize = Math.max(14, Math.min(26, this.fontSize + delta));
    this.applyFontSize();
  },

  applyFontSize: function () {
    var bodyEl = document.getElementById('reader-ch-body');
    if (bodyEl) {
      bodyEl.style.fontSize = this.fontSize + 'px';
      bodyEl.style.lineHeight = (this.fontSize * 1.65) + 'px';
    }
    var disp = document.getElementById('reader-font-display');
    if (disp) disp.textContent = this.fontSize + 'px';
  },

  toggleSpeech: function () {
    if (!window.speechSynthesis) {
      if (window.showToast) window.showToast('Brauzeringizda ovozli o\'qish qo\'llab-quvvatlanmaydi', 'warning');
      return;
    }

    var btn = document.getElementById('reader-speech-btn');
    if (this.isSpeaking) {
      window.speechSynthesis.cancel();
      this.isSpeaking = false;
      if (btn) btn.innerHTML = '<i class="fas fa-volume-high"></i> Ovozli tinglash';
      if (window.showToast) window.showToast('Audio to\'xtatildi ⏹️', 'info');
    } else {
      var bodyEl = document.getElementById('reader-ch-body');
      if (!bodyEl) return;
      var text = bodyEl.innerText || bodyEl.textContent;
      var utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'uz-UZ';
      utterance.rate = 0.95;

      var self = this;
      utterance.onend = function () {
        self.isSpeaking = false;
        if (btn) btn.innerHTML = '<i class="fas fa-volume-high"></i> Ovozli tinglash';
      };

      window.speechSynthesis.speak(utterance);
      this.isSpeaking = true;
      if (btn) btn.innerHTML = '<i class="fas fa-pause"></i> To\'xtatish';
      if (window.showToast) window.showToast('Ovozli mutolaa boshlandi 🔊', 'info');
    }
  },

  // ============================================================
  // MUTOLAA VIKTORINASI (BOOK QUIZ MODAL)
  // ============================================================
  openQuiz: function (bookId) {
    var book = this.books.find(function (b) { return b.id === bookId; });
    if (!book || !book.quiz || book.quiz.length === 0) {
      if (window.showToast) window.showToast("Bu asar bo'yicha viktorina tez kunda qo'shiladi", 'info');
      return;
    }

    this.quizState = {
      book: book,
      currentQ: 0,
      score: 0,
      answers: []
    };

    var modal = document.getElementById('book-quiz-modal');
    if (!modal) return;

    document.getElementById('bquiz-book-title').textContent = book.title + ' — Mutolaa Viktorinasi';
    document.getElementById('bquiz-screen-question').style.display = 'block';
    document.getElementById('bquiz-screen-result').style.display = 'none';

    this.renderQuizQuestion();
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  },

  renderQuizQuestion: function () {
    var q = this.quizState.book.quiz[this.quizState.currentQ];
    var total = this.quizState.book.quiz.length;

    document.getElementById('bquiz-progress-text').textContent = 'Savol ' + (this.quizState.currentQ + 1) + ' / ' + total;
    document.getElementById('bquiz-progress-bar').style.width = (((this.quizState.currentQ + 1) / total) * 100) + '%';
    document.getElementById('bquiz-question-text').textContent = q.q;

    var optsBox = document.getElementById('bquiz-options-box');
    optsBox.innerHTML = '';

    var self = this;
    q.options.forEach(function (optText, optIdx) {
      var btn = document.createElement('button');
      btn.className = 'bquiz-option-btn';
      btn.innerHTML = '<span class="opt-letter">' + String.fromCharCode(65 + optIdx) + '</span> ' + optText;
      btn.onclick = function () {
        self.selectQuizOption(optIdx, btn);
      };
      optsBox.appendChild(btn);
    });

    var expEl = document.getElementById('bquiz-explanation-box');
    if (expEl) expEl.style.display = 'none';
    var nextBtn = document.getElementById('bquiz-next-btn');
    if (nextBtn) nextBtn.style.display = 'none';
  },

  selectQuizOption: function (selectedIdx, clickedBtn) {
    var q = this.quizState.book.quiz[this.quizState.currentQ];
    var allBtns = document.querySelectorAll('.bquiz-option-btn');
    allBtns.forEach(function (b) { b.disabled = true; });

    var isCorrect = (selectedIdx === q.answer);
    if (isCorrect) {
      clickedBtn.classList.add('correct');
      this.quizState.score += 1;
      if (window.SoundFX && typeof SoundFX.playCorrect === 'function') SoundFX.playCorrect();
    } else {
      clickedBtn.classList.add('wrong');
      allBtns[q.answer].classList.add('correct');
      if (window.SoundFX && typeof SoundFX.playWrong === 'function') SoundFX.playWrong();
    }

    var expEl = document.getElementById('bquiz-explanation-box');
    if (expEl) {
      expEl.innerHTML = '<strong>' + (isCorrect ? '✅ To\'g\'ri!' : '❌ Noto\'g\'ri.') + '</strong> ' + q.explanation;
      expEl.style.display = 'block';
    }

    var nextBtn = document.getElementById('bquiz-next-btn');
    if (nextBtn) {
      var isLast = (this.quizState.currentQ === this.quizState.book.quiz.length - 1);
      nextBtn.innerHTML = isLast ? 'Natijani ko\'rish <i class="fas fa-trophy"></i>' : 'Keyingi savol <i class="fas fa-arrow-right"></i>';
      nextBtn.style.display = 'inline-flex';
    }
  },

  nextQuizQuestion: function () {
    if (this.quizState.currentQ < this.quizState.book.quiz.length - 1) {
      this.quizState.currentQ += 1;
      this.renderQuizQuestion();
    } else {
      this.finishQuiz();
    }
  },

  finishQuiz: function () {
    document.getElementById('bquiz-screen-question').style.display = 'none';
    document.getElementById('bquiz-screen-result').style.display = 'block';

    var total = this.quizState.book.quiz.length;
    var score = this.quizState.score;
    var percent = Math.round((score / total) * 100);

    document.getElementById('bquiz-res-score').textContent = score + ' / ' + total;
    document.getElementById('bquiz-res-percent').textContent = percent + '%';

    var xpEarned = score * 10;
    document.getElementById('bquiz-res-xp').textContent = '+' + xpEarned + ' XP';

    // Ballarni saqlash
    this.stats.xpEarned += xpEarned;
    if (percent >= 80) {
      this.stats.booksFinished += 1;
    }
    this.saveStats();

    if (window.AccountsManager) {
      window.AccountsManager.addScore(xpEarned, "Kitobxonlik viktorinasi (" + this.quizState.book.title + ")");
    }

    if (window.SoundFX && typeof SoundFX.playFanfare === 'function') {
      SoundFX.playFanfare();
    }
  },

  closeQuiz: function () {
    var modal = document.getElementById('book-quiz-modal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = '';
    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  },

  // ============================================================
  // 100 TA SHOH ASAR KATALOGI MODALI
  // ============================================================
  openFullCatalogModal: function () {
    var modal = document.getElementById('lib-catalog-modal');
    if (!modal) return;
    this.catalogSearchQuery = '';
    this.catalogActiveCategory = 'all';
    var inp = document.getElementById('lib-catalog-search-input');
    if (inp) inp.value = '';
    this.renderCatalogGrid();
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  },

  closeFullCatalogModal: function () {
    var modal = document.getElementById('lib-catalog-modal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = '';
    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  },

  setCatalogCategory: function (cat) {
    this.catalogActiveCategory = cat;
    document.querySelectorAll('.cat-filter-btn').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-ccat') === cat);
    });
    this.renderCatalogGrid();
  },

  renderCatalogGrid: function () {
    var list = document.getElementById('catalog-books-list');
    if (!list) return;

    var self = this;
    var filtered = this.catalog.filter(function (item) {
      if (self.catalogActiveCategory !== 'all' && item.category !== self.catalogActiveCategory) {
        return false;
      }
      if (self.catalogSearchQuery) {
        var t = item.title.toLowerCase();
        var a = item.author.toLowerCase();
        var d = item.desc.toLowerCase();
        if (t.indexOf(self.catalogSearchQuery) === -1 && a.indexOf(self.catalogSearchQuery) === -1 && d.indexOf(self.catalogSearchQuery) === -1) {
          return false;
        }
      }
      return true;
    });

    var countEl = document.getElementById('lib-catalog-count-label');
    if (countEl) {
      countEl.textContent = filtered.length + ' ta asar topildi (Jami 100 ta)';
    }

    var html = '';
    filtered.forEach(function (b) {
      var btnAction = b.isInteractive && b.id
        ? `<button class="btn btn-sm btn-primary" onclick="window.LibraryManager.closeFullCatalogModal(); window.LibraryManager.openReader('${b.id}');"><i class="fas fa-book-reader"></i> Mutolaa</button>`
        : `<span class="badge-catalog-only"><i class="fas fa-book"></i> Katalogda mavjud</span>`;

      html += `
        <div class="catalog-item-card ${b.isInteractive ? 'interactive-avail' : ''}">
          <div class="c-num-badge">#${b.num}</div>
          <div class="c-info">
            <div class="c-header-row">
              <h4 class="c-title">${b.title}</h4>
              <span class="c-category-tag">${b.category}</span>
            </div>
            <p class="c-author"><i class="fas fa-pen-nib"></i> ${b.author} (${b.year})</p>
            <p class="c-desc">${b.desc}</p>
          </div>
          <div class="c-action-wrap">
            ${btnAction}
          </div>
        </div>
      `;
    });

    list.innerHTML = html;
  }
};

window.LibraryManager = LibraryManager;

// DOM tayyor bo'lganda ishga tushirish
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    if (window.LibraryManager) window.LibraryManager.init();
  }, 200);
});

})();
