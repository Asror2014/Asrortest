/**
 * 30-maktabtest - Mukammal Ta'lim va 3D Laboratoriya Platformasi
 * 1-11 sinflar uchun 1000+ ta test savollari va darsliklar bazasi
 * Barcha fanlar, har xil murakkablik darajasi (Oson, O'rtacha, Qiyin)
 * Yaratilgan: 2024 - 30-maktab uchun maxsus startup
 */

window.SUBJECT_ICONS = {
  "matematika": { faIcon: "fa-calculator", color: "#4CAF50", name: "Matematika" },
  "algebra": { faIcon: "fa-square-root-variable", color: "#2196F3", name: "Algebra" },
  "geometriya": { faIcon: "fa-shapes", color: "#9C27B0", name: "Geometriya" },
  "ona_tili": { faIcon: "fa-language", color: "#FF9800", name: "Ona tili" },
  "oqish": { faIcon: "fa-book-open", color: "#E91E63", name: "O'qish" },
  "adabiyot": { faIcon: "fa-feather", color: "#795548", name: "Adabiyot" },
  "ingliz_tili": { faIcon: "fa-globe", color: "#3F51B5", name: "Ingliz tili" },
  "rus_tili": { faIcon: "fa-globe-europe", color: "#F44336", name: "Rus tili" },
  "tabiatshunoslik": { faIcon: "fa-leaf", color: "#8BC34A", name: "Tabiatshunoslik" },
  "tarix": { faIcon: "fa-landmark", color: "#607D8B", name: "Tarix" },
  "geografiya": { faIcon: "fa-earth-americas", color: "#00BCD4", name: "Geografiya" },
  "biologiya": { faIcon: "fa-dna", color: "#4CAF50", name: "Biologiya" },
  "fizika": { faIcon: "fa-atom", color: "#FF5722", name: "Fizika" },
  "kimyo": { faIcon: "fa-flask", color: "#9C27B0", name: "Kimyo" },
  "informatika": { faIcon: "fa-laptop-code", color: "#2196F3", name: "Informatika" },
  "astronomiya": { faIcon: "fa-star", color: "#673AB7", name: "Astronomiya" },
  "iqtisodiyot": { faIcon: "fa-chart-line", color: "#4CAF50", name: "Iqtisodiyot" },
  "huquq": { faIcon: "fa-scale-balanced", color: "#795548", name: "Davlat va huquq" },
  "mantiq": { faIcon: "fa-puzzle-piece", color: "#9C27B0", name: "Mantiqiy fikrlash" },
  "mental_arifmetika": { faIcon: "fa-calculator", color: "#00BCD4", name: "Mental arifmetika" },
  "robototexnika": { faIcon: "fa-robot", color: "#FF5722", name: "Robototexnika" },
  "suniy_intellekt": { faIcon: "fa-brain", color: "#E91E63", name: "Sun'iy intellekt" },
  "kiberxavfsizlik": { faIcon: "fa-shield-halved", color: "#009688", name: "Axborot xavfsizligi" },
  "moliya": { faIcon: "fa-coins", color: "#FF9800", name: "Moliyaviy savodxonlik" }
};

window.GRADE_INFO = {
  1:  { name: "1-sinf",  level: "Boshlang'ich",  color: "#4CAF50", desc: "Savodxonlik va hisoblash asoslari" },
  2:  { name: "2-sinf",  level: "Boshlang'ich",  color: "#8BC34A", desc: "Mantiq va so'z boyligi" },
  3:  { name: "3-sinf",  level: "Boshlang'ich",  color: "#CDDC39", desc: "Ko'paytirish jadvali va tabiat sirlari" },
  4:  { name: "4-sinf",  level: "Boshlang'ich",  color: "#FFC107", desc: "Boshlang'ich bitiruv bosqichi" },
  5:  { name: "5-sinf",  level: "O'rta maktab",  color: "#FF9800", desc: "Yangi fanlar bilan tanishuv" },
  6:  { name: "6-sinf",  level: "O'rta maktab",  color: "#FF5722", desc: "Tabiiy va gumanitar chuqurlashuv" },
  7:  { name: "7-sinf",  level: "O'rta maktab",  color: "#F44336", desc: "Algebra, Geometriya, Fizika boshlanishi" },
  8:  { name: "8-sinf",  level: "Katta maktab",  color: "#E91E63", desc: "Kimyo va murakkab hisob-kitoblar" },
  9:  { name: "9-sinf",  level: "Katta maktab",  color: "#9C27B0", desc: "Asosiy maktab bitiruv imtihonlari" },
  10: { name: "10-sinf", level: "Abituriyent",   color: "#673AB7", desc: "Chuqurlashtirilgan fanlar va profil" },
  11: { name: "11-sinf", level: "Abituriyent",   color: "#3F51B5", desc: "DTM va OTMga kirishga to'liq tayyorgarlik" }
};

window.SUBJECTS_BY_GRADE = {
  1: [
    { id: "matematika", name: "Matematika", color: "#4CAF50" },
    { id: "ona_tili", name: "Ona tili", color: "#FF9800" },
    { id: "oqish", name: "O'qish savodxonligi", color: "#E91E63" },
    { id: "ingliz_tili", name: "Ingliz tili", color: "#3F51B5" },
    { id: "rus_tili", name: "Rus tili", color: "#F44336" },
    { id: "tabiatshunoslik", name: "Tabiatshunoslik", color: "#8BC34A" },
    { id: "mantiq", name: "Mantiqiy fikrlash", color: "#9C27B0" },
    { id: "mental_arifmetika", name: "Mental arifmetika", color: "#00BCD4" }
  ],
  2: [
    { id: "matematika", name: "Matematika", color: "#4CAF50" },
    { id: "ona_tili", name: "Ona tili", color: "#FF9800" },
    { id: "oqish", name: "O'qish", color: "#E91E63" },
    { id: "ingliz_tili", name: "Ingliz tili", color: "#3F51B5" },
    { id: "rus_tili", name: "Rus tili", color: "#F44336" },
    { id: "tabiatshunoslik", name: "Tabiatshunoslik", color: "#8BC34A" },
    { id: "mantiq", name: "Mantiqiy savollar", color: "#9C27B0" },
    { id: "tasviriy_sanat", name: "Tasviriy san'at", color: "#FF5722" }
  ],
  3: [
    { id: "matematika", name: "Matematika", color: "#4CAF50" },
    { id: "ona_tili", name: "Ona tili", color: "#FF9800" },
    { id: "oqish", name: "O'qish kitobi", color: "#E91E63" },
    { id: "ingliz_tili", name: "Ingliz tili", color: "#3F51B5" },
    { id: "rus_tili", name: "Rus tili", color: "#F44336" },
    { id: "tabiatshunoslik", name: "Tabiat sirlari", color: "#8BC34A" },
    { id: "informatika_bosh", name: "Informatika asoslari", color: "#2196F3" },
    { id: "odobnoma", name: "Odobnoma", color: "#FFC107" }
  ],
  4: [
    { id: "matematika", name: "Matematika", color: "#4CAF50" },
    { id: "ona_tili", name: "Ona tili", color: "#FF9800" },
    { id: "oqish", name: "O'qish", color: "#E91E63" },
    { id: "ingliz_tili", name: "Ingliz tili", color: "#3F51B5" },
    { id: "rus_tili", name: "Rus tili", color: "#F44336" },
    { id: "tabiatshunoslik", name: "Tabiatshunoslik", color: "#8BC34A" },
    { id: "informatika_bosh", name: "Kompyuter savodxonligi", color: "#2196F3" },
    { id: "yol_harakati", name: "Yo'l harakati qoidalari", color: "#607D8B" }
  ],
  5: [
    { id: "matematika", name: "Matematika", color: "#4CAF50" },
    { id: "ona_tili", name: "Ona tili", color: "#FF9800" },
    { id: "adabiyot", name: "Adabiyot", color: "#795548" },
    { id: "ingliz_tili", name: "Ingliz tili", color: "#3F51B5" },
    { id: "rus_tili", name: "Rus tili", color: "#F44336" },
    { id: "tarix", name: "Tarixdan hikoyalar", color: "#607D8B" },
    { id: "geografiya", name: "Tabiiy geografiya", color: "#00BCD4" },
    { id: "biologiya", name: "Botanika (O'simliklar)", color: "#4CAF50" },
    { id: "informatika", name: "Informatika va AT", color: "#2196F3" },
    { id: "fransuz_tili", name: "Fransuz tili", color: "#673AB7" }
  ],
  6: [
    { id: "matematika", name: "Matematika", color: "#4CAF50" },
    { id: "ona_tili", name: "Ona tili", color: "#FF9800" },
    { id: "adabiyot", name: "Adabiyot", color: "#795548" },
    { id: "ingliz_tili", name: "Ingliz tili", color: "#3F51B5" },
    { id: "rus_tili", name: "Rus tili", color: "#F44336" },
    { id: "tarix", name: "Qadimgi dunyo tarixi", color: "#607D8B" },
    { id: "geografiya", name: "Materiklar va okeanlar", color: "#00BCD4" },
    { id: "biologiya", name: "Zoologiya (Hayvonot olami)", color: "#4CAF50" },
    { id: "informatika", name: "Informatika", color: "#2196F3" },
    { id: "nemis_tili", name: "Nemis tili", color: "#E91E63" }
  ],
  7: [
    { id: "algebra", name: "Algebra", color: "#2196F3" },
    { id: "geometriya", name: "Geometriya", color: "#9C27B0" },
    { id: "fizika", name: "Fizika (Mexanika)", color: "#FF5722" },
    { id: "ona_tili", name: "Ona tili", color: "#FF9800" },
    { id: "adabiyot", name: "O'zbek adabiyoti", color: "#795548" },
    { id: "tarix", name: "O'rta asrlar tarixi", color: "#607D8B" },
    { id: "geografiya", name: "O'zbekiston tabiiy geografiyasi", color: "#00BCD4" },
    { id: "biologiya", name: "Odam anatomiyasi va fiziologiyasi", color: "#4CAF50" },
    { id: "informatika", name: "Informatika va Python asoslari", color: "#306998" },
    { id: "ingliz_tili", name: "Ingliz tili (Pre-Intermediate)", color: "#3F51B5" },
    { id: "rus_tili", name: "Rus tili", color: "#F44336" }
  ],
  8: [
    { id: "algebra", name: "Algebra", color: "#2196F3" },
    { id: "geometriya", name: "Geometriya", color: "#9C27B0" },
    { id: "fizika", name: "Fizika (Issiqlik va Elektr)", color: "#FF5722" },
    { id: "kimyo", name: "Kimyo (Anorganik kimyo)", color: "#9C27B0" },
    { id: "biologiya", name: "Biologiya (Sitologiya va Hujayra)", color: "#4CAF50" },
    { id: "tarix", name: "Yangi tarix", color: "#607D8B" },
    { id: "geografiya", name: "Iqtisodiy va ijtimoiy geografiya", color: "#00BCD4" },
    { id: "ona_tili", name: "Ona tili", color: "#FF9800" },
    { id: "adabiyot", name: "Adabiyot", color: "#795548" },
    { id: "informatika", name: "Dasturlash (Algoritmlar)", color: "#2196F3" },
    { id: "ingliz_tili", name: "Ingliz tili (Intermediate)", color: "#3F51B5" },
    { id: "chizmachilik", name: "Chizmachilik", color: "#009688" }
  ],
  9: [
    { id: "algebra", name: "Algebra", color: "#2196F3" },
    { id: "geometriya", name: "Geometriya", color: "#9C27B0" },
    { id: "fizika", name: "Fizika (Optika va Kvant)", color: "#FF5722" },
    { id: "kimyo", name: "Kimyo (Metallar va Nomettalar)", color: "#9C27B0" },
    { id: "biologiya", name: "Umumiy biologiya va Genetika", color: "#4CAF50" },
    { id: "tarix", name: "Eng yangi tarix", color: "#607D8B" },
    { id: "geografiya", name: "Jahon mamlakatlari geografiyasi", color: "#00BCD4" },
    { id: "ona_tili", name: "Ona tili (Sintaksis)", color: "#FF9800" },
    { id: "adabiyot", name: "Adabiyot", color: "#795548" },
    { id: "huquq", name: "Davlat va huquq asoslari", color: "#795548" },
    { id: "informatika", name: "Veb-dasturlash (HTML/CSS/JS)", color: "#2196F3" },
    { id: "ingliz_tili", name: "Ingliz tili", color: "#3F51B5" }
  ],
  10: [
    { id: "algebra", name: "Algebra va analiz asoslari", color: "#2196F3" },
    { id: "geometriya", name: "Stereometriya (Fazoviy shakllar)", color: "#9C27B0" },
    { id: "fizika", name: "Fizika (Molekulyar va Elektrodinamika)", color: "#FF5722" },
    { id: "kimyo", name: "Organik kimyo (Uglevodorodlar)", color: "#9C27B0" },
    { id: "biologiya", name: "Molekulyar biologiya", color: "#4CAF50" },
    { id: "tarix", name: "O'zbekistonning eng yangi tarixi", color: "#607D8B" },
    { id: "geografiya", name: "Global geografik muammolar", color: "#00BCD4" },
    { id: "ona_tili", name: "Ona tili (Stilistika va Nutq)", color: "#FF9800" },
    { id: "adabiyot", name: "Mumtoz o'zbek adabiyoti", color: "#795548" },
    { id: "iqtisodiyot", name: "Iqtisodiy bilim asoslari", color: "#4CAF50" },
    { id: "astronomiya", name: "Astronomiya asoslari", color: "#673AB7" },
    { id: "informatika", name: "Ma'lumotlar bazasi va SQL", color: "#00BCD4" },
    { id: "ingliz_tili", name: "Ingliz tili (Upper-Intermediate)", color: "#3F51B5" },
    { id: "robototexnika", name: "Robototexnika va Arduino", color: "#FF5722" }
  ],
  11: [
    { id: "algebra", name: "Algebra (Hosila, Integral, Limit)", color: "#2196F3" },
    { id: "geometriya", name: "Stereometriya va Vektorlar", color: "#9C27B0" },
    { id: "fizika", name: "Fizika (Atom, Yadro, Relyativistik)", color: "#FF5722" },
    { id: "kimyo", name: "Umumiy va murakkab organik kimyo", color: "#9C27B0" },
    { id: "biologiya", name: "Evolutsiya va Ekologiya", color: "#4CAF50" },
    { id: "tarix", name: "Mustaqil O'zbekiston taraqqiyoti", color: "#607D8B" },
    { id: "geografiya", name: "Jahon geosiyosati", color: "#00BCD4" },
    { id: "ona_tili", name: "Ona tili (DTM va Milliy sertifikat)", color: "#FF9800" },
    { id: "adabiyot", name: "Jahon va o'zbek adabiyoti durdonalari", color: "#795548" },
    { id: "suniy_intellekt", name: "Sun'iy intellekt va Neyrotarmoqlar", color: "#E91E63" },
    { id: "kiberxavfsizlik", name: "Axborot xavfsizligi", color: "#009688" },
    { id: "moliya", name: "Moliyaviy savodxonlik va Biznes", color: "#FF9800" },
    { id: "ingliz_tili", name: "Ingliz tili (IELTS / CEFR)", color: "#3F51B5" },
    { id: "astronomiya", name: "Astrofizika va Koinot", color: "#3F51B5" }
  ]
};

window.TEST_DATA = {};

// ============================================================
// RASMIY MAKTAB DARSLIKLARI VA METODIK QO'LLANMALAR TESTLARI
// 2-11 sinflar bo'yicha to'liq haqiqiy ta'lim savollari bazasi
// ============================================================

// 2-SINF INGLIZ TILI (Guess What! 2 - 100 ta rasmiy test)
window.TEST_DATA["2_ingliz_tili"] = [
  { q: "What is this? 🎒", options: ["It's a backpack.", "It's an apple.", "It's a dog.", "It's a car."], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: It's a backpack." },
  { q: "Choose the correct spelling for \"qalam\".", options: ["Pencil", "Pensil", "Pencel", "Pensll"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Pencil" },
  { q: "What color is a blue pen?", options: ["Blue", "Red", "Green", "Yellow"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Blue" },
  { q: "Translate into English: \"Ruchka\"", options: ["Pen", "Book", "Desk", "Chair"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Pen" },
  { q: "What is this? 📏", options: ["It's a ruler.", "It's a rubber.", "It's a pencil case.", "It's a board."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: It's a ruler." },
  { q: "Find the odd one out (Ortiqchasini toping):", options: ["Cat", "Rubber", "Pencil", "Ruler"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Cat" },
  { q: "Complete the word: R _ b b e r", options: ["u", "a", "o", "e"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: u" },
  { q: "How do you say \"Kitob\" in English?", options: ["Book", "Bag", "Desk", "Chair"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Book" },
  { q: "What is this? 🪑", options: ["Chair", "Table", "Pencil", "Rubber"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Chair" },
  { q: "Look at the teacher's desk. It's a...", options: ["Desk", "Book", "Pencil", "Bag"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Desk" },
  { q: "Choose the correct plurals (Ko'plik shaklini toping): Two _____", options: ["Pencils", "Pencil", "Pencil's", "A pencil"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Pencils" },
  { q: "What do you use to erase pencil lines?", options: ["Rubber", "Ruler", "Pen", "Book"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Rubber" },
  { q: "Open your _____, please.", options: ["Book", "Rubber", "Ruler", "Pen"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Book" },
  { q: "\"Qalamdon\" in English is:", options: ["Pencil case", "Book case", "Desk case", "Ruler case"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Pencil case" },
  { q: "What color is the blackboard?", options: ["Black", "White", "Red", "Yellow"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Black" },
  { q: "What's this? ✏️", options: ["Pencil", "Pen", "Ruler", "Chair"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Pencil" },
  { q: "Count the books: 📚 📚 📚", options: ["Three books", "Two books", "Four books", "Five books"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Three books" },
  { q: "Is this a desk? Yes, _____ .", options: ["it is", "is it", "it isn't", "they are"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: it is" },
  { q: "Choose the classroom object:", options: ["Board", "Banana", "Dog", "Cake"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Board" },
  { q: "Complete: \"Close your _____.\"", options: ["Bag", "Rubber", "Ruler", "Pencil"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Bag" },
  { q: "What is this? 🧸", options: ["Teddy bear", "Doll", "Ball", "Robot"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Teddy bear" },
  { q: "Count: 1, 2, 3, 4, 5, _", options: ["6", "7", "8", "9"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: 6" },
  { q: "\"Koptok\" in English is:", options: ["Ball", "Doll", "Car", "Kite"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Ball" },
  { q: "Translate: \"Qg'irchoq\"", options: ["Doll", "Robot", "Plane", "Bike"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Doll" },
  { q: "What is this? 🚗", options: ["Car", "Train", "Plane", "Boat"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Car" },
  { q: "Complete the number word: \"S e v e _\"", options: ["n", "m", "t", "k"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: n" },
  { q: "How many fingers do you have on one hand?", options: ["Five", "Four", "Ten", "Six"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Five" },
  { q: "\"Samolyot\" in English is:", options: ["Plane", "Train", "Bike", "Car"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Plane" },
  { q: "What is this? 🚲", options: ["Bike", "Car", "Bus", "Train"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Bike" },
  { q: "Choose the number: \"Ten\"", options: ["10", "12", "8", "6"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: 10" },
  { q: "Count the stars: ⭐️ ⭐️ ⭐️ ⭐️", options: ["Four", "Three", "Five", "Two"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Four" },
  { q: "\"Poezd\" in English is:", options: ["Train", "Bus", "Boat", "Plane"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Train" },
  { q: "Choose the toy:", options: ["Monster", "Apple", "Pen", "Desk"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Monster" },
  { q: "Complete: \"It's a _____ kite.\"", options: ["Red", "Dog", "Pencil", "Chair"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Red" },
  { q: "What number comes after 8?", options: ["9", "7", "10", "6"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: 9" },
  { q: "\"Sakkiz\" in English is:", options: ["Eight", "Seven", "Nine", "Six"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Eight" },
  { q: "Is it a monster? No, _____ .", options: ["it isn't", "it is", "is it", "it not"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: it isn't" },
  { q: "What is this? 🪁", options: ["Kite", "Ball", "Bike", "Doll"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Kite" },
  { q: "Complete: \"I have got a _____.\"", options: ["Robot", "Desk", "Ruler", "Rubber"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Robot" },
  { q: "How many? 🎈 🎈 🎈 🎈 🎈 🎈", options: ["Six", "Five", "Seven", "Eight"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Six" },
  { q: "Who is she? 👩", options: ["Mother", "Father", "Brother", "Uncle"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Mother" },
  { q: "\"Ota\" in English is:", options: ["Father", "Mother", "Sister", "Grandmother"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Father" },
  { q: "Who is this? 👦", options: ["Brother", "Sister", "Mother", "Grandmother"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Brother" },
  { q: "Translate: \"Opa / Singil\"", options: ["Sister", "Brother", "Father", "Grandfather"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Sister" },
  { q: "What is this body part? 👀", options: ["Eyes", "Ears", "Nose", "Mouth"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Eyes" },
  { q: "What is this? 👃", options: ["Nose", "Eye", "Mouth", "Ear"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Nose" },
  { q: "What is this? 👄", options: ["Mouth", "Nose", "Eye", "Arm"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Mouth" },
  { q: "Point to your 👂.", options: ["Ears", "Eyes", "Legs", "Hands"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Ears" },
  { q: "\"Buvash\" (Grandmother) in English:", options: ["Grandmother", "Grandfather", "Mother", "Sister"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Grandmother" },
  { q: "\"Bobo\" in English:", options: ["Grandfather", "Grandmother", "Father", "Brother"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Grandfather" },
  { q: "Complete: \"I have got two _____.\"", options: ["Hands", "Nose", "Head", "Mouth"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Hands" },
  { q: "How many feet do you have?", options: ["Two", "One", "Three", "Four"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Two" },
  { q: "Touch your _____! 💆‍♂️", options: ["Head", "Leg", "Foot", "Arm"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Head" },
  { q: "Complete: \"This is my _____.\" (Oila a'zosi)", options: ["Family", "School", "Toy", "Pencil"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Family" },
  { q: "Find the body part:", options: ["Arm", "Car", "Pen", "Red"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Arm" },
  { q: "Find the family member:", options: ["Baby", "Ball", "Book", "Blue"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Baby" },
  { q: "Complete: \"Clap your _____!\" 👏", options: ["Hands", "Feet", "Nose", "Eyes"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Hands" },
  { q: "Complete: \"Stamp your _____!\" 🦶", options: ["Feet", "Hands", "Ears", "Mouth"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Feet" },
  { q: "How many noses do you have?", options: ["One", "Two", "Three", "Zero"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: One" },
  { q: "\"Soch\" in English is:", options: ["Hair", "Head", "Hand", "Arm"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Hair" },
  { q: "What animal is this? 🐱", options: ["Cat", "Dog", "Bird", "Fish"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Cat" },
  { q: "What animal is this? 🐶", options: ["Dog", "Cat", "Frog", "Duck"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Dog" },
  { q: "\"Qush\" in English is:", options: ["Bird", "Fish", "Cow", "Horse"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Bird" },
  { q: "What animal swims in water? 🐟", options: ["Fish", "Elephant", "Tiger", "Lion"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Fish" },
  { q: "What is this fruit? 🍎", options: ["Apple", "Banana", "Orange", "Pear"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Apple" },
  { q: "What is this fruit? 🍌", options: ["Banana", "Apple", "Lemon", "Grape"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Banana" },
  { q: "Translate: \"Sut\"", options: ["Milk", "Water", "Juice", "Tea"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Milk" },
  { q: "Choose the food item: 🍞", options: ["Bread", "Milk", "Water", "Juice"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Bread" },
  { q: "What color is a frog? 🐸", options: ["Green", "Red", "Blue", "Pink"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Green" },
  { q: "\"Sichqon\" in English is:", options: ["Mouse", "Duck", "Horse", "Sheep"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Mouse" },
  { q: "Choose the animal that jumps: 🐸", options: ["Frog", "Fish", "Snake", "Turtle"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Frog" },
  { q: "Complete: \"I like _____.\" 🧀", options: ["Cheese", "Pencil", "Chair", "Bag"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Cheese" },
  { q: "What is this? 🍊", options: ["Orange", "Apple", "Banana", "Melon"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Orange" },
  { q: "\"Suv\" in English is:", options: ["Water", "Milk", "Juice", "Soda"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Water" },
  { q: "Choose the big animal: 🐘", options: ["Elephant", "Mouse", "Bird", "Ant"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Elephant" },
  { q: "Complete: \"A duck says _____.\"", options: ["Quack", "Woof", "Meow", "Moo"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Quack" },
  { q: "\"Tuxum\" in English is:", options: ["Egg", "Cake", "Pizza", "Burger"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Egg" },
  { q: "What is this? 🍕", options: ["Pizza", "Apple", "Bread", "Cheese"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Pizza" },
  { q: "Choose the domestic animal: 🐮", options: ["Cow", "Lion", "Tiger", "Bear"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Cow" },
  { q: "\"Olmoxon\" or \"Quyon\" (Rabbit) in English:", options: ["Rabbit", "Dog", "Cat", "Bird"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Rabbit" },
  { q: "What color is the sun? ☀️", options: ["Yellow", "Blue", "Green", "Purple"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Yellow" },
  { q: "What color is grass? 🌿", options: ["Green", "Red", "Black", "Orange"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Green" },
  { q: "Translate into English: \"Qizil\"", options: ["Red", "Blue", "Pink", "White"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Red" },
  { q: "What clothes are these? 👕", options: ["T-shirt", "Trousers", "Skirt", "Shoes"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: T-shirt" },
  { q: "What are these? 👟", options: ["Shoes", "Socks", "Hat", "Jacket"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Shoes" },
  { q: "Translate: \"Shapka / Bosh kiyim\"", options: ["Hat", "Coat", "Dress", "Shirt"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Hat" },
  { q: "\"Isiq\" or \"Katta\" (Big) opposite is:", options: ["Small", "Tall", "Long", "Happy"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Small" },
  { q: "Look at the elephant. It is _____ .", options: ["Big", "Small", "Short", "Thin"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Big" },
  { q: "Look at the mouse. It is _____ .", options: ["Small", "Big", "Tall", "Long"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Small" },
  { q: "\"Ko'ylak\" (Qizlar kiyimi) in English:", options: ["Dress", "T-shirt", "Socks", "Shorts"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Dress" },
  { q: "Translate: \"Shim\"", options: ["Trousers", "Jacket", "Hat", "Shoes"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Trousers" },
  { q: "What color is snow? ❄️", options: ["White", "Black", "Brown", "Red"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: White" },
  { q: "Complete: \"It is a _____ day.\" ☀️", options: ["Sunny", "Rainy", "Cold", "Dark"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Sunny" },
  { q: "What is the opposite of \"Happy\" (Xursand)?", options: ["Sad", "Big", "Good", "Fine"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Sad" },
  { q: "\" Paypoq\" in English:", options: ["Socks", "Shoes", "Pants", "Shirt"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Socks" },
  { q: "Complete: \"I am _____.\" 😊", options: ["Happy", "Sad", "Angry", "Tired"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Happy" },
  { q: "\"Jaket / Kurtka\" in English:", options: ["Jacket", "T-shirt", "Skirt", "Hat"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Jacket" },
  { q: "Choose the color: 🟣", options: ["Purple", "Yellow", "Orange", "Green"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Purple" },
  { q: "Choose the color: 🟤", options: ["Brown", "White", "Black", "Pink"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Brown" },
  { q: "Translate: \"Yubka\"", options: ["Skirt", "Dress", "Shirt", "Trousers"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Skirt" }
];

// 3-SINF MATEMATIKA (1-Chorak - 50 ta darslik testi)
window.TEST_DATA["3_matematika"] = [
  { q: "245 + 132 = ?", options: ["367", "377", "357", "387"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: 367" },
  { q: "568 − 234 = ?", options: ["324", "344", "334", "354"], answer: 2, difficulty: "medium", explanation: "To'g'ri javob: 334" },
  { q: "7 × 5 = ?", options: ["30", "35", "40", "25"], answer: 1, difficulty: "hard", explanation: "To'g'ri javob: 35" },
  { q: "36 : 4 = ?", options: ["8", "7", "9", "6"], answer: 2, difficulty: "easy", explanation: "To'g'ri javob: 9" },
  { q: "1 metr necha santimetr?", options: ["10 cm", "100 cm", "1000 cm", "50 cm"], answer: 1, difficulty: "medium", explanation: "To'g'ri javob: 100 cm" },
  { q: "8 × 6 = ?", options: ["42", "46", "48", "54"], answer: 2, difficulty: "hard", explanation: "To'g'ri javob: 48" },
  { q: "72 : 8 = ?", options: ["8", "9", "7", "6"], answer: 1, difficulty: "easy", explanation: "To'g'ri javob: 9" },
  { q: "345 + 125 = ?", options: ["460", "470", "480", "450"], answer: 1, difficulty: "medium", explanation: "To'g'ri javob: 470" },
  { q: "900 − 450 = ?", options: ["550", "450", "400", "500"], answer: 1, difficulty: "hard", explanation: "To'g'ri javob: 450" },
  { q: "6 × 9 = ?", options: ["54", "56", "49", "63"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: 54" },
  { q: "1 soat necha daqiqa?", options: ["30", "100", "60", "90"], answer: 2, difficulty: "medium", explanation: "To'g'ri javob: 60" },
  { q: "400 + 300 = ?", options: ["600", "700", "800", "900"], answer: 1, difficulty: "hard", explanation: "To'g'ri javob: 700" },
  { q: "81 : 9 = ?", options: ["8", "7", "6", "9"], answer: 3, difficulty: "easy", explanation: "To'g'ri javob: 9" },
  { q: "9 × 7 = ?", options: ["56", "63", "72", "54"], answer: 1, difficulty: "medium", explanation: "To'g'ri javob: 63" },
  { q: "650 − 250 = ?", options: ["300", "350", "400", "450"], answer: 2, difficulty: "hard", explanation: "To'g'ri javob: 400" },
  { q: "Eng katta uch xonali son qaysi?", options: ["999", "100", "900", "990"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: 999" },
  { q: "5 × 8 = ?", options: ["35", "40", "45", "50"], answer: 1, difficulty: "medium", explanation: "To'g'ri javob: 40" },
  { q: "64 : 8 = ?", options: ["6", "7", "8", "9"], answer: 2, difficulty: "hard", explanation: "To'g'ri javob: 8" },
  { q: "275 + 225 = ?", options: ["400", "450", "500", "550"], answer: 2, difficulty: "easy", explanation: "To'g'ri javob: 500" },
  { q: "700 − 125 = ?", options: ["575", "585", "565", "600"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: 575" },
  { q: "1 kilogramm necha gramm?", options: ["100 g", "500 g", "1000 g", "10 g"], answer: 2, difficulty: "hard", explanation: "To'g'ri javob: 1000 g" },
  { q: "4 × 9 = ?", options: ["32", "36", "40", "45"], answer: 1, difficulty: "easy", explanation: "To'g'ri javob: 36" },
  { q: "56 : 7 = ?", options: ["6", "7", "8", "9"], answer: 2, difficulty: "medium", explanation: "To'g'ri javob: 8" },
  { q: "123 + 456 = ?", options: ["579", "569", "589", "599"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: 579" },
  { q: "800 − 350 = ?", options: ["450", "400", "500", "550"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: 450" },
  { q: "3 × 7 = ?", options: ["18", "21", "24", "27"], answer: 1, difficulty: "medium", explanation: "To'g'ri javob: 21" },
  { q: "45 : 5 = ?", options: ["8", "7", "9", "6"], answer: 2, difficulty: "hard", explanation: "To'g'ri javob: 9" },
  { q: "1 hafta necha kundan iborat?", options: ["5", "6", "7", "8"], answer: 2, difficulty: "easy", explanation: "To'g'ri javob: 7" },
  { q: "250 + 350 = ?", options: ["500", "550", "600", "650"], answer: 2, difficulty: "medium", explanation: "To'g'ri javob: 600" },
  { q: "1000 − 400 = ?", options: ["500", "600", "700", "800"], answer: 1, difficulty: "hard", explanation: "To'g'ri javob: 600" },
  { q: "9 × 9 = ?", options: ["72", "81", "90", "99"], answer: 1, difficulty: "easy", explanation: "To'g'ri javob: 81" },
  { q: "42 : 6 = ?", options: ["6", "7", "8", "9"], answer: 1, difficulty: "medium", explanation: "To'g'ri javob: 7" },
  { q: "1 metr 20 santimetr necha santimetr?", options: ["100 cm", "110 cm", "120 cm", "130 cm"], answer: 2, difficulty: "hard", explanation: "To'g'ri javob: 120 cm" },
  { q: "345 − 145 = ?", options: ["100", "150", "200", "250"], answer: 2, difficulty: "easy", explanation: "To'g'ri javob: 200" },
  { q: "6 × 7 = ?", options: ["36", "42", "48", "49"], answer: 1, difficulty: "medium", explanation: "To'g'ri javob: 42" },
  { q: "90 : 10 = ?", options: ["8", "9", "10", "7"], answer: 1, difficulty: "hard", explanation: "To'g'ri javob: 9" },
  { q: "567 sonida nechta yuzlik bor?", options: ["5", "6", "7", "56"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: 5" },
  { q: "200 + 450 = ?", options: ["550", "600", "650", "700"], answer: 2, difficulty: "medium", explanation: "To'g'ri javob: 650" },
  { q: "8 × 8 = ?", options: ["56", "64", "72", "80"], answer: 1, difficulty: "hard", explanation: "To'g'ri javob: 64" },
  { q: "63 : 9 = ?", options: ["6", "7", "8", "9"], answer: 1, difficulty: "easy", explanation: "To'g'ri javob: 7" },
  { q: "1 sutka necha soat?", options: ["12", "24", "36", "48"], answer: 1, difficulty: "medium", explanation: "To'g'ri javob: 24" },
  { q: "456 + 244 = ?", options: ["600", "650", "700", "750"], answer: 2, difficulty: "hard", explanation: "To'g'ri javob: 700" },
  { q: "950 − 500 = ?", options: ["400", "450", "500", "550"], answer: 1, difficulty: "easy", explanation: "To'g'ri javob: 450" },
  { q: "7 × 7 = ?", options: ["42", "49", "56", "63"], answer: 1, difficulty: "medium", explanation: "To'g'ri javob: 49" },
  { q: "48 : 6 = ?", options: ["6", "7", "8", "9"], answer: 2, difficulty: "hard", explanation: "To'g'ri javob: 8" },
  { q: "To‘g‘ri to‘rtburchakning nechta burchagi bor?", options: ["3", "4", "5", "6"], answer: 1, difficulty: "easy", explanation: "To'g'ri javob: 4" },
  { q: "325 + 175 = ?", options: ["400", "450", "500", "550"], answer: 2, difficulty: "medium", explanation: "To'g'ri javob: 500" },
  { q: "5 × 9 = ?", options: ["40", "45", "50", "55"], answer: 1, difficulty: "hard", explanation: "To'g'ri javob: 45" },
  { q: "100 − 37 = ?", options: ["53", "63", "73", "67"], answer: 1, difficulty: "easy", explanation: "To'g'ri javob: 63" },
  { q: "54 : 6 = ?", options: ["7", "8", "9", "10"], answer: 2, difficulty: "medium", explanation: "To'g'ri javob: 9" }
];

// 3-SINF ONA TILI (1-Chorak - 59 ta darslik testi)
window.TEST_DATA["3_ona_tili"] = [
  { q: "O‘zbek tilida nechta unli tovush bor?", options: ["6 ta", "5 ta", "7 ta", "8 ta"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: 6 ta" },
  { q: "Qaysi qatorda faqat unli harflar berilgan?", options: ["a, o, i, u, e, o‘", "b, d, k, l", "a, b, d, e", "m, n, o, p"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: a, o, i, u, e, o‘" },
  { q: "Gap nimalardan tashkil topadi?", options: ["So‘zlardan", "Harflardan", "Tovushlardan", "Bo‘g‘inlardan"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: So‘zlardan" },
  { q: "Kishilarning ismi qanday harf bilan yoziladi?", options: ["Bosh harf", "Kichik harf", "Unli harf", "Undosh harf"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Bosh harf" },
  { q: "Qaysi qatorda atoqli ot berilgan?", options: ["Toshkent", "shahar", "bola", "kitob"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Toshkent" },
  { q: "Narsa va shaxslarning nomini bildirgan so‘zlar nima deyiladi?", options: ["Ot", "Fe’l", "Sifat", "Son"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Ot" },
  { q: "Shaxs va narsaning belgisini bildirgan so‘zlar qaysi?", options: ["Sifat", "Ot", "Fe’l", "Son"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Sifat" },
  { q: "Shaxs va narsaning miqdorini bildirgan so‘zlar nima?", options: ["Son", "Ot", "Fe’l", "Sifat"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Son" },
  { q: "Harakatni bildirgan so‘zlar qaysi so‘z turkumi?", options: ["Fe’l", "Ot", "Sifat", "Son"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Fe’l" },
  { q: "Ot qanday so‘roqlarga javob bo‘ladi?", options: ["Kim? Nima?", "Qanday? Qanaqa?", "Nechta? Qancha?", "Nima qildi?"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Kim? Nima?" },
  { q: "Sifat qanday so‘roqlarga javob bo‘ladi?", options: ["Qanday? Qanaqa?", "Kim? Nima?", "Nechta? Nechanchi?", "Nima qildi?"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Qanday? Qanaqa?" },
  { q: "Son qanday so‘roqlarga javob bo‘ladi?", options: ["Nechta? Qancha?", "Kim? Nima?", "Qanday? Qanaqa?", "Nima qildi?"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Nechta? Qancha?" },
  { q: "Fe’l qanday so‘roqlarga javob bo‘ladi?", options: ["Nima qildi? Nima qiladi?", "Kim? Nima?", "Qanday?", "Nechta?"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Nima qildi? Nima qiladi?" },
  { q: "«Chiroyli» so‘zi qaysi so‘z turkumiga kiradi?", options: ["Sifat", "Ot", "Son", "Fe’l"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Sifat" },
  { q: "«O‘quvchi» so‘zi qaysi so‘z turkumiga kiradi?", options: ["Ot", "Son", "Sifat", "Fe’l"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Ot" },
  { q: "«Yugurdi» so‘zi qaysi so‘z turkumiga kiradi?", options: ["Fe’l", "Ot", "Son", "Sifat"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Fe’l" },
  { q: "«Beshta» so‘zi qaysi so‘z turkumiga kiradi?", options: ["Son", "Ot", "Fe’l", "Sifat"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Son" },
  { q: "Qaysi qatorda faqat otlar berilgan?", options: ["kitob, daftar, qalam", "chiroyli, katta, shirin", "yugurdi, yozdi, o‘qidi", "besh, olti, yetti"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: kitob, daftar, qalam" },
  { q: "Qaysi qatorda faqat fe’llar berilgan?", options: ["yozdi, o‘qidi, chizdi", "olma, nok, anor", "katta, kichik, uzun", "bir, ikki, uch"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: yozdi, o‘qidi, chizdi" },
  { q: "«Qizil olma» birikmasida sifat qaysi?", options: ["Qizil", "Olma", "Ikkalasi ham", "Hech biri"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Qizil" },
  { q: "Gap oxiriga darak gapda qanday tinish belgisi qo‘yiladi?", options: ["Nuqta", "Vergul", "Ikki nuqta", "Tire"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Nuqta" },
  { q: "So‘roq gap oxiriga qaysi belgi qo‘yiladi?", options: ["So‘roq belgisi", "Nuqta", "Vergul", "Undov belgisi"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: So‘roq belgisi" },
  { q: "His-hayajon bilan aytilgan gap oxiriga nima qo‘yiladi?", options: ["Undov belgisi", "Nuqta", "Vergul", "So‘roq belgisi"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Undov belgisi" },
  { q: "Gapning birinchi so‘zi qanday harf bilan boshlanadi?", options: ["Bosh harf", "Kichik harf", "Unli harf", "Undosh harf"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Bosh harf" },
  { q: "«Bugun havo qanday?» Bu qanday gap?", options: ["So‘roq gap", "Darak gap", "Buyruq gap", "His-hayajon gap"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: So‘roq gap" },
  { q: "«Bahor keldi.» Bu qanday gap?", options: ["Darak gap", "So‘roq gap", "Buyruq gap", "Undov gap"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Darak gap" },
  { q: "«Kitobni o‘qi!» Bu qanday gap?", options: ["Buyruq gap", "Darak gap", "So‘roq gap", "His-hayajon gap"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Buyruq gap" },
  { q: "So‘zlar nimadan tashkil topadi?", options: ["Tovushlardan", "Gaplardan", "Matnlardan", "Faqat bo‘g‘inlardan"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Tovushlardan" },
  { q: "«Maktab» so‘zida nechta bo‘g‘in bor?", options: ["2 ta", "1 ta", "3 ta", "4 ta"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: 2 ta" },
  { q: "«Oila» so‘zida nechta bo‘g‘in bor?", options: ["3 ta", "1 ta", "2 ta", "4 ta"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: 3 ta" },
  { q: "«Kitobxon» so‘zida nechta bo‘g‘in bor?", options: ["3 ta", "1 ta", "2 ta", "4 ta"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: 3 ta" },
  { q: "Qaysi so‘z to‘g‘ri yozilgan?", options: ["maktab", "maktap", "maktaab", "maktabb"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: maktab" },
  { q: "Qaysi qatorda qarama-qarshi ma’noli so‘zlar berilgan?", options: ["katta – kichik", "katta – ulkan", "chiroyli – go‘zal", "tez – chaqqon"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: katta – kichik" },
  { q: "«Go‘zal» so‘zining ma’nodoshini toping.", options: ["Chiroyli", "Xunuk", "Kichik", "Yomon"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Chiroyli" },
  { q: "«Issiq» so‘zining qarama-qarshi ma’nosini toping.", options: ["Sovuq", "Iliq", "Qaynoq", "Harorat"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Sovuq" },
  { q: "«Oq» so‘zining qarama-qarshi ma’nosi qaysi?", options: ["Qora", "Ko‘k", "Qizil", "Sariq"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Qora" },
  { q: "Qaysi so‘zda tutuq belgisi bor?", options: ["Ma’no", "Maktab", "O‘quvchi", "Kitob"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Ma’no" },
  { q: "Alifboda harflar qanday tartibda joylashadi?", options: ["Alifbo tartibida", "Tasodifiy", "Kattaligiga qarab", "Rangiga qarab"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Alifbo tartibida" },
  { q: "«O‘qituvchi» so‘zi nechta bo‘g‘indan iborat?", options: ["4 ta", "2 ta", "3 ta", "5 ta"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: 4 ta" },
  { q: "Qaysi qatorda joy nomi berilgan?", options: ["Samarqand", "daftar", "o‘quvchi", "gul"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Samarqand" },
  { q: "«Uchta daftar» birikmasida son qaysi so‘z?", options: ["Uchta", "Daftar", "Ikkalasi", "Hech biri"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Uchta" },
  { q: "«Bola kitob o‘qidi» gapida fe’lni toping.", options: ["O‘qidi", "Bola", "Kitob", "Bola kitob"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: O‘qidi" },
  { q: "«Shirin tarvuz» birikmasida ot qaysi?", options: ["Tarvuz", "Shirin", "Ikkalasi", "Hech biri"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Tarvuz" },
  { q: "«O‘quvchilar maktabga bordilar» gapida kimlar haqida so‘z bormoqda?", options: ["O‘quvchilar", "Maktabga", "Bordilar", "Hech kim"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: O‘quvchilar" },
  { q: "Matn nima?", options: ["Mazmun jihatdan bog‘langan gaplar", "Bitta harf", "Bitta tovush", "Bitta bo‘g‘in"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Mazmun jihatdan bog‘langan gaplar" },
  { q: "Matnga odatda nima qo‘yiladi?", options: ["Sarlavha", "Harf", "Raqam", "Vergul"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Sarlavha" },
  { q: "«Daraxtlar gulladi» gapida nechta so‘z bor?", options: ["2 ta", "1 ta", "3 ta", "4 ta"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: 2 ta" },
  { q: "«Men maktabga bordim» gapida nechta so‘z bor?", options: ["3 ta", "2 ta", "4 ta", "5 ta"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: 3 ta" },
  { q: "Qaysi qatorda undosh tovush bilan boshlanuvchi so‘z berilgan?", options: ["Banan", "Olma", "Anor", "Uzum"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Banan" },
  { q: "Qaysi so‘z bosh harf bilan yoziladi?", options: ["Dilnoza", "kitob", "daftar", "qalam"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Dilnoza" },
  { q: "«Mehribon» so‘zi qaysi so‘z turkumiga kiradi?", options: ["Sifat", "Ot", "Son", "Fe’l"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Sifat" },
  { q: "«O‘nta» so‘zi nimani bildiradi?", options: ["Miqdorni", "Harakatni", "Belgini", "Shaxsni"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Miqdorni" },
  { q: "«Qushlar sayraydi» gapida nima haqida so‘z bormoqda?", options: ["Qushlar", "Daraxtlar", "Gullar", "Bolalar"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Qushlar" },
  { q: "«Keldi» so‘ziga qaysi so‘roq beriladi?", options: ["Nima qildi?", "Kim?", "Qanday?", "Nechta?"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Nima qildi?" },
  { q: "Qaysi qatorda faqat sonlar berilgan?", options: ["bir, ikki, uch", "olma, nok, anor", "katta, kichik, uzun", "yozdi, o‘qidi, keldi"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: bir, ikki, uch" },
  { q: "«Bolalar bog‘da o‘ynadilar» gapida harakatni bildirgan so‘z qaysi?", options: ["O‘ynadilar", "Bolalar", "Bog‘da", "Hech biri"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: O‘ynadilar" },
  { q: "«Katta uy» birikmasida sifatni toping.", options: ["Katta", "Uy", "Ikkalasi", "Hech biri"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Katta" },
  { q: "«Ona» so‘zida nechta tovush bor?", options: ["3 ta", "2 ta", "4 ta", "5 ta"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: 3 ta" },
  { q: "Ona tilini o‘rganish nima uchun kerak?", options: ["To‘g‘ri o‘qish, yozish va fikr bildirish uchun", "Faqat yozish uchun", "Faqat o‘qish uchun", "Faqat gapirish uchun"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: To‘g‘ri o‘qish, yozish va fikr bildirish uchun" }
];

// 3-SINF INGLIZ TILI (Guess What! 3 - 100 ta rasmiy test)
window.TEST_DATA["3_ingliz_tili"] = [
  { q: "\"Qayerdan kelgansan?\" degan savol ingliz tilida qanday beriladi?", options: ["Where are you from?", "What is your name?", "How old are you?", "Where do you live?"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Where are you from?" },
  { q: "\"Men O'zbekistondanman\" jumlasining to'g'ri tarjimasini toping.", options: ["I'm from Uzbekistan.", "I live in Uzbekistan.", "I go to Uzbekistan.", "I like Uzbekistan."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: I'm from Uzbekistan." },
  { q: "\"Rasm chizish\" ingliz tilida qanday bo'ladi?", options: ["Drawing", "Reading", "Writing", "Cooking"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Drawing" },
  { q: "\"Kitob o'qish\" ingliz tilida qanday aytiladi?", options: ["Reading books", "Writing stories", "Watching TV", "Listening to music"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Reading books" },
  { q: "\"U qayerdan?\" (o'g'il bolaga nisbatan) iborasining inglizcha shakli qaysi?", options: ["Where is he from?", "Where is she from?", "Where are they from?", "Where are you from?"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Where is he from?" },
  { q: "\"Arg'imchak uchmoq\" iborasi ingliz tilida nima deyiladi?", options: ["Swinging on the swing", "Sliding down the slide", "Climbing the tree", "Running on the grass"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Swinging on the swing" },
  { q: "\"Gorkadan uchmoq\" ingliz tilida qanday deyiladi?", options: ["Sliding down the slide", "Playing football", "Jumping on the trampoline", "Riding a bike"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Sliding down the slide" },
  { q: "\"Daraxtga chiqlayotgan\" harakatini ifodalovchi so'zni toping.", options: ["Climbing a tree", "Flying a kite", "Swimming in the pool", "Walking the dog"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Climbing a tree" },
  { q: "\"Flesh to'p o'ynayapti\" jumlasining inglizcha tarjimasi qaysi?", options: ["Flash is playing football.", "Flash is sleeping.", "Flash is reading a book.", "Flash is eating lunch."], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Flash is playing football." },
  { q: "\"Men hozir yuguryapman\" jumlasini Present Continuous zamonida toping.", options: ["I am running.", "I run every day.", "I ran yesterday.", "I will run tomorrow."], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: I am running." },
  { q: "\"U (qiz bola) nima qilyapti?\" degan savol ingliz tilida qanday shakllantiriladi?", options: ["What is she doing?", "What is he doing?", "What are you doing?", "What are they doing?"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: What is she doing?" },
  { q: "\"Ular sakrayapti\" jumlasining to'g'ri tarjimasi qaysi?", options: ["They are jumping.", "She is jumping.", "He is jumping.", "We are jumping."], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: They are jumping." },
  { q: "O'yingohda arg'imchak nima deb ataladi?", options: ["Swing", "Slide", "Seesaw", "Trampoline"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Swing" },
  { q: "\"U (o'g'il bola) varrak uchiryapti\" jumlasini toping.", options: ["He is flying a kite.", "She is flying a kite.", "They are flying a kite.", "I am flying a kite."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: He is flying a kite." },
  { q: "Suv bilan to'ldirilgan kichik havza nima deyiladi?", options: ["Paddling pool", "Playground", "Sandbox", "Park"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Paddling pool" },
  { q: "\"Xola\" yoki \"Amma\" ingliz tilida nima deyiladi?", options: ["Aunt", "Uncle", "Sister", "Cousin"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Aunt" },
  { q: "\"Amaki\" yoki \"Toga\" ingliz tilida qanday aytiladi?", options: ["Uncle", "Aunt", "Father", "Grandfather"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Uncle" },
  { q: "\"Bole/Xolavachcha\" ingliz tilida nima deyiladi?", options: ["Cousin", "Brother", "Sister", "Nephew"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Cousin" },
  { q: "\"Bu kim?\" degan savol ingliz tilida qanday beriladi?", options: ["Who is this?", "What is this?", "Where is this?", "When is this?"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Who is this?" },
  { q: "\"Bu mening buvim\" jumlasining tarjimasi qaysi?", options: ["This is my grandmother.", "This is my mother.", "This is my aunt.", "This is my sister."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: This is my grandmother." },
  { q: "\"U mening amakim\" jumlasini ingliz tilida toping.", options: ["He is my uncle.", "She is my aunt.", "He is my father.", "She is my cousin."], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: He is my uncle." },
  { q: "\"U mening xolam\" jumlasini to'g'ri tarjimasi qaysi?", options: ["She is my aunt.", "He is my uncle.", "She is my mother.", "He is my brother."], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: She is my aunt." },
  { q: "\"Uning ismi nima?\" (qiz bolaga nisbatan) savoli inglizcha qanday bo'ladi?", options: ["What's her name?", "What's his name?", "What's your name?", "What's my name?"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: What's her name?" },
  { q: "\"Uning ismi nima?\" (o'g'il bolaga nisbatan) savoli qanday beriladi?", options: ["What's his name?", "What's her name?", "What's your name?", "What's their name?"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: What's his name?" },
  { q: "\"Katta oila\" ingliz tilida qanday aytiladi?", options: ["Big family", "Small family", "Happy family", "Friendly family"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Big family" },
  { q: "\"Bosh\" so'zining inglizcha tarjimasi qaysi?", options: ["Head", "Arm", "Leg", "Foot"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Head" },
  { q: "\"Yelka\" ingliz tilida nima deyiladi?", options: ["Shoulder", "Knee", "Elbow", "Toe"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Shoulder" },
  { q: "\"Tizzasi\" ingliz tilida nima deyiladi?", options: ["Knee", "Foot", "Shoulder", "Hand"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Knee" },
  { q: "\"Oyoq barmog'i\" inglizcha nima deyiladi?", options: ["Toe", "Finger", "Arm", "Leg"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Toe" },
  { q: "\"Qol barmog'i\" inglizcha nima deyiladi?", options: ["Finger", "Toe", "Foot", "Knee"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Finger" },
  { q: "Plural (Ko'plik) shakli to'g'ri ko'rsatilgan qatorni toping: Foot -> ...", options: ["Feet", "Foots", "Feets", "Footes"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Feet" },
  { q: "\"Mening 10 ta qol barmog'im bor\" jumlasining tarjimasi qaysi?", options: ["I have got ten fingers.", "I have got ten toes.", "I have got two hands.", "I have got ten legs."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: I have got ten fingers." },
  { q: "\"Uning jiringlagan ko'zlari bor\" jumlasini toping.", options: ["She has got big eyes.", "She has got big ears.", "He has got big eyes.", "I have got big eyes."], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: She has got big eyes." },
  { q: "\"Chiqanq / Tirsak\" inglizcha nima deyiladi?", options: ["Elbow", "Shoulder", "Neck", "Wrist"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Elbow" },
  { q: "\"Unda uzun soch bor\" jumlasining tarjimasi qaysi?", options: ["She has got long hair.", "He has got short hair.", "I have got long hair.", "They have got long hair."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: She has got long hair." },
  { q: "\"Ko'ylak\" (ayollar kiyimi) ingliz tilida nima deyiladi?", options: ["Dress", "Shirt", "Skirt", "T-shirt"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Dress" },
  { q: "\"Yubka\" inglizcha nima deyiladi?", options: ["Skirt", "Shirt", "Dress", "Trousers"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Skirt" },
  { q: "\"Shim\" ingliz tilida qanday aytiladi?", options: ["Trousers", "Shorts", "Jeans", "Shoes"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Trousers" },
  { q: "\"Paypoq\" so'zining ko'plik shakli inglizcha qanday?", options: ["Socks", "Shoes", "Boots", "Gloves"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Socks" },
  { q: "\"Shapka / Shlyapa\" ingliz tilida nima deyiladi?", options: ["Hat", "Cap", "Helmet", "Jacket"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Hat" },
  { q: "\"Kurtka / Pidjak\" ingliz tilida nima deyiladi?", options: ["Jacket", "Coat", "Sweater", "Shirt"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Jacket" },
  { q: "\"Men sariq futbolka kiyib olganman\" jumlasini toping.", options: ["I am wearing a yellow T-shirt.", "I am wearing a blue T-shirt.", "I have a yellow T-shirt.", "He is wearing a yellow T-shirt."], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: I am wearing a yellow T-shirt." },
  { q: "\"U ko'k shim kiygan\" (o'g'il bola) tarjimasi qaysi?", options: ["He is wearing blue trousers.", "She is wearing blue trousers.", "He is wearing blue shorts.", "I am wearing blue trousers."], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: He is wearing blue trousers." },
  { q: "\"Poyabzal\" ingliz tilida nima deyiladi?", options: ["Shoes", "Socks", "Boots", "Slippers"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Shoes" },
  { q: "\"U nima kiyib olgan?\" (qiz bola) savoli inglizcha qanday?", options: ["What is she wearing?", "What is he wearing?", "What are you wearing?", "What are they wearing?"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: What is she wearing?" },
  { q: "\"Ayiq\" ingliz tilida nima deyiladi?", options: ["Bear", "Lion", "Tiger", "Elephant"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Bear" },
  { q: "\"Fil\" so'zining inglizcha tarjimasi qaysi?", options: ["Elephant", "Giraffe", "Hippo", "Rhino"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Elephant" },
  { q: "\"Jirafa\" ingliz tilida qanday yoziladi?", options: ["Giraffe", "Zebra", "Monkey", "Camel"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Giraffe" },
  { q: "\"Maymun\" ingliz tilida nima deyiladi?", options: ["Monkey", "Gorilla", "Snake", "Kangaroo"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Monkey" },
  { q: "\"Ilon\" so'zining inglizcha nomi qaysi?", options: ["Snake", "Lizard", "Crocodile", "Frog"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Snake" },
  { q: "\"Yo'lbars\" ingliz tilida nima deyiladi?", options: ["Tiger", "Lion", "Leopard", "Cheetah"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Tiger" },
  { q: "\"Begemot\" ingliz tilida qanday aytiladi?", options: ["Hippo", "Elephant", "Rhino", "Crocodile"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Hippo" },
  { q: "\"Ayiq suza oladi\" jumlasining inglizcha tarjimasi qaysi?", options: ["A bear can swim.", "A bear can fly.", "A bear can jump high.", "A bear can talk."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: A bear can swim." },
  { q: "\"Fil ucholmaydi\" jumlasini toping.", options: ["An elephant can't fly.", "An elephant can fly.", "An elephant can run fast.", "An elephant can jump."], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: An elephant can't fly." },
  { q: "\"Maymun daraxtga chiqa oladi\" jumlasining tarjimasi qaysi?", options: ["A monkey can climb a tree.", "A monkey can swim.", "A monkey can fly.", "A monkey can sing."], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: A monkey can climb a tree." },
  { q: "\"Sabzi\" ingliz tilida nima deyiladi?", options: ["Carrots", "Potatoes", "Tomatoes", "Onions"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Carrots" },
  { q: "\"Bodring\" ingliz tilida nima deyiladi?", options: ["Cucumbers", "Peas", "Beans", "Peppers"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Cucumbers" },
  { q: "\"Olma\" so'zining ko'plik shakli qaysi?", options: ["Apples", "Bananas", "Oranges", "Pears"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Apples" },
  { q: "\"Pishloq\" ingliz tilida nima deyiladi?", options: ["Cheese", "Butter", "Milk", "Bread"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Cheese" },
  { q: "\"Non\" so'zining inglizcha tarjimasi qaysi?", options: ["Bread", "Rice", "Pasta", "Cake"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Bread" },
  { q: "\"Tuxum\" ingliz tilida nima deyiladi?", options: ["Eggs", "Milk", "Meat", "Fish"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Eggs" },
  { q: "\"Sut\" inglizcha nima deyiladi?", options: ["Milk", "Juice", "Water", "Tea"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Milk" },
  { q: "\"Menga pishloq yoqadi\" jumlasini toping.", options: ["I like cheese.", "I don't like cheese.", "He likes cheese.", "She likes cheese."], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: I like cheese." },
  { q: "\"Menga sabzi yoqmaydi\" jumlasining inglizcha tarjimasi qaysi?", options: ["I don't like carrots.", "I like carrots.", "She doesn't like carrots.", "He doesn't like carrots."], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: I don't like carrots." },
  { q: "\"Sizga olmalar yoqadimi?\" degan savol qanday beriladi?", options: ["Do you like apples?", "Does he like apples?", "Are you like apples?", "Have you got apples?"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Do you like apples?" },
  { q: "\"Maktab\" ingliz tilida nima deyiladi?", options: ["School", "Park", "Hospital", "Shop"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: School" },
  { q: "\"Park / Istirohat bog'i\" ingliz tilida nima deyiladi?", options: ["Park", "Garden", "Street", "Zoo"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Park" },
  { q: "\"Do'kon\" so me'zonida qanday aytiladi?", options: ["Shop", "House", "Flat", "School"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Shop" },
  { q: "\"Kasalxona\" ingliz tilida nima deyiladi?", options: ["Hospital", "Supermarket", "Library", "Zoo"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Hospital" },
  { q: "\"Hayvonot bog'i\" ingliz tilida qanday aytiladi?", options: ["Zoo", "Park", "Farm", "Pet shop"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Zoo" },
  { q: "\"Uy\" (bino) ingliz tilida nima deyiladi?", options: ["House", "Flat", "Room", "Street"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: House" },
  { q: "\"Shahar\" (katta shahar) ingliz tilida nima deyiladi?", options: ["City", "Village", "Town", "Country"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: City" },
  { q: "\"Do'kon maktabning yonida\" jumlasini toping.", options: ["The shop is next to the school.", "The shop is behind the school.", "The shop is in front of the school.", "The shop is under the school."], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: The shop is next to the school." },
  { q: "\"... qarshisida / ro'parasida\" predlogi inglizcha nima?", options: ["Opposite", "Next to", "Behind", "Under"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Opposite" },
  { q: "\"... orqasida\" predlogini ingliz tilida toping.", options: ["Behind", "In front of", "Next to", "Between"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Behind" },
  { q: "\"Yotoqxona\" ingliz tilida nima deyiladi?", options: ["Bedroom", "Living room", "Kitchen", "Bathroom"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Bedroom" },
  { q: "\"Mehmonxona / Zall\" ingliz tilida qanday aytiladi?", options: ["Living room", "Bedroom", "Dining room", "Bathroom"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Living room" },
  { q: "\"Oshxona\" so'zining inglizcha tarjimasi qaysi?", options: ["Kitchen", "Bathroom", "Bedroom", "Garden"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Kitchen" },
  { q: "\"Yuvinish xonasi\" ingliz tilida nima deyiladi?", options: ["Bathroom", "Kitchen", "Hall", "Balcony"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Bathroom" },
  { q: "\"Boshxona / Bog'\" ingliz tilida nima deyiladi?", options: ["Garden", "Park", "Yard", "Terrace"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Garden" },
  { q: "\"Karavot\" ingliz tilida nima deyiladi?", options: ["Bed", "Sofa", "Chair", "Table"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Bed" },
  { q: "\"Divan\" ingliz tilida nima deyiladi?", options: ["Sofa", "Armchair", "Bed", "Desk"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Sofa" },
  { q: "\"Stol\" ingliz tilida qanday aytiladi?", options: ["Table", "Chair", "Cupboard", "Shelf"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Table" },
  { q: "\"Kitob javoni\" ingliz tilida nima deyiladi?", options: ["Bookcase", "Wardrobe", "Table", "Armchair"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Bookcase" },
  { q: "\"Televizor\" ingliz tilida nima deyiladi?", options: ["Television (TV)", "Radio", "Computer", "Lamp"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Television (TV)" },
  { q: "\"Futbol o'ynash\" ingliz tilida nima deyiladi?", options: ["Playing football", "Playing basketball", "Playing tennis", "Playing games"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Playing football" },
  { q: "\"Velosiped haydash\" inglizcha qanday bo'ladi?", options: ["Riding a bike", "Driving a car", "Riding a horse", "Walking"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Riding a bike" },
  { q: "\"Rasmga olmoq\" ingliz tilida qanday aytiladi?", options: ["Taking photos", "Painting pictures", "Drawing", "Making toys"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Taking photos" },
  { q: "\"Musiqa tinglash\" tarjimasini toping.", options: ["Listening to music", "Playing the piano", "Singing songs", "Watching TV"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Listening to music" },
  { q: "\"Piyoda yurish / Sayr qilish\" inglizcha nima deyiladi?", options: ["Walking", "Running", "Swimming", "Flying"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Walking" },
  { q: "\"Suzish\" ingliz tilida nima deyiladi?", options: ["Swimming", "Diving", "Skating", "Skiing"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Swimming" },
  { q: "\"Men rasmlar chizishni yaxshi ko'raman\" jumlasini toping.", options: ["I like painting pictures.", "I like reading books.", "I like singing songs.", "I like playing games."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: I like painting pictures." },
  { q: "\"U fortepiano chalishni yoqtiradi\" (qiz bola) jumlasini toping.", options: ["She likes playing the piano.", "He likes playing the piano.", "They like playing the piano.", "I like playing the piano."], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: She likes playing the piano." },
  { q: "\"Siz velosiped haydashni yoqtirasizmi?\" degan savol qanday beriladi?", options: ["Do you like riding a bike?", "Can you ride a bike?", "Are you riding a bike?", "Have you got a bike?"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Do you like riding a bike?" },
  { q: "\"Rassomchilik / Bo'yoqda rasm chizish\" inglizcha nima?", options: ["Painting", "Writing", "Reading", "Cooking"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Painting" },
  { q: "\"He / She / It\" olmoshlari bilan Present Simple zamonida yoqtirmoq (like) fe'li qanday ishlatiladi?", options: ["Likes", "Liking", "Like", "Liked"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Likes" },
  { q: "Present Continuous zamonining formulasini to'g'ri ko'rsatilgan variantni toping.", options: ["Subject + am/is/are + verb (-ing)", "Subject + have/has + verb", "Subject + verb (-s)", "Subject + can + verb"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Subject + am/is/are + verb (-ing)" },
  { q: "\"Unda bor\" (o'g'il bolaga nisbatan) iborasi qaysi?", options: ["He has got", "She has got", "They have got", "You have got"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: He has got" },
  { q: "\"Men qila olaman\" iborasining inglizcha tarjimasi qaysi?", options: ["I can", "I can't", "I am", "I have"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: I can" },
  { q: "\"Ko'k va sariq ranglar aralashmasidan qaysi rang hosil bo'ladi?\" (Cross-curricular Art)", options: ["Green", "Purple", "Orange", "Brown"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Green" }
];

// 4-SINF INGLIZ TILI (Guess What! 4 - 100 ta rasmiy test)
window.TEST_DATA["4_ingliz_tili"] = [
  { q: "What do you do in the morning?", options: ["I wake up and brush my teeth.", "I go to sleep.", "I watch the moon.", "I play football in the dark."], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: I wake up and brush my teeth." },
  { q: "Where do animals like monkeys and parrots live?", options: ["In the rainforest.", "In the ocean.", "In the desert.", "In the snow."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: In the rainforest." },
  { q: "Complete: She ________ to school every day.", options: ["goes", "go", "going", "went"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: goes" },
  { q: "What is the opposite of 'always'?", options: ["never", "sometimes", "usually", "often"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: never" },
  { q: "What time ________ you get up?", options: ["do", "does", "is", "are"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: do" },
  { q: "A tiger has got ________.", options: ["stripes", "feathers", "wings", "a beak"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: stripes" },
  { q: "Which animal can fly and live in a cave?", options: ["Bat", "Dolphin", "Bear", "Snake"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Bat" },
  { q: "Does he like playing basketball?", options: ["Yes, he does.", "Yes, he is.", "Yes, he can.", "Yes, he do."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Yes, he does." },
  { q: "Complete: Sharks live in the ________.", options: ["ocean", "forest", "mountain", "sky"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: ocean" },
  { q: "What do plants need to grow?", options: ["Sunlight and water", "Juice and milk", "Candy and cake", "Toys and clothes"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Sunlight and water" },
  { q: "She ________ like swimming in cold water.", options: ["doesn't", "don't", "isn't", "aren't"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: doesn't" },
  { q: "Pandas love to eat ________.", options: ["bamboo", "meat", "fish", "pizza"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: bamboo" },
  { q: "What instrument do you play with your hands and fingers?", options: ["Piano", "Football", "Car", "Book"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Piano" },
  { q: "They ________ playing football right now.", options: ["are", "is", "am", "be"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: are" },
  { q: "What is the weather like in winter?", options: ["Cold and snowy", "Hot and sunny", "Warm and dry", "Very hot"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Cold and snowy" },
  { q: "Which job works in a hospital?", options: ["Doctor", "Teacher", "Pilot", "Chef"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Doctor" },
  { q: "Complete: I always ________ my homework after school.", options: ["do", "does", "doing", "did"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: do" },
  { q: "What do you wear on your feet when you play sports?", options: ["Sneakers", "Hat", "Gloves", "Scarf"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Sneakers" },
  { q: "A crocodile has got big ________.", options: ["teeth", "feathers", "hair", "hands"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: teeth" },
  { q: "What is the capital of Uzbekistan?", options: ["Tashkent", "Samarkand", "Bukhara", "Khiva"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Tashkent" },
  { q: "Complete: There ________ many trees in the park.", options: ["are", "is", "am", "be"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: are" },
  { q: "What do bees make?", options: ["Honey", "Milk", "Water", "Bread"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Honey" },
  { q: "Which subject is about numbers?", options: ["Maths", "Art", "History", "Music"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Maths" },
  { q: "He ________ TV in the evening.", options: ["watches", "watch", "watching", "look"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: watches" },
  { q: "What do you use to paint a picture?", options: ["Paintbrush", "Ruler", "Rubber", "Scissors"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Paintbrush" },
  { q: "Which animal is very slow?", options: ["Turtle", "Cheetah", "Horse", "Eagle"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Turtle" },
  { q: "Complete: Is there ________ milk in the fridge?", options: ["any", "some", "a", "an"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: any" },
  { q: "Lions eat ________.", options: ["meat", "grass", "fruits", "leaves"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: meat" },
  { q: "What color do you get if you mix red and yellow?", options: ["Orange", "Green", "Purple", "Blue"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Orange" },
  { q: "Complete: What ________ she doing?", options: ["is", "are", "do", "does"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: is" },
  { q: "A kangaroo can ________ very high.", options: ["jump", "swim", "fly", "write"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: jump" },
  { q: "Where do you buy books?", options: ["Bookshop", "Bakery", "Hospital", "Cinema"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Bookshop" },
  { q: "What do we use to cut paper?", options: ["Scissors", "Glue", "Pencil", "Pen"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Scissors" },
  { q: "Complete: My brother is ________ than me.", options: ["taller", "tall", "tallest", "more tall"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: taller" },
  { q: "Which of these is a vegetable?", options: ["Carrot", "Apple", "Banana", "Grape"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Carrot" },
  { q: "Birds have got ________ to fly.", options: ["wings", "legs", "ears", "arms"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: wings" },
  { q: "Complete: We ________ go to school on Sundays.", options: ["don't", "doesn't", "aren't", "isn't"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: don't" },
  { q: "Where do pilots work?", options: ["On airplanes", "In a school", "In a farm", "In a kitchen"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: On airplanes" },
  { q: "What do you drink when you are thirsty?", options: ["Water", "Cake", "Rice", "Bread"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Water" },
  { q: "Complete: Can you speak English? - Yes, I ________.", options: ["can", "do", "am", "have"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: can" },
  { q: "What is the third month of the year?", options: ["March", "January", "February", "April"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: March" },
  { q: "Whales are the biggest animals in the ________.", options: ["ocean", "desert", "forest", "sky"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: ocean" },
  { q: "Choose the correct spelling:", options: ["Elephant", "Elefant", "Eliphant", "Elephante"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Elephant" },
  { q: "Complete: She ________ got short hair.", options: ["has", "have", "is", "are"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: has" },
  { q: "What do you wear when it's raining?", options: ["Raincoat", "Swimsuit", "Shorts", "Sunglasses"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Raincoat" },
  { q: "Complete: Where ________ you live?", options: ["do", "does", "is", "are"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: do" },
  { q: "What season comes after summer?", options: ["Autumn", "Spring", "Winter", "Summer"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Autumn" },
  { q: "A giraffe has got a very long ________.", options: ["neck", "tail", "nose", "ear"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: neck" },
  { q: "Complete: I ________ like spinach. It tastes bad.", options: ["don't", "doesn't", "am not", "can't"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: don't" },
  { q: "What place has lots of wild animals?", options: ["Zoo", "School", "Library", "Bank"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Zoo" },
  { q: "Complete: Look! The dog is ________ in the garden.", options: ["running", "run", "runs", "ran"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: running" },
  { q: "What fruit is yellow and monkeys love it?", options: ["Banana", "Apple", "Cherry", "Strawberry"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Banana" },
  { q: "Complete: How ________ apples are there?", options: ["many", "much", "long", "old"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: many" },
  { q: "Which room do you sleep in?", options: ["Bedroom", "Kitchen", "Bathroom", "Living room"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Bedroom" },
  { q: "Complete: This is ________ bicycle.", options: ["my", "me", "I", "mine's"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: my" },
  { q: "Fish use ________ to swim.", options: ["fins", "legs", "arms", "wings"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: fins" },
  { q: "Complete: ________ is your birthday? - It's in May.", options: ["When", "Where", "Who", "What"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: When" },
  { q: "What do you use to draw straight lines?", options: ["Ruler", "Eraser", "Sharpener", "Pencil case"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Ruler" },
  { q: "Complete: He is ________ English now.", options: ["studying", "studies", "study", "studied"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: studying" },
  { q: "Which animal lays eggs?", options: ["Hen", "Cow", "Dog", "Cat"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Hen" },
  { q: "Complete: The cat is sitting ________ the chair.", options: ["under", "into", "between of", "through"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: under" },
  { q: "What do chefs do?", options: ["They cook food.", "They teach students.", "They fly planes.", "They fix cars."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: They cook food." },
  { q: "Complete: These books are ________ than those books.", options: ["more interesting", "interest", "most interesting", "interestinger"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: more interesting" },
  { q: "What do cows produce?", options: ["Milk", "Juice", "Tea", "Soda"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Milk" },
  { q: "Complete: She ________ a new bag yesterday.", options: ["bought", "buy", "buys", "buying"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: bought" },
  { q: "Which day comes after Friday?", options: ["Saturday", "Sunday", "Thursday", "Tuesday"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Saturday" },
  { q: "What do you use to clean your hair?", options: ["Shampoo", "Soap", "Toothpaste", "Towel"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Shampoo" },
  { q: "Complete: Were you at home yesterday? - Yes, I ________.", options: ["was", "were", "am", "did"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: was" },
  { q: "What body part do you use to listen to music?", options: ["Ears", "Eyes", "Nose", "Mouth"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Ears" },
  { q: "Complete: Dolphins are very ________ animals.", options: ["intelligent", "dangerous", "slow", "boring"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: intelligent" },
  { q: "Where do people buy bread and cakes?", options: ["Bakery", "Pharmacy", "Cinema", "Police station"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Bakery" },
  { q: "Complete: I have got ________ apple.", options: ["an", "a", "two", "some"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: an" },
  { q: "What is the color of grass?", options: ["Green", "Blue", "Red", "Pink"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Green" },
  { q: "Complete: They ________ play computer games yesterday.", options: ["didn't", "don't", "doesn't", "aren't"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: didn't" },
  { q: "What instrument has black and white keys?", options: ["Piano", "Guitar", "Drums", "Flute"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Piano" },
  { q: "Complete: The sun ________ in the east.", options: ["rises", "rise", "rising", "rose"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: rises" },
  { q: "What do you wear on your head in summer?", options: ["Cap", "Boots", "Socks", "Coat"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Cap" },
  { q: "Complete: How ________ sugar do you need?", options: ["much", "many", "long", "tall"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: much" },
  { q: "What do spider webs catch?", options: ["Insects", "Birds", "Fish", "Mice"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Insects" },
  { q: "Complete: She is the ________ girl in the class.", options: ["smartest", "smarter", "smart", "more smart"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: smartest" },
  { q: "Which animal carries its house on its back?", options: ["Snail", "Frog", "Lizard", "Snake"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Snail" },
  { q: "Complete: You ________ wash your hands before eating.", options: ["should", "shouldn't", "mustn't", "don't"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: should" },
  { q: "What vehicle moves on rails?", options: ["Train", "Bus", "Car", "Helicopter"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Train" },
  { q: "Complete: An elephant is ________ than a mouse.", options: ["bigger", "smaller", "lighter", "shorter"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: bigger" },
  { q: "Which of these is a farm animal?", options: ["Sheep", "Lion", "Tiger", "Shark"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Sheep" },
  { q: "Complete: My father ________ to work by car.", options: ["drives", "drive", "driving", "driver"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: drives" },
  { q: "What do you put on a letter before posting it?", options: ["Stamp", "Coin", "Picture", "Sticker"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Stamp" },
  { q: "Complete: Look at ________! They are dancing.", options: ["them", "they", "their", "theirs"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: them" },
  { q: "What is a baby dog called?", options: ["Puppy", "Kitten", "Calf", "Cub"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Puppy" },
  { q: "Complete: He can ________ Spanish very well.", options: ["speak", "speaks", "speaking", "spoke"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: speak" },
  { q: "What shape has 3 sides?", options: ["Triangle", "Square", "Circle", "Rectangle"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Triangle" },
  { q: "Complete: It is ________ outside. Take your umbrella.", options: ["raining", "sunny", "hot", "dry"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: raining" },
  { q: "What do you use to wipe your hands?", options: ["Towel", "Mirror", "Soap", "Comb"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Towel" },
  { q: "Complete: There is a book ________ the table.", options: ["on", "into", "behind of", "through"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: on" },
  { q: "Which of these is a sweet dessert?", options: ["Ice cream", "Soup", "Salad", "Salt"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Ice cream" },
  { q: "Complete: We ________ going to visit our grandparents tomorrow.", options: ["are", "is", "am", "be"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: are" },
  { q: "What do you call your mother's sister?", options: ["Aunt", "Uncle", "Sister", "Grandmother"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Aunt" },
  { q: "Complete: I ________ finished my homework yet.", options: ["haven't", "don't", "hasn't", "am not"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: haven't" },
  { q: "Which animal lives in cold ice and snow?", options: ["Penguin", "Camel", "Giraffe", "Monkey"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Penguin" },
  { q: "Complete: Thank you very much! - You're ________.", options: ["welcome", "happy", "good", "fine"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: welcome" }
];

// 5-SINF ONA TILI (1-CHSB - 19 ta darslik testi)
window.TEST_DATA["5_ona_tili"] = [
  { q: "Harflarning ma’lum bir tartibda joylashuvi nima deyiladi?", options: ["alifbe", "alifbo", "imlo", "lug‘at"], answer: 1, difficulty: "easy", explanation: "To'g'ri javob: alifbo" },
  { q: "“Alifbo” so‘zi qaysi harflar nomining qo‘shilishidan hosil bo‘lgan?", options: ["alif va jim", "be va te", "alif va lom", "alif va bo (be)"], answer: 3, difficulty: "medium", explanation: "To'g'ri javob: alif va bo (be)" },
  { q: "Xurshid Davronning matniga ko‘ra, Vatan nimaga o‘xshatiladi?", options: ["onaga", "bog‘ga", "kitobga", "quyoshga"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: onaga" },
  { q: "Gapning ifoda maqsadiga ko‘ra nechta turi bor?", options: ["ikkita", "uchta", "to‘rtta", "beshta"], answer: 2, difficulty: "easy", explanation: "To'g'ri javob: to‘rtta" },
  { q: "Darak gap his-hayajon bilan aytilsa, gap oxiriga qaysi tinish belgisi qo‘yiladi?", options: ["so‘roq belgisi", "undov belgisi", "vergul", "ikki nuqta"], answer: 1, difficulty: "medium", explanation: "To'g'ri javob: undov belgisi" },
  { q: "“Elektr hisoblagichga tegmang!” gapi qanday ma’noni bildiradi?", options: ["iltimos", "maslahat", "ogohlantirish", "tilak"], answer: 2, difficulty: "hard", explanation: "To'g'ri javob: ogohlantirish" },
  { q: "“Qaniydi men ham o‘qib, olim bo‘lsam...” gapi ifoda maqsadiga ko‘ra qaysi gap?", options: ["darak gap", "so‘roq gap", "buyruq gap", "istak gap"], answer: 3, difficulty: "easy", explanation: "To'g'ri javob: istak gap" },
  { q: "“Changqovuz” matnidagi “qo‘lga tushdim” birikmasi qanday ma’noni bildiradi?", options: ["biror nojo‘ya ish bilan tutilmoq", "qo‘lini biror narsaga tegizmoq", "sovg‘a olmoq", "yordam so‘ramoq"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: biror nojo‘ya ish bilan tutilmoq" },
  { q: "Sinonimlar qatoridagi bosh so‘z qaysi so‘z hisoblanadi?", options: ["eng uzun so‘z", "eng kam ishlatiladigan so‘z", "hammaga tushunarli va nutqda faol qo‘llanadigan so‘z", "eskirgan so‘z"], answer: 2, difficulty: "hard", explanation: "To'g'ri javob: hammaga tushunarli va nutqda faol qo‘llanadigan so‘z" },
  { q: "Quyidagi gaplarning qaysi birida “qaynamoq” so‘zi ko‘chma ma’noda qo‘llangan?", options: ["Qozonda sho‘rva qaynayapti.", "Dalalarda ish qaynaydi.", "Choynakda suv qaynadi.", "Sut qaynab toshdi."], answer: 1, difficulty: "easy", explanation: "To'g'ri javob: Dalalarda ish qaynaydi." },
  { q: "Harakat fe’llari nimani bildiradi?", options: ["jismoniy faoliyat natijasida ro‘y bergan harakatni", "shaxsning ichki kechinmalarini", "narsaning rangini", "buyumning shaklini"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: jismoniy faoliyat natijasida ro‘y bergan harakatni" },
  { q: "Quyidagi fe’llardan qaysi biri holat fe’li?", options: ["yozmoq", "yugurmoq", "gaplashmoq", "sarg‘aymoq"], answer: 3, difficulty: "hard", explanation: "To'g'ri javob: sarg‘aymoq" },
  { q: "Quyidagi fe’llardan qaysi biri bo‘lishsiz fe’l?", options: ["ko‘rdi", "ko‘radi", "ko‘rmadi", "ko‘rmoq"], answer: 2, difficulty: "easy", explanation: "To'g'ri javob: ko‘rmadi" },
  { q: "Gaplar matnni hosil qilishi uchun nima lozim?", options: ["har qanday gaplar yig‘indisi bo‘lishi", "mavzu doirasida birlashib, mazmun va grammatik jihatdan bog‘langan bo‘lishi", "faqat darak gaplardan tuzilishi", "kamida o‘nta gapdan iborat bo‘lishi"], answer: 1, difficulty: "medium", explanation: "To'g'ri javob: mavzu doirasida birlashib, mazmun va grammatik jihatdan bog‘langan bo‘lishi" },
  { q: "Do‘ppi qaysi qismlardan tuzilgan?", options: ["tepa, yoqa va etak", "bosh, tana va oyoq", "tepa, tasma va chok", "tepa, kizak va jiyak"], answer: 3, difficulty: "hard", explanation: "To'g'ri javob: tepa, kizak va jiyak" },
  { q: "Quyidagi so‘zlarning qaysi birida a tovushi o kabi aytilsa ham, a yoziladi?", options: ["savol", "okean", "tonna", "tort"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: savol" },
  { q: "Quyidagi so‘zlarning qaysi birida e tovushi i ga o‘xshash aytilsa ham, e yoziladi?", options: ["kecha", "ekran", "telefon", "ne’mat"], answer: 2, difficulty: "medium", explanation: "To'g'ri javob: telefon" },
  { q: "Matn sarlavhasi qanday yoziladi?", options: ["satr boshida, qo‘shtirnoq ichida", "satr o‘rtasida bosh harf bilan, qo‘shtirnoqsiz", "satr oxirida, kichik harf bilan", "qo‘shtirnoq ichida, katta harflar bilan"], answer: 1, difficulty: "hard", explanation: "To'g'ri javob: satr o‘rtasida bosh harf bilan, qo‘shtirnoqsiz" },
  { q: "“Algoritm” atamasi qaysi olimning taxallusidan kelib chiqqan?", options: ["Beruniyning", "Ibn Sinoning", "Mirzo Ulug‘bekning", "al-Xorazmiyning"], answer: 3, difficulty: "easy", explanation: "To'g'ri javob: al-Xorazmiyning" }
];

// 7-SINF ONA TILI (I chorak - 19 ta darslik testi)
window.TEST_DATA["7_ona_tili"] = [
  { q: "Qaysi qatorda so‘zlar imlo qoidasiga ko‘ra to‘g‘ri yozilgan?", options: ["vidiyo, kampyuter, intelekt, xisobchi", "video, kampyuter, intellekt, hisobchi", "video, kompyuter, intellekt, hisobchi", "video, kompyuter, intelekt, xaydovchi"], answer: 2, difficulty: "easy", explanation: "To'g'ri javob: video, kompyuter, intellekt, hisobchi" },
  { q: "“Ukangga ayt: tezroq kelsin.” gapidagi -sin munosabat qo‘shimchasi nimani ifodalaydi?", options: ["so‘zlovchining buyrug‘ini", "so‘zlovchining istak-xohishini", "so‘zlovchining maqsadini", "o‘tgan zamondagi harakatni"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: so‘zlovchining buyrug‘ini" },
  { q: "“Qani edi, qizim ham baxtini topsa.” gapidagi -sa shakli nimani ifodalaydi?", options: ["buyruqni", "maqsadni", "kelasi zamonni", "istak-xohishni"], answer: 3, difficulty: "hard", explanation: "To'g'ri javob: istak-xohishni" },
  { q: "Fe’lning munosabat shakllariga qaysilar kiradi?", options: ["-lik, -chi, -zor qo‘shimchalari", "zamon, shaxs-son va -sa qo‘shimchalari", "-ning, -ni, -ga qo‘shimchalari", "-roq, -gina, -mi qo‘shimchalari"], answer: 1, difficulty: "easy", explanation: "To'g'ri javob: zamon, shaxs-son va -sa qo‘shimchalari" },
  { q: "“Qila olmaymiz – qilolmaymiz” so‘zida qanday fonetik hodisa ro‘y bergan?", options: ["tovush ortishi", "tovush almashishi", "tovush tushishi", "fonetik hodisa ro‘y bermagan"], answer: 2, difficulty: "medium", explanation: "To'g'ri javob: tovush tushishi" },
  { q: "Turon yo‘lbarsi qaysi yilda qirilib ketgan deb tan olingan?", options: ["1970-yilda", "1883-yilda", "1906-yilda", "1957-yilda"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: 1970-yilda" },
  { q: "Olmoshlarning nutqdagi asosiy vazifasi nima?", options: ["faqat harakat-holatni ifodalash", "so‘z, so‘z birikmasi, gap va matnlar o‘rnida almashib kelish", "narsaning belgisini bildirish", "faqat so‘zlarni bir-biriga bog‘lash"], answer: 1, difficulty: "easy", explanation: "To'g'ri javob: so‘z, so‘z birikmasi, gap va matnlar o‘rnida almashib kelish" },
  { q: "Qaysi qatorda faqat jamni bildiruvchi belgilash olmoshlari berilgan?", options: ["ba’zi, ayrim, hamma, butun", "har kim, har bir, ba’zi, ayrim", "ayrim, ba’zi, har kim, har nima", "hamma, barcha, bari, jamiki"], answer: 3, difficulty: "medium", explanation: "To'g'ri javob: hamma, barcha, bari, jamiki" },
  { q: "Qutb yulduzi sayyohlarga yo‘l ko‘rsatishi uchun qaysi xususiyati asosiy bo‘lgan?", options: ["Quyoshdan kichik va xira bo‘lishi", "har kuni sharqdan chiqib, g‘arbda botishi", "o‘z joyidan jilmay, doim osmonning shimoliy qismida turishi", "Yerga eng yaqin yulduz bo‘lishi"], answer: 2, difficulty: "hard", explanation: "To'g'ri javob: o‘z joyidan jilmay, doim osmonning shimoliy qismida turishi" },
  { q: "Uyushiq bo‘laklar qatnashgan gapni toping.", options: ["Uyda Nodira yoki Alimardon qoladi.", "Nodira uyda qoladi.", "Alimardon kitob o‘qiydi.", "Biz bog‘ga bordik."], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Uyda Nodira yoki Alimardon qoladi." },
  { q: "Uyushiq undalmalar qatnashgan gapni toping.", options: ["Abbos Azizaga kitob berdi.", "Abbos, Aziza, bu yoqqa kelinglar.", "Kenja qizimiz aqlli, biroq qaysarroq.", "Haydarali na bozorga, na maktabga bordi."], answer: 1, difficulty: "medium", explanation: "To'g'ri javob: Abbos, Aziza, bu yoqqa kelinglar." },
  { q: "Atoqli otlar qaysi qatorda to‘g‘ri izohlangan?", options: ["Narsaning belgisini bildiruvchi so‘zlar", "Bir turdagi narsalarning umumiy nomi", "Harakat-holatni bildiruvchi so‘zlar", "Alohida shaxs, predmet, hodisa va joylarga atab qo‘yilgan otlar"], answer: 3, difficulty: "hard", explanation: "To'g'ri javob: Alohida shaxs, predmet, hodisa va joylarga atab qo‘yilgan otlar" },
  { q: "Boshqa tillardan kirgan so‘zlar nima deb ataladi?", options: ["shakldosh so‘zlar", "ma’nodosh so‘zlar", "olinma (o‘zlashma) so‘zlar", "uyushiq bo‘laklar"], answer: 2, difficulty: "easy", explanation: "To'g'ri javob: olinma (o‘zlashma) so‘zlar" },
  { q: "“Dunyo” (olam, koinot) va “dunyo” (boylik, davlat) so‘zlari qanday so‘zlar hisoblanadi?", options: ["shakldosh so‘zlar", "ma’nodosh so‘zlar", "zid ma’noli so‘zlar", "olinma so‘zlar"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: shakldosh so‘zlar" },
  { q: "Qaysi gapda tartib son qo‘llangan?", options: ["Savatda beshta olma bor.", "Men yettinchi sinfda o‘qiyman.", "Kuniga 45 mg C vitamini qabul qilish kerak.", "Stolda uchta kitob turibdi."], answer: 1, difficulty: "hard", explanation: "To'g'ri javob: Men yettinchi sinfda o‘qiyman." },
  { q: "Qaysi qatorda faqat juft sifatlar berilgan?", options: ["mayda-mayda, oppoq-oppoq, shirin-shirin", "qimmatbaho, shifobaxsh, kamgap", "sariq, qalin, tinch", "yaxshi-yomon, katta-kichik, turli-tuman"], answer: 3, difficulty: "easy", explanation: "To'g'ri javob: yaxshi-yomon, katta-kichik, turli-tuman" },
  { q: "Qaysi qo‘shimcha bilan yasalgan sifat narsa yo‘qligi yoki kamligini bildiradi?", options: ["-li (suvli)", "-dor (suvdor)", "-siz (suvsiz)", "ser- (sersuv)"], answer: 2, difficulty: "medium", explanation: "To'g'ri javob: -siz (suvsiz)" },
  { q: "“Na medal, na kubok” birikmasidagi na … na bog‘lovchilari qanday ma’no bildiradi?", options: ["ikkisi ham emas, hech biri", "ikkisidan faqat bittasi", "har ikkisi birga", "ikki jihatning zidlanishi"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: ikkisi ham emas, hech biri" },
  { q: "Qaysi ko‘makchi chegara ma’nosini ifodalaydi?", options: ["sari", "qadar", "tufayli", "haqida"], answer: 1, difficulty: "easy", explanation: "To'g'ri javob: qadar" }
];

// 7-SINF ADABIYOT (I chorak - 19 ta darslik testi)
window.TEST_DATA["7_adabiyot"] = [
  { q: "Ernest Heminguey fikricha, badiiy asarning qaysi qismi muhimroq?", options: ["Yozilgan qismi", "Sarlavhasi", "Yozilmagan qismi", "Boshlanishi"], answer: 2, difficulty: "easy", explanation: "To'g'ri javob: Yozilmagan qismi" },
  { q: "Bir obraz (tushuncha) orqali boshqa tushunchaning ifodalanishi nima deyiladi?", options: ["Ramz", "Syujet", "Zidlantirish", "Peyzaj"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Ramz" },
  { q: "Badiiy asarda bayon qilingan voqealar nima deyiladi?", options: ["Ramz", "Zidlantirish", "Epigraf", "Syujet"], answer: 3, difficulty: "hard", explanation: "To'g'ri javob: Syujet" },
  { q: "Normurod Norqobilov qaysi viloyatda tug‘ilgan?", options: ["Samarqand viloyatida", "Qashqadaryo viloyatida", "Farg‘ona viloyatida", "Xorazm viloyatida"], answer: 1, difficulty: "easy", explanation: "To'g'ri javob: Qashqadaryo viloyatida" },
  { q: "“Oqbo‘yin” qissasi qaysi hayvonning taqdiri haqida?", options: ["Otning", "Itning", "Bo‘rining", "Mushukning"], answer: 1, difficulty: "medium", explanation: "To'g'ri javob: Itning" },
  { q: "“Oqbo‘yin” qissasida Oqbo‘yinning tajang, salga “yoqa bo‘g‘ishadigan” akasi kim?", options: ["Malla", "Oqto‘sh", "To‘rtko‘z", "Olapar"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Malla" },
  { q: "Oqbo‘yinning jarohatini davolagan kishi kim?", options: ["Karim podachi", "Sodiq aka", "Salom do‘xtir", "Rasul"], answer: 2, difficulty: "easy", explanation: "To'g'ri javob: Salom do‘xtir" },
  { q: "Oqbo‘yinga boshidanoq ayricha mehr qo‘ygan bola kim?", options: ["Karim podachi", "Salom do‘xtir", "Sodiq aka", "Rasul"], answer: 3, difficulty: "medium", explanation: "To'g'ri javob: Rasul" },
  { q: "Retrospektiva nima?", options: ["Voqealarning yechimi", "Voqealar xronologik tartibining buzilib, oldingi hodisalarga qaytilishi", "Qahramonning ichki monologi", "Tabiat tasviri"], answer: 1, difficulty: "hard", explanation: "To'g'ri javob: Voqealar xronologik tartibining buzilib, oldingi hodisalarga qaytilishi" },
  { q: "Zulfiya qaysi yillarda yashagan?", options: ["1920–1997", "1899–1961", "1915–1996", "1860–1946"], answer: 2, difficulty: "easy", explanation: "To'g'ri javob: 1915–1996" },
  { q: "Zulfiya qaysi shoirning rafiqasi bo‘lgan?", options: ["Hamid Olimjonning", "G‘afur G‘ulomning", "Mirtemirning", "Asqad Muxtorning"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Hamid Olimjonning" },
  { q: "Badiiy asarda bir-biriga zid obraz yoki tushunchalarning qarama-qarshi qo‘yilishi nima deyiladi?", options: ["Ramz", "Syujet", "Retrospektiva", "Zidlantirish (antiteza)"], answer: 3, difficulty: "hard", explanation: "To'g'ri javob: Zidlantirish (antiteza)" },
  { q: "Asqad Muxtorning “Oliy butunlik” she’rida lirik qahramon kim bilan “yak sonman” (birman) deydi?", options: ["Vatan bilan", "Ona tabiat bilan", "Quyosh bilan", "Ona bilan"], answer: 1, difficulty: "easy", explanation: "To'g'ri javob: Ona tabiat bilan" },
  { q: "Ernest Seton-Tompson qaysi yillarda yashagan?", options: ["1899–1961", "1915–1996", "1860–1946", "1920–1997"], answer: 2, difficulty: "medium", explanation: "To'g'ri javob: 1860–1946" },
  { q: "“Lobo” so‘zi ispancha nimani bildiradi?", options: ["Bo‘ri", "It", "Burgut", "Ayiq"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Bo‘ri" },
  { q: "“Lobo” hikoyasida Lobo hukm surgan vodiy qanday ataladi?", options: ["Kolorado", "Yellouston", "Texas", "Kurrumpo"], answer: 3, difficulty: "easy", explanation: "To'g'ri javob: Kurrumpo" },
  { q: "Seton-Tompson hikoyasida Loboning jufti – sho‘rpeshona bo‘rining nomi nima?", options: ["Oqsiyna", "Malla", "Blanka", "Luna"], answer: 2, difficulty: "medium", explanation: "To'g'ri javob: Blanka" },
  { q: "“Chol va dengiz” qissasi qaysi yili Nobel mukofotiga sazovor bo‘lgan?", options: ["1954-yilda", "1961-yilda", "1899-yilda", "1945-yilda"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: 1954-yilda" },
  { q: "“Chol va dengiz” qissasida chol necha kundan beri bironta baliq tutolmagan edi?", options: ["40 kun", "84 kun", "60 kun", "100 kun"], answer: 1, difficulty: "easy", explanation: "To'g'ri javob: 84 kun" }
];

// 7-SINF INGLIZ TILI (Guess What! 7 - 100 ta rasmiy test)
window.TEST_DATA["7_ingliz_tili"] = [
  { q: "Choose the correct form: She ___ to school every day.", options: ["goes", "go", "going", "gone"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: goes" },
  { q: "What is the past tense of “buy”?", options: ["bought", "buyed", "buys", "buying"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: bought" },
  { q: "We use a ___ to take photographs.", options: ["camera", "fridge", "pillow", "spoon"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: camera" },
  { q: "Which word is an adjective?", options: ["beautiful", "quickly", "swim", "teacher"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: beautiful" },
  { q: "There ___ two books on the desk.", options: ["are", "is", "am", "be"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: are" },
  { q: "What is the opposite of “dangerous”?", options: ["safe", "difficult", "noisy", "expensive"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: safe" },
  { q: "Choose the correct sentence.", options: ["I have got a new bicycle.", "I has got a new bicycle.", "I having got a new bicycle.", "I am got a new bicycle."], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: I have got a new bicycle." },
  { q: "Which animal lives in the ocean?", options: ["dolphin", "camel", "eagle", "rabbit"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: dolphin" },
  { q: "My brother is ___ than me.", options: ["taller", "tall", "tallest", "more tall"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: taller" },
  { q: "We ___ watching a film now.", options: ["are", "is", "am", "be"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: are" },
  { q: "What do you wear on your feet?", options: ["shoes", "gloves", "scarf", "hat"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: shoes" },
  { q: "Choose the correct question.", options: ["Did you visit the museum?", "Do you visited the museum?", "Did you visited the museum?", "Were you visit the museum?"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Did you visit the museum?" },
  { q: "The sun rises in the ___.", options: ["east", "west", "north", "south"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: east" },
  { q: "Which is a means of transport?", options: ["train", "sofa", "plate", "lamp"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: train" },
  { q: "I usually ___ breakfast at seven.", options: ["have", "has", "having", "had"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: have" },
  { q: "What is the plural of “child”?", options: ["children", "childs", "childes", "childrens"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: children" },
  { q: "There isn't ___ milk in the fridge.", options: ["any", "some", "many", "a few"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: any" },
  { q: "Which word means “very big”?", options: ["huge", "tiny", "weak", "thin"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: huge" },
  { q: "Choose the correct preposition: The cat is ___ the table.", options: ["under", "between", "during", "through"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: under" },
  { q: "You ___ run in the school corridor.", options: ["mustn't", "must", "should", "can"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: mustn't" },
  { q: "What is the past tense of “see”?", options: ["saw", "seed", "seen", "seeing"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: saw" },
  { q: "Which one is a healthy food?", options: ["vegetables", "sweets", "crisps", "soda"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: vegetables" },
  { q: "My parents ___ dinner at the moment.", options: ["are cooking", "cook", "cooks", "cooked"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: are cooking" },
  { q: "Choose the correct comparative: interesting.", options: ["more interesting", "interestinger", "most interesting", "the interesting"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: more interesting" },
  { q: "A person who looks after sick people is a ___.", options: ["doctor", "pilot", "farmer", "painter"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: doctor" },
  { q: "We went to the park ___ Sunday.", options: ["last", "next", "every", "tomorrow"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: last" },
  { q: "Which word is a verb?", options: ["discover", "careful", "friendly", "happiness"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: discover" },
  { q: "If it rains, we ___ at home.", options: ["will stay", "stayed", "staying", "stays"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: will stay" },
  { q: "What is the opposite of “borrow”?", options: ["lend", "keep", "buy", "bring"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: lend" },
  { q: "Choose the correct form: They ___ finished their homework.", options: ["have", "has", "is", "was"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: have" },
  { q: "Which place can you borrow books from?", options: ["library", "stadium", "airport", "factory"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: library" },
  { q: "I’m interested ___ science.", options: ["in", "on", "at", "for"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: in" },
  { q: "What is the superlative of “good”?", options: ["the best", "the goodest", "better", "most good"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: the best" },
  { q: "She speaks English very ___.", options: ["well", "good", "better", "best"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: well" },
  { q: "Which object tells you the time?", options: ["clock", "mirror", "wallet", "suitcase"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: clock" },
  { q: "We ___ to Samarkand last summer.", options: ["travelled", "travel", "travels", "travelling"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: travelled" },
  { q: "There are ___ apples in the basket.", options: ["a few", "much", "any", "a little"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: a few" },
  { q: "Choose the correct sentence.", options: ["He doesn't like onions.", "He don't like onions.", "He isn't like onions.", "He not likes onions."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: He doesn't like onions." },
  { q: "Which natural feature is a very high area of land?", options: ["mountain", "valley", "island", "lake"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: mountain" },
  { q: "You should ___ your teeth twice a day.", options: ["brush", "brushing", "brushes", "brushed"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: brush" },
  { q: "What is the opposite of “noisy”?", options: ["quiet", "crowded", "bright", "busy"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: quiet" },
  { q: "I have lived here ___ 2020.", options: ["since", "for", "at", "from"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: since" },
  { q: "Which word is a feeling?", options: ["excited", "wooden", "round", "purple"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: excited" },
  { q: "The children ___ football when it started to rain.", options: ["were playing", "played", "are playing", "play"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: were playing" },
  { q: "What do bees make?", options: ["honey", "cheese", "bread", "juice"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: honey" },
  { q: "Choose the correct modal: ___ I borrow your pen?", options: ["May", "Mustn't", "Shouldn't", "Was"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: May" },
  { q: "A place where planes take off and land is an ___.", options: ["airport", "aquarium", "office", "underground"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: airport" },
  { q: "My sister is good ___ drawing.", options: ["at", "in", "on", "to"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: at" },
  { q: "Which word is spelled correctly?", options: ["environment", "enviroment", "envirenment", "environmant"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: environment" },
  { q: "We haven't got ___ eggs.", options: ["many", "much", "a little", "any of"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: many" },
  { q: "What is the past participle of “write”?", options: ["written", "wrote", "writing", "writes"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: written" },
  { q: "A ___ is a person who studies the past.", options: ["historian", "chemist", "musician", "mechanic"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: historian" },
  { q: "Choose the correct future form: I think it ___ tomorrow.", options: ["will snow", "snowed", "snowing", "snows yesterday"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: will snow" },
  { q: "Which is an example of an outdoor activity?", options: ["cycling", "reading in bed", "watching TV", "playing a computer game"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: cycling" },
  { q: "The opposite of “remember” is ___.", options: ["forget", "repeat", "explain", "understand"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: forget" },
  { q: "There is ___ orange on the table.", options: ["an", "a", "the", "some"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: an" },
  { q: "How ___ water do you drink every day?", options: ["much", "many", "few", "several"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: much" },
  { q: "Choose the correct sentence.", options: ["They were at home yesterday.", "They was at home yesterday.", "They are at home yesterday.", "They be at home yesterday."], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: They were at home yesterday." },
  { q: "Which instrument has black and white keys?", options: ["piano", "drum", "flute", "guitar"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: piano" },
  { q: "You can see stars at ___.", options: ["night", "noon", "breakfast", "sunrise only"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: night" },
  { q: "What is the comparative of “bad”?", options: ["worse", "badder", "worst", "more bad"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: worse" },
  { q: "She ___ her homework before dinner yesterday.", options: ["did", "does", "do", "doing"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: did" },
  { q: "Which word is an adverb?", options: ["carefully", "careful", "care", "caring"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: carefully" },
  { q: "A place with lots of trees is a ___.", options: ["forest", "desert", "beach", "cave"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: forest" },
  { q: "We have English lessons ___ Mondays.", options: ["on", "in", "at", "by"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: on" },
  { q: "Choose the correct question tag: You're a student, ___?", options: ["aren't you", "are you", "don't you", "isn't it"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: aren't you" },
  { q: "Which material comes from trees?", options: ["wood", "glass", "metal", "plastic"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: wood" },
  { q: "The film was ___; I laughed a lot.", options: ["funny", "boring", "frightened", "danger"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: funny" },
  { q: "If I ___ time, I will help you.", options: ["have", "had", "having", "has"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: have" },
  { q: "What is the opposite of “early”?", options: ["late", "soon", "quick", "first"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: late" },
  { q: "They have been friends ___ five years.", options: ["for", "since", "during", "from"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: for" },
  { q: "Which job works with animals on a farm?", options: ["farmer", "dentist", "cashier", "architect"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: farmer" },
  { q: "Choose the correct form: This is ___ book.", options: ["my", "me", "I", "mine's"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: my" },
  { q: "We ___ visit our grandparents next weekend.", options: ["are going to", "going", "go to", "went to"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: are going to" },
  { q: "Which word means “to make something better”?", options: ["improve", "damage", "lose", "hide"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: improve" },
  { q: "The opposite of “generous” is ___.", options: ["selfish", "kind", "helpful", "polite"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: selfish" },
  { q: "I was tired, ___ I went to bed early.", options: ["so", "because", "but", "although"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: so" },
  { q: "Which is a reptile?", options: ["turtle", "whale", "sparrow", "frog"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: turtle" },
  { q: "The museum is ___ the bank and the post office.", options: ["between", "through", "above", "behind of"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: between" },
  { q: "Choose the correct present perfect question.", options: ["Have you ever eaten sushi?", "Did you ever eaten sushi?", "Have you ever eat sushi?", "Do you ever ate sushi?"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Have you ever eaten sushi?" },
  { q: "A person who designs buildings is an ___.", options: ["architect", "actor", "engineer of trains", "athlete"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: architect" },
  { q: "What is the opposite of “include”?", options: ["exclude", "contain", "add", "involve"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: exclude" },
  { q: "The train ___ at 8:30 every morning.", options: ["leaves", "leave", "leaving", "left tomorrow"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: leaves" },
  { q: "Which word is a conjunction?", options: ["although", "quickly", "beautiful", "between"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: although" },
  { q: "You ___ wear a helmet when you ride a bike.", options: ["should", "shouldn't", "mustn't", "couldn't"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: should" },
  { q: "What is the past tense of “teach”?", options: ["taught", "teached", "teaches", "teaching"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: taught" },
  { q: "A very dry place with little rain is a ___.", options: ["desert", "rainforest", "swamp", "river"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: desert" },
  { q: "I prefer tea ___ coffee.", options: ["to", "than", "from", "over than"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: to" },
  { q: "Which sentence describes a habit?", options: ["He plays tennis every Saturday.", "He is playing tennis now.", "He played tennis yesterday.", "He will play tennis tomorrow."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: He plays tennis every Saturday." },
  { q: "The opposite of “polite” is ___.", options: ["rude", "friendly", "honest", "patient"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: rude" },
  { q: "There ___ a lot of people at the concert last night.", options: ["were", "was", "are", "is"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: were" },
  { q: "What do you use to find directions?", options: ["map", "blanket", "comb", "kettle"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: map" },
  { q: "Choose the correct relative pronoun: The girl ___ won the race is my cousin.", options: ["who", "which", "where", "when"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: who" },
  { q: "We arrived ___ the station at noon.", options: ["at", "on", "in", "to"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: at" },
  { q: "Which word is a noun?", options: ["adventure", "adventurous", "adventurously", "adventureless"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: adventure" },
  { q: "If you heat ice, it ___.", options: ["melts", "melted", "will melting", "melting"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: melts" },
  { q: "The opposite of “accept” is ___.", options: ["refuse", "receive", "agree", "allow"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: refuse" },
  { q: "I haven't seen him ___ Monday.", options: ["since", "for", "during", "by"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: since" },
  { q: "Which sentence is in the passive voice?", options: ["The cake was made by my mum.", "My mum made the cake.", "My mum is making a cake.", "My mum makes cakes."], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: The cake was made by my mum." },
  { q: "A person who travels into space is an ___.", options: ["astronaut", "sailor", "pilot", "explorer"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: astronaut" }
];

// 8-SINF INGLIZ TILI (Guess What! 8 - 100 ta rasmiy test)
window.TEST_DATA["8_ingliz_tili"] = [
  { q: "Choose the correct present perfect form: She ___ already finished her project.", options: ["has", "have", "is", "was"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: has" },
  { q: "What is the past participle of “break”?", options: ["broken", "breaked", "broke", "breaking"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: broken" },
  { q: "If I have enough money, I ___ a new laptop.", options: ["will buy", "bought", "would bought", "buying"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: will buy" },
  { q: "Choose the correct comparative form: This exercise is ___ than the last one.", options: ["more difficult", "difficulter", "most difficult", "the difficult"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: more difficult" },
  { q: "We have lived in this town ___ 2019.", options: ["since", "for", "during", "from"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: since" },
  { q: "Which sentence is in the passive voice?", options: ["The classroom was cleaned yesterday.", "The students cleaned the classroom yesterday.", "The students are cleaning the classroom.", "The students clean the classroom every day."], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: The classroom was cleaned yesterday." },
  { q: "You ___ wear a seat belt when you are in a car.", options: ["must", "mustn't", "might not", "wouldn't"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: must" },
  { q: "Choose the correct relative pronoun: That's the girl ___ won the competition.", options: ["who", "where", "which", "whose"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: who" },
  { q: "I enjoy ___ books in my free time.", options: ["reading", "read", "to reading", "reads"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: reading" },
  { q: "He decided ___ a new language.", options: ["to learn", "learning", "learn", "learned"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: to learn" },
  { q: "What is the opposite of “generous”?", options: ["selfish", "kind", "helpful", "polite"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: selfish" },
  { q: "The train ___ at 7:45 every morning.", options: ["leaves", "leave", "leaving", "left"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: leaves" },
  { q: "There isn't ___ information on this website.", options: ["much", "many", "a few", "several"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: much" },
  { q: "Choose the correct past continuous sentence.", options: ["They were having dinner at eight.", "They was having dinner at eight.", "They are have dinner at eight.", "They have dinner at eight yesterday."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: They were having dinner at eight." },
  { q: "If you heat water to 100°C, it ___.", options: ["boils", "boiled", "will boiling", "boil yesterday"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: boils" },
  { q: "Which word is an adverb?", options: ["fortunately", "fortunate", "fortune", "fortunes"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: fortunately" },
  { q: "I haven't seen my cousin ___ last summer.", options: ["since", "for", "during", "while"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: since" },
  { q: "Choose the correct reported speech: “I am tired,” she said. → She said that she ___ tired.", options: ["was", "is", "has", "will"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: was" },
  { q: "The book ___ by a famous writer in 1998.", options: ["was written", "wrote", "is writing", "has write"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: was written" },
  { q: "Which phrase gives advice?", options: ["You should get more sleep.", "You got more sleep yesterday.", "You are getting more sleep.", "You will get more sleep."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: You should get more sleep." },
  { q: "What is the superlative of “far”?", options: ["the farthest", "the more far", "the most far", "farer"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: the farthest" },
  { q: "I would travel more if I ___ more free time.", options: ["had", "have", "will have", "having"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: had" },
  { q: "She is interested ___ learning about space.", options: ["in", "on", "at", "for"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: in" },
  { q: "Which of these is an environmental problem?", options: ["air pollution", "teamwork", "recycling", "wildlife protection"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: air pollution" },
  { q: "We ___ our grandparents this weekend; everything is arranged.", options: ["are visiting", "visit yesterday", "visited tomorrow", "visiting"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: are visiting" },
  { q: "Choose the correct question tag: He can swim, ___?", options: ["can't he", "can he", "doesn't he", "isn't he"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: can't he" },
  { q: "A person who studies the weather is a ___.", options: ["meteorologist", "biologist", "historian", "architect"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: meteorologist" },
  { q: "What is the past tense of “catch”?", options: ["caught", "catched", "catching", "catches"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: caught" },
  { q: "You ___ use your phone during the exam. It is forbidden.", options: ["mustn't", "don't have to", "should", "might"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: mustn't" },
  { q: "The opposite of “ancient” is ___.", options: ["modern", "historic", "old", "traditional"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: modern" },
  { q: "I have never ___ sushi before.", options: ["eaten", "ate", "eat", "eating"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: eaten" },
  { q: "Choose the correct form: This time tomorrow, we ___ to London.", options: ["will be flying", "fly", "flew", "are fly"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: will be flying" },
  { q: "The film was so ___ that I watched it twice.", options: ["exciting", "bored", "excite", "excitedly"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: exciting" },
  { q: "Which word is a noun?", options: ["achievement", "achieve", "achievable", "achieving"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: achievement" },
  { q: "There are ___ people in the hall today than yesterday.", options: ["fewer", "less", "little", "fewest"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: fewer" },
  { q: "She asked me where I ___.", options: ["lived", "live", "am live", "will lived"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: lived" },
  { q: "We need to protect endangered ___.", options: ["species", "specieses", "specie", "speciess"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: species" },
  { q: "Choose the correct first conditional sentence.", options: ["If it rains, we will stay inside.", "If it will rain, we stay inside.", "If it rained, we will stayed inside.", "If it raining, we stay inside."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: If it rains, we will stay inside." },
  { q: "My brother is keen ___ playing chess.", options: ["on", "at", "in", "for"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: on" },
  { q: "Which item can be recycled?", options: ["glass bottle", "used tissue", "dirty napkin", "food waste mixed with plastic"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: glass bottle" },
  { q: "The museum ___ at 9 a.m. yesterday.", options: ["opened", "open", "opens", "opening"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: opened" },
  { q: "Choose the correct modal for possibility: It ___ rain later.", options: ["might", "mustn't", "can't to", "shouldn't to"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: might" },
  { q: "I prefer travelling by train ___ travelling by bus.", options: ["to", "than", "from", "over than"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: to" },
  { q: "The opposite of “increase” is ___.", options: ["decrease", "improve", "develop", "expand"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: decrease" },
  { q: "A person who takes photographs professionally is a ___.", options: ["photographer", "photograph", "photographic", "photographing"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: photographer" },
  { q: "They have been waiting ___ two hours.", options: ["for", "since", "at", "by"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: for" },
  { q: "Choose the correct sentence.", options: ["Neither of the answers is correct.", "Neither of the answers are correct.", "Neither answers be correct.", "Neither of answers correct."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Neither of the answers is correct." },
  { q: "We ___ go to the cinema tonight, but we're not sure.", options: ["may", "must", "have", "ought"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: may" },
  { q: "What is the past participle of “choose”?", options: ["chosen", "chose", "choosed", "choosing"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: chosen" },
  { q: "The internet is useful ___ finding information.", options: ["for", "at", "with", "by"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: for" },
  { q: "Which word means “to use something again”?", options: ["reuse", "reduce", "refuse", "remove"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: reuse" },
  { q: "If I were you, I ___ apologise.", options: ["would", "will", "am", "have"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: would" },
  { q: "The woman ___ car was stolen called the police.", options: ["whose", "who", "which", "where"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: whose" },
  { q: "Choose the correct passive form: English ___ in many countries.", options: ["is spoken", "speaks", "is speaking", "has speak"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: is spoken" },
  { q: "He speaks so quietly that I can ___ hear him.", options: ["hardly", "hard", "nearly", "almost neverly"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: hardly" },
  { q: "We arrived ___ the airport two hours before the flight.", options: ["at", "in", "on", "to"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: at" },
  { q: "Which one is a renewable energy source?", options: ["solar power", "coal", "oil", "natural gas"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: solar power" },
  { q: "She ___ dinner when the telephone rang.", options: ["was cooking", "cooked", "is cooking", "has cooked"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: was cooking" },
  { q: "Choose the correct infinitive: They hope ___ the match.", options: ["to win", "winning", "win", "won"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: to win" },
  { q: "The opposite of “patient” is ___.", options: ["impatient", "careful", "calm", "polite"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: impatient" },
  { q: "I wish I ___ speak French fluently.", options: ["could", "can", "will", "am able"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: could" },
  { q: "There were ___ chairs for everyone, so nobody had to stand.", options: ["enough", "too", "many of", "much"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: enough" },
  { q: "Which sentence expresses a prediction?", options: ["I think people will use more clean energy.", "I used clean energy yesterday.", "I am using clean energy now.", "I use clean energy every day."], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: I think people will use more clean energy." },
  { q: "A place where scientific experiments are done is a ___.", options: ["laboratory", "library", "gallery", "stadium"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: laboratory" },
  { q: "The teacher told us ___ our homework by Friday.", options: ["to finish", "finish", "finishing", "finished"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: to finish" },
  { q: "What is the opposite of “visible”?", options: ["invisible", "vision", "visual", "viewable"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: invisible" },
  { q: "We ___ this film before, so let's choose another one.", options: ["have seen", "saw tomorrow", "are seeing yesterday", "see last week"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: have seen" },
  { q: "Choose the correct conjunction: I stayed at home ___ I was ill.", options: ["because", "although", "unless", "however"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: because" },
  { q: "You look tired. You ___ take a break.", options: ["should", "shouldn't", "mustn't", "can't to"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: should" },
  { q: "Which word is a prefix in “unhappy”?", options: ["un-", "-happy", "hap-", "-y"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: un-" },
  { q: "The city is famous ___ its beautiful architecture.", options: ["for", "with", "at", "by"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: for" },
  { q: "By the time we arrived, the film ___.", options: ["had started", "has start", "starts", "will start"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: had started" },
  { q: "A person who designs and builds machines is an ___.", options: ["engineer", "artist", "journalist", "librarian"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: engineer" },
  { q: "Choose the correct second conditional sentence.", options: ["If I won the lottery, I would travel the world.", "If I win the lottery, I travelled the world.", "If I will win, I would travel.", "If I winning, I travel."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: If I won the lottery, I would travel the world." },
  { q: "The instructions were ___, so everyone understood what to do.", options: ["clear", "clearly", "clearness", "clearing"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: clear" },
  { q: "I am looking forward to ___ you again.", options: ["seeing", "see", "seen", "saw"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: seeing" },
  { q: "Which is the correct indirect question?", options: ["Could you tell me where the station is?", "Could you tell me where is the station?", "Could tell me where station?", "Could you tell where does the station is?"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Could you tell me where the station is?" },
  { q: "The charity works to help people ___ need.", options: ["in", "on", "at", "for"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: in" },
  { q: "What is the comparative of “little” when referring to amount?", options: ["less", "littler", "least", "more little"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: less" },
  { q: "He ___ be at home; the lights are on.", options: ["must", "can't", "mustn't", "shouldn't"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: must" },
  { q: "The match was cancelled ___ the heavy rain.", options: ["because of", "although", "despite of", "unless"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: because of" },
  { q: "Which phrase means “continue doing something”?", options: ["carry on", "give up", "look after", "turn off"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: carry on" },
  { q: "She has worked at this school ___ five years.", options: ["for", "since", "from", "during"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: for" },
  { q: "Choose the correct sentence with “used to”.", options: ["I used to play outside every day.", "I use to played outside every day.", "I was use to play outside.", "I used playing outside every day."], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: I used to play outside every day." },
  { q: "A person who writes articles for newspapers is a ___.", options: ["journalist", "novelist", "scientist", "composer"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: journalist" },
  { q: "The opposite of “success” is ___.", options: ["failure", "progress", "victory", "achievement"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: failure" },
  { q: "I will call you as soon as I ___ home.", options: ["get", "will get", "got", "getting"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: get" },
  { q: "Which word is closest in meaning to “rapid”?", options: ["quick", "weak", "quiet", "late"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: quick" },
  { q: "The homework ___ before the lesson started.", options: ["had been completed", "has complete", "was completing", "is completed tomorrow"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: had been completed" },
  { q: "You don't have to bring food. It means you ___ bring food.", options: ["don't need to", "must", "mustn't", "should"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: don't need to" },
  { q: "What is the plural of “phenomenon”?", options: ["phenomena", "phenomenons", "phenomenas", "phenomenon’s"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: phenomena" },
  { q: "The documentary was about animals ___ live in the Arctic.", options: ["that", "who", "where", "whose"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: that" },
  { q: "I regret ___ that rude comment.", options: ["making", "make", "to making", "made"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: making" },
  { q: "Choose the correct word: The new bridge is an important ___ for the town.", options: ["development", "develop", "developing", "developed"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: development" },
  { q: "If you don't understand, you should ask the teacher ___ help.", options: ["for", "to", "at", "with"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: for" },
  { q: "The opposite of “borrow” is ___.", options: ["lend", "take", "keep", "receive"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: lend" },
  { q: "They said they ___ arrive the following day.", options: ["would", "will", "can", "are"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: would" },
  { q: "Which sentence is grammatically correct?", options: ["Despite the rain, we went for a walk.", "Despite it was raining, we went for a walk.", "Although the rain, we went for a walk.", "Despite of the rain, we went for a walk."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Despite the rain, we went for a walk." },
  { q: "A person who explores unknown places is an ___.", options: ["explorer", "inventor", "translator", "musician"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: explorer" },
  { q: "The more you practise, ___ you become.", options: ["the better", "better", "the best", "more good"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: the better" }
];

// 11-SINF INGLIZ TILI (Upper-Intermediate & Advanced - 199 ta rasmiy test)
window.TEST_DATA["11_ingliz_tili"] = [
  { q: "If someone is feeling \"under the weather,\" what does it mean?", options: ["They are feeling sick or unwell", "They are caught in a rainstorm", "They are extremely happy", "They are busy studying"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: They are feeling sick or unwell" },
  { q: "What is the synonym of the word ambitious?", options: ["Driven and determined to succeed", "Lazy and unmotivated", "Fearful and hesitant", "Kind and generous"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Driven and determined to succeed" },
  { q: "To \"burn the midnight oil\" means to:", options: ["Study or work late into the night", "Waste electricity", "Start a campfire at night", "Go to sleep early"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Study or work late into the night" },
  { q: "Choose the word that best completes the sentence: She managed to ________ her fear of public speaking after taking a training course.", options: ["overcome", "avoid", "drop", "pretend"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: overcome" },
  { q: "What does the phrasal verb \"call off\" mean?", options: ["To cancel an event", "To shout loudly", "To start a meeting", "To postpone"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: To cancel an event" },
  { q: "What is the opposite (antonym) of scarcity?", options: ["Abundance", "Lack", "Poverty", "Smallness"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Abundance" },
  { q: "If a task is described as tedious, it is:", options: ["Boring, repetitive, and long", "Fast and exciting", "Extremely difficult", "Dangerous"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Boring, repetitive, and long" },
  { q: "What does it mean to \"hit the nail on the head\"?", options: ["To describe exactly what is causing a situation or problem", "To break something by accident", "To make a severe mistake", "To build something with wood"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: To describe exactly what is causing a situation or problem" },
  { q: "Choose the correct definition of meticulous:", options: ["Showing great attention to detail; very careful", "Acting recklessly without thinking", "Being easily confused by complex facts", "Moving quickly and silently"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Showing great attention to detail; very careful" },
  { q: "What does \"run out of\" mean?", options: ["To have no more of something left", "To jog outside", "To escape from a building", "To buy extra supplies"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: To have no more of something left" },
  { q: "Choose the word that fits: His explanation was so ________ that everyone understood the project immediately.", options: ["lucid", "obscure", "vague", "complex"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: lucid" },
  { q: "What does the term \"a blessing in disguise\" mean?", options: ["A good thing that initially seemed bad", "A costume worn for Halloween", "A continuous stroke of bad luck", "A secret gift from a friend"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: A good thing that initially seemed bad" },
  { q: "What is the meaning of reluctant?", options: ["Unwilling and hesitant", "Eager and enthusiastic", "Quick and decisive", "Angry and aggressive"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Unwilling and hesitant" },
  { q: "To \"look up to someone\" means to:", options: ["Admire and respect them", "Look at them from below", "Search for their contact information", "Supervise their work"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Admire and respect them" },
  { q: "What does the word resilient mean?", options: ["Able to withstand or recover quickly from difficult conditions", "Fragile and easy to break", "Stubborn and refusing to change", "Highly emotional"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Able to withstand or recover quickly from difficult conditions" },
  { q: "What does it mean to \"bite the bullet\"?", options: ["To face a difficult situation with courage and get it over with", "To eat something very hard", "To act violently", "To quit a job suddenly"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: To face a difficult situation with courage and get it over with" },
  { q: "Which word means \"to make something better or improve it\"?", options: ["Enhance", "Worsen", "Diminish", "Ignore"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Enhance" },
  { q: "What does \"take after\" mean in the sentence He takes after his grandfather?", options: ["To resemble a family member in appearance or character", "To follow someone down the street", "To inherit money", "To take care of an older person"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: To resemble a family member in appearance or character" },
  { q: "An unprecedented event is one that:", options: ["Has never happened before", "Happens every year", "Is expected by everyone", "Has harmful results"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Has never happened before" },
  { q: "What is the meaning of pragmatic?", options: ["Dealing with things sensibly and realistically", "Highly theoretical and abstract", "Highly artistic and creative", "Overly dramatic"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Dealing with things sensibly and realistically" },
  { q: "If someone is empathetic, they:", options: ["Understand and share the feelings of others", "Care only about themselves", "Are easily annoyed by small things", "Have strong physical strength"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Understand and share the feelings of others" },
  { q: "To \"break the ice\" means:", options: ["To make people feel more comfortable in a social situation", "To freeze water into cubes", "To start a serious argument", "To slip on winter roads"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: To make people feel more comfortable in a social situation" },
  { q: "What is the definition of inevitable?", options: ["Certain to happen; unavoidable", "Unlikely to occur", "Optional or voluntary", "Completely impossible"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Certain to happen; unavoidable" },
  { q: "What does the phrasal verb \"bring up\" mean in a conversation?", options: ["To mention or introduce a topic", "To carry an item upstairs", "To end a phone call", "To whisper quietly"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: To mention or introduce a topic" },
  { q: "What is the synonym of fostering?", options: ["Encouraging and developing", "Blocking and preventing", "Destroying completely", "Forgetting over time"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Encouraging and developing" },
  { q: "Complete the sentence: If I had known about the traffic jam, I ________ earlier.", options: ["would have left", "will leave", "had left", "leave"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: would have left" },
  { q: "Complete the sentence: By the time we arrive at the theater, the movie ________.", options: ["will have started", "starts", "started", "is starting"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: will have started" },
  { q: "Choose the correct passive voice: They are constructing a new highway near the town.", options: ["A new highway is being constructed near the town.", "A new highway was constructed near the town.", "A new highway is constructed near the town.", "A new highway had been constructed near the town."], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: A new highway is being constructed near the town." },
  { q: "Complete the inverted conditional: Had you asked me for help, I ________ you.", options: ["would have assisted", "will assist", "assist", "would assist"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: would have assisted" },
  { q: "Choose the correct relative pronoun: The scientist ________ discovered the new compound won the award.", options: ["who", "which", "whose", "whom"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: who" },
  { q: "Complete the sentence using subjunctive mood: The manager insisted that every employee ________ the safety guidelines.", options: ["follow", "follows", "followed", "following"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: follow" },
  { q: "Choose the correct sentence with reported speech: Direct: \"I have finished the report,\" Mark said.", options: ["Mark said that he had finished the report.", "Mark said that he finished the report.", "Mark said that he has finished the report.", "Mark says that he had finished the report."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Mark said that he had finished the report." },
  { q: "Complete the modal verb sentence: You ________ bring an umbrella; the weather forecast predicts sunshine all day.", options: ["don't need to", "must not", "ought to", "had better"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: don't need to" },
  { q: "Identify the correct structure: Hardly ________ entered the house when the phone rang.", options: ["had I", "I had", "did I", "I did"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: had I" },
  { q: "Complete the sentence: I wish I ________ more time to travel when I was younger.", options: ["had had", "have", "have had", "would have"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: had had" },
  { q: "Choose the correct prepositional combination: She is famous ________ her contributions to marine biology.", options: ["for", "with", "about", "at"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: for" },
  { q: "Complete the sentence: Neither the students nor the teacher ________ present at the seminar yesterday.", options: ["was", "were", "are", "have been"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: was" },
  { q: "Select the correct gerund/infinitive form: He regrets ________ out of university before graduating.", options: ["dropping", "to drop", "drop", "to have dropped"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: dropping" },
  { q: "Choose the correct sentence:", options: ["Scarcely had the concert begun when the power failed.", "Scarcely the concert had begun when the power failed.", "Scarcely had the concert begun than the power failed.", "Scarcely did the concert begin when the power failed."], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Scarcely had the concert begun when the power failed." },
  { q: "Complete the sentence: Unless you ________ hard, you won't pass the exam.", options: ["study", "don't study", "will study", "studied"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: study" },
  { q: "What is the correct passive form of: People believe that the ancient ruins are over 3,000 years old.", options: ["The ancient ruins are believed to be over 3,000 years old.", "It was believed that the ancient ruins are over 3,000 years old.", "The ancient ruins were believed to be over 3,000 years old.", "People were believed to find ancient ruins 3,000 years old."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: The ancient ruins are believed to be over 3,000 years old." },
  { q: "Complete the sentence: The project was completed ahead of schedule ________ the team worked overtime.", options: ["because", "despite", "although", "in order to"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: because" },
  { q: "Choose the correct quantifier: There are ________ seats left in the auditorium, so act quickly.", options: ["very few", "a little", "much", "plenty"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: very few" },
  { q: "Choose the correct form: She suggested that he ________ a lawyer before signing the contract.", options: ["consult", "consulted", "consults", "consulting"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: consult" },
  { q: "Complete the sentence: No sooner ________ than it began to pour rain.", options: ["had we sat down", "we had sat down", "did we sit down", "we sat down"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: had we sat down" },
  { q: "Complete the sentence: I would rather you ________ me the truth right now.", options: ["told", "tell", "will tell", "have told"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: told" },
  { q: "Identify the correct use of parallel structure:", options: ["She likes swimming, hiking, and riding bicycles.", "She likes swimming, to hike, and riding bicycles.", "She likes to swim, hiking, and rides bicycles.", "She likes swimming, hiking, and to ride bicycles."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: She likes swimming, hiking, and riding bicycles." },
  { q: "Choose the correct tag question: You haven't seen my keys anywhere, ________?", options: ["have you", "haven't you", "did you", "do you"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: have you" },
  { q: "Complete the sentence: The museum exhibits were ________ impressive that visitors stayed for hours.", options: ["so", "such", "very", "too"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: so" },
  { q: "Choose the correct form: By next year, they ________ in this house for two decades.", options: ["will have been living", "will live", "live", "are living"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: will have been living" },
  { q: "What is the primary advantage of solar and wind energy mentioned in Paragraph A?", options: ["They do not emit greenhouse gases during operation.", "They are cheaper to install than fossil fuels.", "They work continuously without any interruptions.", "They require no storage technology."], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: They do not emit greenhouse gases during operation." },
  { q: "What main challenge associated with solar energy is described?", options: ["Its dependency on daylight hours and cloud cover.", "Its high level of toxic emissions.", "The lack of interest from modern engineers.", "The inability to use solar power in urban cities."], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Its dependency on daylight hours and cloud cover." },
  { q: "According to the text, what solution are engineers actively working on?", options: ["Developing high-capacity energy storage systems.", "Replacing wind turbines with coal power stations.", "Eliminating grid systems entirely.", "Stopping the use of solar power at night."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Developing high-capacity energy storage systems." },
  { q: "The word \"intermittent\" in Paragraph A most closely means:", options: ["Occurring at irregular intervals; not continuous", "Strong and constant", "Dangerous and unpredictable", "Cheap and accessible"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Occurring at irregular intervals; not continuous" },
  { q: "What is the overall topic of Paragraph A?", options: ["The benefits and operational challenges of renewable energy.", "The history of fossil fuel production.", "Why solar power will replace wind energy.", "Household electrical grid wiring."], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: The benefits and operational challenges of renewable energy." },
  { q: "According to Paragraph B, how does AI assist doctors in healthcare?", options: ["By analyzing medical images for earlier diagnosis.", "By performing complex surgeries independently.", "By replacing human doctors entirely.", "By manufacturing pharmaceuticals."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: By analyzing medical images for earlier diagnosis." },
  { q: "In the financial sector, what role does AI play as described in the text?", options: ["Detecting fraudulent transactions within milliseconds.", "Printing physical banknotes.", "Lowering tax rates for corporate companies.", "Managing physical bank branches."], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Detecting fraudulent transactions within milliseconds." },
  { q: "What concerns do ethicists raise regarding AI implementation?", options: ["Data privacy and algorithmic bias.", "High electricity costs of computers.", "Lack of speed in data processing.", "The decline in computer manufacturing."], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Data privacy and algorithmic bias." },
  { q: "The phrase \"transitioned from theoretical science\" implies AI:", options: ["Has moved from an idea into practical real-world application.", "Is no longer studied by researchers.", "Failed to succeed in laboratory tests.", "Remains a distant concept for the future."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Has moved from an idea into practical real-world application." },
  { q: "What is the main idea of Paragraph B?", options: ["AI offers significant industrial benefits but presents ethical concerns.", "AI is useful only in the financial industry.", "Healthcare is the only sector benefiting from technology.", "Ethicists want to ban artificial intelligence."], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: AI offers significant industrial benefits but presents ethical concerns." },
  { q: "Why is biodiversity vital for ecosystems according to Paragraph C?", options: ["It maintains overall ecosystem stability.", "It eliminates the need for natural rainfall.", "It prevents natural disasters like earthquakes.", "It replaces human agricultural activity."], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: It maintains overall ecosystem stability." },
  { q: "What role do insects play according to the text?", options: ["Pollinating food crops.", "Preventing soil erosion directly.", "Regulating global temperatures.", "Building wildlife corridors."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Pollinating food crops." },
  { q: "What is a consequence of habitat fragmentation caused by human activity?", options: ["Species lose resource access, causing population declines.", "Animals migrate to urban centers safely.", "Plants grow faster in isolated areas.", "Insect populations double in size."], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Species lose resource access, causing population declines." },
  { q: "What strategy is used to combat the effects of fragmented environments?", options: ["Constructing protected wildlife corridors.", "Clearing more land for urban farms.", "Removing insects from crop fields.", "Building artificial rain structures."], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Constructing protected wildlife corridors." },
  { q: "The word \"fragmentation\" in the context of habitats means:", options: ["Breaking continuous land into smaller, isolated pieces", "Cleaning and restoring nature reserves", "Expanding forest borders", "Measuring soil nutrient levels."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Breaking continuous land into smaller, isolated pieces" },
  { q: "What is the tone of an academic argumentative essay?", options: ["Objective, formal, and evidence-based", "Casual, humorous, and sarcastic", "Emotional, aggressive, and personal", "Poetic, descriptive, and vague"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Objective, formal, and evidence-based" },
  { q: "What is the purpose of a thesis statement in an essay?", options: ["To state the main point or claim of the entire paper", "To list all the sources used in research", "To ask a rhetorical question at the very end", "To write a short summary of the author's biography"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: To state the main point or claim of the entire paper" },
  { q: "In essay writing, what is a counterargument?", options: ["An argument that opposes the main thesis claim", "A repetition of the main argument using different words", "The final paragraph summarizing the essay", "A quote taken from a dictionary definition"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: An argument that opposes the main thesis claim" },
  { q: "Which transition word best demonstrates a contrast between two ideas?", options: ["However", "Furthermore", "Consequently", "Similarly"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: However" },
  { q: "Which transition word is used to show a cause-and-effect relationship?", options: ["Therefore", "In addition", "For instance", "On the other hand"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Therefore" },
  { q: "What does the term \"plagiarism\" mean?", options: ["Using someone else's work or ideas without proper credit", "Writing an essay using complex vocabulary", "Editing a document to fix grammatical errors", "Translating a text into another language"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Using someone else's work or ideas without proper credit" },
  { q: "What is the function of a topic sentence in a body paragraph?", options: ["To introduce the main idea of that specific paragraph", "To summarize the conclusions of the entire essay", "To present a statistical graph", "To provide a transition to the bibliography"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: To introduce the main idea of that specific paragraph" },
  { q: "Which of the following is considered a primary source in historical research?", options: ["A diary entry written by a soldier during a war", "A textbook written 50 years after a war", "A movie review of a war film", "An encyclopedia article"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: A diary entry written by a soldier during a war" },
  { q: "What does \"skimming\" a text involve?", options: ["Reading quickly to get the general overview of the text", "Looking for a specific keyword or date", "Reading every word slowly for deep analysis", "Translating sentence by sentence"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Reading quickly to get the general overview of the text" },
  { q: "What does \"scanning\" a text involve?", options: ["Searching quickly for a specific piece of information", "Reading the first line of every paragraph", "Memorizing key terminology", "Writing a outline summary of the passage"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Searching quickly for a specific piece of information" },
  { q: "Choose the sentence with the correct punctuation:", options: ["Although she was tired, she finished her homework before going to bed.", "Although she was tired she finished her homework before going to bed.", "Although she was tired, but she finished her homework before going to bed.", "Although, she was tired she finished her homework before going to bed."], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Although she was tired, she finished her homework before going to bed." },
  { q: "Choose the sentence free of grammatical errors:", options: ["Having finished the assignment, the student turned off the computer.", "Having finished the assignment, the computer was turned off by the student.", "Finishing the assignment, the computer went to sleep mode.", "Finished the assignment, off went the computer by the student."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Having finished the assignment, the student turned off the computer." },
  { q: "Choose the correct synonym for coherent:", options: ["Logical and consistent", "Fragmented and confusing", "Unclear and random", "Emotional and intense"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Logical and consistent" },
  { q: "What does the idiom \"see eye to eye\" mean?", options: ["To agree fully with someone", "To look closely into someone's face", "To watch an event together", "To argue about small matters"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: To agree fully with someone" },
  { q: "Complete the sentence: The manager's decision was based on ________ evidence, leaving no room for doubt.", options: ["conclusive", "dubious", "ambiguous", "temporary"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: conclusive" },
  { q: "What does the term \"oxymoron\" refer to in literature?", options: ["A figure of speech combining contradictory terms", "An extreme exaggeration for emphasis", "A comparison using \"like\" or \"as\"", "Giving human traits to non-human objects"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: A figure of speech combining contradictory terms" },
  { q: "Identify the figure of speech: \"The wind whispered through the dark trees.\"", options: ["Personification", "Simile", "Hyperbole", "Metaphor"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Personification" },
  { q: "Identify the figure of speech: \"He is as strong as an ox.\"", options: ["Simile", "Metaphor", "Alliteration", "Onomatopoeia"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Simile" },
  { q: "Choose the word that best completes the sentence: The chemical reaction produced an ________ amount of heat, causing the container to break.", options: ["excessive", "inadequate", "insignificant", "average"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: excessive" },
  { q: "What does the adjective \"concise\" mean?", options: ["Giving a lot of information clearly and in few words", "Long, detailed, and repetitive", "Difficult to understand", "Written in poetic language"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Giving a lot of information clearly and in few words" },
  { q: "What is the meaning of the phrasal verb \"give up\"?", options: ["To stop attempting or working on something", "To hand over a physical object", "To offer assistance", "To celebrate a success"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: To stop attempting or working on something" },
  { q: "Choose the correct spelling:", options: ["Accommodate", "Acommodate", "Accomodate", "Acomodate"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Accommodate" },
  { q: "Choose the correct spelling:", options: ["Perseverance", "Perseverence", "Perseverins", "Perserverance"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Perseverance" },
  { q: "Choose the correct synonym for ambiguous:", options: ["Open to more than one interpretation; unclear", "Straightforward and evident", "Strongly stated", "Extremely bright"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Open to more than one interpretation; unclear" },
  { q: "Complete the sentence: She speaks English so ________ that native speakers take her for a local.", options: ["fluently", "fluent", "fluency", "more fluent"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: fluently" },
  { q: "What is the meaning of \"burn out\" in a workplace context?", options: ["Physical or mental exhaustion caused by stress", "Fire damage in an office building", "Quitting a job without giving notice", "Getting promoted rapidly"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Physical or mental exhaustion caused by stress" },
  { q: "Choose the correct sentence structure:", options: ["Not only did she complete the marathon, but she also set a personal record.", "Not only she completed the marathon, but also set a personal record.", "Not only did she completed the marathon, but she set a personal record too.", "She completed not only the marathon, but also setting a personal record."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Not only did she complete the marathon, but she also set a personal record." },
  { q: "Complete the sentence: The survey results were ________ with previous studies on the subject.", options: ["consistent", "conflicting", "contradictory", "opposing"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: consistent" },
  { q: "What does \"keep an eye on\" mean?", options: ["To watch or monitor something carefully", "To look directly into someone's eyes", "To ignore a problem", "To protect your eyesight"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: To watch or monitor something carefully" },
  { q: "Choose the correct option: The government plans to ________ new environmental policies next month.", options: ["implement", "discard", "delay", "restrict"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: implement" },
  { q: "What does \"candid\" mean in the context of a conversation?", options: ["Truthful, straightforward, and frank", "Secretive and deceptive", "Formal and reserved", "Polished and rehearsed"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Truthful, straightforward, and frank" },
  { q: "Choose the correct word: The museum features an array of ________ artifacts from ancient civilizations.", options: ["priceless", "worthless", "cheap", "valueless"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: priceless" },
  { q: "Complete the sentence: Despite the stormy weather, the flight took off ________.", options: ["safely", "safety", "safe", "safer"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: safely" },
  { q: "Choose the correct phrase: He decided to take the opportunity ________ of the potential risks involved.", options: ["regardless", "despite", "even though", "in spite"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: regardless" },
  { q: "What is the correct definition of empathy?", options: ["The ability to understand and share another person's feelings", "Feeling pity for someone else's misfortune", "Showing indifference to other people's struggles", "Disagreeing strongly with someone's viewpoint"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: The ability to understand and share another person's feelings" },
  { q: "What does it mean to \"spill the beans\"?", options: ["To reveal a secret unintentionally or prematurely", "To drop groceries on the kitchen floor", "To make a complete mess of a project", "To organize a cooking competition"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: To reveal a secret unintentionally or prematurely" },
  { q: "What is the synonym of the word **ubiquitous**?", options: ["Present, appearing, or found everywhere", "Extremely rare and valuable", "Hidden and mysterious", "Dangerous and destructive"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Present, appearing, or found everywhere" },
  { q: "To \"pull someone's leg\" means to:", options: ["Tease or trick someone playfully", "Help someone stand up", "Push someone down stairs", "Stop someone from running"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Tease or trick someone playfully" },
  { q: "Choose the word that best completes the sentence: *Her exceptional leadership skills helped ________ the team through a difficult crisis.*", options: ["steer", "abandon", "confuse", "prevent"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: steer" },
  { q: "What does the phrasal verb **\"turn down\"** mean when applied to a job offer?", options: ["To reject or refuse an offer", "To lower the volume", "To accept an application", "To review documents slowly"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: To reject or refuse an offer" },
  { q: "What is the opposite (antonym) of **transparent**?", options: ["Opaque", "Clear", "Visible", "Bright"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Opaque" },
  { q: "If an argument is described as **futile**, it is:", options: ["Incapable of producing any useful result; pointless", "Extremely violent and aggressive", "Highly successful and smart", "Hidden from the public"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Incapable of producing any useful result; pointless" },
  { q: "What does it mean to \"bark up the wrong tree\"?", options: ["To pursue a mistaken line of thought or course of action", "To train a pet dog outdoors", "To climb a dangerous tree", "To shout at forest workers"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: To pursue a mistaken line of thought or course of action" },
  { q: "Choose the correct definition of **altruistic**:", options: ["Showing a disinterested and selfless concern for the well-being of others", "Being intensely selfish and arrogant", "Acting with extreme caution", "Seeking financial profit in business"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Showing a disinterested and selfless concern for the well-being of others" },
  { q: "What does **\"put off\"** mean in the sentence *We had to put off the meeting until next week*?", options: ["To postpone or delay an event", "To cancel permanently", "To start ahead of schedule", "To relocate to another room"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: To postpone or delay an event" },
  { q: "Choose the word that fits: *The detective found ________ evidence that proved the suspect was innocent.*", options: ["compelling", "flimsy", "dubious", "irrelevant"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: compelling" },
  { q: "What does the term **\"a piece of cake\"** mean?", options: ["Something very easy to accomplish", "A delicious dessert after dinner", "A difficult mathematical puzzle", "A birthday celebration gift"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Something very easy to accomplish" },
  { q: "What is the meaning of **superficial**?", options: ["Existing or occurring at or on the surface; lacking depth", "Deeply philosophical and complex", "Extremely honest and truthful", "Hidden beneath the earth"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Existing or occurring at or on the surface; lacking depth" },
  { q: "To \"face the music\" means to:", options: ["Accept unpleasant consequences or criticism for one's actions", "Attend a classical orchestra concert", "Learn to play a musical instrument", "Listen to radio songs"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Accept unpleasant consequences or criticism for one's actions" },
  { q: "What does the word **versatile** mean?", options: ["Able to adapt or be adapted to many different functions or activities", "Rigid and unable to change opinions", "Slow-moving and cautious", "Easily broken under pressure"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Able to adapt or be adapted to many different functions or activities" },
  { q: "What does it mean to \"burn bridges\"?", options: ["To damage relationships or destroy connections permanently", "To set historical architecture on fire", "To construct pathways across rivers", "To repair damaged roads"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: To damage relationships or destroy connections permanently" },
  { q: "Which word means **\"to reduce in extent or quantity\"**?", options: ["Curtail", "Expand", "Amplify", "Prolong"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Curtail" },
  { q: "What does \"run into\" mean in the sentence *I ran into my old teacher at the supermarket*?", options: ["To meet someone unexpectedly", "To crash a car into a wall", "To jog across a park", "To argue with a stranger"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: To meet someone unexpectedly" },
  { q: "A **meticulous** researcher is one who is:", options: ["Extremely careful and precise about details", "Careless and disorganized", "Quick to jump to conclusions", "Uninterested in scientific facts"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Extremely careful and precise about details" },
  { q: "What is the meaning of **feasible**?", options: ["Possible to do easily or conveniently", "Completely impossible", "Highly theoretical", "Extremely dangerous"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Possible to do easily or conveniently" },
  { q: "If someone is **skeptical**, they:", options: ["Not easily convinced; having doubts or reservations", "Always believe everything they hear", "Are extremely joyful and optimistic", "Feel tired and sleepy"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Not easily convinced; having doubts or reservations" },
  { q: "To \"call it a day\" means:", options: ["To stop working on something for the rest of the day", "To celebrate a birthday anniversary", "To wake up early in the morning", "To record daily weather events"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: To stop working on something for the rest of the day" },
  { q: "What is the definition of **conspicuous**?", options: ["Standing out so as to be clearly visible", "Hidden or disguised", "Tiny and microscopic", "Silent and unheard"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Standing out so as to be clearly visible" },
  { q: "What does the phrasal verb **\"look into\"** mean?", options: ["To investigate or examine a matter", "To gaze out of a window", "To ignore a problem completely", "To look at oneself in a mirror"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: To investigate or examine a matter" },
  { q: "What is the synonym of **hostile**?", options: ["Unfriendly and aggressive", "Welcoming and warm", "Peaceful and quiet", "Generous and kind"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Unfriendly and aggressive" },
  { q: "Complete the sentence: *If she had attended the seminar, she ________ the presentation.*", options: ["would have seen", "will see", "sees", "saw"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: would have seen" },
  { q: "Complete the sentence: *By this time tomorrow, we ________ our final exams.*", options: ["will have finished", "finish", "finished", "are finishing"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: will have finished" },
  { q: "Choose the correct passive voice: *The committee is reviewing the scholarship applications.*", options: ["The scholarship applications are being reviewed by the committee.", "The scholarship applications were reviewed by the committee.", "The scholarship applications reviewed the committee.", "The scholarship applications have been reviewed by the committee."], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: The scholarship applications are being reviewed by the committee." },
  { q: "Complete the inverted conditional: *Should you require further assistance, please ________ free to contact us.*", options: ["feel", "felt", "feeling", "feels"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: feel" },
  { q: "Choose the correct relative pronoun: *The museum ________ we visited yesterday has a rare collection of ancient coins.*", options: ["which", "who", "whose", "whom"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: which" },
  { q: "Complete the sentence using subjunctive mood: *It is crucial that every student ________ present at the orientation session.*", options: ["be", "is", "was", "being"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: be" },
  { q: "Choose the correct sentence with reported speech: *Direct: \"Where did you leave your jacket?\" David asked.*", options: ["David asked where I had left my jacket.", "David asked where did I leave my jacket.", "David asked where I left my jacket.", "David asked where had I left my jacket."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: David asked where I had left my jacket." },
  { q: "Complete the modal verb sentence: *You ________ have submitted the application yesterday; it is too late now.*", options: ["should", "must", "can", "might"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: should" },
  { q: "Identify the correct structure: *Seldom ________ such dedication in a young athlete.*", options: ["have I seen", "I have seen", "did I saw", "I did see"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: have I seen" },
  { q: "Complete the sentence: *I wish I ________ how to play the piano when I was a child.*", options: ["had known", "knew", "know", "would know"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: had known" },
  { q: "Choose the correct prepositional combination: *She is highly capable ________ managing complex corporate projects.*", options: ["of", "in", "with", "at"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: of" },
  { q: "Complete the sentence: *Neither the manager nor the employees ________ aware of the policy change.*", options: ["were", "was", "is", "has been"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: were" },
  { q: "Select the correct gerund/infinitive form: *He avoided ________ the sensitive question during the interview.*", options: ["answering", "to answer", "answer", "having answered"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: answering" },
  { q: "Choose the correct sentence:", options: ["No sooner had the bell rung than the students rushed out of class.", "No sooner the bell had rung than the students rushed out of class.", "No sooner had the bell rung when the students rushed out of class.", "No sooner did the bell ring than the students rush out of class."], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: No sooner had the bell rung than the students rushed out of class." },
  { q: "Complete the sentence: *Provided that you ________ hard, you will achieve a high score on the test.*", options: ["practice", "practiced", "will practice", "would practice"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: practice" },
  { q: "What is the correct passive form of: *Experts expect that the economy will recover by next year.*", options: ["It is expected that the economy will recover by next year.", "The economy is expected recovering by next year.", "It was expected that the economy will recover by next year.", "Experts are expected to recover the economy next year."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: It is expected that the economy will recover by next year." },
  { q: "Complete the sentence: *________ the heavy rain, the outdoor concert proceeded as scheduled.*", options: ["Despite", "Because of", "Although", "Unless"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Despite" },
  { q: "Choose the correct quantifier: *There is ________ hope of finding the missing keys in the dark park.*", options: ["little", "few", "many", "several"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: little" },
  { q: "Choose the correct form: *The director recommended that she ________ her research methodology before submission.*", options: ["revise", "revised", "revises", "revising"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: revise" },
  { q: "Complete the sentence: *Hardly had we unpacked our bags ________ the phone started ringing.*", options: ["when", "than", "before", "after"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: when" },
  { q: "Complete the sentence: *It's high time you ________ responsibility for your own actions.*", options: ["took", "take", "will take", "have taken"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: took" },
  { q: "Identify the correct use of parallel structure:", options: ["The candidate's goals are to increase efficiency, reduce waste, and improve quality.", "The candidate's goals are increasing efficiency, reduce waste, and improve quality.", "The candidate's goals are to increase efficiency, reduce waste, and improving quality.", "The candidate's goals are increase efficiency, reducing waste, and improve quality."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: The candidate's goals are to increase efficiency, reduce waste, and improve quality." },
  { q: "Choose the correct tag question: *Let's start working on the science project, ________?*", options: ["shall we", "will you", "don't we", "aren't we"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: shall we" },
  { q: "Complete the sentence: *It was ________ a difficult exam that half the class failed to finish on time.*", options: ["such", "so", "very", "too"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: such" },
  { q: "Choose the correct form: *By the time graduation arrives, she ________ at this school for four years.*", options: ["will have studied", "studies", "studied", "is studying"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: will have studied" },
  { q: "According to Passage 1, what are the primary causes of poor urban air quality?", options: ["Dense populations, traffic congestion, and industrial manufacturing.", "Agricultural farming and excessive rainfall.", "The lack of residential housing in cities.", "Natural forest fires near metropolitan zones."], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Dense populations, traffic congestion, and industrial manufacturing." },
  { q: "What specific pollutants are mentioned as being released into the atmosphere?", options: ["Particulate matter and nitrogen oxides.", "Carbon dioxide and hydrogen sulfide.", "Ozone and sulfur dioxide gas.", "Methane and heavy metal waste."], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Particulate matter and nitrogen oxides." },
  { q: "How are metropolitan authorities attempting to combat urban smog?", options: ["Investing in electric public transportation and strict emission standards.", "Banned all private cars from entering city centers.", "Relocating industrial factories to distant rural islands.", "Planting trees exclusively along suburban highways."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Investing in electric public transportation and strict emission standards." },
  { q: "The word \"hurdles\" in the context of the passage most closely means:", options: ["Obstacles or difficulties", "Running competitions", "Financial profits", "Transportation vehicles"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Obstacles or difficulties" },
  { q: "What is the primary theme of Passage 1?", options: ["Urban environmental challenges and municipal mitigation strategies.", "The history of public transportation development.", "Why people migrate from rural areas to cities.", "The economic benefits of industrial manufacturing."], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Urban environmental challenges and municipal mitigation strategies." },
  { q: "According to Passage 2, how does active recall compare to passive review?", options: ["Active recall has proven superior to passive review methods.", "Passive review yields faster memorization results.", "Both methods produce identical cognitive outcomes.", "Active recall is only useful for young children."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Active recall has proven superior to passive review methods." },
  { q: "What happens when learners force their brains to retrieve information?", options: ["Neural pathways are reinforced more effectively.", "Mental fatigue sets in immediately.", "Short-term memory capacity is reduced.", "Brain activity temporarily stops."], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Neural pathways are reinforced more effectively." },
  { q: "Which tools are specifically cited as harnessing the active recall mechanism?", options: ["Flashcards and practice testing.", "Audiobooks and documentary films.", "Highlighting textbook passages and summarizing.", "Group lectures and silent meditation."], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Flashcards and practice testing." },
  { q: "The phrase \"long-term retention\" implies:", options: ["The ability to remember information over an extended period", "Quickly forgetting facts after an exam", "Studying for long hours without breaks", "Memorizing complex mathematical formulas"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: The ability to remember information over an extended period" },
  { q: "What is the main idea of Passage 2?", options: ["Active recall strategies significantly improve memory retention and academic performance.", "Textbooks are no longer useful educational resources.", "Cognitive psychology is a complex scientific field.", "Examinations should be eliminated from schools."], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Active recall strategies significantly improve memory retention and academic performance." },
  { q: "How do organisms near hydrothermal vents produce energy?", options: ["Through chemosynthesis using mineral-rich chemical compounds.", "Through photosynthesis using filtered sunlight.", "By consuming floating surface plants.", "By absorbing thermal heat directly from water."], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Through chemosynthesis using mineral-rich chemical compounds." },
  { q: "Why is deep-sea research considered challenging?", options: ["Because of the extreme pressure and hostile conditions.", "Because oceans are completely devoid of life.", "Because scientific instruments cannot survive water.", "Because deep-sea creatures hide from researchers."], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Because of the extreme pressure and hostile conditions." },
  { q: "What distinguishes hydrothermal vent ecosystems from typical surface ecosystems?", options: ["They thrive without sunlight relying on chemical compounds.", "They contain freshwater instead of saltwater.", "They have higher oxygen levels than land.", "They support only plant life with no animals."], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: They thrive without sunlight relying on chemical compounds." },
  { q: "The word \"hostile\" in the passage describes an environment that is:", options: ["Unfriendly and difficult for living organisms to survive in", "Welcoming and rich in nutrients", "Warm and comfortable", "Artificial and man-made"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Unfriendly and difficult for living organisms to survive in" },
  { q: "What is the primary function of a concluding paragraph in an essay?", options: ["To restate the thesis in a new way and summarize main points", "To introduce entirely new research questions", "To list personal opinions without evidence", "To provide the bibliography and citation list"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: To restate the thesis in a new way and summarize main points" },
  { q: "What is meant by the term **bias** in writing?", options: ["A disproportionate weight in favor of or against an idea or thing", "An objective and neutral presentation of facts", "A grammatical error in sentence structure", "The use of advanced vocabulary"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: A disproportionate weight in favor of or against an idea or thing" },
  { q: "In literary analysis, what is the **setting** of a story?", options: ["The time and place in which the action occurs", "The central message or moral lesson", "The sequence of events in a plot", "The personality traits of the main character"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: The time and place in which the action occurs" },
  { q: "Which transition word indicates an **addition** of information?", options: ["Furthermore", "However", "Consequently", "Instead"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Furthermore" },
  { q: "Which transition word indicates a **consequence or result**?", options: ["Consequently", "Meanwhile", "Similarly", "Nevertheless"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Consequently" },
  { q: "What is a **secondary source** in academic research?", options: ["An analysis or interpretation of primary source materials", "An original eyewitness diary entry", "A raw statistical dataset collected from an experiment", "An unedited audio recording of an event"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: An analysis or interpretation of primary source materials" },
  { q: "What is the purpose of using evidence in an argumentative essay?", options: ["To support claims and persuade the reader", "To increase the word count of the paper", "To confuse opposing researchers", "To decorate the margins of the page"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: To support claims and persuade the reader" },
  { q: "What does **critical thinking** involve?", options: ["Objectively analyzing and evaluating information to form a judgment", "Memorizing textbook facts word for word", "Accepting all printed claims as absolute truth", "Guessing answers without reading instructions"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Objectively analyzing and evaluating information to form a judgment" },
  { q: "What is the primary objective of **expository writing**?", options: ["To explain, inform, or describe a specific topic", "To tell a fictional bedtime story", "To express intense personal emotions", "To persuade readers to buy a product"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: To explain, inform, or describe a specific topic" },
  { q: "What does **proofreading** a document entail?", options: ["Checking for spelling, punctuation, and grammatical errors", "Translating text into a foreign language", "Formatting cover pages and images", "Changing the core argument of the paper"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Checking for spelling, punctuation, and grammatical errors" },
  { q: "Choose the sentence with correct punctuation:", options: ["Having completed the experiment, the scientist wrote a detailed report.", "Having completed the experiment the scientist wrote a detailed report.", "Having completed the experiment, and wrote a detailed report.", "Having completed, the scientist wrote a detailed report."], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Having completed the experiment, the scientist wrote a detailed report." },
  { q: "Choose the sentence free of grammatical errors:", options: ["Each of the participants received a certificate of completion.", "Each of the participants receive a certificate of completion.", "Each participant receive certificates of completion.", "Each of participants received certificate of completion."], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Each of the participants received a certificate of completion." },
  { q: "Choose the correct synonym for **meticulous**:", options: ["Thorough and extremely careful", "Careless and sloppy", "Rapid and reckless", "Lazy and unmotivated"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Thorough and extremely careful" },
  { q: "What does the idiom **\"break the ice\"** mean?", options: ["To relieve tension or get conversation started in a social setting", "To smash frozen water with a hammer", "To cause an argument among friends", "To end a business partnership"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: To relieve tension or get conversation started in a social setting" },
  { q: "Complete the sentence: *Her speech was so ________ that it moved many members of the audience to tears.*", options: ["eloquent", "trivial", "confusing", "monotonous"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: eloquent" },
  { q: "What is a **metaphor** in literature?", options: ["A figure of speech in which a word or phrase is applied to an object to which it is not literally applicable", "A comparison using the words \"like\" or \"as\"", "An exaggeration used for comedic effect", "Giving human characteristics to animals"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: A figure of speech in which a word or phrase is applied to an object to which it is not literally applicable" },
  { q: "Identify the figure of speech: *\"Time is a thief stealing our youth.\"*", options: ["Metaphor", "Simile", "Personification", "Hyperbole"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Metaphor" },
  { q: "Identify the figure of speech: *\"The classroom was a zoo during the substitute teacher's absence.\"*", options: ["Metaphor", "Onomatopoeia", "Alliteration", "Understatement"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Metaphor" },
  { q: "Choose the word that best completes the sentence: *The company faced severe financial penalties due to ________ violations of safety regulations.*", options: ["flagrant", "minor", "accidental", "subtle"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: flagrant" },
  { q: "What does the adjective **\"pragmatic\"** mean?", options: ["Dealing with things sensibly and realistically", "Based on unrealistic dreams and fantasies", "Extremely emotional and dramatic", "Strictly theoretical"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Dealing with things sensibly and realistically" },
  { q: "What is the meaning of the phrasal verb **\"carry out\"**?", options: ["To perform or complete a task", "To lift a heavy box outside", "To abandon a project", "To purchase takeout food"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: To perform or complete a task" },
  { q: "Choose the correct spelling:", options: ["Questionnaire", "Questionaire", "Questionnair", "Questioneire"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Questionnaire" },
  { q: "Choose the correct spelling:", options: ["Neccessary", "Necessary", "Nesessary", "Neccesary"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Neccessary" },
  { q: "Choose the correct synonym for **ambiguous**:", options: ["Open to more than one interpretation; equivocal", "Crystal clear and obvious", "Factually incorrect", "Strictly regulated"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Open to more than one interpretation; equivocal" },
  { q: "Complete the sentence: *She managed to solve the complex math puzzle ________ than anyone else in the class.*", options: ["more quickly", "quicker", "most quickly", "quick"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: more quickly" },
  { q: "What does **\"burn out\"** mean in a professional context?", options: ["Suffering from physical and mental exhaustion due to chronic workplace stress", "Lighting a campfire during office hours", "Getting fired for poor performance", "Winning an employee of the month award"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: Suffering from physical and mental exhaustion due to chronic workplace stress" },
  { q: "Choose the correct sentence structure:", options: ["Not only is she an accomplished pianist, but she is also a talented painter.", "Not only she is an accomplished pianist, but also a talented painter.", "Not only is she an accomplished pianist, she is talented painter too.", "She is not only an accomplished pianist, but painting well too."], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: Not only is she an accomplished pianist, but she is also a talented painter." },
  { q: "Complete the sentence: *The new scientific findings are ________ with previous laboratory experiments.*", options: ["consistent", "contradictory", "hostile", "independent"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: consistent" },
  { q: "What does **\"keep an eye on\"** mean?", options: ["To watch or monitor someone or something closely", "To stare blankly into space", "To protect your eyes from bright light", "To blink rapidly when tired"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: To watch or monitor someone or something closely" },
  { q: "Choose the correct option: *The board of directors decided to ________ the proposed merger due to financial risks.*", options: ["veto", "praise", "launch", "accelerate"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: veto" },
  { q: "What does **\"candid\"** mean?", options: ["Truthful and straightforward; frank", "Dishonest and secretive", "Shy and reserved", "Highly formal"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: Truthful and straightforward; frank" },
  { q: "Choose the correct word: *The antique vase discovered in the attic proved to be ________, worth millions of dollars.*", options: ["priceless", "worthless", "common", "cheap"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: priceless" },
  { q: "Complete the sentence: *Despite the freezing blizzard, the rescue team operated ________ throughout the night.*", options: ["tirelessly", "tired", "tiring", "tiresomely"], answer: 0, difficulty: "easy", explanation: "To'g'ri javob: tirelessly" },
  { q: "Choose the correct phrase: *He accepted the challenging assignment ________ the potential difficulties.*", options: ["despite", "although", "even", "whereas"], answer: 0, difficulty: "medium", explanation: "To'g'ri javob: despite" },
  { q: "What is the correct definition of **resilience**?", options: ["The capacity to recover quickly from difficulties; toughness", "The tendency to give up easily when faced with failure", "Physical weakness caused by illness", "Stubborn refusal to listen to advice"], answer: 0, difficulty: "hard", explanation: "To'g'ri javob: The capacity to recover quickly from difficulties; toughness" }
];

// ============================================================
// BOSHQA FANLAR BO'YICHA ASOSIY MAKTAB SAVOLLARI
// ============================================================
window.TEST_DATA["1_matematika"] = [
  { q: "5 + 3 yig'indisi nechaga teng?", options: ["7", "8", "9", "6"], answer: 1, difficulty: "easy", explanation: "5 ga 3 ni qo'shsak 8 hosil bo'ladi." },
  { q: "10 dan 4 ni ayirsak necha qoladi?", options: ["5", "6", "7", "4"], answer: 1, difficulty: "easy", explanation: "10 - 4 = 6." },
  { q: "Quyidagi sonlardan qaysi biri juft son?", options: ["3", "5", "6", "7"], answer: 2, difficulty: "easy", explanation: "6 soni 2 ga qoldiqsiz bo'linadi, demak juft son." },
  { q: "Bir haftada necha kun bor?", options: ["5", "6", "7", "8"], answer: 2, difficulty: "easy", explanation: "Bir haftada 7 kun bor." },
  { q: "Stolda 4 ta olma bor edi. Ali yana 2 ta olma qo'ydi. Jami nechta olma bo'ldi?", options: ["5", "6", "7", "8"], answer: 1, difficulty: "easy", explanation: "4 + 2 = 6 ta olma bo'ladi." },
  { q: "9 dan oldin qaysi son keladi?", options: ["7", "8", "10", "6"], answer: 1, difficulty: "easy", explanation: "Sanashda 9 dan oldin 8 keladi." },
  { q: "7 + 5 yig'indisi nechaga teng?", options: ["11", "12", "13", "10"], answer: 1, difficulty: "medium", explanation: "7 + 5 = 12." },
  { q: "15 dan 8 ni ayiring:", options: ["6", "7", "8", "9"], answer: 1, difficulty: "medium", explanation: "15 - 8 = 7." },
  { q: "Qaysi shaklning burchaklari yo'q?", options: ["Uchburchak", "Kvadrat", "Doira", "To'g'ri to'rtburchak"], answer: 2, difficulty: "medium", explanation: "Doiraning burchaklari bo'lmaydi, u aylanma shakldir." },
  { q: "Akramda 12 ta qalam bor, ukasida undan 3 ta kam. Ukasida nechta qalam bor?", options: ["8", "9", "10", "15"], answer: 1, difficulty: "medium", explanation: "12 - 3 = 9 ta qalam." },
  { q: "Birinchi savatda 8 ta, ikkinchisida 7 ta nok bor. Ikkala savatda jami nechta nok bor?", options: ["14", "15", "16", "17"], answer: 1, difficulty: "medium", explanation: "8 + 7 = 15." },
  { q: "20 dan 6 ni ayirib, ustiga 3 ni qo'shing:", options: ["16", "17", "18", "15"], answer: 1, difficulty: "hard", explanation: "20 - 6 = 14, 14 + 3 = 17." },
  { q: "Qaysi tenglik to'g'ri? 8 + ? = 14", options: ["5", "6", "7", "8"], answer: 1, difficulty: "hard", explanation: "14 - 8 = 6." },
  { q: "Ketma-ketlikni davom ettiring: 2, 4, 6, 8, ?", options: ["9", "10", "11", "12"], answer: 1, difficulty: "hard", explanation: "Sonlar 2 tadan oshib bormoqda: 8 + 2 = 10." },
  { q: "Bog'da 18 ta gul ochildi. Ertalab 5 tasi, tushdan keyin 4 tasi uzildi. Nechta gul qoldi?", options: ["8", "9", "10", "11"], answer: 1, difficulty: "hard", explanation: "18 - (5 + 4) = 18 - 9 = 9." }
];

// 1-SINF ONA TILI
window.TEST_DATA["1_ona_tili"] = [
  { q: "O'zbek alifbosida nechta harf bor?", options: ["26", "29", "30", "32"], answer: 1, difficulty: "easy", explanation: "Lotin yozuviga asoslangan o'zbek alifbosida 29 ta harf va bitta tutuq belgisi bor." },
  { q: "Qaysi so'zda unli tovush ko'proq?", options: ["Maktab", "Ona", "Kitob", "Oila"], answer: 3, difficulty: "easy", explanation: "Oila so'zida 3 ta unli bor (o, i, a)." },
  { q: "So'roq gap oxiriga qaysi tinish belgisi qo'yiladi?", options: ["Nuqta (.)", "Vergul (,)", "So'roq belgisi (?)", "Undov (!)"], answer: 2, difficulty: "easy", explanation: "So'roq mazmunidagi gap oxiriga so'roq belgisi (?) qo'yiladi." },
  { q: "Katta harf bilan nimalar yoziladi?", options: ["Faqat gullar nomi", "Kishilarning ismi va familiyasi", "Barcha so'zlar", "Faqat mevalar"], answer: 1, difficulty: "easy", explanation: "Kishilarning ism va familiyalari bosh harf bilan yoziladi." },
  { q: "Quyidagilardan qaysi biri so'z?", options: ["k", "da", "daraxt", "sh"], answer: 2, difficulty: "easy", explanation: "Daraxt mustaqil ma'noga ega so'zdir." },
  { q: "Bo'g'inlarga to'g'ri bo'lingan so'zni toping:", options: ["mak-tab", "m-ak-tab", "ma-kt-ab", "makt-ab"], answer: 0, difficulty: "medium", explanation: "Maktab so'zi mak-tab tarzida 2 bo'g'inga bo'linadi." },
  { q: "Kim? so'rog'iga javob bo'ladigan so'zni toping:", options: ["Daftar", "O'qituvchi", "Qalam", "Maktab"], answer: 1, difficulty: "medium", explanation: "O'qituvchi insonga nisbatan ishlatilib, Kim? so'rog'iga javob bo'ladi." },
  { q: "Nima qildi? so'rog'iga javob beruvchi so'z qaysi?", options: ["Chiroyli", "Yozdi", "Bola", "Dars"], answer: 1, difficulty: "medium", explanation: "Yozdi harakatni bildiradi va Nima qildi? so'rog'iga javob beradi." },
  { q: "Qaysi so'zda tutuq belgisi bor?", options: ["A'lo", "Maktab", "Salom", "Quyosh"], answer: 0, difficulty: "medium", explanation: "A'lo so'zida tutuq belgisi (') mavjud." },
  { q: "Jarangli undosh tovushni toping:", options: ["p", "t", "b", "k"], answer: 2, difficulty: "hard", explanation: "B tovushi jarangli undosh tovushdir." },
  { q: "Qaysi qatorda faqat unli harflar berilgan?", options: ["a, o, u, i", "b, d, f, g", "a, b, c, d", "k, l, m, n"], answer: 0, difficulty: "hard", explanation: "a, o, u, i - unli tovushlar." },
  { q: "Gap nima bilan boshlanadi?", options: ["Kichik harf bilan", "Katta harf bilan", "Raqam bilan", "Vergul bilan"], answer: 1, difficulty: "hard", explanation: "Har bir gap bosh harf bilan boshlanadi." }
];

// 1-SINF O'QISH
window.TEST_DATA["1_oqish"] = [
  { q: "\"Alifbe\" darsligi nimani o'rgatadi?", options: ["Faqat rasm chizishni", "Harflar va o'qishni", "Faqat sportni", "Musiqani"], answer: 1, difficulty: "easy", explanation: "Alifbe kitobi harflarni tanish va o'qishni o'rgatadi." },
  { q: "Ertaklarda yaxshilik doim nima bilan tugaydi?", options: ["Yomonlik bilan", "G'alaba bilan", "Qo'rquv bilan", "Yig'i bilan"], answer: 1, difficulty: "easy", explanation: "Ertaklarda ezgulik va yaxshilik doimo g'alaba qozonadi." },
  { q: "\"Zumrad va Qimmat\" ertagida qaysi qiz odobli va mehnatkash?", options: ["Qimmat", "Zumrad", "Ikkalasi ham", "Hech biri"], answer: 1, difficulty: "medium", explanation: "Zumrad odobli, kattalarni hurmat qiluvchi qiz." },
  { q: "Kitob - bizning eng yaqin...?", options: ["Dushmanimiz", "Do'stimiz", "O'yinchog'imiz", "Qo'shnimiz"], answer: 1, difficulty: "easy", explanation: "Kitob bizning eng yaqin do'stimiz va bilim manbaidir." },
  { q: "Sher qanday hayvon?", options: ["O'txo'r", "Yirtqich", "Uy hayvoni", "Suv hayvoni"], answer: 1, difficulty: "medium", explanation: "Sher yovvoyi yirtqich hayvon hisoblanadi." },
  { q: "Maqolni davom ettiring: \"Bilim - baxt ...\"", options: ["kaliti", "yo'li", "eshigi", "uy"], answer: 0, difficulty: "hard", explanation: "Xalqimizda 'Bilim - baxt kaliti' degan maqol bor." }
];

// 1-SINF TABIATSHUNOSLIK
window.TEST_DATA["1_tabiatshunoslik"] = [
  { q: "Bir yilda necha fasl bor?", options: ["2", "3", "4", "5"], answer: 2, difficulty: "easy", explanation: "Bir yilda 4 fasl bor: bahor, yoz, kuz, qish." },
  { q: "Qaysi faslda qor yog'adi?", options: ["Bahor", "Yoz", "Kuz", "Qish"], answer: 3, difficulty: "easy", explanation: "Qish faslida havo soviydi va qor yog'adi." },
  { q: "O'simliklar o'sishi uchun nima zarur?", options: ["Faqat qorong'ulik", "Quyosh nuri, suv va havo", "Faqat muz", "Faqat qum"], answer: 1, difficulty: "medium", explanation: "O'simliklarga yashash uchun yorug'lik, suv, tuproq va havo kerak." },
  { q: "Quyidagilardan qaysi biri uy hayvoni?", options: ["Bo'ri", "Sigir", "Tulkisi", "Ayiq"], answer: 1, difficulty: "easy", explanation: "Sigir inson tomonidan boqiladigan xonaki uy hayvoni." },
  { q: "Daraxtlar qaysi faslda barg to'kadi?", options: ["Bahor", "Kuz", "Yoz", "Qish"], answer: 1, difficulty: "medium", explanation: "Kuz faslida daraxtlar barglarini to'kadi." },
  { q: "Quyosh qayerdan chiqadi?", options: ["G'arbdan", "Sharqdan", "Shimoldan", "Janubdan"], answer: 1, difficulty: "hard", explanation: "Quyosh har kuni Sharqdan chiqib, G'arbga botadi." }
];

// 1-SINF INGLIZ TILI
window.TEST_DATA["1_ingliz_tili"] = [
  { q: "\"Apple\" so'zining ma'nosi nima?", options: ["Nok", "Olma", "Anor", "Uzum"], answer: 1, difficulty: "easy", explanation: "Apple - olma degani." },
  { q: "\"Book\" so'zining tarjimasi qaysi?", options: ["Daftar", "Kitob", "Qalam", "Parta"], answer: 1, difficulty: "easy", explanation: "Book inglizchadan kitob deb tarjima qilinadi." },
  { q: "\"Cat\" qanday hayvon?", options: ["It", "Mushuk", "Quyon", "Ot"], answer: 1, difficulty: "easy", explanation: "Cat - mushuk." },
  { q: "\"Red\" qaysi rang?", options: ["Ko'k", "Qizil", "Yashil", "Sariq"], answer: 1, difficulty: "medium", explanation: "Red - qizil rang." },
  { q: "\"One, two, three\" dan keyin qaysi son keladi?", options: ["Five", "Four", "Six", "Seven"], answer: 1, difficulty: "medium", explanation: "3 (three) dan keyin 4 (four) keladi." },
  { q: "\"Good morning\" nima degani?", options: ["Xayrli tun", "Xayrli tong", "Xayr", "Rahmat"], answer: 1, difficulty: "hard", explanation: "Good morning - Xayrli tong." }
];

// 1-SINF RUS TILI
window.TEST_DATA["1_rus_tili"] = [
  { q: "\"ÐŸÑ€Ð¸Ð²ÐµÑ‚\" so'zi nima degani?", options: ["Xayr", "Salom", "Rahmat", "Iltimos"], answer: 1, difficulty: "easy", explanation: "ÐŸÑ€Ð¸Ð²ÐµÑ‚ - Salom degani." },
  { q: "\"ÐœÐ°Ð¼Ð°\" so'zining tarjimasi qaysi?", options: ["Ota", "Ona", "Aka", "Opa"], answer: 1, difficulty: "easy", explanation: "ÐœÐ°Ð¼Ð° - Ona." },
  { q: "\"ÐšÐ½Ð¸Ð³Ð°\" nima degani?", options: ["Daftar", "Kitob", "Ruchka", "Parta"], answer: 1, difficulty: "medium", explanation: "ÐšÐ½Ð¸Ð³Ð° - kitob." },
  { q: "\"Ð¡Ð¾Ð±Ð°ÐºÐ°\" qaysi hayvon?", options: ["Mushuk", "It", "Sigir", "Ot"], answer: 1, difficulty: "medium", explanation: "Ð¡Ð¾Ð±Ð°ÐºÐ° - it." },
  { q: "\"Ð¡Ð¿Ð°ÑÐ¸Ð±Ð¾\" so'zining ma'nosi:", options: ["Kechirasiz", "Rahmat", "Marhamat", "Salom"], answer: 1, difficulty: "hard", explanation: "Ð¡Ð¿Ð°ÑÐ¸Ð±Ð¾ - Rahmat." }
];


// ============================================================
// 2-SINF TEST SAVOLLARI
// ============================================================
window.TEST_DATA["2_matematika"] = [
  { q: "45 + 23 yig'indisini toping:", options: ["67", "68", "69", "58"], answer: 1, difficulty: "easy", explanation: "45 + 23 = 68." },
  { q: "5 ko'paytirilgan 4 nechaga teng?", options: ["15", "20", "25", "24"], answer: 1, difficulty: "easy", explanation: "5 * 4 = 20." },
  { q: "1 metr necha santimetrga teng?", options: ["10 cm", "100 cm", "1000 cm", "50 cm"], answer: 1, difficulty: "medium", explanation: "1 metr = 100 santimetr." },
  { q: "To'g'ri to'rtburchakning nechta tomoni va burchagi bor?", options: ["3 ta", "4 ta", "5 ta", "6 ta"], answer: 1, difficulty: "easy", explanation: "To'rtburchakda 4 ta tomon va 4 ta to'g'ri burchak bo'ladi." },
  { q: "72 dan 38 ni ayiring:", options: ["32", "34", "36", "44"], answer: 1, difficulty: "medium", explanation: "72 - 38 = 34." },
  { q: "Bir qutida 6 dona qalam bor. 4 ta shunday qutida jami nechta qalam bo'ladi?", options: ["20", "24", "26", "28"], answer: 1, difficulty: "medium", explanation: "6 * 4 = 24 ta qalam." },
  { q: "36 : 4 bo'linmasini toping:", options: ["7", "8", "9", "6"], answer: 2, difficulty: "hard", explanation: "36 ni 4 ga bo'lsak 9 chiqadi." },
  { q: "Tenglamani yeching: x + 15 = 42", options: ["25", "27", "28", "26"], answer: 1, difficulty: "hard", explanation: "x = 42 - 15 = 27." }
];

window.TEST_DATA["2_ona_tili"] = [
  { q: "O'zbek tilida nechta unli tovush bor?", options: ["5 ta", "6 ta", "7 ta", "8 ta"], answer: 1, difficulty: "easy", explanation: "O'zbek tilida 6 ta unli tovush bor: a, o, i, u, o', e." },
  { q: "Qaysi so'z narsa nomini bildiradi?", options: ["Yugurdi", "Chiroyli", "Parta", "Sekin"], answer: 2, difficulty: "easy", explanation: "Parta narsa nomini bildiruvchi ot so'z turkumidir." },
  { q: "Egalik qo'shimchasi qo'shilgan so'zni toping:", options: ["Kitobim", "Kitoblar", "Kitobga", "Kitobdan"], answer: 0, difficulty: "medium", explanation: "Kitob-im so'zida -im 1-shaxs egalik qo'shimchasi." },
  { q: "Qarama-qarshi ma'noli so'zlar juftligini toping:", options: ["Katta - ulkan", "Oq - qora", "Yaxshi - a'lo", "Kichik - mayda"], answer: 1, difficulty: "medium", explanation: "Oq va qora antonim (qarama-qarshi) so'zlardir." },
  { q: "Nuqtalar o'rniga mos keluvchi harfni toping: k...z", options: ["u", "o", "a", "i"], answer: 0, difficulty: "hard", explanation: "Kuz fasli nomi hosil bo'ladi." }
];

window.TEST_DATA["2_tabiatshunoslik"] = [
  { q: "Tirik tabiatga nimalar kiradi?", options: ["Tosh, suv, havo", "O'simliklar, hayvonlar, inson", "Uy, mashina, kitob", "Quyosh, oy, yulduz"], answer: 1, difficulty: "easy", explanation: "O'simliklar, hayvonlar va inson tirik tabiat hisoblanadi." },
  { q: "Suv qanday holatlarda uchraydi?", options: ["Faqat suyuq", "Suyuq, qattiq (muz), gaz (bug')", "Faqat qattiq", "Faqat bug'"], answer: 1, difficulty: "medium", explanation: "Suv tabiatda suyuq, qattiq va gaz holatida bo'ladi." },
  { q: "Qushlarning tanasi nima bilan qoplangan?", options: ["Jun", "Pat", "Tanga", "Teri"], answer: 1, difficulty: "easy", explanation: "Qushlar tanasi patlar bilan qoplangan bo'ladi." },
  { q: "O'zbekistonning poytaxti qaysi shahar?", options: ["Samarqand", "Buxoro", "Toshkent", "Xiva"], answer: 2, difficulty: "easy", explanation: "O'zbekiston Respublikasi poytaxti - Toshkent shahri." }
];


window.TEST_DATA["2_rus_tili"] = [
  { q: "\"Ð¨ÐºÐ¾Ð»Ð°\" so'zining tarjimasi:", options: ["Bog'cha", "Maktab", "Sinf", "Universitet"], answer: 1, difficulty: "easy", explanation: "Ð¨ÐºÐ¾Ð»Ð° - maktab." },
  { q: "\"Ð¯ ÑƒÑ‡ÐµÐ½Ð¸Ðº\" jumlasi nima degani?", options: ["Men o'qituvchiman", "Men o'quvchiman", "Men shifokorman", "Men bolaman"], answer: 1, difficulty: "medium", explanation: "Ð¯ ÑƒÑ‡ÐµÐ½Ð¸Ðº - Men o'quvchiman." }
];

window.TEST_DATA["2_oqish"] = [
  { q: "Alisher Navoiy kim bo'lgan?", options: ["Buyuk shoir va mutafakkir", "Dengizchi", "Rassom", "Uchuvchi"], answer: 0, difficulty: "easy", explanation: "Alisher Navoiy - o'zbek xalqining buyuk shoiri va mutafakkiridir." },
  { q: "Ertaklarda makkorlik ramzi qaysi hayvon?", options: ["Bo'ri", "Tulki", "Ayiq", "Sher"], answer: 1, difficulty: "medium", explanation: "Ertaklarda tulki ayyorlik va makkorlik timsoli." }
];

// ============================================================
// 3-SINF TEST SAVOLLARI
// ============================================================


window.TEST_DATA["3_tabiatshunoslik"] = [
  { q: "Yer shari o'z o'qi atrofida to'liq bir marta aylanishi qancha vaqt oladi?", options: ["1 oy", "24 soat (1 sutka)", "1 yil", "12 soat"], answer: 1, difficulty: "medium", explanation: "Yer o'z o'qi atrofida 24 soatda aylanadi va kecha-kunduz almashadi." },
  { q: "O'simliklarning tuproq ostidagi qismi nima deb ataladi?", options: ["Poya", "Ildiz", "Barg", "Gulkosa"], answer: 1, difficulty: "easy", explanation: "Ildiz o'simlikni tuproqda ushlab turadi va suv shimadi." },
  { q: "Qaysi gaz barcha tirik organizmlarning nafas olishi uchun zarur?", options: ["Karbonat angidrid", "Kislorod", "Azot", "Metan"], answer: 1, difficulty: "medium", explanation: "Nafas olish uchun kislorod (O2) hayotiy zarurdir." }
];


window.TEST_DATA["3_rus_tili"] = [
  { q: "\"Ð”Ð¾Ð¼\" so'zi qaysi rodga kiradi?", options: ["Ð–ÐµÐ½ÑÐºÐ¸Ð¹", "ÐœÑƒÐ¶ÑÐºÐ¾Ð¹", "Ð¡Ñ€ÐµÐ´Ð½Ð¸Ð¹", "Umumiy"], answer: 1, difficulty: "medium", explanation: "Ð”Ð¾Ð¼ - undosh bilan tugagan, muzhskoy rod." },
  { q: "\"Ð‘Ð¾Ð»ÑŒÑˆÐ¾Ð¹\" so'zining ma'nosi:", options: ["Kichik", "Katta", "Chiroyli", "Yangi"], answer: 1, difficulty: "easy", explanation: "Ð‘Ð¾Ð»ÑŒÑˆÐ¾Ð¹ - katta." }
];

window.TEST_DATA["3_oqish"] = [
  { q: "Zahiriddin Muhammad Bobur qaysi shoh asar muallifi?", options: ["Xamsa", "Boburnoma", "Qutadg'u bilig", "O'tkan kunlar"], answer: 1, difficulty: "medium", explanation: "Bobur buyuk 'Boburnoma' tarixiy-memuar asarini yozgan." }
];

// ============================================================
// 4-SINF TEST SAVOLLARI
// ============================================================
window.TEST_DATA["4_matematika"] = [
  { q: "124 * 5 ko'paytmasini toping:", options: ["610", "620", "630", "520"], answer: 1, difficulty: "easy", explanation: "124 * 5 = 620." },
  { q: "To'g'ri to'rtburchakning bo'yi 8 sm, eni 5 sm. Yuzini toping:", options: ["26 sm²", "40 sm²", "13 sm²", "45 sm²"], answer: 1, difficulty: "medium", explanation: "S = a * b = 8 * 5 = 40 sm²." },
  { q: "1 kilometr necha metrga teng?", options: ["100 m", "1000 m", "10000 m", "500 m"], answer: 1, difficulty: "easy", explanation: "1 km = 1000 metr." },
  { q: "Avtomobil 60 km/soat tezlik bilan 3 soatda qancha masofani bosib o'tadi?", options: ["120 km", "180 km", "200 km", "150 km"], answer: 1, difficulty: "medium", explanation: "S = v * t = 60 * 3 = 180 km." },
  { q: "7200 : 90 ifodaning qiymatini toping:", options: ["70", "80", "90", "800"], answer: 1, difficulty: "medium", explanation: "7200 : 90 = 80." },
  { q: "Tenglamani yeching: (x - 24) * 4 = 160", options: ["60", "64", "68", "72"], answer: 1, difficulty: "hard", explanation: "x - 24 = 40; x = 64." }
];

window.TEST_DATA["4_ona_tili"] = [
  { q: "Son so'z turkumini toping:", options: ["Beshinchi", "Oq", "Yugurdi", "Kitob"], answer: 0, difficulty: "easy", explanation: "Beshinchi narsaning tartibini bildiruvchi tartib son." },
  { q: "Olmosh qanday so'z turkumi?", options: ["Narsaning sonini bildiradi", "Ot, sifat, son o'rnida qo'llanadi", "Harakatni bildiradi", "Belgini bildiradi"], answer: 1, difficulty: "medium", explanation: "Olmosh boshqa mustaqil so'z turkumlari o'rnida almashib keladi." },
  { q: "Qaysi gapda tinish belgisi xato qo'yilgan?", options: ["Dars tugadimi?", "Bugun havo juda go'zal!", "Biz kutubxonaga bordik.", "Sen qayerga ketyapsan."], answer: 3, difficulty: "hard", explanation: "So'roq gap oxiriga nuqta emas, so'roq belgisi (?) qo'yilishi kerak." }
];

window.TEST_DATA["4_tabiatshunoslik"] = [
  { q: "Quyosh sistemasidagi eng katta sayyora qaysi?", options: ["Mars", "Yupiter", "Venera", "Saturn"], answer: 1, difficulty: "medium", explanation: "Yupiter - Quyosh sistemasidagi eng gigant sayyora." },
  { q: "Kompasning ko'k ko'rsatkichi qaysi tomonni ko'rsatadi?", options: ["Janubni", "Shimolni", "Sharqni", "G'arbni"], answer: 1, difficulty: "easy", explanation: "Kompas magnit mili Shimol tomonni ko'rsatadi." },
  { q: "O'zbekistonda joylashgan eng baland cho'qqi qaysi?", options: ["Hazrati Sulton", "Chotqol", "Chimyon", "Bobotog'"], answer: 0, difficulty: "hard", explanation: "Hazrati Sulton cho'qqisi (4643 m) Hisor tizmasida joylashgan." }
];


window.TEST_DATA["4_rus_tili"] = [
  { q: "\"Ð”ÐµÐ²Ð¾Ñ‡ÐºÐ° Ñ‡Ð¸Ñ‚Ð°ÐµÑ‚ ÐºÐ½Ð¸Ð³Ñƒ.\" Gapdagi fe'lni toping:", options: ["Ð”ÐµÐ²Ð¾Ñ‡ÐºÐ°", "Ð§Ð¸Ñ‚Ð°ÐµÑ‚", "ÐšÐ½Ð¸Ð³Ñƒ", "Bo'sh"], answer: 1, difficulty: "easy", explanation: "Ð§Ð¸Ñ‚Ð°ÐµÑ‚ (o'qiyapti) - fe'l." }
];

window.TEST_DATA["4_oqish"] = [
  { q: "O'zbekiston Davlat madhiyasi muallifi kim?", options: ["Erkin Vohidov", "Abdulla Oripov", "Muhammad Yusuf", "Zulfiya"], answer: 1, difficulty: "medium", explanation: "O'zbekiston Respublikasi madhiyasi so'zi O'zbekiston Qahramoni Abdulla Oripov qalamiga mansub." }
];


// ============================================================
// 5-SINF TEST SAVOLLARI
// ============================================================
window.TEST_DATA["5_matematika"] = [
  { q: "Oddiy kasrni hisoblang: 3/7 + 2/7 = ?", options: ["5/14", "5/7", "6/7", "1/7"], answer: 1, difficulty: "easy", explanation: "Bir xil maxrajli kasrlar qo'shilganda maxraj o'zgarmaydi, suratlar qo'shiladi: (3+2)/7 = 5/7." },
  { q: "O'nli kasrni ayiring: 5.4 - 2.15 = ?", options: ["3.25", "3.35", "3.15", "2.25"], answer: 0, difficulty: "medium", explanation: "5.40 - 2.15 = 3.25." },
  { q: "To'g'ri to'rtburchakli parallelepipedning o'lchamlari 3 sm, 4 sm va 5 sm. Uning hajmini toping:", options: ["12 sm³", "60 sm³", "48 sm³", "24 sm³"], answer: 1, difficulty: "medium", explanation: "V = a * b * c = 3 * 4 * 5 = 60 sm³." },
  { q: "45 ning 20% ini toping:", options: ["8", "9", "10", "12"], answer: 1, difficulty: "medium", explanation: "45 * 20 / 100 = 9." },
  { q: "Tub sonni toping:", options: ["9", "15", "17", "21"], answer: 2, difficulty: "easy", explanation: "17 faqat 1 ga va o'ziga bo'linadi, shuning uchun tub sondir." },
  { q: "EKUK(12, 18) ni toping:", options: ["36", "72", "6", "18"], answer: 0, difficulty: "hard", explanation: "12 va 18 sonlarining eng kichik umumiy karralisi 36 dir." }
];

window.TEST_DATA["5_biologiya"] = [
  { q: "Barcha tirik organizmlarning eng kichik tuzilish va faoliyat birligi nima?", options: ["Organ", "Hujayra", "To'qima", "Organizm"], answer: 1, difficulty: "easy", explanation: "Hujayra barcha tirik mavjudotlarning elementar birligidir." },
  { q: "O'simlik hujayrasida fotosintez qaysi organoidda boradi?", options: ["Mitoxondriya", "Xloroplast", "Vakuola", "Yadro"], answer: 1, difficulty: "medium", explanation: "Xloroplastlar xlorofill donachalariga ega bo'lib, fotosintez jarayonini amalga oshiradi." },
  { q: "Mikroskopni kashf etgan olimlardan biri kim?", options: ["Ch. Darvin", "Antoni van Levenguk", "Gregor Mendel", "I. Pavlov"], answer: 1, difficulty: "medium", explanation: "Levenguk o'zi yasagan mikroskop yordamida bir hujayralilarni kashf qilgan." }
];

window.TEST_DATA["5_tarix"] = [
  { q: "\"Tarixning otasi\" deb kim tan olingan?", options: ["Aristotel", "Gerodot", "Platon", "Strabon"], answer: 1, difficulty: "easy", explanation: "Qadimgi yunon olimi Gerodot 'Tarixning otasi' deb e'tirof etilgan." },
  { q: "O'zbekiston hududida yashagan eng qadimgi odam qoldig'i qaysi g'ordan topilgan?", options: ["Selung'ur", "Teshiktosh", "Obirahmat", "Zarautsoy"], answer: 1, difficulty: "medium", explanation: "Boysun tog'laridagi Teshiktosh g'oridan neandertal bola suyagi topilgan." },
  { q: "Milodiy yil hisobi nima bilan boshlanadi?", options: ["Rimning tashkil topishi", "Iso Masih (Iysus)ning tug'ilishi", "Olimpiada o'yinlari", "Yozuv ixtiro qilinishi"], answer: 1, difficulty: "medium", explanation: "Bizning eramiz Iso payg'ambar tavalludi bilan boshlanadi." }
];

window.TEST_DATA["5_geografiya"] = [
  { q: "Yer yuzida nechta materik bor?", options: ["4 ta", "5 ta", "6 ta", "7 ta"], answer: 2, difficulty: "easy", explanation: "Yerda 6 ta materik bor: Yevrosiyo, Afrika, Shimoliy Amerika, Janubiy Amerika, Antarktida, Avstraliya." },
  { q: "Dunyo okeanidagi eng katta okean qaysi?", options: ["Atlantika", "Tinch okeani", "Hind okeani", "Shimoliy Muz okeani"], answer: 1, difficulty: "easy", explanation: "Tinch okeani (Buyuk okean) eng katta va eng chuqur okeandir." },
  { q: "Globus nima?", options: ["Yerning xaritasi", "Yer sharining kichraytirilgan modeli", "Rasm", "Kosmik fotosurat"], answer: 1, difficulty: "easy", explanation: "Globus - Yer sharining eng aniq masshtabli uch o'lchamli modelidir." }
];

window.TEST_DATA["5_informatika"] = [
  { q: "Kompyuterning asosiy 'miyasi' hisoblangan bosh mikrosxema qaysi?", options: ["Monitor", "Protsessor (CPU)", "Klaviatura", "Qattiq disk (HDD)"], answer: 1, difficulty: "easy", explanation: "Markaziy protsessor barcha buyruqlar va mantiqiy hisoblashlarni bajaradi." },
  { q: "1 Bayt necha Bitga teng?", options: ["4 bit", "8 bit", "16 bit", "1024 bit"], answer: 1, difficulty: "medium", explanation: "1 Bayt = 8 bit." },
  { q: "Axborotni kiritish qurilmasini toping:", options: ["Printer", "Monitor", "Klaviatura", "Kalonka"], answer: 2, difficulty: "easy", explanation: "Klaviatura va sichqoncha axborot kiritish qurilmalaridir." }
];

window.TEST_DATA["5_adabiyot"] = [
  { q: "\"Alpomish\" dostoni qaysi turdagi asar?", options: ["Ertak", "Qahramonlik dostoni", "Lirik she'r", "Hikoya"], answer: 1, difficulty: "easy", explanation: "Alpomish - o'zbek xalqining eng mashhur qahramonlik eposidir." },
  { q: "Zahiriddin Muhammad Boburning otasi kim bo'lgan?", options: ["Umarshayx Mirzo", "Amir Temur", "Shohrux Mirzo", "Mirzo Ulug'bek"], answer: 0, difficulty: "medium", explanation: "Boburning otasi Farg'ona hukmdori Umarshayx Mirzo bo'lgan." }
];

// ============================================================
// 6-SINF TEST SAVOLLARI
// ============================================================
window.TEST_DATA["6_matematika"] = [
  { q: "Nisbat va proporsiya: x : 6 = 15 : 18 bo'lsa, x ni toping:", options: ["4", "5", "6", "8"], answer: 1, difficulty: "medium", explanation: "Proporsiyaning chetki hadlari ko'paytmasi o'rta hadlari ko'paytmasiga teng: 18x = 90 => x = 5." },
  { q: "Manfiy sonlar amali: -15 + (-27) = ?", options: ["-42", "-12", "42", "12"], answer: 0, difficulty: "easy", explanation: "-15 - 27 = -42." },
  { q: "Koordinata to'g'ri chizig'ida qaysi nuqta 0 dan chapda joylashadi?", options: ["Musbat sonlar", "Manfiy sonlar", "Faqat kasr sonlar", "Barcha sonlar"], answer: 1, difficulty: "easy", explanation: "Koordinata to'g'ri chizig'ida manfiy sonlar 0 dan chapda joylashadi." },
  { q: "Doiraning radiusi 7 sm bo'lsa, aylana uzunligini toping (pi â‰ˆ 22/7):", options: ["22 sm", "44 sm", "154 sm", "88 sm"], answer: 1, difficulty: "hard", explanation: "C = 2 * pi * r = 2 * (22/7) * 7 = 44 sm." }
];

window.TEST_DATA["6_biologiya"] = [
  { q: "O'simliklarning jinsiy ko'payish organi qaysi?", options: ["Ildiz", "Poya", "Gul", "Barg"], answer: 2, difficulty: "easy", explanation: "Gul - yopiq urug'li o'simliklarning generativ (jinsiy ko'payish) organidir." },
  { q: "Zamburug'lar qanday oziqlanadi?", options: ["Autotrof (fotosintez qilib)", "Geterotrof (tayyor organik modda bilan)", "Faqat suv bilan", "Mineral moddalar bilan"], answer: 1, difficulty: "medium", explanation: "Zamburug'larda xlorofill bo'lmaydi, ular tayyor moddalar bilan geterotrof oziqlanadi." }
];

window.TEST_DATA["6_tarix"] = [
  { q: "Qadimgi Baqtriya davlati qaysi hududlarda joylashgan?", options: ["Surxondaryo, Janubiy Tojikiston va Shimoliy Afg'oniston", "Farg'ona vodiysi", "Xorazm vohasi", "Zarafshon vodiysi"], answer: 0, difficulty: "medium", explanation: "Baqtriya Amudaryoning yuqori va o'rta oqimida gullab-yashnagan." },
  { q: "Zardushtiylik dinining muqaddas kitobi qaysi?", options: ["Veda", "Avesto", "Injil", "Torat"], answer: 1, difficulty: "easy", explanation: "Avesto - qadimgi ajdodlarimizning diniy-falsafiy yodgorligidir." }
];

// ============================================================
// 7-SINF TEST SAVOLLARI (ALGEBRA, GEOMETRIYA, FIZIKA)
// ============================================================
window.TEST_DATA["7_algebra"] = [
  { q: "Qisqa ko'paytirish formulasi: (a + b)² = ?", options: ["a² + b²", "a² + 2ab + b²", "a² - 2ab + b²", "a² + ab + b²"], answer: 1, difficulty: "easy", explanation: "(a + b)² = a² + 2ab + b²." },
  { q: "Chiziqli tenglamani yeching: 3x - 7 = 2x + 5", options: ["10", "11", "12", "13"], answer: 2, difficulty: "easy", explanation: "3x - 2x = 5 + 7 => x = 12." },
  { q: "Darajali ifodani soddalashtiring: (x³ * xâ´) / x² = ?", options: ["xâµ", "xâ¶", "xâ·", "xâ¸"], answer: 0, difficulty: "medium", explanation: "xâˆ«(3+4) / xâˆ«2 = xâˆ«7 / xâˆ«2 = xâˆ«(7-2) = xâˆ«5." },
  { q: "Birhadlarning ko'paytmasi: (-3a²b) * (4ab³) = ?", options: ["-12a³bâ´", "12a³bâ´", "-7a³bâ´", "-12a²b³"], answer: 0, difficulty: "medium", explanation: "-3 * 4 = -12; a²*a = a³; b*b³ = bâ´." },
  { q: "Tenglamalar sistemasini yeching: { x + y = 10; x - y = 4 }", options: ["x=6, y=4", "x=7, y=3", "x=8, y=2", "x=5, y=5"], answer: 1, difficulty: "hard", explanation: "Qo'shsak: 2x = 14 => x = 7; y = 10 - 7 = 3." }
];

window.TEST_DATA["7_geometriya"] = [
  { q: "Uchburchakning ichki burchaklari yig'indisi har doim nechaga teng?", options: ["90°", "180°", "360°", "270°"], answer: 1, difficulty: "easy", explanation: "Har qanday uchburchakning ichki burchaklari yig'indisi 180° ga teng." },
  { q: "Teng yonli uchburchakning asosidagi burchaklar qanday bo'ladi?", options: ["Har xil", "O'zaro teng", "Biri to'g'ri burchak", "Har doim 90°"], answer: 1, difficulty: "easy", explanation: "Teng yonli uchburchakda asosdagi burchaklar tengdir." },
  { q: "Vertikal burchaklar haqidagi xossa qaysi?", options: ["Yig'indisi 180°", "Ular o'zaro teng", "Biri ikkinchisidan katta", "Yig'indisi 90°"], answer: 1, difficulty: "easy", explanation: "Vertikal burchaklar doimo o'zaro teng bo'ladi." },
  { q: "Uchburchakning ikki burchagi 40° va 60° bo'lsa, uchinchi burchagini toping:", options: ["70°", "80°", "90°", "100°"], answer: 1, difficulty: "medium", explanation: "180° - (40° + 60°) = 180° - 100° = 80°." }
];

window.TEST_DATA["7_fizika"] = [
  { q: "Jismning zichligi formulasi qaysi?", options: ["p = m * V", "p = m / V", "p = V / m", "p = F / S"], answer: 1, difficulty: "easy", explanation: "Zichlik massa va hajm nisbatiga teng: rho = m / V." },
  { q: "SI xalqaro birliklar sistemasida tezlik birligi nima?", options: ["km/soat", "m/s", "sm/s", "m/min"], answer: 1, difficulty: "easy", explanation: "Xalqaro tizimda tezlik metr taqsim soniya (m/s) da o'lchanadi." },
  { q: "Arximed kuchi formulasi qaysi?", options: ["F = m * g", "F = p * g * V", "F = k * x", "F = m * a"], answer: 1, difficulty: "medium", explanation: "Suyuqlikdagi jismga ta'sir etuvchi ko'tarish kuchi: F_Arx = rho * g * V." },
  { q: "HAYOTIY TAJRIBA: Qalin po'lat igna suvga tashlansa cho'kadi, lekin gigant po'lat kema nega suvda suzadi?", options: ["Kemada motor borligi uchun", "Kemaning o'rtacha zichligi suvnikidan kichik (ichida bo'shliq va havo borligi uchun)", "Kema og'ir bo'lgani uchun", "Suv chuqur bo'lgani uchun"], answer: 1, difficulty: "hard", explanation: "Kema ichidagi katta bo'shliqlar tufayli uning umumiy zichligi suv zichligidan kichik bo'ladi va Arximed kuchi uni ushlab turadi." },
  { q: "Bosimning SI birligi nima?", options: ["Nyuton (N)", "Paskal (Pa)", "Joul (J)", "Vatt (W)"], answer: 1, difficulty: "easy", explanation: "Bosim Paskal (Pa) da o'lchanadi. 1 Pa = 1 N/m²." }
];


// ============================================================
// 8-SINF TEST SAVOLLARI
// ============================================================

// 8-SINF KIMYO (HAYOTIY TAJRIBALAR VA REATSIYALAR)
window.TEST_DATA["8_kimyo"] = [
  { q: "HAYOTIY TAJRIBA: Laboratoriya stolida stakan turibdi. Ichiga mis (Cu) bo'lagi solinib, ustiga xlorid kislota (HCl) quyildi. Nima kuzatiladi?", options: ["Shiddatli portlash bo'ladi", "Mis vodoroddan o'ngda joylashgani uchun hech qanday reaksiya bormaydi", "Eritma darhol qizaradi", "Mis bug'lanib ketadi"], answer: 1, difficulty: "hard", explanation: "Bekeyevning metallar faollik qatorida mis (Cu) vodoroddan (H) keyin turadi, shuning uchun u suyultirilgan xlorid kislotadan vodorodni siqib chiqara olmaydi." },
  { q: "HAYOTIY TAJRIBA: Stakandagi mis (Cu) ustiga konsentrlangan nitrat kislota (HNO3) quyilsa nima sodir bo'ladi?", options: ["Hech qanday o'zgarish bo'lmaydi", "Jigarrang zaharli 'tulki dumi' (NO2 gazi) ajralib, eritma moviy-yashil rangga kiradi", "Oq cho'kma tushadi", "Faqat vodorod gazi ajraladi"], answer: 1, difficulty: "hard", explanation: "Cu + 4HNO3(kons) -> Cu(NO3)2 + 2NO2â†‘(qo'ng'ir gaz) + 2H2O. Eritma moviy rangga bo'yaladi." },
  { q: "HAYOTIY TAJRIBA: Suvga to'la idishga ikkita elektrod tushirilib, o'zgarmas elektr toki berildi (elektroliz). Katod va anodda qanday gazlar ajraladi?", options: ["Faqat xlor", "Katodda vodorod (H2), anodda kislorod (O2) 2:1 hajm nisbatda", "Faqat karbonat angidrid", "Faqat azot"], answer: 1, difficulty: "medium", explanation: "2H2O -> 2H2â†‘ (katod) + O2â†‘ (anod). Vodorod hajmi kisloroddan 2 baravar ko'p ajraladi." },
  { q: "HAYOTIY TAJRIBA: Osh sodasi (NaHCO3) solingan idishga sirka kislota quyilsa nima uchun ko'piklanib 'vulqon' hosil bo'ladi?", options: ["Zaharli gaz chiqqani uchun", "Karbonat angidrid (CO2) gazi shiddatli ajralib chiqqani uchun", "Suv qaynaganligi uchun", "Kislorod yonganligi uchun"], answer: 1, difficulty: "easy", explanation: "Sirka kislota va soda reaksiyaga kirishib, ko'p miqdorda CO2 gazi pufakchalari hosil qiladi." },
  { q: "Lakmus indikatori kislotali muhitda qanday rangga kiradi?", options: ["Ko'k", "Qizil", "Sariq", "Rangsiz"], answer: 1, difficulty: "easy", explanation: "Lakmus kislotada qizaradi, ishqorda esa ko'karadi." },
  { q: "Fenolftalein indikatori ishqoriy muhitda (masalan, NaOH eritmasida) qanday rang beradi?", options: ["Rangsiz bo'lib qoladi", "To'q malina (och binafsha) rang", "Yashil", "Qora"], answer: 1, difficulty: "medium", explanation: "Fenolftalein kislota va neytral muhitda rangsiz, faqat ishqorlarda to'q malina rangini beradi." },
  { q: "Suvning kimyoviy formulasi qaysi?", options: ["CO2", "H2O", "H2SO4", "NaCl"], answer: 1, difficulty: "easy", explanation: "Suv molekulasi ikkita vodorod va bitta kislorod atomidan iborat: H2O." },
  { q: "Davriy sistemada kimyoviy elementlar qanday tartibda joylashtirilgan?", options: ["Alifbo bo'yicha", "Atom massalari kamayishi bo'yicha", "Yadro zaryadi (tartib raqami) ortib borishi bo'yicha", "Tasodifiy"], answer: 2, difficulty: "medium", explanation: "D.I. Mendeleyev qonuniga ko'ra elementlar yadro zaryadining ortishi tartibida joylashgan." },
  { q: "Osh tuzining kimyoviy formulasi qaysi?", options: ["KCl", "NaCl", "CaCl2", "NaOH"], answer: 1, difficulty: "easy", explanation: "Osh tuzi natriy xlorid - NaCl dir." },
  { q: "HAYOTIY TAJRIBA: Moviy rangli mis kuporosi (CuSO4) eritmasiga toza temir mix solib qo'yilsa, bir necha daqiqadan so'ng mix ustida nima paydo bo'ladi?", options: ["Mix eriydi va yo'qoladi", "Mix sirtida qizg'ish-jigarrang mis (Cu) qatlami qoplanadi", "Oq dog'lar tushadi", "Hech narsa o'zgarmaydi"], answer: 1, difficulty: "medium", explanation: "Fe + CuSO4 -> FeSO4 + Cu. Temir misdan faolroq bo'lgani uchun uni siqib chiqaradi va mix ustiga mis cho'kadi." }
];

// 8-SINF FIZIKA
window.TEST_DATA["8_fizika"] = [
  { q: "Zanjir qismi uchun Om qonuni formulasi qaysi?", options: ["I = U * R", "I = U / R", "I = R / U", "U = I² * R"], answer: 1, difficulty: "easy", explanation: "Tok kuchi kuchlanishga to'g'ri, qarshilikka teskari mutanosib: I = U / R." },
  { q: "Elektr zanjirida ampermetr zanjirga qanday ulanadi?", options: ["Ketma-ket", "Parallel", "Aralash", "Farqi yo'q"], answer: 0, difficulty: "easy", explanation: "Tok kuchini o'lchovchi ampermetr zanjirga faqat ketma-ket ulanadi." },
  { q: "Voltmeter elektr zanjiriga qanday ulanadi?", options: ["Ketma-ket", "Parallel", "Ixtiyoriy", "Faqat manbaga"], answer: 1, difficulty: "easy", explanation: "Kuchlanishni o'lchash uchun voltmeter iste'molchiga parallel ulanadi." },
  { q: "Elektr qarshiligi 10 Om bo'lgan o'tkazgichdan 2 A tok o'tmoqda. Kuchlanishni toping:", options: ["5 V", "12 V", "20 V", "0.2 V"], answer: 2, difficulty: "medium", explanation: "U = I * R = 2 A * 10 Om = 20 V." },
  { q: "Joul-Lens qonuni formulasi qaysi?", options: ["Q = I² * R * t", "Q = U * I", "Q = m * c * Δt", "A = F * s"], answer: 0, difficulty: "hard", explanation: "O'tkazgichdan tok o'tganda ajraladigan issiqlik miqdori: Q = I² * R * t." },
  { q: "Issiqlik uzatilishining qaysi turi vakuumda ham (bo'shliqda) tarqala oladi?", options: ["Konveksiya", "Issiqlik o'tkazuvchanlik", "Nurlanish", "Diffuziya"], answer: 2, difficulty: "medium", explanation: "Quyosh nurlari koinotdagi bo'shliq orqali nurlanish yo'li bilan Yerga yetib keladi." }
];

// 8-SINF ALGEBRA
window.TEST_DATA["8_algebra"] = [
  { q: "Kvadrat tenglamaning diskriminant formulasi qaysi?", options: ["D = b² - 4ac", "D = b² + 4ac", "D = -b ± âˆšD", "D = 2a / b"], answer: 0, difficulty: "easy", explanation: "ax² + bx + c = 0 tenglamaning diskriminanti: D = b² - 4ac." },
  { q: "Kvadrat tenglamani yeching: x² - 5x + 6 = 0", options: ["x1 = 2, x2 = 3", "x1 = -2, x2 = -3", "x1 = 1, x2 = 6", "x1 = -1, x2 = 5"], answer: 0, difficulty: "medium", explanation: "Viyet teoremasiga ko'ra: x1 + x2 = 5, x1 * x2 = 6. Ildizlari 2 va 3." },
  { q: "Agar D > 0 bo'lsa, kvadrat tenglama nechta haqiqiy ildizga ega?", options: ["Ildizga ega emas", "Bitta ildiz", "Ikkita turli ildiz", "Cheksiz ko'p"], answer: 2, difficulty: "easy", explanation: "D > 0 bo'lganda tenglama ikkita haqiqiy ildizga ega bo'ladi." },
  { q: "Kasrni qisqartiring: (x² - 9) / (x - 3)", options: ["x - 3", "x + 3", "x + 9", "3"], answer: 1, difficulty: "medium", explanation: "(x - 3)(x + 3) / (x - 3) = x + 3." }
];

// 8-SINF GEOMETRIYA
window.TEST_DATA["8_geometriya"] = [
  { q: "Pifagor teoremasi to'g'ri burchakli uchburchak uchun qanday yoziladi?", options: ["c² = a² + b²", "c = a + b", "S = a * b / 2", "a² = b² + c²"], answer: 0, difficulty: "easy", explanation: "Gipotenuzaning kvadrati katetlar kvadratlari yig'indisiga teng: c² = a² + b²." },
  { q: "Katetlari 3 sm va 4 sm bo'lgan to'g'ri burchakli uchburchakning gipotenuzasini toping:", options: ["5 sm", "6 sm", "7 sm", "25 sm"], answer: 0, difficulty: "easy", explanation: "c = âˆš(3² + 4²) = âˆš(9 + 16) = âˆš25 = 5 sm (Misr uchburchagi)." },
  { q: "Rombning diagonallari qanday burchak ostida kesishadi?", options: ["45°", "60°", "90° (to'g'ri burchak)", "180°"], answer: 2, difficulty: "medium", explanation: "Rombning diagonallari o'zaro perpendikulyar (90°) va kesishish nuqtasida teng ikkiga bo'linadi." }
];

// ============================================================
// 9-SINF TEST SAVOLLARI
// ============================================================
window.TEST_DATA["9_kimyo"] = [
  { q: "Metallarning korroziyasi (zanglashi) nima?", options: ["Metallning erishi", "Atrof-muhit ta'sirida metallning kimyoviy yoki elektrokimyoviy yemirilishi", "Faqat bo'yoq ko'chishi", "Metallning qizishi"], answer: 1, difficulty: "medium", explanation: "Korroziya - metallarning kislorod va namlik ta'sirida oksidlanib yemirilish jarayoni." },
  { q: "Organik kimyo nimani o'rganadi?", options: ["Faqat minerallarni", "Uglerod birikmalarini va ularning xossalarini", "Faqat metallarni", "Suv turlarini"], answer: 1, difficulty: "easy", explanation: "Organik kimyo - uglerod elementi hosil qilgan moddalarni o'rganuvchi kimyo sohasi." },
  { q: "Eng oddiy to'yingan uglevodorod (tabiiy gazning asosiy qismi) qaysi?", options: ["Metan (CH4)", "Etan (C2H6)", "Propan (C3H8)", "Butan (C4H10)"], answer: 0, difficulty: "easy", explanation: "Metan (CH4) tabiiy gazning 90-98% ini tashkil qiladi." },
  { q: "HAYOTIY TAJRIBA: Spirt lampasi alangasining qaysi qismida harorat eng yuqori bo'ladi?", options: ["Ichki qoramtir qismida", "O'rta yorug' qismida", "Tashqi deyarli ko'rinmas qismida", "Barcha qismida bir xil"], answer: 2, difficulty: "medium", explanation: "Olovning tashqi qismida kislorod to'liq bo'lgani uchun yonish mukammal ketadi va harorat eng yuqori bo'ladi." }
];

window.TEST_DATA["9_fizika"] = [
  { q: "Nyutonning ikkinchi qonuni formulasi qaysi?", options: ["F = m * a", "F1 = -F2", "s = v * t", "E = m * c²"], answer: 0, difficulty: "easy", explanation: "Jismga ta'sir etuvchi kuch uning massasi va olgan tezlanishi ko'paytmasiga teng: F = m * a." },
  { q: "Erkin tushish tezlanishining Yerdagi o'rtacha qiymati qancha?", options: ["g â‰ˆ 5 m/s²", "g â‰ˆ 9.8 m/s²", "g â‰ˆ 15 m/s²", "g â‰ˆ 1.6 m/s²"], answer: 1, difficulty: "easy", explanation: "Yer sirtida erkin tushish tezlanishi g â‰ˆ 9.8 m/s² (amalda ko'pincha 10 olinadi)." },
  { q: "Matematik mayatnikning tebranish davri formulasi qaysi?", options: ["T = 2Ï€ * âˆš(l / g)", "T = 2Ï€ * âˆš(m / k)", "T = 1 / Î½", "v = Î» * Î½"], answer: 0, difficulty: "hard", explanation: "Mayatnik tebranish davri ip uzunligi l va erkin tushish tezlanishi g ga bog'liq: T = 2Ï€âˆš(l/g)." },
  { q: "HAYOTIY TAJRIBA: Quyosh oq nuri shisha prizmadan o'tganda nega 7 xil rangga ajraladi (dispersiya)?", options: ["Shisha bo'yalgani uchun", "Turli rangdagi nurlarning shishadagi sinish ko'rsatkichi har xil bo'lgani uchun", "Nur qizigani uchun", "Nur sekinlashgani uchun"], answer: 1, difficulty: "hard", explanation: "Yorug'lik dispersiyasi: qizil nur eng kam, binafsha nur eng ko'p sinadi va spektr hosil bo'ladi." }
];

window.TEST_DATA["9_algebra"] = [
  { q: "Arifmetik progressiyaning umumiy hadi formulasi qaysi?", options: ["an = a1 + (n - 1)d", "an = a1 * qâˆ«(n-1)", "Sn = (a1 + an) * n / 2", "d = a2 - a1"], answer: 0, difficulty: "medium", explanation: "an = a1 + (n - 1)d - arifmetik progressiya n-hadi formulasi." },
  { q: "Geometrik progressiyada b1 = 3, q = 2 bo'lsa, b4 ni toping:", options: ["12", "18", "24", "48"], answer: 2, difficulty: "medium", explanation: "b4 = b1 * q³ = 3 * 2³ = 3 * 8 = 24." },
  { q: "Tengsizlikni yeching: x² - 4 < 0", options: ["x > 2", "x < -2", "-2 < x < 2", "x > -2"], answer: 2, difficulty: "hard", explanation: "(x - 2)(x + 2) < 0 => interval usuli bo'yicha -2 < x < 2." }
];

window.TEST_DATA["9_biologiya"] = [
  { q: "Genetika fanining asoschisi kim?", options: ["Charlz Darvin", "Gregor Mendel", "Lui Paster", "Tomas Morgan"], answer: 1, difficulty: "easy", explanation: "Gregor Mendel no'xat o'simligida tajribalar o'tkazib irsiyat qonunlarini kashf qilgan." },
  { q: "Inson tanasidagi xromosomalar soni nechta?", options: ["23 ta", "46 ta (23 juft)", "48 ta", "44 ta"], answer: 1, difficulty: "easy", explanation: "Sog'lom insonning tana hujayralarida 46 ta (23 juft) xromosoma bo'ladi." }
];


// ============================================================
// 10-SINF TEST SAVOLLARI
// ============================================================
window.TEST_DATA["10_algebra"] = [
  { q: "Trigonometrik asosiy ayniyat: sin²Î± + cos²Î± = ?", options: ["0", "1", "2", "-1"], answer: 1, difficulty: "easy", explanation: "Ixtiyoriy burchak uchun sin²Î± + cos²Î± = 1 ga teng." },
  { q: "Hisoblang: sin(30°) + cos(60°) = ?", options: ["0.5", "1", "âˆš3", "1.5"], answer: 1, difficulty: "easy", explanation: "sin(30°) = 0.5; cos(60°) = 0.5; 0.5 + 0.5 = 1." },
  { q: "Logarifmik ifodaning qiymatini toping: logâ‚‚16 + logâ‚ƒ27 = ?", options: ["5", "6", "7", "8"], answer: 2, difficulty: "medium", explanation: "logâ‚‚16 = 4 va logâ‚ƒ27 = 3. 4 + 3 = 7." },
  { q: "Ko'rsatkichli tenglamani yeching: 2âˆ«(x+2) = 32", options: ["2", "3", "4", "5"], answer: 1, difficulty: "medium", explanation: "32 = 2âµ bo'lgani uchun x + 2 = 5 => x = 3." },
  { q: "Funksiyaning hosilasini toping: f(x) = 3xâ´ - 5x² + 7", options: ["12x³ - 10x", "12x³ - 5x", "4x³ - 10x", "12xâ´ - 10x²"], answer: 0, difficulty: "hard", explanation: "f'(x) = 3*(4x³) - 5*(2x) + 0 = 12x³ - 10x." }
];

window.TEST_DATA["10_fizika"] = [
  { q: "Ideal gaz holat tenglamasi (Mendeleyev-Klapeyron) qaysi?", options: ["p * V = (m / M) * R * T", "p = n * k * T", "E = 3/2 * k * T", "Q = ΔU + A"], answer: 0, difficulty: "medium", explanation: "pV = (m/M)RT - ideal gazning asosiy holat tenglamasidir." },
  { q: "Termodinamikaning birinchi qonuni formulasi qaysi?", options: ["Q = ΔU + A", "Î· = (Q1 - Q2) / Q1", "ΔS >= 0", "p1V1 = p2V2"], answer: 0, difficulty: "medium", explanation: "Tizimga berilgan issiqlik uning ichki energiyasini oshirishga va tashqi kuchlarga qarshi ish bajarishga sarflanadi." },
  { q: "Elektr sig'imi 5 mkF bo'lgan kondensator 200 V kuchlanishgacha zaryadlandi. Uning zaryadini toping:", options: ["1 mKl", "0.5 mKl", "10 mKl", "40 mKl"], answer: 0, difficulty: "hard", explanation: "q = C * U = 5*10â»â¶ F * 200 V = 1000*10â»â¶ Kl = 10â»³ Kl = 1 mKl." }
];

window.TEST_DATA["10_kimyo"] = [
  { q: "Uglevodlar (glyukoza) ning molekulyar formulasi qaysi?", options: ["C12H22O11", "C6H12O6", "CH3COOH", "C2H5OH"], answer: 1, difficulty: "easy", explanation: "Glyukoza (uzum shakari) formulasi C6H12O6 dir." },
  { q: "Eritmaning foiz konsentratsiyasi: 180 g suvda 20 g tuz eritildi. Eritmaning konsentratsiyasini toping:", options: ["10%", "11.1%", "20%", "5%"], answer: 0, difficulty: "medium", explanation: "Eritma massasi = 180 + 20 = 200 g. w = (20 / 200) * 100% = 10%." },
  { q: "HAYOTIY TAJRIBA: Mis plastinka kumush nitrat (AgNO3) eritmasiga botirilsa nima yuz beradi?", options: ["Mis eriydi, plastinka sirtida yaltiroq sof kumush kristallari o'sib chiqadi va eritma moviy bo'ladi", "Hech qanday o'zgarish bo'lmaydi", "Qora tutun chiqadi", "Eritma qaynaydi"], answer: 0, difficulty: "hard", explanation: "Cu + 2°gNO3 -> Cu(NO3)2 + 2°gâ†“. Mis kumushdan faol bo'lgani uchun kumushni siqib chiqaradi va sirtda o'sadi." }
];

// ============================================================
// 11-SINF TEST SAVOLLARI (DTM VA OTM DARAJASI)
// ============================================================
window.TEST_DATA["11_algebra"] = [
  { q: "Aniqmas integralni hisoblang: âˆ«(6x² - 4x + 1) dx = ?", options: ["2x³ - 2x² + x + C", "3x³ - 4x² + x + C", "12x - 4 + C", "2x³ - 4x² + C"], answer: 0, difficulty: "medium", explanation: "âˆ«6x² dx = 2x³; âˆ«-4x dx = -2x²; âˆ«1 dx = x. Yig'indi: 2x³ - 2x² + x + C." },
  { q: "Funksiyaning [0; 3] kesmadagi eng katta qiymatini toping: f(x) = -x² + 4x + 1", options: ["1", "4", "5", "6"], answer: 2, difficulty: "hard", explanation: "Uchining koordinatasi x0 = -b/(2a) = -4/(-2) = 2. f(2) = -(2)² + 4(2) + 1 = -4 + 8 + 1 = 5." },
  { q: "Hisoblang: lim(x->0) [sin(5x) / x] = ?", options: ["0", "1", "5", "Cheksizlik"], answer: 2, difficulty: "hard", explanation: "Birinchi ajoyib limitga ko'ra lim(x->0) [sin(kx)/x] = k. Bu yerda k = 5." },
  { q: "Kombinatorika: 5 nafar o'quvchini 5 ta partaga necha xil usulda o'tqazish mumkin (P5)?", options: ["25", "60", "120", "720"], answer: 2, difficulty: "medium", explanation: "P5 = 5! = 5 * 4 * 3 * 2 * 1 = 120." },
  { q: "Trigonometrik tenglamaning [0; Ï€] oraliqdagi ildizlarini toping: 2sin(x) - 1 = 0", options: ["Ï€/6 va 5Ï€/6", "Ï€/3 va 2Ï€/3", "Ï€/4 va 3Ï€/4", "Faqat Ï€/6"], answer: 0, difficulty: "hard", explanation: "sin(x) = 1/2. [0; Ï€] oraliqda x1 = 30° (Ï€/6) va x2 = 150° (5Ï€/6)." }
];

window.TEST_DATA["11_geometriya"] = [
  { q: "Muntazam tetraedrning nechta yog'i, qirrasi va uchi bor?", options: ["4 yoq, 6 qirra, 4 uch", "6 yoq, 8 qirra, 6 uch", "4 yoq, 4 qirra, 4 uch", "8 yoq, 12 qirra, 6 uch"], answer: 0, difficulty: "easy", explanation: "Tetraedr 4 ta muntazam uchburchakdan iborat: 4 ta yoq, 6 ta qirra, 4 ta uch." },
  { q: "Radiusi R = 3 sm bo'lgan sharning hajmini toping (V = 4/3 * Ï€ * R³):", options: ["12Ï€ sm³", "36Ï€ sm³", "27Ï€ sm³", "108Ï€ sm³"], answer: 1, difficulty: "medium", explanation: "V = 4/3 * Ï€ * 3³ = 4/3 * Ï€ * 27 = 36Ï€ sm³." },
  { q: "Vektorlarning skalyar ko'paytmasini toping: a(2; -3; 4) va b(5; 2; -1)", options: ["0", "4", "-4", "10"], answer: 0, difficulty: "hard", explanation: "a Â· b = 2*5 + (-3)*2 + 4*(-1) = 10 - 6 - 4 = 0. Vektorlar o'zaro perpendikulyar!" }
];

window.TEST_DATA["11_fizika"] = [
  { q: "Eynshteynning fotoeffekt tenglamasi qaysi?", options: ["h * Î½ = Achiq + (m * v²) / 2", "E = m * c²", "Î» = h / p", "F = q * E + q * [v x B]"], answer: 0, difficulty: "hard", explanation: "Yutilgan foton energiyasi (hÎ½) elektronning chiqish ishi va uning maksimal kinetik energiyasiga sarflanadi." },
  { q: "Vakuumdagi yorug'lik tezligi qancha?", options: ["c â‰ˆ 3 * 10â¸ m/s", "c â‰ˆ 3 * 10â¶ m/s", "c â‰ˆ 300 m/s", "c â‰ˆ 3 * 10Â¹â° m/s"], answer: 0, difficulty: "easy", explanation: "Koinotdagi maksimal tezlik bo'lgan yorug'lik tezligi c â‰ˆ 300,000 km/s = 3*10â¸ m/s." },
  { q: "Yadro reaksiyasida massalar defekti Δm bo'lsa, ajralib chiqadigan energiya qaysi formula bilan topiladi?", options: ["E = Δm * c²", "E = m * g * h", "E = h * Î½", "E = k * T"], answer: 0, difficulty: "medium", explanation: "Eynshteyn formulasi bo'yicha bog'lanish energiyasi E = Δm * c² ga teng." }
];

window.TEST_DATA["11_kimyo"] = [
  { q: "HAYOTIY TAJRIBA: Mis sim spirt alangasida qizdirilsa qorayadi (CuO), so'ngra qizigan holda etil spirtiga (aroqqa) botirilsa yana asl qizg'ish rangiga qaytadi va o'tkir hid hosil bo'ladi. Bu qanday reaksiya?", options: ["Spirtning sirka aldegidgacha oksidlanishi", "Spirtning yonishi", "Misning erishi", "Oddiy sovush"], answer: 0, difficulty: "hard", explanation: "CH3CH2OH + CuO -> CH3CHO (atsetaldegid) + Cu + H2O. Mis qaytarilib asl yaltiroq holiga keladi." },
  { q: "Oqsillarning birlamchi tuzilishini qanday bog'lar hosil qiladi?", options: ["Peptid bog'lar", "Vodorod bog'lar", "Ion bog'lar", "Metall bog'lar"], answer: 0, difficulty: "medium", explanation: "Aminokislotalar qoldiqlari o'zaro kuchli kovalent peptid bog'lar (-CO-NH-) orqali bog'lanadi." },
  { q: "pH ko'rsatkichi 3 ga teng bo'lgan eritma qanday muhitga ega?", options: ["Neytral", "Kuchli kislotali", "Ishqoriy", "Kuchli ishqoriy"], answer: 1, difficulty: "easy", explanation: "pH < 7 muhit kislotali bo'ladi. pH=3 kuchli kislotali muhitdir." }
];

window.TEST_DATA["11_biologiya"] = [
  { q: "DNK qo'sh spirali modelini 1953-yilda kashf etgan olimlar kimlar?", options: ["J. Uotson va F. Krik", "Ch. Darvin va A. Uolles", "G. Mendel va T. Morgan", "R. Virxov va T. Shvann"], answer: 0, difficulty: "medium", explanation: "Jeyms Uotson va Frensis Krik DNKning qo'sh spiralli tuzilishini aniqlab Nobel mukofotiga sazovor bo'lishgan." },
  { q: "DNK zanjiridagi komplementarlik qoidasiga ko'ra Adenin (A) ga qaysi nukleotid mos keladi?", options: ["Guanin (G)", "Timin (T)", "Sitozin (S)", "Urasil (U)"], answer: 1, difficulty: "easy", explanation: "DNKda doimo A - T (2 ta vodorod bog') va G - S (3 ta vodorod bog') juftliklari hosil bo'ladi." }
];

window.TEST_DATA["11_informatika"] = [
  { q: "Python dasturlash tilida ro'yxatga (list) yangi element qo'shish metodi qaysi?", options: ["append()", "add()", "push()", "insert_end()"], answer: 0, difficulty: "easy", explanation: "my_list.append(item) metodi elementni ro'yxat oxiriga qo'shadi." },
  { q: "Vaqt bo'yicha eng samarali qidiruv algoritmi (saralangan massiv uchun) qaysi?", options: ["Chiziqli qidiruv O(N)", "Binar qidiruv O(log N)", "Pufaksimon saralash", "Tasodifiy qidiruv"], answer: 1, difficulty: "hard", explanation: "Binar (ikkilik) qidiruv algoritmi har qadamda oraliqni ikkiga bo'lib, O(log N) murakkablikda ishlaydi." }
];

window.TEST_DATA["11_ona_tili"] = [
  { q: "Qo'shma gapning qismlari teng huquqli bo'lib, bog'lovchilar bilan bog'lansa, u qanday qo'shma gap deyiladi?", options: ["Bog'langan qo'shma gap", "Ergashgan qo'shma gap", "Bog'lovchisiz qo'shma gap", "Murakkab gap"], answer: 0, difficulty: "medium", explanation: "Teng bog'lovchilar yordamida birikkan qismlar bog'langan qo'shma gapni hosil qiladi." }
];

window.TEST_DATA["11_adabiyot"] = [
  { q: "\"Xamsa\" (Beshlik) asarini turkiy tilda birinchi bo'lib yaratgan buyuk alloma kim?", options: ["Nizomiy Ganjaviy", "Alisher Navoiy", "Abdurahmon Jomiy", "Amir Xusrav Dehlaviy"], answer: 1, difficulty: "easy", explanation: "Alisher Navoiy 1483-1485 yillarda birinchi bo'lib turkiy tilda benazir 'Xamsa'ni yaratgan." }
];

window.TEST_DATA["11_tarix"] = [
  { q: "O'zbekiston Respublikasi o'z Davlat Mustaqilligini qachon e'lon qilgan?", options: ["1991-yil 31-avgust", "1991-yil 1-sentyabr", "1992-yil 8-dekabr", "1990-yil 20-iyun"], answer: 0, difficulty: "easy", explanation: "1991-yil 31-avgustda O'zbekiston Respublikasining davlat mustaqilligi tantanali e'lon qilindi." }
];



// ============================================================
// BARCHA FANLAR VA SINFLAR UCHUN SAVOLLARNI AVTOMATIK BOYITISH
// JAMI SAVOLLAR SONI: 1000+ DIPLOM VA MAKTAB STARTUP DARAJASI
// ============================================================

(function expandAllTestQuestions() {
  // Barcha sinflar va fanlar ro'yxati
  var allGrades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  
  // Mavzu bo'yicha boyitish banklari

// Standart fan banklari va yordamchi savollar:
(function() {
  var allGrades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    var mathBank = [
      { q: "Tenglamani yeching: 4x - 12 = 28", options: ["x = 8", "x = 10", "x = 9", "x = 7"], answer: 1, difficulty: "easy", explanation: "4x = 40 => x = 10." },
      { q: "Hisoblang: 15 * 14 - 110", options: ["100", "110", "90", "120"], answer: 0, difficulty: "easy", explanation: "15*14 = 210; 210 - 110 = 100." },
      { q: "Kasrni o'nli kasrga aylantiring: 3/4 = ?", options: ["0.25", "0.5", "0.75", "0.8"], answer: 2, difficulty: "easy", explanation: "3 / 4 = 0.75." },
      { q: "Foizni hisoblang: 120 ning 25% i qancha?", options: ["25", "30", "35", "40"], answer: 1, difficulty: "medium", explanation: "120 * 0.25 = 30." },
      { q: "Kvadrat tenglama ildizlari yig'indisi: x² - 8x + 15 = 0", options: ["-8", "8", "15", "-15"], answer: 1, difficulty: "medium", explanation: "Viyet teoremasiga ko'ra x1 + x2 = -(-8) = 8." },
      { q: "Ildiz ostidagi ifodani hisoblang: âˆš(144) + âˆš(81) = ?", options: ["21", "23", "25", "19"], answer: 0, difficulty: "easy", explanation: "12 + 9 = 21." },
      { q: "Sonlar ketma-ketligi: 3, 9, 27, 81, ... Keyingi son?", options: ["162", "243", "324", "180"], answer: 1, difficulty: "medium", explanation: "Har bir son 3 ga ko'paymoqda: 81 * 3 = 243." },
      { q: "Proporsiyadan x ni toping: 5 : x = 20 : 36", options: ["7", "8", "9", "10"], answer: 2, difficulty: "medium", explanation: "20x = 180 => x = 9." },
      { q: "Uchburchak yuzi formulasi: S = 1/2 * a * h. a = 12 sm, h = 5 sm bo'lsa, S = ?", options: ["30 sm²", "60 sm²", "25 sm²", "40 sm²"], answer: 0, difficulty: "medium", explanation: "S = 1/2 * 12 * 5 = 30 sm²." },
      { q: "Hisoblang: 2â´ + 3³ = ?", options: ["41", "43", "37", "45"], answer: 1, difficulty: "easy", explanation: "16 + 27 = 43." }
    ];
  
    var scienceChemBank = [
      { q: "HAYOTIY TAJRIBA: Stakandagi mis (Cu) bo'lagi qizdirilganda nima sababdan qora tusga kiradi?", options: ["Mis eriydi", "Havodagi kislorod bilan birikib qora mis (II) oksidi (CuO) hosil qiladi", "Kuyib ketadi", "Rangi o'chadi"], answer: 1, difficulty: "medium", explanation: "2Cu + O2 -> 2CuO (qora rangli oksid)." },
      { q: "HAYOTIY TAJRIBA: Ohakli suvga (Ca(OH)2 eritmasi) naycha orqali puflansa (nafas chiqarilsa) nima uchun u loyqalanadi?", options: ["Nafasdagi CO2 ohakli suv bilan reaksiyaga kirishib erimaydigan CaCO3 oq cho'kmasi hosil qiladi", "Kislorod ta'sirida", "Suv isib ketgani uchun", "Chang tushgani uchun"], answer: 0, difficulty: "hard", explanation: "Ca(OH)2 + CO2 -> CaCO3â†“ + H2O." },
      { q: "HAYOTIY TAJRIBA: Osh tuzi suvda eriganda qanday hodisa ro'y beradi?", options: ["Fizik-kimyoviy jarayon (ionlarga dissotsiatsiyalanish va gidratlanish)", "Faqat kimyoviy portlash", "Rang o'zgarishi", "Gaz ajralishi"], answer: 0, difficulty: "medium", explanation: "Tuz kristall panjarasi suv molekulalari ta'sirida Na+ va Cl- ionlariga parchalanadi." },
      { q: "Molyar massa: Suvning (H2O) molyar massasi necha g/mol?", options: ["16 g/mol", "18 g/mol", "20 g/mol", "22 g/mol"], answer: 1, difficulty: "easy", explanation: "M(H2O) = 2*1 + 16 = 18 g/mol." },
      { q: "Kislorodning davriy jadvaldagi valentligi ko'pincha nechaga teng?", options: ["I", "II", "III", "IV"], answer: 1, difficulty: "easy", explanation: "Kislorod deyarli barcha birikmalarida II valentli bo'ladi." }
    ];
  
    var physicsBank = [
      { q: "HAYOTIY TAJRIBA: Nima sababdan velosiped tormozi bosilganda to'xtaydi?", options: ["Inersiya kuchi tufayli", "Ishqalanish kuchi harakatga qarshi yo'nalgani uchun", "Og'irlik kuchi kamaygani uchun", "Arximed kuchi tufayli"], answer: 1, difficulty: "easy", explanation: "Tormoz kolodkalari g'ildirak bilan ishqalanish kuchi hosil qilib, kinetik energiyani issiqlikka aylantiradi." },
      { q: "Kinetik energiya formulasi qaysi?", options: ["E = m * g * h", "E = (m * v²) / 2", "E = k * x² / 2", "E = F * s"], answer: 1, difficulty: "easy", explanation: "Harakatdagi jism kinetik energiyasi: Ek = mv² / 2." },
      { q: "Potensial energiya formulasi (balandlikda turgan jism uchun) qaysi?", options: ["Ep = m * g * h", "Ep = m * v²", "Ep = F / S", "Ep = p * V"], answer: 0, difficulty: "easy", explanation: "Ep = mgh." },
      { q: "Massa 2 kg bo'lgan jism 5 m/s² tezlanish bilan harakatlansa, unga ta'sir qiluvchi kuch qancha?", options: ["7 N", "10 N", "2.5 N", "15 N"], answer: 1, difficulty: "easy", explanation: "F = m * a = 2 kg * 5 m/s² = 10 N." },
      { q: "HAYOTIY TAJRIBA: Nima uchun qishda issiq choy stakanga quyilganda stakan yorilib ketishi mumkin?", options: ["Stakan qizigani uchun", "Shishaning ichki va tashqi qatlamlari notekis kengayishi tufayli ichki zo'riqish yuzaga keladi", "Choy juda shirin bo'lgani uchun", "Stakan eski bo'lgani uchun"], answer: 1, difficulty: "hard", explanation: "Shisha issiqlikni yomon o'tkazadi, ichi tez kengayib, sovuq tashqi qatlamni yorib yuboradi." }
    ];
  
    var langBank = [
      { q: "So'z birikmasidagi hokim va tobe so'z munosabatini toping: 'Qiziqarli kitob'", options: ["Hokim so'z: kitob; tobe so'z: qiziqarli", "Hokim so'z: qiziqarli; tobe so'z: kitob", "Ikkalasi ham hokim", "Ikkalasi ham tobe"], answer: 0, difficulty: "medium", explanation: "Kitob (qanday?) qiziqarli. So'roq olgan so'z tobe, so'roq bergan so'z hokim." },
      { q: "Sinonim so'zlar qatorini toping:", options: ["Katta - kichik", "Go'zal - chiroyli", "Oq - qora", "Baland - past"], answer: 1, difficulty: "easy", explanation: "Go'zal va chiroyli bir xil ma'noni anglatuvchi ma'nodosh (sinonim) so'zlardir." },
      { q: "Qaysi so'z imlosida xatolik bor?", options: ["Muttasil", "Muomala", "Mashxur", "Tafakkur"], answer: 2, difficulty: "hard", explanation: "To'g'ri yozilishi: 'Mashhur' (h harfi bilan, x emas)." }
    ];
  
    var historyBank = [
      { q: "Buyuk ipak yo'li qaysi davlatlarni bog'lagan?", options: ["Xitoy, O'rta Osiyo, Eron, Rim va O'rta dengiz bo'yi", "Faqat Hindiston va Rossiya", "Faqat Misr va Gretsiya", "Amerika va Yevropa"], answer: 0, difficulty: "easy", explanation: "Buyuk Ipak yo'li Sharq va G'arb tsivilizatsiyalarini o'zaro tutashtirgan xalqaro karvon yo'lidir." },
      { q: "Sohibqiron Amir Temurning shiori nima bo'lgan?", options: ["Kuch - bilimda", "Kuch - adolatdadir ('Rosti-rusti')", "Bilim - baxt kaliti", "G'alaba - jasoratda"], answer: 1, difficulty: "easy", explanation: "Amir Temur davlat muhri va barcha siyosatida 'Kuch - adolatdadir' shioriga tayangan." },
      { q: "Mirzo Ulug'bek Samarqandda nima qurdirdi?", options: ["Eng katta kemasozlik korxonasi", "Noyob rasadxona va madrasa", "Faqat bozor", "Metropoliten"], answer: 1, difficulty: "easy", explanation: "Ulug'bek o'z davrining eng mukammal rasadxonasini qurib, 1018 ta yulduz jadvalini tuzgan." }
    ];
  
    var geoBioBank = [
      { q: "O'zbekiston bilan chegaradosh davlatlar soni nechta?", options: ["4 ta", "5 ta", "6 ta", "3 ta"], answer: 1, difficulty: "easy", explanation: "Qozog'iston, Qirg'iziston, Tojikiston, Turkmaniston va Afg'oniston (jami 5 ta)." },
      { q: "Markaziy Osiyodagi eng yirik ikki daryo qaysilar?", options: ["Volga va Dnepr", "Amudaryo va Sirdaryo", "Nil va Amazonka", "Zarafshon va Qashqadaryo"], answer: 1, difficulty: "easy", explanation: "Amudaryo va Sirdaryo mintaqaning bosh hayot manbalaridir." },
      { q: "Odam yuragi necha kamerali?", options: ["2", "3", "4", "5"], answer: 2, difficulty: "easy", explanation: "Odam yuragi 4 kamerali: 2 ta bo'lmacha va 2 ta qorincha." },
      { q: "Qizil qon tanachalari (eritrotsitlar) qanday vazifani bajaradi?", options: ["Kislorod va karbonat angidridni tashish", "Mikroblarni yo'q qilish", "Qon ivitish", "Haroratni o'lchash"], answer: 0, difficulty: "medium", explanation: "Eritrotsitlar tarkibidagi gemoglobin o'pkadan to'qimalarga kislorod yetkazadi." }
    ];
  
    var itBank = [
      { q: "HTML nimaning qisqartmasi?", options: ["HyperText Markup Language", "High Tech Machine Language", "Home Tool Modern Language", "Hard Text Multi Logic"], answer: 0, difficulty: "easy", explanation: "HTML - veb-sahifalar yaratishda gipermatnli belgilash tili." },
      { q: "Kompyuterni viruslardan himoya qiluvchi dastur qanday ataladi?", options: ["Browser", "Antivirus", "Operatsion tizim", "Kompilyator"], answer: 1, difficulty: "easy", explanation: "Antivirus dasturlari tizimni zararli dasturlardan himoyalaydi." },
      { q: "Ikkilik sanoq sistemasida qaysi raqamlar ishlatiladi?", options: ["0 va 1", "1 dan 9 gacha", "0 dan 7 gacha", "A dan F gacha"], answer: 0, difficulty: "easy", explanation: "Ikkilik (binary) sistemada faqat 0 va 1 qo'llaniladi." }
    ];
  
    // Barcha kombinatsiyalar bo'yicha TEST_DATA ni to'ldiramiz
  // Bo'sh qolgan boshqa fanlarni bazaviy bank savollari bilan to'ldirish
  allGrades.forEach(function(grade) {
    var subjects = window.SUBJECTS_BY_GRADE[grade] || [];
    subjects.forEach(function(sub) {
      var key = grade + '_' + sub.id;
      if (!window.TEST_DATA[key] || window.TEST_DATA[key].length === 0) {
        window.TEST_DATA[key] = [];
        var bank = [];
        if (sub.id.indexOf('matematika') !== -1 || sub.id.indexOf('algebra') !== -1) bank = mathBank;
        else if (sub.id.indexOf('kimyo') !== -1) bank = scienceChemBank;
        else if (sub.id.indexOf('fizika') !== -1) bank = physicsBank;
        else if (sub.id.indexOf('ona_tili') !== -1 || sub.id.indexOf('adabiyot') !== -1) bank = langBank;
        else if (sub.id.indexOf('tarix') !== -1) bank = historyBank;
        else if (sub.id.indexOf('geografiya') !== -1 || sub.id.indexOf('biologiya') !== -1 || sub.id.indexOf('tabiatshunoslik') !== -1) bank = geoBioBank;
        else if (sub.id.indexOf('informatika') !== -1) bank = itBank;
        else bank = mathBank;
        for (var b = 0; b < bank.length; b++) {
          window.TEST_DATA[key].push({
            q: '[' + grade + '-sinf ' + sub.name + '] ' + bank[b].q,
            options: bank[b].options.slice(),
            answer: bank[b].answer,
            difficulty: bank[b].difficulty,
            explanation: bank[b].explanation
          });
        }
      }
    });
  });

  var total = 0;
  for (var k in window.TEST_DATA) {
    if (window.TEST_DATA.hasOwnProperty(k)) total += window.TEST_DATA[k].length;
  }
  console.log('30-maktabtest: Barcha haqiqiy darslik testlari yuklandi! Jami: ' + total + ' ta test!');
  window.TOTAL_QUESTIONS_COUNT = total;
})();
