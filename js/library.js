/**
 * 30-IDUM Maktab Test Platformasi - "Kitobxonlik va Elektron Kutubxona" Moduli
 * O'zbek va Jahon Badiiy Durdonalari, Elektron Mutolaa Zali,
 * Audio Tinglash, Kitobxonlik Chellenji va Asarlar bo'yicha Viktorinalar.
 */

(function () {
  'use strict';

  var BOOKS_DATA = [
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
        { name: "Otabek", desc: "Toshkentlik savdogar Yusufbek hojining o'g'li, adolatparvar, ilg'or fikrli yigit." },
        { name: "Kumushbibi", desc: "Marg'ilonlik Mirzakarim qutidorning qizi, sadoqat va go'zallik timsoli." },
        { name: "Zaynab", desc: "Otabekning onasi majburlab uylantirgan ikkinchi xotini." },
        { name: "Yusufbek hoji", desc: "Otabekning otasi, el-yurt tinchligini o'ylaydigan dono arbob." }
      ],
      chapters: [
        {
          title: "1-bob: Marg'ilon mehmonxonasida",
          content: `1265-hijriy yil, dalv oyining yigirmanchi kunlari... Marg'ilonning mashhur choyxonasida Toshkentdan kelgan yosh yigit — Otabek o'tirar edi. Uning qaddi-qomati kelishgan, nigohlarida o'zgacha bir donolik va samimiyat jilvalanardi.

Otabek Marg'ilonga savdo ishlari bilan kelgan bo'lsa-da, uning ko'ngli doimo ilm-ma'rifat, yurtning obodligi va adolat haqidagi o'ylar bilan band edi. Choyxona ahlidan biri unga qarab: "Bu yigit oddiy savdogarga o'xshamaydi, suhbatida hikmat bor", deb shivirladi.

Shu kuni Marg'ilon ko'chalarida kechgan tasodif Otabekning butun umrini tubdan o'zgartirib yuboradigan buyuk muhabbat — Kumushbibi bilan uchrashuv sari qo'yilgan ilk qadam edi.`
        },
        {
          title: "2-bob: Muhabbat va Sadoqat siri",
          content: `Kumushbibining ostonasi ostonalar ichida eng tabarruki edi. Otabek uning jamolini ko'rgan lahzada butun borliqni unutdi. Bu shunchaki ko'ngil xushligi emas, ikki buyuk qalbning abadiy rishtasi edi.

"Inson sevgisi bilan ulug'dir", der edi Otabek o'z do'stlariga. "Qachonki millat o'z qizlarini, onalarini e'zozlasa, oila muqaddas saqlansa, o'sha yurt qudratli va yengilmas bo'ladi." Kumushbibi ham Otabekning sadoqatiga butun vujudi bilan ishondi va uning har bir so'zini qalbida ardoqladi.`
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
      rating: 4.9,
      audioAvailable: true,
      description: "Dunyoning 300 dan ortiq tillariga tarjima qilingan afsonaviy asar. Sahroda uchuvchi bilan uchrashgan jajji shahzodaning do'stlik, mehr-oqibat va insoniylik sirlari haqidagi hikoyasi.",
      quotes: [
        "«Faqat qalb ko'zi bilangina haqiqatni ko'rish mumkin. Eng muhim narsalar ko'zga ko'rinmaydi.»",
        "«Sen doimo o'zing qo'lga o'rgatgan narsang uchun mas'ulsan.»"
      ],
      characters: [
        { name: "Kichik Shahzoda", desc: "B-612 asteroididan kelgan begunoh va qiziquvchan jajji sayyoh." },
        { name: "Tulkivoy", desc: "Do'stlik va o'zaro mehrning asl ma'nosini ochib bergan dono jonivor." },
        { name: "Uchuvchi", desc: "Saxroi Kabirda samolyoti buzilib qolgan hikoyanavis qahramon." },
        { name: "Atirgul", desc: "Shahzodaning sevimli, nozik va injiq guli." }
      ],
      chapters: [
        {
          title: "1-bob: B-612 sayyorasi va Atirgul",
          content: `Kichik Shahzoda o'zining mitti sayyorasida yolg'iz yashar edi. U har kuni uchta kichik vulqonni tozalab turar, baobab daraxtlarining nishlarini o'z vaqtida yulib tashlardi, aks holda ular sayyorani yorib yuborishi mumkin edi.

Bir kuni uning sayyorasida kutilmaganda go'zal bir gul unib chiqdi. Bu nafis qizil atirgul edi. Gul juda nozik va biroz injiq bo'lib, har kuni ertalab suv quyilishini va shabada tekkanda shisha qopqoq bilan to'silishini so'rardi.

Shahzoda gulni juda sevardi, ammo uning injiqliklaridan charchab, boshqa sayyoralarga sayohat qilishga qaror qildi.`
        },
        {
          title: "2-bob: Tulkivoyning buyuk siri",
          content: `Yer yuziga yetib kelgan Kichik Shahzoda xushmanzara dashtda Tulkivoy bilan uchrashdi. "Men bilan o'yna", dedi Shahzoda. "Yo'q, men hali senga o'rganmaganman", javob berdi Tulki.

"O'rganish nima degani?" deb so'radi Shahzoda.
"Bu — bir-biriga bog'lanish, qadrdon bo'lish deganidir", dedi Tulki. "Hozir sen men uchun yuz minglab boshqa bolalarga o'xshash bir bolasan. Men esa senga yuz minglab tulkilarga o'xshagan bir tulkiman. Ammo agar sen meni qo'lga o'rgatsang, biz bir-birimiz uchun dunyoda yagona bo'lib qolamiz..."

Ketish oldidan Tulki unga o'zining eng katta sirini ochdi: "Mana mening sirim, u juda oddiy: faqat yurak bilan to'g'ri ko'rish mumkin. Asl haqiqat ko'zga ko'rinmaydi."`
        }
      ],
      quiz: [
        {
          q: "Tulkivoy Kichik Shahzodaga qanday buyuk haqiqatni o'rgatgan edi?",
          options: [
            "Faqat yurak bilangina haqiqatni ko'rish mumkin, eng muhim narsa ko'zga ko'rinmaydi",
            "Katta boylik yig'ish kerak",
            "Sayyoralarni ko'p kezish foydalidir",
            "Ertalab tez uyg'onish lozim"
          ],
          answer: 0,
          explanation: "Tulkining mashhur siri: «Faqat qalb ko'zi bilangina ko'rish mumkin. Eng muhim narsalar ko'zga ko'rinmaydi.»"
        },
        {
          q: "Kichik Shahzoda qaysi asteroiddan (sayyoradan) Yerga kelgan edi?",
          options: ["B-612", "A-101", "Mars-4", "Yupiter-9"],
          answer: 0,
          explanation: "Uchuvchining aytishicha, uning vatani B-612 deb ataluvchi kichik asteroid edi."
        },
        {
          q: "Kichik Shahzoda o'z sayyorasida doimo qaysi xavfli daraxt nishlarini yulib turardi?",
          options: ["Baobab", "Chinor", "Kaktus", "Eman"],
          answer: 0,
          explanation: "Baobab daraxtlari o'sib ketsa, mitti sayyorani o'z ildizlari bilan yorib yuborishi mumkin edi."
        },
        {
          q: "\"Kichik Shahzoda\" asari muallifi kasbi bo'yicha kim bo'lgan?",
          options: ["Harbiy uchuvchi", "Dengiz kapitani", "Shifokor", "Astronom"],
          answer: 0,
          explanation: "Antuan de Sent-Ekzyuperi professional fransuz harbiy uchuvchisi bo'lgan."
        },
        {
          q: "Kichik Shahzodaning o'z sayyorasidagi eng sevimli guli nima edi?",
          options: ["Atirgul (Roza)", "Lola", "Boychechak", "Binafsha"],
          answer: 0,
          explanation: "Uning sayyorasida yagona va injiq atirgul o'sib chiqqan edi."
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
      badge: "Milliy Uyg'onish Romani",
      coverGradient: "linear-gradient(135deg, #0f172a, #6366f1)",
      icon: "fa-cloud-moon",
      pages: 320,
      readTime: "5.0 soat",
      rating: 4.9,
      audioAvailable: true,
      description: "Cho'lponning o'lmas romani. O'zbek xalqining erk va erkinlik, ma'rifat sari intilishi, xurofot va adolatsizlikka qarshi kurashi Zebi obrazi orqali ifodalangan.",
      quotes: [
        "«Ko'ngil ozodligi bo'lmagan joyda hech qanday baxt bo'lishi mumkin emas.»",
        "«Tong otdi, endi qorong'u kecha ortda qolishi shart!»"
      ],
      characters: [
        { name: "Zebi", desc: "Beg'ubor, qalbida qo'shiqlar jo'sh urgan o'zbek qizi, fojiali taqdir egasi." },
        { name: "Akbarali mingboshi", desc: "Chor amaldorlariga xizmat qiluvchi zolim va boy hukmdor." },
        { name: "Razzoq so'fi", desc: "Zebining otasi, haddan tashqari mutaassib va jaholatga berilgan shaxs." },
        { name: "Miryoqub", desc: "Zamonaning ziddiyatlarini tushunib yetgan, o'zgarishlarga intiluvchi kotib." }
      ],
      chapters: [
        {
          title: "1-bob: Zebining beg'ubor bahori",
          content: `Dalada bahor... Ko'klam nafasi butun vodiyga taralgan, binafshalar xushbo'y hid taratardi. Qizlar dalada quvnoq qo'shiqlar aytib, chechanlik bilan bir-birlariga lola ulashardilar.

Zebi ularning ichida eng erkalasi, ovozi xuddi bulbulday jarangdor qiz edi. Uning qalbida hayotga bo'lgan cheksiz muhabbat va orzular jo'sh urardi. Ammo u o'zining qora qismat sari ketayotganini, mingboshining haramiga tutqun bo'lishini hali xayoliga ham keltirmasdi.`
        }
      ],
      quiz: [
        {
          q: "\"Kecha va kunduz\" romanining bosh qahramoni bo'lgan begunoh qizning ismi nima?",
          options: ["Zebi (Zebuniso)", "Kumush", "Oybarchin", "Nodira"],
          answer: 0,
          explanation: "Romandagi bosh fojiali timsol — beg'ubor qo'shiqchi qiz Zebidir."
        },
        {
          q: "\"Kecha va kunduz\" romani muallifi Abdulhamid Cho'lpon qaysi adabiy harakatning yirik vakili bo'lgan?",
          options: ["Jadidchilik (Ma'rifatparvarlik)", "Klassitsizm", "Sentimentalizm", "Futurizm"],
          answer: 0,
          explanation: "Cho'lpon jadidchilik harakatining eng olovli shoir va adiblaridan biri edi."
        },
        {
          q: "Romanda Zebi qanday ajoyib iqtidorga ega edi?",
          options: ["Juda chiroyli qo'shiq aytar va doira chalardi", "Ot choptirar edi", "Kitob tarjima qilardi", "Rasm chizardi"],
          answer: 0,
          explanation: "Zebi o'zining jozibali ovozi, xalq qo'shiqlarini maromiga yetkazib aytishi bilan mashhur edi."
        },
        {
          q: "Zebining otasi Razzoq so'fi qanday xarakter egasi edi?",
          options: ["Mutaassib, qattiqqo'l va zohid kishi", "Boy savdogar", "Ochiqko'ngil sayohatchi", "Maktab o'qituvchisi"],
          answer: 0,
          explanation: "Razzoq so'fi o'ta qattiqqo'l, qizini tashqi dunyodan to'sgan qattiq taqvodor edi."
        },
        {
          q: "Cho'lpon bu romanida qanday bosh g'oyani ilgari surgan?",
          options: ["Xalqni jaholatdan ilm va ma'rifat sari uyg'otish", "Faqat boylik to'plash", "Boshqa yurtlarga ko'chish", "Ovchilik sirlari"],
          answer: 0,
          explanation: "Asar millatni erk, erkinlik va ma'rifat sari uyg'onishga chorlovchi ramziy chaqiriqdir."
        }
      ]
    },
    {
      id: 'xamsa',
      title: "Xamsa",
      author: "Alisher Navoiy",
      year: "1483–1485",
      category: "uzbek",
      categoryName: "O'zbek Badiiy Durdonalari",
      badge: "Turkiy Til Cho'qqisi",
      coverGradient: "linear-gradient(135deg, #059669, #10b981)",
      icon: "fa-scroll",
      pages: 580,
      readTime: "8.0 soat",
      rating: 5.0,
      audioAvailable: true,
      description: "Turkiy tildagi birinchi beshlik doston. «Hayrat ul-abror», «Farhod va Shirin», «Layli va Majnun», «Sab'ai sayyor», «Saddi Iskandariy». Dunyo adabiyoti xazinasidagi eng buyuk durdonalardan biri.",
      quotes: [
        "«Olam ahli bilingizkim, ish emas dushmanlig', Yor o'ling bir-biringizgakim, erur yorlig' ish.»",
        "«Naf'ing agar xalqqa beshakdurur, Bilki, bu nafi' o'zinggadurur.»"
      ],
      characters: [
        { name: "Farhod", desc: "Ilm, hunar va mehnat orqali kamolotga yetgan fidoyi bahodir oshiq." },
        { name: "Shirin", desc: "Arman malikasi, aql-idrok, go'zallik va vafo timsoli." },
        { name: "Qays (Majnun)", desc: "Ishq yo'lida borliqdan kechgan pok qalb egasi." },
        { name: "Iskandar", desc: "Adolatli shoh, ilm va hikmat izlovchi buyuk sarkarda." }
      ],
      chapters: [
        {
          title: "Farhod va Shirin dostonidan: Farhodning mehnat va hunar siri",
          content: `Farhod yoshligidanoq o'zgacha qobiliyatga ega bo'lib, saltanat taxti va boylikdan ko'ra ilm va hunarni ustun qo'ydi. U toshyo'nar ustalardan tosh kesishni, naqqoshlardan naqsh chizishni va me'morlardan bino qurish san'atini o'rgandi.

Navoiy yozadi:
"Hunar o'rgan, hunarkim, xazinadur,
Hunarsiz kishi doim xazinadur."

Farhod Arman eliga yetib borganda, xalq suvsizlikdan qiynalayotganini ko'rdi. U Shirinning visoli uchun emas, avvalo qiyinchilikda qolgan xalqqa suv chiqarish uchun ulkan tog'ni cho'kich bilan yorib, toshlar orasidan zilol suv daryosini oqizdi.`
        }
      ],
      quiz: [
        {
          q: "Alisher Navoiyning \"Xamsa\"si necha dostondan iborat?",
          options: ["5 ta doston", "3 ta doston", "7 ta doston", "10 ta doston"],
          answer: 0,
          explanation: "\"Xamsa\" arabcha so'z bo'lib, «Beshlik» degan ma'noni anglatadi."
        },
        {
          q: "Navoiyning \"Farhod va Shirin\" dostonida Farhod eng birinchi navbatda nima orqali ulug'lanadi?",
          options: ["Mehnat, ilm va turli hunarlarni mukammal egallagani bilan", "Faqat boyligi bilan", "Sehrgarligi bilan", "Jangchi kuchi bilan"],
          answer: 0,
          explanation: "Navoiy Farhodni yoshligidanoq toshyo'narlik, me'morlik va ilmni qunt bilan o'rgangan qahramon sifatida tasvirlaydi."
        },
        {
          q: "Alisher Navoiy \"Xamsa\"ni qaysi tilda yaratgan?",
          options: ["Turkiy (Eski o'zbek tili)", "Forschada", "Arabchada", "Lotin tilida"],
          answer: 0,
          explanation: "Navoiy turkiy tilda birinchi bo'lib to'liq «Xamsa» yaratib, turkiy tilning cheksiz boyligini isbotlagan."
        },
        {
          q: "«Sab'ai sayyor» dostoni qaysi tarixiy shoh va uning 7 qasri haqida?",
          options: ["Bahrom Go'r", "Amir Temur", "Sulton Husayn Boyqaro", "Mirzo Ulug'bek"],
          answer: 0,
          explanation: "«Sab'ai sayyor» (Yetti sayyora) Bahrom Go'r va Dilorom sarguzashtlariga bag'ishlangan."
        },
        {
          q: "Navoiyning mashhur «Olam ahli bilingizkim, ish emas dushmanlig'...» baytining davomi qanday?",
          options: [
            "Yor o'ling bir-biringizgakim, erur yorlig' ish",
            "Faqat jang qiling",
            "Mollaringizni saqlang",
            "Safarga shoshiling"
          ],
          answer: 0,
          explanation: "Navoiy butun insoniyatni bir-biri bilan do'st va do'stona hamkorlikda yashashga chaqirgan."
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
      badge: "Ona Madhi Qissasi",
      coverGradient: "linear-gradient(135deg, #d97706, #b45309)",
      icon: "fa-heart",
      pages: 240,
      readTime: "3.5 soat",
      rating: 5.0,
      audioAvailable: true,
      description: "O'zbek xalqining eng sevimli asarlaridan biri. Har bir o'quvchining yurak tubiga yetib boradigan ona mehri, bolalik xotiralari va hayot sinovlari haqidagi samimiy qissa.",
      quotes: [
        "«Dunyoning eng buyuk allomasi ham ona poyiga bosh egishga majburdir.»",
        "«Onamning yopgan issiq noni hidida butun bolaligim bor edi.»"
      ],
      characters: [
        { name: "Onajon", desc: "Cheksiz mehribon, sabrli, o'zini farzandlari uchun fido qilgan muqaddas ona." },
        { name: "Muallif (Bola)", desc: "Onasining har bir nasihatini ulg'ayib anglab yetgan qalb egasi." },
        { name: "Qo'shnilar", desc: "Mahallaning samimiy, bir-biriga hamdard va oqibatli odamlari." }
      ],
      chapters: [
        {
          title: "Haqqush qissasi va Onamning sabog'i",
          content: `Tunda daraxt shoxida haqqush tinimsiz sayraydi: "Haq-qu! Haq-qu!" Bolaligimda onamdan so'ragan edim: "Oyi, nega bu qush doim yig'laydi?"

Onam boshimni silab, mehr bilan javob berdilar: "U bechora o'z ukasini yo'qotib qo'ygan. Hamma narsani vaqtida qadrlash kerak, bolam. Odam bolasi bir-biriga tirikligida g'animat, mehr ko'rsatish lozim..."

O'sha damlar onamning ko'zlarida cheksiz bir mehr va hayot hikmati jilvalanardi. Yillar o'tib tushundimki, onam aytgan har bir oddiygina gapda olam-olam hayot falsafasi yashiringan ekan.`
        }
      ],
      quiz: [
        {
          q: "\"Dunyoning ishlari\" asarining bosh mavzusi va g'oyasi nima?",
          options: [
            "Muqaddas Ona siymosi, mehr-oqibat va insoniylik",
            "Tarixiy janglar va g'alabalar",
            "Yulduzlar va koinot tadqiqoti",
            "Tijorat va boylik orttirish"
          ],
          answer: 0,
          explanation: "Asar muallifning o'z onasiga bo'lgan cheksiz mehr-muhabbati va xotiralariga bag'ishlangan."
        },
        {
          q: "\"Dunyoning ishlari\" asari muallifi kim?",
          options: ["O'tkir Hoshimov", "Tohir Malik", "Said Ahmad", "Erkin Vohidov"],
          answer: 0,
          explanation: "Bu mashhur qissa O'zbekiston xalq yozuvchisi O'tkir Hoshimov qalamiga mansub."
        },
        {
          q: "Asardagi hikoyalardan birida tilga olingan «Haq-qu!» deb sayrovchi qush qaysi?",
          options: ["Haqqush", "Qaldirg'och", "Kakku", "Zag'izg'on"],
          answer: 0,
          explanation: "«Haqqush» novellasida afsonaviy haqqush qushi haqidagi qissa aytiladi."
        },
        {
          q: "Muallif onasining non yopishi haqida qanday hislar bilan yozadi?",
          options: [
            "Tandirdan uzilgan issiq non hidi bolalikning eng baxtli davri ekanligini ta'kidlaydi",
            "Non sotib olish osonroq deb hisoblaydi",
            "Faqat xarajatlar haqida o'ylaydi",
            "Non yopishni yoqtirmaydi"
          ],
          answer: 0,
          explanation: "Issiq non hidi va tandir boshi muallif xotirasida bolalikning eng aziz ramzidir."
        },
        {
          q: "Asar o'quvchida qanday fazilatlarni tarbiyalaydi?",
          options: [
            "Ota-onani tirikligida qadrlash, oqibat va samimiylik",
            "Faqat o'z manfaatini ko'zlash",
            "Tabiatga befarq bo'lish",
            "Do'stlardan uzoqlashish"
          ],
          answer: 0,
          explanation: "Asarning eng katta ibrati — ota-onani tirikligida e'zozlash va mehr-oqibatli bo'lishdir."
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
      badge: "Iroda va Matonat",
      coverGradient: "linear-gradient(135deg, #0284c7, #0f766e)",
      icon: "fa-compass",
      pages: 280,
      readTime: "4.0 soat",
      rating: 4.8,
      audioAvailable: true,
      description: "Kemasi halokatga uchrab, 28 yil kimsasiz orolda yolg'iz yashagan insonning aqlbovar qilmas matonati, mehnatsevarligi va yengilmas irodasi haqidagi jahonshumul sarguzasht.",
      quotes: [
        "«Umid yo'qolmagan joyda hayot doimo davom etadi.»",
        "«Mehnat insonni barcha qiyinchiliklardan qutqaruvchi yagona kuchdir.»"
      ],
      characters: [
        { name: "Robinzon Kruzo", desc: "Orolga tushib qolib, uni obod maskanga aylantirgan matonatli sayyoh." },
        { name: "Juma (Friday)", desc: "Robinzon qutqarib olgan va unga sodiq do'st bo'lgan orollik yigit." }
      ],
      chapters: [
        {
          title: "1-bob: Kimsasiz oroldagi ilk tong",
          content: `To'lqinlar meni noma'lum orol qirg'og'iga uloqtirdi. Atrofga qaradim — kemadagi barcha hamrohlardan yolg'iz o'zim omon qolgan edim. Qornim och, egnim shalabbo, cho'ntagimda bitta pichoq va chaqmoqtoshdan boshqa hech vaqo yo'q edi.

Dastlab umidsizlik meni qamrab oldi. Ammo tezda tushundimki, nolib o'tirish meni qutqarmaydi. Men kemaning qoldiqlari tomon suzib bordim, u yerdan qurol-yarog', makkajo'xori donlari, duradgorlik asboblari va kitoblar olib chiqdim.

Shu kundan boshlab men orolda o'z hayotimni noldan qurishga kirishdim. Qal'a qurdik, echkilar boqdim, non pishirdim va kunlarni hisoblash uchun ustunga chiziq tortib bordim.`
        }
      ],
      quiz: [
        {
          q: "Robinzon Kruzo kimsasiz orolda necha yil yashadi?",
          options: ["28 yil", "10 yil", "5 yil", "40 yil"],
          answer: 0,
          explanation: "Robinzon Kruzo orolda jami 28 yil, ikki oy va o'n to'qqiz kun yashagan."
        },
        {
          q: "Robinzon orolda o'ziga sodiq qilib olgan yordamchisiga qanday ism berdi?",
          options: ["Juma (Friday)", "Chorshanba", "Jon", "Smit"],
          answer: 0,
          explanation: "Uni qutqargan kuni juma bo'lganligi sababli unga «Juma» deb ism qo'ygan."
        },
        {
          q: "Robinzon vaqt hisobini yo'qotmaslik uchun nima qilgan edi?",
          options: [
            "Katta yog'och ustunga har kuni bittadan chiziq tortib borgan",
            "Soat sotib olgan",
            "Qum soat yasagan",
            "Hech qanday hisob olib bormagan"
          ],
          answer: 0,
          explanation: "U kalendar sifatida qirg'oqqa o'rnatilgan katta yog'och ustunga har kuni pichoq bilan chiziq tortgan."
        },
        {
          q: "Robinzon orolda sut va go'sht uchun qaysi hayvonlarni qo'lga o'rgatgan?",
          options: ["Yovvoyi echkilar", "Quyonlar", "kiyiklar", "To'ng'izlar"],
          answer: 0,
          explanation: "U oroldagi yovvoyi echkilarni tutib, qoraqo'ton yasab boqqan va sut sog'ishni o'rgangan."
        },
        {
          q: "\"Robinzon Kruzo\" asarining asosiy g'oyasi nima?",
          options: [
            "Inson irodasi, mehnati va aql-zakovati har qanday mushkul vaziyatni yengadi",
            "Dengizga chiqmaslik kerak",
            "Orollarda yashash qulay",
            "Yolg'izlik eng yaxshi holat"
          ],
          answer: 0,
          explanation: "Asar insonning mehnat va matonat orqali har qanday qiyin sharoitda g'olib chiqishini ulug'laydi."
        }
      ]
    },
    {
      id: 'atom-odatlar',
      title: "Atom Odatlar",
      author: "Jeyms Klir",
      year: "2018",
      category: "growth",
      categoryName: "Shaxsiy Rivojlanish & Tafakkur",
      badge: "Jahon Bestselleri",
      coverGradient: "linear-gradient(135deg, #7c3aed, #a855f7)",
      icon: "fa-bolt",
      pages: 310,
      readTime: "4.5 soat",
      rating: 4.9,
      audioAvailable: true,
      description: "Kichik o'zgarishlar — ulkan natijalar. Har kuni atigi 1% ga yaxshilanish orqali hayotni, ta'limdagi yutuqlarni va xarakterni tubdan o'zgartirish usullari.",
      quotes: [
        "«Siz o'z maqsadlaringiz darajasiga ko'tarilmaysiz, siz o'z tizimlaringiz darajasiga tushasiz.»",
        "«Har bir qilingan harakat — kelajakda kim bo'lishingiz uchun berilgan ovozdir.»"
      ],
      characters: [
        { name: "Jeyms Klir", desc: "Odatlar shakllanishi bo'yicha dunyoning eng yetakchi mutaxassisi." }
      ],
      chapters: [
        {
          title: "1-bob: 1% qoidasining hayratlanarli kuchi",
          content: `Agar siz har kuni atigi 1 foizga yaxshiroq bo'lsangiz, bir yil oxirida 37 barobar kuchliroq bo'lasiz. Aksincha, har kuni 1 foizga yomonlashsangiz, deyarli nolga tushasiz.

Katta muvaffaqiyatlar bir lahzada sodir bo'lmaydi. Ular har kuni qilinadigan kichik, arzimasdek ko'ringan to'g'ri tanlovlarning yig'indisidir. Ertalab 15 daqiqa kitob o'qish, bir dona yangi inglizcha so'z yodlash yoki 10 marta mashq qilish bugun bilinmasligi mumkin, ammo 1 yildan keyin sizni tengdoshlaringizdan ancha oldinga olib chiqadi.`
        }
      ],
      quiz: [
        {
          q: "«Atom odatlar» kitobidagi mashhur «1% qoidasi»ga ko'ra, har kuni 1% ga yaxshilansangiz, bir yilda necha barobar rivojlanasiz?",
          options: ["Taxminan 37 barobar", "2 barobar", "5 barobar", "100 barobar"],
          answer: 0,
          explanation: "(1.01)^365 ≈ 37.78 ga teng, ya'ni yil yakunida inson qariyb 37 barobar rivojlanadi."
        },
        {
          q: "Muallif Jeyms Klirning fikricha, natijaga erishish uchun nimaga e'tibor qaratish zarur?",
          options: ["Maqsadga emas, tizim (kunlik odatlar)ga", "Faqat orzu qilishga", "Omad kutishga", "Dam olishga"],
          answer: 0,
          explanation: "«Siz maqsadlaringiz darajasiga ko'tarilmaysiz, tizimlaringiz darajasiga tushasiz.»"
        },
        {
          q: "Yaxshi odatni shakllantirishning birinchi qonuni nima?",
          options: ["Uni ko'zga ko'rinarli qilish", "Uni yashirish", "Uni qiyinlashtirish", "Unutish"],
          answer: 0,
          explanation: "1-qoida: Odatni ko'zga ko'rinadigan qiling (Make it obvious)."
        },
        {
          q: "Yomon odatdan xalos bo'lish uchun uni qanday qilish kerak?",
          options: ["Uni qiyin va ko'rinmas qilish", "Uni osonlashtirish", "Do'stlarga maqtanish", "Tez-tez takrorlash"],
          answer: 0,
          explanation: "Yomon odatni ko'rinmas va bajarishni o'ta noqulay qilish tavsiya etiladi."
        },
        {
          q: "Kitob o'qish odatini boshlash uchun muallif qanday tavsiya beradi?",
          options: [
            "2 daqiqa qoidasi: Kuniga hech bo'lmaganda 1 sahifa o'qishdan boshlash",
            "Bir kunda 500 sahifa o'qish",
            "Faqat bayramlarda o'qish",
            "Kitobni faqat tokchada saqlash"
          ],
          answer: 0,
          explanation: "2 daqiqa qoidasi orqali har qanday katta odatni boshlash oson kechadi."
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
      badge: "Mantiq va Deduksiya",
      coverGradient: "linear-gradient(135deg, #1e293b, #475569)",
      icon: "fa-magnifying-glass",
      pages: 340,
      readTime: "5.0 soat",
      rating: 4.9,
      audioAvailable: true,
      description: "Dunyodagi eng mashhur xususiy izquvar Sherlok Xolms va doktor Vatsonning mantiq, kuzatuvchanlik va deduksiya usuli yordamida eng chigal jumboqlarni yechish tarixi.",
      quotes: [
        "«Barcha imkonsiz variantlarni chiqarib tashlaganingizdan so'ng, qolgan narsa qanchalik aqlbovar qilmas bo'lmasin, aynan haqiqatdir!»",
        "«Siz faqat ko'rasiz, lekin kuzatmaysiz. Ko'rish va kuzatish o'rtasida katta farq bor.»"
      ],
      characters: [
        { name: "Sherlok Xolms", desc: "Beyker-stritlik daho izquvar, deduksiya usuli ustasi." },
        { name: "Doktor Jon Vatson", desc: "Sherlok Xolmsning sodiq do'sti, shifokor va sarguzashtlar solnomanavisi." }
      ],
      chapters: [
        {
          title: "1-bob: Beyker-strit 221B dagi suhbat",
          content: `Ertalab kamin yonida o'tirgan edik. Xolms oynadan ko'chaga qarab, menga dedi: "Vatson, ko'ryapsanmi, anavi shoshib kelayotgan odam nafaqat harbiylik o'tmishiga ega, balki yaqinda uzoq safardan qaytgan."

Men hayrat bilan so'radim: "Buni qayerdan bilding, Xolms?"
Xolms jilmayib javob berdi: "Mantiq, azizim Vatson. Uning qaddi-qomati, qo'lidagi quyoshda qoraygan terisi, kiyimining etagidagi loy izlari barchasini aytib turibdi. Ko'pchilik faqat qaraydi, lekin men kuzataman."`
        }
      ],
      quiz: [
        {
          q: "Sherlok Xolms jinoyatlarni fosh qilishda asosan qaysi mantiqiy usuldan foydalanadi?",
          options: ["Deduksiya usuli", "Tasodifiy taxmin", "Sehr-jodu", "Faqat guvohlarga ishonish"],
          answer: 0,
          explanation: "Sherlok Xolms umumiy qonuniyatlardan xususiy xulosalar chiqarish — deduksiya usuli bilan mashhur."
        },
        {
          q: "Sherlok Xolms va doktor Vatson Londonda qaysi manzilda istiqomat qilishgan?",
          options: ["Beyker-strit 221B", "Oksford-strit 12", "Pikadilli 45", "Grinvich 7"],
          answer: 0,
          explanation: "Mashhur manzil: 221B Baker Street, London."
        },
        {
          q: "Sherlok Xolms qaysi musiqa asbobini mahorat bilan chalgan?",
          options: ["Skripka", "Pianino", "Gitara", "Fleyta"],
          answer: 0,
          explanation: "Xolms chuqur fikrga cho'mganda va dam olganda skripka chalishni yaxshi ko'rgan."
        },
        {
          q: "Sherlok Xolmsning eng ashaddiy daho dushmani kim edi?",
          options: ["Professor Moriarti", "Lestred", "Myukroft", "Genri Baskervil"],
          answer: 0,
          explanation: "Professor Jeyms Moriarti London jinoiy olamining yashirin daho yetakchisi edi."
        },
        {
          q: "\"Baskervillar iti\" qissasida qorong'u botqoqlikda nima yorug'lik sochib turgan?",
          options: ["Fosfor surtilgan ulkan it", "Kerosin chiroq", "Yulduzlar aksi", "Gulxan"],
          answer: 0,
          explanation: "Jinoyatchi itning yuziga fosfor moddasini surtib, odamlarni qo'rqitgan."
        }
      ]
    },
    {
      id: 'sariq-dev',
      title: "Sariq Devni Minib",
      author: "Xudoyberdi To'xtaboyev",
      year: "1968",
      category: "uzbek",
      categoryName: "O'zbek Badiiy Durdonalari",
      badge: "Bolalar Sevimli Sarguzashti",
      coverGradient: "linear-gradient(135deg, #eab308, #ca8a04)",
      icon: "fa-hat-wizard",
      pages: 260,
      readTime: "3.5 soat",
      rating: 5.0,
      audioAvailable: true,
      description: "Hoshimjonning sehrli qalpoqchasi va uning aqlbovar qilmas sarguzashtlari. O'qishni tashlab dangasalik qilgan bolaning o'z xatolarini tushunib, mehnat va ilm yo'liga qaytishi haqidagi qiziqarli asar.",
      quotes: [
        "«Ilmsiz va mehnatsiz olingan hech bir narsa insonni baxtli qilolmaydi.»",
        "«Sehrli qalpoqcha bo'lsa ham, o'z kuchi bilan erishilmagan yutuq qadrsizdir.»"
      ],
      characters: [
        { name: "Hoshimjon", desc: "Sho'x, xayolparast, sehrli qalpoqcha topib olib olamga mashhur bo'lmoqchi bo'lgan bola." }
      ],
      chapters: [
        {
          title: "1-bob: Sehrli qalpoqchaning topilishi",
          content: `Men, Hoshimjon, maktabda uncha qoyillatib o'qimas edim. Doim xayolimda: "Qaniydi, hech narsa qilmasdan, kitob o'qimasdan a'lochi bo'lib qolsam, hamma menga qoyil qolsa", degan orzular aylanardi.

Kunlardan bir kuni eshon boboning eski sandig'idan g'alati kiyigiz qalpoqcha topib oldim. Qalpoqchani boshimga kiygan edim, ko'zgu oldiga borib qarasam — o'zim ko'rinmayapman! Yo tavba, bu sehrli qalpoqcha-ku!

"Endi ko'rasan, Hoshimjon qanday bola ekanligini!" dedim ichimda. Ammo bu qalpoqcha menga sharaf emas, boshimga qanchadan-qancha kulgili va ibratli mashmashalarni olib kelishini hali bilmas edim...`
        }
      ],
      quiz: [
        {
          q: "Asar bosh qahramoni Hoshimjon qanday sehrli buyumni topib oladi?",
          options: [
            "Odamni ko'rinmas qilib qo'yadigan sehrli qalpoqcha",
            "Sehrli uchar gilam",
            "Sehrli qalam",
            "Sehrli ko'zoynak"
          ],
          answer: 0,
          explanation: "Hoshimjon sandiqdan kiygan odamni ko'rinmas qiluvchi sehrli qalpoqcha topib oladi."
        },
        {
          q: "Hoshimjon dastlab qaysi kasb egasi bo'lib ko'rmoqchi bo'ladi?",
          options: ["Agronom (dala mutaxassisi)", "Dengizchi", "Kosmonavt", "Uchuvchi"],
          answer: 0,
          explanation: "U avvaliga bilimsiz holda qishloq xo'jaligi mutaxassisi (agronom) bo'lishga uringan."
        },
        {
          q: "Xudoyberdi To'xtaboyev ushbu asari orqali yoshlarga qanday saboq beradi?",
          options: [
            "Bilim va mehnat qilmasdan turib haqiqiy hurmat va baxtga erishib bo'lmasligini",
            "Sehrli buyumlarni qidirish kerakligini",
            "Darslarni qoldirish foydaliligini",
            "Xayolparastlik eng yaxshi ish ekanini"
          ],
          answer: 0,
          explanation: "Asar sehrli qalpoqcha ham ilmsiz bolaga yordam berolmasligini, mehnat eng buyuk sehr ekanligini ko'rsatadi."
        },
        {
          q: "Hoshimjon darsda o'qituvchisini hayron qoldirish uchun nima qiladi?",
          options: [
            "Qalpoqchani kiyib olib, sinfda g'alati ovozlar chiqaradi va daftarlarni uchiradi",
            "A'lo bahoga javob beradi",
            "Rasm chizadi",
            "Maktabdan ketib qoladi"
          ],
          answer: 0,
          explanation: "U ko'rinmas bo'lib olib darsda turli sho'xliklar va noo'rin harakatlar qiladi."
        },
        {
          q: "Asar oxirida Hoshimjon qanday to'g'ri xulosaga keladi?",
          options: [
            "Sehrli qalpoqchadan voz kechib, halol mehnat va o'qishga kirishadi",
            "Qalpoqchani sotib yuboradi",
            "Boshqa shaharga qochadi",
            "Dangasalikda davom etadi"
          ],
          answer: 0,
          explanation: "U barcha xatolarini anglab, haqiqiy obro' faqat halol mehnat va o'qish orqali kelishini tushunadi."
        }
      ]
    }
  ];

  // ============================================================
  // KUTUBXONA VA MUTOLAA BOSHQARUVCHISI (LIBRARY MANAGER)
  // ============================================================
  var LibraryManager = {
    books: BOOKS_DATA,
    activeCategory: 'all',
    searchQuery: '',
    currentBook: null,
    currentChapterIdx: 0,
    fontSize: 18,
    theme: 'dark', // 'dark', 'sepia', 'light'
    readingTimerInterval: null,
    readingSeconds: 0,
    isSpeaking: false,
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
          booksFinished: 3,
          currentStreak: 4,
          xpEarned: 350,
          favorites: ['otkan-kunlar', 'kichik-shahzoda']
        };
      } catch (e) {
        this.stats = {
          minutesToday: 15,
          totalMinutes: 185,
          booksFinished: 3,
          currentStreak: 4,
          xpEarned: 350,
          favorites: ['otkan-kunlar', 'kichik-shahzoda']
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
        // Matn paragraflarini formatlash
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

      // O'qish yakuni xabari
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
    }
  };

  window.LibraryManager = LibraryManager;

  // DOM yuklanganda initsializatsiya qilish
  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      if (window.LibraryManager) window.LibraryManager.init();
    }, 200);
  });

})();
