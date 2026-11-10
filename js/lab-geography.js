/**
 * 30-maktabtest - 3D Interaktiv Geografiya va Yer Tuzilishi Laboratoriyasi
 * Three.js asosida ishlaydi (100% oflayn, qo'shimcha kutubxonasiz)
 * 
 * Tajribalar:
 *   1. earth-layers: Yerning Ichki Qatlamlari (Yer qobig'i, Mantiya, Tashqi yadro, Ichki yadro)
 *   2. volcano: Vulqon Otilishi va Litosfera Plitalari (Magma kamerasi, lava, tutun, tektonika)
 *   3. water-cycle: Suvning Tabiatda Aylanishi (Bug'lanish, bulutlar, yog'in, daryo oqimi)
 *   4. uzbekistan-relief: O'zbekiston Relyefi va 3D Landshaft (Tog'lar, cho'llar, Orol dengizi)
 */

class GeographyLab {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      console.error('GeographyLab: container topilmadi:', containerId);
      return;
    }
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.clock = null;
    this.objects = {};
    this.currentExp = 'earth-layers';
    this.animationId = null;
    this.isRunning = true;

    // Eksperiment parametrlari
    this.params = {
      // Yer qatlamlari
      layerExplosion: 0.0, // 0 to 1 (qatlamlar ochilishi)
      earthRotationSpeed: 0.5,

      // Vulqon
      eruptionSpeed: 1.0,
      magmaFlow: true,
      ashCloud: true,

      // Suv aylanishi
      cycleSpeed: 1.0,
      rainIntensity: 1.0,
      sunIntensity: 1.0,

      // Relyef
      reliefExaggeration: 1.5,
      waterLevel: 0.5
    };

    // Kamera boshqaruvi (orbit)
    this.isDragging = false;
    this.previousMouse = { x: 0, y: 0 };
    this.theta = 0.8;
    this.phi = 1.1;
    this.cameraRadius = 32;
    this.cameraTarget = new THREE.Vector3(0, 0, 0);

    this._onResize = () => this.onWindowResize();
  }

  init() {
    if (!this.container) return;

    const width = this.container.clientWidth || 800;
    const height = this.container.clientHeight || 600;

    // Sahna
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x070b19);

    // Kamera
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.updateCameraPosition();

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.container.innerHTML = '';
    this.container.appendChild(this.renderer.domElement);

    this.clock = new THREE.Clock();

    // Yoritish
    this.setupLighting();

    // Sichqoncha va sensor boshqaruvi
    this.setupControls();

    // Dastlabki tajribani yuklash
    this.loadExperiment(this.currentExp);

    // Resize hodisasi
    window.removeEventListener('resize', this._onResize);
    window.addEventListener('resize', this._onResize);

    if (window.ResizeObserver && this.container) {
      this.resizeObserver = new ResizeObserver(() => {
        this.onWindowResize();
      });
      this.resizeObserver.observe(this.container);
    }

    // Animatsiya tsiklini ishga tushirish
    this.animate();
  }

  setupLighting() {
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
    this.scene.add(this.ambientLight);

    this.dirLight1 = new THREE.DirectionalLight(0xffffff, 0.95);
    this.dirLight1.position.set(25, 35, 25);
    this.dirLight1.castShadow = true;
    this.scene.add(this.dirLight1);

    this.dirLight2 = new THREE.DirectionalLight(0x38bdf8, 0.45);
    this.dirLight2.position.set(-25, -15, -20);
    this.scene.add(this.dirLight2);

    this.pointLight = new THREE.PointLight(0xf59e0b, 1.2, 50);
    this.pointLight.position.set(0, 5, 0);
    this.scene.add(this.pointLight);
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

    el.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      const deltaX = e.clientX - this.previousMouse.x;
      const deltaY = e.clientY - this.previousMouse.y;

      this.theta -= deltaX * 0.007;
      this.phi -= deltaY * 0.007;
      this.phi = Math.max(0.1, Math.min(Math.PI - 0.1, this.phi));

      this.updateCameraPosition();
      this.previousMouse = { x: e.clientX, y: e.clientY };
    });

    el.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.cameraRadius += e.deltaY * 0.025;
      this.cameraRadius = Math.max(8, Math.min(90, this.cameraRadius));
      this.updateCameraPosition();
    }, { passive: false });

    // Touch boshqaruvi
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

    el.addEventListener('touchend', () => {
      this.isDragging = false;
    });

    el.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1 && this.isDragging) {
        const deltaX = e.touches[0].clientX - this.previousMouse.x;
        const deltaY = e.touches[0].clientY - this.previousMouse.y;
        this.theta -= deltaX * 0.007;
        this.phi -= deltaY * 0.007;
        this.phi = Math.max(0.1, Math.min(Math.PI - 0.1, this.phi));
        this.updateCameraPosition();
        this.previousMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      } else if (e.touches.length === 2) {
        const dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const factor = (touchStartDist - dist) * 0.05;
        this.cameraRadius = Math.max(8, Math.min(90, this.cameraRadius + factor));
        this.updateCameraPosition();
        touchStartDist = dist;
      }
    });
  }

  updateCameraPosition() {
    if (!this.camera) return;
    this.camera.position.x = this.cameraTarget.x + this.cameraRadius * Math.sin(this.phi) * Math.sin(this.theta);
    this.camera.position.y = this.cameraTarget.y + this.cameraRadius * Math.cos(this.phi);
    this.camera.position.z = this.cameraTarget.z + this.cameraRadius * Math.sin(this.phi) * Math.cos(this.theta);
    this.camera.lookAt(this.cameraTarget);
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
      if (child !== this.ambientLight && child !== this.dirLight1 && child !== this.dirLight2 && child !== this.pointLight) {
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
      case 'earth-layers':
        this.setupEarthLayers();
        break;
      case 'volcano':
        this.setupVolcano();
        break;
      case 'water-cycle':
        this.setupWaterCycle();
        break;
      case 'uzbekistan-relief':
        this.setupUzbekistanRelief();
        break;
      default:
        this.setupEarthLayers();
    }

    if (window.updateLiveExplanation) {
      window.updateLiveExplanation('geography', name);
    }
  }

  // ============================================================
  // 1. YERNING ICHKI QATLAMLARI (EARTH LAYERS)
  // ============================================================
  setupEarthLayers() {
    this.cameraRadius = 32;
    this.cameraTarget.set(0, 0, 0);
    this.theta = 0.8;
    this.phi = 1.1;
    this.updateCameraPosition();

    const root = new THREE.Group();
    this.scene.add(root);
    this.objects.root = root;

    // Yulduzli koinot foni (zarralar)
    const starGeo = new THREE.BufferGeometry();
    const starCount = 600;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPos[i] = (Math.random() - 0.5) * 160;
      starPos[i + 1] = (Math.random() - 0.5) * 160;
      starPos[i + 2] = (Math.random() - 0.5) * 160;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({ color: 0x94a3b8, size: 0.6, transparent: true, opacity: 0.8 });
    this.scene.add(new THREE.Points(starGeo, starMat));

    // 1. Ichki yadro (Inner Solid Core) - Radius 3.2
    const innerGeo = new THREE.SphereGeometry(3.2, 32, 32);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xfef08a,
      emissiveIntensity: 0.8,
      roughness: 0.3,
      metalness: 0.8
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    root.add(innerCore);
    this.objects.innerCore = innerCore;

    // 2. Tashqi yadro (Outer Liquid Core) - Kesimli sfera (3/4 sfera, chorak qismi ochiq)
    const outerGeo = new THREE.SphereGeometry(5.8, 36, 36, 0, Math.PI * 1.5, 0, Math.PI);
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xd97706,
      emissiveIntensity: 0.45,
      roughness: 0.4,
      metalness: 0.5,
      side: THREE.DoubleSide
    });
    const outerCore = new THREE.Mesh(outerGeo, outerMat);
    root.add(outerCore);
    this.objects.outerCore = outerCore;

    // 3. Mantiya (Lower & Upper Mantle) - Radius 9.0
    const mantleGeo = new THREE.SphereGeometry(9.0, 40, 40, 0, Math.PI * 1.5, 0, Math.PI);
    const mantleMat = new THREE.MeshStandardMaterial({
      color: 0xd946ef,
      emissive: 0xb91c1c,
      emissiveIntensity: 0.35,
      roughness: 0.7,
      metalness: 0.2,
      side: THREE.DoubleSide
    });
    const mantle = new THREE.Mesh(mantleGeo, mantleMat);
    root.add(mantle);
    this.objects.mantle = mantle;

    // 4. Yer Qobig'i (Crust & Continents) - Radius 10.0
    const crustGeo = new THREE.SphereGeometry(10.0, 48, 48, 0, Math.PI * 1.5, 0, Math.PI);
    const crustMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7, // Okeanlar
      roughness: 0.6,
      metalness: 0.1,
      side: THREE.DoubleSide
    });
    const crust = new THREE.Mesh(crustGeo, crustMat);
    root.add(crust);
    this.objects.crust = crust;

    // Qit'alar (Yashil va jigar rang materiklar)
    const continentGroup = new THREE.Group();
    const contMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.8 });
    const patchCoords = [
      { lat: 0.4, lon: 0.8, r: 2.2 },
      { lat: 0.2, lon: 2.2, r: 3.0 },
      { lat: -0.5, lon: 1.5, r: 2.4 },
      { lat: 0.9, lon: 3.1, r: 2.8 },
      { lat: -0.6, lon: 3.8, r: 2.0 },
      { lat: 0.6, lon: 0.2, r: 2.5 }
    ];
    patchCoords.forEach(c => {
      const pGeo = new THREE.SphereGeometry(c.r, 16, 16);
      const pMesh = new THREE.Mesh(pGeo, contMat);
      const dist = 9.8;
      pMesh.position.set(
        dist * Math.cos(c.lat) * Math.sin(c.lon),
        dist * Math.sin(c.lat),
        dist * Math.cos(c.lat) * Math.cos(c.lon)
      );
      continentGroup.add(pMesh);
    });
    crust.add(continentGroup);

    // Atmosfera halqasi
    const atmosGeo = new THREE.SphereGeometry(10.5, 32, 32);
    const atmosMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide
    });
    root.add(new THREE.Mesh(atmosGeo, atmosMat));

    // Qatlamlar kesimi uchun rangli ichki devorlar (Section caps)
    const capMatMantle = new THREE.MeshStandardMaterial({ color: 0xef4444, side: THREE.DoubleSide });
    const capMatOuter = new THREE.MeshStandardMaterial({ color: 0xf59e0b, side: THREE.DoubleSide });
    
    // Ma'lumot ko'rsatkichlari (3D Label halqalari)
    this.addOrbitRing(root, 3.2, 0xfef08a, 'Ichki Yadro (6000°C)');
    this.addOrbitRing(root, 5.8, 0xf59e0b, 'Tashqi Yadro (Suyuq)');
    this.addOrbitRing(root, 9.0, 0xef4444, 'Mantiya (Magma)');
    this.addOrbitRing(root, 10.0, 0x38bdf8, 'Yer Qobig\'i (Litosfera)');
  }

  addOrbitRing(parent, radius, color, labelText) {
    const geo = new THREE.RingGeometry(radius - 0.05, radius + 0.05, 64);
    const mat = new THREE.MeshBasicMaterial({ color: color, side: THREE.DoubleSide, transparent: true, opacity: 0.6 });
    const ring = new THREE.Mesh(geo, mat);
    ring.rotation.x = Math.PI / 2;
    parent.add(ring);
  }

  // ============================================================
  // 2. VULQON OTILISHI VA LITOSFERA PLITALARI (VOLCANO)
  // ============================================================
  setupVolcano() {
    this.cameraRadius = 30;
    this.cameraTarget.set(0, 3, 0);
    this.theta = 0.5;
    this.phi = 1.15;
    this.updateCameraPosition();

    const root = new THREE.Group();
    this.scene.add(root);
    this.objects.root = root;

    // Asosiy yer platformasi (Yer qobig'i kesimi)
    const crustGeo = new THREE.BoxGeometry(26, 3, 18);
    const crustMat = new THREE.MeshStandardMaterial({ color: 0x3f3f46, roughness: 0.9 });
    const crustMesh = new THREE.Mesh(crustGeo, crustMat);
    crustMesh.position.y = -1.5;
    root.add(crustMesh);

    // Magma kamerasi (yer osti qaynoq hovuzi)
    const magmaChamberGeo = new THREE.SphereGeometry(3.2, 24, 24);
    const magmaChamberMat = new THREE.MeshStandardMaterial({
      color: 0xff3b30,
      emissive: 0xff4500,
      emissiveIntensity: 0.85,
      roughness: 0.3
    });
    const magmaChamber = new THREE.Mesh(magmaChamberGeo, magmaChamberMat);
    magmaChamber.position.set(0, -1.2, 0);
    root.add(magmaChamber);

    // Magma trubkasi (vent)
    const ventGeo = new THREE.CylinderGeometry(0.8, 1.4, 8, 20);
    const ventMat = new THREE.MeshStandardMaterial({
      color: 0xff5722,
      emissive: 0xff3d00,
      emissiveIntensity: 0.75
    });
    const vent = new THREE.Mesh(ventGeo, ventMat);
    vent.position.set(0, 3, 0);
    root.add(vent);

    // Vulqon konusi (Stratovulqon tog'i)
    const volcanoGeo = new THREE.ConeGeometry(8.5, 7.5, 32, 1, true);
    const volcanoMat = new THREE.MeshStandardMaterial({
      color: 0x27272a,
      roughness: 0.95,
      side: THREE.DoubleSide
    });
    const volcano = new THREE.Mesh(volcanoGeo, volcanoMat);
    volcano.position.y = 3.75;
    root.add(volcano);

    // Krater olovi va lavasi
    const craterGeo = new THREE.CylinderGeometry(1.2, 0.4, 0.6, 24);
    const craterMat = new THREE.MeshStandardMaterial({
      color: 0xffeb3b,
      emissive: 0xff9800,
      emissiveIntensity: 1.2
    });
    const crater = new THREE.Mesh(craterGeo, craterMat);
    crater.position.y = 7.4;
    root.add(crater);

    // Vulqon yonbag'ridagi qotgan lava daryolari
    const lavaFlowGeo = new THREE.CylinderGeometry(0.3, 0.6, 6, 8);
    const lavaFlowMat = new THREE.MeshStandardMaterial({
      color: 0xff3d00,
      emissive: 0xd84315,
      emissiveIntensity: 0.8
    });
    for (let i = 0; i < 4; i++) {
      const lMesh = new THREE.Mesh(lavaFlowGeo, lavaFlowMat);
      lMesh.position.set(Math.sin(i * 1.5) * 3, 4, Math.cos(i * 1.5) * 3);
      lMesh.rotation.z = (Math.random() - 0.5) * 0.4;
      root.add(lMesh);
    }

    // Otiluvchi zarralar (Kullar, tutun va olovli lavalar)
    const particleCount = 250;
    const pGeo = new THREE.BufferGeometry();
    const pPositions = new Float32Array(particleCount * 3);
    const pVelocities = [];

    for (let i = 0; i < particleCount; i++) {
      pPositions[i * 3] = (Math.random() - 0.5) * 0.8;
      pPositions[i * 3 + 1] = 7.5 + Math.random() * 0.5;
      pPositions[i * 3 + 2] = (Math.random() - 0.5) * 0.8;

      pVelocities.push({
        vx: (Math.random() - 0.5) * 0.08,
        vy: 0.12 + Math.random() * 0.18,
        vz: (Math.random() - 0.5) * 0.08,
        life: Math.random() * 50
      });
    }

    pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xff4500,
      size: 0.6,
      transparent: true,
      opacity: 0.85
    });
    const particles = new THREE.Points(pGeo, pMat);
    root.add(particles);

    this.objects.volcanoParticles = particles;
    this.objects.pPositions = pPositions;
    this.objects.pVelocities = pVelocities;

    // Litosfera plitalarining surilish o'qlari (Tectonic Plate Arrows)
    this.createArrow(root, new THREE.Vector3(-10, 0.5, 0), new THREE.Vector3(1, 0, 0), 3.5, 0x38bdf8);
    this.createArrow(root, new THREE.Vector3(10, 0.5, 0), new THREE.Vector3(-1, 0, 0), 3.5, 0xec4899);
  }

  createArrow(parent, origin, dir, length, color) {
    const arrow = new THREE.ArrowHelper(dir.normalize(), origin, length, color, 1.0, 0.6);
    parent.add(arrow);
  }

  // ============================================================
  // 3. SUVNING TABIATDA AYLANI SHI (WATER CYCLE)
  // ============================================================
  setupWaterCycle() {
    this.cameraRadius = 34;
    this.cameraTarget.set(0, 4, 0);
    this.theta = 0.7;
    this.phi = 1.1;
    this.updateCameraPosition();

    const root = new THREE.Group();
    this.scene.add(root);
    this.objects.root = root;

    // 1. Okean / Dengiz (Chap tomonda ko'm-ko'k suv)
    const oceanGeo = new THREE.BoxGeometry(14, 2.5, 18);
    const oceanMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.1,
      metalness: 0.2,
      transparent: true,
      opacity: 0.9
    });
    const ocean = new THREE.Mesh(oceanGeo, oceanMat);
    ocean.position.set(-8, 0, 0);
    root.add(ocean);
    this.objects.ocean = ocean;

    // 2. Quruqlik va Tog'lar (O'ng tomonda yashil va toshloq qir-adir)
    const landGeo = new THREE.BoxGeometry(16, 3.5, 18);
    const landMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.8 });
    const land = new THREE.Mesh(landGeo, landMat);
    land.position.set(6, 0.5, 0);
    root.add(land);

    // Qorli tog' cho'qqisi
    const mountainGeo = new THREE.ConeGeometry(5.5, 9, 8);
    const mountainMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.9 });
    const mountain = new THREE.Mesh(mountainGeo, mountainMat);
    mountain.position.set(9, 6.5, -2);
    root.add(mountain);

    // Qor qalpoqchasi
    const snowGeo = new THREE.ConeGeometry(2.5, 3.5, 8);
    const snowMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3 });
    const snow = new THREE.Mesh(snowGeo, snowMat);
    snow.position.set(9, 9.5, -2);
    root.add(snow);

    // 3. Daryo (Tog'dan okeanga oqib tushuvchi zangori daryo)
    const riverGeo = new THREE.BoxGeometry(14, 0.4, 2.2);
    const riverMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.2 });
    const river = new THREE.Mesh(riverGeo, riverMat);
    river.position.set(0, 2.4, 1.5);
    river.rotation.y = 0.15;
    root.add(river);

    // 4. Quyosh (Yorqin nur taratuvchi)
    const sunGeo = new THREE.SphereGeometry(2.4, 24, 24);
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24 });
    const sun = new THREE.Mesh(sunGeo, sunMat);
    sun.position.set(-9, 13, -5);
    root.add(sun);
    this.objects.sun = sun;

    // 5. Bulutlar (Kondensatsiya)
    const cloudGroup = new THREE.Group();
    const cloudMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.5 });
    for (let c = 0; c < 5; c++) {
      const puff = new THREE.Mesh(new THREE.SphereGeometry(1.6 + Math.random() * 0.8, 16, 16), cloudMat);
      puff.position.set(6 + (c - 2) * 1.8, 12 + (Math.random() - 0.5) * 0.8, -1 + (Math.random() - 0.5) * 2);
      cloudGroup.add(puff);
    }
    root.add(cloudGroup);
    this.objects.cloudGroup = cloudGroup;

    // 6. Bug'lanish zarrachalari (Okeandan osmonga ko'tariluvchi)
    const evapCount = 120;
    const evapGeo = new THREE.BufferGeometry();
    const evapPos = new Float32Array(evapCount * 3);
    for (let i = 0; i < evapCount; i++) {
      evapPos[i * 3] = -12 + Math.random() * 8;
      evapPos[i * 3 + 1] = 1.5 + Math.random() * 9;
      evapPos[i * 3 + 2] = -6 + Math.random() * 12;
    }
    evapGeo.setAttribute('position', new THREE.BufferAttribute(evapPos, 3));
    const evapMat = new THREE.PointsMaterial({ color: 0x93c5fd, size: 0.35, transparent: true, opacity: 0.7 });
    const evapPoints = new THREE.Points(evapGeo, evapMat);
    root.add(evapPoints);
    this.objects.evapPoints = evapPoints;

    // 7. Yomg'ir zarrachalari (Bulutdan tog'ga yog'uvchi)
    const rainCount = 180;
    const rainGeo = new THREE.BufferGeometry();
    const rainPos = new Float32Array(rainCount * 3);
    for (let i = 0; i < rainCount; i++) {
      rainPos[i * 3] = 4 + Math.random() * 8;
      rainPos[i * 3 + 1] = 2 + Math.random() * 9;
      rainPos[i * 3 + 2] = -4 + Math.random() * 8;
    }
    rainGeo.setAttribute('position', new THREE.BufferAttribute(rainPos, 3));
    const rainMat = new THREE.PointsMaterial({ color: 0x60a5fa, size: 0.3, transparent: true, opacity: 0.8 });
    const rainPoints = new THREE.Points(rainGeo, rainMat);
    root.add(rainPoints);
    this.objects.rainPoints = rainPoints;
  }

  // ============================================================
  // 4. O'ZBEKISTON RELYEFI VA 3D LANDSHAFT (UZBEKISTAN RELIEF)
  // ============================================================
  setupUzbekistanRelief() {
    this.cameraRadius = 38;
    this.cameraTarget.set(0, 2, 0);
    this.theta = 0.9;
    this.phi = 1.05;
    this.updateCameraPosition();

    const root = new THREE.Group();
    this.scene.add(root);
    this.objects.root = root;

    // 3D Relyef to'ri (Plane grid with elevation)
    const width = 36;
    const depth = 24;
    const segX = 48;
    const segY = 36;
    const terrainGeo = new THREE.PlaneGeometry(width, depth, segX, segY);
    terrainGeo.rotateX(-Math.PI / 2);

    const pos = terrainGeo.attributes.position;
    // O'zbekiston relyefi: Sharq (o'ng) tomonda baland tog'lar, G'arb (chap) tomonda Qizilqum va tekislik, shimoli-g'arbda Orol
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);

      let height = 0;

      // Sharqiy tog'lar (Tyanshan, Pomir-Oloy, Chatqol, Farg'ona tizmasi)
      if (x > 4) {
        const factor = (x - 4) / 14;
        height = Math.pow(factor, 1.8) * 7.5 + Math.sin(z * 0.8) * 1.5;
        if (x > 12) height += Math.cos(x * 1.2) * 1.8;
      } else if (x < -6 && z < -2) {
        // Orol dengizi havzasi (Botiq joy)
        height = -0.8 + Math.sin(x * 0.5) * 0.3;
      } else {
        // Markaziy Qizilqum cho'li va pasttekisliklar
        height = Math.sin(x * 0.4) * Math.cos(z * 0.4) * 0.6 + 0.3;
      }

      pos.setY(i, Math.max(-1.0, height));
    }
    terrainGeo.computeVertexNormals();

    const terrainMat = new THREE.MeshStandardMaterial({
      color: 0xd97706, // Cho'l-qum rang
      roughness: 0.9,
      metalness: 0.1,
      flatShading: true
    });
    const terrain = new THREE.Mesh(terrainGeo, terrainMat);
    root.add(terrain);
    this.objects.terrain = terrain;

    // Amudaryo va Sirdaryo daryo arteriyalari (3D Tubes)
    const riverPointsAmu = [
      new THREE.Vector3(14, 3.5, 6),
      new THREE.Vector3(8, 2.0, 4),
      new THREE.Vector3(2, 0.8, 2),
      new THREE.Vector3(-4, 0.3, -2),
      new THREE.Vector3(-10, -0.2, -6)
    ];
    const amuCurve = new THREE.CatmullRomCurve3(riverPointsAmu);
    const amuGeo = new THREE.TubeGeometry(amuCurve, 32, 0.4, 8, false);
    const riverMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.2 });
    const amuMesh = new THREE.Mesh(amuGeo, riverMat);
    root.add(amuMesh);

    // Orol dengizi suvi
    const aralGeo = new THREE.CylinderGeometry(4.0, 3.5, 0.4, 24);
    const aralMesh = new THREE.Mesh(aralGeo, riverMat);
    aralMesh.position.set(-11, -0.4, -6);
    root.add(aralMesh);

    // Qorli cho'qqilar (Hazrat Sulton / 4643 m ramzi)
    const peakGeo = new THREE.ConeGeometry(2.0, 4.0, 6);
    const peakMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.2 });
    const peak = new THREE.Mesh(peakGeo, peakMat);
    peak.position.set(15, 8.5, 1);
    root.add(peak);

    // Geografik belgilar (3D Pin markers)
    this.createPin(root, 15, 10.5, 1, 0xef4444, 'Hazrat Sulton (4643 m)');
    this.createPin(root, -11, 1.0, -6, 0x38bdf8, 'Orol Dengizi');
    this.createPin(root, -1, 1.5, -1, 0xf59e0b, 'Qizilqum Cho\'li');
    this.createPin(root, 11, 4.0, -4, 0x10b981, 'Farg\'ona Vodiysi');
  }

  createPin(parent, x, y, z, color, label) {
    const pinGroup = new THREE.Group();
    pinGroup.position.set(x, y, z);

    const headGeo = new THREE.SphereGeometry(0.5, 16, 16);
    const headMat = new THREE.MeshStandardMaterial({ color: color, emissive: color, emissiveIntensity: 0.4 });
    const head = new THREE.Mesh(headGeo, headMat);
    pinGroup.add(head);

    const legGeo = new THREE.CylinderGeometry(0.08, 0.08, 1.2, 8);
    const legMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const leg = new THREE.Mesh(legGeo, legMat);
    leg.position.y = -0.6;
    pinGroup.add(leg);

    parent.add(pinGroup);
  }

  // ============================================================
  // ANIMATSIYA TSIKLI (ANIMATION LOOP)
  // ============================================================
  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());
    if (!this.isRunning) return;

    const delta = this.clock.getDelta();
    const time = this.clock.getElapsedTime();

    // 1. Earth Layers animatsiyasi (Sekin aylanish)
    if (this.currentExp === 'earth-layers' && this.objects.root) {
      this.objects.root.rotation.y += 0.003 * this.params.earthRotationSpeed;
    }

    // 2. Volcano animatsiyasi (Zarrachalar otilishi)
    if (this.currentExp === 'volcano' && this.objects.volcanoParticles) {
      const pos = this.objects.pPositions;
      const vel = this.objects.pVelocities;
      const count = vel.length;

      for (let i = 0; i < count; i++) {
        pos[i * 3] += vel[i].vx * this.params.eruptionSpeed;
        pos[i * 3 + 1] += vel[i].vy * this.params.eruptionSpeed;
        pos[i * 3 + 2] += vel[i].vz * this.params.eruptionSpeed;
        vel[i].vy -= 0.003; // Gravitatsiya

        if (pos[i * 3 + 1] < 3.0 || pos[i * 3 + 1] > 18.0) {
          pos[i * 3] = (Math.random() - 0.5) * 0.8;
          pos[i * 3 + 1] = 7.5;
          pos[i * 3 + 2] = (Math.random() - 0.5) * 0.8;
          vel[i].vy = 0.12 + Math.random() * 0.18;
        }
      }
      this.objects.volcanoParticles.geometry.attributes.position.needsUpdate = true;
    }

    // 3. Water Cycle animatsiyasi (Bug'lanish va yomg'ir)
    if (this.currentExp === 'water-cycle') {
      if (this.objects.evapPoints) {
        const ePos = this.objects.evapPoints.geometry.attributes.position.array;
        for (let i = 1; i < ePos.length; i += 3) {
          ePos[i] += 0.04 * this.params.cycleSpeed;
          if (ePos[i] > 12.0) ePos[i] = 1.5;
        }
        this.objects.evapPoints.geometry.attributes.position.needsUpdate = true;
      }

      if (this.objects.rainPoints) {
        const rPos = this.objects.rainPoints.geometry.attributes.position.array;
        for (let i = 1; i < rPos.length; i += 3) {
          rPos[i] -= 0.08 * this.params.rainIntensity;
          if (rPos[i] < 2.0) rPos[i] = 11.5;
        }
        this.objects.rainPoints.geometry.attributes.position.needsUpdate = true;
      }

      if (this.objects.cloudGroup) {
        this.objects.cloudGroup.position.x = Math.sin(time * 0.4) * 0.6;
      }
    }

    // 4. Uzbekistan Relief (Yengil tebranish yoki kamera aylanishi)
    if (this.currentExp === 'uzbekistan-relief' && !this.isDragging) {
      this.theta += 0.001;
      this.updateCameraPosition();
    }

    this.renderer.render(this.scene, this.camera);
  }

  // Interaktiv boshqaruv metodlari
  setLayerExplosion(val) {
    this.params.layerExplosion = parseFloat(val);
    if (this.objects.crust && this.objects.mantle) {
      const exp = this.params.layerExplosion;
      this.objects.crust.position.set(-exp * 4, exp * 2, exp * 4);
      this.objects.mantle.position.set(-exp * 2, exp * 1, exp * 2);
    }
  }

  setEruptionSpeed(val) {
    this.params.eruptionSpeed = parseFloat(val);
  }

  setCycleSpeed(val) {
    this.params.cycleSpeed = parseFloat(val);
  }

  triggerQuickAction() {
    if (this.currentExp === 'earth-layers') {
      const nextExp = (this.params.layerExplosion > 0.4) ? 0.0 : 0.8;
      this.setLayerExplosion(nextExp);
      const slider = document.getElementById('slider-geo-layers');
      if (slider) slider.value = nextExp;
      const valEl = document.getElementById('slider-geo-layers-val');
      if (valEl) valEl.textContent = (nextExp * 100).toFixed(0) + '%';
    } else if (this.currentExp === 'volcano') {
      this.params.eruptionSpeed = (this.params.eruptionSpeed > 1.8) ? 1.0 : 2.5;
      const slider = document.getElementById('slider-geo-eruption');
      if (slider) slider.value = this.params.eruptionSpeed;
      const valEl = document.getElementById('slider-geo-eruption-val');
      if (valEl) valEl.textContent = this.params.eruptionSpeed + 'x';
    } else if (this.currentExp === 'water-cycle') {
      this.params.cycleSpeed = (this.params.cycleSpeed > 1.8) ? 1.0 : 2.5;
      const slider = document.getElementById('slider-geo-cycle');
      if (slider) slider.value = this.params.cycleSpeed;
      const valEl = document.getElementById('slider-geo-cycle-val');
      if (valEl) valEl.textContent = this.params.cycleSpeed + 'x';
    } else if (this.currentExp === 'uzbekistan-relief') {
      this.theta += 1.2;
      this.updateCameraPosition();
    }
    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  }

  resetExperiment() {
    this.params.layerExplosion = 0.0;
    this.params.eruptionSpeed = 1.0;
    this.params.cycleSpeed = 1.0;
    this.setLayerExplosion(0.0);
    this.theta = 0.8;
    this.phi = 1.1;
    this.cameraRadius = (this.currentExp === 'uzbekistan-relief') ? 38 : (this.currentExp === 'volcano' ? 36 : 30);
    this.updateCameraPosition();

    const s1 = document.getElementById('slider-geo-layers');
    if (s1) s1.value = 0;
    const v1 = document.getElementById('slider-geo-layers-val');
    if (v1) v1.textContent = '0%';

    const s2 = document.getElementById('slider-geo-eruption');
    if (s2) s2.value = 1.0;
    const v2 = document.getElementById('slider-geo-eruption-val');
    if (v2) v2.textContent = '1.0x';

    const s3 = document.getElementById('slider-geo-cycle');
    if (s3) s3.value = 1.0;
    const v3 = document.getElementById('slider-geo-cycle-val');
    if (v3) v3.textContent = '1.0x';
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

// Global yordamchi funksiyalar
window.geographyLabInstance = null;

window.initGeographyLab = function () {
  if (!window.geographyLabInstance) {
    window.geographyLabInstance = new GeographyLab('geography-canvas-container');
    window.geographyLabInstance.init();
  }
};

window.selectGeographyExperiment = function (name) {
  if (window.geographyLabInstance) {
    window.geographyLabInstance.loadExperiment(name);

    // Sidebar tugmalarini yangilash
    const items = document.querySelectorAll('#geography-experiment-list .experiment-item');
    items.forEach(el => {
      el.classList.toggle('active', el.getAttribute('data-experiment') === name);
    });

    // O'ng paneldagi slayderlarni almashtirish
    const slEarth = document.getElementById('geo-sliders-earth-layers');
    const slVolc = document.getElementById('geo-sliders-volcano');
    const slWater = document.getElementById('geo-sliders-water-cycle');
    if (slEarth) slEarth.style.display = (name === 'earth-layers') ? 'block' : 'none';
    if (slVolc) slVolc.style.display = (name === 'volcano') ? 'block' : 'none';
    if (slWater) slWater.style.display = (name === 'water-cycle') ? 'block' : 'none';

    // Tezkor harakat tugmasini yangilash
    const actBtn = document.getElementById('geo-action-btn');
    if (actBtn) {
      if (name === 'earth-layers') actBtn.innerHTML = '<i class=\"fas fa-expand-arrows-alt\"></i> Qatlamlarni ajratish';
      else if (name === 'volcano') actBtn.innerHTML = '<i class=\"fas fa-fire\"></i> Katta otilish';
      else if (name === 'water-cycle') actBtn.innerHTML = '<i class=\"fas fa-cloud-showers-heavy\"></i> Kuchli yog\'in';
      else if (name === 'uzbekistan-relief') actBtn.innerHTML = '<i class=\"fas fa-compass\"></i> Relyef sayohati';
    }
  }
};

window.startGeographyExperiment = function () {
  if (window.geographyLabInstance) {
    window.geographyLabInstance.isRunning = true;
    if (typeof window.updateLabExplanation === 'function') {
      window.updateLabExplanation('geography', window.geographyLabInstance.currentExp, true);
    }
    const startBtn = document.getElementById('geo-start-btn');
    const pauseBtn = document.getElementById('geo-pause-btn');
    if (startBtn) startBtn.disabled = true;
    if (pauseBtn) pauseBtn.disabled = false;
    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  }
};

window.pauseGeographyExperiment = function () {
  if (window.geographyLabInstance) {
    window.geographyLabInstance.isRunning = false;
    if (typeof window.updateLabExplanation === 'function') {
      window.updateLabExplanation('geography', window.geographyLabInstance.currentExp, false);
    }
    const startBtn = document.getElementById('geo-start-btn');
    const pauseBtn = document.getElementById('geo-pause-btn');
    if (startBtn) startBtn.disabled = false;
    if (pauseBtn) pauseBtn.disabled = true;
    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  }
};

window.resetGeographyExperiment = function () {
  if (window.geographyLabInstance) {
    window.geographyLabInstance.resetExperiment();
    window.geographyLabInstance.isRunning = true;
    if (typeof window.updateLabExplanation === 'function') {
      window.updateLabExplanation('geography', window.geographyLabInstance.currentExp, true);
    }
    const startBtn = document.getElementById('geo-start-btn');
    const pauseBtn = document.getElementById('geo-pause-btn');
    if (startBtn) startBtn.disabled = true;
    if (pauseBtn) pauseBtn.disabled = false;
    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  }
};
