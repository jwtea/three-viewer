Number.prototype.map = function(in_min, in_max, out_min, out_max) {
	return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

function loadModel(model) {
	return new Promise((resolve, reject) => {
		const ext = model.url.split(".").pop();

		switch (ext) {
			case "obj": {
				const loader = new THREE.OBJLoader();

				// load a resource
				loader.load(
					// resource URL
					model.url,
					// Function when resource is loaded
					object => {
						resolve({ id: model.id, media: object, type: "obj" });
					},

					() => {},
					() => {
						reject("An error happened with the model import.");
					}
				);
				break;
			}

			case "gltf": {
				const loader = new THREE.GLTFLoader();

				// load a resource
				loader.load(
					// resource URL
					model.url,
					// Function when resource is loaded
					object => {
						resolve({ id: model.id, media: object, type: "gltf" });
					},

					() => {},
					() => {
						reject("An error happened with the model import.");
					}
				);
				break;
			}

			default: {
				const loader = new THREE.OBJLoader();

				// load a resource
				loader.load(
					// resource URL
					model.url,
					// Function when resource is loaded
					object => {
						resolve({ id: model.id, media: object, type: "obj" });
					},

					() => {},
					() => {
						reject("An error happened with the model import.");
					}
				);
			}
		}
	});
}

//main app
class App {
	constructor() {
		this.time = 0;
		this.clock = new THREE.Clock();
		this.init();
		window.addEventListener("resize", this.onWindowResize.bind(this), false);
	}

	init() {
		// renderer
		this.renderer = new THREE.WebGLRenderer({ antialias: true });
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.renderer.setPixelRatio = window.devicePixelRatio;
		document.body.appendChild(this.renderer.domElement);

		// scene
		this.scene = new THREE.Scene();

		// camera
		this.camera = new THREE.PerspectiveCamera(
			40,
			window.innerWidth / window.innerHeight,
			1,
			10000
		);
		this.camera.position.set(30, 0, 30);

		// controls
		this.controls = new THREE.OrbitControls(
			this.camera,
			document.querySelector("canvas")
		);
		this.controls.enabled = true;
		this.controls.enablePan = false;

		// ambient light
		this.scene.add(new THREE.AmbientLight(0x222222));

		// directional light
		let lightTop = new THREE.DirectionalLight(0xffffff, 0.7);
		lightTop.position.set(0, 500, 200);
		lightTop.castShadow = true;
		this.scene.add(lightTop);

		let lightBottom = new THREE.DirectionalLight(0xffffff, 0.25);
		lightBottom.position.set(0, -500, 400);
		lightBottom.castShadow = true;
		this.scene.add(lightBottom);

		let ambientLight = new THREE.AmbientLight(0x798296);
		this.scene.add(ambientLight);

		// axes
		// this.scene.add(new THREE.AxesHelper(20));

		this.load().then(assets => {
			this.addModel().then(() => {
				this.addPostProcessing(assets);
				this.isPostProcessingEnabled = true;
				this.appear()
				this.addGUI();
			});
		});

		//animation loop
		this.renderer.setAnimationLoop(this.render.bind(this));
	}

	addModel() {
		let phongShader = THREE.ShaderLib.phong;

		let fragmentShader = phongShader.fragmentShader;
		fragmentShader =
			document.querySelector("#modelFragmentShaderBeforeMain").textContent +
			fragmentShader.replace(
				"vec4 diffuseColor = vec4( diffuse, opacity );",
				document.querySelector("#modelFragmentShader").textContent
			);

		let material = new THREE.ShaderMaterial({
			uniforms: THREE.UniformsUtils.merge([
				phongShader.uniforms,
				{
					uThreshold: {
						value: 0.5
					},
					uEdgeWidth: {
						value: 0.04
					},
					uEdgeColor: {
						value: [0, 229, 255]
					},
					uColor: {
						value: [20, 20, 20]
					},
					uFrequency: {
						value: 0.03
					}
				}
			]),
			vertexShader: document.querySelector("#modelVertexShader").textContent,
			fragmentShader: fragmentShader,
			lights: true,
			transparent: true,
			// wireframe:true
			// side: THREE.DoubleSide,
			// depthWrite: false,
			// depthTest: false
		});
		console.log()
		return new Promise((resolve, reject) => {
			loadModel({
				id: "head",
				url: "https://rocheclement.fr/public/models/WaltHead.obj"
			}).then(model => {
				this.model = model.media;
				this.model.children[0].material = material;
				this.scene.add(this.model);
				this.model.scale.set(0.25, 0.25, 0.25);
				this.model.position.set(0, -9, 0);
				resolve();
			});
		});
	}

	appear() {
		this.model.children[0].material.uniforms.uThreshold.value = 0;
		TweenLite.to(this.model.children[0].material.uniforms.uThreshold, 2, {
			value: 1,
			ease: Power1.easeOut
		});
	}

	disappear() {
		this.model.children[0].material.uniforms.uThreshold.value = 1;
		TweenLite.to(this.model.children[0].material.uniforms.uThreshold, 2, {
			value: 0,
			ease: Power1.easeOut
		});
	}

	load() {
		const assets = new Map();
		const loadingManager = new THREE.LoadingManager();

		return new Promise((resolve, reject) => {
			loadingManager.onError = reject;
			loadingManager.onProgress = (item, loaded, total) => {
				if (loaded === total) {
					resolve(assets);
				}
			};

			const searchImage = new Image();
			const areaImage = new Image();

			searchImage.addEventListener("load", function() {
				assets.set("smaa-search", this);
				loadingManager.itemEnd("smaa-search");
			});

			areaImage.addEventListener("load", function() {
				assets.set("smaa-area", this);
				loadingManager.itemEnd("smaa-area");
			});

			// Register the new image assets.
			loadingManager.itemStart("smaa-search");
			loadingManager.itemStart("smaa-area");

			// Load the images asynchronously.
			searchImage.src = PP.SMAAEffect.searchImageDataURL;
			areaImage.src = PP.SMAAEffect.areaImageDataURL;
		});
	}

	addPostProcessing(assets) {
		// this.renderer = renderer;
		this.composer = new PP.EffectComposer(this.renderer);

		this.noiseEffect = new PP.NoiseEffect({ premultiply: true });
		this.vignetteEffect = new PP.VignetteEffect();
		this.bloomEffect = new PP.BloomEffect();

		this.SMAAEffect = new PP.SMAAEffect(
			assets.get("smaa-search"),
			assets.get("smaa-area")
		);
		this.SMAAEffect.setOrthogonalSearchSteps(112);
		this.SMAAEffect.setEdgeDetectionThreshold(0.5);
		this.chromaticAberrationEffect = new PP.ChromaticAberrationEffect();
		// this.chromaticAberrationEffect.offset.x = 0.002;
		// this.chromaticAberrationEffect.offset.y = 0.002;

		this.renderPass = new PP.RenderPass(this.scene, this.camera);
		this.effectPass = new PP.EffectPass(this.camera, this.SMAAEffect);

		this.effectPass2 = new PP.EffectPass(
			this.chromaticAberrationEffect,
			this.bloomEffect,
			this.chromaticAberrationEffect
		);

		// this.noiseEffect.blendMode.opacity.value = 0.75;
		this.effectPass2.renderToScreen = true;

		this.composer.addPass(this.renderPass);
		this.composer.addPass(this.effectPass);
		this.composer.addPass(this.effectPass2);
	}

	render() {
		// this.clock.update();
		// this.time = this.time + this.clock.getDelta();
		// this.mesh.material.uniforms.uTime = this.time;

		Boolean(this.isPostProcessingEnabled)
			? this.composer.render(this.clock.getDelta())
			: this.renderer.render(this.scene, this.camera);
	}

	addGUI() {
		this.gui = new dat.GUI();

		this.params = {
			postprocessing: {
				enabled: this.isPostProcessingEnabled,
				bloom: {
					blendFunction: PP.BlendFunction.SCREEN,
					resolutionScale: 0.5,
					kernelSize: PP.KernelSize.LARGE,
					distinction: 1,
					dithering: false
				},
				chroma: {
					offset: {
						x: 0,
						y: 0
					}
				},
				SMAA: {
					searchStep: 112,
					edgeDetectionThreshold: 0.5
				}
			},
			effect: {
				appear: this.appear.bind(this),
				disappear: this.disappear.bind(this)
			}
		};

		let pp = this.gui.addFolder("post-processing");
		// pp.open();
		pp.add(this, "isPostProcessingEnabled").name("enabled");

		//bloom
		let bloom = pp.addFolder("bloom");
		bloom.open();

		this.bloomEffect.setResolutionScale(
			this.params.postprocessing.bloom.resolutionScale
		);
		bloom
			.add(this.params.postprocessing.bloom, "resolutionScale", 0.01, 1)
			.name("resolution")
			.onChange(value => {
				this.bloomEffect.setResolutionScale(value);
			})
			.listen();

		bloom
			.add(this.params.postprocessing.bloom, "kernelSize", PP.KernelSize)
			.name("kernel size")
			.onChange(value => {
				this.bloomEffect.kernelSize = value;
			})
			.listen();

		let luminance = bloom.addFolder("Luminance");
		luminance.open();
		this.bloomEffect.distinction = this.params.postprocessing.bloom.distinction;
		luminance
			.add(this.params.postprocessing.bloom, "distinction", 1, 10)
			.name("distinction")
			.onChange(value => {
				this.bloomEffect.distinction = value;
			})
			.listen();

		// bloom
		// 	.add(this.params.postprocessing.bloom, "blendFunction", PP.BlendFunction)
		// 	.name("blend mode")
		// 	.onChange(value => {
		// 		this.bloomEffect.blendMode.blendFunction = parseInt(value);
		// 	});

		bloom
			.add(this.params.postprocessing.bloom, "dithering")
			.name("dithering")
			.onChange(value => {
				this.bloomEffect.dithering = value;
			});

		let chroma = pp.addFolder("chromatic aberration");
		chroma.open();

		let offset = chroma.addFolder("offset");
		offset
			.add(this.params.postprocessing.chroma.offset, "x", -0.01, 0.01)
			.step(0.001)
			.onChange(value => {
				this.chromaticAberrationEffect.offset.x = value;
			});

		offset
			.add(this.params.postprocessing.chroma.offset, "y", -0.01, 0.01)
			.step(0.001)
			.onChange(value => {
				this.chromaticAberrationEffect.offset.y = value;
			});

		let SMAA = pp.addFolder("SMAA");
		SMAA.open();

		SMAA.add(this.params.postprocessing.SMAA, "searchStep", 0, 112)
			.name("search step")
			.onChange(value => {
				this.SMAAEffect.setOrthogonalSearchSteps(value);
			});

		SMAA.add(this.params.postprocessing.SMAA, "edgeDetectionThreshold", 0.05, 0.5)
			.name("sensitivity")
			.step(0.01)
			.onChange(value => {
				this.SMAAEffect.setEdgeDetectionThreshold(value);
			});

		this.gui
			.add(
				this.model.children[0].material.uniforms.uThreshold,
				"value",
				0,
				1,
				0.01
			)
			.name("threshold")
			.listen();
		this.gui
			.add(
				this.model.children[0].material.uniforms.uEdgeWidth,
				"value",
				0.001,
				0.1,
				0.001
			)
			.name("edge width");

		this.gui
			.add(
				this.model.children[0].material.uniforms.uFrequency,
				"value",
				0.001,
				1,
				0.001
			)
			.name("noise frequency");

		this.gui
			.addColor(this.model.children[0].material.uniforms.uEdgeColor, "value")
			.name("color");

		this.gui.add(this.params.effect, "appear");
		this.gui.add(this.params.effect, "disappear");
	}

	onWindowResize() {
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();

		this.renderer.setSize(window.innerWidth, window.innerHeight);
	}
}

const PP = POSTPROCESSING;

const simplex = new SimplexNoise();

//init app
const app = new App();
