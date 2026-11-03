/**
 * EduPlatforma - 3D Interactive Physics Laboratory
 * Uses Three.js (loaded globally from CDN)
 *
 * Experiments:
 *   1. Free Fall
 *   2. Pendulum
 *   3. Electric Circuits
 *   4. Light Refraction (Prism)
 *   5. Magnetic Field
 */

class PhysicsLab {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      console.error('PhysicsLab: container not found:', containerId);
      return;
    }
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.clock = null;
    this.objects = {};
    this.experimentObjects = [];
    this.particles = [];
    this.currentExperiment = null;
    this.animationId = null;
    this.isRunning = false;
    this.elapsedTime = 0;

    // Physics variables (user-adjustable)
    this.variables = {
      mass: 1.0,
      angle: 30,
      voltage: 5,
      gravity: 9.8,
      prismAngle: 60
    };

    // Camera orbit state
    this.isDragging = false;
    this.previousMouse = { x: 0, y: 0 };
    this.theta = Math.PI / 4;
    this.phi = Math.PI / 3;
    this.cameraRadius = 6;
    this.cameraTarget = new THREE.Vector3(0, 1.0, 0);
  }

  init() {
    if (!this.container) return;

    const width = this.container.clientWidth || 800;
    const height = this.container.clientHeight || 600;

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xeef1f5);
    this.scene.fog = new THREE.Fog(0xeef1f5, 14, 25);

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
    this.renderer.toneMappingExposure = 1.1;
    this.container.appendChild(this.renderer.domElement);

    // Clock
    this.clock = new THREE.Clock();

    // Lights
    this.setupLights();

    // Lab environment
    this.createLabEnvironment();

    // Camera controls
    this.setupCameraControls();

    // Window resize
    this._onResize = () => this.onResize();
    window.addEventListener('resize', this._onResize);

    // Start render loop
    this.animate();
  }

  setupLights() {
    const ambient = new THREE.AmbientLight(0x606880, 0.6);
    this.scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xfff8ee, 0.9);
    dirLight.position.set(4, 8, 5);
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

    const fillLight = new THREE.DirectionalLight(0xb0c0ff, 0.3);
    fillLight.position.set(-3, 4, -2);
    this.scene.add(fillLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.4, 15);
    pointLight.position.set(0, 6, 0);
    this.scene.add(pointLight);
  }

  createLabEnvironment() {
    // Floor
    const floorGeo = new THREE.PlaneGeometry(20, 20);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0xc8c8c8,
      roughness: 0.85,
      metalness: 0.0
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.01;
    floor.receiveShadow = true;
    this.scene.add(floor);

    // Lab table
    const tableGroup = new THREE.Group();
    const topGeo = new THREE.BoxGeometry(5.5, 0.1, 3.2);
    const topMat = new THREE.MeshStandardMaterial({ color: 0x4a4a5a, roughness: 0.5, metalness: 0.3 });
    const top = new THREE.Mesh(topGeo, topMat);
    top.receiveShadow = true;
    top.castShadow = true;
    tableGroup.add(top);

    const legGeo = new THREE.BoxGeometry(0.08, 0.8, 0.08);
    const legMat = new THREE.MeshStandardMaterial({ color: 0x3a3a4a, roughness: 0.4, metalness: 0.5 });
    [[-2.5, -0.45, -1.4], [2.5, -0.45, -1.4], [-2.5, -0.45, 1.4], [2.5, -0.45, 1.4]].forEach(pos => {
      const leg = new THREE.Mesh(legGeo, legMat);
      leg.position.set(...pos);
      leg.castShadow = true;
      tableGroup.add(leg);
    });

    tableGroup.position.y = 0.05;
    this.scene.add(tableGroup);
  }

  // =============================================
  // EXPERIMENT 1: Free Fall
  // Erkin tushish
  // =============================================
  setupExperiment_FreeFall() {
    this.clearExperiment();
    this.currentExperiment = 'freefall';
    this.elapsedTime = 0;

    const startHeight = 4.0;

    // Measurement ruler on the side
    const rulerGroup = new THREE.Group();
    const rulerGeo = new THREE.BoxGeometry(0.06, startHeight + 0.5, 0.04);
    const rulerMat = new THREE.MeshStandardMaterial({ color: 0xddcc44, roughness: 0.6 });
    const ruler = new THREE.Mesh(rulerGeo, rulerMat);
    ruler.position.y = (startHeight + 0.5) / 2;
    rulerGroup.add(ruler);

    // Ruler markings (each 0.5m)
    for (let h = 0; h <= startHeight; h += 0.5) {
      const markGeo = new THREE.BoxGeometry(0.15, 0.008, 0.01);
      const markMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
      const mark = new THREE.Mesh(markGeo, markMat);
      mark.position.set(0.05, h + 0.1, 0.03);
      rulerGroup.add(mark);
    }
    rulerGroup.position.set(-1.5, 0.1, 0);
    this.scene.add(rulerGroup);
    this.experimentObjects.push(rulerGroup);

    // Ball
    const ballRadius = 0.12;
    const ballGeo = new THREE.SphereGeometry(ballRadius, 24, 24);
    const ballMat = new THREE.MeshStandardMaterial({
      color: 0xcc3333,
      roughness: 0.3,
      metalness: 0.7
    });
    const ball = new THREE.Mesh(ballGeo, ballMat);
    ball.position.set(0, startHeight + 0.2, 0);
    ball.castShadow = true;
    ball.name = 'ball';
    this.scene.add(ball);
    this.experimentObjects.push(ball);
    this.objects.ball = ball;

    // Ground cushion
    const cushionGeo = new THREE.BoxGeometry(0.8, 0.08, 0.8);
    const cushionMat = new THREE.MeshStandardMaterial({ color: 0x4466aa, roughness: 0.9 });
    const cushion = new THREE.Mesh(cushionGeo, cushionMat);
    cushion.position.set(0, 0.15, 0);
    cushion.receiveShadow = true;
    this.scene.add(cushion);
    this.experimentObjects.push(cushion);

    // Trail effect
    this.objects.trail = [];
    this.objects.startHeight = startHeight + 0.2;
    this.objects.ballRadius = ballRadius;
    this.objects.velocity = 0;
    this.objects.hasBounced = false;
    this.objects.bounceVelocity = 0;
    this.objects.bouncePhase = false;
    this.objects.groundY = 0.15 + 0.04 + ballRadius;
  }

  animateExperiment_FreeFall(delta) {
    this.elapsedTime += delta;
    const ball = this.objects.ball;
    if (!ball) return;

    const g = this.variables.gravity;
    const groundY = this.objects.groundY;

    if (!this.objects.bouncePhase) {
      // Free fall: s = ½gt²
      const t = this.elapsedTime;
      const displacement = 0.5 * g * t * t;
      const newY = this.objects.startHeight - displacement;
      this.objects.velocity = g * t;

      if (newY <= groundY) {
        // Hit ground
        ball.position.y = groundY;
        this.objects.bouncePhase = true;
        this.objects.bounceVelocity = this.objects.velocity * 0.4; // damped bounce
        this.objects.bounceTime = 0;
      } else {
        ball.position.y = newY;
      }

      // Trail: add ghost sphere every few frames
      if (Math.floor(this.elapsedTime * 10) % 3 === 0 && this.objects.trail.length < 30) {
        const ghostGeo = new THREE.SphereGeometry(this.objects.ballRadius * 0.7, 8, 8);
        const ghostMat = new THREE.MeshBasicMaterial({
          color: 0xcc3333,
          transparent: true,
          opacity: 0.15
        });
        const ghost = new THREE.Mesh(ghostGeo, ghostMat);
        ghost.position.copy(ball.position);
        this.scene.add(ghost);
        this.experimentObjects.push(ghost);
        this.objects.trail.push(ghost);
      }
    } else {
      // Bounce phase (damped)
      this.objects.bounceTime += delta;
      const bt = this.objects.bounceTime;
      const bv = this.objects.bounceVelocity;
      const bounceY = groundY + bv * bt - 0.5 * g * bt * bt;

      if (bounceY <= groundY) {
        ball.position.y = groundY;
        // Further bounces get smaller
        if (this.objects.bounceVelocity > 0.3) {
          this.objects.bounceVelocity *= 0.35;
          this.objects.bounceTime = 0;
        }
      } else {
        ball.position.y = bounceY;
      }
    }

    // Fade trail
    for (let i = this.objects.trail.length - 1; i >= 0; i--) {
      const ghost = this.objects.trail[i];
      ghost.material.opacity -= delta * 0.05;
      if (ghost.material.opacity <= 0) {
        this.scene.remove(ghost);
        ghost.geometry.dispose();
        ghost.material.dispose();
        this.objects.trail.splice(i, 1);
        const idx = this.experimentObjects.indexOf(ghost);
        if (idx > -1) this.experimentObjects.splice(idx, 1);
      }
    }
  }

  // =============================================
  // EXPERIMENT 2: Pendulum
  // Mayatnik
  // =============================================
  setupExperiment_Pendulum() {
    this.clearExperiment();
    this.currentExperiment = 'pendulum';
    this.elapsedTime = 0;

    const pivotY = 4.0;
    const stringLength = 2.5;

    // Support frame
    const frameGroup = new THREE.Group();

    // Horizontal bar
    const barGeo = new THREE.CylinderGeometry(0.04, 0.04, 2.0, 8);
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x555566, roughness: 0.3, metalness: 0.8 });
    const bar = new THREE.Mesh(barGeo, frameMat);
    bar.rotation.z = Math.PI / 2;
    bar.position.set(0, pivotY, 0);
    frameGroup.add(bar);

    // Support legs (inverted V shape approximation)
    const legGeo = new THREE.CylinderGeometry(0.03, 0.04, pivotY + 0.1, 8);
    const legL = new THREE.Mesh(legGeo, frameMat.clone());
    legL.position.set(-0.8, pivotY / 2, 0);
    legL.rotation.z = 0.08;
    frameGroup.add(legL);

    const legR = new THREE.Mesh(legGeo.clone(), frameMat.clone());
    legR.position.set(0.8, pivotY / 2, 0);
    legR.rotation.z = -0.08;
    frameGroup.add(legR);

    this.scene.add(frameGroup);
    this.experimentObjects.push(frameGroup);

    // Protractor arc
    const arcGeo = new THREE.TorusGeometry(0.8, 0.008, 4, 48, Math.PI);
    const arcMat = new THREE.MeshBasicMaterial({ color: 0xddcc44, transparent: true, opacity: 0.5 });
    const arc = new THREE.Mesh(arcGeo, arcMat);
    arc.position.set(0, pivotY, 0.01);
    arc.rotation.z = Math.PI / 2;
    this.scene.add(arc);
    this.experimentObjects.push(arc);

    // Angle markings on protractor
    for (let deg = -60; deg <= 60; deg += 15) {
      const rad = (deg * Math.PI) / 180;
      const markGeo = new THREE.BoxGeometry(0.005, 0.06, 0.005);
      const markMat = new THREE.MeshBasicMaterial({ color: 0x888800 });
      const mark = new THREE.Mesh(markGeo, markMat);
      mark.position.set(
        Math.sin(rad) * 0.82,
        pivotY - Math.cos(rad) * 0.82,
        0.01
      );
      mark.rotation.z = -rad;
      this.scene.add(mark);
      this.experimentObjects.push(mark);
    }

    // Pendulum group (string + bob)
    const pendulumGroup = new THREE.Group();
    pendulumGroup.position.set(0, pivotY, 0);

    // String
    const stringGeo = new THREE.CylinderGeometry(0.008, 0.008, stringLength, 4);
    const stringMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 0.8 });
    const string = new THREE.Mesh(stringGeo, stringMat);
    string.position.y = -stringLength / 2;
    pendulumGroup.add(string);

    // Bob
    const bobRadius = 0.15;
    const bobGeo = new THREE.SphereGeometry(bobRadius, 20, 20);
    const bobMat = new THREE.MeshStandardMaterial({
      color: 0x2266bb,
      roughness: 0.25,
      metalness: 0.8
    });
    const bob = new THREE.Mesh(bobGeo, bobMat);
    bob.position.y = -stringLength;
    bob.castShadow = true;
    pendulumGroup.add(bob);

    this.scene.add(pendulumGroup);
    this.experimentObjects.push(pendulumGroup);

    this.objects.pendulum = pendulumGroup;
    this.objects.stringLength = stringLength;
    this.objects.pivotY = pivotY;
    this.objects.initialAngle = (this.variables.angle * Math.PI) / 180;
    this.objects.damping = 0.998;

    // Ghost trail
    this.objects.ghosts = [];
  }

  animateExperiment_Pendulum(delta) {
    this.elapsedTime += delta;
    const pendulum = this.objects.pendulum;
    if (!pendulum) return;

    const L = this.objects.stringLength;
    const g = this.variables.gravity;
    const theta0 = this.objects.initialAngle;
    const omega = Math.sqrt(g / L);
    const t = this.elapsedTime;

    // Damped SHM: θ(t) = θ₀ * e^(-γt) * cos(ωt)
    const dampFactor = Math.exp(-0.02 * t);
    const angle = theta0 * dampFactor * Math.cos(omega * t);

    pendulum.rotation.z = angle;

    // Ghost trail effect
    if (Math.floor(t * 15) % 4 === 0 && this.objects.ghosts.length < 15) {
      const bobWorldY = this.objects.pivotY - L * Math.cos(angle);
      const bobWorldX = L * Math.sin(angle);
      const ghostGeo = new THREE.SphereGeometry(0.08, 8, 8);
      const ghostMat = new THREE.MeshBasicMaterial({
        color: 0x2266bb,
        transparent: true,
        opacity: 0.12
      });
      const ghost = new THREE.Mesh(ghostGeo, ghostMat);
      ghost.position.set(bobWorldX, bobWorldY, 0);
      this.scene.add(ghost);
      this.experimentObjects.push(ghost);
      this.objects.ghosts.push(ghost);
    }

    // Fade ghosts
    for (let i = this.objects.ghosts.length - 1; i >= 0; i--) {
      const g = this.objects.ghosts[i];
      g.material.opacity -= delta * 0.06;
      if (g.material.opacity <= 0) {
        this.scene.remove(g);
        g.geometry.dispose();
        g.material.dispose();
        this.objects.ghosts.splice(i, 1);
        const idx = this.experimentObjects.indexOf(g);
        if (idx > -1) this.experimentObjects.splice(idx, 1);
      }
    }
  }

  // =============================================
  // EXPERIMENT 3: Electric Circuits
  // Elektr zanjiri
  // =============================================
  setupExperiment_Circuits() {
    this.clearExperiment();
    this.currentExperiment = 'circuits';
    this.elapsedTime = 0;

    // Battery
    const batteryGroup = new THREE.Group();
    const battGeo = new THREE.BoxGeometry(0.5, 0.3, 0.25);
    const battMat = new THREE.MeshStandardMaterial({ color: 0x222233, roughness: 0.4, metalness: 0.3 });
    const batt = new THREE.Mesh(battGeo, battMat);
    batt.castShadow = true;
    batteryGroup.add(batt);

    // + terminal
    const tPlusGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.05, 8);
    const tPlusMat = new THREE.MeshStandardMaterial({ color: 0xff2222, metalness: 0.8, roughness: 0.2 });
    const tPlus = new THREE.Mesh(tPlusGeo, tPlusMat);
    tPlus.position.set(0.15, 0.17, 0);
    batteryGroup.add(tPlus);

    // - terminal
    const tMinusMat = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.8, roughness: 0.2 });
    const tMinus = new THREE.Mesh(tPlusGeo.clone(), tMinusMat);
    tMinus.position.set(-0.15, 0.17, 0);
    batteryGroup.add(tMinus);

    // Labels
    // Use thin boxes as + and - symbols
    const plusH = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.01, 0.01), new THREE.MeshBasicMaterial({ color: 0xff3333 }));
    plusH.position.set(0.15, 0.05, 0.13);
    batteryGroup.add(plusH);
    const plusV = new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.06, 0.01), new THREE.MeshBasicMaterial({ color: 0xff3333 }));
    plusV.position.set(0.15, 0.05, 0.13);
    batteryGroup.add(plusV);
    const minusH = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.01, 0.01), new THREE.MeshBasicMaterial({ color: 0xdddddd }));
    minusH.position.set(-0.15, 0.05, 0.13);
    batteryGroup.add(minusH);

    batteryGroup.position.set(-1.2, 0.3, 0);
    this.scene.add(batteryGroup);
    this.experimentObjects.push(batteryGroup);

    // Light bulb
    const bulbGroup = new THREE.Group();

    // Glass sphere
    const glassGeo = new THREE.SphereGeometry(0.15, 20, 20);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffee,
      transparent: true,
      opacity: 0.25,
      roughness: 0.02,
      transmission: 0.8,
      thickness: 0.2
    });
    const glass = new THREE.Mesh(glassGeo, glassMat);
    glass.position.y = 0.2;
    bulbGroup.add(glass);
    this.objects.bulbGlass = glass;

    // Filament (small coil approximation)
    const filamentGeo = new THREE.CylinderGeometry(0.008, 0.008, 0.12, 6);
    const filamentMat = new THREE.MeshStandardMaterial({
      color: 0x444444,
      emissive: 0x000000,
      roughness: 0.5,
      metalness: 0.8
    });
    const filament = new THREE.Mesh(filamentGeo, filamentMat);
    filament.position.y = 0.2;
    bulbGroup.add(filament);
    this.objects.filament = filament;

    // Base
    const baseGeo = new THREE.CylinderGeometry(0.08, 0.1, 0.1, 12);
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.7, roughness: 0.3 });
    const base = new THREE.Mesh(baseGeo, baseMat);
    bulbGroup.add(base);

    // Light source inside bulb (off by default)
    const bulbLight = new THREE.PointLight(0xffdd88, 0, 3);
    bulbLight.position.y = 0.2;
    bulbGroup.add(bulbLight);
    this.objects.bulbLight = bulbLight;

    bulbGroup.position.set(0.5, 0.3, 0);
    this.scene.add(bulbGroup);
    this.experimentObjects.push(bulbGroup);

    // Switch
    const switchGroup = new THREE.Group();
    const switchBase = new THREE.Mesh(
      new THREE.BoxGeometry(0.2, 0.08, 0.15),
      new THREE.MeshStandardMaterial({ color: 0x664422, roughness: 0.7 })
    );
    switchGroup.add(switchBase);

    const lever = new THREE.Mesh(
      new THREE.BoxGeometry(0.03, 0.2, 0.03),
      new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.8 })
    );
    lever.position.set(0, 0.1, 0);
    lever.name = 'lever';
    switchGroup.add(lever);
    this.objects.switchLever = lever;

    switchGroup.position.set(0.5, 0.2, 0.8);
    this.scene.add(switchGroup);
    this.experimentObjects.push(switchGroup);

    // Resistor
    const resistorGroup = new THREE.Group();
    const rBody = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, 0.3, 12),
      new THREE.MeshStandardMaterial({ color: 0xccaa77, roughness: 0.8 })
    );
    rBody.rotation.z = Math.PI / 2;
    resistorGroup.add(rBody);

    // Color bands
    const bandColors = [0xcc2222, 0x8822cc, 0xddaa00, 0xddcc88];
    bandColors.forEach((c, idx) => {
      const band = new THREE.Mesh(
        new THREE.CylinderGeometry(0.052, 0.052, 0.02, 12),
        new THREE.MeshBasicMaterial({ color: c })
      );
      band.rotation.z = Math.PI / 2;
      band.position.x = -0.1 + idx * 0.06;
      resistorGroup.add(band);
    });

    // Leads
    const leadGeo = new THREE.CylinderGeometry(0.008, 0.008, 0.15, 6);
    const leadMat = new THREE.MeshStandardMaterial({ color: 0xaaaaaa, metalness: 0.8 });
    const leadL = new THREE.Mesh(leadGeo, leadMat);
    leadL.rotation.z = Math.PI / 2;
    leadL.position.x = -0.22;
    resistorGroup.add(leadL);
    const leadR = new THREE.Mesh(leadGeo.clone(), leadMat.clone());
    leadR.rotation.z = Math.PI / 2;
    leadR.position.x = 0.22;
    resistorGroup.add(leadR);

    resistorGroup.position.set(1.5, 0.3, 0.4);
    this.scene.add(resistorGroup);
    this.experimentObjects.push(resistorGroup);

    // Wires connecting components
    const wireMat = new THREE.MeshStandardMaterial({ color: 0xcc6633, roughness: 0.3, metalness: 0.7 });
    this.createCircuitWire([-1.05, 0.42, 0], [0.5, 0.42, 0.8], wireMat, 0xff2222); // battery+ to switch
    this.createCircuitWire([0.5, 0.42, 0.8], [0.5, 0.3, 0], wireMat, 0xff2222);     // switch to bulb
    this.createCircuitWire([0.5, 0.3, 0], [1.5, 0.3, 0.4], wireMat, 0x222222);      // bulb to resistor
    this.createCircuitWire([1.5, 0.3, 0.4], [-1.35, 0.42, 0], wireMat, 0x222222);   // resistor to battery-

    // Ammeter
    const ammeterGroup = new THREE.Group();
    const meterBody = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.18, 0.06, 24),
      new THREE.MeshStandardMaterial({ color: 0x333344, roughness: 0.3, metalness: 0.5 })
    );
    meterBody.rotation.x = Math.PI / 2;
    ammeterGroup.add(meterBody);

    // Meter face
    const faceGeo = new THREE.CircleGeometry(0.16, 24);
    const faceMat = new THREE.MeshBasicMaterial({ color: 0xfafaf5 });
    const face = new THREE.Mesh(faceGeo, faceMat);
    face.position.z = 0.032;
    ammeterGroup.add(face);

    // Needle
    const needleGeo = new THREE.BoxGeometry(0.008, 0.12, 0.005);
    const needleMat = new THREE.MeshBasicMaterial({ color: 0xcc0000 });
    const needle = new THREE.Mesh(needleGeo, needleMat);
    needle.position.set(0, 0.03, 0.036);
    needle.name = 'ammeterNeedle';
    ammeterGroup.add(needle);
    this.objects.ammeterNeedle = needle;

    ammeterGroup.position.set(-0.3, 0.8, -0.5);
    this.scene.add(ammeterGroup);
    this.experimentObjects.push(ammeterGroup);

    // Electron particles storage
    this.objects.electrons = [];
    this.objects.switchOn = false;
    this.objects.switchTimer = 0;

    // Auto-toggle switch after 1 second
    this.objects.autoSwitchTime = 1.0;

    // Circuit path for electrons (simplified as waypoints)
    this.objects.circuitPath = [
      new THREE.Vector3(-1.05, 0.42, 0),
      new THREE.Vector3(-0.3, 0.5, 0.4),
      new THREE.Vector3(0.5, 0.42, 0.8),
      new THREE.Vector3(0.5, 0.36, 0.4),
      new THREE.Vector3(0.5, 0.3, 0),
      new THREE.Vector3(1.0, 0.32, 0.2),
      new THREE.Vector3(1.5, 0.3, 0.4),
      new THREE.Vector3(1.0, 0.35, 0.5),
      new THREE.Vector3(0.2, 0.4, 0.2),
      new THREE.Vector3(-0.5, 0.4, 0.1),
      new THREE.Vector3(-1.35, 0.42, 0),
      new THREE.Vector3(-1.2, 0.42, 0)
    ];

    // Create initial electrons along path
    for (let i = 0; i < 18; i++) {
      this.spawnElectron(i / 18);
    }
  }

  createCircuitWire(from, to, mat, color) {
    const start = new THREE.Vector3(...from);
    const end = new THREE.Vector3(...to);
    const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
    mid.y += 0.15;

    const curve = new THREE.CatmullRomCurve3([start, mid, end]);
    const tubeGeo = new THREE.TubeGeometry(curve, 16, 0.012, 6, false);
    const wireMat = new THREE.MeshStandardMaterial({ color: color, roughness: 0.3, metalness: 0.6 });
    const wire = new THREE.Mesh(tubeGeo, wireMat);
    this.scene.add(wire);
    this.experimentObjects.push(wire);
  }

  spawnElectron(pathProgress) {
    const geo = new THREE.SphereGeometry(0.02, 6, 6);
    const mat = new THREE.MeshBasicMaterial({ color: 0x44aaff });
    const electron = new THREE.Mesh(geo, mat);
    electron.userData.progress = pathProgress;
    this.scene.add(electron);
    this.experimentObjects.push(electron);
    this.objects.electrons.push(electron);
  }

  animateExperiment_Circuits(delta) {
    this.elapsedTime += delta;

    // Auto-switch on
    if (this.elapsedTime > this.objects.autoSwitchTime && !this.objects.switchOn) {
      this.objects.switchOn = true;
    }

    const lever = this.objects.switchLever;
    if (lever) {
      const targetAngle = this.objects.switchOn ? Math.PI / 6 : 0;
      lever.rotation.z += (targetAngle - lever.rotation.z) * delta * 5;
    }

    if (this.objects.switchOn) {
      const voltageFactor = this.variables.voltage / 5.0;

      // Light bulb glow
      if (this.objects.filament) {
        const emissiveIntensity = voltageFactor;
        this.objects.filament.material.emissive.setHex(0xffaa44);
        this.objects.filament.material.emissiveIntensity = emissiveIntensity;
      }
      if (this.objects.bulbGlass) {
        this.objects.bulbGlass.material.emissive = new THREE.Color(0xffdd88);
        this.objects.bulbGlass.material.emissiveIntensity = voltageFactor * 0.3;
      }
      if (this.objects.bulbLight) {
        this.objects.bulbLight.intensity = voltageFactor * 1.5;
      }

      // Ammeter needle
      if (this.objects.ammeterNeedle) {
        const targetRotation = -voltageFactor * 0.8;
        this.objects.ammeterNeedle.rotation.z += (targetRotation - this.objects.ammeterNeedle.rotation.z) * delta * 3;
      }

      // Move electrons along circuit path
      const path = this.objects.circuitPath;
      const speed = 0.15 * voltageFactor;
      this.objects.electrons.forEach(electron => {
        electron.userData.progress += speed * delta;
        if (electron.userData.progress > 1) electron.userData.progress -= 1;

        const p = electron.userData.progress;
        const totalSegments = path.length;
        const segFloat = p * totalSegments;
        const segIdx = Math.floor(segFloat) % totalSegments;
        const segFrac = segFloat - Math.floor(segFloat);
        const nextIdx = (segIdx + 1) % totalSegments;

        electron.position.lerpVectors(path[segIdx], path[nextIdx], segFrac);

        // Pulsing glow
        const pulse = 0.5 + 0.5 * Math.sin(this.elapsedTime * 10 + p * Math.PI * 2);
        electron.material.color.setHex(pulse > 0.5 ? 0x66ccff : 0x3388dd);
      });
    } else {
      // Switch off - dim everything
      if (this.objects.filament) {
        this.objects.filament.material.emissiveIntensity *= 0.9;
      }
      if (this.objects.bulbGlass) {
        this.objects.bulbGlass.material.emissiveIntensity *= 0.9;
      }
      if (this.objects.bulbLight) {
        this.objects.bulbLight.intensity *= 0.9;
      }
    }
  }

  // =============================================
  // EXPERIMENT 4: Light Refraction (Prism)
  // Yorug'lik sinishi (prizma)
  // =============================================
  setupExperiment_Refraction() {
    this.clearExperiment();
    this.currentExperiment = 'refraction';
    this.elapsedTime = 0;

    // Glass prism (triangular)
    const prismShape = new THREE.Shape();
    const s = 0.6;
    prismShape.moveTo(0, s * Math.sqrt(3) / 2);
    prismShape.lineTo(-s / 2, 0);
    prismShape.lineTo(s / 2, 0);
    prismShape.closePath();

    const extrudeSettings = { depth: 0.5, bevelEnabled: false };
    const prismGeo = new THREE.ExtrudeGeometry(prismShape, extrudeSettings);
    const prismMat = new THREE.MeshPhysicalMaterial({
      color: 0xeeeeff,
      transparent: true,
      opacity: 0.25,
      roughness: 0.0,
      metalness: 0.0,
      transmission: 0.92,
      thickness: 0.8,
      ior: 1.52,
      side: THREE.DoubleSide
    });
    const prism = new THREE.Mesh(prismGeo, prismMat);
    prism.position.set(0, 0.6, -0.25);
    prism.castShadow = true;
    prism.name = 'prism';
    this.scene.add(prism);
    this.experimentObjects.push(prism);
    this.objects.prism = prism;

    // Laser source
    const laserGroup = new THREE.Group();
    const laserBody = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.05, 0.3, 12),
      new THREE.MeshStandardMaterial({ color: 0x333344, roughness: 0.3, metalness: 0.7 })
    );
    laserBody.rotation.z = Math.PI / 2;
    laserGroup.add(laserBody);

    // Laser aperture
    const aperture = new THREE.Mesh(
      new THREE.CircleGeometry(0.03, 12),
      new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.8 })
    );
    aperture.position.x = 0.15;
    aperture.rotation.y = Math.PI / 2;
    laserGroup.add(aperture);

    laserGroup.position.set(-2.0, 0.85, 0);
    this.scene.add(laserGroup);
    this.experimentObjects.push(laserGroup);

    // White incoming beam
    const inBeamGeo = new THREE.CylinderGeometry(0.01, 0.01, 1.65, 6);
    const inBeamMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 });
    const inBeam = new THREE.Mesh(inBeamGeo, inBeamMat);
    inBeam.rotation.z = Math.PI / 2;
    inBeam.position.set(-1.0, 0.85, 0);
    this.scene.add(inBeam);
    this.experimentObjects.push(inBeam);

    // Rainbow output beams (ROYGBV)
    const rainbowColors = [
      { color: 0xff0000, angle: 0.18 },   // Red
      { color: 0xff8800, angle: 0.22 },   // Orange
      { color: 0xffff00, angle: 0.26 },   // Yellow
      { color: 0x00cc00, angle: 0.30 },   // Green
      { color: 0x0044ff, angle: 0.34 },   // Blue
      { color: 0x8800ff, angle: 0.38 }    // Violet
    ];

    this.objects.rainbowBeams = [];
    rainbowColors.forEach(rc => {
      const beamLen = 2.5;
      const beamGeo = new THREE.CylinderGeometry(0.006, 0.006, beamLen, 4);
      const beamMat = new THREE.MeshBasicMaterial({
        color: rc.color,
        transparent: true,
        opacity: 0.0 // starts invisible, fades in
      });
      const beam = new THREE.Mesh(beamGeo, beamMat);

      // Position exit from prism right face
      const exitX = 0.3;
      const exitY = 0.75;
      beam.position.set(
        exitX + Math.cos(rc.angle) * beamLen / 2,
        exitY - Math.sin(rc.angle) * beamLen / 2,
        0
      );
      beam.rotation.z = Math.PI / 2 + rc.angle;

      this.scene.add(beam);
      this.experimentObjects.push(beam);
      this.objects.rainbowBeams.push({ mesh: beam, targetOpacity: 0.85 });
    });

    // Screen/wall to project on
    const screenGeo = new THREE.BoxGeometry(0.08, 2.0, 1.5);
    const screenMat = new THREE.MeshStandardMaterial({ color: 0xf5f5f5, roughness: 0.95 });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(3.0, 1.0, 0);
    screen.receiveShadow = true;
    this.scene.add(screen);
    this.experimentObjects.push(screen);

    // Protractor on table
    const protGeo = new THREE.RingGeometry(0.3, 0.32, 24, 1, 0, Math.PI);
    const protMat = new THREE.MeshBasicMaterial({ color: 0xddcc44, transparent: true, opacity: 0.4, side: THREE.DoubleSide });
    const prot = new THREE.Mesh(protGeo, protMat);
    prot.position.set(0, 0.6, 0.3);
    prot.rotation.x = -Math.PI / 2;
    this.scene.add(prot);
    this.experimentObjects.push(prot);

    this.objects.beamPhase = 0;
  }

  animateExperiment_Refraction(delta) {
    this.elapsedTime += delta;

    // Fade in rainbow beams over time
    const fadeStart = 0.5;
    const fadeDuration = 2.0;

    this.objects.rainbowBeams.forEach((rb, idx) => {
      const delay = fadeStart + idx * 0.2;
      if (this.elapsedTime > delay) {
        const progress = Math.min((this.elapsedTime - delay) / fadeDuration, 1.0);
        rb.mesh.material.opacity = progress * rb.targetOpacity;
      }
    });

    // Subtle prism rotation
    const prism = this.objects.prism;
    if (prism) {
      prism.rotation.z = Math.sin(this.elapsedTime * 0.3) * 0.03;
    }

    // Beam shimmer effect
    this.objects.rainbowBeams.forEach((rb, idx) => {
      if (rb.mesh.material.opacity > 0) {
        const shimmer = 0.7 + 0.3 * Math.sin(this.elapsedTime * 3 + idx * 0.8);
        rb.mesh.material.opacity = Math.min(rb.targetOpacity * shimmer, rb.targetOpacity);
      }
    });
  }

  // =============================================
  // EXPERIMENT 5: Magnetic Field
  // Magnit maydoni
  // =============================================
  setupExperiment_MagneticField() {
    this.clearExperiment();
    this.currentExperiment = 'magnetic';
    this.elapsedTime = 0;

    // Bar magnet
    const magnetGroup = new THREE.Group();

    // North half (red)
    const nHalfGeo = new THREE.BoxGeometry(0.6, 0.2, 0.15);
    const nMat = new THREE.MeshStandardMaterial({ color: 0xcc2222, roughness: 0.5, metalness: 0.4 });
    const nHalf = new THREE.Mesh(nHalfGeo, nMat);
    nHalf.position.x = 0.3;
    magnetGroup.add(nHalf);

    // South half (blue)
    const sMat = new THREE.MeshStandardMaterial({ color: 0x2244cc, roughness: 0.5, metalness: 0.4 });
    const sHalf = new THREE.Mesh(nHalfGeo.clone(), sMat);
    sHalf.position.x = -0.3;
    magnetGroup.add(sHalf);

    // N label
    const nLabel = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.08, 0.002),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    nLabel.position.set(0.3, 0, 0.08);
    magnetGroup.add(nLabel);

    // S label
    const sLabel = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.08, 0.002),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    sLabel.position.set(-0.3, 0, 0.08);
    magnetGroup.add(sLabel);

    magnetGroup.position.set(0, 0.5, 0);
    magnetGroup.name = 'magnet';
    this.scene.add(magnetGroup);
    this.experimentObjects.push(magnetGroup);
    this.objects.magnet = magnetGroup;

    // Iron filings (many small thin cylinders aligned to field)
    this.objects.filings = [];
    const filingGeo = new THREE.CylinderGeometry(0.003, 0.003, 0.04, 4);
    const filingMat = new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 0.6, metalness: 0.8 });

    for (let i = 0; i < 200; i++) {
      const filing = new THREE.Mesh(filingGeo.clone(), filingMat.clone());
      const angle = Math.random() * Math.PI * 2;
      const dist = 0.3 + Math.random() * 1.5;
      filing.position.set(
        Math.cos(angle) * dist,
        0.35 + (Math.random() - 0.5) * 0.05,
        Math.sin(angle) * dist * 0.6
      );
      // Random initial rotation
      filing.rotation.z = Math.random() * Math.PI;
      filing.userData.targetAngle = 0;
      filing.userData.aligned = false;
      this.scene.add(filing);
      this.experimentObjects.push(filing);
      this.objects.filings.push(filing);
    }

    // Compass needles around magnet
    this.objects.compasses = [];
    const compassPositions = [
      [1.2, 0.5, 0], [-1.2, 0.5, 0],
      [0.8, 0.5, 0.7], [-0.8, 0.5, 0.7],
      [0.8, 0.5, -0.7], [-0.8, 0.5, -0.7],
      [0, 0.5, 0.9], [0, 0.5, -0.9]
    ];

    compassPositions.forEach(pos => {
      const compassGroup = new THREE.Group();

      // Base disc
      const disc = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.08, 0.02, 16),
        new THREE.MeshStandardMaterial({ color: 0xddddcc, roughness: 0.5 })
      );
      compassGroup.add(disc);

      // Needle (red-blue)
      const needleN = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 0.005, 0.008),
        new THREE.MeshBasicMaterial({ color: 0xff3333 })
      );
      needleN.position.x = 0.025;
      needleN.position.y = 0.015;
      compassGroup.add(needleN);

      const needleS = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 0.005, 0.008),
        new THREE.MeshBasicMaterial({ color: 0xeeeeee })
      );
      needleS.position.x = -0.025;
      needleS.position.y = 0.015;
      compassGroup.add(needleS);

      compassGroup.position.set(...pos);
      this.scene.add(compassGroup);
      this.experimentObjects.push(compassGroup);
      this.objects.compasses.push({
        group: compassGroup,
        needleN: needleN,
        needleS: needleS
      });
    });

    // Field lines (curved tubes from N to S)
    this.objects.fieldLines = [];
    const fieldLineMat = new THREE.MeshBasicMaterial({
      color: 0x44cc44,
      transparent: true,
      opacity: 0.0  // fade in during animation
    });

    const numLines = 8;
    for (let i = 0; i < numLines; i++) {
      const spread = (i / (numLines - 1)) * 1.2 - 0.6;
      const points = [];
      const steps = 30;
      for (let s = 0; s <= steps; s++) {
        const t = s / steps;
        const x = (1 - t) * 0.6 + t * (-0.6); // N to S
        const heightFactor = Math.sin(t * Math.PI);
        const y = 0.5 + heightFactor * (0.5 + Math.abs(spread) * 0.8);
        const z = spread * heightFactor;
        points.push(new THREE.Vector3(x, y, z));
      }
      const curve = new THREE.CatmullRomCurve3(points);
      const tubeGeo = new THREE.TubeGeometry(curve, 24, 0.005, 4, false);
      const line = new THREE.Mesh(tubeGeo, fieldLineMat.clone());
      this.scene.add(line);
      this.experimentObjects.push(line);
      this.objects.fieldLines.push(line);
    }

    // Animated dots along field lines
    this.objects.fieldDots = [];
    for (let li = 0; li < numLines; li++) {
      for (let d = 0; d < 3; d++) {
        const dot = new THREE.Mesh(
          new THREE.SphereGeometry(0.012, 6, 6),
          new THREE.MeshBasicMaterial({ color: 0x88ff88, transparent: true, opacity: 0 })
        );
        dot.userData.lineIndex = li;
        dot.userData.progress = d / 3;
        this.scene.add(dot);
        this.experimentObjects.push(dot);
        this.objects.fieldDots.push(dot);
      }
    }
  }

  animateExperiment_MagneticField(delta) {
    this.elapsedTime += delta;
    const t = this.elapsedTime;

    const magnetPos = this.objects.magnet ? this.objects.magnet.position : new THREE.Vector3(0, 0.5, 0);
    const northPos = new THREE.Vector3(magnetPos.x + 0.3, magnetPos.y, magnetPos.z);
    const southPos = new THREE.Vector3(magnetPos.x - 0.3, magnetPos.y, magnetPos.z);

    // Align iron filings to field (gradual alignment)
    const alignProgress = Math.min(t / 3.0, 1.0);
    this.objects.filings.forEach(filing => {
      const fPos = filing.position;
      // Calculate field direction at this point (dipole approximation)
      const toN = new THREE.Vector3().subVectors(northPos, fPos);
      const toS = new THREE.Vector3().subVectors(southPos, fPos);
      const distN = toN.length();
      const distS = toS.length();

      // Field direction: sum of contributions from N and S poles
      const fieldDir = new THREE.Vector3();
      if (distN > 0.01) fieldDir.add(toN.normalize().multiplyScalar(-1 / (distN * distN)));
      if (distS > 0.01) fieldDir.add(toS.normalize().multiplyScalar(1 / (distS * distS)));
      fieldDir.normalize();

      // Target angle from field direction (projected onto XZ plane)
      const targetAngle = Math.atan2(fieldDir.z, fieldDir.x);

      // Smooth interpolation
      const currentAngle = filing.rotation.z;
      filing.rotation.z += (targetAngle - currentAngle) * alignProgress * delta * 3;
      // Keep filings flat on table
      filing.rotation.x = Math.PI / 2;
    });

    // Align compass needles
    this.objects.compasses.forEach(compass => {
      const cPos = compass.group.position;
      const toN = new THREE.Vector3().subVectors(northPos, cPos);
      const fieldAngle = Math.atan2(toN.z, toN.x);
      const currentRotY = compass.group.rotation.y;
      compass.group.rotation.y += ((-fieldAngle) - currentRotY) * delta * 2;
    });

    // Fade in field lines
    const lineOpacity = Math.min(t / 2.0, 0.5);
    this.objects.fieldLines.forEach(line => {
      line.material.opacity = lineOpacity;
    });

    // Animate dots along field lines
    const numLines = this.objects.fieldLines.length;
    this.objects.fieldDots.forEach(dot => {
      dot.userData.progress += delta * 0.3;
      if (dot.userData.progress > 1) dot.userData.progress -= 1;

      const li = dot.userData.lineIndex;
      const p = dot.userData.progress;

      // Reconstruct the field line path to get position
      const spread = (li / (numLines - 1)) * 1.2 - 0.6;
      const x = (1 - p) * 0.6 + p * (-0.6);
      const heightFactor = Math.sin(p * Math.PI);
      const y = 0.5 + heightFactor * (0.5 + Math.abs(spread) * 0.8);
      const z = spread * heightFactor;

      dot.position.set(x, y, z);
      dot.material.opacity = Math.min(t / 2.0, 0.7) * (0.5 + 0.5 * Math.sin(p * Math.PI));
    });
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

    const onMouseUp = () => { this.isDragging = false; };

    const onWheel = (e) => {
      e.preventDefault();
      this.cameraRadius += e.deltaY * 0.005;
      this.cameraRadius = Math.max(2.5, Math.min(12, this.cameraRadius));
      this.updateCameraPosition();
    };

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
      case 'freefall': this.setupExperiment_FreeFall(); break;
      case 'pendulum': this.setupExperiment_Pendulum(); break;
      case 'circuits': this.setupExperiment_Circuits(); break;
      case 'refraction': this.setupExperiment_Refraction(); break;
      case 'magnetic': this.setupExperiment_MagneticField(); break;
      default:
        console.warn('PhysicsLab: unknown experiment:', name);
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

  updateVariable(name, value) {
    const numVal = parseFloat(value);
    if (isNaN(numVal)) return;

    switch (name) {
      case 'mass':
        this.variables.mass = Math.max(0.1, Math.min(10, numVal));
        break;
      case 'angle':
        this.variables.angle = Math.max(5, Math.min(80, numVal));
        if (this.currentExperiment === 'pendulum' && this.objects.pendulum) {
          this.objects.initialAngle = (this.variables.angle * Math.PI) / 180;
        }
        break;
      case 'voltage':
        this.variables.voltage = Math.max(0, Math.min(12, numVal));
        break;
      case 'gravity':
        this.variables.gravity = Math.max(1, Math.min(20, numVal));
        break;
      default:
        console.warn('PhysicsLab: unknown variable:', name);
    }
  }

  clearExperiment() {
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
    this.particles = [];
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
    const clampedDelta = Math.min(delta, 0.05);

    if (this.isRunning) {
      switch (this.currentExperiment) {
        case 'freefall': this.animateExperiment_FreeFall(clampedDelta); break;
        case 'pendulum': this.animateExperiment_Pendulum(clampedDelta); break;
        case 'circuits': this.animateExperiment_Circuits(clampedDelta); break;
        case 'refraction': this.animateExperiment_Refraction(clampedDelta); break;
        case 'magnetic': this.animateExperiment_MagneticField(clampedDelta); break;
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
let physicsLab = null;

window.initPhysicsLab = function () {
  if (physicsLab) physicsLab.destroy();
  physicsLab = new PhysicsLab('physics-canvas-container');
  physicsLab.init();
  physicsLab.setupExperiment_FreeFall(); // Default experiment
};

window.selectPhysExperiment = function (name) {
  if (physicsLab) physicsLab.selectExperiment(name);
};

window.startPhysExperiment = function () {
  if (physicsLab) physicsLab.startExperiment();
};

window.pausePhysExperiment = function () {
  if (physicsLab) physicsLab.pauseExperiment();
};

window.resetPhysExperiment = function () {
  if (physicsLab) physicsLab.resetExperiment();
};

window.updatePhysVariable = function (name, value) {
  if (physicsLab) physicsLab.updateVariable(name, value);
};

// Bridge funksiyalar index.html onclick lari uchun
window.selectPhysicsExperiment = function(name) {
  var mapped = name;
  if (name === 'free-fall') mapped = 'freefall';
  if (name === 'magnetic-field') mapped = 'magnetic';
  if (typeof window.selectPhysExperiment === 'function') window.selectPhysExperiment(mapped);

  var overlay = document.getElementById('physics-canvas-overlay');
  if (overlay) overlay.style.display = 'none';

  var items = document.querySelectorAll('#physics-experiment-list .experiment-item');
  items.forEach(function(el) {
    if (el.getAttribute('data-experiment') === name) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
};

window.startPhysicsExperiment = function() {
  if (typeof window.startPhysExperiment === 'function') window.startPhysExperiment();
  var pauseBtn = document.getElementById('physics-pause-btn');
  if (pauseBtn) pauseBtn.disabled = false;
  var overlay = document.getElementById('physics-canvas-overlay');
  if (overlay) overlay.style.display = 'none';
};

window.pausePhysicsExperiment = function() {
  if (typeof window.pausePhysExperiment === 'function') window.pausePhysExperiment();
};

window.resetPhysicsExperiment = function() {
  if (typeof window.resetPhysExperiment === 'function') window.resetPhysExperiment();
};

// Slayder hodisasi uchun bridge
window.updatePhysicsSlider = function(name, value) {
  if (physicsLab && typeof physicsLab.updateVariable === 'function') {
    physicsLab.updateVariable(name, parseFloat(value));
  }
};
