/**
 * 30-maktabtest - 3D Interaktiv Kompyuter Arxitekturasi va IT Laboratoriyasi
 * Three.js asosida ishlaydi (100% oflayn, qo'shimcha kutubxonasiz)
 * 
 * 6 ta Katta Tajriba:
 *   1. pc-inside: Kompyuter Tizim Bloki Ichi (Motherboard, CPU kuler, RAM, GPU videokarta, SSD, PSU)
 *   2. logic-gates: Mantiqiy Elementlar (AND, OR, NOT, XOR darvozalari, 0/1 kalitlar va 3D LED chiroq)
 *   3. binary-byte: 8-Bit Ikkilik Xotira va ASCII Registr (0/1 neon bitlar, o'nlik va harf hisoblagich)
 *   4. network-flow: Internet va Ma'lumotlar Oqimi (Server, Router, Wi-Fi, 3D ma'lumotlar paketlari)
 *   5. cybersecurity: Kiberxavfsizlik va Firewall Himoyasi (Kiber qalqon, viruslar, AES shifrlash)
 *   6. algorithm-sort: 3D Algoritmlar va Saralash (Bubble Sort animatsiyasi va taqqoslash)
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
      gateType: 'AND',
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

    this.dirLight1 = new THREE.DirectionalLight(0xffffff, 0.85);
    this.dirLight1.position.set(20, 30, 20);
    this.dirLight1.castShadow = true;
    this.scene.add(this.dirLight1);

    this.dirLight2 = new THREE.DirectionalLight(0x38bdf8, 0.4);
    this.dirLight2.position.set(-20, -10, -20);
    this.scene.add(this.dirLight2);

    this.rgbLight = new THREE.PointLight(0xa855f7, 1.8, 30);
    this.rgbLight.position.set(0, 5, 0);
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
      this.cameraRadius = Math.max(12, Math.min(80, this.cameraRadius));
      this.updateCameraPosition();
    }, { passive: false });

    // Touch controls
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
        this.cameraRadius = Math.max(12, Math.min(80, this.cameraRadius));
        this.updateCameraPosition();
        touchStartDist = dist;
      }
    });

    el.addEventListener('touchend', () => {
      this.isDragging = false;
    });

    // Click handler for 3D components
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

  createCanvasTextureText(title, subtitle, bgColor = '#0f172a', textColor = '#38bdf8') {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 160;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, 512, 160);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 6;
    ctx.strokeRect(4, 4, 504, 152);

    ctx.fillStyle = textColor;
    ctx.font = 'bold 36px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(title, 256, 65);

    if (subtitle) {
      ctx.fillStyle = '#a855f7';
      ctx.font = 'bold 32px monospace';
      ctx.fillText(subtitle, 256, 125);
    }
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
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
      case 'binary-byte':
        this.setupBinaryByte();
        break;
      case 'network-flow':
        this.setupNetworkFlow();
        break;
      case 'cybersecurity':
        this.setupCybersecurity();
        break;
      case 'algorithm-sort':
        this.setupAlgorithmSort();
        break;
      default:
        this.setupPcInside();
    }

    if (window.updateLabExplanation) {
      window.updateLabExplanation('computer', name);
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
      wireframe: true
    });
    const chassis = new THREE.Mesh(chassisGeo, chassisMat);
    root.add(chassis);

    // 2. Motherboard (Ona plata)
    const mbGeo = new THREE.BoxGeometry(16, 18, 0.4);
    const mbMat = new THREE.MeshStandardMaterial({
      color: 0x064e3b,
      roughness: 0.4,
      metalness: 0.2
    });
    const mb = new THREE.Mesh(mbGeo, mbMat);
    mb.position.set(0, 0, -4.5);
    mb.userData = {
      name: "Ona Plata (Motherboard ATX)",
      desc: "Barcha komponentlarni birlashtiruvchi markaziy elektron plata. Trassalar orqali yuqori tezlikda ma'lumot uzatadi."
    };
    root.add(mb);

    // Ona platadagi kontakt chiziqlari (Circuit traces)
    for (let c = 0; c < 12; c++) {
      const trace = new THREE.Mesh(
        new THREE.PlaneGeometry(12, 0.15),
        new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
      );
      trace.position.set(-2 + (c % 4) * 2, -6 + c * 1.2, -4.28);
      root.add(trace);
    }

    // 3. Markaziy Protsessor va Kuler (CPU Tower Cooler)
    const cpuGroup = new THREE.Group();
    cpuGroup.position.set(-1, 3.5, -3.5);
    cpuGroup.userData = {
      name: "Markaziy Protsessor (CPU 8-Core)",
      desc: "Kompyuterning hisoblash 'miyasi'. Sekundiga milliardlab arifmetik amallarni bajaradi."
    };

    const radGeo = new THREE.BoxGeometry(4.2, 4.2, 2.5);
    const radMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.9, roughness: 0.2 });
    const rad = new THREE.Mesh(radGeo, radMat);
    cpuGroup.add(rad);

    const fanRing = new THREE.Mesh(new THREE.CylinderGeometry(2.0, 2.0, 0.6, 24), new THREE.MeshStandardMaterial({ color: 0x0f172a }));
    fanRing.rotation.x = Math.PI / 2;
    fanRing.position.z = 1.3;
    cpuGroup.add(fanRing);

    const fanBlades = new THREE.Group();
    for (let b = 0; b < 7; b++) {
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.3, 1.8, 0.05), new THREE.MeshStandardMaterial({ color: 0x38bdf8 }));
      blade.rotation.z = (b / 7) * Math.PI * 2;
      blade.position.set(Math.cos(blade.rotation.z) * 0.9, Math.sin(blade.rotation.z) * 0.9, 0);
      fanBlades.add(blade);
    }
    fanBlades.position.z = 1.4;
    cpuGroup.add(fanBlades);
    this.objects.cpuFan = fanBlades;

    root.add(cpuGroup);

    // 4. DDR5 Operativ Xotira (RAM 32GB)
    for (let r = 0; r < 2; r++) {
      const ramGeo = new THREE.BoxGeometry(0.6, 6.5, 1.2);
      const ramMat = new THREE.MeshStandardMaterial({ color: 0xec4899, metalness: 0.8, roughness: 0.2 });
      const ram = new THREE.Mesh(ramGeo, ramMat);
      ram.position.set(3.2 + r * 1.1, 3.2, -3.5);
      ram.userData = {
        name: `DDR5 Operativ Xotira (${r === 0 ? '16GB A' : '16GB B'})`,
        desc: "Dasturlar ishlashi uchun o'ta yuqori tezlikdagi vaqtinchalik xotira. Kompyuter o'chsa ma'lumot tozalanadi."
      };
      root.add(ram);
    }

    // 5. Videokarta (GPU - RTX Gaming)
    const gpuGroup = new THREE.Group();
    gpuGroup.position.set(0, -3.2, -1.0);
    gpuGroup.userData = {
      name: "Grafik Protsessor (GPU Videokarta)",
      desc: "3D grafika, o'yinlar, sun'iy intellekt va video render uchun mo'ljallangan o'ta kuchli vizualizatsiya platasi."
    };

    const gpuBody = new THREE.Mesh(new THREE.BoxGeometry(15, 4.2, 3.2), new THREE.MeshStandardMaterial({ color: 0x090d16, roughness: 0.3 }));
    gpuGroup.add(gpuBody);

    const gpuFan1 = new THREE.Group();
    const gpuFan2 = new THREE.Group();
    for (let g = 0; g < 2; g++) {
      const targetFan = g === 0 ? gpuFan1 : gpuFan2;
      for (let b = 0; b < 6; b++) {
        const blade = new THREE.Mesh(new THREE.BoxGeometry(0.25, 1.4, 0.04), new THREE.MeshStandardMaterial({ color: 0x06b6d4 }));
        blade.rotation.z = (b / 6) * Math.PI * 2;
        blade.position.set(Math.cos(blade.rotation.z) * 0.7, Math.sin(blade.rotation.z) * 0.7, 0);
        targetFan.add(blade);
      }
      targetFan.position.set(-3.5 + g * 7.0, 0, 1.65);
      gpuGroup.add(targetFan);
    }
    this.objects.gpuFan1 = gpuFan1;
    this.objects.gpuFan2 = gpuFan2;

    root.add(gpuGroup);

    // 6. NVMe M.2 SSD Xotira
    const ssd = new THREE.Mesh(
      new THREE.BoxGeometry(4.0, 1.0, 0.2),
      new THREE.MeshStandardMaterial({ color: 0x10b981, metalness: 0.7 })
    );
    ssd.position.set(0, 0, -4.2);
    ssd.userData = {
      name: "NVMe M.2 SSD (1TB Xotira)",
      desc: "Super tezkor qattiq jism xotira. Sekundiga 7000 MB tezlikda operatsion tizim va barcha fayllarni saqlaydi."
    };
    root.add(ssd);

    // 7. Quvvat Bloki (PSU 750W)
    const psu = new THREE.Mesh(
      new THREE.BoxGeometry(6.5, 4.5, 6.0),
      new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.5 })
    );
    psu.position.set(-5.5, -8.0, 0);
    psu.userData = {
      name: "Quvvat Manbai (PSU 750W)",
      desc: "220V o'zgaruvchan tokni 12V, 5V va 3.3V o'zgarmas barqaror kuchlanishga aylantirib beradi."
    };
    root.add(psu);

    // HUD ni yangilash
    const hud = document.getElementById('pc-part-hud');
    const hudTitle = document.getElementById('pc-hud-title');
    const hudDesc = document.getElementById('pc-hud-desc');
    if (hud && hudTitle && hudDesc) {
      hud.style.display = 'block';
      hudTitle.innerHTML = '<i class="fas fa-desktop"></i> Tizim Bloki Komponentlari';
      hudDesc.textContent = "Detal ustiga sichqonchani bosing (CPU, GPU, RAM, SSD, Kuler)!";
    }
  }

  // ============================================================
  // 2. MANTIQIY ELEMENTLAR (LOGIC GATES)
  // ============================================================
  setupLogicGates() {
    this.cameraRadius = 28;
    this.cameraTarget.set(0, 0, 0);
    this.theta = 0.5;
    this.phi = 1.15;
    this.updateCameraPosition();

    const root = new THREE.Group();
    this.scene.add(root);
    this.objects.root = root;

    const boardGeo = new THREE.BoxGeometry(22, 14, 0.8);
    const boardMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.4 });
    const board = new THREE.Mesh(boardGeo, boardMat);
    board.position.set(0, 0, -1);
    root.add(board);

    this.objects.switchAGroup = this.createSwitchMesh(-8, 3.5, 'A');
    this.objects.switchBGroup = this.createSwitchMesh(-8, -3.5, 'B');
    root.add(this.objects.switchAGroup);
    root.add(this.objects.switchBGroup);

    const gateGeo = new THREE.BoxGeometry(6, 6, 1.8);
    const gateMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8 });
    const gateMesh = new THREE.Mesh(gateGeo, gateMat);
    gateMesh.position.set(0, 0, 0);
    root.add(gateMesh);
    this.objects.gateMesh = gateMesh;

    const symbolGeo = new THREE.BoxGeometry(4.5, 3.0, 0.1);
    const symbolMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const symbol = new THREE.Mesh(symbolGeo, symbolMat);
    symbol.position.set(0, 0, 1.0);
    root.add(symbol);
    this.objects.gateSymbol = symbol;

    const ledBase = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.8, 1.0, 20), new THREE.MeshStandardMaterial({ color: 0x334155 }));
    ledBase.position.set(8, 0, 0);
    ledBase.rotation.x = Math.PI / 2;
    root.add(ledBase);

    const ledBulbGeo = new THREE.SphereGeometry(1.2, 24, 24);
    const ledBulbMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      emissive: 0x7f1d1d,
      emissiveIntensity: 0.2
    });
    const ledBulb = new THREE.Mesh(ledBulbGeo, ledBulbMat);
    ledBulb.position.set(8, 0, 1.0);
    root.add(ledBulb);
    this.objects.outputLED = ledBulb;

    this.objects.wireInA = this.createWireMesh([-6, 3.5, 0], [-3, 1.5, 0]);
    this.objects.wireInB = this.createWireMesh([-6, -3.5, 0], [-3, -1.5, 0]);
    this.objects.wireOut = this.createWireMesh([3, 0, 0], [7, 0, 0]);
    root.add(this.objects.wireInA);
    root.add(this.objects.wireInB);
    root.add(this.objects.wireOut);

    this.updateLogicCircuit();
  }

  createSwitchMesh(x, y, name) {
    const grp = new THREE.Group();
    grp.position.set(x, y, 0);

    const base = new THREE.Mesh(new THREE.BoxGeometry(2.5, 3.2, 0.6), new THREE.MeshStandardMaterial({ color: 0x334155 }));
    grp.add(base);

    const leverGeo = new THREE.BoxGeometry(0.6, 2.0, 0.4);
    const leverMat = new THREE.MeshStandardMaterial({ color: 0xef4444 });
    const lever = new THREE.Mesh(leverGeo, leverMat);
    lever.position.set(0, 0, 0.5);
    lever.rotation.z = -0.35;
    grp.add(lever);

    grp.userData = { lever: lever, leverMat: leverMat, name: name };
    return grp;
  }

  createWireMesh(p1, p2) {
    const v1 = new THREE.Vector3(...p1);
    const v2 = new THREE.Vector3(...p2);
    const distance = v1.distanceTo(v2);
    const geom = new THREE.CylinderGeometry(0.12, 0.12, distance, 8);
    const mat = new THREE.MeshBasicMaterial({ color: 0x475569 });
    const wire = new THREE.Mesh(geom, mat);

    wire.position.copy(v1).add(v2).multiplyScalar(0.5);
    wire.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), v2.clone().sub(v1).normalize());
    return wire;
  }

  updateLogicCircuit() {
    const a = this.params.switchA ? 1 : 0;
    const b = this.params.switchB ? 1 : 0;
    let out = 0;

    switch (this.params.gateType) {
      case 'AND':
        out = (a && b) ? 1 : 0;
        break;
      case 'OR':
        out = (a || b) ? 1 : 0;
        break;
      case 'NOT':
        out = (!a) ? 1 : 0;
        break;
      case 'XOR':
        out = (a !== b) ? 1 : 0;
        break;
      default:
        out = 0;
    }

    if (this.objects.outputLED) {
      if (out === 1) {
        this.objects.outputLED.material.color.setHex(0x22c55e);
        this.objects.outputLED.material.emissive.setHex(0x16a34a);
        this.objects.outputLED.material.emissiveIntensity = 1.0;
      } else {
        this.objects.outputLED.material.color.setHex(0xef4444);
        this.objects.outputLED.material.emissive.setHex(0x7f1d1d);
        this.objects.outputLED.material.emissiveIntensity = 0.2;
      }
    }

    if (this.objects.wireInA) this.objects.wireInA.material.color.setHex(a ? 0x22c55e : 0x475569);
    if (this.objects.wireInB) this.objects.wireInB.material.color.setHex(b ? 0x22c55e : 0x475569);
    if (this.objects.wireOut) this.objects.wireOut.material.color.setHex(out ? 0x22c55e : 0x475569);

    const hud = document.getElementById('pc-part-hud');
    const hudTitle = document.getElementById('pc-hud-title');
    const hudDesc = document.getElementById('pc-hud-desc');
    if (hud && hudTitle && hudDesc) {
      hud.style.display = 'block';
      hudTitle.innerHTML = `<i class="fas fa-code-branch" style="color:#f59e0b;"></i> Mantiqiy Element: ${this.params.gateType}`;
      hudDesc.innerHTML = `Kirish A: <b>${a}</b> | Kirish B: <b>${b}</b> &rarr; Chiqish: <b style="color:${out ? '#10b981' : '#ef4444'}">${out} (${out ? 'LED YONDI' : 'O\'CHIQ'})</b>`;
    }
  }

  // ============================================================
  // 3. 8-BIT IKKILIK XOTIRA VA ASCII (BINARY BYTE)
  // ============================================================
  setupBinaryByte() {
    this.cameraRadius = 32;
    this.cameraTarget.set(0, 1.5, 0);
    this.theta = 0.55;
    this.phi = 1.1;
    this.updateCameraPosition();

    const root = new THREE.Group();
    this.scene.add(root);
    this.objects.root = root;

    const baseGeo = new THREE.BoxGeometry(26, 0.8, 10);
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.3, metalness: 0.8 });
    const base = new THREE.Mesh(baseGeo, baseMat);
    base.position.set(0, -0.4, 0);
    root.add(base);

    const busGeo = new THREE.BoxGeometry(24, 0.1, 0.4);
    const busMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
    const bus = new THREE.Mesh(busGeo, busMat);
    bus.position.set(0, 0.05, 2.2);
    root.add(bus);

    this.byteState = [0, 1, 0, 0, 0, 0, 0, 1]; // 65 = 'A' default
    this.bitMeshes = [];
    const weights = [128, 64, 32, 16, 8, 4, 2, 1];

    for (let i = 0; i < 8; i++) {
      const bitX = -9.8 + i * 2.8;

      const sockGeo = new THREE.BoxGeometry(2.2, 0.4, 2.4);
      const sockMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.5 });
      const sock = new THREE.Mesh(sockGeo, sockMat);
      sock.position.set(bitX, 0.2, 0);
      root.add(sock);

      const isOne = this.byteState[i] === 1;
      const bitGeo = new THREE.BoxGeometry(1.8, 1.6, 1.8);
      const bitMat = new THREE.MeshStandardMaterial({
        color: isOne ? 0x10b981 : 0x334155,
        emissive: isOne ? 0x059669 : 0x020617,
        emissiveIntensity: isOne ? 0.9 : 0.1,
        roughness: 0.2
      });
      const bitMesh = new THREE.Mesh(bitGeo, bitMat);
      bitMesh.position.set(bitX, 1.2, 0);
      bitMesh.userData = {
        isBitCell: true,
        bitIndex: i,
        weight: weights[i]
      };
      root.add(bitMesh);
      this.bitMeshes.push(bitMesh);

      const tagGeo = new THREE.BoxGeometry(1.6, 0.15, 0.8);
      const tagMat = new THREE.MeshStandardMaterial({ color: 0x0284c7 });
      const tag = new THREE.Mesh(tagGeo, tagMat);
      tag.position.set(bitX, 0.1, 2.2);
      root.add(tag);
    }

    const dispGeo = new THREE.BoxGeometry(18, 3.2, 0.3);
    const dispMat = new THREE.MeshBasicMaterial({ color: 0x020617 });
    const disp = new THREE.Mesh(dispGeo, dispMat);
    disp.position.set(0, 5.0, -3.5);
    disp.rotation.x = 0.12;
    root.add(disp);
    this.objects.byteDisplay = disp;

    this.lastByteTick = 0;
    this.updateByteDisplay();
  }

  updateByteDisplay() {
    let dec = 0;
    let binStr = '';
    const weights = [128, 64, 32, 16, 8, 4, 2, 1];
    for (let i = 0; i < 8; i++) {
      if (this.byteState[i] === 1) dec += weights[i];
      binStr += this.byteState[i];
    }
    const hex = '0x' + dec.toString(16).toUpperCase().padStart(2, '0');
    let asciiChar = (dec >= 32 && dec <= 126) ? String.fromCharCode(dec) : (dec === 0 ? 'NULL' : 'N/A');

    if (this.objects.byteDisplay) {
      const tex = this.createCanvasTextureText(
        `BIN: ${binStr} | DEC: ${dec}`,
        `HEX: ${hex} | ASCII: '${asciiChar}'`
      );
      this.objects.byteDisplay.material = new THREE.MeshBasicMaterial({ map: tex });
    }

    const hud = document.getElementById('pc-part-hud');
    const hudTitle = document.getElementById('pc-hud-title');
    const hudDesc = document.getElementById('pc-hud-desc');
    if (hud && hudTitle && hudDesc) {
      hud.style.display = 'block';
      hudTitle.innerHTML = `<i class="fas fa-calculator" style="color:#a855f7;"></i> 8-Bit Xotira Registri`;
      hudDesc.innerHTML = `<b>O'nlik (DEC):</b> ${dec} &nbsp;|&nbsp; <b>Ikkilik:</b> ${binStr} &nbsp;|&nbsp; <b>ASCII:</b> '${asciiChar}'`;
    }

    const valInp = document.getElementById('byte-dec-val');
    if (valInp) valInp.textContent = dec;
    const asciiEl = document.getElementById('byte-ascii-val');
    if (asciiEl) asciiEl.textContent = `'${asciiChar}'`;
    const binEl = document.getElementById('byte-bin-val');
    if (binEl) binEl.textContent = binStr;
  }

  toggleBit(idx) {
    if (!this.byteState || typeof this.byteState[idx] === 'undefined') return;
    this.byteState[idx] = this.byteState[idx] === 1 ? 0 : 1;
    const mesh = this.bitMeshes[idx];
    if (mesh) {
      const isOne = this.byteState[idx] === 1;
      mesh.material.color.setHex(isOne ? 0x10b981 : 0x334155);
      mesh.material.emissive.setHex(isOne ? 0x059669 : 0x020617);
      mesh.material.emissiveIntensity = isOne ? 0.9 : 0.1;
    }
    this.updateByteDisplay();
    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  }

  setByteValue(val) {
    let num = parseInt(val) || 0;
    num = Math.max(0, Math.min(255, num));
    for (let i = 0; i < 8; i++) {
      const bitVal = (num >> (7 - i)) & 1;
      this.byteState[i] = bitVal;
      const mesh = this.bitMeshes[i];
      if (mesh) {
        mesh.material.color.setHex(bitVal ? 0x10b981 : 0x334155);
        mesh.material.emissive.setHex(bitVal ? 0x059669 : 0x020617);
        mesh.material.emissiveIntensity = bitVal ? 0.9 : 0.1;
      }
    }
    this.updateByteDisplay();
  }

  incrementByte() {
    let dec = 0;
    const weights = [128, 64, 32, 16, 8, 4, 2, 1];
    for (let i = 0; i < 8; i++) {
      if (this.byteState[i] === 1) dec += weights[i];
    }
    dec = (dec + 1) % 256;
    this.setByteValue(dec);
    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  }

  // ============================================================
  // 4. INTERNET VA MA'LUMOTLAR OQIMI (NETWORK FLOW)
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

    const serverGeo = new THREE.BoxGeometry(4.0, 7.5, 4.0);
    const serverMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.4 });
    const server = new THREE.Mesh(serverGeo, serverMat);
    server.position.set(-10, 0, -4);
    root.add(server);

    for (let s = 0; s < 6; s++) {
      const led = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.2), new THREE.MeshBasicMaterial({ color: 0x34d399 }));
      led.position.set(-8.8 + (s % 3) * 0.8, 1.5 - Math.floor(s / 3) * 1.5, -1.9);
      root.add(led);
    }

    const routerGeo = new THREE.BoxGeometry(4.2, 1.4, 3.2);
    const routerMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.5 });
    const router = new THREE.Mesh(routerGeo, routerMat);
    router.position.set(0, 0, 2);
    root.add(router);

    for (let a = -1; a <= 1; a += 2) {
      const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 3.5), new THREE.MeshStandardMaterial({ color: 0x334155 }));
      ant.position.set(a * 1.6, 2.0, 1.8);
      ant.rotation.z = -a * 0.25;
      root.add(ant);
    }

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
        route: p % 3
      });
    }
    this.objects.packets = packets;

    const hud = document.getElementById('pc-part-hud');
    const hudTitle = document.getElementById('pc-hud-title');
    const hudDesc = document.getElementById('pc-hud-desc');
    if (hud && hudTitle && hudDesc) {
      hud.style.display = 'block';
      hudTitle.innerHTML = '<i class="fas fa-network-wired" style="color:#10b981;"></i> Internet va Tarmoq Oqimi';
      hudDesc.innerHTML = 'Server, Bulut va Router o\'rtasida paketlar uzatilmoqda. Paket tezligini boshqaring!';
    }
  }

  // ============================================================
  // 5. KIBERXAVFSIZLIK VA FIREWALL (CYBERSECURITY)
  // ============================================================
  setupCybersecurity() {
    this.cameraRadius = 36;
    this.cameraTarget.set(0, 2.5, 0);
    this.theta = 0.65;
    this.phi = 1.1;
    this.updateCameraPosition();

    const root = new THREE.Group();
    this.scene.add(root);
    this.objects.root = root;

    this.firewallActive = true;
    this.encryptionActive = true;
    this.blockedAttacks = 0;

    const grid = new THREE.GridHelper(50, 25, 0x06b6d4, 0x1e293b);
    grid.position.y = -0.1;
    root.add(grid);

    const shieldGeo = new THREE.BoxGeometry(0.8, 10, 18);
    const shieldMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x0891b2,
      emissiveIntensity: 0.6,
      transparent: true,
      opacity: 0.55,
      wireframe: true
    });
    const shield = new THREE.Mesh(shieldGeo, shieldMat);
    shield.position.set(0, 5, 0);
    root.add(shield);
    this.objects.firewallShield = shield;

    for (let z of [-9, 9]) {
      const pylon = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.7, 11), new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.8 }));
      pylon.position.set(0, 5.5, z);
      root.add(pylon);
      const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.6, 12, 12), new THREE.MeshBasicMaterial({ color: 0x06b6d4 }));
      beacon.position.set(0, 11.2, z);
      root.add(beacon);
    }

    const serverGroup = new THREE.Group();
    serverGroup.position.set(14, 0, 0);
    root.add(serverGroup);
    this.objects.cyberServer = serverGroup;

    for (let k = -1; k <= 1; k++) {
      const rack = new THREE.Mesh(new THREE.BoxGeometry(3.5, 8.5, 3.5), new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.7 }));
      rack.position.set(0, 4.25, k * 5.5);
      serverGroup.add(rack);
      for (let row = 0; row < 5; row++) {
        const led = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, 0.1), new THREE.MeshBasicMaterial({ color: 0x10b981 }));
        led.position.set(-1.6, 1.5 + row * 1.2, k * 5.5 + 0.8);
        serverGroup.add(led);
      }
    }

    const lockGroup = new THREE.Group();
    lockGroup.position.set(14, 11, 0);
    const lockBody = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2.0, 1.2), new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.9, roughness: 0.2 }));
    lockGroup.add(lockBody);
    const shackleGeo = new THREE.TorusGeometry(1.0, 0.25, 12, 24, Math.PI);
    const shackleMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.9 });
    const shackle = new THREE.Mesh(shackleGeo, shackleMat);
    shackle.position.set(0, 1.0, 0);
    lockGroup.add(shackle);
    root.add(lockGroup);
    this.objects.cyberLock = lockGroup;

    const attNode = new THREE.Mesh(new THREE.ConeGeometry(2.5, 6, 4), new THREE.MeshStandardMaterial({ color: 0xef4444, wireframe: true }));
    attNode.position.set(-16, 3, 0);
    root.add(attNode);

    this.cyberPackets = [];
    for (let p = 0; p < 14; p++) {
      const sp = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), new THREE.MeshBasicMaterial({ color: 0x10b981 }));
      root.add(sp);
      this.cyberPackets.push({
        mesh: sp,
        isVirus: false,
        x: -16 + Math.random() * 30,
        y: 1.5 + Math.random() * 6,
        z: -6 + Math.random() * 12,
        speed: 0.15 + Math.random() * 0.1
      });
    }
    for (let v = 0; v < 8; v++) {
      const vir = new THREE.Mesh(new THREE.IcosahedronGeometry(0.5, 0), new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, wireframe: true }));
      root.add(vir);
      this.cyberPackets.push({
        mesh: vir,
        isVirus: true,
        x: -18 - Math.random() * 10,
        y: 2 + Math.random() * 5,
        z: -5 + Math.random() * 10,
        speed: 0.18 + Math.random() * 0.12
      });
    }

    this.updateCyberHUD();
  }

  toggleFirewall() {
    this.firewallActive = !this.firewallActive;
    if (this.objects.firewallShield) {
      if (this.firewallActive) {
        this.objects.firewallShield.material.color.setHex(0x06b6d4);
        this.objects.firewallShield.material.opacity = 0.55;
      } else {
        this.objects.firewallShield.material.color.setHex(0xef4444);
        this.objects.firewallShield.material.opacity = 0.15;
      }
    }
    this.updateCyberHUD();
    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  }

  toggleEncryption() {
    this.encryptionActive = !this.encryptionActive;
    if (this.objects.cyberLock) {
      this.objects.cyberLock.visible = this.encryptionActive;
    }
    this.updateCyberHUD();
    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  }

  updateCyberHUD() {
    const hud = document.getElementById('pc-part-hud');
    const hudTitle = document.getElementById('pc-hud-title');
    const hudDesc = document.getElementById('pc-hud-desc');
    const fwStatus = this.firewallActive ? '<span style="color:#10b981;">FAOL (HIMOYA ON)</span>' : '<span style="color:#ef4444;">O\'CHIQLANGAN</span>';
    const aesStatus = this.encryptionActive ? '<span style="color:#38bdf8;">AES-256 (Shifrlangan)</span>' : 'Ochiq matn';

    if (hud && hudTitle && hudDesc) {
      hud.style.display = 'block';
      hudTitle.innerHTML = `<i class="fas fa-shield-alt" style="color:#ef4444;"></i> Kiberxavfsizlik va Firewall`;
      hudDesc.innerHTML = `<b>Firewall:</b> ${fwStatus} &nbsp;|&nbsp; <b>To'silgan hujumlar:</b> <span style="color:#ef4444;">${this.blockedAttacks}</span> &nbsp;|&nbsp; <b>Kripto:</b> ${aesStatus}`;
    }

    const fwBtnState = document.getElementById('fw-btn-state');
    if (fwBtnState) {
      fwBtnState.textContent = this.firewallActive ? 'YONIQ' : 'O\'CHIQ';
      fwBtnState.style.color = this.firewallActive ? '#10b981' : '#ef4444';
    }
    const fwBlocked = document.getElementById('fw-blocked-count');
    if (fwBlocked) fwBlocked.textContent = this.blockedAttacks;
  }

  // ============================================================
  // 6. 3D ALGORITM VA SARALASH (ALGORITHM SORT)
  // ============================================================
  setupAlgorithmSort() {
    this.cameraRadius = 32;
    this.cameraTarget.set(0, 3.5, 0);
    this.theta = 0.55;
    this.phi = 1.1;
    this.updateCameraPosition();

    const root = new THREE.Group();
    this.scene.add(root);
    this.objects.root = root;

    const plat = new THREE.Mesh(new THREE.BoxGeometry(26, 0.6, 6), new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.4 }));
    plat.position.set(0, -0.3, 0);
    root.add(plat);

    this.initSortArray();
  }

  initSortArray() {
    if (this.sortBars) {
      this.sortBars.forEach(b => {
        if (b.mesh.parent) b.mesh.parent.remove(b.mesh);
      });
    }

    const values = [28, 75, 15, 92, 44, 86, 32, 60];
    for (let i = values.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [values[i], values[j]] = [values[j], values[i]];
    }

    this.sortArray = [...values];
    this.sortBars = [];
    this.sortI = 0;
    this.sortJ = 0;
    this.sortSwaps = 0;
    this.sortComparisons = 0;
    this.isSortingComplete = false;
    this.lastSortTick = 0;

    const count = this.sortArray.length;
    for (let k = 0; k < count; k++) {
      const val = this.sortArray[k];
      const h = (val / 100) * 8 + 1.2;
      const barGeo = new THREE.BoxGeometry(1.8, h, 1.8);
      const color = new THREE.Color().setHSL(0.55 + (val / 100) * 0.3, 0.8, 0.55);
      const barMat = new THREE.MeshStandardMaterial({ color: color, roughness: 0.2, metalness: 0.5 });
      const barMesh = new THREE.Mesh(barGeo, barMat);

      const x = -8.5 + k * 2.4;
      barMesh.position.set(x, h / 2, 0);
      this.objects.root.add(barMesh);

      this.sortBars.push({
        value: val,
        height: h,
        mesh: barMesh,
        baseColor: color
      });
    }

    this.updateSortHUD();
    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  }

  resetBarsColor() {
    if (!this.sortBars) return;
    this.sortBars.forEach(b => {
      b.mesh.material.color.copy(b.baseColor);
    });
  }

  stepBubbleSort() {
    if (this.isSortingComplete || !this.sortBars || this.sortBars.length === 0) return;

    const n = this.sortBars.length;
    if (this.sortI < n - 1) {
      if (this.sortJ < n - this.sortI - 1) {
        this.sortComparisons++;
        const barA = this.sortBars[this.sortJ];
        const barB = this.sortBars[this.sortJ + 1];

        this.resetBarsColor();
        barA.mesh.material.color.setHex(0xf59e0b);
        barB.mesh.material.color.setHex(0xf59e0b);

        if (barA.value > barB.value) {
          this.sortSwaps++;
          barA.mesh.material.color.setHex(0xec4899);
          barB.mesh.material.color.setHex(0xec4899);

          const tempVal = this.sortArray[this.sortJ];
          this.sortArray[this.sortJ] = this.sortArray[this.sortJ + 1];
          this.sortArray[this.sortJ + 1] = tempVal;

          const posXA = barA.mesh.position.x;
          const posXB = barB.mesh.position.x;
          barA.mesh.position.x = posXB;
          barB.mesh.position.x = posXA;

          this.sortBars[this.sortJ] = barB;
          this.sortBars[this.sortJ + 1] = barA;

          if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
        }

        this.sortJ++;
      } else {
        const sortedBar = this.sortBars[n - this.sortI - 1];
        if (sortedBar) sortedBar.mesh.material.color.setHex(0x10b981);
        this.sortJ = 0;
        this.sortI++;
      }
    } else {
      this.isSortingComplete = true;
      this.sortBars.forEach(b => b.mesh.material.color.setHex(0x10b981));
      if (window.SoundFX && typeof SoundFX.playSuccess === 'function') SoundFX.playSuccess();
    }

    this.updateSortHUD();
  }

  updateSortHUD() {
    const hud = document.getElementById('pc-part-hud');
    const hudTitle = document.getElementById('pc-hud-title');
    const hudDesc = document.getElementById('pc-hud-desc');
    const statusText = this.isSortingComplete ? '<span style="color:#10b981;">TARTIBLANDI (G\'ALABA)</span>' : 'Solishtirilmoqda';

    if (hud && hudTitle && hudDesc) {
      hud.style.display = 'block';
      hudTitle.innerHTML = `<i class="fas fa-sort-amount-up-alt" style="color:#06b6d4;"></i> 3D Saralash Algoritmi (Bubble Sort)`;
      hudDesc.innerHTML = `<b>Holat:</b> ${statusText} &nbsp;|&nbsp; <b>Solishtirish:</b> ${this.sortComparisons} &nbsp;|&nbsp; <b>Almashtirish:</b> ${this.sortSwaps}`;
    }

    const compEl = document.getElementById('sort-comp-val');
    if (compEl) compEl.textContent = this.sortComparisons;
    const swapEl = document.getElementById('sort-swap-val');
    if (swapEl) swapEl.textContent = this.sortSwaps;
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

      if (this.rgbLight) {
        this.rgbLight.intensity = 1.5 + Math.sin(time * 3) * 0.4;
      }
    }

    // 2. Logic Gates
    if (this.currentExp === 'logic-gates') {
      // Barqaror
    }

    // 3. Binary Byte avto-hisoblagich
    if (this.currentExp === 'binary-byte') {
      if (!this.lastByteTick) this.lastByteTick = time;
      if (time - this.lastByteTick > 0.8) {
        this.incrementByte();
        this.lastByteTick = time;
      }
    }

    // 4. Network Flow
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
            p.mesh.position.set(-10 + pr * 10, pr * 8, -4 + pr * 4);
          } else if (p.route === 1) {
            p.mesh.position.set(0, 8 - pr * 8, pr * 2);
          } else {
            p.mesh.position.set(pr * 9, -pr * 1, 2 + pr * 2);
          }
        });
      }
    }

    // 5. Cybersecurity
    if (this.currentExp === 'cybersecurity') {
      if (this.objects.cyberLock) {
        this.objects.cyberLock.rotation.y = time * 1.2;
      }
      if (this.objects.firewallShield) {
        if (this.firewallActive) {
          this.objects.firewallShield.material.opacity = 0.5 + Math.sin(time * 4) * 0.15;
          this.objects.firewallShield.material.color.setHex(0x06b6d4);
        } else {
          this.objects.firewallShield.material.opacity = 0.15;
          this.objects.firewallShield.material.color.setHex(0xef4444);
        }
      }
      if (this.cyberPackets) {
        this.cyberPackets.forEach(p => {
          p.x += p.speed;
          p.mesh.position.set(p.x, p.y, p.z);
          if (p.isVirus) {
            p.mesh.rotation.x += 0.05;
            p.mesh.rotation.y += 0.05;
            if (p.x >= -0.5 && p.x <= 0.5) {
              if (this.firewallActive) {
                p.x = -18 - Math.random() * 10;
                p.z = -6 + Math.random() * 12;
                this.blockedAttacks++;
                this.updateCyberHUD();
              }
            }
            if (p.x >= 14) {
              p.x = -18 - Math.random() * 10;
            }
          } else {
            if (p.x >= 15) {
              p.x = -16;
              p.z = -6 + Math.random() * 12;
            }
          }
        });
      }
    }

    // 6. Algorithm Sort
    if (this.currentExp === 'algorithm-sort' && !this.isSortingComplete) {
      if (!this.lastSortTick) this.lastSortTick = time;
      if (time - this.lastSortTick > 0.45) {
        this.stepBubbleSort();
        this.lastSortTick = time;
      }
    }

    this.renderer.render(this.scene, this.camera);
  }

  // Interaktiv bosish hodisalari (Raycasting)
  handlePartClick() {
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.objects.root.children, true);

    if (this.currentExp === 'pc-inside') {
      for (let i = 0; i < intersects.length; i++) {
        let obj = intersects[i].object;
        while (obj && !obj.userData.name && obj.parent !== this.objects.root) {
          obj = obj.parent;
        }
        if (obj && obj.userData.name) {
          const hudTitle = document.getElementById('pc-hud-title');
          const hudDesc = document.getElementById('pc-hud-desc');
          if (hudTitle && hudDesc) {
            hudTitle.innerHTML = `<i class="fas fa-microchip"></i> ` + obj.userData.name;
            hudDesc.textContent = obj.userData.desc;
          }
          const compTitle = document.getElementById('comp-info-title');
          const compDesc = document.getElementById('comp-info-desc');
          if (compTitle) compTitle.textContent = obj.userData.name;
          if (compDesc) compDesc.textContent = obj.userData.desc;
          if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
          break;
        }
      }
    } else if (this.currentExp === 'binary-byte') {
      for (let i = 0; i < intersects.length; i++) {
        let obj = intersects[i].object;
        if (obj && obj.userData && obj.userData.isBitCell) {
          this.toggleBit(obj.userData.bitIndex);
          break;
        }
      }
    } else if (this.currentExp === 'cybersecurity') {
      this.toggleFirewall();
    } else if (this.currentExp === 'algorithm-sort') {
      this.stepBubbleSort();
    }
  }

  triggerQuickAction() {
    if (this.currentExp === 'pc-inside') {
      this.toggleTurbo();
    } else if (this.currentExp === 'logic-gates') {
      this.toggleSwitch('A');
    } else if (this.currentExp === 'binary-byte') {
      this.incrementByte();
    } else if (this.currentExp === 'network-flow') {
      this.burstPackets();
    } else if (this.currentExp === 'cybersecurity') {
      this.toggleFirewall();
    } else if (this.currentExp === 'algorithm-sort') {
      this.initSortArray();
    }
    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  }

  toggleTurbo() {
    this.isTurbo = !this.isTurbo;
    this.params.fanSpeed = this.isTurbo ? 3.0 : 1.5;
    const slider = document.getElementById('slider-comp-fan');
    if (slider) slider.value = this.params.fanSpeed;
    const valEl = document.getElementById('slider-comp-fan-val');
    if (valEl) valEl.textContent = this.isTurbo ? '3.0x (TURBO)' : '1.5x';

    const hudTitle = document.getElementById('pc-hud-title');
    const hudDesc = document.getElementById('pc-hud-desc');
    if (hudTitle && hudDesc) {
      if (this.isTurbo) {
        hudTitle.innerHTML = '<i class="fas fa-bolt" style="color:#f59e0b;"></i> Turbo Sovutish Faol!';
        hudDesc.textContent = "Protsessor va videokarta ventilyatorlari maksimal 3000 RPM tezlikda aylanmoqda.";
      } else {
        hudTitle.innerHTML = '<i class="fas fa-microchip"></i> Standart Rejim';
        hudDesc.textContent = "Ventilyatorlar sokin 1500 RPM tezlikda aylanmoqda.";
      }
    }
  }

  burstPackets() {
    this.params.packetSpeed = (this.params.packetSpeed > 1.8) ? 1.2 : 2.5;
    const slider = document.getElementById('slider-comp-packet');
    if (slider) slider.value = this.params.packetSpeed;
    const valEl = document.getElementById('slider-comp-packet-val');
    if (valEl) valEl.textContent = this.params.packetSpeed + 'x';
  }

  resetExperiment() {
    if (this.currentExp === 'pc-inside') {
      this.isTurbo = false;
      this.params.fanSpeed = 1.5;
      const s1 = document.getElementById('slider-comp-fan');
      if (s1) s1.value = 1.5;
      const v1 = document.getElementById('slider-comp-fan-val');
      if (v1) v1.textContent = '1.5x';
    } else if (this.currentExp === 'logic-gates') {
      this.params.switchA = false;
      this.params.switchB = false;
      this.updateLogicCircuit();
    } else if (this.currentExp === 'binary-byte') {
      this.setByteValue(0);
    } else if (this.currentExp === 'network-flow') {
      this.params.packetSpeed = 1.2;
    } else if (this.currentExp === 'cybersecurity') {
      this.firewallActive = true;
      this.blockedAttacks = 0;
      this.updateCyberHUD();
    } else if (this.currentExp === 'algorithm-sort') {
      this.initSortArray();
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

    // O'ng paneldagi slayderlarni almashtirish
    const sliders = ['pc-inside', 'logic-gates', 'binary-byte', 'network-flow', 'cybersecurity', 'algorithm-sort'];
    sliders.forEach(s => {
      const el = document.getElementById('comp-sliders-' + s);
      if (el) el.style.display = (name === s) ? 'block' : 'none';
    });

    // Tezkor harakat tugmasini yangilash
    const actBtn = document.getElementById('comp-action-btn');
    if (actBtn) {
      if (name === 'pc-inside') actBtn.innerHTML = '<i class="fas fa-bolt"></i> Turbo rejim';
      else if (name === 'logic-gates') actBtn.innerHTML = '<i class="fas fa-toggle-on"></i> Kalitni almashtirish';
      else if (name === 'binary-byte') actBtn.innerHTML = '<i class="fas fa-plus"></i> +1 Qo\'shish';
      else if (name === 'network-flow') actBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Paket jo\'natish';
      else if (name === 'cybersecurity') actBtn.innerHTML = '<i class="fas fa-shield-alt"></i> Firewall Qalqoni';
      else if (name === 'algorithm-sort') actBtn.innerHTML = '<i class="fas fa-random"></i> Aralashtirish';
    }
  }
};

window.startComputerExperiment = function () {
  if (window.computerLabInstance) {
    window.computerLabInstance.isRunning = true;
    if (typeof window.updateLabExplanation === 'function') {
      window.updateLabExplanation('computer', window.computerLabInstance.currentExp, true);
    }
    const startBtn = document.getElementById('comp-start-btn');
    const pauseBtn = document.getElementById('comp-pause-btn');
    if (startBtn) startBtn.disabled = true;
    if (pauseBtn) pauseBtn.disabled = false;
    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  }
};

window.pauseComputerExperiment = function () {
  if (window.computerLabInstance) {
    window.computerLabInstance.isRunning = false;
    if (typeof window.updateLabExplanation === 'function') {
      window.updateLabExplanation('computer', window.computerLabInstance.currentExp, false);
    }
    const startBtn = document.getElementById('comp-start-btn');
    const pauseBtn = document.getElementById('comp-pause-btn');
    if (startBtn) startBtn.disabled = false;
    if (pauseBtn) pauseBtn.disabled = true;
    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  }
};

window.resetComputerExperiment = function () {
  if (window.computerLabInstance) {
    window.computerLabInstance.resetExperiment();
    window.computerLabInstance.isRunning = true;
    if (typeof window.updateLabExplanation === 'function') {
      window.updateLabExplanation('computer', window.computerLabInstance.currentExp, true);
    }
    const startBtn = document.getElementById('comp-start-btn');
    const pauseBtn = document.getElementById('comp-pause-btn');
    if (startBtn) startBtn.disabled = true;
    if (pauseBtn) pauseBtn.disabled = false;
    if (window.SoundFX && typeof SoundFX.playClick === 'function') SoundFX.playClick();
  }
};
