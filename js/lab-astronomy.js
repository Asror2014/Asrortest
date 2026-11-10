/**
 * 30-maktabtest - 3D Interaktiv Astronomiya va Koinot Laboratoriyasi
 * Three.js asosida ishlaydi (100% oflayn, qo'shimcha kutubxonasiz)
 * 
 * Tajribalar:
 *   1. solar-system: Quyosh tizimi (Quyosh va 8 ta sayyora real orbitalari bilan)
 *   2. earth-moon: Yer va Oy tizimi (Fazalar va tutilish)
 *   3. saturn-rings: Saturn va uning gigant halqalari
 *   4. blackhole: Gravitatsiya va Qora tuynuk (Akkretsion disk)
 */

class AstronomyLab {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      console.error('AstronomyLab: container topilmadi:', containerId);
      return;
    }
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.clock = null;
    this.objects = {};
    this.planets = [];
    this.orbits = [];
    this.stars = null;
    this.currentExperiment = 'solar-system';
    this.animationId = null;
    this.isRunning = true;
    this.elapsedTime = 0;
    this.speedMultiplier = 1.0;
    this.scaleMultiplier = 1.0;
    this.focusedPlanet = null;

    // Kamera boshqaruvi (orbit)
    this.isDragging = false;
    this.previousMouse = { x: 0, y: 0 };
    this.theta = 0.8;
    this.phi = 1.0;
    this.cameraRadius = 38;
    this.cameraTarget = new THREE.Vector3(0, 0, 0);

    // Boshqaruv listenerlari
    this._onResize = () => this.onWindowResize();
  }

  init() {
    if (!this.container) return;

    const width = this.container.clientWidth || 800;
    const height = this.container.clientHeight || 600;

    // Sahna (Koinot qorong'u foni)
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x030712);

    // Kamera
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.updateCameraPosition();

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Eski canvaslarni tozalash
    while (this.container.firstChild) {
      if (this.container.firstChild.id === 'astronomy-canvas-overlay') {
        this.container.firstChild.style.display = 'none';
        break;
      }
      this.container.removeChild(this.container.firstChild);
    }
    this.container.appendChild(this.renderer.domElement);

    this.clock = new THREE.Clock();

    this.setupStars();
    this.setupOrbitControls();
    window.addEventListener('resize', this._onResize);
    if (window.ResizeObserver && this.container) {
      this.resizeObserver = new ResizeObserver(() => {
        this.onWindowResize();
      });
      this.resizeObserver.observe(this.container);
    }

    this.animate();
  }

  setupStars() {
    // 1500 ta koinot yulduzlari
    const starCount = 1800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const r = 250 + Math.random() * 200;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      // Ranglar (oq, moviy, sarg'ish)
      const tone = Math.random();
      if (tone > 0.8) {
        colors[i * 3] = 0.7; colors[i * 3 + 1] = 0.85; colors[i * 3 + 2] = 1.0;
      } else if (tone > 0.6) {
        colors[i * 3] = 1.0; colors[i * 3 + 1] = 0.9; colors[i * 3 + 2] = 0.7;
      } else {
        colors[i * 3] = 0.9; colors[i * 3 + 1] = 0.9; colors[i * 3 + 2] = 0.95;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 1.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });

    this.stars = new THREE.Points(geometry, material);
    this.scene.add(this.stars);
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
      this.cameraRadius += e.deltaY * 0.03;
      this.cameraRadius = Math.max(6, Math.min(120, this.cameraRadius));
      this.updateCameraPosition();
    };

    // Sensorli boshqaruv (smartfonlar uchun)
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

  clearExperiment() {
    // Sahna elementlarini tozalash (yulduzlardan tashqari)
    const toRemove = [];
    this.scene.children.forEach(child => {
      if (child !== this.stars) toRemove.push(child);
    });
    toRemove.forEach(child => this.scene.remove(child));

    this.planets = [];
    this.orbits = [];
    this.objects = {};
    this.elapsedTime = 0;
    this.focusedPlanet = null;
    this.cameraTarget.set(0, 0, 0);
  }

  /* ============================================================
     1-TAJRIBA: QUYOSH TIZIMI (8 TA SAYYORA)
     ============================================================ */
  setupSolarSystem() {
    this.clearExperiment();
    this.currentExperiment = 'solar-system';
    this.cameraRadius = 42;
    this.theta = 0.8;
    this.phi = 1.1;
    this.updateCameraPosition();

    // Markaziy chiroqlar
    const ambientLight = new THREE.AmbientLight(0x222233, 0.4);
    this.scene.add(ambientLight);

    const sunLight = new THREE.PointLight(0xfff0dd, 2.8, 150, 0.5);
    sunLight.position.set(0, 0, 0);
    this.scene.add(sunLight);

    // Quyosh (Sun)
    const sunGeom = new THREE.SphereGeometry(2.4, 32, 32);
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xffaa00 });
    const sun = new THREE.Mesh(sunGeom, sunMat);
    this.scene.add(sun);
    this.objects.sun = sun;

    // Quyosh nuri xira qobiq (Corona glow)
    const coronaGeom = new THREE.SphereGeometry(2.8, 32, 32);
    const coronaMat = new THREE.MeshBasicMaterial({
      color: 0xff6600,
      transparent: true,
      opacity: 0.25,
      side: THREE.BackSide
    });
    const corona = new THREE.Mesh(coronaGeom, coronaMat);
    this.scene.add(corona);
    this.objects.corona = corona;

    // Sayyoralar ma'lumotlar bazasi
    const planetDefs = [
      { name: 'Merkuriy', dist: 4.5, radius: 0.25, color: 0xa8a29e, speed: 4.15, period: '88 kun', temp: '167°C', info: 'Quyoshga eng yaqin va eng kichik sayyora. Atmosferasi yo\'q.' },
      { name: 'Venera', dist: 6.8, radius: 0.42, color: 0xf59e0b, speed: 1.62, period: '225 kun', temp: '464°C', info: 'Eng issiq sayyora. Zaharli sulfat kislota bulutlari bilan qoplangan.' },
      { name: 'Yer', dist: 9.5, radius: 0.46, color: 0x3b82f6, speed: 1.0, period: '365.25 kun', temp: '15°C', hasMoon: true, info: 'Hayot mavjud bo\'lgan yagona ma\'lum sayyora. 71% suv bilan qoplangan.' },
      { name: 'Mars', dist: 12.5, radius: 0.32, color: 0xef4444, speed: 0.53, period: '687 kun', temp: '-65°C', info: 'Qizil sayyora. Temir oksidi tuprog\'iga qizil rang beradi. Qadimgi daryo o\'zanlari mavjud.' },
      { name: 'Yupiter', dist: 17.5, radius: 1.15, color: 0xd97706, speed: 0.24, period: '11.8 yil', temp: '-110°C', hasBands: true, info: 'Quyosh tizimidagi eng katta gigant sayyora. 95 ta yo\'ldoshi bor.' },
      { name: 'Saturn', dist: 23.5, radius: 0.95, color: 0xfde047, speed: 0.14, period: '29.5 yil', temp: '-140°C', hasRings: true, info: 'Ulkan muz va tosh bo\'laklaridan iborat ajoyib halqalari bilan mashhur.' },
      { name: 'Uran', dist: 29.5, radius: 0.65, color: 0x22d3ee, speed: 0.08, period: '84 yil', temp: '-195°C', info: 'Muzli gigant. O\'z o\'qi atrofida deyarli "yonboshlab" aylanadi.' },
      { name: 'Neptun', dist: 35.0, radius: 0.62, color: 0x2563eb, speed: 0.05, period: '165 yil', temp: '-200°C', info: 'Eng kuchli shamollar esadigan moviy muzli sayyora (tezligi 2000 km/soat).' }
    ];

    planetDefs.forEach(p => {
      // 1. Orbital halqa (Orbit line)
      const orbitGeom = new THREE.RingGeometry(p.dist - 0.03, p.dist + 0.03, 64);
      const orbitMat = new THREE.MeshBasicMaterial({
        color: 0x334155,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.4
      });
      const orbitMesh = new THREE.Mesh(orbitGeom, orbitMat);
      orbitMesh.rotation.x = Math.PI / 2;
      this.scene.add(orbitMesh);
      this.orbits.push(orbitMesh);

      // 2. Sayyora shari
      const geom = new THREE.SphereGeometry(p.radius, 24, 24);
      const mat = new THREE.MeshStandardMaterial({
        color: p.color,
        roughness: 0.6,
        metalness: 0.1
      });
      const mesh = new THREE.Mesh(geom, mat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.position.x = p.dist;

      // Agar Saturn bo'lsa, uning halqasi
      if (p.hasRings) {
        const ringGeom = new THREE.RingGeometry(p.radius * 1.35, p.radius * 2.3, 32);
        const ringMat = new THREE.MeshStandardMaterial({
          color: 0xe2e8f0,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.8
        });
        const ring = new THREE.Mesh(ringGeom, ringMat);
        ring.rotation.x = Math.PI / 2.3;
        ring.rotation.y = 0.2;
        mesh.add(ring);
      }

      // Agar Yer bo'lsa, Oy yo'ldoshi
      let moonMesh = null;
      if (p.hasMoon) {
        const moonGeom = new THREE.SphereGeometry(0.12, 16, 16);
        const moonMat = new THREE.MeshStandardMaterial({ color: 0xd1d5db });
        moonMesh = new THREE.Mesh(moonGeom, moonMat);
        moonMesh.position.set(0.9, 0.2, 0);
        mesh.add(moonMesh);
      }

      this.scene.add(mesh);

      this.planets.push({
        mesh: mesh,
        moon: moonMesh,
        def: p,
        angle: Math.random() * Math.PI * 2
      });
    });

    this.updateUIInfo(
      "Quyosh Tizimi (8 ta Sayyora)",
      "Quyosh atrofida 8 ta asosiy sayyora aylanadi. Sichqoncha orqali koinotni aylantiring, yaqinlashtiring yoki sayyoralardan birini tanlang.",
      "T² / R³ = const (Keplerning 3-qonuni)",
      [
        { label: "Sayyoralar soni:", value: "8 ta asosiy" },
        { label: "Markaziy yulduz:", value: "Quyosh (G2V)" },
        { label: "Tizim yoshi:", value: "4.6 mlrd yil" }
      ]
    );
  }

  /* ============================================================
     2-TAJRIBA: YER VA OY TIZIMI (FAZALAR VA TUTILISH)
     ============================================================ */
  setupEarthMoon() {
    this.clearExperiment();
    this.currentExperiment = 'earth-moon';
    this.cameraRadius = 14;
    this.theta = 0.5;
    this.phi = 1.2;
    this.updateCameraPosition();

    const ambientLight = new THREE.AmbientLight(0x1e293b, 0.5);
    this.scene.add(ambientLight);

    // Bir tomondan Quyosh nuri tushadi (fazalar ko'rinishi uchun)
    const dirLight = new THREE.DirectionalLight(0xfffaed, 2.5);
    dirLight.position.set(25, 5, 10);
    this.scene.add(dirLight);

    // Katta Yer shari
    const earthGeom = new THREE.SphereGeometry(2.2, 36, 36);
    const earthMat = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      roughness: 0.7,
      metalness: 0.1
    });
    const earth = new THREE.Mesh(earthGeom, earthMat);
    // Yer o'qining 23.5 gradus qiyaligi
    earth.rotation.z = (23.5 * Math.PI) / 180;
    this.scene.add(earth);
    this.objects.earth = earth;

    // Yer atmosferasi (havo shaffof qobig'i)
    const atmoGeom = new THREE.SphereGeometry(2.35, 32, 32);
    const atmoMat = new THREE.MeshStandardMaterial({
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.25,
      roughness: 1.0
    });
    const atmo = new THREE.Mesh(atmoGeom, atmoMat);
    this.scene.add(atmo);
    this.objects.atmo = atmo;

    // Oy orbitasi
    const moonOrbitGeom = new THREE.RingGeometry(6.4, 6.46, 64);
    const moonOrbitMat = new THREE.MeshBasicMaterial({ color: 0x475569, side: THREE.DoubleSide });
    const moonOrbit = new THREE.Mesh(moonOrbitGeom, moonOrbitMat);
    moonOrbit.rotation.x = Math.PI / 2;
    this.scene.add(moonOrbit);

    // Oy shari
    const moonGeom = new THREE.SphereGeometry(0.65, 24, 24);
    const moonMat = new THREE.MeshStandardMaterial({
      color: 0xcfd8dc,
      roughness: 0.85
    });
    const moon = new THREE.Mesh(moonGeom, moonMat);
    moon.position.set(6.4, 0, 0);
    this.scene.add(moon);
    this.objects.moon = moon;
    this.objects.moonAngle = 0;

    this.updateUIInfo(
      "Yer va Oy Tizimi (Fazalar)",
      "Oy Yer atrofida 27.3 kunda to'liq bir marta aylanadi. Quyosh nuri burchagiga qarab Oy yangi oy, yarim oy va to'lin oy fazalariga kiradi.",
      "T = 27.3 kun | Masofa: ~384,400 km",
      [
        { label: "Yer radiusi:", value: "6,371 km" },
        { label: "Oy radiusi:", value: "1,737 km" },
        { label: "Yer o'qi og'ishi:", value: "23.5°" }
      ]
    );
  }

  /* ============================================================
     3-TAJRIBA: SATURN VA UNING HALQALARI
     ============================================================ */
  setupSaturn() {
    this.clearExperiment();
    this.currentExperiment = 'saturn-rings';
    this.cameraRadius = 16;
    this.theta = 0.7;
    this.phi = 1.0;
    this.updateCameraPosition();

    const ambientLight = new THREE.AmbientLight(0x334155, 0.6);
    this.scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfffbeb, 2.2);
    dirLight.position.set(20, 15, 25);
    this.scene.add(dirLight);

    // Saturn shari
    const saturnGeom = new THREE.SphereGeometry(2.8, 36, 36);
    const saturnMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.6
    });
    const saturn = new THREE.Mesh(saturnGeom, saturnMat);
    this.scene.add(saturn);
    this.objects.saturn = saturn;

    // Saturn halqalari (3 ta konsentrik halqa qatlamlari)
    const ringGroup = new THREE.Group();
    
    // Asosiy ichki va tashqi halqalar
    const r1 = new THREE.RingGeometry(3.6, 5.2, 64);
    const m1 = new THREE.MeshStandardMaterial({
      color: 0xfef08a,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.95
    });
    ringGroup.add(new THREE.Mesh(r1, m1));

    // Kassini yorig'i (Cassini Division) dan keyingi tashqi halqa
    const r2 = new THREE.RingGeometry(5.4, 6.8, 64);
    const m2 = new THREE.MeshStandardMaterial({
      color: 0xfde047,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8
    });
    ringGroup.add(new THREE.Mesh(r2, m2));

    // Halqa og'ishi
    ringGroup.rotation.x = Math.PI / 2.4;
    ringGroup.rotation.y = 0.2;
    this.scene.add(ringGroup);
    this.objects.saturnRings = ringGroup;

    // Titan yo'ldoshi
    const titanGeom = new THREE.SphereGeometry(0.35, 16, 16);
    const titanMat = new THREE.MeshStandardMaterial({ color: 0xf97316 });
    const titan = new THREE.Mesh(titanGeom, titanMat);
    titan.position.set(9.5, 1.5, 0);
    this.scene.add(titan);
    this.objects.titan = titan;
    this.objects.titanAngle = 0;

    this.updateUIInfo(
      "Saturn va uning Halqalari",
      "Saturnning ajoyib halqalari 99% toza muz va qoyalardan iborat. Halqalarning qalinligi bor-yo'g'i 10 metr dan 1 km gacha!",
      "Halqa kengligi: ~282,000 km | Qalinligi: ~10 m - 1 km",
      [
        { label: "Asosiy yo'ldosh:", value: "Titan (Atmosferali)" },
        { label: "Jami yo'ldoshlar:", value: "146 ta" },
        { label: "Zichligi:", value: "0.687 g/cm³ (Suvdan yengil!)" }
      ]
    );
  }

  /* ============================================================
     4-TAJRIBA: GRAVITATSIYA VA QORA TUYNUK
     ============================================================ */
  setupBlackHole() {
    this.clearExperiment();
    this.currentExperiment = 'blackhole';
    this.cameraRadius = 18;
    this.theta = 0.4;
    this.phi = 1.2;
    this.updateCameraPosition();

    const ambientLight = new THREE.AmbientLight(0x0f172a, 0.4);
    this.scene.add(ambientLight);

    // Voqealar gorizonti (Qop-qora shar)
    const bhGeom = new THREE.SphereGeometry(2.0, 36, 36);
    const bhMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const blackHole = new THREE.Mesh(bhGeom, bhMat);
    this.scene.add(blackHole);
    this.objects.blackHole = blackHole;

    // Foton xalqasi (Lensing glow)
    const ringGeom = new THREE.RingGeometry(2.02, 2.3, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.95
    });
    const photonRing = new THREE.Mesh(ringGeom, ringMat);
    photonRing.rotation.x = Math.PI / 2.2;
    this.scene.add(photonRing);
    this.objects.photonRing = photonRing;

    // Akkretsion disk (Girdob aylanuvchi zarrachalar)
    const particleCount = 2000;
    const geom = new THREE.BufferGeometry();
    const pos = new Float32Array(particleCount * 3);
    const cols = new Float32Array(particleCount * 3);
    this.objects.particleAngles = new Float32Array(particleCount);
    this.objects.particleRadii = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.4 + Math.pow(Math.random(), 1.5) * 6.5;
      const angle = Math.random() * Math.PI * 2;
      this.objects.particleRadii[i] = radius;
      this.objects.particleAngles[i] = angle;

      pos[i * 3] = radius * Math.cos(angle);
      pos[i * 3 + 1] = (Math.random() - 0.5) * 0.25 * (radius / 5);
      pos[i * 3 + 2] = radius * Math.sin(angle);

      // Rang: ichki qism olovrang/oq issiq, tashqi qism binafsha/ko'k
      const norm = (radius - 2.4) / 6.5;
      if (norm < 0.3) {
        cols[i * 3] = 1.0; cols[i * 3 + 1] = 0.9; cols[i * 3 + 2] = 0.6;
      } else if (norm < 0.7) {
        cols[i * 3] = 1.0; cols[i * 3 + 1] = 0.4; cols[i * 3 + 2] = 0.1;
      } else {
        cols[i * 3] = 0.6; cols[i * 3 + 1] = 0.2; cols[i * 3 + 2] = 0.8;
      }
    }

    geom.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geom.setAttribute('color', new THREE.BufferAttribute(cols, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });

    const accretionDisk = new THREE.Points(geom, pMat);
    accretionDisk.rotation.x = Math.PI / 6;
    this.scene.add(accretionDisk);
    this.objects.accretionDisk = accretionDisk;

    this.updateUIInfo(
      "Gravitatsiya va Qora Tuynuk",
      "Qora tuynuk shunday kuchli gravitatsiyaga egaki, hatto yorug'lik ham undan qochib qutula olmaydi. Atrofdagi materiya akkretsion diskda yorug'lik tezligiga yaqin tezlikda aylanadi.",
      "R_s = 2GM / c² (Shvarschild radiusi)",
      [
        { label: "Gravitatsiya:", value: "Cheksiz zichlik (Singulyarlik)" },
        { label: "Voqealar chegarasi:", value: "Ortga qaytmaslik chegarasi" },
        { label: "Disk harorati:", value: "Millionlab gradus Kelvin" }
      ]
    );
  }

  /* ============================================================
     ANIMATSIYA SIKLI (RENDER LOOP)
     ============================================================ */
  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());

    const delta = this.clock ? this.clock.getDelta() : 0.016;
    const clampedDelta = Math.min(delta, 0.05);

    if (this.isRunning) {
      this.elapsedTime += clampedDelta * this.speedMultiplier;

      // Yulduzlar ohista miltillashi
      if (this.stars) {
        this.stars.rotation.y += 0.00015;
      }

      if (this.currentExperiment === 'solar-system') {
        // Quyosh o'z o'qi atrofida aylanishi
        if (this.objects.sun) this.objects.sun.rotation.y += 0.003;
        if (this.objects.corona) this.objects.corona.rotation.y -= 0.002;

        // Sayyoralar harakati
        this.planets.forEach(p => {
          p.angle += clampedDelta * 0.4 * p.def.speed * this.speedMultiplier;
          p.mesh.position.x = Math.cos(p.angle) * p.def.dist;
          p.mesh.position.z = Math.sin(p.angle) * p.def.dist;
          p.mesh.rotation.y += 0.02;

          // Oy Yer atrofida aylanishi
          if (p.moon) {
            const moonSpeed = 2.5;
            p.moon.position.x = Math.cos(this.elapsedTime * moonSpeed) * 0.9;
            p.moon.position.z = Math.sin(this.elapsedTime * moonSpeed) * 0.9;
          }
        });
      } else if (this.currentExperiment === 'earth-moon') {
        if (this.objects.earth) this.objects.earth.rotation.y += 0.015 * this.speedMultiplier;
        if (this.objects.atmo) this.objects.atmo.rotation.y += 0.018 * this.speedMultiplier;

        if (this.objects.moon) {
          this.objects.moonAngle += clampedDelta * 0.6 * this.speedMultiplier;
          this.objects.moon.position.x = Math.cos(this.objects.moonAngle) * 6.4;
          this.objects.moon.position.z = Math.sin(this.objects.moonAngle) * 6.4;
          this.objects.moon.rotation.y += 0.008;
        }
      } else if (this.currentExperiment === 'saturn-rings') {
        if (this.objects.saturn) this.objects.saturn.rotation.y += 0.02 * this.speedMultiplier;
        if (this.objects.saturnRings) this.objects.saturnRings.rotation.z += 0.001 * this.speedMultiplier;

        if (this.objects.titan) {
          this.objects.titanAngle += clampedDelta * 0.4 * this.speedMultiplier;
          this.objects.titan.position.x = Math.cos(this.objects.titanAngle) * 9.5;
          this.objects.titan.position.z = Math.sin(this.objects.titanAngle) * 9.5;
        }
      } else if (this.currentExperiment === 'blackhole') {
        if (this.objects.photonRing) this.objects.photonRing.rotation.z += 0.03 * this.speedMultiplier;

        if (this.objects.accretionDisk) {
          const geom = this.objects.accretionDisk.geometry;
          const pos = geom.attributes.position.array;
          const count = this.objects.particleRadii.length;

          for (let i = 0; i < count; i++) {
            const r = this.objects.particleRadii[i];
            // Kepler tezligi: ichki zarrachalar ancha tezroq aylanadi
            const angVel = (2.5 / Math.sqrt(r)) * clampedDelta * this.speedMultiplier;
            this.objects.particleAngles[i] += angVel;
            const a = this.objects.particleAngles[i];

            pos[i * 3] = r * Math.cos(a);
            pos[i * 3 + 2] = r * Math.sin(a);
          }
          geom.attributes.position.needsUpdate = true;
        }
      }
    }

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  updateUIInfo(title, desc, formula, values) {
    const titleEl = document.getElementById('astronomy-experiment-title');
    const descEl = document.getElementById('astronomy-experiment-description');
    const formulaEl = document.getElementById('astronomy-formula');
    const valuesContainer = document.getElementById('astronomy-values');

    if (titleEl) titleEl.textContent = title;
    if (descEl) descEl.textContent = desc;
    if (formulaEl) {
      formulaEl.innerHTML = '<span class="formula-label">Formula / Qonun:</span> <span class="formula-text">' + formula + '</span>';
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

  setSpeed(val) {
    this.speedMultiplier = parseFloat(val);
    const lbl = document.getElementById('slider-astro-speed-value');
    if (lbl) lbl.textContent = this.speedMultiplier.toFixed(1) + 'x';
  }

  focusPlanet(name) {
    const p = this.planets.find(item => item.def.name.toLowerCase() === name.toLowerCase());
    if (p) {
      this.focusedPlanet = p;
      this.updateUIInfo(
        p.def.name + " Sayyorasi",
        p.def.info,
        "Orbital davri: " + p.def.period + " | Harorat: " + p.def.temp,
        [
          { label: "Quyoshdan masofa:", value: p.def.dist + " AU (shartli)" },
          { label: "Aylanish davri:", value: p.def.period },
          { label: "O'rtacha harorat:", value: p.def.temp }
        ]
      );
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

// Global yordamchi funksiyalar
let astronomyLab = null;

window.initAstronomyLab = function () {
  if (astronomyLab) astronomyLab.destroy();
  astronomyLab = new AstronomyLab('astronomy-canvas-container');
  astronomyLab.init();
  astronomyLab.setupSolarSystem();
};

window.selectAstronomyExperiment = function (expKey) {
  if (!astronomyLab) window.initAstronomyLab();

  // Sidebar faolligini yangilash
  const items = document.querySelectorAll('#astronomy-experiment-list .experiment-item');
  items.forEach(it => {
    it.classList.toggle('active', it.getAttribute('data-experiment') === expKey);
  });

  if (expKey === 'solar-system') astronomyLab.setupSolarSystem();
  else if (expKey === 'earth-moon') astronomyLab.setupEarthMoon();
  else if (expKey === 'saturn-rings') astronomyLab.setupSaturn();
  else if (expKey === 'blackhole') astronomyLab.setupBlackHole();
};

window.updateAstronomySlider = function (key, val) {
  if (!astronomyLab) return;
  if (key === 'speed') astronomyLab.setSpeed(val);
};

window.startAstronomyExperiment = function () {
  if (astronomyLab) astronomyLab.isRunning = true;
};
window.pauseAstronomyExperiment = function () {
  if (astronomyLab) astronomyLab.isRunning = false;
};
window.resetAstronomyExperiment = function () {
  if (astronomyLab) {
    if (astronomyLab.currentExperiment === 'solar-system') astronomyLab.setupSolarSystem();
    else if (astronomyLab.currentExperiment === 'earth-moon') astronomyLab.setupEarthMoon();
    else if (astronomyLab.currentExperiment === 'saturn-rings') astronomyLab.setupSaturn();
    else if (astronomyLab.currentExperiment === 'blackhole') astronomyLab.setupBlackHole();
  }
};
