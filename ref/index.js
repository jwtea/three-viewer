THREE.VolumetericLightShader = {
  uniforms: {
    tDiffuse: { value: null },
    lightPosition: { value: new THREE.Vector2(0.5, 0.5) },
    exposure: { value: 0.18 },
    decay: { value: 0.95 },
    density: { value: 0.8 },
    weight: { value: 0.4 },
    samples: { value: 50 },
  },

  vertexShader: [
    'varying vec2 vUv;',
    'void main() {',
    'vUv = uv;',
    'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
    '}',
  ].join('\n'),

  fragmentShader: [
    'varying vec2 vUv;',
    'uniform sampler2D tDiffuse;',
    'uniform vec2 lightPosition;',
    'uniform float exposure;',
    'uniform float decay;',
    'uniform float density;',
    'uniform float weight;',
    'uniform int samples;',
    'const int MAX_SAMPLES = 100;',
    'void main()',
    '{',
    'vec2 texCoord = vUv;',
    'vec2 deltaTextCoord = texCoord - lightPosition;',
    'deltaTextCoord *= 1.0 / float(samples) * density;',
    'vec4 color = texture2D(tDiffuse, texCoord);',
    'float illuminationDecay = 1.0;',
    'for(int i=0; i < MAX_SAMPLES; i++)',
    '{',
    'if(i == samples){',
    'break;',
    '}',
    'texCoord -= deltaTextCoord;',
    'vec4 sample = texture2D(tDiffuse, texCoord);',
    'sample *= illuminationDecay * weight;',
    'color += sample;',
    'illuminationDecay *= decay;',
    '}',
    'gl_FragColor = color * exposure;',
    '}',
  ].join('\n'),
};

THREE.AdditiveBlendingShader = {
  uniforms: {
    tDiffuse: { value: null },
    tAdd: { value: null },
  },

  vertexShader: [
    'varying vec2 vUv;',
    'void main() {',
    'vUv = uv;',
    'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
    '}',
  ].join('\n'),

  fragmentShader: [
    'uniform sampler2D tDiffuse;',
    'uniform sampler2D tAdd;',
    'varying vec2 vUv;',
    'void main() {',
    'vec4 color = texture2D( tDiffuse, vUv );',
    'vec4 add = texture2D( tAdd, vUv );',
    'gl_FragColor = color + add;',
    '}',
  ].join('\n'),
};

THREE.PassThroughShader = {
  uniforms: {
    tDiffuse: { value: null },
  },

  vertexShader: [
    'varying vec2 vUv;',
    'void main() {',
    'vUv = uv;',
    'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
    '}',
  ].join('\n'),

  fragmentShader: [
    'uniform sampler2D tDiffuse;',
    'varying vec2 vUv;',
    'void main() {',
    'gl_FragColor = texture2D( tDiffuse, vec2( vUv.x, vUv.y ) );',
    '}',
  ].join('\n'),
};

(function() {
  var scene,
    camera,
    renderer,
    composer,
    box,
    pointLight,
    occlusionComposer,
    occlusionRenderTarget,
    occlusionBox,
    lightSphere,
    volumetericLightShaderUniforms,
    DEFAULT_LAYER = 0,
    OCCLUSION_LAYER = 1,
    renderScale = 0.5,
    angle = 0,
    scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  console.log('wow');

  function setupScene() {
    var ambientLight, geometry, material;

    ambientLight = new THREE.AmbientLight(0x2c3e50);
    scene.add(ambientLight);

    pointLight = new THREE.PointLight(0xffffff);
    scene.add(pointLight);

    geometry = new THREE.SphereBufferGeometry(1, 16, 16);
    material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    lightSphere = new THREE.Mesh(geometry, material);
    lightSphere.layers.set(OCCLUSION_LAYER);
    scene.add(lightSphere);

    geometry = new THREE.BoxBufferGeometry(1, 1, 1);
    material = new THREE.MeshPhongMaterial({ color: 0xe74c3c });
    box = new THREE.Mesh(geometry, material);
    box.position.z = 2;
    scene.add(box);

    material = new THREE.MeshBasicMaterial({ color: 0x000000 });
    occlusionBox = new THREE.Mesh(geometry, material);
    occlusionBox.position.z = 2;
    occlusionBox.layers.set(OCCLUSION_LAYER);
    scene.add(occlusionBox);

    camera.position.z = 6;
  }

  function setupPostprocessing() {
    var pass;

    occlusionRenderTarget = new THREE.WebGLRenderTarget(
      window.innerWidth * renderScale,
      window.innerHeight * renderScale
    );
    occlusionComposer = new THREE.EffectComposer(
      renderer,
      occlusionRenderTarget
    );
    occlusionComposer.addPass(new THREE.RenderPass(scene, camera));
    pass = new THREE.ShaderPass(THREE.VolumetericLightShader);
    pass.needsSwap = false;
    occlusionComposer.addPass(pass);

    volumetericLightShaderUniforms = pass.uniforms;

    composer = new THREE.EffectComposer(renderer);
    composer.addPass(new THREE.RenderPass(scene, camera));
    pass = new THREE.ShaderPass(THREE.AdditiveBlendingShader);
    pass.uniforms.tAdd.value = occlusionRenderTarget.texture;
    composer.addPass(pass);
    pass.renderToScreen = true;
  }

  function onFrame() {
    requestAnimationFrame(onFrame);
    update();
    render();
  }

  function update() {
    var radius = 2.5,
      xpos = Math.sin(angle) * radius,
      zpos = Math.cos(angle) * radius;

    box.position.set(xpos, 0, zpos);
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;

    occlusionBox.position.copy(box.position);
    occlusionBox.rotation.copy(box.rotation);

    angle += 0.02;
  }

  function render() {
    camera.layers.set(OCCLUSION_LAYER);
    renderer.setClearColor(0x000000);
    occlusionComposer.render();

    camera.layers.set(DEFAULT_LAYER);
    renderer.setClearColor(0x090611);
    composer.render();
  }

  function addRenderTargetImage() {
    var material, mesh, folder;

    material = new THREE.ShaderMaterial(THREE.PassThroughShader);
    material.uniforms.tDiffuse.value = occlusionRenderTarget.texture;

    mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), material);
    composer.passes[1].scene.add(mesh);
    mesh.visible = false;

    folder = gui.addFolder('Light Pass Render Image');
    folder.add(mesh, 'visible');
    folder
      .add({ scale: 0.5 }, 'scale', { Full: 1, Half: 0.5, Quarter: 0.25 })
      .onChange(function(value) {
        renderScale = value;
        window.dispatchEvent(new Event('resize'));
      });
    folder.open();
  }

  setupScene();
  setupPostprocessing();
  setupGUI();
  addRenderTargetImage();
  onFrame();
})();
