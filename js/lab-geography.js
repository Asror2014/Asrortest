/**
 * 30-maktabtest - 3D Interaktiv Geografiya va Yer Tuzilishi Laboratoriyasi
 * Three.js asosida ishlaydi (100% oflayn, qo'shimcha kutubxonasiz)
 * 
 * Tajribalar:
 *   1. earth-layers: Yerning Ichki Qatlamlari (Yer qobig'i, Mantiya, Tashqi yadro, Ichki yadro)
 *   2. volcano: Vulqon Otilishi va Litosfera Plitalari (Magma kamerasi, lava, tutun, tektonika)
 *   3. water-cycle: Suvning Tabiatda Aylanishi (Bug'lanish, bulutlar, yog'in, daryo oqimi)
 *   4. uzbekistan-relief: O'zbekiston Relyefi va 3D Landshaft (Tog'lar, cho'llar, Orol dengizi)
 *   5. world-globe: 3D Interaktiv Butun Dunyo Globusi (Qit'alar, Okeanlar, Poytaxtlar, Grinvich)
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
      waterLevel: 0.5,

      // Dunyo globusi va Quyosh tizimi
      globeRotationSpeed: 1.0,
      showClouds: true,
      showGrid: true,
      showPins: true,
      showSolarPlanets: true,
      currentFocusBody: 'earth'
    };

    // Raycasting va interaktiv elementlar
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.interactivePins = [];
    this.interactiveCelestialBodies = [];
    this.planetsList = [];
    this.isFocusingUzbekistan = false;
    this.isCameraAnimating = false;

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
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 2500);
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
    let clickStartX = 0;
    let clickStartY = 0;

    el.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.previousMouse = { x: e.clientX, y: e.clientY };
      clickStartX = e.clientX;
      clickStartY = e.clientY;
    });

    window.addEventListener('mouseup', (e) => {
      if (this.isDragging) {
        this.isDragging = false;
        const dist = Math.hypot(e.clientX - clickStartX, e.clientY - clickStartY);
        if (dist < 6) {
          this.handleCanvasClick(e);
        }
      }
    });

    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (this.currentExp === 'world-globe') {
        this.raycaster.setFromCamera(this.mouse, this.camera);
        const pinHits = (this.interactivePins && this.interactivePins.length > 0) ? this.raycaster.intersectObjects(this.interactivePins, false) : [];
        const bodyHits = (this.interactiveCelestialBodies && this.interactiveCelestialBodies.length > 0) ? this.raycaster.intersectObjects(this.interactiveCelestialBodies, false) : [];
        el.style.cursor = (pinHits.length > 0 || bodyHits.length > 0) ? 'pointer' : (this.isDragging ? 'grabbing' : 'grab');
      }

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
      const zoomFactor = (this.currentExp === 'world-globe') ? 0.09 : 0.025;
      const maxDist = (this.currentExp === 'world-globe') ? 600 : 90;
      this.cameraRadius += e.deltaY * zoomFactor;
      this.cameraRadius = Math.max(8, Math.min(maxDist, this.cameraRadius));
      if (this.currentExp === 'world-globe') {
        this.updateCameraForZoom();
      }
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
        const maxDist = (this.currentExp === 'world-globe') ? 600 : 90;
        const factor = (touchStartDist - dist) * ((this.currentExp === 'world-globe') ? 0.18 : 0.05);
        this.cameraRadius = Math.max(8, Math.min(maxDist, this.cameraRadius + factor));
        if (this.currentExp === 'world-globe') {
          this.updateCameraForZoom();
        }
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
      case 'world-globe':
        this.setupWorldGlobe();
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
    this.addOrbitRing(root, 3.2, 0xfef08a, 'Ichki Yadro (6000�C)');
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
  // 5. BUTUN DUNYO GLOBUSI VA QUYOSH TIZIMI (WORLD GLOBE & SOLAR SYSTEM)
  // ============================================================
  setupWorldGlobe() {
    this.currentExp = 'world-globe';
    this.currentFocusBody = 'earth';
    this.interactivePins = [];
    this.interactiveCelestialBodies = [];
    this.planetsList = [];

    const root = new THREE.Group();
    this.scene.add(root);
    this.objects.root = root;

    // Chuqur koinot yulduzlari (800 ta yulduz)
    const starGeo = new THREE.BufferGeometry();
    const starCount = 900;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 350 + Math.random() * 400;
      starPos[i] = r * Math.sin(phi) * Math.cos(theta);
      starPos[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPos[i + 2] = r * Math.cos(phi);
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xe0e7ff, size: 1.2, transparent: true, opacity: 0.85 });
    root.add(new THREE.Points(starGeo, starMat));

    // Quyosh tizimi guruhi (Markazda (0,0,0) - Quyosh)
    const solarGroup = new THREE.Group();
    root.add(solarGroup);
    this.objects.solarGroup = solarGroup;

    // 1. QUYOSH (THE SUN)
    const sunGeo = new THREE.SphereGeometry(15, 32, 24);
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xffdd33 });
    const sunMesh = new THREE.Mesh(sunGeo, sunMat);
    sunMesh.userData = {
      id: 'sun',
      name: "Quyosh (Sun)",
      type: "Markaziy Yulduz",
      diam: "1,392,700 km",
      sunDist: "0 km (Markaz)",
      orbitTime: "230 mln yil (galaktik)",
      flag: "☀️",
      pop: "1.989 × 10³⁰ kg",
      tz: "Markaziy Yulduz",
      lat: "Spektral sinf: G2V",
      lon: "Harorat: 5,500°C",
      desc: "Quyosh tizimining markazidagi sariq mitti yulduz. Quyosh tizimi umumiy massasining 99.86% qismini o'zida jamlagan bo'lib, barcha sayyoralar uning atrofida aylanadi."
    };
    solarGroup.add(sunMesh);
    this.objects.sunMesh = sunMesh;
    this.interactiveCelestialBodies.push(sunMesh);

    // Quyosh nurlanishi (Corona toji)
    const coronaGeo1 = new THREE.SphereGeometry(18.5, 24, 16);
    const coronaMat1 = new THREE.MeshBasicMaterial({
      color: 0xffa000,
      transparent: true,
      opacity: 0.38,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide
    });
    solarGroup.add(new THREE.Mesh(coronaGeo1, coronaMat1));

    const coronaGeo2 = new THREE.SphereGeometry(25, 24, 16);
    const coronaMat2 = new THREE.MeshBasicMaterial({
      color: 0xff6600,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide
    });
    solarGroup.add(new THREE.Mesh(coronaGeo2, coronaMat2));

    // Quyosh yorug'lik manbai (PointLight butun tizimni yoritadi)
    const sunLight = new THREE.PointLight(0xfffaed, 2.8, 2000, 0.4);
    solarGroup.add(sunLight);

    // 2. SAYYORALAR RO'YXATI VA ORBITALARI
    this.planetsList = [
      {
        id: 'mercury',
        name: 'Merkuriy',
        dist: 48,
        radius: 2.2,
        color: 0xa8a29e,
        speed: 3.5,
        flag: '☿',
        diam: '4,879 km',
        sunDist: '57.9 mln km (0.39 AU)',
        orbitTime: '88 kun',
        tz: '1 sutka = 59 Yer kuni',
        pop: 'Qattiq toshli sirt',
        desc: "Quyoshga eng yaqin va eng kichik sayyora. Zich atmosferasi yo'q, kunduzi +430°C, kechasi -180°C ga tushadi."
      },
      {
        id: 'venus',
        name: 'Venera',
        dist: 78,
        radius: 4.0,
        color: 0xf59e0b,
        speed: 1.8,
        flag: '♀',
        diam: '12,104 km',
        sunDist: '108.2 mln km (0.72 AU)',
        orbitTime: '225 kun',
        tz: '1 sutka = 243 Yer kuni',
        pop: 'CO₂ zich atmosfera',
        desc: "Quyosh tizimidagi eng issiq sayyora (~465°C). Zich karbonat angidrid atmosferasi tufayli kuchli issiqxona effekti mavjud."
      },
      {
        id: 'earth',
        name: 'Yer (Earth)',
        dist: 120,
        radius: 10.0,
        speed: 1.0,
        flag: '🌍',
        diam: '12,742 km',
        sunDist: '149.6 mln km (1.0 AU)',
        orbitTime: '365.25 kun',
        tz: '1 sutka = 24 soat',
        pop: '8.1 milliard inson',
        desc: "Quyosh tizimida hayot mavjud bo'lgan yagona ma'lum sayyora. Sirtining 71% qismini Jahon okeani, 29% qismini quruqlik egallaydi."
      },
      {
        id: 'mars',
        name: 'Mars',
        dist: 170,
        radius: 3.2,
        color: 0xef4444,
        speed: 0.65,
        flag: '♂',
        diam: '6,779 km',
        sunDist: '227.9 mln km (1.52 AU)',
        orbitTime: '687 kun',
        tz: '1 sutka = 24.6 soat',
        pop: 'Qutb muzliklari mavjud',
        desc: "Qizil sayyora. Sirtidagi temir oksidi unga qizil tus beradi. Quyosh tizimidagi eng baland vulqon - Olimp tog'i (22 km) shu yerda."
      },
      {
        id: 'jupiter',
        name: 'Yupiter',
        dist: 265,
        radius: 8.5,
        color: 0xd97706,
        speed: 0.25,
        flag: '♃',
        diam: '139,820 km',
        sunDist: '778.5 mln km (5.20 AU)',
        orbitTime: '11.86 yil',
        tz: '1 sutka = 9.9 soat',
        pop: '95 ta yo\'ldoshi bor',
        desc: "Quyosh tizimidagi eng ulkan gigant sayyora. Unda asrlar davomida davom etayotgan Katta qizil dog' ulkan atmosfera girdobi mavjud."
      },
      {
        id: 'saturn',
        name: 'Saturn',
        dist: 345,
        radius: 7.2,
        color: 0xfef08a,
        speed: 0.14,
        flag: '🪐',
        hasRings: true,
        diam: '116,460 km',
        sunDist: '1.43 mlrd km (9.58 AU)',
        orbitTime: '29.5 yil',
        tz: '1 sutka = 10.7 soat',
        pop: '146 ta yo\'ldoshi bor',
        desc: "Muz va tog' jinsi parchalaridan iborat muazzam halqalari bilan mashhur gaz giganti. Zichligi suv zichligidan ham past yagona sayyora."
      },
      {
        id: 'uranus',
        name: 'Uran',
        dist: 415,
        radius: 5.2,
        color: 0x67e8f9,
        speed: 0.07,
        flag: '♅',
        diam: '50,724 km',
        sunDist: '2.87 mlrd km (19.2 AU)',
        orbitTime: '84 yil',
        tz: '1 sutka = 17.2 soat',
        pop: '28 ta yo\'ldoshi bor',
        desc: "Muzli gaz giganti. O'z o'qi atrofida deyarli 'yonboshlab' aylanadi (og'ish burchagi 98°). Metan gazi unga och feruza rang beradi."
      },
      {
        id: 'neptune',
        name: 'Neptun',
        dist: 480,
        radius: 5.0,
        color: 0x2563eb,
        speed: 0.04,
        flag: '♆',
        diam: '49,244 km',
        sunDist: '4.50 mlrd km (30.1 AU)',
        orbitTime: '165 yil',
        tz: '1 sutka = 16.1 soat',
        pop: '16 ta yo\'ldoshi bor',
        desc: "Quyoshdan eng uzoqda joylashgan muzli gigant. Quyosh tizimidagi eng shiddatli shamollar (2100 km/soatgacha) shu sayyorada esadi."
      }
    ];

    // Har bir sayyora uchun orbita chiziqlari va sferalari
    this.planetsList.forEach(p => {
      // Orbita chizig'i
      const orbPts = [];
      for (let i = 0; i <= 96; i++) {
        const a = (i / 96) * Math.PI * 2;
        orbPts.push(new THREE.Vector3(Math.cos(a) * p.dist, 0, Math.sin(a) * p.dist));
      }
      const orbGeo = new THREE.BufferGeometry().setFromPoints(orbPts);
      const orbMat = new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.22 });
      const orbLine = new THREE.LineLoop(orbGeo, orbMat);
      solarGroup.add(orbLine);
      p.orbitLine = orbLine;

      if (p.id === 'earth') {
        // YER UCHUN MAXSUS GURUH VA BIZNING 3D GLOBUS
        const earthOrbitGroup = new THREE.Group();
        earthOrbitGroup.position.set(p.dist, 0, 0);
        solarGroup.add(earthOrbitGroup);
        this.objects.earthOrbitGroup = earthOrbitGroup;

        // Yer shari (23.44 gradus og'ish burchagi bilan)
        const earthGroup = new THREE.Group();
        earthGroup.rotation.z = THREE.MathUtils.degToRad(23.44);
        earthOrbitGroup.add(earthGroup);
        this.objects.earthGroup = earthGroup;

        // Yer shari sferasi va qit'alar teksturasi
        const earthGeo = new THREE.SphereGeometry(10, 64, 48);
        const earthTex = this.createGlobeTexture();
        const earthMat = new THREE.MeshStandardMaterial({
          map: earthTex,
          roughness: 0.65,
          metalness: 0.12
        });
        const earthMesh = new THREE.Mesh(earthGeo, earthMat);
        earthGroup.add(earthMesh);
        this.objects.earthMesh = earthMesh;
        earthMesh.userData = p;
        this.interactiveCelestialBodies.push(earthMesh);

        // Atmosfera jilosi
        const atmoGeo = new THREE.SphereGeometry(10.35, 48, 32);
        const atmoMat = new THREE.MeshLambertMaterial({
          color: 0x38bdf8,
          transparent: true,
          opacity: 0.22,
          blending: THREE.AdditiveBlending,
          side: THREE.BackSide
        });
        const atmoMesh = new THREE.Mesh(atmoGeo, atmoMat);
        earthGroup.add(atmoMesh);
        this.objects.atmoMesh = atmoMesh;

        // Bulutlar qatlami
        const cloudGeo = new THREE.SphereGeometry(10.16, 48, 36);
        const cloudTex = this.createCloudTexture();
        const cloudMat = new THREE.MeshLambertMaterial({
          map: cloudTex,
          transparent: true,
          opacity: 0.42,
          depthWrite: false
        });
        const cloudMesh = new THREE.Mesh(cloudGeo, cloudMat);
        earthGroup.add(cloudMesh);
        this.objects.globeClouds = cloudMesh;
        cloudMesh.visible = this.params.showClouds;

        // Yer o'qi sterjeni
        const axisGeo = new THREE.CylinderGeometry(0.08, 0.08, 25, 16);
        const axisMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.85, roughness: 0.2 });
        earthGroup.add(new THREE.Mesh(axisGeo, axisMat));

        // Ekvator halqasi
        const eqPts = [];
        for (let i = 0; i <= 72; i++) {
          const a = (i / 72) * Math.PI * 2;
          eqPts.push(new THREE.Vector3(Math.cos(a) * 10.05, 0, Math.sin(a) * 10.05));
        }
        const eqGeo = new THREE.BufferGeometry().setFromPoints(eqPts);
        const eqMat = new THREE.LineBasicMaterial({ color: 0xfbbf24, transparent: true, opacity: 0.8 });
        const eqLine = new THREE.LineLoop(eqGeo, eqMat);
        earthGroup.add(eqLine);
        this.objects.globeGrid = eqLine;
        eqLine.visible = this.params.showGrid;

        // OY (MOON) - YERNING TABIIY YO'LDOSHI
        const moonGeo = new THREE.SphereGeometry(2.2, 24, 16);
        const moonMat = new THREE.MeshStandardMaterial({ color: 0xd6d3d1, roughness: 0.85 });
        const moonMesh = new THREE.Mesh(moonGeo, moonMat);
        moonMesh.position.set(22, 0, 0);
        moonMesh.userData = {
          id: 'moon',
          name: "Oy (Moon)",
          type: "Yer yo'ldoshi",
          diam: "3,474 km",
          sunDist: "Yerdan: 384,400 km",
          orbitTime: "27.3 kun",
          flag: "🌙",
          pop: "Atmosferasiz toshli sirt",
          tz: "1 oy sutkasi = 29.5 Yer kuni",
          desc: "Yerning yagona tabiiy yo'ldoshi. Yerdagi dengiz va okeanlardagi to'lqinlanish (qalqish va qaytish) hodisalarining asosiy sababchisidir."
        };
        earthOrbitGroup.add(moonMesh);
        this.objects.moonMesh = moonMesh;
        this.interactiveCelestialBodies.push(moonMesh);

        // Shaharlar pinlari
        this.setupGlobeCityPins(earthMesh);
      } else {
        // BOSHQA SAYYORALAR
        const pivot = new THREE.Group();
        const pGeo = new THREE.SphereGeometry(p.radius, 32, 24);
        const pMat = new THREE.MeshStandardMaterial({
          color: p.color,
          roughness: 0.7,
          metalness: 0.1
        });
        const pMesh = new THREE.Mesh(pGeo, pMat);
        pMesh.position.set(p.dist, 0, 0);
        pMesh.userData = p;
        pivot.add(pMesh);
        solarGroup.add(pivot);
        p.pivot = pivot;
        p.mesh = pMesh;
        this.interactiveCelestialBodies.push(pMesh);

        if (p.hasRings) {
          // Saturn halqalari
          const rGeo = new THREE.RingGeometry(p.radius * 1.35, p.radius * 2.3, 48);
          const rMat = new THREE.MeshStandardMaterial({
            color: 0xe0c48a,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.75,
            roughness: 0.8
          });
          const ringMesh = new THREE.Mesh(rGeo, rMat);
          ringMesh.rotation.x = Math.PI / 2 + 0.35;
          pMesh.add(ringMesh);
        }
      }
    });

    // 3. ASTEROIDLAR HALQASI (Mars va Yupiter o'rtasida)
    const astCount = 750;
    const astGeo = new THREE.BufferGeometry();
    const astPos = new Float32Array(astCount * 3);
    for (let i = 0; i < astCount * 3; i += 3) {
      const a = Math.random() * Math.PI * 2;
      const r = 205 + Math.random() * 28;
      astPos[i] = Math.cos(a) * r;
      astPos[i + 1] = (Math.random() - 0.5) * 8;
      astPos[i + 2] = Math.sin(a) * r;
    }
    astGeo.setAttribute('position', new THREE.BufferAttribute(astPos, 3));
    const astMat = new THREE.PointsMaterial({ color: 0xa8a29e, size: 1.5, sizeAttenuation: false });
    const astBelt = new THREE.Points(astGeo, astMat);
    solarGroup.add(astBelt);
    this.objects.astBelt = astBelt;

    // 4. KOMETA (Elliptik harakatlanuvchi jism)
    const cometMesh = new THREE.Mesh(new THREE.SphereGeometry(1.2, 16, 12), new THREE.MeshBasicMaterial({ color: 0xe0f2fe }));
    solarGroup.add(cometMesh);
    this.objects.cometMesh = cometMesh;

    // Dastlabki kamera holati (Yerga yo'naltirilgan)
    this.cameraRadius = 26;
    if (this.objects.earthOrbitGroup) {
      this.cameraTarget.copy(this.objects.earthOrbitGroup.position);
    }
    this.theta = 1.05;
    this.phi = 1.25;
    this.updateCameraPosition();
    this.updateCameraForZoom();
  }

  // ============================================================
  // ZOOM DARAJASIGA QARAB KAMERANI AVTOMATIK MOSLASHTIRISH
  // ============================================================
  updateCameraForZoom() {
    if (this.currentExp !== 'world-globe' || this.isCameraAnimating) return;

    const r = this.cameraRadius;
    const earthPos = this.objects.earthOrbitGroup ? this.objects.earthOrbitGroup.position : new THREE.Vector3(120, 0, 0);

    // Agar fokus Yerda bo'lsa:
    if (this.currentFocusBody === 'earth') {
      if (r <= 38) {
        this.cameraTarget.copy(earthPos);
        if (this.objects.pinsGroup) this.objects.pinsGroup.visible = this.params.showPins;
      } else if (r >= 150) {
        this.cameraTarget.set(0, 0, 0); // Quyosh tizimi markaziga
        if (this.objects.pinsGroup) this.objects.pinsGroup.visible = false;
      } else {
        const t = (r - 38) / (150 - 38);
        this.cameraTarget.lerpVectors(earthPos, new THREE.Vector3(0, 0, 0), t);
        if (this.objects.pinsGroup) this.objects.pinsGroup.visible = (t < 0.35) && this.params.showPins;
      }
    }

    // Slayder va indikatorlarni yangilash
    const zoomSlider = document.getElementById('slider-geo-zoom');
    const zoomVal = document.getElementById('slider-geo-zoom-val');
    if (zoomSlider && Math.abs(zoomSlider.value - r) > 2) {
      zoomSlider.value = r;
    }
    if (zoomVal) {
      if (r < 50) {
        zoomVal.textContent = "Yer (1x)";
        zoomVal.style.color = "#38bdf8";
      } else if (r < 180) {
        zoomVal.textContent = "Ichki sayyoralar (" + (r / 26).toFixed(1) + "x)";
        zoomVal.style.color = "#fbbf24";
      } else {
        zoomVal.textContent = "Quyosh tizimi (" + (r / 26).toFixed(0) + "x)";
        zoomVal.style.color = "#f59e0b";
      }
    }

    // Toggle tugmasini yangilash
    const toggleBtn = document.getElementById('geo-solar-toggle-btn');
    if (toggleBtn) {
      if (r < 65) {
        toggleBtn.innerHTML = '<i class="fas fa-sun"></i> <span>Quyosh tizimiga uzoqlashish</span>';
        toggleBtn.title = "Butun Quyosh tizimini tomosha qilish uchun uzoqlashish";
      } else {
        toggleBtn.innerHTML = '<i class="fas fa-globe-americas"></i> <span>Yer globusiga qaytish</span>';
        toggleBtn.title = "Yer shari globusi va Toshkent shahriga qaytish";
      }
    }
  }

  setCameraZoomDistance(val) {
    this.cameraRadius = parseFloat(val);
    this.updateCameraForZoom();
    this.updateCameraPosition();
  }

  toggleSolarView() {
    if (this.cameraRadius < 65) {
      // Quyosh tizimiga uzoqlashish
      this.animateCameraTo(420, 0.85, 0.0, new THREE.Vector3(0, 0, 0), () => {
        this.currentFocusBody = 'sun';
        this.updatePillActive('sun');
        if (this.objects.sunMesh) this.showCelestialHud(this.objects.sunMesh.userData);
      });
    } else {
      // Yerga qaytish
      this.focusBody('earth');
    }
  }

  focusBody(bodyId) {
    this.currentFocusBody = bodyId;
    this.updatePillActive(bodyId);

    if (bodyId === 'earth') {
      const earthPos = this.objects.earthOrbitGroup ? this.objects.earthOrbitGroup.position : new THREE.Vector3(120, 0, 0);
      this.animateCameraTo(26, 1.25, 1.05, earthPos, () => {
        const toshkent = {
          name: "Toshkent",
          country: "O'zbekiston",
          continent: "Markaziy Osiyo",
          lat: "41.30° N",
          lon: "69.28° E",
          pop: "3.0 mln",
          tz: "UTC+5",
          flag: "🇺🇿",
          desc: "O'zbekiston Respublikasi poytaxti. Yer globusiga qaytildi. Qit'alar, okeanlar va Toshkent shahrini o'rganishingiz mumkin."
        };
        this.showCityHud(toshkent);
      });
    } else if (bodyId === 'sun') {
      this.animateCameraTo(75, 0.9, 0.0, new THREE.Vector3(0, 0, 0), () => {
        if (this.objects.sunMesh) this.showCelestialHud(this.objects.sunMesh.userData);
      });
    } else if (bodyId === 'moon') {
      if (this.objects.moonMesh) {
        const wPos = new THREE.Vector3();
        this.objects.moonMesh.getWorldPosition(wPos);
        this.animateCameraTo(12, 1.1, 0.0, wPos, () => {
          this.showCelestialHud(this.objects.moonMesh.userData);
        });
      }
    } else {
      const p = this.planetsList.find(x => x.id === bodyId);
      if (p && p.mesh) {
        const wPos = new THREE.Vector3();
        p.mesh.getWorldPosition(wPos);
        const targetRadius = Math.max(16, p.radius * 3.4);
        this.animateCameraTo(targetRadius, 1.0, 0.0, wPos, () => {
          this.showCelestialHud(p);
        });
      }
    }
  }

  animateCameraTo(targetRadius, targetPhi, targetTheta, targetTarget, onDone) {
    this.isCameraAnimating = true;
    const startRadius = this.cameraRadius;
    const startPhi = this.phi;
    const startTheta = this.theta;
    const startTarget = this.cameraTarget.clone();

    const startTime = performance.now();
    const duration = 1000;

    const anim = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const ease = 0.5 - Math.cos(progress * Math.PI) / 2;

      this.cameraRadius = startRadius + (targetRadius - startRadius) * ease;
      this.phi = startPhi + (targetPhi - startPhi) * ease;
      this.theta = startTheta + (targetTheta - startTheta) * ease;
      this.cameraTarget.lerpVectors(startTarget, targetTarget, ease);

      this.updateCameraPosition();

      if (progress < 1) {
        requestAnimationFrame(anim);
      } else {
        this.isCameraAnimating = false;
        this.updateCameraForZoom();
        if (onDone) onDone();
      }
    };
    requestAnimationFrame(anim);
  }

  updatePillActive(bodyId) {
    document.querySelectorAll('.solar-pill').forEach(btn => {
      btn.classList.toggle('active', btn.id === ('spill-' + bodyId));
    });
  }

  showCelestialHud(body) {
    const hud = document.getElementById('geo-globe-hud');
    if (!hud) return;
    const flagEl = document.getElementById('globe-hud-flag');
    const titleEl = document.getElementById('globe-hud-title');
    const subEl = document.getElementById('globe-hud-subtitle');
    const descEl = document.getElementById('globe-hud-desc');
    const popEl = document.getElementById('globe-hud-pop');
    const tzEl = document.getElementById('globe-hud-tz');
    const latEl = document.getElementById('globe-hud-lat');
    const lonEl = document.getElementById('globe-hud-lon');

    if (flagEl) flagEl.textContent = body.flag || '🪐';
    if (titleEl) titleEl.textContent = `${body.name}`;
    if (subEl) subEl.textContent = `Quyosh tizimi | ${body.sunDist || ''}`;
    if (descEl) descEl.textContent = body.desc;
    if (popEl) popEl.textContent = body.diam || body.pop;
    if (tzEl) tzEl.textContent = body.orbitTime || body.tz;
    if (latEl) latEl.textContent = body.lat || body.diam;
    if (lonEl) lonEl.textContent = body.lon || body.sunDist;

    hud.style.display = 'block';
    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  }

  toggleSolarPlanets(enabled) {
    this.params.showSolarPlanets = !!enabled;
    if (this.planetsList) {
      this.planetsList.forEach(p => {
        if (p.orbitLine) p.orbitLine.visible = this.params.showSolarPlanets;
        if (p.pivot) p.pivot.visible = this.params.showSolarPlanets;
      });
    }
    if (this.objects.astBelt) this.objects.astBelt.visible = this.params.showSolarPlanets;
    if (this.objects.cometMesh) this.objects.cometMesh.visible = this.params.showSolarPlanets;
  }

  latLonToVector3(lat, lon, radius = 10.04) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = (radius * Math.sin(phi) * Math.sin(theta));
    const y = (radius * Math.cos(phi));
    return new THREE.Vector3(x, y, z);
  }

  setupGlobeCityPins(parent) {
    const CITIES = [
      {
        name: "Toshkent",
        country: "O'zbekiston",
        continent: "Markaziy Osiyo",
        lat: "41.30° N",
        lon: "69.28° E",
        rawLat: 41.30,
        rawLon: 69.28,
        pop: "3.0 mln",
        tz: "UTC+5 (Toshkent)",
        flag: "🇺🇿",
        desc: "O'zbekiston Respublikasi poytaxti. Markaziy Osiyodagi eng yirik megapolis, qadimiy Shosh, Buyuk Ipak yo'li chorrahasi va mintaqaning ulkan ma'rifiy-madaniy markazi."
      },
      {
        name: "Samarqand",
        country: "O'zbekiston",
        continent: "Markaziy Osiyo",
        lat: "39.65° N",
        lon: "66.97° E",
        rawLat: 39.65,
        rawLon: 66.97,
        pop: "570 ming",
        tz: "UTC+5",
        flag: "🇺🇿",
        desc: "Buyuk Ipak yo'lining durdonasi, Amir Temur saltanati poytaxti. Registon maydoni, Shohi Zinda va Bibixonim kabi 2750 yillik jahon madaniy merosi obidalari joylashgan."
      },
      {
        name: "Pekin (Beijing)",
        country: "Xitoy",
        continent: "Sharqiy Osiyo",
        lat: "39.90° N",
        lon: "116.40° E",
        rawLat: 39.90,
        rawLon: 116.40,
        pop: "21.8 mln",
        tz: "UTC+8",
        flag: "🇨🇳",
        desc: "Xitoy Xalq Respublikasi poytaxti. Taqiqlangan shahar va Buyuk Xitoy devoriga tutash 3000 yillik boy tarixga ega qadimiy poytaxt."
      },
      {
        name: "Tokio",
        country: "Yaponiya",
        continent: "Sharqiy Osiyo",
        lat: "35.68° N",
        lon: "139.76° E",
        rawLat: 35.68,
        rawLon: 139.76,
        pop: "37.4 mln",
        tz: "UTC+9",
        flag: "🇯🇵",
        desc: "Dunyodagi aholisi eng zich va eng yirik shahar aglomeratsiyasi. Ilg'or robototexnika, innovatsiyalar va zamonaviy iqtisodiyot markazi."
      },
      {
        name: "London",
        country: "Buyuk Britaniya",
        continent: "G'arbiy Yevropa",
        lat: "51.51° N",
        lon: "-0.13° W",
        rawLat: 51.51,
        rawLon: -0.13,
        pop: "9.0 mln",
        tz: "UTC+0 (GMT)",
        flag: "🇬🇧",
        desc: "Buyuk Britaniya poytaxti. Grinvich qirollik rasadxonasi (bosh nol meridian 0°) va Temza daryosi bo'yidagi qadimiy megapolis."
      },
      {
        name: "Parij",
        country: "Fransiya",
        continent: "G'arbiy Yevropa",
        lat: "48.86° N",
        lon: "2.35° E",
        rawLat: 48.86,
        rawLon: 2.35,
        pop: "2.1 mln (hudud 11 mln)",
        tz: "UTC+1",
        flag: "🇫🇷",
        desc: "Fransiya poytaxti, Sena daryosi bo'yidagi jahon san'ati va madaniyati markazi. Eyfel minorasi va Luvr muzeyi bilan mashhur."
      },
      {
        name: "Nyu-York",
        country: "AQSH",
        continent: "Shimoliy Amerika",
        lat: "40.71° N",
        lon: "-74.01° W",
        rawLat: 40.71,
        rawLon: -74.01,
        pop: "8.8 mln",
        tz: "UTC-5",
        flag: "🇺🇸",
        desc: "Birlashgan Millatlar Tashkiloti (BMT) Bosh qarorgohi, Manxetten oroli va dunyo moliya markazi Uoll-Strit joylashgan shahar."
      },
      {
        name: "Vashington (D.C.)",
        country: "AQSH",
        continent: "Shimoliy Amerika",
        lat: "38.90° N",
        lon: "-77.03° W",
        rawLat: 38.90,
        rawLon: -77.03,
        pop: "710 ming",
        tz: "UTC-5",
        flag: "🇺🇸",
        desc: "Amerika Qo'shma Shtatlari federal poytaxti. Oq Uy, Kapitoliy binosi va dunyoning eng yirik ilmiy kutubxonasi - Kongress kutubxonasi joylashgan."
      },
      {
        name: "Qohira",
        country: "Misr",
        continent: "Shimoliy Afrika",
        lat: "30.04° N",
        lon: "31.23° E",
        rawLat: 30.04,
        rawLon: 31.23,
        pop: "10.0 mln",
        tz: "UTC+2",
        flag: "🇪🇬",
        desc: "Afrika qit'asining eng yirik shahri. Nil daryosi bo'yida, Giza ehromlari va qadimiy fir'avnlar sivilizatsiyasi beshigi."
      },
      {
        name: "Rio-de-Janeyro",
        country: "Braziliya",
        continent: "Janubiy Amerika",
        lat: "-22.91° S",
        lon: "-43.17° W",
        rawLat: -22.91,
        rawLon: -43.17,
        pop: "6.7 mln",
        tz: "UTC-3",
        flag: "🇧🇷",
        desc: "Janubiy Amerikadagi go'zal okean sohili megapolisi. Dunyoga mashhur Iso Masih (Korkovado) ulkan haykali va karnavallar shahri."
      },
      {
        name: "Sidney",
        country: "Avstraliya",
        continent: "Avstraliya va Okeaniya",
        lat: "-33.87° S",
        lon: "151.21° E",
        rawLat: -33.87,
        rawLon: 151.21,
        pop: "5.3 mln",
        tz: "UTC+10",
        flag: "🇦🇺",
        desc: "Avstraliyaning eng yirik iqtisodiy va madaniy megapolisi. Mashhur Sidney Opera teatri va Tinch okeani porti."
      },
      {
        name: "Makka",
        country: "Saudiya Arabistoni",
        continent: "Yaqin Sharq",
        lat: "21.39° N",
        lon: "39.86° E",
        rawLat: 21.39,
        rawLon: 39.86,
        pop: "2.0 mln",
        tz: "UTC+3",
        flag: "🇸🇦",
        desc: "Islom olamining eng muqaddas shahri. Masjidul Harom va Ka'batulloh joylashgan butun dunyo ziyorat markazi."
      },
      {
        name: "Moskva",
        country: "Rossiya",
        continent: "Sharqiy Yevropa",
        lat: "55.75° N",
        lon: "37.62° E",
        rawLat: 55.75,
        rawLon: 37.62,
        pop: "13.1 mln",
        tz: "UTC+3",
        flag: "🇷🇺",
        desc: "Rossiya poytaxti, Yevropadagi aholisi eng ko'p megapolis, Kreml va Qizil maydon ansambli joylashgan."
      }
    ];

    const pinsGroup = new THREE.Group();
    this.interactivePins = [];

    CITIES.forEach((city) => {
      const isUzbekistan = (city.country === "O'zbekiston");
      const pinGrp = new THREE.Group();
      const pos = this.latLonToVector3(city.rawLat, city.rawLon, 10.05);
      pinGrp.position.copy(pos);
      pinGrp.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), pos.clone().normalize());

      // Pin qadami (konus)
      const coneGeo = new THREE.ConeGeometry(isUzbekistan ? 0.22 : 0.16, 0.75, 12);
      coneGeo.translate(0, 0.375, 0);
      const coneMat = new THREE.MeshStandardMaterial({
        color: isUzbekistan ? 0xfbbf24 : 0xef4444,
        roughness: 0.3,
        metalness: 0.7,
        emissive: isUzbekistan ? 0xd97706 : 0x991b1b,
        emissiveIntensity: 0.45
      });
      const coneMesh = new THREE.Mesh(coneGeo, coneMat);
      coneMesh.rotation.x = Math.PI;
      pinGrp.add(coneMesh);

      // Pin boshi (sfera)
      const headGeo = new THREE.SphereGeometry(isUzbekistan ? 0.35 : 0.26, 16, 12);
      headGeo.translate(0, 0.85, 0);
      const headMat = new THREE.MeshStandardMaterial({
        color: isUzbekistan ? 0xfffbeb : 0xfca5a5,
        roughness: 0.2,
        metalness: 0.8,
        emissive: isUzbekistan ? 0xf59e0b : 0xdc2626,
        emissiveIntensity: isUzbekistan ? 0.85 : 0.4
      });
      const headMesh = new THREE.Mesh(headGeo, headMat);
      headMesh.userData = city;
      coneMesh.userData = city;
      pinGrp.userData = city;
      pinGrp.add(headMesh);

      if (isUzbekistan) {
        // Toshkent / O'zbekiston uchun aylanuvchi oltin nur halqasi
        const ringGeo = new THREE.RingGeometry(0.35, 0.65, 24);
        const ringMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24, side: THREE.DoubleSide, transparent: true, opacity: 0.85 });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.rotation.x = -Math.PI / 2;
        ringMesh.position.y = 0.05;
        pinGrp.add(ringMesh);
        pinGrp.beaconRing = ringMesh;
      }

      pinsGroup.add(pinGrp);
      this.interactivePins.push(headMesh, coneMesh);
    });

    parent.add(pinsGroup);
    this.objects.pinsGroup = pinsGroup;
    pinsGroup.visible = this.params.showPins;
  }

  createGlobeTexture() {
    const w = 2048;
    const h = 1024;
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');

    // 1. Chuqur okean foni (gradiente bilan)
    const oceanGrad = ctx.createLinearGradient(0, 0, 0, h);
    oceanGrad.addColorStop(0, '#061329');
    oceanGrad.addColorStop(0.25, '#0b2447');
    oceanGrad.addColorStop(0.5, '#081d39');
    oceanGrad.addColorStop(0.75, '#0b2447');
    oceanGrad.addColorStop(1, '#061329');
    ctx.fillStyle = oceanGrad;
    ctx.fillRect(0, 0, w, h);

    // Kenglik/uzunlikni piksellarga o'girish
    const X = (lon) => ((lon + 180) / 360) * w;
    const Y = (lat) => ((90 - lat) / 180) * h;

    const drawPoly = (pts, fill, stroke, shadowBlur = 0, shadowCol = '#000') => {
      ctx.save();
      if (shadowBlur > 0) {
        ctx.shadowColor = shadowCol;
        ctx.shadowBlur = shadowBlur;
      }
      ctx.beginPath();
      pts.forEach((p, idx) => {
        const px = X(p[0]);
        const py = Y(p[1]);
        if (idx === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      });
      ctx.closePath();
      ctx.fillStyle = fill;
      ctx.fill();
      if (stroke) {
        ctx.strokeStyle = stroke;
        ctx.lineWidth = 1.6;
        ctx.stroke();
      }
      ctx.restore();
    };

    // Qit'alar konturlari (Shelf sohili jilosi bilan)
    // 1. Afrika
    const africa = [[-5,36],[10,37],[25,32],[32,31],[34,28],[44,12],[51,12],[42,-4],[36,-17],[32,-29],[20,-35],[18,-34],[12,-20],[9,-5],[4,5],[-5,5],[-15,11],[-17,15],[-14,23],[-10,28],[-6,36]];
    drawPoly(africa, 'rgba(20, 80, 120, 0.4)', null, 18, '#145078'); // shelf
    drawPoly(africa, '#345e37', '#254427');
    // Sahroi Kabir qumlari
    drawPoly([[-15,18],[35,18],[35,31],[-5,36],[-14,23]], '#c89658', null);
    // Madagaskar
    drawPoly([[44,-12],[50,-14],[48,-25],[44,-25]], '#2d6a4f', '#1b4332');

    // 2. Yevropa
    const europe = [[-9,36],[-9,43],[-2,44],[-4,48],[2,51],[8,54],[8,58],[20,55],[28,60],[32,70],[24,71],[16,68],[5,62],[5,58],[-4,58],[-5,52],[-1,47],[-1,43],[-8,37]];
    drawPoly(europe, 'rgba(20, 80, 120, 0.4)', null, 14, '#145078');
    drawPoly(europe, '#2d6a4f', '#1b4332');
    // Britaniya va Irlandiya
    drawPoly([[-5,50],[1,51],[0,58],[-5,58],[-6,54]], '#40916c', '#2d6a4f');
    drawPoly([[-10,51],[-6,52],[-6,55],[-10,54]], '#40916c', '#2d6a4f');
    // Skandinaviya
    drawPoly([[5,58],[12,56],[18,59],[28,71],[20,71],[12,64],[5,62]], '#1b4332', '#081c15');
    // Italiya va Bolqon
    drawPoly([[8,45],[13,46],[18,40],[16,38],[12,42],[9,44]], '#2d6a4f', '#1b4332');
    drawPoly([[18,42],[24,42],[26,38],[22,36],[20,39]], '#2d6a4f', '#1b4332');

    // 3. Osiyo va Sibir
    const asia = [[30,50],[38,44],[48,40],[56,38],[60,36],[75,37],[78,42],[85,45],[100,50],[120,50],[135,48],[140,55],[160,55],[170,65],[180,68],[180,72],[100,77],[60,70],[40,65],[32,60]];
    drawPoly(asia, 'rgba(20, 80, 120, 0.4)', null, 20, '#145078');
    drawPoly(asia, '#2d5a27', '#1b4332');
    // Arabiston yarimoroli
    drawPoly([[34,31],[42,31],[50,30],[60,25],[58,22],[54,16],[44,13],[43,18],[35,28]], '#d4a373', '#b08968');
    // Hindiston yarimoroli
    drawPoly([[68,24],[72,32],[78,31],[88,27],[92,21],[80,8],[76,9],[72,18]], '#2d6a4f', '#1b4332');
    // Sharqiy Osiyo va Xitoy
    drawPoly([[105,22],[118,22],[122,30],[121,38],[128,40],[128,35],[124,37],[118,39],[110,35],[104,30]], '#386641', '#1f3622');
    // Yaponiya orollari
    drawPoly([[130,32],[133,34],[141,43],[145,44],[142,39],[137,35],[132,33]], '#40916c', '#1b4332');
    // Janubi-sharqiy Osiyo va Indoneziya
    drawPoly([[98,22],[105,21],[108,12],[105,9],[100,14],[98,18]], '#2d6a4f', '#1b4332');
    drawPoly([[95,5],[105,-6],[102,-5],[96,3]], '#1b4332', '#081c15');
    drawPoly([[109,1],[117,4],[118,-3],[111,-3]], '#1b4332', '#081c15');

    // 4. Markaziy Osiyo va O'zbekiston (Oltin dasht va tog'lar)
    const uzbRegion = [[56,45],[66,45],[73,42],[72,37],[60,37],[56,41]];
    drawPoly(uzbRegion, '#b08968', '#f59e0b', 12, '#fbbf24');
    // Orol va Kaspiy dengizlari
    drawPoly([[49,46],[52,47],[54,42],[51,37],[48,40]], '#0a2540', '#144e75');
    drawPoly([[58,45],[61,46],[61,43],[58,43]], '#081c38', '#144e75');

    // 5. Shimoliy Amerika
    const northAm = [[-168,65],[-165,60],[-141,60],[-130,55],[-124,48],[-120,34],[-117,32],[-105,25],[-97,26],[-82,25],[-80,28],[-75,35],[-66,44],[-60,47],[-64,50],[-75,52],[-82,55],[-94,52],[-95,60],[-120,68],[-141,69],[-160,71]];
    drawPoly(northAm, 'rgba(20, 80, 120, 0.4)', null, 18, '#145078');
    drawPoly(northAm, '#2f5233', '#1b4332');
    // Grenlandiya muzliklari
    drawPoly([[-55,60],[-45,60],[-20,70],[-18,82],[-40,83],[-60,82],[-70,76]], '#f8fafc', '#cbd5e1');
    // Meksika va Markaziy Amerika
    drawPoly([[-115,32],[-105,22],[-95,16],[-88,14],[-83,8],[-77,8],[-85,14],[-90,16],[-97,20],[-105,25]], '#b08968', '#6b705c');

    // 6. Janubiy Amerika
    const southAm = [[-77,8],[-60,10],[-50,2],[-35,-5],[-38,-15],[-48,-28],[-55,-35],[-65,-45],[-68,-55],[-75,-50],[-72,-35],[-70,-20],[-78,-10],[-80,2],[-77,8]];
    drawPoly(southAm, 'rgba(20, 80, 120, 0.4)', null, 18, '#145078');
    drawPoly(southAm, '#1b4332', '#081c15');
    // And tog'lari zanjiri
    ctx.strokeStyle = '#5c4033';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(X(-77), Y(8));
    ctx.lineTo(X(-72), Y(-20));
    ctx.lineTo(X(-71), Y(-45));
    ctx.stroke();

    // 7. Avstraliya va Yangi Zelandiya
    const australia = [[113,-22],[118,-35],[135,-35],[140,-38],[150,-37],[153,-28],[148,-19],[142,-11],[136,-12],[130,-14],[124,-16],[114,-22]];
    drawPoly(australia, 'rgba(20, 80, 120, 0.4)', null, 16, '#145078');
    drawPoly(australia, '#bc6c25', '#99582a');
    // Yangi Zelandiya
    drawPoly([[166,-46],[174,-41],[178,-37],[175,-35],[172,-40],[168,-44]], '#40916c', '#2d6a4f');

    // 8. Antarktida qit'asi (Janubiy qutb muzligi)
    const antarctica = [[-180,-64],[180,-64],[180,-90],[-180,-90]];
    drawPoly(antarctica, '#f8fafc', '#94a3b8');
    drawPoly([[-65,-62],[-60,-64],[-55,-64],[-60,-70]], '#f1f5f9', '#94a3b8'); // Yarimorol

    // 9. Arktika muz qoplami (Shimoliy qutb)
    drawPoly([[-180,78],[180,78],[180,90],[-180,90]], '#f1f5f9', '#e2e8f0');

    // 10. Koordinata to'rlari va maxsus chiziqlar
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 1;
    for (let lat = -60; lat <= 60; lat += 30) {
      if (lat === 0) continue;
      ctx.beginPath();
      ctx.moveTo(0, Y(lat));
      ctx.lineTo(w, Y(lat));
      ctx.stroke();
    }
    for (let lon = -150; lon <= 180; lon += 30) {
      if (lon === 0) continue;
      ctx.beginPath();
      ctx.moveTo(X(lon), 0);
      ctx.lineTo(X(lon), h);
      ctx.stroke();
    }

    // Ekvator chizig'i (Oltin chiziq)
    ctx.strokeStyle = 'rgba(251, 191, 36, 0.85)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(0, Y(0));
    ctx.lineTo(w, Y(0));
    ctx.stroke();
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 13px sans-serif';
    ctx.fillText('EKVATOR (0°)', 20, Y(0) - 6);

    // Grinvich bosh meridiani (Cyan chiziq)
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.85)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(X(0), 0);
    ctx.lineTo(X(0), h);
    ctx.stroke();
    ctx.fillStyle = '#38bdf8';
    ctx.fillText('GRINVICH (0°)', X(0) + 8, 30);

    // O'zbekiston yulduzi (Toshkent koordinatasi)
    ctx.fillStyle = '#fbbf24';
    ctx.shadowColor = '#f59e0b';
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(X(69.28), Y(41.30), 4.5, 0, Math.PI * 2);
    ctx.fill();

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    return tex;
  }

  createCloudTexture() {
    const w = 1024;
    const h = 512;
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, w, h);

    // Organik bulut uyurmalari va passat oqimlari
    for (let i = 0; i < 260; i++) {
      const cx = Math.random() * w;
      let cy = Math.random() - 0.5;
      cy = 256 + Math.sign(cy) * Math.pow(Math.abs(cy), 0.75) * 220;
      const r = 18 + Math.random() * 52;
      const alpha = 0.15 + Math.random() * 0.35;
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      grad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
      grad.addColorStop(0.55, `rgba(255, 255, 255, ${alpha * 0.5})`);
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.ellipse(cx, cy, r * (1 + Math.random() * 1.6), r * 0.65, Math.random() * 0.4, 0, Math.PI * 2);
      ctx.fill();
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    return tex;
  }

  handleCanvasClick(e) {
    if (this.currentExp !== 'world-globe') return;
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);

    // 1. Quyosh va sayyoralarni tekshirish
    if (this.interactiveCelestialBodies && this.interactiveCelestialBodies.length > 0) {
      const bodyHits = this.raycaster.intersectObjects(this.interactiveCelestialBodies, false);
      if (bodyHits.length > 0) {
        const hitData = bodyHits[0].object.userData;
        if (hitData && hitData.id) {
          this.focusBody(hitData.id);
          return;
        }
      }
    }

    // 2. Yer sirtidagi shahar pinlarini tekshirish
    if (this.interactivePins && this.interactivePins.length > 0) {
      const pinHits = this.raycaster.intersectObjects(this.interactivePins, false);
      if (pinHits.length > 0) {
        const hitObj = pinHits[0].object;
        if (hitObj.userData && hitObj.userData.name) {
          this.showCityHud(hitObj.userData);
          return;
        }
      }
    }
  }

  showCityHud(city) {
    const hud = document.getElementById('geo-globe-hud');
    if (!hud) return;
    const flagEl = document.getElementById('globe-hud-flag');
    const titleEl = document.getElementById('globe-hud-title');
    const subEl = document.getElementById('globe-hud-subtitle');
    const descEl = document.getElementById('globe-hud-desc');
    const popEl = document.getElementById('globe-hud-pop');
    const tzEl = document.getElementById('globe-hud-tz');
    const latEl = document.getElementById('globe-hud-lat');
    const lonEl = document.getElementById('globe-hud-lon');

    if (flagEl) flagEl.textContent = city.flag || '📍';
    if (titleEl) titleEl.textContent = `${city.name} (${city.country})`;
    if (subEl) subEl.textContent = `${city.continent} | ${city.lat}, ${city.lon}`;
    if (descEl) descEl.textContent = city.desc;
    if (popEl) popEl.textContent = city.pop;
    if (tzEl) tzEl.textContent = city.tz;
    if (latEl) latEl.textContent = city.lat;
    if (lonEl) lonEl.textContent = city.lon;

    hud.style.display = 'block';
    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  }

  focusUzbekistan() {
    if (this.currentExp !== 'world-globe' || !this.objects.earthMesh) return;
    this.isFocusingUzbekistan = true;

    // Toshkent (Lat 41.3, Lon 69.28) markazga yo'naltirilishi
    const startRot = this.objects.earthMesh.rotation.y;
    // Yer sharini Toshkent to'g'riga qaratadigan burish burchagi
    const targetRot = Math.round(startRot / (Math.PI * 2)) * (Math.PI * 2) - THREE.MathUtils.degToRad(69.28) - Math.PI / 2;

    const startTheta = this.theta;
    const startPhi = this.phi;
    const targetTheta = 0.0;
    const targetPhi = 1.15;

    const startTime = performance.now();
    const duration = 1200;

    const anim = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const ease = 0.5 - Math.cos(progress * Math.PI) / 2;

      this.theta = startTheta + (targetTheta - startTheta) * ease;
      this.phi = startPhi + (targetPhi - startPhi) * ease;
      this.updateCameraPosition();

      this.objects.earthMesh.rotation.y = startRot + (targetRot - startRot) * ease;

      if (progress < 1) {
        requestAnimationFrame(anim);
      } else {
        this.isFocusingUzbekistan = false;
        // Toshkent ma'lumotlarini HUDda ko'rsatish
        const toshkent = {
          name: "Toshkent",
          country: "O'zbekiston",
          continent: "Markaziy Osiyo",
          lat: "41.30° N",
          lon: "69.28° E",
          pop: "3.0 mln",
          tz: "UTC+5 (Toshkent)",
          flag: "🇺🇿",
          desc: "O'zbekiston Respublikasi poytaxti. Markaziy Osiyodagi eng yirik megapolis, qadimiy Shosh, Buyuk Ipak yo'li chorrahasi va mintaqaning ulkan ma'rifiy-madaniy markazi."
        };
        this.showCityHud(toshkent);
      }
    };
    requestAnimationFrame(anim);
  }

  setGlobeSpeed(val) {
    this.params.globeRotationSpeed = parseFloat(val);
  }

  toggleClouds(enabled) {
    this.params.showClouds = !!enabled;
    if (this.objects.globeClouds) {
      this.objects.globeClouds.visible = this.params.showClouds;
    }
  }

  toggleGrid(enabled) {
    this.params.showGrid = !!enabled;
    if (this.objects.globeGrid) {
      this.objects.globeGrid.visible = this.params.showGrid;
    }
  }

  togglePins(enabled) {
    this.params.showPins = !!enabled;
    if (this.objects.pinsGroup) {
      this.objects.pinsGroup.visible = this.params.showPins;
    }
  }

  // ============================================================
  // ANIMATSIYA TSIKLI (ANIMATION LOOP)
  // ============================================================
  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());

    if (this.isRunning) {
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

    // 5. World Globe va Butun Quyosh tizimi animatsiyasi
    if (this.currentExp === 'world-globe') {
      const spd = this.params.globeRotationSpeed;

      // Yer sirti o'z o'qi atrofida aylanishi
      if (this.objects.earthMesh && !this.isFocusingUzbekistan) {
        this.objects.earthMesh.rotation.y += 0.0018 * spd;
      }
      // Bulutlar oqimi
      if (this.objects.globeClouds && this.params.showClouds) {
        this.objects.globeClouds.rotation.y += 0.0025 * spd;
      }
      // Oyning Yer atrofida orbital aylanishi
      if (this.objects.moonMesh) {
        const mTime = time * 0.35 * spd;
        this.objects.moonMesh.position.set(Math.cos(mTime) * 22, Math.sin(mTime * 0.2) * 2, Math.sin(mTime) * 22);
      }
      // Sayyoralarning Quyosh atrofida aylanishi
      if (this.planetsList && this.params.showSolarPlanets) {
        this.planetsList.forEach(p => {
          if (p.pivot && p.id !== 'earth') {
            p.pivot.rotation.y += 0.002 * p.speed * spd;
          }
        });
      }
      // Asteroidlar halqasi sekin aylanishi
      if (this.objects.astBelt) {
        this.objects.astBelt.rotation.y += 0.0003 * spd;
      }
      // Kometa fazoviy harakati
      if (this.objects.cometMesh) {
        const cTime = time * 0.12 * spd;
        this.objects.cometMesh.position.set(Math.cos(cTime) * 310, Math.sin(cTime * 1.8) * 28, Math.sin(cTime) * 190);
      }
      // Toshkent nuri pulsatsiyasi
      if (this.objects.pinsGroup) {
        const pulse = 1.0 + Math.sin(time * 4) * 0.25;
        this.objects.pinsGroup.children.forEach(c => {
          if (c.beaconRing) {
            c.beaconRing.scale.set(pulse, pulse, 1);
          }
        });
      }
      // Dinamik zoom target moslashuvi
      this.updateCameraForZoom();
    }
    } // end if (this.isRunning)

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
    } else if (this.currentExp === 'world-globe') {
      this.focusUzbekistan();
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
