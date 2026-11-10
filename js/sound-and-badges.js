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
    // 1-SINF (Boshlang'ich maktab bilimlari)
    // ------------------------------------------------------------
    1: [
      { q: "[Matematika] 5 + 3 yig'indisi nechaga teng?", options: ["8", "7", "9", "6"], answer: 0, subject: "Matematika" },
      { q: "[Ona tili] O'zbek alifbosida nechta harf bor?", options: ["29 ta", "26 ta", "30 ta", "32 ta"], answer: 0, subject: "Ona tili" },
      { q: "[O'qish] 'Bilim - baxt ...' maqolini to'ldiring:", options: ["kaliti", "yo'li", "eshigi", "uyi"], answer: 0, subject: "O'qish" },
      { q: "[Tabiat] Bir yilda necha fasl bor?", options: ["4 ta", "2 ta", "3 ta", "5 ta"], answer: 0, subject: "Tabiat" },
      { q: "[Matematika] 10 dan 4 ni ayirsak necha qoladi?", options: ["6", "5", "7", "4"], answer: 0, subject: "Matematika" },
      { q: "[Ona tili] Har bir gap qanday harf bilan boshlanadi?", options: ["Katta (bosh) harf bilan", "Kichik harf bilan", "Raqam bilan", "Nuqta bilan"], answer: 0, subject: "Ona tili" },
      { q: "[Tabiat] Qaysi faslda daraxtlar barg to'kadi?", options: ["Kuzda", "Bahorda", "Yozda", "Qishda"], answer: 0, subject: "Tabiat" },
      { q: "[Matematika] 7 + 5 yig'indisi nechaga teng?", options: ["12", "11", "13", "10"], answer: 0, subject: "Matematika" },
      { q: "[O'qish] 'Zumrad va Qimmat' ertagida qaysi qiz odobli va mehnatkash?", options: ["Zumrad", "Qimmat", "Ikkalasi ham", "Hech biri"], answer: 0, subject: "O'qish" },
      { q: "[Tabiat] Quyosh qaysi tomondan chiqadi?", options: ["Sharqdan", "G'arbdan", "Shimoldan", "Janubdan"], answer: 0, subject: "Tabiat" }
    ],

    // ------------------------------------------------------------
    // 2-SINF (Guess What! 2 Rasmiy Darslik Testlari)
    // ------------------------------------------------------------
    2: [
      { q: "[Ingliz tili - Guess What! 2] What is this? ðŸŽ’", options: ["It's a backpack.", "It's an apple.", "It's a dog.", "It's a car."], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 2] How do you say 'Kitob' in English?", options: ["Book", "Bag", "Desk", "Chair"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 2] What color is the blackboard?", options: ["Black", "White", "Red", "Yellow"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 2] Count the stars: â­ â­ â­ â­", options: ["Four", "Three", "Five", "Two"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 2] What is this? ðŸš—", options: ["Car", "Train", "Plane", "Boat"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 2] What is this? ðŸ§¸", options: ["Teddy bear", "Doll", "Ball", "Robot"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 2] Complete: 'I have got a _____.'", options: ["Robot", "Desk", "Ruler", "Rubber"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 2] Who is she? ðŸ‘©", options: ["Mother", "Father", "Brother", "Uncle"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 2] What is this? ðŸš²", options: ["Bike", "Car", "Bus", "Train"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 2] What do you use to write on paper?", options: ["Pen", "Rubber", "Chair", "Desk"], answer: 0, subject: "Ingliz tili" }
    ],

    // ------------------------------------------------------------
    // 3-SINF (3-sinf Matematika, Ona tili va Guess What! 3 Darsliklari)
    // ------------------------------------------------------------
    3: [
      { q: "[Matematika - Darslik] 245 + 132 yig'indisini hisoblang:", options: ["377", "367", "357", "387"], answer: 0, subject: "Matematika" },
      { q: "[Matematika - Darslik] 7 * 5 ko'paytmasi nechaga teng?", options: ["35", "30", "40", "25"], answer: 0, subject: "Matematika" },
      { q: "[Matematika - Darslik] 700 - 125 ayirmani hisoblang:", options: ["575", "565", "585", "475"], answer: 0, subject: "Matematika" },
      { q: "[Matematika - Darslik] Tomonlari 4 sm va 6 sm bo'lgan to'g'ri to'rtburchak yuzi qancha?", options: ["24 smÂ²", "20 smÂ²", "10 smÂ²", "12 smÂ²"], answer: 0, subject: "Matematika" },
      { q: "[Ona tili - Darslik] O'zbek tilida nechta unli tovush bor?", options: ["6 ta", "5 ta", "7 ta", "8 ta"], answer: 0, subject: "Ona tili" },
      { q: "[Ona tili - Darslik] Kishilarning ismi qanday harf bilan yoziladi?", options: ["Bosh harf bilan", "Kichik harf bilan", "Ixtiyoriy harf bilan", "Qalin harf bilan"], answer: 0, subject: "Ona tili" },
      { q: "[Ona tili - Darslik] 'Katta' so'zining antonimi (qarama-qarshi ma'nosi) qaysi?", options: ["Kichik", "Baland", "Uzun", "Keng"], answer: 0, subject: "Ona tili" },
      { q: "[Ingliz tili - Guess What! 3] Where does a camel live?", options: ["In the desert", "In the ocean", "In the forest", "In the polar region"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 3] What animal is the largest mammal on Earth?", options: ["Blue whale", "Elephant", "Giraffe", "Shark"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 3] What do monkeys like to eat?", options: ["Bananas", "Meat", "Fish", "Cheese"], answer: 0, subject: "Ingliz tili" }
    ],

    // ------------------------------------------------------------
    // 4-SINF (Guess What! 4 Rasmiy Darslik Testlari)
    // ------------------------------------------------------------
    4: [
      { q: "[Ingliz tili - Guess What! 4] Which animal has black and white stripes?", options: ["Zebra", "Lion", "Tiger", "Giraffe"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 4] What is the capital city of the UK?", options: ["London", "Paris", "New York", "Rome"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 4] How many days are there in a year?", options: ["365", "350", "300", "400"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 4] Which of these is a vegetable?", options: ["Carrot", "Apple", "Banana", "Orange"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 4] What is the opposite of 'fast'?", options: ["Slow", "Quick", "Early", "Late"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 4] What do birds have that help them fly?", options: ["Wings", "Fins", "Hands", "Paws"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 4] Complete: My sister is ________ than me.", options: ["taller", "tall", "tallest", "more tall"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 4] What time is it if the big hand is on 12 and the small hand is on 3?", options: ["It's three o'clock.", "It's half past three.", "It's quarter to three.", "It's twelve o'clock."], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 4] Which season is the coldest of the year?", options: ["Winter", "Summer", "Spring", "Autumn"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 4] Complete: We ________ play football yesterday because it was raining.", options: ["couldn't", "can't", "don't", "aren't"], answer: 0, subject: "Ingliz tili" }
    ],

    // ------------------------------------------------------------
    // 5-SINF (5-sinf Ona tili 1-CHSB Rasmiy Testlari)
    // ------------------------------------------------------------
    5: [
      { q: "[Ona tili - 1-CHSB] Harflarning ma'lum bir tartibda joylashuvi nima deyiladi?", options: ["alifbo", "alifbe", "imlo", "lug'at"], answer: 0, subject: "Ona tili" },
      { q: "[Ona tili - 1-CHSB] 'Alifbo' so'zi qaysi harflar nomining qo'shilishidan hosil bo'lgan?", options: ["alif va bo (be)", "alif va jim", "be va te", "alif va lom"], answer: 0, subject: "Ona tili" },
      { q: "[Ona tili - 1-CHSB] Nutq tovushlari ifodalanishiga ko'ra nechaga bo'linadi?", options: ["2 ga (unli va undosh)", "3 ga (unli, undosh, tutuq)", "4 ga", "Bo'linmaydi"], answer: 0, subject: "Ona tili" },
      { q: "[Ona tili - 1-CHSB] O'zbek alifbosida nechta harf va nechta belgi bor?", options: ["29 ta harf va 1 ta tutuq belgisi", "28 ta harf va 2 ta belgi", "30 ta harf", "26 ta harf"], answer: 0, subject: "Ona tili" },
      { q: "[Ona tili - 1-CHSB] Jarangli undosh tovush berilgan qatorni toping:", options: ["b, d, g, v, z", "p, t, k, f, s", "m, n, l, r", "x, h, ch, sh"], answer: 0, subject: "Ona tili" },
      { q: "[Ona tili - 1-CHSB] Qaysi qatordagi so'zlar bo'g'inga to'g'ri ajratilgan?", options: ["tosh-qin, qax-ra-mon", "to-shqin, qa-xramon", "toshq-in, qaxr-amon", "t-oshqin, q-axramon"], answer: 0, subject: "Ona tili" },
      { q: "[Ona tili - 1-CHSB] So'z tarkibidagi ma'noli qismlar qaysilar?", options: ["Asos va qo'shimcha", "Bo'g'in va tovush", "Harf va belgi", "So'z va gap"], answer: 0, subject: "Ona tili" },
      { q: "[Ona tili - 1-CHSB] Qaysi so'z turkumi shaxs, narsa va hodisalarning nomini bildiradi?", options: ["Ot", "Sifat", "Son", "Fe'l"], answer: 0, subject: "Ona tili" },
      { q: "[Ona tili - 1-CHSB] Yasama so'zni toping:", options: ["Guldon", "Tosh", "Suv", "Daraxt"], answer: 0, subject: "Ona tili" },
      { q: "[Ona tili - 1-CHSB] Sinonim so'zlar qatorini toping:", options: ["Chiroyli, go'zal, ko'rkam", "Katta, kichik, baland", "Oq, qora, qizil", "Yaxshi, yomon, xunuk"], answer: 0, subject: "Ona tili" }
    ],

    // ------------------------------------------------------------
    // 6-SINF (6-sinf Darslik Dasturi)
    // ------------------------------------------------------------
    6: [
      { q: "[Matematika] (-15) + (-25) yig'indisini hisoblang:", options: ["-40", "40", "10", "-10"], answer: 0, subject: "Matematika" },
      { q: "[Zoologiya] Qushlarning uchishiga moslashgan asosiy organi:", options: ["Qanotlari va havo xaltachalari", "Faqat dumi", "Tuyog'i", "Panjasi"], answer: 0, subject: "Biologiya" },
      { q: "[Tarix] Qadimgi Misr ehromlari kimlar uchun maqbara sifatida qurilgan?", options: ["Fir'avnlar", "Oddiy dehqonlar", "Askarlar", "Savdogarlar"], answer: 0, subject: "Tarix" },
      { q: "[Geografiya] Dunyodagi eng baland cho'qqi (Everest) qaysi tog' tizmasida?", options: ["Himolay tog'lari", "Tyanshan", "Alp", "Kordilyera"], answer: 0, subject: "Geografiya" },
      { q: "[Ona tili] Fe'lning zamonlari nechta?", options: ["3 ta (o'tgan, hozirgi, kelasi)", "2 ta", "4 ta", "5 ta"], answer: 0, subject: "Ona tili" },
      { q: "[Informatika] Matn muharriri dasturi qaysi?", options: ["Microsoft Word", "Photoshop", "Excel", "Paint"], answer: 0, subject: "Informatika" },
      { q: "[Ingliz tili] Past simple form of the verb 'go':", options: ["went", "goes", "gone", "going"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ona tili] Yasama so'zni toping:", options: ["Guldon", "Tosh", "Suv", "Kitob"], answer: 0, subject: "Ona tili" },
      { q: "[Matematika] 3/5 kasrni o'nli kasr ko'rinishida yozing:", options: ["0.6", "0.35", "0.53", "1.5"], answer: 0, subject: "Matematika" },
      { q: "[Tarix] Buyuk ipak yo'li qaysi davlatlarni bog'lagan?", options: ["Xitoy, O'rta Osiyo va O'rta yer dengizi", "Faqat Amerika", "Faqat Avstraliya", "Faqat Afrika"], answer: 0, subject: "Tarix" }
    ],

    // ------------------------------------------------------------
    // 7-SINF (7-sinf Ona tili, Adabiyot va Guess What! 7 Darsliklari)
    // ------------------------------------------------------------
    7: [
      { q: "[Ona tili - 1-CHSB] Qaysi qatorda faqat yasama sifatlar berilgan?", options: ["aqlli, bilag'on, do'stona", "katta, kichik, qizil", "beshta, o'nta, yuzta", "kitob, daftar, qalam"], answer: 0, subject: "Ona tili" },
      { q: "[Ona tili - 1-CHSB] Nisbiy sifat berilgan so'zni toping:", options: ["tosh devor", "shirin choy", "qizil olma", "katta uy"], answer: 0, subject: "Ona tili" },
      { q: "[Adabiyot - 1-chorak] G'afur G'ulomning mashhur 'Shum bola' qissasida bosh qahramonning ismi nima?", options: ["Qoravoy", "Sariq", "Hoshimjon", "Omon"], answer: 0, subject: "Adabiyot" },
      { q: "[Adabiyot - 1-chorak] 'Oq kema' qissasining muallifi kim?", options: ["Chingiz Aytmatov", "Said Ahmad", "O'tkir Hoshimov", "Abdulla Qahhor"], answer: 0, subject: "Adabiyot" },
      { q: "[Ingliz tili - Guess What! 7] What is the past participle of 'write'?", options: ["written", "wrote", "writing", "writes"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 7] If you freeze water, what does it turn into?", options: ["Ice", "Steam", "Gas", "Juice"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 7] Which planet is known as the Red Planet?", options: ["Mars", "Jupiter", "Saturn", "Venus"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 7] Complete: She hasn't arrived ________.", options: ["yet", "already", "just", "since"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 7] What is a large body of salt water called?", options: ["Ocean", "Pond", "River", "Stream"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 7] Choose the synonym of 'gigantic':", options: ["Huge", "Tiny", "Weak", "Narrow"], answer: 0, subject: "Ingliz tili" }
    ],

    // ------------------------------------------------------------
    // 8-SINF (Guess What! 8 Rasmiy Darslik Testlari)
    // ------------------------------------------------------------
    8: [
      { q: "[Ingliz tili - Guess What! 8] If something is 'ancient', what does it mean?", options: ["Very old, from long ago", "Brand new", "Extremely fast", "Very expensive"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 8] Which country is home to the Kangaroo?", options: ["Australia", "Canada", "Egypt", "Brazil"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 8] What is the chemical symbol for water?", options: ["H2O", "CO2", "NaCl", "O2"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 8] Complete: If it rains tomorrow, we ________ at home.", options: ["will stay", "stayed", "would stay", "had stayed"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 8] Who painted the Mona Lisa?", options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 8] What is the hardest natural substance on Earth?", options: ["Diamond", "Gold", "Iron", "Granite"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 8] What do you call a person who travels into space?", options: ["Astronaut", "Architect", "Astronomer", "Biologist"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 8] Which ocean is the largest on Earth?", options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 8] Choose the correct passive sentence: 'Shakespeare wrote Hamlet.'", options: ["Hamlet was written by Shakespeare.", "Hamlet is written by Shakespeare.", "Hamlet wrote Shakespeare.", "Hamlet had written Shakespeare."], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Guess What! 8] What is the opposite of 'generous'?", options: ["Mean / Stingy", "Polite", "Helpful", "Kind"], answer: 0, subject: "Ingliz tili" }
    ],

    // ------------------------------------------------------------
    // 9-SINF (9-sinf Darslik Dasturi)
    // ------------------------------------------------------------
    9: [
      { q: "[Kimyo] Kislorodning valentligi nechaga teng?", options: ["II", "I", "III", "IV"], answer: 0, subject: "Kimyo" },
      { q: "[Algebra] Kvadrat tenglama: x^2 - 9 = 0 ildizlarini toping:", options: ["3 va -3", "faqat 3", "faqat -3", "9 va -9"], answer: 0, subject: "Algebra" },
      { q: "[Fizika] Nyutonning ikkinchi qonuni formulasi qaysi?", options: ["F = m * a", "E = m * c^2", "P = U * I", "v = s / t"], answer: 0, subject: "Fizika" },
      { q: "[Biologiya] Odam organizmida qon aylanishining necha doirasi bor?", options: ["2 ta (katta va kichik)", "1 ta", "3 ta", "4 ta"], answer: 0, subject: "Biologiya" },
      { q: "[Geometriya] To'g'ri burchakli uchburchakda Pifagor teoremasi:", options: ["cÂ² = aÂ² + bÂ²", "c = a + b", "S = a * b", "P = 2(a + b)"], answer: 0, subject: "Geometriya" },
      { q: "[Tarix] Amir Temur qaysi yili tavallud topgan?", options: ["1336-yil 9-aprel", "1340-yil", "1370-yil", "1405-yil"], answer: 0, subject: "Tarix" },
      { q: "[Ona tili] Qo'shma gapning nechta asosiy turi bor?", options: ["Bog'langan, ergashgan, bog'lovchisiz", "Faqat sodda", "Faqat bir boshli", "Faqat egasiz"], answer: 0, subject: "Ona tili" },
      { q: "[Informatika] Dasturlashda o'zgaruvchi qiymatini tekshirish operatori qaysi?", options: ["if / else", "print", "def", "class"], answer: 0, subject: "Informatika" },
      { q: "[Ingliz tili] 'Although it was raining, ________'", options: ["we went for a walk", "because we stayed", "despite it rained", "since it was wet"], answer: 0, subject: "Ingliz tili" },
      { q: "[Adabiyot] Alisher Navoiy 'Xamsa'siga nechta doston kiradi?", options: ["5 ta", "4 ta", "6 ta", "7 ta"], answer: 0, subject: "Adabiyot" }
    ],

    // ------------------------------------------------------------
    // 10-SINF (10-sinf Darslik Dasturi)
    // ------------------------------------------------------------
    10: [
      { q: "[Algebra] sin^2(x) + cos^2(x) ifodaning qiymati nechaga teng?", options: ["1", "0", "-1", "2"], answer: 0, subject: "Algebra" },
      { q: "[Fizika] Yorug'likning vakuumdagi tezligi qancha?", options: ["300 000 km/s", "150 000 km/s", "1 000 km/s", "30 000 km/s"], answer: 0, subject: "Fizika" },
      { q: "[Kimyo] Mendeleyev davriy jadvalidagi 1-element qaysi?", options: ["Vodorod (H)", "Geliy (He)", "Kislorod (O)", "Uglerod (C)"], answer: 0, subject: "Kimyo" },
      { q: "[Biologiya] DNK molekulasining qo'sh spirali tuzilishini kimlar kashf etgan?", options: ["Uotson va Krik", "Darvin va Lamark", "Mendel va Morgan", "Paster va Kox"], answer: 0, subject: "Biologiya" },
      { q: "[Geometriya] Stereometriyada kubning nechta qirrasi bor?", options: ["12 ta", "6 ta", "8 ta", "10 ta"], answer: 0, subject: "Geometriya" },
      { q: "[Informatika] Relyatsion ma'lumotlar bazasida ma'lumotlar qanday tuzilmada saqlanadi?", options: ["Jadvallar (Tables)", "Daraxtlar", "Fayllar", "Matnlar"], answer: 0, subject: "Informatika" },
      { q: "[Tarix] Ikkinchi jahon urushi qaysi yillarda bo'lib o'tgan?", options: ["1939-1945", "1914-1918", "1941-1945", "1938-1946"], answer: 0, subject: "Tarix" },
      { q: "[Ingliz tili] 'If I ________ you, I would take that opportunity.'", options: ["were", "was", "am", "have been"], answer: 0, subject: "Ingliz tili" },
      { q: "[Adabiyot] Cho'lponning mashhur romani qaysi?", options: ["Kecha va kunduz", "O'tkan kunlar", "Sarob", "Qutlug' qon"], answer: 0, subject: "Adabiyot" },
      { q: "[Falsafa] 'Bilim - bu kuch' shiorining muallifi:", options: ["Frensis Bekon", "Rene Dekart", "Jon Lokk", "Aristotel"], answer: 0, subject: "Falsafa" }
    ],

    // ------------------------------------------------------------
    // 11-SINF (Grade 11 English Rasmiy Testlari - Set 1 & Set 2)
    // ------------------------------------------------------------
    11: [
      { q: "[Ingliz tili - Grade 11] If someone is feeling 'under the weather', what does it mean?", options: ["They are feeling sick or unwell", "They are caught in a rainstorm", "They are extremely excited", "They are busy preparing for exams"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Grade 11] Which idiom means 'to disclose a secret carelessly or prematurely'?", options: ["Spill the beans", "Bite the bullet", "Break a leg", "Hit the books"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Grade 11] 'Had I known about the meeting, I ________ attended.'", options: ["would have", "will have", "would", "had"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Grade 11] What is a synonym for 'meticulous'?", options: ["Careful and thorough", "Careless", "Quick", "Lazy"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Grade 11] Choose the correct passive form: 'They are building a new library.'", options: ["A new library is being built.", "A new library was built.", "A new library has been built.", "A new library is built."], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Grade 11] What is the meaning of the idiom 'to burn the midnight oil'?", options: ["To study or work late into the night", "To waste precious fuel", "To set something on fire", "To wake up early in the morning"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Grade 11] 'Hardly had she entered the room ________ the phone rang.'", options: ["when", "than", "then", "after"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Grade 11] Which word best describes someone who speaks many languages?", options: ["Polyglot", "Monolingual", "Linguist", "Diplomat"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Grade 11] What does the phrasal verb 'call off' mean?", options: ["To cancel", "To shout loudly", "To postpone", "To telephone someone"], answer: 0, subject: "Ingliz tili" },
      { q: "[Ingliz tili - Grade 11] Choose the antonym of 'abundant':", options: ["Scarce", "Plentiful", "Excessive", "Bountiful"], answer: 0, subject: "Ingliz tili" }
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
      if (this.sessionQuestions && this.sessionQuestions.length > 0) {
        return this.sessionQuestions;
      }
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

      var g = this.selectedGrade;
      var pool = [];

      // Foydalanuvchi yuklagan 865 ta haqiqiy maktab testlaridan tegishli sinf savollarini yig'ish
      if (window.TEST_DATA) {
        var prefix = g + '_';
        for (var key in window.TEST_DATA) {
          if (key.indexOf(prefix) === 0 && Array.isArray(window.TEST_DATA[key])) {
            var subjName = key.replace(prefix, '').replace(/_/g, ' ').toUpperCase();
            var list = window.TEST_DATA[key];
            for (var k = 0; k < list.length; k++) {
              var item = list[k];
              if (item && item.q && Array.isArray(item.options) && item.options.length >= 2) {
                pool.push({
                  q: item.q,
                  options: item.options,
                  answer: item.answer !== undefined ? item.answer : 0,
                  subject: item.subject || subjName
                });
              }
            }
          }
        }
      }

      // Agar darsliklardan 10 tadan ortiq haqiqiy testlar bo'lsa, ulardan 10 tasini tanlab aralashtirish
      if (pool.length >= 10) {
        var shuffled = pool.slice();
        for (var i = shuffled.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var t = shuffled[i];
          shuffled[i] = shuffled[j];
          shuffled[j] = t;
        }
        var selectedTen = shuffled.slice(0, 10);

        this.sessionQuestions = selectedTen.map(function (q) {
          var origOpts = q.options ? q.options.slice() : [];
          if (origOpts.length <= 1) return q;
          var correctText = origOpts[q.answer];

          var shOpts = origOpts.slice();
          for (var i = shOpts.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var t = shOpts[i];
            shOpts[i] = shOpts[j];
            shOpts[j] = t;
          }
          var newAns = shOpts.indexOf(correctText);

          return {
            q: (typeof window.cleanQuestionTitle === 'function') ? window.cleanQuestionTitle(q.q) : q.q,
            options: shOpts,
            answer: newAns >= 0 ? newAns : 0,
            subject: q.subject
          };
        });
      } else {
        // Standart bazadagi rasmiy darslik testlaridan olish
        var defaultList = (window.OLYMPIAD_QUESTIONS_BY_GRADE[g] || window.OLYMPIAD_QUESTIONS_BY_GRADE[1]).slice();
        this.sessionQuestions = defaultList.map(function (q) {
          var origOpts = q.options ? q.options.slice() : [];
          if (origOpts.length <= 1) return q;
          var correctText = origOpts[q.answer];

          var shOpts = origOpts.slice();
          for (var i = shOpts.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var t = shOpts[i];
            shOpts[i] = shOpts[j];
            shOpts[j] = t;
          }
          var newAns = shOpts.indexOf(correctText);

          return {
            q: (typeof window.cleanQuestionTitle === 'function') ? window.cleanQuestionTitle(q.q) : q.q,
            options: shOpts,
            answer: newAns >= 0 ? newAns : 0,
            subject: q.subject
          };
        });
      }

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
      if (this.answers[this.currentIndex] !== undefined) return;
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
