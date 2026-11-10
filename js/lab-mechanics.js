/**
 * 30-maktabtest - 3D Interaktiv Mexanika va Mashinasozlik Laboratoriyasi
 * Three.js asosida ishlaydi (100% oflayn, qo'shimcha kutubxonasiz)
 * 
 * 4 ta Asosiy Muhandislik Tajribasi:
 *   1. car-engine: 4 Taktli Ichki Yonuv Dvigateli (Porshen, Shatun, Tirsakli val, Klapanlar, Shamcha uchquni)
 *   2. gearbox-transmission: Tishli Uzatmalar va Reduktor (Tishli g'ildiraklar nisbati, Aylanish momenti, Tezlik)
 *   3. aerodynamics-wing: Aerodinamika va Samolyot Qanoti (Bernulli qonuni, Havo oqimlari, Ko'tarish kuchi)
 *   4. suspension-differential: Avtomobil Podveskasi va Amortizator (Prujina tebranishi, So'ndirish, G'ildirak)
 */

class MechanicsLab {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      console.error('MechanicsLab: container topilmadi:', containerId);
      return;
    }
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.clock = null;
    this.objects = {};
    this.currentExp = 'car-engine';
    this.animationId = null;
    this.isRunning = true;

    // Parametrlar
    this.params = {
      // Dvigatel
      engineRpm: 1200,
      sparkActive: true,
      strokePhase: 0, // 0 to 4pi (2 full crankshaft rotations per cycle)

      // Transmissiya
      gearRatio: 1.0,
      gearSpeed: 1.0,
      selectedGear: 1,

      // Aerodinamika
      angleAttack: 6, // gradus
      windSpeed: 1.2,
      streamlinesActive: true,

      // Podveska
      roadFrequency: 1.5,
      springStiffness: 1.0,
      dampingFactor: 0.8
    };

    // Orbit controls
    this.isDragging = false;
    this.previousMouse = { x: 0, y: 0 };
    this.theta = 0.75;
    this.phi = 1.1;
    this.cameraRadius = 30;
    this.cameraTarget = new THREE.Vector3(0, 0, 0);

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this._onResize = () => this.onWindowResize();
  }

  init() {
    if (!this.container) return;

    const width = this.container.clientWidth || 800;
    const height = this.container.clientHeight || 600;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x070b14);

    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.updateCameraPosition();

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const oldCanvas = this.container.querySelector('canvas');
    if (oldCanvas) oldCanvas.remove();
    this.container.insertBefore(this.renderer.domElement, this.container.firstChild);

    this.clock = new THREE.Clock();

    this.setupLighting();
    this.setupControls();

    this.loadExperiment(this.currentExp);

    window.removeEventListener('resize', this._onResize);
    window.addEventListener('resize', this._onResize);

    if (window.ResizeObserver && this.container) {
      this.resizeObserver = new ResizeObserver(() => {
        this.onWindowResize();
      });
      this.resizeObserver.observe(this.container);
    }

    this.animate();
  }

  setupLighting() {
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    this.scene.add(this.ambientLight);

    this.dirLight1 = new THREE.DirectionalLight(0xffffff, 1.1);
    this.dirLight1.position.set(25, 35, 20);
    this.dirLight1.castShadow = true;
    this.scene.add(this.dirLight1);

    this.dirLight2 = new THREE.DirectionalLight(0x38bdf8, 0.65);
    this.dirLight2.position.set(-20, -10, -20);
    this.scene.add(this.dirLight2);

    this.frontLight = new THREE.DirectionalLight(0xffffff, 0.9);
    this.frontLight.position.set(0, 10, 30);
    this.scene.add(this.frontLight);

    this.sparkLight = new THREE.PointLight(0xf59e0b, 0, 15);
    this.sparkLight.position.set(0, 5, 0);
    this.scene.add(this.sparkLight);
  }

  setupControls() {
    const el = this.renderer.domElement;

    el.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.previousMouse = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      const deltaX = e.clientX - this.previousMouse.x;
      const deltaY = e.clientY - this.previousMouse.y;

      this.theta -= deltaX * 0.008;
      this.phi -= deltaY * 0.008;
      this.phi = Math.max(0.1, Math.min(Math.PI - 0.1, this.phi));

      this.updateCameraPosition();
      this.previousMouse = { x: e.clientX, y: e.clientY };
    });

    el.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.cameraRadius += e.deltaY * 0.04;
      this.cameraRadius = Math.max(10, Math.min(75, this.cameraRadius));
      this.updateCameraPosition();
    }, { passive: false });

    // Touch
    let touchStartDist = 0;
    el.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.previousMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      } else if (e.touches.length === 2) {
        touchStartDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      }
    });

    el.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1 && this.isDragging) {
        const deltaX = e.touches[0].clientX - this.previousMouse.x;
        const deltaY = e.touches[0].clientY - this.previousMouse.y;
        this.theta -= deltaX * 0.008;
        this.phi -= deltaY * 0.008;
        this.phi = Math.max(0.1, Math.min(Math.PI - 0.1, this.phi));
        this.updateCameraPosition();
        this.previousMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      } else if (e.touches.length === 2) {
        const dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const factor = touchStartDist / dist;
        this.cameraRadius *= factor;
        this.cameraRadius = Math.max(10, Math.min(75, this.cameraRadius));
        this.updateCameraPosition();
        touchStartDist = dist;
      }
    });

    el.addEventListener('touchend', () => {
      this.isDragging = false;
    });

    el.addEventListener('click', (e) => {
      const rect = el.getBoundingClientRect();
      this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      this.handlePartClick();
    });
  }

  updateCameraPosition() {
    if (!this.camera) return;
    this.camera.position.x = this.cameraTarget.x + this.cameraRadius * Math.sin(this.phi) * Math.sin(this.theta);
    this.camera.position.y = this.cameraTarget.y + this.cameraRadius * Math.cos(this.phi);
    this.camera.position.z = this.cameraTarget.z + this.cameraRadius * Math.sin(this.phi) * Math.cos(this.theta);
    this.camera.lookAt(this.cameraTarget);
    if (this.renderer && this.scene) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  onWindowResize() {
    if (!this.container || !this.camera || !this.renderer) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    if (width <= 0 || height <= 0) return;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    if (this.scene && this.renderer) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  clearScene() {
    const toRemove = [];
    this.scene.traverse((child) => {
      if (child !== this.ambientLight && child !== this.dirLight1 && child !== this.dirLight2 && child !== this.sparkLight) {
        toRemove.push(child);
      }
    });
    toRemove.forEach((obj) => {
      if (obj.parent) obj.parent.remove(obj);
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
        else obj.material.dispose();
      }
    });
    this.objects = {};
  }

  loadExperiment(name) {
    this.currentExp = name;
    this.clearScene();

    switch (name) {
      case 'car-engine':
        this.setupCarEngine();
        break;
      case 'gearbox-transmission':
        this.setupGearbox();
        break;
      case 'aerodynamics-wing':
        this.setupAerodynamics();
        break;
      case 'suspension-differential':
        this.setupSuspension();
        break;
      default:
        this.setupCarEngine();
    }

    if (window.updateLabExplanation) {
      window.updateLabExplanation('mechanics', name, this.isRunning);
    }

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  // ============================================================
  // 1. 4 TAKTLI ICHKI YONUV DVIGATELI (CAR ENGINE)
  // ============================================================
  setupCarEngine() {
    this.cameraRadius = 28;
    this.cameraTarget.set(0, 0, 0);
    this.theta = 0.65;
    this.phi = 1.15;
    this.updateCameraPosition();

    const root = new THREE.Group();
    this.scene.add(root);
    this.objects.root = root;

    // 1. Silindr korpusi kesimi (Engine Cylinder Block - Cutaway)
    const cylOuterGeo = new THREE.CylinderGeometry(4.5, 4.5, 12, 32, 1, true, 0, Math.PI * 1.35);
    const cylOuterMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.8,
      roughness: 0.3,
      side: THREE.DoubleSide
    });
    const cylOuter = new THREE.Mesh(cylOuterGeo, cylOuterMat);
    cylOuter.position.set(0, 3, 0);
    cylOuter.rotation.y = Math.PI * 0.75;
    root.add(cylOuter);

    // Karter (Crankcase base)
    const baseGeo = new THREE.BoxGeometry(12, 4, 8);
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.7, roughness: 0.4 });
    const base = new THREE.Mesh(baseGeo, baseMat);
    base.position.set(0, -6, 0);
    root.add(base);

    // 2. Porshen (Piston)
    const pistonGeo = new THREE.CylinderGeometry(4.2, 4.2, 4.0, 32);
    const pistonMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.85,
      roughness: 0.2
    });
    const piston = new THREE.Mesh(pistonGeo, pistonMat);
    piston.position.set(0, 3, 0);
    piston.userData = {
      name: "Porshen (Piston)",
      desc: "Yonish kamerasida gaz bosimini qabul qilib, to'g'ri chiziqli harakatni shatun orqali valga uzatadi."
    };
    root.add(piston);
    this.objects.piston = piston;

    // Porshen halqalari (Piston rings)
    for (let r = 0; r < 3; r++) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(4.25, 0.08, 8, 32),
        new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.9 })
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.set(0, 1.2 - r * 0.6, 0);
      piston.add(ring);
    }

    // 3. Shatun (Connecting Rod)
    const rodGeo = new THREE.CylinderGeometry(0.5, 0.7, 7.5, 16);
    const rodMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.8 });
    const rod = new THREE.Mesh(rodGeo, rodMat);
    root.add(rod);
    this.objects.connectingRod = rod;

    // 4. Tirsakli val (Crankshaft & Counterweight)
    const crankGroup = new THREE.Group();
    crankGroup.position.set(0, -5, 0);

    const crankPin = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 3.0, 16), new THREE.MeshStandardMaterial({ color: 0xcbd5e1, metalness: 0.9 }));
    crankPin.rotation.x = Math.PI / 2;
    crankGroup.add(crankPin);

    // Muvozanatlashtiruvchi tosh (Counterweight)
    const weightGeo = new THREE.BoxGeometry(4.5, 2.5, 1.8);
    const weightMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.8 });
    const weight = new THREE.Mesh(weightGeo, weightMat);
    weight.position.set(0, -1.8, 0);
    crankGroup.add(weight);

    root.add(crankGroup);
    this.objects.crankshaft = crankGroup;

    // 5. Shamcha va Olov nuri (Spark plug & flame)
    const plugGeo = new THREE.CylinderGeometry(0.4, 0.6, 2.2, 16);
    const plugMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.8 });
    const plug = new THREE.Mesh(plugGeo, plugMat);
    plug.position.set(0, 9.8, 0);
    root.add(plug);

    // Olov sferasi (Yonish takti uchun)
    const flameGeo = new THREE.SphereGeometry(3.5, 16, 16);
    const flameMat = new THREE.MeshBasicMaterial({
      color: 0xf97316,
      transparent: true,
      opacity: 0.0
    });
    const flame = new THREE.Mesh(flameGeo, flameMat);
    flame.position.set(0, 6.8, 0);
    root.add(flame);
    this.objects.flame = flame;

    // 6. Klapanlar (Intake & Exhaust Valves)
    this.objects.valves = [];
    const valveCoords = [-1.8, 1.8];
    valveCoords.forEach((vx, idx) => {
      const vGroup = new THREE.Group();
      vGroup.position.set(vx, 8.8, 0);

      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 3.0), new THREE.MeshStandardMaterial({ color: 0xcbd5e1, metalness: 0.9 }));
      vGroup.add(stem);

      const head = new THREE.Mesh(new THREE.ConeGeometry(1.2, 0.8, 16), new THREE.MeshStandardMaterial({ color: idx === 0 ? 0x38bdf8 : 0xef4444, metalness: 0.8 }));
      head.position.y = -1.2;
      head.rotation.x = Math.PI;
      vGroup.add(head);

      root.add(vGroup);
      this.objects.valves.push(vGroup);
    });

    this.crankAngle = 0;
    this.updateEngineHUD();
  }

  updateEngineHUD() {
    const hud = document.getElementById('mech-part-hud') || document.getElementById('pc-part-hud');
    const hudTitle = document.getElementById('mech-hud-title') || document.getElementById('pc-hud-title');
    const hudDesc = document.getElementById('mech-hud-desc') || document.getElementById('pc-hud-desc');

    const strokes = [
      { name: "1. KIRITISH (Intake)", desc: "Havo-yonilg'i aralashmasi silindrga kiradi. Porshen pastga harakatlanadi.", color: "#38bdf8" },
      { name: "2. SIQISH (Compression)", desc: "Klapanlar yopiladi, porshen yuqoriga chiqib aralashmani siqadi.", color: "#f59e0b" },
      { name: "3. YONISH / ISHCHI YO'L (Power)", desc: "Shamcha uchqun chiqaradi! Gaz portlab porshenni kuch bilan pastga itaradi.", color: "#ef4444" },
      { name: "4. CHIQARISH (Exhaust)", desc: "Chiqarish klapani ochiladi, yonib bo'lgan gazlar tashqariga haydaladi.", color: "#a855f7" }
    ];

    // 4 pi davrida qaysi takt
    const cycle = (this.crankAngle % (Math.PI * 4) + Math.PI * 4) % (Math.PI * 4);
    const strokeIdx = Math.floor(cycle / Math.PI);
    const currentStroke = strokes[Math.min(3, strokeIdx)];

    if (hud && hudTitle && hudDesc) {
      hud.style.display = 'block';
      hudTitle.innerHTML = `<i class="fas fa-fire" style="color:${currentStroke.color};"></i> ${currentStroke.name}`;
      hudDesc.innerHTML = `<b>Tezlik:</b> ${this.params.engineRpm} RPM &nbsp;|&nbsp; ${currentStroke.desc}`;
    }

    const strokeEl = document.getElementById('mech-stroke-name');
    if (strokeEl) {
      strokeEl.textContent = currentStroke.name;
      strokeEl.style.color = currentStroke.color;
    }
  }

  // ============================================================
  // 2. TISHLI UZATMALAR VA REDUKTOR (GEARBOX & TRANSMISSION)
  // ============================================================
  setupGearbox() {
    this.cameraRadius = 32;
    this.cameraTarget.set(0, 0, 0);
    this.theta = 0.55;
    this.phi = 1.15;
    this.updateCameraPosition();

    const root = new THREE.Group();
    this.scene.add(root);
    this.objects.root = root;

    // Platform
    const plat = new THREE.Mesh(new THREE.BoxGeometry(26, 0.8, 12), new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.3, metalness: 0.8 }));
    plat.position.set(0, -5, 0);
    root.add(plat);

    // 1. Yetakchi kichik tishli g'ildirak (Input Pinion - Z1 = 12 tish)
    const gear1 = this.createGearMesh(3.5, 1.4, 12, 0x38bdf8);
    gear1.position.set(-5, 0, 0);
    root.add(gear1);
    this.objects.gear1 = gear1;

    // 2. Yetaklanuvchi katta tishli g'ildirak (Output Gear - Z2 = 24 tish)
    const gear2 = this.createGearMesh(6.5, 1.4, 24, 0xf59e0b);
    gear2.position.set(4.6, 0, 0);
    root.add(gear2);
    this.objects.gear2 = gear2;

    // Miller (Shafts)
    const shaft1 = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 6), new THREE.MeshStandardMaterial({ color: 0xcbd5e1, metalness: 0.9 }));
    shaft1.rotation.x = Math.PI / 2;
    shaft1.position.set(-5, 0, 0);
    root.add(shaft1);

    const shaft2 = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 6), new THREE.MeshStandardMaterial({ color: 0xcbd5e1, metalness: 0.9 }));
    shaft2.rotation.x = Math.PI / 2;
    shaft2.position.set(4.6, 0, 0);
    root.add(shaft2);

    this.updateGearHUD();
  }

  createGearMesh(radius, thickness, teethCount, colorHex) {
    const grp = new THREE.Group();
    const diskGeo = new THREE.CylinderGeometry(radius * 0.88, radius * 0.88, thickness, 32);
    const diskMat = new THREE.MeshStandardMaterial({ color: colorHex, metalness: 0.85, roughness: 0.25 });
    const disk = new THREE.Mesh(diskGeo, diskMat);
    disk.rotation.x = Math.PI / 2;
    grp.add(disk);

    // Tishlar (Teeth around circumference)
    for (let t = 0; t < teethCount; t++) {
      const angle = (t / teethCount) * Math.PI * 2;
      const toothGeo = new THREE.BoxGeometry(0.7, 1.2, thickness * 0.98);
      const tooth = new THREE.Mesh(toothGeo, diskMat);
      tooth.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
      tooth.rotation.z = angle;
      grp.add(tooth);
    }

    return grp;
  }

  setGearSpeed(val) {
    this.params.gearSpeed = parseFloat(val);
    this.updateGearHUD();
  }

  updateGearHUD() {
    const hud = document.getElementById('mech-part-hud') || document.getElementById('pc-part-hud');
    const hudTitle = document.getElementById('mech-hud-title') || document.getElementById('pc-hud-title');
    const hudDesc = document.getElementById('mech-hud-desc') || document.getElementById('pc-hud-desc');
    const ratio = "i = 2.0 (Z2 / Z1 = 24 / 12)";

    if (hud && hudTitle && hudDesc) {
      hud.style.display = 'block';
      hudTitle.innerHTML = `<i class="fas fa-cogs" style="color:#f59e0b;"></i> Tishli Uzatma (Reduktor)`;
      hudDesc.innerHTML = `<b>Uzatmalar nisbati:</b> ${ratio} &nbsp;|&nbsp; <b>Tezlik 2 marta pasayadi, aylanish momenti 2 marta ortadi!</b>`;
    }

    const ratioEl = document.getElementById('gear-ratio-val');
    if (ratioEl) ratioEl.textContent = ratio;
  }

  // ============================================================
  // 3. AERODINAMIKA VA SAMOLYOT QANOTI (AERODYNAMICS)
  // ============================================================
  setupAerodynamics() {
    this.cameraRadius = 32;
    this.cameraTarget.set(0, 1, 0);
    this.theta = 0.8;
    this.phi = 1.15;
    this.updateCameraPosition();

    const root = new THREE.Group();
    this.scene.add(root);
    this.objects.root = root;

    // 1. Aerodinamik quvur (Wind tunnel floor & markers)
    const grid = new THREE.GridHelper(40, 20, 0x38bdf8, 0x1e293b);
    grid.position.y = -6;
    root.add(grid);

    // 2. Samolyot Qanoti Aeroprofili (NACA Airfoil Wing)
    const wingShape = new THREE.Shape();
    wingShape.moveTo(-6, 0);
    wingShape.bezierCurveTo(-4, 2.2, 0, 2.8, 6, 0.2); // Ustki qavariq profil (tez havo, past bosim)
    wingShape.bezierCurveTo(2, -0.6, -2, -0.8, -6, 0); // Ostki yassi profil (sekin havo, yuqori bosim)

    const extrudeSettings = { depth: 16, bevelEnabled: true, bevelSegments: 3, steps: 1, bevelSize: 0.2, bevelThickness: 0.2 };
    const wingGeo = new THREE.ExtrudeGeometry(wingShape, extrudeSettings);
    const wingMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.8,
      roughness: 0.25
    });
    const wing = new THREE.Mesh(wingGeo, wingMat);
    wing.position.set(0, 0, -8);
    wing.rotation.z = (this.params.angleAttack * Math.PI) / 180;
    root.add(wing);
    this.objects.wing = wing;

    // 3. Ko'tarish kuchi vektori (Lift Force Vector Arrow)
    const liftArrow = new THREE.ArrowHelper(
      new THREE.Vector3(0, 1, 0),
      new THREE.Vector3(0, 2.5, 0),
      6.0,
      0x22c55e,
      1.4,
      0.8
    );
    root.add(liftArrow);
    this.objects.liftArrow = liftArrow;

    // 4. Havo oqimlari zarralari (Streamlines Particles)
    const particleCount = 75;
    const pGeo = new THREE.SphereGeometry(0.18, 8, 8);
    const pMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    this.airParticles = [];

    for (let p = 0; p < particleCount; p++) {
      const pMesh = new THREE.Mesh(pGeo, pMat);
      root.add(pMesh);
      this.airParticles.push({
        mesh: pMesh,
        x: -18 + Math.random() * 36,
        y: -4 + Math.random() * 8,
        z: -7 + Math.random() * 14,
        speed: 0.25 + Math.random() * 0.1
      });
    }

    this.updateAeroHUD();
  }

  setAngleOfAttack(deg) {
    this.params.angleAttack = parseFloat(deg);
    if (this.objects.wing) {
      this.objects.wing.rotation.z = (this.params.angleAttack * Math.PI) / 180;
    }
    if (this.objects.liftArrow) {
      const lift = Math.max(1, Math.min(10, 3 + this.params.angleAttack * 0.5));
      this.objects.liftArrow.setLength(lift);
    }
    this.updateAeroHUD();
  }

  updateAeroHUD() {
    const hud = document.getElementById('mech-part-hud') || document.getElementById('pc-part-hud');
    const hudTitle = document.getElementById('mech-hud-title') || document.getElementById('pc-hud-title');
    const hudDesc = document.getElementById('mech-hud-desc') || document.getElementById('pc-hud-desc');
    const liftForce = (3.2 + this.params.angleAttack * 0.45).toFixed(1);

    if (hud && hudTitle && hudDesc) {
      hud.style.display = 'block';
      hudTitle.innerHTML = `<i class="fas fa-plane" style="color:#38bdf8;"></i> Samolyot Qanoti Aerodinamikasi`;
      hudDesc.innerHTML = `<b>Hujum burchagi (AoA):</b> ${this.params.angleAttack}&deg; &nbsp;|&nbsp; <b>Ko'tarish kuchi:</b> ${liftForce} kN (Bernulli qonuni)`;
    }

    const aoaEl = document.getElementById('aero-aoa-val');
    if (aoaEl) aoaEl.textContent = this.params.angleAttack + '°';
  }

  // ============================================================
  // 4. AVTOMOBIL PODVESKASI VA AMORTIZATOR (SUSPENSION)
  // ============================================================
  setupSuspension() {
    this.cameraRadius = 30;
    this.cameraTarget.set(0, 0, 0);
    this.theta = 0.65;
    this.phi = 1.15;
    this.updateCameraPosition();

    const root = new THREE.Group();
    this.scene.add(root);
    this.objects.root = root;

    // 1. Shassi bazasi (Vehicle Chassis frame at top)
    const chassis = new THREE.Mesh(new THREE.BoxGeometry(14, 1.5, 8), new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8 }));
    chassis.position.set(0, 6, 0);
    root.add(chassis);

    // 2. G'ildirak (Wheel & Rubber Tire at bottom)
    const wheelGroup = new THREE.Group();
    wheelGroup.position.set(0, -4, 0);

    const tireGeo = new THREE.TorusGeometry(3.6, 1.4, 16, 32);
    const tireMat = new THREE.MeshStandardMaterial({ color: 0x090d16, roughness: 0.9 });
    const tire = new THREE.Mesh(tireGeo, tireMat);
    wheelGroup.add(tire);

    const rim = new THREE.Mesh(new THREE.CylinderGeometry(2.8, 2.8, 1.8, 24), new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9 }));
    rim.rotation.x = Math.PI / 2;
    wheelGroup.add(rim);

    root.add(wheelGroup);
    this.objects.wheel = wheelGroup;

    // 3. Amortizator silindri va shtogi (Strut Shock Absorber)
    const strutOuter = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 5.0), new THREE.MeshStandardMaterial({ color: 0xef4444, metalness: 0.7 }));
    strutOuter.position.set(0, -1, 0);
    root.add(strutOuter);

    const strutPiston = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 6.0), new THREE.MeshStandardMaterial({ color: 0xcbd5e1, metalness: 0.95 }));
    strutPiston.position.set(0, 3, 0);
    root.add(strutPiston);
    this.objects.strutPiston = strutPiston;

    // 4. Prujina spirali (Spring Coil)
    const springRadius = 1.6;
    const springTurns = 7;
    const points = [];
    for (let i = 0; i <= 100; i++) {
      const t = i / 100;
      const angle = t * Math.PI * 2 * springTurns;
      const x = Math.cos(angle) * springRadius;
      const z = Math.sin(angle) * springRadius;
      const y = t * 7 - 3.5;
      points.push(new THREE.Vector3(x, y, z));
    }
    const curve = new THREE.CatmullRomCurve3(points);
    const springGeo = new THREE.TubeGeometry(curve, 100, 0.22, 8, false);
    const springMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.85, roughness: 0.2 });
    const spring = new THREE.Mesh(springGeo, springMat);
    spring.position.set(0, 1, 0);
    root.add(spring);
    this.objects.spring = spring;

    this.updateSuspensionHUD();
  }

  updateSuspensionHUD() {
    const hud = document.getElementById('mech-part-hud') || document.getElementById('pc-part-hud');
    const hudTitle = document.getElementById('mech-hud-title') || document.getElementById('pc-hud-title');
    const hudDesc = document.getElementById('mech-hud-desc') || document.getElementById('pc-hud-desc');

    if (hud && hudTitle && hudDesc) {
      hud.style.display = 'block';
      hudTitle.innerHTML = `<i class="fas fa-compress-arrows-alt" style="color:#f59e0b;"></i> Avtomobil Podveskasi (Amortizator)`;
      hudDesc.innerHTML = `<b>Prujina:</b> Tebranish energiyasini yutadi &nbsp;|&nbsp; <b>Gidravlik amortizator:</b> Tebranishni so'ndiradi va g'ildirakni yo'lga bosadi.`;
    }
  }

  // ============================================================
  // ANIMATSIYA TSIKLI
  // ============================================================
  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());

    if (this.isRunning) {
      const time = this.clock.getElapsedTime();

      // 1. Dvigatel animatsiyasi
      if (this.currentExp === 'car-engine') {
        const speed = 0.04 * (this.params.engineRpm / 600);
        this.crankAngle += speed;

        // Crankshaft rotation
        if (this.objects.crankshaft) {
          this.objects.crankshaft.rotation.z = this.crankAngle;
        }

        // Piston reciprocating motion (kinematika: y = r*cos(a) + sqrt(l^2 - (r*sin(a))^2))
        const r = 2.4; // crank radius
        const l = 7.5; // rod length
        const crankY = -5;
        const pistonY = crankY + r * Math.cos(this.crankAngle) + Math.sqrt(l * l - Math.pow(r * Math.sin(this.crankAngle), 2));

        if (this.objects.piston) {
          this.objects.piston.position.y = pistonY + 1.2;
        }

        // Connecting rod angle
        if (this.objects.connectingRod) {
          const pinX = r * Math.sin(this.crankAngle);
          const pinY = crankY + r * Math.cos(this.crankAngle);
          const rodAngle = Math.asin((-pinX) / l);
          this.objects.connectingRod.position.set(pinX / 2, (pinY + pistonY) / 2, 0);
          this.objects.connectingRod.rotation.z = rodAngle;
        }

        // Klapanlar harakati & Uchqun
        const cycleAngle = (this.crankAngle % (Math.PI * 4) + Math.PI * 4) % (Math.PI * 4);
        if (this.objects.valves && this.objects.valves.length === 2) {
          // Intake valve opens around 0..pi
          const intakeOpen = cycleAngle < Math.PI ? Math.sin(cycleAngle) * 0.6 : 0;
          this.objects.valves[0].position.y = 8.8 - intakeOpen;

          // Exhaust valve opens around 3pi..4pi
          const exhaustOpen = cycleAngle > Math.PI * 3 ? Math.sin(cycleAngle - Math.PI * 3) * 0.6 : 0;
          this.objects.valves[1].position.y = 8.8 - exhaustOpen;
        }

        // Spark flash around 2pi (yonish takti boshlanishi)
        if (this.objects.flame) {
          if (Math.abs(cycleAngle - Math.PI * 2) < 0.35) {
            this.objects.flame.material.opacity = 0.85;
            if (this.sparkLight) this.sparkLight.intensity = 3.5;
          } else {
            this.objects.flame.material.opacity = Math.max(0, this.objects.flame.material.opacity - 0.08);
            if (this.sparkLight) this.sparkLight.intensity = Math.max(0, this.sparkLight.intensity - 0.3);
          }
        }

        this.updateEngineHUD();
      }

      // 2. Tishli uzatmalar animatsiyasi
      if (this.currentExp === 'gearbox-transmission') {
        const sp = 0.03 * this.params.gearSpeed;
        if (this.objects.gear1) this.objects.gear1.rotation.z += sp * 2.0;
        if (this.objects.gear2) this.objects.gear2.rotation.z -= sp * 1.0; // Qarama-qarshi aylanish va 2 marta sekin
      }

      // 3. Aerodinamika oqimlari
      if (this.currentExp === 'aerodynamics-wing' && this.airParticles) {
        this.airParticles.forEach(p => {
          p.x += p.speed * this.params.windSpeed;
          if (p.x > 18) {
            p.x = -18;
            p.y = -4 + Math.random() * 8;
          }

          // Qanot yonidan o'tayotganda havo oqimi qavariq profil bo'ylab egiladi
          let yOffset = 0;
          if (p.x > -6 && p.x < 6) {
            const factor = Math.cos((p.x / 6) * (Math.PI / 2));
            if (p.y >= 0) yOffset = factor * 1.8; // Ustki oqim yuqoriga egiladi
            else yOffset = -factor * 0.5; // Ostki oqim
          }
          p.mesh.position.set(p.x, p.y + yOffset, p.z);
        });
      }

      // 4. Podveska animatsiyasi (Harmonic road bump)
      if (this.currentExp === 'suspension-differential') {
        const bump = Math.sin(time * 3.5 * this.params.roadFrequency) * 1.6;
        if (this.objects.wheel) {
          this.objects.wheel.position.y = -4 + bump;
        }
        if (this.objects.strutPiston) {
          this.objects.strutPiston.position.y = 3 - bump * 0.4;
        }
        if (this.objects.spring) {
          const scaleY = 1.0 - (bump / 8.0);
          this.objects.spring.scale.set(1, Math.max(0.6, scaleY), 1);
        }
      }
    }

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  handlePartClick() {
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.objects.root.children, true);

    for (let i = 0; i < intersects.length; i++) {
      let obj = intersects[i].object;
      while (obj && !obj.userData.name && obj.parent !== this.objects.root) {
        obj = obj.parent;
      }
      if (obj && obj.userData.name) {
        const hudTitle = document.getElementById('mech-hud-title') || document.getElementById('pc-hud-title');
        const hudDesc = document.getElementById('mech-hud-desc') || document.getElementById('pc-hud-desc');
        if (hudTitle && hudDesc) {
          hudTitle.innerHTML = `<i class="fas fa-cog"></i> ` + obj.userData.name;
          hudDesc.textContent = obj.userData.desc;
        }
        const titleEl = document.getElementById('mech-info-title');
        const descEl = document.getElementById('mech-info-desc');
        if (titleEl) titleEl.textContent = obj.userData.name;
        if (descEl) descEl.textContent = obj.userData.desc;
        if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
        break;
      }
    }
  }

  triggerQuickAction() {
    if (this.currentExp === 'car-engine') {
      // Gaz berish (RPM oshirish)
      this.params.engineRpm = this.params.engineRpm > 3000 ? 1200 : 4500;
      const slider = document.getElementById('slider-mech-rpm');
      if (slider) slider.value = this.params.engineRpm;
      const valEl = document.getElementById('slider-mech-rpm-val');
      if (valEl) valEl.textContent = this.params.engineRpm + ' RPM';
    } else if (this.currentExp === 'gearbox-transmission') {
      this.params.gearSpeed = this.params.gearSpeed > 1.8 ? 1.0 : 2.5;
    } else if (this.currentExp === 'aerodynamics-wing') {
      // Hujum burchagini o'zgartirish
      const nextAoa = this.params.angleAttack > 12 ? 4 : 14;
      this.setAngleOfAttack(nextAoa);
      const slider = document.getElementById('slider-mech-aoa');
      if (slider) slider.value = nextAoa;
    } else if (this.currentExp === 'suspension-differential') {
      // Kuchli to'siq (Pothole shock)
      this.params.roadFrequency = this.params.roadFrequency > 2.0 ? 1.2 : 3.0;
    }
    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  }

  resetExperiment() {
    this.params.engineRpm = 1200;
    this.params.gearSpeed = 1.0;
    this.params.angleAttack = 6;
    this.params.roadFrequency = 1.5;

    if (this.currentExp === 'car-engine') {
      const s = document.getElementById('slider-mech-rpm');
      if (s) s.value = 1200;
      const v = document.getElementById('slider-mech-rpm-val');
      if (v) v.textContent = '1200 RPM';
    } else if (this.currentExp === 'aerodynamics-wing') {
      this.setAngleOfAttack(6);
      const s = document.getElementById('slider-mech-aoa');
      if (s) s.value = 6;
    }

    this.theta = 0.75;
    this.phi = 1.1;
    this.cameraRadius = 30;
    this.updateCameraPosition();
  }

  destroy() {
    this.isRunning = false;
    if (this.animationId) cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', this._onResize);
    this.clearScene();
    if (this.renderer && this.renderer.domElement && this.renderer.domElement.parentNode) {
      this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
    }
  }
}

// Global yordamchilar
window.mechanicsLabInstance = null;

window.initMechanicsLab = function () {
  if (!window.mechanicsLabInstance) {
    window.mechanicsLabInstance = new MechanicsLab('mechanics-canvas-container');
    window.mechanicsLabInstance.init();
  }
};

window.selectMechanicsExperiment = function (name) {
  if (window.mechanicsLabInstance) {
    window.mechanicsLabInstance.isRunning = true;
    window.mechanicsLabInstance.loadExperiment(name);

    const items = document.querySelectorAll('#mechanics-experiment-list .experiment-item');
    items.forEach(el => {
      el.classList.toggle('active', el.getAttribute('data-experiment') === name);
    });

    const sliders = ['car-engine', 'gearbox-transmission', 'aerodynamics-wing', 'suspension-differential'];
    sliders.forEach(s => {
      const el = document.getElementById('mech-sliders-' + s);
      if (el) el.style.display = (name === s) ? 'block' : 'none';
    });

    const actBtn = document.getElementById('mech-action-btn');
    if (actBtn) {
      if (name === 'car-engine') actBtn.innerHTML = '<i class="fas fa-tachometer-alt"></i> Gaz berish (RPM)';
      else if (name === 'gearbox-transmission') actBtn.innerHTML = '<i class="fas fa-random"></i> Tezlikni oshirish';
      else if (name === 'aerodynamics-wing') actBtn.innerHTML = '<i class="fas fa-plane"></i> Hujum burchagi';
      else if (name === 'suspension-differential') actBtn.innerHTML = '<i class="fas fa-road"></i> Notekis yo\'l';
    }

    const startBtn = document.getElementById('mech-start-btn');
    const pauseBtn = document.getElementById('mech-pause-btn');
    if (startBtn) startBtn.disabled = true;
    if (pauseBtn) pauseBtn.disabled = false;
  }
};

window.startMechanicsExperiment = function () {
  if (window.mechanicsLabInstance) {
    window.mechanicsLabInstance.isRunning = true;
    if (typeof window.updateLabExplanation === 'function') {
      window.updateLabExplanation('mechanics', window.mechanicsLabInstance.currentExp, true);
    }
    const startBtn = document.getElementById('mech-start-btn');
    const pauseBtn = document.getElementById('mech-pause-btn');
    if (startBtn) startBtn.disabled = true;
    if (pauseBtn) pauseBtn.disabled = false;
    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  }
};

window.pauseMechanicsExperiment = function () {
  if (window.mechanicsLabInstance) {
    window.mechanicsLabInstance.isRunning = false;
    if (typeof window.updateLabExplanation === 'function') {
      window.updateLabExplanation('mechanics', window.mechanicsLabInstance.currentExp, false);
    }
    const startBtn = document.getElementById('mech-start-btn');
    const pauseBtn = document.getElementById('mech-pause-btn');
    if (startBtn) startBtn.disabled = false;
    if (pauseBtn) pauseBtn.disabled = true;
    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  }
};

window.resetMechanicsExperiment = function () {
  if (window.mechanicsLabInstance) {
    window.mechanicsLabInstance.resetExperiment();
    window.mechanicsLabInstance.isRunning = true;
    if (typeof window.updateLabExplanation === 'function') {
      window.updateLabExplanation('mechanics', window.mechanicsLabInstance.currentExp, true);
    }
    const startBtn = document.getElementById('mech-start-btn');
    const pauseBtn = document.getElementById('mech-pause-btn');
    if (startBtn) startBtn.disabled = true;
    if (pauseBtn) pauseBtn.disabled = false;
    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  }
};
