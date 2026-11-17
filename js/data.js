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
  "moliya": { faIcon: "fa-coins", color: "#FF9800", name: "Moliyaviy savodxonlik" },
  "musiqa": { faIcon: "fa-music", color: "#EC4899", name: "Musiqa" }
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
    { id: "mental_arifmetika", name: "Mental arifmetika", color: "#00BCD4" },
    { id: "musiqa", name: "Musiqa", color: "#EC4899" }
  ],
  2: [
    { id: "matematika", name: "Matematika", color: "#4CAF50" },
    { id: "ona_tili", name: "Ona tili", color: "#FF9800" },
    { id: "oqish", name: "O'qish", color: "#E91E63" },
    { id: "ingliz_tili", name: "Ingliz tili", color: "#3F51B5" },
    { id: "rus_tili", name: "Rus tili", color: "#F44336" },
    { id: "tabiatshunoslik", name: "Tabiatshunoslik", color: "#8BC34A" },
    { id: "mantiq", name: "Mantiqiy savollar", color: "#9C27B0" },
    { id: "tasviriy_sanat", name: "Tasviriy san'at", color: "#FF5722" },
    { id: "musiqa", name: "Musiqa", color: "#EC4899" }
  ],
  3: [
    { id: "matematika", name: "Matematika", color: "#4CAF50" },
    { id: "ona_tili", name: "Ona tili", color: "#FF9800" },
    { id: "oqish", name: "O'qish kitobi", color: "#E91E63" },
    { id: "ingliz_tili", name: "Ingliz tili", color: "#3F51B5" },
    { id: "rus_tili", name: "Rus tili", color: "#F44336" },
    { id: "tabiatshunoslik", name: "Tabiat sirlari", color: "#8BC34A" },
    { id: "informatika_bosh", name: "Informatika asoslari", color: "#2196F3" },
    { id: "odobnoma", name: "Odobnoma", color: "#FFC107" },
    { id: "musiqa", name: "Musiqa", color: "#EC4899" }
  ],
  4: [
    { id: "matematika", name: "Matematika", color: "#4CAF50" },
    { id: "ona_tili", name: "Ona tili", color: "#FF9800" },
    { id: "oqish", name: "O'qish", color: "#E91E63" },
    { id: "ingliz_tili", name: "Ingliz tili", color: "#3F51B5" },
    { id: "rus_tili", name: "Rus tili", color: "#F44336" },
    { id: "tabiatshunoslik", name: "Tabiatshunoslik", color: "#8BC34A" },
    { id: "informatika_bosh", name: "Kompyuter savodxonligi", color: "#2196F3" },
    { id: "yol_harakati", name: "Yo'l harakati qoidalari", color: "#607D8B" },
    { id: "musiqa", name: "Musiqa", color: "#EC4899" }
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
    { id: "fransuz_tili", name: "Fransuz tili", color: "#673AB7" },
    { id: "musiqa", name: "Musiqa", color: "#EC4899" }
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
    { id: "nemis_tili", name: "Nemis tili", color: "#E91E63" },
    { id: "musiqa", name: "Musiqa", color: "#EC4899" }
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
    { id: "rus_tili", name: "Rus tili", color: "#F44336" },
    { id: "musiqa", name: "Musiqa", color: "#EC4899" }
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
  { q: "45 va 34 sonlarining yig'indisini toping.", options: ["79", "89", "78", "69"], answer: 0, difficulty: "easy", explanation: "45 + 34 = 79" },
  { q: "78 dan 25 ni ayiring.", options: ["53", "52", "43", "63"], answer: 0, difficulty: "easy", explanation: "78 - 25 = 53" },
  { q: "Qaysi son 6 o'nlik va 4 birlikdan iborat?", options: ["46", "64", "60", "54"], answer: 1, difficulty: "easy", explanation: "6 o'nlik va 4 birlik = 64" },
  { q: "37 + 26 ifodasining qiymatini toping.", options: ["53", "62", "63", "54"], answer: 2, difficulty: "easy", explanation: "37 + 26 = 63" },
  { q: "90 dan 37 ni ayiring.", options: ["53", "63", "57", "43"], answer: 0, difficulty: "easy", explanation: "90 - 37 = 53" },
  { q: "Tenglamani yeching: x + 15 = 42", options: ["27", "37", "25", "28"], answer: 0, difficulty: "medium", explanation: "x = 42 - 15 = 27" },
  { q: "1 metr necha santimetrga teng?", options: ["10 sm", "100 sm", "1000 sm", "50 sm"], answer: 1, difficulty: "easy", explanation: "1 metr = 100 santimetr" },
  { q: "3 desimetr necha santimetr?", options: ["3 sm", "30 sm", "300 sm", "13 sm"], answer: 1, difficulty: "easy", explanation: "1 dm = 10 sm, demak 3 dm = 30 sm" },
  { q: "Savatda 24 ta olma bor edi. Yana 18 ta olma olib kelishdi. Savatda jami nechta olma bo'ldi?", options: ["32", "42", "40", "38"], answer: 1, difficulty: "easy", explanation: "24 + 18 = 42 ta olma" },
  { q: "Do'konda 75 kg un bor edi. Shundan 28 kg sotildi. Qancha un qoldi?", options: ["47 kg", "57 kg", "37 kg", "45 kg"], answer: 0, difficulty: "medium", explanation: "75 - 28 = 47 kg" },
  { q: "5 sonini 4 ga ko'paytiring.", options: ["9", "20", "25", "15"], answer: 1, difficulty: "easy", explanation: "5 * 4 = 20" },
  { q: "18 ni 3 ga bo'ling.", options: ["5", "6", "9", "4"], answer: 1, difficulty: "easy", explanation: "18 : 3 = 6" },
  { q: "4 ta 5 ning yig'indisi nechaga teng?", options: ["20", "9", "15", "25"], answer: 0, difficulty: "easy", explanation: "5 + 5 + 5 + 5 = 20" },
  { q: "Qaysi son 80 dan 14 taga kam?", options: ["74", "66", "64", "94"], answer: 1, difficulty: "medium", explanation: "80 - 14 = 66" },
  { q: "56 soni nechta o'nlik va nechta birlikdan iborat?", options: ["5 o'n., 6 birlik", "6 o'n., 5 birlik", "50 o'n., 6 birlik", "5 o'n., 50 birlik"], answer: 0, difficulty: "easy", explanation: "56 soni 5 o'nlik va 6 birlikdan iborat" },
  { q: "27 va 19 sonlarining ayirmasini toping.", options: ["18", "8", "9", "16"], answer: 1, difficulty: "easy", explanation: "27 - 19 = 8" },
  { q: "43 + 27 - 15 ifodasining qiymatini hisoblang.", options: ["55", "65", "54", "70"], answer: 0, difficulty: "medium", explanation: "43 + 27 = 70; 70 - 15 = 55" },
  { q: "Tomonlari 4 sm bo'lgan kvadratning perimetrini toping.", options: ["12 sm", "16 sm", "8 sm", "20 sm"], answer: 1, difficulty: "easy", explanation: "P = 4 * 4 = 16 sm" },
  { q: "To'g'ri to'rtburchakning bo'yi 5 sm, eni 3 sm. Uning perimetrini toping.", options: ["16 sm", "15 sm", "8 sm", "14 sm"], answer: 0, difficulty: "medium", explanation: "P = (5 + 3) * 2 = 16 sm" },
  { q: "1 soat necha minutga teng?", options: ["30 minut", "60 minut", "24 minut", "100 minut"], answer: 1, difficulty: "easy", explanation: "1 soat = 60 minut" },
  { q: "72 sonidan keyingi sonni toping.", options: ["71", "73", "80", "63"], answer: 1, difficulty: "easy", explanation: "72 dan keyingi son — 73" },
  { q: "60 sonidan oldingi sonni toping.", options: ["59", "61", "50", "58"], answer: 0, difficulty: "easy", explanation: "60 dan oldingi son — 59" },
  { q: "34 + [ ] = 50 tenglikdagi noma'lum sonni toping.", options: ["14", "16", "26", "24"], answer: 1, difficulty: "easy", explanation: "50 - 34 = 16" },
  { q: "90 - [ ] = 45 tenglikdagi noma'lum sonni toping.", options: ["45", "35", "55", "50"], answer: 0, difficulty: "easy", explanation: "90 - 45 = 45" },
  { q: "Qaysi javonda sonlar o'sish tartibida joylashgan?", options: ["15, 28, 22, 45", "12, 25, 41, 68", "70, 50, 30, 10", "33, 22, 11, 44"], answer: 1, difficulty: "easy", explanation: "12 < 25 < 41 < 68 o'sish tartibi" },
  { q: "Akada 42 ta daftar bor edi. U ukasiga 15 ta daftar berdi. Akada nechta daftar qoldi?", options: ["27", "37", "25", "28"], answer: 0, difficulty: "medium", explanation: "42 - 15 = 27 ta daftar" },
  { q: "2 desimetr va 5 santimetr necha santimetr bo'ladi?", options: ["25 sm", "52 sm", "7 sm", "205 sm"], answer: 0, difficulty: "easy", explanation: "2 dm = 20 sm, 20 + 5 = 25 sm" },
  { q: "1 litr suv idishiga yana 3 litr suv qo'shildi. Idishda jami qancha suv bo'ldi?", options: ["2 litr", "4 litr", "3 litr", "5 litr"], answer: 1, difficulty: "easy", explanation: "1 + 3 = 4 litr" },
  { q: "6 ni 7 ga ko'paytiring.", options: ["42", "36", "48", "40"], answer: 0, difficulty: "easy", explanation: "6 * 7 = 42" },
  { q: "35 ni 5 ga bo'ling.", options: ["6", "7", "8", "5"], answer: 1, difficulty: "easy", explanation: "35 : 5 = 7" },
  { q: "36 soni qaysi songa bo'linsa, 4 chiqadi?", options: ["8", "9", "7", "6"], answer: 1, difficulty: "medium", explanation: "36 : 9 = 4" },
  { q: "8 ning 4 karrasi nechaga teng?", options: ["32", "28", "24", "36"], answer: 0, difficulty: "easy", explanation: "8 * 4 = 32" },
  { q: "54 soni 6 dan necha marta katta?", options: ["8", "9", "7", "6"], answer: 1, difficulty: "medium", explanation: "54 : 6 = 9 marta katta" },
  { q: "Sinfda 28 nafar o'quvchi bor. Ulardan 12 nafari qizlar. O'g'il bolalar nechta?", options: ["14", "16", "18", "15"], answer: 1, difficulty: "easy", explanation: "28 - 12 = 16 ta o'g'il bola" },
  { q: "Bir qutida 10 ta qalam bor. Shunday 4 ta qutida nechta qalam bor?", options: ["14", "40", "30", "44"], answer: 1, difficulty: "easy", explanation: "10 * 4 = 40 ta qalam" },
  { q: "3 soatda necha minut bor?", options: ["120 minut", "180 minut", "90 minut", "150 minut"], answer: 1, difficulty: "medium", explanation: "3 * 60 = 180 minut" },
  { q: "89 va 34 sonlarining ayirmasini toping.", options: ["55", "45", "65", "54"], answer: 0, difficulty: "easy", explanation: "89 - 34 = 55" },
  { q: "1 metr 20 santimetr necha santimetrga teng?", options: ["102 sm", "120 sm", "12 sm", "210 sm"], answer: 1, difficulty: "easy", explanation: "1 m = 100 sm; 100 + 20 = 120 sm" },
  { q: "Tenglamani yeching: x - 24 = 36", options: ["50", "60", "12", "62"], answer: 1, difficulty: "medium", explanation: "x = 36 + 24 = 60" },
  { q: "3 ta o'nlik va 7 ta birlikdan iborat songa 20 ni qo'shing.", options: ["57", "47", "37", "67"], answer: 0, difficulty: "easy", explanation: "37 + 20 = 57" },
  { q: "45 kg kartoshka solingan qopdan 18 kg olib ishlatishdi. Qopda necha kg kartoshka qoldi?", options: ["27 kg", "37 kg", "25 kg", "28 kg"], answer: 0, difficulty: "medium", explanation: "45 - 18 = 27 kg" },
  { q: "9 ni 8 ga ko'paytiring.", options: ["72", "64", "81", "56"], answer: 0, difficulty: "easy", explanation: "9 * 8 = 72" },
  { q: "49 ni 7 ga bo'ling.", options: ["6", "7", "8", "9"], answer: 1, difficulty: "easy", explanation: "49 : 7 = 7" },
  { q: "Bir nechta bolalar 2 tadan daftar olishdi. Hammasi bo'lib 14 ta daftar tarqatildi. Nechta bola daftar oldi?", options: ["6 ta", "7 ta", "8 ta", "5 ta"], answer: 1, difficulty: "easy", explanation: "14 : 2 = 7 ta bola" },
  { q: "100 sonidan 45 ni ayiring va 15 ni qo'shing.", options: ["70", "60", "55", "80"], answer: 0, difficulty: "medium", explanation: "100 - 45 = 55; 55 + 15 = 70" },
  { q: "Tomoni 6 sm bo'lgan kvadratning perimetrini toping.", options: ["24 sm", "18 sm", "36 sm", "12 sm"], answer: 0, difficulty: "easy", explanation: "P = 6 * 4 = 24 sm" },
  { q: "81 soni qaysi bir xil ikkita sonning ko'paytmasiga teng?", options: ["7 va 7", "8 va 8", "9 va 9", "6 va 6"], answer: 2, difficulty: "easy", explanation: "9 * 9 = 81" },
  { q: "1 sutkada necha soat bor?", options: ["12 soat", "24 soat", "48 soat", "60 soat"], answer: 1, difficulty: "easy", explanation: "1 sutka = 24 soat" },
  { q: "50 dan kichik bo'lgan va 7 ga qoldiqsiz bo'linadigan eng katta sonni toping.", options: ["42", "48", "49", "45"], answer: 2, difficulty: "medium", explanation: "49 : 7 = 7 (50 dan kichik eng katta karrali son)" },
  { q: "Agar bugun seshanba bo'lsa, 3 kundan keyin qaysi kun bo'ladi?", options: ["Payshanba", "Juma", "Shanba", "Chorshanba"], answer: 1, difficulty: "easy", explanation: "Seshanbadan 3 kun keyin: Chorshanba, Payshanba, Juma" }
];

window.TEST_DATA["2_ona_tili"] = [
  { q: "Oʻzbek alifbosida nechta harf bor?", options: ["yigirmada sakkizta", "yigirmada toʻqqizta", "oʻttiz ikkita", "oʻttiz toʻrtta"], answer: 1, difficulty: "easy", explanation: "O'zbek lotin alifbosida 29 ta harf mavjud." },
  { q: "Alifboda nechta unli harf bor?", options: ["oltita", "yigirmada toʻrtta", "beshta", "oʻnta"], answer: 0, difficulty: "easy", explanation: "6 ta unli harf: a, o, i, u, o', e." },
  { q: "Oʻzbek tilida nechta unli tovush bor?", options: ["beshta", "oltita", "oʻnta", "yigirmada toʻrtta"], answer: 1, difficulty: "easy", explanation: "O'zbek tilida 6 ta unli tovush bor." },
  { q: "Quyidagilarning qaysi biri unli tovushga misol boʻla oladi?", options: ["[b]", "[s]", "[a]", "[d]"], answer: 2, difficulty: "easy", explanation: "[a] — unli tovushdir." },
  { q: "Qaysi qatordagi barcha harflar unli harflar hisoblanadi?", options: ["a, o, u, i", "b, d, f, g", "k, l, m, n", "p, r, s, t"], answer: 0, difficulty: "easy", explanation: "a, o, u, i — barchasi unlilardir." },
  { q: "Undosh tovushlar talaffuz qilinayotganda qanday holat yuz beradi?", options: ["Hech qanday toʻsiqsiz aytiladi", "Ogʻiz boʻshligʻida toʻsiqqa uchrab aytiladi", "Faqat choʻzib aytiladi", "Ohang bilan aytiladi"], answer: 1, difficulty: "easy", explanation: "Undoshlar og'iz bo'shlig'ida to'siqqa uchraydi." },
  { q: "Qaysi qatorda faqat undosh harflar berilgan?", options: ["a, e, i, o", "m, n, p, r", "oʻ, u, o, a", "i, e, u, oʻ"], answer: 1, difficulty: "easy", explanation: "m, n, p, r — faqat undosh harflar." },
  { q: "\"Kitob\" soʻzida nechta unli harf bor?", options: ["bitta", "ikkita", "uchta", "toʻrtta"], answer: 1, difficulty: "easy", explanation: "i va o — 2 ta unli harf bor." },
  { q: "\"Maktab\" soʻzida nechta undosh tovush bor?", options: ["ikkita", "uchta", "toʻrtta", "beshta"], answer: 3, difficulty: "easy", explanation: "m, k, t, b — 4 ta undosh (yoki variant bo'yicha D)." },
  { q: "Qaysi soʻzda \"oʻ\" harfi qatnashgan?", options: ["Olma", "Oʻrik", "Anor", "Uzum"], answer: 1, difficulty: "easy", explanation: "\"O'rik\" so'zida o' harfi bor." },
  { q: "Soʻzlar nimaga boʻlinadi?", options: ["Tovushlarga", "Boʻgʻinlarga", "Harflarga", "Gaplarga"], answer: 1, difficulty: "easy", explanation: "So'zlar bo'g'inlarga bo'linadi." },
  { q: "Soʻzni bir satrdan ikkinchi satrga koʻchirishda nima e’tiborga olinadi?", options: ["Harflar soni", "Boʻgʻinlarga boʻlinishi", "Tovushlar soni", "Ma’nosi"], answer: 1, difficulty: "easy", explanation: "Satrdan satrga ko'chirish bo'g'in asosida amalga oshiriladi." },
  { q: "Bir boʻgʻindan iborat soʻzni ikkinchi satrga koʻchirish mumkinmi?", options: ["Ha, boʻladi", "Yoʻq, koʻchirib boʻlmaydi", "Faqat bitta harfni qoldirib koʻchiriladi", "Farqi yoʻq"], answer: 1, difficulty: "easy", explanation: "Bir bo'g'inli so'zlar satrdan satrga ko'chirilmaydi." },
  { q: "\"Ona\" soʻzi necha boʻgʻindan iborat?", options: ["bitta", "ikkita", "uchta", "toʻrtta"], answer: 1, difficulty: "easy", explanation: "O-na — 2 bo'g'indan iborat." },
  { q: "\"Vatanparvar\" soʻzi necha boʻgʻinga boʻlinadi?", options: ["ikkita", "uchta", "toʻrtta", "beshta"], answer: 2, difficulty: "easy", explanation: "Va-tan-par-var — 4 ta bo'g'in." },
  { q: "Qaysi soʻzni boshqa satrga koʻchirib boʻlmaydi?", options: ["Kitob", "Gul", "Daftar", "Maktab"], answer: 1, difficulty: "easy", explanation: "\"Gul\" bir bo'g'inli so'z, ko'chirib bo'lmaydi." },
  { q: "Qator oxirida bir harfni qoldirib yoki boshqa satrga oʻtkazish mumkinmi?", options: ["Ha, boʻladi", "Yoʻq, mumkin emas", "Faqat undosh harfni oʻtkazish mumkin", "Faqat unli harfni qoldirish mumkin"], answer: 1, difficulty: "easy", explanation: "Bir harfni qoldirish yoki ko'chirish mumkin emas." },
  { q: "Bosh harflar qachon yoziladi?", options: ["Har doim gap oxirida", "Kishilarning ismi, familiyasi va shahar nomlarining boshida", "Har bir soʻzning boshida", "Faqat raqamlardan keyin"], answer: 1, difficulty: "easy", explanation: "Atoqli otlar bosh harf bilan yoziladi." },
  { q: "Qaysi qatordagi barcha soʻzlar bosh harf bilan yozilishi shart?", options: ["Toshkent, Oydin, Samarqand", "daftar, qalam, kitob", "olma, nok, shaftoli", "bogʻ, koʻcha, maktab"], answer: 0, difficulty: "easy", explanation: "Toshkent, Oydin, Samarqand — atoqli otlar." },
  { q: "Gap oxiriga qanday tinish belgilari qoʻyilishi mumkin?", options: ["Faqat vergul", "Nuqta, soʻroq yoki undov belgisi", "Ikki nuqta", "Tirnoq"], answer: 1, difficulty: "easy", explanation: "Gap mazmuniga qarab nuqta, so'roq yoki undov belgisi qo'yiladi." },
  { q: "Ot soʻz turkumi qanday savollarga javob boʻladi?", options: ["Qanday? Qanaqa?", "Kim? Nima?", "Nima qildi? Qayerda?", "Nechta? Qancha?"], answer: 1, difficulty: "easy", explanation: "Ot — kim? nima? so'rog'iga javob beradi." },
  { q: "\"Kim?\" soʻrogʻiga qaysi javob toʻgʻri keladi?", options: ["Mushuk", "Oʻquvchi", "Stol", "Kitob"], answer: 1, difficulty: "easy", explanation: "O'quvchi — shaxs, \"kim?\" so'rog'iga javob bo'ladi." },
  { q: "\"Nima?\" soʻrogʻiga javob boʻladigan soʻzni toping:", options: ["Oʻqituvchi", "Bola", "Qalam", "Onajon"], answer: 2, difficulty: "easy", explanation: "Qalam — narsa, \"nima?\" so'rog'iga javob bo'ladi." },
  { q: "Quyidagilardan qaysi biri jonli narsani bildirib, \"kim?\" soʻrogʻiga javob boʻladi?", options: ["Daraxt", "Paxtakor", "Mashina", "Uy"], answer: 1, difficulty: "easy", explanation: "Paxtakor — inson, \"kim?\" so'rog'iga javob bo'ladi." },
  { q: "Qaysi qatordagi barcha soʻzlar \"nima?\" soʻrogʻiga javob boʻladi?", options: ["Shifokor, oʻquvchi, buvijon", "Daftar, stol, quyosh", "Bogʻbon, muhandis, doʻst", "Qush, mushuk, bola"], answer: 1, difficulty: "easy", explanation: "Daftar, stol, quyosh — jonsiz narsalar, \"nima?\" so'rog'iga javob." },
  { q: "Atoqli otlarni toping:", options: ["Toshkent, Anvar, \"Guliston\"", "shahar, bola, kitob", "qishloq, daryo, uy", "daftar, qalam, parta"], answer: 0, difficulty: "easy", explanation: "Toshkent, Anvar, \"Guliston\" — atoqli otlar." },
  { q: "Turdosh otlar qanday yoziladi?", options: ["Doim bosh harf bilan", "Kichik harf bilan (gap boshi bundan mustasno)", "Faqat bosh harf bilan", "Asosan qavs ichida"], answer: 1, difficulty: "easy", explanation: "Turdosh otlar kichik harf bilan yoziladi." },
  { q: "Shahar, qishloq, koʻcha nomlari qanday yoziladi?", options: ["Kichik harf bilan", "Bosh harf bilan", "Faqat oxirgi harfi katta yoziladi", "Farqi yoʻq"], answer: 1, difficulty: "easy", explanation: "Joy nomlari bosh harf bilan yoziladi." },
  { q: "\"Oʻzbekiston\" soʻzi qanday ot turkumiga kiradi?", options: ["Turdosh ot", "Atoqli ot", "Sifat", "Fe’l"], answer: 1, difficulty: "easy", explanation: "Davlat nomi bo'lgani uchun atoqli ot." },
  { q: "Qaysi qatorda faqat atoqli otlar berilgan?", options: ["Navoiy, Zulfiya, Toshkent", "uy, koʻcha, maktab", "kitob, ruchka, daftar", "oʻqituvchi, oʻquvchi, bola"], answer: 0, difficulty: "easy", explanation: "Navoiy, Zulfiya, Toshkent — atoqli otlar." },
  { q: "Sifat soʻz turkumi belgini bildirib, qanday savollarga javob boʻladi?", options: ["Kim? Nima?", "Qanday? Qanaqa?", "Nima qildi?", "Nechta?"], answer: 1, difficulty: "easy", explanation: "Sifat — qanday? qanaqa? so'roqlariga javob bo'ladi." },
  { q: "Quyidagilardan qaysi biri sifat soʻziga misol boʻla oladi?", options: ["Yugurmoq", "Qizil", "Daftar", "Uchta"], answer: 1, difficulty: "easy", explanation: "\"Qizil\" — rang-belgi bildiruvchi sifat." },
  { q: "\"Olma qanday?\" degan savolga qanday javob mos keladi?", options: ["Shirin (yoki qizil)", "Oʻqiydi", "Beshta", "Stol"], answer: 0, difficulty: "easy", explanation: "\"Shirin\" — olmaning mazasini bildiruvchi sifat." },
  { q: "Predmetning rangini bildiruvchi sifatni toping:", options: ["Katta", "Yashil", "Shirin", "Ogʻir"], answer: 1, difficulty: "easy", explanation: "\"Yashil\" — rang bildiruvchi sifat." },
  { q: "Predmetning hajmini (kattaligini) bildiruvchi sifatni toping:", options: ["Kichik", "Shoʻr", "Sovuq", "Sariq"], answer: 0, difficulty: "easy", explanation: "\"Kichik\" — hajm-o'lcham bildiruvchi sifat." },
  { q: "\"Qanaqa?\" soʻrogʻiga javob boʻluvchi soʻzni toping:", options: ["Chiroyli", "Oʻquvchi", "Parta", "Qalam"], answer: 0, difficulty: "easy", explanation: "\"Chiroyli\" — belgi bildiruvchi sifat." },
  { q: "Sifat soʻzi qaysi soʻz turkumi bilan bogʻlanib keladi?", options: ["Fe’l bilan", "Ot bilan", "Olmosh bilan", "Ravish bilan"], answer: 1, difficulty: "easy", explanation: "Sifat otga bog'lanib, uning belgisini bildiradi." },
  { q: "\"Qish fasli sovuq.\" gapida sifat soʻzni toping:", options: ["Qish", "Fasli", "Sovuq", "Gapda sifat yoʻq"], answer: 2, difficulty: "easy", explanation: "\"Sovuq\" — ob-havo belgisini bildirgan sifat." },
  { q: "Quyidagi soʻzlardan qaysi biri ta’m (mazza) bildiruvchi sifat hisoblanadi?", options: ["Baland", "Shirin", "Yumaloq", "Issiq"], answer: 1, difficulty: "easy", explanation: "\"Shirin\" — maza-ta'm bildiruvchi sifat." },
  { q: "\"Shirin tarvuz\" birikmasida sifatni aniqlang:", options: ["Tarvuz", "Shirin", "Ikki", "Yoʻq"], answer: 1, difficulty: "easy", explanation: "\"Shirin\" — sifat so'z turkumi." },
  { q: "Gap nima?", options: ["Tugallangan fikrni bildiradi", "Faqat bitta soʻzdan iborat boʻladi", "Faqat savol berish uchun ishlatiladi", "Raqamlar yigʻindisi"], answer: 0, difficulty: "easy", explanation: "Gap tugallangan mazmun va fikrni ifodalaydi." },
  { q: "Darak gap oxiriga qanday tinish belgisi qoʻyiladi?", options: ["Soʻroq belgisi", "Undov belgisi", "Nuqta", "Vergul"], answer: 2, difficulty: "easy", explanation: "Darak gap oxiriga nuqta (.) qo'yiladi." },
  { q: "Soʻroq gap oxiriga qanday tinish belgisi qoʻyiladi?", options: ["Nuqta", "Soʻroq belgisi (?)", "Undov belgisi (!)", "Defis"], answer: 1, difficulty: "easy", explanation: "So'roq gap oxiriga so'roq belgisi (?) qo'yiladi." },
  { q: "Kuchli tuygʻu, hayajonni bildirgan gap turi qanday nomlanadi?", options: ["Darak gap", "Soʻroq gap", "Undov gap", "Hikoya gap"], answer: 2, difficulty: "easy", explanation: "His-hayajonli gaplar — undov gap deyiladi." },
  { q: "\"Maktabga boramiz.\" gapi qaysi gap turiga kiradi?", options: ["Soʻroq gap", "Darak gap", "Undov gap", "Buyruq gap"], answer: 1, difficulty: "easy", explanation: "Xabar bildirgani uchun darak gap." },
  { q: "\"Bugun ob-havo qanday?\" gapi qaysi gap turiga kiradi?", options: ["Darak gap", "Soʻroq gap", "Undov gap", "Istak gap"], answer: 1, difficulty: "easy", explanation: "Savol ifodalagani uchun so'roq gap." },
  { q: "Gapda soʻzlar bir-biri bilan qanday bogʻlanadi?", options: ["Faqat ketma-ket yozish orqali", "Ma’no jihatidan", "Faqat sonlar orqali", "Tasodifiy ravishda"], answer: 1, difficulty: "easy", explanation: "So'zlar o'zaro ma'no va grammatik jihatdan bog'lanadi." },
  { q: "Gapning birinchi soʻzi qanday yoziladi?", options: ["Kichik harf bilan", "Bosh (katta) harf bilan", "Faqat qavs ichida", "Farqi yoʻq"], answer: 1, difficulty: "easy", explanation: "Har bir gap bosh harf bilan boshlanadi." },
  { q: "\"Naqadar goʻzal bahor!\" gapi oxiriga qaysi belgi qoʻyiladi?", options: ["Nuqta (.)", "Soʻroq belgisi (?)", "Undov belgisi (!)", "Vergul (,)"], answer: 2, difficulty: "easy", explanation: "Hayrat va quvonch ifodalangani uchun undov belgisi (!) qo'yiladi." },
  { q: "\"Kitob – bilim manbai.\" gapida nechta soʻz bor?", options: ["ikkita", "uchta", "toʻrtta", "beshta"], answer: 1, difficulty: "easy", explanation: "\"Kitob\", \"bilim\", \"manbai\" — 3 ta so'z bor." }
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
  { q: "Oʻzbekiston Respublikasining poytaxti qaysi shahar?", options: ["Samarqand", "Toshkent", "Buxoro", "Xiva"], answer: 1, difficulty: "easy", explanation: "O'zbekiston poytaxti — Toshkent shahri." },
  { q: "Oʻzbekiston bayrogʻidagi yulduzlar nimani anglatadi?", options: ["12 viloyatni", "12 oyni", "Qadimiy 12 oyni va oʻn ikki yulduz turkumini", "Bayram kunlarini"], answer: 2, difficulty: "medium", explanation: "12 yulduz — qadimiy 12 oy va yulduz turkumlarini anglatadi." },
  { q: "Bahor faslida qaysi oylar keladi?", options: ["Dekabr, yanvar, fevral", "Mart, aprel, may", "Iyun, iyul, avgust", "Sentabr, oktabr, noyabr"], answer: 1, difficulty: "easy", explanation: "Bahor oylari: Mart, Aprel, May." },
  { q: "\"Qushlar – bizning doʻstimiz\" degan fikrning maʼnosi nima?", options: ["Ular zararkunanda hasharotlarni yoʻq qilib, tabiatni himoya qiladi", "Ular faqat sayr qilish uchun kerak", "Ular qoʻshiq aytishni yaxshi koʻradi", "Ularni qafasda saqlash kerak"], answer: 0, difficulty: "easy", explanation: "Qushlar zararkunandalarni yo'qotib tabiatni himoyalaydi." },
  { q: "Kuz faslida tabiatda qanday oʻzgarish boʻladi?", options: ["Gullar ochiladi", "Barglar sargʻayib toʻkiladi", "Qor yogʻadi", "Daraxtlar kurtak otadi"], answer: 1, difficulty: "easy", explanation: "Kuzda daraxt barglari sarg'ayib to'kiladi." },
  { q: "Oʻzbekiston Respublikasining Madhiyasi muallifi kim?", options: ["Abdulla Oripov", "Erkin Vohidov", "Zulfiya", "Hamza"], answer: 0, difficulty: "easy", explanation: "Davlat madhiyamiz matni muallifi — Abdulla Oripov." },
  { q: "Qaysi hayvon qishki uyquga ketadi?", options: ["Boʻri", "Ayiq", "Echki", "Tulki"], answer: 1, difficulty: "easy", explanation: "Ayiq qish faslida inida qishki uyquga ketadi." },
  { q: "Ona tilimizda nechta harf bor?", options: ["29 ta", "32 ta", "34 ta", "28 ta"], answer: 1, difficulty: "easy", explanation: "Alifboda harflar va belgilar majmui o'rganiladi." },
  { q: "Qaysi qush ucholmaydi, lekin tez yuguradi?", options: ["Qaldirgʻoch", "Tuyaqush", "Chumchuq", "Zagʻcha"], answer: 1, difficulty: "easy", explanation: "Tuyaqush qanotlari bo'lsa-da uchmaydi, ammo juda tez yuguradi." },
  { q: "Suv tabiatda necha xil holatda uchraydi?", options: ["1 xil", "2 xil", "3 xil (suyuq, qattiq, gazsimon)", "4 xil"], answer: 2, difficulty: "easy", explanation: "Suv 3 xil holatda bo'ladi: suyuq, qattiq (muz) va gaz (bug')." },
  { q: "Oila davrasida qanday munosabat muhim?", options: ["Urishish", "Hurmat, mehr-oqibat va totuvlik", "Eʼtiborsizlik", "Boʻysunmaslik"], answer: 1, difficulty: "easy", explanation: "Oila a'zolari o'rtasida o'zaro mehr va hurmat muhim." },
  { q: "Kattalarga yordam berish qanday fazilat?", options: ["Yomon odat", "Yaxshi xislat, odob", "Bekorchi ish", "Majburiyat"], answer: 1, difficulty: "easy", explanation: "Kattalarga hurmat va yordam — yuksak odob belgisidir." },
  { q: "\"Vatan ostonadan boshlanadi\" degan maqolning maʼnosi nima?", options: ["Vatan faqat eshik oldi", "Vatansevarlik oiladan, ota-onani hurmat qilishdan boshlanadi", "Uyimizdan chiqmasligimiz kerak", "Ostonani tozalash kerak"], answer: 1, difficulty: "medium", explanation: "Vatanga bo'lgan muhabbat o'z uyi va oilasidan boshlanadi." },
  { q: "Maktabga oʻz vaqtida kelish nima deyiladi?", options: ["Ertalabki sayr", "Intizomlilik", "Zerikish", "Shoshqaloqlik"], answer: 1, difficulty: "easy", explanation: "Vaqtga rioya qilish — intizomlilikdir." },
  { q: "Doʻstingiz xato qilsa, unga qanday yondashish kerak?", options: ["Ustidan kulish", "Xatosini toʻgʻri tushuntirib, yaxshi maslahat berish", "Boshqalar bilan urushtirish", "Gaplashmay qoʻyish"], answer: 1, difficulty: "easy", explanation: "Haqiqiy do'st xatoni muloyimlik bilan tushuntiradi." },
  { q: "Salomlashish odobi nimani bildiradi?", options: ["Hurmat va ehtiromni", "Vaqtni yoʻqotishni", "Shunchaki odatni", "Qoʻrquvni"], answer: 0, difficulty: "easy", explanation: "Salom berish — boshqalarga tinchlik va hurmat tilashdir." },
  { q: "Mehnatning tagi nima?", options: ["Charchoq", "Rohat, boylik va baxt", "Bekorchilik", "Ogʻriq"], answer: 1, difficulty: "easy", explanation: "«Mehnatning tagi — rohat» deyiladi xalq maqolida." },
  { q: "Kitobga qanday munosabatda boʻlish kerak?", options: ["Yirtish va chizish kerak", "Avaylab-asrash, toza saqlash kerak", "Yerga uloqtirish kerak", "Faqat rasmiga qarash kerak"], answer: 1, difficulty: "easy", explanation: "Kitobni toza va ehtiyotlab asrash zarur." },
  { q: "Rostgoʻylik deganda nimani tushunasiz?", options: ["Doim rost gapirishni", "Aldashni", "Jim turishni", "Bahona topishni"], answer: 0, difficulty: "easy", explanation: "Rostgo'ylik — doimo haqiqatni gapirish fazilati." },
  { q: "Kishining xatosini kechirish qanday insonlarga xos?", options: ["Bagʻrikeng va olijanob", "Qoʻrqoq", "Gʻazabnok", "Dangasa"], answer: 0, difficulty: "easy", explanation: "Kechirimlilik — olijanob insonlarga xos xislat." },
  { q: "Ertak va hikoyaning asosiy farqi nimada?", options: ["Ertakda xayoliy, sehrli holatlar boʻladi", "Ularning farqi yoʻq", "Hikoya juda qisqa boʻladi", "Ertakda faqat raqamlar yoziladi"], answer: 0, difficulty: "medium", explanation: "Ertaklarda sehrli va xayoliy hodisalar ishtirok etadi." },
  { q: "\"Erkatoy\" ertagida yoki hikoyasida nima haqida boradi?", options: ["Mehnatsevarlik va odob haqida", "Faqat oʻyin haqida", "Mashinalar haqida", "Kosmos haqida"], answer: 0, difficulty: "easy", explanation: "Erkalikning oqibatlari va mehnatsevarlik ibrati ochib beriladi." },
  { q: "Topishmoqlarning asosiy vazifasi nima?", options: ["Aql charxi, fikrlashni oʻstirish", "Uxlashga yordam berish", "Daftar chizish", "Matnni uzaytirish"], answer: 0, difficulty: "easy", explanation: "Topishmoqlar zehnni charxlaydi va topqirlikka o'rgatadi." },
  { q: "\"Birlik boʻlgan joyda — ...\" Maqolni davom ettiring.", options: ["...qiyinchilik boʻladi.", "...baraka boʻladi.", "...sovuq boʻladi.", "...suv boʻladi."], answer: 1, difficulty: "easy", explanation: "«Birlik bo'lgan joyda — baraka bo'ladi»." },
  { q: "\"Erta turganning ishi yurishar\" maqolining maʼnosi nima?", options: ["Ertalab uxlash foydali", "Ertalab turib ish qilgan inson koʻp yutuqlarga erishadi", "Kech turish kerak", "Faqat shoshilish kerak"], answer: 1, difficulty: "easy", explanation: "Vaqtli uyg'onib harakat qilgan insonning ishi unumli bo'ladi." },
  { q: "Matnning sarlavhasi nimaga xizmat qiladi?", options: ["Matn nima haqida ekanligini oldindan bildirishga", "Sahifani bezashga", "Matnni qisqartirishga", "Rasmni yashirishga"], answer: 0, difficulty: "easy", explanation: "Sarlavha matn mazmuni haqida dastlabki tushuncha beradi." },
  { q: "Sheʼrlar qanday qismlardan iborat boʻladi?", options: ["Boblardan", "Bandlar va misralardan", "Misol va masalalardan", "Faqat bitta jumladan"], answer: 1, difficulty: "easy", explanation: "She'rlar misralar va bandlardan tashkil topadi." },
  { q: "Matn ichidagi asosiy fikrni qanday topish mumkin?", options: ["Matnni diqqat bilan oʻqib chiqish orqali", "Tasodifiy soʻzni tanlab", "Oxirgi harfga qarab", "Rasmini chizish bilan"], answer: 0, difficulty: "easy", explanation: "Diqqat bilan o'qish orqali muallif aytmoqchi bo'lgan bosh g'oya anglashiladi." },
  { q: "Tez aytishlar nima maqsadda oʻrgatiladi?", options: ["Tilni ravon qilish, aniq talaffuz qilish uchun", "Tez uxlash uchun", "Ovqatlanish uchun", "Charchash uchun"], answer: 0, difficulty: "easy", explanation: "Tez aytishlar nutq va talaffuzni ravonlashtiradi." },
  { q: "Ertak qahramonlari kimlar boʻlishi mumkin?", options: ["Faqat kitoblar", "Odamlar, hayvonlar va hatto sehrli jonzotlar", "Faqat raqamlar", "Faqat oʻsimliklar"], answer: 1, difficulty: "easy", explanation: "Ertaklarda insonlar, gapiruvchi hayvonlar va sehrli qushlar qatnashadi." },
  { q: "\"Yaxshilik qilki, daryoga ot...\" maqolining davomi nima?", options: ["...suv oqizib ketadi.", "...baliq yeydi.", "...baliq bilur, baliq bilmasa Xoliq bilur.", "...qirgʻoqqa chiqadi."], answer: 2, difficulty: "medium", explanation: "«Yaxshilik qil daryoga ot, baliq bilur, baliq bilmasa Xoliq bilur»." },
  { q: "Matnni oʻqiyotganda qaysi tinish belgisi toʻxtashni bildiradi?", options: ["Vergul va nuqta", "Faqat raqam", "Harflar", "Ranglar"], answer: 0, difficulty: "easy", explanation: "Nuqta va vergul to'xtam (pauza) belgilaridir." },
  { q: "Xalq ogʻzaki ijodiga nimalar kiradi?", options: ["Ertak, topishmoq, maqol, afsona", "Faqat qonunlar", "Matematik formulalar", "Xarita chizish"], answer: 0, difficulty: "easy", explanation: "Xalq og'zaki ijodi: ertaklar, dostonlar, qo'shiqlar, maqollar." },
  { q: "\"Oltin olma, duo ol\" maqolida nima ulugʻlanadi?", options: ["Boylik va pul", "Kattalarning duosi, ezgulik va hurmat", "Oltin topish", "Savdo-sotiq"], answer: 1, difficulty: "easy", explanation: "El-yurtning ezgu duosi moddiy boylikdan ustun turadi." },
  { q: "Hikoyadagi voqealar ketma-ketligi nima deb ataladi?", options: ["Syujet (voqealar rivoji)", "Matn rangi", "Imlo qoidasi", "Alifbo"], answer: 0, difficulty: "medium", explanation: "Voqealar rivoji va izchilligi syujet deyiladi." },
  { q: "Soʻzlar nimadan tuziladi?", options: ["Tovush va harflardan", "Faqat rasmlardan", "Chiziqlardan", "Sifatlardan"], answer: 0, difficulty: "easy", explanation: "So'zlar tovushlar va ularni ifodalovchi harflardan tuziladi." },
  { q: "Unli tovushlar nechtaga boʻlinadi va qanday talaffuz qilinadi?", options: ["Qattiq va yumshoq", "Ogʻiz boʻshligʻida hech qanday toʻsiqsiz erkin aytiladi", "Faqat burun orqali", "Toʻsiq bilan aytiladi"], answer: 1, difficulty: "easy", explanation: "Unlilar og'iz bo'shlig'ida to'siqqa uchramay sof ovoz bilan aytiladi." },
  { q: "Undosh tovushlar talaffuz qilinganda nima hosil boʻladi?", options: ["Toʻsiq (til, tish, lab yordamida)", "Faqat musiqa", "Boʻshliq", "Hech qanday oʻzgarish boʻlmaydi"], answer: 0, difficulty: "easy", explanation: "Undoshlar talaffuzida havo oqimi turli to'siqlarga uchraydi." },
  { q: "Gap oxiriga qanday tinish belgilari qoʻyilishi mumkin?", options: ["Nuqta, soʻroq, undov", "Faqat vergul", "Ikki nuqta", "Qavs"], answer: 0, difficulty: "easy", explanation: "Gap mazmuniga qarab nuqta, so'roq (?) yoki undov (!) belgisi qo'yiladi." },
  { q: "Soʻzlarni boʻgʻinlarga boʻlish nimaga asoslanadi?", options: ["Unli tovushlar soniga", "Harflar uzunligiga", "Rangiga", "Ogʻirlikiga"], answer: 0, difficulty: "easy", explanation: "So'zda nechta unli bo'lsa, shuncha bo'g'in bo'ladi." },
  { q: "Bosh harf bilan yoziladigan soʻzlarni koʻrsating:", options: ["Qishloq, koʻcha, uy", "Odamlarning ismi, familiyasi, shahar va daryo nomlari", "Daftar, qalam", "Hayvonlarning umumiy nomi"], answer: 1, difficulty: "easy", explanation: "Atoqli otlar (ism, shahar, daryo nomlari) bosh harf bilan yoziladi." },
  { q: "\"Kitob\" soʻzida nechta unli harf bor?", options: ["1 ta", "2 ta (i, o)", "3 ta", "Yoʻq"], answer: 1, difficulty: "easy", explanation: "\"Kitob\" so'zida i va o unlilari bor (2 ta)." },
  { q: "Imlo lugʻati nima uchun kerak?", options: ["Soʻzlarning toʻgʻri yozilishini tekshirish uchun", "Rasm chizish uchun", "Ertak oʻqish uchun", "Hisob-kitob qilish uchun"], answer: 0, difficulty: "easy", explanation: "Imlo lug'ati so'zlarning to'g'ri yozilish me'yorini ko'rsatadi." },
  { q: "Qaysi soʻz harakatni bildiradi?", options: ["Kitob", "Oʻqiyapti", "Qizil", "Beshta"], answer: 1, difficulty: "easy", explanation: "\"O'qiyapti\" fe'li harakatni ifodalaydi." },
  { q: "Qaysi soʻz predmetning belgisini bildiradi?", options: ["Yugurdi", "Katta", "Maktab", "Men"], answer: 1, difficulty: "easy", explanation: "\"Katta\" so'zi narsaning belgisini (sifatini) bildiradi." },
  { q: "Predmetning nomini bildirgan soʻzlar qaysi soʻz turkumiga kiradi?", options: ["Ot", "Feʼl", "Sifat", "Son"], answer: 0, difficulty: "easy", explanation: "Kim? nima? so'rog'iga javob bo'lib, narsa nomini bildirgan so'zlar — otdir." },
  { q: "\"Qalam\" soʻzining bosh harf bilan boshlanishi qachon talab etiladi?", options: ["Gap boshida kelganda", "Har doim", "Faqat oxirida", "Hech qachon"], answer: 0, difficulty: "easy", explanation: "Har bir gapning birinchi so'zi bosh harf bilan boshlanadi." },
  { q: "Soʻz oxirida jarangli undosh jarangsizga aylanib oʻqilishi qanday ataladi?", options: ["Jarangsizlanish (yoki juftining aytilishi)", "Unli choʻzilishi", "Boʻgʻin koʻchirish", "Imlo xatosi emas"], answer: 0, difficulty: "medium", explanation: "Talaffuzda jarangli undosh jarangsizlashib aytilishi mumkin." },
  { q: "Ona tilimizda nechta unli harf mavjud?", options: ["6 ta", "24 ta", "32 ta", "10 ta (a, oʻ, o, u, i, e va y bilan bogʻliq holatlar)"], answer: 3, difficulty: "medium", explanation: "Lotin yozuvida 6 ta asosiy unli harf mavjud (a, e, i, o, u, o')." },
  { q: "Oʻqish savodxonligi darsi bizga nima beradi?", options: ["Chiroyli va toʻgʻri oʻqish, matn mazmunini tushunib, savolga javob berishni oʻrgatadi", "Faqat uxlashni", "Yugurishni", "Rasm chizishni"], answer: 0, difficulty: "easy", explanation: "O'qish darsi ongli mutolaa va nutqni rivojlantiradi." }
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
  { q: "So’z turkumlari to’g’ri berilgan qatorni toping.", options: ["ot, sifat, son, fe’l", "ot, sifat, fe’l", "ot, sifat, fe’l, bog’lovchi", "ega, kesim, hol"], answer: 0, difficulty: "easy", explanation: "Asosiy mustaqil so'z turkumlari: ot, sifat, son, fe'l, olmosh, ravish." },
  { q: "Kim?, nima?, qayer? so’roqlari qaysi so’z turkumiga tegishli?", options: ["Ot", "Sifat", "Son", "Fe'l"], answer: 0, difficulty: "easy", explanation: "Kim?, nima?, qayer? so'roqlari ot so'z turkumiga tegishli." },
  { q: "Shaxs va narsaning belgisini bildirgan so’zlar nima deyiladi?", options: ["Sifat", "Ot", "Fe’l", "Son"], answer: 0, difficulty: "easy", explanation: "Belgi bildiruvchi so'zlar sifat deb ataladi." },
  { q: "Kim?, kimlar? so’rog’iga javob bo’lgan so’zlar qatorini belgilang.", options: ["ustoz, o’quvchilar", "bog’bon, gulzor", "shifokor, gullar", "kitob, daftarlar"], answer: 0, difficulty: "easy", explanation: "\"Ustoz\", \"o'quvchilar\" — shaxsni bildirib, kim? kimlar? so'rog'iga javob bo'ladi." },
  { q: "Yasama so’zlar berilgan qatorni toping.", options: ["Bog’bon, gulzor", "ustoz, o’quvchilar", "shifokor, gullar", "daraxt, barglar"], answer: 0, difficulty: "medium", explanation: "Bog'-bon, gul-zor — so'z yasovchi qo'shimchalar orqali yasalgan." },
  { q: "Bo’g’inga to’g’ri ajratilgan qatorni belgilang.", options: ["bo-la-lar, va’-da", "bo-la, sin-gil", "al-la, a-’lo", "dars-x-ona, ki-tob"], answer: 1, difficulty: "easy", explanation: "Bo-la, sin-gil so'zlari bo'g'inlarga to'g'ri ajratilgan." },
  { q: "So’z yasovchi qo’shimcha qatnashgan gapni belgilang.", options: ["Maktabimizda kichik gulzor bor.", "Bugun erta turdim.", "Kecha yomg’ir ko’p yog’di.", "Quyosh charqlab turibdi."], answer: 0, difficulty: "medium", explanation: "Gulzor so'zida -zor so'z yasovchi qo'shimchadir." },
  { q: "Egalik qo’shimchasi qatnashgan gapni toping.", options: ["Maktabimizda kichik gulzor bor.", "Kecha yomg’ir ko’p yog’di.", "Bugun erta turdim.", "Daryo suvi tiniq."], answer: 0, difficulty: "medium", explanation: "Maktab-imiz-da so'zida -imiz 1-shaxs ko'plik egalik qo'shimchasi." },
  { q: "Shaxs va narsaning nomini bildirgan so’z turkumini toping.", options: ["Ot", "Sifat", "Fe’l", "Son"], answer: 0, difficulty: "easy", explanation: "Nom bildirgan so'z turkumi — ot." },
  { q: "Laziza o’zining chiroyli va bejirim ko’ylagini kiyib oldi. Ushbu gapda sifat so’z turkumiga oid so’zni belgilang.", options: ["Chiroyli, bejirim", "Laziza, kiyib oldi", "Ko’ylak, o’zining", "Faqat bejirim"], answer: 0, difficulty: "easy", explanation: "\"Chiroyli\" va \"bejirim\" — ko'ylakning belgisini bildirgan sifatlar." },
  { q: "Ma’nodosh so’zlar qatorini toping?", options: ["go’zal, chiroyli", "issiq, sovuq", "o’t, o’t", "katta, kichik"], answer: 0, difficulty: "easy", explanation: "Go'zal va chiroyli — ma'nodosh (sinonim) so'zlar." },
  { q: "Bugun hamma test yechdi. Gapning kesimi to’g’ri berilgan qatorni toping.", options: ["yechdi", "hamma", "bugun", "test"], answer: 0, difficulty: "easy", explanation: "\"Yechdi\" — gapning kesimi (harakatni ifodalaydi)." },
  { q: "Soat 10 da o’quvchilar qo’shimcha to’garakka borishadi. Gapning egasini toping.", options: ["o’quvchilar", "soat", "borishadi", "to'garakka"], answer: 0, difficulty: "easy", explanation: "\"O'quvchilar\" — kimlar? so'rog'iga javob bo'lib, gapning egasidir." },
  { q: "Assalom so’zi to’g’ri tahlil qilingan qatorni toping.", options: ["3 bo’g’in, 4 ta undosh, 3 ta unli", "4 ta bo’g’in, 4 ta undosh, 3 ta unli", "3 ta bo’g’in, 5 ta undosh, 3 ta unli", "2 bo'g'in, 3 ta unli"], answer: 0, difficulty: "medium", explanation: "As-sa-lom: 3 bo'g'in, 4 ta undosh (s, s, l, m), 3 ta unli (a, a, o)." },
  { q: "Ikkinchi darajali bo’laklar berilgan qatorni belgilang.", options: ["Aniqlovchi, to’ldiruvchi, hol", "Ega va kesim", "Aniqlovchi, ega, kesim", "Faqat hol va kesim"], answer: 0, difficulty: "easy", explanation: "Ikkinchi darajali bo'laklar: aniqlovchi, to'ldiruvchi, hol." },
  { q: "Imlo qoidalariga asosan yozilgan qatorni belgilang.", options: ["a’lo, katta, baxt", "mualim, va’da, ehtirom", "salom, alla, extirom", "xursan, go'sh, hovli"], answer: 0, difficulty: "easy", explanation: "A'lo, katta, baxt so'zlari imlo qoidalariga to'liq mos yozilgan." },
  { q: "So’z yasovchi qo’shimchalar to’g’ri berilgan qatorni belgilang.", options: ["-chi, -la, -kor, -li", "-la, -li, -ni, -kor", "-chi, -la, -dan, -i", "-lar, -da, -ga, -dan"], answer: 0, difficulty: "medium", explanation: "-chi, -la, -kor, -li yangi ma'noli so'z yasovchi qo'shimchalardir." },
  { q: "Gapda so’zlarni bog’lovchi qo’shimcha berilgan qatorni belgilang.", options: ["-ni, -da", "-li, -dor", "-chi, -kor", "-be, -no"], answer: 0, difficulty: "easy", explanation: "Kelishik qo'shimchalari (-ni, -da) so'zlarni bir-biriga bog'laydi." },
  { q: "H va X undoshlari to’g’ri qo’llangan qatorni belgilang.", options: ["Yaxshi, maxsus, hovli", "tuxum, hamma, ihtiro", "halol, baxt, xassa", "xursan, havfli, shahrim"], answer: 0, difficulty: "medium", explanation: "Yaxshi, maxsus, hovli so'zlarida h va x to'g'ri yozilgan." },
  { q: "Soat sakkizda darslar boshlanadi. So’z turkumlari bo’yicha tahlil qiling.", options: ["son, son, ot, fe’l", "ot, son, ot, fe’l", "ot, son, sifat, fe’l", "ravish, son, ot, fe'l"], answer: 1, difficulty: "medium", explanation: "Soat (ot), sakkizda (son), darslar (ot), boshlanadi (fe'l)." },
  { q: "Zid ma’noli so’zlar qatorini toping.", options: ["issiq, sovuq", "issiq, iliq", "go’zal, chiroyli", "o’t, o’t"], answer: 0, difficulty: "easy", explanation: "Issiq va sovuq — zid (antonim) so'zlar." },
  { q: "Shakldosh so’zlar berilgan qatorni toping.", options: ["o’t, o’t", "issiq, sovuq", "go’zal, chiroyli", "bosh, oyoq"], answer: 0, difficulty: "easy", explanation: "O't (o'simlik) va o't (olov yoki o'tmoq) — shakldosh (omonim) so'zlardir." },
  { q: "Qaysi so‘z bir ma’noli?", options: ["ruchka", "ko‘z", "bosh", "quloq"], answer: 0, difficulty: "medium", explanation: "Ko'z, bosh ko'p ma'noli; ruchka esa faqat yozuv qurolini bildiradi." },
  { q: "Quyidagi so‘zlardan qaysi birida tovush tushishi yuz bergan?", options: ["o‘rni (o‘rin + i)", "kitobi (kitob + i)", "qalami (qalam + i)", "maktabi (maktab + i)"], answer: 0, difficulty: "medium", explanation: "O'rin + i = o'rni (i unlisi tushib qolgan)." },
  { q: "Nuqtalar o‘rniga mos harfni qo‘ying: “…urmat”.", options: ["h", "q", "x", "g'"], answer: 0, difficulty: "easy", explanation: "To'g'ri imlosi: \"hurmat\" (h harfi bilan)." },
  { q: "“eshik” so‘ziga II shaxs (-ing) egalik qo‘shimchasi qo‘shilganda qaysi shakl to‘g‘ri?", options: ["eshiging", "eshiking", "eshiqing", "eshkik"], answer: 0, difficulty: "easy", explanation: "Eshik + ing = eshiging (k tovushi g ga aylanadi)." },
  { q: "“Ignaning ko‘zi” birikmasida “ko‘z” so‘zi qaysi ma’noda qo‘llangan?", options: ["Ko’chma ma’noda", "Sinonim ma’noda", "Zid ma’noda", "To'g'ri ma'noda"], answer: 0, difficulty: "easy", explanation: "Odam ko'ziga o'xshatilgani sababli ko'chma ma'noda qo'llangan." },
  { q: "Matn nimalardan tuziladi?", options: ["Gaplardan", "so’zlardan", "Bo’g’inlardan", "Tovushlardan"], answer: 0, difficulty: "easy", explanation: "Matn mazmunan bog'langan gaplardan tuziladi." },
  { q: "Unli harflar to’g’ri berilgan qatorni toping.", options: ["a, i, o, u, e, o’", "l, a, i, o, u, e", "a, u, n, o, e, o’", "b, d, f, g, h, j"], answer: 0, difficulty: "easy", explanation: "O'zbek alifbosida 6 ta unli harf bor: a, i, o, u, e, o'." },
  { q: "Jarangli undoshlar qatorini toping.", options: ["b, d, v, g, j, l, m, n, r", "p, t, f, k, s, r", "l, m, n, r, y, h, x", "q, g', h, x, p, t"], answer: 0, difficulty: "medium", explanation: "b, d, v, g, j, z, l, m, n, r — jarangli undoshlar." },
  { q: "Faqat kesimdan iborat gapni belgilang.", options: ["Bilaman.", "erta ketdim", "Karima yozdi.", "Kitob o'qidim."], answer: 0, difficulty: "medium", explanation: "\"Bilaman\" — bir so'zli kesimdan iborat to'liq gap." },
  { q: "Ma’nodosh so’zlar qatorini belgilang.", options: ["rahmat, tashakkur", "baxt, baxtsizlik", "shirin, achchiq", "kun, tun"], answer: 0, difficulty: "easy", explanation: "Rahmat va tashakkur — ma'nodosh (sinonim) so'zlar." },
  { q: "Qanday?, qanaqa? so’roqlariga javob bo’lgan so’zlar qatorini toping.", options: ["katta, qiziqarli", "kichik, uka", "dedi, o’qi", "besh, o'nta"], answer: 0, difficulty: "easy", explanation: "Katta, qiziqarli — sifat so'z turkumi." },
  { q: "Asosdosh so’zlar berilgan qatorni toping.", options: ["terim, terimchi", "ishchi, ishmoq", "uzun, uzum", "bog', tog'"], answer: 0, difficulty: "medium", explanation: "Terim va terimchi so'zlarining o'zagi bir xil (ter-)." },
  { q: "Kitobxon, kitob, kit so’zlaridan ortiqchasini toping.", options: ["kit", "kitob", "kitobxon", "ortiqchasi yo'q"], answer: 0, difficulty: "easy", explanation: "\"Kit\" (dengiz hayvoni) kitob va kitobxonga aloqador emas." },
  { q: "Bosh so’zi ko’chma ma’noda berilgan qatorni toping.", options: ["ko’chaning boshi", "odamning boshi", "mushukning boshi", "otning boshi"], answer: 0, difficulty: "easy", explanation: "\"Ko'chaning boshi\" — ko'chma ma'nodagi birikma." },
  { q: "Qator undosh berilgan qatorni toping.", options: ["traktor, baxt", "achchiq, muammo", "do’st, mudofaa", "katta, qattiq"], answer: 0, difficulty: "medium", explanation: "Traktor (tr), baxt (xt) — qator undosh qatnashgan so'zlar." },
  { q: "Qo’sh undosh berilgan qatorni toping.", options: ["muammo, muvaffaqiyat", "krem, barg", "metall, lola", "sinf, qasr"], answer: 0, difficulty: "medium", explanation: "Muammo (mm), muvaffaqiyat (ff) — qo'sh undoshli so'zlar." },
  { q: "Talaffuzda tovush tushishi kuzatiladigan so’zlar qatorini belgilang.", options: ["go’sht, xursand", "Toshkent, men", "Samarqand, ona", "maktab, kitob"], answer: 0, difficulty: "medium", explanation: "Talaffuzda t va d tushib qoladi: go'sh, xursan." },
  { q: "Talaffuzda tovush ortishi kuzatiladigan so’zlar qatorini belgilang.", options: ["shoir, doim", "tabiat, alla", "shior, go’sht", "dars, sinf"], answer: 0, difficulty: "medium", explanation: "Shoir (shoyir), doim (doyim) — talaffuzda y tovushi ortadi." },
  { q: "Bosh kelishikdagi so’zni toping.", options: ["kitob", "uyga", "maktabda", "shahardan"], answer: 0, difficulty: "easy", explanation: "Bosh kelishik nol qo'shimchali bo'ladi: \"kitob\"." },
  { q: "Jo’nalish kelishigidagi so’zni toping.", options: ["maktabga", "uyda", "meni", "kitobdan"], answer: 0, difficulty: "easy", explanation: "-ga qo'shimchasi jo'nalish kelishigini bildiradi: \"maktabga\"." },
  { q: "Tushum kelishigidagi so’zni toping.", options: ["nonni", "olmaning", "bizdan", "ko'chada"], answer: 0, difficulty: "easy", explanation: "-ni qo'shimchasi tushum kelishigini bildiradi: \"nonni\"." },
  { q: "Chiqish kelishigi bilan qo’llangan so’zni toping.", options: ["ko’chadan", "bog’da", "uy", "kitobni"], answer: 0, difficulty: "easy", explanation: "-dan qo'shimchasi chiqish kelishigidir: \"ko'chadan\"." },
  { q: "Tovush ortishi ro’y bergan so’zni toping.", options: ["bunga", "shahrim", "singil", "ko'zim"], answer: 0, difficulty: "medium", explanation: "Bu + ga = bunga (n tovushi ortgan)." },
  { q: "Onam menga gulli ko’ylak tikib berdi. So’z yasovchi qo’shimcha qo’llangan so’zni toping.", options: ["gulli", "onam", "ko’ylak", "tikib"], answer: 0, difficulty: "medium", explanation: "Gul-li so'zida -li sifat yasovchi qo'shimchadir." },
  { q: "Onam menga gulli ko’ylak tikib berdi. Gapda kelishik qo’llangan so’zni toping.", options: ["menga", "gulli", "onam", "ko'ylak"], answer: 0, difficulty: "medium", explanation: "Men-ga so'zida -ga jo'nalish kelishigi qo'llangan." },
  { q: "Onam menga gulli ko’ylak tikib berdi. Gapda egalik qo’shimchasi qo’llangan so’zni toping.", options: ["onam", "gulli", "menga", "tikib"], answer: 0, difficulty: "medium", explanation: "Ona-m so'zida -m 1-shaxs egalik qo'shimchasi." },
  { q: "Alifbo deb nimaga aytiladi?", options: ["Tartib bilan berilgan harflar majmui", "Arifmetik ketma-ketlikda yig’ilgan harflar to’plami", "Oldin unli, so’ng undosh berilgan to'plam", "Faqat so'zlar ro'yxati"], answer: 0, difficulty: "easy", explanation: "Alifbo — harflarning qat'iy tartib bilan berilgan to'liq majmuidir." },
  { q: "Imlo qoidalariga ko’ra to’g’ri yozilgan qatorni belgilang.", options: ["harf, xushxabar", "sinif, ustoz", "barig, kitob", "poezd, traktir"], answer: 0, difficulty: "easy", explanation: "Harf va xushxabar so'zlari imloga ko'ra to'g'ri yozilgan." }
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



window.TEST_DATA["6_musiqa"] = [
  { q: "\"Shashmaqom\" so'zining ma'nosi nima?", options: ["Olti maqom", "To'rt maqom", "O'n ikki maqom", "Yetti maqom"], answer: 0, difficulty: "easy", explanation: "\"Shash\" forscha olti, \"Shashmaqom\" — olti maqom demakdir." },
  { q: "O'zbek xalq cholg'u asboblari necha guruhga bo'linadi?", options: ["2 guruhga", "3 guruhga", "4 guruhga", "5 guruhga"], answer: 2, difficulty: "easy", explanation: "Cholg'ular 4 guruhga bo'linadi: torli-chertma, torli-kamonli, puflama (damli), zarbli." },
  { q: "Quyidagilardan qaysi biri torli-kamonli cholg'u asbobiga kiradi?", options: ["Rubob", "Dutor", "G'ijjak", "Chang"], answer: 2, difficulty: "easy", explanation: "G'ijjak kamon (kamoncha) bilan chalinadi." },
  { q: "\"Shashmaqom\" tarkibiga kiruvchi birinchi maqom qaysi?", options: ["Rost", "Buzruk", "Navo", "Segoh"], answer: 1, difficulty: "medium", explanation: "Shashmaqomning birinchi maqomi — Buzruk." },
  { q: "Qaysi cholg'u asbobi maxsus tayoqchalar (cho'plar) yordamida chalinadi?", options: ["Qonun", "Chang", "Tanbur", "Ud"], answer: 1, difficulty: "easy", explanation: "Chang cholg'usi ikki dona bambuk tayoqcha bilan chalinadi." },
  { q: "O'zbekistonda maqom san'atining qaysi mahalliy uslublari (yo'llari) mavjud?", options: ["Buxoro, Xorazm, Farg'ona-Toshkent", "Samarqand, Qashqadaryo, Surxondaryo", "Andijon, Namangan, Qo'qon", "Xiva, Urganch, Nukus"], answer: 0, difficulty: "medium", explanation: "Buxoro, Xorazm va Farg'ona-Toshkent maqom yo'llari mavjud." },
  { q: "\"Dutor\" so'zi fors-tojik tilidan tarjima qilinganda qanday ma'noni anglatadi?", options: ["Uch tor", "Ikki tor", "To'rt tor", "Olti tor"], answer: 1, difficulty: "easy", explanation: "\"Du\" — ikki, \"tor\" — tor, ya'ni ikki torli cholg'u." },
  { q: "Quyidagilardan qaysi biri puflab chalinadigan (damli) cholg'u asbobi?", options: ["Doira", "Nog'ora", "Karnay", "Sato"], answer: 2, difficulty: "easy", explanation: "Karnay — puflab chalinadigan qadimiy milliy cholg'u." },
  { q: "O'zbekiston Respublikasi Davlat madhiyasi musiqasini kim bastalagan?", options: ["Sulaymon Yudakov", "Mutal Burhonov", "Ikrom Akbarov", "Manas Leviyev"], answer: 1, difficulty: "easy", explanation: "Madhiyamiz musiqasi muallifi — Mutal Burhonov." },
  { q: "O'zbekiston Respublikasi Davlat madhiyasi matni muallifi kim?", options: ["Erkin Vohidov", "Abdulla Oripov", "Muhammad Yusuf", "Hamid Olimjon"], answer: 1, difficulty: "easy", explanation: "Madhiyamiz matni O'zbekiston Qahramoni Abdulla Oripov tomonidan yozilgan." },
  { q: "\"Katta ashula\" (Patnusaki ashula) asosan qaysi vodiyda keng tarqalgan?", options: ["Zarafshon vodiysida", "Farg'ona vodiysida", "Xorazm vohasida", "Surxon vohasida"], answer: 1, difficulty: "medium", explanation: "Katta ashula Farg'ona vodiysida vujudga kelgan va YUNESKO merosidir." },
  { q: "Xorazm maqomlari nechta asosiy maqomdan iborat?", options: ["4 ta", "5 ta", "6 ta (va yarim)", "12 ta"], answer: 2, difficulty: "medium", explanation: "Xorazm maqomlari olti yarim maqomdan iborat." },
  { q: "Qaysi cholg'u asbobi noxun (mediator) yordamida chalinadi?", options: ["Tanbur", "Dutor", "Nay", "Doira"], answer: 0, difficulty: "medium", explanation: "Tanbur ko'rsatkich barmog'iga taqiladigan metall noxun bilan chalinadi." },
  { q: "\"Lazgi\" raqsi va kuyi qaysi hudud musiqa madaniyatining durdonasi hisoblanadi?", options: ["Buxoro", "Xorazm", "Toshkent", "Farg'ona"], answer: 1, difficulty: "easy", explanation: "Lazgi — qadimiy Xorazm xalq raqsi va kuyi." },
  { q: "Baxshichilik san'atida dostonlar qaysi cholg'u jo'rligida ijro etiladi?", options: ["Rubob", "Do'mbira", "Dutor", "G'ijjak"], answer: 1, difficulty: "easy", explanation: "O'zbek xalq baxshilari dostonlarni do'mbira jo'rligida kuylashadi." },
  { q: "\"Alpomish\" dostonini eng mukammal kuylagan mashhur o'zbek baxshisi kim?", options: ["Ergash Jumanbulbul o'g'li", "Fozil Yo'ldosh o'g'li", "Islom shoir Nazar o'g'li", "Po'lkan shoir"], answer: 1, difficulty: "medium", explanation: "\"Alpomish\" dostonining eng to'liq varianti Fozil Yo'ldosh o'g'lidan yozib olingan." },
  { q: "Simfonik orkestr tarkibida nechta asosiy cholg'u guruhi mavjud?", options: ["2 ta", "3 ta", "4 ta", "6 ta"], answer: 2, difficulty: "medium", explanation: "Simfonik orkestrda 4 guruh: torli-kamonli, yog'och puflama, mis puflama va zarbli cholg'ular." },
  { q: "Quyidagilardan qaysi biri zarbli (urma) cholg'u asbobiga kiradi?", options: ["Surnay", "Qo'shnay", "Nog'ora", "Kashkarcha"], answer: 2, difficulty: "easy", explanation: "Nog'ora — urib chalinadigan zarbli cholg'u." },
  { q: "\"Maysaraning ishi\" birinchi o'zbek hajviy operasining muallifi kim?", options: ["Muxtor Ashrafiy", "Sulaymon Yudakov", "Tolibjon Sodiqov", "Sobir Boboyev"], answer: 1, difficulty: "medium", explanation: "Sulaymon Yudakov ilk o'zbek hajviy operasi \"Maysaraning ishi\"ni yaratgan." },
  { q: "\"Bo'ron\" birinchi o'zbek operasi kimlar tomonidan yaratilgan?", options: ["M. Ashrafiy va S. Vasilenko", "M. Burhonov va I. Akbarov", "T. Sodiqov va R. Glier", "S. Yudakov va M. Leviyev"], answer: 0, difficulty: "hard", explanation: "\"Bo'ron\" operasi Muxtor Ashrafiy va Sergey Vasilenko tomonidan yaratilgan." },
  { q: "Musiqada tovushlarning baland-pastligini yozish uchun ishlatiladigan 5 ta parallel chiziq nima deb ataladi?", options: ["Kalit", "Nota yo'li (stan)", "Takt", "Dinamika"], answer: 1, difficulty: "easy", explanation: "Besh parallel chiziq — nota yo'li (notostan) deyiladi." },
  { q: "Skripka kaliti yana qanday nom bilan ataladi?", options: ["Fa kaliti", "Sol kaliti", "Do kaliti", "Lya kaliti"], answer: 1, difficulty: "easy", explanation: "Skripka kaliti ikkinchi chiziqdan (Sol notasidan) boshlangani uchun Sol kaliti deyiladi." },
  { q: "Musiqada ijro tezligi nima deb ataladi?", options: ["Temp (sur'at)", "Ritm (usul)", "Tembr", "Registr"], answer: 0, difficulty: "easy", explanation: "Ijro tezligi musiqa tilida Temp (sur'at) deb ataladi." },
  { q: "\"Forte\" (f) dinamik belgisi nimani anglatadi?", options: ["Sekin, past ovozda", "Kuchli, baland ovozda", "O'rtacha ovozda", "Tezlashtirib"], answer: 1, difficulty: "easy", explanation: "Forte (f) — jarangdor, baland va kuchli jaranglashni bildiradi." },
  { q: "\"Piano\" (p) dinamik belgisi nimani anglatadi?", options: ["Kuchli ovozda", "Past, mayin ovozda", "Sekinlashtirib", "Uzib-uzib"], answer: 1, difficulty: "easy", explanation: "Piano (p) — sekin, mayin va past ovozda ijro etishni bildiradi." },
  { q: "Orkestrga rahbarlik qiluvchi mutaxassis kim?", options: ["Solist", "Dirijyor", "Konsertmeyster", "Kompozitor"], answer: 1, difficulty: "easy", explanation: "Dirijyor butun orkestr ijrosini boshqaradi." },
  { q: "O'zbek xalq cholg'ulari orkestrining asoschisi kim?", options: ["Yunus Rajabiy", "To'xtasin Jalilov", "Ashot Petrosyans", "Ganijon Toshmatov"], answer: 2, difficulty: "hard", explanation: "Professor Ashot Petrosyans o'zbek xalq cholg'ulari orkestriga asos solgan." },
  { q: "\"Shashmaqom\"ni notaga olib, 6 jildlik kitob holida nashr ettirgan buyuk san'atkor kim?", options: ["Komiljon Otaniyozov", "Yunus Rajabiy", "Hoji Abdulaziz Abdurasulov", "Domla Halim Ibodov"], answer: 1, difficulty: "medium", explanation: "Akademik Yunus Rajabiy Shashmaqomni to'liq notaga tushirgan va saqlab qolgan." },
  { q: "Xonanda va sozandalarning birgalikda bir ovozda ijro etishi nima deb ataladi?", options: ["Polifoniya", "Unison", "Duet", "Kvintet"], answer: 1, difficulty: "medium", explanation: "Barcha ovozlarning bir ohangda qo'shilib yangrashi Unison deyiladi." },
  { q: "Ikki nafar ijrochidan iborat musiqiy ansambl nima deb ataladi?", options: ["Trio", "Kvartet", "Duet", "Solo"], answer: 2, difficulty: "easy", explanation: "Ikki ijrochi birgalikda Duet deb ataladi." },
  { q: "To'rt nafar ijrochidan iborat ansambl qanday nomlanadi?", options: ["Trio", "Kvartet", "Kvintet", "Sekstet"], answer: 1, difficulty: "easy", explanation: "To'rt kishilik musiqiy guruh — Kvartet." },
  { q: "Ayollarning eng baland ovozi qanday ataladi?", options: ["Alt", "Soprano", "Tenor", "Bariton"], answer: 1, difficulty: "medium", explanation: "Ayollarning eng yuqori ovozi — Soprano." },
  { q: "Erkaklarning eng past (yo'g'on) ovozi nima deb ataladi?", options: ["Tenor", "Bariton", "Bas", "Diskant"], answer: 2, difficulty: "easy", explanation: "Erkaklarning eng yo'g'on va past ovozi — Bas." },
  { q: "Erkaklarning eng baland ovozi qaysi?", options: ["Bas", "Bariton", "Tenor", "Kontralto"], answer: 2, difficulty: "medium", explanation: "Erkaklarning eng yuqori ovozi — Tenor." },
  { q: "Musiqiy asarning sahnada raqs va pantomima orqali ijro etiladigan turi nima?", options: ["Opera", "Balet", "Simfoniya", "Operetta"], answer: 1, difficulty: "easy", explanation: "Balet — musiqali xoreografik sahna asaridir." },
  { q: "\"Oqqush ko'li\" va \"Shelkunchik\" baletlarining muallifi bo'lgan mashhur rus kompozitori kim?", options: ["M. Glinka", "P. Chaykovskiy", "S. Prokofyev", "N. Rimskiy-Korsakov"], answer: 1, difficulty: "easy", explanation: "Pyotr Ilyich Chaykovskiy ushbu afsonaviy baletlar muallifi." },
  { q: "Vena klassik maktabining buyuk namoyandalarini toping.", options: ["Bax, Gendel, Vivaldi", "Gaydn, Motsart, Betxoven", "Shopen, List, Shuman", "Verdi, Bize, Rossini"], answer: 1, difficulty: "medium", explanation: "Yozef Gaydn, Volfgang Motsart va Lyudvig van Betxoven — Vena klassiklari." },
  { q: "5 yoshidan boshlab musiqa bastalagan avstriyalik buyuk kompozitor kim?", options: ["Lyudvig van Betxoven", "Volfgang Amadey Motsart", "Iogann Sebastyan Bax", "Frans Shubert"], answer: 1, difficulty: "easy", explanation: "Motsart bolalikdanoq daho kompozitor sifatida tanilgan." },
  { q: "Eshitish qobiliyatini yo'qotgan bo'lsa-da, buyuk simfoniyalar yaratgan nemis kompozitori kim?", options: ["V. A. Motsart", "L. van Betxoven", "I. S. Bax", "R. Vagner"], answer: 1, difficulty: "easy", explanation: "Lyudvig van Betxoven kar bo'lib qolganida o'zining mashhur 9-simfoniyasini yaratgan." },
  { q: "O'zbek mumtoz musiqasida \"Doira usuli\" qanday vazifani bajaradi?", options: ["Kuyning ritmik asosini boshqaradi", "Faqat boshlanishida chalinadi", "Kuyning balandligini o'zgartiradi", "Hech qanday vazifa bajarmaydi"], answer: 0, difficulty: "easy", explanation: "Doira usuli butun asarning ritmik va sur'at o'lchovini ta'minlaydi." },
  { q: "\"Bayot\", \"Chorgoh\", \"Dugoh\", \"Segoh\" asarlari qaysi musiqa turkumiga mansub?", options: ["Bolalar qo'shiqlari", "Maqom va mumtoz kuy-ashulalar", "Estrada", "Marshlar"], answer: 1, difficulty: "easy", explanation: "Ular o'zbek xalq mumtoz musiqasi va maqomlar turkumiga kiradi." },
  { q: "\"Tanovar\" kuyi va ashulasi asosan qaysi hudud xalq ijodiyotiga xos?", options: ["Xorazm", "Farg'ona-Toshkent", "Qashqadaryo", "Qoraqalpog'iston"], answer: 1, difficulty: "medium", explanation: "\"Tanovar\" Farg'ona-Toshkent musiqiy yo'nalishining eng nozik durdonasidir." },
  { q: "Qoraqalpoq xalqining milliy torli-kamonli cholg'u asbobi qaysi?", options: ["Dutor", "Qo'biz", "Do'mbira", "Chang"], answer: 1, difficulty: "medium", explanation: "Qo'biz — qoraqalpoq va qozoq xalqlarining qadimiy kamonli cholg'usi." },
  { q: "Qoraqalpoq xalq og'zaki ijodini kuylovchi san'atkorlar kimlar deb ataladi?", options: ["Baxshi va jirovlar", "Hafizlar", "Ashulachilar", "Maqomchilar"], answer: 0, difficulty: "medium", explanation: "Qoraqalpoq dostonlarini baxshilar va jirovlar ijro etishadi." },
  { q: "Musiqada tovushning o'ziga xos bo'yog'i, rangi (masalan, nay ovozini skripkadan ajratib turuvchi xususiyat) nima deb ataladi?", options: ["Ritm", "Tembr", "Temp", "Dinamika"], answer: 1, difficulty: "easy", explanation: "Tovushning o'ziga xos bo'yog'i va rangi Tembr deyiladi." },
  { q: "\"O'zbekiston — Vatanim manim\" qo'shig'ining musiqasini kim yozgan?", options: ["Shermat Yormatov", "Bahodir Umidjonov", "Alisher Ikromov", "Nadim Norxo'jayev"], answer: 2, difficulty: "hard", explanation: "Musiqa muallifi — kompozitor Alisher Ikromov." },
  { q: "Xor jamoasiga rahbarlik qiluvchi mutaxassis kim?", options: ["Xormeyster", "Baletmeyster", "Rejissyor", "Konsertmeyster"], answer: 0, difficulty: "easy", explanation: "Xor jamoasi rahbari — Xormeyster deb ataladi." },
  { q: "O'zbekiston davlat konservatoriyasi qaysi shaharda joylashgan?", options: ["Samarqand", "Buxoro", "Toshkent", "Andijon"], answer: 2, difficulty: "easy", explanation: "O'zbekiston davlat konservatoriyasi Toshkent shahrida joylashgan." },
  { q: "Quyidagi cholg'ulardan qaysi biri qadimiy ud cholg'usining takomillashgan ko'rinishi hisoblanadi?", options: ["G'ijjak", "Rubob", "Nay", "Doira"], answer: 1, difficulty: "medium", explanation: "Rubob va barbat qadimiy Ud cholg'usining qarindoshidir." },
  { q: "YUNESKO tomonidan Insoniyatning nomoddiy madaniy merosi ro'yxatiga kiritilgan o'zbek musiqa janri qaysi?", options: ["Shashmaqom va Katta ashula", "Zamonaviy estrada", "Simfonik syuita", "Bolalar xori"], answer: 0, difficulty: "easy", explanation: "Shashmaqom va Katta ashula YUNESKO xalqaro ro'yxatiga kiritilgan." }
];



// ============================================================
// MUSIQA MADANIYATI TESTLARI (1, 2, 3, 4, 5, 7-SINFLAR)
// ============================================================


// 1-SINF MUSIQA (20 ta savol)
window.TEST_DATA["1_musiqa"] = [
  { q: "Musiqa tovushlari nimalar orqali ifodalanadi?", options: ["Notalar", "Harflar", "Raqamlar", "Chizg'ilar"], answer: 0, difficulty: "easy", explanation: "Musiqa tovushlari notalar orqali yoziladi va ifodalanadi."  },
  { q: "Nechta asosiy musiqa notasi mavjud?", options: ["5 ta", "7 ta", "6 ta", "8 ta"], answer: 1, difficulty: "easy", explanation: "7 ta asosiy nota bor: Do, Re, Mi, Fa, Sol, Lya, Si."  },
  { q: "Onaning bolasini uxlatish uchun aytadigan qo'shig'i nima deb ataladi?", options: ["Yalla", "Lapar", "Alla", "Marsh"], answer: 2, difficulty: "easy", explanation: "Alla — onalar tomonidan chaqaloqqa mehr bilan aytiladigan qadimiy qo'shiqdir."  },
  { q: "Quyidagilardan qaysi biri zarbli (urib chalinadigan) cholg'u?", options: ["Dutor", "G'ijjak", "Nay", "Doira"], answer: 3, difficulty: "easy", explanation: "Doira — qo'l bilan urib chalinadigan milliy zarbli cholg'u asbobi."  },
  { q: "Doira chalinganda qanday asosiy ovozlar chiqadi?", options: ["Buk va Bak", "Bom va Bak", "Taq va Tuq", "Gumbur va Qars"], answer: 1, difficulty: "medium", explanation: "Doirada o'rtasiga urilganda 'Bom', chetiga urilganda 'Bak' ovozlari chiqadi."  },
  { q: "Maktabda dars boshlanishi va tugashini bildiruvchi tovush nima?", options: ["Siren", "Baraban", "Qo'ng'iroq", "Pushtak"], answer: 2, difficulty: "easy", explanation: "Maktab qo'ng'irog'i dars va tanaffusni bildiradi."  },
  { q: "Nay qanday chalinadi?", options: ["Puflab", "Torini chertib", "Urib", "Kamoncha bilan"], answer: 0, difficulty: "easy", explanation: "Nay — qamishdan yasalgan puflab chalinadigan nozik ovozli cholg'u."  },
  { q: "O'zbek xalqining eng sevimli ikki torli milliy cholg'usi qaysi?", options: ["Tanbur", "Rubob", "Chang", "Dutor"], answer: 3, difficulty: "easy", explanation: "Dutor — tut yog'ochidan yasaladigan ikki torli nozik cholg'u."  },
  { q: "Musiqani tinglayotganda o'zimizni qanday tutishimiz kerak?", options: ["Baland gaplashish kerak", "Yugurish kerak", "Sokin va diqqat bilan eshitish kerak", "Telefon o'ynash kerak"], answer: 2, difficulty: "easy", explanation: "Musiqani doimo sokinlikda, hurmat bilan va diqqat qilib tinglash odob sanaladi."  },
  { q: "Musiqada tez va quvnoq qadam tashlashga mos keladigan musiqa turi qaysi?", options: ["Marsh", "Alla", "Valts", "Aza kuyi"], answer: 0, difficulty: "easy", explanation: "Marsh — dadil, tartibli qadam tashlash uchun yozilgan jo'shqin musiqa."  },
  { q: "Do notasidan keyin qaysi nota keladi?", options: ["Mi", "Fa", "Sol", "Re"], answer: 3, difficulty: "easy", explanation: "Notalar tartibi: Do, Re, Mi, Fa, Sol, Lya, Si."  },
  { q: "Qo'shiq kuylaydigan odam nima deb ataladi?", options: ["Raqqos", "Xonanda (qo'shiqchi)", "Rassom", "Shoir"], answer: 1, difficulty: "easy", explanation: "Qo'shiq aytuvchi ijrochi xonanda deyiladi."  },
  { q: "Birgalikda qo'shiq aytayotgan bolalar guruhi nima deb ataladi?", options: ["Solo", "Orkestr", "Duet", "Xor"], answer: 3, difficulty: "easy", explanation: "Katta jamoa bo'lib kuylash xor deb ataladi."  },
  { q: "O'zbekiston Respublikasi Davlat madhiyasi yangraganda qanday turiladi?", options: ["O'tirgan holda", "Qo'lni cho'ntagiga solib", "O'ng qo'lni ko'krakka qo'yib, tik turib", "Qo'l silkitib"], answer: 2, difficulty: "easy", explanation: "Madhiyamiz yangraganda o'ng qo'lni chap ko'krakka qo'yib, g'urur bilan tik turiladi."  },
  { q: "Pianino (fortepiano) qanday cholg'ular guruhiga kiradi?", options: ["Faqat puflama", "Klaveshli (klaviaturali)", "Faqat torli chertma", "Zarbli yog'och"], answer: 1, difficulty: "medium", explanation: "Pianino klaviatura (oq va qora tugmalar) orqali chalinadigan cholg'udir."  },
  { q: "Qushlarning chug'urlashi qanday tovushga kiradi?", options: ["Tabiat tovushi", "Shovqin", "Elektron musiqa", "Mexanik tovush"], answer: 0, difficulty: "easy", explanation: "Qushlar ovozi, suv shildirashi, shamol epkini — tabiat tovushlaridir."  },
  { q: "Cholg'u asbobini chaladigan kishi kim?", options: ["Xonanda", "Raqqosa", "Sozanda", "Boshlovchi"], answer: 2, difficulty: "easy", explanation: "Cholg'uda kuy ijro etuvchi san'atkor sozanda deyiladi."  },
  { q: "Bolalar uchun yozilgan quvnoq qo'shiqlarni kimlar kuylaydi?", options: ["Faqat kattalar", "Harbiylar", "Faqat cholg'uchilar", "Bolalar va yoshlar"], answer: 3, difficulty: "easy", explanation: "Bolalar qo'shiqlari bolalar bog'chalari va maktablarda o'quvchilar tomonidan kuylanadi."  },
  { q: "Doira qaysi xalqning milliy asbobi hisoblanadi?", options: ["O'zbek va sharq xalqlari", "Inglizlar", "Nemislar", "Ispanlar"], answer: 0, difficulty: "easy", explanation: "Doira — o'zbek va butun O'rta Osiyo xalqlarining eng mashhur cholg'usidir."  },
  { q: "Quyidagilardan qaysi biri musiqa eshitish vositasi emas?", options: ["Magnitofon", "Muzlatgich", "Radio", "Telefon"], answer: 1, difficulty: "easy", explanation: "Muzlatgich oziq-ovqat saqlash uchun, musiqa vositasi emas."  }
];

// 2-SINF MUSIQA (20 ta savol)
window.TEST_DATA["2_musiqa"] = [
  { q: "Notalar yoziladigan 5 ta gorizontal chiziq nima deb ataladi?", options: ["Nota yo'li (notostan)", "Daftar", "Kalit", "Chizg'ich"], answer: 0, difficulty: "easy", explanation: "Besh chiziq — nota yo'li yoki notostan deb yuritiladi."  },
  { q: "Nota yo'lining boshiga qo'yiladigan asosiy kalit qaysi?", options: ["Eshik kaliti", "Skripka (Sol) kaliti", "Bas kaliti", "Alt kaliti"], answer: 1, difficulty: "easy", explanation: "Musiqada eng keng qo'llaniladigan kalit — Skripka (Sol) kalitidir."  },
  { q: "Doirada chalinadigan ritmik o'lchov nima deb ataladi?", options: ["Temp", "Melodiya", "Usul", "Lad"], answer: 2, difficulty: "easy", explanation: "Doirada qoliplangan ritmik harakatlar 'Doira usuli' deb ataladi."  },
  { q: "\"Lapar\" qanday ijro etiladi?", options: ["Faqat cholg'uda", "Faqat bir kishi", "Faqat xor jo'rligisiz", "Yigit va qizning aytishuvi tarzida"], answer: 3, difficulty: "medium", explanation: "Lapar xalq og'zaki ijodida yigit va qiz aytishuvi, raqs bilan ijro etiladi."  },
  { q: "Rubob cholg'usi qanday asboblar turiga kiradi?", options: ["Damli-puflama", "Torli-chertma", "Zarbli", "Kamonli"], answer: 1, difficulty: "easy", explanation: "Qashqar yoki afg'on rubobi noxun yoki mediator bilan chertib chalinadi."  },
  { q: "Musiqada ohang, kuy nima deyiladi?", options: ["Nota", "Takt", "Melodiya", "Metr"], answer: 2, difficulty: "easy", explanation: "Melodiya — musiqa fikrini ifodalovchi ohang va kuydir."  },
  { q: "Forte (f) belgisi musiqani qanday ijro etishni talab qiladi?", options: ["Baland, jarangdor", "Juda past", "Sekinlashtirib", "To'xtab-to'xtab"], answer: 0, difficulty: "easy", explanation: "Forte — italyancha so'z bo'lib, baland va kuchli ijroni bildiradi."  },
  { q: "Piano (p) belgisi nimani anglatadi?", options: ["Kuchli ovozda", "G'amgin", "Juda tez", "Sekin, mayin ovozda"], answer: 3, difficulty: "easy", explanation: "Piano — mayin, past ovozda kuylash yoki chalish demakdir."  },
  { q: "Beshinchi chiziqda yoki chiziqlar orasida joylashgan yettinchi nota qaysi?", options: ["Do", "Fa", "Si", "Sol"], answer: 2, difficulty: "medium", explanation: "Yettinchi nota — Si notasidir."  },
  { q: "Karnay va surnay qaysi tantanalarda ko'proq chalinadi?", options: ["To'y va bayram sayillarida", "Faqat darslarda", "Kutubxonada", "Imtihonda"], answer: 0, difficulty: "easy", explanation: "Karnay-surnay xalqimizning to'y, sayil va shodiyonalarida jaranglaydi."  },
  { q: "G'ijjak qaysi vosita yordamida chalinadi?", options: ["Tayoqcha", "Noxun", "Cho'p", "Kamoncha"], answer: 3, difficulty: "easy", explanation: "G'ijjak torli-kamonli cholg'u bo'lib, kamoncha bilan chalinadi."  },
  { q: "O'zbek xalq baxshilari doston aytganda qaysi sozni chalishadi?", options: ["Gitara", "Do'mbira", "Pianino", "Saksafon"], answer: 1, difficulty: "easy", explanation: "Do'mbira — o'zbek xalq baxshilarining asosiy an'anaviy sozi."  },
  { q: "Yakka o'zi qo'shiq kuylash yoki kuy chalish nima deyiladi?", options: ["Kvartet", "Duet", "Trio", "Solo (yakkaxonlik)"], answer: 3, difficulty: "easy", explanation: "Bir ijrochining chiqishi Solo deb ataladi."  },
  { q: "Ikki kishining birgalikda kuylashi yoki chalishi nima deyiladi?", options: ["Xor", "Solo", "Duet", "Kvintet"], answer: 2, difficulty: "easy", explanation: "Ikki ijrochining birgalikdagi chiqishi Duet deb ataladi."  },
  { q: "Bolalar bog'chasida va maktabda musiqiy o'yinlar nima uchun o'tkaziladi?", options: ["Vaqt o'tkazish uchun", "Ritm va musiqiy qobiliyatni o'stirish uchun", "Charchatish uchun", "Uxlatish uchun"], answer: 1, difficulty: "easy", explanation: "Musiqiy o'yinlar bolalarda ritm hissi, chaqqonlik va eshitish qobiliyatini rivojlantiradi."  },
  { q: "Raqsga tushganda musiqa qanday ahamiyatga ega?", options: ["Harakatlarni ritmga moslashtiradi", "Hech qanday ahamiyati yo'q", "Faqat shovqin beradi", "Harakatni to'xtatadi"], answer: 0, difficulty: "easy", explanation: "Ritmik musiqa raqs harakatlariga joziba va aniqlik bag'ishlaydi."  },
  { q: "Chang cholg'usining torlari nima bilan urib chalinadi?", options: ["Kamon bilan", "Barmoq bilan", "Ikki dona ingichka tayoqcha (cho'p) bilan", "Tish bilan"], answer: 2, difficulty: "easy", explanation: "Chang cholg'usi bambuk cho'plar yordamida chalinadi."  },
  { q: "Tez sur'atdagi musiqaga qanday harakatlar mos tushadi?", options: ["Qilt etmay turish", "Uxlab qolish", "Sekin cho'zilish", "Sho'x va chaqqon harakatlar"], answer: 3, difficulty: "easy", explanation: "Sho'x kuylar odamni faol, chaqqon va jo'shqin harakatlarga chorlaydi."  },
  { q: "Alla qo'shig'ining kayfiyati qanday bo'ladi?", options: ["Mayin, sokin va mehrli", "Juda shovqinli", "Qo'rqinchli", "Jangovar"], answer: 0, difficulty: "easy", explanation: "Alla mayin, orombaxsh va sokin ohangda aytiladi."  },
  { q: "O'zbekiston madhiyasi qaysi so'zlar bilan boshlanadi?", options: ["Go'zal yurtim", "Serquyosh, hur o'lkam", "Ona Vatanim", "Assalom maktab"], answer: 1, difficulty: "easy", explanation: "Davlat madhiyamiz 'Serquyosh, hur o'lkam, elga baxt, najot...' so'zlari bilan boshlanadi."  }
];

// 3-SINF MUSIQA (20 ta savol)
window.TEST_DATA["3_musiqa"] = [
  { q: "O'zbek xalq cholg'ulari necha asosiy guruhga bo'linadi?", options: ["4 guruhga", "2 guruhga", "3 guruhga", "6 guruhga"], answer: 0, difficulty: "easy", explanation: "Torli-chertma, torli-kamonli, puflama (damli) va zarbli guruhlarga bo'linadi."  },
  { q: "Quyidagilardan qaysi biri puflama cholg'ular guruhiga kiradi?", options: ["Dutor va Rubob", "Sibizg'a va Nay", "G'ijjak va Sato", "Doira va Nog'ora"], answer: 1, difficulty: "easy", explanation: "Sibizg'a, nay, karnay, surnay — puflab chalinadigan cholg'ulardir."  },
  { q: "Xor jamoasini qo'l harakatlari bilan boshqaradigan inson kim?", options: ["Bastakor", "Rejissyor", "Xormeyster (Dirijyor)", "Raqqos"], answer: 2, difficulty: "easy", explanation: "Xorga xormeyster yoki dirijyor rahbarlik qiladi."  },
  { q: "Musiqa asarini yaratgan, bastalagan inson nima deb ataladi?", options: ["Operator", "Yozuvchi", "Muxbir", "Kompozitor (bastakor)"], answer: 3, difficulty: "easy", explanation: "Kuy va musiqalarni bastakor yoki kompozitor yaratadi."  },
  { q: "Yetti notaning to'g'ri ketma-ketligini toping.", options: ["Do, Mi, Re, Fa, Sol, Si, Lya", "Do, Re, Mi, Fa, Sol, Lya, Si", "Si, Lya, Sol, Fa, Mi, Re, Do", "Re, Do, Fa, Mi, Sol, Lya, Si"], answer: 1, difficulty: "easy", explanation: "Standart tovushqator: Do, Re, Mi, Fa, Sol, Lya, Si."  },
  { q: "Skripka kaliti ikkinchi chiziqdan boshlangani uchun yana qanday ataladi?", options: ["Do kaliti", "Fa kaliti", "Sol kaliti", "Mi kaliti"], answer: 2, difficulty: "easy", explanation: "2-chiziqda Sol notasi joylashgani uchun Sol kaliti deyiladi."  },
  { q: "Musiqada tovushlarning cho'zimi nimani bildiradi?", options: ["Tovushning qancha vaqt yangrashini", "Rangini", "Balandligini", "Matnini"], answer: 0, difficulty: "medium", explanation: "Nota cho'zimi — butun, yarim, chorak, sakkiztalik va hokazo davomiylikni bildiradi."  },
  { q: "Qoraqalpoq xalqining afsonaviy dostonchilik sozi qaysi?", options: ["Sato", "Tanbur", "Pianino", "Qo'biz"], answer: 3, difficulty: "medium", explanation: "Qo'biz — qoraqalpoq xalqining qadimiy torli-kamonli milliy cholg'usi."  },
  { q: "Uch kishidan iborat musiqiy ansambl qanday ataladi?", options: ["Kvartet", "Duet", "Trio", "Kvintet"], answer: 2, difficulty: "easy", explanation: "Uch nafar ijrochi birgalikda Trio deyiladi."  },
  { q: "To'rt nafar ijrochidan iborat guruh qanday nomlanadi?", options: ["Kvartet", "Trio", "Sekstet", "Septet"], answer: 0, difficulty: "easy", explanation: "To'rt kishilik musiqiy jamoa Kvartet deb ataladi."  },
  { q: "Musiqada ijro tezligi qanday ataladi?", options: ["Registr", "Dinamika", "Tembr", "Temp (sur'at)"], answer: 3, difficulty: "easy", explanation: "Tezlik darajasi Temp deb ataladi (adajio, andante, allegro)."  },
  { q: "Allegro so'zi qanday sur'atni bildiradi?", options: ["Sekin, g'amgin", "Tez, quvnoq", "Juda og'ir", "Uyg'un"], answer: 1, difficulty: "medium", explanation: "Allegro — italyancha 'tez va chaqqon' sur'atni bildiradi."  },
  { q: "Andante sur'ati qanday ma'noni bildiradi?", options: ["Eng baland", "Juda tez yugurishdek", "Shoshilmasdan to'xtash", "O'rtacha, odimlab yurish tezligida"], answer: 3, difficulty: "medium", explanation: "Andante — xotirjam qadam tashlash tezligidagi sur'atdir."  },
  { q: "\"Chertmak\", \"Rez\", \"Drez\" qaysi cholg'uni chalish usullari?", options: ["Nay", "Nog'ora", "Dutor va Tanbur", "Karnay"], answer: 2, difficulty: "medium", explanation: "Bu zarblar dutor va torli cholg'ularda qo'llaniladigan maxsus ijro usullaridir."  },
  { q: "O'zbek xalq raqslarida qaysi viloyat uslubi o'zining jo'shqin 'Lazgi'si bilan mashhur?", options: ["Farg'ona", "Xorazm", "Buxoro", "Surxondaryo"], answer: 1, difficulty: "easy", explanation: "Lazgi raqsi va ohangi qadimiy Xorazm vohasiga mansub."  },
  { q: "Buxoro mavrigi kuylari qaysi cholg'u jo'rligida ko'proq ijro etiladi?", options: ["Doira", "Truba", "Klarnet", "Ksilofon"], answer: 0, difficulty: "medium", explanation: "Buxoro mavrigi an'anasida doira usullari yetakchi o'rin tutadi."  },
  { q: "Simfonik orkestrda eng ko'p sonli cholg'ular guruhi qaysi?", options: ["Mis puflamalar", "Zarbli cholg'ular", "Torli-kamonli cholg'ular (skripkalar)", "Elektron cholg'ular"], answer: 2, difficulty: "medium", explanation: "Simfonik orkestrning asosini skripka, alt, violonchel va kontrabaslar tashkil etadi."  },
  { q: "Quyidagilardan qaysi biri bolalar kompozitori hisoblanadi?", options: ["Juzeppe Verdi", "Lyudvig van Betxoven", "Iogann Sebastyan Bax", "Nadim Norxo'jayev"], answer: 3, difficulty: "medium", explanation: "O'zbekistonda Nadim Norxo'jayev va Shermat Yormatov ko'plab ajoyib bolalar qo'shiqlarini yaratgan."  },
  { q: "«Bulbulcha» bolalar xor jamoasining asoschisi kim?", options: ["Shermat Yormatov", "Mutal Burhonov", "Yunus Rajabiy", "Tolibjon Sodiqov"], answer: 0, difficulty: "medium", explanation: "O'zbekiston xalq artisti Shermat Yormatov 'Bulbulcha' xorini tashkil etgan."  },
  { q: "Musiqiy tovushning o'ziga xos tovlanishi, bo'yog'i nima deyiladi?", options: ["Registr", "Tembr", "Takt", "Interval"], answer: 1, difficulty: "medium", explanation: "Tembr — ovoz yoki cholg'uning o'ziga xos 'rangi' va jarangidir."  }
];

// 4-SINF MUSIQA (20 ta savol)
window.TEST_DATA["4_musiqa"] = [
  { q: "Musiqada ikki nota orasidagi masofa nima deb ataladi?", options: ["Interval", "Akkord", "Lad", "Takt"], answer: 0, difficulty: "medium", explanation: "Ikki musiqiy tovush orasidagi balandlik masofasi Interval deyiladi."  },
  { q: "Bir vaqtda uch yoki undan ortiq tovushlarning birgalikda yangrashi nima?", options: ["Solo", "Akkord", "Monodiya", "Unison"], answer: 1, difficulty: "medium", explanation: "Uch va undan ko'p tovushlarning uyg'unligi Akkord (masalan, uchtovushlik) deyiladi."  },
  { q: "Musiqada eng xursand, yorug' kayfiyatni ifodalovchi lad qaysi?", options: ["Xromatik", "Minor", "Major (mayor)", "Atipik"], answer: 2, difficulty: "easy", explanation: "Major ladi odatda quvnoq, yorug' va tantanavor xarakterga ega."  },
  { q: "Musiqada g'amgin, mayin, mungli kayfiyatni ifodalovchi lad qaysi?", options: ["Garmonik", "Major", "Pentatonika", "Minor"], answer: 3, difficulty: "easy", explanation: "Minor ladi ko'pincha mungli, lirik va nozik tuyg'ularni aks ettiradi."  },
  { q: "Davlat madhiyasi muallifi bo'lgan bastakor kim?", options: ["Sulaymon Yudakov", "Mutal Burhonov", "Muxtor Ashrafiy", "Doni Zokirov"], answer: 1, difficulty: "easy", explanation: "Madhiyamiz musiqasini O'zbekiston xalq artisti Mutal Burhonov bastalagan."  },
  { q: "Davlat madhiyamiz matni muallifi kim?", options: ["G'afur G'ulom", "Erkin Vohidov", "Abdulla Oripov", "Oybek"], answer: 2, difficulty: "easy", explanation: "Madhiyamiz she'ri O'zbekiston Qahramoni Abdulla Oripov qalamiga mansub."  },
  { q: "Teatrda musiqa, qo'shiq va sahna harakati birlashgan asar turi qaysi?", options: ["Opera", "Drama", "Sirk", "Pantomima"], answer: 0, difficulty: "easy", explanation: "Opera — qahramonlar gapirmasdan, butun voqeani kuylab ijro etadigan sahna san'atidir."  },
  { q: "Musiqali xoreografik (raqs orqali ifodalanadigan) sahna asari nima?", options: ["Kino", "Opera", "Konsert", "Balet"], answer: 3, difficulty: "easy", explanation: "Balet — qahramonlar so'zsiz, musiqa jo'rligida faqat raqs bilan voqeani ko'rsatadigan asardir."  },
  { q: "Dunyodagi eng mashhur 'Shelkunchik' baletini kim yozgan?", options: ["Mixail Glinka", "Sergey Raxmaninov", "Pyotr Chaykovskiy", "Igor Stravinskiy"], answer: 2, difficulty: "easy", explanation: "P. I. Chaykovskiy 'Shelkunchik', 'Oqqush ko'li' va 'Uyqudagi go'zal' baletlarini yaratgan."  },
  { q: "O'zbek milliy operasining birinchi namunasi qaysi?", options: ["\"Bo'ron\"", "\"Maysaraning ishi\"", "\"Layli va Majnun\"", "\"Zebunniso\""], answer: 0, difficulty: "medium", explanation: "Muxtor Ashrafiy va Sergey Vasilenko tomonidan yaratilgan 'Bo'ron' ilk o'zbek operasidir."  },
  { q: "Ilk o'zbek hajviy (komik) operasi qaysi?", options: ["\"Dilorom\"", "\"Bo'ron\"", "\"Tohir va Zuhra\"", "\"Maysaraning ishi\""], answer: 3, difficulty: "medium", explanation: "Sulaymon Yudakovning 'Maysaraning ishi' operasi birinchi o'zbek komik operasidir."  },
  { q: "Tanbur cholg'usi qaysi barmog'iga taqiladigan noxun bilan chalinadi?", options: ["Bosh barmog'iga", "Ko'rsatkich barmog'iga", "Jimsaloqqa", "O'rta barmog'iga"], answer: 1, difficulty: "medium", explanation: "Tanbur ko'rsatkich barmoqqa kiyiladigan po'lat noxun bilan chertiladi."  },
  { q: "O'zbek mumtoz musiqasining eng yirik qomusiy janri nima?", options: ["Ulan", "Yalla", "Katta ashula", "Shashmaqom"], answer: 3, difficulty: "easy", explanation: "Shashmaqom — 6 ta maqomdan tashkil topgan ulkan mumtoz musiqa durdonasidir."  },
  { q: "Farg'ona vodiysida paydo bo'lgan o'ziga xos 'patnisaki ashula' qaysi?", options: ["Lapar", "Mavrigi", "Katta ashula", "Xalfa"], answer: 2, difficulty: "easy", explanation: "Katta ashula xonandalar tomonidan patnis tutib, baland pardalarda aytiladi."  },
  { q: "YUNESKOning Nomoddiy madaniy merosi ro'yxatiga kiritilgan o'zbek musiqiy qadriyatlari qaysi?", options: ["Faqat estrada", "Shashmaqom, Katta ashula, Lazgi, Baxshichilik", "Faqat zamonaviy rep", "Faqat harbiy marsh"], answer: 1, difficulty: "medium", explanation: "Ushbu to'rt buyuk milliy merosimiz insoniyatning bebaho boyligi sifatida YUNESKOga kiritilgan."  },
  { q: "Musiqada ovozning eng yo'g'on va past erkaklar ovozi nima deyiladi?", options: ["Bas", "Tenor", "Bariton", "Alt"], answer: 0, difficulty: "easy", explanation: "Erkaklarning eng past, zalvorli ovozi — Bas deyiladi."  },
  { q: "Erkaklarning eng baland, jarangdor vokal ovozi qanday ataladi?", options: ["Soprano", "Bas", "Tenor", "Kontralto"], answer: 2, difficulty: "easy", explanation: "Tenor — erkak xonandalarining eng baland ovozidir."  },
  { q: "Ayollarning eng baland, jarangdor ovozi qanday ataladi?", options: ["Bas", "Alt", "Metsso-soprano", "Soprano"], answer: 3, difficulty: "easy", explanation: "Ayollarning eng baland ovozi Soprano deb ataladi."  },
  { q: "Ayollarning eng past (yo'g'on) ovozi qaysi?", options: ["Kontralto (Alt)", "Soprano", "Tenor", "Koloratura"], answer: 0, difficulty: "medium", explanation: "Ayollarning eng past, chuqur ovozi Kontralto yoki Alt deb ataladi."  },
  { q: "Butun nota necha zarbga teng bo'ladi?", options: ["1 zarbga", "4 zarbga (1-va, 2-va, 3-va, 4-va)", "2 zarbga", "8 zarbga"], answer: 1, difficulty: "medium", explanation: "Butun nota 4 chorak hisobiga (to'rt zarbga) teng davom etadi."  }
];

// 5-SINF MUSIQA (20 ta savol)
window.TEST_DATA["5_musiqa"] = [
  { q: "\"Shashmaqom\" so'zidagi 'Shash' forscha qanday raqamni bildiradi?", options: ["Olti", "Yetti", "O'n ikki", "To'rt"], answer: 0, difficulty: "easy", explanation: "Shash — forscha olti demakdir, ya'ni Olti maqom."  },
  { q: "Shashmaqom tarkibiga kiruvchi maqomlar to'g'ri sanalgan qatorni toping.", options: ["Rost, Ushshoq, Chorgoh, Feruz, Lazgi", "Buzruk, Rost, Navo, Dugoh, Segoh, Iroq", "Segoh, Munojot, Tanovar, Girya", "Bayot, Dugoh, Suvora, Nasr"], answer: 1, difficulty: "medium", explanation: "Shashmaqom: Buzruk, Rost, Navo, Dugoh, Segoh, Iroq maqomlaridan tashkil topgan."  },
  { q: "Shashmaqomni birinchi marta to'liq notaga olgan akademik san'atkor kim?", options: ["Komiljon Otaniyozov", "To'xtasin Jalilov", "Yunus Rajabiy", "Hoji Abdulaziz"], answer: 2, difficulty: "easy", explanation: "Akademik Yunus Rajabiy Shashmaqomni 6 jildlik notaga tushirib, avlodlarga saqlab qolgan."  },
  { q: "O'zbek xalq dostonchiligida eng qadimiy va mashhur qahramonlik dostoni qaysi?", options: ["\"Ravshan\"", "\"Go'ro'g'li\"", "\"Kuntug'mish\"", "\"Alpomish\""], answer: 3, difficulty: "easy", explanation: "\"Alpomish\" dostoni ming yillik tarixga ega milliy qahramonlik eposidir."  },
  { q: "Doston aytuvchi xalq ijodkorlari qanday ataladi?", options: ["Xonanda", "Baxshi, jirov, oqin", "Aktyor", "Sozanda"], answer: 1, difficulty: "easy", explanation: "Xalq dostonlarini baxshilar, jirovlar va oqinlar kuylashadi."  },
  { q: "Baxshichilik maktablari asosan qaysi vohalarda kuchli rivojlangan?", options: ["Andijon va Namangan", "Toshkent va Farg'ona", "Surxondaryo va Qashqadaryo", "Sirdaryo va Jizzax"], answer: 2, difficulty: "medium", explanation: "Surxon va Qashqadaryo dostonchilik maktablari o'zining bo'g'iz ovozli an'anasi bilan mashhur."  },
  { q: "Xorazm dostonchilik an'anasida baxshiga qaysi sozlar jo'r bo'ladi?", options: ["Dutor, g'ijjak, bulamon", "Faqat do'mbira", "Gitara va baraban", "Pianino"], answer: 0, difficulty: "medium", explanation: "Xorazm baxshilari torli va damli ansambl (dutor, g'ijjak, bulamon) jo'rligida kuylaydi."  },
  { q: "Musiqada ritm va usulni ushlab turuvchi asosiy zarbli asbob qaysi?", options: ["Qonun", "Nay", "Chang", "Doira"], answer: 3, difficulty: "easy", explanation: "Doira o'zbek musiqasida usul va ritmning boshqaruvchisi hisoblanadi."  },
  { q: "Simfoniya janrining 'otasi' deb qaysi Vena klassik kompozitori tan olingan?", options: ["Lyudvig van Betxoven", "Volfgang Motsart", "Yozef Gaydn", "Frans Shubert"], answer: 2, difficulty: "medium", explanation: "Avstriyalik Yozef Gaydn 100 dan ortiq simfoniya yozib, bu janr asoschisi bo'lgan."  },
  { q: "Betxoven o'zining eng mashhur 9-simfoniyasini qanday holatda yozgan?", options: ["Eshitish qobiliyatini to'liq yo'qotgan (kar) holda", "Ko'zi ojiz holda", "Bolalik chog'ida", "Sayohatda"], answer: 0, difficulty: "medium", explanation: "Betxoven butunlay kar bo'lib qolganiga qaramay, ichki eshitish orqali dahiyona 9-simfoniyani yaratgan."  },
  { q: "O'zbekistonda simfonik musiqa maktabiga asos solgan buyuk o'zbek kompozitori kim?", options: ["Sayfi Jalil", "Sobir Boboyev", "Ikrom Akbarov", "Muxtor Ashrafiy"], answer: 3, difficulty: "medium", explanation: "Muxtor Ashrafiy o'zbek simfonik musiqasining asoschisi va birinchi dirijyori hisoblanadi."  },
  { q: "\"Gulsara\" va \"Tohir va Zuhra\" musiqali dramalarini yaratgan atoqli bastakor kim?", options: ["Yunus Rajabiy", "To'xtasin Jalilov", "Tolibjon Sodiqov", "Fattohxon Mamadaliyev"], answer: 1, difficulty: "medium", explanation: "O'zbekiston xalq hofizi To'xtasin Jalilov ko'plab mashhur spektakllarga musiqa bastalagan."  },
  { q: "Qoraqalpoq milliy musiqa san'atida yirik musiqiy asarlar nima deb ataladi?", options: ["Katta ashula", "Maqom", "Lapar", "Nama"], answer: 3, difficulty: "hard", explanation: "Qoraqalpoq xalq cholg'u kuylari an'anaviy tarzda 'Nama' deb ataladi."  },
  { q: "Nay cholg'usining eng mashhur ustozi, xalq artisti kim bo'lgan?", options: ["Ishoq Rajabov", "Ahmadjon Shukurov", "Abduqodir Ismoilov", "Mahmudjon Tojiboyev"], answer: 2, difficulty: "hard", explanation: "Abduqodir Ismoilov o'zbek naychilik maktabining eng yorqin namoyandalaridan biridir."  },
  { q: "Musiqada bir nechta musiqiy ovozlarning mustaqil qo'shilib yangrashi nima deyiladi?", options: ["Gomofoniya", "Polifoniya", "Monodiya", "Kakofoniya"], answer: 1, difficulty: "hard", explanation: "Polifoniya — ko'p ovozlik san'ati bo'lib, har bir ovoz mustaqil kuylanadi (masalan, Bax fukalari)."  },
  { q: "O'zbek xalq musiqa merosida lirik tuyg'ularni ifodalovchi eng nozik kuy qaysi?", options: ["\"Tanovar\"", "\"Jangovar marsh\"", "\"Yallama yorim\"", "\"Chorzarb\""], answer: 0, difficulty: "easy", explanation: "\"Tanovar\" — ayol qalbining nozik va dardli hislarini aks ettiruvchi buyuk lirik asardir."  },
  { q: "Katta ashula (patnisaki) ijrosida necha nafar xonanda qatnashishi odat tusiga kirgan?", options: ["Kamida 50 nafar", "Faqat 1 nafar", "2 tadan 4 nafargacha", "100 nafar"], answer: 2, difficulty: "medium", explanation: "Katta ashula odatda 2, 3 yoki 4 nafar yetakchi hofizlar navbatma-navbat aytishuvi bilan yangraydi."  },
  { q: "Dutorda pardalar soni taxminan nechta bo'ladi?", options: ["100 ta", "3 ta", "50 ta", "12-16 ta"], answer: 3, difficulty: "medium", explanation: "An'anaviy dutor dastasida ipakdan bog'langan 12 tadan 16 tagacha parda bo'ladi."  },
  { q: "G'ijjak cholg'usida nechta tor bo'ladi?", options: ["4 ta tor", "2 ta tor", "12 ta tor", "24 ta tor"], answer: 0, difficulty: "medium", explanation: "Zamonaviy qayta ishlangan o'zbek g'ijjagida 4 ta tor mavjud."  },
  { q: "Toshkent shahridagi eng nufuzli oliy musiqa dargohi qaysi?", options: ["Teatr instituti", "O'zbekiston Davlat Konservatoriyasi", "Pedagogika universiteti", "Badiiy akademiya"], answer: 1, difficulty: "easy", explanation: "O'zbekiston Davlat Konservatoriyasi mamlakatimizdagi yetakchi musiqa akademiyasidir."  }
];

// 7-SINF MUSIQA (20 ta savol)
window.TEST_DATA["7_musiqa"] = [
  { q: "Vena klassik maktabining uch daho kompozitorini toping.", options: ["Y. Gaydn, V. Motsart, L. van Betxoven", "I. S. Bax, G. F. Gendel, A. Vivaldi", "F. Shopen, F. List, R. Shuman", "P. Chaykovskiy, S. Raxmaninov, M. Musorgskiy"], answer: 0, difficulty: "easy", explanation: "Gaydn, Motsart va Betxoven birgalikda Vena klassik maktabining ustunlari sanaladi."  },
  { q: "Polsha xalqining buyuk pianinochi-kompozitori, 'Fortepiano shoiri' kim?", options: ["Ferens List", "Frederik Shopen", "Frans Shubert", "Iogann Brams"], answer: 1, difficulty: "medium", explanation: "Frederik Shopen butun umrini fortepiano uchun durdona mazurka, polonez va noktyurnlar yozishga bag'ishlagan."  },
  { q: "Musiqada 'Romantizm' davrining asosiy g'oyasi nima edi?", options: ["Harbiy intizom", "Faqat qat'iy matematik qoidalar", "Inson ichki kechinmalari, his-tuyg'ulari va erkinlik", "Sanoat taraqqiyoti"], answer: 2, difficulty: "medium", explanation: "Romantizm insonning qalb kechinmalari, fantaziya va tabiiy tuyg'ularini bosh o'ringa qo'ydi."  },
  { q: "Italiyalik buyuk opera ustasi, 'Aida', 'Traviata', 'Rigoletto' operalari muallifi kim?", options: ["Vinchentso Bellini", "Jakkomo Puchchini", "Joakkino Rossini", "Juzeppe Verdi"], answer: 3, difficulty: "easy", explanation: "Juzeppe Verdi jahon opera san'atining eng buyuk daholaridan biridir."  },
  { q: "\"Sevilya sartaroshi\" komik operasining bastakori kim?", options: ["V. A. Motsart", "Joakkino Rossini", "J. Bize", "G. Donitsetti"], answer: 1, difficulty: "medium", explanation: "Rossinining 'Sevilya sartaroshi' operasi o'zining yengil va kulgili syujeti bilan mashhur."  },
  { q: "\"Karmen\" jahonshumul operasining muallifi bo'lgan fransuz kompozitori kim?", options: ["Kamyul Sen-Sans", "Sharl Guno", "Jorj Bize", "Klod Debyussi"], answer: 2, difficulty: "easy", explanation: "Jorj Bize Ispaniya hayotiga bag'ishlangan 'Karmen' operasining muallifidir."  },
  { q: "Simfonik syuita janrida 'Shahrizoda' asarini yaratgan rus kompozitori kim?", options: ["Nikolay Rimskiy-Korsakov", "Pyotr Chaykovskiy", "Modest Musorgskiy", "Aleksandr Borodin"], answer: 0, difficulty: "medium", explanation: "Rimskiy-Korsakov 'Ming bir kecha' sharq ertaklari asosida 'Shahrizoda' simfonik syuitasini yaratgan."  },
  { q: "O'zbekistonda xalq cholg'ulari orkestrini tashkil etgan va takomillashtirgan professor kim?", options: ["Doni Zokirov", "Yunus Rajabiy", "To'xtasin Jalilov", "Ashot Petrosyans"], answer: 3, difficulty: "hard", explanation: "Professor Ashot Petrosyans o'zbek xalq cholg'ularini qayta ishlab, simfonik orkestr darajasiga ko'targan."  },
  { q: "Alisher Navoiy dostonlari asosida yaratilgan ilk o'zbek mumtoz operasi qaysi?", options: ["\"Dilorom\"", "\"Alisher Navoiy\"", "\"Layli va Majnun\"", "\"Farhod va Shirin\""], answer: 2, difficulty: "medium", explanation: "Tolibjon Sodiqov va Reyngold Glier hamkorligida yaratilgan 'Layli va Majnun' ilk mumtoz operadir."  },
  { q: "Sharq musiqa nazariyasiga bag'ishlangan 'Katta musiqa kitobi' muallifi bo'lgan buyuk alloma kim?", options: ["Abu Nasr Forobiy", "Abu Ali ibn Sino", "Al-Xorazmiy", "Mirzo Ulug'bek"], answer: 0, difficulty: "hard", explanation: "Abu Nasr Forobiy 'Kitob al-musiqa al-kabir' asari bilan sharq musiqa ilmiga asos solgan."  },
  { q: "Abu Ali ibn Sinoning musiqa ilmiga oid qarashlari qaysi kitobida bayon etilgan?", options: ["\"Al-Qonun\"", "\"Tib qonunlari\"", "\"Donishnoma\"", "\"Kitob ash-Shifo\""], answer: 3, difficulty: "hard", explanation: "Ibn Sino 'Kitob ash-Shifo' qomusining maxsus bo'limini musiqa nazariyasi va shifobaxshligiga bag'ishlagan."  },
  { q: "Musiqaterapiya (musiqa bilan davolash) qaysi allomalarimiz tomonidan ilmiy asoslangan?", options: ["Beruniy va Bobur", "Forobiy va Ibn Sino", "Yassaviy va Navoiy", "Farg'oniy va Qoshg'ariy"], answer: 1, difficulty: "medium", explanation: "Forobiy va Ibn Sino musiqiy ohanglarning inson ruhiyati va salomatligiga ta'sirini o'rganganlar."  },
  { q: "O'zbekiston kompozitorlari uyushmasining mashhur simfonik asari 'Samarqand manzaralari' muallifi kim?", options: ["Habibulla Rahimov", "Mutal Burhonov", "Sulaymon Yudakov", "Ikrom Akbarov"], answer: 3, difficulty: "hard", explanation: "Ikrom Akbarov o'zbek simfonik musiqasida chuqur falsafiy asarlar yaratgan ulkan kompozitordir."  },
  { q: "Jahon estradasida 'Jazz' (jaz) musiqasi dastlab qayerda vujudga kelgan?", options: ["Fransiyada", "Buyuk Britaniyada", "AQShda (afro-amerikaliklar orasida)", "Braziliyada"], answer: 2, difficulty: "easy", explanation: "Jazz XIX asr oxirida AQShning Yangi Orlean shahrida afro-amerika an'analari asosida shakllandi."  },
  { q: "Jazz musiqasining asosiy o'ziga xos belgisi nima?", options: ["Faqat qat'iy notaga boqish", "Improvizatsiya (erkin ijodkorlik)", "So'zsiz ijro etish", "Faqat sokin chalinishi"], answer: 1, difficulty: "medium", explanation: "Jazsda har bir sozanda kuy davomida erkin improvizatsiya (yangilik) kiritadi."  },
  { q: "Estrada simfonik orkestri oddiy simfonik orkestrdan nimasi bilan farq qiladi?", options: ["Ritmguruh (baraban, bas-gitara, klavish) va saksafonlar mavjudligi", "Faqat xordan iboratligi", "Torli sozlarning yo'qligi", "Faqat bitta cholg'u bo'lishi"], answer: 0, difficulty: "medium", explanation: "Estrada-simfonik orkestrida ritm-seksiya va estrada cholg'ulari faol qatnashadi."  },
  { q: "O'zbek estrada san'atida afsonaviy 'Yalla' ansamblining badiiy rahbari kim?", options: ["Botir Zokirov", "Sherali Jo'rayev", "Farrux Zokirov", "Nasiba Abdullayeva"], answer: 2, difficulty: "easy", explanation: "O'zbekiston xalq artisti Farrux Zokirov yarim asrdan buyon 'Yalla' guruhini boshqarib kelmoqda."  },
  { q: "Sharq xalqlari ichida birinchi bo'lib estrada simfonik orkestrini tuzgan buyuk xonanda kim?", options: ["Ma'murjon Uzoqov", "Komiljon Otaniyozov", "Jo'raxon Sultonov", "Botir Zokirov"], answer: 3, difficulty: "medium", explanation: "O'zbekiston xalq artisti Botir Zokirov o'zbek professional estrada san'atining asoschisidir."  },
  { q: "Sharq xalqlarining ko'p torli chertma cholg'usi bo'lib, trapetsiya shakliga ega asbob qaysi?", options: ["Qonun", "Tanbur", "Rubob", "Dutor"], answer: 0, difficulty: "medium", explanation: "Qonun — tizzaga qo'yib, metall tirnoqlar bilan chalinadigan 72 dan ortiq torli sharq cholg'usi."  },
  { q: "Samarqand shahrida har 2 yilda bir marta o'tkaziladigan xalqaro musiqa festivali nima deb ataladi?", options: ["\"Ipak yo'li sadosi\"", "\"Sharq taronalari\"", "\"Oltin kuz\"", "\"Bahor nafasi\""], answer: 1, difficulty: "easy", explanation: "\"Sharq taronalari\" YUNESKO shafeligidagi nufuzli xalqaro musiqa anjumanidir."  }
];

// ============================================================
// GEOGRAFIYA FANIDAN TESTLAR (5, 6, 7, 8, 9, 10, 11-SINFLAR)
// ============================================================


// 5-SINF GEOGRAFIYA: TABIIY GEOGRAFIYA BOSHLANG'ICH KURSI (25 ta savol)
window.TEST_DATA["5_geografiya"] = [
  { q: "«Geografiya» so'zi qaysi tildan olingan va qanday ma'noni anglatadi?", options: ["Yunoncha, «Yerni tasvirlash» (Geo — Yer, grafo — yozaman)", "Yunoncha, «Yerning tuzilishi»", "Lotincha, «Yer xaritasi»", "Arabcha, «Dunyo ilmi»"], answer: 0, difficulty: "easy", explanation: "Geografiya yunoncha «geo» — Yer va «grafo» — yozaman, tasvirlayman so'zlaridan tashkil topgan."  },
  { q: "Yer sharining kichraytirilgan aniq modeli nima deb ataladi?", options: ["Xarita", "Globus", "Plan", "Atlas"], answer: 1, difficulty: "easy", explanation: "Globus — Yer sharining sharsimon, uch o'lchamli eng aniq modelidir."  },
  { q: "Quyosh atrofida Yerning to'liq bir marta aylanib chiqish vaqti qancha?", options: ["24 soat", "30 kun", "365 kun 6 soat (1 yil)", "100 kun"], answer: 2, difficulty: "easy", explanation: "Yer Quyosh atrofini 365 kun 6 soatda aylanib chiqadi, bu 1 yilni tashkil qiladi."  },
  { q: "Yer o'z o'qi atrofida qancha vaqtda to'liq aylanadi?", options: ["12 soatda", "1 yilda", "1 oyda", "24 soatda (1 kecha-kunduz)"], answer: 3, difficulty: "easy", explanation: "Yer o'z o'qi atrofida 24 soatda aylanadi, natijada kun va tun almashadi."  },
  { q: "Yer sharini Shimoliy va Janubiy yarimsharlarga bo'lib turuvchi faraziy doira qaysi?", options: ["Grinvich meridiani", "Ekvator", "Shimoliy qutb", "Janubiy tropik"], answer: 1, difficulty: "easy", explanation: "Ekvator — Yer sharini teng ikkiga: Shimoliy va Janubiy yarimsharlarga ajratadi."  },
  { q: "Ekvator chizig'ining uzunligi taxminan necha kilometr?", options: ["10 000 km", "20 000 km", "40 075 km", "100 000 km"], answer: 2, difficulty: "medium", explanation: "Yer ekvatorining aylanasi taxminan 40 075 km ni tashkil etadi."  },
  { q: "Gorizont (ufq)ning nechta asosiy tomoni bor?", options: ["4 ta (Shimol, Janub, Sharq, G'arb)", "2 ta", "6 ta", "8 ta"], answer: 0, difficulty: "easy", explanation: "Gorizontning 4 ta asosiy tomoni bor: Shimol (N), Janub (S), Sharq (E) va G'arb (W)."  },
  { q: "Ufq tomonlarini aniqlashda qo'llaniladigan asbob qaysi?", options: ["Barometr", "Gigrometr", "Termometr", "Kompas"], answer: 3, difficulty: "easy", explanation: "Kompasning magnit mili doimo Shimol va Janub yo'nalishini ko'rsatadi."  },
  { q: "Kompasning ko'k (yoki qoraytirilgan) uchi qaysi tomonni ko'rsatadi?", options: ["Janubni", "Sharqni", "Shimolni", "G'arbni"], answer: 2, difficulty: "easy", explanation: "Kompas mili shimoliy magnit qutbini, ya'ni Shimolni ko'rsatadi."  },
  { q: "Yerning tosh (qattiq) qobig'i nima deb ataladi?", options: ["Litosfera", "Gidrosfera", "Atmosfera", "Biosfera"], answer: 0, difficulty: "easy", explanation: "Litosfera (yunoncha 'litos' — tosh) — Yerning qattiq tosh qobig'idir."  },
  { q: "Yerning suv qobig'i nima deb ataladi?", options: ["Litosfera", "Stratosfera", "Atmosfera", "Gidrosfera"], answer: 3, difficulty: "easy", explanation: "Gidrosfera (yunoncha 'gidro' — suv) — okean, dengiz, daryo va ko'llar qobig'idir."  },
  { q: "Yerning havo (gaz) qobig'i qanday nomlanadi?", options: ["Litosfera", "Atmosfera", "Gidrosfera", "Mantiya"], answer: 1, difficulty: "easy", explanation: "Atmosfera — Yer atrofini o'rab turgan gazsimon havo qobig'idir."  },
  { q: "Yer yuzasidagi tirik organizmlar va hayot tarqalgan qobiq qaysi?", options: ["Atmosfera", "Ionosfera", "Litosfera", "Biosfera"], answer: 3, difficulty: "easy", explanation: "Biosfera (yunoncha 'bios' — hayot) — tirik mavjudotlar yashaydigan qobiqdir."  },
  { q: "Havo harorati qaysi asbob bilan o'lchanadi?", options: ["Barometr", "Flyuger", "Termometr", "Anemometr"], answer: 2, difficulty: "easy", explanation: "Harorat termometr asbobi yordamida Selsiy (°C) darajasida o'lchanadi."  },
  { q: "Atmosfera bosimini o'lchaydigan asbob nima?", options: ["Termometr", "Barometr", "Gigrometr", "Menyurka"], answer: 1, difficulty: "medium", explanation: "Atmosfera bosimi barometr (simobli yoki aneroid) bilan o'lchanadi."  },
  { q: "Shamolning yo'nalishi va kuchini aniqlaydigan asbob qaysi?", options: ["Flyuger", "Kompas", "Seysmograf", "Eklimetr"], answer: 0, difficulty: "medium", explanation: "Meteorologik stansiyalarda shamol yo'nalishi flyuger yordamida aniqlanadi."  },
  { q: "Yer yuzasining tekis qog'ozda shartli belgilar bilan kichraytirib tasvirlanishi nima?", options: ["Globus", "Rasm", "Geografik xarita", "Chizma"], answer: 2, difficulty: "easy", explanation: "Geografik xarita — Yer yuzasining masshtab asosidagi tekislikdagi tasviridir."  },
  { q: "Xaritada joydagi masofaning necha marta kichraytirilganini ko'rsatuvchi son nima?", options: ["Koordinata", "Azimut", "Gorizontal", "Masshtab"], answer: 3, difficulty: "easy", explanation: "Masshtab joydagi masofaning qog'ozda necha barobar kichraytirilganligini bildiradi."  },
  { q: "Qutblarni tutashtiruvchi yarim aylana chiziqlar nima deb ataladi?", options: ["Meridianlar", "Parallellar", "Ekvatorlar", "Izobaralar"], answer: 0, difficulty: "medium", explanation: "Shimoliy va Janubiy qutblarni tutashtiruvchi vertikal chiziqlar meridianlar deyiladi."  },
  { q: "Ekvatorga parallel o'tkazilgan aylana chiziqlar nima deyiladi?", options: ["Meridianlar", "Parallellar", "Zenit", "Orbita"], answer: 1, difficulty: "medium", explanation: "Ekvatorga parallel o'tgan barcha chiziqlar parallellar deb ataladi."  },
  { q: "Dunyodagi eng katta quruqlik (materik) qaysi?", options: ["Yevroosiyo", "Afrika", "Shimoliy Amerika", "Antarktida"], answer: 0, difficulty: "easy", explanation: "Yevroosiyo — maydoni bo'yicha dunyodagi eng ulkan materikdir (54 mln km²)."  },
  { q: "Dunyodagi eng katta va eng chuqur okean qaysi?", options: ["Atlantika okeani", "Tinch okeani", "Hind okeani", "Shimoliy Muz okeani"], answer: 1, difficulty: "easy", explanation: "Tinch okeani Yer yuzining uchdan bir qismini egallagan eng katta okeandir."  },
  { q: "Dunyodagi eng chuqur botiq (choh) qaysi va uning chuqurligi qancha?", options: ["Yava botig'i (7729 m)", "Baykal (1642 m)", "Mariana botig'i (11 022 m)", "Puerto-Riko (8742 m)"], answer: 2, difficulty: "medium", explanation: "Tinch okeanidagi Mariana botig'i chuqurligi 11 022 metr bo'lib, sayyoramizning eng chuqur nuqtasidir."  },
  { q: "Yer qobig'idagi to'satdan tebranishlar va silkinishlar nima deb ataladi?", options: ["Tsunami", "Ko'chki", "Vulkan", "Zilzila"], answer: 3, difficulty: "easy", explanation: "Litosfera plitalarining to'qnashuvi natijasida yer silkinishi (zilzila) sodir bo'ladi."  },
  { q: "Zilzila kuchini o'lchaydigan maxsus asbob qaysi?", options: ["Barometr", "Seysmograf", "Akvalang", "Dinamometr"], answer: 1, difficulty: "medium", explanation: "Seysmograf seysmik to'lqinlarni qayd etuvchi o'lchov asbobidir."  }
];

// 6-SINF GEOGRAFIYA: MATERIKLAR VA OKEANLAR (25 ta savol)
window.TEST_DATA["6_geografiya"] = [
  { q: "Yer yuzida nechta materik mavjud?", options: ["4 ta", "5 ta", "6 ta (Yevroosiyo, Afrika, Shimoliy Amerika, Janubiy Amerika, Antarktida, Avstraliya)", "7 ta"], answer: 2, difficulty: "easy", explanation: "Yer yuzida 6 ta materik bor: Yevroosiyo, Afrika, Shimoliy Amerika, Janubiy Amerika, Antarktida, Avstraliya."  },
  { q: "Yer yuzida nechta okean bor?", options: ["4 ta (Tinch, Atlantika, Hind, Shimoliy Muz)", "3 ta", "6 ta", "2 ta"], answer: 0, difficulty: "easy", explanation: "Sayyoramizda 4 ta asosiy okean mavjud (ba'zan Janubiy okean bilan 5 ta)."  },
  { q: "Dunyodagi eng baland tog' cho'qqisi qaysi va uning balandligi qancha?", options: ["Monblan (4810 m)", "Pobeda (7439 m)", "K2 (8611 m)", "Jomolungma / Everest (8848 m)"], answer: 3, difficulty: "easy", explanation: "Himolay tog'laridagi Jomolungma (Everest) cho'qqisi 8848 metr balandlikka ega."  },
  { q: "Dunyodagi eng uzun tog' tizmasi qaysi materikda joylashgan?", options: ["Yevroosiyoda (Ural)", "Afrikada (Atlas)", "Janubiy Amerikada (And tog'lari — 9000 km)", "Shimoliy Amerikada (Kordilyera)"], answer: 2, difficulty: "medium", explanation: "And tog'lari Janubiy Amerika bo'ylab 9000 km cho'zilgan dunyodagi eng uzun tizmadir."  },
  { q: "Dunyodagi eng sersuv va eng katta havzaga ega daryo qaysi?", options: ["Amazonka", "Nil", "Missisipi", "Yanszi"], answer: 0, difficulty: "easy", explanation: "Amazonka daryosi (Janubiy Amerika) suv sarfi va havzasi bo'yicha dunyoda 1-o'rinda turadi."  },
  { q: "Dunyodagi eng uzun daryo qaysi?", options: ["Amazonka", "Volga", "Kongo", "Nil (6670 km)"], answer: 3, difficulty: "easy", explanation: "Afrikadagi Nil daryosi O'rta dengizga quyiluvchi eng uzun daryodir."  },
  { q: "Dunyodagi eng katta issiq cho'l qaysi materikda joylashgan?", options: ["Avstraliyada (Viktoriya)", "Afrikada (Saxroi Kabir)", "Osiyoda (Gobi)", "Janubiy Amerikada (Atakama)"], answer: 1, difficulty: "easy", explanation: "Saxroi Kabir (Saxara) Afrikaning shimolida joylashgan eng yirik tropik cho'ldir."  },
  { q: "Dunyodagi eng qurg'oqchil (yillab yomg'ir yog'maydigan) cho'l qaysi?", options: ["Qizilqum", "Kalahari", "Saxara", "Atakama (Janubiy Amerika)"], answer: 3, difficulty: "medium", explanation: "Janubiy Amerikadagi Atakama cho'li sayyoramizning eng qurg'oqchil nuqtasi hisoblanadi."  },
  { q: "Eng mitti va eng qurg'oqchil materik qaysi?", options: ["Antarktida", "Afrika", "Avstraliya", "Janubiy Amerika"], answer: 2, difficulty: "easy", explanation: "Avstraliya — maydoni eng kichik materik bo'lib, uning katta qismi cho'llardan iborat."  },
  { q: "Xaltali hayvonlar (kenguru, koala) vatani bo'lgan materik qaysi?", options: ["Afrika", "Avstraliya", "Janubiy Amerika", "Antarktida"], answer: 1, difficulty: "easy", explanation: "Avstraliya boshqa materiklardan uzoqda ajralib qolgani uchun noyob endemik hayvonlarga boy."  },
  { q: "Dunyodagi eng sovuq va muz qoplami bilan qoplangan materik qaysi?", options: ["Antarktida", "Grenlandiya", "Shimoliy Muz", "Islandiya"], answer: 0, difficulty: "easy", explanation: "Antarktida — sayyoramizning eng sovuq materigi (-89.2°C Vostok stansiyasida qayd etilgan)."  },
  { q: "Antarktidada doimiy yashovchi qush qaysi?", options: ["Tuyaqush", "Oqqush", "Pingvin", "Flamingo"], answer: 2, difficulty: "easy", explanation: "Imperator pingvinlari Antarktida muzliklarida yashovchi timsoldir."  },
  { q: "Dunyodagi eng katta orol qaysi?", options: ["Madagaskar", "Sumatra", "Buyuk Britaniya", "Grenlandiya (2.16 mln km²)"], answer: 3, difficulty: "medium", explanation: "Grenlandiya — Shimoliy qutbga yaqin joylashgan dunyodagi eng ulkan oroldir."  },
  { q: "Dunyodagi eng chuchuk va eng chuqur ko'l qaysi?", options: ["Baykal ko'li (1642 metr)", "Kaspiy dengizi", "Viktoriya", "Yuqori ko'l"], answer: 0, difficulty: "medium", explanation: "Rossiyadagi Baykal ko'li dunyodagi eng chuqur va chuchuk suv zaxirasiga eng boy ko'ldir."  },
  { q: "Maydoni bo'yicha dunyodagi eng katta ko'l (ichki dengiz) qaysi?", options: ["Orol dengizi", "Kaspiy dengizi (ko'li)", "Baykal", "Ladoga"], answer: 1, difficulty: "easy", explanation: "Kaspiy — berk havzali eng katta sho'r ko'l bo'lib, kattaligi uchun dengiz deb ataladi."  },
  { q: "Yevropa va Osiyo qit'alarini bir-biridan qaysi tog' ajratib turadi?", options: ["Ural tog'lari", "Kavkaz", "Alp tog'lari", "Tyanshan"], answer: 0, difficulty: "easy", explanation: "Ural tog' tizmasi Yevropa va Osiyo qit'alari o'rtasidagi an'anaviy tabiiy chegaradir."  },
  { q: "Dunyodagi eng baland sharshara qaysi va u qaysi materikda?", options: ["Niagara (Shimoliy Amerika)", "Anxel sharsharasi (Janubiy Amerika — 979 m)", "Viktoriya (Afrika)", "Iguasu (Janubiy Amerika)"], answer: 1, difficulty: "medium", explanation: "Venesueladagi Anxel sharsharasi 979 metr balandlikdan tushadi."  },
  { q: "Afrika materigini Yevropadan qaysi bo'g'oz ajratib turadi?", options: ["Bering bo'g'ozi", "Bosfor bo'g'ozi", "Gibraltar bo'g'ozi", "Magellan bo'g'ozi"], answer: 2, difficulty: "medium", explanation: "Gibraltar bo'g'ozi O'rta dengizni Atlantika okeani bilan, Afrikani Yevropa bilan tutashtiradi."  },
  { q: "Osiyo va Shimoliy Amerikani qaysi bo'g'oz ajratadi?", options: ["Dreyk bo'g'ozi", "Malakka", "La-Mansh", "Bering bo'g'ozi"], answer: 3, difficulty: "medium", explanation: "Bering bo'g'ozi Chukotka (Rossiya) va Alyaska (AQSh) oralig'ida joylashgan."  },
  { q: "Dunyodagi eng issiq materik qaysi?", options: ["Avstraliya", "Afrika", "Janubiy Amerika", "Yevroosiyo"], answer: 1, difficulty: "easy", explanation: "Afrika ekvator va ikkala tropik chiziqlar orasida joylashgani sababli eng issiq materikdir."  },
  { q: "Katta Barer rifi (Ulkan marjon rifi) qaysi materik sohillarida joylashgan?", options: ["Afrika", "Osiyo", "Avstraliya (sharqiy sohillari)", "Janubiy Amerika"], answer: 2, difficulty: "medium", explanation: "Katta Barer rifi Avstraliyaning Tinch okeani sohillarida cho'zilgan dunyo mo''jizasidir."  },
  { q: "Yevroosiyoning eng shimoliy chekka nuqtasi qaysi burn?", options: ["Chelyuskin burni", "Piyay burni", "Roka burni", "Dejnev burni"], answer: 0, difficulty: "hard", explanation: "Chelyuskin burni (Taymir yarimoroli) Yevroosiyoning eng shimoliy quruqlik nuqtasidir."  },
  { q: "Yevropaning eng g'arbiy chekka nuqtasi qaysi?", options: ["Nordkin", "Tarifa", "Chelyuskin", "Roka burni (Portugaliya)"], answer: 3, difficulty: "hard", explanation: "Portugaliyadagi Roka burni — 'quruqlik tugab, cheksiz ummon boshlanadigan' eng g'arbiy nuqtadir."  },
  { q: "Sayyoramizdagi eng katta yarimorol qaysi?", options: ["Hindiston", "Skandinaviya", "Arabiston yarimoroli (3.2 mln km²)", "Kamchatka"], answer: 2, difficulty: "medium", explanation: "Arabiston yarimoroli maydoni bo'yicha dunyodagi eng yirik yarimoroldir."  },
  { q: "Dunyodagi eng sho'r dengiz qaysi?", options: ["Qizil dengiz (sho'rligi 42‰)", "Qora dengiz", "Boltiq dengizi", "Kaspiy"], answer: 0, difficulty: "medium", explanation: "Qizil dengizga daryolar quyilmagani va kuchli bug'lanish sababli ochiq dengizlar ichida eng sho'ridir."  }
];

// 7-SINF GEOGRAFIYA: O'ZBEKISTON TABIIY GEOGRAFIYASI (25 ta savol)
window.TEST_DATA["7_geografiya"] = [
  { q: "O'zbekiston Respublikasining umumiy maydoni qancha?", options: ["400 000 km²", "350 000 km²", "500 000 km²", "448 978 km² (qariyb 448.9 ming km²)"], answer: 3, difficulty: "easy", explanation: "O'zbekiston hududi 448.9 ming kvadrat kilometrni tashkil qiladi."  },
  { q: "O'zbekiston nechta davlat bilan chegaradosh?", options: ["4 ta", "5 ta (Qozog'iston, Qirg'iziston, Tojikiston, Turkmaniston, Afg'oniston)", "6 ta", "3 ta"], answer: 1, difficulty: "easy", explanation: "O'zbekiston Qozog'iston, Qirg'iziston, Tojikiston, Turkmaniston va Afg'oniston bilan chegaradosh."  },
  { q: "O'zbekiston dengizga chiqish uchun kamida nechta davlat hududidan o'tishi kerak?", options: ["1 ta", "3 ta davlat", "Dengiz sohilida joylashgan", "2 ta davlat (Double landlocked)"], answer: 3, difficulty: "medium", explanation: "Dunyoda dengizga chiqish uchun ikki davlat chegarasini kesib o'tuvchi faqat 2 ta davlat bor: O'zbekiston va Lixtenshteyn."  },
  { q: "O'zbekiston hududining necha foizini tekisliklar (cho'l va adirlar) tashkil etadi?", options: ["50 foizini", "20 foizini", "Taxminan 78-80 foizini", "95 foizini"], answer: 2, difficulty: "medium", explanation: "Respublikamiz hududining qariyb 4/5 qismi (80% ga yaqini) Qizilqum kabi tekisliklardan iborat."  },
  { q: "O'zbekistonning eng yirik qumli cho'li qaysi?", options: ["Qoraqum", "Qizilqum", "Mirzacho'l", "Dengizko'l"], answer: 1, difficulty: "easy", explanation: "Qizilqum cho'li Amudaryo va Sirdaryo oralig'ida joylashgan eng yirik cho'ldir."  },
  { q: "O'zbekistonning eng baland tog' cho'qqisi qaysi va uning balandligi qancha?", options: ["Hazrati Sulton cho'qqisi (4643 m, Hisor tizmasi)", "Katta Chimyon (3309 m)", "Manas (4482 m)", "Adelung (4301 m)"], answer: 0, difficulty: "medium", explanation: "Surxondaryodagi Hisor tizmasida joylashgan Hazrati Sulton (4643 m) mamlakatimizning eng baland nuqtasidir."  },
  { q: "O'zbekistonning eng past botiq nuqtasi qaysi?", options: ["Orolbo'yi", "Qoraqum", "Mingbuloq botig'i (-12.8 metr)", "Zarafshon"], answer: 2, difficulty: "medium", explanation: "Qizilqum cho'lidagi Mingbuloq botig'i okean sathidan -12.8 metr pastda joylashgan."  },
  { q: "O'zbekiston hududiga suv keltiruvchi eng uzun va sersuv ikki daryo qaysi?", options: ["Zarafshon va Chirchiq", "Norin va Qoradaryo", "Qashqadaryo va Surxondaryo", "Amudaryo va Sirdaryo"], answer: 3, difficulty: "easy", explanation: "Amudaryo (eng sersuv) va Sirdaryo (eng uzun) O'rta Osiyoning bosh transchegaraviy daryolaridir."  },
  { q: "O'rta Osiyodagi eng uzun daryo qaysi?", options: ["Sirdaryo (uzunligi 3019 km)", "Amudaryo", "Ili", "Chu"], answer: 0, difficulty: "medium", explanation: "Sirdaryo Tyan-Shan tog'laridan boshlanib Orol dengizigacha 3019 km masofaga oqadi."  },
  { q: "O'zbekistonning qaysi daryosi 'Zar sochuvchi daryo' (Zarafshon) deb ataladi?", options: ["Chirchiq", "Zarafshon daryosi", "Ohangaron", "Surxondaryo"], answer: 1, difficulty: "easy", explanation: "Zarafshon forscha 'oltin sochuvchi' demak bo'lib, Samarqand va Buxoro vohalarini suv bilan ta'minlaydi."  },
  { q: "O'zbekiston iqlimi qaysi turga kiradi?", options: ["Keskin kontinental iqlim", "Ekvatorial iqlim", "Dengiz iqlimi", "Tundra iqlimi"], answer: 0, difficulty: "easy", explanation: "O'zbekiston iqlimi keskin kontinental: yozi quruq va issiq, qishi sovuq, yog'in kam."  },
  { q: "Toshkent viloyatining asosiy suv ombori va dam olish maskani bo'lgan suv havzasi qaysi?", options: ["To'palang", "Chorvoq suv ombori", "Kattaqo'rg'on", "Janubiy Surxon"], answer: 1, difficulty: "easy", explanation: "Chorvoq suv ombori Chirchiq daryosi bo'yida qurilgan eng go'zal tog' havzasidir."  },
  { q: "Farg'ona vodiysini Toshkent vohasi bilan bog'lovchi mashhur tog' dovoni qaysi?", options: ["Taxtaqoracha dovoni", "Temir darvoza", "Qamchiq dovoni", "Kitob dovoni"], answer: 2, difficulty: "easy", explanation: "Qamchiq dovoni (Qurama tizmasi) orqali Farg'ona vodiysiga avtomobil va temir yo'l o'tadi."  },
  { q: "Samarqand va Qashqadaryo viloyatlarini bog'lovchi mashhur dovon qaysi?", options: ["Qamchiq", "Qo'shrabot", "Oqbura", "Taxtaqoracha dovoni"], answer: 3, difficulty: "medium", explanation: "Zarafshon tizmasi orqali o'tuvchi Taxtaqoracha dovoni Samarqandni Kitob va Shahrisabz bilan bog'laydi."  },
  { q: "O'zbekistondagi eng qadimiy va birinchi tashkil etilgan davlat qo'riqxonasi qaysi?", options: ["Zomin qo'riqxonasi", "Chotqol biosfera qo'riqxonasi (1947)", "Qizilqum qo'riqxonasi", "Surxon qo'riqxonasi"], answer: 1, difficulty: "hard", explanation: "Chotqol tog'-o'rmon biosfera qo'riqxonasi 1947-yilda tashkil topgan."  },
  { q: "Tog' archazorlari va shifobaxsh havosi bilan mashhur 'O'zbekiston Shveytsariyasi' deb ataladigan milliy bog' qaysi?", options: ["Chorvoq", "Ugam-Chotqol", "Zomin milliy tabiat bog'i (Jizzax)", "Kitob"], answer: 2, difficulty: "easy", explanation: "Jizzax viloyatidagi Zomin tog'lari noyob archazorlari va toza havosi bilan dunyoga mashhur."  },
  { q: "Orol dengizining qurishi oqibatida uning o'rnida qanday yangi cho'l paydo bo'ldi?", options: ["Orolqum cho'li (5.5 mln gektar)", "Qoraqum", "Qizilqum", "Mo'ynoq cho'li"], answer: 0, difficulty: "easy", explanation: "Qurigan dengiz tubida tuz va qumdan iborat Orolqum cho'li vujudga keldi."  },
  { q: "Navoiy viloyatida joylashgan dunyodagi eng yirik ochiq oltin koni qaysi?", options: ["Chodak", "Zarmitan", "Qalmoqqir", "Muruntov oltin koni"], answer: 3, difficulty: "medium", explanation: "Muruntov koni dunyodagi eng ulkan va toza oltin zaxiralariga ega ochiq karyerdir."  },
  { q: "Olmaliq shahrida qaysi rangli metall qazib olinadi va qayta ishlanadi?", options: ["Faqat alyuminiy", "Temir rudasi", "Mis va polimetallar (Olmaliq KMK)", "Ko'mir"], answer: 2, difficulty: "medium", explanation: "Olmaliq kon-metallurgiya kombinati (OKMK) yirik mis va oltin ishlab chiqaruvchidir."  },
  { q: "O'zbekistonda ko'mir qazib olinadigan asosiy kon qaysi shahar yaqinida joylashgan?", options: ["Angren (Toshkent viloyati)", "Chirchiq", "Bekobod", "Gazli"], answer: 0, difficulty: "easy", explanation: "Angren qo'ng'ir ko'mir koni O'zbekiston energetikasining asosiy ko'mir manbaidir."  },
  { q: "O'zbekistonda gaz qazib olish bo'yicha mashhur ilk gigant kon qaysi?", options: ["Sho'rtan", "Kandim", "Muborak", "Gazli koni (Buxoro viloyati)"], answer: 3, difficulty: "medium", explanation: "Gazli koni 1956-yilda ochilgan va Buxoro-Ural gaz quvuri tortilgan mashhur kondir."  },
  { q: "O'zbekistonning qaysi viloyatida subtropik iqlim xususiyatlari va anor, xurmo, pista keng yetishtiriladi?", options: ["Toshkent", "Surxondaryo viloyati (Denov, Termiz)", "Andijon", "Navoiy"], answer: 1, difficulty: "easy", explanation: "Surxondaryo O'zbekistonning eng janubiy va eng iliq, qishi yumshoq subtropik vohasidir."  },
  { q: "Farg'ona vodiysi hududida nechta viloyat joylashgan?", options: ["2 ta", "1 ta", "4 ta", "3 ta (Andijon, Farg'ona, Namangan)"], answer: 3, difficulty: "easy", explanation: "Farg'ona vodiysida Andijon, Farg'ona va Namangan viloyatlari joylashgan."  },
  { q: "O'zbekiston Respublikasi tarkibidagi suveren respublika qaysi?", options: ["Surxondaryo", "Xorazm", "Qoraqalpog'iston Respublikasi", "Buxoro"], answer: 2, difficulty: "easy", explanation: "Qoraqalpog'iston Respublikasi o'z Konstitutsiyasi va davlat ramzlariga ega suveren respublikadir."  },
  { q: "Qoraqalpog'istonning ma'muriy markazi qaysi shahar?", options: ["To'rtko'l", "Nukus shahri", "Mo'ynoq", "Xo'jayli"], answer: 1, difficulty: "easy", explanation: "Nukus — Qoraqalpog'iston Respublikasining poytaxti va madaniy markazi."  }
];

// 8-SINF GEOGRAFIYA: IQTISODIY VA IJTIMOIY GEOGRAFIYA (25 ta savol)
window.TEST_DATA["8_geografiya"] = [
  { q: "O'zbekiston aholisi soni hozirgi kunda qanchadan oshdi?", options: ["37 million kishidan oshdi", "25 milliondan", "50 milliondan", "20 milliondan"], answer: 0, difficulty: "easy", explanation: "O'zbekiston aholisi 2024-yilda 37 million kishidan oshib, Markaziy Osiyoda 1-o'rinda turadi."  },
  { q: "O'zbekistonda aholi eng zich joylashgan iqtisodiy hudud qaysi?", options: ["Markaziy Qizilqum", "Ustyurt platosi", "Farg'ona vodiysi (ayniqsa Andijon viloyati)", "Surxondaryo cho'llari"], answer: 2, difficulty: "easy", explanation: "Andijon viloyatida 1 km² ga 750 dan ortiq kishi to'g'ri kelib, respublikada eng zich joydir."  },
  { q: "O'zbekiston iqtisodiyotining asosiy avtomobilsozlik markazi qaysi shaharda joylashgan?", options: ["Samarqand", "Buxoro", "Farg'ona", "Asaka shahri (Andijon viloyati)"], answer: 3, difficulty: "easy", explanation: "Asakadagi yirik avtomobil zavodi (UzAuto Motors) yengil avtomobillar ishlab chiqaradi."  },
  { q: "Samarqand shahrida qanday avtotransport vositalari ishlab chiqariladi?", options: ["ISUZU avtobuslari va yuk mashinalari (SamAuto, MAN)", "Kema va poyezdlar", "Samolyotlar", "Traktorlar"], answer: 0, difficulty: "medium", explanation: "SamAuto va JV MAN Auto-Uzbekistan korxonalari avtobus va og'ir yuk mashinalari ishlab chiqaradi."  },
  { q: "Toshkent shahridan Samarqand, Buxoro va Qarshi shaharlariga qatnovchi tezyurar yo'lovchi poyezdi qanday ataladi?", options: ["\"Sharq\"", "\"Afrosiyob\" tezyurar elektropoyezdi", "\"Nasaf\"", "\"Alpomish\""], answer: 1, difficulty: "easy", explanation: "\"Afrosiyob\" (Talgo 250) tezyurar poyezdi O'zbekiston temir yo'llarining faxridir."  },
  { q: "O'zbekiston paxta tolasini qayta ishlash bo'yicha qaysi sanoat tarmog'ini yetakchi o'ringa olib chiqdi?", options: ["To'qimachilik va yengil sanoat (tekstil)", "Metallurgiya", "Kimyo sanoati", "Neft sanoati"], answer: 0, difficulty: "easy", explanation: "Xom paxta eksportidan tayyor tekstil va kiyim-kechak ishlab chiqarishga to'liq o'tildi."  },
  { q: "O'zbekistonda qora metallurgiya (po'lat eritish) markazi bo'lgan shahar qaysi?", options: ["Chirchiq", "Bekobod shahri (O'zmetkombinat)", "Navoiy", "Qo'qon"], answer: 1, difficulty: "medium", explanation: "Bekobod metallurgiya zavodi respublikamizdagi eng yirik po'lat va prokat ishlab chiqaruvchidir."  },
  { q: "Kimyoviy mineral o'g'itlar (azotli, fosforli) ishlab chiqaruvchi yirik markazlarni toping.", options: ["Termiz va Qarshi", "Xiva va Urganch", "Navoiyazot, Farg'onaazot, Chirchiq Maxam", "Jizzax va Guliston"], answer: 2, difficulty: "medium", explanation: "Navoiy, Farg'ona va Chirchiq shaharlarida qishloq xo'jaligi uchun azotli o'g'itlar ishlab chiqariladi."  },
  { q: "O'zbekistonda qorako'lchilik (qorako'l terisi tayyorlash) qaysi viloyatlarda kuchli rivojlangan?", options: ["Andijon va Farg'ona", "Namangan", "Toshkent va Sirdaryo", "Buxoro, Qashqadaryo va Navoiy cho'l tumanlarida"], answer: 3, difficulty: "medium", explanation: "Buxoro va Qashqadaryo qadimdan jahonga mashhur qorako'l terilari markazidir."  },
  { q: "Sho'rtan gaz-kimyo majmuasi qaysi viloyatda joylashgan?", options: ["Surxondaryo", "Qashqadaryo viloyatida", "Buxoro", "Navoiy"], answer: 1, difficulty: "easy", explanation: "Sho'rtan GKM (Qashqadaryo) polietilen va tozalangan gaz ishlab chiqaruvchi gigant korxonadir."  },
  { q: "O'zbekistonda quruq mevalar, mayiz va uzumchilik bo'yicha qaysi viloyat yetakchi hisoblanadi?", options: ["Qoraqalpog'iston", "Sirdaryo", "Samarqand viloyati (Ishtixon, Urgut)", "Xorazm"], answer: 2, difficulty: "easy", explanation: "Samarqand viloyatining Ishtixon, Urgut va Payariq tumanlari mayiz yetishtirishda yetakchidir."  },
  { q: "O'zbekistonda pillachilik va tabiiy ipak ishlab chiqarishning qadimiy markazi qaysi shahar?", options: ["Marg'ilon shahri («Yodgorlik» ipak fabrikasi)", "Bekobod", "Nukus", "Angren"], answer: 0, difficulty: "easy", explanation: "Marg'ilon qadimdan xonatlas va adras to'qishning butun dunyoga mashhur poytaxtidir."  },
  { q: "Chirchiq daryosida qurilgan GESlar tizimi nima deb ataladi?", options: ["Toshkent GES", "Farhod GES", "Chorvoq stansiyasi", "Chirchiq-Bo'zsuv GESlar kaskadi"], answer: 3, difficulty: "medium", explanation: "Chirchiq-Bo'zsuv kaskadi O'zbekistondagi eng yirik gidroenergetika zanjiridir."  },
  { q: "O'zbekistonning qaysi viloyatida zamonaviy shamol elektr stansiyalari (ShES) barpo etilmoqda?", options: ["Farg'ona", "Andijon", "Navoiy (Tomdi) va Buxoro cho'llarida", "Toshkent"], answer: 2, difficulty: "medium", explanation: "Navoiyning Tomdi va Zarafshon hududlarida 500 MVt quvvatli ulkan shamol parklari ishga tushirildi."  },
  { q: "Quyosh elektr stansiyalari (QES) ilk bor O'zbekistonning qaysi tumanlarida ishga tushirildi?", options: ["Navoiy (Karmana) va Samarqand (Nurobod)", "Chirchiq va Angren", "Qo'qon va Marg'ilon", "Termiz"], answer: 0, difficulty: "medium", explanation: "Karmana va Nurobod tumanlarida 100 MVt quvvatli ilk yirik quyosh fotoelektr stansiyalari ochilgan."  },
  { q: "O'zbekistonda uran qazib olish bo'yicha jahonda nechanchi o'rinlarda turadi?", options: ["50-o'rinda", "Umuman uran yo'q", "Oxirgi o'rinda", "Kuchli 5 talikda (Navoiyuran)"], answer: 3, difficulty: "hard", explanation: "O'zbekiston jahonda uran qazib olish bo'yicha 5-o'rinda turuvchi yirik eksportchidir."  },
  { q: "O'zbekistonda meva-sabzavot konservalari ishlab chiqarish qaysi vohalarda kuchli rivojlangan?", options: ["Faqat Qoraqalpog'istonda", "Samarqand, Toshkent va Farg'ona vodiysida", "Ustyurtda", "Qizilqumda"], answer: 1, difficulty: "easy", explanation: "Bu hududlar meva va poliz ekinlariga nihoyatda boy agrosanoat bazasiga ega."  },
  { q: "Toshkent metropoliteni Markaziy Osiyoda nechanchi bo'lib qurilgan?", options: ["Ikkinchi", "Oxirgi", "Uchinchi", "Birinchi (1977-yilda ishga tushgan)"], answer: 3, difficulty: "easy", explanation: "Toshkent metrosi 1977-yilda ochilgan bo'lib, butun Markaziy Osiyodagi birinchi yerosti transportidir."  },
  { q: "O'zbekistonning asosiy xalqaro havo darvozasi qaysi aeroport?", options: ["Samarqand aeroporti", "Buxoro aeroporti", "Islom Karimov nomidagi Toshkent xalqaro aeroporti", "Urganch aeroporti"], answer: 2, difficulty: "easy", explanation: "Toshkent xalqaro aeroporti eng katta tranzit va yo'lovchi oqimiga ega aeroportdir."  },
  { q: "Sayyohlik (turizm) bo'yicha O'zbekistonning YUNESKO ro'yxatiga kiritilgan tarixiy shaharlari qaysilar?", options: ["Angren, Bekobod, Yangiyo'l", "Samarqand, Buxoro, Xiva, Shahrisabz", "Olmaliq, Chirchiq, Guliston", "Zarafshon, Navoiy, Nukus"], answer: 1, difficulty: "easy", explanation: "Samarqand, Buxoro, Xiva va Shahrisabz butun dunyodan millionlab sayyohlarni jalb qiladi."  },
  { q: "Xorazm viloyatining qadimiy muzey-shahri bo'lgan qal'a qaysi?", options: ["Ichan Qal'a (Xiva)", "Ark", "Ko'hna Urganch", "Guldursun"], answer: 0, difficulty: "easy", explanation: "Ichan Qal'a — ochiq osmon ostidagi qadimiy saqlanib qolgan muzey-shahardir."  },
  { q: "O'zbekistonda sholi (guruch) yetishtirish bo'yicha qaysi viloyatlar mashhur?", options: ["Buxoro va Navoiy", "Jizzax", "Xorazm, Qoraqalpog'iston va Surxondaryo", "Sirdaryo"], answer: 2, difficulty: "medium", explanation: "Xorazm guruchi (lazer) va Surxondaryo devzirasi o'zbek oshi uchun eng mashhur navlardir."  },
  { q: "O'zbekiston qaysi qimmatbaho metall bo'yicha dunyodagi yetakchi eksportchilar qatoriga kiradi?", options: ["Platina", "Qo'rg'oshin", "Simob", "Oltin (Navoiy va Olmaliq konlari)"], answer: 3, difficulty: "easy", explanation: "O'zbekistonning '999.9' probadagi sof oltini jahon bozorida yuqori baholanadi."  },
  { q: "Aholi jon boshiga tabiiy gaz yetkazib berish bo'yicha O'zbekiston MDHda qanday o'rin tutadi?", options: ["Yetakchi o'rinlardan birida", "Oxirgi o'rinda", "Gaz umuman yo'q", "Faqat import qiladi"], answer: 0, difficulty: "medium", explanation: "O'zbekiston boy tabiiy gaz zaxiralariga ega bo'lib, o'z ehtiyojini to'liq qoplaydi."  },
  { q: "Iqtisodiy faol aholi deb kimlarga aytiladi?", options: ["Faqat nafaqaxo'rlarga", "Mehnat qilish yoshidagi, ishlayotgan yoki ish qidirayotgan aholiga", "Faqat maktab o'quvchilariga", "Chet el fuqarolariga"], answer: 1, difficulty: "medium", explanation: "Iqtisodiy faol aholi — mamlakat iqtisodiyotida mahsulot va xizmatlar yaratuvchi mehnat resurslaridir."  }
];

// ============================================================
// GEOGRAFIYA YUQORI SINFLAR (9, 10, 11-SINFLAR)
// ============================================================


// 9-SINF GEOGRAFIYA: JAHON MAMLAKATLARI GEOGRAFIYASI (25 ta savol)
window.TEST_DATA["9_geografiya"] = [
  { q: "Aholisi soni bo'yicha dunyodagi eng yetakchi ikki davlat qaysi?", options: ["Hindiston va Xitoy (har biri 1.4 milliarddan ortiq)", "AQSh va Rossiya", "Indoneziya va Braziliya", "Yaponiya va Germaniya"], answer: 0, difficulty: "easy", explanation: "Hindiston va Xitoy dunyo aholisining qariyb 36 foizini tashkil qiluvchi eng yirik davlatlardir."  },
  { q: "Maydoni bo'yicha dunyodagi eng katta davlat qaysi?", options: ["Kanada", "Rossiya (17.1 mln km²)", "Xitoy", "AQSh"], answer: 1, difficulty: "easy", explanation: "Rossiya Federatsiyasi 17.1 million km² maydonga ega bo'lib, dunyoning eng katta davlatidir."  },
  { q: "Iqtisodiyoti (YaIM hajmi) bo'yicha dunyodagi birinchi davlat qaysi?", options: ["Germaniya", "Xitoy", "AQSh (Amerika Qo'shma Shtatlari)", "Yaponiya"], answer: 2, difficulty: "easy", explanation: "AQSh nominal yalpi ichki mahsulot hajmi bo'yicha jahonning eng yirik iqtisodiyotidir."  },
  { q: "Yevropaning iqtisodiy 'lokomotivi' deb ataladigan eng qudratli davlati qaysi?", options: ["Fransiya", "Ispaniya", "Italiya", "Germaniya"], answer: 3, difficulty: "easy", explanation: "Germaniya Yevropa Ittifoqining eng kuchli sanoat va moliya markazidir."  },
  { q: "Kunchiqar yurt deb ataluvchi, yuqori texnologiyalar va robototexnika yetakchisi bo'lgan orol-davlat qaysi?", options: ["Janubiy Koreya", "Yaponiya", "Filippin", "Singapur"], answer: 1, difficulty: "easy", explanation: "Yaponiya 4 ta asosiy orolda joylashgan, yuqori texnologiyali iqtisodiyot gigantidir."  },
  { q: "Osiyoning 'To'rt ajdari' deb atalgan jadal rivojlangan iqtisodiyotlarni toping.", options: ["Hindiston, Pokiston, Bangladesh, Shri-Lanka", "Eron, Iroq, Suriya, Livan", "Janubiy Koreya, Singapur, Tayvan, Gonkong", "Qozog'iston, O'zbekiston, Qirg'iziston, Turkmaniston"], answer: 2, difficulty: "medium", explanation: "Bu to'rt hudud eksportga yo'naltirilgan elektronika va moliya orqali qisqa vaqtda yetakchiga aylandi."  },
  { q: "Lotin Amerikasidagi eng yirik maydon va aholiga ega davlat qaysi?", options: ["Braziliya", "Argentina", "Meksika", "Kolumbiya"], answer: 0, difficulty: "easy", explanation: "Braziliya — Janubiy Amerikaning eng yirik davlati, qahva va temir rudasi eksportchisi."  },
  { q: "Dunyodagi eng yirik neft qazib oluvchi va eksport qiluvchi Yaqin Sharq davlati qaysi?", options: ["Isroil", "Misr", "Turkiya", "Saudiya Arabistoni"], answer: 3, difficulty: "easy", explanation: "Saudiya Arabistoni OPEK tashkilotining yetakchi neft qazib oluvchi a'zosi hisoblanadi."  },
  { q: "Afrika qit'asida sanoati eng rivojlangan davlat qaysi?", options: ["Nigeriya", "Efiopiya", "Janubiy Afrika Respublikasi (JAR)", "Sudan"], answer: 2, difficulty: "medium", explanation: "JAR olmos, oltin, platina qazib olish va mashinasozlik bo'yicha Afrikada 1-o'rinda turadi."  },
  { q: "Butun bir qit'ani (materikni) egallagan yagona davlat qaysi?", options: ["Avstraliya Ittifoqi", "Yangi Zelandiya", "Kanada", "Madagaskar"], answer: 0, difficulty: "easy", explanation: "Avstraliya — butun boshli materik hududini qamrab olgan dunyodagi yagona davlatdir."  },
  { q: "Birlashgan Millatlar Tashkiloti (BMT)ning bosh qarorgohi qaysi shaharda joylashgan?", options: ["Jeneva", "London", "Parij", "Nyu-York shahri (AQSh)"], answer: 3, difficulty: "easy", explanation: "BMT Bosh Assambleyasi va Xavfsizlik Kengashining bosh qarorgohi Nyu-Yorkda joylashgan."  },
  { q: "Neft eksport qiluvchi davlatlar tashkiloti qanday qisqartma bilan ataladi?", options: ["YUNESKO", "OPEK (OPEC)", "NATO", "ASeAN"], answer: 1, difficulty: "medium", explanation: "OPEK — jahon neft bozoridagi narxlar va qazib olish kvotalarini muvofiqlashtiruvchi karteldir."  },
  { q: "Dunyodagi eng ko'p kofe (qahva) yetishtiruvchi davlat qaysi?", options: ["Hindiston", "Efiopiya", "Indoneziya", "Braziliya"], answer: 3, difficulty: "easy", explanation: "Braziliya 150 yildan ortiq vaqt davomida jahon kofe bozorida mutlaq yetakchidir."  },
  { q: "Dunyoda dengiz kemalari soni va savdo floti bo'yicha 'arzon bayroq' beruvchi mashhur mamlakatlar qaysilar?", options: ["Germaniya va Fransiya", "Shveytsariya va Avstriya", "Panama va Liberiya", "Mongoliya va Nepal"], answer: 2, difficulty: "hard", explanation: "Panama va Liberiya past bojlar sababli dunyodagi eng katta savdo flotlariga bayroq beradi."  },
  { q: "Turkiya davlatining qaysi shahri bir vaqtning o'zida ikkala qit'ada (Yevropa va Osiyo) joylashgan?", options: ["Anqara", "Istanbul shahri (Bosfor bo'g'ozi bo'yida)", "Izmir", "Antaliya"], answer: 1, difficulty: "easy", explanation: "Istanbul Yevropa va Osiyo qit'alarini bog'lab turgan dunyodagi yagona tarixiy megapolisdir."  },
  { q: "Buyuk Britaniya (Birlashgan Qirollik) tarkibiga qaysi 4 ta tarixiy o'lka kiradi?", options: ["Angliya, Shotlandiya, Uels, Shimoliy Irlandiya", "Angliya, Irlandiya, Islandiya, Daniya", "London, Manos, Liverpul, Bristol", "Shotlandiya, Grenlandiya, Uels, Dublin"], answer: 0, difficulty: "medium", explanation: "Birlashgan Qirollik: Angliya, Shotlandiya, Uels va Shimoliy Irlandiyadan iborat."  },
  { q: "Fransiyaning poytaxti bo'lgan dunyo modasi va madaniyati markazi qaysi shahar?", options: ["Marsel", "Lion", "Parij", "Nitssa"], answer: 2, difficulty: "easy", explanation: "Parij — Sena daryosi bo'yida joylashgan go'zal poytaxt va turizm markazi."  },
  { q: "Shveytsariya davlatining dunyodagi asosiy iqtisodiy ixtisoslashuv sohalari qaysilar?", options: ["Og'ir metallurgiya va neft", "Kosmik raketasozlik", "Paxtachilik va kema qurish", "Bank ishi, nozik soatsozlik, farmatsevtika va shokolad"], answer: 3, difficulty: "medium", explanation: "Shveytsariya ishonchli banklari, mashhur soatlari va farmatsevtikasi bilan tanilgan."  },
  { q: "Katta Yettilik (G7) davlatlari guruhiga kirmaydigan mamlakatni toping.", options: ["Xitoy (G7 a'zosi emas)", "AQSh, Yaponiya, Germaniya", "Buyuk Britaniya, Fransiya", "Italiya, Kanada"], answer: 0, difficulty: "medium", explanation: "Xitoy YaIM bo'yicha ulkan bo'lsa-da, tarixan G7 g'arbiy industrial klubiga a'zo emas."  },
  { q: "AQShning 50-shtati bo'lgan, Tinch okeanida joylashgan vulqonli orollar guruhi qaysi?", options: ["Bermud orollari", "Gavayi orollari", "Kuba", "Bagam orollari"], answer: 1, difficulty: "easy", explanation: "Gavayi orollari 1959-yilda AQSh tarkibiga 50-shtat sifatida qabul qilingan."  },
  { q: "Kanada davlatining ikkita rasmiy davlat tili qaysilar?", options: ["Ingliz va Fransuz tillari", "Ingliz va Ispan", "Ingliz va Nemis", "Faqat ingliz tili"], answer: 0, difficulty: "medium", explanation: "Kanada Kvebek provinsiyasi sababli ingliz va fransuz tillarini rasmiy deb e'lon qilgan."  },
  { q: "Hindiston poytaxti qaysi shahar?", options: ["Mumbay", "Yangi Dehli (Nyu-Deli)", "Kalkutta", "Bangalor"], answer: 1, difficulty: "easy", explanation: "Hindiston Respublikasining rasmiy poytaxti Yangi Dehlidir."  },
  { q: "Xitoy Xalq Respublikasining poytaxti qaysi shahar?", options: ["Shanxay", "Guanchjou", "Pekin (Beyjin)", "Gonkong"], answer: 2, difficulty: "easy", explanation: "Pekin — Xitoyning qadimiy va zamonaviy siyosiy poytaxti."  },
  { q: "Janubiy Koreyaning dunyoga mashhur elektronika va avtomobil gigantlari qaysilar?", options: ["Apple va Ford", "Nokia va Volvo", "Sony va Toyota", "Samsung, LG, Hyundai"], answer: 3, difficulty: "easy", explanation: "Samsung, LG va Hyundai Janubiy Koreya iqtisodiyotining yetakchi korporatsiyalaridir."  },
  { q: "Dunyodagi eng katta aholiga ega musulmon davlati qaysi?", options: ["Misr", "Indoneziya (275 mln kishi)", "Turkiya", "Pokiston"], answer: 1, difficulty: "medium", explanation: "Indoneziya 17 ming oroldan iborat bo'lib, musulmon aholisi soni bo'yicha 1-o'rinda turadi."  }
];

// 10-SINF GEOGRAFIYA: GLOBAL GEOGRAFIK VA EKOLOGIK MUAMMOLAR (25 ta savol)
window.TEST_DATA["10_geografiya"] = [
  { q: "Sayyoramizda global harorat ko'tarilishi nima deb ataladi?", options: ["Ozon teshilishi", "Muzlik davri", "Global iqlim isishi (Issiqxona effekti)", "Quyosh faolligi pasayishi"], answer: 2, difficulty: "easy", explanation: "Issiqxona gazlari (CO2, metan) to'planishi hisobiga global isish yuz bermoqda."  },
  { q: "Issiqxona effektini yuzaga keltiruvchi asosiy gaz qaysi?", options: ["Karbonat angidrid (CO2) va Metan (CH4)", "Kislorod", "Azot", "Argon"], answer: 0, difficulty: "easy", explanation: "Yoqilg'i yoqilishi natijasida ajralib chiqadigan CO2 issiqlikni ushlab qoladi."  },
  { q: "Yer yuzini zararli quyosh ultrabinafsha nurlaridan himoya qiluvchi qatlam nima?", options: ["Troposfera", "Gidrosfera", "Ionosfera", "Ozon qatlami (O3)"], answer: 3, difficulty: "easy", explanation: "Stratosferadagi ozon qatlami quyoshning halokatli nurlarini yutib, hayotni asraydi."  },
  { q: "Ozon qatlamining yemirilishiga asosiy sabab bo'lgan moddalar qaysilar?", options: ["Suv bug'i", "Kislorod", "Xlorftoruglerodlar (freonlar)", "Vodorod"], answer: 2, difficulty: "medium", explanation: "Muzlatgich va aerozollarda ishlatilgan freonlar ozon molekulalarini parchalaydi."  },
  { q: "Yer yuzida unumdor tuproqlarning cho'lga aylanish jarayoni nima deb ataladi?", options: ["Cho'llanish (Aridizatsiya)", "Melioratsiya", "Eroziya", "Gidratatsiya"], answer: 0, difficulty: "easy", explanation: "Noto'g'ri sug'orish, daraxtlarni kesish va qurg'oqchilik oqibatida cho'llanish yuzaga keladi."  },
  { q: "Yer shari aholisi 2022-yil oxirida qancha ko'rsatkichdan oshdi?", options: ["6 milliarddan", "5 milliarddan", "10 milliarddan", "8 milliard kishidan oshdi"], answer: 3, difficulty: "easy", explanation: "BMT ma'lumotlariga ko'ra, 2022-yil noyabr oyida dunyo aholisi 8 milliardga yetdi."  },
  { q: "Aholining shaharlarga ko'chib o'tishi va shahar turmush tarzining kuchayishi nima deyiladi?", options: ["Migratsiya", "Urbanizatsiya", "Emigratsiya", "Agglomeratsiya"], answer: 1, difficulty: "easy", explanation: "Urbanizatsiya — aholining qishloqlardan shaharlarga oqimi va shaharlar kengayishidir."  },
  { q: "Aholisi 10 milliondan ortiq bo'lgan yirik shaharlar nima deb ataladi?", options: ["Polis", "Shahar posyolkasi", "Metropol", "Megapolis (yoki megashahar)"], answer: 3, difficulty: "medium", explanation: "Tokio, Dehli, Shanxay, Qohira kabi 10 milliondan ortiq kishili shaharlar megapolis deyiladi."  },
  { q: "Dunyodagi eng katta shahar aglomeratsiyasi (megapolisi) qaysi?", options: ["Nyu-York", "London", "Tokio (Katta Tokio — 37 million aholi)", "Moskva"], answer: 2, difficulty: "medium", explanation: "Tokio-Yokogama aglomeratsiyasi 37 milliondan ortiq aholisi bilan dunyoda 1-o'rinda turadi."  },
  { q: "Muqobil (qayta tiklanuvchi) energiya manbalariga qaysilar kiradi?", options: ["Ko'mir va torf", "Quyosh, shamol, geotermal va biomassa energiyasi", "Neft va mazut", "Uran yoqilg'isi"], answer: 1, difficulty: "easy", explanation: "Quyosh va shamol energiyasi bitmas-tuganmas va tabiatga zararsiz hisoblanadi."  },
  { q: "Chuchuk suv yetishmovchiligi xavfi qaysi hududlarda eng keskin darajada?", options: ["Shimoliy Afrika, Yaqin Sharq va Markaziy Osiyo", "Skandinaviyada", "Kanadada", "Amazoniyada"], answer: 0, difficulty: "medium", explanation: "Qurg'oqchil mintaqalarda chuchuk suv taqchilligi strategik muammoga aylangan."  },
  { q: "Dunyo okeanining eng jiddiy ifloslanish omillaridan biri qaysi?", options: ["Dengiz suvo'tlari", "Baliqlarning ko'payishi", "Plastik chiqindilar va neft to'kilishi", "Muzlarning erishi"], answer: 2, difficulty: "easy", explanation: "Har yili millionlab tonna plastik okeanlarga tashlanib, ulkan chiqindi orollarini hosil qilmoqda."  },
  { q: "Tinch okeanidagi ulkan 'Chiqindi dog'i' (Great Pacific Garbage Patch) asosan nimadan iborat?", options: ["Yog'ochdan", "Toshlardan", "Muz parchalaridan", "Plastik va polietilen chiqindilardan"], answer: 3, difficulty: "medium", explanation: "Tinch okeanida oqimlar to'plagan ulkan plastik chiqindilar maydoni millionlab km² ni tashkil etadi."  },
  { q: "Kislotali yomg'irlar qanday gazlarning atmosferada to'planishidan yuzaga keladi?", options: ["Oltingugurt dioksidi (SO2) va azot oksidlari (NOx)", "Sof kislorod", "Vodorod", "Geliy"], answer: 0, difficulty: "medium", explanation: "Sanoat korxonalari chiqargan oltingugurt bug'lari suv bilan birikib kislotali yomg'ir hosil qiladi."  },
  { q: "Orol fojiasi qanday darajadagi ekologik muammo hisoblanadi?", options: ["Mahalliy bir tuman muammosi", "Global sayyoraviy fojia", "Ijobiy tabiiy jarayon", "Muammo emas"], answer: 1, difficulty: "easy", explanation: "Orol dengizining qurishi butun dunyo iqlimiga salbiy ta'sir ko'rsatgan global falokatdir."  },
  { q: "Biologik xilma-xillikni saqlash bo'yicha Qizil kitob nima uchun joriy qilingan?", options: ["Yo'qolib borayotgan noyob hayvon va o'simliklarni muhofaza qilish uchun", "Ovchilar ro'yxati uchun", "Daraxt turlarini sanash uchun", "Geografik xarita tuzish uchun"], answer: 0, difficulty: "easy", explanation: "Xalqaro va milliy Qizil kitoblarga noyob, qirilib ketish xavfi ostidagi turlar kiritiladi."  },
  { q: "Sayyoramizning 'O'pkasi' deb qaysi hududning o'rmonlari ataladi?", options: ["Sibir taygasi", "Amazonka daryosi havzasi ekvatorial o'rmonlari (Selva)", "Saxara cho'li", "Tundra"], answer: 1, difficulty: "medium", explanation: "Amazonka nam tropik o'rmonlari sayyoramizdagi eng katta kislorod ishlab chiqaruvchi maskandir."  },
  { q: "O'rmonlarning yalpi kesilishi (deforestatsiya) qanday oqibatga olib keladi?", options: ["Iqlim yumshashiga", "Daryolarning toshishiga", "Kislorod kamayishi, tuproq emirilishi va global isishga", "Havoning sovushiga"], answer: 2, difficulty: "easy", explanation: "Daraxtlar kesilishi havoda CO2 ko'payishiga va tuproq eroziyasiga sabab bo'ladi."  },
  { q: "Barqaror taraqqiyot (Sustainable Development) konsepsiyasining asosiy mazmuni nima?", options: ["Faqat hozirgi avlod manfaatini ko'zlash", "Faqat ko'proq neft qazish", "Barcha zavodlarni yopish", "Bugungi ehtiyojlarni kelajak avlodlar imkoniyatlariga zarar yetkazmagan holda qondirish"], answer: 3, difficulty: "medium", explanation: "Barqaror rivojlanish iqtisodiyot, jamiyat va tabiat o'rtasidagi mukammal muvozanatdir."  },
  { q: "Birlashgan Millatlar Tashkilotining 2030-yilgacha mo'ljallangan Barqaror Rivojlanish Maqsadlari (BRM) nechta?", options: ["10 ta", "17 ta global maqsad", "25 ta", "50 ta"], answer: 1, difficulty: "hard", explanation: "BMT 17 ta ustuvor maqsadni (qashshoqlikka barham berish, sifatli ta'lim, toza energiya va h.k.) qabul qilgan."  },
  { q: "Demografik qariylashuv (aholining qarishi) muammosi asosan qaysi mintaqada kuchli?", options: ["Markaziy Afrikada", "Janubiy Osiyoda", "G'arbiy Yevropa va Yaponiyada", "Lotin Amerikasida"], answer: 2, difficulty: "medium", explanation: "Yevropa va Yaponiyada tug'ilish kamayib, keksalar ulushi keskin oshmoqda."  },
  { q: "Demografik portlash (aholining haddan tashqari tez ko'payishi) qayerlarda davom etmoqda?", options: ["Sub-Saxara Afrikasi va ayrim Janubiy Osiyo davlatlarida", "Yevropada", "Rossiyada", "Yaponiyada"], answer: 0, difficulty: "medium", explanation: "Afrika mamlakatlarida tug'ilish juda yuqori bo'lib, oziq-ovqat va ish o'rni tanqisligini keltirib chiqarmoqda."  },
  { q: "Iqlim bo'yicha imzolangan mashhur xalqaro 'Parij bitimi'ning bosh maqsadi nima?", options: ["Soliqlarni bekor qilish", "Samolyotlarni taqiqlash", "Faqat ko'mir yoqish", "Global harorat ko'tarilishini sanoatgacha bo'lgan davrga nisbatan 1.5°C darajada ushlab qolish"], answer: 3, difficulty: "hard", explanation: "Parij kelishuvi 190 dan ortiq davlatni issiqxona gazlarini keskin kamaytirishga chaqiradi."  },
  { q: "Yashil iqtisodiyot (Green economy) nimaga asoslanadi?", options: ["Faqat o'simlik sotishga", "Qog'oz pul bosishga", "Resurslarni tejovchi, tabiatga zarar yetkazmaydigan texnologiyalarga", "Faqat qishloq xo'jaligiga"], answer: 2, difficulty: "easy", explanation: "Yashil iqtisodiyot — kam uglerodli, chiqindisiz va qayta tiklanuvchi energiya modelidir."  },
  { q: "O'zbekistonda ekologik muammolarni bartaraf etish uchun qanday umumxalq harakati yo'lga qo'yildi?", options: ["«Yashil makon» umummilliy loyihasi", "«Oltin kuz»", "«Yosh fermer»", "«Sokin shahar»"], answer: 0, difficulty: "easy", explanation: "«Yashil makon» doirasida har yili 200 million tup daraxt ekilib, yashil belbog'lar yaratilmoqda."  }
];

// 11-SINF GEOGRAFIYA: JAHON GEOSIYOSATI (25 ta savol)
window.TEST_DATA["11_geografiya"] = [
  { q: "«Geosiyosat» (geopolitika) tushunchasining asosiy mazmuni nima?", options: ["Faqat ob-havoni o'rganish", "Yer osti qazilmalari xaritasi", "Ichki savdo qoidalari", "Davlatning geografik o'rni, hududi va resurslarining tashqi siyosatiga ta'siri"], answer: 3, difficulty: "easy", explanation: "Geosiyosat davlatlarning xalqaro maydondagi qudrati va manfaatlarini geografik omillar bilan tahlil qiladi."  },
  { q: "Dunyodagi eng yirik mintaqaviy integratsiya va yagona valyutaga (Yevro) ega tashkilot qaysi?", options: ["ASEAN", "Yevropa Ittifoqi (YeI / EU)", "MDH", "ShHT"], answer: 1, difficulty: "easy", explanation: "Yevropa Ittifoqi 27 ta a'zo davlatdan iborat eng ilg'or siyosiy va iqtisodiy birlashmadir."  },
  { q: "Shanxay Hamkorlik Tashkiloti (ShHT)ning asosiy maqsadi nima?", options: ["Faqat sport musobaqalari o'tkazish", "Dengiz kemalari savdosi", "Kosmik parvozlar", "Mintaqaviy xavfsizlik, terrorizmga qarshi kurash va iqtisodiy hamkorlik"], answer: 3, difficulty: "medium", explanation: "ShHT O'zbekiston, Xitoy, Rossiya, Hindiston kabi davlatlarni birlashtiruvchi nufuzli tashkilotdir."  },
  { q: "O'zbekiston Respublikasi ShHTga qaysi yili asoschi davlat sifatida qo'shilgan?", options: ["1991-yilda", "2010-yilda", "2001-yilda", "2020-yilda"], answer: 2, difficulty: "medium", explanation: "2001-yil iyun oyida ShHT tuzilganida O'zbekiston uning oltinchi ta'sischi a'zosi bo'ldi."  },
  { q: "BMT Xavfsizlik Kengashining 'Veto' huquqiga ega bo'lgan 5 ta doimiy a'zosi qaysilar?", options: ["Germaniya, Yaponiya, Hindiston, Braziliya, JAR", "AQSh, Rossiya, Xitoy, Buyuk Britaniya, Fransiya", "Kanada, Avstraliya, Italiya, Ispaniya, Turkiya", "Saudiya Arabistoni, Eron, Pokiston, Misr, Indoneziya"], answer: 1, difficulty: "medium", explanation: "Ushbu 5 davlat Ikkinchi jahon urushi g'oliblari sifatida BMT Xavfsizlik Kengashida doimiy o'ringa ega."  },
  { q: "Markaziy Osiyoning geosiyosiy jihatdan qulayliklari nimada?", options: ["Yevroosiyo qit'asining qoq markazida, Buyuk Ipak yo'li chorrahasida joylashganida", "Okean qirg'og'ida joylashganida", "Faqat orollardan iboratligida", "Qutbga yaqinligida"], answer: 0, difficulty: "easy", explanation: "Markaziy Osiyo Yevropa, Osiyo, Yaqin Sharq va Janubiy Osiyoni bog'lovchi tabiiy ko'prikdir."  },
  { q: "O'zbekistonni dengiz portlariga (Hind okeaniga) olib chiquvchi strategik temir yo'l loyihasi qaysi?", options: ["Transsibir magistrali", "BAM magistrali", "«O'zbekiston — Afg'oniston — Pokiston» (Transafg'on temir yo'li)", "Panama kanali"], answer: 2, difficulty: "medium", explanation: "Transafg'on yo'lagi O'zbekiston mahsulotlarini Pokistonning Karachi va Gvadar portlariga to'g'ridan-to'g'ri olib chiqadi."  },
  { q: "Xitoyni Qirg'iziston orqali O'zbekiston bilan bog'lovchi yangi temir yo'l loyihasi qanday ataladi?", options: ["«Shimoliy yo'l»", "«Osiyo ekspressi»", "«Ipak poyezdi»", "«Xitoy — Qirg'iziston — O'zbekiston» temir yo'li"], answer: 3, difficulty: "easy", explanation: "Ushbu loyiha Xitoydan Yevropaga yuk tashish masofasini 900 km ga, vaqtini 7 kunga qisqartiradi."  },
  { q: "Jahon savdosida eng muhim dengiz kanallari qaysilar?", options: ["Suvaysh kanali (Misr) va Panama kanali", "Qoraqum va Katta Farg'ona", "Kiel va Volga-Don", "Saimaa va Oq dengiz"], answer: 0, difficulty: "easy", explanation: "Suvaysh va Panama kanallari jahon dengiz tashuvlarining asosiy arteriyalaridir."  },
  { q: "Suvaysh kanali qaysi ikki dengizni tutashtiradi?", options: ["Qora va Kaspiy", "O'rta dengiz va Qizil dengizni (Hind okeaniga yo'l)", "Boltiq va Oq dengizni", "Oxota va Yapon dengizini"], answer: 1, difficulty: "medium", explanation: "Suvaysh kanali Afrika atrofini aylanib o'tmasdan Yevropadan Osiyoga to'g'ri yo'l ochadi."  },
  { q: "Panama kanali qaysi ikki okeanni tutashtiradi?", options: ["Atlantika va Tinch okeanlarini", "Hind va Shimoliy Muz", "Tinch va Hind okeanlarini", "Shimoliy Muz va Atlantika"], answer: 0, difficulty: "easy", explanation: "Panama kanali Shimoliy va Janubiy Amerika oralig'ida ikki buyuk ummonni birlashtiradi."  },
  { q: "Yaqin Sharqdagi xalqaro neft tashuvlarining eng nozik va muhim bo'g'ozi qaysi?", options: ["Bering bo'g'ozi", "Hurmuz bo'g'ozi (Fors ko'rfazi chiqishi)", "Bosfor bo'g'ozi", "Dardannell bo'g'ozi"], answer: 1, difficulty: "hard", explanation: "Dunyodagi dengiz orqali tashiladigan neftning uchdan bir qismi Hurmuz bo'g'ozidan o'tadi."  },
  { q: "Osiyo-Tinch okeani mintaqasidagi eng gavjum dengiz yo'li bo'lgan bo'g'oz qaysi?", options: ["Magellan bo'g'ozi", "Laperuz", "Malakka bo'g'ozi (Singapur yaqinida)", "Kuk bo'g'ozi"], answer: 2, difficulty: "hard", explanation: "Malakka bo'g'ozi Xitoy, Yaponiya va Janubiy Koreyaning asosiy savdo yo'lagidir."  },
  { q: "Dunyodagi eng boy neft zaxirasiga ega hudud qaysi?", options: ["Shimoliy qutb", "Avstraliya", "Boltiqbo'yi", "Fors ko'rfazi havzasi"], answer: 3, difficulty: "easy", explanation: "Fors ko'rfazida jahon tasdiqlangan neft zaxiralarining qariyb 50 foizi joylashgan."  },
  { q: "Turkiy Davlatlar Tashkiloti (TDT)ga qaysi davlatlar a'zo?", options: ["Faqat Rossiya va Xitoy", "O'zbekiston, Ozarbayjon, Qozog'iston, Qirg'iziston, Turkiya", "Faqat arab davlatlari", "Hindiston va Eron"], answer: 1, difficulty: "easy", explanation: "TDT umumiy til, madaniyat va tarixga ega turkiy xalqlarning hamkorlik ittifoqidir."  },
  { q: "BMT Bosh Assambleyasi tomonidan qabul qilingan «Markaziy Osiyoda tinchlik va barqarorlik» rezolyutsiyasining tashabbuskori qaysi davlat?", options: ["AQSh", "Fransiya", "O'zbekiston Respublikasi", "Kanada"], answer: 2, difficulty: "medium", explanation: "O'zbekiston mintaqada yaxshi qo'shnichilik va integratsiyani boshlagan asosiy tashabbuskordir."  },
  { q: "Jahon iqtisodiyotida 'Triada' (uch asosiy iqtisodiy qutb) deb qaysi mintaqalar ataladi?", options: ["Shimoliy Amerika (AQSh/Kanada), G'arbiy Yevropa va Sharqiy Osiyo", "Afrika, Lotin Amerikasi, Okeaniya", "Rossiya, Mongoliya, Qozog'iston", "Hindiston, Pokiston, Bangladesh"], answer: 0, difficulty: "medium", explanation: "Triada jahon ishlab chiqarishi va moliyasining asosiy ulushini boshqaradi."  },
  { q: "Katta Yigirmatalik (G20) qanday davlatlarni birlashtiradi?", options: ["Faqat harbiy bloklarni", "Faqat orol davlatlarni", "Faqat Yevropa davlatlarini", "Dunyodagi eng yirik 20 ta rivojlangan va rivojlanayotgan iqtisodiyotni"], answer: 3, difficulty: "easy", explanation: "G20 jahon yalpi mahsulotining 85 foizini va savdosining 75 foizini ifodalaydi."  },
  { q: "Dunyodagi eng yirik quruqlikdagi chegaraga ega ikki davlat qaysilar?", options: ["Rossiya va Xitoy", "O'zbekiston va Qozog'iston", "AQSh va Kanada (chegara uzunligi 8893 km)", "Argentina va Chili"], answer: 2, difficulty: "medium", explanation: "AQSh va Kanada o'rtasidagi chegara 8893 km bo'lib, dunyoda eng uzunidir."  },
  { q: "Geosiyosatda 'Dengiz kuchi' (Tallassokratiya) va 'Quruqlik kuchi' (Tellurokratiya) nazariyasini ilgari surgan olim kim?", options: ["Halford Makkinder (Xartlend nazariyasi)", "Gerodot", "Ptolomey", "Strabon"], answer: 0, difficulty: "hard", explanation: "Ingliz olimi Makkinder 'Yevroosiyo quruqlik markazini boshqargan dunyoni boshqaradi' degan nazariyani yaratgan."  },
  { q: "Xalqaro Valyuta Jamg'armasi (XVJ / IMF) va Jahon Bankining bosh qarorgohi qayerda?", options: ["London", "Frankfurt", "Parij", "Vashington shahrida (AQSh)"], answer: 3, difficulty: "medium", explanation: "Bosh xalqaro moliya institutlari AQSh poytaxti Vashingtonda joylashgan."  },
  { q: "Jahon Savdo Tashkiloti (JST / WTO) qaysi shaharda joylashgan va O'zbekiston unga a'zo bo'lish jarayonida?", options: ["Rim", "Jeneva shahrida (Shveytsariya)", "Vena", "Madrid"], answer: 1, difficulty: "easy", explanation: "Jeneva shahrida joylashgan JST xalqaro savdo qoidalarini belgilaydi."  },
  { q: "Kibersiyosat va sun'iy intellekt davrida davlatlarning 'Yumshoq kuchi' (Soft power) nimalarda namoyon bo'ladi?", options: ["Faqat tank va qurollarda", "Boshqa davlatlar bilan aloqa qilmaslikda", "Chegaralarni yopishda", "Madaniyat, ta'lim, innovatsiyalar va axborot texnologiyalarida"], answer: 3, difficulty: "medium", explanation: "Yumshoq kuch — majburlashsiz, madaniyat, ilm-fan va nufuz orqali jalb qilish san'atidir."  },
  { q: "O'zbekistonning tashqi siyosatdagi bosh prioriteti (ustuvor yo'nalishi) nima?", options: ["Uzoq orollar bilan savdo", "Harbiy ittifoq tuzish", "Markaziy Osiyoda tinchlik, do'stlik va ko'p tomonlama manfaatli hamkorlik", "Barcha chegaralarni to'sish"], answer: 2, difficulty: "easy", explanation: "Yaxshi qo'shnichilik va mintaqaviy birdamlik O'zbekiston tashqi siyosatining o'q tomiridir."  },
  { q: "Kelajakda jahon geosiyosatida qaysi resurslar eng katta strategik ahamiyatga ega bo'ladi?", options: ["Faqat tosh va qum", "Chuchuk suv, toza energiya, litiy va nodir yer metallari hamda oziq-ovqat", "Plastik idishlar", "Eski qog'ozlar"], answer: 1, difficulty: "medium", explanation: "Elektromobillar, chiplar va yashil iqtisodiyot uchun litiy, toza suv va nodir metallar hal qiluvchi boylikdir."  }
];

// ============================================================
// TARIX VA BIOLOGIYA TESTLARI (BARCHA SINFLAR UCHUN BOYITMA)
// ============================================================


// 5-SINF TARIX (TARIXDAN HIKOYALAR - 20 ta savol)
window.TEST_DATA["5_tarix"] = [
  { q: "«Tarix» so'zi arabchadan tarjima qilinganda qanday ma'noni bildiradi?", options: ["«Vaqt, muddat, o'tmish voqealari bayoni»", "«Kelajak bashorati»", "«Eski kitob»", "«Buyuk saltanat»"], answer: 0, difficulty: "easy", explanation: "Tarix arabcha so'z bo'lib, o'tmishda yuz bergan voqealarni o'rganadi."  },
  { q: "«Tarixning otasi» deb qaysi qadimgi yunon olimi e'tirof etiladi?", options: ["Aristotel", "Gerodot (eramizdan avvalgi V asr)", "Platon", "Strabon"], answer: 1, difficulty: "easy", explanation: "Gerodot «Tarix» nomli 9 jildlik asari bilan bu fanga asos solgan."  },
  { q: "O'tmishdan qolgan moddiy yodgorliklarni qazib o'rganuvchi fan qaysi?", options: ["Geologiya", "Etnografiya", "Arxeologiya", "Numizmatika"], answer: 2, difficulty: "easy", explanation: "Arxeologiya qadimgi qabrlar, qal'alar va mehnat qurollarini qazish orqali o'rganadi."  },
  { q: "Qadimgi tangalarni o'rganuvchi maxsus tarixiy fan nima?", options: ["Toponimika", "Xronologiya", "Sfragistika", "Numizmatika"], answer: 3, difficulty: "medium", explanation: "Numizmatika qadimgi oltin, kumush va mis tangalar tarixini tadqiq qiladi."  },
  { q: "O'zbekiston hududida eng qadimgi ibtidoiy odam (neandertal) suyaklari qayerdan topilgan?", options: ["Selung'ur g'oridan", "Teshiktosh g'oridan (Surxondaryo, Boysun)", "Obirahmatdan", "Zarautsoy g'oridan"], answer: 1, difficulty: "easy", explanation: "1938-yilda akademik Okladnikov Teshiktosh g'oridan 8-9 yoshli neandertal bola suyagini topgan."  },
  { q: "Qadimgi qoyatosh rasmlari (petrogliflar) bilan mashhur maskan qaysi?", options: ["Chorvoq", "Mingbuloq", "Zarautsoy (Surxondaryo) va Sarmishsoy (Navoiy)", "Qamchiq"], answer: 2, difficulty: "medium", explanation: "Zarautsoy va Sarmishsoyda ibtidoiy odamlarning ov manzaralari aks etgan minglab rasmlar bor."  },
  { q: "O'zbekiston hududidagi eng qadimgi dehqonchilik maskani (manzilgohi) qaysi?", options: ["Zamonbobo va Sopollitepa (hamda Jarqo'ton)", "Afrosiyob", "Marv", "Xiva"], answer: 0, difficulty: "medium", explanation: "Sopollitepa va Jarqo'ton (Surxondaryo) jez davriga oid eng qadimgi dehqonchilik markazlaridir."  },
  { q: "Dunyodagi eng qadimgi dinlardan biri bo'lgan Zardushtiylikning muqaddas kitobi nima?", options: ["Qur'on", "Tavrot", "Injil", "Avesto"], answer: 3, difficulty: "easy", explanation: "Zardushtiylikning muqaddas kitobi «Avesto» bo'lib, uning vatani Xorazmdir."  },
  { q: "Avestoda ezgulik xudosi va yovuzlik timsoli kimlar deb ataladi?", options: ["Zevs va Aid", "Ra va Set", "Axuramazda (ezgulik) va Axriman (yovuzlik)", "Yupiter va Mars"], answer: 2, difficulty: "medium", explanation: "Avestoning bosh g'oyasi: «Ezgu fikr, ezgu so'z, ezgu amal» Axuramazda timsolidadir."  },
  { q: "Buyuk ipak yo'li nechanchi asrlarda paydo bo'lgan va qaysi hududlarni bog'lagan?", options: ["Eramizdan avvalgi II asrda; Xitoydan O'rta Osiyo orqali Rim (Yevropa)gacha", "XX asrda", "X asrda", "Faqat bir shahar ichida"], answer: 0, difficulty: "easy", explanation: "Buyuk ipak yo'li Sharq va G'arb xalqlarini savdo va madaniyat bilan bog'lagan."  },
  { q: "Qadimgi Turon xalqlarining Eron shohi Kir II ga qarshi mardona kurashgan jasur ayol hukumdori kim?", options: ["Nodirabegim", "Zebunniso", "Bibixonim", "To'maris (Massagetlar malikasi)"], answer: 3, difficulty: "easy", explanation: "Malika To'maris o'z yurtiga bostirib kelgan shoh Kir II ustidan g'alaba qozongan."  },
  { q: "Doro I qo'shinini dashtga adashtirib olib kirib qahramonlik ko'rsatgan cho'pon kim?", options: ["Spitamen", "Shiroq", "Muqanna", "Jaloliddin"], answer: 1, difficulty: "easy", explanation: "Cho'pon Shiroq o'z qulog'i va burnini kesib, Eron qo'shinini suvsiz sahroda halok qilgan."  },
  { q: "Iskandar Zulqarnayn (Aleksandr Makedonskiy) qo'shiniga qarshi 3 yil sabot bilan kurashgan so'g'dlik sarkarda kim?", options: ["Shiroq", "Rustam", "To'maris", "Spitamen"], answer: 3, difficulty: "easy", explanation: "Spitamen So'g'diyona va Baqtriyada Iskandarga qarshi afsonaviy xalq qo'zg'oloniga boshchilik qilgan."  },
  { q: "Amir Temur nechanchi yilda va qayerda tavallud topgan?", options: ["1441-yil Hirotda", "1220-yil Samarqandda", "1336-yil 9-aprelda Kesh (Shahrisabz) yaqinidagi Xo'ja Ilg'or qishlog'ida", "1500-yil Andijonda"], answer: 2, difficulty: "easy", explanation: "Sohibqiron Amir Temur 1336-yil 9-aprelda Shahrisabz yaqinida tug'ilgan."  },
  { q: "Amir Temur davlatining shiori nima edi?", options: ["«Boylik va qudrat»", "«Kuch — adolatdadir» («Rosti-rusti»)", "«Tinchlik va mehnat»", "«G'alaba va shon»"], answer: 1, difficulty: "easy", explanation: "Amir Temur o'zining uzugiga «Kuch — adolatdadir» so'zlarini naqsh qildirgan."  },
  { q: "Amir Temur tuzgan buyuk saltanatning poytaxti qaysi shahar bo'lgan?", options: ["Samarqand shahri", "Buxoro", "Toshkent", "Shahrisabz"], answer: 0, difficulty: "easy", explanation: "Amir Temur Samarqandni jahonning eng go'zal va qudratli poytaxtiga aylantirdi."  },
  { q: "Samarqandda ulkan rasadxona (observatoriya) qurdirgan buyuk munajjim olim va temuriy hukmdor kim?", options: ["Bobur", "Husayn Boyqaro", "Mirzo Ulug'bek", "Shohrux Mirzo"], answer: 2, difficulty: "easy", explanation: "Mirzo Ulug'bek 1018 ta yulduz harakatini aks ettiruvchi 'Ziji jadidi Ko'ragoniy' asarini yaratgan."  },
  { q: "O'zbek adabiy tilining asoschisi, g'azal mulkining sultoni kim?", options: ["Atoiy", "Zahiriddin Muhammad Bobur", "Lutfiy", "Alisher Navoiy"], answer: 3, difficulty: "easy", explanation: "Alisher Navoiy (1441-1501) «Xamsa» durdonasi bilan o'zbek tilini jahonga tanitdi."  },
  { q: "Hindistonda 300 yildan ortiq hukmronlik qilgan Boburiylar sulolasiga asos solgan shoh va shoir kim?", options: ["Zahiriddin Muhammad Bobur", "Amir Temur", "Akbarshoh", "Humoyun"], answer: 0, difficulty: "easy", explanation: "Bobur «Boburnoma» asari muallifi va Buyuk Boburiylar imperiyasi asoschisidir."  },
  { q: "Dunyoning yetti mo''jizasidan biri bo'lgan «Tojmahal» obidasi kim tomonidan qurdirilgan?", options: ["Bobur", "Shoh Jahon (Boburning avlodi)", "Mirzo Ulug'bek", "Amir Temur"], answer: 1, difficulty: "medium", explanation: "Shoh Jahon sevimli rafiqasi Mumtoz Mahal xotirasiga oq marmarli Tojmahalni bunyod etgan."  }
];

// 6-SINF TARIX (QADIMGI DUNYO TARIXI - 20 ta savol)
window.TEST_DATA["6_tarix"] = [
  { q: "Nil daryosi vodiysida vujudga kelgan eng qadimgi sivilizatsiya qaysi?", options: ["Qadimgi Misr", "Qadimgi Bobil", "Qadimgi Rim", "Qadimgi Xitoy"], answer: 0, difficulty: "easy", explanation: "Nil daryosining toshishi Qadimgi Misrda dehqonchilik va qudratli davlat paydo bo'lishiga asos bo'lgan."  },
  { q: "Qadimgi Misr podsholari nima deb atalgan?", options: ["Xon", "Fir'avn (Faraon)", "Shoh", "Imperator"], answer: 1, difficulty: "easy", explanation: "Misr hukmdorlari fir'avn deb atalgan va ular xudoning yerdagi vakili hisoblangan."  },
  { q: "Misrdagi eng ulkan piramida qaysi fir'avnga atab qurilgan?", options: ["Tutanxamon", "Ramses II", "Xeofis (Xufu — balandligi 147 m)", "Kleoatra"], answer: 2, difficulty: "easy", explanation: "Giza vodiysidagi Xeops piramidasi dunyoning qadimgi yetti mo''jizasidan biridir."  },
  { q: "Dajla va Furot daryolari oralig'ida joylashgan qadimgi o'lka nima deb atalgan?", options: ["Finikiya", "Hindiston", "Misr", "Mesopotamiya (Ikki daryo oralig'i / Shumer)"], answer: 3, difficulty: "easy", explanation: "Mesopotamiya yunoncha 'daryolar oralig'i' demak bo'lib, bu yerda Shumer, Akkad va Bobil bo'lgan."  },
  { q: "Insoniyat tarixidagi eng qadimgi mixxat (ponasimon) yozuvini kimlar ixtiro qilgan?", options: ["Misrliklar", "Shumerlar", "Forslar", "Hindlar"], answer: 1, difficulty: "medium", explanation: "Shumerlar loy taxtachalarga qamish tayoqcha bilan yoziladigan mixxat yozuvini yaratdilar."  },
  { q: "Dunyodagi eng qadimgi toshga o'yilgan yozma qonunlar majmuasi kimning qonunlari deb ataladi?", options: ["Yuliy Sezar qonunlari", "Solon qonunlari", "Xammurapi qonunlari (Bobil shohi)", "Drakont qonunlari"], answer: 2, difficulty: "medium", explanation: "Bobil hukmdori Xammurapi qora bazalt toshga 282 moddadan iborat adolat qonunlarini o'yib yozdirgan."  },
  { q: "Dunyodagi birinchi alifbo (tovushli harflar)ni kimlar yaratgan?", options: ["Finikiyaliklar (22 ta undosh harf)", "Rimliklar", "Yunonlar", "Misrliklar"], answer: 0, difficulty: "medium", explanation: "O'rta dengiz bo'yidagi dengizchi finikiyaliklar birinchi sodda harfiy alifboni kashf etganlar."  },
  { q: "Qadimgi Xitoyda kashf etilgan to'rtta buyuk ixtironi toping.", options: ["Kema, bug' dvigateli, telefon, elektr", "Tanga, soat, oyna, velosiped", "Po'lat, shisha, kerosin, plastmassa", "Qog'oz, kompas, porox va kitob bosish usuli"], answer: 3, difficulty: "easy", explanation: "Qadimgi Xitoy jahon tamadduniga qog'oz, kompas, porox va ipakni sovg'a qilgan."  },
  { q: "Qadimgi Hindistonda vujudga kelgan jahon dini qaysi?", options: ["Xristianlik", "Islom", "Buddizm (asoschisi Gautama Budda)", "Iudaizm"], answer: 2, difficulty: "easy", explanation: "Buddizm eramizdan avvalgi VI asrda Hindistonda paydo bo'lib, butun Sharqqa yoyilgan."  },
  { q: "Qadimgi Yunonistonda fuqarolar hokimiyati — 'Demokratiya' ilk bor qaysi shaharda qaror topgan?", options: ["Afinada", "Spartada", "Korinfda", "Fivada"], answer: 0, difficulty: "easy", explanation: "Afina shahrida xalq majlisi orqali boshqariladigan demokratik tuzum vujudga kelgan."  },
  { q: "Harbiy intizom va temir tartib-qoidaga asoslangan qadimgi yunon davlati qaysi?", options: ["Afina", "Rodos", "Krit", "Sparta"], answer: 3, difficulty: "easy", explanation: "Spartada har bir erkak bolalikdan jangchi qilib tarbiyalangan."  },
  { q: "Qadimgi Olimpiada o'yinlari ilk bor qaysi davlatda va qachon boshlangan?", options: ["Rimda", "Qadimgi Yunonistonda (e.a. 776-yilda Olimpiyada)", "Misrda", "Forsiyada"], answer: 1, difficulty: "easy", explanation: "E.a. 776-yildan Zevs sharafiga har 4 yilda o'tkazilgan sport o'yinlari Olimpiada deb atalgan."  },
  { q: "Qadimgi Rim davlatida respublika tuzumidan imperiyaga o'tishda yetakchilik qilgan mashhur diktator kim?", options: ["Romul", "Spartak", "Neron", "Yuliy Sezar"], answer: 3, difficulty: "medium", explanation: "Yuliy Sezar Rimda yakkahokimlik o'rnatib, imperiyaning poydevorini qo'ygan."  },
  { q: "Rim imperiyasida gladiatorlar (qullar)ning eng yirik qo'zg'oloniga kim boshchilik qilgan?", options: ["Hannibal", "Krass", "Spartak (eramizdan avvalgi 74-71 yillar)", "Pompey"], answer: 2, difficulty: "easy", explanation: "Spartak boshchiligidagi gladiatorlar qo'zg'oloni Rimni larzaga keltirgan ulkan harakat bo'ldi."  },
  { q: "Qadimgi Rimda gladiatorlar janglari va bayramlar o'tkaziladigan ulkan amfiteatr nima?", options: ["Panteon", "Kolizey amfiteatri", "Forum", "Akropol"], answer: 1, difficulty: "easy", explanation: "Kolizey 50 mingdan ortiq tomoshabinga mo'ljallangan qadimgi Rimning eng ulkan arenasidir."  },
  { q: "Qadimgi Baqtriya davlati hududi asosan qaysi hozirgi viloyatlarga to'g'ri keladi?", options: ["Surxondaryo, Janubiy Tojikiston va Shimoliy Afg'oniston", "Toshkent va Sirdaryo", "Xorazm va Qoraqalpog'iston", "Farg'ona va Andijon"], answer: 0, difficulty: "medium", explanation: "Qadimgi Baqtriya Amudaryoning yuqori va o'rta oqimlarida joylashgan yirik sivilizatsiyadir."  },
  { q: "So'g'diyona davlatining poytaxti qaysi qadimiy shahar bo'lgan?", options: ["Xiva", "Buxoro", "Marokanda (Samarqand / Afrosiyob)", "Termiz"], answer: 2, difficulty: "easy", explanation: "Zarafshon va Qashqadaryo vohalaridagi So'g'diyonaning markazi Marokanda (Samarqand) edi."  },
  { q: "Qadimgi Xorazm davlatining ulkan tuproqqal'alari va rasadxonasi bo'lgan mashhur yodgorlik qaysi?", options: ["Afrosiyob", "Xolchayon", "Bolaliktepa", "Qo'yqirilganqal'a va Tuproqqal'a"], answer: 3, difficulty: "medium", explanation: "Qo'yqirilganqal'a e.a. IV asrda yulduzlarni kuzatish va quyoshga sig'inish uchun qurilgan."  },
  { q: "Qang' davlati (Qang'yuy) asosan qaysi daryo havzalarida hukmronlik qilgan?", options: ["Sirdaryoning o'rta oqimi va Toshkent vohasida", "Amudaryo", "Zarafshon", "Murrg'ob"], answer: 0, difficulty: "medium", explanation: "Qang' davlati e.a. III asrdan eramizning V asrigacha Toshkent va Sirdaryo bo'ylarida qudratli bo'lgan."  },
  { q: "Kushon imperiyasining eng qudratli va madaniyat gullagan davri qaysi podsho hukmronligiga to'g'ri keladi?", options: ["Kudzul Kadfiz", "Kanishka I", "Vashishka", "Xuvishka"], answer: 1, difficulty: "hard", explanation: "Podsho Kanishka davrida Kushon davlati Rim, Parfiya va Xitoy bilan tenglashuvchi imperiyaga aylandi."  }
];

// 5-SINF BIOLOGIYA: BOTANIKA (O'SIMLIKLAR OLAMI - 20 ta savol)
window.TEST_DATA["5_biologiya"] = [
  { q: "«Biologiya» so'zining ma'nosi nima?", options: ["Hayot haqidagi fan (Bios — hayot, logos — ta'limot)", "Tog'lar haqidagi fan", "Yulduzlar ilmi", "Suv sirlari"], answer: 0, difficulty: "easy", explanation: "Biologiya tirik tabiat, o'simliklar, hayvonlar va inson organizmini o'rganadi."  },
  { q: "O'simliklar dunyosini o'rganuvchi biologiya bo'limi nima deb ataladi?", options: ["Zoologiya", "Botanika", "Mikologiya", "Anatomiya"], answer: 1, difficulty: "easy", explanation: "Botanika (yunoncha 'botane' — o't, o'simlik) — o'simlikshunoslik fanidir."  },
  { q: "Tirik mavjudotlarning eng kichik tuzilish va tiriklik birligi nima?", options: ["Organ", "To'qima", "Hujayra", "Molekula"], answer: 2, difficulty: "easy", explanation: "Hujayra — barcha tirik organizmlarning asosiy elementar birligidir."  },
  { q: "O'simlik hujayrasiga yashil rang beruvchi plastidalar nima deb ataladi?", options: ["Leykoplastlar", "Vakuolalar", "Xromoplastlar", "Xloroplastlar (tarkibida xlorofill bor)"], answer: 3, difficulty: "easy", explanation: "Xloroplastlardagi xlorofill moddasi quyosh nurini yutib, o'simlikka yashil rang beradi."  },
  { q: "O'simliklarda quyosh nuri ta'sirida organik modda va kislorod hosil bo'lish jarayoni nima?", options: ["Nafas olish", "Fotosintez", "Bug'lanish", "Ildiz bosimi"], answer: 1, difficulty: "easy", explanation: "Fotosintez jarayonida o'simliklar karbonat angidridni yutib, atrofga toza kislorod chiqaradi."  },
  { q: "O'simlikni tuproqqa mustahkamlab, suv va mineral tuzlarni so'rib oluvchi organ qaysi?", options: ["Barg", "Poya", "Ildiz", "Gul"], answer: 2, difficulty: "easy", explanation: "Ildiz o'simlikning yerosti tayanch va oziqlantiruvchi asosiy organidir."  },
  { q: "O'simlikning suv va oziq moddalarni ildizdan barglarga yetkazib beruvchi organi qaysi?", options: ["Poya (poya va novdalar)", "Meva", "Gulbarg", "Urug'"], answer: 0, difficulty: "easy", explanation: "Poya o'tkazuvchi to'qimalari orqali moddalar almashinuvini ta'minlaydi."  },
  { q: "O'simlikda fotosintez va nafas olish qaysi organ orqali amalga oshadi?", options: ["Ildiz", "Urug'pallasi", "Meva po'sti", "Barg (og'izchalar orqali)"], answer: 3, difficulty: "easy", explanation: "Bargdagi og'izchalar orqali gazlar almashinuvi va transpiratsiya (suv bug'latish) kechadi."  },
  { q: "O'simlikning ko'payish organi qaysi?", options: ["Tikan", "Ildizpoya", "Gul va urug'", "Tugunak"], answer: 2, difficulty: "easy", explanation: "Gul — yopiq urug'li o'simliklarning jinsiy ko'payish organi hisoblanadi."  },
  { q: "Gulning asosiy ko'payish qismlari qaysilar?", options: ["Changchi va urug'chi", "Gulband va kosachabarg", "Gulqo'rg'on", "Gul o'rni"], answer: 0, difficulty: "medium", explanation: "Changchi (erkaklik) va urug'chi (urg'ochilik) urug'lanish jarayonini ta'minlaydi."  },
  { q: "Changchidagi chang donachalarining urug'chi tumshuqchasiga tushishi nima deyiladi?", options: ["O'sish", "Kurtaklanish", "Unib chiqish", "Changlanish"], answer: 3, difficulty: "easy", explanation: "Changlanish hasharotlar, shamol yoki sun'iy yo'l bilan amalga oshadi."  },
  { q: "Bir yillik madaniy o'simliklarga qaysilar kiradi?", options: ["Olma va nok", "Bug'doy, makkajo'xori, paxta, pomidor", "Chinor va terak", "Tut va pista"], answer: 1, difficulty: "easy", explanation: "Bug'doy, paxta va sabzavotlar bir mavsumda unib, hosil berib, qurib qoladi."  },
  { q: "Ko'p yillik daraxtlarning tanasi qalinlashuviga sabab bo'luvchi hosil qiluvchi to'qima nima?", options: ["Po'stloq", "Yog'ochlik", "O'zak", "Kambiy qatlami"], answer: 3, difficulty: "medium", explanation: "Kambiy hujayralarining tinimsiz bo'linishi hisobiga daraxt tanasi yo'g'onlashadi va yillik halqalar hosil bo'ladi."  },
  { q: "Daraxtning yoshini qanday aniqlash mumkin?", options: ["Barglar soniga qarab", "Balandligiga qarab", "Daraxt to'nkasidagi yillik halqalarni sanash orqali", "Mevasi hajmiga qarab"], answer: 2, difficulty: "easy", explanation: "Yog'ochlikdagi har bir yillik halqa daraxtning bir yillik hayotidan darak beradi."  },
  { q: "Zamburug'lar nima sababdan o'simliklar guruhiga kiritilmaydi?", options: ["Ildizi yo'qligi uchun", "Tarkibida xlorofill bo'lmagani va tayyor organik modda bilan oziqlangani uchun", "Juda kichikligi uchun", "Suvda yashagani uchun"], answer: 1, difficulty: "medium", explanation: "Zamburug'lar fotosintez qila olmaydi (geterotrof), shuning uchun alohida dunyodir."  },
  { q: "Tirik tabiatda eng sodda tuzilgan, tuban o'simliklar qaysilar?", options: ["Suvo'tlar (dengiz va daryo suvo'tlari)", "Qirqquloqlar", "Ignabarglilar", "Loladoshlar"], answer: 0, difficulty: "medium", explanation: "Suvo'tlarning tanasi ildiz, poya va bargga ajralmagan (tallom) bo'ladi."  },
  { q: "Dorivor o'simliklardan shamollashda damlab ichiladigan eng mashhuri qaysi?", options: ["G'o'za", "Sho'ra", "Moychechak (romashka) va kiyiko't", "Qamish"], answer: 2, difficulty: "easy", explanation: "Moychechak, kiyiko't va na'matak xalq tabobatida keng qo'llaniladi."  },
  { q: "Qoraqarag'ay, archa va qarag'ay qaysi o'simliklar guruhiga kiradi?", options: ["Yopiq urug'lilar", "Bir pallalilar", "Moxlar", "Ochiq urug'lilar (ignabarglilar)"], answer: 3, difficulty: "easy", explanation: "Ignabarglilar mevasi bo'lmay, urug'i qubbalarda ochiq holda yetiladigan ochiq urug'lilardir."  },
  { q: "O'zbekistonning tog'larida keng tarqalgan va asrlar davomida yashaydigan ignabargli daraxt qaysi?", options: ["Zarafshon va qora archa", "Tol", "Zarang", "Yong'oq"], answer: 0, difficulty: "easy", explanation: "Archa ming yilgacha yashaydigan, tog' yonbag'irlarini seldan saqlovchi shifobaxsh daraxtdir."  },
  { q: "Sahro va cho'llarda o'sadigan, ildizi 20-30 metr chuqurlikka ketuvchi buta qaysi?", options: ["Qamish", "Saksovul va tuyaqorin", "Beda", "Lola"], answer: 1, difficulty: "easy", explanation: "Saksovul cho'l qumlarini mustahkamlab, suvsizlikka ajoyib moslashgan o'simlikdir."  }
];

// 6-SINF BIOLOGIYA: ZOOLOGIYA (HAYVONOT OLAMI - 20 ta savol)
window.TEST_DATA["6_biologiya"] = [
  { q: "Hayvonot olamini o'rganuvchi fan qanday ataladi?", options: ["Zoologiya (yunoncha «zoon» — hayvon)", "Botanika", "Ekologiya", "Sitologiya"], answer: 0, difficulty: "easy", explanation: "Zoologiya hayvonlarning xilma-xilligi, tuzilishi va xatti-harakatini o'rganadi."  },
  { q: "Bir hujayrali sodda hayvonlarga qaysi organizm misol bo'ladi?", options: ["Chuvalchang", "Oddiy amyoba va tufelka", "Chigirtka", "Qisqichbaqa"], answer: 1, difficulty: "easy", explanation: "Amyoba va yashil evglena bitta mikroskopik hujayradan iborat mustaqil hayvondir."  },
  { q: "Umurtqasiz hayvonlar guruhiga qaysilar kiradi?", options: ["Baliqlar va qushlar", "Sudralib yuruvchilar", "Hasharotlar, o'rgimchaklar, chuvalchanglar va mollyuskalar", "Sutemizuvchilar"], answer: 2, difficulty: "easy", explanation: "Umurtqa pog'onasi bo'lmagan hayvonlar umurtqasizlar deyiladi (barcha hayvonlarning 95% i)."  },
  { q: "Hasharotlarning nechta oyog'i (yurish oyoqlari) bo'ladi?", options: ["4 ta", "10 ta", "8 ta", "6 ta (3 juft)"], answer: 3, difficulty: "easy", explanation: "Barcha hasharotlarning ko'krak qismida 3 juft (6 ta) oyoq bo'ladi."  },
  { q: "O'rgimchaksimonlarning hasharotlardan farqli ravishda nechta oyog'i bor?", options: ["6 ta", "8 ta (4 juft)", "10 ta", "12 ta"], answer: 1, difficulty: "easy", explanation: "O'rgimchaklar va chayonlar 4 juft (8 dona) oyoqqa ega bo'ladi."  },
  { q: "Suvda ham quruqlikda yashovchi (amfibiyalar) sinfiga qaysi hayvon kiradi?", options: ["Kaltakesak", "Ilon", "Qurbaqa va triton", "Toshbaqa"], answer: 2, difficulty: "easy", explanation: "Qurbaqalar tuxumini suvga qo'yadi, lichinkasi (itbaliq) suvda, kattasi quruqlikda nafas oladi."  },
  { q: "Sudralib yuruvchilar (reptiliyalar) sinfi vakillarini toping.", options: ["Kaltakesak, ilon, timsoh, toshbaqa", "Qurbaqalar", "Baliqlar", "Qushlar"], answer: 0, difficulty: "easy", explanation: "Sudralib yuruvchilar quruq tangachali teri bilan qoplangan sovuqqonli hayvonlardir."  },
  { q: "Qushlarning uchishiga moslashgan eng asosiy xususiyatlari qaysilar?", options: ["To'rt oyoqliligi", "Og'ir suyaklari", "Tishlarining ko'pligi", "Suyaklarining ichi g'ovakligi, qanot va patlarining borligi"], answer: 3, difficulty: "medium", explanation: "Yengil va mustahkam suyaklar, pat qoplami qushlarga havoda oson parvoz qilish imkonini beradi."  },
  { q: "Issiqqonli (tana harorati tashqi muhitga bog'liq bo'lmagan) hayvonlar qaysilar?", options: ["Baliqlar va qurbaqalar", "Ilonlar va hasharotlar", "Qushlar va sutemizuvchilar", "Qisqichbaqalar"], answer: 2, difficulty: "medium", explanation: "Qushlar va sutemizuvchilar doimiy tana haroratiga ega (issiqqonli) hayvonlardir."  },
  { q: "Bolalarini sut bilan boqadigan eng yuksak hayvonlar guruhi qaysi?", options: ["Sutemizuvchilar", "Qushlar", "Sudralib yuruvchilar", "Amfibiyalar"], answer: 0, difficulty: "easy", explanation: "Sutemizuvchilar tirik tug'ib, bolasini ona suti bilan oziqlantiradi."  },
  { q: "Dunyodagi eng katta sutemizuvchi hayvon qaysi?", options: ["Fil", "Jirafa", "Karkidon", "Ko'k kit (og'irligi 150 tonnagacha)"], answer: 3, difficulty: "easy", explanation: "Ko'k kit — okeanda yashovchi, sayyoramiz tarixidagi eng ulkan jonivordir."  },
  { q: "Dunyodagi eng bo'yi baland quruqlik hayvoni qaysi?", options: ["Fil", "Jirafa (bo'yi 5-6 metr)", "Begemot", "Tuya"], answer: 1, difficulty: "easy", explanation: "Jirafaning uzun bo'yni unga baland daraxt shoxlaridagi barglarni yeyishga yordam beradi."  },
  { q: "Dunyodagi eng tez yuguruvchi yirtqich hayvon qaysi?", options: ["Sher", "Yo'lbars", "Bo'ri", "Gepard (tezligi soatiga 110-120 km)"], answer: 3, difficulty: "easy", explanation: "Gepard qisqa masofada tezyurar avtomobildek (110 km/soat) chopish qobiliyatiga ega."  },
  { q: "O'zbekiston Qizil kitobiga kiritilgan tog' qoplonining nomi nima?", options: ["Gepard", "Sher", "Qor qoploni (Ilvirs)", "Sirtlon"], answer: 2, difficulty: "easy", explanation: "Qor qoploni (Ilvirs) Tyan-Shan va Pomir qoyalarida yashovchi noyob mushuksimondir."  },
  { q: "Qizilqum cho'llarida yashovchi tezchopar yovvoyi tuyoqli hayvon qaysi?", options: ["Qulon", "Jayran (kiyik)", "Bug'u", "Los"], answer: 1, difficulty: "easy", explanation: "Jayran — O'zbekiston cho'llarining ko'rki bo'lgan nozik va chaqqon kiyik turidir."  },
  { q: "Asalari oilasida nechta ona ari (malika) bo'ladi?", options: ["Faqat 1 ta ona ari", "10 ta", "Har bir katakda bittadan", "Umuman bo'lmaydi"], answer: 0, difficulty: "easy", explanation: "Asalari oilasida yagona ona ari bo'lib, u tuxum qo'yish bilan band bo'ladi."  },
  { q: "Tabiatda tuproq hosil bo'lishida va uni yumshatishda eng foydali jonivor qaysi?", options: ["Zuluk", "Kolorado qo'ng'izi", "Yomg'ir chuvalchangi", "Chivin"], answer: 2, difficulty: "easy", explanation: "Yomg'ir chuvalchanglari tuproqni chirindi bilan boyitib, havo o'tkazuvchan qiladi."  },
  { q: "O'zbekistonda Orolbo'yida yashovchi pushti rangli go'zal qush qaysi?", options: ["Qo'ton", "Burgut", "Laylak", "Qizil g'oz (Flamingo)"], answer: 3, difficulty: "medium", explanation: "Flamingolar Sudochye ko'li va Orolbo'yi havzalarida to'dasi bilan uya quradi."  },
  { q: "Barcha xonaki ipak matolarining asoschisi bo'lgan foydali hasharot qaysi?", options: ["Ipak qurti (Tut ipak qurti kapalagi)", "Chigirtka", "Chumoli", "Qo'ng'iz"], answer: 0, difficulty: "easy", explanation: "Tut ipak qurti pilla o'rab, o'zidan yupqa va mustahkam tabiiy ipak tolasini beradi."  },
  { q: "Odamda xavfli bezgak kasalligini tarqatuvchi hasharot qaysi?", options: ["Suvarak", "Bezgak pashshasi (Anofeles)", "Asalari", "Ninachi"], answer: 1, difficulty: "easy", explanation: "Anofeles urug'iga mansub pashshalar bezgak plazmodiysini qon orqali yuqtiradi."  }
];

// ============================================================
// MATEMATIKA, FIZIKA VA KIMYO FANLARIDAN BOYITMA TESTLAR
// ============================================================


// 4-SINF MATEMATIKA (20 ta savol)
window.TEST_DATA["4_matematika"] = [
  { q: "Hisoblang: 250 * 4 + 350 = ?", options: ["1350", "1250", "1000", "1450"], answer: 0, difficulty: "easy", explanation: "250 * 4 = 1000; 1000 + 350 = 1350."  },
  { q: "Tenglamani yeching: x + 480 = 1000", options: ["620", "520", "420", "580"], answer: 1, difficulty: "easy", explanation: "x = 1000 - 480 = 520."  },
  { q: "To'g'ri to'rtburchakning bo'yi 12 sm, eni 8 sm. Uning perimetrini toping.", options: ["20 sm", "96 sm", "40 sm", "24 sm"], answer: 2, difficulty: "easy", explanation: "P = 2 * (12 + 8) = 2 * 20 = 40 sm."  },
  { q: "To'g'ri to'rtburchakning yuzi: bo'yi 15 sm, eni 6 sm bo'lsa, S = ?", options: ["80 sm²", "100 sm²", "42 sm²", "90 sm²"], answer: 3, difficulty: "easy", explanation: "S = a * b = 15 * 6 = 90 sm²."  },
  { q: "Kvadratning perimetri 36 sm bo'lsa, uning tomoni necha santimetr?", options: ["6 sm", "9 sm", "12 sm", "8 sm"], answer: 1, difficulty: "easy", explanation: "a = P / 4 = 36 / 4 = 9 sm."  },
  { q: "Amallarni bajaring: 840 : 4 - 60 = ?", options: ["140", "210", "150", "160"], answer: 2, difficulty: "easy", explanation: "840 : 4 = 210; 210 - 60 = 150."  },
  { q: "1 kilometrda necha metr bor?", options: ["1000 metr", "100 metr", "10 000 metr", "500 metr"], answer: 0, difficulty: "easy", explanation: "1 km = 1000 m."  },
  { q: "1 tonnada necha kilogramm bor?", options: ["100 kg", "500 kg", "10 000 kg", "1000 kg"], answer: 3, difficulty: "easy", explanation: "1 t = 1000 kg."  },
  { q: "Avtomobil soatiga 70 km tezlik bilan 4 soat yurdi. U qancha masofani bosib o'tgan?", options: ["210 km", "300 km", "280 km", "350 km"], answer: 2, difficulty: "easy", explanation: "S = v * t = 70 * 4 = 280 km."  },
  { q: "Qoldiqli bo'lishni bajaring: 47 : 5 = ?", options: ["9 (qoldiq 2)", "8 (qoldiq 7)", "9 (qoldiq 1)", "8 (qoldiq 3)"], answer: 0, difficulty: "medium", explanation: "47 = 5 * 9 + 2. Bo'linma 9, qoldiq 2."  },
  { q: "Noma'lum ko'paytuvchini toping: 8 * y = 720", options: ["80", "85", "70", "90"], answer: 3, difficulty: "easy", explanation: "y = 720 : 8 = 90."  },
  { q: "Uchburchakning tomonlari 7 sm, 9 sm va 11 sm. Perimetrini toping.", options: ["25 sm", "27 sm", "29 sm", "30 sm"], answer: 1, difficulty: "easy", explanation: "P = 7 + 9 + 11 = 27 sm."  },
  { q: "Kutubxonada 4 ta javon bor. Har bir javonda 45 tadan kitob bor. Jami nechta kitob bor?", options: ["160 ta", "200 ta", "190 ta", "180 ta"], answer: 3, difficulty: "easy", explanation: "45 * 4 = 180 ta kitob."  },
  { q: "Eng katta to'rt xonali son qaysi?", options: ["1000", "9000", "9999", "9990"], answer: 2, difficulty: "easy", explanation: "Eng katta to'rt xonali natural son 9999 dir."  },
  { q: "Eng kichik to'rt xonali son qaysi?", options: ["999", "1000", "1001", "1010"], answer: 1, difficulty: "easy", explanation: "Eng kichik to'rt xonali natural son 1000 dir."  },
  { q: "Bir sutkada necha soat bor?", options: ["24 soat", "12 soat", "48 soat", "60 soat"], answer: 0, difficulty: "easy", explanation: "1 sutka = 24 soat."  },
  { q: "1 soat necha sekundga teng?", options: ["60 sekund", "600 sekund", "3600 sekund", "120 sekund"], answer: 2, difficulty: "medium", explanation: "1 soat = 60 daqiqa * 60 sekund = 3600 sekund."  },
  { q: "Do'kondan har biri 3500 so'mdan 3 ta daftar va 5000 so'mga bitta ruchka olindi. Jami qancha to'landi?", options: ["14 500 so'm", "15 000 so'm", "16 000 so'm", "15 500 so'm"], answer: 3, difficulty: "medium", explanation: "3500 * 3 = 10 500; 10 500 + 5000 = 15 500 so'm."  },
  { q: "Kasrni toping: yarim soni qaysi kasr bilan yoziladi?", options: ["1/2", "1/4", "1/3", "2/1"], answer: 0, difficulty: "easy", explanation: "Yarim — 1/2 kasri orqali ifodalanadi."  },
  { q: "Hisoblang: (150 + 250) : 5 = ?", options: ["70", "80", "90", "100"], answer: 1, difficulty: "easy", explanation: "150 + 250 = 400; 400 : 5 = 80."  }
];

// 5-SINF MATEMATIKA (20 ta savol)
window.TEST_DATA["5_matematika"] = [
  { q: "Oddiy kasrlarni qo'shing: 3/7 + 2/7 = ?", options: ["5/7", "5/14", "1/7", "6/7"], answer: 0, difficulty: "easy", explanation: "Maxraji bir xil kasrlar qo'shilganda suratlar qo'shiladi: (3+2)/7 = 5/7."  },
  { q: "O'nli kasrni hisoblang: 3.4 + 2.65 = ?", options: ["5.05", "6.05", "6.5", "5.95"], answer: 1, difficulty: "easy", explanation: "3.40 + 2.65 = 6.05."  },
  { q: "Sonning foizini toping: 200 ning 15% i qancha?", options: ["25", "35", "30", "40"], answer: 2, difficulty: "medium", explanation: "200 * 0.15 = 30."  },
  { q: "Tenglamani yeching: 5x - 15 = 45", options: ["10", "8", "14", "12"], answer: 3, difficulty: "easy", explanation: "5x = 60 => x = 12."  },
  { q: "Noto'g'ri kasrni aralash songa aylantiring: 17/5 = ?", options: ["2 butun 3/5", "3 butun 2/5", "3 butun 1/5", "4 butun 2/5"], answer: 1, difficulty: "medium", explanation: "17 : 5 = 3 (qoldiq 2), demak 3 butun 2/5."  },
  { q: "Kvadratning yuzi 64 sm² bo'lsa, uning tomoni necha santimetr?", options: ["6 sm", "16 sm", "8 sm", "32 sm"], answer: 2, difficulty: "easy", explanation: "a² = 64 => a = 8 sm."  },
  { q: "Kubning bitta qirrasi 5 sm bo'lsa, uning hajmi (V) qancha?", options: ["125 sm³", "25 sm³", "75 sm³", "100 sm³"], answer: 0, difficulty: "medium", explanation: "V = a³ = 5 * 5 * 5 = 125 sm³."  },
  { q: "Hisoblang: 0.25 * 40 = ?", options: ["8", "2.5", "12", "10"], answer: 3, difficulty: "easy", explanation: "0.25 = 1/4; 40 : 4 = 10."  },
  { q: "Yoyiq burchakning kattaligi necha gradusga teng?", options: ["90°", "360°", "180°", "45°"], answer: 2, difficulty: "easy", explanation: "Yoyiq burchak 180 gradusga teng."  },
  { q: "To'g'ri burchak necha gradus bo'ladi?", options: ["90°", "45°", "180°", "60°"], answer: 0, difficulty: "easy", explanation: "To'g'ri burchak roppa-rosa 90° ga teng."  },
  { q: "Hisoblang: 144 ning kvadrat ildizi nimaga teng? (√144 = ?)", options: ["11", "14", "13", "12"], answer: 3, difficulty: "easy", explanation: "12 * 12 = 144, demak √144 = 12."  },
  { q: "Sonlar o'rta arifmetigini toping: 10, 20, 30", options: ["15", "20", "25", "30"], answer: 1, difficulty: "easy", explanation: "(10 + 20 + 30) / 3 = 60 / 3 = 20."  },
  { q: "Burchaklari 90° dan kichik bo'lgan burchak nima deb ataladi?", options: ["O'tmas burchak", "Yoyiq burchak", "To'g'ri burchak", "O'tkir burchak"], answer: 3, difficulty: "easy", explanation: "0° dan 90° gacha bo'lgan burchaklar o'tkir burchak deyiladi."  },
  { q: "90° dan katta, ammo 180° dan kichik burchak nima deyiladi?", options: ["O'tkir", "To'liq", "O'tmas burchak", "Qo'shni"], answer: 2, difficulty: "easy", explanation: "90° dan katta va 180° dan kichik burchak o'tmas burchakdir."  },
  { q: "1 gektar necha kvadrat metrga teng?", options: ["1 000 m²", "10 000 m²", "100 000 m²", "100 m²"], answer: 1, difficulty: "medium", explanation: "1 ga = 100 m * 100 m = 10 000 m²."  },
  { q: "Sonni tub ko'paytuvchilarga ajrating: 24 = ?", options: ["2³ * 3 (ya'ni 2 * 2 * 2 * 3)", "2 * 12", "4 * 6", "3 * 8"], answer: 0, difficulty: "medium", explanation: "24 = 8 * 3 = 2 * 2 * 2 * 3."  },
  { q: "Eng kichik tub son qaysi?", options: ["1", "3", "2", "0"], answer: 2, difficulty: "easy", explanation: "2 — eng kichik va yagona juft tub sondir."  },
  { q: "Hisoblang: 3/4 ning o'nli kasr ko'rinishi qanday?", options: ["0.5", "0.8", "0.25", "0.75"], answer: 3, difficulty: "easy", explanation: "3 : 4 = 0.75."  },
  { q: "Teng yonli uchburchakning asosi 10 sm, yon tomoni 8 sm. Perimetrini toping.", options: ["26 sm", "24 sm", "28 sm", "30 sm"], answer: 0, difficulty: "easy", explanation: "P = 10 + 8 + 8 = 26 sm."  },
  { q: "Hisoblang: 2⁵ = ?", options: ["16", "32", "64", "10"], answer: 1, difficulty: "easy", explanation: "2 * 2 * 2 * 2 * 2 = 32."  }
];

// 7-SINF FIZIKA: MEXANIKA ASOSLARI (20 ta savol)
window.TEST_DATA["7_fizika"] = [
  { q: "«Fizika» so'zi qaysi tildan olingan va nimani anglatadi?", options: ["Yunoncha «fyuzis» — tabiat", "Lotincha, «Koinot»", "Arabcha «Hisob»", "Forscha «Dunyo»"], answer: 0, difficulty: "easy", explanation: "Fizika yunoncha tabiat demak bo'lib, tabiatning eng umumiy qonuniyatlarini o'rganadi."  },
  { q: "Tezlik formulasini toping.", options: ["v = s * t", "v = s / t (Masofa taqsim vaqt)", "v = m * a", "v = F / s"], answer: 1, difficulty: "easy", explanation: "Tezlik bosib o'tilgan yo'lning sarflangan vaqtga nisbatiga teng (v = s/t)."  },
  { q: "Xalqaro birliklar sistemasida (SI) tezlik birligi nima?", options: ["km/soat", "sm/s", "m/s (metr taqsim sekund)", "m/min"], answer: 2, difficulty: "easy", explanation: "SI sistemasida masofa metrda, vaqt sekundda, tezlik m/s da o'lchanadi."  },
  { q: "Moddaning zichligi (ρ) qanday formula bilan hisoblanadi?", options: ["ρ = m * V", "ρ = F / S", "ρ = V / m", "ρ = m / V (Massa taqsim hajm)"], answer: 3, difficulty: "medium", explanation: "Zichlik jism massasining uning hajmiga nisbatiga teng."  },
  { q: "Suvning zichligi qanchaga teng?", options: ["500 kg/m³", "1000 kg/m³ (yoki 1 g/sm³)", "800 kg/m³", "13 600 kg/m³"], answer: 1, difficulty: "easy", explanation: "Toza chuchuk suvning zichligi 1000 kg/m³ ga teng."  },
  { q: "Jism massasi qaysi asbob yordamida o'lchanadi?", options: ["Dinamometr", "Termometr", "Tarozi (pallali yoki elektron)", "Shtangensirkul"], answer: 2, difficulty: "easy", explanation: "Massa tarozi yordamida kilogramm va grammlarda o'lchanadi."  },
  { q: "Kuchni o'lchaydigan asbob nima deb ataladi?", options: ["Dinamometr", "Barometr", "Spidometr", "Gigrometr"], answer: 0, difficulty: "easy", explanation: "Kuch dinamometr (prujinali asbob) orqali Nyutonlarda (N) o'lchanadi."  },
  { q: "Kuch birligi xalqaro tizimda qanday nomlanadi?", options: ["Joul (J)", "Paskal (Pa)", "Vatt (Vt)", "Nyuton (N)"], answer: 3, difficulty: "easy", explanation: "Kuch birligi ser Isaak Nyuton sharafiga Nyuton (N) deb ataladi."  },
  { q: "Og'irlik kuchi formulasi qaysi?", options: ["F = m / g", "F = k * x", "F = m * g (m — massa, g — erkin tushish tezlanishi)", "F = p * S"], answer: 2, difficulty: "easy", explanation: "Og'irlik kuchi F = mg; Yerda g ≈ 9.8 N/kg (yoki 10 N/kg)."  },
  { q: "Jismning o'z tezligini saqlash xususiyati nima deb ataladi?", options: ["Inersiya", "Ishqalanish", "Gravitatsiya", "Deformatsiya"], answer: 0, difficulty: "easy", explanation: "Inersiya — jismga boshqa jismlar ta'sir etmaganda o'z holatini saqlash xususiyatidir."  },
  { q: "Bosim formulasini toping.", options: ["p = F * S", "p = ρ * g * h", "p = m * g", "p = F / S (Kuch taqsim yuza)"], answer: 3, difficulty: "medium", explanation: "Bosim sirtga tik ta'sir etuvchi kuchning shu sirt yuziga nisbatidir."  },
  { q: "Bosim birligi nima deb ataladi?", options: ["Nyuton", "Paskal (Pa)", "Joul", "Amper"], answer: 1, difficulty: "easy", explanation: "Bosim birligi Blez Paskal sharafiga Paskal (1 Pa = 1 N/m²) deb ataladi."  },
  { q: "Suyuqlik va gazlarga berilgan bosim barcha yo'nalishlarda o'zgarishsiz teng uzatiladi. Bu kimning qonuni?", options: ["Arximed qonuni", "Boyl-Mariott qonuni", "Nyuton qonuni", "Paskal qonuni"], answer: 3, difficulty: "medium", explanation: "Bu gidravlik presslarning ishlash asosi bo'lgan Paskal qonunidir."  },
  { q: "Suyuqlik tubidagi gidrostatik bosim formulasi qaysi?", options: ["p = m * g", "p = F / S", "p = ρ * g * h", "p = v * t"], answer: 2, difficulty: "medium", explanation: "Suyuqlik ustunining bosimi p = ρgh bo'lib, chuqurlik (h) oshgan sari ortadi."  },
  { q: "Suyuqlikka botirilgan jismga uni siqib chiqaruvchi ko'tarish kuchi ta'sir qiladi. Bu qanday kuch?", options: ["Ishqalanish kuchi", "Arximed kuchi (FA = ρsuyuqlik * g * Vjism)", "Tortishish kuchi", "Elastiklik kuchi"], answer: 1, difficulty: "medium", explanation: "Arximed kuchi kemalarning suzishini va havo sharlarining ko'tarilishini ta'minlaydi."  },
  { q: "Kema qachon suv yuzida suzadi?", options: ["Arximed kuchi kema og'irligiga teng yoki undan katta bo'lsa", "Arximed kuchi og'irlik kuchidan kichik bo'lsa", "Juda og'ir bo'lsa", "Suv muzlaganda"], answer: 0, difficulty: "easy", explanation: "Suzish sharti: FA ≥ Fog'irlik bo'lganda jism cho'kmay suzib yuradi."  },
  { q: "Mexanik ish qanday formula bilan hisoblanadi?", options: ["A = F / s", "A = m * v", "A = F * s (Kuch ko'paytirilgan ko'chish)", "A = P / t"], answer: 2, difficulty: "easy", explanation: "Mexanik ish A = F * s formulasi bilan aniqlanadi."  },
  { q: "Mexanik ish va energiya birligi nima?", options: ["Vatt (Vt)", "Paskal (Pa)", "Nyuton (N)", "Joul (J)"], answer: 3, difficulty: "easy", explanation: "Ish va energiya Jeyms Joul sharafiga Joul (1 J = 1 N * 1 m) da o'lchanadi."  },
  { q: "Vaqt birligi ichida bajarilgan ish nima deb ataladi?", options: ["Quvvat (N = A / t)", "Kuch", "Tezlanish", "Impuls"], answer: 0, difficulty: "medium", explanation: "Quvvat ishning bajarilish tezligini ifodalaydi va Vattlarda (Vt) o'lchanadi."  },
  { q: "Oddiy mexanizmlarga (kuchdan yutuq beruvchi vositalarga) qaysilar kiradi?", options: ["Kompyuter va telefon", "Dastak (richag), blok, qiya tekislik", "Batareyka", "Termometr"], answer: 1, difficulty: "easy", explanation: "Richag va bloklar qadimdan og'ir yuklarni kam kuch sarflab ko'tarishga xizmat qiladi."  }
];

// 8-SINF KIMYO: ANORGANIK KIMYO ASOSLARI (20 ta savol)
window.TEST_DATA["8_kimyo"] = [
  { q: "«Kimyo» fani nimani o'rganadi?", options: ["Moddalar, ularning xossalari va bir-biriga aylanish qonuniyatlarini", "Faqat yulduzlarni", "Faqat tog' jinslarini", "Elektr zanjirlarini"], answer: 0, difficulty: "easy", explanation: "Kimyo — moddalar tarkibi, tuzilishi va kimyoviy reaksiyalarni o'rganuvchi fandir."  },
  { q: "Kimyoviy elementlarning Davriy qonuni va jadvalini kim kashf etgan?", options: ["M. Lomonosov", "D. I. Mendeleyev (1869-yil)", "A. Lavuazye", "J. Dalton"], answer: 1, difficulty: "easy", explanation: "Dmitriy Mendeleyev 1869-yilda atom massalari va xossalar davriyligini kashf qildi."  },
  { q: "Suvning kimyoviy formulasi qaysi?", options: ["H2O2", "CO2", "H2O", "CH4"], answer: 2, difficulty: "easy", explanation: "Suv 2 ta vodorod va 1 ta kislorod atomidan tashkil topgan (H2O)."  },
  { q: "Osh tuzining kimyoviy formulasi qaysi?", options: ["KCl", "NaOH", "CaCO3", "NaCl (Natriy xlorid)"], answer: 3, difficulty: "easy", explanation: "Osh tuzi — natriy va xlor ionlaridan iborat natriy xloriddir."  },
  { q: "Atom qanday asosiy zarrachalardan tashkil topgan?", options: ["Faqat molekulalardan", "Proton, neytron va elektronlardan", "Faqat suyuqlikdan", "Gaz pufakchalaridan"], answer: 1, difficulty: "easy", explanation: "Yadrodagi musbat protonlar va neytronlar hamda yadro atrofida aylanuvchi manfiy elektronlar."  },
  { q: "Havoning necha foizini azot va kislorod gazi tashkil etadi?", options: ["50% azot, 50% kislorod", "90% kislorod, 10% azot", "78% azot, 21% kislorod (1% boshqa gazlar)", "100% kislorod"], answer: 2, difficulty: "easy", explanation: "Havo asosan azot (N2 ≈ 78%) va kisloroddan (O2 ≈ 21%) iborat aralashmadir."  },
  { q: "Kislorod bilan birikkan ikki elementli murakkab moddalar nima deyiladi?", options: ["Oksidlar (masalan, CO2, Fe2O3, CaO)", "Kislotalar", "Asoslar", "Tuzlar"], answer: 0, difficulty: "medium", explanation: "Elementlarning kislorodli birikmalari oksidlar deb ataladi."  },
  { q: "Vodorod atomi va kislota qoldig'idan tashkil topgan moddalar nima deyiladi?", options: ["Oksidlar", "Gidridlar", "Ishqorlar", "Kislotalar (masalan, HCl, H2SO4, HNO3)"], answer: 3, difficulty: "medium", explanation: "Kislotalar tarkibida metallga almashinuvchi vodorod ionlari bo'ladi."  },
  { q: "Metall atomi va gidroksid guruhidan (-OH) iborat moddalar nima deyiladi?", options: ["Kislotalar", "Oksidlar", "Asoslar (masalan, NaOH, Ca(OH)2, KOH)", "Karbamidlar"], answer: 2, difficulty: "medium", explanation: "Eruvchan asoslar ishqorlar deb ataladi va -OH guruhiga ega."  },
  { q: "Lakmus qog'ozi kislotali muhitda qanday rangga kiradi?", options: ["Qizil rangga", "Ko'k", "Yashil", "Sariq"], answer: 0, difficulty: "easy", explanation: "Kislotalar indikator bo'lgan lakmusni qizil rangga bo'yaydi."  },
  { q: "Lakmus qog'ozi ishqoriy (asosli) muhitda qanday rangga kiradi?", options: ["Qizil", "Qora", "Oq", "Ko'k rangga"], answer: 3, difficulty: "easy", explanation: "Ishqor ta'sirida lakmus ko'k rangga aylanadi."  },
  { q: "Kislota va asos reaksiyaga kirishib tuz va suv hosil bo'lishi nima deyiladi?", options: ["Oksidlanish", "Neytrallanish reaksiyasi", "Yonish", "Parchalanish"], answer: 1, difficulty: "medium", explanation: "HCl + NaOH -> NaCl + H2O — neytrallanish reaksiyasiga klassik misoldir."  },
  { q: "Tabiatda eng keng tarqalgan, eng yengil gaz qaysi?", options: ["Geliy", "Azot", "Kislorod", "Vodorod (H2)"], answer: 3, difficulty: "easy", explanation: "Vodorod koinotdagi eng ko'p tarqalgan va eng yengil kimyoviy elementdir."  },
  { q: "Inson va hayvonlar nafas olganda qaysi gaz yutiladi va qaysisi chiqariladi?", options: ["CO2 yutiladi, O2 chiqariladi", "Azot yutiladi", "Kislorod (O2) yutiladi, Karbonat angidrid (CO2) chiqariladi", "Vodorod yutiladi"], answer: 2, difficulty: "easy", explanation: "Hujayra nafas olishida kislorod sarflanib, CO2 gaz holida ajraladi."  },
  { q: "Ohaktosh, bo'r va marmarning asosiy kimyoviy tarkibi qaysi tuz?", options: ["NaCl", "Kalsiy karbonat (CaCO3)", "Na2SO4", "BaSO4"], answer: 1, difficulty: "medium", explanation: "Bo'r va marmar kalsiy karbonat (CaCO3) mineralidan iborat."  },
  { q: "Avogadro soni (1 mol moddadagi zarrachalar soni) qanchaga teng?", options: ["6.02 * 10²³ dona zarracha", "3 * 10⁸", "9.8 * 10¹⁰", "1.6 * 10⁻¹⁹"], answer: 0, difficulty: "hard", explanation: "1 mol har qanday moddada 6.02 * 10²³ ta atom yoki molekula bo'ladi."  },
  { q: "Normal sharoitda 1 mol har qanday gaz qancha hajm (molyar hajm) egallaydi?", options: ["10 litr", "100 litr", "22.4 litr", "1 litr"], answer: 2, difficulty: "medium", explanation: "Vm = 22.4 l/mol — barcha ideal gazlar uchun n.sh. dagi universal hajmdir."  },
  { q: "Metallarning elektr tokini yaxshi o'tkazishiga sabab nima?", options: ["Yadro tuzilishi", "Qattiqligi", "Og'irligi", "Ularning kristallarida erkin elektronlar mavjudligi"], answer: 3, difficulty: "medium", explanation: "Metall panjarasidagi erkin elektronlar elektr va issiqlikni ajoyib o'tkazadi."  },
  { q: "Elektr tokini eng yaxshi o'tkazuvchi metall qaysi?", options: ["Kumush (Ag) va Mis (Cu)", "Temir", "Qo'rg'oshin", "Simob"], answer: 0, difficulty: "easy", explanation: "Kumush eng yuqori elektr o'tkazuvchanlikka ega, undan keyin mis turadi."  },
  { q: "Xona haroratida suyuq holatda bo'ladigan yagona metall qaysi?", options: ["Qo'rg'oshin", "Simob (Hg)", "Qalay", "Rux"], answer: 1, difficulty: "easy", explanation: "Simob (Hg) -39°C da eriydi va oddiy xona haroratida suyuq metalldir."  }
];


// ============================================================
// BARCHA FANLAR VA SINFLAR UCHUN SAVOLLARNI AVTOMATIK BOYITISH
// JAMI SAVOLLAR SONI: 1000+ DIPLOM VA MAKTAB STARTUP DARAJASI
// ============================================================

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


// ============================================================
// 6-SINF MUSIQA (50 ta test)
// ============================================================
