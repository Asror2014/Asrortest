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

    // Gripper markaziy ushlash nuqtasi (anchor)
    const gripperTip = new THREE.Object3D();
    gripperTip.position.set(0, 0.6, 0);
    gripperGroup.add(gripperTip);
    this.objects.gripperTip = gripperTip;

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

    // Platformalar (Pad A va Pad B - neon indikatorli metall disklar)
    const padGeo = new THREE.CylinderGeometry(1.6, 1.8, 0.25, 32);
    const padMatA = new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.4, metalness: 0.3 });
    const padA = new THREE.Mesh(padGeo, padMatA);
    padA.position.set(-6.4, 0.12, 0);
    this.scene.add(padA);

    // Yashil Pad A neon halqasi
    const ringGeo = new THREE.RingGeometry(1.65, 1.85, 32);
    ringGeo.rotateX(-Math.PI / 2);
    const ringMatA = new THREE.MeshBasicMaterial({ color: 0x34d399, side: THREE.DoubleSide });
    const ringA = new THREE.Mesh(ringGeo, ringMatA);
    ringA.position.set(-6.4, 0.26, 0);
    this.scene.add(ringA);

    // Pad B (ko'k platforma)
    const padMatB = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.4, metalness: 0.3 });
    const padB = new THREE.Mesh(padGeo, padMatB);
    padB.position.set(6.4, 0.12, 0);
    this.scene.add(padB);

    // Ko'k Pad B neon halqasi
    const ringMatB = new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide });
    const ringB = new THREE.Mesh(ringGeo, ringMatB);
    ringB.position.set(6.4, 0.26, 0);
    this.scene.add(ringB);

    // Yuk (Konteyner kubik - oltin-sariq sanoat detali)
    const cargoGeo = new THREE.BoxGeometry(0.9, 0.9, 0.9);
    const cargoMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.25, metalness: 0.4 });
    const cargo = new THREE.Mesh(cargoGeo, cargoMat);
    cargo.position.set(-6.4, 0.55, 0);
    this.scene.add(cargo);
    this.objects.cargo = cargo;

    // Robot holati (Pick & Place avtomatik sikl)
    this.robotState = {
      phase: 0,
      timer: 0,
      cargoHeld: false
    };

    // Boshlang'ich parametrlar
    this.params.robotBaseAngle = 180;
    this.params.robotArmAngle = 22;
    this.params.robotForearmAngle = 28;
    this.params.gripperOpen = true;

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
      const offset = this.params.gripperOpen ? 0.45 : 0.18;
      this.objects.fingerLeft.position.x = -offset;
      this.objects.fingerRight.position.x = offset;
    }

    // Agar yuk (cargo) qisqich tomonidan ushlangan bo'lsa, qisqich bilan birga 3D fazoda ko'chiriladi!
    if (this.robotState && this.robotState.cargoHeld && this.objects.cargo && this.objects.gripperTip) {
      this.scene.updateMatrixWorld(true);
      const tipWorldPos = new THREE.Vector3();
      this.objects.gripperTip.getWorldPosition(tipWorldPos);
      this.objects.cargo.position.copy(tipWorldPos);
      this.objects.cargo.rotation.y = baseRad;
    }
  }

  // Mukammal 16 bosqichli haqiqiy sanoat Pick & Place sikli (Pad A -> Pad B -> Pad A)
  updateRobotPickAndPlace(dt) {
    if (!this.robotState) {
      this.robotState = { phase: 0, timer: 0, cargoHeld: false };
    }
    const st = this.robotState;
    st.timer += dt;

    const ease = (t) => t < 0 ? 0 : t > 1 ? 1 : t * t * (3 - 2 * t);
    const lerp = (a, b, t) => a + (b - a) * t;

    switch (st.phase) {
      case 0: { // 1.5s: Pad A (yashil) tomon tushish
        const dur = 1.5;
        const p = ease(st.timer / dur);
        this.params.robotBaseAngle = 180;
        this.params.robotArmAngle = lerp(22, 55, p);
        this.params.robotForearmAngle = lerp(28, 89, p);
        this.params.gripperOpen = true;
        st.cargoHeld = false;
        if (this.objects.cargo) this.objects.cargo.position.set(-6.4, 0.55, 0);
        if (st.timer >= dur) {
          st.phase = 1;
          st.timer = 0;
        }
        break;
      }
      case 1: { // 0.8s: Qisqichni mahkam yopish (Pad A da yukni ushlash)
        const dur = 0.8;
        const p = ease(st.timer / dur);
        this.params.robotBaseAngle = 180;
        this.params.robotArmAngle = 55;
        this.params.robotForearmAngle = 89;
        this.params.gripperOpen = false;
        if (this.objects.fingerLeft && this.objects.fingerRight) {
          const off = lerp(0.45, 0.18, p);
          this.objects.fingerLeft.position.x = -off;
          this.objects.fingerRight.position.x = off;
        }
        if (st.timer >= dur) {
          st.cargoHeld = true; // Yuk ushlandi!
          st.phase = 2;
          st.timer = 0;
        }
        break;
      }
      case 2: { // 1.2s: Yukni havoga ko'tarish
        const dur = 1.3;
        const p = ease(st.timer / dur);
        this.params.robotBaseAngle = 180;
        this.params.robotArmAngle = lerp(55, 22, p);
        this.params.robotForearmAngle = lerp(89, 28, p);
        this.params.gripperOpen = false;
        st.cargoHeld = true;
        if (st.timer >= dur) {
          st.phase = 3;
          st.timer = 0;
        }
        break;
      }
      case 3: { // 2.2s: Bazani 180° dan 0° ga burish - yuk Pad B ga eltilyapti!
        const dur = 2.4;
        const p = ease(st.timer / dur);
        this.params.robotBaseAngle = lerp(180, 0, p);
        this.params.robotArmAngle = 22 + Math.sin(p * Math.PI) * 4;
        this.params.robotForearmAngle = 28;
        this.params.gripperOpen = false;
        st.cargoHeld = true;
        if (st.timer >= dur) {
          this.params.robotBaseAngle = 0;
          st.phase = 4;
          st.timer = 0;
        }
        break;
      }
      case 4: { // 1.5s: Yukni Pad B (ko'k) platformasiga tushirish
        const dur = 1.5;
        const p = ease(st.timer / dur);
        this.params.robotBaseAngle = 0;
        this.params.robotArmAngle = lerp(22, 55, p);
        this.params.robotForearmAngle = lerp(28, 89, p);
        this.params.gripperOpen = false;
        st.cargoHeld = true;
        if (st.timer >= dur) {
          st.phase = 5;
          st.timer = 0;
        }
        break;
      }
      case 5: { // 0.8s: Qisqichni ochish - yuk Pad B da qoladi!
        const dur = 0.8;
        const p = ease(st.timer / dur);
        this.params.robotBaseAngle = 0;
        this.params.robotArmAngle = 55;
        this.params.robotForearmAngle = 89;
        this.params.gripperOpen = true;
        st.cargoHeld = false; // Detal Pad B ga joylashtirildi!
        if (this.objects.cargo) this.objects.cargo.position.set(6.4, 0.55, 0);
        if (this.objects.fingerLeft && this.objects.fingerRight) {
          const off = lerp(0.18, 0.45, p);
          this.objects.fingerLeft.position.x = -off;
          this.objects.fingerRight.position.x = off;
        }
        if (st.timer >= dur) {
          st.phase = 6;
          st.timer = 0;
        }
        break;
      }
      case 6: { // 1.2s: Bo'sh qo'lni yuqoriga ko'tarish
        const dur = 1.3;
        const p = ease(st.timer / dur);
        this.params.robotBaseAngle = 0;
        this.params.robotArmAngle = lerp(55, 22, p);
        this.params.robotForearmAngle = lerp(89, 28, p);
        this.params.gripperOpen = true;
        st.cargoHeld = false;
        if (this.objects.cargo) this.objects.cargo.position.set(6.4, 0.55, 0);
        if (st.timer >= dur) {
          st.phase = 7;
          st.timer = 0;
        }
        break;
      }
      case 7: { // 1.0s: To'xtab turish (o'quvchi ko'chirilgan yukni ko'rishi uchun)
        const dur = 1.0;
        this.params.robotBaseAngle = 0;
        this.params.robotArmAngle = 22;
        this.params.robotForearmAngle = 28;
        this.params.gripperOpen = true;
        st.cargoHeld = false;
        if (this.objects.cargo) this.objects.cargo.position.set(6.4, 0.55, 0);
        if (st.timer >= dur) {
          st.phase = 8;
          st.timer = 0;
        }
        break;
      }
      case 8: { // 1.5s: Yukni qaytarib olish uchun Pad B ga tushish
        const dur = 1.5;
        const p = ease(st.timer / dur);
        this.params.robotBaseAngle = 0;
        this.params.robotArmAngle = lerp(22, 55, p);
        this.params.robotForearmAngle = lerp(28, 89, p);
        this.params.gripperOpen = true;
        st.cargoHeld = false;
        if (this.objects.cargo) this.objects.cargo.position.set(6.4, 0.55, 0);
        if (st.timer >= dur) {
          st.phase = 9;
          st.timer = 0;
        }
        break;
      }
      case 9: { // 0.8s: Qisqichni Pad B da yuk atrofida yopish
        const dur = 0.8;
        const p = ease(st.timer / dur);
        this.params.robotBaseAngle = 0;
        this.params.robotArmAngle = 55;
        this.params.robotForearmAngle = 89;
        this.params.gripperOpen = false;
        if (this.objects.fingerLeft && this.objects.fingerRight) {
          const off = lerp(0.45, 0.18, p);
          this.objects.fingerLeft.position.x = -off;
          this.objects.fingerRight.position.x = off;
        }
        if (st.timer >= dur) {
          st.cargoHeld = true; // Yuk yana ushlandi!
          st.phase = 10;
          st.timer = 0;
        }
        break;
      }
      case 10: { // 1.2s: Yukni yuqoriga ko'tarish
        const dur = 1.3;
        const p = ease(st.timer / dur);
        this.params.robotBaseAngle = 0;
        this.params.robotArmAngle = lerp(55, 22, p);
        this.params.robotForearmAngle = lerp(89, 28, p);
        this.params.gripperOpen = false;
        st.cargoHeld = true;
        if (st.timer >= dur) {
          st.phase = 11;
          st.timer = 0;
        }
        break;
      }
      case 11: { // 2.2s: Bazani 0° dan 180° ga burish - yukni Pad A ga qaytarish!
        const dur = 2.4;
        const p = ease(st.timer / dur);
        this.params.robotBaseAngle = lerp(0, 180, p);
        this.params.robotArmAngle = 22 + Math.sin(p * Math.PI) * 4;
        this.params.robotForearmAngle = 28;
        this.params.gripperOpen = false;
        st.cargoHeld = true;
        if (st.timer >= dur) {
          this.params.robotBaseAngle = 180;
          st.phase = 12;
          st.timer = 0;
        }
        break;
      }
      case 12: { // 1.5s: Yukni Pad A ga ehtiyotkorlik bilan tushirish
        const dur = 1.5;
        const p = ease(st.timer / dur);
        this.params.robotBaseAngle = 180;
        this.params.robotArmAngle = lerp(22, 55, p);
        this.params.robotForearmAngle = lerp(28, 89, p);
        this.params.gripperOpen = false;
        st.cargoHeld = true;
        if (st.timer >= dur) {
          st.phase = 13;
          st.timer = 0;
        }
        break;
      }
      case 13: { // 0.8s: Qisqichni ochish - yuk Pad A da qoladi!
        const dur = 0.8;
        const p = ease(st.timer / dur);
        this.params.robotBaseAngle = 180;
        this.params.robotArmAngle = 55;
        this.params.robotForearmAngle = 89;
        this.params.gripperOpen = true;
        st.cargoHeld = false;
        if (this.objects.cargo) this.objects.cargo.position.set(-6.4, 0.55, 0);
        if (this.objects.fingerLeft && this.objects.fingerRight) {
          const off = lerp(0.18, 0.45, p);
          this.objects.fingerLeft.position.x = -off;
          this.objects.fingerRight.position.x = off;
        }
        if (st.timer >= dur) {
          st.phase = 14;
          st.timer = 0;
        }
        break;
      }
      case 14: { // 1.2s: Bo'sh qo'lni yuqoriga ko'tarish
        const dur = 1.3;
        const p = ease(st.timer / dur);
        this.params.robotBaseAngle = 180;
        this.params.robotArmAngle = lerp(55, 22, p);
        this.params.robotForearmAngle = lerp(89, 28, p);
        this.params.gripperOpen = true;
        st.cargoHeld = false;
        if (this.objects.cargo) this.objects.cargo.position.set(-6.4, 0.55, 0);
        if (st.timer >= dur) {
          st.phase = 15;
          st.timer = 0;
        }
        break;
      }
      case 15: { // 1.0s: To'xtab turish va siklni cheksiz takrorlash!
        const dur = 1.0;
        this.params.robotBaseAngle = 180;
        this.params.robotArmAngle = 22;
        this.params.robotForearmAngle = 28;
        this.params.gripperOpen = true;
        st.cargoHeld = false;
        if (this.objects.cargo) this.objects.cargo.position.set(-6.4, 0.55, 0);
        if (st.timer >= dur) {
          st.phase = 0;
          st.timer = 0;
        }
        break;
      }
    }

    this.updateRobotPositions();
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
  // 4. 3D PRINTER (FDM ADDITIVE MANUFACTURING - 3D CHOP ETISH)
  // Haqiqiy 28 qatlamli 30-Maktab G'alaba Kubogi bosilishi
  // ============================================================
  build3DPrinter() {
    this.clearScene();
    this.setupLights();
    this.addFloorGrid();

    this.cameraRadius = 14;
    this.cameraTarget.set(0, 2.8, 0);
    this.theta = 0.85;
    this.phi = 1.15;
    this.updateCameraPosition();

    const printerGroup = new THREE.Group();
    printerGroup.position.set(0, 0.4, 0);
    this.scene.add(printerGroup);
    this.objects.printerGroup = printerGroup;

    // Filament ranglar palitrasi
    this.filamentPresets = [
      { name: "Oltin (Silk Gold PLA)", hex: 0xf59e0b, emissive: 0xb45309, metalness: 0.88, roughness: 0.2 },
      { name: "Zumrad (Emerald Silk PLA)", hex: 0x10b981, emissive: 0x059669, metalness: 0.72, roughness: 0.25 },
      { name: "Sapfir (Cyan Blue PLA)", hex: 0x06b6d4, emissive: 0x0891b2, metalness: 0.75, roughness: 0.22 },
      { name: "Yoqut (Ruby Red PLA)", hex: 0xf43f5e, emissive: 0xe11d48, metalness: 0.7, roughness: 0.25 },
      { name: "Siyohrang (Neon Purple PLA)", hex: 0xa855f7, emissive: 0x9333ea, metalness: 0.8, roughness: 0.2 }
    ];
    if (this.currentFilamentIdx === undefined) this.currentFilamentIdx = 0;
    const curFilament = this.filamentPresets[this.currentFilamentIdx];

    // Metall ramka profillari (Alyuminiy ekstruziya 4040/2040)
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.9, roughness: 0.25 });
    const silverMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.95, roughness: 0.15 });
    const brassMat = new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.95, roughness: 0.2 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.6 });

    const createBeam = (w, h, d, x, y, z) => {
      const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), frameMat);
      b.position.set(x, y, z);
      printerGroup.add(b);
      return b;
    };

    // Pastki taglik ramkasi
    createBeam(8.2, 0.5, 0.5, 0, 0.25, 3.5);
    createBeam(8.2, 0.5, 0.5, 0, 0.25, -3.5);
    createBeam(0.5, 0.5, 7.5, -3.85, 0.25, 0);
    createBeam(0.5, 0.5, 7.5, 3.85, 0.25, 0);

    // Rezina oyoqchalar
    const footMat = new THREE.MeshStandardMaterial({ color: 0x020617, roughness: 0.9 });
    [[-3.7, 3.4], [3.7, 3.4], [-3.7, -3.4], [3.7, -3.4]].forEach(([fx, fz]) => {
      const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.4, 0.15, 16), footMat);
      foot.position.set(fx, 0.075, fz);
      printerGroup.add(foot);
    });

    // Vertikal Z-ustunlar (Chap va O'ng)
    createBeam(0.65, 7.8, 0.65, -3.8, 4.15, 0);
    createBeam(0.65, 7.8, 0.65, 3.8, 4.15, 0);
    createBeam(8.25, 0.65, 0.65, 0, 8.05, 0); // Yuqori to'sin

    // Z-o'qi aylanuvchi vintlari (Lead-screws T8)
    const leftScrew = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 7.4, 16), silverMat);
    leftScrew.position.set(-3.25, 4.0, 0);
    printerGroup.add(leftScrew);
    this.objects.leftLeadScrew = leftScrew;

    const rightScrew = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 7.4, 16), silverMat);
    rightScrew.position.set(3.25, 4.0, 0);
    printerGroup.add(rightScrew);
    this.objects.rightLeadScrew = rightScrew;

    // Z Stepper motorlari pastda
    const lMotor = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.9, 0.9), darkMat);
    lMotor.position.set(-3.25, 0.5, 0);
    printerGroup.add(lMotor);

    const rMotor = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.9, 0.9), darkMat);
    rMotor.position.set(3.25, 0.5, 0);
    printerGroup.add(rMotor);

    // Filament g'altagi (Spool) yuqori to'sinda
    const spoolGroup = new THREE.Group();
    spoolGroup.position.set(2.2, 9.1, 0);
    printerGroup.add(spoolGroup);

    const spoolRollMat = new THREE.MeshStandardMaterial({
      color: curFilament.hex,
      metalness: curFilament.metalness,
      roughness: curFilament.roughness
    });
    const spoolRoll = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 0.95, 0.6, 24), spoolRollMat);
    spoolRoll.rotation.x = Math.PI * 0.5;
    spoolGroup.add(spoolRoll);
    this.objects.spoolRoll = spoolRoll;

    const spoolFlangeMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.3 });
    const f1 = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 0.04, 24), spoolFlangeMat);
    f1.position.z = 0.32;
    f1.rotation.x = Math.PI * 0.5;
    spoolGroup.add(f1);
    const f2 = f1.clone();
    f2.position.z = -0.32;
    spoolGroup.add(f2);

    // Y-o'qi relslari va qizdiriladigan termo-stol (Heatbed)
    const yRail1 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 7.0, 16), silverMat);
    yRail1.rotation.x = Math.PI * 0.5;
    yRail1.position.set(-1.8, 0.9, 0);
    printerGroup.add(yRail1);

    const yRail2 = yRail1.clone();
    yRail2.position.x = 1.8;
    printerGroup.add(yRail2);

    // Stol asosi va 4 ta latun buraluvchi sozlash g'ildirakchalari
    const bedBase = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.1, 5.2), frameMat);
    bedBase.position.set(0, 1.05, 0);
    printerGroup.add(bedBase);

    [[-2.1, 2.1], [2.1, 2.1], [-2.1, -2.1], [2.1, -2.1]].forEach(([bx, bz]) => {
      const knob = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.12, 16), brassMat);
      knob.position.set(bx, 1.15, bz);
      printerGroup.add(knob);
    });

    // Qizitish stoli (Heatbed) - Y-o'qi bo'yicha siljiydi
    const bed = new THREE.Group();
    bed.position.set(0, 1.25, 0);
    printerGroup.add(bed);
    this.objects.bed = bed;

    // Magnit PEI plastinka
    const bedPlate = new THREE.Mesh(
      new THREE.BoxGeometry(5.6, 0.2, 5.6),
      new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.55, metalness: 0.15 })
    );
    bed.add(bedPlate);

    // PEI sirtidagi nozik tilla hoshiya
    const bedBorder = new THREE.Mesh(
      new THREE.BoxGeometry(5.3, 0.01, 5.3),
      new THREE.MeshBasicMaterial({ color: 0x3f3f46, wireframe: true })
    );
    bedBorder.position.y = 0.105;
    bed.add(bedBorder);

    // X-o'qi ko'prigi (X-Gantry) - Z bo'yicha yuqoriga qadamlaydi
    const gantry = new THREE.Group();
    gantry.position.set(0, 2.41, 0);
    printerGroup.add(gantry);
    this.objects.gantry = gantry;

    const xRail = new THREE.Mesh(new THREE.BoxGeometry(7.6, 0.45, 0.45), frameMat);
    gantry.add(xRail);

    // Z-vint latun gaykalari
    const leftNut = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.4, 12), brassMat);
    leftNut.position.set(-3.25, 0, 0);
    gantry.add(leftNut);
    const rightNut = leftNut.clone();
    rightNut.position.x = 3.25;
    gantry.add(rightNut);

    // Ekstruder kallagi (Print Head Carriage)
    const head = new THREE.Group();
    gantry.add(head);
    this.objects.printHead = head;

    // Ekstruder sovutgichi (Qizil alyuminiy radiator)
    const headBody = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.8, 1.0), new THREE.MeshStandardMaterial({ color: 0xef4444, metalness: 0.6, roughness: 0.3 }));
    head.add(headBody);

    // Ekstruder stepper motori
    const headMotor = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.9, 0.8), darkMat);
    headMotor.position.set(0, 0.55, -0.2);
    head.add(headMotor);

    // Shamollatish kanali (Part Cooling Duct)
    const fanDuct = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.6, 0.4), new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.4 }));
    fanDuct.position.set(0, -0.15, 0.55);
    head.add(fanDuct);

    // Qizdiruvchi latun blok (Heater Block)
    const heaterBlock = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.32, 0.5), brassMat);
    heaterBlock.position.set(0, -0.55, 0);
    head.add(heaterBlock);

    // Latun konus Nozzle (Nozzle uchi local y = -0.95 da)
    const nozzle = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.35, 16), brassMat);
    nozzle.position.set(0, -0.775, 0);
    nozzle.rotation.x = Math.PI;
    head.add(nozzle);

    // Eritilgan filament tomchisi (Nozzle uchida porlaydi)
    const nozzleBead = new THREE.Mesh(
      new THREE.SphereGeometry(0.08, 12, 12),
      new THREE.MeshBasicMaterial({ color: curFilament.hex })
    );
    nozzleBead.position.set(0, -0.95, 0);
    head.add(nozzleBead);
    this.objects.nozzleBead = nozzleBead;

    // Nozzle issiqlik yoritgichi (PointLight)
    const nozzleGlow = new THREE.PointLight(curFilament.hex, 1.8, 3.5);
    nozzleGlow.position.set(0, -0.95, 0);
    head.add(nozzleGlow);
    this.objects.nozzleGlow = nozzleGlow;

    // ============================================================
    // CHOP ETILADIGAN HAQIQIY 3D OBYEKT:
    // "30-Maktab G'alaba Kubogi" (28 ta alohida 3D qatlam)
    // ============================================================
    const trophyGroup = new THREE.Group();
    trophyGroup.position.set(0, 0.10, 0); // To'g'ridan-to'g'ri stol yuzasida
    bed.add(trophyGroup);
    this.objects.trophyGroup = trophyGroup;

    const layerMat = new THREE.MeshStandardMaterial({
      color: curFilament.hex,
      metalness: curFilament.metalness,
      roughness: curFilament.roughness
    });
    this.filamentMaterial = layerMat;

    // 28 ta qatlamning geometrik radiusi
    const radii = [
      // 0-3: Taglik poydevori (Hexagonal plinth)
      2.0, 1.9, 1.75, 1.55,
      // 4-6: Poydevor bo'yni
      1.35, 1.15, 0.95,
      // 7-11: Nozik ustun (Waist / Column)
      0.82, 0.74, 0.70, 0.75, 0.86,
      // 12-14: Kosa kengayishi
      1.10, 1.38, 1.65,
      // 15-22: Spiral qovurg'ali g'alaba kubogi tanasi
      1.80, 1.92, 1.98, 2.00, 1.96, 1.88, 1.80, 1.74,
      // 23-25: Bezakli tojbarg hoshiyasi (Rim)
      1.88, 2.05, 1.98,
      // 26-27: Ichki yulduz poydevori
      1.45, 1.15
    ];

    this.layerMeshes = [];
    for (let i = 0; i < 28; i++) {
      const r = radii[i];
      let segments = 12;
      if (i < 4) segments = 8;
      else if (i >= 23 && i <= 25) segments = 16;

      const layerGeo = new THREE.CylinderGeometry(r, r, 0.11, segments, 1, false);
      const layerMesh = new THREE.Mesh(layerGeo, layerMat);
      const layerY = i * 0.11 + 0.055;
      layerMesh.position.set(0, layerY, 0);

      // Kubok tanasidagi nafis spiral burilish
      if (i >= 15 && i <= 22) {
        layerMesh.rotation.y = (i - 15) * 0.16;
      }

      layerMesh.visible = false;
      trophyGroup.add(layerMesh);
      this.layerMeshes.push(layerMesh);
    }

    // Kubok yon quloqchalari (Handles)
    const leftHandle = new THREE.Mesh(new THREE.TorusGeometry(0.72, 0.09, 12, 24, Math.PI * 1.15), layerMat);
    leftHandle.position.set(-1.95, 2.35, 0);
    leftHandle.rotation.z = Math.PI * 0.5;
    leftHandle.visible = false;
    trophyGroup.add(leftHandle);
    this.objects.trophyLeftHandle = leftHandle;

    const rightHandle = new THREE.Mesh(new THREE.TorusGeometry(0.72, 0.09, 12, 24, Math.PI * 1.15), layerMat);
    rightHandle.position.set(1.95, 2.35, 0);
    rightHandle.rotation.z = -Math.PI * 0.5;
    rightHandle.visible = false;
    trophyGroup.add(rightHandle);
    this.objects.trophyRightHandle = rightHandle;

    // Kubok cho'qqisidagi porloq G'alaba Yulduzi (Star Emblem)
    const starGeo = new THREE.OctahedronGeometry(0.72, 0);
    const starMat = new THREE.MeshStandardMaterial({
      color: 0xfbbf24,
      metalness: 0.95,
      roughness: 0.15,
      emissive: 0xd97706,
      emissiveIntensity: 0.35
    });
    const trophyStar = new THREE.Mesh(starGeo, starMat);
    trophyStar.position.set(0, 28 * 0.11 + 0.42, 0);
    trophyStar.visible = false;
    trophyGroup.add(trophyStar);
    this.objects.trophyStar = trophyStar;

    // 3D Printer holati
    this.printerState = {
      currentLayer: 0,
      layerProgress: 0,
      totalLayers: 28,
      isFinished: false,
      speedMultiplier: 2.5
    };
    this.params.printerPrinting = true;
  }

  getLayerRadius(idx) {
    const radii = [
      2.0, 1.9, 1.75, 1.55,
      1.35, 1.15, 0.95,
      0.82, 0.74, 0.70, 0.75, 0.86,
      1.10, 1.38, 1.65,
      1.80, 1.92, 1.98, 2.00, 1.96, 1.88, 1.80, 1.74,
      1.88, 2.05, 1.98,
      1.45, 1.15
    ];
    if (idx >= 0 && idx < radii.length) return radii[idx];
    return 1.5;
  }

  update3DPrinter(dt) {
    if (!this.objects.printHead || !this.objects.gantry || !this.objects.bed) return;

    const state = this.printerState;
    if (!state) return;

    // Agar model to'liq bosib tugatilgan bo'lsa
    if (state.isFinished) {
      if (this.objects.trophyGroup) {
        this.objects.trophyGroup.rotation.y += dt * 0.6; // Tayyor kubok aylanib ko'rsatiladi
      }
      if (this.objects.trophyStar) {
        this.objects.trophyStar.rotation.x += dt * 0.8;
        this.objects.trophyStar.rotation.y += dt * 1.2;
      }
      // Gantry yuqoriga chiqib turadi, stol oldinga siljiydi
      this.objects.gantry.position.y += (6.8 - this.objects.gantry.position.y) * Math.min(1, dt * 3);
      this.objects.bed.position.z += (1.4 - this.objects.bed.position.z) * Math.min(1, dt * 3);
      this.objects.printHead.position.x += (0 - this.objects.printHead.position.x) * Math.min(1, dt * 3);
      return;
    }

    if (!this.isRunning || !this.params.printerPrinting) {
      if (this.objects.nozzleGlow) this.objects.nozzleGlow.intensity = 0.4;
      return;
    }

    // Chop etish jarayoni
    const curLayer = state.currentLayer;
    const totalLayers = state.totalLayers;

    // Qatlam bo'yicha progress
    state.layerProgress += dt * 0.55 * state.speedMultiplier;

    // Ekstruder koordinatalari
    const R = this.getLayerRadius(curLayer);
    const theta = state.layerProgress * Math.PI * 2 * 2; // 2 marta aylanadi (kontur + to'ldirish)

    // X-ekstruder va Y-stol koordinatalari
    const targetX = Math.cos(theta) * R;
    const targetZ = -Math.sin(theta) * R * 0.75;
    this.objects.printHead.position.x = targetX;
    this.objects.bed.position.z = targetZ;

    // Gantry balandligi: latun nozzle uchi aniq qatlam ustiga tegib turadi
    const targetGantryY = 2.30 + (curLayer + 1) * 0.11;
    this.objects.gantry.position.y = targetGantryY;
    if (this.objects.leftLeadScrew) this.objects.leftLeadScrew.rotation.y += dt * 8;
    if (this.objects.rightLeadScrew) this.objects.rightLeadScrew.rotation.y += dt * 8;

    // Nozzle issiqlik effekti va eritilgan filament nuri
    if (this.objects.nozzleGlow) {
      this.objects.nozzleGlow.intensity = 1.6 + Math.sin(Date.now() * 0.02) * 0.5;
    }

    // Joriy qatlam ko'rinishi
    if (this.layerMeshes && this.layerMeshes[curLayer]) {
      this.layerMeshes[curLayer].visible = true;
      const layerScale = Math.min(1, state.layerProgress * 1.5);
      this.layerMeshes[curLayer].scale.set(layerScale, 1, layerScale);
    }

    // Quloqchalar (Handles) 18-qatlardan boshlab ko'rinadi
    if (curLayer >= 18) {
      if (this.objects.trophyLeftHandle) this.objects.trophyLeftHandle.visible = true;
      if (this.objects.trophyRightHandle) this.objects.trophyRightHandle.visible = true;
    }

    // Info panel va statusni yangilab turish
    const percent = Math.min(100, Math.round(((curLayer + Math.min(1, state.layerProgress)) / totalLayers) * 100));
    const statusTextEl = document.getElementById('tech-status-text');
    if (statusTextEl) {
      const curPreset = this.filamentPresets[this.currentFilamentIdx];
      statusTextEl.innerHTML = '<strong>🖨️ Qatlam: ' + (curLayer + 1) + ' / ' + totalLayers + ' (' + percent + '%)</strong> | Material: ' + curPreset.name + ' (215°C)';
    }

    // Qatlam tugashi
    if (state.layerProgress >= 1.0) {
      state.layerProgress = 0;
      if (this.layerMeshes && this.layerMeshes[curLayer]) {
        this.layerMeshes[curLayer].scale.set(1, 1, 1);
      }

      // Stepper motor tovushi
      if (window.SoundFX && typeof SoundFX.playStepperChirp === 'function') {
        SoundFX.playStepperChirp(380 + curLayer * 18);
      }

      state.currentLayer++;

      // Hamma qatlamlar tugadimi?
      if (state.currentLayer >= totalLayers) {
        state.isFinished = true;
        if (this.objects.trophyStar) this.objects.trophyStar.visible = true;
        if (this.objects.trophyLeftHandle) this.objects.trophyLeftHandle.visible = true;
        if (this.objects.trophyRightHandle) this.objects.trophyRightHandle.visible = true;

        if (statusTextEl) {
          statusTextEl.innerHTML = '<strong>🏆 3D CHOP ETISH YAKUNLANDI (100%)</strong> | 30-Maktab G\'alaba Kubogi tayyor!';
        }

        // Tantanali fanfara tovushi
        if (window.SoundFX && typeof SoundFX.playFanfare === 'function') {
          SoundFX.playFanfare();
        }

        if (typeof window.showToast === 'function') {
          window.showToast('🏆 3D Chop etish yakunlandi! 30-Maktab G\'alaba Kubogi tayyor!', 'success');
        }
      }
    }
  }

  togglePrinterFilament() {
    if (!this.filamentPresets) return;
    this.currentFilamentIdx = (this.currentFilamentIdx + 1) % this.filamentPresets.length;
    const preset = this.filamentPresets[this.currentFilamentIdx];

    const newMat = new THREE.MeshStandardMaterial({
      color: preset.hex,
      metalness: preset.metalness,
      roughness: preset.roughness
    });
    this.filamentMaterial = newMat;

    if (this.layerMeshes) {
      this.layerMeshes.forEach(m => { if (m) m.material = newMat; });
    }
    if (this.objects.trophyLeftHandle) this.objects.trophyLeftHandle.material = newMat;
    if (this.objects.trophyRightHandle) this.objects.trophyRightHandle.material = newMat;
    if (this.objects.spoolRoll) this.objects.spoolRoll.material = newMat;
    if (this.objects.nozzleBead) this.objects.nozzleBead.material = new THREE.MeshBasicMaterial({ color: preset.hex });
    if (this.objects.nozzleGlow) this.objects.nozzleGlow.color.setHex(preset.hex);

    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
    if (typeof window.showToast === 'function') {
      window.showToast('🎨 Filament rangi: ' + preset.name, 'info');
    }
  }

  togglePrinterSpeed() {
    if (!this.printerState) return;
    if (this.printerState.speedMultiplier === 1) {
      this.printerState.speedMultiplier = 3;
    } else if (this.printerState.speedMultiplier === 3) {
      this.printerState.speedMultiplier = 8;
    } else if (this.printerState.speedMultiplier === 8) {
      this.instantFinish3DPrinter();
      return;
    } else {
      this.printerState.speedMultiplier = 1;
    }

    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
    if (typeof window.showToast === 'function') {
      window.showToast('⚡ Bosish tezligi: ' + this.printerState.speedMultiplier + 'x', 'info');
    }
  }

  instantFinish3DPrinter() {
    if (!this.printerState) return;
    this.printerState.currentLayer = this.printerState.totalLayers;
    this.printerState.isFinished = true;
    if (this.layerMeshes) {
      this.layerMeshes.forEach(m => {
        if (m) {
          m.visible = true;
          m.scale.set(1, 1, 1);
        }
      });
    }
    if (this.objects.trophyStar) this.objects.trophyStar.visible = true;
    if (this.objects.trophyLeftHandle) this.objects.trophyLeftHandle.visible = true;
    if (this.objects.trophyRightHandle) this.objects.trophyRightHandle.visible = true;

    if (window.SoundFX && typeof SoundFX.playFanfare === 'function') SoundFX.playFanfare();
    if (typeof window.showToast === 'function') {
      window.showToast('🏆 3D Model tayyor holatda ochildi!', 'success');
    }
  }

  reset3DPrinter() {
    if (!this.printerState) return;
    this.printerState.currentLayer = 0;
    this.printerState.layerProgress = 0;
    this.printerState.isFinished = false;
    this.printerState.speedMultiplier = 2.5;

    if (this.layerMeshes) {
      this.layerMeshes.forEach(m => {
        if (m) {
          m.visible = false;
          m.scale.set(0.01, 1, 0.01);
        }
      });
    }
    if (this.objects.trophyStar) this.objects.trophyStar.visible = false;
    if (this.objects.trophyLeftHandle) this.objects.trophyLeftHandle.visible = false;
    if (this.objects.trophyRightHandle) this.objects.trophyRightHandle.visible = false;
    if (this.objects.trophyGroup) this.objects.trophyGroup.rotation.y = 0;

    if (this.objects.gantry) this.objects.gantry.position.y = 2.41;
    if (this.objects.bed) this.objects.bed.position.z = 0;
    if (this.objects.printHead) this.objects.printHead.position.x = 0;

    this.isRunning = true;
    this.params.printerPrinting = true;

    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
    if (typeof window.showToast === 'function') {
      window.showToast('🔄 3D Chop etish qaytadan boshlandi', 'info');
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

    this.updateBottomControls(type);
    this.updateSidebarControls(type);

    if (typeof window.updateLabExplanation === 'function') {
      window.updateLabExplanation('technology', type, this.isRunning);
    }
  }

  updateSidebarControls(type) {
    const robotSliders = document.getElementById('tech-ctrl-robot');
    if (robotSliders) {
      robotSliders.style.display = (type === 'robot-arm') ? 'block' : 'none';
    }

    const speedLabel = document.querySelector('#technology-info-panel label span:first-child');
    const speedVal = document.getElementById('val-tech-speed');
    const speedInput = document.querySelector('#technology-info-panel input[oninput*="setGearSpeed"], #technology-info-panel input[id="tech-speed-slider"]');

    if (speedLabel && speedVal && speedInput) {
      if (type === '3d-printer') {
        speedLabel.textContent = "Chop etish tezligi";
        speedInput.min = "1";
        speedInput.max = "10";
        const curSpd = (this.printerState && this.printerState.speedMultiplier) ? this.printerState.speedMultiplier : 2.5;
        speedInput.value = curSpd;
        speedVal.textContent = curSpd + "x";
        speedInput.oninput = (e) => {
          const v = parseFloat(e.target.value);
          speedVal.textContent = v + "x";
          if (this.printerState) this.printerState.speedMultiplier = v;
        };
      } else if (type === 'gears') {
        speedLabel.textContent = "Uzatma tezligi (RPM)";
        speedInput.min = "20";
        speedInput.max = "240";
        speedInput.value = this.params.gearSpeed;
        speedVal.textContent = this.params.gearSpeed + " RPM";
        speedInput.oninput = (e) => {
          speedVal.textContent = e.target.value + " RPM";
          window.setGearSpeed(e.target.value);
        };
      } else if (type === 'engine') {
        speedLabel.textContent = "Dvigatel tezligi (RPM)";
        speedInput.min = "30";
        speedInput.max = "300";
        speedInput.value = this.params.engineRpm;
        speedVal.textContent = this.params.engineRpm + " RPM";
        speedInput.oninput = (e) => {
          speedVal.textContent = e.target.value + " RPM";
          window.setEngineRpm(e.target.value);
        };
      } else if (type === 'wind-turbine') {
        speedLabel.textContent = "Shamol tezligi (m/s)";
        speedInput.min = "2";
        speedInput.max = "30";
        speedInput.value = this.params.windSpeed;
        speedVal.textContent = this.params.windSpeed + " m/s";
        speedInput.oninput = (e) => {
          speedVal.textContent = e.target.value + " m/s";
          window.setWindSpeed(e.target.value);
        };
      } else {
        speedLabel.textContent = "Robot harakat tezligi";
        speedInput.min = "20";
        speedInput.max = "200";
        speedInput.value = "100";
        speedVal.textContent = "100%";
      }
    }
  }

  updateBottomControls(type) {
    const actionBtn = document.getElementById('tech-action-btn');
    const autoBtn = document.getElementById('tech-auto-btn');
    if (!actionBtn || !autoBtn) return;

    if (type === 'robot-arm') {
      actionBtn.innerHTML = '<i class="fas fa-hand-rock"></i> Qisqich';
      actionBtn.onclick = () => window.toggleRobotGripper();
      autoBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Avtomatika';
      autoBtn.onclick = () => window.toggleRobotAutoCycle();
    } else if (type === '3d-printer') {
      actionBtn.innerHTML = '<i class="fas fa-palette"></i> Rang (Filament)';
      actionBtn.onclick = () => window.togglePrinterFilament();
      autoBtn.innerHTML = '<i class="fas fa-bolt"></i> Tezlik (1x/3x/8x)';
      autoBtn.onclick = () => window.togglePrinterSpeed();
    } else if (type === 'gears') {
      actionBtn.innerHTML = '<i class="fas fa-exchange-alt"></i> Yo\'nalish';
      actionBtn.onclick = () => window.toggleGearDirection();
      autoBtn.innerHTML = '<i class="fas fa-tachometer-alt"></i> Tezlik';
      autoBtn.onclick = () => window.cycleGearSpeed();
    } else if (type === 'engine') {
      actionBtn.innerHTML = '<i class="fas fa-fire"></i> Shamcha';
      actionBtn.onclick = () => window.sparkEngine();
      autoBtn.innerHTML = '<i class="fas fa-tachometer-alt"></i> RPM';
      autoBtn.onclick = () => window.cycleEngineRpm();
    } else if (type === 'wind-turbine') {
      actionBtn.innerHTML = '<i class="fas fa-lightbulb"></i> Chiroqlar';
      actionBtn.onclick = () => window.toggleTurbineLights();
      autoBtn.innerHTML = '<i class="fas fa-wind"></i> Shamol';
      autoBtn.onclick = () => window.cycleWindSpeed();
    }
  }

  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());

    const dt = this.clock ? this.clock.getDelta() : 0.016;

    if (this.isRunning) {
      if (this.currentExp === 'robot-arm') {
        if (this.params.robotAutoCycle) {
          this.updateRobotPickAndPlace(dt);
        } else {
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
    window.technologyLabInstance.params.printerPrinting = true;
    if (window.technologyLabInstance.currentExp === '3d-printer' && window.technologyLabInstance.printerState && window.technologyLabInstance.printerState.isFinished) {
      window.technologyLabInstance.reset3DPrinter();
    }
    if (typeof window.updateLabExplanation === 'function') {
      window.updateLabExplanation('technology', window.technologyLabInstance.currentExp, true);
    }
    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  }
};

window.pauseTechnologyExperiment = function() {
  if (window.technologyLabInstance) {
    window.technologyLabInstance.isRunning = false;
    window.technologyLabInstance.params.printerPrinting = false;
    if (typeof window.updateLabExplanation === 'function') {
      window.updateLabExplanation('technology', window.technologyLabInstance.currentExp, false);
    }
    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  }
};

window.resetTechnologyExperiment = function() {
  if (window.technologyLabInstance) {
    if (window.technologyLabInstance.currentExp === '3d-printer') {
      window.technologyLabInstance.reset3DPrinter();
    } else {
      window.technologyLabInstance.loadExperiment(window.technologyLabInstance.currentExp);
    }
    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
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
  if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
};

window.toggleRobotAutoCycle = function() {
  if (!window.technologyLabInstance) return;
  window.technologyLabInstance.params.robotAutoCycle = !window.technologyLabInstance.params.robotAutoCycle;
  if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  if (typeof window.showToast === 'function') {
    window.showToast(window.technologyLabInstance.params.robotAutoCycle ? '🤖 Avtomatik yuk tashish sikli boshlandi' : 'Robot avtomatikasi to\'xtatildi', 'info');
  }
};

window.togglePrinterFilament = function() {
  if (window.technologyLabInstance && typeof window.technologyLabInstance.togglePrinterFilament === 'function') {
    window.technologyLabInstance.togglePrinterFilament();
  }
};

window.togglePrinterSpeed = function() {
  if (window.technologyLabInstance && typeof window.technologyLabInstance.togglePrinterSpeed === 'function') {
    window.technologyLabInstance.togglePrinterSpeed();
  }
};

window.instantFinish3DPrinter = function() {
  if (window.technologyLabInstance && typeof window.technologyLabInstance.instantFinish3DPrinter === 'function') {
    window.technologyLabInstance.instantFinish3DPrinter();
  }
};

window.toggleGearDirection = function() {
  if (!window.technologyLabInstance) return;
  window.technologyLabInstance.params.gearDirection *= -1;
  if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  if (typeof window.showToast === 'function') {
    window.showToast('Tishli g\'ildiraklar yo\'nalishi o\'zgartirildi', 'info');
  }
};

window.cycleGearSpeed = function() {
  if (!window.technologyLabInstance) return;
  const speeds = [30, 60, 120, 180];
  const cur = window.technologyLabInstance.params.gearSpeed;
  const nextIdx = (speeds.indexOf(cur) + 1) % speeds.length;
  window.technologyLabInstance.params.gearSpeed = speeds[nextIdx];
  if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  if (typeof window.showToast === 'function') {
    window.showToast('Aylanish tezligi: ' + speeds[nextIdx] + ' RPM', 'info');
  }
};

window.sparkEngine = function() {
  if (!window.technologyLabInstance) return;
  if (window.technologyLabInstance.objects.sparkLight) {
    window.technologyLabInstance.objects.sparkLight.intensity = 5.0;
  }
  if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  if (typeof window.showToast === 'function') {
    window.showToast('⚡ Shamcha uchquni berildi!', 'warning');
  }
};

window.cycleEngineRpm = function() {
  if (!window.technologyLabInstance) return;
  const rpms = [60, 120, 240, 480];
  const cur = window.technologyLabInstance.params.engineRpm;
  const nextIdx = (rpms.indexOf(cur) + 1) % rpms.length;
  window.technologyLabInstance.params.engineRpm = rpms[nextIdx];
  if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  if (typeof window.showToast === 'function') {
    window.showToast('Dvigatel tezligi: ' + rpms[nextIdx] + ' RPM', 'info');
  }
};

window.toggleTurbineLights = function() {
  if (!window.technologyLabInstance) return;
  const lamp = window.technologyLabInstance.objects.streetLamp;
  if (lamp) {
    lamp.visible = !lamp.visible;
  }
  if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  if (typeof window.showToast === 'function') {
    window.showToast('Shahar ko\'cha chiroqlari holati o\'zgartirildi', 'info');
  }
};

window.cycleWindSpeed = function() {
  if (!window.technologyLabInstance) return;
  const winds = [6, 12, 18, 25];
  const cur = window.technologyLabInstance.params.windSpeed;
  const nextIdx = (winds.indexOf(cur) + 1) % winds.length;
  window.technologyLabInstance.params.windSpeed = winds[nextIdx];
  if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  if (typeof window.showToast === 'function') {
    window.showToast('Shamol tezligi: ' + winds[nextIdx] + ' m/s', 'info');
  }
};
