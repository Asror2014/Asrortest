/**
 * 30-maktabtest - 3D Interaktiv Texnologiya va Muhandislik Laboratoriyasi
 * Three.js asosida ishlaydi (100% oflayn)
 * 
 * Tajribalar:
 *   1. robot-arm: Sanoat Roboti Qo'li (4-DoF Manipulator, servo boshqaruvi, yuk ko'chirish)
 *   2. gears: Tishli G'ildiraklar va Reduktor (Uzatish nisbati, moment va aylanish tezligi)
 *   3. engine: 4 Taktli Ichki Yonuv Dvigateli (Porshen, shatun, tirsakli val, shamcha portlashi)
 *   4. 3d-printer: 3D Printer Qatlamli Bosma (FDM texnologiyasi, qizitish paneli va ekstruder)
 *   5. wind-turbine: Shamol Turbinasi va Yashil Energiya (Rotor, generator va elektr tarmog'i)
 */

class TechnologyLab {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      console.error('TechnologyLab: container topilmadi:', containerId);
      return;
    }
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.clock = null;
    this.objects = {};
    this.currentExp = 'robot-arm';
    this.animationId = null;
    this.isRunning = true;

    // Eksperiment parametrlari
    this.params = {
      // Robot arm
      robotBaseAngle: 0,
      robotArmAngle: 25,
      robotForearmAngle: 45,
      gripperOpen: true,
      robotAutoCycle: false,
      robotCycleTime: 0,

      // Gears
      gearSpeed: 60, // RPM
      gearDirection: 1,

      // Engine
      engineRpm: 120,
      engineCrankAngle: 0,

      // 3D Printer
      printerSpeed: 2,
      printProgress: 0,
      printerPrinting: true,

      // Wind Turbine
      windSpeed: 12, // m/s
      turbineBladeAngle: 0,
      powerOutput: 850 // kW
    };

    // Orbit Controls
    this.isDragging = false;
    this.previousMouse = { x: 0, y: 0 };
    this.theta = 0.7;
    this.phi = 1.1;
    this.cameraRadius = 18;
    this.cameraTarget = new THREE.Vector3(0, 2, 0);

    this._onResize = () => this.onWindowResize();
  }

  init() {
    if (!this.container) return;

    const width = this.container.clientWidth || 800;
    const height = this.container.clientHeight || 600;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0c1322); // Deep modern industrial navy

    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 150);
    this.updateCameraPosition();

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    while (this.container.firstChild) {
      if (this.container.firstChild.id === 'technology-canvas-overlay') {
        this.container.firstChild.style.display = 'none';
        break;
      }
      this.container.removeChild(this.container.firstChild);
    }
    this.container.appendChild(this.renderer.domElement);

    this.clock = new THREE.Clock();
    this.setupOrbitControls();
    window.addEventListener('resize', this._onResize);

    this.loadExperiment(this.currentExp);
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
      this.cameraRadius = Math.max(5, Math.min(45, this.cameraRadius));
      this.updateCameraPosition();
    };

    // Touch controls
    let touchStartDist = 0;
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.previousMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      } else if (e.touches.length === 2) {
        this.isDragging = false;
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        touchStartDist = Math.sqrt(dx * dx + dy * dy);
      }
    };

    const onTouchMove = (e) => {
      if (this.isDragging && e.touches.length === 1) {
        const dx = e.touches[0].clientX - this.previousMouse.x;
        const dy = e.touches[0].clientY - this.previousMouse.y;
        this.previousMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };

        this.theta -= dx * 0.008;
        this.phi -= dy * 0.008;
        this.phi = Math.max(0.1, Math.min(Math.PI - 0.1, this.phi));
        this.updateCameraPosition();
      } else if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const delta = touchStartDist - dist;
        touchStartDist = dist;
        this.cameraRadius += delta * 0.04;
        this.cameraRadius = Math.max(5, Math.min(45, this.cameraRadius));
        this.updateCameraPosition();
      }
    };

    const onTouchEnd = () => { this.isDragging = false; };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('wheel', onWheel, { passive: false });

    container.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);
  }

  updateCameraPosition() {
    if (!this.camera) return;
    this.camera.position.x = this.cameraTarget.x + this.cameraRadius * Math.sin(this.phi) * Math.sin(this.theta);
    this.camera.position.y = this.cameraTarget.y + this.cameraRadius * Math.cos(this.phi);
    this.camera.position.z = this.cameraTarget.z + this.cameraRadius * Math.sin(this.phi) * Math.cos(this.theta);
    this.camera.lookAt(this.cameraTarget);
  }

  onWindowResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  clearScene() {
    if (!this.scene) return;
    while (this.scene.children.length > 0) {
      const obj = this.scene.children[0];
      this.scene.remove(obj);
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) {
          obj.material.forEach(m => m.dispose());
        } else {
          obj.material.dispose();
        }
      }
    }
    this.objects = {};
  }

  setupLights() {
    const ambient = new THREE.AmbientLight(0xffffff, 0.65);
    this.scene.add(ambient);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.85);
    dirLight1.position.set(12, 20, 15);
    dirLight1.castShadow = true;
    this.scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 0.4);
    dirLight2.position.set(-15, 10, -10);
    this.scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xf97316, 0.6, 25);
    pointLight.position.set(0, 5, 4);
    this.scene.add(pointLight);
  }

  addFloorGrid() {
    const grid = new THREE.GridHelper(30, 30, 0x38bdf8, 0x1e293b);
    grid.position.y = -0.01;
    this.scene.add(grid);

    const floorGeo = new THREE.PlaneGeometry(35, 35);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.85,
      metalness: 0.1
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    this.scene.add(floor);
  }

  // ============================================================
  // 1. SANOAT ROBOTI QO'LI (ROBOTIC ARM)
  // ============================================================
  buildRobotArm() {
    this.clearScene();
    this.setupLights();
    this.addFloorGrid();

    this.cameraRadius = 16;
    this.cameraTarget.set(0, 3.5, 0);
    this.updateCameraPosition();

    // Materiallar
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8, roughness: 0.3 });
    const armMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.5, roughness: 0.3 });
    const jointMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.9, roughness: 0.2 });
    const chromeMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.95, roughness: 0.1 });
    const gripperMat = new THREE.MeshStandardMaterial({ color: 0xef4444, metalness: 0.6, roughness: 0.4 });

    // Stasionar baza
    const baseGeo = new THREE.CylinderGeometry(2.5, 3, 0.8, 32);
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.position.y = 0.4;
    this.scene.add(baseMesh);

    // Baza buriluvchi stakan
    const turnBaseGeo = new THREE.CylinderGeometry(1.8, 2, 0.9, 32);
    const turnBase = new THREE.Mesh(turnBaseGeo, jointMat);
    turnBase.position.y = 1.25;
    this.scene.add(turnBase);

    // Bo'g'im 1 (Yelka o'qi)
    const armPivot1 = new THREE.Group();
    armPivot1.position.set(0, 1.7, 0);
    this.scene.add(armPivot1);
    this.objects.armPivot1 = armPivot1;

    // Yelka suyagi
    const shoulderGeo = new THREE.BoxGeometry(1.2, 4.5, 1.2);
    const shoulderMesh = new THREE.Mesh(shoulderGeo, armMat);
    shoulderMesh.position.set(0, 2.25, 0);
    armPivot1.add(shoulderMesh);

    // Shlang / gidravlika
    const pistonGeo = new THREE.CylinderGeometry(0.2, 0.2, 3.5, 16);
    const pistonMesh = new THREE.Mesh(pistonGeo, chromeMat);
    pistonMesh.position.set(0.8, 2, 0);
    armPivot1.add(pistonMesh);

    // Bo'g'im 2 (Tirsak o'qi)
    const elbowGeo = new THREE.CylinderGeometry(0.9, 0.9, 1.6, 24);
    elbowGeo.rotateZ(Math.PI / 2);
    const elbow = new THREE.Mesh(elbowGeo, jointMat);
    elbow.position.set(0, 4.5, 0);
    armPivot1.add(elbow);

    const armPivot2 = new THREE.Group();
    armPivot2.position.set(0, 4.5, 0);
    armPivot1.add(armPivot2);
    this.objects.armPivot2 = armPivot2;

    // Bilak suyagi
    const forearmGeo = new THREE.BoxGeometry(0.9, 4, 0.9);
    const forearmMesh = new THREE.Mesh(forearmGeo, armMat);
    forearmMesh.position.set(0, 2, 0);
    armPivot2.add(forearmMesh);

    // Bo'g'im 3 (Bilak uchi / Wrist)
    const wristGeo = new THREE.SphereGeometry(0.7, 24, 24);
    const wrist = new THREE.Mesh(wristGeo, jointMat);
    wrist.position.set(0, 4, 0);
    armPivot2.add(wrist);

    // Qisqich (Gripper Group)
    const gripperGroup = new THREE.Group();
    gripperGroup.position.set(0, 4, 0);
    armPivot2.add(gripperGroup);
    this.objects.gripperGroup = gripperGroup;

    // 2 barmoqli qisqich
    const fingerGeo = new THREE.BoxGeometry(0.2, 1.2, 0.35);
    const fingerLeft = new THREE.Mesh(fingerGeo, gripperMat);
    fingerLeft.position.set(-0.35, 0.6, 0);
    gripperGroup.add(fingerLeft);
    this.objects.fingerLeft = fingerLeft;

    const fingerRight = new THREE.Mesh(fingerGeo, gripperMat);
    fingerRight.position.set(0.35, 0.6, 0);
    gripperGroup.add(fingerRight);
    this.objects.fingerRight = fingerRight;

    // Platformalar (Pad A va Pad B)
    const padGeo = new THREE.CylinderGeometry(1.5, 1.6, 0.2, 32);
    const padMatA = new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.5 });
    const padA = new THREE.Mesh(padGeo, padMatA);
    padA.position.set(-5, 0.1, 0);
    this.scene.add(padA);

    const padMatB = new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: 0.5 });
    const padB = new THREE.Mesh(padGeo, padMatB);
    padB.position.set(5, 0.1, 0);
    this.scene.add(padB);

    // Yuk (Konteyner kubik)
    const cargoGeo = new THREE.BoxGeometry(0.9, 0.9, 0.9);
    const cargoMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.3, metalness: 0.2 });
    const cargo = new THREE.Mesh(cargoGeo, cargoMat);
    cargo.position.set(-5, 0.65, 0);
    this.scene.add(cargo);
    this.objects.cargo = cargo;

    this.updateRobotPositions();
  }

  updateRobotPositions() {
    if (!this.objects.armPivot1 || !this.objects.armPivot2) return;
    const baseRad = (this.params.robotBaseAngle * Math.PI) / 180;
    const armRad = (this.params.robotArmAngle * Math.PI) / 180;
    const forearmRad = (this.params.robotForearmAngle * Math.PI) / 180;

    this.objects.armPivot1.rotation.y = baseRad;
    this.objects.armPivot1.rotation.z = -armRad;
    this.objects.armPivot2.rotation.z = -forearmRad;

    // Gripper ochilish/yopilish
    if (this.objects.fingerLeft && this.objects.fingerRight) {
      const offset = this.params.gripperOpen ? 0.45 : 0.2;
      this.objects.fingerLeft.position.x = -offset;
      this.objects.fingerRight.position.x = offset;
    }
  }

  // ============================================================
  // 2. TISHLI G'ILDIRAKLAR VA REDUKTOR (GEARS)
  // ============================================================
  buildGears() {
    this.clearScene();
    this.setupLights();
    this.addFloorGrid();

    this.cameraRadius = 15;
    this.cameraTarget.set(0, 3, 0);
    this.updateCameraPosition();

    const gearGroup = new THREE.Group();
    gearGroup.position.set(0, 3, 0);
    this.scene.add(gearGroup);
    this.objects.gearGroup = gearGroup;

    // Yordamchi: Tishli g'ildirak yaratish funksiyasi
    const createGearMesh = (radius, teethCount, depth, colorHex) => {
      const g = new THREE.Group();
      // Markaziy disk
      const diskGeo = new THREE.CylinderGeometry(radius * 0.88, radius * 0.88, depth, 32);
      diskGeo.rotateX(Math.PI / 2);
      const diskMat = new THREE.MeshStandardMaterial({ color: colorHex, metalness: 0.85, roughness: 0.25 });
      const disk = new THREE.Mesh(diskGeo, diskMat);
      g.add(disk);

      // Val teshigi
      const hubGeo = new THREE.CylinderGeometry(radius * 0.28, radius * 0.28, depth * 1.25, 24);
      hubGeo.rotateX(Math.PI / 2);
      const hubMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.9, roughness: 0.2 });
      const hub = new THREE.Mesh(hubGeo, hubMat);
      g.add(hub);

      // Tishlar
      const toothWidth = (Math.PI * 2 * radius) / (teethCount * 2.2);
      const toothHeight = radius * 0.26;
      const toothGeo = new THREE.BoxGeometry(toothWidth, toothHeight, depth * 0.98);

      for (let i = 0; i < teethCount; i++) {
        const angle = (i / teethCount) * Math.PI * 2;
        const tooth = new THREE.Mesh(toothGeo, diskMat);
        tooth.position.set(Math.cos(angle) * (radius * 0.98), Math.sin(angle) * (radius * 0.98), 0);
        tooth.rotation.z = angle + Math.PI / 2;
        g.add(tooth);
      }
      return g;
    };

    // 1-g'ildirak: Kichik (Harbiy yetakchi, Z1 = 12 ta tish, r = 1.8)
    const gear1 = createGearMesh(1.8, 12, 0.7, 0x0284c7);
    gear1.position.set(-3.2, 0, 0);
    gearGroup.add(gear1);
    this.objects.gear1 = gear1;

    // 2-g'ildirak: O'rta oraliq (Z2 = 20 ta tish, r = 3.0)
    const gear2 = createGearMesh(3.0, 20, 0.7, 0x10b981);
    gear2.position.set(1.5, 0, 0);
    gearGroup.add(gear2);
    this.objects.gear2 = gear2;

    // 3-g'ildirak: Katta reduktor (Z3 = 28 ta tish, r = 4.2)
    const gear3 = createGearMesh(4.2, 28, 0.7, 0xf59e0b);
    gear3.position.set(-3.2, 5.8, 0);
    gearGroup.add(gear3);
    this.objects.gear3 = gear3;

    // Metall stend va vallar
    const standMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.7, roughness: 0.4 });
    const plateGeo = new THREE.BoxGeometry(11, 8.5, 0.4);
    const plate = new THREE.Mesh(plateGeo, standMat);
    plate.position.set(-0.8, 2.8, -0.6);
    gearGroup.add(plate);

    // Miller (Shafts)
    const shaftGeo = new THREE.CylinderGeometry(0.3, 0.3, 2, 16);
    shaftGeo.rotateX(Math.PI / 2);
    const shaftMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.95 });

    const s1 = new THREE.Mesh(shaftGeo, shaftMat); s1.position.copy(gear1.position); gearGroup.add(s1);
    const s2 = new THREE.Mesh(shaftGeo, shaftMat); s2.position.copy(gear2.position); gearGroup.add(s2);
    const s3 = new THREE.Mesh(shaftGeo, shaftMat); s3.position.copy(gear3.position); gearGroup.add(s3);
  }

  // ============================================================
  // 3. 4 TAKTLI ICHKI YONUV DVIGATELI (ENGINE)
  // ============================================================
  buildEngine() {
    this.clearScene();
    this.setupLights();
    this.addFloorGrid();

    this.cameraRadius = 16;
    this.cameraTarget.set(0, 3, 0);
    this.updateCameraPosition();

    const engineGroup = new THREE.Group();
    engineGroup.position.set(0, 2, 0);
    this.scene.add(engineGroup);
    this.objects.engineGroup = engineGroup;

    // Shaffof Silindr bloki
    const cylGeo = new THREE.CylinderGeometry(2.3, 2.3, 7, 32, 1, true);
    const cylMat = new THREE.MeshPhysicalMaterial({
      color: 0x64748b,
      transparent: true,
      opacity: 0.35,
      roughness: 0.1,
      metalness: 0.2,
      transmission: 0.8,
      ior: 1.5,
      side: THREE.DoubleSide
    });
    const cylMesh = new THREE.Mesh(cylGeo, cylMat);
    cylMesh.position.set(0, 4, 0);
    engineGroup.add(cylMesh);

    // Porshen (Piston)
    const pistonGeo = new THREE.CylinderGeometry(2.1, 2.1, 2.2, 32);
    const pistonMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.85, roughness: 0.2 });
    const piston = new THREE.Mesh(pistonGeo, pistonMat);
    piston.position.set(0, 4.5, 0);
    engineGroup.add(piston);
    this.objects.piston = piston;

    // Tirsakli val (Crankshaft)
    const crankPivot = new THREE.Group();
    crankPivot.position.set(0, 0, 0);
    engineGroup.add(crankPivot);
    this.objects.crankPivot = crankPivot;

    const crankWebGeo = new THREE.BoxGeometry(0.8, 2.8, 0.4);
    const crankMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.9, roughness: 0.25 });
    const crankWeb = new THREE.Mesh(crankWebGeo, crankMat);
    crankWeb.position.set(0, 0.8, 0);
    crankPivot.add(crankWeb);

    const crankPinGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.8, 16);
    crankPinGeo.rotateX(Math.PI / 2);
    const crankPin = new THREE.Mesh(crankPinGeo, crankMat);
    crankPin.position.set(0, 1.8, 0);
    crankPivot.add(crankPin);

    // Shatun (Connecting Rod)
    const rodGeo = new THREE.CylinderGeometry(0.32, 0.32, 4.2, 16);
    const rodMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.75, roughness: 0.3 });
    const rod = new THREE.Mesh(rodGeo, rodMat);
    engineGroup.add(rod);
    this.objects.rod = rod;

    // Shamcha (Spark Plug) tepada
    const plugGeo = new THREE.CylinderGeometry(0.3, 0.3, 1.2, 16);
    const plugMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.9 });
    const plug = new THREE.Mesh(plugGeo, plugMat);
    plug.position.set(0, 7.5, 0);
    engineGroup.add(plug);

    // Olov chaqnashi (Combustion fire sphere)
    const fireGeo = new THREE.SphereGeometry(1.6, 24, 24);
    const fireMat = new THREE.MeshBasicMaterial({ color: 0xff3b30, transparent: true, opacity: 0 });
    const fire = new THREE.Mesh(fireGeo, fireMat);
    fire.position.set(0, 6.2, 0);
    engineGroup.add(fire);
    this.objects.fire = fire;

    // Klapanlar (Intake & Exhaust valves)
    const valveGeo = new THREE.CylinderGeometry(0.6, 0.6, 0.2, 16);
    const stemGeo = new THREE.CylinderGeometry(0.12, 0.12, 1.5, 16);

    const vIn = new THREE.Group();
    vIn.add(new THREE.Mesh(valveGeo, new THREE.MeshStandardMaterial({ color: 0x3b82f6 })));
    const stem1 = new THREE.Mesh(stemGeo, new THREE.MeshStandardMaterial({ color: 0x94a3b8 }));
    stem1.position.y = 0.75;
    vIn.add(stem1);
    vIn.position.set(-1.1, 7.2, 0);
    engineGroup.add(vIn);
    this.objects.valveIn = vIn;

    const vEx = new THREE.Group();
    vEx.add(new THREE.Mesh(valveGeo, new THREE.MeshStandardMaterial({ color: 0x64748b })));
    const stem2 = new THREE.Mesh(stemGeo, new THREE.MeshStandardMaterial({ color: 0x94a3b8 }));
    stem2.position.y = 0.75;
    vEx.add(stem2);
    vEx.position.set(1.1, 7.2, 0);
    engineGroup.add(vEx);
    this.objects.valveEx = vEx;
  }

  updateEngineKinematics(dt) {
    if (!this.objects.crankPivot || !this.objects.piston || !this.objects.rod) return;

    const rpm = this.params.engineRpm;
    const radSpeed = (rpm * 2 * Math.PI) / 60;
    this.params.engineCrankAngle += radSpeed * dt;

    const theta = this.params.engineCrankAngle;
    this.objects.crankPivot.rotation.z = theta;

    const r = 1.8; // crank radius
    const l = 4.2; // rod length

    const crankX = -Math.sin(theta) * r;
    const crankY = Math.cos(theta) * r;

    // Piston vertical position
    const pistonY = crankY + Math.sqrt(l * l - crankX * crankX) + 1.2;
    this.objects.piston.position.y = pistonY;

    // Rod position & rotation
    const midX = crankX / 2;
    const midY = (crankY + pistonY) / 2;
    this.objects.rod.position.set(midX, midY, 0);
    this.objects.rod.rotation.z = Math.atan2(crankX, pistonY - crankY);

    // 4 takt fazasi (0 dan 4*PI gacha)
    const cycle = (theta % (Math.PI * 4) + Math.PI * 4) % (Math.PI * 4);
    const strokeIndex = Math.floor((cycle / (Math.PI * 4)) * 4); // 0, 1, 2, 3

    // Klapanlar va olov
    if (strokeIndex === 0) { // Intake: Valve In opens
      this.objects.valveIn.position.y = 6.7;
      this.objects.valveEx.position.y = 7.2;
      this.objects.fire.material.opacity = 0;
    } else if (strokeIndex === 1) { // Compression: both closed
      this.objects.valveIn.position.y = 7.2;
      this.objects.valveEx.position.y = 7.2;
      this.objects.fire.material.opacity = 0;
    } else if (strokeIndex === 2) { // Power: Spark & explosion!
      this.objects.valveIn.position.y = 7.2;
      this.objects.valveEx.position.y = 7.2;
      const tInStroke = (cycle - Math.PI * 2) / Math.PI;
      this.objects.fire.material.opacity = Math.max(0, 0.95 - tInStroke * 1.5);
      this.objects.fire.scale.setScalar(1 + Math.sin(tInStroke * Math.PI) * 0.4);
    } else { // Exhaust: Valve Ex opens
      this.objects.valveIn.position.y = 7.2;
      this.objects.valveEx.position.y = 6.7;
      this.objects.fire.material.opacity = 0;
    }

    // UI da takt ko'rsatkichini yangilash
    const strokeNames = [
      "1-takt: Kiritish (Intake) - Yoqilg'i kirmoqda",
      "2-takt: Siqish (Compression) - Porshen siqmoqda",
      "3-takt: Yonish / Ishchi yo'l (Power) - Shamcha uchquni!",
      "4-takt: Chiqarish (Exhaust) - Tutun chiqmoqda"
    ];
    const statusTextEl = document.getElementById('tech-status-text');
    if (statusTextEl && this.currentExp === 'engine') {
      statusTextEl.innerHTML = '<strong>' + strokeNames[strokeIndex] + '</strong> (RPM: ' + rpm + ')';
    }
  }

  // ============================================================
  // 4. 3D PRINTER (FDM ADDITIVE MANUFACTURING)
  // ============================================================
  build3DPrinter() {
    this.clearScene();
    this.setupLights();
    this.addFloorGrid();

    this.cameraRadius = 15;
    this.cameraTarget.set(0, 3, 0);
    this.updateCameraPosition();

    const printerGroup = new THREE.Group();
    printerGroup.position.set(0, 0.5, 0);
    this.scene.add(printerGroup);
    this.objects.printerGroup = printerGroup;

    // Metall ramka profillari (Alyuminiy ekstruziya)
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.9, roughness: 0.25 });
    const createBeam = (w, h, d, x, y, z) => {
      const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), frameMat);
      b.position.set(x, y, z);
      printerGroup.add(b);
      return b;
    };

    // Pastki ramka
    createBeam(8, 0.5, 0.5, 0, 0.25, 3.5);
    createBeam(8, 0.5, 0.5, 0, 0.25, -3.5);
    createBeam(0.5, 0.5, 7, -3.75, 0.25, 0);
    createBeam(0.5, 0.5, 7, 3.75, 0.25, 0);

    // Vertikal Z-ustunlar
    createBeam(0.6, 7.5, 0.6, -3.75, 4.0, 0);
    createBeam(0.6, 7.5, 0.6, 3.75, 4.0, 0);
    createBeam(8, 0.6, 0.6, 0, 7.75, 0);

    // Qizitish stoli (Heatbed)
    const bedGeo = new THREE.BoxGeometry(5.5, 0.25, 5.5);
    const bedMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.4 });
    const bed = new THREE.Mesh(bedGeo, bedMat);
    bed.position.set(0, 1.2, 0);
    printerGroup.add(bed);

    // X-o'qi ko'prigi (X-Gantry)
    const gantry = new THREE.Group();
    gantry.position.set(0, 3.5, 0);
    printerGroup.add(gantry);
    this.objects.gantry = gantry;

    const xRail = new THREE.Mesh(new THREE.BoxGeometry(7.5, 0.4, 0.4), frameMat);
    gantry.add(xRail);

    // Ekstruder kallagi (Print Head)
    const head = new THREE.Group();
    gantry.add(head);
    this.objects.printHead = head;

    const headBody = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 1.2), new THREE.MeshStandardMaterial({ color: 0xef4444, metalness: 0.5 }));
    head.add(headBody);

    // Nozzle (Latun konus)
    const nozzle = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.4, 16), new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.95 }));
    nozzle.position.set(0, -0.75, 0);
    nozzle.rotation.x = Math.PI;
    head.add(nozzle);

    // Chop etilayotgan 3D obyekt (Qatlam-qatlam o'suvchi geksagonal vaza)
    const printedGeo = new THREE.CylinderGeometry(1.4, 1.8, 0.1, 6, 1, false);
    const printedMat = new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.3, metalness: 0.1 });
    const printedObj = new THREE.Mesh(printedGeo, printedMat);
    printedObj.position.set(0, 1.35, 0);
    printerGroup.add(printedObj);
    this.objects.printedObj = printedObj;

    this.params.printProgress = 0.1;
  }

  update3DPrinter(dt) {
    if (!this.objects.printHead || !this.objects.printedObj) return;

    if (this.params.printerPrinting) {
      this.params.printProgress += dt * 0.05 * this.params.printerSpeed;
      if (this.params.printProgress > 1.0) {
        this.params.printProgress = 0.1; // qayta boshlash
      }

      // Ekstruder kallagi aylana bo'ylab harakatlanadi
      const t = this.clock.getElapsedTime() * 4 * this.params.printerSpeed;
      this.objects.printHead.position.x = Math.sin(t) * 1.5;
      this.objects.printHead.position.z = Math.cos(t) * 1.5;

      // Model balandligi o'sadi
      const height = this.params.printProgress * 2.8;
      this.objects.printedObj.scale.set(1, Math.max(0.05, height), 1);
      this.objects.printedObj.position.y = 1.3 + height / 2;

      // X-gantry model balandligiga qarab ko'tariladi
      this.objects.gantry.position.y = 1.35 + height + 0.9;
    }
  }

  // ============================================================
  // 5. SHAMOL TURBINASI VA YASHIL ENERGIYA (WIND TURBINE)
  // ============================================================
  buildWindTurbine() {
    this.clearScene();
    this.setupLights();
    this.addFloorGrid();

    this.cameraRadius = 22;
    this.cameraTarget.set(0, 6, 0);
    this.updateCameraPosition();

    const turbineGroup = new THREE.Group();
    turbineGroup.position.set(-2, 0, 0);
    this.scene.add(turbineGroup);
    this.objects.turbineGroup = turbineGroup;

    const towerMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.2, metalness: 0.1 });

    // Baland konussimon minora
    const towerGeo = new THREE.CylinderGeometry(0.5, 1.2, 12, 32);
    const tower = new THREE.Mesh(towerGeo, towerMat);
    tower.position.set(0, 6, 0);
    turbineGroup.add(tower);

    // Gondola (Generator qutisi)
    const nacelleGeo = new THREE.BoxGeometry(1.6, 1.4, 3.2);
    const nacelle = new THREE.Mesh(nacelleGeo, towerMat);
    nacelle.position.set(0, 12, 0.5);
    turbineGroup.add(nacelle);

    // Rotor va Kokil (Hub)
    const hubPivot = new THREE.Group();
    hubPivot.position.set(0, 12, 2.2);
    turbineGroup.add(hubPivot);
    this.objects.hubPivot = hubPivot;

    const hubCapGeo = new THREE.SphereGeometry(0.75, 24, 24);
    const hubCap = new THREE.Mesh(hubCapGeo, new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.7 }));
    hubPivot.add(hubCap);

    // 3 ta aerodinamik qanot (Blades)
    const bladeGeo = new THREE.ConeGeometry(0.45, 7.5, 16);
    bladeGeo.translate(0, 3.75, 0);
    const bladeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.1, roughness: 0.2 });

    for (let b = 0; b < 3; b++) {
      const angle = (b * Math.PI * 2) / 3;
      const blade = new THREE.Mesh(bladeGeo, bladeMat);
      blade.rotation.z = angle;
      hubPivot.add(blade);
    }

    // Ekologik Uy maketi (Elektr o'tkazgichlar bilan)
    const houseGroup = new THREE.Group();
    houseGroup.position.set(6, 0, 0);
    this.scene.add(houseGroup);

    // Uy korpusi
    const houseBody = new THREE.Mesh(new THREE.BoxGeometry(3.5, 2.2, 3.5), new THREE.MeshStandardMaterial({ color: 0xe2e8f0 }));
    houseBody.position.y = 1.1;
    houseGroup.add(houseBody);

    // Tom
    const roof = new THREE.Mesh(new THREE.ConeGeometry(2.8, 1.6, 4), new THREE.MeshStandardMaterial({ color: 0xef4444 }));
    roof.position.y = 2.9;
    roof.rotation.y = Math.PI / 4;
    houseGroup.add(roof);

    // Yonayotgan derazalar
    const winMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });
    const win1 = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.8), winMat);
    win1.position.set(0, 1.2, 1.76);
    houseGroup.add(win1);
    this.objects.houseLight = winMat;

    // Ko'cha chirog'i (Lantern)
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 3.5, 12), towerMat);
    pole.position.set(3, 1.75, 3);
    this.scene.add(pole);

    const lampMat = new THREE.MeshBasicMaterial({ color: 0xfacc15 });
    const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 16), lampMat);
    lamp.position.set(3, 3.5, 3);
    this.scene.add(lamp);
    this.objects.streetLamp = lampMat;
  }

  updateWindTurbine(dt) {
    if (!this.objects.hubPivot) return;

    // Shamol tezligiga qarab aylanish
    const rotSpeed = this.params.windSpeed * 0.12;
    this.objects.hubPivot.rotation.z += rotSpeed * dt;

    // Quvvat hisoblash (P = 0.5 * rho * A * v^3)
    const power = Math.round(Math.pow(this.params.windSpeed, 2.6) * 2.2);
    this.params.powerOutput = Math.min(2500, power);

    // Lampalar porlashi shamol quvvatiga bog'liq
    const intensity = Math.min(1.0, power / 400);
    if (this.objects.houseLight) {
      this.objects.houseLight.color.setRGB(1 * intensity, 0.95 * intensity, 0.5 * intensity);
    }
    if (this.objects.streetLamp) {
      this.objects.streetLamp.color.setRGB(1 * intensity, 0.8 * intensity, 0.1 * intensity);
    }

    // UI dagi quvvatni yangilash
    const statusTextEl = document.getElementById('tech-status-text');
    if (statusTextEl && this.currentExp === 'wind-turbine') {
      statusTextEl.innerHTML = '<strong>Shamol: ' + this.params.windSpeed + ' m/s</strong> &bull; Quvvat: <span style="color:#fbbf24; font-weight:800;">' + this.params.powerOutput + ' kVt</span>';
    }
  }

  // ============================================================
  // TAJRIBANI YUKLASH VA BOSHQARISH
  // ============================================================
  loadExperiment(type) {
    this.currentExp = type;

    // Sidebar faol elementini yangilash
    const items = document.querySelectorAll('#technology-experiment-list .experiment-item');
    items.forEach(el => {
      el.classList.toggle('active', el.getAttribute('data-experiment') === type);
    });

    if (type === 'robot-arm') {
      this.buildRobotArm();
    } else if (type === 'gears') {
      this.buildGears();
    } else if (type === 'engine') {
      this.buildEngine();
    } else if (type === '3d-printer') {
      this.build3DPrinter();
    } else if (type === 'wind-turbine') {
      this.buildWindTurbine();
    }

    if (typeof window.updateLabExplanation === 'function') {
      window.updateLabExplanation('technology', type, this.isRunning);
    }
  }

  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());

    const dt = this.clock ? this.clock.getDelta() : 0.016;

    if (this.isRunning) {
      if (this.currentExp === 'robot-arm') {
        if (this.params.robotAutoCycle) {
          this.params.robotCycleTime += dt;
          const t = this.params.robotCycleTime;
          // Avtomatik ko'chirish sikli
          this.params.robotBaseAngle = Math.sin(t * 0.8) * 60;
          this.params.robotArmAngle = 20 + Math.sin(t * 1.2) * 20;
          this.params.robotForearmAngle = 40 + Math.cos(t * 1.2) * 25;
          this.params.gripperOpen = (Math.sin(t * 0.8) > 0);
          this.updateRobotPositions();
        }
      } else if (this.currentExp === 'gears') {
        if (this.objects.gear1 && this.objects.gear2 && this.objects.gear3) {
          const spd = ((this.params.gearSpeed * 2 * Math.PI) / 60) * this.params.gearDirection;
          this.objects.gear1.rotation.z += spd * dt;
          this.objects.gear2.rotation.z -= (spd * (12 / 20)) * dt;
          this.objects.gear3.rotation.z += (spd * (12 / 28)) * dt;
        }
      } else if (this.currentExp === 'engine') {
        this.updateEngineKinematics(dt);
      } else if (this.currentExp === '3d-printer') {
        this.update3DPrinter(dt);
      } else if (this.currentExp === 'wind-turbine') {
        this.updateWindTurbine(dt);
      }
    }

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }
}

// Global instansiya va chaqiruvchi funksiyalar
window.technologyLabInstance = null;

window.initTechnologyLab = function() {
  if (!window.technologyLabInstance) {
    window.technologyLabInstance = new TechnologyLab('technology-canvas-container');
    window.technologyLabInstance.init();
  } else {
    window.technologyLabInstance.onWindowResize();
  }
};

window.selectTechnologyExperiment = function(type) {
  if (window.technologyLabInstance) {
    window.technologyLabInstance.loadExperiment(type);
  }
};

window.startTechnologyExperiment = function() {
  if (window.technologyLabInstance) {
    window.technologyLabInstance.isRunning = true;
    if (typeof window.updateLabExplanation === 'function') {
      window.updateLabExplanation('technology', window.technologyLabInstance.currentExp, true);
    }
  }
};

window.pauseTechnologyExperiment = function() {
  if (window.technologyLabInstance) {
    window.technologyLabInstance.isRunning = false;
    if (typeof window.updateLabExplanation === 'function') {
      window.updateLabExplanation('technology', window.technologyLabInstance.currentExp, false);
    }
  }
};

window.resetTechnologyExperiment = function() {
  if (window.technologyLabInstance) {
    window.technologyLabInstance.loadExperiment(window.technologyLabInstance.currentExp);
  }
};

// Maxsus interaktiv funksiyalar
window.setRobotArmAngle = function(param, val) {
  if (!window.technologyLabInstance) return;
  window.technologyLabInstance.params[param] = parseFloat(val);
  window.technologyLabInstance.updateRobotPositions();
};

window.toggleRobotGripper = function() {
  if (!window.technologyLabInstance) return;
  window.technologyLabInstance.params.gripperOpen = !window.technologyLabInstance.params.gripperOpen;
  window.technologyLabInstance.updateRobotPositions();
};

window.toggleRobotAutoCycle = function() {
  if (!window.technologyLabInstance) return;
  window.technologyLabInstance.params.robotAutoCycle = !window.technologyLabInstance.params.robotAutoCycle;
};

window.setGearSpeed = function(val) {
  if (!window.technologyLabInstance) return;
  window.technologyLabInstance.params.gearSpeed = parseFloat(val);
};

window.setEngineRpm = function(val) {
  if (!window.technologyLabInstance) return;
  window.technologyLabInstance.params.engineRpm = parseFloat(val);
};

window.setWindSpeed = function(val) {
  if (!window.technologyLabInstance) return;
  window.technologyLabInstance.params.windSpeed = parseFloat(val);
};
