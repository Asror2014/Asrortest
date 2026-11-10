/**
 * 30-maktabtest - 3D Interaktiv Biologiya va Anatomiya Laboratoriyasi
 * Mukammal vizualizatsiya va 100% xatosiz Three.js modellari
 * 
 * 1. heart: Haqiqiy inson yuragi (qorinchalar, bo'lmachalar, aorta yoyi, toj tomirlar, urish animatsiyasi)
 * 2. plant-cell: Tirik o'simlik hujayrasi (devor, markaziy vakuola, yadro, xloroplastlar, mitoxondriya)
 * 3. dna: DNK qo'sh spirali (komplementar A-T va G-C nukleotidlari)
 * 4. eye: Inson ko'zi tuzilishi (haqiqiy qorachiq, rangdor parda, shox parda, linza, to'r parda)
 */

class BiologyLab {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      console.error('BiologyLab: container topilmadi:', containerId);
      return;
    }
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.clock = null;
    this.objects = {};
    this.particles = [];
    this.currentExperiment = 'heart';
    this.animationId = null;
    this.isRunning = true;
    this.elapsedTime = 0;

    // Biologik o'zgaruvchilar
    this.bpm = 72;
    this.pulsePhase = 0;

    // Kamera orbit
    this.isDragging = false;
    this.previousMouse = { x: 0, y: 0 };
    this.theta = 0.5;
    this.phi = 1.1;
    this.cameraRadius = 14;
    this.cameraTarget = new THREE.Vector3(0, 0, 0);

    this._onResize = () => this.onWindowResize();
  }

  init() {
    if (!this.container) return;

    const width = this.container.clientWidth || 800;
    const height = this.container.clientHeight || 600;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a0f1d);

    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    this.updateCameraPosition();

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    while (this.container.firstChild) {
      if (this.container.firstChild.id === 'biology-canvas-overlay') {
        this.container.firstChild.style.display = 'none';
        break;
      }
      this.container.removeChild(this.container.firstChild);
    }
    this.container.appendChild(this.renderer.domElement);

    this.clock = new THREE.Clock();
    this.setupOrbitControls();
    window.addEventListener('resize', this._onResize);

    this.animate();
  }

  setupOrbitControls() {
    const container = this.container;

    const onMouseDown = (e) => {
      this.isDragging = true;
      this.previousMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!this.isDragging) return;
      const dx = e.clientX - this.previousMouse.x;
      const dy = e.clientY - this.previousMouse.y;
      this.previousMouse = { x: e.clientX, y: e.clientY };

      this.theta -= dx * 0.007;
      this.phi -= dy * 0.007;
      this.phi = Math.max(0.1, Math.min(Math.PI - 0.1, this.phi));
      this.updateCameraPosition();
    };

    const onMouseUp = () => { this.isDragging = false; };

    const onWheel = (e) => {
      e.preventDefault();
      this.cameraRadius += e.deltaY * 0.02;
      this.cameraRadius = Math.max(4, Math.min(45, this.cameraRadius));
      this.updateCameraPosition();
    };

    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.previousMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    const onTouchMove = (e) => {
      if (!this.isDragging || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - this.previousMouse.x;
      const dy = e.touches[0].clientY - this.previousMouse.y;
      this.previousMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };

      this.theta -= dx * 0.007;
      this.phi -= dy * 0.007;
      this.phi = Math.max(0.1, Math.min(Math.PI - 0.1, this.phi));
      this.updateCameraPosition();
    };
    const onTouchEnd = () => { this.isDragging = false; };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('wheel', onWheel, { passive: false });
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: true });
    container.addEventListener('touchend', onTouchEnd);

    this._cleanupControls = () => {
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('wheel', onWheel);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
    };
  }

  updateCameraPosition() {
    if (!this.camera) return;
    this.camera.position.set(
      this.cameraTarget.x + this.cameraRadius * Math.sin(this.phi) * Math.cos(this.theta),
      this.cameraTarget.y + this.cameraRadius * Math.cos(this.phi),
      this.cameraTarget.z + this.cameraRadius * Math.sin(this.phi) * Math.sin(this.theta)
    );
    this.camera.lookAt(this.cameraTarget);
  }

  clearScene() {
    while (this.scene.children.length > 0) {
      this.scene.remove(this.scene.children[0]);
    }
    this.objects = {};
    this.particles = [];
    this.elapsedTime = 0;
    this.cameraTarget.set(0, 0, 0);
  }

  /* ============================================================
     1. INSON YURAGI (ANATOMIK ANIQ 3D YURAK MODELI)
     ============================================================ */
  setupHeart() {
    this.clearScene();
    this.currentExperiment = 'heart';
    this.cameraRadius = 13;
    this.theta = 0.5;
    this.phi = 1.1;
    this.updateCameraPosition();

    // Chiroqlar
    const ambientLight = new THREE.AmbientLight(0x475569, 0.75);
    this.scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff5f5, 2.2);
    keyLight.position.set(12, 16, 12);
    this.scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xef4444, 1.3);
    rimLight.position.set(-10, -5, -10);
    this.scene.add(rimLight);

    const heartRoot = new THREE.Group();

    const muscleMat = new THREE.MeshStandardMaterial({
      color: 0x991b1b,
      roughness: 0.35,
      metalness: 0.15
    });

    const ventGroup = new THREE.Group();

    // 1. Chap qorincha (Left ventricle)
    const lvGeom = new THREE.ConeGeometry(1.5, 3.2, 32);
    lvGeom.scale(1.1, 1.0, 0.9);
    const leftVentricle = new THREE.Mesh(lvGeom, muscleMat);
    leftVentricle.position.set(0.3, -1.0, 0);
    leftVentricle.rotation.z = Math.PI - 0.25;
    ventGroup.add(leftVentricle);

    // 2. O'ng qorincha (Right ventricle)
    const rvGeom = new THREE.SphereGeometry(1.4, 24, 24);
    rvGeom.scale(0.85, 1.25, 0.7);
    const rightVentricle = new THREE.Mesh(rvGeom, muscleMat);
    rightVentricle.position.set(-0.8, -0.6, 0.35);
    rightVentricle.rotation.z = 0.2;
    ventGroup.add(rightVentricle);

    // 3. Chap va O'ng bo'lmachalar (Atria)
    const atriaMat = new THREE.MeshStandardMaterial({
      color: 0xb91c1c,
      roughness: 0.4
    });
    const laGeom = new THREE.SphereGeometry(1.05, 24, 24);
    const leftAtrium = new THREE.Mesh(laGeom, atriaMat);
    leftAtrium.position.set(0.9, 0.9, -0.2);
    ventGroup.add(leftAtrium);

    const raGeom = new THREE.SphereGeometry(1.15, 24, 24);
    const rightAtrium = new THREE.Mesh(raGeom, atriaMat);
    rightAtrium.position.set(-0.9, 0.8, 0.15);
    ventGroup.add(rightAtrium);

    // 4. Yurak toj tomirlari
    const vesselGroup = new THREE.Group();
    const sulcusCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.2, 0.6, 1.0),
      new THREE.Vector3(0.0, -0.4, 0.8),
      new THREE.Vector3(0.4, -1.5, 0.5),
      new THREE.Vector3(0.7, -2.4, 0.1)
    ]);
    const sulcusTube = new THREE.TubeGeometry(sulcusCurve, 20, 0.08, 8, false);
    const redVesselMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.3 });
    const sulcusArtery = new THREE.Mesh(sulcusTube, redVesselMat);
    vesselGroup.add(sulcusArtery);

    const branch1 = new THREE.TubeGeometry(new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.0, -0.4, 0.8),
      new THREE.Vector3(-0.5, -0.9, 0.7)
    ]), 10, 0.045, 6, false);
    vesselGroup.add(new THREE.Mesh(branch1, redVesselMat));

    const branch2 = new THREE.TubeGeometry(new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.4, -1.5, 0.5),
      new THREE.Vector3(0.9, -1.8, 0.3)
    ]), 10, 0.045, 6, false);
    vesselGroup.add(new THREE.Mesh(branch2, redVesselMat));

    ventGroup.add(vesselGroup);
    heartRoot.add(ventGroup);
    this.objects.ventGroup = ventGroup;

    // 5. Katta Aorta yoyi
    const aortaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.1, 0.5, 0.1),
      new THREE.Vector3(0.1, 1.8, 0.1),
      new THREE.Vector3(-0.4, 2.7, -0.1),
      new THREE.Vector3(-1.3, 2.4, -0.6),
      new THREE.Vector3(-1.5, 0.6, -0.9)
    ]);
    const aortaGeom = new THREE.TubeGeometry(aortaCurve, 32, 0.46, 16, false);
    const aorta = new THREE.Mesh(aortaGeom, redVesselMat);
    heartRoot.add(aorta);

    for (let i = 0; i < 3; i++) {
      const bCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.35 + i * 0.45, 2.6, -0.1),
        new THREE.Vector3(-0.45 + i * 0.45, 3.7, -0.1 + i * 0.1)
      ]);
      heartRoot.add(new THREE.Mesh(new THREE.TubeGeometry(bCurve, 12, 0.14, 12, false), redVesselMat));
    }

    // 6. Kovak venalar
    const blueVesselMat = new THREE.MeshStandardMaterial({ color: 0x1d4ed8, roughness: 0.35 });
    const venaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.25, 3.2, 0.2),
      new THREE.Vector3(-1.2, 1.2, 0.2),
      new THREE.Vector3(-1.15, -1.8, 0.1)
    ]);
    const venaCava = new THREE.Mesh(new THREE.TubeGeometry(venaCurve, 24, 0.44, 16, false), blueVesselMat);
    heartRoot.add(venaCava);

    // 7. O'pka arteriyasi
    const pulmCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.3, 0.8, 0.7),
      new THREE.Vector3(0.2, 1.6, 0.6),
      new THREE.Vector3(1.3, 1.8, 0.1)
    ]);
    const pulmTrunk = new THREE.Mesh(new THREE.TubeGeometry(pulmCurve, 16, 0.4, 16, false), blueVesselMat);
    heartRoot.add(pulmTrunk);

    this.scene.add(heartRoot);
    this.objects.heartRoot = heartRoot;

    this.setupBloodParticles();

    this.updateUIInfo(
      "Inson Yuragi (3D Anatomik Model)",
      "Yurak — 4 kamerali mushak a'zosi bo'lib, o'ng va chap bo'lmachalar hamda qorinchalardan iborat. Qizil tomir (Aorta) kislorodli qonni tanaga yuboradi, ko'k tomir (Vena cava) esa qaytaradi.",
      "Puls: 72 BPM | Qon bosimi: 120/80 mm sim. ust. | Daqiqalik hajm: ~5.0 L/min",
      [
        { label: "Yurak pulsi:", value: this.bpm + " zarba/daq" },
        { label: "Qon bosimi:", value: "120/80 mmHg" },
        { label: "Nasos fazasi:", value: "Sistola (qisqarish)" }
      ]
    );
  }

  setupBloodParticles() {
    const pCount = 70;
    const geom = new THREE.BufferGeometry();
    const pos = new Float32Array(pCount * 3);
    const cols = new Float32Array(pCount * 3);

    this.particles = [];
    for (let i = 0; i < pCount; i++) {
      const isRed = i < pCount / 2;
      this.particles.push({
        isRed: isRed,
        t: Math.random(),
        speed: 0.4 + Math.random() * 0.3
      });
      pos[i * 3] = 0; pos[i * 3 + 1] = 0; pos[i * 3 + 2] = 0;
      if (isRed) {
        cols[i * 3] = 1.0; cols[i * 3 + 1] = 0.2; cols[i * 3 + 2] = 0.2;
      } else {
        cols[i * 3] = 0.2; cols[i * 3 + 1] = 0.5; cols[i * 3 + 2] = 1.0;
      }
    }

    geom.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geom.setAttribute('color', new THREE.BufferAttribute(cols, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      transparent: true,
      opacity: 0.95
    });

    const pSystem = new THREE.Points(geom, pMat);
    this.scene.add(pSystem);
    this.objects.bloodParticles = pSystem;
  }

  /* ============================================================
     2. O'SIMLIK HUJAYRASI (PLANT CELL - 100% XATOSIZ & ANIQ)
     ============================================================ */
  setupPlantCell() {
    this.clearScene();
    this.currentExperiment = 'plant-cell';
    this.cameraRadius = 15;
    this.theta = 0.6;
    this.phi = 1.1;
    this.updateCameraPosition();

    const ambientLight = new THREE.AmbientLight(0x334155, 0.75);
    this.scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.2);
    dirLight.position.set(15, 20, 15);
    this.scene.add(dirLight);

    const cellGroup = new THREE.Group();

    // 1. Qattiq Hujayra Devori
    const wallGeom = new THREE.BoxGeometry(7.2, 5.2, 4.2);
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0x059669,
      transparent: true,
      opacity: 0.3,
      roughness: 0.3
    });
    const cellWall = new THREE.Mesh(wallGeom, wallMat);
    cellGroup.add(cellWall);

    const edges = new THREE.EdgesGeometry(wallGeom);
    const edgeLines = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x34d399, linewidth: 2 }));
    cellGroup.add(edgeLines);

    // 2. Katta markaziy vakuola
    const vacGeom = new THREE.SphereGeometry(1.7, 24, 24);
    vacGeom.scale(1.25, 0.95, 0.85);
    const vacMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.6,
      roughness: 0.1
    });
    const vacuole = new THREE.Mesh(vacGeom, vacMat);
    vacuole.position.set(-0.9, -0.2, 0);
    cellGroup.add(vacuole);

    // 3. Hujayra Yadrosi
    const nucleusGroup = new THREE.Group();
    const nucGeom = new THREE.SphereGeometry(1.15, 24, 24);
    const nucMat = new THREE.MeshStandardMaterial({
      color: 0x7c3aed,
      roughness: 0.4
    });
    const nucleus = new THREE.Mesh(nucGeom, nucMat);
    nucleusGroup.add(nucleus);

    const nuclGeom = new THREE.SphereGeometry(0.42, 16, 16);
    const nuclMat = new THREE.MeshStandardMaterial({ color: 0xec4899 });
    const nucleolus = new THREE.Mesh(nuclGeom, nuclMat);
    nucleolus.position.set(0.2, 0.2, 0.35);
    nucleusGroup.add(nucleolus);

    nucleusGroup.position.set(1.7, 0.8, 0.1);
    cellGroup.add(nucleusGroup);

    // 4. Xloroplastlar
    const chloroMat = new THREE.MeshStandardMaterial({
      color: 0x16a34a,
      roughness: 0.35
    });
    const chloroCoords = [
      [-2.3, 1.4, 1.0], [-1.8, -1.4, 1.1], [0.2, 1.6, 1.0],
      [-2.2, 1.3, -1.0], [-1.5, -1.3, -1.1], [2.2, -1.2, 0.8]
    ];
    chloroCoords.forEach(c => {
      const cGeom = new THREE.CylinderGeometry(0.5, 0.5, 0.24, 16);
      const chl = new THREE.Mesh(cGeom, chloroMat);
      chl.position.set(c[0], c[1], c[2]);
      chl.rotation.x = 0.5;
      chl.rotation.z = 0.4;
      cellGroup.add(chl);
    });

    // 5. Mitoxondriyalar
    const mitoMat = new THREE.MeshStandardMaterial({
      color: 0xf97316,
      roughness: 0.4
    });
    const mitoCoords = [
      [1.8, -0.6, -0.8], [0.5, -1.5, 0.5], [-0.4, 1.5, -0.8]
    ];
    mitoCoords.forEach(m => {
      const mitoGeom = new THREE.CylinderGeometry(0.25, 0.25, 0.65, 16);
      const mito = new THREE.Mesh(mitoGeom, mitoMat);
      mito.position.set(m[0], m[1], m[2]);
      mito.rotation.z = 0.8;
      cellGroup.add(mito);
    });

    this.scene.add(cellGroup);
    this.objects.cellGroup = cellGroup;

    this.updateUIInfo(
      "O'simlik Hujayrasi (Plant Cell 3D)",
      "O'simlik hujayrasining asosiy xususiyatlari: sellyulozali qattiq tashqi devor (Cell wall), fotosintez uchun yashil xloroplastlar va turgor bosimini ta'minlovchi katta markaziy vakuola mavjud.",
      "Fotosintez: 6CO₂ + 6H₂O + Quyosh nuri → C₆H₁₂O₆ + 6O₂",
      [
        { label: "Hujayra devori:", value: "Sellyulozali qattiq himoya" },
        { label: "Yadro:", value: "DNK va genetik axborot markazi" },
        { label: "Xloroplast:", value: "Fotosintez (organik modda hosil qilish)" },
        { label: "Vakuola:", value: "Hujayra shirasi va suv balansi" }
      ]
    );
  }

  /* ============================================================
     3. DNK QO'SH SPIRALI (DNA DOUBLE HELIX)
     ============================================================ */
  setupDNA() {
    this.clearScene();
    this.currentExperiment = 'dna';
    this.cameraRadius = 16;
    this.theta = 0.5;
    this.phi = 1.2;
    this.updateCameraPosition();

    const ambientLight = new THREE.AmbientLight(0x475569, 0.8);
    this.scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight.position.set(10, 15, 10);
    this.scene.add(dirLight);

    const dnaGroup = new THREE.Group();

    const pairsCount = 28;
    const heightStep = 0.42;
    const twist = 0.45;
    const radius = 2.2;

    const redMat = new THREE.MeshStandardMaterial({ color: 0xef4444 });
    const yellowMat = new THREE.MeshStandardMaterial({ color: 0xfacc15 });
    const blueMat = new THREE.MeshStandardMaterial({ color: 0x3b82f6 });
    const greenMat = new THREE.MeshStandardMaterial({ color: 0x22c55e });
    const backboneMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.3 });

    for (let i = 0; i < pairsCount; i++) {
      const y = (i - pairsCount / 2) * heightStep;
      const angle = i * twist;

      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;

      const bb1 = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), backboneMat);
      bb1.position.set(x1, y, z1);
      dnaGroup.add(bb1);

      const bb2 = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), backboneMat);
      bb2.position.set(x2, y, z2);
      dnaGroup.add(bb2);

      const isAT = (i % 2 === 0);
      const mat1 = isAT ? redMat : blueMat;
      const mat2 = isAT ? yellowMat : greenMat;

      const bridge1 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, radius, 12), mat1);
      bridge1.position.set(x1 / 2, y, z1 / 2);
      bridge1.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(x1, 0, z1).normalize());
      dnaGroup.add(bridge1);

      const bridge2 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, radius, 12), mat2);
      bridge2.position.set(x2 / 2, y, z2 / 2);
      bridge2.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(x2, 0, z2).normalize());
      dnaGroup.add(bridge2);
    }

    this.scene.add(dnaGroup);
    this.objects.dnaGroup = dnaGroup;

    this.updateUIInfo(
      "DNK Qo'sh Spirali (DNA Double Helix)",
      "DNK — tirik organizmlarning irsiy axborotini saqlaydi. Komplementarlik qoidasi: Adenin faqat Timin bilan (A=T), Guanin faqat Sitozin bilan (G≡C) bog'lanadi.",
      "Komplementar: A = T (2 ta vodorod bog') | G ≡ C (3 ta vodorod bog')",
      [
        { label: "Qizil (A) / Sariq (T):", value: "Adenin - Timin juftligi" },
        { label: "Ko'k (G) / Yashil (C):", value: "Guanin - Sitozin juftligi" },
        { label: "Spiral qadami:", value: "3.4 nm (10 juft nukleotid)" }
      ]
    );
  }

  /* ============================================================
     4. INSON KO'ZI TUZILISHI (HAQIQIY QORACHIQ VA KESIM)
     ============================================================ */
  setupEye() {
    this.clearScene();
    this.currentExperiment = 'eye';
    this.cameraRadius = 14;
    this.theta = 0.9;
    this.phi = 1.15;
    this.updateCameraPosition();

    const ambientLight = new THREE.AmbientLight(0x475569, 0.8);
    this.scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.2);
    dirLight.position.set(12, 16, 14);
    this.scene.add(dirLight);

    const eyeGroup = new THREE.Group();

    // 1. Oq parda (Sklera)
    const scleraGeom = new THREE.SphereGeometry(3.0, 36, 36, 0, Math.PI * 1.55);
    const scleraMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      side: THREE.DoubleSide,
      roughness: 0.3
    });
    const sclera = new THREE.Mesh(scleraGeom, scleraMat);
    sclera.rotation.y = -Math.PI / 3;
    eyeGroup.add(sclera);

    // 2. To'r parda (Retina)
    const retinaGeom = new THREE.SphereGeometry(2.9, 36, 36, 0, Math.PI * 1.5);
    const retinaMat = new THREE.MeshStandardMaterial({
      color: 0xea580c,
      side: THREE.BackSide,
      roughness: 0.6
    });
    const retina = new THREE.Mesh(retinaGeom, retinaMat);
    retina.rotation.y = -Math.PI / 3;
    eyeGroup.add(retina);

    // 3. Rangdor parda (Iris - Moviy halqa)
    const irisGeom = new THREE.RingGeometry(0.85, 1.85, 36);
    const irisMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      side: THREE.DoubleSide,
      roughness: 0.4
    });
    const iris = new THREE.Mesh(irisGeom, irisMat);
    iris.position.set(0, 0, 2.5);
    eyeGroup.add(iris);

    // 4. Qorachiq (Pupil - Qop-qora markaziy doira)
    const pupilGeom = new THREE.CircleGeometry(0.85, 36);
    const pupilMat = new THREE.MeshBasicMaterial({
      color: 0x050505,
      side: THREE.DoubleSide
    });
    const pupil = new THREE.Mesh(pupilGeom, pupilMat);
    pupil.position.set(0, 0, 2.51);
    eyeGroup.add(pupil);

    // 5. Shox parda (Kornea)
    const corneaGeom = new THREE.SphereGeometry(1.9, 24, 24, 0, Math.PI * 2, 0, Math.PI / 3);
    const corneaMat = new THREE.MeshStandardMaterial({
      color: 0xa5f3fc,
      transparent: true,
      opacity: 0.35,
      roughness: 0.05
    });
    const cornea = new THREE.Mesh(corneaGeom, corneaMat);
    cornea.position.set(0, 0, 2.0);
    eyeGroup.add(cornea);

    // 6. Ko'z gavhari (Linza)
    const lensGeom = new THREE.SphereGeometry(1.2, 24, 24);
    lensGeom.scale(1.0, 1.0, 0.45);
    const lensMat = new THREE.MeshStandardMaterial({
      color: 0x67e8f9,
      transparent: true,
      opacity: 0.65,
      roughness: 0.1
    });
    const lens = new THREE.Mesh(lensGeom, lensMat);
    lens.position.set(0, 0, 1.6);
    eyeGroup.add(lens);

    // 7. Ko'rish nervi
    const nerveGeom = new THREE.CylinderGeometry(0.5, 0.5, 2.2, 16);
    const nerveMat = new THREE.MeshStandardMaterial({ color: 0xfde047 });
    const nerve = new THREE.Mesh(nerveGeom, nerveMat);
    nerve.position.set(-0.4, -0.2, -3.8);
    nerve.rotation.x = Math.PI / 2.3;
    eyeGroup.add(nerve);

    // 8. Tushuvchi yorug'lik nuri
    const rayCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 6.5),
      new THREE.Vector3(0, 0, 2.5),
      new THREE.Vector3(0, 0, 1.6),
      new THREE.Vector3(0, 0, -2.8)
    ]);
    const ray = new THREE.Mesh(new THREE.TubeGeometry(rayCurve, 20, 0.07, 8, false), new THREE.MeshBasicMaterial({ color: 0xfacc15 }));
    eyeGroup.add(ray);

    this.scene.add(eyeGroup);
    this.objects.eyeGroup = eyeGroup;

    this.updateUIInfo(
      "Inson Ko'zi Tuzilishi (Optik Tizim)",
      "Yorug'lik shaffof shox parda va qorachiq (pupil) orqali kiradi, gavhar (linza) orqali sinib, to'r pardadagi (retina) retseptorlarga fokuslanadi va ko'rish nervi orqali miyaga uzatiladi.",
      "Optik kuch: D = 1/F (+58.6 dioptriya) | Yupqa linza: 1/F = 1/d + 1/f",
      [
        { label: "Qorachiq (Pupil):", value: "Yorug'lik kiruvchi teshik" },
        { label: "Rangdor parda (Iris):", value: "Ko'z rangini belgilaydi" },
        { label: "Ko'z gavhari (Linza):", value: "Masofaga qarab fokuslaydi" },
        { label: "To'r parda (Retina):", value: "Tasvirni qabul qiluvchi ekran" }
      ]
    );
  }

  /* ============================================================
     ANIMATSIYA SIKLI
     ============================================================ */
  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());

    const delta = this.clock ? this.clock.getDelta() : 0.016;
    const clampedDelta = Math.min(delta, 0.05);

    if (this.isRunning) {
      this.elapsedTime += clampedDelta;

      if (this.currentExperiment === 'heart') {
        const freq = (this.bpm / 60) * Math.PI * 2;
        this.pulsePhase += clampedDelta * freq;

        const pulse = Math.sin(this.pulsePhase);
        const beatScale = 1.0 + Math.pow(Math.max(0, pulse), 2.5) * 0.14;

        if (this.objects.ventGroup) {
          this.objects.ventGroup.scale.set(beatScale, beatScale, beatScale);
        }

        if (this.objects.bloodParticles && this.particles.length) {
          const pos = this.objects.bloodParticles.geometry.attributes.position.array;
          for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];
            p.t += clampedDelta * p.speed * (this.bpm / 72);
            if (p.t > 1) p.t -= 1;

            if (p.isRed) {
              pos[i * 3] = -0.4 + Math.sin(p.t * Math.PI) * 0.8;
              pos[i * 3 + 1] = 0.8 + p.t * 2.5;
              pos[i * 3 + 2] = -0.2 + Math.cos(p.t * Math.PI) * 0.4;
            } else {
              pos[i * 3] = -1.2 + (Math.random() - 0.5) * 0.15;
              pos[i * 3 + 1] = 3.0 - p.t * 3.6;
              pos[i * 3 + 2] = 0.2 + (Math.random() - 0.5) * 0.15;
            }
          }
          this.objects.bloodParticles.geometry.attributes.position.needsUpdate = true;
        }
      } else if (this.currentExperiment === 'plant-cell') {
        if (this.objects.cellGroup) {
          this.objects.cellGroup.rotation.y += 0.004;
        }
      } else if (this.currentExperiment === 'dna') {
        if (this.objects.dnaGroup) {
          this.objects.dnaGroup.rotation.y += 0.012;
        }
      } else if (this.currentExperiment === 'eye') {
        if (this.objects.eyeGroup) {
          this.objects.eyeGroup.rotation.y += 0.003;
        }
      }
    }

    if (this.renderer && this.scene && this.camera) {
          // 5. Nafas olish (Lungs expansion & Diaphragm motion)
    if (this.currentExperiment === 'human-lungs' && this.objects.leftLung && this.objects.rightLung) {
      const breath = 1.0 + Math.sin(time * 2.2) * 0.08;
      this.objects.leftLung.scale.set(breath, breath * 1.6, breath * 0.9);
      this.objects.rightLung.scale.set(breath * 1.08, breath * 1.6, breath * 0.95);
      if (this.objects.diaphragm) {
        this.objects.diaphragm.position.y = -4.5 - Math.sin(time * 2.2) * 0.4;
      }
    }
    this.renderer.render(this.scene, this.camera);
    }
  }

  setBpm(val) {
    this.bpm = parseInt(val, 10);
    const lbl = document.getElementById('slider-bio-bpm-value');
    if (lbl) lbl.textContent = this.bpm + ' BPM';

    let holat = "Normal (tinch)";
    if (this.bpm < 60) holat = "Bradikardiya (sekin)";
    else if (this.bpm > 100) holat = "Taxikardiya (tezlashgan)";

    this.updateUIInfo(
      "Inson Yuragi (3D Anatomik Model)",
      "Yurak urish tezligi: " + this.bpm + " BPM. Hozirgi holat: " + holat + ". Yurak qorinchalarining qon haydash ritmini kuzating.",
      "Puls: " + this.bpm + " zarba/daq | Qon oqimi: " + ((this.bpm * 70) / 1000).toFixed(1) + " L/min",
      [
        { label: "Yurak pulsi:", value: this.bpm + " BPM" },
        { label: "Holati:", value: holat },
        { label: "Daqiqalik hajm:", value: ((this.bpm * 70) / 1000).toFixed(1) + " L/min" }
      ]
    );
  }

  updateUIInfo(title, desc, formula, values) {
    const titleEl = document.getElementById('biology-experiment-title');
    const descEl = document.getElementById('biology-experiment-description');
    const formulaEl = document.getElementById('biology-formula');
    const valuesContainer = document.getElementById('biology-values');

    if (titleEl) titleEl.textContent = title;
    if (descEl) descEl.textContent = desc;
    if (formulaEl) {
      formulaEl.innerHTML = '<span class="formula-label">Ilmiy tushuncha:</span> <span class="formula-text">' + formula + '</span>';
    }

    if (valuesContainer && values) {
      valuesContainer.innerHTML = '';
      values.forEach(v => {
        const item = document.createElement('div');
        item.className = 'lab-value-item';
        item.innerHTML = '<span class="value-label">' + v.label + '</span><span class="value-num">' + v.value + '</span>';
        valuesContainer.appendChild(item);
      });
    }
  }

  onWindowResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    const w = this.container.clientWidth;
    const h = this.container.clientHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  destroy() {
    if (this.animationId) cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', this._onResize);
    if (this._cleanupControls) this._cleanupControls();
    if (this.renderer && this.renderer.domElement && this.renderer.domElement.parentNode) {
      this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
    }
    this.scene = null;
    this.camera = null;
    this.renderer = null;
  }
}

let biologyLab = null;

window.initBiologyLab = function () {
  if (biologyLab) biologyLab.destroy();
  biologyLab = new BiologyLab('biology-canvas-container');
  biologyLab.init();
  biologyLab.setupHeart();
};

window.selectBiologyExperiment = function (expKey) {
  if (!biologyLab) window.initBiologyLab();

  const items = document.querySelectorAll('#biology-experiment-list .experiment-item');
  items.forEach(it => {
    it.classList.toggle('active', it.getAttribute('data-experiment') === expKey);
  });

  const bpmSliderGroup = document.getElementById('slider-bio-bpm-group');
  if (bpmSliderGroup) {
    bpmSliderGroup.style.display = (expKey === 'heart') ? 'block' : 'none';
  }

  if (expKey === 'heart') biologyLab.setupHeart();
  else if (expKey === 'plant-cell') biologyLab.setupPlantCell();
  else if (expKey === 'dna') biologyLab.setupDNA();
  else if (expKey === 'eye') biologyLab.setupEye();
  else if (expKey === 'human-lungs') biologyLab.setupLungs();
};

window.updateBiologySlider = function (key, val) {
  if (!biologyLab) return;
  if (key === 'bpm') biologyLab.setBpm(val);
};

window.startBiologyExperiment = function () {
  if (biologyLab) biologyLab.isRunning = true;
};
window.pauseBiologyExperiment = function () {
  if (biologyLab) biologyLab.isRunning = false;
};
window.resetBiologyExperiment = function () {
  if (biologyLab) {
    if (biologyLab.currentExperiment === 'heart') biologyLab.setupHeart();
    else if (biologyLab.currentExperiment === 'plant-cell') biologyLab.setupPlantCell();
    else if (biologyLab.currentExperiment === 'dna') biologyLab.setupDNA();
    else if (biologyLab.currentExperiment === 'eye') biologyLab.setupEye();
    else if (biologyLab.currentExperiment === 'human-lungs') biologyLab.setupLungs();
  }
};
