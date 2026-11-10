/**
 * 30-IDUM Maktab Test Platformasi
 * Tovush Effektlari (SoundFX), Yutuqlar (Achievements & Badges) va Maktab Olimpiadasi (Olympiad)
 * 1-11 sinflar uchun alohida moslashtirilgan (1-sinf alohida, 2,3,4,5,6,7,8,9,10,11 sinflar o'ziga xos)
 * 100% Offline va Web Audio API asosida
 */

(function () {
  'use strict';

  // ============================================================
  // 1. TOVUSH EFFEKTLARI (SOUND FX) - WEB AUDIO API SINTEZATORI
  // Hech qanday tashqi MP3 fayl talab qilinmaydi! 100% internetsiz ishlaydi.
  // ============================================================
  window.SoundFX = {
    ctx: null,
    isMuted: false, // Foydalanuvchi talabi bo'yicha: har doim 100% yoqiq turadi

    init: function () {
      this.isMuted = false;
      try {
        localStorage.removeItem('maktab30_sound_muted');
      } catch (e) {}
    },

    getAudioContext: function () {
      if (!this.ctx) {
        try {
          var AudioCtx = window.AudioContext || window.webkitAudioContext;
          if (AudioCtx) this.ctx = new AudioCtx();
        } catch (e) {}
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      return this.ctx;
    },

    toggleMute: function () {
      this.isMuted = !this.isMuted;
      try {
        localStorage.setItem('maktab30_sound_muted', this.isMuted ? 'true' : 'false');
      } catch (e) {}
      this.updateIcon();
      if (!this.isMuted) {
        this.playCorrect();
        if (window.showToast) window.showToast('Tovushlar yoqildi 🔊', 'info');
      } else {
        if (window.showToast) window.showToast('Tovushlar o\'chirildi 🔇', 'info');
      }
    },

    updateIcon: function () {
      var icon = document.getElementById('sound-icon');
      if (icon) {
        icon.className = this.isMuted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
        icon.style.color = this.isMuted ? '#ef4444' : '#38bdf8';
      }
    },

    // To'g'ri javob: Quvnoq uchlik ohang (C5 -> E5 -> G5)
    playCorrect: function () {
      if (this.isMuted) return;
      var ctx = this.getAudioContext();
      if (!ctx) return;
      var now = ctx.currentTime;
      var notes = [523.25, 659.25, 783.99];
      notes.forEach(function (freq, i) {
        var osc = ctx.createOscillator();
        var gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        gain.gain.setValueAtTime(0.001, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.2, now + i * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 0.28);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.3);
      });
    },

    // Noto'g'ri javob: Yumshoq xato signali (220Hz -> 140Hz)
    playWrong: function () {
      if (this.isMuted) return;
      var ctx = this.getAudioContext();
      if (!ctx) return;
      var now = ctx.currentTime;
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.25);
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.2, now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.32);
    },

    // Tugma bosilishi (Click)
    playClick: function () {
      if (this.isMuted) return;
      var ctx = this.getAudioContext();
      if (!ctx) return;
      var now = ctx.currentTime;
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.06);
    },

    // 3D Printer / Mexatronika qadami (Stepper motor tovushi)
    playStepperChirp: function (pitch) {
      if (this.isMuted) return;
      var ctx = this.getAudioContext();
      if (!ctx) return;
      var now = ctx.currentTime;
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.type = 'triangle';
      var freq = pitch || 520;
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.35, now + 0.04);
      gain.gain.setValueAtTime(0.035, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.055);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.06);
    },

    // Test yakuni / Yangi yutuq: Tantanali g'alaba akkordi (Fanfare)
    playFanfare: function () {
      if (this.isMuted) return;
      var ctx = this.getAudioContext();
      if (!ctx) return;
      var now = ctx.currentTime;
      var chords = [
        { t: 0, notes: [440, 554.37, 659.25] },
        { t: 0.14, notes: [493.88, 622.25, 739.99] },
        { t: 0.32, notes: [587.33, 739.99, 880] }
      ];
      chords.forEach(function (c) {
        c.notes.forEach(function (freq) {
          var osc = ctx.createOscillator();
          var gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + c.t);
          gain.gain.setValueAtTime(0.001, now + c.t);
          gain.gain.exponentialRampToValueAtTime(0.18, now + c.t + 0.03);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + c.t + 0.45);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + c.t);
          osc.stop(now + c.t + 0.5);
        });
      });
    },

    // Savolni ovozli o'qish (Web Speech API)
    speakCurrentQuestion: function () {
      if (!('speechSynthesis' in window)) {
        if (window.showToast) window.showToast('Brauzeringiz ovozli o\'qishni qo\'llab-quvvatlamaydi', 'warning');
        return;
      }
      var qEl = document.getElementById('question-text');
      if (!qEl) return;
      var text = qEl.innerText || qEl.textContent;
      window.speechSynthesis.cancel();
      var utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'uz-UZ';
      utterance.rate = 0.95;
      window.speechSynthesis.speak(utterance);
      this.playClick();
    }
  };

  // ============================================================
  // 2. YUTUQLAR VA MEDALLAR TIZIMI (ACHIEVEMENTS & BADGES)
  // ============================================================
  window.ACHIEVEMENTS_LIST = [
    {
      id: 'first_test',
      title: 'Ilk Qadam',
      icon: '🌟',
      badgeClass: 'badge-gold',
      desc: 'Platformada ilk testni muvaffaqiyatli yakunladingiz!',
      hint: 'Istalgan fandan birinchi testni topshiring'
    },
    {
      id: 'sniper',
      title: 'Snayper (100%)',
      icon: '🎯',
      badgeClass: 'badge-emerald',
      desc: 'Barcha savollarga 100% to\'g\'ri javob berildi!',
      hint: 'Testdagi barcha savollarni benuqson yeching'
    },
    {
      id: 'speedy',
      title: 'Tezkor Fikr',
      icon: '⚡',
      badgeClass: 'badge-amber',
      desc: 'Testni juda chaqqon va tezkorlik bilan topshirdingiz!',
      hint: 'Testni 3 daqiqadan kam vaqtda yakunlang'
    },
    {
      id: 'lab_explorer',
      title: '3D Tadqiqotchi',
      icon: '🔬',
      badgeClass: 'badge-cyan',
      desc: '3D virtual laboratoriyalarga kirib tajriba o\'tkazdingiz!',
      hint: 'Istalgan 3D virtual laboratoriyaga tashrif buyuring'
    },
    {
      id: 'engineer',
      title: 'Kelajak Muhandisi',
      icon: '🤖',
      badgeClass: 'badge-purple',
      desc: '3D Texnologiya va robototexnika laboratoriyasini sinab ko\'rdingiz!',
      hint: '3D Texnologiya laboratoriyasida tajriba o\'tkazing'
    },
    {
      id: 'polymath',
      title: 'Bilimdon',
      icon: '📚',
      badgeClass: 'badge-blue',
      desc: 'Kamida 3 xil turli fandan test savollarini yechdingiz!',
      hint: 'Turli fanlardan test topshirib o\'z salohiyatingizni sinang'
    },
    {
      id: 'champion',
      title: 'Maktab Yulduzi',
      icon: '👑',
      badgeClass: 'badge-rose',
      desc: 'Shaxsiy hisobingizda 1,000 dan ortiq ball to\'pladingiz!',
      hint: 'Jami 1,000 ball (XP) to\'plang'
    },
    {
      id: 'olympiad',
      title: 'Olimpiada Qahramoni',
      icon: '🥇',
      badgeClass: 'badge-gold',
      desc: 'Maktab Olimpiadasi intellektual bellashuvida qatnashdingiz!',
      hint: 'Maktab olimpiadasi rejimida test topshiring'
    }
  ];

  window.AchievementsManager = {
    unlock: function (badgeId) {
      if (!window.AccountsManager) return;
      var acc = window.AccountsManager.getCurrentAccount();
      if (!acc) return;

      if (!acc.badges) acc.badges = [];
      if (acc.badges.indexOf(badgeId) !== -1) return;

      acc.badges.push(badgeId);
      window.AccountsManager.saveAccounts();

      var badge = window.ACHIEVEMENTS_LIST.find(function (b) { return b.id === badgeId; });
      if (!badge) return;

      if (window.SoundFX) window.SoundFX.playFanfare();
      this.showUnlockCelebration(badge);

      if (window.AccountsManager.currentTab === 'badges') {
        this.renderBadgesDrawer();
      }
    },

    hasBadge: function (badgeId) {
      if (!window.AccountsManager) return false;
      var acc = window.AccountsManager.getCurrentAccount();
      return !!(acc && acc.badges && acc.badges.indexOf(badgeId) !== -1);
    },

    checkOnTestFinish: function (results) {
      if (!results) return;
      this.unlock('first_test');

      if (results.percentage === 100) {
        this.unlock('sniper');
      }

      if (results.timeTakenSeconds && results.timeTakenSeconds <= 180 && results.percentage >= 70) {
        this.unlock('speedy');
      }

      var acc = window.AccountsManager ? window.AccountsManager.getCurrentAccount() : null;
      if (acc && (acc.score || 0) >= 1000) {
        this.unlock('champion');
      }

      if (acc && (acc.testsCompleted || 0) >= 3) {
        this.unlock('polymath');
      }
    },

    checkOnLabVisit: function (labName) {
      this.unlock('lab_explorer');
      if (labName === 'technology' || labName === 'page-technology-lab') {
        this.unlock('engineer');
      }
    },

    showUnlockCelebration: function (badge) {
      var popup = document.getElementById('badge-celebration-popup');
      if (!popup) {
        popup = document.createElement('div');
        popup.id = 'badge-celebration-popup';
        popup.className = 'badge-celebration-popup';
        document.body.appendChild(popup);
      }

      popup.innerHTML =
        '<div class="badge-pop-icon">' + badge.icon + '</div>' +
        '<div class="badge-pop-content">' +
        '  <span class="badge-pop-tag">YANGI YUTUQ OCHILDI! 🎉</span>' +
        '  <h4 class="badge-pop-title">' + badge.title + '</h4>' +
        '  <p class="badge-pop-desc">' + badge.desc + '</p>' +
        '</div>' +
        '<button type="button" class="badge-pop-close" onclick="this.parentElement.classList.remove(\'show\')">&times;</button>';

      popup.classList.add('show');
      setTimeout(function () {
        popup.classList.remove('show');
      }, 5000);
    },

    renderBadgesDrawer: function () {
      var container = document.getElementById('lb-badges-grid');
      if (!container) return;

      var acc = window.AccountsManager ? window.AccountsManager.getCurrentAccount() : null;
      var userBadges = (acc && acc.badges) ? acc.badges : [];

      var unlockedCount = 0;
      var html = '';

      for (var i = 0; i < window.ACHIEVEMENTS_LIST.length; i++) {
        var b = window.ACHIEVEMENTS_LIST[i];
        var isUnlocked = userBadges.indexOf(b.id) !== -1;
        if (isUnlocked) unlockedCount++;

        html += '<div class="achievement-card ' + (isUnlocked ? 'unlocked ' + b.badgeClass : 'locked') + '">';
        html += '  <div class="ach-icon-wrap">' + (isUnlocked ? b.icon : '<i class="fas fa-lock"></i>') + '</div>';
        html += '  <div class="ach-info">';
        html += '    <div class="ach-title">' + b.title + ' ' + (isUnlocked ? '<span class="ach-status-ok"><i class="fas fa-check-circle"></i> Ochildi</span>' : '<span class="ach-status-lock">Qulflangan</span>') + '</div>';
        html += '    <div class="ach-desc">' + (isUnlocked ? b.desc : b.hint) + '</div>';
        html += '  </div>';
        html += '</div>';
      }

      var statsEl = document.getElementById('lb-badges-stats');
      if (statsEl) {
        statsEl.innerHTML = '<i class="fas fa-medal" style="color:#fbbf24;"></i> ' + unlockedCount + ' / ' + window.ACHIEVEMENTS_LIST.length + ' ta medal ochildi';
      }

      container.innerHTML = html;
    }
  };

  // ============================================================
  // 3. MAKTAB OLIMPIADASI: 1-11 SINFLAR UCHUN ALOHIDA SAVOLLAR
  // Har bir sinf uchun o'ziga xos 10 tadan fanlararo intellektual savollar
  // ============================================================
  window.GRADE_DESCRIPTIONS = {
    1: "1-sinf uchun: Savodxonlik, sodda hisob, ranglar, mevalar va atrofimizdagi olam",
    2: "2-sinf uchun: Ko'paytirishga kirish, tabiatshunoslik, so'z turkumlari va mantiq",
    3: "3-sinf uchun: Ko'paytirish jadvali, geometriya, informatika asoslari va tabiat sirlari",
    4: "4-sinf uchun: Boshlang'ich bitiruv bosqichi, ko'p xonali sonlar, matn va inson tanasi",
    5: "5-sinf uchun: Yangi fanlar: Botanika, Tarixdan hikoyalar, Matematika va Jahon okeanlari",
    6: "6-sinf uchun: Zoologiya, Qadimgi dunyo tarixi, Manfiy sonlar va Materiklar geografiyasi",
    7: "7-sinf uchun: Algebra va qisqa ko'paytirish, Fizika tezlik, Geometriya burchaklar, Kimyo asoslari",
    8: "8-sinf uchun: Kvadrat tenglamalar, Om qonuni, Kimyo tuzlar, Inson anatomiyasi va Pifagor",
    9: "9-sinf uchun: Asosiy maktab bitiruv imtihonlari: Trigonometriya, Gravitatsiya, Sitologiya, Konstitutsiya",
    10: "10-sinf uchun: Chuqurlashtirilgan fanlar: Progressiyalar, Ideal gaz, Organik kimyo, DNK va Genetika",
    11: "11-sinf uchun: DTM va OTM imtihonlari: Hosila va funksiyalar, E=mc², ATF, BMT va Mantiq"
  };

  window.OLYMPIAD_QUESTIONS_BY_GRADE = {
    // ------------------------------------------------------------
    // 1-SINF (Boshlang'ich - Alifbe, hisoblash, qiziqarli tabiat)
    // ------------------------------------------------------------
    1: [
      {
        q: "1. [Matematika] 5 + 4 yig'indisi nechaga teng?",
        options: ["8", "9", "7", "10"],
        answer: 1,
        subject: "Matematika"
      },
      {
        q: "2. [Alifbe] O'zbek alifbosining birinchi harfi qaysi?",
        options: ["B", "A", "O", "D"],
        answer: 1,
        subject: "Ona tili"
      },
      {
        q: "3. [Atrofimizdagi olam] Quyosh qaysi tomondan chiqadi?",
        options: ["G'arbdan", "Sharqdan", "Shimoldan", "Janubdan"],
        answer: 1,
        subject: "Tabiat"
      },
      {
        q: "4. [Mantiq] Quyidagilardan qaysi biri meva emas?",
        options: ["Olma", "Nok", "Sabzi", "Shaftoli"],
        answer: 2,
        subject: "Mantiq"
      },
      {
        q: "5. [Ingliz tili] 'Cat' so'zining o'zbekcha ma'nosi nima?",
        options: ["It", "Mushuk", "Qush", "Baliq"],
        answer: 1,
        subject: "Ingliz tili"
      },
      {
        q: "6. [Matematika] 10 ta olmadan 3 tasini yesak, nechta olma qoladi?",
        options: ["6", "7", "8", "5"],
        answer: 1,
        subject: "Matematika"
      },
      {
        q: "7. [Tasviriy san'at] Qorning rangi qanday bo'ladi?",
        options: ["Sariq", "Oq", "Ko'k", "Yashil"],
        answer: 1,
        subject: "San'at"
      },
      {
        q: "8. [Mantiq] Bir haftada necha kun bor?",
        options: ["5", "6", "7", "8"],
        answer: 2,
        subject: "Mantiq"
      },
      {
        q: "9. [Tabiat] O'simliklar o'sishi uchun nima eng zarur?",
        options: ["Muz va qor", "Suv va quyosh nuri", "Qorong'ulik", "Hech narsa"],
        answer: 1,
        subject: "Tabiat"
      },
      {
        q: "10. [O'qish] Qaysi hayvon uy hayvoni hisoblanadi?",
        options: ["Bo'ri", "Sigir", "Tulki", "Ayiq"],
        answer: 1,
        subject: "O'qish"
      }
    ],

    // ------------------------------------------------------------
    // 2-SINF (Ko'paytirishga kirish, tabiatshunoslik, so'z turkumlari)
    // ------------------------------------------------------------
    2: [
      {
        q: "1. [Matematika] 4 * 5 ko'paytmasi nechaga teng?",
        options: ["15", "20", "25", "24"],
        answer: 1,
        subject: "Matematika"
      },
      {
        q: "2. [Ona tili] 'Bola kitob o'qidi' gapida kim o'qidi?",
        options: ["Kitob", "Bola", "O'qidi", "Daftar"],
        answer: 1,
        subject: "Ona tili"
      },
      {
        q: "3. [Tabiatshunoslik] Suv sovuqda (0 darajada) qanday holatga o'tadi?",
        options: ["Bug'ga", "Muzga", "Qaynoq suvga", "O'zgarmaydi"],
        answer: 1,
        subject: "Tabiat"
      },
      {
        q: "4. [Ingliz tili - Guess What! 2] What is this? 🎒",
        options: ["It's a backpack.", "It's an apple.", "It's a dog.", "It's a car."],
        answer: 0,
        subject: "Ingliz tili"
      },
      {
        q: "5. [Mantiq] Bitta qo'lda 5 ta barmoq bo'lsa, 2 ta qo'lda nechta barmoq bor?",
        options: ["8", "10", "12", "15"],
        answer: 1,
        subject: "Mantiq"
      },
      {
        q: "6. [Matematika] Eng kichik ikki xonali son qaysi?",
        options: ["1", "9", "10", "11"],
        answer: 2,
        subject: "Matematika"
      },
      {
        q: "7. [Ona tili] O'zbek tilida nechta unli tovush bor?",
        options: ["5", "6", "7", "8"],
        answer: 1,
        subject: "Ona tili"
      },
      {
        q: "8. [Geografiya] O'zbekistonning poytaxti qaysi shahar?",
        options: ["Samarqand", "Toshkent", "Buxoro", "Xiva"],
        answer: 1,
        subject: "Geografiya"
      },
      {
        q: "9. [Mantiq] Bir yilda nechta oy bor?",
        options: ["10", "11", "12", "14"],
        answer: 2,
        subject: "Mantiq"
      },
      {
        q: "10. [Ingliz tili - Guess What! 2] How do you say 'Kitob' in English?",
        options: ["Book", "Bag", "Desk", "Chair"],
        answer: 0,
        subject: "Ingliz tili"
      }
    ],

    // ------------------------------------------------------------
    // 3-SINF (Matematika, Ona tili va Guess What! 3 rasmiy testlari)
    // ------------------------------------------------------------
    3: [
      {
        q: "1. [Matematika - Darslik] 245 + 132 = ?",
        options: ["377", "367", "357", "387"],
        answer: 1,
        subject: "Matematika"
      },
      {
        q: "2. [Ona tili - Darslik] O'zbek tilida nechta unli tovush bor?",
        options: ["6 ta", "5 ta", "7 ta", "8 ta"],
        answer: 0,
        subject: "Ona tili"
      },
      {
        q: "3. [Tabiat] Yer sharining ko'p qismini nima egallagan?",
        options: ["Quruqlik", "Suv (Okeanlar)", "Muzliklar", "O'rmonlar"],
        answer: 1,
        subject: "Tabiat"
      },
      {
        q: "4. [Informatika] Kompyuterda matn yozish uchun qaysi qurilma ishlatiladi?",
        options: ["Sichqoncha", "Klaviatura", "Monitor", "Printer"],
        answer: 1,
        subject: "Informatika"
      },
      {
        q: "5. [Ingliz tili - Guess What! 3] 'Qayerdan kelgansan?' degan savol ingliz tilida qanday beriladi?",
        options: ["Where are you from?", "What is your name?", "How old are you?", "Where do you live?"],
        answer: 0,
        subject: "Ingliz tili"
      },
      {
        q: "6. [Matematika - Darslik] 7 * 5 = ?",
        options: ["30", "35", "40", "25"],
        answer: 1,
        subject: "Matematika"
      },
      {
        q: "7. [Mantiq] 1 soatda necha daqiqa bor?",
        options: ["50", "60", "100", "24"],
        answer: 1,
        subject: "Mantiq"
      },
      {
        q: "8. [Tarix] Sohibqiron Amir Temur qayerda tavallud topgan?",
        options: ["Toshkent", "Shahrisabz (Kesh)", "Samarqand", "Xiva"],
        answer: 1,
        subject: "Tarix"
      },
      {
        q: "9. [Ona tili - Darslik] Kishilarning ismi qanday harf bilan yoziladi?",
        options: ["Bosh harf", "Kichik harf", "Unli harf", "Undosh harf"],
        answer: 0,
        subject: "Ona tili"
      },
      {
        q: "10. [Ingliz tili - Guess What! 3] 'Men O'zbekistondanman' jumlasining to'g'ri tarjimasini toping:",
        options: ["I'm from Uzbekistan.", "I live in Uzbekistan.", "I go to Uzbekistan.", "I like Uzbekistan."],
        answer: 0,
        subject: "Ingliz tili"
      }
    ],

    // ------------------------------------------------------------
    // 4-SINF (Boshlang'ich bitiruv bosqichi, Guess What! 4 rasmiy testi)
    // ------------------------------------------------------------
    4: [
      {
        q: "1. [Matematika] 250 + 750 yig'indisi nechaga teng?",
        options: ["900", "1000", "1100", "950"],
        answer: 1,
        subject: "Matematika"
      },
      {
        q: "2. [Ona tili] Qaysi so'zda tutuq belgisi (') to'g'ri qo'llangan?",
        options: ["Ma'no", "Ki'tob", "Da'ftar", "Mak'tab"],
        answer: 0,
        subject: "Ona tili"
      },
      {
        q: "3. [Tabiat] Yer Quyosh atrofini to'liq bir marta aylanib chiqishiga qancha vaqt ketadi?",
        options: ["1 oy", "1 yil (365 kun)", "24 soat", "100 kun"],
        answer: 1,
        subject: "Tabiat"
      },
      {
        q: "4. [Ingliz tili - Guess What! 4] Where do animals like monkeys and parrots live?",
        options: ["In the rainforest.", "In the ocean.", "In the desert.", "In the snow."],
        answer: 0,
        subject: "Ingliz tili"
      },
      {
        q: "5. [Informatika] Axborotni qog'ozga chop etib beruvchi qurilma qaysi?",
        options: ["Skaner", "Printer", "Klaviatura", "Mikrofon"],
        answer: 1,
        subject: "Informatika"
      },
      {
        q: "6. [Matematika] Tomoni 8 sm bo'lgan kvadratning perimetri qancha?",
        options: ["16 sm", "32 sm", "64 sm", "24 sm"],
        answer: 1,
        subject: "Matematika"
      },
      {
        q: "7. [Tarix] Al-Xorazmiy jahon fani tarixida qaysi fanning asoschisi hisoblanadi?",
        options: ["Biologiya", "Algebra", "Geografiya", "Kimyo"],
        answer: 1,
        subject: "Tarix"
      },
      {
        q: "8. [Mantiq] Bir sutkada necha soat bor?",
        options: ["12", "24", "48", "60"],
        answer: 1,
        subject: "Mantiq"
      },
      {
        q: "9. [Ingliz tili - Guess What! 4] Complete: She ________ to school every day.",
        options: ["goes", "go", "going", "went"],
        answer: 0,
        subject: "Ingliz tili"
      },
      {
        q: "10. [Tabiat] Inson tanasida qonni butun vujudga tinimsiz haydab beruvchi a'zo qaysi?",
        options: ["O'pka", "Yurak", "Jigar", "Oshqozon"],
        answer: 1,
        subject: "Tabiat"
      }
    ],

    // ------------------------------------------------------------
    // 5-SINF (Botanika, Tarixdan hikoyalar, 5-sinf Ona tili 1-CHSB)
    // ------------------------------------------------------------
    5: [
      {
        q: "1. [Matematika] 125 * 8 ko'paytmasi nechaga teng?",
        options: ["800", "1000", "1200", "950"],
        answer: 1,
        subject: "Matematika"
      },
      {
        q: "2. [Botanika] O'simlik ildizining asosiy biologik vazifasi nima?",
        options: ["Faqat nafas olish", "Suv va minerallarni shimish", "Meva tugish", "Quyosh nuri yutish"],
        answer: 1,
        subject: "Biologiya"
      },
      {
        q: "3. [Tarix] O'zbekiston hududida paydo bo'lgan eng qadimiy davlatlardan biri:",
        options: ["Qadimgi Baqtriya", "Rim imperiyasi", "Fransiya qirolligi", "Misr"],
        answer: 0,
        subject: "Tarix"
      },
      {
        q: "4. [Informatika] Kompyuterning asosiy hisoblash 'miyasi' qaysi?",
        options: ["Monitor", "Protsessor (CPU)", "Klaviatura", "Fleshka"],
        answer: 1,
        subject: "Informatika"
      },
      {
        q: "5. [Ona tili - 1-CHSB] Harflarning ma'lum bir tartibda joylashuvi nima deyiladi?",
        options: ["alifbo", "alifbe", "imlo", "lug'at"],
        answer: 0,
        subject: "Ona tili"
      },
      {
        q: "6. [Matematika] Oddiy kasrlar: 3/4 + 1/4 yig'indisi nechaga teng?",
        options: ["4/8", "1", "1/2", "2"],
        answer: 1,
        subject: "Matematika"
      },
      {
        q: "7. [Ona tili - 1-CHSB] 'Alifbo' so'zi qaysi harflar nomining qo'shilishidan hosil bo'lgan?",
        options: ["alif va bo (be)", "alif va jim", "be va te", "alif va lom"],
        answer: 0,
        subject: "Ona tili"
      },
      {
        q: "8. [Geografiya] Sayyoramizdagi eng katta okean qaysi?",
        options: ["Atlantika", "Tinch okeani", "Hind okeani", "Shimoliy Muz"],
        answer: 1,
        subject: "Geografiya"
      },
      {
        q: "9. [Ona tili - 1-CHSB] Nutq tovushlari ifodalanishiga ko'ra nechaga bo'linadi?",
        options: ["2 ga (unli va undosh)", "3 ga (unli, undosh, tutuq)", "4 ga", "Bo'linmaydi"],
        answer: 0,
        subject: "Ona tili"
      },
      {
        q: "10. [Mantiq] Ketma-ketlik: 5, 10, 15, 20, ... keyingi son qaysi?",
        options: ["22", "25", "30", "24"],
        answer: 1,
        subject: "Mantiq"
      }
    ],

    // ------------------------------------------------------------
    // 6-SINF (Zoologiya, Qadimgi dunyo tarixi, Manfiy sonlar)
    // ------------------------------------------------------------
    6: [
      {
        q: "1. [Matematika] (-15) + (-25) yig'indisini hisoblang:",
        options: ["40", "-40", "10", "-10"],
        answer: 1,
        subject: "Matematika"
      },
      {
        q: "2. [Zoologiya] Baliqlar suv ostida qaysi a'zosi orqali nafas oladi?",
        options: ["O'pka", "Jabra", "Teri", "Qanot"],
        answer: 1,
        subject: "Biologiya"
      },
      {
        q: "3. [Tarix] Qadimgi Olimpiada o'yinlari ilk bor qaysi mamlakatda o'tkazilgan?",
        options: ["Qadimgi Yunoniston (Gretsiya)", "Rim", "Forsiya", "Xitoy"],
        answer: 0,
        subject: "Tarix"
      },
      {
        q: "4. [Geografiya] Dunyodagi eng baland tog' cho'qqisi qaysi?",
        options: ["Monblan", "Everest (Jomolungma)", "Elbrus", "Kilimanjaro"],
        answer: 1,
        subject: "Geografiya"
      },
      {
        q: "5. [Informatika] 1 Kilobayt (KB) axborot necha Baytga teng?",
        options: ["100", "1000", "1024", "2048"],
        answer: 2,
        subject: "Informatika"
      },
      {
        q: "6. [Matematika] 3 ta daftar 6000 so'm bo'lsa, 5 ta daftar qancha turadi?",
        options: ["8000 so'm", "10000 so'm", "12000 so'm", "9000 so'm"],
        answer: 1,
        subject: "Matematika"
      },
      {
        q: "7. [Ingliz tili] Past simple form of the verb 'go':",
        options: ["goes", "went", "gone", "going"],
        answer: 1,
        subject: "Ingliz tili"
      },
      {
        q: "8. [Ona tili] Yasama so'zni toping:",
        options: ["Guldon", "Tosh", "Suv", "Kitob"],
        answer: 0,
        subject: "Ona tili"
      },
      {
        q: "9. [Fizika/Tabiat] Yerning tortishish kuchi tufayli otilgan jism qayerga tushadi?",
        options: ["Yuqoriga", "Pastga (Yerga)", "Yonga", "Muallaq qoladi"],
        answer: 1,
        subject: "Fizika"
      },
      {
        q: "10. [Adabiyot] Hazrat Alisher Navoiy qaysi asrda yashab ijod etgan?",
        options: ["XII asr", "XV asr", "XVIII asr", "XX asr"],
        answer: 1,
        subject: "Adabiyot"
      }
    ],

    // ------------------------------------------------------------
    // 7-SINF (Algebra, Geometriya, Fizika boshlanishi, Kimyo)
    // ------------------------------------------------------------
    7: [
      {
        q: "1. [Algebra] Qisqa ko'paytirish formulasi: (a + b)² = ?",
        options: ["a² + b²", "a² + 2ab + b²", "a² - 2ab + b²", "2a + 2b"],
        answer: 1,
        subject: "Algebra"
      },
      {
        q: "2. [Fizika] Tekis to'g'ri chiziqli harakatda tezlik formulasi:",
        options: ["v = s / t", "v = m * g", "v = s * t", "v = F / m"],
        answer: 0,
        subject: "Fizika"
      },
      {
        q: "3. [Geometriya] Uchburchakning ichki burchaklari yig'indisi necha gradus?",
        options: ["90°", "180°", "360°", "270°"],
        answer: 1,
        subject: "Geometriya"
      },
      {
        q: "4. [Kimyo] Kimyoviy elementlar davriy qonunining muallifi kim?",
        options: ["I. Nyuton", "D.I. Mendeleyev", "N. Bor", "A. Eynshteyn"],
        answer: 1,
        subject: "Kimyo"
      },
      {
        q: "5. [Adabiyot - 1-chorak] G'afur G'ulomning mashhur 'Shum bola' qissasida bosh qahramonning ismi nima?",
        options: ["Qoravoy", "Sariq", "Hoshimjon", "Omon"],
        answer: 0,
        subject: "Adabiyot"
      },
      {
        q: "6. [Tarix] Amir Temur saltanatining poytaxti qaysi shahar bo'lgan?",
        options: ["Buxoro", "Samarqand", "Shahrisabz", "Xiva"],
        answer: 1,
        subject: "Tarix"
      },
      {
        q: "7. [Informatika] Internetda veb-sahifalar yaratishda qaysi gipermatn tili ishlatiladi?",
        options: ["HTML", "Python", "C++", "Pascal"],
        answer: 0,
        subject: "Informatika"
      },
      {
        q: "8. [Ingliz tili - Guess What! 7] What is the past tense of 'buy'?",
        options: ["bought", "buyed", "buys", "buying"],
        answer: 0,
        subject: "Ingliz tili"
      },
      {
        q: "9. [Ona tili - 1-chorak] Qaysi qatorda so'zlar imlo qoidasiga ko'ra to'g'ri yozilgan?",
        options: ["video, kompyuter, intellekt, hisobchi", "vidiyo, kampyuter, intelekt, xisobchi", "video, kampyuter, intellekt, hisobchi", "video, kompyuter, intelekt, xaydovchi"],
        answer: 0,
        subject: "Ona tili"
      },
      {
        q: "10. [Adabiyot - 1-chorak] Ernest Heminguey fikricha, badiiy asarning qaysi qismi muhimroq?",
        options: ["Yozilmagan qismi (suv osti)", "Faqat sarlavhasi", "Yozilgan ochiq qismi", "Xotima qismi"],
        answer: 0,
        subject: "Adabiyot"
      }
    ],

    // ------------------------------------------------------------
    // 8-SINF (Kvadrat tenglamalar, Om qonuni, Osh tuzi, Pifagor)
    // ------------------------------------------------------------
    8: [
      {
        q: "1. [Algebra] Kvadrat tenglama: x² - 9 = 0 ning ildizlarini toping:",
        options: ["faqat 3", "3 va -3", "faqat -3", "9 va -9"],
        answer: 1,
        subject: "Algebra"
      },
      {
        q: "2. [Fizika] Elektr zanjiri qismi uchun Om qonuni qaysi?",
        options: ["I = U / R", "I = U * R", "P = I² * R", "U = I / R"],
        answer: 0,
        subject: "Fizika"
      },
      {
        q: "3. [Kimyo] Osh tuzining kimyoviy formulasi qaysi?",
        options: ["HCl", "NaCl", "NaOH", "CaCO3"],
        answer: 1,
        subject: "Kimyo"
      },
      {
        q: "4. [Biologiya] Odam yuragi necha kameradan (bo'lmacha va qorinchalar) iborat?",
        options: ["2", "3", "4", "5"],
        answer: 2,
        subject: "Biologiya"
      },
      {
        q: "5. [Geometriya] To'g'ri burchakli uchburchakda Pifagor teoremasi: c² = ?",
        options: ["a² - b²", "a² + b²", "2ab", "a + b"],
        answer: 1,
        subject: "Geometriya"
      },
      {
        q: "6. [Informatika] Python dasturlash tilida ma'lumotni ekranga chiqarish buyrug'i:",
        options: ["echo()", "print()", "write()", "output()"],
        answer: 1,
        subject: "Informatika"
      },
      {
        q: "7. [O'zbekiston tarixi] Jaloliddin Manguberdi qaysi bosqinchilarga qarshi mardona kurashgan?",
        options: ["Arablarga", "Mo'g'ullarga (Chingizxon)", "Rimliklarga", "Inglizlarga"],
        answer: 1,
        subject: "Tarix"
      },
      {
        q: "8. [Ingliz tili - Guess What! 8] What is the past participle of 'break'?",
        options: ["broken", "breaked", "broke", "breaking"],
        answer: 0,
        subject: "Ingliz tili"
      },
      {
        q: "9. [Ingliz tili - Guess What! 8] If something is 'ancient', what does it mean?",
        options: ["Very old, from long ago", "Brand new", "Extremely fast", "Very expensive"],
        answer: 0,
        subject: "Ingliz tili"
      },
      {
        q: "10. [Adabiyot] O'zbek adabiyotida ilk realistik roman 'O'tkan kunlar' muallifi kim?",
        options: ["Cho'lpon", "Abdulla Qodiriy", "Oybek", "Fitrat"],
        answer: 1,
        subject: "Adabiyot"
      }
    ],

    // ------------------------------------------------------------
    // 9-SINF (Trigonometriya, Gravitatsiya, Sitologiya, Konstitutsiya)
    // ------------------------------------------------------------
    9: [
      {
        q: "1. [Trigonometriya] Asosiy trigonometrik ayniyat: sin²(α) + cos²(α) = ?",
        options: ["0", "1", "2", "tan(α)"],
        answer: 1,
        subject: "Matematika"
      },
      {
        q: "2. [Fizika] Nyutonning butun olam tortishish qonuni formulasi:",
        options: ["F = G * (m1*m2)/R²", "F = m*a", "E = m*g*h", "p = m*v"],
        answer: 0,
        subject: "Fizika"
      },
      {
        q: "3. [Kimyo] Barcha organik moddalarning tarkibida mavjud bo'lgan asosiy element:",
        options: ["Temir (Fe)", "Uglerod (C)", "Kislorod (O)", "Azot (N)"],
        answer: 1,
        subject: "Kimyo"
      },
      {
        q: "4. [Biologiya] Hujayrada oqsillarni biosintez qiluvchi asosiy organoid:",
        options: ["Lizosoma", "Ribosoma", "Vakuola", "Xloroplast"],
        answer: 1,
        subject: "Biologiya"
      },
      {
        q: "5. [Geometriya] Radiusi R bo'lgan doiraning yuzi formulasi qaysi?",
        options: ["2πR", "πR²", "4πR²", "πD"],
        answer: 1,
        subject: "Geometriya"
      },
      {
        q: "6. [Informatika] Ikkilik sanoq sistemasida qaysi raqamlar ishlatiladi?",
        options: ["1 va 2", "0 va 1", "0 dan 9 gacha", "Faqat 0"],
        answer: 1,
        subject: "Informatika"
      },
      {
        q: "7. [Tarix] Ikkinchi jahon urushi qaysi yillarda sodir bo'lgan?",
        options: ["1914-1918", "1939-1945", "1941-1945", "1905-1917"],
        answer: 1,
        subject: "Tarix"
      },
      {
        q: "8. [Ingliz tili] 'I have been living in Tashkent for 5 years.' Which tense is this?",
        options: ["Past Simple", "Present Perfect Continuous", "Future Perfect", "Past Perfect"],
        answer: 1,
        subject: "Ingliz tili"
      },
      {
        q: "9. [Huquq] O'zbekiston Respublikasi Konstitutsiyasi qachon qabul qilingan?",
        options: ["1991-yil 1-sentyabr", "1992-yil 8-dekabr", "1993-yil 18-noyabr", "1990-yil 24-mart"],
        answer: 1,
        subject: "Huquq"
      },
      {
        q: "10. [Ona tili] Bosh va ergash gapni biriktiruvchi vositalar qanday ataladi?",
        options: ["Ergashtiruvchi bog'lovchilar", "Undovlar", "Yuklamalar", "Faqat vergul"],
        answer: 0,
        subject: "Ona tili"
      }
    ],

    // ------------------------------------------------------------
    // 10-SINF (Progressiyalar, Ideal gaz, Benzol, DNK, Relyatsion baza)
    // ------------------------------------------------------------
    10: [
      {
        q: "1. [Algebra] Arifmetik progressiya: a1 = 3, d = 4 bo'lsa, a5 nechaga teng?",
        options: ["15", "19", "21", "23"],
        answer: 1,
        subject: "Algebra"
      },
      {
        q: "2. [Fizika] Ideal gaz holat tenglamasi (Mendeleyev-Klapeyron tenglamasi):",
        options: ["P*V = (m/M)*R*T", "E = k*T", "P = F/S", "Q = c*m*ΔT"],
        answer: 0,
        subject: "Fizika"
      },
      {
        q: "3. [Kimyo] Benzol (C6H6) qaysi uglevodorodlar sinfiga mansub?",
        options: ["Alkanlar", "Aromatik uglevodorodlar (Arenlar)", "Alkenlar", "Alkinlar"],
        answer: 1,
        subject: "Kimyo"
      },
      {
        q: "4. [Genetika] Hujayrada genetik axborotni saqlovchi va o'tkazuvchi nuklein kislota:",
        options: ["ATF", "DNK", "Ferment", "Lipid"],
        answer: 1,
        subject: "Biologiya"
      },
      {
        q: "5. [Stereometriya] Qirrasi 3 sm bo'lgan kubning hajmi (V) qancha?",
        options: ["9 sm³", "18 sm³", "27 sm³", "36 sm³"],
        answer: 2,
        subject: "Geometriya"
      },
      {
        q: "6. [Informatika] Relyatsion ma'lumotlar bazasini boshqarish tili qaysi?",
        options: ["HTML", "SQL", "CSS", "JSON"],
        answer: 1,
        subject: "Informatika"
      },
      {
        q: "7. [O'zbekiston tarixi] XX asr boshidagi Jadidchilik harakatining bosh maqsadi nima edi?",
        options: ["Ma'rifatparvarlik va milliy taraqqiyot", "Monarxiyani saqlash", "Faqat savdo", "Urush"],
        answer: 0,
        subject: "Tarix"
      },
      {
        q: "8. [Ingliz tili] Passive voice: 'New schools ___ in our city every year.'",
        options: ["are built", "was built", "were built", "been built"],
        answer: 0,
        subject: "Ingliz tili"
      },
      {
        q: "9. [Iqtisodiyot] Bozor iqtisodiyotida tovar narxi oshsa, unga bo'lgan talab odatda qanday o'zgaradi?",
        options: ["Oshadi", "Kamayadi", "O'zgarmaydi", "Yo'qoladi"],
        answer: 1,
        subject: "Iqtisodiyot"
      },
      {
        q: "10. [Mantiq] Ketma-ketlik: 3, 9, 27, 81, ... keyingi son qaysi?",
        options: ["162", "243", "180", "300"],
        answer: 1,
        subject: "Mantiq"
      }
    ],

    // ------------------------------------------------------------
    // 11-SINF (DTM/OTM darajasidagi savollar, Hosila, E=mc², ATF, BMT)
    // ------------------------------------------------------------
    11: [
      {
        q: "1. [Matematika] f(x) = x³ - 5x + 7 funksiyaning hosilasini f'(x) toping:",
        options: ["3x² - 5", "3x² + 5", "x² - 5", "3x - 5"],
        answer: 0,
        subject: "Matematika"
      },
      {
        q: "2. [Fizika] Eynshteynning massaning energiyaga mutanosiblik qonuni formulasi:",
        options: ["E = m * c²", "E = h * v", "p = m * v", "F = G * m1*m2/r²"],
        answer: 0,
        subject: "Fizika"
      },
      {
        q: "3. [Kimyo] Oqsillar qanday monomerlarning polikondensatlanishidan hosil bo'ladi?",
        options: ["Glyukoza", "Aminokislotalar", "Yog' kislotalari", "Nukleotidlar"],
        answer: 1,
        subject: "Kimyo"
      },
      {
        q: "4. [Biologiya] Hujayraning universal energiya manbai (akkumulyatori) qaysi birikma?",
        options: ["DNK", "ATF (Adenozintrifosfat)", "RNK", "Glyukagon"],
        answer: 1,
        subject: "Biologiya"
      },
      {
        q: "5. [Geometriya] Radiusi R bo'lgan sferaning sirt yuzi formulasi:",
        options: ["4πR²", "(4/3)πR³", "2πR", "πR²"],
        answer: 0,
        subject: "Geometriya"
      },
      {
        q: "6. [Informatika] O(log n) murakkablikdagi eng samarali qidiruv algoritmi qaysi?",
        options: ["Chiziqli qidiruv", "Binar (ikkilik) qidiruv", "Pufaksimon saralash", "Tasodifiy"],
        answer: 1,
        subject: "Informatika"
      },
      {
        q: "7. [Jahon tarixi] Birlashgan Millatlar Tashkiloti (BMT) nechanchi yilda ta'sis etilgan?",
        options: ["1918-yil", "1945-yil", "1991-yil", "1939-yil"],
        answer: 1,
        subject: "Tarix"
      },
      {
        q: "8. [Ingliz tili - Grade 11] If someone is feeling 'under the weather', what does it mean?",
        options: ["They are feeling sick or unwell", "They are caught in a rainstorm", "They are extremely excited", "They are busy preparing for exams"],
        answer: 0,
        subject: "Ingliz tili"
      },
      {
        q: "9. [Adabiyot] 'Kumush qish o'z oq libosini kiydi' jumlasi qaysi san'atga misol?",
        options: ["Tashxis (jonlantirish)", "Istiora", "Tazod", "Mubolag'a"],
        answer: 0,
        subject: "Adabiyot"
      },
      {
        q: "10. [Ingliz tili - Grade 11] Which idiom means 'to disclose a secret carelessly or prematurely'?",
        options: ["Spill the beans", "Bite the bullet", "Break a leg", "Hit the books"],
        answer: 0,
        subject: "Ingliz tili"
      }
    ]
  };

  // ============================================================
  // OLIMPIADA MEXANIZMI (OLYMPIAD ENGINE)
  // Sinf tanlash (1-11), har bir sinfga mos savollarni yuklash
  // ============================================================
  window.OlympiadEngine = {
    selectedGrade: 8,
    currentIndex: 0,
    answers: {},
    comboStreak: 0,
    maxStreak: 0,
    totalPoints: 0,
    timerSeconds: 45,
    timerInterval: null,
    isActive: false,

    // Sinfni o'rnatish (1-11)
    setGrade: function (grade) {
      grade = parseInt(grade, 10);
      if (isNaN(grade) || grade < 1 || grade > 11) grade = 8;
      this.selectedGrade = grade;

      // Tugmalar faolligini yangilash
      var pills = document.querySelectorAll('.ol-grade-pill');
      pills.forEach(function (p) {
        var g = parseInt(p.getAttribute('data-grade'), 10);
        p.classList.toggle('active', g === grade);
      });

      // Tavsifni yangilash
      var descEl = document.getElementById('ol-selected-grade-desc');
      if (descEl && window.GRADE_DESCRIPTIONS[grade]) {
        descEl.innerHTML = '<i class="fas fa-check-circle" style="color:#34d399;"></i> <strong>' + grade + '-sinf:</strong> ' + window.GRADE_DESCRIPTIONS[grade];
      }

      if (window.SoundFX) window.SoundFX.playClick();
    },

    // Foydalanuvchining o'z sinfini avtomatik aniqlash
    initGradeFromUser: function () {
      var acc = window.AccountsManager ? window.AccountsManager.getCurrentAccount() : null;
      var g = (acc && acc.grade) ? parseInt(acc.grade, 10) : 8;
      this.setGrade(g);
    },

    getCurrentQuestions: function () {
      return window.OLYMPIAD_QUESTIONS_BY_GRADE[this.selectedGrade] || window.OLYMPIAD_QUESTIONS_BY_GRADE[1];
    },

    start: function () {
      this.currentIndex = 0;
      this.answers = {};
      this.comboStreak = 0;
      this.maxStreak = 0;
      this.totalPoints = 0;
      this.isActive = true;

      if (window.SoundFX) window.SoundFX.playClick();

      var welcomeView = document.getElementById('olympiad-welcome-view');
      var quizView = document.getElementById('olympiad-quiz-view');
      var resultView = document.getElementById('olympiad-result-view');

      if (welcomeView) welcomeView.style.display = 'none';
      if (quizView) quizView.style.display = 'block';
      if (resultView) resultView.style.display = 'none';

      this.renderQuestion();
      this.renderNavigator();
      this.startTimer();
    },

    startTimer: function () {
      var self = this;
      if (this.timerInterval) clearInterval(this.timerInterval);
      this.timerSeconds = 45;
      this.updateTimerUI();

      this.timerInterval = setInterval(function () {
        self.timerSeconds--;
        self.updateTimerUI();
        if (self.timerSeconds <= 0) {
          self.timeUp();
        }
      }, 1000);
    },

    updateTimerUI: function () {
      var el = document.getElementById('olympiad-timer-num');
      var bar = document.getElementById('olympiad-timer-bar');
      if (el) el.textContent = this.timerSeconds + 's';
      if (bar) {
        var pct = (this.timerSeconds / 45) * 100;
        bar.style.width = pct + '%';
        if (this.timerSeconds <= 10) {
          bar.style.backgroundColor = '#ef4444';
        } else {
          bar.style.backgroundColor = '#ec4899';
        }
      }
    },

    timeUp: function () {
      clearInterval(this.timerInterval);
      if (window.SoundFX) window.SoundFX.playWrong();
      this.comboStreak = 0;
      this.updateComboUI();
      this.nextQuestion();
    },

    renderQuestion: function () {
      var questions = this.getCurrentQuestions();
      var q = questions[this.currentIndex];
      if (!q) {
        this.finish();
        return;
      }

      var qNumEl = document.getElementById('olympiad-q-num');
      var subjEl = document.getElementById('olympiad-q-subject');
      var gradeTagEl = document.getElementById('olympiad-q-grade-tag');
      var textEl = document.getElementById('olympiad-q-text');

      if (qNumEl) qNumEl.textContent = (this.currentIndex + 1) + ' / ' + questions.length;
      if (subjEl) subjEl.textContent = q.subject;
      if (gradeTagEl) gradeTagEl.textContent = this.selectedGrade + '-sinf Olimpiadasi';
      var displayQ = (typeof window.cleanQuestionTitle === 'function')
        ? window.cleanQuestionTitle(q.q)
        : q.q;
      if (textEl) textEl.textContent = displayQ;

      var optionsBox = document.getElementById('olympiad-options-box');
      var letters = ['A', 'B', 'C', 'D'];
      var html = '';
      var selectedAns = this.answers[this.currentIndex];

      for (var i = 0; i < q.options.length; i++) {
        var optCls = 'olympiad-option-btn';
        if (selectedAns !== undefined) {
          if (selectedAns === i) {
            optCls += (selectedAns === q.answer ? ' correct' : ' wrong');
          } else if (i === q.answer) {
            optCls += ' correct';
          }
        }
        html += '<button type="button" class="' + optCls + '" onclick="OlympiadEngine.selectAnswer(' + i + ')">';
        html += '  <span class="ol-opt-letter">' + letters[i] + '</span>';
        html += '  <span class="ol-opt-text">' + q.options[i] + '</span>';
        html += '</button>';
      }

      if (optionsBox) optionsBox.innerHTML = html;
      this.updateComboUI();
      this.renderNavigator();
    },

    renderNavigator: function () {
      var navGrid = document.getElementById('ol-nav-grid');
      if (!navGrid) return;
      var questions = this.getCurrentQuestions();
      var answeredCount = Object.keys(this.answers).length;

      var badge = document.getElementById('olympiad-nav-badge');
      if (badge) {
        badge.textContent = 'Javob berildi: ' + answeredCount + ' / ' + questions.length;
      }

      var html = '';
      for (var i = 0; i < questions.length; i++) {
        var isCurrent = (i === this.currentIndex);
        var selected = this.answers[i];
        var isAnswered = (selected !== undefined && selected !== null);
        var isCorrect = isAnswered && (selected === questions[i].answer);

        var cls = 'ol-nav-btn';
        if (isCurrent) cls += ' current';
        if (isAnswered) {
          cls += ' answered ' + (isCorrect ? 'nav-correct' : 'nav-wrong');
        }
        var icon = isAnswered 
          ? (isCorrect 
              ? '<span class="ol-nav-icon ok"><i class="fas fa-check"></i></span>' 
              : '<span class="ol-nav-icon err"><i class="fas fa-times"></i></span>') 
          : '';

        html += '<button type="button" class="' + cls + '" onclick="OlympiadEngine.goToQuestion(' + i + ')" title="Savol ' + (i + 1) + '">' +
          '<span class="ol-btn-num">' + (i + 1) + '</span>' +
          icon +
          '</button>';
      }
      navGrid.innerHTML = html;

      var currentBtn = navGrid.querySelector('.ol-nav-btn.current');
      if (currentBtn && typeof currentBtn.scrollIntoView === 'function') {
        currentBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      }

      var prevBtn = document.getElementById('ol-prev-btn');
      if (prevBtn) prevBtn.disabled = (this.currentIndex === 0);
    },

    goToQuestion: function (idx) {
      if (!this.isActive) return;
      var questions = this.getCurrentQuestions();
      if (idx >= 0 && idx < questions.length) {
        this.currentIndex = idx;
        this.renderQuestion();
        this.startTimer();
      }
    },

    prevQuestion: function () {
      if (this.currentIndex > 0) {
        this.goToQuestion(this.currentIndex - 1);
      }
    },

    confirmFinish: function () {
      if (!this.isActive) return;
      var questions = this.getCurrentQuestions();
      var answered = Object.keys(this.answers).length;
      if (answered < questions.length) {
        if (confirm("Siz hali barcha savollarga javob bermadingiz (" + answered + " / " + questions.length + "). Olimpiadani yakunlashni tasdiqlaysizmi?")) {
          this.finish();
        }
      } else {
        this.finish();
      }
    },

    selectAnswer: function (optIdx) {
      if (!this.isActive) return;
      var questions = this.getCurrentQuestions();
      var q = questions[this.currentIndex];
      var isCorrect = (optIdx === q.answer);

      this.answers[this.currentIndex] = optIdx;

      if (isCorrect) {
        this.comboStreak++;
        if (this.comboStreak > this.maxStreak) this.maxStreak = this.comboStreak;

        var multiplier = this.comboStreak >= 5 ? 2.5 : (this.comboStreak >= 3 ? 1.8 : 1.2);
        var earned = Math.round(50 * multiplier);
        this.totalPoints += earned;

        if (window.SoundFX) window.SoundFX.playCorrect();
      } else {
        this.comboStreak = 0;
        if (window.SoundFX) window.SoundFX.playWrong();
      }

      this.updateComboUI();
      clearInterval(this.timerInterval);

      var self = this;
      setTimeout(function () {
        self.nextQuestion();
      }, 400);
    },

    updateComboUI: function () {
      var streakEl = document.getElementById('olympiad-combo-num');
      var scoreEl = document.getElementById('olympiad-live-score');
      if (streakEl) {
        streakEl.textContent = this.comboStreak + 'x COMBO';
        streakEl.style.display = this.comboStreak >= 2 ? 'inline-block' : 'none';
      }
      if (scoreEl) scoreEl.textContent = this.totalPoints + ' ball';
    },

    nextQuestion: function () {
      var questions = this.getCurrentQuestions();
      if (this.currentIndex < questions.length - 1) {
        this.currentIndex++;
        this.renderQuestion();
        this.startTimer();
      } else {
        this.finish();
      }
    },

    finish: function () {
      this.isActive = false;
      if (this.timerInterval) clearInterval(this.timerInterval);

      var questions = this.getCurrentQuestions();
      var correctCount = 0;
      for (var i = 0; i < questions.length; i++) {
        if (this.answers[i] === questions[i].answer) {
          correctCount++;
        }
      }

      if (window.SoundFX) window.SoundFX.playFanfare();

      // Akkauntga ball qo'shish
      if (window.AccountsManager) {
        window.AccountsManager.addScore(this.totalPoints, this.selectedGrade + '-sinf Olimpiadasi');
      }

      // Yutuq berish
      if (window.AchievementsManager) {
        window.AchievementsManager.unlock('olympiad');
        if (correctCount === 10) window.AchievementsManager.unlock('sniper');
      }

      document.getElementById('olympiad-quiz-view').style.display = 'none';
      document.getElementById('olympiad-result-view').style.display = 'block';

      document.getElementById('ol-res-correct').textContent = correctCount + ' / 10';
      document.getElementById('ol-res-score').textContent = '+' + this.totalPoints + ' ball';
      document.getElementById('ol-res-streak').textContent = this.maxStreak + ' ta ketma-ket';

      var currentAcc = window.AccountsManager ? window.AccountsManager.getCurrentAccount() : null;
      var name = currentAcc ? (currentAcc.firstName + ' ' + (currentAcc.lastName || '')) : 'O\'quvchi';

      document.getElementById('ol-cert-name').textContent = name;
      document.getElementById('ol-cert-class').textContent = this.selectedGrade + '-sinf Maktab Olimpiadasi Ishtirokchisi';
      document.getElementById('ol-cert-score').textContent = this.totalPoints + ' ball (' + correctCount + '/10 to\'g\'ri)';
      
      var now = new Date();
      var months = ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentabr', 'oktabr', 'noyabr', 'dekabr'];
      var dateEl = document.getElementById('ol-cert-date');
      if (dateEl) dateEl.textContent = now.getDate() + '-' + months[now.getMonth()] + ', ' + now.getFullYear() + '-yil';
    }
  };

  // Faqat diplomni chop etish funksiyasi
  window.printOlympiadDiploma = function () {
    var dateEl = document.getElementById('ol-cert-date');
    if (dateEl && (!dateEl.textContent || dateEl.textContent === '2026-yil')) {
      var now = new Date();
      var months = ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentabr', 'oktabr', 'noyabr', 'dekabr'];
      dateEl.textContent = now.getDate() + '-' + months[now.getMonth()] + ', ' + now.getFullYear() + '-yil';
    }
    window.print();
  };

  // DOM yuklanganda SoundFX va Olimpiada sinfini initsializatsiya qilish
  document.addEventListener('DOMContentLoaded', function () {
    if (window.SoundFX) window.SoundFX.init();
    setTimeout(function () {
      if (window.OlympiadEngine) window.OlympiadEngine.initGradeFromUser();
      
      // Diplomni to'g'ridan-to'g'ri tekshirish uchun (?test_diplom=1 yoki #diplom)
      if (window.location.search.indexOf('test_diplom') !== -1 || window.location.hash.indexOf('diplom') !== -1) {
        if (typeof navigateTo === 'function') navigateTo('page-olympiad');
        var intro = document.getElementById('olympiad-welcome-view');
        var quiz = document.getElementById('olympiad-quiz-view');
        var res = document.getElementById('olympiad-result-view');
        if (intro) intro.style.display = 'none';
        if (quiz) quiz.style.display = 'none';
        if (res) res.style.display = 'block';
        
        var currentAcc = window.AccountsManager ? window.AccountsManager.getCurrentAccount() : null;
        var name = currentAcc ? (currentAcc.firstName + ' ' + (currentAcc.lastName || '')) : 'Sardorbek Yusupov';
        if (document.getElementById('ol-cert-name')) document.getElementById('ol-cert-name').textContent = name;
        if (document.getElementById('ol-cert-class')) document.getElementById('ol-cert-class').textContent = '8-A sinf Maktab Olimpiadasi G\'olibi';
        if (document.getElementById('ol-cert-score')) document.getElementById('ol-cert-score').textContent = '540 ball (8/10 to\'g\'ri)';
        
        var now = new Date();
        var months = ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentabr', 'oktabr', 'noyabr', 'dekabr'];
        var dateEl = document.getElementById('ol-cert-date');
        if (dateEl) dateEl.textContent = now.getDate() + '-' + months[now.getMonth()] + ', ' + now.getFullYear() + '-yil';
      }
    }, 400);
  });

})();
