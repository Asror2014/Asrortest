/**
 * 30-maktabtest - 3D Interaktiv Geometriya va Stereometriya Laboratoriyasi
 * Three.js asosida ishlaydi (100% oflayn)
 * 
 * Fazo jismlari:
 *   1. cube: Kub va Parallelepiped (a, b, c o'lchamlari, hajm va to'la sirt)
 *   2. pyramid: Muntazam Piramida (asos tomoni, balandlik, apofema)
 *   3. cylinder: Silindr (asos radiusi R, balandlik H)
 *   4. cone: Konus (asos radiusi R, balandlik H, yasovchi l)
 *   5. sphere: Shar va Sfera (radius R, kesim tekisligi)
 */

class GeometryLab {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      console.error('GeometryLab: container topilmadi:', containerId);
      return;
    }
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.clock = null;
    this.objects = {};
    this.currentShape = 'cube';
    this.animationId = null;
    this.isRunning = true;

    // Stereometrik parametrlar
    this.params = {
      a: 4,
      b: 4,
      c: 4,
      radius: 3,
      height: 5,
      sides: 4,
      wireframe: false
    };

    // Kamera orbit
    this.isDragging = false;
    this.previousMouse = { x: 0, y: 0 };
    this.theta = 0.6;
    this.phi = 1.0;
    this.cameraRadius = 16;
    this.cameraTarget = new THREE.Vector3(0, 0, 0);

    this._onResize = () => this.onWindowResize();
  }

  init() {
    if (!this.container) return;

    const width = this.container.clientWidth || 800;
    const height = this.container.clientHeight || 600;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0f172a); // Zamonaviy to'q ko'k slate fon

    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    this.updateCameraPosition();

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    while (this.container.firstChild) {
      if (this.container.firstChild.id === 'geometry-canvas-overlay') {
        this.container.firstChild.style.display = 'none';
        break;
      }
      this.container.removeChild(this.container.firstChild);
    }
    this.container.appendChild(this.renderer.domElement);

    this.clock = new THREE.Clock();
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
      this.cameraRadius = Math.max(5, Math.min(50, this.cameraRadius));
      this.updateCameraPosition();
    };

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

  clearScene() {
    while (this.scene.children.length > 0) {
      this.scene.remove(this.scene.children[0]);
    }
    this.objects = {};
    this.cameraTarget.set(0, 0, 0);

    // Grid va o'qlar (Koordinata tekisligi)
    const grid = new THREE.GridHelper(16, 16, 0x475569, 0x1e293b);
    grid.position.y = -3.5;
    this.scene.add(grid);

    // Chiroqlar
    const ambientLight = new THREE.AmbientLight(0x64748b, 0.7);
    this.scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight1.position.set(12, 16, 12);
    this.scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 1.0);
    dirLight2.position.set(-12, -8, -12);
    this.scene.add(dirLight2);
  }

  /* ============================================================
     1-SHAKL: KUB VA PARALLELEPIPED
     ============================================================ */
  setupCube() {
    this.clearScene();
    this.currentShape = 'cube';

    const a = this.params.a;
    const b = this.params.b;
    const c = this.params.c;

    const group = new THREE.Group();

    // Yarim shaffof rangli asosiy quti
    const geom = new THREE.BoxGeometry(a, b, c);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x6366f1, // Indigo
      transparent: true,
      opacity: 0.75,
      roughness: 0.3,
      metalness: 0.2
    });
    const mesh = new THREE.Mesh(geom, mat);
    group.add(mesh);

    // Qirralar chiziqlari (Edges)
    const edgesGeom = new THREE.EdgesGeometry(geom);
    const edgeMat = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 });
    const edgeLines = new THREE.LineSegments(edgesGeom, edgeMat);
    group.add(edgeLines);

    // Fazoviy ichki diagonal (Qizil punktir chiziq)
    const diagGeom = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-a / 2, -b / 2, -c / 2),
      new THREE.Vector3(a / 2, b / 2, c / 2)
    ]);
    const diagMat = new THREE.LineDashedMaterial({ color: 0xef4444, dashSize: 0.3, gapSize: 0.15 });
    const diagLine = new THREE.Line(diagGeom, diagMat);
    diagLine.computeLineDistances();
    group.add(diagLine);

    this.scene.add(group);
    this.objects.shapeGroup = group;

    // Hisob-kitoblar
    const V = a * b * c;
    const S = 2 * (a * b + b * c + a * c);
    const d = Math.sqrt(a * a + b * b + c * c).toFixed(2);

    this.updateUIInfo(
      "To'g'ri burchakli Parallelepiped va Kub",
      "Parallelepiped — qarama-qarshi yoqlari juft-jufti bilan parallel va teng bo'lgan ko'pyoq. Agar barcha o'lchamlari teng bo'lsa (a = b = c), u Kub deyiladi.",
      "V = a · b · c | S = 2(ab + bc + ac) | d = √(a² + b² + c²)",
      [
        { label: "Hajm (V):", value: V + " birlik³" },
        { label: "To'la sirt (S):", value: S + " birlik²" },
        { label: "Katta diagonal (d):", value: d + " birlik" }
      ]
    );
  }

  /* ============================================================
     2-SHAKL: MUNTAZAM PIRAMIDA
     ============================================================ */
  setupPyramid() {
    this.clearScene();
    this.currentShape = 'pyramid';

    const a = this.params.a;
    const h = this.params.height;

    const group = new THREE.Group();

    // To'rtburchakli piramida
    const geom = new THREE.ConeGeometry(a * 0.707, h, 4);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b, // Amber
      transparent: true,
      opacity: 0.8,
      roughness: 0.35
    });
    const mesh = new THREE.Mesh(geom, mat);
    mesh.rotation.y = Math.PI / 4;
    group.add(mesh);

    const edges = new THREE.EdgesGeometry(geom);
    const edgeLines = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff }));
    edgeLines.rotation.y = Math.PI / 4;
    group.add(edgeLines);

    // Balandlik o'qi (Vertikal chiziq)
    const heightGeom = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, -h / 2, 0),
      new THREE.Vector3(0, h / 2, 0)
    ]);
    const heightLine = new THREE.Line(heightGeom, new THREE.LineBasicMaterial({ color: 0xef4444 }));
    group.add(heightLine);

    this.scene.add(group);
    this.objects.shapeGroup = group;

    const sAsos = a * a;
    const V = ((1 / 3) * sAsos * h).toFixed(1);
    const apofema = Math.sqrt(Math.pow(h, 2) + Math.pow(a / 2, 2)).toFixed(2);
    const sYon = (2 * a * apofema).toFixed(1);
    const sTola = (sAsos + parseFloat(sYon)).toFixed(1);

    this.updateUIInfo(
      "Muntazam To'rtburchakli Piramida",
      "Asosi kvadratdan, yon yoqlari esa umumiy uchga ega bo'lgan teng yonli uchburchaklardan iborat ko'pyoq. Piramida balandligi uning uchidan asosiga tushirilgan perpendikulyardir.",
      "V = ⅓ · S_asos · h | S_to'la = S_asos + S_yon",
      [
        { label: "Asos yuzi (S_asos):", value: sAsos + " birlik²" },
        { label: "Hajm (V):", value: V + " birlik³" },
        { label: "Apofema (l):", value: apofema + " birlik" },
        { label: "To'la sirt (S_to'la):", value: sTola + " birlik²" }
      ]
    );
  }

  /* ============================================================
     3-SHAKL: SILINDR
     ============================================================ */
  setupCylinder() {
    this.clearScene();
    this.currentShape = 'cylinder';

    const r = this.params.radius;
    const h = this.params.height;

    const group = new THREE.Group();

    const geom = new THREE.CylinderGeometry(r, r, h, 36);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4, // Cyan
      transparent: true,
      opacity: 0.8,
      roughness: 0.3
    });
    const mesh = new THREE.Mesh(geom, mat);
    group.add(mesh);

    const edges = new THREE.EdgesGeometry(geom, 25);
    const edgeLines = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff }));
    group.add(edgeLines);

    this.scene.add(group);
    this.objects.shapeGroup = group;

    const V = (Math.PI * r * r * h).toFixed(1);
    const sYon = (2 * Math.PI * r * h).toFixed(1);
    const sTola = (2 * Math.PI * r * (r + h)).toFixed(1);

    this.updateUIInfo(
      "Aylanma Silindr",
      "To'g'ri to'rtburchakni uning bir tomoni atrofida 360 gradusga aylantirishdan hosil bo'lgan aylanma jism. Asoslari teng doiralardan iborat.",
      "V = π · R² · H | S_yon = 2π · R · H | S_to'la = 2πR(R + H)",
      [
        { label: "Hajm (V):", value: V + " birlik³" },
        { label: "Yon sirt yuzi:", value: sYon + " birlik²" },
        { label: "To'la sirt yuzi:", value: sTola + " birlik²" }
      ]
    );
  }

  /* ============================================================
     4-SHAKL: KONUS
     ============================================================ */
  setupCone() {
    this.clearScene();
    this.currentShape = 'cone';

    const r = this.params.radius;
    const h = this.params.height;

    const group = new THREE.Group();

    const geom = new THREE.ConeGeometry(r, h, 36);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xec4899, // Pink
      transparent: true,
      opacity: 0.82,
      roughness: 0.3
    });
    const mesh = new THREE.Mesh(geom, mat);
    group.add(mesh);

    const edges = new THREE.EdgesGeometry(geom, 25);
    const edgeLines = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff }));
    group.add(edgeLines);

    this.scene.add(group);
    this.objects.shapeGroup = group;

    const l = Math.sqrt(r * r + h * h).toFixed(2);
    const V = ((1 / 3) * Math.PI * r * r * h).toFixed(1);
    const sYon = (Math.PI * r * l).toFixed(1);
    const sTola = (Math.PI * r * (r + parseFloat(l))).toFixed(1);

    this.updateUIInfo(
      "Aylanma Konus",
      "To'g'ri burchakli uchburchakni uning bir kateti atrofida aylantirishdan hosil bo'lgan aylanma jism. Asosi doiradan iborat bo'lib, yasovchisi (l) uchidan asos aylanasi nuqtalariga o'tkazilgan kesmadir.",
      "V = ⅓ · πR² · H | l = √(R² + H²) | S_to'la = πR(R + l)",
      [
        { label: "Yasovchisi (l):", value: l + " birlik" },
        { label: "Hajm (V):", value: V + " birlik³" },
        { label: "Yon sirt yuzi:", value: sYon + " birlik²" },
        { label: "To'la sirt yuzi:", value: sTola + " birlik²" }
      ]
    );
  }

  /* ============================================================
     5-SHAKL: SHAR VA SFERA
     ============================================================ */
  setupSphere() {
    this.clearScene();
    this.currentShape = 'sphere';

    const r = this.params.radius;
    const group = new THREE.Group();

    // Shaffof rangli shar
    const geom = new THREE.SphereGeometry(r, 36, 36);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x10b981, // Emerald
      transparent: true,
      opacity: 0.75,
      roughness: 0.3,
      metalness: 0.1
    });
    const mesh = new THREE.Mesh(geom, mat);
    group.add(mesh);

    // Ekvator va meridian to'rlari
    const wireGeom = new THREE.SphereGeometry(r + 0.02, 16, 12);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const wire = new THREE.Mesh(wireGeom, wireMat);
    group.add(wire);

    // Katta doira kesimi (Ekvatorial tekislik)
    const diskGeom = new THREE.RingGeometry(0, r, 36);
    const diskMat = new THREE.MeshBasicMaterial({
      color: 0xfacc15,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5
    });
    const disk = new THREE.Mesh(diskGeom, diskMat);
    disk.rotation.x = Math.PI / 2;
    group.add(disk);

    this.scene.add(group);
    this.objects.shapeGroup = group;

    const V = ((4 / 3) * Math.PI * Math.pow(r, 3)).toFixed(1);
    const S = (4 * Math.PI * r * r).toFixed(1);
    const sKesim = (Math.PI * r * r).toFixed(1);

    this.updateUIInfo(
      "Shar va Sfera (Katta doira kesimi)",
      "Fazoda berilgan nuqtadan (markazdan) berilgan masofada (radiusda) yotgan barcha nuqtalar to'plami sfera deyiladi. Sfera bilan chegaralangan fazo qismi shar deyiladi. Markazdan o'tuvchi har qanday tekislik sharni katta doira bo'ylab kesadi.",
      "V = ⁴⁄₃ · πR³ | S_to'la = 4π · R² | S_kesim = πR²",
      [
        { label: "Radiusi (R):", value: r + " birlik" },
        { label: "Hajm (V):", value: V + " birlik³" },
        { label: "Sfera yuzi (S):", value: S + " birlik²" },
        { label: "Katta kesim yuzi:", value: sKesim + " birlik²" }
      ]
    );
  }

  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());

    if (this.isRunning && this.objects.shapeGroup) {
      this.objects.shapeGroup.rotation.y += 0.005;
    }

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  updateParam(key, val) {
    this.params[key] = parseFloat(val);
    const lbl = document.getElementById('slider-geom-' + key + '-value');
    if (lbl) lbl.textContent = val;

    if (this.currentShape === 'cube') this.setupCube();
    else if (this.currentShape === 'pyramid') this.setupPyramid();
    else if (this.currentShape === 'cylinder') this.setupCylinder();
    else if (this.currentShape === 'cone') this.setupCone();
    else if (this.currentShape === 'sphere') this.setupSphere();
  }

  updateUIInfo(title, desc, formula, values) {
    const titleEl = document.getElementById('geometry-experiment-title');
    const descEl = document.getElementById('geometry-experiment-description');
    const formulaEl = document.getElementById('geometry-formula');
    const valuesContainer = document.getElementById('geometry-values');

    if (titleEl) titleEl.textContent = title;
    if (descEl) descEl.textContent = desc;
    if (formulaEl) {
      formulaEl.innerHTML = '<span class="formula-label">Stereometriya formulasi:</span> <span class="formula-text">' + formula + '</span>';
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

let geometryLab = null;

window.initGeometryLab = function () {
  if (geometryLab) geometryLab.destroy();
  geometryLab = new GeometryLab('geometry-canvas-container');
  geometryLab.init();
  geometryLab.setupCube();
};

window.selectGeometryExperiment = function (shapeKey) {
  if (!geometryLab) window.initGeometryLab();

  const items = document.querySelectorAll('#geometry-experiment-list .experiment-item');
  items.forEach(it => {
    it.classList.toggle('active', it.getAttribute('data-experiment') === shapeKey);
  });

  // Mos slayderlarni ko'rsatish
  const abcSliders = document.getElementById('geom-sliders-abc');
  const rhSliders = document.getElementById('geom-sliders-rh');
  const rOnlySlider = document.getElementById('geom-slider-r-only');

  if (abcSliders) abcSliders.style.display = (shapeKey === 'cube' || shapeKey === 'pyramid') ? 'flex' : 'none';
  if (rhSliders) rhSliders.style.display = (shapeKey === 'cylinder' || shapeKey === 'cone') ? 'flex' : 'none';
  if (rOnlySlider) rOnlySlider.style.display = (shapeKey === 'sphere') ? 'flex' : 'none';

  if (shapeKey === 'cube') geometryLab.setupCube();
  else if (shapeKey === 'pyramid') geometryLab.setupPyramid();
  else if (shapeKey === 'cylinder') geometryLab.setupCylinder();
  else if (shapeKey === 'cone') geometryLab.setupCone();
  else if (shapeKey === 'sphere') geometryLab.setupSphere();
};

window.updateGeometrySlider = function (key, val) {
  if (geometryLab) geometryLab.updateParam(key, val);
};

window.startGeometryExperiment = function () {
  if (geometryLab) geometryLab.isRunning = true;
};
window.pauseGeometryExperiment = function () {
  if (geometryLab) geometryLab.isRunning = false;
};
window.resetGeometryExperiment = function () {
  if (geometryLab) {
    if (geometryLab.currentShape === 'cube') geometryLab.setupCube();
    else if (geometryLab.currentShape === 'pyramid') geometryLab.setupPyramid();
    else if (geometryLab.currentShape === 'cylinder') geometryLab.setupCylinder();
    else if (geometryLab.currentShape === 'cone') geometryLab.setupCone();
    else if (geometryLab.currentShape === 'sphere') geometryLab.setupSphere();
  }
};
