/**
 * 30-IDUM Maktab Test Platformasi
 * Akkauntlar va Reyting Tizimi (Accounts & Leaderboard System)
 * 
 * Imkoniyatlar:
 * 1. 707 ta o'quvchi maktabning 24 ta parallel sinfiga to'liq taqsimlangan (har bir sinfda 29-30 tadan o'quvchi).
 * 2. Har bir sinf bo'yicha tahlil (masalan: 7-B sinfiga kirilganda):
 *    - 🔥 Kim ko'p harakat qilgan (Top a'lochilar, yuqori ball va ko'p test yechganlar)
 *    - ⚠️ Kim eng kam harakat qilgan (Kam test yechgan yoki hali boshlamagan, e'tibor talab o'quvchilar)
 *    - 📋 Sinfning barcha 29-30 ta o'quvchisi to'liq reyting jadvali va filtrlari.
 * 3. 24 ta parallel sinf reytingi (1-A, 1-B, 1-D, 2-A, 2-B, 3-A, 3-B, 4-A, 4-B, 5-A, 5-B, 5-D, 6-A, 6-B, 7-A, 7-B, 8-A, 8-B, 9-A, 9-B, 10-A, 10-B, 11-A, 11-B).
 * 4. O'quvchilar reytingi (O'zi bo'yicha - shaxsiy o'rin, ballar, filtrlash).
 * 5. Reyting drawerida to'g'ridan-to'g'ri sinf ichiga kirish va orqaga qaytish.
 */

(function() {
  'use strict';

  var STORAGE_KEY_ACCOUNTS = 'maktab30_accounts_707_v6';
  var STORAGE_KEY_CURRENT = 'maktab30_current_account_id_v6';

  // 30-maktabning barcha 24 ta parallel sinflari ro'yxati
  // 14 ta sinfda 29 ta o'quvchi (406), 10 ta sinfda 28 ta o'quvchi (280) = Jami 707 ta o'quvchi!
  // 30-maktabning barcha 24 ta parallel sinflari ro'yxati
  // Barcha sinflarda 29 yoki 30 tadan o'quvchi (11 ta sinfda 30, 13 ta sinfda 29) = Jami 707 ta o'quvchi!
  var SCHOOL_CLASSES = [
    { grade: 1, letter: 'A', id: '1-A', name: '1-A sinf', targetStudents: 30 },
    { grade: 1, letter: 'B', id: '1-B', name: '1-B sinf', targetStudents: 29 },
    { grade: 1, letter: 'D', id: '1-D', name: '1-D sinf', targetStudents: 29 },

    { grade: 2, letter: 'A', id: '2-A', name: '2-A sinf', targetStudents: 30 },
    { grade: 2, letter: 'B', id: '2-B', name: '2-B sinf', targetStudents: 29 },

    { grade: 3, letter: 'A', id: '3-A', name: '3-A sinf', targetStudents: 30 },
    { grade: 3, letter: 'B', id: '3-B', name: '3-B sinf', targetStudents: 29 },

    { grade: 4, letter: 'A', id: '4-A', name: '4-A sinf', targetStudents: 30 },
    { grade: 4, letter: 'B', id: '4-B', name: '4-B sinf', targetStudents: 29 },

    { grade: 5, letter: 'A', id: '5-A', name: '5-A sinf', targetStudents: 30 },
    { grade: 5, letter: 'B', id: '5-B', name: '5-B sinf', targetStudents: 29 },
    { grade: 5, letter: 'D', id: '5-D', name: '5-D sinf', targetStudents: 29 },

    { grade: 6, letter: 'A', id: '6-A', name: '6-A sinf', targetStudents: 30 },
    { grade: 6, letter: 'B', id: '6-B', name: '6-B sinf', targetStudents: 29 },

    { grade: 7, letter: 'A', id: '7-A', name: '7-A sinf', targetStudents: 30 },
    { grade: 7, letter: 'B', id: '7-B', name: '7-B sinf', targetStudents: 29 },

    { grade: 8, letter: 'A', id: '8-A', name: '8-A sinf', targetStudents: 30 },
    { grade: 8, letter: 'B', id: '8-B', name: '8-B sinf', targetStudents: 29 },

    { grade: 9, letter: 'A', id: '9-A', name: '9-A sinf', targetStudents: 30 },
    { grade: 9, letter: 'B', id: '9-B', name: '9-B sinf', targetStudents: 29 },

    { grade: 10, letter: 'A', id: '10-A', name: '10-A sinf', targetStudents: 30 },
    { grade: 10, letter: 'B', id: '10-B', name: '10-B sinf', targetStudents: 29 },

    { grade: 11, letter: 'A', id: '11-A', name: '11-A sinf', targetStudents: 30 },
    { grade: 11, letter: 'B', id: '11-B', name: '11-B sinf', targetStudents: 29 }
  ];

  var BOY_NAMES = [
    'Jasur', 'Sardor', 'Behruz', 'Shoxrux', 'Dilshod', 'Otabek', 'Farrux', 'Javohir', 
    'Bobur', 'Sherzod', 'Azizbek', 'Temur', 'Alisher', 'Bekzod', 'Rustam', 'Kamron', 
    'Asilbek', 'Doston', 'Doniyor', 'Sanjar', 'Eldor', 'Abbos', 'Anvar', 'Bunyod', 
    'Shahzod', 'Mirjalol', 'Ulug\'bek', 'Umid', 'Bilol', 'Muzaffar', 'Jamshid', 
    'Shohjahon', 'Humoyun', 'Akbar', 'Davron', 'Ilhom', 'Nodir', 'Zafar', 'Sarvar', 
    'Xurshid', 'Jahongir', 'Samandar', 'Abror', 'Asror', 'Asadbek', 'Suhrob', 
    'Baxtiyor', 'Botir', 'Mansur', 'Islom'
  ];

  var GIRL_NAMES = [
    'Madina', 'Rayhona', 'Laylo', 'Zilola', 'Sabrina', 'Sevinch', 'Diyora', 'Mohira', 
    'Umida', 'Shahzoda', 'Farangiz', 'Kamola', 'Nilufar', 'Malika', 'Gulnoza', 'Dilnoza', 
    'Nozima', 'Shahlo', 'Zarina', 'Feruza', 'Durdona', 'Go\'zal', 'Zarnigor', 'Munira', 
    'Charos', 'Sitora', 'Sarvinoz', 'Robiya', 'Mohinur', 'Gulbahor', 'Parizoda', 
    'Marjona', 'Shaxzoda', 'Asila', 'Dilrabo', 'Lola', 'Zulfiya', 'Rushana', 'Samira', 
    'Ruxshona', 'Sabina', 'Dinora', 'Rayhon', 'Mushtariy', 'Gulsevar', 'Bonu', 
    'Zumrad', 'Shahina', 'Iroda', 'Saodat'
  ];

  var SURNAMES_MALE = [
    'Aliyev', 'Karimov', 'Yusupov', 'Toirov', 'Saidov', 'Qobilov', 'Ahmedov', 'Mirzayev', 
    'Zokirov', 'Ergashov', 'Rahimov', 'Rustamov', 'Umarov', 'Xoliqov', 'Mahmudov', 'Ismoilov', 
    'Shodiyev', 'Nurmatov', 'Nazarov', 'Yoqubov', 'Sobirov', 'Vohidov', 'Qodirov', 'Tursunov', 
    'Xolmatov', 'Bozorov', 'Jo\'rayev', 'G\'aniyev', 'Sultonov', 'Bekmurodov', 'Oripov', 
    'Boboyev', 'Jalolov', 'Haydarov', 'Mamatov', 'Samadov', 'Qosimov', 'Normatov', 'Xasanov', 'Husanov'
  ];

  var SURNAMES_FEMALE = [
    'Aliyeva', 'Karimova', 'Yusupova', 'Toirova', 'Saidova', 'Qobilova', 'Ahmedova', 'Mirzayeva', 
    'Zokirova', 'Ergashova', 'Rahimova', 'Rustamova', 'Umarova', 'Xoliqova', 'Mahmudova', 'Ismoilova', 
    'Shodiyeva', 'Nurmatova', 'Nazarova', 'Yoqubova', 'Sobirova', 'Vohidova', 'Qodirova', 'Tursunova', 
    'Xolmatova', 'Bozorova', 'Jo\'rayeva', 'G\'aniyeva', 'Sultonova', 'Bekmurodova', 'Oripova', 
    'Boboyeva', 'Jalolova', 'Haydarova', 'Mamatova', 'Samadova', 'Qosimova', 'Normatova', 'Xasanova', 'Husanova'
  ];

  var AVATARS = ['🎓', '👨‍🎓', '👩‍🎓', '🧑‍💻', '👩‍💻', '🌟', '⚡', '🚀', '🔬', '📘', '💡', '🏆', '🎯', '🦁', '🦅', '🐱', '🐬', '🥇'];

  // 707 ta deterministik o'quvchini generatsiya qilish
  function generate707StudentsDatabase() {
    var list = [];
    var idCounter = 1;

    for (var cIdx = 0; cIdx < SCHOOL_CLASSES.length; cIdx++) {
      var sc = SCHOOL_CLASSES[cIdx];
      var count = sc.targetStudents; // 29 yoki 28

      for (var i = 0; i < count; i++) {
        var isGirl = ((cIdx * 7 + i) % 2 === 1);
        var fn = isGirl 
          ? GIRL_NAMES[(cIdx * 5 + i * 3) % GIRL_NAMES.length] 
          : BOY_NAMES[(cIdx * 7 + i * 2) % BOY_NAMES.length];
        var ln = isGirl 
          ? SURNAMES_FEMALE[(cIdx * 3 + i * 4) % SURNAMES_FEMALE.length] 
          : SURNAMES_MALE[(cIdx * 4 + i * 3) % SURNAMES_MALE.length];
        var av = AVATARS[(cIdx + i) % AVATARS.length];

        var effort = 'medium';
        var tests = 5;
        var acc = 80;
        var score = 500;

        // Top 5 o'quvchilar: Katta harakat qilganlar (A'lochilar)
        if (i < 5) {
          effort = 'high';
          tests = 26 - (i * 2) + ((sc.grade * 3) % 5); // 18 - 30 ta test
          acc = Math.min(99, 93 + (5 - i) + (sc.grade % 3)); // 94% - 99%
          score = Math.round(tests * 95 + ((5 - i) * 130) + (sc.grade * 30)); // 1,600 - 3,200 ball
        } 
        // Oxirgi 6 o'quvchilar: Eng kam harakat qilganlar (Qoloqlar / e'tibor talab)
        else if (i >= count - 6) {
          effort = 'low';
          if (i === count - 1) {
            // Eng oxirgi o'quvchi: hali boshlamagan
            tests = 0;
            acc = 0;
            score = 0;
          } else if (i === count - 2) {
            tests = 1;
            acc = 40;
            score = 40;
          } else {
            tests = (i % 2 === 0 ? 1 : 2);
            acc = 45 + ((i * 3) % 20); // 45% - 65%
            score = Math.round(tests * 45 + ((count - 1 - i) * 15)); // 50 - 140 ball
          }
        } 
        // O'rtacha harakat qilganlar
        else {
          effort = 'medium';
          tests = Math.max(3, Math.round(14 - ((i - 5) * 0.6) + ((sc.grade + i) % 3))); // 4 - 14 ta test
          acc = 74 + ((sc.grade * 2 + i) % 15); // 74% - 88%
          score = Math.round(tests * 75 + ((count - i) * 14) + (sc.grade * 15)); // 400 - 1,250 ball
        }

        list.push({
          id: 'st_707_' + (idCounter++),
          firstName: fn,
          lastName: ln,
          grade: sc.grade,
          classLetter: sc.letter,
          classId: sc.id,
          age: sc.grade + 6,
          avatar: av,
          score: score,
          testsCompleted: tests,
          accuracy: acc,
          effortLevel: effort,
          isDefault: true
        });
      }
    }

    return list;
  }

  var AccountsManager = {
    accounts: [],
    currentId: null,
    currentTab: 'students', // 'students', 'classes', yoki 'class_detail'
    studentGradeFilter: 'all', // 'all', '1', '2', ..., '11'
    classGradeFilter: 'all',   // 'all', '1', '2', ..., '11'

    // Sinf tahlili holati
    selectedDetailClass: '7-B', // Standart 7-B sinf
    selectedEffortFilter: 'all', // 'all', 'high', 'medium', 'low'
    detailSearchQuery: '',

    init: function() {
      this.loadAccounts();
      this.syncWithOldProfile();
      this.bindUI();
      this.updateNavbarChip();
      this.updateFloatingBtn();
      this.renderLeaderboardDrawer();
    },

    loadAccounts: function() {
      try {
        var raw = localStorage.getItem(STORAGE_KEY_ACCOUNTS);
        if (raw) {
          this.accounts = JSON.parse(raw);
        }
      } catch (e) {
        this.accounts = [];
      }

      // Agar baza bo'lmasa yoki 600 dan kam bo'lsa, to'liq 707 ta o'quvchini generatsiya qilamiz
      if (!this.accounts || !Array.isArray(this.accounts) || this.accounts.length < 700) {
        this.accounts = generate707StudentsDatabase();
        this.saveAccounts();
      }

      try {
        this.currentId = localStorage.getItem(STORAGE_KEY_CURRENT);
      } catch (e) {
        this.currentId = null;
      }

      if (!this.currentId || !this.getAccountById(this.currentId)) {
        this.currentId = this.accounts[0].id;
        this.saveCurrentId();
      }
    },

    saveAccounts: function() {
      try {
        localStorage.setItem(STORAGE_KEY_ACCOUNTS, JSON.stringify(this.accounts));
      } catch (e) {}
    },

    saveCurrentId: function() {
      try {
        if (this.currentId) {
          localStorage.setItem(STORAGE_KEY_CURRENT, this.currentId);
        } else {
          localStorage.removeItem(STORAGE_KEY_CURRENT);
        }
      } catch (e) {}
    },

    // Oldingi maktab30_student_profile mavjud bo'lsa, uni sinf harfi bilan yangilash va bazaga qo'shish
    syncWithOldProfile: function() {
      try {
        var oldProf = JSON.parse(localStorage.getItem('maktab30_student_profile'));
        if (oldProf && oldProf.firstName && oldProf.lastName) {
          var letter = oldProf.classLetter || 'A';
          var grade = parseInt(oldProf.grade, 10) || 6;
          var classId = grade + '-' + letter;

          var existing = this.accounts.find(function(a) {
            return a.firstName.toLowerCase() === oldProf.firstName.toLowerCase() &&
                   a.lastName.toLowerCase() === oldProf.lastName.toLowerCase();
          });

          if (!existing) {
            var newAcc = {
              id: 'acc_user_' + Date.now(),
              firstName: oldProf.firstName,
              lastName: oldProf.lastName,
              age: parseInt(oldProf.age, 10) || (grade + 6),
              grade: grade,
              classLetter: letter,
              classId: classId,
              avatar: oldProf.avatar || '🎓',
              score: oldProf.score || 450,
              testsCompleted: 4,
              accuracy: 92,
              effortLevel: 'medium',
              createdAt: new Date().toISOString(),
              isUser: true
            };
            this.accounts.unshift(newAcc);
            this.currentId = newAcc.id;
            this.saveAccounts();
            this.saveCurrentId();
          } else {
            existing.grade = grade;
            existing.classLetter = letter;
            existing.classId = classId;
            existing.age = parseInt(oldProf.age, 10) || existing.age;
            existing.isUser = true;
            this.currentId = existing.id;
            this.saveAccounts();
            this.saveCurrentId();
          }
        }
      } catch (e) {}
    },

    getCurrentAccount: function() {
      var acc = this.getAccountById(this.currentId);
      if (!acc && this.accounts.length > 0) {
        acc = this.accounts[0];
        this.currentId = acc.id;
      }
      return acc;
    },

    getAccountById: function(id) {
      if (!id) return null;
      return this.accounts.find(function(a) { return a.id === id; }) || null;
    },

    createAccount: function(data) {
      var id = 'acc_' + Date.now();
      var grade = parseInt(data.grade, 10) || 8;
      var letter = data.classLetter || 'A';
      if (grade !== 1 && grade !== 5 && letter === 'D') {
        letter = 'A';
      }

      var newAcc = {
        id: id,
        firstName: (data.firstName || "O'quvchi").trim(),
        lastName: (data.lastName || "").trim(),
        grade: grade,
        classLetter: letter,
        classId: grade + '-' + letter,
        age: parseInt(data.age, 10) || (grade + 6),
        avatar: data.avatar || '🎓',
        score: parseInt(data.score, 10) || 0,
        testsCompleted: 0,
        accuracy: 0,
        effortLevel: 'low',
        createdAt: new Date().toISOString(),
        isUser: true
      };

      this.accounts.unshift(newAcc);
      this.currentId = id;
      this.saveAccounts();
      this.saveCurrentId();
      this.syncToOldFormat(newAcc);
      this.updateNavbarChip();
      this.updateFloatingBtn();
      this.renderLeaderboardDrawer();
      return newAcc;
    },

    switchAccount: function(id) {
      var acc = this.getAccountById(id);
      if (acc) {
        this.currentId = id;
        this.saveCurrentId();
        this.syncToOldFormat(acc);
        this.updateNavbarChip();
        this.updateFloatingBtn();
        this.renderLeaderboardDrawer();
        if (typeof window.applyStudentProfile === 'function') {
          window.applyStudentProfile(acc);
        }
      }
    },

    syncToOldFormat: function(acc) {
      try {
        var profile = {
          firstName: acc.firstName,
          lastName: acc.lastName,
          age: acc.age,
          grade: acc.grade,
          classLetter: acc.classLetter || 'A',
          schoolYear: '2026-2027',
          avatar: acc.avatar || '🎓',
          score: acc.score || 0,
          savedAt: new Date().toISOString()
        };
        localStorage.setItem('maktab30_student_profile', JSON.stringify(profile));
      } catch (e) {}
    },

    // Ball qo'shish (Gamification)
    addScore: function(points, reason) {
      var acc = this.getCurrentAccount();
      if (!acc) return;

      points = parseInt(points, 10) || 0;
      if (points <= 0) return;

      acc.score = (acc.score || 0) + points;
      acc.testsCompleted = (acc.testsCompleted || 0) + 1;
      acc.lastActive = new Date().toISOString();

      // Harakat darajasini yangilash
      if (acc.testsCompleted >= 10 || acc.score >= 1200) {
        acc.effortLevel = 'high';
      } else if (acc.testsCompleted >= 3 || acc.score >= 300) {
        acc.effortLevel = 'medium';
      }

      this.saveAccounts();
      this.syncToOldFormat(acc);
      this.updateNavbarChip();
      this.updateFloatingBtn();
      this.renderLeaderboardDrawer();

      // Agar ochiq bo'lsa sinf tahlilini ham yangilash
      if (this.currentTab === 'class_detail') {
        this.renderClassDetail(this.selectedDetailClass);
      }

      if (window.showToast) {
        window.showToast('+' + points + ' ball to\'plandi! (' + (reason || 'Test yakunlandi') + ')', 'success');
      }
      if (window.AchievementsManager && acc && (acc.score || 0) >= 1000) {
        window.AchievementsManager.unlock('champion');
      }
    },

    // O'quvchining umumiy o'rni
    getStudentRank: function(id) {
      var sorted = this.getStudentRankings('all');
      for (var i = 0; i < sorted.length; i++) {
        if (sorted[i].id === id) return i + 1;
      }
      return sorted.length;
    },

    // O'quvchilar reyting ro'yxati
    getStudentRankings: function(gradeFilter) {
      var list = this.accounts.slice();
      if (gradeFilter && gradeFilter !== 'all') {
        var g = parseInt(gradeFilter, 10);
        list = list.filter(function(a) { return a.grade === g; });
      }
      list.sort(function(a, b) {
        return (b.score || 0) - (a.score || 0);
      });
      return list;
    },

    // Parallel Sinflar reyting ro'yxati (1-A, 1-B, 1-D, ..., 11-A, 11-B)
    // 707 ta o'quvchilar ballari va sonlaridan to'g'ridan-to'g'ri dinamik hisoblanadi!
    getClassRankings: function(gradeFilter) {
      var classMap = {};
      for (var i = 0; i < SCHOOL_CLASSES.length; i++) {
        var sc = SCHOOL_CLASSES[i];
        classMap[sc.id] = {
          id: sc.id,
          grade: sc.grade,
          letter: sc.letter,
          name: sc.name,
          totalScore: 0,
          studentsCount: 0,
          testsCount: 0
        };
      }

      // O'quvchilarning ballari, soni va testlarini o'z parallel sinfiga hisoblash
      for (var j = 0; j < this.accounts.length; j++) {
        var a = this.accounts[j];
        var cKey = a.grade + '-' + (a.classLetter || 'A');
        if (classMap[cKey]) {
          classMap[cKey].studentsCount += 1;
          classMap[cKey].totalScore += (a.score || 0);
          classMap[cKey].testsCount += (a.testsCompleted || 0);
        }
      }

      var list = [];
      for (var k in classMap) {
        if (!gradeFilter || gradeFilter === 'all' || classMap[k].grade === parseInt(gradeFilter, 10)) {
          list.push(classMap[k]);
        }
      }

      // Ballar bo'yicha kamayish tartibida saralash
      list.sort(function(a, b) {
        return b.totalScore - a.totalScore;
      });

      return list;
    },

    // Sinf bo'yicha o'quvchilar ro'yxati (masalan, '7-B')
    getClassStudents: function(classId) {
      var parts = (classId || '7-B').split('-');
      var grade = parseInt(parts[0], 10);
      var letter = parts[1] || 'A';

      var list = this.accounts.filter(function(a) {
        return a.grade === grade && (a.classLetter || 'A') === letter;
      });

      list.sort(function(a, b) {
        return (b.score || 0) - (a.score || 0);
      });

      return list;
    },

    // Sinf bo'yicha to'liq harakat tahlili (Kim ko'p harakat qildi, kim kam harakat qildi)
    getClassEffortAnalysis: function(classId) {
      var students = this.getClassStudents(classId);
      var totalScore = 0;
      var totalTests = 0;
      var totalAcc = 0;

      for (var i = 0; i < students.length; i++) {
        totalScore += (students[i].score || 0);
        totalTests += (students[i].testsCompleted || 0);
        totalAcc += (students[i].accuracy || 0);
      }

      var avgAcc = students.length > 0 ? Math.round(totalAcc / students.length) : 0;
      var avgScore = students.length > 0 ? Math.round(totalScore / students.length) : 0;

      // Eng ko'p harakat qilganlar (Top 5 a'lochilar)
      var topStudents = students.slice(0, Math.min(5, students.length));

      // Eng kam harakat qilganlar (Pastki 5-6 o'quvchilar)
      var lowCount = Math.min(6, Math.max(3, Math.floor(students.length * 0.2)));
      var lowStudents = students.slice(Math.max(0, students.length - lowCount));

      // O'rtacha o'quvchilar
      var mediumStudents = students.slice(topStudents.length, Math.max(topStudents.length, students.length - lowCount));

      // Sinf o'rni
      var allRankings = this.getClassRankings('all');
      var classRank = 1;
      for (var r = 0; r < allRankings.length; r++) {
        if (allRankings[r].id === classId) {
          classRank = r + 1;
          break;
        }
      }

      var parts = (classId || '7-B').split('-');
      var grade = parseInt(parts[0], 10);
      var letter = parts[1] || 'A';

      return {
        classId: classId,
        className: grade + '-' + letter + ' sinf',
        grade: grade,
        letter: letter,
        rank: classRank,
        totalClasses: allRankings.length,
        studentsCount: students.length,
        totalScore: totalScore,
        totalTests: totalTests,
        avgScore: avgScore,
        avgAccuracy: avgAcc,
        allStudents: students,
        topStudents: topStudents,
        lowStudents: lowStudents,
        mediumStudents: mediumStudents
      };
    },

    // Navbar profil chipini yangilash
    updateNavbarChip: function() {
      var acc = this.getCurrentAccount();
      if (!acc) return;

      var nameEl = document.getElementById('student-chip-name');
      var gradeEl = document.getElementById('student-chip-grade');
      var avatarEl = document.querySelector('.student-avatar-icon');
      var classStr = acc.grade + '-' + (acc.classLetter || 'A') + ' sinf';

      if (nameEl) {
        nameEl.textContent = acc.firstName + ' ' + (acc.lastName ? acc.lastName.charAt(0) + '.' : '');
      }
      if (gradeEl) {
        gradeEl.innerHTML = classStr + ' &bull; <strong style="color:#fbbf24;"><i class="fas fa-trophy"></i> ' + (acc.score || 0) + '</strong>';
      }
      if (avatarEl && acc.avatar) {
        avatarEl.innerHTML = '<span style="font-size:1.3rem;">' + acc.avatar + '</span>';
      }

      // Hero banner
      var heroGreeting = document.getElementById('hero-student-greeting');
      if (heroGreeting) {
        heroGreeting.innerHTML = 'Assalomu alaykum, <strong>' + acc.firstName + ' ' + (acc.lastName || '') + '</strong>! <i class="fas fa-graduation-cap"></i> <span style="font-size:0.9rem; color:#38bdf8; margin-left:0.4rem;">(' + classStr + ')</span> <span style="font-size:0.9rem; color:#fbbf24; margin-left:0.5rem;"><i class="fas fa-award"></i> ' + (acc.score || 0) + ' ball</span>';
      }
    },

    // Suzuvchi Reyting tugmasi holatini yangilash
    updateFloatingBtn: function() {
      var acc = this.getCurrentAccount();
      var rankBadge = document.getElementById('floating-leaderboard-rank');
      if (rankBadge && acc) {
        var rank = this.getStudentRank(acc.id);
        rankBadge.textContent = '#' + rank;
      }
    },

    // Reyting panelini ochish
    openLeaderboardDrawer: function() {
      var drawer = document.getElementById('leaderboard-drawer');
      var backdrop = document.getElementById('leaderboard-drawer-backdrop');
      if (drawer) {
        this.renderLeaderboardDrawer();
        drawer.classList.add('active');
        drawer.style.setProperty('transform', 'translateX(0)', 'important');
        if (backdrop) {
          backdrop.classList.add('active');
          backdrop.style.setProperty('opacity', '1', 'important');
          backdrop.style.setProperty('pointer-events', 'auto', 'important');
        }
        document.body.style.overflow = 'hidden';
      }
    },

    closeLeaderboardDrawer: function() {
      var drawer = document.getElementById('leaderboard-drawer');
      var backdrop = document.getElementById('leaderboard-drawer-backdrop');
      if (drawer) {
        drawer.classList.remove('active');
        drawer.style.removeProperty('transform');
        if (backdrop) {
          backdrop.classList.remove('active');
          backdrop.style.removeProperty('opacity');
          backdrop.style.removeProperty('pointer-events');
        }
        document.body.style.overflow = '';
      }
    },

    // Tab almashtirish ('students', 'classes', 'badges', yoki 'class_detail')
    setTab: function(tab) {
      this.currentTab = tab;
      var tabStudents = document.getElementById('lb-tab-students');
      var tabClasses = document.getElementById('lb-tab-classes');
      var tabBadges = document.getElementById('lb-tab-badges');
      if (tabStudents) tabStudents.classList.toggle('active', tab === 'students');
      if (tabClasses) tabClasses.classList.toggle('active', tab === 'classes' || tab === 'class_detail');
      if (tabBadges) tabBadges.classList.toggle('active', tab === 'badges');

      var studentsView = document.getElementById('lb-view-students');
      var classesView = document.getElementById('lb-view-classes');
      var detailView = document.getElementById('lb-view-class-detail');
      var badgesView = document.getElementById('lb-view-badges');

      if (studentsView) {
        if (tab === 'students') {
          studentsView.classList.add('active');
          studentsView.classList.remove('hidden');
          studentsView.style.setProperty('display', 'flex', 'important');
        } else {
          studentsView.classList.remove('active');
          studentsView.classList.add('hidden');
          studentsView.style.setProperty('display', 'none', 'important');
        }
      }

      if (classesView) {
        if (tab === 'classes') {
          classesView.classList.add('active');
          classesView.classList.remove('hidden');
          classesView.style.setProperty('display', 'flex', 'important');
        } else {
          classesView.classList.remove('active');
          classesView.classList.add('hidden');
          classesView.style.setProperty('display', 'none', 'important');
        }
      }

      if (detailView) {
        if (tab === 'class_detail') {
          detailView.classList.add('active');
          detailView.classList.remove('hidden');
          detailView.style.setProperty('display', 'flex', 'important');
        } else {
          detailView.classList.remove('active');
          detailView.classList.add('hidden');
          detailView.style.setProperty('display', 'none', 'important');
        }
      }

      if (badgesView) {
        if (tab === 'badges') {
          badgesView.classList.add('active');
          badgesView.classList.remove('hidden');
          badgesView.style.setProperty('display', 'flex', 'important');
        } else {
          badgesView.classList.remove('active');
          badgesView.classList.add('hidden');
          badgesView.style.setProperty('display', 'none', 'important');
        }
      }

      if (tab === 'students') {
        this.renderStudentRankings();
      } else if (tab === 'classes') {
        this.renderClassRankings();
      } else if (tab === 'class_detail') {
        this.renderClassDetail(this.selectedDetailClass);
      } else if (tab === 'badges') {
        if (window.AchievementsManager) window.AchievementsManager.renderBadgesDrawer();
      }
    },

    // O'quvchilar sinf filtrini o'rnatish
    setStudentGradeFilter: function(val) {
      this.studentGradeFilter = val;
      var filterBtns = document.querySelectorAll('#lb-student-filters .lb-grade-pill');
      filterBtns.forEach(function(b) {
        b.classList.toggle('active', b.getAttribute('data-filter') === String(val));
      });
      this.renderStudentRankings();
    },

    // Sinflar filtrini o'rnatish
    setClassGradeFilter: function(val) {
      this.classGradeFilter = val;
      var filterBtns = document.querySelectorAll('#lb-class-filters .lb-grade-pill');
      filterBtns.forEach(function(b) {
        b.classList.toggle('active', b.getAttribute('data-filter') === String(val));
      });
      this.renderClassRankings();
    },

    // Reyting paneli kontentini chizish
    renderLeaderboardDrawer: function() {
      var acc = this.getCurrentAccount();
      if (!acc) return;

      var classStr = acc.grade + '-' + (acc.classLetter || 'A') + ' sinf';
      var myRankEl = document.getElementById('lb-my-rank-number');
      var myNameEl = document.getElementById('lb-my-name');
      var myScoreEl = document.getElementById('lb-my-score');
      var myClassEl = document.getElementById('lb-my-class');
      var myAvatarEl = document.getElementById('lb-my-avatar');

      var rank = this.getStudentRank(acc.id);
      if (myRankEl) myRankEl.textContent = '#' + rank;
      if (myNameEl) myNameEl.textContent = acc.firstName + ' ' + (acc.lastName || '');
      if (myScoreEl) myScoreEl.innerHTML = '<i class="fas fa-trophy" style="color:#fbbf24;"></i> ' + (acc.score || 0) + ' ball';
      if (myClassEl) myClassEl.textContent = classStr;
      if (myAvatarEl) myAvatarEl.textContent = acc.avatar || '🎓';

      if (this.currentTab === 'students') {
        this.renderStudentRankings();
      } else if (this.currentTab === 'class_detail') {
        this.renderClassDetail(this.selectedDetailClass);
      } else if (this.currentTab === 'badges') {
        if (window.AchievementsManager) window.AchievementsManager.renderBadgesDrawer();
      } else {
        this.renderClassRankings();
      }
    },

    // O'quvchilar reytingini chizish
    renderStudentRankings: function() {
      var container = document.getElementById('lb-students-list');
      if (!container) return;

      var currentAcc = this.getCurrentAccount();
      var list = this.getStudentRankings(this.studentGradeFilter);

      if (list.length === 0) {
        container.innerHTML = '<div style="text-align:center; padding:2rem; color:#94a3b8;">Ushbu sinf bo\'yicha o\'quvchilar topilmadi</div>';
        return;
      }

      var html = '';
      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var rank = i + 1;
        var isMe = (currentAcc && currentAcc.id === item.id);
        var classStr = item.grade + '-' + (item.classLetter || 'A') + ' sinf';

        var rankBadge = '';
        if (rank === 1) rankBadge = '<span class="lb-rank-badge rank-1"><i class="fas fa-crown"></i> 1</span>';
        else if (rank === 2) rankBadge = '<span class="lb-rank-badge rank-2"><i class="fas fa-medal"></i> 2</span>';
        else if (rank === 3) rankBadge = '<span class="lb-rank-badge rank-3"><i class="fas fa-award"></i> 3</span>';
        else rankBadge = '<span class="lb-rank-badge rank-other">' + rank + '</span>';

        var effortTag = '';
        if (item.effortLevel === 'high') {
          effortTag = '<span class="lb-effort-badge badge-high"><i class="fas fa-fire"></i> Katta harakat</span>';
        } else if (item.effortLevel === 'low') {
          effortTag = '<span class="lb-effort-badge badge-low"><i class="fas fa-exclamation-circle"></i> Kam harakat</span>';
        }

        html += '<div class="lb-row ' + (isMe ? 'lb-row-me' : '') + '">';
        html += '  <div class="lb-row-left">';
        html += '    ' + rankBadge;
        html += '    <div class="lb-avatar">' + (item.avatar || '🎓') + '</div>';
        html += '    <div class="lb-user-info">';
        html += '      <div class="lb-user-name">' + item.firstName + ' ' + (item.lastName || '');
        if (isMe) html += ' <span class="lb-me-tag">Siz</span>';
        html += '      </div>';
        html += '      <div class="lb-user-meta">';
        html += '        <span>' + classStr + '</span>';
        html += '        <span>&bull; ' + (item.testsCompleted || 0) + ' ta test</span>';
        if (effortTag) html += ' <span>&bull; ' + effortTag + '</span>';
        html += '      </div>';
        html += '    </div>';
        html += '  </div>';
        html += '  <div class="lb-row-right">';
        html += '    <div class="lb-user-score"><i class="fas fa-trophy" style="color:#fbbf24;"></i> ' + (item.score || 0) + '</div>';
        html += '    <div class="lb-user-pts">ball</div>';
        html += '  </div>';
        html += '</div>';
      }

      container.innerHTML = html;
    },

    // 24 ta parallel sinf reytingini chizish
    renderClassRankings: function() {
      var container = document.getElementById('lb-classes-list');
      if (!container) return;

      var currentAcc = this.getCurrentAccount();
      var myGrade = currentAcc ? currentAcc.grade : 8;
      var myLetter = currentAcc ? (currentAcc.classLetter || 'A') : 'A';
      var myClassId = myGrade + '-' + myLetter;

      var list = this.getClassRankings(this.classGradeFilter);
      var maxScore = list.length > 0 ? list[0].totalScore : 1;

      var html = '';
      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var rank = i + 1;
        var isMyClass = (item.id === myClassId);
        var percent = Math.min(100, Math.round((item.totalScore / maxScore) * 100));

        var rankBadge = '';
        if (rank === 1) rankBadge = '<span class="lb-rank-badge rank-1"><i class="fas fa-crown"></i> 1</span>';
        else if (rank === 2) rankBadge = '<span class="lb-rank-badge rank-2"><i class="fas fa-medal"></i> 2</span>';
        else if (rank === 3) rankBadge = '<span class="lb-rank-badge rank-3"><i class="fas fa-award"></i> 3</span>';
        else rankBadge = '<span class="lb-rank-badge rank-other">' + rank + '</span>';

        html += '<div class="lb-class-card ' + (isMyClass ? 'lb-class-me' : '') + '" onclick="AccountsManager.openClassDetail(\'' + item.id + '\')" title="' + item.name + ' o\'quvchilari tahlilini ko\'rish">';
        html += '  <div class="lb-class-header">';
        html += '    <div style="display:flex; align-items:center; gap:0.6rem;">';
        html += '      ' + rankBadge;
        html += '      <strong class="lb-class-title">' + item.name + '</strong>';
        if (isMyClass) html += ' <span class="lb-me-tag">Sizning sinfingiz ✨</span>';
        html += '    </div>';
        html += '    <div class="lb-class-score"><i class="fas fa-trophy" style="color:#fbbf24;"></i> ' + item.totalScore.toLocaleString() + ' ball</div>';
        html += '  </div>';
        html += '  <div class="lb-class-progress-bar">';
        html += '    <div class="lb-class-progress-fill" style="width:' + percent + '%;"></div>';
        html += '  </div>';
        html += '  <div class="lb-class-footer">';
        html += '    <span><i class="fas fa-users"></i> ' + item.studentsCount + ' ta o\'quvchi</span>';
        html += '    <span><i class="fas fa-check-circle"></i> ' + item.testsCount + ' ta test yechildi</span>';
        html += '    <span class="lb-class-action-tag"><i class="fas fa-chart-line"></i> Tahlilni ko\'rish &rarr;</span>';
        html += '  </div>';
        html += '</div>';
      }

      container.innerHTML = html;
    },

    // ============================================================
    // SINF TAHLILI (CLASS DETAIL VIEW): KIM KO'P, KIM KAM HARAKAT QILDI
    // ============================================================

    // Sinf ichiga kirish (masalan: 7-B)
    openClassDetail: function(classId) {
      if (!classId) classId = '7-B';
      this.selectedDetailClass = classId;
      this.selectedEffortFilter = 'all';
      this.detailSearchQuery = '';

      this.setTab('class_detail');
    },

    backToClassesList: function() {
      this.setTab('classes');
    },

    setClassEffortFilter: function(filter) {
      this.selectedEffortFilter = filter;
      var chips = document.querySelectorAll('.lb-effort-chip');
      chips.forEach(function(c) {
        c.classList.toggle('active', c.getAttribute('data-effort') === filter);
      });
      this.renderClassDetailStudents();
    },

    setClassDetailSearch: function(query) {
      this.detailSearchQuery = (query || '').toLowerCase().trim();
      this.renderClassDetailStudents();
    },

    // Sinf tahlili ko'rinishini chizish (Drawer ichida)
    renderClassDetail: function(classId) {
      var container = document.getElementById('lb-class-detail-content');
      var topbarSelect = document.getElementById('lb-class-detail-select');
      if (!container) return;

      var analysis = this.getClassEffortAnalysis(classId);
      var currentAcc = this.getCurrentAccount();

      // Topbar dagi sinf switcher selectini to'ldirish
      if (topbarSelect) {
        var optsHtml = '';
        for (var c = 0; c < SCHOOL_CLASSES.length; c++) {
          var sc = SCHOOL_CLASSES[c];
          var sel = (sc.id === classId) ? 'selected' : '';
          optsHtml += '<option value="' + sc.id + '" ' + sel + '>' + sc.name + ' (' + sc.targetStudents + ' o\'quvchi)</option>';
        }
        topbarSelect.innerHTML = optsHtml;
      }

      var html = '';

      // 1. Sinf Sarlavhasi va Statistikasi
      html += '<div class="lb-detail-header-card">';
      html += '  <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.75rem;">';
      html += '    <div>';
      html += '      <div class="lb-detail-school-tag"><i class="fas fa-graduation-cap"></i> 30-IDUM Maktab</div>';
      html += '      <h3 class="lb-detail-class-title">' + analysis.className + ' Tahlili</h3>';
      html += '      <p class="lb-detail-subtitle">Jami: <strong>' + analysis.studentsCount + ' ta o\'quvchi</strong> &bull; Maktab bo\'yicha jami: <strong>707 ta</strong></p>';
      html += '    </div>';
      html += '    <div class="lb-detail-rank-pill">';
      html += '      <div class="lb-detail-rank-val">#' + analysis.rank + '</div>';
      html += '      <div class="lb-detail-rank-lbl">24 ta sinf ichida</div>';
      html += '    </div>';
      html += '  </div>';

      html += '  <div class="lb-detail-stats-grid">';
      html += '    <div class="lb-d-stat">';
      html += '      <span class="lb-d-stat-val" style="color:#fbbf24;"><i class="fas fa-trophy"></i> ' + analysis.totalScore.toLocaleString() + '</span>';
      html += '      <span class="lb-d-stat-lbl">Umumiy ball</span>';
      html += '    </div>';
      html += '    <div class="lb-d-stat">';
      html += '      <span class="lb-d-stat-val" style="color:#38bdf8;"><i class="fas fa-check-circle"></i> ' + analysis.totalTests + ' ta</span>';
      html += '      <span class="lb-d-stat-lbl">Yechilgan test</span>';
      html += '    </div>';
      html += '    <div class="lb-d-stat">';
      html += '      <span class="lb-d-stat-val" style="color:#34d399;"><i class="fas fa-percentage"></i> ' + analysis.avgAccuracy + '%</span>';
      html += '      <span class="lb-d-stat-lbl">O\'rtacha aniqlik</span>';
      html += '    </div>';
      html += '  </div>';
      html += '</div>';

      // 2. 🔥 ENG KO'P HARAKAT QILGANLAR (Top A'lochilar)
      html += '<div class="lb-effort-box lb-effort-box-top">';
      html += '  <div class="lb-effort-header">';
      html += '    <div class="lb-effort-icon"><i class="fas fa-fire" style="color:#10b981;"></i></div>';
      html += '    <div>';
      html += '      <h4 class="lb-effort-title">🔥 Eng ko\'p harakat qilganlar</h4>';
      html += '      <p class="lb-effort-desc">Muntazam test yechgan, eng yuqori ball to\'plagan a\'lochi o\'quvchilar</p>';
      html += '    </div>';
      html += '  </div>';
      html += '  <div class="lb-effort-grid">';
      for (var t = 0; t < Math.min(3, analysis.topStudents.length); t++) {
        var topS = analysis.topStudents[t];
        var medal = t === 0 ? '🥇' : (t === 1 ? '🥈' : '🥉');
        var isMe = (currentAcc && currentAcc.id === topS.id);
        html += '<div class="lb-effort-row ' + (isMe ? 'lb-effort-row-me' : '') + '">';
        html += '  <div style="display:flex; align-items:center; gap:0.6rem;">';
        html += '    <span style="font-size:1.25rem;">' + medal + '</span>';
        html += '    <span class="lb-avatar-mini">' + topS.avatar + '</span>';
        html += '    <div>';
        html += '      <strong style="color:#fff; font-size:0.88rem;">' + topS.firstName + ' ' + topS.lastName + '</strong>';
        if (isMe) html += ' <span class="lb-me-tag">Siz</span>';
        html += '      <div style="font-size:0.72rem; color:#94a3b8;">' + topS.testsCompleted + ' ta test yechgan &bull; ' + topS.accuracy + '% to\'g\'ri</div>';
        html += '    </div>';
        html += '  </div>';
        html += '  <div style="text-align:right;">';
        html += '    <div style="font-weight:800; color:#34d399; font-size:0.95rem;">+' + topS.score + ' ball</div>';
        html += '    <span class="lb-effort-badge badge-high"><i class="fas fa-check"></i> Katta harakat</span>';
        html += '  </div>';
        html += '</div>';
      }
      html += '  </div>';
      html += '</div>';

      // 3. ⚠️ ENG KAM HARAKAT QILGANLAR (E'tibor Talab / Qoloqlar)
      html += '<div class="lb-effort-box lb-effort-box-low">';
      html += '  <div class="lb-effort-header">';
      html += '    <div class="lb-effort-icon"><i class="fas fa-exclamation-triangle" style="color:#ef4444;"></i></div>';
      html += '    <div>';
      html += '      <h4 class="lb-effort-title">⚠️ Eng kam harakat qilganlar</h4>';
      html += '      <p class="lb-effort-desc">Kam test yechgan yoki hali boshlamagan, e\'tibor va yordam talab o\'quvchilar</p>';
      html += '    </div>';
      html += '  </div>';
      html += '  <div class="lb-effort-grid">';
      for (var l = 0; l < Math.min(3, analysis.lowStudents.length); l++) {
        var lowS = analysis.lowStudents[l];
        var isMe = (currentAcc && currentAcc.id === lowS.id);
        var lowText = lowS.testsCompleted === 0 ? 'Boshlamagan (0 ta test)' : (lowS.testsCompleted + ' ta test &bull; ' + lowS.accuracy + '%');
        html += '<div class="lb-effort-row ' + (isMe ? 'lb-effort-row-me' : '') + '">';
        html += '  <div style="display:flex; align-items:center; gap:0.6rem;">';
        html += '    <span style="font-size:1rem; color:#f87171; font-weight:800;">#' + (analysis.allStudents.indexOf(lowS) + 1) + '</span>';
        html += '    <span class="lb-avatar-mini">' + lowS.avatar + '</span>';
        html += '    <div>';
        html += '      <strong style="color:#fff; font-size:0.88rem;">' + lowS.firstName + ' ' + lowS.lastName + '</strong>';
        if (isMe) html += ' <span class="lb-me-tag">Siz</span>';
        html += '      <div style="font-size:0.72rem; color:#fca5a5;">' + lowText + '</div>';
        html += '    </div>';
        html += '  </div>';
        html += '  <div style="text-align:right;">';
        html += '    <div style="font-weight:700; color:#f87171; font-size:0.9rem;">' + lowS.score + ' ball</div>';
        html += '    <span class="lb-effort-badge badge-low"><i class="fas fa-exclamation-circle"></i> Kam harakat</span>';
        html += '  </div>';
        html += '</div>';
      }
      html += '  </div>';
      html += '  <div class="lb-effort-advice">';
      html += '    <i class="fas fa-lightbulb" style="color:#fbbf24;"></i> Ustoz tavsiyasi: Ushbu o\'quvchilarga qo\'shimcha test topshiriqlari berilsa, sinf reytingi yanada ko\'tariladi.';
      html += '  </div>';
      html += '</div>';

      // 4. Filtrlar va Qidiruv Toolbar
      html += '<div class="lb-detail-filter-bar">';
      html += '  <input type="text" class="lb-detail-search-input" placeholder="🔍 ' + analysis.className + ' o\'quvchisini qidirish..." oninput="AccountsManager.setClassDetailSearch(this.value)">';
      html += '  <div class="lb-effort-chips">';
      html += '    <button type="button" class="lb-effort-chip active" data-effort="all" onclick="AccountsManager.setClassEffortFilter(\'all\')">Barchasi (' + analysis.allStudents.length + ')</button>';
      html += '    <button type="button" class="lb-effort-chip" data-effort="high" onclick="AccountsManager.setClassEffortFilter(\'high\')">🔥 Ko\'p harakat (' + analysis.topStudents.length + ')</button>';
      html += '    <button type="button" class="lb-effort-chip" data-effort="medium" onclick="AccountsManager.setClassEffortFilter(\'medium\')">⚡ O\'rtacha (' + analysis.mediumStudents.length + ')</button>';
      html += '    <button type="button" class="lb-effort-chip" data-effort="low" onclick="AccountsManager.setClassEffortFilter(\'low\')">⚠️ Kam harakat (' + analysis.lowStudents.length + ')</button>';
      html += '  </div>';
      html += '</div>';

      // 5. O'quvchilar Ro'yxati Kontayneri
      html += '<div id="lb-class-detail-students-list"></div>';

      container.innerHTML = html;
      this.renderClassDetailStudents();
    },

    // Tanlangan filtr va qidiruv bo'yicha o'quvchilarni chizish
    renderClassDetailStudents: function() {
      var container = document.getElementById('lb-class-detail-students-list');
      if (!container) return;

      var analysis = this.getClassEffortAnalysis(this.selectedDetailClass);
      var currentAcc = this.getCurrentAccount();
      var students = analysis.allStudents;

      // Harakat filtri
      if (this.selectedEffortFilter && this.selectedEffortFilter !== 'all') {
        students = students.filter(function(s) {
          return s.effortLevel === AccountsManager.selectedEffortFilter;
        });
      }

      // Qidiruv filtri
      if (this.detailSearchQuery) {
        var q = this.detailSearchQuery;
        students = students.filter(function(s) {
          var full = (s.firstName + ' ' + s.lastName).toLowerCase();
          return full.indexOf(q) !== -1;
        });
      }

      if (students.length === 0) {
        container.innerHTML = '<div style="text-align:center; padding:2rem; color:#94a3b8;"><i class="fas fa-search" style="font-size:2rem; margin-bottom:0.5rem; opacity:0.5;"></i><br>Bunday o\'quvchi topilmadi</div>';
        return;
      }

      var html = '';
      for (var i = 0; i < students.length; i++) {
        var s = students[i];
        var realRank = analysis.allStudents.indexOf(s) + 1;
        var isMe = (currentAcc && currentAcc.id === s.id);

        var rankBadge = '';
        if (realRank === 1) rankBadge = '<span class="lb-rank-badge rank-1"><i class="fas fa-crown"></i> 1</span>';
        else if (realRank === 2) rankBadge = '<span class="lb-rank-badge rank-2"><i class="fas fa-medal"></i> 2</span>';
        else if (realRank === 3) rankBadge = '<span class="lb-rank-badge rank-3"><i class="fas fa-award"></i> 3</span>';
        else rankBadge = '<span class="lb-rank-badge rank-other">' + realRank + '</span>';

        var effortBadge = '';
        if (s.effortLevel === 'high') {
          effortBadge = '<span class="lb-effort-badge badge-high"><i class="fas fa-fire"></i> Katta harakat</span>';
        } else if (s.effortLevel === 'medium') {
          effortBadge = '<span class="lb-effort-badge badge-medium"><i class="fas fa-bolt"></i> O\'rtacha</span>';
        } else {
          effortBadge = '<span class="lb-effort-badge badge-low"><i class="fas fa-exclamation-triangle"></i> Kam harakat</span>';
        }

        html += '<div class="lb-row ' + (isMe ? 'lb-row-me' : '') + '">';
        html += '  <div class="lb-row-left">';
        html += '    ' + rankBadge;
        html += '    <div class="lb-avatar">' + s.avatar + '</div>';
        html += '    <div class="lb-user-info">';
        html += '      <div class="lb-user-name">' + s.firstName + ' ' + s.lastName;
        if (isMe) html += ' <span class="lb-me-tag">Siz</span>';
        html += '      </div>';
        html += '      <div class="lb-user-meta">';
        html += '        <span>' + s.testsCompleted + ' ta test yechildi</span>';
        html += '        <span>&bull; ' + s.accuracy + '% aniqlik</span>';
        html += '        <span>&bull; ' + effortBadge + '</span>';
        html += '      </div>';
        html += '    </div>';
        html += '  </div>';
        html += '  <div class="lb-row-right">';
        html += '    <div class="lb-user-score"><i class="fas fa-trophy" style="color:#fbbf24;"></i> ' + s.score.toLocaleString() + '</div>';
        html += '    <div class="lb-user-pts">ball</div>';
        html += '  </div>';
        html += '</div>';
      }

      container.innerHTML = html;
    },

    // ============================================================
    // ALOHIDA SINF TAHLILI MODALI (FULL SCREEN MODAL)
    // ============================================================
    openClassAnalyticsModal: function(classId) {
      if (!classId) classId = this.selectedDetailClass || '7-B';
      this.selectedDetailClass = classId;
      var modal = document.getElementById('class-analytics-modal');
      if (modal) {
        modal.style.display = 'flex';
        this.renderClassAnalyticsModal(classId);
      }
    },

    closeClassAnalyticsModal: function() {
      var modal = document.getElementById('class-analytics-modal');
      if (modal) modal.style.display = 'none';
    },

    renderClassAnalyticsModal: function(classId) {
      var body = document.getElementById('modal-class-analytics-body');
      var sel = document.getElementById('modal-class-select');
      var title = document.getElementById('modal-class-title');
      if (!body) return;

      var analysis = this.getClassEffortAnalysis(classId);

      if (title) title.innerHTML = '<i class="fas fa-school" style="color:#38bdf8;"></i> ' + analysis.className + ' O\'quvchilari Tahlili';

      if (sel) {
        var opts = '';
        for (var c = 0; c < SCHOOL_CLASSES.length; c++) {
          var sc = SCHOOL_CLASSES[c];
          opts += '<option value="' + sc.id + '" ' + (sc.id === classId ? 'selected' : '') + '>' + sc.name + ' (' + sc.targetStudents + ' o\'quvchi)</option>';
        }
        sel.innerHTML = opts;
      }

      var html = '';
      html += '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:0.75rem; margin-bottom:1.25rem;">';
      html += '  <div style="background:rgba(30,41,59,0.7); border:1px solid rgba(255,255,255,0.1); border-radius:14px; padding:0.9rem; text-align:center;">';
      html += '    <div style="font-size:0.75rem; color:#94a3b8; text-transform:uppercase; font-weight:700;">Jami O\'quvchilar</div>';
      html += '    <div style="font-size:1.6rem; font-weight:900; color:#fff; margin-top:4px;">' + analysis.studentsCount + ' ta</div>';
      html += '    <div style="font-size:0.75rem; color:#38bdf8;">Maktabda jami: 707 ta</div>';
      html += '  </div>';
      html += '  <div style="background:rgba(30,41,59,0.7); border:1px solid rgba(255,255,255,0.1); border-radius:14px; padding:0.9rem; text-align:center;">';
      html += '    <div style="font-size:0.75rem; color:#94a3b8; text-transform:uppercase; font-weight:700;">Umumiy Ball</div>';
      html += '    <div style="font-size:1.6rem; font-weight:900; color:#fbbf24; margin-top:4px;"><i class="fas fa-trophy"></i> ' + analysis.totalScore.toLocaleString() + '</div>';
      html += '    <div style="font-size:0.75rem; color:#34d399;">Sinf o\'rni: #' + analysis.rank + '</div>';
      html += '  </div>';
      html += '  <div style="background:rgba(30,41,59,0.7); border:1px solid rgba(255,255,255,0.1); border-radius:14px; padding:0.9rem; text-align:center;">';
      html += '    <div style="font-size:0.75rem; color:#94a3b8; text-transform:uppercase; font-weight:700;">Yechilgan Testlar</div>';
      html += '    <div style="font-size:1.6rem; font-weight:900; color:#38bdf8; margin-top:4px;">' + analysis.totalTests + ' ta</div>';
      html += '    <div style="font-size:0.75rem; color:#94a3b8;">O\'rtacha: ' + Math.round(analysis.totalTests / analysis.studentsCount) + ' ta</div>';
      html += '  </div>';
      html += '</div>';

      // 2 ta taqqoslash bloki
      html += '<div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:1.5rem;">';
      
      // Top performer
      html += '  <div class="lb-effort-box lb-effort-box-top" style="margin:0;">';
      html += '    <h4 style="margin:0 0 0.5rem; color:#34d399; font-size:1rem; display:flex; align-items:center; gap:0.5rem;"><i class="fas fa-fire"></i> Eng ko\'p harakat qilganlar</h4>';
      for (var tp = 0; tp < Math.min(3, analysis.topStudents.length); tp++) {
        var sTop = analysis.topStudents[tp];
        html += '    <div style="display:flex; justify-content:space-between; align-items:center; padding:0.4rem 0; border-bottom:1px solid rgba(255,255,255,0.06);">';
        html += '      <span>' + (tp+1) + '. ' + sTop.firstName + ' ' + sTop.lastName + '</span>';
        html += '      <strong style="color:#34d399;">' + sTop.score + ' ball (' + sTop.testsCompleted + ' test)</strong>';
        html += '    </div>';
      }
      html += '  </div>';

      // Low performer
      html += '  <div class="lb-effort-box lb-effort-box-low" style="margin:0;">';
      html += '    <h4 style="margin:0 0 0.5rem; color:#f87171; font-size:1rem; display:flex; align-items:center; gap:0.5rem;"><i class="fas fa-exclamation-circle"></i> Eng kam harakat qilganlar</h4>';
      for (var lp = 0; lp < Math.min(3, analysis.lowStudents.length); lp++) {
        var sLow = analysis.lowStudents[lp];
        html += '    <div style="display:flex; justify-content:space-between; align-items:center; padding:0.4rem 0; border-bottom:1px solid rgba(255,255,255,0.06);">';
        html += '      <span>' + (analysis.allStudents.indexOf(sLow) + 1) + '. ' + sLow.firstName + ' ' + sLow.lastName + '</span>';
        html += '      <strong style="color:#f87171;">' + sLow.score + ' ball (' + sLow.testsCompleted + ' test)</strong>';
        html += '    </div>';
      }
      html += '  </div>';
      html += '</div>';

      // To'liq jadval
      html += '<h4 style="color:#fff; margin-bottom:0.6rem;"><i class="fas fa-list-ol"></i> Barcha ' + analysis.studentsCount + ' ta o\'quvchi reytingi:</h4>';
      html += '<div style="max-height:350px; overflow-y:auto; border:1px solid rgba(255,255,255,0.1); border-radius:12px;">';
      html += '<table style="width:100%; border-collapse:collapse; text-align:left; font-size:0.85rem;">';
      html += '  <thead><tr style="background:rgba(30,41,59,0.9); color:#94a3b8; border-bottom:1px solid rgba(255,255,255,0.1);"><th style="padding:0.6rem 0.8rem;">O\'rin</th><th style="padding:0.6rem 0.8rem;">O\'quvchi</th><th style="padding:0.6rem 0.8rem;">Testlar</th><th style="padding:0.6rem 0.8rem;">Aniqlik</th><th style="padding:0.6rem 0.8rem;">Ball</th><th style="padding:0.6rem 0.8rem;">Harakat</th></tr></thead>';
      html += '  <tbody>';
      for (var aIdx = 0; aIdx < analysis.allStudents.length; aIdx++) {
        var st = analysis.allStudents[aIdx];
        var efBadge = st.effortLevel === 'high' 
          ? '<span style="color:#34d399; font-weight:700;">🔥 Katta harakat</span>' 
          : (st.effortLevel === 'low' ? '<span style="color:#f87171; font-weight:700;">⚠️ Kam harakat</span>' : '<span style="color:#38bdf8;">⚡ O\'rtacha</span>');
        html += '<tr style="border-bottom:1px solid rgba(255,255,255,0.05);">';
        html += '  <td style="padding:0.6rem 0.8rem; font-weight:800; color:' + (aIdx < 3 ? '#fbbf24' : '#cbd5e1') + ';">#' + (aIdx + 1) + '</td>';
        html += '  <td style="padding:0.6rem 0.8rem; font-weight:600; color:#fff;">' + st.avatar + ' ' + st.firstName + ' ' + st.lastName + '</td>';
        html += '  <td style="padding:0.6rem 0.8rem; color:#cbd5e1;">' + st.testsCompleted + ' ta</td>';
        html += '  <td style="padding:0.6rem 0.8rem; color:#cbd5e1;">' + st.accuracy + '%</td>';
        html += '  <td style="padding:0.6rem 0.8rem; font-weight:800; color:#fbbf24;">' + st.score.toLocaleString() + '</td>';
        html += '  <td style="padding:0.6rem 0.8rem;">' + efBadge + '</td>';
        html += '</tr>';
      }
      html += '  </tbody>';
      html += '</table>';
      html += '</div>';

      body.innerHTML = html;
    },

    // Akkauntlar boshqaruvi modali
    openAccountModal: function() {
      var modal = document.getElementById('account-manager-modal');
      if (modal) {
        this.renderAccountModalList();
        modal.style.display = 'flex';
      }
    },

    closeAccountModal: function() {
      var modal = document.getElementById('account-manager-modal');
      if (modal) modal.style.display = 'none';
    },

    renderAccountModalList: function() {
      var container = document.getElementById('acc-modal-list');
      if (!container) return;

      var currentAcc = this.getCurrentAccount();
      var html = '';

      // Faqat haqiqiy foydalanuvchilar va 15 ta namuna
      var displayAccounts = this.accounts.filter(function(a) { return a.isUser; });
      if (displayAccounts.length === 0) {
        displayAccounts = this.accounts.slice(0, 15);
      }

      for (var i = 0; i < displayAccounts.length; i++) {
        var acc = displayAccounts[i];
        var isCurrent = (currentAcc && currentAcc.id === acc.id);
        var classStr = acc.grade + '-' + (acc.classLetter || 'A') + ' sinf';

        html += '<div class="acc-item ' + (isCurrent ? 'current' : '') + '" onclick="AccountsManager.switchAccount(\'' + acc.id + '\')">';
        html += '  <div class="acc-item-avatar">' + (acc.avatar || '🎓') + '</div>';
        html += '  <div class="acc-item-info">';
        html += '    <div class="acc-item-name">' + acc.firstName + ' ' + (acc.lastName || '');
        if (isCurrent) html += ' <span class="lb-me-tag">Faol</span>';
        html += '    </div>';
        html += '    <div class="acc-item-meta">' + classStr + ' &bull; ' + (acc.age || (acc.grade + 6)) + ' yosh &bull; <i class="fas fa-trophy" style="color:#fbbf24;"></i> ' + (acc.score || 0) + ' ball</div>';
        html += '  </div>';
        html += '  <div class="acc-item-action">';
        if (isCurrent) {
          html += '    <span style="color:#34d399; font-weight:700; font-size:0.85rem;"><i class="fas fa-check-circle"></i> Tanlangan</span>';
        } else {
          html += '    <button type="button" class="btn btn-outline" style="padding:0.3rem 0.75rem; font-size:0.8rem;" onclick="event.stopPropagation(); AccountsManager.switchAccount(\'' + acc.id + '\')">O\'tish</button>';
        }
        html += '  </div>';
        html += '</div>';
      }

      container.innerHTML = html;
    },

    showCreateForm: function() {
      var listView = document.getElementById('acc-modal-list-view');
      var createView = document.getElementById('acc-modal-create-view');
      if (listView && createView) {
        listView.style.display = 'none';
        createView.style.display = 'block';
      }
    },

    hideCreateForm: function() {
      var listView = document.getElementById('acc-modal-list-view');
      var createView = document.getElementById('acc-modal-create-view');
      if (listView && createView) {
        listView.style.display = 'block';
        createView.style.display = 'none';
      }
    },

    submitCreateForm: function() {
      var fn = document.getElementById('new-acc-firstname');
      var ln = document.getElementById('new-acc-lastname');
      var ageEl = document.getElementById('new-acc-age');
      var classSelect = document.getElementById('new-acc-class');

      if (!fn || !fn.value.trim()) {
        alert("Iltimos, ismingizni kiriting!");
        return;
      }

      var classVal = classSelect ? classSelect.value : '8-A';
      var parts = classVal.split('-');
      var grade = parseInt(parts[0], 10) || 8;
      var letter = parts[1] || 'A';

      var selectedAvatarEl = document.querySelector('.avatar-select-chip.selected');
      var avatar = selectedAvatarEl ? selectedAvatarEl.getAttribute('data-avatar') : '🎓';

      this.createAccount({
        firstName: fn.value.trim(),
        lastName: ln ? ln.value.trim() : '',
        grade: grade,
        classLetter: letter,
        age: ageEl ? parseInt(ageEl.value, 10) : (grade + 6),
        avatar: avatar,
        score: 0
      });

      this.hideCreateForm();
      this.closeAccountModal();

      if (window.showToast) {
        window.showToast("Yangi akkaunt muvaffaqiyatli ochildi!", "success");
      }
    },

    bindUI: function() {
      // Event listeners
      var self = this;

      // Floating button click
      var floatBtn = document.getElementById('floating-leaderboard-btn');
      if (floatBtn) {
        floatBtn.addEventListener('click', function() {
          self.openLeaderboardDrawer();
        });
      }

      // Drawer backdrop click
      var backdrop = document.getElementById('leaderboard-drawer-backdrop');
      if (backdrop) {
        backdrop.addEventListener('click', function() {
          self.closeLeaderboardDrawer();
        });
      }

      // Close drawer on Escape
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          self.closeLeaderboardDrawer();
          self.closeAccountModal();
          self.closeClassAnalyticsModal();
        }
      });
    }
  };

  window.AccountsManager = AccountsManager;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      AccountsManager.init();
    });
  } else {
    AccountsManager.init();
  }

})();
