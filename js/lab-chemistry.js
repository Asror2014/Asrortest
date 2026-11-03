/**
 * EduPlatforma - 3D Interactive Chemistry Laboratory
 * Uses Three.js (loaded globally from CDN)
 * 
 * Experiments:
 *   1. Copper + Acid Reaction
 *   2. Water Electrolysis
 *   3. Volcano (Baking Soda + Vinegar)
 *   4. pH Indicators
 *   5. Crystal Growing
 */

class ChemistryLab {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      console.error('ChemistryLab: container not found:', containerId);
      return;
    }
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.clock = null;
    this.objects = {};
    this.experimentObjects = [];
    this.bubbles = [];
    this.currentExperiment = null;
    this.animationId = null;
    this.isRunning = false;
    this.elapsedTime = 0;
    this.labTable = null;

    // Camera orbit state
    this.isDragging = false;
    this.previousMouse = { x: 0, y: 0 };
    this.theta = Math.PI / 4;
    this.phi = Math.PI / 3;
    this.cameraRadius = 6;
    this.cameraTarget = new THREE.Vector3(0, 0.5, 0);
  }

  init() {
    if (!this.container) return;

    const width = this.container.clientWidth || 800;
    const height = this.container.clientHeight || 600;

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf0f2f5);
    this.scene.fog = new THREE.Fog(0xf0f2f5, 12, 22);

    // Camera
    this.camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100);
    this.updateCameraPosition();

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;
    this.container.appendChild(this.renderer.domElement);

    // Clock
    this.clock = new THREE.Clock();

    // Lights
    this.setupLights();

    // Lab table
    this.createLabTable();

    // Floor
    this.createFloor();

    // Camera controls
    this.setupCameraControls();

    // Window resize
    this._onResize = () => this.onResize();
    window.addEventListener('resize', this._onResize);

    // Start render loop
    this.animate();
  }

  setupLights() {
    // Ambient light
    const ambient = new THREE.AmbientLight(0x606070, 0.6);
    this.scene.add(ambient);

    // Main directional light (sun-like)
    const dirLight = new THREE.DirectionalLight(0xfff5e6, 1.0);
    dirLight.position.set(5, 8, 4);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 25;
    dirLight.shadow.camera.left = -6;
    dirLight.shadow.camera.right = 6;
    dirLight.shadow.camera.top = 6;
    dirLight.shadow.camera.bottom = -6;
    dirLight.shadow.bias = -0.001;
    this.scene.add(dirLight);

    // Fill light from opposite side
    const fillLight = new THREE.DirectionalLight(0xc4d4ff, 0.35);
    fillLight.position.set(-4, 5, -3);
    this.scene.add(fillLight);

    // Overhead point light for lab feel
    const overheadLight = new THREE.PointLight(0xffffff, 0.5, 15);
    overheadLight.position.set(0, 5, 0);
    this.scene.add(overheadLight);
  }

  createLabTable() {
    const tableGroup = new THREE.Group();

    // Table top
    const topGeo = new THREE.BoxGeometry(5, 0.12, 3);
    const topMat = new THREE.MeshStandardMaterial({
      color: 0x5c3a1e,
      roughness: 0.7,
      metalness: 0.05
    });
    const top = new THREE.Mesh(topGeo, topMat);
    top.position.set(0, 0, 0);
    top.castShadow = true;
    top.receiveShadow = true;
    tableGroup.add(top);

    // Table edge trim
    const trimGeo = new THREE.BoxGeometry(5.06, 0.04, 3.06);
    const trimMat = new THREE.MeshStandardMaterial({ color: 0x3e2510, roughness: 0.5 });
    const trim = new THREE.Mesh(trimGeo, trimMat);
    trim.position.set(0, 0.08, 0);
    tableGroup.add(trim);

    // Four legs
    const legGeo = new THREE.CylinderGeometry(0.06, 0.06, 1.5, 8);
    const legMat = new THREE.MeshStandardMaterial({ color: 0x3e2510, roughness: 0.6, metalness: 0.2 });
    const legPositions = [
      [-2.3, -0.75, -1.3],
      [2.3, -0.75, -1.3],
      [-2.3, -0.75, 1.3],
      [2.3, -0.75, 1.3]
    ];
    legPositions.forEach(pos => {
      const leg = new THREE.Mesh(legGeo, legMat);
      leg.position.set(pos[0], pos[1], pos[2]);
      leg.castShadow = true;
      tableGroup.add(leg);
    });

    this.scene.add(tableGroup);
    this.labTable = tableGroup;
  }

  createFloor() {
    const floorGeo = new THREE.PlaneGeometry(20, 20);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0xd0d0d0,
      roughness: 0.9,
      metalness: 0.0
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1.5;
    floor.receiveShadow = true;
    this.scene.add(floor);
  }

  // =============================================
  // UTILITY: Create a glass beaker
  // =============================================
  createBeaker(x, y, z, height = 1.0, radius = 0.35) {
    const group = new THREE.Group();

    // Glass body
    const bodyGeo = new THREE.CylinderGeometry(radius, radius * 0.92, height, 32, 1, true);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xddeeff,
      transparent: true,
      opacity: 0.22,
      roughness: 0.05,
      metalness: 0.0,
      transmission: 0.85,
      thickness: 0.3,
      side: THREE.DoubleSide
    });
    const body = new THREE.Mesh(bodyGeo, glassMat);
    body.position.y = height / 2;
    group.add(body);

    // Bottom
    const bottomGeo = new THREE.CircleGeometry(radius * 0.92, 32);
    const bottom = new THREE.Mesh(bottomGeo, glassMat.clone());
    bottom.rotation.x = -Math.PI / 2;
    bottom.position.y = 0.01;
    group.add(bottom);

    // Rim
    const rimGeo = new THREE.TorusGeometry(radius, 0.012, 8, 32);
    const rimMat = new THREE.MeshStandardMaterial({ color: 0xccddee, roughness: 0.1, metalness: 0.3 });
    const rim = new THREE.Mesh(rimGeo, rimMat);
    rim.rotation.x = Math.PI / 2;
    rim.position.y = height;
    group.add(rim);

    // Measurement lines
    for (let i = 1; i <= 4; i++) {
      const lineGeo = new THREE.BoxGeometry(0.005, 0.002, radius * 0.3);
      const lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
      const line = new THREE.Mesh(lineGeo, lineMat);
      line.position.set(radius - 0.01, height * (i / 5), 0);
      group.add(line);
    }

    group.position.set(x, y, z);
    return group;
  }

  // =============================================
  // UTILITY: Create a test tube
  // =============================================
  createTestTube(x, y, z, height = 0.8) {
    const group = new THREE.Group();
    const radius = 0.06;

    // Tube body
    const tubeGeo = new THREE.CylinderGeometry(radius, radius, height, 16, 1, true);
    const tubeMat = new THREE.MeshPhysicalMaterial({
      color: 0xeef4ff,
      transparent: true,
      opacity: 0.2,
      roughness: 0.02,
      metalness: 0.0,
      transmission: 0.9,
      thickness: 0.15,
      side: THREE.DoubleSide
    });
    const tube = new THREE.Mesh(tubeGeo, tubeMat);
    tube.position.y = height / 2;
    group.add(tube);

    // Rounded bottom
    const bottomGeo = new THREE.SphereGeometry(radius, 16, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2);
    const bottom = new THREE.Mesh(bottomGeo, tubeMat.clone());
    bottom.position.y = 0;
    group.add(bottom);

    // Rim at top
    const rimGeo = new THREE.TorusGeometry(radius + 0.01, 0.008, 6, 16);
    const rimMat = new THREE.MeshStandardMaterial({ color: 0xddeeff, roughness: 0.1 });
    const rim = new THREE.Mesh(rimGeo, rimMat);
    rim.rotation.x = Math.PI / 2;
    rim.position.y = height;
    group.add(rim);

    group.position.set(x, y, z);
    return group;
  }

  // =============================================
  // UTILITY: Create liquid inside a container
  // =============================================
  createLiquid(x, y, z, color, fillLevel = 0.7, radius = 0.33, maxHeight = 1.0) {
    const liquidHeight = maxHeight * fillLevel;
    const geo = new THREE.CylinderGeometry(radius, radius * 0.9, liquidHeight, 32);
    const mat = new THREE.MeshPhysicalMaterial({
      color: color,
      transparent: true,
      opacity: 0.6,
      roughness: 0.2,
      metalness: 0.0,
      transmission: 0.3,
      thickness: 0.5
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y + liquidHeight / 2, z);
    return mesh;
  }

  // =============================================
  // UTILITY: Create bubbles
  // =============================================
  createBubbleParticle(x, y, z, color = 0xffffff) {
    const size = 0.015 + Math.random() * 0.04;
    const geo = new THREE.SphereGeometry(size, 8, 8);
    const mat = new THREE.MeshPhysicalMaterial({
      color: color,
      transparent: true,
      opacity: 0.5,
      roughness: 0.0,
      metalness: 0.1,
      transmission: 0.5
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(
      x + (Math.random() - 0.5) * 0.15,
      y,
      z + (Math.random() - 0.5) * 0.15
    );
    mesh.userData.speed = 0.3 + Math.random() * 0.6;
    mesh.userData.drift = (Math.random() - 0.5) * 0.3;
    mesh.userData.maxY = y + 0.6 + Math.random() * 0.3;
    return mesh;
  }

  // =============================================
  // EXPERIMENT 1: Copper + Acid Reaction
  // Mis va suyultirilgan xlorid kislota (HCl) reaksiyasi
  // =============================================
  setupExperiment_CopperAcid() {
    this.clearExperiment();
    this.currentExperiment = 'copper-acid';
    this.elapsedTime = 0;

    // Beaker
    const beaker = this.createBeaker(0, 0.1, 0, 1.0, 0.4);
    beaker.name = 'beaker';
    this.scene.add(beaker);
    this.experimentObjects.push(beaker);

    // Liquid (light blue acid)
    const liquid = this.createLiquid(0, 0.1, 0, 0x44aadd, 0.65, 0.37, 1.0);
    liquid.name = 'liquid';
    this.scene.add(liquid);
    this.experimentObjects.push(liquid);
    this.objects.liquid = liquid;

    // Copper piece (orange-brown metallic)
    const copperGeo = new THREE.BoxGeometry(0.15, 0.15, 0.15);
    const copperMat = new THREE.MeshStandardMaterial({
      color: 0xd4652a,
      roughness: 0.3,
      metalness: 0.9
    });
    const copper = new THREE.Mesh(copperGeo, copperMat);
    copper.position.set(0.8, 0.22, 0);
    copper.castShadow = true;
    copper.name = 'copper';
    this.scene.add(copper);
    this.experimentObjects.push(copper);
    this.objects.copper = copper;

    // Store initial copper position and target
    this.objects.copperStart = new THREE.Vector3(0.8, 0.22, 0);
    this.objects.copperTarget = new THREE.Vector3(0, 0.45, 0);
    this.objects.copperInBeaker = false;
    this.objects.dissolveProgress = 0;
    this.objects.colorProgress = 0;
    this.objects.liquidOrigColor = new THREE.Color(0x44aadd);
    this.objects.liquidTargetColor = new THREE.Color(0x22aa55);

    // Label
    const labelInfo = {
      title: "Mis + HCl reaksiyasi",
      formula: "Cu + 2HCl → CuCl₂ + H₂↑"
    };
    this.objects.labelInfo = labelInfo;
  }

  animateExperiment_CopperAcid(delta) {
    this.elapsedTime += delta;
    const t = this.elapsedTime;

    const copper = this.objects.copper;
    const liquid = this.objects.liquid;
    if (!copper || !liquid) return;

    // Phase 1: Move copper into beaker (0-2s)
    if (t < 2.0) {
      const p = Math.min(t / 2.0, 1.0);
      const ease = p * p * (3 - 2 * p); // smoothstep
      copper.position.lerpVectors(this.objects.copperStart, this.objects.copperTarget, ease);
      // Rotate slightly as it moves
      copper.rotation.y = ease * Math.PI * 0.5;
    }
    // Phase 2: Dissolving + color change (2-8s)
    else if (t < 8.0) {
      if (!this.objects.copperInBeaker) {
        this.objects.copperInBeaker = true;
        copper.position.copy(this.objects.copperTarget);
      }

      const phase = (t - 2.0) / 6.0; // 0 to 1

      // Copper shrinks (dissolving)
      const scale = Math.max(0.05, 1.0 - phase * 0.9);
      copper.scale.set(scale, scale, scale);

      // Copper sinks slightly
      copper.position.y = 0.45 - phase * 0.15;

      // Liquid changes color (blue → green)
      const currentColor = new THREE.Color();
      currentColor.lerpColors(this.objects.liquidOrigColor, this.objects.liquidTargetColor, phase);
      liquid.material.color.copy(currentColor);

      // Create bubbles (H₂ gas)
      if (Math.random() < 0.3) {
        const bubble = this.createBubbleParticle(0, 0.25, 0, 0xffffff);
        bubble.userData.maxY = 1.1;
        this.scene.add(bubble);
        this.experimentObjects.push(bubble);
        this.bubbles.push(bubble);
      }
    }

    // Animate existing bubbles
    for (let i = this.bubbles.length - 1; i >= 0; i--) {
      const b = this.bubbles[i];
      b.position.y += b.userData.speed * delta;
      b.position.x += b.userData.drift * delta;
      b.material.opacity -= delta * 0.4;
      if (b.position.y > b.userData.maxY || b.material.opacity <= 0) {
        this.scene.remove(b);
        b.geometry.dispose();
        b.material.dispose();
        this.bubbles.splice(i, 1);
        const idx = this.experimentObjects.indexOf(b);
        if (idx > -1) this.experimentObjects.splice(idx, 1);
      }
    }
  }

  // =============================================
  // EXPERIMENT 2: Water Electrolysis
  // Suvni elektroliz qilish
  // =============================================
  setupExperiment_WaterElectrolysis() {
    this.clearExperiment();
    this.currentExperiment = 'electrolysis';
    this.elapsedTime = 0;

    // Water container (transparent box)
    const containerGeo = new THREE.BoxGeometry(1.6, 1.0, 0.8);
    const containerMat = new THREE.MeshPhysicalMaterial({
      color: 0xddeeff,
      transparent: true,
      opacity: 0.18,
      roughness: 0.02,
      metalness: 0.0,
      transmission: 0.88,
      thickness: 0.4,
      side: THREE.DoubleSide
    });
    const container = new THREE.Mesh(containerGeo, containerMat);
    container.position.set(0, 0.6, 0);
    this.scene.add(container);
    this.experimentObjects.push(container);

    // Water
    const waterGeo = new THREE.BoxGeometry(1.55, 0.85, 0.75);
    const waterMat = new THREE.MeshPhysicalMaterial({
      color: 0x4488cc,
      transparent: true,
      opacity: 0.4,
      roughness: 0.1,
      transmission: 0.5,
      thickness: 0.5
    });
    const water = new THREE.Mesh(waterGeo, waterMat);
    water.position.set(0, 0.53, 0);
    this.scene.add(water);
    this.experimentObjects.push(water);

    // Electrodes (two vertical rods)
    const electrodeGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.9, 12);
    const electrodeMat = new THREE.MeshStandardMaterial({ color: 0x888899, roughness: 0.2, metalness: 0.9 });

    const cathode = new THREE.Mesh(electrodeGeo, electrodeMat);
    cathode.position.set(-0.35, 0.6, 0);
    cathode.name = 'cathode';
    this.scene.add(cathode);
    this.experimentObjects.push(cathode);

    const anode = new THREE.Mesh(electrodeGeo, electrodeMat.clone());
    anode.position.set(0.35, 0.6, 0);
    anode.name = 'anode';
    this.scene.add(anode);
    this.experimentObjects.push(anode);

    // Inverted test tubes over electrodes
    const tubeLeft = this.createInvertedTube(-0.35, 0.55, 0);
    this.scene.add(tubeLeft);
    this.experimentObjects.push(tubeLeft);
    this.objects.tubeLeftGas = null;

    const tubeRight = this.createInvertedTube(0.35, 0.55, 0);
    this.scene.add(tubeRight);
    this.experimentObjects.push(tubeRight);

    // Battery
    const batteryGroup = new THREE.Group();
    const battGeo = new THREE.BoxGeometry(0.4, 0.25, 0.2);
    const battMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.5 });
    const batt = new THREE.Mesh(battGeo, battMat);
    batteryGroup.add(batt);

    // + terminal (red)
    const termPlusGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.06, 8);
    const termPlusMat = new THREE.MeshStandardMaterial({ color: 0xff3333, metalness: 0.8 });
    const termPlus = new THREE.Mesh(termPlusGeo, termPlusMat);
    termPlus.position.set(0.12, 0.15, 0);
    batteryGroup.add(termPlus);

    // - terminal (black)
    const termMinusMat = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.8 });
    const termMinus = new THREE.Mesh(termPlusGeo.clone(), termMinusMat);
    termMinus.position.set(-0.12, 0.15, 0);
    batteryGroup.add(termMinus);

    batteryGroup.position.set(0, 0.25, 1.0);
    this.scene.add(batteryGroup);
    this.experimentObjects.push(batteryGroup);

    // Wires
    const wireMat1 = new THREE.MeshStandardMaterial({ color: 0xcc2222, roughness: 0.4 });
    const wireMat2 = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.4 });
    this.createWire(0.12, 0.38, 1.0, 0.35, 1.1, 0, wireMat1);
    this.createWire(-0.12, 0.38, 1.0, -0.35, 1.1, 0, wireMat2);

    // Electrode glow storage
    this.objects.cathodeGlow = null;
    this.objects.anodeGlow = null;
    this.objects.gasLeftLevel = 0;
    this.objects.gasRightLevel = 0;
  }

  createInvertedTube(x, y, z) {
    const group = new THREE.Group();
    const radius = 0.08;
    const height = 0.5;

    const tubeGeo = new THREE.CylinderGeometry(radius, radius, height, 16, 1, true);
    const tubeMat = new THREE.MeshPhysicalMaterial({
      color: 0xeef4ff,
      transparent: true,
      opacity: 0.18,
      roughness: 0.02,
      transmission: 0.9,
      thickness: 0.15,
      side: THREE.DoubleSide
    });
    const tube = new THREE.Mesh(tubeGeo, tubeMat);
    tube.position.y = height / 2;
    group.add(tube);

    // Closed top
    const topGeo = new THREE.SphereGeometry(radius, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2);
    const top = new THREE.Mesh(topGeo, tubeMat.clone());
    top.position.y = height;
    group.add(top);

    group.position.set(x, y, z);
    return group;
  }

  createWire(x1, y1, z1, x2, y2, z2, mat) {
    // Simplified wire as a series of segments
    const points = [
      new THREE.Vector3(x1, y1, z1),
      new THREE.Vector3(x1, y1 + 0.3, z1 - 0.3),
      new THREE.Vector3(x2, y2, z2)
    ];
    const curve = new THREE.CatmullRomCurve3(points);
    const tubeGeo = new THREE.TubeGeometry(curve, 12, 0.012, 6, false);
    const wire = new THREE.Mesh(tubeGeo, mat);
    this.scene.add(wire);
    this.experimentObjects.push(wire);
  }

  animateExperiment_WaterElectrolysis(delta) {
    this.elapsedTime += delta;

    // Create bubbles at cathode (more - hydrogen 2:1)
    if (Math.random() < 0.4) {
      const bCathode = this.createBubbleParticle(-0.35, 0.25, 0, 0xccddff);
      bCathode.userData.maxY = 1.05;
      this.scene.add(bCathode);
      this.experimentObjects.push(bCathode);
      this.bubbles.push(bCathode);
    }
    if (Math.random() < 0.4) {
      const bCathode2 = this.createBubbleParticle(-0.35, 0.25, 0, 0xccddff);
      bCathode2.userData.maxY = 1.05;
      this.scene.add(bCathode2);
      this.experimentObjects.push(bCathode2);
      this.bubbles.push(bCathode2);
    }

    // Create bubbles at anode (less - oxygen)
    if (Math.random() < 0.25) {
      const bAnode = this.createBubbleParticle(0.35, 0.25, 0, 0xffeedd);
      bAnode.userData.maxY = 1.05;
      this.scene.add(bAnode);
      this.experimentObjects.push(bAnode);
      this.bubbles.push(bAnode);
    }

    // Animate bubbles
    for (let i = this.bubbles.length - 1; i >= 0; i--) {
      const b = this.bubbles[i];
      b.position.y += b.userData.speed * delta;
      b.position.x += b.userData.drift * delta * 0.3;
      b.material.opacity -= delta * 0.3;
      if (b.position.y > b.userData.maxY || b.material.opacity <= 0) {
        this.scene.remove(b);
        b.geometry.dispose();
        b.material.dispose();
        this.bubbles.splice(i, 1);
        const idx = this.experimentObjects.indexOf(b);
        if (idx > -1) this.experimentObjects.splice(idx, 1);
      }
    }
  }

  // =============================================
  // EXPERIMENT 3: Volcano (Baking Soda + Vinegar)
  // Vulqon tajribasi
  // =============================================
  setupExperiment_Volcano() {
    this.clearExperiment();
    this.currentExperiment = 'volcano';
    this.elapsedTime = 0;

    // Volcano cone
    const volcanoGeo = new THREE.ConeGeometry(1.0, 1.2, 32, 1, true);
    const volcanoMat = new THREE.MeshStandardMaterial({
      color: 0x6b4226,
      roughness: 0.95,
      metalness: 0.0
    });
    const volcano = new THREE.Mesh(volcanoGeo, volcanoMat);
    volcano.position.set(0, 0.7, 0);
    volcano.castShadow = true;
    this.scene.add(volcano);
    this.experimentObjects.push(volcano);

    // Volcano rim (torus at top)
    const rimGeo = new THREE.TorusGeometry(0.18, 0.04, 8, 24);
    const rimMat = new THREE.MeshStandardMaterial({ color: 0x4a2e14, roughness: 0.9 });
    const rim = new THREE.Mesh(rimGeo, rimMat);
    rim.rotation.x = Math.PI / 2;
    rim.position.set(0, 1.3, 0);
    this.scene.add(rim);
    this.experimentObjects.push(rim);

    // Inner crater (dark disc)
    const craterGeo = new THREE.CircleGeometry(0.16, 24);
    const craterMat = new THREE.MeshStandardMaterial({ color: 0x2a1508, roughness: 1.0 });
    const crater = new THREE.Mesh(craterGeo, craterMat);
    crater.rotation.x = -Math.PI / 2;
    crater.position.set(0, 1.28, 0);
    this.scene.add(crater);
    this.experimentObjects.push(crater);

    // White baking soda powder (small flat disc inside crater)
    const sodaGeo = new THREE.CylinderGeometry(0.12, 0.14, 0.04, 16);
    const sodaMat = new THREE.MeshStandardMaterial({ color: 0xf5f5f0, roughness: 0.95 });
    const soda = new THREE.Mesh(sodaGeo, sodaMat);
    soda.position.set(0, 1.27, 0);
    soda.name = 'soda';
    this.scene.add(soda);
    this.experimentObjects.push(soda);
    this.objects.soda = soda;

    // Vinegar bottle
    const bottleGroup = new THREE.Group();
    const bottleBodyGeo = new THREE.CylinderGeometry(0.1, 0.12, 0.4, 16);
    const bottleMat = new THREE.MeshPhysicalMaterial({
      color: 0xddcc88,
      transparent: true,
      opacity: 0.5,
      roughness: 0.1,
      transmission: 0.6
    });
    const bottleBody = new THREE.Mesh(bottleBodyGeo, bottleMat);
    bottleGroup.add(bottleBody);

    // Bottle neck
    const neckGeo = new THREE.CylinderGeometry(0.04, 0.06, 0.15, 12);
    const neck = new THREE.Mesh(neckGeo, bottleMat.clone());
    neck.position.y = 0.27;
    bottleGroup.add(neck);

    // Cap
    const capGeo = new THREE.CylinderGeometry(0.045, 0.045, 0.04, 12);
    const capMat = new THREE.MeshStandardMaterial({ color: 0xcc3333 });
    const cap = new THREE.Mesh(capGeo, capMat);
    cap.position.y = 0.36;
    bottleGroup.add(cap);

    bottleGroup.position.set(1.0, 0.35, 0.3);
    bottleGroup.name = 'vinegar';
    this.scene.add(bottleGroup);
    this.experimentObjects.push(bottleGroup);
    this.objects.vinegar = bottleGroup;
    this.objects.vinegarStart = bottleGroup.position.clone();

    // Foam particles storage
    this.objects.foamParticles = [];
    this.objects.pouringPhase = false;
    this.objects.eruptionPhase = false;
  }

  animateExperiment_Volcano(delta) {
    this.elapsedTime += delta;
    const t = this.elapsedTime;

    // Phase 1: Bottle moves and tilts (0-3s)
    if (t < 3.0) {
      const p = Math.min(t / 2.5, 1.0);
      const ease = p * p * (3 - 2 * p);

      const targetPos = new THREE.Vector3(0.15, 1.5, 0.1);
      this.objects.vinegar.position.lerpVectors(this.objects.vinegarStart, targetPos, ease);
      this.objects.vinegar.rotation.z = ease * (-Math.PI / 3);
    }
    // Phase 2: Eruption (3s+)
    else {
      if (!this.objects.eruptionPhase) {
        this.objects.eruptionPhase = true;
        // Move vinegar bottle back
        this.objects.vinegar.position.copy(this.objects.vinegarStart);
        this.objects.vinegar.rotation.z = 0;
      }

      // Create foam particles rising from crater
      const intensity = Math.min((t - 3.0) / 2.0, 1.0);
      const spawnRate = 0.6 * intensity;

      if (Math.random() < spawnRate) {
        const foamGeo = new THREE.SphereGeometry(0.03 + Math.random() * 0.06, 6, 6);
        const foamColor = new THREE.Color().lerpColors(
          new THREE.Color(0xff4400),
          new THREE.Color(0xffaa00),
          Math.random()
        );
        const foamMat = new THREE.MeshStandardMaterial({
          color: foamColor,
          transparent: true,
          opacity: 0.85,
          roughness: 0.8
        });
        const foam = new THREE.Mesh(foamGeo, foamMat);
        foam.position.set(
          (Math.random() - 0.5) * 0.12,
          1.3,
          (Math.random() - 0.5) * 0.12
        );
        foam.userData.vx = (Math.random() - 0.5) * 0.4;
        foam.userData.vy = 0.5 + Math.random() * 0.8;
        foam.userData.vz = (Math.random() - 0.5) * 0.4;
        foam.userData.life = 1.0;

        this.scene.add(foam);
        this.experimentObjects.push(foam);
        this.objects.foamParticles.push(foam);
      }

      // Animate foam
      for (let i = this.objects.foamParticles.length - 1; i >= 0; i--) {
        const f = this.objects.foamParticles[i];
        f.position.x += f.userData.vx * delta;
        f.position.y += f.userData.vy * delta;
        f.position.z += f.userData.vz * delta;

        // Gravity pulls foam down after it rises
        f.userData.vy -= 1.5 * delta;

        // Foam flows down volcano sides when below crater
        if (f.position.y < 1.3 && f.position.y > 0.3) {
          const dist = Math.sqrt(f.position.x * f.position.x + f.position.z * f.position.z);
          if (dist < 0.01) dist === 0.01;
          f.userData.vx += (f.position.x / (dist + 0.01)) * 0.3 * delta;
          f.userData.vz += (f.position.z / (dist + 0.01)) * 0.3 * delta;
        }

        f.userData.life -= delta * 0.25;
        f.material.opacity = Math.max(0, f.userData.life * 0.85);

        if (f.userData.life <= 0 || f.position.y < 0.0) {
          this.scene.remove(f);
          f.geometry.dispose();
          f.material.dispose();
          this.objects.foamParticles.splice(i, 1);
          const idx = this.experimentObjects.indexOf(f);
          if (idx > -1) this.experimentObjects.splice(idx, 1);
        }
      }
    }
  }

  // =============================================
  // EXPERIMENT 4: pH Indicators
  // pH indikatorlari
  // =============================================
  setupExperiment_PHIndicators() {
    this.clearExperiment();
    this.currentExperiment = 'indicators';
    this.elapsedTime = 0;

    const colors = [0xee3333, 0xee7733, 0xddcc22, 0x44bb44, 0x3366cc, 0x6633aa];
    const pHValues = [1, 3, 5, 7, 9, 14];
    const tubeCount = colors.length;
    const spacing = 0.35;
    const startX = -((tubeCount - 1) * spacing) / 2;

    this.objects.tubeData = [];

    for (let i = 0; i < tubeCount; i++) {
      const x = startX + i * spacing;

      // Test tube
      const tube = this.createTestTube(x, 0.12, 0);
      this.scene.add(tube);
      this.experimentObjects.push(tube);

      // Liquid inside (starts clear/white)
      const liqGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.45, 12);
      const liqMat = new THREE.MeshPhysicalMaterial({
        color: 0xdddddd,
        transparent: true,
        opacity: 0.45,
        roughness: 0.2,
        transmission: 0.4
      });
      const liq = new THREE.Mesh(liqGeo, liqMat);
      liq.position.set(x, 0.35, 0);
      this.scene.add(liq);
      this.experimentObjects.push(liq);

      this.objects.tubeData.push({
        liquid: liq,
        targetColor: new THREE.Color(colors[i]),
        startColor: new THREE.Color(0xdddddd),
        pH: pHValues[i],
        changed: false
      });
    }

    // Dropper/pipette
    const dropperGroup = new THREE.Group();
    const dBarrel = new THREE.CylinderGeometry(0.02, 0.025, 0.35, 8);
    const dMat = new THREE.MeshPhysicalMaterial({
      color: 0xeeeeff,
      transparent: true,
      opacity: 0.3,
      roughness: 0.05,
      transmission: 0.8
    });
    const barrel = new THREE.Mesh(dBarrel, dMat);
    dropperGroup.add(barrel);

    // Rubber bulb at top
    const bulbGeo = new THREE.SphereGeometry(0.04, 12, 12);
    const bulbMat = new THREE.MeshStandardMaterial({ color: 0xcc3333, roughness: 0.8 });
    const bulb = new THREE.Mesh(bulbGeo, bulbMat);
    bulb.position.y = 0.2;
    dropperGroup.add(bulb);

    // Tip
    const tipGeo = new THREE.CylinderGeometry(0.005, 0.015, 0.08, 6);
    const tip = new THREE.Mesh(tipGeo, dMat.clone());
    tip.position.y = -0.21;
    dropperGroup.add(tip);

    dropperGroup.position.set(startX, 0.9, 0.3);
    dropperGroup.name = 'dropper';
    this.scene.add(dropperGroup);
    this.experimentObjects.push(dropperGroup);
    this.objects.dropper = dropperGroup;

    this.objects.currentTubeIndex = 0;
    this.objects.dropperPhase = 0; // 0 = moving, 1 = dropping, 2 = done
    this.objects.dropTimer = 0;
  }

  animateExperiment_PHIndicators(delta) {
    this.elapsedTime += delta;
    const dropper = this.objects.dropper;
    if (!dropper) return;

    const tubeData = this.objects.tubeData;
    const idx = this.objects.currentTubeIndex;

    if (idx >= tubeData.length) {
      // All done, just idle
      return;
    }

    const spacing = 0.35;
    const startX = -((tubeData.length - 1) * spacing) / 2;
    const targetX = startX + idx * spacing;

    if (this.objects.dropperPhase === 0) {
      // Move dropper above current tube
      const dx = targetX - dropper.position.x;
      const dy = 0.9 - dropper.position.y;
      const dz = 0 - dropper.position.z;
      dropper.position.x += dx * delta * 3;
      dropper.position.y += dy * delta * 3;
      dropper.position.z += dz * delta * 3;

      if (Math.abs(dx) < 0.02 && Math.abs(dz) < 0.02) {
        this.objects.dropperPhase = 1;
        this.objects.dropTimer = 0;
      }
    } else if (this.objects.dropperPhase === 1) {
      // Dropping indicator
      this.objects.dropTimer += delta;

      // Create a drop particle
      if (Math.random() < 0.3) {
        const dropGeo = new THREE.SphereGeometry(0.01, 6, 6);
        const dropMat = new THREE.MeshStandardMaterial({
          color: tubeData[idx].targetColor,
          transparent: true,
          opacity: 0.8
        });
        const drop = new THREE.Mesh(dropGeo, dropMat);
        drop.position.set(dropper.position.x, 0.65, 0);
        drop.userData.speed = 1.5;
        drop.userData.maxY = 0;
        this.scene.add(drop);
        this.experimentObjects.push(drop);
        this.bubbles.push(drop);
      }

      // Transition color
      if (this.objects.dropTimer > 0.5) {
        const progress = Math.min((this.objects.dropTimer - 0.5) / 1.0, 1.0);
        const td = tubeData[idx];
        const c = new THREE.Color();
        c.lerpColors(td.startColor, td.targetColor, progress);
        td.liquid.material.color.copy(c);
        td.liquid.material.opacity = 0.45 + progress * 0.3;

        if (progress >= 1.0) {
          td.changed = true;
          this.objects.currentTubeIndex++;
          this.objects.dropperPhase = 0;
        }
      }
    }

    // Animate drop particles (falling down)
    for (let i = this.bubbles.length - 1; i >= 0; i--) {
      const b = this.bubbles[i];
      b.position.y -= b.userData.speed * delta;
      if (b.position.y < 0.2) {
        this.scene.remove(b);
        b.geometry.dispose();
        b.material.dispose();
        this.bubbles.splice(i, 1);
        const eIdx = this.experimentObjects.indexOf(b);
        if (eIdx > -1) this.experimentObjects.splice(eIdx, 1);
      }
    }
  }

  // =============================================
  // EXPERIMENT 5: Crystal Growing
  // Kristall o'stirish
  // =============================================
  setupExperiment_CrystalGrowing() {
    this.clearExperiment();
    this.currentExperiment = 'crystal';
    this.elapsedTime = 0;

    // Beaker with saturated solution
    const beaker = this.createBeaker(0, 0.1, 0, 1.0, 0.45);
    this.scene.add(beaker);
    this.experimentObjects.push(beaker);

    // Purple/blue liquid
    const liquid = this.createLiquid(0, 0.1, 0, 0x6633aa, 0.75, 0.42, 1.0);
    liquid.name = 'crystalLiquid';
    this.scene.add(liquid);
    this.experimentObjects.push(liquid);
    this.objects.crystalLiquid = liquid;
    this.objects.liquidStartY = liquid.scale.y;

    // Pencil across top of beaker
    const pencilGeo = new THREE.CylinderGeometry(0.025, 0.025, 1.2, 8);
    const pencilMat = new THREE.MeshStandardMaterial({ color: 0xddcc44, roughness: 0.7 });
    const pencil = new THREE.Mesh(pencilGeo, pencilMat);
    pencil.rotation.z = Math.PI / 2;
    pencil.position.set(0, 1.15, 0);
    this.scene.add(pencil);
    this.experimentObjects.push(pencil);

    // Pencil tip
    const tipGeo = new THREE.ConeGeometry(0.025, 0.06, 8);
    const tipMat = new THREE.MeshStandardMaterial({ color: 0x333333 });
    const pencilTip = new THREE.Mesh(tipGeo, tipMat);
    pencilTip.rotation.z = Math.PI / 2;
    pencilTip.position.set(0.63, 1.15, 0);
    this.scene.add(pencilTip);
    this.experimentObjects.push(pencilTip);

    // String hanging down
    const stringGeo = new THREE.CylinderGeometry(0.004, 0.004, 0.55, 4);
    const stringMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.9 });
    const string = new THREE.Mesh(stringGeo, stringMat);
    string.position.set(0, 0.87, 0);
    this.scene.add(string);
    this.experimentObjects.push(string);

    // Seed crystal (small octahedron)
    const crystalGeo = new THREE.OctahedronGeometry(0.04, 0);
    const crystalMat = new THREE.MeshPhysicalMaterial({
      color: 0x8844cc,
      transparent: true,
      opacity: 0.7,
      roughness: 0.1,
      metalness: 0.2,
      transmission: 0.3,
      thickness: 0.3
    });
    const crystal = new THREE.Mesh(crystalGeo, crystalMat);
    crystal.position.set(0, 0.6, 0);
    crystal.name = 'crystal';
    this.scene.add(crystal);
    this.experimentObjects.push(crystal);
    this.objects.crystal = crystal;

    // Additional crystal facets (will appear as crystal grows)
    this.objects.crystalFacets = [];
    this.objects.crystalScale = 1.0;
  }

  animateExperiment_CrystalGrowing(delta) {
    this.elapsedTime += delta;
    const t = this.elapsedTime;
    const crystal = this.objects.crystal;
    if (!crystal) return;

    // Crystal grows over ~15 seconds
    const growthProgress = Math.min(t / 15.0, 1.0);
    const targetScale = 1.0 + growthProgress * 6.0; // grows to 7x

    // Smooth growth
    this.objects.crystalScale += (targetScale - this.objects.crystalScale) * delta * 0.5;
    crystal.scale.setScalar(this.objects.crystalScale);

    // Rotate crystal slowly for visual effect
    crystal.rotation.y += delta * 0.2;
    crystal.rotation.x = Math.sin(t * 0.3) * 0.1;

    // Intensify color as crystal grows
    const colorProgress = Math.min(growthProgress * 1.5, 1.0);
    const baseColor = new THREE.Color(0x8844cc);
    const richColor = new THREE.Color(0x6622dd);
    crystal.material.color.lerpColors(baseColor, richColor, colorProgress);
    crystal.material.opacity = 0.7 + colorProgress * 0.2;

    // Lower liquid level
    const liquid = this.objects.crystalLiquid;
    if (liquid) {
      const scaleY = 1.0 - growthProgress * 0.3;
      liquid.scale.y = Math.max(0.4, scaleY);
      liquid.position.y = 0.1 + (liquid.scale.y * 0.75 * 0.5);
    }

    // Add extra facets at certain growth stages
    if (growthProgress > 0.3 && this.objects.crystalFacets.length === 0) {
      this.addCrystalFacet(crystal, 0.08, 0x9955dd);
    }
    if (growthProgress > 0.6 && this.objects.crystalFacets.length === 1) {
      this.addCrystalFacet(crystal, 0.06, 0x7733cc);
    }
    if (growthProgress > 0.85 && this.objects.crystalFacets.length === 2) {
      this.addCrystalFacet(crystal, 0.05, 0xaa66ee);
    }
  }

  addCrystalFacet(parentCrystal, size, color) {
    const geo = new THREE.OctahedronGeometry(size, 0);
    const mat = new THREE.MeshPhysicalMaterial({
      color: color,
      transparent: true,
      opacity: 0.6,
      roughness: 0.05,
      metalness: 0.3,
      transmission: 0.4
    });
    const facet = new THREE.Mesh(geo, mat);
    const angle = this.objects.crystalFacets.length * (Math.PI * 2 / 3) + Math.random() * 0.5;
    facet.position.set(
      Math.cos(angle) * 0.05,
      (Math.random() - 0.5) * 0.04,
      Math.sin(angle) * 0.05
    );
    facet.rotation.set(Math.random(), Math.random(), Math.random());
    parentCrystal.add(facet);
    this.objects.crystalFacets.push(facet);
  }

  // =============================================
  // Camera Controls (manual orbit)
  // =============================================
  setupCameraControls() {
    const container = this.container;

    const onMouseDown = (e) => {
      this.isDragging = true;
      this.previousMouse.x = e.clientX;
      this.previousMouse.y = e.clientY;
    };

    const onMouseMove = (e) => {
      if (!this.isDragging) return;
      const dx = e.clientX - this.previousMouse.x;
      const dy = e.clientY - this.previousMouse.y;
      this.previousMouse.x = e.clientX;
      this.previousMouse.y = e.clientY;

      this.theta -= dx * 0.008;
      this.phi -= dy * 0.008;
      this.phi = Math.max(0.15, Math.min(Math.PI - 0.15, this.phi));
      this.updateCameraPosition();
    };

    const onMouseUp = () => {
      this.isDragging = false;
    };

    const onWheel = (e) => {
      e.preventDefault();
      this.cameraRadius += e.deltaY * 0.005;
      this.cameraRadius = Math.max(2.5, Math.min(12, this.cameraRadius));
      this.updateCameraPosition();
    };

    // Touch support
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.previousMouse.x = e.touches[0].clientX;
        this.previousMouse.y = e.touches[0].clientY;
      }
    };
    const onTouchMove = (e) => {
      if (!this.isDragging || e.touches.length !== 1) return;
      e.preventDefault();
      const dx = e.touches[0].clientX - this.previousMouse.x;
      const dy = e.touches[0].clientY - this.previousMouse.y;
      this.previousMouse.x = e.touches[0].clientX;
      this.previousMouse.y = e.touches[0].clientY;
      this.theta -= dx * 0.008;
      this.phi -= dy * 0.008;
      this.phi = Math.max(0.15, Math.min(Math.PI - 0.15, this.phi));
      this.updateCameraPosition();
    };
    const onTouchEnd = () => { this.isDragging = false; };

    container.addEventListener('mousedown', onMouseDown);
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mouseleave', onMouseUp);
    container.addEventListener('wheel', onWheel, { passive: false });
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: false });
    container.addEventListener('touchend', onTouchEnd);

    this._controlCleanup = () => {
      container.removeEventListener('mousedown', onMouseDown);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('mouseleave', onMouseUp);
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

  // =============================================
  // Experiment Selection & Control
  // =============================================
  selectExperiment(name) {
    this.currentExperiment = name;
    this.isRunning = false;
    switch (name) {
      case 'copper-acid': this.setupExperiment_CopperAcid(); break;
      case 'electrolysis': this.setupExperiment_WaterElectrolysis(); break;
      case 'volcano': this.setupExperiment_Volcano(); break;
      case 'indicators': this.setupExperiment_PHIndicators(); break;
      case 'crystal': this.setupExperiment_CrystalGrowing(); break;
      default:
        console.warn('ChemistryLab: unknown experiment:', name);
    }
  }

  startExperiment() {
    this.isRunning = true;
  }

  pauseExperiment() {
    this.isRunning = false;
  }

  resetExperiment() {
    if (this.currentExperiment) {
      this.selectExperiment(this.currentExperiment);
    }
  }

  clearExperiment() {
    // Remove all experiment objects but keep table, floor, and lights
    this.experimentObjects.forEach(obj => {
      this.scene.remove(obj);
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) {
          obj.material.forEach(m => m.dispose());
        } else {
          obj.material.dispose();
        }
      }
      // Dispose children recursively
      if (obj.children) {
        obj.traverse(child => {
          if (child.geometry) child.geometry.dispose();
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach(m => m.dispose());
            } else {
              child.material.dispose();
            }
          }
        });
      }
    });
    this.experimentObjects = [];
    this.bubbles = [];
    this.objects = {};
    this.elapsedTime = 0;
    this.isRunning = false;
  }

  // =============================================
  // Animation Loop
  // =============================================
  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());
    const delta = this.clock.getDelta();
    const clampedDelta = Math.min(delta, 0.05); // Prevent large jumps

    if (this.isRunning) {
      switch (this.currentExperiment) {
        case 'copper-acid': this.animateExperiment_CopperAcid(clampedDelta); break;
        case 'electrolysis': this.animateExperiment_WaterElectrolysis(clampedDelta); break;
        case 'volcano': this.animateExperiment_Volcano(clampedDelta); break;
        case 'indicators': this.animateExperiment_PHIndicators(clampedDelta); break;
        case 'crystal': this.animateExperiment_CrystalGrowing(clampedDelta); break;
      }
    }

    this.renderer.render(this.scene, this.camera);
  }

  // =============================================
  // Resize Handler
  // =============================================
  onResize() {
    if (!this.container || !this.camera || !this.renderer) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    if (width === 0 || height === 0) return;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  // =============================================
  // Cleanup
  // =============================================
  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    if (this._controlCleanup) this._controlCleanup();
    window.removeEventListener('resize', this._onResize);

    this.clearExperiment();

    if (this.renderer) {
      this.renderer.dispose();
      if (this.renderer.domElement && this.renderer.domElement.parentNode) {
        this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
      }
    }

    this.scene = null;
    this.camera = null;
    this.renderer = null;
  }
}

// =============================================
// Global API
// =============================================
let chemLab = null;

window.initChemistryLab = function () {
  if (chemLab) chemLab.destroy();
  chemLab = new ChemistryLab('chemistry-canvas-container');
  chemLab.init();
  chemLab.setupExperiment_CopperAcid(); // Default experiment
};

window.selectChemExperiment = function (name) {
  if (chemLab) chemLab.selectExperiment(name);
};

window.startChemExperiment = function () {
  if (chemLab) chemLab.startExperiment();
};

window.pauseChemExperiment = function () {
  if (chemLab) chemLab.pauseExperiment();
};

window.resetChemExperiment = function () {
  if (chemLab) chemLab.resetExperiment();
};

// Bridge funksiyalar index.html onclick lari uchun
window.selectChemistryExperiment = function(name) {
  var mapped = name;
  if (name === 'water-electrolysis') mapped = 'electrolysis';
  if (typeof window.selectChemExperiment === 'function') window.selectChemExperiment(mapped);
  
  var overlay = document.getElementById('chemistry-canvas-overlay');
  if (overlay) overlay.style.display = 'none';

  var items = document.querySelectorAll('#chemistry-experiment-list .experiment-item');
  items.forEach(function(el) {
    if (el.getAttribute('data-experiment') === name) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
};

window.startChemistryExperiment = function() {
  if (typeof window.startChemExperiment === 'function') window.startChemExperiment();
  var pauseBtn = document.getElementById('chemistry-pause-btn');
  if (pauseBtn) pauseBtn.disabled = false;
  var overlay = document.getElementById('chemistry-canvas-overlay');
  if (overlay) overlay.style.display = 'none';
};

window.pauseChemistryExperiment = function() {
  if (typeof window.pauseChemExperiment === 'function') window.pauseChemExperiment();
};

window.resetChemistryExperiment = function() {
  if (typeof window.resetChemExperiment === 'function') window.resetChemExperiment();
};
