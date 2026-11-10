/**
 * 30-maktabtest - 3D Interaktiv Kompyuter Arxitekturasi va IT Laboratoriyasi
 * Three.js asosida ishlaydi (100% oflayn, qo'shimcha kutubxonasiz)
 * 
 * Tajribalar:
 *   1. pc-inside: Kompyuter Tizim Bloki Ichi (Motherboard, CPU kuler, RAM, GPU videokarta, SSD, PSU)
 *   2. logic-gates: Mantiqiy Elementlar (AND, OR, NOT, XOR darvozalari, 0/1 kalitlar va 3D LED chiroq)
 *   3. network-flow: Internet va Ma'lumotlar Oqimi (Server, Router, Wi-Fi, 3D ma'lumotlar paketlari)
 */

class ComputerLab {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      console.error('ComputerLab: container topilmadi:', containerId);
      return;
    }
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.clock = null;
    this.objects = {};
    this.currentExp = 'pc-inside';
    this.animationId = null;
    this.isRunning = true;

    // Parametrlar
    this.params = {
      // PC Inside
      fanSpeed: 1.5,
      rgbColor: 0x38bdf8,
      selectedPart: null,

      // Logic Gates
      gateType: 'AND', // AND, OR, NOT, XOR
      switchA: false,
      switchB: false,

      // Network
      packetSpeed: 1.2,
      trafficIntensity: 1.0
    };

    // Kamera boshqaruvi (orbit)
    this.isDragging = false;
    this.previousMouse = { x: 0, y: 0 };
    this.theta = 0.75;
    this.phi = 1.05;
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
    this.scene.background = new THREE.Color(0x060914);

    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.updateCameraPosition();

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.container.innerHTML = '';
    this.container.appendChild(this.renderer.domElement);

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
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(this.ambientLight);

    this.dirLight1 = new THREE.DirectionalLight(0xffffff, 0.9);
    this.dirLight1.position.set(20, 30, 20);
    this.dirLight1.castShadow = true;
    this.scene.add(this.dirLight1);

    this.dirLight2 = new THREE.DirectionalLight(0x818cf8, 0.5);
    this.dirLight2.position.set(-20, -10, -15);
    this.scene.add(this.dirLight2);

    this.rgbLight = new THREE.PointLight(0x38bdf8, 1.8, 30);
    this.rgbLight.position.set(0, 4, 3);
    this.scene.add(this.rgbLight);
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
      this.cameraRadius = Math.max(8, Math.min(80, this.cameraRadius));
      this.updateCameraPosition();
    }, { passive: false });

    // Click orqali komponentlarni tanlash (Raycasting)
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
      if (child !== this.ambientLight && child !== this.dirLight1 && child !== this.dirLight2 && child !== this.rgbLight) {
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
      case 'pc-inside':
        this.setupPcInside();
        break;
      case 'logic-gates':
        this.setupLogicGates();
        break;
      case 'network-flow':
        this.setupNetworkFlow();
        break;
      default:
        this.setupPcInside();
    }

    if (window.updateLiveExplanation) {
      window.updateLiveExplanation('computer', name);
    }
  }

  // ============================================================
  // 1. KOMPYUTER TIZIM BLOKI ICHI (PC INSIDE)
  // ============================================================
  setupPcInside() {
    this.cameraRadius = 26;
    this.cameraTarget.set(0, 0, 0);
    this.theta = 0.65;
    this.phi = 1.1;
    this.updateCameraPosition();

    const root = new THREE.Group();
    this.scene.add(root);
    this.objects.root = root;

    // 1. Shaffof ATX Korpus shassi (Chassis frame)
    const chassisGeo = new THREE.BoxGeometry(20, 22, 10);
    const chassisMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.8,
      roughness: 0.3,
      transparent: true,
      opacity: 0.25,
      wireframe: false
    });
    const chassis = new THREE.Mesh(chassisGeo, chassisMat);
    root.add(chassis);

    // Qirra ramkasi (Wireframe edges)
    const edgeGeo = new THREE.EdgesGeometry(chassisGeo);
    const edgeMat = new THREE.LineBasicMaterial({ color: 0x38bdf8 });
    root.add(new THREE.LineSegments(edgeGeo, edgeMat));

    // 2. Motherboard (Ona plata) - Orqa devorga o'rnatilgan qora/to'q ko'k plata
    const mbGeo = new THREE.BoxGeometry(16, 18, 0.4);
    const mbMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.6 });
    const mb = new THREE.Mesh(mbGeo, mbMat);
    mb.position.set(-1, 0, -4.2);
    mb.userData = { name: "Ona plata (Motherboard ATX)", desc: "Barcha asosiy qismlarni o'zaro bog'lovchi tizim asosi." };
    root.add(mb);
    this.objects.motherboard = mb;

    // Platadagi mikrosxema liniyalari (Traces)
    const traceGeo = new THREE.PlaneGeometry(15, 17);
    const traceMat = new THREE.MeshBasicMaterial({ color: 0x0284c7, wireframe: true, transparent: true, opacity: 0.3 });
    const traces = new THREE.Mesh(traceGeo, traceMat);
    traces.position.set(-1, 0, -3.95);
    root.add(traces);

    // 3. CPU va Kuler (Protsessor va sovutish ventilyatori)
    const cpuSocketGeo = new THREE.BoxGeometry(4.2, 4.2, 0.6);
    const cpuSocketMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.7 });
    const cpuSocket = new THREE.Mesh(cpuSocketGeo, cpuSocketMat);
    cpuSocket.position.set(-2, 3.5, -3.6);
    cpuSocket.userData = { name: "Markaziy Protsessor (CPU 8-Core)", desc: "Kompyuterning hisoblash 'miyasi'. Sekundiga milliardlab amallarni bajaradi." };
    root.add(cpuSocket);

    // CPU Radiatori (Alyuminiy qovurg'alar)
    const radGeo = new THREE.CylinderGeometry(2.4, 2.4, 1.8, 24);
    const radMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.85, roughness: 0.2 });
    const radiator = new THREE.Mesh(radGeo, radMat);
    radiator.rotation.x = Math.PI / 2;
    radiator.position.set(-2, 3.5, -2.4);
    root.add(radiator);

    // CPU Ventilyatori (RGB Fan blades)
    const fanGroup = new THREE.Group();
    fanGroup.position.set(-2, 3.5, -1.3);

    const fanHubGeo = new THREE.CylinderGeometry(0.8, 0.8, 0.4, 16);
    const fanHubMat = new THREE.MeshStandardMaterial({ color: 0x0284c7 });
    fanGroup.add(new THREE.Mesh(fanHubGeo, fanHubMat));

    const bladeGeo = new THREE.BoxGeometry(0.12, 1.8, 0.3);
    const bladeMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.85 });
    for (let b = 0; b < 7; b++) {
      const bMesh = new THREE.Mesh(bladeGeo, bladeMat);
      bMesh.rotation.z = (b * Math.PI * 2) / 7;
      bMesh.position.set(Math.sin((b * Math.PI * 2) / 7) * 0.9, Math.cos((b * Math.PI * 2) / 7) * 0.9, 0);
      fanGroup.add(bMesh);
    }
    root.add(fanGroup);
    this.objects.cpuFan = fanGroup;

    // 4. Operativ Xotira (RAM DDR5 Sticks) - 2 ta modul
    const ramGeo = new THREE.BoxGeometry(0.4, 4.8, 1.6);
    const ramMat = new THREE.MeshStandardMaterial({ color: 0xec4899, metalness: 0.7, roughness: 0.3 });
    for (let r = 0; r < 2; r++) {
      const ramStick = new THREE.Mesh(ramGeo, ramMat);
      ramStick.position.set(1.5 + r * 0.9, 3.5, -3.2);
      ramStick.userData = { name: "Operativ Xotira (RAM DDR5 32GB)", desc: "Dasturlar va o'yinlar ishlashi uchun tezkor vaqtinchalik xotira." };
      root.add(ramStick);
    }

    // 5. Videokarta (GPU - Graphics Card)
    const gpuGroup = new THREE.Group();
    gpuGroup.position.set(-1, -2.5, -1.5);

    const gpuBodyGeo = new THREE.BoxGeometry(14, 4.2, 3.2);
    const gpuBodyMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.4, metalness: 0.8 });
    const gpuBody = new THREE.Mesh(gpuBodyGeo, gpuBodyMat);
    gpuGroup.add(gpuBody);

    // GPU 2 ta ventilyatori
    const gpuFan1 = fanGroup.clone();
    gpuFan1.scale.set(0.7, 0.7, 0.7);
    gpuFan1.position.set(-3.2, 0, 1.7);
    gpuGroup.add(gpuFan1);

    const gpuFan2 = fanGroup.clone();
    gpuFan2.scale.set(0.7, 0.7, 0.7);
    gpuFan2.position.set(3.2, 0, 1.7);
    gpuGroup.add(gpuFan2);

    gpuGroup.userData = { name: "Videokarta (GPU RTX 16GB)", desc: "3D grafika, o'yinlar va videolarni qayta ishlovchi qudratli grafik protsessor." };
    root.add(gpuGroup);
    this.objects.gpu = gpuGroup;
    this.objects.gpuFan1 = gpuFan1;
    this.objects.gpuFan2 = gpuFan2;

    // 6. Quvvat Bloki (PSU - Power Supply)
    const psuGeo = new THREE.BoxGeometry(7, 4.5, 7);
    const psuMat = new THREE.MeshStandardMaterial({ color: 0x09090b, roughness: 0.5 });
    const psu = new THREE.Mesh(psuGeo, psuMat);
    psu.position.set(-5.5, -8, 0);
    psu.userData = { name: "Quvvat bloki (PSU 750W)", desc: "220V tokni kompyuter qismlari uchun kerakli 12V, 5V, 3.3V xavfsiz kuchlanishga aylantirib beradi." };
    root.add(psu);

    // 7. NVMe SSD Xotira
    const ssdGeo = new THREE.BoxGeometry(3.5, 0.9, 0.2);
    const ssdMat = new THREE.MeshStandardMaterial({ color: 0x10b981, metalness: 0.6 });
    const ssd = new THREE.Mesh(ssdGeo, ssdMat);
    ssd.position.set(-2, 0.2, -3.8);
    ssd.userData = { name: "Doimiy Xotira (NVMe M.2 SSD 1TB)", desc: "Operatsion tizim, fayl va darsliklarni tezkor saqlovchi xotira." };
    root.add(ssd);
  }

  // ============================================================
  // 2. MANTIQIY ELEMENTLAR (LOGIC GATES 3D)
  // ============================================================
  setupLogicGates() {
    this.cameraRadius = 24;
    this.cameraTarget.set(0, 0, 0);
    this.theta = 0.5;
    this.phi = 1.05;
    this.updateCameraPosition();

    const root = new THREE.Group();
    this.scene.add(root);
    this.objects.root = root;

    // Plata asosi (Circuit board)
    const boardGeo = new THREE.BoxGeometry(22, 14, 1.2);
    const boardMat = new THREE.MeshStandardMaterial({ color: 0x064e3b, roughness: 0.6 }); // Yashil PCB
    const board = new THREE.Mesh(boardGeo, boardMat);
    board.position.z = -0.6;
    root.add(board);

    // Kirish A kaliti (Switch A)
    const switchAGroup = this.create3DSwitch(-7, 3, "A", this.params.switchA);
    root.add(switchAGroup);
    this.objects.switchAGroup = switchAGroup;

    // Kirish B kaliti (Switch B)
    const switchBGroup = this.create3DSwitch(-7, -3, "B", this.params.switchB);
    root.add(switchBGroup);
    this.objects.switchBGroup = switchBGroup;

    // Mantiqiy mikrosxema korpusi (IC Chip)
    const icGeo = new THREE.BoxGeometry(6, 7, 1.6);
    const icMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.4 });
    const ic = new THREE.Mesh(icGeo, icMat);
    ic.position.set(0, 0, 0.8);
    root.add(ic);

    // O'tkazgich simlar (Wire traces)
    this.objects.wireA = this.createWireLine(root, [-4.5, 3, 0.3], [-3, 3, 0.3]);
    this.objects.wireB = this.createWireLine(root, [-4.5, -3, 0.3], [-3, -3, 0.3]);
    this.objects.wireOut = this.createWireLine(root, [3, 0, 0.3], [6, 0, 0.3]);

    // Chiqish indikatori (3D LED lampochka)
    const ledGroup = new THREE.Group();
    ledGroup.position.set(7.5, 0, 1.0);

    const ledBaseGeo = new THREE.CylinderGeometry(0.9, 0.9, 0.6, 16);
    const ledBaseMat = new THREE.MeshStandardMaterial({ color: 0x334155 });
    ledGroup.add(new THREE.Mesh(ledBaseGeo, ledBaseMat));

    const ledDomeGeo = new THREE.SphereGeometry(1.0, 24, 24, 0, Math.PI * 2, 0, Math.PI / 2);
    const ledDomeMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      emissive: 0x000000,
      emissiveIntensity: 0.0,
      transparent: true,
      opacity: 0.85
    });
    const ledDome = new THREE.Mesh(ledDomeGeo, ledDomeMat);
    ledDome.rotation.x = -Math.PI / 2;
    ledDome.position.z = 0.3;
    ledGroup.add(ledDome);

    root.add(ledGroup);
    this.objects.ledDome = ledDome;

    this.updateLogicCircuit();
  }

  create3DSwitch(x, y, label, state) {
    const group = new THREE.Group();
    group.position.set(x, y, 0.8);

    const baseGeo = new THREE.BoxGeometry(3.0, 2.4, 0.6);
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x334155 });
    group.add(new THREE.Mesh(baseGeo, baseMat));

    const leverGeo = new THREE.CylinderGeometry(0.35, 0.35, 1.8, 12);
    const leverMat = new THREE.MeshStandardMaterial({ color: state ? 0x22c55e : 0xef4444 });
    const lever = new THREE.Mesh(leverGeo, leverMat);
    lever.position.set(0, 0, 0.8);
    lever.rotation.z = state ? 0.35 : -0.35;
    group.add(lever);
    group.userData = { lever: lever, leverMat: leverMat };

    return group;
  }

  createWireLine(parent, p1, p2) {
    const geo = new THREE.CylinderGeometry(0.18, 0.18, Math.hypot(p2[0] - p1[0], p2[1] - p1[1]), 8);
    const mat = new THREE.MeshStandardMaterial({ color: 0x64748b, emissive: 0x000000 });
    const wire = new THREE.Mesh(geo, mat);
    wire.position.set((p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2, p1[2]);
    wire.rotation.z = Math.PI / 2;
    parent.add(wire);
    return wire;
  }

  updateLogicCircuit() {
    const a = this.params.switchA;
    const b = this.params.switchB;
    let out = false;

    switch (this.params.gateType) {
      case 'AND': out = (a && b); break;
      case 'OR': out = (a || b); break;
      case 'NOT': out = !a; break;
      case 'XOR': out = (a !== b); break;
    }

    // Simlarni yoritish
    if (this.objects.wireA) {
      this.objects.wireA.material.color.setHex(a ? 0x38bdf8 : 0x334155);
      this.objects.wireA.material.emissive.setHex(a ? 0x0284c7 : 0x000000);
    }
    if (this.objects.wireB) {
      this.objects.wireB.material.color.setHex(b ? 0x38bdf8 : 0x334155);
      this.objects.wireB.material.emissive.setHex(b ? 0x0284c7 : 0x000000);
    }
    if (this.objects.wireOut) {
      this.objects.wireOut.material.color.setHex(out ? 0x22c55e : 0x334155);
      this.objects.wireOut.material.emissive.setHex(out ? 0x16a34a : 0x000000);
    }

    // LED lampani yoqish
    if (this.objects.ledDome) {
      if (out) {
        this.objects.ledDome.material.color.setHex(0x22c55e);
        this.objects.ledDome.material.emissive.setHex(0x16a34a);
        this.objects.ledDome.material.emissiveIntensity = 0.9;
      } else {
        this.objects.ledDome.material.color.setHex(0xef4444);
        this.objects.ledDome.material.emissive.setHex(0x000000);
        this.objects.ledDome.material.emissiveIntensity = 0.0;
      }
    }

    // UI holatini yangilash
    const statusEl = document.getElementById('logic-result-status');
    if (statusEl) {
      statusEl.innerHTML = `Kirish A: <strong>${a ? 1 : 0}</strong>, Kirish B: <strong>${b ? 1 : 0}</strong> &rarr; Chiqish (${this.params.gateType}): <strong style="color:${out ? '#34d399' : '#f87171'}">${out ? '1 (ON - 5V)' : '0 (OFF - 0V)'}</strong>`;
    }
  }

  // ============================================================
  // 3. INTERNET VA MA'LUMOTLAR OQIMI (NETWORK FLOW)
  // ============================================================
  setupNetworkFlow() {
    this.cameraRadius = 32;
    this.cameraTarget.set(0, 1, 0);
    this.theta = 0.8;
    this.phi = 1.1;
    this.updateCameraPosition();

    const root = new THREE.Group();
    this.scene.add(root);
    this.objects.root = root;

    // 1. Markaziy Bulut / Internet Core (Cloud)
    const cloudGeo = new THREE.SphereGeometry(3.5, 24, 24);
    const cloudMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.5,
      wireframe: true
    });
    const cloud = new THREE.Mesh(cloudGeo, cloudMat);
    cloud.position.set(0, 8, 0);
    root.add(cloud);
    this.objects.networkCloud = cloud;

    // 2. Maktab Serveri (School Data Center Rack)
    const serverGeo = new THREE.BoxGeometry(4.0, 7.5, 4.0);
    const serverMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.4 });
    const server = new THREE.Mesh(serverGeo, serverMat);
    server.position.set(-10, 0, -4);
    root.add(server);

    // Server LED chiroqchalari
    for (let s = 0; s < 6; s++) {
      const led = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.2), new THREE.MeshBasicMaterial({ color: 0x34d399 }));
      led.position.set(-8.8 + (s % 3) * 0.8, 1.5 - Math.floor(s / 3) * 1.5, -1.9);
      root.add(led);
    }

    // 3. Wi-Fi Router (Antennali markaziy marshrutizator)
    const routerGeo = new THREE.BoxGeometry(4.2, 1.4, 3.2);
    const routerMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.5 });
    const router = new THREE.Mesh(routerGeo, routerMat);
    router.position.set(0, 0, 2);
    root.add(router);

    // Router antennalari
    for (let a = -1; a <= 1; a += 2) {
      const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 3.5), new THREE.MeshStandardMaterial({ color: 0x334155 }));
      ant.position.set(a * 1.6, 2.0, 1.8);
      ant.rotation.z = -a * 0.25;
      root.add(ant);
    }

    // 4. Foydalanuvchi qurilmalari (Mijoz kompyuterlari)
    const clientCoords = [
      { x: 9, y: -2, z: 4, name: "O'quvchi Noutbuki" },
      { x: 7, y: -2, z: -5, name: "O'qituvchi Kompyuteri" },
      { x: -6, y: -2, z: 6, name: "Smartfon / Planshet" }
    ];

    clientCoords.forEach(c => {
      const pc = new THREE.Mesh(new THREE.BoxGeometry(2.6, 1.8, 0.2), new THREE.MeshStandardMaterial({ color: 0x38bdf8 }));
      pc.position.set(c.x, c.y + 1, c.z);
      root.add(pc);

      const stand = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.2, 1.4), new THREE.MeshStandardMaterial({ color: 0x475569 }));
      stand.position.set(c.x, c.y, c.z);
      root.add(stand);
    });

    // 5. Harakatlanuvchi ma'lumotlar paketlari (Data packets)
    const packetCount = 40;
    const packetGeo = new THREE.SphereGeometry(0.28, 12, 12);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0x34d399 });
    const packets = [];

    for (let p = 0; p < packetCount; p++) {
      const mesh = new THREE.Mesh(packetGeo, packetMat);
      root.add(mesh);
      packets.push({
        mesh: mesh,
        progress: Math.random(),
        route: p % 3 // 0: Server to Cloud, 1: Cloud to Router, 2: Router to Client
      });
    }
    this.objects.packets = packets;
  }

  // ============================================================
  // ANIMATSIYA TSIKLI
  // ============================================================
  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());
    if (!this.isRunning) return;

    const time = this.clock.getElapsedTime();

    // 1. PC Inside animatsiyasi (Kuler aylanishi)
    if (this.currentExp === 'pc-inside') {
      const speed = 0.12 * this.params.fanSpeed;
      if (this.objects.cpuFan) this.objects.cpuFan.rotation.z += speed;
      if (this.objects.gpuFan1) this.objects.gpuFan1.rotation.z += speed;
      if (this.objects.gpuFan2) this.objects.gpuFan2.rotation.z += speed;

      // RGB yorug'lik pulsatsiyasi
      if (this.rgbLight) {
        this.rgbLight.intensity = 1.5 + Math.sin(time * 3) * 0.4;
      }
    }

    // 2. Logic Gates (Agar kerak bo'lsa)
    if (this.currentExp === 'logic-gates') {
      // Barqaror holat
    }

    // 3. Network Flow (Ma'lumotlar paketlari harakati)
    if (this.currentExp === 'network-flow') {
      if (this.objects.networkCloud) {
        this.objects.networkCloud.rotation.y += 0.008;
      }

      if (this.objects.packets) {
        this.objects.packets.forEach(p => {
          p.progress += 0.015 * this.params.packetSpeed;
          if (p.progress > 1.0) p.progress = 0;

          const pr = p.progress;
          if (p.route === 0) {
            // Server (-10, 0, -4) -> Cloud (0, 8, 0)
            p.mesh.position.set(-10 + pr * 10, pr * 8, -4 + pr * 4);
          } else if (p.route === 1) {
            // Cloud (0, 8, 0) -> Router (0, 0, 2)
            p.mesh.position.set(0, 8 - pr * 8, pr * 2);
          } else {
            // Router (0, 0, 2) -> Client (9, -1, 4)
            p.mesh.position.set(pr * 9, -pr * 1, 2 + pr * 2);
          }
        });
      }
    }

    this.renderer.render(this.scene, this.camera);
  }

  // Interaktiv metodlar
  handlePartClick() {
    if (this.currentExp !== 'pc-inside') return;
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.objects.root.children, true);

    for (let i = 0; i < intersects.length; i++) {
      let obj = intersects[i].object;
      while (obj && !obj.userData.name && obj.parent !== this.objects.root) {
        obj = obj.parent;
      }
      if (obj && obj.userData.name) {
        const infoEl = document.getElementById('pc-part-info');
        if (infoEl) {
          infoEl.innerHTML = `<h4 style="color:#38bdf8; margin:0 0 4px 0;"><i class="fas fa-microchip"></i> ${obj.userData.name}</h4><p style="margin:0; font-size:0.88rem; color:#cbd5e1;">${obj.userData.desc}</p>`;
        }
        break;
      }
    }
  }

  setFanSpeed(val) {
    this.params.fanSpeed = parseFloat(val);
  }

  toggleSwitch(switchName) {
    if (switchName === 'A') {
      this.params.switchA = !this.params.switchA;
      if (this.objects.switchAGroup) {
        const d = this.objects.switchAGroup.userData;
        d.lever.rotation.z = this.params.switchA ? 0.35 : -0.35;
        d.leverMat.color.setHex(this.params.switchA ? 0x22c55e : 0xef4444);
      }
    } else if (switchName === 'B') {
      this.params.switchB = !this.params.switchB;
      if (this.objects.switchBGroup) {
        const d = this.objects.switchBGroup.userData;
        d.lever.rotation.z = this.params.switchB ? 0.35 : -0.35;
        d.leverMat.color.setHex(this.params.switchB ? 0x22c55e : 0xef4444);
      }
    }
    this.updateLogicCircuit();
  }

  setGateType(gate) {
    this.params.gateType = gate;
    this.updateLogicCircuit();
  }

  setPacketSpeed(val) {
    this.params.packetSpeed = parseFloat(val);
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
window.computerLabInstance = null;

window.initComputerLab = function () {
  if (!window.computerLabInstance) {
    window.computerLabInstance = new ComputerLab('computer-canvas-container');
    window.computerLabInstance.init();
  }
};

window.selectComputerExperiment = function (name) {
  if (window.computerLabInstance) {
    window.computerLabInstance.loadExperiment(name);

    const items = document.querySelectorAll('#computer-experiment-list .experiment-item');
    items.forEach(el => {
      el.classList.toggle('active', el.getAttribute('data-experiment') === name);
    });

    const panels = document.querySelectorAll('#computer-controls .control-group');
    panels.forEach(p => {
      p.style.display = (p.getAttribute('data-for') === name) ? 'block' : 'none';
    });
  }
};
