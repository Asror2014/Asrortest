/**
 * 30-maktabtest - Test Mexanizmi (Test Engine)
 * 1-11 sinflar, 60+ fanlar, 100 tagacha test savollari, taymer,
 * savollar navigatsiyasi va batafsil tahliliy natijalar.
 */

// Universal maktab savollari generatori (har qanday fan va sinf uchun)
window.generateFallbackQuestions = function (grade, subject, count) {
  var subName = subject;
  if (window.SUBJECT_ICONS && window.SUBJECT_ICONS[subject]) {
    subName = window.SUBJECT_ICONS[subject].name;
  }

  var templates = [
    {
      q: grade + "-sinf " + subName + " kursi bo'yicha quyidagi tushunchalardan qaysi biri asosiy qoida hisoblanadi?",
      options: ["Faqat yodlash usuli", "Mantiqsiz farazlar", "Nazariy qonuniyat va amaliy tajriba", "Tasodifiy hodisalar"],
      answer: 2,
      expl: subName + " fanida qonuniyat va amaliy tajribalar asosiy poydevordir."
    },
    {
      q: subName + " fanini o'rganishda qo'llaniladigan eng muhim ilmiy metod qaysi?",
      options: ["Faqat taxmin qilish", "Kuzatish, tahlil va eksperiment", "Nazariyani inkor etish", "Hech qanday tahlilsiz xulosa"],
      answer: 1,
      expl: "Ilmiy metodlar doimo kuzatish, o'rganish va tahlilga asoslanadi."
    },
    {
      q: grade + "-sinf o'quv dasturiga ko'ra " + subName + " fanining jamiyatdagi o'rni nima?",
      options: ["Mantiqiy tafakkur va zamonaviy ko'nikmalarni rivojlantirish", "Vaqtni behuda sarflash", "Faqat baho olish", "Hech qanday ahamiyati yo'q"],
      answer: 0,
      expl: "Fanlar inson tafakkurini kengaytiradi va kasbiy ko'nikmalarni shakllantiradi."
    },
    {
      q: "Quyidagi javoblardan qaysi biri " + subName + " faniga bevosita daxldor emas?",
      options: ["Fan doirasidagi atamalar", "Mavzuga oid formulalar va qoidalar", "O'zaro bog'liq tushunchalar", "Biologik hujayralar (agar aniq fan bo'lsa)"],
      answer: 3,
      expl: "Har bir fanning o'ziga xos ilmiy predmeti va atamalar tizimi mavjud."
    },
    {
      q: subName + " fanidan 100 ballik imtihonda muvaffaqiyat qozonish uchun nima zarur?",
      options: ["Faqat imtihon kuni tayyorlanish", "Muntazam takrorlash, darslik va amaliy testlarni yechish", "Tasodifga ishonish", "Javoblarni ko'chirib olish"],
      answer: 1,
      expl: "Tizimli va doimiy shug'ullanish yuqori natija kafolatidir."
    }
  ];

  var list = [];
  var diffLevels = ["easy", "medium", "hard"];
  for (var i = 0; i < count; i++) {
    var tmpl = templates[i % templates.length];
    list.push({
      q: (i + 1) + ". " + tmpl.q,
      options: tmpl.options.slice(),
      answer: tmpl.answer,
      difficulty: diffLevels[i % 3],
      explanation: tmpl.expl
    });
  }
  return list;
};

class TestEngine {
  constructor() {
    this.questions = [];
    this.currentIndex = 0;
    this.answers = {}; // { questionIndex: selectedOptionIndex }
    this.startTime = null;
    this.timerInterval = null;
    this.timeLimit = 0;
    this.timeRemaining = 0;
    this.timerEnabled = false;
    this.isActive = false;
    this.currentGrade = 5;
    this.currentSubject = 'matematika';
    this.currentDifficulty = 'medium';
  }

  initTest(grade, subject, difficulty, count, timerEnabled) {
    this.questions = [];
    this.currentIndex = 0;
    this.answers = {};
    this.startTime = new Date();
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.isActive = true;
    this.timerEnabled = !!timerEnabled;
    this.currentGrade = grade;
    this.currentSubject = subject;
    this.currentDifficulty = difficulty;

    var dataKey = grade + '_' + subject;
    var allQuestions = [];

    if (window.TEST_DATA && window.TEST_DATA[dataKey] && window.TEST_DATA[dataKey].length > 0) {
      allQuestions = window.TEST_DATA[dataKey].slice();
    } else {
      // Fan bo'yicha boshqa sinflardan qidirish
      for (var k in window.TEST_DATA) {
        if (k.endsWith('_' + subject) && window.TEST_DATA[k].length > 0) {
          allQuestions = allQuestions.concat(window.TEST_DATA[k]);
        }
      }
    }

    // Agar savollar bazada kam bo'lsa yoki umuman bo'lmasa, dinamik generator bilan to'ldirish
    if (allQuestions.length === 0) {
      allQuestions = window.generateFallbackQuestions(grade, subject, Math.max(count, 30));
    }

    // Qiyinlik darajasi bo'yicha saralash
    var filtered = allQuestions.filter(function (q) {
      if (!q.difficulty) return true;
      return q.difficulty === difficulty;
    });

    if (filtered.length < count) {
      filtered = allQuestions.slice();
    }

    // Fisher-Yates aralashtirish
    var shuffled = filtered.slice();
    for (var i = shuffled.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = temp;
    }

    this.questions = shuffled.slice(0, count);

    // Agar savollar yetmay qolsa, 100 tagacha to'ldirish
    if (this.questions.length < count) {
      var diff = count - this.questions.length;
      for (var d = 0; d < diff; d++) {
        var base = shuffled[d % shuffled.length];
        this.questions.push({
          q: base.q + " (Variant " + (d + 2) + ")",
          options: base.options.slice(),
          answer: base.answer,
          difficulty: base.difficulty,
          explanation: base.explanation
        });
      }
    }

    // Har bir savolning variantlarini (A, B, C, D) tasodifiy aralashtirish
    // Shunda to'g'ri javob doim faqat 'A' da emas, balki A, B, C, D bo'ylab teng taqsimlanadi!
    this.questions = this.questions.map(function (q) {
      var origOpts = q.options ? q.options.slice() : [];
      if (origOpts.length <= 1) return q;
      var correctText = origOpts[q.answer];

      var shuffledOpts = origOpts.slice();
      for (var s = shuffledOpts.length - 1; s > 0; s--) {
        var r = Math.floor(Math.random() * (s + 1));
        var tmp = shuffledOpts[s];
        shuffledOpts[s] = shuffledOpts[r];
        shuffledOpts[r] = tmp;
      }

      var newAns = shuffledOpts.indexOf(correctText);
      return {
        q: q.q,
        options: shuffledOpts,
        answer: newAns >= 0 ? newAns : 0,
        difficulty: q.difficulty,
        explanation: q.explanation
      };
    });

    // Fan nomi va qiyinlik nishonini yangilash
    var subjBadge = document.getElementById('test-subject-name');
    if (subjBadge) {
      var subObj = (window.SUBJECT_ICONS && window.SUBJECT_ICONS[subject]) ? window.SUBJECT_ICONS[subject].name : subject;
      subjBadge.textContent = grade + '-sinf: ' + subObj;
    }
    var diffBadge = document.getElementById('test-difficulty-badge');
    if (diffBadge) {
      var diffNames = { easy: "Oson 🟢", medium: "O'rtacha 🟡", hard: "Qiyin 🔴" };
      diffBadge.textContent = diffNames[difficulty] || difficulty;
    }

    // Taymer sozlamalari
    if (this.timerEnabled) {
      var timePerQ = { easy: 60, medium: 90, hard: 120 };
      this.timeLimit = this.questions.length * (timePerQ[difficulty] || 60);
      this.timeRemaining = this.timeLimit;
      this.startTimer();
    } else {
      this.timeLimit = 0;
      this.timeRemaining = 0;
      var timerEl = document.getElementById('timer-display');
      if (timerEl) timerEl.textContent = 'Cheksiz';
    }

    this.renderQuestion();
    this.renderNavigator();
    this.initKeyboardNavigation();

    return true;
  }

  renderQuestion() {
    if (this.questions.length === 0) return;
    var q = this.questions[this.currentIndex];
    if (!q) return;

    // Hisoblagichlar
    var currentNumEl = document.getElementById('current-question-num');
    if (currentNumEl) currentNumEl.textContent = this.currentIndex + 1;
    var totalNumEl = document.getElementById('total-questions-num');
    if (totalNumEl) totalNumEl.textContent = this.questions.length;
    var qNumHeader = document.getElementById('question-number');
    if (qNumHeader) qNumHeader.textContent = 'Savol ' + (this.currentIndex + 1);

    // Progress bar
    var fill = document.getElementById('test-progress-fill');
    if (fill) {
      var pct = ((this.currentIndex + 1) / this.questions.length) * 100;
      fill.style.width = pct + '%';
    }

    // Savol matni
    var textEl = document.getElementById('question-text');
    if (textEl) {
      textEl.textContent = q.q || q.question;
      var speakBtn = document.getElementById('speak-question-btn');
      if (!speakBtn && textEl.parentNode) {
        var btn = document.createElement('button');
        btn.id = 'speak-question-btn';
        btn.type = 'button';
        btn.className = 'btn-speak-question';
        btn.title = "Savolni ovozli o'qish (Audio)";
        btn.innerHTML = '<i class="fas fa-volume-up"></i> Tinglash';
        btn.onclick = function () {
          if (window.SoundFX) window.SoundFX.speakCurrentQuestion();
        };
        textEl.parentNode.insertBefore(btn, textEl.nextSibling);
      }
    }

    // Variantlar (A, B, C, D)
    var optionsContainer = document.getElementById('options-container') || document.getElementById('answer-options');
    var feedbackContainer = document.getElementById('test-feedback-container');

    // Variant matnidan oldingi ortiqcha A), B), C), D) harflarini tozalash
    function cleanOptionText(str) {
      if (str === undefined || str === null) return '';
      return String(str).replace(/^[A-Da-d][\)\.\:\-]\s*/, '').trim();
    }

    if (optionsContainer) {
      var letters = ['A', 'B', 'C', 'D'];
      var options = q.options || [];
      var selected = this.answers[this.currentIndex];
      var isAnswered = (selected !== undefined && selected !== null);
      var isCorrect = isAnswered && (selected === q.answer);

      var html = '';
      for (var i = 0; i < options.length; i++) {
        var isThisSelected = (selected === i);
        var isThisCorrectAnswer = (i === q.answer);

        var itemClass = 'option-item answer-option';
        var badgeHtml = '';

        if (isAnswered) {
          if (isThisSelected && isCorrect) {
            // Tanlangan va to'g'ri (Yashil)
            itemClass += ' correct selected-correct';
            badgeHtml = '<span class="option-status-badge badge-correct"><i class="fas fa-check-circle"></i> TO\'G\'RI (+1)</span>';
          } else if (isThisSelected && !isCorrect) {
            // Tanlangan va noto'g'ri (Qizil)
            itemClass += ' wrong selected-wrong';
            badgeHtml = '<span class="option-status-badge badge-wrong"><i class="fas fa-times-circle"></i> NOTO\'G\'RI (XATO)</span>';
          } else if (isThisCorrectAnswer && !isCorrect) {
            // To'g'ri javobni ko'rsatish (Yashil hoshiyali)
            itemClass += ' correct-revealed';
            badgeHtml = '<span class="option-status-badge badge-revealed"><i class="fas fa-check"></i> TO\'G\'RI JAVOB SHU</span>';
          }
        }

        var optText = cleanOptionText(options[i]);

        html += '<div class="' + itemClass + '" onclick="selectAnswer(' + i + ')">' +
          '<div class="option-left-content">' +
          '  <span class="option-letter">' + letters[i] + '</span>' +
          '  <span class="option-text">' + optText + '</span>' +
          '</div>' +
          badgeHtml +
          '</div>';
      }

      optionsContainer.innerHTML = html;

      // TEZKOR NATIJA VA TUSHUNTIRISH BANNERI (Variantlar ostida to'liq kenglikda chiqadi)
      var feedbackHtml = '';
      if (isAnswered) {
        if (isCorrect) {
          feedbackHtml = '<div class="instant-feedback-card feedback-correct-banner">' +
            '<div class="feedback-icon-box"><i class="fas fa-check-circle"></i></div>' +
            '<div class="feedback-text-content">' +
            '  <div class="feedback-title">' +
            '    <span><i class="fas fa-thumbs-up"></i> Ofarin! Javobingiz to\'g\'ri!</span>' +
            '    <span class="feedback-points">+1 Ball</span>' +
            '  </div>' +
            (q.explanation ? '<div class="feedback-explanation"><i class="fas fa-lightbulb"></i> <strong>Ilmiy izoh:</strong> ' + q.explanation + '</div>' : '') +
            '</div>' +
            '</div>';
        } else {
          var correctLetter = letters[q.answer] || 'A';
          var correctText = cleanOptionText(options[q.answer]);
          feedbackHtml = '<div class="instant-feedback-card feedback-wrong-banner">' +
            '<div class="feedback-icon-box"><i class="fas fa-times-circle"></i></div>' +
            '<div class="feedback-text-content">' +
            '  <div class="feedback-title">' +
            '    <span><i class="fas fa-exclamation-triangle"></i> Noto\'g\'ri javob belgilandi!</span>' +
            '    <span class="feedback-points points-zero">0 Ball</span>' +
            '  </div>' +
            '  <div class="feedback-correct-answer-text">' +
            '    <i class="fas fa-arrow-right"></i> To\'g\'ri javob: <strong>' + correctLetter + ') ' + correctText + '</strong>' +
            '  </div>' +
            (q.explanation ? '<div class="feedback-explanation"><i class="fas fa-lightbulb"></i> <strong>Ilmiy izoh:</strong> ' + q.explanation + '</div>' : '') +
            '</div>' +
            '</div>';
        }
      }

      if (feedbackContainer) {
        feedbackContainer.innerHTML = feedbackHtml;
      } else {
        // Zaxira: agar alohida container bo'lmasa, card oxiriga qo'shish
        var oldBox = document.getElementById('temp-feedback-box');
        if (oldBox) oldBox.remove();
        if (feedbackHtml) {
          var box = document.createElement('div');
          box.id = 'temp-feedback-box';
          box.innerHTML = feedbackHtml;
          optionsContainer.parentNode.appendChild(box);
        }
      }
    }

    // Tugmalar holati
    var prevBtn = document.getElementById('prev-question-btn');
    if (prevBtn) prevBtn.disabled = (this.currentIndex === 0);

    var nextBtn = document.getElementById('next-question-btn');
    if (nextBtn) {
      if (this.currentIndex === this.questions.length - 1) {
        nextBtn.innerHTML = '<i class="fas fa-check-circle"></i> Testni yakunlash';
        nextBtn.className = 'btn btn-success btn-lg';
      } else {
        nextBtn.innerHTML = 'Keyingi <i class="fas fa-arrow-right"></i>';
        nextBtn.className = 'btn btn-primary btn-lg';
      }
    }

    this.updateNavigatorHighlight();
  }

  selectAnswer(index) {
    var wasAnswered = (this.answers[this.currentIndex] !== undefined);
    this.answers[this.currentIndex] = index;

    // Tovush effekti (100% offline Web Audio)
    if (!wasAnswered && window.SoundFX) {
      var q = this.questions[this.currentIndex];
      if (q && q.answer === index) {
        window.SoundFX.playCorrect();
      } else {
        window.SoundFX.playWrong();
      }
    }

    this.renderQuestion();
    this.renderNavigator();
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.renderQuestion();
    } else {
      // Oxirgi savolda testni yakunlash
      this.finishTest();
    }
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.renderQuestion();
    }
  }

  goToQuestion(index) {
    if (index >= 0 && index < this.questions.length) {
      this.currentIndex = index;
      this.renderQuestion();
    }
  }

  renderNavigator() {
    var navGrid = document.getElementById('navigator-grid');
    if (!navGrid) return;

    var html = '';
    for (var i = 0; i < this.questions.length; i++) {
      var isCurrent = (i === this.currentIndex);
      var selected = this.answers[i];
      var isAnswered = (selected !== undefined && selected !== null);
      var q = this.questions[i];
      var isCorrect = isAnswered && q && (selected === q.answer);

      var cls = 'navigator-btn';
      var statusIcon = '';
      if (isCurrent) cls += ' current';
      if (isAnswered) {
        cls += ' answered ' + (isCorrect ? 'nav-correct' : 'nav-wrong');
        statusIcon = isCorrect ? '<span class="nav-icon-badge badge-nav-ok"><i class="fas fa-check"></i></span>' : '<span class="nav-icon-badge badge-nav-err"><i class="fas fa-times"></i></span>';
      }

      var tooltip = 'Savol ' + (i + 1) + (isAnswered ? (isCorrect ? ' - To\'g\'ri' : ' - Noto\'g\'ri') : ' - Kutilmoqda');
      html += '<button class="' + cls + '" data-index="' + i + '" onclick="goToQuestion(' + i + ')" title="' + tooltip + '">' +
        '<span class="nav-btn-num">' + (i + 1) + '</span>' +
        statusIcon +
        '</button>';
    }
    navGrid.innerHTML = html;
  }

  updateNavigatorHighlight() {
    this.renderNavigator();
  }

  startTimer() {
    var self = this;
    var timerEl = document.getElementById('timer-display');

    this.timerInterval = setInterval(function () {
      self.timeRemaining--;

      if (timerEl) {
        var mins = Math.floor(self.timeRemaining / 60);
        var secs = self.timeRemaining % 60;
        timerEl.textContent = (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;

        if (self.timeRemaining <= 30) {
          timerEl.style.color = '#EF5350';
        } else {
          timerEl.style.color = '';
        }
      }

      if (self.timeRemaining <= 0) {
        clearInterval(self.timerInterval);
        self.timerInterval = null;
        if (typeof showNotification === 'function') {
          showNotification('Vaqt tugadi! Natijalar hisoblanmoqda...', 'warning');
        }
        self.finishTest();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  calculateResults() {
    var correct = 0;
    var wrong = 0;
    var unanswered = 0;
    var details = [];

    for (var i = 0; i < this.questions.length; i++) {
      var q = this.questions[i];
      var selected = this.answers[i];
      var isCorrect = (selected === q.answer);

      if (selected === undefined) {
        unanswered++;
      } else if (isCorrect) {
        correct++;
      } else {
        wrong++;
      }

      details.push({
        num: i + 1,
        question: q.q || q.question,
        options: q.options || [],
        correctAnswer: q.answer,
        selectedAnswer: selected,
        isCorrect: isCorrect,
        explanation: q.explanation || ''
      });
    }

    var total = this.questions.length;
    var percent = Math.round((correct / total) * 100) || 0;
    var timeSpent = this.timeLimit ? (this.timeLimit - Math.max(0, this.timeRemaining)) : 45;

    var grade = 'F';
    if (percent >= 90) grade = 'A+';
    else if (percent >= 80) grade = 'A';
    else if (percent >= 70) grade = 'B';
    else if (percent >= 60) grade = 'C';
    else if (percent >= 50) grade = 'D';

    return {
      correct: correct,
      wrong: wrong,
      unanswered: unanswered,
      total: total,
      percent: percent,
      grade: grade,
      timeSpent: timeSpent,
      details: details
    };
  }

  finishTest() {
    this.stopTimer();
    this.isActive = false;

    var results = this.calculateResults();
    if (window.AppState) {
      window.AppState.testResults = results;
    }

    // O'qituvchilar kabineti uchun test tarixiga saqlash
    try {
      var subName = this.currentSubject;
      if (window.SUBJECT_ICONS && window.SUBJECT_ICONS[this.currentSubject]) {
        subName = window.SUBJECT_ICONS[this.currentSubject].name;
      }
      var studentProf = null;
      try { studentProf = JSON.parse(localStorage.getItem('maktab30_student_profile')); } catch (e) {}
      var studentFullName = (studentProf && studentProf.firstName) 
        ? (studentProf.firstName + ' ' + (studentProf.lastName || '')) 
        : "O'quvchi";

      var history = JSON.parse(localStorage.getItem('school30_student_results') || '[]');
      history.unshift({
        studentName: studentFullName,
        studentAge: studentProf ? studentProf.age : null,
        grade: this.currentGrade,
        subject: this.currentSubject,
        subjectName: subName,
        correct: results.correct,
        total: results.total,
        percent: results.percent,
        gradeLetter: results.grade,
        date: "Hozirgina"
      });
      if (history.length > 50) history = history.slice(0, 50);
      localStorage.setItem('school30_student_results', JSON.stringify(history));
    } catch (e) {}

    // Akkauntlar va reyting tizimiga ball qo'shish
    if (window.AccountsManager && typeof window.AccountsManager.recordTestResult === 'function') {
      try {
        var xpInfo = window.AccountsManager.recordTestResult(results);
        results.xpInfo = xpInfo;
      } catch (err) {}
    }

    if (window.SoundFX) {
      window.SoundFX.playFanfare();
    }
    if (window.AchievementsManager) {
      window.AchievementsManager.checkOnTestFinish(results);
    }

    this.renderResults(results);

    if (typeof navigateTo === 'function') {
      navigateTo('page-results');
    }
  }

  renderResults(res) {
    // 0. XP va Reyting bannerini chiqarish
    var xpBanner = document.getElementById('results-xp-banner');
    if (xpBanner && res.xpInfo) {
      var xpEarned = document.getElementById('results-xp-earned');
      var xpTotal = document.getElementById('results-xp-total');
      var xpRank = document.getElementById('results-xp-rank');
      if (xpEarned) xpEarned.textContent = '+' + res.xpInfo.earnedXP;
      if (xpTotal) xpTotal.textContent = res.xpInfo.totalScore + ' ball';
      if (xpRank) xpRank.textContent = '#' + res.xpInfo.rank + '-o\'rin';
      xpBanner.style.display = 'block';
    } else if (xpBanner) {
      xpBanner.style.display = 'none';
    }

    // 1. Foizni chiqarish (ikkala ID ni qo'llab-quvvatlaydi)
    var scorePct = document.getElementById('score-percent') || document.getElementById('results-percentage');
    if (scorePct) scorePct.textContent = res.percent + '%';

    var statPct = document.getElementById('stat-percentage') || document.getElementById('stat-percent');
    if (statPct) statPct.textContent = res.percent + '%';

    // 2. Baho nishoni
    var gradeBadge = document.getElementById('result-grade') || document.getElementById('results-grade-badge');
    if (gradeBadge) gradeBadge.textContent = res.grade;

    // 3. Xabar
    var msgEl = document.getElementById('result-message');
    if (msgEl) {
      if (res.percent >= 85) {
        msgEl.textContent = "Ajoyib natija! Siz 30-maktab faxrisiz!";
      } else if (res.percent >= 70) {
        msgEl.textContent = "Yaxshi natija! Bilimingizni yanada mustahkamlang.";
      } else if (res.percent >= 50) {
        msgEl.textContent = "Qoniqarli! Darsliklarni qayta ko'rib chiqish tavsiya etiladi.";
      } else {
        msgEl.textContent = "Qayta urinib ko'ring va ko'proq mashq qiling!";
      }
    }

    // 4. Doiraviy SVG progressni animatsiya qilish
    var circle = document.getElementById('score-fill') || document.getElementById('results-circle-progress');
    if (circle) {
      var circumference = 534; // 2 * PI * 85
      var offset = circumference - (circumference * res.percent / 100);
      circle.style.strokeDashoffset = offset;
      circle.style.stroke = res.percent >= 80 ? '#10B981' : (res.percent >= 60 ? '#F59E0B' : '#EF4444');
    }

    // 5. Statistika kartalari
    var totalEl = document.getElementById('stat-total') || document.getElementById('stat-total-questions');
    if (totalEl) totalEl.textContent = res.total;

    var corrEl = document.getElementById('stat-correct') || document.getElementById('stat-correct-answers');
    if (corrEl) corrEl.textContent = res.correct;

    var wrongEl = document.getElementById('stat-wrong') || document.getElementById('stat-wrong-answers');
    if (wrongEl) wrongEl.textContent = res.wrong;

    var timeEl = document.getElementById('stat-time') || document.getElementById('stat-time-spent');
    if (timeEl) {
      var m = Math.floor(res.timeSpent / 60);
      var s = res.timeSpent % 60;
      timeEl.textContent = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
    }

    // 6. Har bir savol tahlili (Batafsil ko'rib chiqish)
    var reviewContainer = document.getElementById('review-list');
    if (reviewContainer) {
      var letters = ['A', 'B', 'C', 'D'];
      var html = '';
      res.details.forEach(function (d) {
        var statusCls = d.isCorrect ? 'correct' : 'wrong';
        var icon = d.isCorrect ? '<i class="fas fa-check-circle" style="color:#10B981"></i>' : '<i class="fas fa-times-circle" style="color:#EF4444"></i>';
        var borderColor = d.isCorrect ? '#10B981' : '#EF4444';

          function cleanOptionText(str) {
            if (str === undefined || str === null) return '';
            return String(str).replace(/^[A-Da-d][\)\.\:\-]\s*/, '').trim();
          }

          var selText = (d.selectedAnswer !== undefined && d.options[d.selectedAnswer] !== undefined)
            ? (letters[d.selectedAnswer] + ') ' + cleanOptionText(d.options[d.selectedAnswer]))
            : 'Javob berilmagan';
          var corrText = (d.correctAnswer !== undefined && d.options[d.correctAnswer] !== undefined)
            ? (letters[d.correctAnswer] + ') ' + cleanOptionText(d.options[d.correctAnswer]))
            : '';

          html += '<div class="review-item ' + statusCls + '" style="margin-bottom:14px; padding:16px; border-radius:12px; background:rgba(30, 41, 59, 0.7); border:1px solid rgba(255,255,255,0.08); border-left: 5px solid ' + borderColor + ';">' +
            '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">' +
            '<strong style="color:#f8fafc; font-size:15px;">Savol ' + d.num + ': ' + icon + '</strong>' +
            '<span style="font-size:12px; font-weight:700; color:' + borderColor + ';">' + (d.isCorrect ? 'To\'g\'ri (+1)' : 'Xato (0)') + '</span>' +
            '</div>' +
            '<p style="margin-bottom:10px; color:#e2e8f0; font-size:14px; font-weight:500;">' + d.question + '</p>' +
            '<div style="font-size:13.5px; margin-bottom:6px; color:#cbd5e1;">' +
            'Sizning javobingiz: <strong style="color:' + borderColor + ';">' + selText + '</strong>' +
            '</div>' +
            (!d.isCorrect ? ('<div style="font-size:13.5px; color:#10B981; margin-bottom:6px;">To\'g\'ri javob: <strong>' + corrText + '</strong></div>') : '') +
            (d.explanation ? ('<div style="font-size:12.5px; color:#94a3b8; background:rgba(15, 23, 42, 0.6); padding:8px 12px; border-radius:8px; margin-top:8px;">💡 Izoh: ' + d.explanation + '</div>') : '') +
            '</div>';
      });
      reviewContainer.innerHTML = html;
    }
  }

  initKeyboardNavigation() {
    var self = this;
    window.onkeydown = function (e) {
      if (!self.isActive) return;
      if (e.key === 'ArrowRight') self.nextQuestion();
      if (e.key === 'ArrowLeft') self.prevQuestion();
      if (e.key >= '1' && e.key <= '4') {
        self.selectAnswer(parseInt(e.key, 10) - 1);
      }
    };
  }
}

// Global instansiya
var testEngine = new TestEngine();

// Window funksiyalari
window.startTest = function () {
  var state = window.AppState || {};
  var count = (state.testConfig && state.testConfig.questionCount) || 20;

  var countInput = document.getElementById('question-count');
  if (countInput) {
    var v = parseInt(countInput.value, 10);
    if (!isNaN(v) && v > 0) count = v;
  }

  var timerToggle = document.getElementById('timer-toggle');
  var timerVal = timerToggle ? timerToggle.checked : true;
  if (state.testConfig) {
    state.testConfig.questionCount = count;
    state.testConfig.timerEnabled = timerVal;
  }

  var grade = state.selectedGrade || 5;
  var subject = state.selectedSubject || 'matematika';
  var difficulty = (state.testConfig && state.testConfig.difficulty) || 'medium';

  var success = testEngine.initTest(grade, subject, difficulty, count, timerVal);
  if (success && typeof navigateTo === 'function') {
    navigateTo('page-test');
  }
};

window.startTestFromHome = function () {
  window.startTest();
};

window.retakeTest = function () {
  window.startTest();
};

window.selectAnswer = function (index) {
  if (typeof index === 'string') {
    var map = { 'A': 0, 'B': 1, 'C': 2, 'D': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
    if (map[index] !== undefined) {
      index = map[index];
    } else {
      index = parseInt(index, 10) || 0;
    }
  }
  testEngine.selectAnswer(index);
};

window.nextQuestion = function () {
  testEngine.nextQuestion();
};

window.prevQuestion = function () {
  testEngine.prevQuestion();
};

window.goToQuestion = function (index) {
  testEngine.goToQuestion(index);
};

window.finishTest = function () {
  window.closeModal('confirm-finish-modal');
  if (window.testEngine) {
    window.testEngine.finishTest();
  }
};

window.confirmFinishTest = function () {
  var total = (window.testEngine && window.testEngine.questions) ? window.testEngine.questions.length : 0;
  var answered = 0;
  if (window.testEngine && window.testEngine.answers) {
    answered = Object.keys(window.testEngine.answers).length;
  }
  var unanswered = total - answered;

  var modal = document.getElementById('confirm-finish-modal');
  var msgEl = document.getElementById('confirm-finish-text');

  if (modal) {
    if (msgEl) {
      if (unanswered > 0) {
        msgEl.innerHTML = "Siz <strong>" + total + "</strong> ta savoldan <strong>" + answered + "</strong> tasiga javob berdingiz.<br>Hali <strong>" + unanswered + "</strong> ta javobsiz savol qoldi. Testni rostdan ham yakunlamoqchimisiz?";
      } else {
        msgEl.innerHTML = "Barcha <strong>" + total + "</strong> ta savolga to'liq javob berdingiz!<br>Natijalaringizni ko'rish uchun testni yakunlang.";
      }
    }
    modal.style.display = 'flex';
  } else {
    if (confirm("Testni yakunlab, natijalarni ko'rmoqchimisiz?")) {
      window.finishTest();
    }
  }
};

window.closeModal = function (modalId) {
  var modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
  }
};

window.openModal = function (modalId) {
  var modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'flex';
  }
};

window.testEngine = testEngine;
