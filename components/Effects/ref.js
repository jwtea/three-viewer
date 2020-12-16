'use strict';
!function(m) {
  /**
   * @param {string} i
   * @return {?}
   */
  function t(i) {
    if (n[i]) {
      return n[i].exports;
    }
    var module = n[i] = {
      i : i,
      l : false,
      exports : {}
    };
    return m[i].call(module.exports, module, module.exports, t), module.l = true, module.exports;
  }
  var n = {};
  /** @type {!Array} */
  t.m = m;
  t.c = n;
  /**
   * @param {string} d
   * @param {!Object} name
   * @param {!Function} n
   * @return {undefined}
   */
  t.d = function(d, name, n) {
    if (!t.o(d, name)) {
      Object.defineProperty(d, name, {
        enumerable : true,
        get : n
      });
    }
  };
  /**
   * @param {string} val
   * @return {undefined}
   */
  t.r = function(val) {
    if ("undefined" != typeof Symbol && Symbol.toStringTag) {
      Object.defineProperty(val, Symbol.toStringTag, {
        value : "Module"
      });
    }
    Object.defineProperty(val, "__esModule", {
      value : true
    });
  };
  /**
   * @param {string} a
   * @param {number} b
   * @return {?}
   */
  t.t = function(a, b) {
    if (1 & b && (a = t(a)), 8 & b) {
      return a;
    }
    if (4 & b && "object" == typeof a && a && a.__esModule) {
      return a;
    }
    /** @type {!Object} */
    var d = Object.create(null);
    if (t.r(d), Object.defineProperty(d, "default", {
      enumerable : true,
      value : a
    }), 2 & b && "string" != typeof a) {
      var key;
      for (key in a) {
        t.d(d, key, function(howMany) {
          return a[howMany];
        }.bind(null, key));
      }
    }
    return d;
  };
  /**
   * @param {!Object} e
   * @return {?}
   */
  t.n = function(e) {
    /** @type {function(): ?} */
    var n = e && e.__esModule ? function() {
      return e.default;
    } : function() {
      return e;
    };
    return t.d(n, "a", n), n;
  };
  /**
   * @param {string} val
   * @param {!Function} name
   * @return {?}
   */
  t.o = function(val, name) {
    return Object.prototype.hasOwnProperty.call(val, name);
  };
  /** @type {string} */
  t.p = "/opt/build/repo/docs";
  t(t.s = 62);
}([function(module, canCreateDiscussions, n) {
  module.exports = window.THREE;
}, function(canCreateDiscussions, options, require) {
  var TagsCollection = require(13);
  options.loader = require(37).create();
  /** @type {null} */
  options.canvas = null;
  /** @type {null} */
  options.gl = null;
  /** @type {null} */
  options.isSupportWebGL = null;
  /** @type {boolean} */
  options.hasInitialized = false;
  options.lang = document.documentElement.lang;
  /** @type {null} */
  options.renderer = null;
  /** @type {null} */
  options.scene = null;
  /** @type {null} */
  options.scrollContainer = null;
  /** @type {null} */
  options.camera = null;
  /** @type {null} */
  options.mobileOrientation = null;
  /** @type {string} */
  options.currPath = "";
  /** @type {string} */
  options.prevPath = "";
  /** @type {!Array} */
  options.currRoute = [];
  /** @type {null} */
  options.prevRoute = null;
  /** @type {string} */
  options.pageId = "";
  /** @type {null} */
  options.resolution = null;
  /** @type {null} */
  options.mouse = null;
  /** @type {null} */
  options.mouseVel = null;
  /** @type {null} */
  options.elasticMouse = null;
  /** @type {null} */
  options.elasticMouseVel = null;
  /** @type {null} */
  options.easedMouse = null;
  /** @type {null} */
  options.easedMouseVel = null;
  /** @type {number} */
  options.mouseWeight = 0;
  /** @type {number} */
  options.width = 0;
  /** @type {number} */
  options.height = 0;
  /** @type {number} */
  options.fullHeight = 0;
  /** @type {number} */
  options.scrollTop = 0;
  /** @type {number} */
  options.scrollTopVelocity = 0;
  /** @type {number} */
  options.currentTime = 0;
  /** @type {number} */
  options.time = 0;
  /** @type {number} */
  options.deltaTime = 0;
  /** @type {number} */
  options.deltaRatio = 0;
  /** @type {number} */
  options.featureOverMaskHeight = .35;
  /** @type {boolean} */
  options.isRendering = false;
  /** @type {null} */
  options.debugTexture = null;
  options.onUpdateEnded = new TagsCollection;
}, function(canCreateDiscussions, self, n) {
  Object.defineProperty(self, "__esModule", {
    value : true
  });
  /** @type {number} */
  var zoomfactor = self.PI = Math.PI;
  /** @type {function(number, number, number): ?} */
  var random = (self.PI2 = 2 * zoomfactor, self.HALF_PI = .5 * zoomfactor, self.DEG2RAD = zoomfactor / 180, self.RAD2DEG = 180 / zoomfactor, self.step = function(start, now) {
    return now < start ? 0 : 1;
  }, self.clamp = function(a, b, c) {
    return a < b ? b : a > c ? c : a;
  });
  /** @type {function(number, number, number): ?} */
  var o = (self.mix = function(b, y, d) {
    return b + (y - b) * d;
  }, self.cMix = function(min, max, seed) {
    return min + (max - min) * random(seed, 0, 1);
  }, self.unMix = function(start1, stop1, n) {
    return (n - start1) / (stop1 - start1);
  }, self.cUnMix = function(min, max, num) {
    return random((num - min) / (max - min), 0, 1);
  });
  /** @type {function(string, string, string, number, number): ?} */
  var callService$1 = self.map = function(b, value, base, d, c) {
    return d + (b - value) * (c - d) / (base - value);
  };
  /** @type {function(number): ?} */
  var hashKeyEvent = (self.cMap = function(time, offset, duration, min, max) {
    return min + random((time - offset) / (duration - offset), 0, 1) * (max - min);
  }, self.fit = function(e, val, n, v, h, c) {
    return e = o(val, n, e), c && (e = c(e)), v + e * (h - v);
  }, self.normalize = function(e, t, n) {
    return callService$1(e, t, n, 0, 1);
  }, self.smoothstep = function(value, a, t) {
    return (t = o(value, a, t)) * t * (3 - 2 * t);
  }, self.fract = function(x) {
    return x - Math.floor(x);
  });
  /** @type {function(number): ?} */
  var canAttach = (self.hash = function(s) {
    return hashKeyEvent(43758.5453123 * Math.sin(s));
  }, self.hash2 = function(inv, inv2) {
    return hashKeyEvent(43758.5453 * Math.sin(12.9898 * inv + 4.1414 * inv2));
  }, self.sign = function(chain) {
    return chain ? chain < 0 ? -1 : 1 : 0;
  }, self.isPowerOfTwo = function(n) {
    return (n & -n) === n;
  });
  /** @type {function(number): ?} */
  var orig_onKeyDown = self.powerTwoCeilingBase = function(num) {
    return Math.ceil(Math.log(num) / Math.log(2));
  };
  /** @type {function(number): ?} */
  var clamp = self.powerTwoCeiling = function(e) {
    return canAttach(e) ? e : 1 << orig_onKeyDown(e);
  };
  /** @type {function(number): ?} */
  var scriptKeyHandler = self.powerTwoFloorBase = function(width) {
    return Math.floor(Math.log(width) / Math.log(2));
  };
  /**
   * @param {number} e
   * @return {?}
   */
  self.powerTwoFloor = function(e) {
    return canAttach(e) ? e : 1 << scriptKeyHandler(e);
  };
  /**
   * @param {undefined} x
   * @return {?}
   */
  self.powerTwoTextureSize = function(x) {
    var w = clamp(Math.sqrt(x));
    return {
      w : w,
      h : clamp(Math.ceil(x / w))
    };
  };
  /**
   * @param {?} e
   * @param {(boolean|number|string)} a
   * @param {?} f
   * @param {(boolean|number|string)} i
   * @return {?}
   */
  self.latLngBearing = function(e, a, f, i) {
    /** @type {number} */
    var trueAnomalyY = Math.sin(i - a) * Math.cos(f);
    /** @type {number} */
    var mouseStartXFromCentre = Math.cos(e) * Math.sin(f) - Math.sin(e) * Math.cos(f) * Math.cos(i - a);
    return Math.atan2(trueAnomalyY, mouseStartXFromCentre);
  };
  /**
   * @param {number} y
   * @param {number} x
   * @return {?}
   */
  self.distanceTo = function(y, x) {
    return Math.sqrt(y * y + x * x);
  };
  /**
   * @param {?} a
   * @param {?} b
   * @return {?}
   */
  self.distanceSqrTo = function(a, b) {
    return a * a + b * b;
  };
  /**
   * @param {?} a
   * @param {?} b
   * @param {?} h
   * @return {?}
   */
  self.distanceTo3 = function(a, b, h) {
    return Math.sqrt(a * a + b * b + h * h);
  };
  /**
   * @param {?} a
   * @param {?} b
   * @param {?} h
   * @return {?}
   */
  self.distanceSqrTo3 = function(a, b, h) {
    return a * a + b * b + h * h;
  };
  /**
   * @param {(boolean|number|string)} e
   * @param {(boolean|number|string)} p
   * @param {(boolean|number|string)} f
   * @param {(boolean|number|string)} l
   * @return {?}
   */
  self.latLngDistance = function(e, p, f, l) {
    /** @type {number} */
    var shLat = Math.sin((f - e) / 2);
    /** @type {number} */
    var shLon = Math.sin((l - p) / 2);
    /** @type {number} */
    var a = shLat * shLat + Math.cos(e) * Math.cos(f) * shLon * shLon;
    return 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  };
  /**
   * @param {number} p
   * @param {string} t
   * @param {string} b
   * @param {string} q
   * @param {number} h
   * @return {?}
   */
  self.cubicBezier = function(p, t, b, q, h) {
    /** @type {number} */
    var j = 3 * (t - p);
    /** @type {number} */
    var k = 3 * (b - t) - j;
    /** @type {number} */
    var d = h * h;
    return (q - p - j - k) * (d * h) + k * d + j * h + p;
  };
  /**
   * @param {number} g
   * @param {string} scale
   * @param {string} x
   * @param {string} i
   * @return {?}
   */
  self.cubicBezierFn = function(g, scale, x, i) {
    /** @type {number} */
    var k = 3 * (scale - g);
    /** @type {number} */
    var h = 3 * (x - scale) - k;
    /** @type {number} */
    var d = i - g - k - h;
    return function(t) {
      /** @type {number} */
      var c = t * t;
      return d * (c * t) + h * c + k * t + g;
    };
  };
  /**
   * @param {number} steps
   * @param {number} n
   * @param {number} d
   * @param {number} h
   * @return {?}
   */
  self.getCoverScale = function(steps, n, d, h) {
    return Math.max(d / steps, h / n);
  };
  /**
   * @param {(boolean|number|string)} videoWidth
   * @param {(boolean|number|string)} videoHeight
   * @param {(boolean|number|string)} maxWorkSize
   * @param {(boolean|number|string)} jolt
   * @return {?}
   */
  self.getContainScale = function(videoWidth, videoHeight, maxWorkSize, jolt) {
    return Math.min(maxWorkSize / videoWidth, jolt / videoHeight);
  };
}, function(canCreateDiscussions, ctx, saveNotifs) {
  saveNotifs(5);
  /** @type {boolean} */
  var newItem = ctx.isLocal = !!window.isLocal;
  /** @type {string} */
  ctx.typekitId = "ujh8grk";
  /** @type {string} */
  ctx.assetPath = "/assets/";
  /** @type {string} */
  ctx.cdnPath = "/assets/";
  /** @type {string} */
  ctx.videoCdnPath = newItem ? "/assets/" : "https://d8d3yaw9yoj7k.cloudfront.net/";
  /** @type {null} */
  ctx.dataFloatType = null;
  /** @type {null} */
  ctx.renderTargetFloatType = null;
  /** @type {null} */
  ctx.useFloatPacking = null;
  /** @type {number} */
  ctx.perspectiveScale = 1;
  /** @type {number} */
  ctx.heroVideoWidth = 1280;
  /** @type {number} */
  ctx.heroVideoHeight = 720;
  /** @type {boolean} */
  ctx.USE_GUI = true;
  /** @type {boolean} */
  ctx.USE_SMAA = false;
}, function(canCreateDiscussions, self, require) {
  /**
   * @param {!Object} obj
   * @param {!Object} name
   * @return {undefined}
   */
  function callback(obj, name) {
    /** @type {!Object} */
    item.material = obj;
    _.setRenderTarget(name || null);
    _.render(a, el);
    if (name) {
      _.setRenderTarget(null);
    }
  }
  /**
   * @param {!Object} renderer
   * @return {?}
   */
  function update(renderer) {
    return {
      autoClear : (renderer = renderer || _).autoClear,
      autoClearColor : renderer.autoClearColor,
      autoClearStencil : renderer.autoClearStencil,
      autoClearDepth : renderer.autoClearDepth,
      clearColor : renderer.getClearColor().getHex(),
      clearAlpha : renderer.getClearAlpha()
    };
  }
  var THREE = require(0);
  /**
   * @param {!Object} obj
   * @param {number} method
   * @param {number} input
   * @return {undefined}
   */
  self.init = function(obj, method, input) {
    if (_) {
      return;
    }
    _ = self.renderer = obj;
    gl = self.gl = obj.getContext();
    self.MAX_VARYING_VECTORS = gl.getParameter(gl.MAX_VARYING_VECTORS);
    /** @type {boolean} */
    self.IS_SUPPORT_DEPTH_TEXTURE = !!obj.extensions.get("WEBGL_depth_texture");
    self.floatType = void 0 === method ? THREE.FloatType : method;
    self.dataFloatType = void 0 === input ? THREE.FloatType : input;
    /** @type {string} */
    self.precisionPrefix = "precision " + _.capabilities.precision + " float;\n";
    a = new THREE.Scene;
    /** @type {number} */
    (el = new THREE.Camera).position.z = 1;
    self.vertexShader = self.precisionPrefix + require(88);
    self.vertexNoUvShader = self.precisionPrefix + require(89);
    color = new THREE.Color;
    self.clearMaterial = new THREE.RawShaderMaterial({
      uniforms : {
        u_color : {
          value : new THREE.Vector4
        }
      },
      depthTest : false,
      depthWrite : false,
      blending : THREE.NoBlending,
      vertexShader : self.vertexNoUvShader,
      fragmentShader : self.precisionPrefix + require(90),
      transparent : true
    });
    self.copyMaterial = new THREE.RawShaderMaterial({
      uniforms : {
        u_texture : {
          value : void 0
        }
      },
      depthTest : false,
      depthWrite : false,
      transparent : true,
      blending : THREE.NoBlending,
      vertexShader : self.vertexShader,
      fragmentShader : self.precisionPrefix + require(29)
    });
    self.triGeom = new THREE.BufferGeometry;
    self.triGeom.setAttribute("position", new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 4, -1, 0, -1, 4, 0]), 3));
    self.quadGeom = new THREE.PlaneBufferGeometry(2, 2);
    /** @type {boolean} */
    (item = new THREE.Mesh(self.triGeom, self.copyMaterial)).frustumCulled = false;
    a.add(item);
    source = new THREE.Scene;
    var coneGeometry = new THREE.PlaneBufferGeometry(1, 1);
    coneGeometry.translate(.5, -.5, 0);
    shader = new THREE.RawShaderMaterial({
      uniforms : {
        u_texture : {
          value : null
        },
        u_transform : {
          value : new THREE.Vector4(0, 0, 1, 1)
        }
      },
      vertexShader : self.precisionPrefix + require(91),
      fragmentShader : self.precisionPrefix + require(29),
      depthTest : false,
      depthWrite : false,
      blending : THREE.NoBlending
    });
    i = new THREE.Mesh(coneGeometry, shader);
    /** @type {boolean} */
    source.frustumCulled = false;
    source.add(i);
  };
  /**
   * @param {!Object} n
   * @param {!Object} value
   * @return {undefined}
   */
  self.copy = function(n, value) {
    var shader = self.copyMaterial;
    /** @type {!Object} */
    shader.uniforms.u_texture.value = n;
    callback(shader, value);
  };
  /**
   * @param {number} v
   * @param {number} a
   * @param {!Object} r
   * @return {undefined}
   */
  self.clearColor = function(v, a, r) {
    color.setHex(v);
    self.clearMaterial.uniforms.u_color.value.set(color.r, color.g, color.b, a);
    callback(self.clearMaterial, r);
  };
  /**
   * @param {?} value
   * @param {number} style
   * @param {number} timeout
   * @param {number} speed
   * @param {!Object} count
   * @return {undefined}
   */
  self.clearColorRGBA = function(value, style, timeout, speed, count) {
    self.clearMaterial.uniforms.u_color.value.set(value, style, timeout, speed);
    callback(self.clearMaterial, count);
  };
  /**
   * @param {!Object} point
   * @param {undefined} obj
   * @param {!Object} name
   * @return {undefined}
   */
  self.renderGeometry = function(point, obj, name) {
    /** @type {!Object} */
    item.geometry = point;
    callback(obj, name);
    item.geometry = self.triGeom;
  };
  /**
   * @param {undefined} parent
   * @param {string} data
   * @return {undefined}
   */
  self.renderObject = function(parent, data) {
    /** @type {boolean} */
    item.visible = false;
    a.add(parent);
    _.setRenderTarget(data || null);
    _.render(a, el);
    if (data) {
      _.setRenderTarget(null);
    }
    a.remove(parent);
    /** @type {boolean} */
    item.visible = true;
  };
  /** @type {function(!Object, !Object): undefined} */
  self.render = callback;
  /**
   * @param {!Object} size
   * @param {number} width
   * @param {number} height
   * @param {number} s
   * @param {number} t
   * @return {undefined}
   */
  self.debugTo = function(size, width, height, s, t) {
    if (!size) {
      console.warn("texture is missing");
    }
    height = (width = width || 200) || 200;
    s = s || 0;
    t = t || 0;
    var texture = _.getSize();
    /** @type {number} */
    s = s / texture.width * 2 - 1;
    /** @type {number} */
    t = 1 - t / texture.height * 2;
    /** @type {number} */
    width = width / texture.width * 2;
    /** @type {number} */
    height = height / texture.height * 2;
    /** @type {!Object} */
    shader.uniforms.u_texture.value = size;
    shader.uniforms.u_transform.value.set(s, t, width, height);
    var res = update();
    /** @type {boolean} */
    _.autoClearColor = false;
    _.render(source, el);
    update(res);
  };
  /**
   * @param {!Object} element
   * @param {number} width
   * @param {number} height
   * @return {undefined}
   */
  self.resizeRenderTarget = function(element, width, height) {
    /** @type {number} */
    height = 0 | height || 1;
    if ((width = 0 | width || 1) !== element.width || height !== element.height) {
      element.setSize(width, height);
    }
  };
  /**
   * @param {number} width
   * @param {number} height
   * @param {boolean} useRGBA
   * @param {boolean} flat
   * @param {boolean} err
   * @return {?}
   */
  self.createRenderTarget = function(width, height, useRGBA, flat, err) {
    return new THREE.WebGLRenderTarget(width, height, {
      wrapS : THREE.ClampToEdgeWrapping,
      wrapT : THREE.ClampToEdgeWrapping,
      magFilter : flat ? THREE.NearestFilter : THREE.LinearFilter,
      minFilter : flat ? THREE.NearestFilter : THREE.LinearFilter,
      format : useRGBA ? THREE.RGBAFormat : THREE.RGBFormat,
      type : err ? self.floatType : THREE.UnsignedByteType,
      anisotropy : 0,
      encoding : THREE.LinearEncoding,
      depthBuffer : false,
      stencilBuffer : false
    });
  };
  /**
   * @param {!Array} data
   * @param {number} width
   * @param {string} height
   * @param {boolean} useRGBA
   * @param {boolean} flat
   * @param {boolean} isUpload
   * @return {?}
   */
  self.createDataTexture = function(data, width, height, useRGBA, flat, isUpload) {
    return new THREE.DataTexture(data, width, height, useRGBA ? THREE.RGBAFormat : THREE.RGBFormat, isUpload ? self.dataFloatType : THREE.UnsignedByteType, THREE.UVMapping, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, flat ? THREE.NearestFilter : THREE.LinearFilter, flat ? THREE.NearestFilter : THREE.LinearFilter);
  };
  /** @type {function(!Object): ?} */
  self.getColorState = update;
  /**
   * @param {!Object} renderer
   * @param {!Object} options
   * @return {undefined}
   */
  self.setColorState = function(renderer, options) {
    (options = options || _).setClearColor(renderer.clearColor, renderer.clearAlpha);
    options.autoClear = renderer.autoClear;
    options.autoClearColor = renderer.autoClearColor;
    options.autoClearStencil = renderer.autoClearStencil;
    options.autoClearDepth = renderer.autoClearDepth;
  };
  /** @type {null} */
  var _ = self.renderer = null;
  /** @type {null} */
  var gl = self.gl = null;
  /** @type {null} */
  self.precisionPrefix = null;
  /** @type {null} */
  self.floatType = null;
  /** @type {null} */
  self.dataFloatType = null;
  /** @type {string} */
  self.vertexShader = "";
  /** @type {number} */
  self.MAX_VARYING_VECTORS = 0;
  /** @type {null} */
  self.IS_SUPPORT_DEPTH_TEXTURE = null;
  /** @type {null} */
  self.quadGeom = null;
  /** @type {null} */
  self.triGeom = null;
  /** @type {null} */
  self.clearMaterial = null;
  /** @type {null} */
  self.copyMaterial = null;
  var a = void 0;
  var el = void 0;
  var item = void 0;
  var color = void 0;
  var source = void 0;
  var i = void 0;
  var shader = void 0;
}, function(canCreateDiscussions, config, n) {
  /**
   * @param {string} type
   * @param {!Array} types
   * @return {?}
   */
  function init(type, types) {
    var element = void 0;
    try {
      switch(type) {
        case "video":
          element = new global.Video;
          break;
        case "audio":
          element = new global.Audio;
      }
    } catch (t) {
      /** @type {!Element} */
      element = _doc.createElement(type);
    }
    var PNotify = void 0;
    /** @type {number} */
    var i = 0;
    var length = types.length;
    for (; i < length; i++) {
      if (element.canPlayType && element.canPlayType(types[i])) {
        PNotify = types[i].substr(types[i].indexOf("/") + 1);
        break;
      }
    }
    return PNotify;
  }
  /**
   * @param {string} name
   * @param {string} fn
   * @return {?}
   */
  function test(name, fn) {
    return function(value, tag) {
      return tag > 1 ? list[tag - 2] + value.charAt(0).toUpperCase() + value.slice(1) : 1 === tag && value;
    }(name, function(name) {
      var Min = name.charAt(0).toUpperCase() + name.slice(1);
      /** @type {number} */
      var i = list.length;
      for (; i--;) {
        if (object[list[i] + Min] !== undefined) {
          return i + 2;
        }
      }
      if (object[name] !== undefined) {
        return 1;
      }
      return 0;
    }(fn || name));
  }
  Object.defineProperty(config, "__esModule", {
    value : true
  });
  var undefined = void 0;
  /** @type {!Array<string>} */
  var list = "Webkit Moz O ms".split(" ");
  /** @type {!CSSStyleDeclaration} */
  var object = document.createElement("div").style;
  /** @type {!Window} */
  var global = window;
  /** @type {!HTMLDocument} */
  var _doc = document;
  var ua = (navigator.userAgent || navigator.vendor || window.opera).toLowerCase();
  /** @type {string} */
  var w = (navigator.platform || "").toLowerCase();
  /** @type {boolean} */
  var l = (config.videoFormat = init("video", ["video/mp4", "video/ogv"]), config.audioFormat = init("audio", ["audio/mp3", "audio/ogg"]), config.isIFrame = global.self !== global.top, config.isRetina = global.devicePixelRatio && global.devicePixelRatio >= 1.5, config.isSupportOpacity = object.opacity !== undefined, config.cpuCoreCount = navigator.hardwareConcurrency || 1, config.isEdge = ua.indexOf("edge") > -1);
  /** @type {boolean} */
  var level = config.isIE10orBelow = ua.indexOf("msie") > -1;
  /** @type {boolean} */
  var dirtyViewport = (config.isFirefox = ua.indexOf("firefox") > -1, config.isChrome = !l && ua.indexOf("chrome") > -1);
  /** @type {boolean} */
  config.isSafari = !l && !dirtyViewport && ua.indexOf("safari") > -1;
  /** @type {boolean} */
  config.isUC = ua.indexOf("ucbrowser") > -1;
  /** @type {boolean} */
  config.isMac = w.indexOf("mac") > -1;
  /** @type {boolean} */
  config.isMobile = /(iPad|iPhone|Android)/i.test(ua);
  /** @type {boolean} */
  config.isIOS = /(iPad|iPhone)/i.test(ua);
  config.filterStyle = level ? undefined : test("filter");
  config.transitionStyle = test("transition");
  config.transformStyle = test("transform");
  config.transform3dStyle = test("transform", "perspective");
  config.transformPerspectiveStyle = test("perspective");
  config.transformOriginStyle = test("transformOrigin");
  config.WebAudioContext = global.AudioContext || global.webkitAudioContext;
  /** @type {string} */
  config.baseUrl = document.location.origin;
  if (!(window.screen || window.screen.width)) {
    window.screen = {
      width : window.innerWidth,
      height : window.innerHeight
    };
  }
}, function(mixin, canCreateDiscussions, addVertex) {
  /**
   * @param {?} options
   * @param {?} prev
   * @return {undefined}
   */
  function styling(options, prev) {
    this[prev] = options;
  }
  var i = addVertex(23);
  /**
   * @param {!Object} b
   * @param {!Object} prop
   * @return {?}
   */
  mixin.exports = function(b, prop) {
    var str;
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var length = arguments.length;
    for (; ++i < length;) {
      if (null != (str = arguments[i])) {
        i(str, styling, b);
      }
    }
    return b;
  };
}, function(context, canCreateDiscussions, require) {
  /**
   * @return {undefined}
   */
  function init() {
    /** @type {boolean} */
    this.isLoading = false;
    /** @type {number} */
    this.totalWeight = 0;
    /** @type {number} */
    this.loadedWeight = 0;
    this.itemUrls = {};
    /** @type {!Array} */
    this.itemList = [];
    this.loadingSignal = new Database;
    this.crossOriginMap = {};
    /** @type {!Array} */
    this.queue = [];
    /** @type {!Array} */
    this.activeItems = [];
    /** @type {number} */
    this.maxActiveItems = 4;
  }
  /**
   * @param {string} name
   * @param {!Object} data
   * @return {?}
   */
  function load(name, data) {
    var options = params[name];
    return options || (options = this._createItem(name, data && data.type ? data.type : process(name).type, data)), data && data.onLoad && options.onLoaded.addOnce(data.onLoad), bundles[name] ? options.dispatch() : options.isStartLoaded || options.load(), options;
  }
  /**
   * @param {!Object} key
   * @param {!NodeList} text
   * @param {string} n
   * @param {number} a
   * @param {number} id
   * @return {undefined}
   */
  function error(key, text, n, a, id) {
    if (!(key && !key.isLoaded && 1 === a)) {
      if (id === name) {
        this.loadedWeight = parse(text);
        /** @type {number} */
        id = this.loadedWeight / this.totalWeight;
      }
      (n = n || this.loadingSignal).dispatch(id, key);
    }
  }
  /**
   * @param {!NodeList} lines
   * @return {?}
   */
  function parse(lines) {
    /** @type {number} */
    var dur = 0;
    /** @type {number} */
    var i = 0;
    var j = lines.length;
    for (; i < j; i++) {
      dur = dur + lines[i].loadedWeight;
    }
    return dur;
  }
  /**
   * @param {!Object} options
   * @param {(Node|NodeList|string)} text
   * @param {?} n
   * @return {undefined}
   */
  function callback(options, text, n) {
    if (this.loadedWeight = parse(text), !n) {
      var props = this.activeItems;
      var i = props.length;
      for (; i--;) {
        if (props[i] === options) {
          props.splice(i, 1);
          break;
        }
      }
    }
    var uncert = this.loadingSignal;
    if (this.loadedWeight === this.totalWeight) {
      /** @type {boolean} */
      this.isLoading = false;
      /** @type {number} */
      this.loadedWeight = 0;
      /** @type {number} */
      this.totalWeight = 0;
      this.loadingSignal = new Database;
      this._onLoading(options, text, uncert, 1, 1);
      if (options && options.noCache) {
        create(options);
      }
    } else {
      this._onLoading(options, text, uncert, 1, this.loadedWeight / this.totalWeight);
      if (options && options.noCache) {
        create(options);
      }
      if (!n) {
        this.loadNext();
      }
    }
  }
  /**
   * @param {!Object} res
   * @return {undefined}
   */
  function create(res) {
    var url = res.url;
    res.content = name;
    params[url] = name;
    bundles[url] = name;
  }
  /**
   * @param {!Object} data
   * @param {string} key
   * @return {?}
   */
  function debug(data, key) {
    var index;
    var i;
    var sources = data.length;
    /** @type {!Array} */
    var str = [];
    if (sources && "string" != typeof data) {
      /** @type {number} */
      index = 0;
      for (; index < sources; index++) {
        if (i = process(data[index], key)) {
          /** @type {!Array<?>} */
          str = str.concat(i);
        }
      }
    } else {
      if (i = process(data, key)) {
        /** @type {!Array<?>} */
        str = str.concat(i);
      }
    }
    return str;
  }
  /**
   * @param {!Object} id
   * @param {string} type
   * @return {?}
   */
  function process(id, type) {
    var p;
    var pos;
    var list;
    var result;
    var suffix;
    if (type) {
      list = (result = cache[type]).retrieve(id);
    } else {
      /** @type {number} */
      p = 0;
      /** @type {number} */
      pos = m.length;
      for (; p < pos; p++) {
        if (suffix = (result = m[p]).type, "string" == typeof id) {
          if (send(id, result)) {
            /** @type {!Array} */
            list = [id];
            break;
          }
        } else {
          if ((list = result.retrieve(id)) && list.length && "string" == typeof list[0] && send(list[0], result)) {
            break;
          }
        }
        list = name;
        suffix = name;
      }
    }
    if (list) {
      return {
        type : type || suffix,
        items : list
      };
    }
  }
  /**
   * @param {!Object} options
   * @param {!Object} data
   * @return {?}
   */
  function send(options, data) {
    if (options) {
      var handler = function(catalogs) {
        return catalogs.split(".").pop().split(/#|\?/)[0];
      }(options);
      var handlers = data.extensions;
      var i = handlers.length;
      for (; i--;) {
        if (handler === handlers[i]) {
          return true;
        }
      }
      return false;
    }
  }
  /**
   * @return {?}
   */
  function func() {
    return new init;
  }
  var name;
  var Database = require(13);
  var self = init.prototype;
  /**
   * @param {string} name
   * @param {string} type
   * @return {?}
   */
  self.addChunk = function(name, type) {
    var j;
    var i;
    var ref;
    var tableslen;
    var v;
    var result = debug(name, type);
    /** @type {number} */
    j = 0;
    ref = result.length;
    for (; j < ref; j++) {
      v = result[j];
      /** @type {number} */
      i = 0;
      tableslen = v.items.length;
      for (; i < tableslen; i++) {
        this.add(v.items[i], {
          type : v.type
        });
      }
    }
    return result;
  };
  /**
   * @param {?} value
   * @param {?} mappedvalue
   * @return {undefined}
   */
  self.setCrossOrigin = function(value, mappedvalue) {
    this.crossOriginMap[value] = mappedvalue;
  };
  /**
   * @param {!Object} name
   * @param {!Object} type
   * @return {?}
   */
  self.add = function(name, type) {
    var item = params[name];
    if (!item) {
      item = this._createItem(name, type && type.type ? type.type : process(name).type, type);
    }
    if (type && type.onLoad) {
      item.onLoaded.addOnce(type.onLoad);
    }
    if (!this.itemUrls[name]) {
      this.itemUrls[name] = item;
      this.itemList.push(item);
      this.totalWeight += item.weight;
    }
    return item;
  };
  /** @type {function(string, !Object): ?} */
  self.load = load;
  /**
   * @param {string} e
   * @return {undefined}
   */
  self.start = function(e) {
    if (e) {
      this.loadingSignal.add(e);
    }
    /** @type {boolean} */
    this.isLoading = true;
    var len = this.itemList.length;
    if (len) {
      var options;
      var opts = this.itemList.splice(0, this.itemList.length);
      /** @type {number} */
      var i = 0;
      for (; i < len; i++) {
        options = opts[i];
        /** @type {boolean} */
        var artistTrack = !!bundles[options.url];
        options.onLoaded.addOnce(callback, this, -1024, options, opts, artistTrack);
        if (options.hasLoading) {
          options.loadingSignal.add(error, this, -1024, options, opts, name);
        }
        if (artistTrack) {
          options.dispatch(callback);
        } else {
          if (!options.isStartLoaded) {
            this.queue.push(options);
          }
        }
      }
      if (this.queue.length) {
        this.loadNext();
      }
    } else {
      callback.call(this, name, this.itemList);
    }
  };
  /**
   * @return {undefined}
   */
  self.loadNext = function() {
    if (this.queue.length && this.activeItems.length < this.maxActiveItems) {
      var ffzLegacyEmotes = this.queue.shift();
      this.activeItems.push(ffzLegacyEmotes);
      this.loadNext();
      ffzLegacyEmotes.load();
    }
  };
  /**
   * @param {!Object} name
   * @param {?} type
   * @param {!Object} data
   * @return {?}
   */
  self._createItem = function(name, type, data) {
    if (!(data = data || {}).crossOrigin) {
      var key;
      for (key in this.crossOriginMap) {
        if (0 === name.indexOf(key)) {
          data.crossOrigin = this.crossOriginMap[key];
          break;
        }
      }
    }
    return new cache[type](name, data);
  };
  /** @type {function(!Object, !NodeList, string, number, number): undefined} */
  self._onLoading = error;
  var module = context.exports = func();
  /** @type {string} */
  module.version = "0.1.9";
  /**
   * @param {string} obj
   * @return {undefined}
   */
  module.register = function(obj) {
    if (!cache[obj.type]) {
      m.push(obj);
      /** @type {string} */
      cache[obj.type] = obj;
    }
  };
  /** @type {function(!Object, string): ?} */
  module.retrieveAll = debug;
  /** @type {function(!Object, string): ?} */
  module.retrieve = process;
  /** @type {function(!Object, !Object): ?} */
  module.testExtensions = send;
  /** @type {function(): ?} */
  module.create = func;
  /** @type {function(string, !Object): ?} */
  module.load = load;
  /**
   * @return {undefined}
   */
  module.check = function() {
    /** @type {!Array} */
    var aplus = [];
    /** @type {!Array} */
    var connections = [];
    var i;
    for (i in params) {
      aplus.push(i);
      if (!bundles[i]) {
        connections.push(params[i]);
      }
    }
    console.log({
      added : aplus,
      notLoaded : connections
    });
  };
  var params = module.addedItems = {};
  var bundles = module.loadedItems = {};
  /** @type {!Array} */
  var m = module.ITEM_CLASS_LIST = [];
  var cache = module.ITEM_CLASSES = {};
}, function(module, canCreateDiscussions, n) {
  module.exports = window.TweenLite;
}, function(canCreateDiscussions, self, require) {
  /**
   * @param {!Object} event
   * @return {undefined}
   */
  function handler(event) {
    /** @type {number} */
    var connectNumber = +new Date;
    if (!(connectNumber - concurency < 35)) {
      /** @type {number} */
      concurency = connectNumber;
      var data;
      var w = (event = event || win.event).wheelDelta;
      if (w) {
        /** @type {number} */
        w = w / 120;
      } else {
        /** @type {number} */
        w = -event.detail / 3;
      }
      w = Filter.clamp(w, -3, 3);
      var o = self.currentBubbleHistory;
      var p = o.length;
      for (; p--;) {
        if ((data = o[p])[_ + "wheel"]) {
          data[_ + "wheel"].call(data, w, event);
        }
      }
    }
  }
  /**
   * @param {?} e
   * @return {?}
   */
  function init(e) {
    return _mixInputEvent.call(this, e, function(e) {
      var cuddlefish_id = e.target.nodeName.toLowerCase();
      if (doc.activeElement && !resolve(["input", "select", "label", "option", "textarea"], cuddlefish_id) && "true" !== e.target.contentEditable) {
        var activeEl = doc.activeElement;
        if (!resolve(["body"], activeEl.nodeName.toLowerCase())) {
          doc.activeElement.blur();
        }
      }
      self.onDowned.dispatch(e);
    });
  }
  /**
   * @param {?} event
   * @return {?}
   */
  function handler_wrapper(event) {
    return _mixInputEvent.call(this, event, function(completeEvent) {
      self.onMoved.dispatch(completeEvent);
    });
  }
  /**
   * @param {?} e
   * @return {?}
   */
  function keycallback(e) {
    return _mixInputEvent.call(this, e, function(completeEvent) {
      self.onUped.dispatch(completeEvent);
    });
  }
  /**
   * @param {!Object} ast
   * @return {?}
   */
  function call(ast) {
    return function() {
      (function(event) {
        if (!self.disablePreventDefault) {
          if (event.preventDefault) {
            event.preventDefault();
          } else {
            /** @type {boolean} */
            event.returnValue = false;
          }
        }
      }).call(this, ast);
    };
  }
  /**
   * @param {!Element} node
   * @param {boolean} err
   * @return {?}
   */
  function func(node, err) {
    if (node.__skipPreventDefault) {
      return true;
    }
    var cuddlefish_id = node.nodeName.toLowerCase();
    return !!resolve(["source", "object", "iframe"], cuddlefish_id) || !err && ("true" === node.contentEditable || resolve(["input", "select", "label", "textarea", "option"], cuddlefish_id));
  }
  /**
   * @param {!Object} e
   * @param {?} func
   * @return {undefined}
   */
  function _mixInputEvent(e, func) {
    var j;
    var data;
    var x;
    var y;
    var item;
    var state;
    var t;
    var event = {
      originalEvent : e = e || win.event,
      button : e.button,
      preventDefault : call(e)
    };
    var type = e.type;
    /** @type {number} */
    var time = event.currentTime = (new Date).getTime();
    /** @type {boolean} */
    var P = type.indexOf("start") > -1 || type.indexOf("down") > -1;
    /** @type {boolean} */
    var err = type.indexOf("move") > -1;
    /** @type {boolean} */
    var id = event.isTouch = type.indexOf("touch") > -1;
    /** @type {boolean} */
    var viewportCenter = false;
    if (self.isFirstTouch === undefined && (self.isFirstTouch = id), id) {
      item = e.touches.length ? e.touches[0] : e.changedTouches[0];
      event.x = x = item.pageX;
      event.y = y = item.pageY;
      event.target = t = item.target;
      event.identifier = item.identifier;
      event.touches = e.touches;
      self.prevBubbleHistory = self.currentBubbleHistory;
      /** @type {!Array} */
      state = self.currentBubbleHistory = event.bubbleHistory = [];
      for (; t;) {
        state.unshift(t);
        if (!viewportCenter && func(t, err)) {
          /** @type {boolean} */
          viewportCenter = event.isSkipPreventDefault = true;
        }
        t = t.parentNode;
      }
    } else {
      /** @type {number} */
      event.identifier = 0;
      event.x = x = _hasEventListener ? e.pageX : e.clientX + docEl.scrollLeft;
      event.y = y = _hasEventListener ? e.pageY : e.clientY + docEl.scrollTop;
      event.target = t = e.target ? e.target : e.srcElement;
      self.prevBubbleHistory = self.currentBubbleHistory;
      /** @type {!Array} */
      state = self.currentBubbleHistory = event.bubbleHistory = [];
      for (; t;) {
        state.unshift(t);
        if (!viewportCenter && func(t, err)) {
          /** @type {boolean} */
          viewportCenter = event.isSkipPreventDefault = true;
        }
        t = t.parentNode;
      }
    }
    if (self.x = x, self.y = y, P) {
      /** @type {boolean} */
      m = true;
      /** @type {number} */
      _downTime = _currentTime = time;
      _downX = width = x;
      _downY = delta = y;
      /** @type {!Array} */
      self.downBubbleHistory = state;
      /** @type {number} */
      j = state.length;
      for (; j--;) {
        data = state[j];
        if (id && data[_ + "over"]) {
          event.currentTarget = data;
          data[_ + "over"].call(data, event);
        }
        if (data[_ + "down"]) {
          event.currentTarget = data;
          data[_ + "down"].call(data, event);
        }
      }
      /** @type {boolean} */
      interestingPoint = viewportCenter;
    }
    if (!interestingPoint) {
      event.preventDefault();
    }
    if (m) {
      /** @type {number} */
      event.distanceTime = time - _downTime;
      /** @type {number} */
      event.distanceX = x - _downX;
      /** @type {number} */
      event.distanceY = y - _downY;
      /** @type {number} */
      event.distance = Math.sqrt((x - _downX) * (x - _downX) + (y - _downY) * (y - _downY));
    }
    /** @type {number} */
    event.deltaTime = time - _currentTime;
    /** @type {number} */
    event.deltaX = x - (width < 0 ? x : width);
    /** @type {number} */
    event.deltaY = y - (delta < 0 ? y : delta);
    /** @type {number} */
    _currentTime = time;
    width = x;
    delta = y;
    if (type.indexOf("end") > -1 || type.indexOf("up") > -1) {
      /** @type {boolean} */
      m = false;
    }
    func(event);
  }
  /**
   * @param {!Object} e
   * @return {undefined}
   */
  function remove(e) {
    var el;
    var name = self.prevBubbleHistory;
    var i = e.bubbleHistory.length;
    for (; i--;) {
      if ((el = e.bubbleHistory[i])[_ + "over"] || el[_ + "out"]) {
        if (!(resolve(name, el) || el[_ + "isHover"])) {
          /** @type {boolean} */
          el[_ + "isHover"] = true;
          if (el[_ + "over"]) {
            e.currentTarget = el;
            el[_ + "over"].call(el, e);
          }
        }
      }
    }
  }
  /**
   * @param {!Object} e
   * @return {undefined}
   */
  function dispatch(e) {
    var el;
    var r = e.bubbleHistory;
    var i = self.prevBubbleHistory.length;
    for (; i--;) {
      if ((el = self.prevBubbleHistory[i])[_ + "isHover"]) {
        if (!resolve(r, el)) {
          /** @type {boolean} */
          el[_ + "isHover"] = false;
          if (el[_ + "out"]) {
            e.currentTarget = el;
            el[_ + "out"].call(el, e);
          }
        }
      }
    }
  }
  /**
   * @param {!Object} e
   * @return {undefined}
   */
  function fn(e) {
    /** @type {boolean} */
    self.isDown = true;
    dispatch(e);
    remove(e);
    var target;
    var i = e.bubbleHistory.length;
    for (; i--;) {
      if ((target = e.bubbleHistory[i])[_ + "tap"]) {
        e.currentTarget = target;
        target[_ + "tap"].call(target, e);
      }
    }
  }
  /**
   * @param {!Object} e
   * @return {undefined}
   */
  function _onMove(e) {
    dispatch(e);
    remove(e);
    self.deltaX = e.deltaX;
    self.deltaY = e.deltaY;
    self.deltaTime = e.deltaTime;
    /** @type {boolean} */
    var isSteal = e.distanceX !== undefined;
    if (!isSteal) {
      e.distanceX = self.distanceX;
      e.distanceY = self.distanceY;
    }
    self.distanceX = e.distanceX;
    self.distanceY = e.distanceY;
    self.distanceTime = e.distanceTime;
    if (!(self.isScrollH || self.isScrollV || !self.isDown)) {
      if (e.distance > 0) {
        if (Math.abs(e.distanceX) > Math.abs(e.distanceY)) {
          /** @type {boolean} */
          self.isScrollH = true;
          self.onSwipeH.dispatch(e);
        } else {
          /** @type {boolean} */
          self.isScrollV = true;
          self.onSwipeV.dispatch(e);
        }
      }
    }
    if (!(self.isPossibilyScrollH || self.isPossibilyScrollV || !self.isDown)) {
      if (e.distance > self.possibilyScrollDist) {
        if (Math.abs(e.distanceX) > Math.abs(e.distanceY)) {
          /** @type {boolean} */
          self.isPossibilyScrollH = true;
          self.onSwipeH.dispatch(e);
        } else {
          /** @type {boolean} */
          self.isPossibilyScrollV = true;
          self.onSwipeV.dispatch(e);
        }
      }
    }
    var target;
    var i = e.bubbleHistory.length;
    for (; i--;) {
      if ((target = e.bubbleHistory[i])[_ + "move"]) {
        e.currentTarget = target;
        target[_ + "move"].call(target, e);
      }
    }
    if (!isSteal) {
      self.distanceX = e.distanceX;
      self.distanceY = e.distanceY;
    }
  }
  /**
   * @param {!Object} e
   * @return {undefined}
   */
  function update(e) {
    /** @type {boolean} */
    self.isDown = false;
    self.distanceTime = e.distanceTime;
    var t;
    var key;
    var i = e.bubbleHistory.length;
    var o = self.downBubbleHistory;
    /** @type {boolean} */
    var a = e.isClick = null !== e.distanceTime && e.distanceTime < self.clickTime && e.distance < self.clickDistance;
    /** @type {boolean} */
    e.isDoubleClick = e.currentTime - self.lastUpTime < 400;
    for (; i--;) {
      if (t = e.bubbleHistory[i], e.isTouch && t[_ + "out"] && (e.currentTarget = t, t[_ + "out"].call(t, e)), t[_ + "up"] && (e.currentTarget = t, t[_ + "up"].call(t, e)), a && t[_ + "click"]) {
        key = o.length;
        for (; key--;) {
          if (o[key] === t) {
            e.currentTarget = t;
            t[_ + "click"].call(t, e);
            break;
          }
        }
      }
    }
  }
  /**
   * @param {!AudioContext} result
   * @return {undefined}
   */
  function k(result) {
    /** @type {boolean} */
    self.isScrollH = false;
    /** @type {boolean} */
    self.isScrollV = false;
    /** @type {boolean} */
    self.isPossibilyScrollH = false;
    /** @type {boolean} */
    self.isPossibilyScrollV = false;
    self.lastUpTime = result.currentTime;
  }
  var undefined;
  var WSHandler = require(13);
  var resolve = require(40);
  var forEach = require(72);
  var Filter = require(2);
  /**
   * @return {undefined}
   */
  self.init = function() {
    /**
     * @return {?}
     */
    doc.ondragstart = function() {
      return false;
    };
    var canvas = self.inputTarget;
    if (self.hasTouch) {
      canvas.addEventListener("touchstart", init, true);
      canvas.addEventListener("touchmove", handler_wrapper, true);
      root.addEventListener("touchend", keycallback, true);
      canvas.addEventListener("mousedown", init, true);
      canvas.addEventListener("mousemove", handler_wrapper, true);
      root.addEventListener("mouseup", keycallback, true);
      canvas.addEventListener("mousewheel", handler, true);
      canvas.addEventListener("DOMMouseScroll", handler, true);
    } else {
      if (_hasEventListener) {
        canvas.addEventListener("mousedown", init, true);
        canvas.addEventListener("mousemove", handler_wrapper, true);
        root.addEventListener("mouseup", keycallback, true);
        canvas.addEventListener("mousewheel", handler, true);
        canvas.addEventListener("DOMMouseScroll", handler, true);
      } else {
        canvas.attachEvent("onmousedown", init);
        canvas.attachEvent("onmousemove", handler_wrapper);
        root.attachEvent("onmouseup", keycallback);
        canvas.attachEvent("onmousewheel", handler);
      }
    }
    self.onDowned.add(fn, self, 1024);
    self.onMoved.add(_onMove, self, 1024);
    self.onUped.add(update, self, 1024);
    self.onUped.add(k, self, -1024);
    window.addEventListener("touchmove", function(event) {
      event.preventDefault();
    }, {
      passive : false
    });
  };
  /**
   * @param {!Object} name
   * @param {string} type
   * @param {number} value
   * @return {undefined}
   */
  self.add = function add(name, type, value) {
    if (name.length) {
      /** @type {number} */
      var j = 0;
      var nameLength = name.length;
      for (; j < nameLength; j++) {
        add(name[j], type, value);
      }
      return;
    }
    if (name) {
      /** @type {number} */
      name[_ + type] = value;
      /** @type {boolean} */
      name[_ + "hasInput"] = true;
      arr.push(name);
    }
  };
  /**
   * @param {!Object} elem
   * @param {string} type
   * @return {undefined}
   */
  self.remove = function getStyle(elem, type) {
    var i;
    var end;
    if (elem.length) {
      /** @type {number} */
      i = 0;
      end = elem.length;
      for (; i < end; i++) {
        getStyle(elem[i], type);
      }
      return;
    }
    if (elem) {
      if (type) {
        elem[_ + type] = undefined;
      } else {
        forEach(TYPE_LIST, function(screenEvent) {
          elem[_ + screenEvent] = undefined;
        });
        /** @type {boolean} */
        elem[_ + "hasInput"] = false;
      }
      /** @type {boolean} */
      var s = false;
      /** @type {number} */
      i = 0;
      end = TYPE_LIST.length;
      for (; i < end; i++) {
        if (elem[_ + TYPE_LIST[i]]) {
          /** @type {boolean} */
          s = true;
          break;
        }
      }
      if (!s) {
        /** @type {number} */
        i = 0;
        /** @type {number} */
        end = arr.length;
        for (; i < end; i++) {
          if (arr[i] == elem) {
            arr.splice(i, 1);
            break;
          }
        }
      }
    }
  };
  /** @type {!Window} */
  var win = window;
  /** @type {!HTMLDocument} */
  var doc = document;
  /** @type {!Element} */
  var root = doc.documentElement;
  /** @type {boolean} */
  var interestingPoint = false;
  /** @type {boolean} */
  self.hasTouch = "ontouchstart" in win;
  /** @type {!HTMLBodyElement} */
  self.inputTarget = document.body;
  self.onDowned = new WSHandler;
  self.onMoved = new WSHandler;
  self.onUped = new WSHandler;
  self.onSwipeH = new WSHandler;
  self.onSwipeV = new WSHandler;
  /** @type {boolean} */
  self.isDown = false;
  /** @type {boolean} */
  self.isScrollH = false;
  /** @type {boolean} */
  self.isScrollV = false;
  /** @type {boolean} */
  self.isPossibilyScrollH = false;
  /** @type {boolean} */
  self.isPossibilyScrollV = false;
  self.isFirstTouch = undefined;
  /** @type {number} */
  self.x = 0;
  /** @type {number} */
  self.y = 0;
  /** @type {number} */
  self.distanceX = 0;
  /** @type {number} */
  self.distanceY = 0;
  /** @type {number} */
  self.deltaX = 0;
  /** @type {number} */
  self.deltaY = 0;
  /** @type {number} */
  self.deltaTime = 0;
  /** @type {!Array} */
  self.downBubbleHistory = [];
  /** @type {!Array} */
  self.currentBubbleHistory = [];
  /** @type {!Array} */
  self.prevBubbleHistory = [];
  /** @type {number} */
  self.lastUpTime = 0;
  /** @type {boolean} */
  self.isOnSwipePane = false;
  /** @type {!Array} */
  self.elems = [];
  /** @type {boolean} */
  self.disablePreventDefault = false;
  /** @type {number} */
  self.clickTime = 500;
  /** @type {number} */
  self.clickDistance = 10;
  /** @type {number} */
  self.possibilyScrollDist = 50;
  /** @type {boolean} */
  var _hasEventListener = "addEventListener" in win;
  /** @type {!Element} */
  var docEl = doc.documentElement;
  /** @type {string} */
  var _ = "l_u_s_i_o_n_";
  /** @type {boolean} */
  var m = false;
  /** @type {number} */
  var _downTime = 0;
  /** @type {number} */
  var _downX = 0;
  /** @type {number} */
  var _downY = 0;
  /** @type {number} */
  var _currentTime = 0;
  /** @type {number} */
  var width = -1;
  /** @type {number} */
  var delta = -1;
  /** @type {number} */
  var concurency = 0;
  /** @type {!Array} */
  var arr = self.elems;
}, function(exports, canCreateDiscussions, require) {
  /**
   * @param {!Object} o
   * @return {undefined}
   */
  function initialize(o) {
    superProto.constructor.call(this, extend({
      refDomId : "",
      refDom : null,
      refDomRect : {},
      backgroundColor : 0,
      top : 0,
      width : 0,
      height : 0,
      fullWidth : 0,
      fullHeight : 0,
      lowInRatio : 0,
      upInRatio : 0,
      inRatio : 0,
      ratio : 0,
      viewportTop : 0,
      viewportHeight : 0,
      parallax : .5,
      mouseProjectionPlane : new THREE.Plane(new THREE.Vector3(0, 0, 1)),
      mouseProjectionDistanceRatio : 1,
      mouseRefToWindow : false,
      isMouseDown : 0,
      defaultCameraFov : 60,
      sceneRenderTarget : null,
      path : null,
      gui : false,
      usePostprocessing : false,
      sharedPostprocessing : false,
      postprocessingToScreen : true,
      useDepthTexture : false,
      postprocessingQueue : []
    }, o));
  }
  var THREE = require(0);
  var obj = require(1);
  var Cursor = require(9);
  var parent = require(11);
  var ctx = require(2);
  var extend = require(6);
  var TagHourlyStat = require(4);
  var Renderer = require(92);
  var RequestHandler = require(93);
  var Set = require(50);
  var superProto = parent.prototype;
  /** @type {!Object} */
  var self = initialize.prototype = Object.create(superProto);
  /** @type {function(!Object): undefined} */
  self.constructor = exports.exports = initialize;
  /**
   * @return {undefined}
   */
  self.preInit = function() {
    if (window.gui) {
      this.gui = window.gui.addFolder(this.refDomId || "visual");
      this.gui.open();
    }
    if (this.usePostprocessing) {
      if (!renderer) {
        renderer = new Renderer(null, this.useDepthTexture && TagHourlyStat.IS_SUPPORT_DEPTH_TEXTURE);
      }
      this.sharedPostprocessing = renderer;
      this.boundBeforeRender = this.beforeRender.bind(this);
      this.boundAfterRender = this.afterRender.bind(this);
    }
    this.scene = this.scene || new THREE.Scene;
    this.camera = this.camera || new THREE.PerspectiveCamera(this.defaultCameraFov, 1, .01, 400);
    /** @type {number} */
    this.camera.position.z = 5;
    this.scene.add(this.camera);
    this.resolution = new THREE.Vector2;
    this.cameraPosition = new THREE.Vector3;
    this.cameraQuaternion = new THREE.Quaternion;
    this.cameraScale = new THREE.Vector3;
    this.mouse = new THREE.Vector2;
    this.mouse3 = new THREE.Vector3;
    /** @type {boolean} */
    this.isOnFocus = false;
    this.screenUvInfoUniform = {
      value : new THREE.Vector4
    };
    this.aspectUniform = {
      value : new THREE.Vector2
    };
    this.visualUvInfoUniform = {
      value : new THREE.Vector4
    };
    this.parallaxRatioUniform = {
      value : new THREE.Vector4
    };
    this.sharedUniforms = {};
  };
  /**
   * @return {undefined}
   */
  self.precompile = function() {
    obj.renderer.compile(this.scene, this.camera);
  };
  /**
   * @return {?}
   */
  self.isSupported = function() {
    return true;
  };
  /**
   * @return {undefined}
   */
  self.resize = function() {
    this.testViewport(true);
    if (this.sceneRenderTarget) {
      this.sceneRenderTarget.setSize(obj.width, obj.height);
    }
    if (this.usePostprocessing) {
      renderer.setSize(obj.width, obj.height);
    }
  };
  /**
   * @param {string} e
   * @return {undefined}
   */
  self.testViewport = function(e) {
    superProto.testViewport.call(this, e);
    if (e || this.needsRender) {
      /** @type {number} */
      this.viewportTop = Math.floor(this.refDomRect.top);
      /** @type {number} */
      this.viewportHeight = Math.ceil(this.refDomRect.bottom) + (this.refDomRect.top > this.viewportTop ? 1 : 0) - this.viewportTop;
      this.screenUvInfoUniform.value.set(this.left, Math.max(0, this.viewportTop - this.top), 1 / obj.width, 1 / obj.height);
      this.visualUvInfoUniform.value.set(this.left, Math.max(0, this.viewportTop - this.top), 1 / this.width, 1 / this.height);
      this.resolution.set(this.width, this.height);
      this.fullWidth = this.refDomRect.width + this.paddingLeft + this.paddingRight;
      this.fullHeight = this.refDomRect.height + this.paddingTop + this.paddingBottom;
      this.lowInRatio = ctx.cUnMix(obj.height, .5 * (obj.height - this.height), this.top);
      this.upInRatio = ctx.cUnMix(0, .5 * (obj.height + this.height), this.bottom);
      /** @type {number} */
      this.inRatio = Math.min(this.lowInRatio, this.upInRatio);
      this.ratio = 1 - this.lowInRatio + this.upInRatio;
      this.aspectUniform.value.set(this.width / this.height, 1);
      this.parallaxRatioUniform.value.set(this.lowInRatio, this.upInRatio, this.inRatio, this.ratio);
    }
    if (this.gui) {
      /** @type {string} */
      this.gui.domElement.style.display = this.needsRender ? "block" : "none";
    }
  };
  /**
   * @param {number} width
   * @param {number} position
   * @param {number} x
   * @param {number} y
   * @return {undefined}
   */
  self.updateMouse = function(width, position, x, y) {
    width = width || 1;
    position = position || 1;
    x = x || 0;
    y = y || 0;
    var aspect = this.mouseRefToWindow ? obj.width : this.width;
    var h = this.mouseRefToWindow ? obj.height : this.height;
    this.mouse.set(2 * ((obj.elasticMouse.x - this.left) / aspect - .5), 2 * (.5 - (obj.elasticMouse.y - this.top) / h));
    _this.origin.setFromMatrixPosition(this.camera.matrixWorld);
    _this.direction.set((this.mouse.x + x) * width, (this.mouse.y + y) * position, .5).unproject(this.camera).sub(_this.origin).normalize();
    _this.intersectPlane(this.mouseProjectionPlane, p);
    /** @type {number} */
    var strokeRadius = p.distanceTo(_this.origin) * this.mouseProjectionDistanceRatio;
    _this.origin.add(_this.direction.multiplyScalar(strokeRadius));
    this.mouse3.copy(_this.origin);
    this.isMouseDown = Cursor.isDown;
  };
  /**
   * @return {undefined}
   */
  self.updateCamera = function() {
    /** @type {number} */
    this.camera.aspect = this.width / this.viewportHeight;
    this.camera.setViewOffset(this.width, this.viewportHeight, 0, Math.max(0, -this.viewportTop + this.paddingTop) + (this.upInRatio - this.lowInRatio) * this.viewportHeight * this.parallax, this.width, this.height);
    this.camera.matrixWorld.decompose(this.cameraPosition, this.cameraQuaternion, this.cameraScale);
  };
  /**
   * @return {undefined}
   */
  self.update = function() {
    this.testViewport();
    if (this.needsRender) {
      this.updateCamera();
      this.render();
    }
  };
  /**
   * @return {undefined}
   */
  self.beforeRender = function() {
  };
  /**
   * @return {undefined}
   */
  self.afterRender = function() {
  };
  /**
   * @return {undefined}
   */
  self.render = function() {
    var renderer = obj.renderer;
    renderer.setClearColor(this.backgroundColor, 1);
    if (this.usePostprocessing) {
      renderer.queue = this.postprocessingQueue;
      renderer.scissorRect.set(this.left, this.top, this.width, this.height);
      /** @type {boolean} */
      renderer.useScissor = true;
      renderer.beforeRenderOut = this.boundBeforeRender;
      renderer.afterRenderOut = this.boundAfterRender;
      renderer.render(this.scene, this.camera, this.postprocessingToScreen);
    } else {
      if (this.sceneRenderTarget) {
        renderer.setScissorTest(false);
        this.sceneRenderTarget.setSize(this.width, this.height);
        this.beforeRender(renderer);
        renderer.setRenderTarget(this.sceneRenderTarget);
        renderer.render(this.scene, this.camera);
        renderer.setRenderTarget(null);
        this.afterRender(renderer);
      } else {
        renderer.setRenderTarget(null);
        renderer.setScissorTest(true);
        renderer.setViewport(this.left, obj.height - this.top - this.height, this.width, this.height);
        renderer.setScissor(this.left, obj.height - this.top - this.height, this.width, this.height);
        this.beforeRender(renderer);
        renderer.render(this.scene, this.camera);
        this.afterRender(renderer);
        renderer.setScissorTest(false);
      }
    }
  };
  /**
   * @return {?}
   */
  self.getBloom = function() {
    return imageable = imageable || new RequestHandler;
  };
  /**
   * @return {?}
   */
  self.getSmaa = function() {
    return itemsInFeedIDs = itemsInFeedIDs || new Set;
  };
  var _this = new THREE.Ray;
  var p = new THREE.Vector3;
  var renderer = void 0;
  var imageable = void 0;
  var itemsInFeedIDs = void 0;
}, function(module, canCreateDiscussions, factory) {
  /**
   * @param {!Object} value
   * @return {undefined}
   */
  function move(value) {
    setCSS(this, {
      refDomId : "",
      refDom : null,
      refDomRect : {},
      left : 0,
      top : 0,
      width : 0,
      height : 0,
      offsetTop : 0,
      paddingTop : 0,
      paddingBottom : 0,
      paddingLeft : 0,
      paddingRight : 0,
      scrollOffset : 0,
      screenWidth : 0,
      screenHeight : 0,
      inBaseRange : false,
      needsRender : false,
      path : null,
      cacheRect : null,
      cacheRectScrollTop : 0
    }, value);
  }
  var data = factory(1);
  var ctx = factory(41);
  var setCSS = (factory(2), factory(6));
  /** @type {function(!Object): undefined} */
  module.exports = move;
  var parent = move.prototype;
  /**
   * @return {undefined}
   */
  parent.init = function() {
    /** @type {(Element|null)} */
    this.refDom = document.getElementById(this.refDomId);
  };
  /**
   * @param {boolean} zoomAware
   * @return {undefined}
   */
  parent.testViewport = function(zoomAware) {
    if (!(!zoomAware && this.cacheRect)) {
      this.cacheRect = this.refDom.getBoundingClientRect();
      this.cacheRectScrollTop = data.scrollTop;
    }
    /** @type {number} */
    var h = this.scrollOffset = this.cacheRectScrollTop - data.scrollTop + data.height - data.fullHeight;
    var canvas = this.cacheRect;
    var p = this.refDomRect;
    p.left = canvas.left;
    p.top = canvas.top + this.offsetTop + h;
    p.right = canvas.right;
    p.bottom = canvas.bottom + this.offsetTop + h;
    p.width = canvas.width;
    p.height = canvas.height;
    this.onDomRectUpdate();
    /** @type {number} */
    var y = Math.max(0, p.top);
    /** @type {number} */
    var bottom = Math.min(data.height, p.bottom);
    /** @type {boolean} */
    this.inBaseRange = y + 1 < data.height && bottom > 1;
    /** @type {number} */
    y = Math.max(0, p.top - this.paddingTop);
    /** @type {number} */
    bottom = Math.min(data.height, p.bottom + this.paddingBottom);
    /** @type {boolean} */
    this.needsRender = y + 1 < data.height && bottom > 1;
    /** @type {number} */
    this.left = Math.floor(Math.max(0, p.left - this.paddingLeft));
    /** @type {number} */
    this.top = Math.floor(y);
    /** @type {number} */
    this.bottom = Math.ceil(bottom);
    this.width = p.width + this.paddingLeft + this.paddingRight;
    /** @type {number} */
    this.height = Math.ceil(bottom) + (y > this.top ? 1 : 0) - this.top;
    this.screenWidth = data.width;
    this.screenHeight = data.height;
    if (this.inBaseRange && null !== this.path) {
      ctx.setPathRange(this.path, this.top, this.bottom);
    }
  };
  /**
   * @return {undefined}
   */
  parent.onDomRectUpdate = function() {
  };
}, function(canCreateDiscussions, window, require) {
  /**
   * @param {boolean} withoutTimer
   * @return {?}
   */
  function start(withoutTimer) {
    var width = (withoutTimer = !!withoutTimer) ? computedWidth : fullWidth;
    /** @type {boolean} */
    var len = _.MAX_VARYING_VECTORS > 8;
    return width || (width = new THREE.RawShaderMaterial({
      uniforms : {
        u_texture : {
          type : "t",
          value : command_module_id
        },
        u_delta : {
          type : "v2",
          value : new THREE.Vector2
        }
      },
      vertexShader : len ? _.precisionPrefix + require(35) : _.vertexShader,
      fragmentShader : _.precisionPrefix + require(len ? 139 : 140),
      blending : THREE.NoBlending,
      transparent : withoutTimer,
      defines : {
        USE_RGBA : withoutTimer
      }
    }), withoutTimer ? computedWidth = width : fullWidth = width), width;
  }
  /**
   * @param {!Object} sprite
   * @param {number} scale
   * @param {number} x
   * @param {number} count
   * @param {!Object} item
   * @param {!Object} s
   * @param {!Object} value
   * @param {boolean} type
   * @return {undefined}
   */
  function init(sprite, scale, x, count, item, s, value, type) {
    /** @type {number} */
    var width = Math.ceil(item.width * count) || 0;
    /** @type {number} */
    var r = Math.ceil(item.height * count) || 0;
    if (!s) {
      if (sprite.transparent) {
        if (!seocounter_meta) {
          seocounter_meta = new THREE.WebGLRenderTarget(1, 1, {
            minFilter : THREE.LinearFilter,
            magFilter : THREE.LinearFilter,
            format : THREE.RGBAFormat,
            stencilBuffer : false,
            depthBuffer : false
          });
        }
        s = seocounter_meta;
      } else {
        if (!Netscape6) {
          Netscape6 = new THREE.WebGLRenderTarget(1, 1, {
            minFilter : THREE.LinearFilter,
            magFilter : THREE.LinearFilter,
            format : THREE.RGBFormat,
            stencilBuffer : false,
            depthBuffer : false
          });
        }
        s = Netscape6;
      }
    }
    _.resizeRenderTarget(s, width, r);
    if (value) {
      if (!type) {
        _.resizeRenderTarget(value, item.width, item.height);
      }
    } else {
      /** @type {!Object} */
      value = item;
    }
    sprite.uniforms.u_texture.value = item.texture || item;
    sprite.uniforms.u_delta.value.set(x / width * scale, 0);
    _.render(sprite, s);
    sprite.uniforms.u_texture.value = s.texture || s;
    sprite.uniforms.u_delta.value.set(0, x / r * scale);
    _.render(sprite, value);
  }
  Object.defineProperty(window, "__esModule", {
    value : true
  });
  /** @type {function(boolean): ?} */
  window.getBlur9Material = start;
  /**
   * @param {number} m
   * @param {number} b
   * @return {?}
   */
  window.getBlur9DepthMaterial = function(m, b) {
    /** @type {boolean} */
    b = !!b;
    var v = (m = !!m) ? b ? source : r : b ? visible : res;
    /** @type {boolean} */
    var len = _.MAX_VARYING_VECTORS > 8;
    if (!v) {
      v = new THREE.RawShaderMaterial({
        uniforms : {
          u_texture : {
            type : "t",
            value : command_module_id
          },
          u_delta : {
            type : "v2",
            value : new THREE.Vector2
          }
        },
        vertexShader : len ? _.precisionPrefix + require(35) : _.vertexShader,
        fragmentShader : _.precisionPrefix + require(len ? 141 : 142),
        blending : THREE.NoBlending,
        transparent : true,
        defines : {
          FROM_LINEAR : m,
          TO_LINEAR : b
        }
      });
    }
    if (m) {
      if (b) {
        source = v;
      } else {
        r = v;
      }
    } else {
      if (b) {
        visible = v;
      } else {
        res = v;
      }
    }
    return v;
  };
  /**
   * @param {number} move
   * @param {number} width
   * @param {!Object} e
   * @param {!Object} options
   * @param {undefined} callback
   * @param {boolean} name
   * @return {undefined}
   */
  window.blur9 = function(move, width, e, options, callback, name) {
    init(start(), .25, move, width, e, options, callback, name);
  };
  /**
   * @param {undefined} db
   * @param {undefined} done
   * @param {!Object} e
   * @param {!Object} options
   * @param {undefined} callback
   * @param {boolean} name
   * @return {undefined}
   */
  window.blur9RGBA = function(db, done, e, options, callback, name) {
    init(start(true), .25, db, done, e, options, callback, name);
  };
  /** @type {function(!Object, number, number, number, !Object, !Object, !Object, boolean): undefined} */
  window.blur = init;
  var _ = require(4);
  var THREE = require(0);
  var command_module_id = void 0;
  var fullWidth = void 0;
  var computedWidth = void 0;
  var source = void 0;
  var visible = void 0;
  var r = void 0;
  var res = void 0;
  var Netscape6 = void 0;
  var seocounter_meta = void 0;
}, function(module, canCreateDiscussions, n) {
  !function(fce) {
    /**
     * @return {undefined}
     */
    function MenuButton() {
      /** @type {!Array} */
      this._listeners = [];
      /** @type {number} */
      this.dispatchCount = 0;
    }
    /**
     * @param {!Object} name
     * @param {!Object} type
     * @param {string} value
     * @param {?} i
     * @return {?}
     */
    function add(name, type, value, i) {
      if (!name) {
        throw r;
      }
      value = value || 0;
      var listener;
      var red;
      var start;
      var listeners = this._listeners;
      var i = listeners.length;
      for (; i--;) {
        if ((listener = listeners[i]).f === name && listener.c === type) {
          return false;
        }
      }
      if ("function" == typeof value) {
        /** @type {string} */
        red = value;
        value = i;
        /** @type {number} */
        start = 4;
      }
      listeners.unshift({
        f : name,
        c : type,
        p : value,
        r : red || name,
        a : slice.call(arguments, start || 3),
        j : 0
      });
      listeners.sort(function(target, current) {
        return target = target.p, (current = current.p) < target ? 1 : target > current ? -1 : 0;
      });
    }
    var proto = MenuButton.prototype;
    /** @type {function(!Object, !Object, string, ?): ?} */
    proto.add = add;
    /**
     * @param {!Function} fn
     * @param {!Object} context
     * @param {number} type
     * @param {!Array} value
     * @return {undefined}
     */
    proto.addOnce = function(fn, context, type, value) {
      if (!fn) {
        throw r;
      }
      var self = this;
      if (1 === (value = slice.call(arguments, 0)).length) {
        value.push(fce);
      }
      value.splice(2, 0, function() {
        return self.remove.call(self, fn, context), fn.apply(context, slice.call(arguments, 0));
      });
      add.apply(self, value);
    };
    /**
     * @param {string} className
     * @param {string} callback
     * @return {?}
     */
    proto.remove = function(className, callback) {
      if (!className) {
        return this._listeners.length = 0, true;
      }
      var listener;
      var listeners = this._listeners;
      var i = listeners.length;
      for (; i--;) {
        if ((listener = listeners[i]).f === className && (!callback || listener.c === callback)) {
          return listener.j = 0, listeners.splice(i, 1), true;
        }
      }
      return false;
    };
    /**
     * @param {!Function} e
     * @return {?}
     */
    proto.dispatch = function(e) {
      /** @type {!Array<?>} */
      e = slice.call(arguments, 0);
      this.dispatchCount++;
      var a;
      var deferred;
      var n = this.dispatchCount;
      var all = this._listeners;
      var i = all.length;
      for (; i--;) {
        if ((a = all[i]) && a.j < n && (a.j = n, false === a.r.apply(a.c, a.a.concat(e)))) {
          deferred = a;
          break;
        }
      }
      all = this._listeners;
      i = all.length;
      for (; i--;) {
        /** @type {number} */
        all[i].j = 0;
      }
      return deferred;
    };
    /** @type {string} */
    var r = "Callback function is missing!";
    /** @type {function(this:(IArrayLike<T>|string), *=, *=): !Array<T>} */
    var slice = Array.prototype.slice;
    /** @type {function(): undefined} */
    module.exports = MenuButton;
  }();
}, function(meta, canCreateDiscussions, encodeURIComponent) {
  /**
   * @param {string} a
   * @param {!Object} obj
   * @return {undefined}
   */
  function object(a, obj) {
    if (a) {
      var key;
      for (key in this.url = a, this.loadedWeight = 0, this.weight = 1, obj) {
        this[key] = obj[key];
      }
      if (!this.type) {
        this.type = this.constructor.type;
      }
      if (this.hasLoading) {
        this.loadingSignal = new f;
        this.loadingSignal.add(s, this);
        if (this.onLoading) {
          this.loadingSignal.add(this.onLoading);
        }
      }
      var DDM = this;
      /**
       * @return {undefined}
       */
      this.boundOnLoad = function() {
        DDM._onLoad();
      };
      this.onLoaded = new f;
      e.addedItems[a] = this;
    }
  }
  /**
   * @param {!Object} B
   * @return {undefined}
   */
  function s(B) {
    /** @type {number} */
    this.loadedWeight = this.weight * B;
  }
  var f = encodeURIComponent(13);
  var e = encodeURIComponent(7);
  /** @type {function(string, !Object): undefined} */
  meta.exports = object;
  var self = object.prototype;
  /**
   * @return {undefined}
   */
  self.load = function() {
    /** @type {boolean} */
    this.isStartLoaded = true;
  };
  /**
   * @return {undefined}
   */
  self._onLoad = function() {
    /** @type {boolean} */
    this.isLoaded = true;
    this.loadedWeight = this.weight;
    e.loadedItems[this.url] = this;
    this.onLoaded.dispatch(this.content);
  };
  /** @type {function(!Object): undefined} */
  self._onLoading = s;
  /**
   * @return {undefined}
   */
  self.dispatch = function() {
    if (this.hasLoading) {
      this.loadingSignal.remove();
    }
    this.onLoaded.dispatch(this.content);
  };
  /** @type {!Array} */
  object.extensions = [];
  /**
   * @return {?}
   */
  object.retrieve = function() {
    return false;
  };
}, function(canCreateDiscussions, exports, n) {
  var result = {
    Linear : {
      None : function(to) {
        return to;
      }
    },
    Quad : {
      In : function(b) {
        return b * b;
      },
      Out : function(d) {
        return d * (2 - d);
      },
      InOut : function(t) {
        return (t = t * 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
      }
    },
    Cubic : {
      In : function(t) {
        return t * t * t;
      },
      Out : function(t) {
        return --t * t * t + 1;
      },
      InOut : function(t) {
        return (t = t * 2) < 1 ? .5 * t * t * t : .5 * ((t = t - 2) * t * t + 2);
      }
    },
    Quart : {
      In : function(t) {
        return t * t * t * t;
      },
      Out : function(t) {
        return 1 - --t * t * t * t;
      },
      InOut : function(t) {
        return (t = t * 2) < 1 ? .5 * t * t * t * t : -.5 * ((t = t - 2) * t * t * t - 2);
      }
    },
    Quint : {
      In : function(t) {
        return t * t * t * t * t;
      },
      Out : function(t) {
        return --t * t * t * t * t + 1;
      },
      InOut : function(t) {
        return (t = t * 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t = t - 2) * t * t * t * t + 2);
      }
    },
    Sine : {
      In : function(t) {
        return 1 - Math.cos(t * Math.PI / 2);
      },
      Out : function(t) {
        return Math.sin(t * Math.PI / 2);
      },
      InOut : function(t) {
        return .5 * (1 - Math.cos(Math.PI * t));
      }
    },
    Expo : {
      In : function(b) {
        return 0 === b ? 0 : Math.pow(1024, b - 1);
      },
      Out : function(t) {
        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
      },
      InOut : function(t) {
        return 0 === t ? 0 : 1 === t ? 1 : (t = t * 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)));
      }
    },
    Circ : {
      In : function(b) {
        return 1 - Math.sqrt(1 - b * b);
      },
      Out : function(t) {
        return Math.sqrt(1 - --t * t);
      },
      InOut : function(t) {
        return (t = t * 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t = t - 2) * t) + 1);
      }
    },
    Elastic : {
      In : function(t) {
        var p = void 0;
        /** @type {number} */
        var h = .1;
        return 0 === t ? 0 : 1 === t ? 1 : (!h || h < 1 ? (h = 1, p = .1) : p = .4 * Math.asin(1 / h) / (2 * Math.PI), -h * Math.pow(2, 10 * (t = t - 1)) * Math.sin(2 * (t - p) * Math.PI / .4));
      },
      Out : function(t) {
        var b = void 0;
        /** @type {number} */
        var a = .1;
        return 0 === t ? 0 : 1 === t ? 1 : (!a || a < 1 ? (a = 1, b = .1) : b = .4 * Math.asin(1 / a) / (2 * Math.PI), a * Math.pow(2, -10 * t) * Math.sin(2 * (t - b) * Math.PI / .4) + 1);
      },
      InOut : function(t) {
        var b = void 0;
        /** @type {number} */
        var a = .1;
        return 0 === t ? 0 : 1 === t ? 1 : (!a || a < 1 ? (a = 1, b = .1) : b = .4 * Math.asin(1 / a) / (2 * Math.PI), (t = t * 2) < 1 ? -.5 * a * Math.pow(2, 10 * (t = t - 1)) * Math.sin(2 * (t - b) * Math.PI / .4) : a * Math.pow(2, -10 * (t = t - 1)) * Math.sin(2 * (t - b) * Math.PI / .4) * .5 + 1);
      }
    },
    Back : {
      In : function(t) {
        /** @type {number} */
        var s = 1.70158;
        return t * t * ((s + 1) * t - s);
      },
      Out : function(t) {
        /** @type {number} */
        var s = 1.70158;
        return --t * t * ((s + 1) * t + s) + 1;
      },
      InOut : function(t) {
        /** @type {number} */
        var s = 2.5949095;
        return (t = t * 2) < 1 ? .5 * t * t * ((s + 1) * t - s) : .5 * ((t = t - 2) * t * ((s + 1) * t + s) + 2);
      }
    },
    Bounce : {
      In : function(a) {
        return 1 - result.Bounce.Out(1 - a);
      },
      Out : function(t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t = t - 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t = t - 2.25 / 2.75) * t + .9375 : 7.5625 * (t = t - 2.625 / 2.75) * t + .984375;
      },
      InOut : function(a) {
        return a < .5 ? .5 * result.Bounce.In(2 * a) : .5 * result.Bounce.Out(2 * a - 1) + .5;
      }
    }
  };
  exports.basic = result;
  exports.linear = result.Linear;
  var name = void 0;
  var data = void 0;
  for (name in result) {
    if ("Linear" !== name) {
      data = result[name];
      exports["easeIn" + name] = data.In;
      exports["easeOut" + name] = data.Out;
      exports["easeInOut" + name] = data.InOut;
      exports["easeOutIn" + name] = data.OutIn = function(saveNotifs, cb) {
        return function(n) {
          return n < .5 ? .5 * cb(2 * n) : .5 * saveNotifs(2 * n - 1) + .5;
        };
      }(data.In, data.Out);
    }
  }
}, function(canCreateDiscussions, config, require) {
  /**
   * @return {?}
   */
  function listener() {
    return !(!tokens || !ctx || "suspended" !== ctx.state);
  }
  /**
   * @param {string} i
   * @param {!Function} fn
   * @return {undefined}
   */
  function fire(i, fn) {
    if (!o[i]) {
      /** @type {boolean} */
      o[i] = true;
      ctx.decodeAudioData(buffers[i], function(gt) {
        o[i] = gt;
        nodes[i] = ctx.createGain();
        /** @type {number} */
        array[i] = 0;
        if (fn) {
          fn();
        }
      }, function() {
        if (fn) {
          fn();
        }
      });
    }
  }
  /**
   * @return {undefined}
   */
  function callback() {
    if (tokens && ctx) {
      if (ctx) {
        ctx.resume();
      }
      u.to(config, 1, {
        gestureVolumeRatio : 1
      });
    }
  }
  /**
   * @param {?} state
   * @return {undefined}
   */
  function onChange(state) {
    if (tokens && ctx) {
      /** @type {number} */
      config.visibleVolume = 1 - this.hidden;
      /** @type {number} */
      gain.gain.value = config.volume * config.visibleVolume;
    }
  }
  /**
   * @return {undefined}
   */
  function reset() {
    /** @type {boolean} */
    fadeIn = !fadeIn;
    u.to(config, .5, {
      volume : fadeIn ? 0 : 1
    });
  }
  var projectConfig = require(3);
  var utils = require(5);
  var view = require(1);
  var self = require(9);
  var _ = require(2);
  var u = require(8);
  var module = require(37);
  /**
   * @param {number} values
   * @return {undefined}
   */
  config.init = function(values) {
    if (!tokens || ctx) {
      return;
    }
    document.addEventListener("visibilitychange", onChange, false);
    try {
      ctx = new AudioContext;
      item = ctx.createBiquadFilter();
      input = ctx.createPanner();
      gain = ctx.createGain();
      if (listener()) {
        self.onDowned.addOnce(callback);
      } else {
        /** @type {number} */
        config.gestureVolumeRatio = 1;
      }
      item.connect(input);
      input.connect(gain);
      gain.connect(ctx.destination);
      /** @type {string} */
      (transform = document.getElementById("snd-btn")).style.display = "block";
      /** @type {number} */
      (node = document.createElement("canvas")).width = node.height = h * scale;
      transform.appendChild(node);
      g = node.getContext("2d");
      self.add(transform, "click", reset);
      /** @type {number} */
      var keysetLength = 0;
      /** @type {number} */
      var keysetIndex = 0;
      var oo;
      for (oo in data) {
        if (!data[oo]) {
          keysetLength++;
        }
      }
      if (keysetLength > 0) {
        /**
         * @return {undefined}
         */
        var success = function() {
          if (++keysetIndex === keysetLength && values) {
            values();
          }
        };
        var name;
        for (name in data) {
          fire(name, success);
        }
      } else {
        if (values) {
          values();
        }
      }
    } catch (e) {
    }
  };
  /**
   * @param {string} name
   * @return {undefined}
   */
  config.preload = function(name) {
    if (!tokens || !ctx) {
      return;
    }
    if (!buffers[name = name || "default"]) {
      /** @type {boolean} */
      buffers[name] = true;
      view.loader.add(projectConfig.cdnPath + "audios/" + name + ".mp3", {
        type : "xhr",
        responseType : "arraybuffer",
        _onLoad : function() {
          var foobar = module.ITEM_CLASSES.xhr.prototype._onLoad.bind(this);
          buffers[name] = this.xmlhttp.response;
          if (ctx) {
            fire(name, foobar);
          } else {
            foobar();
          }
        }
      });
    }
  };
  /** @type {function(): ?} */
  config.isRequiredGesture = listener;
  /**
   * @param {string} name
   * @return {undefined}
   */
  config.play = function(name) {
    if (!tokens || !ctx) {
      return;
    }
    if (type !== (name = name || "default")) {
      if (type) {
        (function(name) {
          if (processedOptions[name]) {
            /** @type {boolean} */
            processedOptions[name] = false;
            if (sheets[name]) {
              sheets[name].kill();
            }
            var opts = {
              onComplete : function() {
                if (newObserved[name]) {
                  /** @type {boolean} */
                  newObserved[name] = false;
                  nodes[name].disconnect();
                  data[name].disconnect();
                  data[name].stop(data[name].currentTime);
                }
              }
            };
            /** @type {number} */
            opts[name] = 0;
            sheets[name] = u.to(array, 1.5, opts);
          }
        })(type);
      }
      /** @type {string} */
      type = name;
      (function(name) {
        if (!processedOptions[name]) {
          if (processedOptions[name] = true, !newObserved[name]) {
            /** @type {boolean} */
            newObserved[name] = true;
            var self = data[name] = ctx.createBufferSource();
            self.buffer = o[name];
            /** @type {boolean} */
            self.loop = true;
            self.connect(nodes[name]);
            self.start(0);
            nodes[name].connect(item);
          }
          if (sheets[name]) {
            sheets[name].kill();
          }
          /** @type {number} */
          array[name] = 0;
          var opts = {};
          /** @type {number} */
          opts[name] = 1;
          if (C) {
            /** @type {number} */
            opts.delay = .5;
          }
          sheets[name] = u.to(array, 1.5, opts);
        }
      })(name);
    }
    /** @type {boolean} */
    C = false;
  };
  /**
   * @param {string} x
   * @return {undefined}
   */
  config.playEffect = function(x) {
    if (!tokens || !ctx) {
      return;
    }
    var tmp = o[x];
    if (tmp) {
      var player = ctx.createBufferSource();
      player.buffer = tmp;
      player.connect(input);
      player.addEventListener("ended", function() {
        player.disconnect();
      });
      player.start(0);
    }
  };
  /**
   * @param {number} e
   * @return {undefined}
   */
  config.update = function(e) {
    if (!tokens || !ctx) {
      return;
    }
    /** @type {number} */
    var height = config.volume * config.gestureVolumeRatio;
    var j;
    for (j in nodes) {
      var node = nodes[j];
      node.gain.value = array[j];
    }
    input.setPosition(.75 * (view.elasticMouse.x / view.width * 2 - 1), 1 - view.elasticMouse.y / view.height * 2 * .75, -1);
    /** @type {number} */
    gain.gain.value = height;
    config.distortion += .05 * (config.targetDistortion - config.distortion);
    /** @type {number} */
    var value = ctx.sampleRate / 2;
    /** @type {number} */
    var binaryExponent = Math.log(value / 40) / Math.LN2;
    /** @type {number} */
    var n = Math.pow(2, binaryExponent * _.map(config.distortion, 1, 0, -.85, 0));
    item.frequency.value = _.clamp(value * n, 40, value);
    data[type];
    /** @type {number} */
    var whatToScale = height;
    g.save();
    g.scale(scale, scale);
    g.clearRect(0, 0, h, h);
    /** @type {string} */
    g.fillStyle = "#fff";
    /** @type {number} */
    var SCALE = 0;
    for (; SCALE < 7; SCALE++) {
      /** @type {number} */
      var r = 3 + 8 * (.5 * Math.sin(-6 * sChars + .6 * SCALE) + .5) * whatToScale;
      g.fillRect(3 * SCALE, h - r, 1, r);
    }
    g.restore();
    sChars = sChars + e;
  };
  var AudioContext = window.AudioContext || window.webkitAudioContext;
  /** @type {boolean} */
  var tokens = !utils.isMobile;
  /** @type {number} */
  config.volume = 1;
  /** @type {number} */
  config.visibleVolume = 1;
  /** @type {number} */
  config.distortion = 0;
  /** @type {number} */
  config.targetDistortion = 0;
  /** @type {number} */
  config.gestureVolumeRatio = 0;
  var transform = void 0;
  var node = void 0;
  var g = void 0;
  var ctx = void 0;
  var buffers = {};
  var o = {};
  var data = {};
  var nodes = {};
  var processedOptions = {};
  var array = {};
  var newObserved = {};
  var sheets = {};
  var gain = void 0;
  var item = void 0;
  var input = void 0;
  /** @type {string} */
  var type = "";
  /** @type {boolean} */
  var C = true;
  /** @type {boolean} */
  var fadeIn = false;
  /** @type {number} */
  var sChars = 0;
  /** @type {number} */
  var h = 20;
  /** @type {number} */
  var scale = utils.isRetina ? 2 : 1;
}, function(mixin, canCreateDiscussions, n) {
  var p = n(20);
  var a = n(21);
  var f = n(73);
  var h = n(74);
  /**
   * @param {number} c
   * @param {!Array} b
   * @return {?}
   */
  mixin.exports = function(c, b) {
    return c = p(c), f(h(c, b = b || a), b);
  };
}, function(module, canCreateDiscussions, require) {
  /**
   * @param {!Object} b
   * @return {undefined}
   */
  function instance(b) {
    callback(this, {
      id : "",
      path : "",
      isTemplate : false,
      aliases : [],
      _hasInitialized : {},
      domCaches : {},
      useHeroTextEffect : true,
      currentDom : null,
      currentRefId : "",
      audioId : "default"
    }, b);
  }
  var callback = require(6);
  var split = require(17);
  var Duplicity = require(78);
  /** @type {function(!Object): undefined} */
  module.exports = instance;
  var self = instance.prototype;
  /**
   * @param {!Object} module
   * @return {undefined}
   */
  self.preInit = function(module) {
  };
  /**
   * @param {number} obj
   * @return {undefined}
   */
  self.init = function(obj) {
    if (this.useHeroTextEffect && !this.hasInitialized) {
      this.currentDom.heroTextEffect = new Duplicity(this.currentDom.querySelector(".hero-context"), .4);
    }
    /** @type {boolean} */
    this.hasInitialized = true;
  };
  /**
   * @param {!Function} o
   * @return {?}
   */
  self.getRefIdFormPathInfo = function(o) {
    return this.isTemplate ? o.pagePath : "default";
  };
  /**
   * @param {!Object} e
   * @param {boolean} options
   * @return {?}
   */
  self.getAction = function(e, options) {
    var index = this.getRefIdFormPathInfo(e);
    var S = void 0;
    if (this.domCaches[index]) {
      (S = this.getHasCacheAction(e, options)).dom = this.domCaches[index];
    } else {
      /** @type {null} */
      (S = this.getNoCacheAction(e, options)).dom = null;
    }
    return S.scrollTo = this.getScrollToFromRoute(e.route), S;
  };
  /**
   * @param {?} canCreateDiscussions
   * @return {?}
   */
  self.getScrollToFromRoute = function(canCreateDiscussions) {
    return "";
  };
  /**
   * @param {!Object} fn
   * @param {boolean} value
   * @return {?}
   */
  self.getHasCacheAction = function(fn, value) {
    var subnetGroupField = {
      loadHTML : null,
      needsPreload : false
    };
    if (this.isTemplate) {
      /** @type {boolean} */
      subnetGroupField.showTransition = true;
      /** @type {boolean} */
      subnetGroupField.needsPreload = true;
    } else {
      /** @type {boolean} */
      subnetGroupField.showTransition = !value;
    }
    return subnetGroupField;
  };
  /**
   * @param {!Object} b
   * @param {boolean} extendMethods
   * @return {?}
   */
  self.getNoCacheAction = function(b, extendMethods) {
    var me = {
      showTransition : true,
      needsPreload : true
    };
    if (this.isTemplate) {
      me.loadHTML = split("pages/" + b.pathLangPrefix + b.pagePath, "/");
    } else {
      me.loadHTML = split("pages/" + b.pathLangPrefix + this.path, "/");
    }
    return me;
  };
  /**
   * @param {undefined} e
   * @return {undefined}
   */
  self.preShow = function(e) {
    this.currentRefId = this.getRefIdFormPathInfo(e);
    this.currentDom = this.domCaches[this.currentRefId];
    document.title = this.currentDom.dataset.title;
    if (!this.hasInitialized) {
      this.init(e);
    }
    if (this.currentDom.heroTextEffect) {
      this.currentDom.heroTextEffect.reset();
    }
    this.show(e);
  };
  /**
   * @param {number} width
   * @return {undefined}
   */
  self.show = function(width) {
  };
  /**
   * @return {undefined}
   */
  self.hide = function() {
  };
  /**
   * @param {!Object} transform
   * @param {!Object} value
   * @return {undefined}
   */
  self.preStart = function(transform, value) {
    var cur = this.getRefIdFormPathInfo(transform);
    /** @type {!Object} */
    this.domCaches[cur] = value;
    this.preInit(transform, value);
  };
  /**
   * @return {undefined}
   */
  self.resize = function() {
  };
  /**
   * @param {number} fn
   * @return {undefined}
   */
  self.update = function(fn) {
    if (this.hasInitialized && this.currentDom.heroTextEffect) {
      this.currentDom.heroTextEffect.update();
    }
  };
  Object.defineProperty(self, "hasInitialized", {
    get : function() {
      return !!this._hasInitialized[this.currentRefId];
    },
    set : function(name) {
      this._hasInitialized[this.currentRefId] = name;
    }
  });
}, function(canCreateDiscussions, self, $) {
  /**
   * @param {boolean} channelsMax
   * @return {?}
   */
  function init(channelsMax) {
    /** @type {!Element} */
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    /** @type {number} */
    var s = undefined;
    /** @type {number} */
    var h = undefined;
    /** @type {number} */
    var a = mu_y * Math.PI / 180;
    /** @type {number} */
    var y = s * Math.tan(a);
    /** @type {number} */
    var r = Math.cos(a) * (h - y);
    /** @type {number} */
    canvas.width = s;
    /** @type {number} */
    canvas.height = h;
    var gradient = ctx.createLinearGradient(0, y, Math.sin(a) * r, y + r * r / (h - y));
    return gradient.addColorStop(channelsMax ? 0 : 1, "rgba(5,5,5,1)"), gradient.addColorStop(channelsMax ? 1 : 0, "rgba(5,5,5,0)"), ctx.fillStyle = gradient, ctx.fillRect(0, 0, s, h), canvas;
  }
  /**
   * @return {?}
   */
  function oldATLoader() {
    return b || c;
  }
  /**
   * @return {undefined}
   */
  function show() {
    if (!self.isAnimating()) {
      printButton.enable(false);
      /** @type {boolean} */
      b = true;
      sourceAtt.dispatch();
      /** @type {string} */
      cursor_element.style.display = "block";
      var copy = {
        ease : "easeOutCubic"
      };
      if (g) {
        /** @type {number} */
        copy.initialRatio = 1;
      } else {
        /** @type {number} */
        self.showRatio = 0;
        /** @type {number} */
        self.hideRatio = 0;
        /** @type {number} */
        copy.showRatio = 1;
      }
      /**
       * @return {undefined}
       */
      copy.onComplete = function() {
        /** @type {boolean} */
        b = false;
        firedux.dispatch();
        if (r) {
          twinkle();
        }
      };
      tl.set(self, {
        percentShowRatio : 1
      });
      tl.to(self, shouldBeLoved ? 0 : unlove, copy);
    }
  }
  /**
   * @param {string} event
   * @return {undefined}
   */
  function onComplete(event) {
    eventSignal.dispatch();
    if (event) {
      if (b) {
        /** @type {boolean} */
        r = true;
      } else {
        twinkle();
      }
    }
  }
  /**
   * @return {undefined}
   */
  function twinkle() {
    if (T) {
      set();
    } else {
      tl.to(self, shouldBeLoved ? 0 : .65, {
        percentShowRatio : 0,
        onComplete : set,
        ease : "easeInOutQuint"
      });
    }
  }
  /**
   * @return {undefined}
   */
  function set() {
    printButton.enable(true);
    /** @type {boolean} */
    r = false;
    /** @type {boolean} */
    c = true;
    cacheliciousHttp.dispatch();
    requestAnimationFrame(function() {
      tl.to(self, shouldBeLoved ? 0 : unlove, {
        hideRatio : 1,
        ease : "easeInCubic",
        onComplete : function() {
          /** @type {string} */
          cursor_element.style.display = "none";
          /** @type {boolean} */
          c = false;
          /** @type {boolean} */
          g = false;
          apiInitCallbacks.dispatch();
        }
      });
    });
  }
  var item = $(1);
  var printButton = $(25);
  var current = $(26);
  var Proton = $(15);
  var nonFormElement = $(2);
  var CachedImageView = $(13);
  var tl = $(8);
  var mm = $(0);
  /**
   * @return {undefined}
   */
  self.init = function() {
    document.documentElement.classList.add("is-ready");
    /** @type {(Element|null)} */
    cursor_element = document.getElementById("preloader");
    /** @type {(Element|null)} */
    cell = document.getElementById("preloader-canvas");
    context = cell.getContext("2d");
    el = init();
    e = init(true);
    sl = new mm.Color;
    startGrayscale = new mm.Color(328965);
    /** @type {string} */
    cursor_element.style.backgroundColor = "transparent";
  };
  /**
   * @param {number} c
   * @param {number} val
   * @return {undefined}
   */
  self.resize = function(c, val) {
    w = cell.width = c;
    height = cell.height = val;
    colHeight = height + 2 * (zoom = .4 * val);
  };
  /**
   * @param {string} e
   * @return {undefined}
   */
  self.start = function(e) {
    if (e && target) {
      target.kill();
    }
    /** @type {number} */
    self.percent = 0;
    item.loader.start(function(tmp) {
      if (e) {
        if (target) {
          target.kill();
        }
        target = tl.to(self, shouldBeLoved ? 0 : .5, {
          percent : tmp,
          onComplete : function() {
            if (1 === tmp) {
              onComplete(e);
            }
          }
        });
      } else {
        if (1 === tmp) {
          onComplete(e);
        }
      }
    });
  };
  /**
   * @return {undefined}
   */
  self.showAndHide = function() {
    if (!self.isAnimating()) {
      /** @type {boolean} */
      T = true;
      /** @type {boolean} */
      r = true;
      show();
    }
  };
  /** @type {function(): undefined} */
  self.show = show;
  /**
   * @param {number} fn
   * @return {undefined}
   */
  self.update = function(fn) {
    if ((self.visibleRatio = Math.min(this.showRatio, 1 - this.hideRatio)) > 0) {
      /** @type {number} */
      var dstWidth = self.showRatio + self.hideRatio - 1;
      sl.set(16777215).lerp(startGrayscale, self.initialRatio);
      context.fillStyle = sl.getStyle();
      context.clearRect(0, 0, w, height);
      /** @type {number} */
      var i = (colHeight + height) * dstWidth;
      if (context.fillRect(0, i, w, height), self.showRatio < 1 && context.drawImage(e, 0, i + height - 1, w, zoom), self.hideRatio > 0 && context.drawImage(el, 0, i - zoom + 1, w, zoom), !T) {
        self.percentShowRatio;
        context.save();
        context.globalAlpha = nonFormElement.cUnMix(.75, 1, this.showRatio);
        context.translate(100 + (item.width >> 1) + 200 * (1 - self.percentShowRatio), (item.height - (item.width > 1280 ? 0 : current.HEIGHT) >> 1) + (item.width > 1280 ? 0 : current.HEIGHT));
        /** @type {number} */
        var radius = 200 * Proton.easeInOutCubic(1 - nonFormElement.cUnMix(0, .5, this.hideRatio));
        /** @type {string} */
        context.fillStyle = "rgba(255,255,255,0.05)";
        context.fillRect(-radius, -2, radius * self.percentShowRatio, 4);
        /** @type {number} */
        context.shadowBlur = 16;
        /** @type {string} */
        context.shadowColor = "rgba(255,255,255,0.45)";
        /** @type {string} */
        context.fillStyle = "#fff";
        context.fillRect(-radius, -2, radius * self.percent * self.percentShowRatio, 4);
        context.restore();
      }
    }
  };
  /** @type {number} */
  self.initialRatio = 0;
  /** @type {number} */
  self.showRatio = 1;
  /** @type {number} */
  self.hideRatio = 0;
  /** @type {number} */
  self.visibleRatio = 0;
  /** @type {number} */
  self.percent = 0;
  /** @type {number} */
  self.percentShowRatio = 0;
  /** @type {function(): ?} */
  self.isAnimating = oldATLoader;
  /**
   * @return {?}
   */
  self.isIdle = function() {
    return !item.loader.isLoading && !oldATLoader();
  };
  /** @type {boolean} */
  var shouldBeLoved = false;
  var sourceAtt = self.onShowStarted = new CachedImageView;
  var firedux = self.onShowEnded = new CachedImageView;
  var eventSignal = self.onLoadCompleted = new CachedImageView;
  var cacheliciousHttp = self.onHideStarted = new CachedImageView;
  var apiInitCallbacks = self.onHideEnded = new CachedImageView;
  /** @type {boolean} */
  var g = true;
  var cursor_element = void 0;
  var cell = void 0;
  var context = void 0;
  /** @type {boolean} */
  var r = false;
  /** @type {boolean} */
  var b = false;
  /** @type {boolean} */
  var c = false;
  /** @type {boolean} */
  var T = false;
  var w = void 0;
  var height = void 0;
  var colHeight = void 0;
  var zoom = void 0;
  var el = void 0;
  var e = void 0;
  var sl = void 0;
  var startGrayscale = void 0;
  var target = void 0;
  /** @type {number} */
  var unlove = 1;
  /** @type {number} */
  var mu_y = 15;
  /** @type {number} */
  var undefined = 64;
}, function(mixin, canCreateDiscussions, n) {
  /**
   * @param {string} b
   * @return {?}
   */
  mixin.exports = function(b) {
    return null == b ? "" : b.toString();
  };
}, function(mixin, canCreateDiscussions, n) {
  /** @type {!Array} */
  mixin.exports = [" ", "\n", "\r", "\t", "\f", "\v", "\u00a0", "\u1680", "\u180e", "\u2000", "\u2001", "\u2002", "\u2003", "\u2004", "\u2005", "\u2006", "\u2007", "\u2008", "\u2009", "\u200a", "\u2028", "\u2029", "\u202f", "\u205f", "\u3000"];
}, function(mixin, canCreateDiscussions, n) {
  /**
   * @param {!Object} o
   * @return {?}
   */
  mixin.exports = function(o) {
    return Object.prototype.toString.call(o).slice(8, -1);
  };
}, function(mixin, canCreateDiscussions, n) {
  var f = n(24);
  var h = n(77);
  /**
   * @param {!Object} c
   * @param {?} callback
   * @param {?} router
   * @return {undefined}
   */
  mixin.exports = function(c, callback, router) {
    h(c, function(canCreateDiscussions, i) {
      if (f(c, i)) {
        return callback.call(router, c[i], i, c);
      }
    });
  };
}, function(mixin, canCreateDiscussions, n) {
  /**
   * @param {!Object} obj
   * @param {!Object} prop
   * @return {?}
   */
  mixin.exports = function(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  };
}, function(canCreateDiscussions, t, n) {
  /**
   * @return {undefined}
   */
  function onSuccess() {
    item.cb.call(item.img);
    /** @type {boolean} */
    limit = false;
  }
  /**
   * @param {string} name
   * @param {string} key
   * @param {!Function} callback
   * @return {undefined}
   */
  t.add = function(name, key, callback) {
    var i = function(image) {
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var parts_length = parts.length;
      for (; i < parts_length; i++) {
        if (parts[i].img === image) {
          return i;
        }
      }
      return -1;
    }(name);
    if (i > -1) {
      var btn = parts[i];
      /** @type {string} */
      btn.src = key;
      /** @type {!Function} */
      btn.cb = callback;
      /** @type {!Array<?>} */
      var lines = parts.splice(i, 1);
      parts.unshift(lines[0]);
    } else {
      parts.push({
        img : name,
        src : key,
        cb : callback
      });
    }
  };
  /**
   * @param {boolean} enabled
   * @return {undefined}
   */
  t.enable = function(enabled) {
    /** @type {boolean} */
    cur = false !== enabled;
  };
  /**
   * @return {undefined}
   */
  t.update = function() {
    if (cur && !limit && parts.length) {
      /** @type {boolean} */
      limit = true;
      var img = (item = parts.shift()).img;
      /** @type {function(): undefined} */
      img.onload = onSuccess;
      img.src = item.src;
    }
  };
  /** @type {!Array} */
  var parts = [];
  /** @type {boolean} */
  var cur = false;
  /** @type {boolean} */
  var limit = false;
  var item = void 0;
}, function(canCreateDiscussions, params, fn) {
  /**
   * @param {?} $toShow
   * @return {undefined}
   */
  function showItem($toShow) {
    this._flipText.flip();
  }
  /**
   * @param {?} planned
   * @return {undefined}
   */
  function done(planned) {
    cont.toggle();
  }
  var f = fn(9);
  var o = fn(83);
  var cont = fn(27);
  /**
   * @return {undefined}
   */
  params.preInit = function() {
    /** @type {(Element|null)} */
    role = document.getElementById("header");
    /** @type {(Element|null)} */
    s = document.getElementById("header-menu-btn");
  };
  /**
   * @return {undefined}
   */
  params.init = function() {
    (function() {
      var patches = role.querySelectorAll(".header-menu-item a");
      var taskById = role.querySelectorAll(".header-menu-item-mask");
      /** @type {number} */
      var i = 0;
      var patchLen = patches.length;
      for (; i < patchLen; i++) {
        var self = patches[i];
        var t = taskById[i];
        self._flipText = new o(self, t);
        /** @type {function(?): undefined} */
        self._over = showItem;
      }
      f.add(s, "click", done);
    })();
    true;
  };
  /**
   * @return {undefined}
   */
  params.resize = function() {
  };
  /**
   * @param {boolean} reloadTabInd
   * @return {undefined}
   */
  params.setMenuBtn = function(reloadTabInd) {
    var currentlyActivated = s.classList.contains("is-selected");
    if (currentlyActivated && !reloadTabInd) {
      s.classList.remove("is-selected");
    } else {
      if (!currentlyActivated && reloadTabInd) {
        s.classList.add("is-selected");
      }
    }
  };
  /**
   * @param {number} fn
   * @return {undefined}
   */
  params.update = function(fn) {
  };
  /** @type {number} */
  params.HEIGHT = 70;
  var role = void 0;
  var s = void 0;
}, function(canCreateDiscussions, self, $) {
  /**
   * @return {undefined}
   */
  function init() {
    /** @type {(Element|null)} */
    div = document.getElementById("menu");
    document.getElementById("menu-content");
    /** @type {(Element|null)} */
    c = document.getElementById("menu-canvas");
    /** @type {!NodeList<Element>} */
    var subMenuObjs = div.querySelectorAll(".menu-menu-item");
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var numsubMenuObjs = subMenuObjs.length;
    for (; i < numsubMenuObjs; i++) {
      /** @type {!CSSStyleDeclaration} */
      result[i] = subMenuObjs[i].style;
    }
    result.push(document.getElementById("menu-lang-selector").style);
    ctx = c.getContext("2d");
    tr.onHideStarted.add(hide);
    /** @type {boolean} */
    f = true;
  }
  /**
   * @return {undefined}
   */
  function show() {
    if (f) {
      /** @type {boolean} */
      h = true;
      nonFormElement.setMenuBtn(true);
      document.documentElement.classList.add("is-menu-visible");
      tl.to(self, .25, {
        ratio : 1,
        ease : "easeInOutSine"
      });
    }
  }
  /**
   * @return {undefined}
   */
  function hide() {
    if (f) {
      /** @type {boolean} */
      h = false;
      nonFormElement.setMenuBtn(false);
      document.documentElement.classList.remove("is-menu-visible");
      tl.to(self, .25, {
        ratio : 0,
        ease : "easeInOutSine"
      });
    }
  }
  var a = $(2);
  var canvas = $(1);
  var nonFormElement = $(26);
  var tr = $(19);
  var tl = $(8);
  /** @type {function(): undefined} */
  self.init = init;
  /**
   * @param {number} n
   * @param {number} val
   * @return {undefined}
   */
  self.resize = function(n, val) {
    if (!f) {
      if (n <= 1280) {
        init();
        /** @type {number} */
        c.width = n;
        /** @type {number} */
        c.height = val;
        /** @type {number} */
        r2 = -1;
        radius = a.distanceTo(n - l, val - y) + 1;
      }
    }
  };
  /**
   * @param {number} fn
   * @return {undefined}
   */
  self.update = function(fn) {
    if (f) {
      var r = self.ratio;
      if (r2 !== r) {
        /** @type {string} */
        div.style.visibility = r ? "visible" : "hidden";
        ctx.clearRect(0, 0, canvas.width, canvas.fullHeight);
        /** @type {string} */
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(canvas.width - l, y, radius * r, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        /** @type {number} */
        var hexRadius = 1 / (result.length - 1);
        /** @type {number} */
        var j = 0;
        /** @type {number} */
        var s = result.length;
        for (; j < s; j++) {
          result[j].opacity = a.cUnMix(.25 + .35 * j * hexRadius, .65 + .35 * j * hexRadius, r);
        }
        r2 = r;
      }
    }
  };
  /**
   * @return {undefined}
   */
  self.toggle = function() {
    if (h) {
      hide();
    } else {
      show();
    }
  };
  /** @type {function(): undefined} */
  self.show = show;
  /** @type {function(): undefined} */
  self.hide = hide;
  /** @type {number} */
  self.ratio = 0;
  var div = void 0;
  var c = void 0;
  var ctx = void 0;
  /** @type {number} */
  var radius = 0;
  /** @type {boolean} */
  var f = false;
  /** @type {boolean} */
  var h = false;
  /** @type {number} */
  var r2 = 0;
  /** @type {!Array} */
  var result = [];
  /** @type {number} */
  var l = 40.5;
  /** @type {number} */
  var y = 37;
}, function(canCreateDiscussions, data, require) {
  /**
   * @param {?} contentType
   * @return {undefined}
   */
  function modeForContentType(contentType) {
    if (f) {
      data.overText = contentType;
    }
  }
  /**
   * @return {undefined}
   */
  function update() {
    var x = data.textRatio;
    dom.innerHTML = c.substr(0, Math.floor(x * c.length)) + (x < 1 ? String.fromCharCode(33 + Math.floor(93 * Math.random())) : "");
  }
  var platform = require(5);
  var attractiveBody = require(1);
  var sfx = require(16);
  var o = require(8);
  /**
   * @return {undefined}
   */
  data.init = function() {
    if (!f) {
      return;
    }
    /** @type {(Element|null)} */
    dom = document.getElementById("cursor-follow");
    /** @type {!CSSStyleDeclaration} */
    styles = dom.style;
    sfx.preload("hover0");
    sfx.preload("hover1");
  };
  /**
   * @param {!Element} target
   * @return {undefined}
   */
  data.rollover = function(target) {
    if (!f) {
      return;
    }
    modeForContentType(target.dataset.overText || "");
    if ("A" === target.tagName) {
      sfx.playEffect("hover" + (d = d ^ 1));
    }
  };
  /**
   * @param {?} dfr
   * @return {undefined}
   */
  data.rollout = function(dfr) {
    if (!f) {
      return;
    }
    modeForContentType();
  };
  /**
   * @param {string} code
   * @return {undefined}
   */
  data.setBaseText = function(code) {
    if (!f) {
      return;
    }
    /** @type {string} */
    data.baseText = code;
  };
  /** @type {function(?): undefined} */
  data.setOverText = modeForContentType;
  /**
   * @return {undefined}
   */
  data.update = function() {
    if (!f) {
      return;
    }
    var b = null == data.overText ? data.baseText || "" : data.overText || "";
    if (b !== c) {
      c = b;
      if (minBin) {
        minBin.kill();
        /** @type {null} */
        minBin = null;
      }
      if ("" !== c) {
        /** @type {number} */
        data.textRatio = 0;
        minBin = o.to(data, .2 + .03 * c.length, {
          textRatio : 1,
          onUpdate : update
        });
      }
    }
    if (!(0 === attractiveBody.easedMouse.x && 0 === attractiveBody.easedMouse.x)) {
      /** @type {string} */
      styles.transform = "translate3d(" + Math.round(attractiveBody.easedMouse.x) + "px," + Math.round(attractiveBody.easedMouse.y + 30) + "px,0)";
    }
    data.textOpacity += .1 * (("" === b ? 0 : 1) - data.textOpacity);
    styles.opacity = data.textOpacity;
  };
  /** @type {number} */
  data.textRatio = 0;
  /** @type {number} */
  data.textOpacity = 0;
  data.baseText;
  data.overText;
  var dom = void 0;
  var styles = void 0;
  /** @type {string} */
  var c = "";
  var minBin = void 0;
  /** @type {number} */
  var d = 0;
  /** @type {boolean} */
  var f = data.IS_ACTIVE = !platform.isMobile;
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "\nuniform sampler2D u_texture;\n\nvarying vec2 v_uv;\n\nvoid main() {\n    gl_FragColor = texture2D( u_texture, v_uv );\n}\n";
}, function(mixin, canCreateDiscussions, require) {
  var map = require(24);
  var fn = require(94);
  var isObject = require(96);
  /**
   * @return {?}
   */
  mixin.exports = function extend() {
    var k;
    var v;
    var a;
    var obj;
    /** @type {number} */
    var i = 1;
    obj = fn(arguments[0]);
    for (; a = arguments[i++];) {
      for (k in a) {
        if (map(a, k)) {
          v = a[k];
          if (isObject(v) && isObject(obj[k])) {
            obj[k] = extend(obj[k], v);
          } else {
            obj[k] = fn(v);
          }
        }
      }
    }
    return obj;
  };
}, function(mixin, canCreateDiscussions, n) {
  /** @type {function(!Array): ?} */
  var baseIsEqual = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(lineStringProperty) {
    return typeof lineStringProperty;
  } : function(obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
  /**
   * @param {!Array} value
   * @return {?}
   */
  mixin.exports = function(value) {
    return !!value && "object" === (void 0 === value ? "undefined" : baseIsEqual(value)) && value.constructor === Object;
  };
}, function(canCreateDiscussions, t, glslify) {
  var THREE = glslify(0);
  var uniforms_height = t.sharedUniforms = {};
  /** @type {null} */
  t.bgMesh = null;
  /**
   * @param {!Object} obj
   * @return {undefined}
   */
  t.init = function(obj) {
    /** @type {!Object} */
    parameters = obj;
    uniforms_height.u_lightScatterDivider = {
      value : 150
    };
    uniforms_height.u_lightScatterPowInv = {
      value : .4
    };
    uniforms_height.u_cameraPosition = {
      value : parameters.cameraPosition
    };
    uniforms_height.u_lightColor = {
      value : new THREE.Color
    };
    uniforms_height.u_lightPosition = {
      value : parameters.mouse3
    };
    uniforms_height.u_lightViewPosition = {
      value : new THREE.Vector3
    };
    t.bgMesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(1E3, 1E3), shader = new THREE.ShaderMaterial({
      uniforms : {
        u_color : {
          value : new THREE.Color
        },
        u_lightColor : uniforms_height.u_lightColor,
        u_lightScatterDivider : uniforms_height.u_lightScatterDivider,
        u_lightScatterPowInv : uniforms_height.u_lightScatterPowInv,
        u_lightPosition : uniforms_height.u_lightPosition,
        u_cameraPosition : uniforms_height.u_cameraPosition
      },
      vertexShader : glslify(106),
      fragmentShader : glslify(107),
      dithering : true,
      blending : THREE.NoBlending
    }));
    /** @type {number} */
    t.bgMesh.position.z = -50;
  };
  /**
   * @param {number} fn
   * @return {undefined}
   */
  t.update = function(fn) {
    shader.uniforms.u_color.value.setHex(parameters.backgroundColor);
    uniforms_height.u_lightViewPosition.value.copy(parameters.mouse3).applyMatrix4(parameters.camera.matrixWorldInverse);
    uniforms_height.u_lightScatterDivider.value = parameters.scatterDivider;
    uniforms_height.u_lightScatterPowInv.value = parameters.scatterPowInv;
    uniforms_height.u_lightColor.value.setHex(parameters.lightColor);
  };
  var parameters = void 0;
  var shader = void 0;
}, function(canCreateDiscussions, TabEvents, require) {
  var context = require(4);
  var THREE = require(0);
  /**
   * @return {undefined}
   */
  TabEvents.init = function() {
    self = new THREE.Color;
    template = new THREE.RawShaderMaterial({
      uniforms : {
        u_fromColor : {
          value : new THREE.Vector4
        },
        u_toColor : {
          value : new THREE.Vector4
        },
        u_fromY : {
          value : 0
        },
        u_toY : {
          value : 1
        }
      },
      depthTest : false,
      depthWrite : false,
      transparent : true,
      blending : THREE.NormalBlending,
      vertexShader : context.precisionPrefix + require(113),
      fragmentShader : context.precisionPrefix + require(114)
    });
    bounceBackAmount = new THREE.PlaneBufferGeometry(2, 2, 1, 3);
    shader = new THREE.RawShaderMaterial({
      uniforms : {
        u_texture : {
          value : null
        },
        u_ys : {
          value : new THREE.Vector4
        }
      },
      depthTest : false,
      depthWrite : false,
      transparent : true,
      blending : THREE.NormalBlending,
      vertexShader : context.precisionPrefix + require(115),
      fragmentShader : context.precisionPrefix + require(116)
    });
  };
  /**
   * @param {number} text
   * @param {number} data
   * @param {number} col
   * @param {number} type
   * @param {number} row
   * @param {number} metadata
   * @param {undefined} callback
   * @return {undefined}
   */
  TabEvents.renderVerticalGradient = function(text, data, col, type, row, metadata, callback) {
    var camera = context.getColorState();
    var uniforms = template.uniforms;
    var renderer = context.renderer;
    /** @type {boolean} */
    renderer.autoClearColor = false;
    /** @type {boolean} */
    renderer.autoClearDepth = false;
    self.setHex(col);
    uniforms.u_fromColor.value.set(self.r, self.g, self.b, type);
    self.setHex(row);
    uniforms.u_toColor.value.set(self.r, self.g, self.b, metadata);
    /** @type {number} */
    uniforms.u_fromY.value = text;
    /** @type {number} */
    uniforms.u_toY.value = data;
    context.renderGeometry(context.quadGeom, template, callback);
    context.setColorState(camera);
  };
  /**
   * @param {!Object} userId
   * @param {?} start
   * @param {number} mod
   * @param {number} url
   * @param {number} c
   * @param {undefined} a
   * @param {?} b
   * @return {undefined}
   */
  TabEvents.renderVerticalGradientMask = function(userId, start, mod, url, c, a, b) {
    var camera = context.getColorState();
    var renderer = context.renderer;
    /** @type {boolean} */
    renderer.autoClearColor = false;
    /** @type {boolean} */
    renderer.autoClearStencil = false;
    /** @type {boolean} */
    renderer.autoClearDepth = false;
    /** @type {!Object} */
    shader.uniforms.u_texture.value = userId;
    shader.uniforms.u_ys.value.set(start, mod, url, c);
    context.renderGeometry(bounceBackAmount, shader, a);
    context.setColorState(camera);
  };
  var self = void 0;
  var template = void 0;
  var bounceBackAmount = void 0;
  var shader = void 0;
}, function(canCreateDiscussions, TabEvents, n) {
  var ChapterTimeEnd = TabEvents.sharedUniforms = {};
  /**
   * @param {!Object} options
   * @return {undefined}
   */
  TabEvents.init = function(options) {
    ChapterTimeEnd.u_lightScatterDivider = {
      value : 15
    };
    ChapterTimeEnd.u_lightScatterPowInv = {
      value : .3
    };
    ChapterTimeEnd.u_cameraPosition = {
      value : options.cameraPosition
    };
    ChapterTimeEnd.u_lightPosition = {
      value : options.mouse3
    };
  };
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "attribute vec3 position;\n\nuniform vec2 u_delta;\nvarying vec2 v_uv[9];\n\nvoid main() {\n    vec2 uv = position.xy * 0.5 + 0.5;\n\n    v_uv[0] = uv;\n\n    vec2 delta = u_delta;\n    v_uv[1] = uv - delta;\n    v_uv[2] = uv + delta;\n\n    delta += u_delta;\n    v_uv[3] = uv - delta;\n    v_uv[4] = uv + delta;\n\n    delta += u_delta;\n    v_uv[5] = uv - delta;\n    v_uv[6] = uv + delta;\n\n    delta += u_delta;\n    v_uv[7] = uv - delta;\n    v_uv[8] = uv + delta;\n\n    gl_Position = vec4( position, 1.0 );\n\n}\n";
}, function(canCreateDiscussions, template, require) {
  /**
   * @param {string} _
   * @return {?}
   */
  function $(_) {
    return "#include <" + _ + ">";
  }
  var THREE = require(0);
  /**
   * @param {string} chunk
   * @param {?} data
   * @return {undefined}
   */
  template.addChunk = function(chunk, data) {
    THREE.ShaderChunk[chunk] = data;
  };
  /**
   * @param {string} el
   * @param {string} t
   * @param {string} name
   * @param {?} force
   * @return {?}
   */
  template.insertBefore = function(el, t, name, force) {
    if (force) {
      t = $(t);
    }
    return el.replace(t, name + "\n" + t);
  };
  /**
   * @param {string} array
   * @param {string} t
   * @param {string} s
   * @param {boolean} index
   * @return {?}
   */
  template.insertAfter = function(array, t, s, index) {
    if (index) {
      t = $(t);
    }
    return array.replace(t, t + "\n" + s + "\n");
  };
  /**
   * @param {!Object} target
   * @param {string} name
   * @param {string} _
   * @param {?} text
   * @return {?}
   */
  template.replace = function(target, name, _, text) {
    if (text) {
      name = $(name);
    }
    return target.replace(name, "\n" + _ + "\n");
  };
}, function(module, canCreateDiscussions, factory) {
  module.exports = factory(7);
  factory(63);
  factory(64);
  factory(38);
  factory(65);
  factory(66);
  factory(67);
  factory(68);
  factory(39);
}, function(module, canCreateDiscussions, fn) {
  /**
   * @param {!Object} val
   * @param {!Object} options
   * @return {undefined}
   */
  function self(val, options) {
    if (val) {
      /** @type {string} */
      options.responseType = "text";
      target.constructor.apply(this, arguments);
    }
  }
  var o = fn(39);
  var plugin = fn(7);
  /** @type {function(!Object, !Object): undefined} */
  module.exports = self;
  /** @type {string} */
  self.type = "text";
  /** @type {!Array} */
  self.extensions = ["html", "txt", "svg"];
  plugin.register(self);
  /**
   * @return {?}
   */
  self.retrieve = function() {
    return false;
  };
  var target = o.prototype;
  var loader = self.prototype = new o;
  /** @type {function(!Object, !Object): undefined} */
  loader.constructor = self;
  /**
   * @return {undefined}
   */
  loader._onLoad = function() {
    if (!this.content) {
      this.content = this.xmlhttp.responseText;
    }
    target._onLoad.apply(this, arguments);
  };
}, function(context, canCreateDiscussions, require) {
  /**
   * @param {!Object} length
   * @return {undefined}
   */
  function result(length) {
    if (length) {
      target.constructor.apply(this, arguments);
      this.responseType = this.responseType || "";
      this.method = this.method || "GET";
    }
  }
  var xmlhttp;
  var Table = require(14);
  var command = require(7);
  /** @type {boolean} */
  var XHR = !!window.XMLHttpRequest;
  /** @type {function(!Object): undefined} */
  context.exports = result;
  /** @type {string} */
  result.type = "xhr";
  /** @type {!Array} */
  result.extensions = [];
  command.register(result);
  /**
   * @return {?}
   */
  result.retrieve = function() {
    return false;
  };
  var target = Table.prototype;
  var _this = result.prototype = new Table;
  /** @type {function(!Object): undefined} */
  _this.constructor = result;
  /**
   * @return {undefined}
   */
  _this.load = function() {
    target.load.apply(this, arguments);
    var xhr;
    var touchSystem = this;
    xhr = this.xmlhttp = XHR ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    if (this.hasLoading) {
      /**
       * @param {!ProgressEvent} e
       * @return {undefined}
       */
      xhr.onprogress = function(e) {
        touchSystem._onXmlHttpProgress(e);
      };
    }
    /**
     * @return {undefined}
     */
    xhr.onreadystatechange = function() {
      touchSystem._onXmlHttpChange();
    };
    xhr.open(this.method, this.url, true);
    this.xmlhttp.responseType = this.responseType;
    if (XHR) {
      xhr.send(null);
    } else {
      xhr.send();
    }
  };
  /**
   * @return {undefined}
   */
  _this._onXmlHttpChange = function() {
    if (4 === this.xmlhttp.readyState && 200 === this.xmlhttp.status) {
      this._onLoad(this.xmlhttp);
    }
  };
  /**
   * @param {!ProgressEvent} event
   * @return {undefined}
   */
  _this._onXmlHttpProgress = function(event) {
    this.loadingSignal.dispatch(event.loaded / event.total);
  };
  /**
   * @return {undefined}
   */
  _this._onLoad = function() {
    if (!this.content) {
      this.content = this.xmlhttp.response;
    }
    this.xmlhttp = xmlhttp;
    target._onLoad.call(this);
  };
}, function(mixin, canCreateDiscussions, iter_f) {
  var next = iter_f(71);
  /**
   * @param {!Object} o
   * @param {!Object} t
   * @return {?}
   */
  mixin.exports = function(o, t) {
    return -1 !== next(o, t);
  };
}, function(canCreateDiscussions, $scope, require) {
  /**
   * @param {string} type
   * @param {string} value
   * @return {?}
   */
  function get(type, value) {
    var result = type.split("/");
    /** @type {number} */
    var p = 0;
    var pos = result.length;
    for (; p < pos; p++) {
      result[p] = "?" === result[p] ? "[^/]+" : result[p];
    }
    return {
      ref : value,
      isPage : value instanceof AggConfigResult,
      isId : c(value),
      depth : result.length,
      regexp : new RegExp(result.join("\\/") + "$")
    };
  }
  /**
   * @return {undefined}
   */
  function render() {
    message.setBaseText(self.wrapper.dataset.scrollTooltip);
    y = self._tPos;
  }
  /**
   * @return {undefined}
   */
  function onResize() {
    /** @type {boolean} */
    I = true;
    if (target) {
      /** @type {string} */
      self.moveContainer.style.pointerEvents = "none";
    }
  }
  /**
   * @return {undefined}
   */
  function endColorCoords() {
  }
  /**
   * @return {undefined}
   */
  function navigate() {
    if (!A) {
      if (R) {
        /** @type {boolean} */
        R = false;
        $scope.nextPage.preStart($scope.nextPathInfo, item);
        animation.start(true);
      }
    }
  }
  /**
   * @return {undefined}
   */
  function start() {
    if (!A) {
      if (target && target.parentNode === el) {
        el.removeChild(target);
      }
      $scope.currPage.hide();
      /** @type {string} */
      (target = item).style.display = "block";
      q(target);
      includeHTMLAuto(target);
    }
    /** @type {string} */
    self.moveContainer.style.pointerEvents = "auto";
    $scope.currPathInfo = $scope.nextPathInfo;
    $scope.currPage = $scope.nextPage;
    /** @type {null} */
    $scope.nextPage = null;
    /** @type {null} */
    $scope.nextPathInfo = null;
    $scope.currPage.preShow($scope.currPathInfo);
    sfx.play($scope.currPage.audioId);
    message.setBaseText("");
    scope.onPageChange($scope.currPathInfo);
    self.onResize();
    show(name, true);
    replace();
    /** @type {boolean} */
    A = false;
  }
  /**
   * @return {undefined}
   */
  function skeletonId() {
    /** @type {boolean} */
    I = false;
    if (dir) {
      init(dir);
    }
  }
  /**
   * @param {!Element} s
   * @return {undefined}
   */
  function q(s) {
    if (!s.dataset.hasLinksParsed) {
      var removed = s.getElementsByTagName("a");
      var i = removed.length;
      for (; i--;) {
        remove(removed[i]);
      }
      /** @type {boolean} */
      s.dataset.hasLinksParsed = true;
    }
  }
  /**
   * @param {!Element} node
   * @return {undefined}
   */
  function includeHTMLAuto(node) {
    if (message.IS_ACTIVE && !node.dataset.hasWhiteItemsParsed) {
      var array = node.querySelectorAll(".is-white-content");
      var i = array.length;
      for (; i--;) {
        remove(array[i]);
      }
      /** @type {boolean} */
      node.dataset.hasWhiteItemsParsed = true;
    }
  }
  /**
   * @param {!Object} target
   * @return {undefined}
   */
  function remove(target) {
    if (!target.dataset.hasParsed) {
      domClass.add(target, "over", filter(value, target));
      domClass.add(target, "out", filter(complete, target));
      if ("A" === target.tagName) {
        target.addEventListener("click", setDragMove);
        if (target.href) {
          if (0 === target.href.indexOf(browser.baseUrl)) {
            domClass.add(target, "click", filter(node, target));
          } else {
            domClass.add(target, "click", filter(a, target));
          }
        }
      }
      /** @type {boolean} */
      target.dataset.hasParsed = true;
    }
  }
  /**
   * @param {?} recB
   * @return {undefined}
   */
  function value(recB) {
    if (this._over) {
      this._over.call(this);
    }
    message.rollover(this);
  }
  /**
   * @param {?} isCalled
   * @return {undefined}
   */
  function complete(isCalled) {
    if (this._out) {
      this._out.call(this);
    }
    message.rollout(this);
  }
  /**
   * @param {!Event} e
   * @return {undefined}
   */
  function setDragMove(e) {
    e.preventDefault();
  }
  /**
   * @param {?} bExpanded
   * @return {undefined}
   */
  function node(bExpanded) {
    var url = load(this.href);
    history.pushState(null, null, url);
    cb(url);
    if (!animation.isAnimating()) {
      h.hide();
    }
  }
  /**
   * @param {?} results
   * @return {undefined}
   */
  function a(results) {
    window.open(this.href, this.target);
  }
  /**
   * @param {!Event} event
   * @return {undefined}
   */
  function fixedHandler(event) {
    event.preventDefault();
    cb(load(window.location.href));
  }
  /**
   * @param {string} e
   * @return {?}
   */
  function load(e) {
    return parse(e.split("#")[0].replace(browser.baseUrl, ""), "/").split("?")[0];
  }
  /**
   * @param {?} value
   * @return {?}
   */
  function dispatch(value) {
    var curdirArr = (value = parse(value, "/")).split("/");
    return isObject(key, curdirArr[0]) ? curdirArr.slice(1).join("/") : value;
  }
  /**
   * @param {?} message
   * @return {?}
   */
  function next(message) {
    var target;
    var val = (target = parse(message, "/").split("/"), isObject(key, target[0]) ? target[0] : undefined);
    var path = dispatch(message) || "home";
    var validationVM = void 0;
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var _n = o.length;
    for (; i < _n; i++) {
      var v = o[i];
      if (v.regexp.test(path)) {
        validationVM = v;
        break;
      }
    }
    return {
      lang : val,
      pathLangPrefix : val === undefined ? "" : val + "/",
      route : path.split("/"),
      pagePath : path,
      pageUrl : path.replace(/^home\/?/, ""),
      aliasInfo : validationVM
    };
  }
  /**
   * @param {?} req
   * @return {undefined}
   */
  function cb(req) {
    var store = next(req);
    if (animation.isIdle()) {
      init(store);
    } else {
      dir = store;
    }
  }
  /**
   * @return {undefined}
   */
  function update() {
    self.render();
    self.updateStyles();
    /** @type {number} */
    var current = -self._pos;
    /** @type {number} */
    data.scrollTopVelocity = current - data.scrollTop;
    /** @type {number} */
    data.scrollTop = current;
  }
  /**
   * @param {!Object} e
   * @return {undefined}
   */
  function init(e) {
    if (dir = null, e.lang !== data.lang && (window.location.href = e.pathLangPrefix + e.pageUrl), e.aliasInfo) {
      if ($scope.nextPathInfo = e, e.aliasInfo.isId) {
        $scope.currPathInfo = $scope.nextPathInfo;
        show(e.aliasInfo.ref);
      } else {
        $scope.nextPage = e.aliasInfo.page;
        /** @type {boolean} */
        var event = $scope.currPage === $scope.nextPage;
        var obj = e.aliasInfo.page.getAction(e, event);
        name = obj.scrollTo;
        if (obj.showTransition) {
          if (obj.loadHTML) {
            /** @type {boolean} */
            R = true;
            data.loader.add(obj.loadHTML, {
              type : "text",
              onLoad : function(name) {
                /** @type {string} */
                (item = View.createElement(name)).style.display = "none";
                el.insertBefore(item, el.childNodes[0]);
              }
            });
            sfx.preload($scope.nextPage.audioId);
            animation.show();
            animation.start(false);
          } else {
            /** @type {boolean} */
            R = false;
            if (!(obj.dom === target)) {
              /** @type {string} */
              (item = obj.dom).style.display = "none";
              el.insertBefore(item, el.childNodes[0]);
              animation.showAndHide();
            }
          }
        } else {
          $scope.currPathInfo = $scope.nextPathInfo;
          $scope.currPage = $scope.nextPage;
          if (obj.scrollTo) {
            show(obj.scrollTo);
          }
        }
      }
    } else {
      console.log("unknown page");
    }
  }
  /**
   * @param {number} target
   * @param {boolean} side
   * @return {undefined}
   */
  function show(target, side) {
    /** @type {null} */
    name = null;
    /** @type {boolean} */
    $scope.isScrollingTo = true;
    if (side) {
      /** @type {number} */
      self._tPos = 0;
    }
    /** @type {number} */
    var value = target ? -document.getElementById(target).getBoundingClientRect().top : 0;
    var idx = (value = value + (data.width > 1280 ? 0 : 70)) + self._tPos;
    if (side) {
      TweenLite.set(self, {
        _tPos : idx,
        _pos : idx
      });
      onUpdate();
      animate();
      update();
    } else {
      /** @type {number} */
      var duration = Math.max(.4, Math.abs(value) / window.screen.height / 3 + .2);
      TweenLite.to(self, duration, {
        _tPos : idx,
        _pos : idx,
        onUpdate : onUpdate,
        ease : "easeInOutCubic",
        onComplete : animate
      });
    }
  }
  /**
   * @return {undefined}
   */
  function onUpdate() {
    self.moveToPos(self._tPos, 1, true);
  }
  /**
   * @return {undefined}
   */
  function animate() {
    /** @type {boolean} */
    $scope.isScrollingTo = false;
    replace();
  }
  /**
   * @return {undefined}
   */
  function replace() {
    var data = dispatch(load(window.location.href)).split("/")[0] || "home";
    if (data !== version) {
      if (version) {
        document.documentElement.classList.remove("at-" + version);
      }
      document.documentElement.classList.add("at-" + data);
      version = data;
    }
  }
  var browser = require(5);
  var data = require(1);
  var parse = require(17);
  var isObject = require(40);
  var c = require(75);
  var filter = require(43);
  var AggConfigResult = require(18);
  var sfx = require(16);
  var domClass = require(9);
  var animation = require(19);
  var h = require(27);
  var message = require(28);
  var Theme = require(84);
  var View = require(86);
  var Common = require(2);
  var scope = require(48);
  var commands = {
    home : require(120),
    about : require(162),
    project : require(179)
  };
  /** @type {!Array} */
  var o = [];
  /** @type {!Array} */
  var results = [];
  /**
   * @return {undefined}
   */
  $scope.preInit = function() {
    var i;
    for (i in commands) {
      var deps = commands[i].aliases;
      /** @type {number} */
      var index = 0;
      var declareDepsCount = deps.length;
      for (; index < declareDepsCount; index++) {
        var input = get(deps[index], commands[i]);
        input.page = commands[i];
        o.push(input);
      }
    }
    results.push(get("contact", "contact"));
    results.push(get("work", "featured"));
    o.push.apply(o, results);
    o.sort(function(b, a) {
      return a.depth - b.depth;
    });
    /** @type {(Element|null)} */
    el = document.getElementById("page-container");
    (self = new Theme({
      inputTarget : document.body,
      wrapper : document.getElementById("main"),
      moveContainer : document.getElementById("main-scroll"),
      indicator : document.getElementById("main-scrollbar-indicator"),
      isBound : true,
      autoUpdateStyles : false,
      indicatorPadding : 32
    })).init();
    /** @type {!CSSStyleDeclaration} */
    tmp3 = document.getElementById("main-scroll-indicator").style;
  };
  /**
   * @return {undefined}
   */
  $scope.init = function() {
    var cb = next(load((target = document.querySelector("main")).dataset.url));
    $scope.currPathInfo = $scope.nextPathInfo = next(load(window.location.href));
    $scope.currPage = $scope.nextPage = cb.aliasInfo.page;
    $scope.currPage.preStart(cb, target);
    sfx.preload($scope.currPage.audioId);
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var l = results.length;
    for (; i < l; i++) {
      var r = results[i];
      if (r.regexp.test($scope.currPathInfo.pagePath)) {
        name = r.ref;
        break;
      }
    }
    name = name || $scope.currPage.getScrollToFromRoute($scope.currPathInfo.route);
    window.addEventListener("popstate", fixedHandler);
    q(document.body);
    includeHTMLAuto(document.body);
    animation.onShowStarted.add(onResize);
    animation.onShowEnded.add(endColorCoords);
    animation.onLoadCompleted.add(navigate);
    animation.onHideStarted.add(start);
    animation.onHideEnded.add(skeletonId);
    animation.onHideStarted.addOnce(render);
  };
  /**
   * @param {number} length
   * @param {number} val
   * @return {undefined}
   */
  $scope.resize = function(length, val) {
    $scope.currPage.resize(length, val);
  };
  /**
   * @return {undefined}
   */
  $scope.updateScrollPane = function() {
    self.onResize();
    update();
  };
  /** @type {function(number, boolean): undefined} */
  $scope.scrollTo = show;
  /**
   * @param {number} fn
   * @return {undefined}
   */
  $scope.update = function(fn) {
    update();
    x = x + (self._tPos < -1 ? -.03 : .05);
    x = Common.clamp(x, 0, 1);
    tmp3.opacity = x;
    if (!pullUpIsPulled && y < 1 && y !== self._tPos) {
      /** @type {boolean} */
      pullUpIsPulled = true;
      message.setBaseText("");
    }
    $scope.currPage.update(fn, data.scrollTop);
  };
  /**
   * @param {?} font
   * @param {number} t
   * @param {number} by
   * @return {undefined}
   */
  $scope.setPathRange = function(font, t, by) {
    font = parse(font, "/");
    attrs[font] = {
      top : t,
      bottom : by
    };
  };
  /**
   * @return {undefined}
   */
  $scope.checkReplaceHistoryState = function() {
    if (!I && !$scope.isScrollingTo) {
      var dir = void 0;
      /** @type {number} */
      var scrolled = .5 * data.height;
      var name;
      for (name in attrs) {
        var options = attrs[name];
        if (options.top <= scrolled && options.bottom >= scrolled) {
          /** @type {string} */
          dir = name;
          break;
        }
      }
      if (void 0 !== dir) {
        var root = parse((data.lang === undefined ? "" : data.lang + "/") + dir, "/");
        if (root !== load(document.location.href || window.location.href)) {
          history.replaceState(null, null, root + (browser.isSafari || browser.isIOS ? "#" : ""));
          replace();
        }
      }
    }
    attrs = {};
  };
  /** @type {null} */
  $scope.currPathInfo = null;
  /** @type {null} */
  $scope.currPage = null;
  /** @type {null} */
  $scope.nextPathInfo = null;
  /** @type {null} */
  $scope.nextPage = null;
  /** @type {boolean} */
  $scope.isScrollingTo = false;
  var self = void 0;
  var dir = void 0;
  var el = void 0;
  var target = void 0;
  var item = void 0;
  /** @type {boolean} */
  var R = false;
  /** @type {null} */
  var name = null;
  /** @type {boolean} */
  var I = true;
  /** @type {boolean} */
  var A = true;
  var attrs = {};
  /** @type {string} */
  var version = "";
  /** @type {string} */
  var undefined = "en";
  var key = window.supportedLangs;
  /** @type {number} */
  var y = 1;
  /** @type {boolean} */
  var pullUpIsPulled = false;
  var tmp3 = void 0;
  /** @type {number} */
  var x = 0;
}, function(mixin, canCreateDiscussions, get_field_type_for_cell) {
  var type = get_field_type_for_cell(22);
  /**
   * @param {!Object} key
   * @param {!Object} value
   * @return {?}
   */
  mixin.exports = function(key, value) {
    return type(key) === value;
  };
}, function(mixin, canCreateDiscussions, new_val_func) {
  var h = new_val_func(76);
  /**
   * @param {!Function} o
   * @param {!Object} t
   * @param {?} dt
   * @return {?}
   */
  mixin.exports = function(o, t, dt) {
    var result = h(arguments, 2);
    return function() {
      return o.apply(t, result.concat(h(arguments)));
    };
  };
}, function(mixin, canCreateDiscussions, __webpack_require__) {
  var position = __webpack_require__(80);
  /**
   * @param {!Object} opts
   * @return {?}
   */
  mixin.exports = function(opts) {
    var k;
    /** @type {!Array} */
    var data = [];
    if (null == opts) {
      return data;
    }
    /** @type {number} */
    var i = -1;
    var olen = opts.length;
    for (; ++i < olen;) {
      if (i) {
        k = position(0, i);
        data[i] = data[k];
        data[k] = opts[i];
      } else {
        data[0] = opts[0];
      }
    }
    return data;
  };
}, function(mixin, canCreateDiscussions, n) {
  /** @type {number} */
  mixin.exports = -2147483648;
}, function(mixin, canCreateDiscussions, n) {
  /** @type {number} */
  mixin.exports = 2147483647;
}, function(canCreateDiscussions, aabb, originalReadConfig) {
  var config = originalReadConfig(5);
  var _transform3DStyle = config.transform3dStyle;
  var _transformStyle = config.transformStyle;
  /** @type {function(?, number): undefined} */
  aabb.moveY = _transform3DStyle ? function(elementStyle, canCreateDiscussions) {
    /** @type {string} */
    elementStyle[_transform3DStyle] = "translate3d(0," + canCreateDiscussions + "px,0)";
  } : _transformStyle ? function(elementStyle, canCreateDiscussions) {
    /** @type {string} */
    elementStyle[_transformStyle] = "translate(0," + canCreateDiscussions + "px)";
  } : function(s, h1) {
    /** @type {string} */
    s.top = h1 + "px";
  };
}, function(canCreateDiscussions, opts, require) {
  /**
   * @param {!Object} subtractor
   * @param {!Object} subtractee
   * @return {?}
   */
  function subtract(subtractor, subtractee) {
    return subtractor[1] - subtractee[1];
  }
  var util = require(5);
  var r = require(1);
  var params = require(87);
  var Date = require(117);
  var Theme = require(119);
  var Sprite = require(11);
  var Vector2 = require(2);
  /**
   * @return {undefined}
   */
  opts.preInit = function() {
    if (r.isSupportWebGL) {
      params.preInit();
    }
    /** @type {!CSSStyleDeclaration} */
    attrValue = document.getElementById("featured-items-container").style;
    /** @type {!NodeList<Element>} */
    var dom = document.querySelectorAll(".featured-item");
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var rows = dom.length;
    for (; i < rows; i++) {
      var tx = new Date({
        index : i,
        dom : dom[i]
      });
      tx.preInit();
      data.push(tx);
    }
  };
  /**
   * @return {undefined}
   */
  opts.init = function() {
    /** @type {(Element|null)} */
    var boardView = document.getElementById("featured-title");
    rect = new Sprite({
      refDom : boardView
    });
    self = new Theme({
      dom : boardView,
      splitWith : "<br>",
      forceSplitWidth : true,
      delayWeight : .2
    });
    /** @type {(Element|null)} */
    boardView = document.getElementById("featured-desc");
    s = new Sprite({
      refDom : boardView
    });
    _this = new Theme({
      dom : boardView,
      delayWeight : .2
    });
    if (r.isSupportWebGL) {
      params.init();
    }
    /** @type {number} */
    var _j = 0;
    /** @type {number} */
    var _len = data.length;
    for (; _j < _len; _j++) {
      var value = data[_j];
      value.init();
    }
    /** @type {boolean} */
    v = true;
  };
  /**
   * @return {undefined}
   */
  opts.precompile = function() {
    r.renderer.compile(this.scene, this.camera);
  };
  /**
   * @return {undefined}
   */
  opts.resize = function() {
    if (v) {
      rect.testViewport(true);
      self.resize(rect.width);
      s.testViewport(true);
      _this.resize(s.width);
      /** @type {number} */
      var _j = 0;
      /** @type {number} */
      var _len = data.length;
      for (; _j < _len; _j++) {
        var value = data[_j];
        value.resize();
      }
      if (r.isSupportWebGL) {
        params.resize();
      }
    }
  };
  /**
   * @param {!Object} page
   * @return {undefined}
   */
  opts.onPageChange = function(page) {
    /** @type {boolean} */
    var t = "work" === page.route[0] && page.route.length > 1;
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var nbElts = data.length;
    for (; i < nbElts; i++) {
      var r = data[i];
      /** @type {boolean} */
      var showPlanarOpt = !t || r.id != page.route[1];
      /** @type {string} */
      r.dom.style.display = showPlanarOpt ? "block" : "none";
      if (showPlanarOpt) {
        r.reset();
      }
    }
  };
  /**
   * @param {number} fn
   * @return {undefined}
   */
  opts.update = function(fn) {
    if (v) {
      rect.testViewport();
      if (rect.bottom > 0 && rect.top < .65 * r.height) {
        if (!g) {
          /** @type {boolean} */
          g = true;
          self.show(1.5);
        }
      } else {
        if (rect.top > r.height && g) {
          /** @type {boolean} */
          g = false;
          self.hide(0);
        }
      }
      s.testViewport();
      if (s.bottom > 0 && s.top < .75 * r.height) {
        if (!x) {
          /** @type {boolean} */
          x = true;
          _this.show(1.5);
        }
      } else {
        if (s.top > r.height && x) {
          /** @type {boolean} */
          x = false;
          _this.hide(0);
        }
      }
      /** @type {!Array} */
      var base = [[0, Math.abs(rect.top + .5 * rect.height - .5 * r.height)]];
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var tldCount = data.length;
      for (; i < tldCount; i++) {
        var s = data[i];
        s.update();
        base.push([i + 1, Math.abs(s.domRect.top + .5 * s.domRect.height - .5 * r.height)]);
      }
      base.sort(subtract);
      if (r.isSupportWebGL) {
        params.update(fn, base[0][0]);
      }
      if (!(util.isMac && util.isFirefox)) {
        /** @type {string} */
        attrValue.transform = "skewY(" + Vector2.clamp(r.scrollTopVelocity / 20, -8, 8) + "deg) translateZ(0)";
      }
    }
  };
  /** @type {!Array} */
  var data = [];
  var attrValue = void 0;
  var rect = void 0;
  var self = void 0;
  var s = void 0;
  var _this = void 0;
  /** @type {boolean} */
  var v = false;
  /** @type {boolean} */
  var g = true;
  /** @type {boolean} */
  var x = true;
}, function(def, canCreateDiscussions, require) {
  /**
   * @param {!Object} params
   * @return {undefined}
   */
  function init(params) {
    dispatch(this, {
      uniforms : {
        u_texture : {},
        u_resolution : {
          value : null
        },
        u_fullResolution : {
          value : null
        },
        u_isVR : {
          value : false
        }
      },
      defines : {},
      enabled : true,
      vertexShader : "",
      fragmentShader : "",
      isRawMaterial : true,
      depthTest : false,
      depthWrite : false,
      blending : THREE.NoBlending,
      transparent : true
    }, params);
    if (!this.vertexShader) {
      this.vertexShader = source.vertexShader;
    }
    if (this.addRawShaderPrefix && this.isRawMaterial) {
      this.vertexShader = source.precisionPrefix + this.vertexShader;
      this.fragmentShader = source.precisionPrefix + this.fragmentShader;
    }
    this.material = new (this.isRawMaterial ? THREE.RawShaderMaterial : THREE.ShaderMaterial)({
      uniforms : this.uniforms,
      vertexShader : this.vertexShader,
      fragmentShader : this.fragmentShader,
      defines : this.defines,
      depthTest : this.depthTest,
      depthWrite : this.depthWrite,
      blending : this.blending,
      transparent : this.transparent
    });
  }
  var THREE = require(0);
  var dispatch = require(30);
  var source = require(4);
  /** @type {function(!Object): undefined} */
  def.exports = init;
  var context = init.prototype;
  /**
   * @param {!Object} expression
   * @return {undefined}
   */
  context.setPostprocessing = function(expression) {
    this.uniforms.u_resolution.value = expression.resolution;
  };
  /**
   * @return {undefined}
   */
  context.dispose = function() {
  };
  /**
   * @return {?}
   */
  context.needsRender = function() {
    return true;
  };
  /**
   * @param {!Object} obj
   * @param {!Function} value
   * @return {undefined}
   */
  context.render = function(obj, value) {
    this.uniforms.u_texture.value = obj.fromTexture;
    obj.renderMaterial(this.material, value ? null : obj.toRenderTarget);
    obj.swap();
  };
}, function(blob, canCreateDiscussions, require) {
  /**
   * @param {number} options
   * @return {undefined}
   */
  function start(options) {
    options = assign({}, options);
    this.edgesRenderTarget = meta.createRenderTarget(1, 1);
    this.weightsRenderTarget = meta.createRenderTarget(1, 1, true);
    this.uResolutionInv = {
      value : new THREE.Vector2
    };
    e.constructor.call(this, assign({
      uniforms : {
        u_weightsTexture : {
          value : this.weightsRenderTarget.texture
        },
        u_resolutionInv : this.uResolutionInv
      },
      vertexShader : meta.precisionPrefix + require(100),
      fragmentShader : meta.precisionPrefix + require(101)
    }, options));
    this.edgesMaterial = new THREE.RawShaderMaterial({
      uniforms : {
        u_texture : {
          value : null
        },
        u_resolutionInv : this.uResolutionInv
      },
      vertexShader : meta.precisionPrefix + require(102),
      fragmentShader : meta.precisionPrefix + require(103),
      defines : {
        SMAA_THRESHOLD : "0.1"
      },
      blending : THREE.NoBlending,
      depthTest : false,
      depthWrite : false
    });
    this.weightsMaterial = new THREE.RawShaderMaterial({
      uniforms : {
        u_edgesTexture : {
          value : this.edgesRenderTarget.texture
        },
        u_areaTexture : widener.u_areaTexture,
        u_searchTexture : widener.u_searchTexture,
        u_resolutionInv : this.uResolutionInv
      },
      vertexShader : meta.precisionPrefix + require(104),
      fragmentShader : meta.precisionPrefix + require(105),
      defines : {
        SMAA_MAX_SEARCH_STEPS : "8",
        SMAA_AREATEX_MAX_DISTANCE : "16",
        SMAA_AREATEX_PIXEL_SIZE : "( 1.0 / vec2( 160.0, 560.0 ) )",
        SMAA_AREATEX_SUBTEX_SIZE : "( 1.0 / 7.0 )"
      },
      transparent : true,
      blending : THREE.NoBlending,
      depthTest : false,
      depthWrite : false
    });
  }
  /**
   * @param {?} image
   * @return {?}
   */
  function init(image) {
    var texture = new THREE.Texture(image);
    return texture.generateMipmaps = false, texture.needsUpdate = true, texture.flipY = false, texture;
  }
  var meta = require(4);
  var URI = require(49);
  var assign = require(30);
  var THREE = require(0);
  var e = URI.prototype;
  /** @type {!Object} */
  var options = start.prototype = Object.create(e);
  /** @type {function(number): undefined} */
  options.constructor = start;
  /**
   * @param {!Object} sender
   * @return {undefined}
   */
  options.setPostprocessing = function(sender) {
    e.setPostprocessing.call(this, sender);
    var w = sender.width;
    var h = sender.height;
    this.edgesRenderTarget.setSize(w, h);
    this.weightsRenderTarget.setSize(w, h);
    this.uResolutionInv.value.set(1 / w, 1 / h);
  };
  /**
   * @return {undefined}
   */
  options.dispose = function() {
    if (this.edgesRenderTarget) {
      this.edgesRenderTarget.dispose();
    }
    if (this.weightsRenderTarget) {
      this.weightsRenderTarget.dispose();
    }
  };
  /**
   * @param {!Object} obj
   * @param {!Object} value
   * @return {undefined}
   */
  options.render = function(obj, value) {
    var stack = meta.getColorState();
    if (!widener.u_searchTexture.value) {
      console.warn("You need to use Smaa.setImages() to set the smaa textures manually and assign to this class.");
    }
    var renderer = meta.renderer;
    /** @type {boolean} */
    renderer.autoClear = true;
    renderer.setClearColor(0, 0);
    this.edgesMaterial.uniforms.u_texture.value = obj.fromTexture;
    obj.renderMaterial(this.edgesMaterial, this.edgesRenderTarget, true);
    obj.renderMaterial(this.weightsMaterial, this.weightsRenderTarget, true);
    meta.setColorState(stack);
    this.material.uniforms.u_texture.value = obj.fromTexture;
    e.render.call(this, obj, value);
  };
  /**
   * @param {?} color
   * @param {?} value
   * @return {undefined}
   */
  (blob.exports = start).setTextures = function(color, value) {
    var texture = void 0;
    (texture = widener.u_areaTexture.value = init(color)).format = THREE.RGBFormat;
    texture.minFilter = THREE.LinearFilter;
    (texture = widener.u_searchTexture.value = init(value)).magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
  };
  var widener = {
    u_areaTexture : {
      value : null
    },
    u_searchTexture : {
      value : null
    }
  };
}, function(canCreateDiscussions, job, require) {
  /**
   * @param {!Object} name
   * @return {undefined}
   */
  function listener(name) {
    var t = name.dataset.thumbIndex;
    if (null != t) {
      /** @type {null} */
      state[t] = null;
      /** @type {null} */
      res[t] = null;
      /** @type {null} */
      s[t] = null;
    }
  }
  var THREE = require(0);
  var exports = require(4);
  var UrdfMaterial = require(1);
  /**
   * @param {!Object} name
   * @param {number} type
   * @param {number} n
   * @param {number} rows
   * @return {undefined}
   */
  job.add = function(name, type, n, rows) {
    if (!d) {
      canvas = exports.createRenderTarget(1, 1, true);
      d = new THREE.RawShaderMaterial({
        uniforms : program = {
          u_texture : {
            value : null
          },
          u_textureSize : {
            value : new THREE.Vector2
          }
        },
        depthTest : false,
        depthWrite : false,
        vertexShader : exports.vertexShader,
        fragmentShader : exports.precisionPrefix + require(118)
      });
    }
    if (null == name.dataset.thumbIndex) {
      name.dataset.thumbIndex = id;
      /** @type {!Object} */
      state[id] = name;
      res[id] = {
        w : type,
        h : n
      };
      /** @type {number} */
      s[id] = rows;
      id++;
    }
  };
  /** @type {function(!Object): undefined} */
  job.remove = listener;
  /**
   * @return {undefined}
   */
  job.update = function() {
    for (; i < id;) {
      if (state[i]) {
        var c = state[i];
        var r = res[i];
        var p = s[i];
        var width = r.w;
        var height = r.h;
        if (listener(c), UrdfMaterial.isSupportWebGL) {
          if (texture) {
            texture.dispose();
          }
          /** @type {boolean} */
          (texture = new THREE.Texture(c)).flipY = false;
          /** @type {boolean} */
          texture.needsUpdate = true;
          /** @type {boolean} */
          texture.generateMipmaps = false;
          texture.minFilter = texture.magFilter = THREE.LinearFilter;
          if (!(canvas.width === width && canvas.height === height)) {
            canvas.setSize(width, height);
            /** @type {!Uint8Array} */
            buffer = new Uint8Array(width * height * 4);
          }
          program.u_texture.value = texture;
          program.u_textureSize.value.set(c.naturalWidth, c.naturalHeight);
          exports.render(d, canvas);
          exports.renderer.readRenderTargetPixels(canvas, 0, 0, width, height, buffer);
          /** @type {!Element} */
          var result = document.createElement("canvas");
          var ctx = result.getContext("2d");
          result.width = width;
          result.height = height;
          result.ctx = ctx;
          var data = ctx.createImageData(width, height);
          data.data.set(buffer);
          ctx.putImageData(data, 0, 0);
          p(result);
          break;
        }
        p(c);
      }
      i++;
    }
  };
  /** @type {!Array} */
  var state = [];
  /** @type {!Array} */
  var s = [];
  /** @type {!Array} */
  var res = [];
  /** @type {number} */
  var i = 0;
  /** @type {number} */
  var id = 0;
  var d = void 0;
  var program = void 0;
  var texture = void 0;
  var canvas = void 0;
  var buffer = void 0;
}, function(blob, canCreateDiscussions, require) {
  /**
   * @param {!Object} key
   * @return {undefined}
   */
  function data(key) {
    p.constructor.call(this, extend({
      duration : 0,
      delayBase : 0,
      delayTotal : 1,
      delayWeight : .2,
      masks : null,
      isVisible : false,
      textColor : 16777215,
      ratio : 0,
      lastLineRatio : 0,
      tween : null
    }, key));
    this.dom.classList.add("split-line-mask-effect");
    this.boundOnUpdate = this.update.bind(this);
  }
  var extend = require(6);
  var SettingsManager = require(53);
  var simplex = require(2);
  var smooth = require(15);
  var timeline = require(8);
  var p = SettingsManager.prototype;
  /** @type {!Object} */
  var fxAccountsDialog = data.prototype = Object.create(p);
  /** @type {function(!Object): undefined} */
  blob.exports = data;
  /**
   * @param {number} length
   * @return {undefined}
   */
  fxAccountsDialog.resize = function(length) {
    p.resize.call(this);
    var lines = this.lines;
    /** @type {number} */
    var i = 0;
    var l = lines.length;
    for (; i < l; i++) {
      /** @type {!Element} */
      var r = document.createElement("div");
      r.classList.add("split-line-mask");
      /** @type {string} */
      r.style.width = length + "px";
      /** @type {string} */
      r.style.transform = "translate3d(-105%,0,0)";
      lines[i].appendChild(r);
      if (this.isVisible) {
        lines[i].classList.add("is-visible");
      }
    }
    this.masks = this.dom.querySelectorAll(".split-line-mask");
    this.delayTotal = this.lineCount;
  };
  /**
   * @param {number} duration
   * @return {undefined}
   */
  fxAccountsDialog.show = function(duration) {
    timeline.killTweensOf(this.tween);
    /** @type {boolean} */
    this.isVisible = true;
    duration = this.duration = void 0 === duration ? 1 : duration;
    this.tween = timeline.to(this, duration, {
      ratio : 1,
      ease : "linear",
      onUpdate : this.boundOnUpdate
    });
  };
  /**
   * @param {number} duration
   * @return {undefined}
   */
  fxAccountsDialog.hide = function(duration) {
    timeline.killTweensOf(this.tween);
    /** @type {boolean} */
    this.isVisible = false;
    duration = this.duration = void 0 === duration ? 1 : duration;
    this.tween = timeline.to(this, duration, {
      ratio : 0,
      ease : "linear",
      onUpdate : this.boundOnUpdate
    });
  };
  /**
   * @return {undefined}
   */
  fxAccountsDialog.update = function() {
    var sliderItems = this.lines;
    if (sliderItems) {
      var masks = this.masks;
      var time = this.ratio;
      /** @type {number} */
      var x = this.duration * this.delayWeight / this.delayTotal;
      /** @type {number} */
      var dx = 1 - x * this.delayTotal;
      /** @type {number} */
      var s = 0;
      var solidsLength = sliderItems.length;
      for (; s < solidsLength; s++) {
        var c = this.lastLineRatio = smooth.easeInOutQuint(simplex.cUnMix(x * s, dx + x * s, time));
        var is_document = sliderItems[s].classList.contains("is-visible");
        /** @type {boolean} */
        var option = c > .5;
        if (is_document && !option) {
          sliderItems[s].classList.remove("is-visible");
        } else {
          if (!is_document && option) {
            sliderItems[s].classList.add("is-visible");
          }
        }
        /** @type {string} */
        masks[s].style.transform = "translate3d(" + (210 * c - 105) + "%,0,0)";
      }
    }
  };
}, function(module, canCreateDiscussions, require) {
  /**
   * @param {!Object} i
   * @return {undefined}
   */
  function f(i) {
    merge(this, {
      text : "",
      dom : null,
      lineCount : 0,
      lines : null,
      splitWith : null,
      spaceBetweenWords : true,
      forceSplitWidth : false
    }, i);
    this.dom = this.dom || document.createElement("div");
    this.text = this.text || this.dom.innerHTML;
    if (null === this.splitWith) {
      this.words = this.text.split(/\s+/g);
    } else {
      this.words = parse(this.text).split(this.splitWith);
    }
    this.style = this.dom.style;
  }
  var merge = require(6);
  var parse = require(17);
  var s = f.prototype;
  /** @type {function(!Object): undefined} */
  module.exports = f;
  /**
   * @return {undefined}
   */
  s.resize = function() {
    var a = this.words;
    /** @type {string} */
    this.dom.innerHTML = "";
    var e = void 0;
    /** @type {boolean} */
    var n = true;
    /** @type {string} */
    var tmp = "";
    var element = void 0;
    /** @type {string} */
    var b = "";
    /** @type {number} */
    var alength = 0;
    if (this.forceSplitWidth) {
      /** @type {string} */
      var space = '<div class="split-line">';
      /** @type {string} */
      this.dom.innerHTML = space + a.join("</div><br>" + space) + "</div><br>";
      alength = a.length;
    } else {
      /** @type {number} */
      var l = 0;
      var part = a.length + 1;
      for (; l < part; l++) {
        var d = a[l];
        if (n && (n = false, element && this.dom.appendChild(document.createElement("br")), (element = document.createElement("div")).className = "split-line", this.dom.appendChild(element), e = -1, b = "", alength++, tmp && (b = b + (" " + tmp), element.innerHTML = parse(b), e = element.offsetHeight, element.innerHTML = "", tmp = "")), d) {
          /** @type {string} */
          element.innerHTML = b + " " + d;
          var f = element.offsetHeight;
          if (e > -1 && f > e) {
            element.innerHTML = parse(b);
            tmp = d;
            /** @type {boolean} */
            n = true;
          } else {
            /** @type {string} */
            b = b + ((this.spaceBetweenWords ? " " : "") + d);
          }
          e = f;
        } else {
          element.innerHTML = parse(b);
        }
      }
    }
    this.lines = this.dom.querySelectorAll(".split-line");
    this.lineCount = alength;
  };
  /**
   * @return {undefined}
   */
  s.show = function() {
  };
  /**
   * @return {undefined}
   */
  s.hide = function() {
  };
}, function(canCreateDiscussions, ctrlManager, require) {
  /**
   * @param {?} positions
   * @param {?} result
   * @param {?} data
   * @return {undefined}
   */
  function callback(positions, result, data) {
    var tmp = void 0;
    var v_v_p_w_w = void 0;
    var o = void 0;
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var index = 0;
    var posLen = positions.length;
    for (; i < posLen; i++) {
      /** @type {number} */
      tmp = (o = positions[index + 0] / textLeft * .5 + .5) % 1 - (v_v_p_w_w = 255 * o % 1) / 255;
      /** @type {number} */
      result[index + 0] = 255 * tmp;
      /** @type {number} */
      result[index + 1] = 255 * v_v_p_w_w;
      /** @type {number} */
      tmp = (o = positions[index + 1] / textLeft * .5 + .5) % 1 - (v_v_p_w_w = 255 * o % 1) / 255;
      /** @type {number} */
      result[index + 2] = 255 * tmp;
      /** @type {number} */
      result[index + 3] = 255 * v_v_p_w_w;
      /** @type {number} */
      tmp = (o = positions[index + 2] / textLeft * .5 + .5) % 1 - (v_v_p_w_w = 255 * o % 1) / 255;
      /** @type {number} */
      data[index + 0] = 255 * tmp;
      /** @type {number} */
      data[index + 1] = 255 * v_v_p_w_w;
      /** @type {number} */
      tmp = (o = positions[index + 3] / unitHeight * .5 + .5) % 1 - (v_v_p_w_w = 255 * o % 1) / 255;
      /** @type {number} */
      data[index + 2] = 255 * tmp;
      /** @type {number} */
      data[index + 3] = 255 * v_v_p_w_w;
      /** @type {number} */
      index = index + 4;
    }
  }
  var THREE = require(0);
  var TagHourlyStat = require(3);
  var m = require(1);
  var _ = require(4);
  var PROMISE_FS = require(122);
  /**
   * @param {!Object} options
   * @return {undefined}
   */
  ctrlManager.init = function(options) {
    /** @type {!Object} */
    opts = options;
    size = options.NODE_COUNT;
    height = options.MAX_TUBE_COUNT;
    target = _.createRenderTarget(size, height, true, true, true);
    value = target.clone();
    node = _.createRenderTarget(1, height, true, true, true);
    elem = node.clone();
    r = _.createRenderTarget(size, height, true, true);
    source = r.clone();
    uniforms_height.u_prevPositionTexture = {
      value : target.texture
    };
    uniforms_height.u_currPositionTexture = {
      value : value.texture
    };
    uniforms_height.u_prevVelocityTexture = {
      value : node.texture
    };
    uniforms_height.u_currVelocityTexture = {
      value : elem.texture
    };
    uniforms_height.u_rotationTexture = {
      value : r.texture
    };
    /** @type {!Float32Array} */
    var positions = new Float32Array(4 * height);
    /** @type {number} */
    var name = 0;
    /** @type {number} */
    var j = 0;
    for (; j < height; j++) {
      /** @type {number} */
      positions[name + 0] = Math.random() - .5;
      /** @type {number} */
      positions[name + 1] = Math.random() - .5;
      /** @type {number} */
      positions[name + 2] = Math.random();
      /** @type {number} */
      positions[name + 3] = j / height;
      /** @type {number} */
      name = name + 4;
    }
    var View = _.getColorState();
    if (_.renderer.autoClearColor = false, TagHourlyStat.useFloatPacking) {
      /** @type {!Uint8Array} */
      var dkBin = new Uint8Array(4 * height);
      /** @type {!Uint8Array} */
      var label = new Uint8Array(4 * height);
      callback(positions, dkBin, label);
      /** @type {boolean} */
      (result = _.createDataTexture(dkBin, 1, height, true, true, true)).needsUpdate = true;
      /** @type {boolean} */
      (el = _.createDataTexture(label, 1, height, true, true, true)).needsUpdate = true;
      s = target.clone();
      c = target.clone();
      o = node.clone();
      b = node.clone();
      _.clearColor(8355711, 0, elem);
      _.clearColor(8355711, 0, b);
      uniforms_height.u_prevPositionTextureZW = {
        value : s.texture
      };
      uniforms_height.u_currPositionTextureZW = {
        value : c.texture
      };
      uniforms_height.u_prevVelocityTextureZW = {
        value : o.texture
      };
      uniforms_height.u_currVelocityTextureZW = {
        value : b.texture
      };
      uniforms_height.u_posPackDividers = {
        value : new THREE.Vector2(textLeft, unitHeight)
      };
      uniforms_height.u_velPackDividers = {
        value : new THREE.Vector2(WIDTH, textTop)
      };
    } else {
      _.clearColor(0, 0, elem);
      /** @type {boolean} */
      (result = _.createDataTexture(positions, 1, height, true, true, true)).needsUpdate = true;
    }
    var res = result;
    var canvas = el;
    if (options.initialData) {
      var parentData = options.initialData;
      var keyMap = parentData.splinePositions;
      /** @type {number} */
      var length = size * height;
      /** @type {!Float32Array} */
      var positions = new Float32Array(4 * length);
      /** @type {number} */
      var name = 0;
      /** @type {number} */
      var kc = 0;
      /** @type {number} */
      var j = 0;
      for (; j < height; j++) {
        /** @type {!Array} */
        var r = [];
        /** @type {number} */
        var l = 0;
        for (; l < choicesQuantity; l++) {
          /** @type {!Array} */
          r[l] = [keyMap[kc], keyMap[kc + 1], keyMap[kc + 2]];
          /** @type {number} */
          kc = kc + 3;
        }
        var gradient = PROMISE_FS.spline([0, .5, 1], r);
        /** @type {number} */
        var i = 0;
        for (; i < size; i++) {
          var magnitudes = gradient.at(i / (size - 1));
          positions[name + 0] = magnitudes[0];
          positions[name + 1] = magnitudes[1];
          positions[name + 2] = magnitudes[2];
          /** @type {number} */
          positions[name + 3] = j / height;
          /** @type {number} */
          name = name + 4;
        }
      }
      if (TagHourlyStat.useFloatPacking) {
        /** @type {!Uint8Array} */
        var id = new Uint8Array(4 * length);
        /** @type {!Uint8Array} */
        var data = new Uint8Array(4 * length);
        callback(positions, id, data);
        /** @type {boolean} */
        (res = _.createDataTexture(id, size, height, true, true, true)).needsUpdate = true;
        /** @type {boolean} */
        (canvas = _.createDataTexture(data, size, height, true, true, true)).needsUpdate = true;
      } else {
        /** @type {boolean} */
        (res = _.createDataTexture(positions, size, height, true, true, true)).needsUpdate = true;
      }
    }
    _.setColorState(View);
    /** @type {boolean} */
    _.renderer.autoClearColor = false;
    /** @type {boolean} */
    _.copyMaterial.transparent = true;
    _.copy(res, value);
    if (TagHourlyStat.useFloatPacking) {
      _.copy(canvas, c);
    }
    /** @type {boolean} */
    _.copyMaterial.transparent = false;
    _.setColorState(View);
    if (options.initialData) {
      res.dispose();
    }
    if (shader = new THREE.RawShaderMaterial({
      uniforms : {
        u_positionTexture : uniforms_height.u_prevPositionTexture,
        u_velocityTexture : uniforms_height.u_prevVelocityTexture,
        u_noiseKernelSize : {
          value : .075
        },
        u_noiseTime : {
          value : 0
        },
        u_noiseStrength : {
          value : 3E-4
        },
        u_dtRatio : {
          value : 1
        },
        u_time : {
          value : 0
        },
        u_firstUvSs : {
          value : new THREE.Vector2(.5 / size, .5 / size)
        },
        u_initRatio : {
          value : 0
        }
      },
      vertexShader : _.precisionPrefix + require(124),
      fragmentShader : _.precisionPrefix + require(125),
      blending : THREE.NoBlending,
      depthTest : false,
      depthWrite : false,
      transparent : true
    }), options.initialData) {
      var technique = options.initialData;
      shader.uniforms.u_time.value = technique.u_time;
      shader.uniforms.u_initRatio.value = technique.u_initRatio;
      shader.uniforms.u_noiseTime.value = technique.u_noiseTime;
    }
    opt = new THREE.RawShaderMaterial({
      uniforms : {
        u_positionTexture : uniforms_height.u_prevPositionTexture,
        u_velocityTexture : uniforms_height.u_currVelocityTexture,
        u_defaultDataTexture : {
          value : result
        },
        u_screenResolution : {
          value : m.resolution
        },
        u_firstUvSs : {
          value : new THREE.Vector2(.5 / size, .5 / size)
        },
        u_neighbourNodeUvSOffsets : {
          value : new THREE.Vector2(1 / size, 1 / size)
        },
        u_fixedScale : {
          value : 1
        },
        u_dtRatio : {
          value : 1
        },
        u_time : {
          value : 0
        },
        u_initRatio : {
          value : 0
        }
      },
      vertexShader : _.precisionPrefix + require(126),
      fragmentShader : _.precisionPrefix + require(127),
      blending : THREE.NoBlending,
      depthTest : false,
      depthWrite : false,
      transparent : true
    });
    if (TagHourlyStat.useFloatPacking) {
      shader.uniforms.u_positionTextureZW = uniforms_height.u_prevPositionTextureZW;
      shader.uniforms.u_velocityTextureZW = uniforms_height.u_prevVelocityTextureZW;
      shader.uniforms.u_posPackDividers = uniforms_height.u_posPackDividers;
      shader.uniforms.u_velPackDividers = uniforms_height.u_velPackDividers;
      /** @type {boolean} */
      shader.defines.IS_PACKED = true;
      module = new THREE.RawShaderMaterial({
        uniforms : shader.uniforms,
        vertexShader : shader.vertexShader,
        fragmentShader : shader.fragmentShader
      });
      THREE.Material.prototype.copy.call(module, shader);
      /** @type {boolean} */
      module.defines.IS_PACKED = true;
      /** @type {boolean} */
      module.defines.IS_PACK_TO_ZW = true;
      opt.uniforms.u_positionTextureZW = uniforms_height.u_prevPositionTextureZW;
      opt.uniforms.u_velocityTextureZW = uniforms_height.u_currVelocityTextureZW;
      opt.uniforms.u_defaultDataTextureZW = {
        value : el
      };
      opt.uniforms.u_posPackDividers = uniforms_height.u_posPackDividers;
      opt.uniforms.u_velPackDividers = uniforms_height.u_velPackDividers;
      /** @type {boolean} */
      opt.defines.IS_PACKED = true;
      params = new THREE.RawShaderMaterial({
        uniforms : opt.uniforms,
        vertexShader : opt.vertexShader,
        fragmentShader : opt.fragmentShader
      });
      THREE.Material.prototype.copy.call(params, opt);
      /** @type {boolean} */
      params.defines.IS_PACKED = true;
      /** @type {boolean} */
      params.defines.IS_PACK_TO_ZW = true;
    }
    /** @type {number} */
    var server = 2 / size;
    /** @type {number} */
    var kByte = 1 / size;
    /** @type {!Float32Array} */
    var data = new Float32Array([-1, 1, 0, -1 + server, 1, 0, -1, -1, 0, -1 + server, -1, 0]);
    /** @type {!Float32Array} */
    var classifications = new Float32Array([0, 1, kByte, 1, 0, 0, kByte, 0]);
    /** @type {!Uint8Array} */
    var typedArray = new Uint8Array([0, 2, 1, 1, 2, 3]);
    (child = new THREE.BufferGeometry).setAttribute("position", new THREE.BufferAttribute(data, 3));
    child.setAttribute("a_uv", new THREE.BufferAttribute(classifications, 2));
    child.setIndex(new THREE.BufferAttribute(typedArray, 1));
    /** @type {number} */
    var length = ~~(size / 2);
    /** @type {!Float32Array} */
    data = new Float32Array(12 * length);
    /** @type {!Float32Array} */
    classifications = new Float32Array(8 * length);
    /** @type {!Uint8Array} */
    typedArray = new Uint8Array(6 * length);
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var he = 0;
    /** @type {number} */
    var byteOffset = 0;
    /** @type {number} */
    var uid = 0;
    /** @type {number} */
    var bp = 0;
    for (; i < length; i++) {
      /** @type {number} */
      var maxright = (2 * i + 1) * server - 1;
      /** @type {number} */
      var mByte = (2 * i + 1) * kByte;
      /** @type {number} */
      data[bp + 0] = maxright;
      /** @type {number} */
      data[bp + 1] = 1;
      /** @type {number} */
      data[bp + 2] = 0;
      /** @type {number} */
      data[bp + 3] = maxright + server;
      /** @type {number} */
      data[bp + 4] = 1;
      /** @type {number} */
      data[bp + 5] = 0;
      /** @type {number} */
      data[bp + 6] = maxright;
      /** @type {number} */
      data[bp + 7] = -1;
      /** @type {number} */
      data[bp + 8] = 0;
      /** @type {number} */
      data[bp + 9] = maxright + server;
      /** @type {number} */
      data[bp + 10] = -1;
      /** @type {number} */
      data[bp + 11] = 0;
      /** @type {number} */
      classifications[uid + 0] = mByte;
      /** @type {number} */
      classifications[uid + 1] = 1;
      /** @type {number} */
      classifications[uid + 2] = mByte + kByte;
      /** @type {number} */
      classifications[uid + 3] = 1;
      /** @type {number} */
      classifications[uid + 4] = mByte;
      /** @type {number} */
      classifications[uid + 5] = 0;
      /** @type {number} */
      classifications[uid + 6] = mByte + kByte;
      /** @type {number} */
      classifications[uid + 7] = 0;
      /** @type {number} */
      typedArray[byteOffset + 0] = he + 0;
      /** @type {number} */
      typedArray[byteOffset + 1] = he + 2;
      /** @type {number} */
      typedArray[byteOffset + 2] = he + 1;
      /** @type {number} */
      typedArray[byteOffset + 3] = he + 1;
      /** @type {number} */
      typedArray[byteOffset + 4] = he + 2;
      /** @type {number} */
      typedArray[byteOffset + 5] = he + 3;
      /** @type {number} */
      he = he + 4;
      /** @type {number} */
      byteOffset = byteOffset + 6;
      /** @type {number} */
      uid = uid + 8;
      /** @type {number} */
      bp = bp + 12;
    }
    (geometry = new THREE.BufferGeometry).setAttribute("position", new THREE.BufferAttribute(data, 3));
    geometry.setAttribute("uv", new THREE.BufferAttribute(classifications, 2));
    geometry.setIndex(new THREE.BufferAttribute(typedArray, 1));
    depthShader = new THREE.RawShaderMaterial({
      uniforms : {
        u_positionTexture : uniforms_height.u_currPositionTexture,
        u_rotationTexture : {
          value : null
        },
        u_positionOffset : {
          value : new THREE.Vector2(0, 0)
        },
        u_uvOffset : {
          value : new THREE.Vector2(0, 0)
        },
        u_neighbourNodeUvOffset : {
          value : new THREE.Vector2(1 / size, 0)
        }
      },
      vertexShader : _.precisionPrefix + require(128),
      fragmentShader : _.precisionPrefix + require(129),
      blending : THREE.NoBlending,
      depthTest : false,
      depthWrite : false,
      transparent : true
    });
    material = new THREE.RawShaderMaterial({
      uniforms : depthShader.uniforms,
      vertexShader : depthShader.vertexShader,
      fragmentShader : depthShader.fragmentShader
    });
    THREE.Material.prototype.copy.call(material, depthShader);
    /** @type {boolean} */
    depthShader.defines.IS_FIRST_NODE = true;
    if (TagHourlyStat.useFloatPacking) {
      depthShader.uniforms.u_positionTextureZW = uniforms_height.u_currPositionTextureZW;
      depthShader.uniforms.u_posPackDividers = uniforms_height.u_posPackDividers;
      depthShader.uniforms.u_rotPackDividers = uniforms_height.u_rotPackDividers;
      /** @type {boolean} */
      depthShader.defines.IS_PACKED = true;
      /** @type {boolean} */
      material.defines.IS_PACKED = true;
    }
  };
  /**
   * @param {number} str
   * @return {undefined}
   */
  ctrlManager.update = function(str) {
    var View = _.getColorState();
    /** @type {boolean} */
    _.renderer.autoClearColor = false;
    (function() {
      var next = node;
      node = elem;
      elem = next;
      next = target;
      target = value;
      value = next;
      uniforms_height.u_prevPositionTexture.value = target.texture;
      uniforms_height.u_currPositionTexture.value = value.texture;
      uniforms_height.u_prevVelocityTexture.value = node.texture;
      uniforms_height.u_currVelocityTexture.value = elem.texture;
      if (TagHourlyStat.useFloatPacking) {
        next = o;
        o = b;
        b = next;
        next = s;
        s = c;
        c = next;
        uniforms_height.u_prevPositionTextureZW.value = s.texture;
        uniforms_height.u_currPositionTextureZW.value = c.texture;
        uniforms_height.u_prevVelocityTextureZW.value = o.texture;
        uniforms_height.u_currVelocityTextureZW.value = b.texture;
      }
    })();
    shader.uniforms.u_dtRatio.value = m.deltaRatio;
    shader.uniforms.u_noiseTime.value += .3 * str;
    shader.uniforms.u_time.value += str;
    /** @type {number} */
    shader.uniforms.u_initRatio.value = Math.min(1, shader.uniforms.u_initRatio.value + .05 * str);
    _.render(shader, elem);
    if (TagHourlyStat.useFloatPacking) {
      _.render(module, b);
    }
    opt.uniforms.u_dtRatio.value = m.deltaRatio;
    opt.uniforms.u_time.value = shader.uniforms.u_time.value;
    /** @type {number} */
    opt.uniforms.u_initRatio.value = shader.uniforms.u_initRatio.value;
    /** @type {number} */
    opt.uniforms.u_fixedScale.value = 2 * Math.tan(opts.camera.fov / 360 * Math.PI) / m.resolution.y * 11;
    _.render(opt, value);
    if (TagHourlyStat.useFloatPacking) {
      _.render(params, c);
    }
    var uniforms = material.uniforms;
    var l = source;
    var x = r;
    uniforms.u_positionTexture.value = value.texture;
    /** @type {number} */
    var length = 2 / size;
    /** @type {number} */
    var f = 1 / size;
    /** @type {number} */
    var width = 0;
    for (; width < size; width++) {
      depthShader.uniforms.u_rotationTexture.value = l.texture;
      /** @type {number} */
      uniforms.u_positionOffset.value.x = length * width;
      /** @type {number} */
      uniforms.u_uvOffset.value.x = f * width;
      _.renderGeometry(child, 0 === width ? depthShader : material, x);
      var i = l;
      l = x;
      x = i;
    }
    var sprite = _.copyMaterial;
    var skew = sprite.transparent;
    /** @type {boolean} */
    sprite.transparent = true;
    sprite.uniforms.u_texture.value = source.texture;
    _.renderGeometry(geometry, sprite, r);
    sprite.transparent = skew;
    _.setColorState(View);
  };
  var uniforms_height = ctrlManager.sharedUniforms = {};
  var target = void 0;
  var s = void 0;
  var value = void 0;
  var c = void 0;
  var node = void 0;
  var o = void 0;
  var elem = void 0;
  var b = void 0;
  var r = void 0;
  var shader = void 0;
  var module = void 0;
  var opt = void 0;
  var params = void 0;
  var source = void 0;
  var result = void 0;
  var el = void 0;
  var child = void 0;
  var geometry = void 0;
  var depthShader = void 0;
  var material = void 0;
  var opts = void 0;
  var size = void 0;
  var height = void 0;
  /** @type {number} */
  var choicesQuantity = 3;
  /** @type {number} */
  var textLeft = 128;
  /** @type {number} */
  var unitHeight = 2;
  /** @type {number} */
  var WIDTH = 4;
  /** @type {number} */
  var textTop = 4;
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "#if defined(IS_BOTTOM)\nvarying vec2 v_uv;\n#endif\n\n#ifdef IS_MODEL\nvarying vec3 v_color;\n#endif\n#ifdef IS_BOTTOM\nattribute vec2 a_uv2;\nvarying vec2 v_uv2;\n#endif\n#ifdef IS_PANEL\nuniform mat4 u_reflectionTextureMatrix;\nvarying vec4 v_reflectionUv;\n#endif\n\nuniform vec2 u_offset2d;\nuniform vec2 u_scale2d;\nuniform mat4 u_mvp;\n\nvarying vec3 v_viewNormal;\nvarying vec3 v_viewPosition;\n\nvarying vec3 v_worldPosition;\n\n#ifndef IS_REFLECTION\nvarying vec4 v_videoPosition;\n#endif\n\nvoid main () {\n    v_viewNormal = normalMatrix * normal;\n\n    v_worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;\n    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n    v_viewPosition = -mvPosition.xyz;\n    gl_Position = projectionMatrix * mvPosition;\n\n    #if defined(IS_BOTTOM)\n    v_uv = uv;\n    #endif\n\n    #ifdef IS_MODEL\n    v_color = color;\n    #endif\n    #ifdef IS_BOTTOM\n    v_uv2 = a_uv2;\n    #endif\n    #ifdef IS_PANEL\n    v_reflectionUv = u_reflectionTextureMatrix * vec4(position, 1.0);\n    #endif\n\n    #ifndef IS_REFLECTION\n    v_videoPosition = u_mvp * vec4(position, 1.0);\n    v_videoPosition.xy *= u_scale2d;\n    v_videoPosition.xy += u_offset2d * v_videoPosition.w;\n\n    gl_Position.xy *= u_scale2d;\n    gl_Position.xy += u_offset2d * gl_Position.w;\n\n    #endif\n\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "#define PHONG\n\n#if defined(IS_BOTTOM)\nuniform sampler2D u_normalTexture;\nvarying vec2 v_uv;\n#endif\n\n#ifdef IS_MODEL\nvarying vec3 v_color;\n#endif\n#ifdef IS_BOTTOM\nvarying vec2 v_uv2;\n#endif\n#ifdef IS_PANEL\nuniform sampler2D u_reflectionTexture;\nvarying vec4 v_reflectionUv;\n#endif\n\nuniform vec3 u_diffuse;\nuniform vec3 u_specular;\nuniform float u_shininess;\nuniform float u_opacity;\n\n#ifndef IS_REFLECTION\nuniform sampler2D u_videoTexture;\n#endif\n\nuniform float u_focusDistance;\nuniform float u_focusRange;\nuniform vec2 u_videoResolution;\nuniform vec2 u_resolution;\nuniform vec2 u_videoUvOffset;\nuniform vec2 u_timePixelUvClamp;\n\n#ifdef IS_REFLECTION\nuniform vec3 u_reflectionCameraPosition;\n#else\nuniform vec3 u_cameraPosition;\n#endif\nuniform vec3 u_lightPosition;\n\nuniform vec2 u_videoUvScale;\nuniform vec4 u_screenUvInfo;\n\nvarying vec3 v_worldPosition;\nvarying vec3 v_viewNormal;\nvarying vec3 v_viewPosition;\nvarying vec4 v_videoPosition;\n\n#include <common>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <dithering_pars_fragment>\n\n\n#include <getScatter>\n\nfloat blendScreen(float base, float blend) {\n    return 1.0-((1.0-base)*(1.0-blend));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend) {\n    return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend, float opacity) {\n    return (blendScreen(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n\n// #if defined(IS_MODEL) || defined(IS_BOTTOM)\n#if defined(IS_BOTTOM)\nvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec2 uv, float normalScale, float bias ) {\n    // Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988\n    vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n    vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n    vec2 st0 = dFdx( uv.st );\n    vec2 st1 = dFdy( uv.st );\n\n    float scale = sign( st1.t * st0.s - st0.t * st1.s ); // we do not care about the magnitude\n    scale *= float( gl_FrontFacing ) * 2.0 - 1.0;\n\n    vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n    vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n    vec3 N = normalize( surf_norm );\n\n    vec3 mapN = texture2D( u_normalTexture, uv, bias ).xyz * 2.0 - 1.0;\n    mapN.xy = vec2(normalScale) * mapN.xy;\n    mat3 tsn = mat3( S, T, N );\n    return normalize( tsn * mapN );\n}\n#endif\n\nvoid main () {\n\n    vec3 viewNormal = normalize(v_viewNormal);\n    vec3 vViewPosition = v_viewPosition;\n    vec3 normal = viewNormal;\n    #ifdef IS_REFLECTION\n    vViewPosition.x *= -1.0;\n    normal.x *= -1.0;\n    #endif\n    \n    float ao = 1.0 - smoothstep(2.0, -0.3, length(v_worldPosition * vec3(1.0, 5.0, 1.0)));\n\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = vec3(0.0);\n\n    float depthWeight = smoothstep(-3.0, -1.0, v_worldPosition.z);\n\n    BlinnPhongMaterial material;\n    material.diffuseColor = u_diffuse;\n    material.specularColor = u_specular * depthWeight;\n    material.specularShininess = u_shininess;\n    // material.specularStrength = 1.0;\n\n    #ifdef IS_MODEL\n    material.diffuseColor = v_color;\n    material.specularColor = v_color * 2.0;\n    #endif\n\n    #ifdef IS_BOTTOM\n        #ifndef IS_REFLECTION\n        material.specularShininess = 500.0;\n        material.specularStrength = 0.2;\n        #endif\n    normal = perturbNormal2Arb( -vViewPosition, normal, v_uv2 * 3.0, 0.2, normal.y );\n    normal = perturbNormal2Arb( -vViewPosition + normal * 0.05, normal, v_uv * 3.0, 0.35, 0.0 );\n    \n    #endif\n\n    material.specularShininess *= depthWeight;\n\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_end>\n\n    #ifdef IS_MODEL\n        #ifdef IS_REFLECTION\n        reflectedLight.directDiffuse *= 9.0;\n        #else\n        reflectedLight.directDiffuse *= 1.25;\n        #endif\n    #endif\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n\n    #ifdef IS_REFLECTION\n    vec3 cameraPosition = u_reflectionCameraPosition;\n    #else\n    vec3 cameraPosition = u_cameraPosition;\n    #endif\n\n    vec3 toCameraWorld = v_worldPosition - cameraPosition;\n    vec3 nToCameraWorldDir = normalize(toCameraWorld);\n    float toCameraDist = length(toCameraWorld);\n\n    vec3 color = outgoingLight * ao;\n\n    #ifndef IS_REFLECTION\n        #ifdef IS_PANEL\n        color *= 0.4;\n        color += texture2DProj(u_reflectionTexture, v_reflectionUv).rgb * 0.4;\n        #endif\n    #endif\n\n    float scatter = getScatter(cameraPosition, nToCameraWorldDir, u_lightPosition, toCameraDist);\n    #ifdef IS_REFLECTION\n        scatter *= 0.65;\n    #endif\n\n    color += scatter * pointLights[0].color;\n    \n    #ifndef IS_REFLECTION\n        vec2 uv = ((v_videoPosition.xy / v_videoPosition.w) * 0.5) / u_videoUvScale + 0.5;\n        uv = mix(uv, vec2(max(uv.x, u_timePixelUvClamp.x), min(uv.y, u_timePixelUvClamp.y)), step(uv.x, u_timePixelUvClamp.x) * step(u_timePixelUvClamp.y, uv.y));\n        color += texture2D(u_videoTexture, uv).rgb * 0.7;\n    #endif\n\n    #ifdef IS_REFLECTION\n    // color = vec3(1.0, 0.0, 0.0);\n    #endif\n    \n    gl_FragColor = vec4(dithering(color * u_opacity), 1.0);\n}\n";
}, function(canCreateDiscussions, model, $) {
  /**
   * @param {!Object} data
   * @return {undefined}
   */
  function create(data) {
    (object = data.scene.children[0].children[1]).add(data.scene.children[0].children[0]);
    object.animations = data.animations;
    if (!comp.useFloatPacking) {
      self.init(object);
    }
    object.material = new THREE.MeshBasicMaterial({
      color : 16722761,
      skinning : true,
      transparent : true,
      opacity : .15
    });
    /** @type {number} */
    object.renderOrder = 1;
    mixer = new THREE.AnimationMixer(object);
    /** @type {boolean} */
    (options = mixer.clipAction("Run")).clampWhenFinished = true;
    /** @type {number} */
    options.playScale = 1;
    /** @type {number} */
    options.weight = 1;
    options.play();
    (pause = mixer.clipAction("Jump")).setLoop(THREE.LoopOnce);
    /** @type {boolean} */
    pause.clampWhenFinished = true;
    /** @type {number} */
    pause.playScale = 1;
    /** @type {number} */
    pause.weight = 0;
    (play = mixer.clipAction("Slide")).setLoop(THREE.LoopOnce);
    /** @type {boolean} */
    play.clampWhenFinished = true;
    /** @type {number} */
    play.playScale = 1;
    /** @type {number} */
    play.weight = 0;
  }
  /**
   * @param {string} buffer
   * @return {undefined}
   */
  function init(buffer) {
    /** @type {number} */
    var offset = 0;
    /** @type {!Int16Array} */
    var a = new Int16Array(buffer, offset, 98304);
    /** @type {!Float32Array} */
    var classifications = new Float32Array(98304);
    /** @type {number} */
    var j = 0;
    /** @type {number} */
    var startLen = a.length;
    for (; j < startLen; j++) {
      /** @type {number} */
      classifications[j] = 4 * a[j] / 32768;
    }
    /** @type {number} */
    offset = offset + 196608;
    /** @type {!Int8Array} */
    var data = new Int8Array(buffer, offset, 98304);
    /** @type {number} */
    offset = offset + 98304;
    /** @type {!Uint8Array} */
    var typedArray = new Uint8Array(buffer, offset, 98304);
    /** @type {number} */
    offset = offset + 98304;
    /** @type {!Int16Array} */
    var buf = new Int16Array(buffer, offset, 131072);
    /** @type {!Float32Array} */
    var visible = new Float32Array(131072);
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var l = buf.length;
    for (; i < l; i++) {
      /** @type {number} */
      visible[i] = 4 * buf[i] / 32768;
    }
    /** @type {number} */
    offset = offset + 262144;
    /** @type {!Uint8Array} */
    var colors = new Uint8Array(buffer, offset, 131072);
    /** @type {number} */
    offset = offset + 131072;
    (geometry = new THREE.BufferGeometry).setAttribute("position", new THREE.BufferAttribute(classifications, 3));
    geometry.setAttribute("normal", new THREE.BufferAttribute(data, 3, true));
    geometry.setAttribute("color", new THREE.BufferAttribute(typedArray, 3, true));
    geometry.setAttribute("skinWeight", new THREE.BufferAttribute(visible, 4));
    geometry.setAttribute("skinIndex", new THREE.BufferAttribute(colors, 4));
    /** @type {!Uint16Array} */
    var indices = new Uint16Array(65024);
    /** @type {number} */
    var old_alloc_size = 0;
    /** @type {number} */
    var start = 0;
    for (; old_alloc_size < 256; old_alloc_size++) {
      /** @type {number} */
      var j = 0;
      for (; j < 127; j++) {
        /** @type {number} */
        indices[start + 0] = 128 * old_alloc_size + j;
        /** @type {number} */
        indices[start + 1] = 128 * old_alloc_size + j + 1;
        /** @type {number} */
        start = start + 2;
      }
    }
    geometry.setIndex(new THREE.BufferAttribute(indices, 1));
  }
  /**
   * @return {undefined}
   */
  function publish() {
    if (!comp.useFloatPacking) {
      self.emit();
    }
    /** @type {number} */
    mesh.material.uniforms.u_emitRatio.value = 1;
  }
  var THREE = $(0);
  var comp = $(3);
  var tree = $(1);
  var console = $(2);
  var o = $(4);
  var self = $(164);
  /**
   * @param {!Object} target
   * @return {undefined}
   */
  model.preInit = function(target) {
    /** @type {!Object} */
    _this = target;
    tree.loader.add(comp.assetPath + "visuals/aboutHero/female.glb", {
      type : "any",
      weight : 1,
      hasLoading : true,
      loadFunc : tree.GLTFLoadFunc,
      onLoad : create
    });
    tree.loader.add(comp.assetPath + "visuals/aboutHero/buffers.buf", {
      type : "xhr",
      responseType : "arraybuffer",
      weight : 1,
      onLoad : init
    });
  };
  /**
   * @return {undefined}
   */
  model.init = function() {
    module = new THREE.Scene;
    (scene = model.container = new THREE.Object3D).add(object);
    /** @type {number} */
    object.rotation.x = .5 * Math.PI;
    (mesh = new THREE.LineSegments(geometry, new THREE.ShaderMaterial({
      uniforms : {
        u_time : {
          value : 0
        },
        u_isReflection : {
          value : 0
        },
        u_emitRatio : {
          value : 0
        },
        u_boost : {
          value : 1
        }
      },
      vertexShader : $(170),
      fragmentShader : $(171),
      vertexColors : true,
      skinning : true,
      transparent : true,
      blending : THREE.NoBlending
    }))).updateMatrixWorld = THREE.SkinnedMesh.prototype.updateMatrixWorld;
    mesh.bindMatrix = object.bindMatrix;
    mesh.bindMode = object.bindMode;
    mesh.bindMatrixInverse = object.bindMatrixInverse;
    /** @type {boolean} */
    mesh.isSkinnedMesh = true;
    mesh.skeleton = object.skeleton;
    mesh.rotation.set(.5 * Math.PI, 0, 0);
    THREE.SkinnedMesh.prototype.normalizeSkinWeights.call(mesh);
    /** @type {boolean} */
    mesh.needsRenderReflection = true;
    /** @type {number} */
    mesh.renderOrder = 0;
    scene.add(mesh);
    if (!comp.useFloatPacking) {
      scene.add(self.mesh);
    }
  };
  /**
   * @param {number} isPlaying
   * @return {undefined}
   */
  model.playMixedAction = function(isPlaying) {
    if (!action) {
      /** @type {number} */
      startedAt = isPlaying ? .08 : .2;
      (action = isPlaying ? pause : play).reset();
      action.play();
    }
  };
  /** @type {function(): undefined} */
  model.emit = publish;
  /**
   * @param {number} e
   * @return {undefined}
   */
  model.update = function(e) {
    mesh.material.uniforms.u_time.value += e * model.wireSpeed;
    mesh.material.uniforms.u_emitRatio.value *= 0 === e ? 1 : .9;
    if ((avgError = avgError + e) > .25) {
      /** @type {number} */
      avgError = 0;
      publish();
    }
    /** @type {number} */
    var t = 0;
    if (action) {
      /** @type {number} */
      var time = .5 * action._clip.duration;
      var weight = console.smoothstep(time, time - startedAt, Math.abs(action.time - time));
      /** @type {number} */
      options.weight = 1 - weight;
      action.weight = weight;
      /** @type {number} */
      options.weight = Math.pow(options.weight, .5);
      if (1 === weight) {
        /** @type {number} */
        options.time = action === pause ? .4 : .35;
      }
      /** @type {number} */
      t = action.time / action._clip.duration;
      /** @type {number} */
      _this.actionSpeedScale = .6 + .4 * Math.cos(Math.pow(t, .75) * Math.PI * 2);
      if (1 == t) {
        /** @type {null} */
        action = null;
      }
    } else {
      /** @type {number} */
      options.weight = 1;
      /** @type {number} */
      pause.weight = 0;
      /** @type {number} */
      play.weight = 0;
    }
    /** @type {string} */
    model._actionId = action ? action === pause ? "jump" : "slide" : "";
    /** @type {number} */
    model._actionRatio = t;
    mixer.update(e);
    if (!comp.useFloatPacking) {
      self.update(e);
    }
  };
  /**
   * @return {undefined}
   */
  model.renderWires = function() {
    var r = o.renderer;
    var camera = o.getColorState();
    /** @type {boolean} */
    r.autoClear = false;
    mesh.material.blending = THREE.AdditiveBlending;
    /** @type {number} */
    mesh.material.uniforms.u_boost.value = .2;
    module.add(mesh);
    o.renderer.render(module, _this.camera);
    scene.add(mesh);
    /** @type {number} */
    mesh.material.uniforms.u_boost.value = 1;
    mesh.material.blending = THREE.NoBlending;
    o.setColorState(camera);
  };
  /** @type {number} */
  model.wireSpeed = 1.75;
  /** @type {number} */
  model._actionRatio = 0;
  /** @type {string} */
  model._actionId = "";
  /** @type {null} */
  var scene = model.container = null;
  var module = void 0;
  var _this = void 0;
  var object = void 0;
  var geometry = void 0;
  var mesh = void 0;
  var mixer = void 0;
  var options = void 0;
  var pause = void 0;
  var play = void 0;
  var action = void 0;
  /** @type {number} */
  var startedAt = 0;
  /** @type {number} */
  var avgError = 1;
}, function(mixin, canCreateDiscussions, require) {
  /**
   * @return {undefined}
   */
  function Mirror() {
    this.renderTarget = new THREE.WebGLRenderTarget(1, 1, {
      minFilter : THREE.LinearFilter,
      magFilter : THREE.LinearFilter,
      format : THREE.RGBFormat,
      stencilBuffer : false
    });
    this.textureMatrix = new THREE.Matrix4;
    /** @type {number} */
    this.clearColor = 0;
    /** @type {number} */
    this.clipBias = 0;
    if (!data) {
      data = new THREE.PerspectiveCamera;
      model = new THREE.Plane;
      point = new THREE.Vector3;
      start = new THREE.Vector3;
      pos = new THREE.Vector3;
      vector = new THREE.Matrix4;
      position = new THREE.Vector3;
      vec = new THREE.Vector4;
      target = new THREE.Vector3;
      view = new THREE.Vector3;
      b = new THREE.Vector4;
    }
  }
  var THREE = require(0);
  var extend = require(6);
  var o = require(36);
  require(12);
  var s = Mirror.prototype;
  /** @type {function(): undefined} */
  mixin.exports = Mirror;
  /**
   * @param {number} width
   * @param {number} height
   * @return {undefined}
   */
  s.setSize = function(width, height) {
    this.renderTarget.setSize(width, height);
  };
  /**
   * @param {!Object} p
   * @param {!Object} transform
   * @param {!Object} object
   * @param {?} obj
   * @return {undefined}
   */
  s.update = function(p, transform, object, obj) {
    if (start.setFromMatrixPosition(obj.matrixWorld), pos.setFromMatrixPosition(object.matrixWorld), vector.extractRotation(obj.matrixWorld), point.set(0, 0, 1), point.applyMatrix4(vector), target.subVectors(start, pos), target.dot(point) > 0) {
      return;
    }
    target.reflect(point).negate();
    target.add(start);
    vector.extractRotation(object.matrixWorld);
    position.set(0, 0, -1);
    position.applyMatrix4(vector);
    position.add(pos);
    view.subVectors(start, position);
    view.reflect(point).negate();
    view.add(start);
    data.position.copy(target);
    data.up.set(0, 1, 0);
    data.up.applyMatrix4(vector);
    data.up.reflect(point);
    data.lookAt(view);
    data.near = object.near;
    data.far = object.far;
    data.updateMatrixWorld();
    data.projectionMatrix.copy(object.projectionMatrix);
    this.textureMatrix.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1);
    this.textureMatrix.multiply(data.projectionMatrix);
    this.textureMatrix.multiply(data.matrixWorldInverse);
    this.textureMatrix.multiply(obj.matrixWorld);
    model.setFromNormalAndCoplanarPoint(point, start);
    model.applyMatrix4(data.matrixWorldInverse);
    vec.set(model.normal.x, model.normal.y, model.normal.z, model.constant);
    var matrix = data.projectionMatrix;
    /** @type {number} */
    b.x = (Math.sign(vec.x) + matrix.elements[8]) / matrix.elements[0];
    /** @type {number} */
    b.y = (Math.sign(vec.y) + matrix.elements[9]) / matrix.elements[5];
    /** @type {number} */
    b.z = -1;
    /** @type {number} */
    b.w = (1 + matrix.elements[10]) / matrix.elements[14];
    vec.multiplyScalar(2 / vec.dot(b));
    matrix.elements[2] = vec.x;
    matrix.elements[6] = vec.y;
    /** @type {number} */
    matrix.elements[10] = vec.z + 1 - this.clipBias;
    matrix.elements[14] = vec.w;
    var texture = p.getRenderTarget();
    /** @type {!Array} */
    var a = [];
    /** @type {!Array} */
    var ids = [];
    transform.traverseVisible(function(e) {
      if (e.material) {
        if (e.needsRenderReflection) {
          var u = e.material.uniforms;
          if (u && u.u_isReflection) {
            /** @type {number} */
            u.u_isReflection.value = 1;
            ids.push(u.u_isReflection);
          }
        } else {
          /** @type {boolean} */
          e.visible = false;
          a.push(e);
        }
      }
    });
    /** @type {boolean} */
    p.xr.enabled = false;
    /** @type {boolean} */
    obj.visible = false;
    p.setClearColor(this.clearColor, 1);
    p.setRenderTarget(this.renderTarget);
    p.clear();
    p.render(transform, data);
    p.setRenderTarget(null);
    /** @type {boolean} */
    obj.visible = true;
    /** @type {number} */
    var j = 0;
    /** @type {number} */
    var startLen = a.length;
    for (; j < startLen; j++) {
      /** @type {boolean} */
      a[j].visible = true;
    }
    /** @type {number} */
    var g = 0;
    /** @type {number} */
    var i = ids.length;
    for (; g < i; g++) {
      /** @type {number} */
      ids[g].value = 0;
    }
    p.setRenderTarget(texture);
  };
  /**
   * @param {!Object} shader
   * @return {undefined}
   */
  s.injectUniforms = function(shader) {
    extend(shader.uniforms, {
      u_reflectionTexture : {
        value : this.renderTarget.texture
      },
      u_reflectionTextureMatrix : {
        value : this.textureMatrix
      }
    });
  };
  /**
   * @param {?} data
   * @return {undefined}
   */
  s.injectShaders = function(data) {
    var i = data.vertexShader;
    var s = data.fragmentShader;
    i = o.insertBefore(i, "void main() {", "\nuniform mat4 u_reflectionTextureMatrix;\nvarying vec4 v_reflectionCoord;\n");
    i = o.insertAfter(i, "project_vertex", "\nv_reflectionCoord = u_reflectionTextureMatrix * vec4( transformed, 1.0 );\n", true);
    s = o.insertBefore(s, "void main() {", "\nuniform sampler2D u_reflectionTexture;\nvarying vec4 v_reflectionCoord;\n");
    s = o.replace(s, "vec4 diffuseColor = vec4( diffuse, opacity );", "\nvec4 diffuseColor = vec4( diffuse * texture2DProj(u_reflectionTexture, v_reflectionCoord).rgb, opacity );\n");
    data.vertexShader = i;
    data.fragmentShader = s;
  };
  var data = void 0;
  var model = void 0;
  var point = void 0;
  var start = void 0;
  var pos = void 0;
  var vector = void 0;
  var position = void 0;
  var vec = void 0;
  var target = void 0;
  var view = void 0;
  var b = void 0;
}, function(context, canCreateDiscussions, require) {
  /**
   * @return {undefined}
   */
  function init() {
    this.position = new THREE.Vector3;
    this.rotation = new THREE.Quaternion;
    this.scale = new THREE.Vector3(1, 1, 1);
    this.matrix = new THREE.Matrix4;
    /** @type {boolean} */
    this.enablePositionNoise = true;
    /** @type {boolean} */
    this.enableRotationNoise = true;
    /** @type {number} */
    this.positionFrequency = 2E-4;
    /** @type {number} */
    this.rotationFrequency = 3E-4;
    /** @type {number} */
    this.positionAmplitude = .1;
    /** @type {number} */
    this.rotationAmplitude = .1;
    this.positionScale = new THREE.Vector3(1, 1, 1);
    this.rotationScale = new THREE.Vector3(1, 1, 0);
    /** @type {number} */
    this.positionFractalLevel = 3;
    /** @type {number} */
    this.rotationFractalLevel = 3;
    /** @type {!Float32Array} */
    this.times = new Float32Array(6);
    this.rehash();
  }
  /**
   * @param {number} d
   * @param {number} i
   * @return {?}
   */
  function f(d, i) {
    /** @type {number} */
    var b = 0;
    /** @type {number} */
    var c = .5;
    /** @type {number} */
    var whichFriend = 0;
    for (; whichFriend < i; whichFriend++) {
      /** @type {number} */
      b = b + c * node.getVal(d);
      /** @type {number} */
      d = d * 2;
      /** @type {number} */
      c = c * .5;
    }
    return b;
  }
  var THREE = require(0);
  /** @type {function(): undefined} */
  context.exports = init;
  var body = init.prototype;
  /**
   * @return {undefined}
   */
  body.rehash = function() {
    /** @type {number} */
    var i = 0;
    for (; i < 6; i++) {
      /** @type {number} */
      this.times[i] = -1E4 * Math.random();
    }
  };
  /**
   * @param {number} a
   * @return {undefined}
   */
  body.update = function(a) {
    var i;
    if (a = void 0 === a ? 1E3 / 60 : a, this.enablePositionNoise) {
      /** @type {number} */
      i = 0;
      for (; i < 3; i++) {
        this.times[i] += this.positionFrequency * a;
      }
      t.set(f(this.times[0], this.positionFractalLevel), f(this.times[1], this.positionFractalLevel), f(this.times[2], this.positionFractalLevel));
      t.multiply(this.positionScale);
      t.multiplyScalar(this.positionAmplitude * averageMass2);
      this.position.copy(t);
    }
    if (this.enableRotationNoise) {
      /** @type {number} */
      i = 0;
      for (; i < 3; i++) {
        this.times[i + 3] += this.rotationFrequency * a;
      }
      t.set(f(this.times[3], this.rotationFractalLevel), f(this.times[4], this.rotationFractalLevel), f(this.times[5], this.rotationFractalLevel));
      t.multiply(this.rotationScale);
      t.multiplyScalar(this.rotationAmplitude * averageMass2);
      target.set(t.x, t.y, t.z);
      this.rotation.setFromEuler(target);
    }
    this.matrix.compose(this.position, this.rotation, this.scale);
  };
  var target = new THREE.Euler;
  var t = new THREE.Vector3;
  /** @type {number} */
  var averageMass2 = 1 / .75;
  var node = new function() {
    /** @type {number} */
    var c = 1;
    /** @type {number} */
    var streetImgWidth = 1;
    /** @type {!Array} */
    var v = [];
    /** @type {number} */
    var i = 0;
    for (; i < 256; ++i) {
      v.push(Math.random());
    }
    /**
     * @param {number} scale
     * @param {number} start
     * @param {number} end
     * @return {?}
     */
    var sin = function(scale, start, end) {
      return scale * (1 - end) + start * end;
    };
    return {
      getVal : function(scale) {
        /** @type {number} */
        var width = scale * streetImgWidth;
        /** @type {number} */
        var dx = Math.floor(width);
        /** @type {number} */
        var x = width - dx;
        /** @type {number} */
        var cnEnd = x * x * (3 - 2 * x);
        /** @type {number} */
        var i = 255 & dx;
        /** @type {number} */
        var endNode = i + 1 & 255;
        return sin(v[i], v[endNode], cnEnd) * c;
      },
      setAmplitude : function(value) {
        /** @type {number} */
        c = value;
      },
      setScale : function(maxImgWidth) {
        /** @type {number} */
        streetImgWidth = maxImgWidth;
      }
    };
  };
}, function(canCreateDiscussions, that, require) {
  var THREE = require(0);
  var defaults = require(6);
  var TagHourlyStat = require(61);
  var platform = require(5);
  var options = require(1);
  var mesh = require(4);
  var path = require(12);
  /**
   * @return {undefined}
   */
  that.preInit = function() {
  };
  /**
   * @param {!Object} options
   * @return {undefined}
   */
  that.init = function(options) {
    /** @type {!Object} */
    b = options;
    that.container = new THREE.Object3D;
    /** @type {boolean} */
    that.container.visible = false;
    (geometry = new THREE.ConeBufferGeometry(1, 1, 32)).translate(0, -.5, 0);
    geometry.rotateX(-Math.PI / 2);
    target = new THREE.WebGLRenderTarget(1, 1);
    version = new THREE.WebGLRenderTarget(1, 1);
    cookies = {
      u_depthTexture : TagHourlyStat.sharedUniforms.u_depthTexture,
      u_visualUvInfo : options.visualUvInfoUniform,
      u_cameraPosition : {
        value : options.cameraPosition
      },
      u_resolution : {
        value : new THREE.Vector2
      },
      u_projectionViewInverse : {
        value : new THREE.Matrix4
      },
      u_noiseTime : {
        value : 0
      },
      u_time : {
        value : 0
      }
    };
    postLi = new THREE.ShaderMaterial({
      uniforms : THREE.UniformsUtils.merge([THREE.UniformsLib.lights]),
      vertexShader : require(190),
      fragmentShader : require(191),
      transparent : true,
      depthWrite : false,
      blending : THREE.CustomBlending,
      blendSrc : THREE.OneFactor,
      blendDst : THREE.OneFactor,
      blendEquation : THREE.AddEquation,
      blendSrcAlpha : THREE.OneFactor,
      blendDstAlpha : THREE.ZeroFactor,
      blendEquationAlpha : THREE.AddEquation
    });
    (material = new THREE.MeshDepthMaterial).depthFunc = THREE.LessEqualDepth;
    /** @type {boolean} */
    material.depthTest = true;
    /** @type {boolean} */
    material.depthWrite = true;
    /** @type {boolean} */
    material.transparent = true;
    material.blending = THREE.NoBlending;
    material.side = THREE.BackSide;
    /** @type {boolean} */
    var mat = mesh.MAX_VARYING_VECTORS > 8;
    item = new THREE.RawShaderMaterial({
      uniforms : {
        u_texture : {
          value : null
        },
        u_delta : {
          value : new THREE.Vector2
        }
      },
      vertexShader : mat ? mesh.precisionPrefix + require(35) : mesh.vertexShader,
      fragmentShader : mesh.precisionPrefix + require(192),
      blending : THREE.NoBlending,
      transparent : false,
      defines : {
        USE_VARYING : mat
      }
    });
    x = new THREE.Scene;
    /** @type {boolean} */
    (l = new THREE.Mesh(mesh.triGeom, new THREE.RawShaderMaterial({
      uniforms : {
        u_texture : {
          value : target.texture
        },
        u_resolution : {
          value : b.resolution
        }
      },
      depthTest : false,
      depthWrite : false,
      transparent : true,
      blending : THREE.CustomBlending,
      blendSrc : THREE.OneFactor,
      blendDst : THREE.OneFactor,
      blendEquation : THREE.AddEquation,
      blendSrcAlpha : THREE.OneFactor,
      blendDstAlpha : THREE.ZeroFactor,
      blendEquationAlpha : THREE.AddEquation,
      vertexShader : mesh.vertexShader,
      fragmentShader : mesh.precisionPrefix + require(193)
    }))).frustumCulled = false;
    x.add(l);
    vector = new THREE.Vector3;
    matrix = new THREE.Matrix4;
  };
  /**
   * @param {!Object} o
   * @return {undefined}
   */
  that.addToSpotLight = function(o) {
    var object = new THREE.Mesh(geometry, postLi.clone());
    /** @type {boolean} */
    object.frustumCulled = false;
    defaults(object.material.uniforms, cookies);
    /** @type {boolean} */
    object.material.lights = true;
    object.material.defines = {
      MAX_RAY_STEP : platform.isMac || platform.isMobile ? 16 : 32,
      SPOTLIGHT_INDEX : addressCount
    };
    /** @type {number} */
    object.renderOrder = -1E4;
    /** @type {boolean} */
    object.isFog = true;
    /** @type {boolean} */
    object.receiveShadow = true;
    /** @type {!Object} */
    object.spotLight = o;
    object.customDepthMaterial = material;
    that.container.add(object);
    objectsOpaque.push(object);
    addressCount++;
  };
  /**
   * @param {number} el
   * @param {number} type
   * @param {number} w
   * @param {number} h
   * @return {undefined}
   */
  that.resize = function(el, type, w, h) {
    target.setSize(w, h);
    cookies.u_resolution.value.set(w, h);
  };
  /**
   * @param {number} value
   * @param {!Object} object
   * @param {!Object} camera
   * @return {undefined}
   */
  that.update = function(value, object, camera) {
    matrix.getInverse(camera.projectionMatrix);
    cookies.u_projectionViewInverse.value.multiplyMatrices(camera.matrixWorld, matrix);
    /** @type {number} */
    cookies.u_noiseTime.value = (cookies.u_noiseTime.value + value) % 2.142;
    cookies.u_time.value += value;
    /** @type {number} */
    var iAddressLoop = 0;
    for (; iAddressLoop < addressCount; iAddressLoop++) {
      var _this = objectsOpaque[iAddressLoop];
      var light = _this.spotLight;
      _this.position.setFromMatrixPosition(light.matrixWorld);
      vector.setFromMatrixPosition(light.target.matrixWorld);
      _this.lookAt(vector);
      /** @type {number} */
      var start = Math.tan(light.angle) * light.distance;
      _this.scale.set(start, start, light.distance).multiplyScalar(2);
    }
    /** @type {!Array} */
    var h = [];
    object.traverse(function(tree) {
      if (tree.material && !tree.isFog && tree.visible) {
        h.push(tree);
        /** @type {boolean} */
        tree.visible = false;
      }
    });
    var r = mesh.getColorState();
    /** @type {boolean} */
    that.container.visible = true;
    options.renderer.setClearColor(0, 1);
    options.renderer.setRenderTarget(target);
    options.renderer.clear();
    options.renderer.render(object, camera);
    options.renderer.setRenderTarget(null);
    /** @type {boolean} */
    that.container.visible = false;
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var hlen = h.length;
    for (; i < hlen; i++) {
      var t = h[i];
      /** @type {boolean} */
      t.visible = true;
    }
    path.blur(item, .25, 2, 1, target, version);
    path.blur(item, .5, 2, 1, target, version);
    path.blur9(1, 1, target, version);
    var renderer = options.renderer;
    /** @type {boolean} */
    renderer.autoClearColor = false;
    /** @type {boolean} */
    renderer.autoClearDepth = false;
    renderer.setRenderTarget(null);
    renderer.setScissorTest(true);
    renderer.setViewport(0, options.height - b.top - b.height, options.width, b.height);
    renderer.setScissor(0, options.height - b.top - b.height, options.width, b.height);
    renderer.render(x, camera);
    renderer.setScissorTest(false);
    renderer.setRenderTarget(null);
    mesh.setColorState(r);
  };
  /** @type {null} */
  that.container = null;
  var l = void 0;
  var b = void 0;
  var x = void 0;
  var geometry = void 0;
  var postLi = void 0;
  var material = void 0;
  var item = void 0;
  /** @type {!Array} */
  var objectsOpaque = [];
  var vector = void 0;
  var matrix = void 0;
  var target = void 0;
  var version = void 0;
  /** @type {number} */
  var addressCount = 0;
  var cookies = {};
}, function(canCreateDiscussions, viewManager, require) {
  var THREE = require(0);
  var renderer = (require(6), require(1));
  var self = require(4);
  /**
   * @return {undefined}
   */
  viewManager.init = function() {
    (material = new THREE.MeshDepthMaterial).depthPacking = THREE.RGBADepthPacking;
    /** @type {boolean} */
    material.transparent = true;
    material.blending = THREE.NoBlending;
    renderTarget = new THREE.WebGLRenderTarget(1, 1, {
      minFilter : THREE.NearestFilter,
      magFilter : THREE.NearestFilter
    });
    /** @type {boolean} */
    (a = new THREE.Mesh(self.triGeom, new THREE.RawShaderMaterial({
      uniforms : {
        u_vertZ : {
          value : 1
        },
        u_color : {
          value : new THREE.Vector4(1, 1, 1, 1)
        }
      },
      depthFunc : THREE.AlwaysDepth,
      transparent : true,
      blending : THREE.NoBlending,
      vertexShader : self.precisionPrefix + require(189),
      fragmentShader : self.clearMaterial.fragmentShader
    }))).frustumCulled = false;
    /** @type {number} */
    a.renderOrder = -1E4;
    ChapterTimeEnd.u_depthTexture = {
      value : renderTarget.texture
    };
  };
  /**
   * @param {number} prop
   * @param {number} val
   * @param {number} width
   * @param {number} height
   * @return {undefined}
   */
  viewManager.resize = function(prop, val, width, height) {
    renderTarget.setSize(width, height);
  };
  /**
   * @param {!Object} obj
   * @param {!Object} value
   * @param {!Object} j
   * @return {undefined}
   */
  viewManager.render = function(obj, value, j) {
    /** @type {!Array} */
    var patches = [];
    /** @type {!Array} */
    var result = [];
    value.traverse(function(face) {
      if (face.material) {
        if (face.needsRenderDepth) {
          var color = face.customDepthMaterial || material;
          face.originalMaterial = face.material;
          face.material = color;
          patches.push(face);
        } else {
          if (face.visible) {
            result.push(face);
            /** @type {boolean} */
            face.visible = false;
          }
        }
      }
    });
    var View = self.getColorState();
    value.add(a);
    renderer.renderer.setRenderTarget(renderTarget);
    renderer.renderer.render(value, j);
    renderer.renderer.setRenderTarget(null);
    value.remove(a);
    self.setColorState(View);
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var patchLen = patches.length;
    for (; i < patchLen; i++) {
      var pointcloud = patches[i];
      pointcloud.material = pointcloud.originalMaterial;
    }
    /** @type {number} */
    var techName = 0;
    /** @type {number} */
    var trlen = result.length;
    for (; techName < trlen; techName++) {
      var p = result[techName];
      /** @type {boolean} */
      p.visible = true;
    }
  };
  var renderTarget = void 0;
  var material = void 0;
  var a = void 0;
  var ChapterTimeEnd = viewManager.sharedUniforms = {};
}, function(canCreateDiscussions, data, require) {
  /**
   * @return {undefined}
   */
  function start() {
    document.documentElement.classList.add("use-webgl");
    self.loader.add("typekitFonts", {
      type : "any",
      loadFunc : function(res, e) {
        model.load({
          custom : {
            families : ["GT-Sectra-Fine-Bold:n7", "GT-Sectra-Fine:n4", "nb_akademie_medium:n7", "nb_akademie_light:n4"]
          },
          timeout : 4E3,
          active : e,
          inactive : e
        });
      }
    });
    /** @type {boolean} */
    EffectChain.USE_GUI = false;
    self.simplex = new GlitchTextLetter;
    x.init();
    shape.init();
    canvas.init();
    dashboardLogger.init();
    p.preInit();
    _ = new three.Vector2;
    self.prevMouse = new three.Vector2(0, 0);
    self.mouse = new three.Vector2(0, 0);
    self.mouseVel = new three.Vector2(0, 0);
    self.elasticMouse = new three.Vector2(0, 0);
    self.elasticMouseVel = new three.Vector2(0, 0);
    self.easedMouse = new three.Vector2(0, 0);
    self.easedMouseVel = new three.Vector2(0, 0);
    self.mobileOrientation = new three.Vector4;
    window.addEventListener("resize", draw);
    window.addEventListener("orientationchange", draw);
    draw();
    shape.onDowned.add(build);
    shape.onMoved.add(build);
    if (!requestId) {
      /** @type {boolean} */
      data.isRendering = true;
      /** @type {number} */
      self.currentTime = +new Date;
      render();
    }
    canvas.onLoadCompleted.addOnce(init, null, 1024);
    canvas.start(false);
    canvas.show();
  }
  /**
   * @return {undefined}
   */
  function init() {
    if (self.isSupportWebGL) {
      opts.preInit();
      opts.init();
    }
    self.resolution = new three.Vector2;
    params.preInit();
    mixin.preInit();
    v.preInit();
    reductio_sum.add(true);
    p.init();
    /** @type {boolean} */
    P = true;
    draw();
    update();
    canvas.onLoadCompleted.addOnce(callback, null, 1024);
    canvas.start(true);
  }
  /**
   * @return {undefined}
   */
  function callback() {
    if (self.isSupportWebGL) {
      opts.start();
    }
    params.init();
    mixin.init();
    v.init();
    draw();
    update();
    canvas.onHideStarted.add(draw);
    /** @type {boolean} */
    self.hasInitialized = true;
  }
  /**
   * @param {!Object} a
   * @return {undefined}
   */
  function build(a) {
    /** @type {number} */
    var c = self.fullHeight - self.height;
    self.mouse.set(a.x, a.y - c);
    if (!platform.isMobile && M) {
      self.prevMouse.copy(self.mouse);
      self.elasticMouse.copy(self.mouse);
      self.easedMouse.copy(self.mouse);
    }
    /** @type {boolean} */
    M = false;
  }
  /**
   * @param {?} redraw_flag
   * @return {undefined}
   */
  function draw(redraw_flag) {
    /** @type {number} */
    var w = self.width = window.innerWidth;
    /** @type {number} */
    var h = self.fullHeight = window.innerHeight;
    /** @type {number} */
    var i = self.height = w > 1280 ? h : h - 70;
    if (canvas.resize(w, h), document.documentElement.style.setProperty("--vh", .01 * i + "px"), P) {
      if (redraw_flag) {
        /** @type {number} */
        var x = w >> 1;
        /** @type {number} */
        var j = i >> 1;
        self.prevMouse.set(x, j);
        self.mouse.copy(self.prevMouse);
        self.elasticMouse.copy(self.prevMouse);
        self.easedMouse.copy(self.prevMouse);
        self.mouseVel.set(0, 0);
        self.elasticMouseVel.set(0, 0);
        self.easedMouseVel.set(0, 0);
      }
      self.resolution.set(w, i);
      if (self.isSupportWebGL) {
        opts.resize(w, i);
      }
      p.resize(w, i);
      mixin.resize(w, i);
      v.resize(w, i);
      p.updateScrollPane(w, i);
      params.resize(w, h);
      graph.resize(w, h);
    }
    update();
  }
  /**
   * @return {undefined}
   */
  function render() {
    /** @type {number} */
    requestId = requestAnimationFrame(render);
    update();
  }
  /**
   * @return {undefined}
   */
  function update() {
    /** @type {number} */
    var currentTime = +new Date;
    /** @type {number} */
    var d = self.deltaTime = Math.min(.04, (currentTime - self.currentTime) / 1E3);
    /** @type {number} */
    self.currentTime = currentTime;
    /** @type {number} */
    self.deltaRatio = 60 * d;
    self.time += d;
    canvas.update(d);
    _.copy(self.mouse).sub(self.elasticMouse).multiplyScalar(.15);
    self.elasticMouseVel.add(_);
    self.elasticMouseVel.multiplyScalar(.8);
    self.elasticMouse.add(self.elasticMouseVel);
    self.easedMouse.add(self.easedMouseVel.copy(self.mouse).sub(self.easedMouse).multiplyScalar(.15));
    self.mouseVel.copy(self.mouse).sub(self.prevMouse);
    if (P) {
      p.update(d);
      params.update(d);
      v.update(d);
      mixin.update(d);
      s.update(d);
      p.checkReplaceHistoryState();
      graph.update(d);
      x.update(d);
      r.update(d);
      dashboardLogger.update(d);
    }
    self.onUpdateEnded.dispatch();
    self.prevMouse.copy(self.mouse);
  }
  var global;
  var platform = require(5);
  var EffectChain = require(3);
  var self = require(1);
  var reductio_sum = require(70);
  var shape = require(9);
  var p = require(41);
  var r = require(25);
  var x = require(16);
  var params = require(26);
  var mixin = require(48);
  var v = require(186);
  var canvas = require(19);
  var graph = require(27);
  var s = require(51);
  var dashboardLogger = require(28);
  var opts = require(208);
  var GlitchTextLetter = require(228);
  var three = require(0);
  var model = require(229);
  var requestId = void 0;
  var _ = void 0;
  /** @type {boolean} */
  var M = true;
  /** @type {boolean} */
  var P = false;
  /** @type {!Window} */
  global = window;
  self.isSupportWebGL = opts.checkIsSupported(self.canvas = document.getElementById("canvas"));
  if ("Promise" in global && self.isSupportWebGL) {
    start();
  } else {
    /** @type {boolean} */
    self.isSupportWebGL = false;
    document.documentElement.classList.add("no-webgl");
    start();
  }
}, function(u, canCreateDiscussions, require) {
  /**
   * @param {!Object} b
   * @return {undefined}
   */
  function o(b) {
    if (b) {
      proto.constructor.apply(this, arguments);
    }
  }
  var Element = require(14);
  var r = require(7);
  /** @type {function(!Object): undefined} */
  u.exports = o;
  /** @type {string} */
  o.type = "jsonp";
  /** @type {!Array} */
  o.extensions = [];
  r.register(o);
  /**
   * @param {!Object} value
   * @return {?}
   */
  o.retrieve = function(value) {
    return "string" == typeof value && value.indexOf("=") > -1 && [value];
  };
  var proto = Element.prototype;
  var m = o.prototype = new Element;
  /** @type {function(!Object): undefined} */
  m.constructor = o;
  /**
   * @param {string} module
   * @return {undefined}
   */
  m.load = function(module) {
    proto.load.apply(this, arguments);
    var _this = this;
    var hashIndex = this.url.lastIndexOf("=") + 1;
    var uri = this.url.substr(0, hashIndex);
    var id = this.url.substr(hashIndex);
    if (0 === id.length) {
      /** @type {string} */
      id = "_jsonp" + (new Date).getTime() + ~~(1E8 * Math.random());
      /** @type {string} */
      this.jsonpCallback = module;
    } else {
      this.jsonpCallback = this.jsonpCallback || window[id];
    }
    /**
     * @param {string} devices
     * @return {undefined}
     */
    window[id] = function(devices) {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      /** @type {string} */
      _this.content = devices;
      _this._onLoad();
    };
    /** @type {!Element} */
    var script = document.createElement("script");
    /** @type {string} */
    script.type = "text/javascript";
    script.src = uri + id;
    document.getElementsByTagName("head")[0].appendChild(script);
  };
}, function(module$jscomp$0, exports$jscomp$0, __webpack_require__$jscomp$0) {
  /**
   * @param {!Object} dof
   * @return {undefined}
   */
  function JSONItem$jscomp$0(dof) {
    if (dof) {
      _super$jscomp$0.constructor.apply(this, arguments);
    }
  }
  /**
   * @return {undefined}
   */
  function _onLoad$jscomp$0() {
    if (!this.content) {
      /** @type {*} */
      this.content = window.JSON && window.JSON.parse ? JSON.parse(this.xmlhttp.responseText.toString()) : eval(this.xmlhttp.responseText.toString());
    }
    _super$jscomp$0._onLoad.call(this);
  }
  var TextItem$jscomp$0 = __webpack_require__$jscomp$0(38);
  var quickLoader$jscomp$0 = __webpack_require__$jscomp$0(7);
  /** @type {function(!Object): undefined} */
  module$jscomp$0.exports = JSONItem$jscomp$0;
  /** @type {string} */
  JSONItem$jscomp$0.type = "json";
  /** @type {!Array} */
  JSONItem$jscomp$0.extensions = ["json"];
  quickLoader$jscomp$0.register(JSONItem$jscomp$0);
  /**
   * @return {?}
   */
  JSONItem$jscomp$0.retrieve = function() {
    return false;
  };
  var _super$jscomp$0 = TextItem$jscomp$0.prototype;
  var _p$jscomp$0 = JSONItem$jscomp$0.prototype = new TextItem$jscomp$0;
  /** @type {function(!Object): undefined} */
  _p$jscomp$0.constructor = JSONItem$jscomp$0;
  /** @type {function(): undefined} */
  _p$jscomp$0._onLoad = _onLoad$jscomp$0;
}, function(blob, canCreateDiscussions, require) {
  /**
   * @param {!Object} name
   * @param {!Object} node
   * @return {undefined}
   */
  function data(name, node) {
    if (name) {
      this.loadThrough = !node || node.loadThrough === COMPOUND || node.loadThrough;
      p.constructor.apply(this, arguments);
      try {
        /** @type {!Audio} */
        this.content = new Audio;
      } catch (e) {
        /** @type {!Element} */
        this.content = document.createElement("audio");
      }
      if (this.crossOrigin) {
        this.content.crossOrigin = this.crossOrigin;
      }
    }
  }
  var COMPOUND;
  var Promise = require(14);
  var o = require(7);
  /** @type {function(!Object, !Object): undefined} */
  blob.exports = data;
  /** @type {string} */
  data.type = "audio";
  /** @type {!Array} */
  data.extensions = ["mp3", "ogg"];
  o.register(data);
  /**
   * @param {!Object} value
   * @return {?}
   */
  data.retrieve = function(value) {
    return false;
  };
  var p = Promise.prototype;
  var _this = data.prototype = new Promise;
  /** @type {function(!Object, !Object): undefined} */
  _this.constructor = data;
  /**
   * @return {undefined}
   */
  _this.load = function() {
    p.load.apply(this, arguments);
    var el = this.content;
    el.src = this.url;
    if (this.loadThrough) {
      el.addEventListener("canplaythrough", this.boundOnLoad, false);
    } else {
      el.addEventListener("canplay", this.boundOnLoad, false);
    }
    el.load();
  };
  /**
   * @return {undefined}
   */
  _this._onLoad = function() {
    if (this.content.removeEventListener("canplaythrough", this.boundOnLoad, false), this.content.removeEventListener("canplay", this.boundOnLoad, false), this.isLoaded) {
      return;
    }
    p._onLoad.call(this);
  };
}, function(blob, canCreateDiscussions, createElement) {
  /**
   * @param {!Object} n
   * @param {!Object} d
   * @return {undefined}
   */
  function data(n, d) {
    if (n) {
      this.loadThrough = !d || d.loadThrough === undefined || d.loadThrough;
      target.constructor.apply(this, arguments);
      try {
        this.content = new Video;
      } catch (e) {
        /** @type {!Element} */
        this.content = document.createElement("video");
      }
      if (this.crossOrigin) {
        this.content.crossOrigin = this.crossOrigin;
      }
    }
  }
  var undefined;
  var o = createElement(14);
  var s = createElement(7);
  /** @type {function(!Object, !Object): undefined} */
  blob.exports = data;
  /** @type {string} */
  data.type = "video";
  /** @type {!Array} */
  data.extensions = ["mp4", "webm", "ogv"];
  s.register(data);
  /**
   * @param {!Object} value
   * @return {?}
   */
  data.retrieve = function(value) {
    return false;
  };
  var target = o.prototype;
  var _this = data.prototype = new o;
  /** @type {function(!Object, !Object): undefined} */
  _this.constructor = data;
  /**
   * @return {undefined}
   */
  _this.load = function() {
    target.load.apply(this, arguments);
    var el = this.content;
    /** @type {string} */
    el.preload = "auto";
    el.src = this.url;
    if (this.loadThrough) {
      el.addEventListener("canplaythrough", this.boundOnLoad, false);
    } else {
      el.addEventListener("canplay", this.boundOnLoad, false);
    }
    el.load();
  };
  /**
   * @return {undefined}
   */
  _this._onLoad = function() {
    if (this.content.removeEventListener("canplaythrough", this.boundOnLoad), this.content.removeEventListener("canplay", this.boundOnLoad), this.isLoaded) {
      return;
    }
    target._onLoad.call(this);
  };
}, function(module, canCreateDiscussions, factory) {
  /**
   * @param {!Object} i
   * @param {!Object} t
   * @return {undefined}
   */
  function f(i, t) {
    if (i) {
      target.constructor.call(this, i, t);
      if (!this.loadFunc && console) {
        console[console.error || console.log]("require loadFunc in the config object.");
      }
    }
  }
  var C = factory(14);
  var library = factory(7);
  /** @type {function(!Object, !Object): undefined} */
  module.exports = f;
  /** @type {string} */
  f.type = "any";
  /** @type {!Array} */
  f.extensions = [];
  library.register(f);
  /**
   * @return {?}
   */
  f.retrieve = function() {
    return false;
  };
  var target = C.prototype;
  var fp = f.prototype = new C;
  /** @type {function(!Object, !Object): undefined} */
  fp.constructor = f;
  /**
   * @return {undefined}
   */
  fp.load = function() {
    var u = this;
    this.loadFunc(this.url, function(text) {
      /** @type {string} */
      u.content = text;
      target._onLoad.call(u);
    }, this.loadingSignal);
  };
}, function(module, canCreateDiscussions, n) {
  /**
   * @param {!Object} x
   * @param {!Object} y
   * @return {undefined}
   */
  function a(x, y) {
    if (x) {
      target.constructor.apply(this, arguments);
      /** @type {!Image} */
      this.content = new Image;
      if (this.crossOrigin) {
        this.content.crossOrigin = this.crossOrigin;
      }
    }
  }
  var c = n(14);
  var next = n(69);
  var i = n(7);
  /** @type {function(!Object, !Object): undefined} */
  module.exports = a;
  var target = c.prototype;
  var _this = a.prototype = new c;
  /** @type {function(!Object, !Object): undefined} */
  _this.constructor = a;
  /**
   * @return {undefined}
   */
  _this.load = function() {
    target.load.apply(this, arguments);
    var el = this.content;
    el.onload = this.boundOnLoad;
    el.src = this.url;
  };
  /**
   * @return {undefined}
   */
  _this._onLoad = function() {
    delete this.content.onload;
    this.width = this.content.width;
    this.height = this.content.height;
    target._onLoad.call(this);
  };
  /**
   * @param {!Object} value
   * @return {?}
   */
  a.retrieve = function(value) {
    if (value.nodeType && value.style) {
      /** @type {!Array} */
      var t = [];
      if ("img" === value.nodeName.toLowerCase() && value.src.indexOf(";") < 0) {
        t.push(value.src);
      }
      next(value, "background-image").replace(/s?url\(\s*?['"]?([^;]*?)['"]?\s*?\)/g, function(canCreateDiscussions, n) {
        t.push(n);
      });
      /** @type {number} */
      var k = t.length;
      for (; k--;) {
        if (0 === t[k].indexOf("data:")) {
          t.splice(k, 1);
        }
      }
      return !!t.length && t;
    }
    return "string" == typeof value && [value];
  };
  /** @type {string} */
  a.type = "image";
  /** @type {!Array} */
  a.extensions = ["jpg", "gif", "png"];
  i.register(a);
}, function(mixin, canCreateDiscussions, n) {
  /**
   * @param {!Node} obj
   * @param {!Object} prop
   * @param {?} func
   * @param {?} uniqueid
   * @return {?}
   */
  mixin.exports = function(obj, prop, func, uniqueid) {
    if (uniqueid = (func = window.getComputedStyle) ? func(obj) : obj.currentStyle) {
      return uniqueid[prop.replace(/-(\w)/gi, function(canCreateDiscussions, shortMonthName) {
        return shortMonthName.toUpperCase();
      })];
    }
  };
}, function(canCreateDiscussions, brAlertService, saveNotifs) {
  var browserUtils = saveNotifs(5);
  /**
   * @param {!Object} name
   * @return {undefined}
   */
  brAlertService.add = function(name) {
    if (window.atob) {
      /** @type {!Console} */
      var console = window.console;
      if (console) {
        if (browserUtils.isFirefox || browserUtils.isChrome) {
          console.log.apply(console, ["\n" + (name ? atob("JWMgQ3JlYXRlZCBieSBMdXNpb24gJWMgaHR0cHM6Ly9sdXNpb24uY28vIA==") : atob("JWMgRGV2ZWxvcGVkIGJ5IEx1c2lvbiAlYyBodHRwczovL2x1c2lvbi5jby8g")) + "\n", atob("Y29sb3I6ICNmZmY7IGJhY2tncm91bmQ6ICMyMjI7IHBhZGRpbmc6NXB4IDVweDs="), atob("Y29sb3I6ICM5OTk7IGJhY2tncm91bmQ6ICNGQ0ZDRkM7IHBhZGRpbmc6NXB4IDA7")]);
        } else {
          console.log(atob(name ? "Q3JlYXRlZCBieSBMdXNpb24gLSBodHRwczovL2x1c2lvbi5jby8=" : "RGV2ZWxvcGVkIGJ5IEx1c2lvbiAtIGh0dHBzOi8vbHVzaW9uLmNvLw=="));
        }
      }
    }
  };
}, function(mixin, canCreateDiscussions, n) {
  /**
   * @param {string} b
   * @param {!Object} s
   * @param {number} h
   * @return {?}
   */
  mixin.exports = function(b, s, h) {
    if (h = h || 0, null == b) {
      return -1;
    }
    var top = b.length;
    var i = h < 0 ? top + h : h;
    for (; i < top;) {
      if (b[i] === s) {
        return i;
      }
      i++;
    }
    return -1;
  };
}, function(mixin, canCreateDiscussions, n) {
  /**
   * @param {!Object} obj
   * @param {?} f
   * @param {?} o
   * @return {undefined}
   */
  mixin.exports = function(obj, f, o) {
    if (null != obj) {
      /** @type {number} */
      var i = -1;
      var length = obj.length;
      for (; ++i < length && false !== f.call(o, obj[i], i, obj);) {
      }
    }
  };
}, function(mixin, canCreateDiscussions, addVertex) {
  var i = addVertex(20);
  var pollQueueInterval = addVertex(21);
  /**
   * @param {string} b
   * @param {!Array} t
   * @return {?}
   */
  mixin.exports = function(b, t) {
    b = i(b);
    t = t || pollQueueInterval;
    var j;
    var token;
    /** @type {number} */
    var start = 0;
    var len = b.length;
    var tl = t.length;
    /** @type {boolean} */
    var found = true;
    for (; found && start < len;) {
      /** @type {boolean} */
      found = false;
      /** @type {number} */
      j = -1;
      token = b.charAt(start);
      for (; ++j < tl;) {
        if (token === t[j]) {
          /** @type {boolean} */
          found = true;
          start++;
          break;
        }
      }
    }
    return start >= len ? "" : b.substr(start, len);
  };
}, function(mixin, canCreateDiscussions, addVertex) {
  var i = addVertex(20);
  var pollQueueInterval = addVertex(21);
  /**
   * @param {string} str
   * @param {!Array} t
   * @return {?}
   */
  mixin.exports = function(str, t) {
    str = i(str);
    t = t || pollQueueInterval;
    var j;
    var current;
    /** @type {number} */
    var end = str.length - 1;
    var tl = t.length;
    /** @type {boolean} */
    var found = true;
    for (; found && end >= 0;) {
      /** @type {boolean} */
      found = false;
      /** @type {number} */
      j = -1;
      current = str.charAt(end);
      for (; ++j < tl;) {
        if (current === t[j]) {
          /** @type {boolean} */
          found = true;
          end--;
          break;
        }
      }
    }
    return end >= 0 ? str.substring(0, end + 1) : "";
  };
}, function(mixin, canCreateDiscussions, iter_f) {
  var next = iter_f(42);
  /**
   * @param {!Object} x
   * @return {?}
   */
  mixin.exports = function(x) {
    return next(x, "String");
  };
}, function(mixin, canCreateDiscussions, n) {
  /**
   * @param {!Object} arr
   * @param {number} start
   * @param {number} end
   * @return {?}
   */
  mixin.exports = function(arr, start, end) {
    var length = arr.length;
    /** @type {number} */
    start = null == start ? 0 : start < 0 ? Math.max(length + start, 0) : Math.min(start, length);
    end = null == end ? length : end < 0 ? Math.max(length + end, 0) : Math.min(end, length);
    /** @type {!Array} */
    var ret = [];
    for (; start < end;) {
      ret.push(arr[start++]);
    }
    return ret;
  };
}, function(mixin, canCreateDiscussions, iter_f) {
  /**
   * @param {!Function} e
   * @param {!Object} d
   * @param {string} n
   * @param {?} wrapper
   * @return {?}
   */
  function f(e, d, n, wrapper) {
    return e.call(wrapper, d[n], n, d);
  }
  var u;
  var _dontEnums;
  var next = iter_f(24);
  /**
   * @param {!Object} obj
   * @param {!Object} t
   * @param {?} n
   * @return {undefined}
   */
  mixin.exports = function(obj, t, n) {
    var key;
    /** @type {number} */
    var i = 0;
    for (key in null == u && function() {
      var e;
      for (e in _dontEnums = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], u = true, {
        toString : null
      }) {
        /** @type {boolean} */
        u = false;
      }
    }(), obj) {
      if (false === f(t, obj, key, n)) {
        break;
      }
    }
    if (u) {
      var ctor = obj.constructor;
      /** @type {boolean} */
      var l = !!ctor && obj === ctor.prototype;
      for (; (key = _dontEnums[i++]) && ("constructor" === key && (l || !next(obj, key)) || obj[key] === Object.prototype[key] || false !== f(t, obj, key, n));) {
      }
    }
  };
}, function(module, canCreateDiscussions, $) {
  /**
   * @param {!Object} el
   * @param {number} t
   * @return {undefined}
   */
  function render(el, t) {
    /** @type {!Object} */
    this.heroDom = el;
    this.hideDistanceRatio = t || .25;
    this.innerStyle = el.querySelector(".hero-inner").style;
    this.title = this.createTextEffect(".hero-title", true);
    this.desc = this.createTextEffect(".hero-desc");
  }
  var o = $(1);
  var tf_menu = $(79);
  var self = $(47);
  var md = $(2);
  var ctx = render.prototype;
  /** @type {function(!Object, number): undefined} */
  module.exports = render;
  /**
   * @param {string} selector
   * @param {boolean} convertToImages
   * @return {?}
   */
  ctx.createTextEffect = function(selector, convertToImages) {
    var _container = this.heroDom.querySelector(selector);
    return _container ? new tf_menu({
      domElement : _container,
      useBlur : !!convertToImages
    }) : null;
  };
  /**
   * @return {undefined}
   */
  ctx.reset = function() {
    /** @type {null} */
    this.isActive = null;
    if (this.title) {
      this.title.hide(0);
    }
    if (this.desc) {
      this.desc.hide(0);
    }
    this.update();
  };
  /**
   * @return {undefined}
   */
  ctx.update = function() {
    /** @type {number} */
    var length = o.height * this.hideDistanceRatio;
    /** @type {number} */
    var progress = Math.min(o.scrollTop, length);
    var fraction = md.clamp(progress / length, 0, 1);
    self.moveY(this.innerStyle, .85 * progress);
    /** @type {number} */
    this.innerStyle.opacity = 1 - fraction;
    /** @type {string} */
    this.innerStyle.visibility = 1 === fraction ? "hidden" : "visible";
    /** @type {boolean} */
    var less4 = fraction < 1;
    if (less4 !== this.isActive) {
      /** @type {boolean} */
      this.isActive = less4;
      if (less4) {
        if (this.title) {
          this.title.show(2);
        }
        if (this.desc) {
          this.desc.show(3);
        }
      } else {
        if (this.title) {
          this.title.hide(0);
        }
        if (this.desc) {
          this.desc.hide(0);
        }
      }
    }
  };
}, function(module, canCreateDiscussions, integrate) {
  /**
   * @param {!Object} o
   * @return {undefined}
   */
  function update(o) {
    extend(this, {
      text : "",
      domElement : null,
      ratio : 1,
      stagger1s : [],
      stagger2s : [],
      chars : [],
      useBlur : true
    }, o);
    this.domElement = this.domElement || document.createElement("div");
    this.text = this.text || this.domElement.innerHTML;
    this.style = this.domElement.style;
    this.boundOnUpdate = this.onUpdate.bind(this);
    this.boundOnComplete = this.onComplete.bind(this);
    this.setText(this.text);
  }
  var extend = integrate(6);
  var fire = integrate(44);
  var clone = integrate(2);
  var me = update.prototype;
  /** @type {function(!Object): undefined} */
  module.exports = update;
  /**
   * @param {string} text
   * @return {undefined}
   */
  me.setText = function(text) {
    text = this.text = text || this.text;
    /** @type {string} */
    this.domElement.innerHTML = "";
    /** @type {number} */
    this.chars.length = 0;
    /** @type {number} */
    this.stagger1s.length = 0;
    /** @type {number} */
    this.stagger2s.length = 0;
    /** @type {number} */
    var i = 0;
    var l = text.length;
    for (; i < l; i++) {
      /** @type {!Element} */
      var child = this.chars[i] = document.createElement("span");
      child.innerHTML = text.substr(i, 1);
      this.domElement.appendChild(child);
    }
    this.onComplete();
    this.onUpdate();
  };
  /**
   * @param {number} width
   * @param {number} indent
   * @return {undefined}
   */
  me.show = function(width, indent) {
    TweenLite.killTweensOf(this);
    TweenLite.to(this, width || 0, {
      delay : (indent || 0) + .5,
      ratio : 1,
      onUpdate : this.boundOnUpdate,
      onComplete : this.boundOnComplete
    });
  };
  /**
   * @param {number} top
   * @param {number} delay
   * @return {undefined}
   */
  me.hide = function(top, delay) {
    TweenLite.killTweensOf(this);
    TweenLite.to(this, top || 0, {
      delay : delay || 0,
      ratio : 0,
      onUpdate : this.boundOnUpdate,
      onComplete : this.boundOnComplete
    });
  };
  /**
   * @return {undefined}
   */
  me.onUpdate = function() {
    var e = this.useBlur;
    /** @type {number} */
    var j = 0;
    var jLen = this.chars.length;
    for (; j < jLen; j++) {
      var a = this.chars[j];
      var style = a.style;
      var val = clone.cUnMix(.4 * this.stagger1s[j], 1 - .4 * this.stagger2s[j], this.ratio);
      style.opacity = val;
      if (e) {
        /** @type {string} */
        style.filter = "blur(" + .2 * (1 - val) + "ex)";
      }
      /** @type {string} */
      style.visibility = val ? "visible" : "hidden";
    }
    /** @type {string} */
    this.style.visibility = this.ratio ? "visible" : "hidden";
  };
  /**
   * @return {undefined}
   */
  me.onComplete = function() {
    /** @type {number} */
    this.stagger1s.length = 0;
    /** @type {number} */
    this.stagger2s.length = 0;
    var options = this.chars;
    var t = options.length ? options.length - 1 : options.length;
    var start = Array.apply(null, {
      length : options.length
    }).map(Number.call, Number);
    Array.prototype.push.apply(this.stagger1s, fire(start).map(function(near) {
      return near / t;
    }));
    Array.prototype.push.apply(this.stagger2s, fire(start).map(function(near) {
      return near / t;
    }));
    /** @type {string} */
    this.style.visibility = this.ratio ? "visible" : "hidden";
  };
}, function(mixin, canCreateDiscussions, parseInt) {
  var msie = parseInt(45);
  var integer = parseInt(46);
  var f = parseInt(81);
  /**
   * @param {number} n
   * @param {number} t
   * @return {?}
   */
  mixin.exports = function(n, t) {
    return n = null == n ? msie : ~~n, t = null == t ? integer : ~~t, Math.round(f(n - .5, t + .499999999999));
  };
}, function(mixin, canCreateDiscussions, $) {
  var next = $(82);
  var edit = $(45);
  var i = $(46);
  /**
   * @param {string} name
   * @param {!Object} index
   * @return {?}
   */
  mixin.exports = function(name, index) {
    return (name = null == name ? edit : name) + ((index = null == index ? i : index) - name) * next();
  };
}, function(exports, canCreateDiscussions, n) {
  /**
   * @return {?}
   */
  function random() {
    return random.get();
  }
  /** @type {function(): number} */
  random.get = Math.random;
  /** @type {function(): ?} */
  exports.exports = random;
}, function(module, canCreateDiscussions, encodeURIComponent) {
  /**
   * @param {!Object} o
   * @param {!Object} item
   * @return {undefined}
   */
  function update(o, item) {
    /** @type {string} */
    item.innerHTML = "<span>" + hash(item.innerHTML).split("").join("</span><span>").replace(/<span>\s<\/span>/g, "&nbsp;") + "</span>";
    /** @type {!Object} */
    this.dom = o;
    this.chars = item.querySelectorAll("span");
    /** @type {boolean} */
    this.isAnimating = false;
    /** @type {number} */
    this.time = 0;
    this.onUpdate = this.update.bind(this);
    this.onComplete = this.complete.bind(this);
  }
  var hash = encodeURIComponent(17);
  var value = encodeURIComponent(2);
  var first_trend = encodeURIComponent(15);
  var TweenMax = encodeURIComponent(8);
  /** @type {function(!Object, !Object): undefined} */
  module.exports = update;
  var node = update.prototype;
  /**
   * @return {undefined}
   */
  node.flip = function() {
    if (!this.isAnimating) {
      /** @type {number} */
      var duration = step * this.chars.length + offset;
      TweenMax.fromTo(this, duration, {
        time : 0
      }, {
        time : duration,
        ease : "linear",
        onUpdate : this.onUpdate,
        onComplete : this.onComplete
      });
    }
  };
  /**
   * @return {undefined}
   */
  node.update = function() {
    var chars = this.chars;
    /** @type {number} */
    var i = 0;
    var l = chars.length;
    for (; i < l; i++) {
      var docElemStyle = chars[i].style;
      var a = first_trend.easeOutQuad(value.cUnMix(i * step, i * step + offset, this.time));
      /** @type {number} */
      var s = a < .5 ? -a / .5 : 1 - 2 * (a - .5);
      /** @type {string} */
      docElemStyle.transform = "translate3d(0," + 120 * s + "%,0)";
    }
  };
  /**
   * @return {undefined}
   */
  node.complete = function() {
    /** @type {boolean} */
    this.isAnimating = false;
  };
  /** @type {number} */
  var offset = .6;
  /** @type {number} */
  var step = .02;
}, function(mixin, canCreateDiscussions, require) {
  /**
   * @param {!Object} options
   * @return {undefined}
   */
  function SimpleScrollPane(options) {
    template(this, {
      wrapper : undef,
      inputTarget : undef,
      moveContainer : undef,
      indicator : undef,
      _tPos : 0,
      _tRatio : 0,
      _pos : 0,
      _ratio : 0,
      _easeRatio : 1,
      _boundEaseRatio : .4,
      _momentumEaseRatio : .08,
      _isRendering : false,
      _isActive : true,
      _clampWheel : true,
      isVerticalOnly : true,
      isBound : false,
      autoUpdateStyles : true,
      onUpdated : new footerAccordion,
      onOverScrolled : new footerAccordion,
      deltaIndex : 0,
      indicatorPadding : 0,
      wheelSpeedInv : 7.5
    }, options);
    this.moveContainerStyle = this.moveContainer.style;
    this.indicator = this.indicator;
    this.indicatorStyle = this.indicator.style;
    this.wrapper.scrollpane = this;
    this.inputTarget = this.inputTarget || this.wrapper;
    /** @type {!Array} */
    this.deltaYLog = [];
    /** @type {!Array} */
    this.deltaTimeLog = [];
  }
  /**
   * @param {!Event} event
   * @return {undefined}
   */
  function _onDown(event) {
    if (!(!this._isActive || this.movableHeight < 1)) {
      /** @type {boolean} */
      this.isInverted = event.target == this.indicator;
      /** @type {boolean} */
      this.isDown = true;
    }
  }
  /**
   * @param {number} target
   * @param {?} eventsDict
   * @return {undefined}
   */
  function _onItemOpen(target, eventsDict) {
    this.moveToPos(this._tPos + target * this.visibleHeight / this.wheelSpeedInv, .1, this._clampWheel);
    this.onUpdated.dispatch(this._pos, this._ratio + .1 * target);
  }
  /**
   * @param {!Object} e
   * @return {?}
   */
  function _onMove(e) {
    if (inputController.isPossibilyScrollH && (this.isVerticalOnly || e.isVerticalOnly)) {
      return this.hasMoved = false, void(this.isDown = false);
    }
    if (!(!this._isActive || !this.isDown || this.movableHeight < 1)) {
      if (e && "a" !== e.target.tagName.toLowerCase()) {
        e.preventDefault();
      }
      if (!this.hasMoved) {
        /** @type {!Array} */
        this.deltaYLog = [];
        /** @type {!Array} */
        this.deltaTimeLog = [];
        /** @type {number} */
        this.deltaIndex = 0;
      }
      /** @type {number} */
      this.deltaYLog[this.deltaIndex] = e.deltaY * (this.isInverted ? -1 : 1);
      this.deltaTimeLog[this.deltaIndex++] = e.deltaTime;
      if (this.deltaIndex == LOG_MAX - 1) {
        /** @type {number} */
        this.deltaIndex = 0;
      }
      /** @type {boolean} */
      this.hasMoved = true;
      this.moveToPos(this._tPos + e.deltaY * (this.isInverted ? -this.movableHeight / this.indicatorMovableHeight : 1), .5);
    }
  }
  /**
   * @param {!Object} e
   * @return {undefined}
   */
  function _onUp(e) {
    if (this.isDown = false, this._isActive && this.hasMoved && !(this.movableHeight < 1)) {
      /** @type {boolean} */
      this.hasMoved = false;
      /** @type {number} */
      var deltaY = e.deltaY * (this.isInverted ? -1 : 1);
      var deltaTime = e.deltaTime;
      /** @type {number} */
      var i = Math.max(this.deltaIndex, this.deltaYLog.length);
      for (; i--;) {
        deltaY = deltaY + this.deltaYLog[i];
        deltaTime = deltaTime + this.deltaTimeLog[i];
      }
      var pos = this._tPos + deltaY / deltaTime * 200;
      this.moveToPos(pos, this._momentumEaseRatio);
    }
  }
  var undef;
  var inputController = require(9);
  var bind = require(43);
  var render = require(85);
  var template = require(6);
  var footerAccordion = require(13);
  var aabb = require(47);
  var _p = SimpleScrollPane.prototype;
  /** @type {number} */
  var LOG_MAX = 5;
  /**
   * @return {undefined}
   */
  _p.init = function() {
    inputController.add(this.inputTarget, "down", bind(_onDown, this));
    inputController.add(this.inputTarget, "wheel", bind(_onItemOpen, this));
    inputController.onMoved.add(_onMove, this);
    inputController.onUped.add(_onUp, this);
  };
  /** @type {function(!Event): undefined} */
  _p._onDown = _onDown;
  /** @type {function(!Object): undefined} */
  _p._onUp = _onUp;
  /**
   * @return {undefined}
   */
  _p.onResize = function() {
    this.visibleHeight = this.wrapper.offsetHeight;
    this.height = this.moveContainer.offsetHeight;
    /** @type {number} */
    this.movableHeight = Math.max(0, this.height - this.visibleHeight);
    /** @type {boolean} */
    this.isMovable = this.movableHeight > 0;
    /** @type {number} */
    this.indicatorHeight = Math.min(1, this.visibleHeight / this.height) * (this.visibleHeight - this.indicatorPadding);
    /** @type {number} */
    this.indicatorMovableHeight = this.visibleHeight - this.indicatorHeight - this.indicatorPadding;
    /** @type {string} */
    this.indicatorStyle.height = this.indicatorHeight + "px";
    if (this.indicator.parentNode === this.wrapper) {
      /** @type {string} */
      this.indicatorStyle.display = this.isMovable ? "block" : "none";
    } else {
      /** @type {string} */
      this.indicator.parentNode.style.display = this.isMovable ? "block" : "none";
    }
    this.moveToRatio(this._tRatio, 1);
  };
  /**
   * @return {undefined}
   */
  _p._bound = function() {
    if (this._ratio > 0) {
      /** @type {number} */
      this._pos = this._tPos = this._ratio = this._tRatio = 0;
    } else {
      if (this._ratio < -1) {
        /** @type {number} */
        this._ratio = this._tRatio = -1;
        /** @type {number} */
        this._pos = this._tPos = this._tRatio * this.movableHeight;
      }
    }
  };
  /**
   * @return {undefined}
   */
  _p.render = function() {
    this._pos += (this._tPos - this._pos) * this._easeRatio;
    /** @type {number} */
    this._ratio = this._pos / this.movableHeight;
    if (!(this.isDown || this.isBound && !this._isRendering)) {
      if (this._ratio > 0) {
        this._tRatio -= this._tRatio * this._boundEaseRatio;
        /** @type {number} */
        this._tPos = this._tRatio * this.movableHeight;
      } else {
        if (this._ratio < -1) {
          this._tRatio += (-1 - this._tRatio) * this._boundEaseRatio;
          /** @type {number} */
          this._tPos = this._tRatio * this.movableHeight;
        }
      }
    }
    if (this.isBound) {
      this._bound();
    }
    /** @type {number} */
    var first = Math.max(-this.movableHeight - 1 - this._tPos, this._tPos - 1);
    /** @type {boolean} */
    var firstIsSlower = first > 0;
    if (this._isRendering) {
      if (!firstIsSlower && ~~Math.abs(this._tPos - this._pos) < 1) {
        if (!this.isDown) {
          this._bound();
        }
        /** @type {number} */
        this._pos = ~~this._tPos;
        /** @type {boolean} */
        this._isRendering = false;
      }
    } else {
      if (firstIsSlower || Math.abs(this._tPos - this._pos) > 1) {
        /** @type {boolean} */
        this._isRendering = true;
      }
    }
    if (this.autoUpdateStyles) {
      this.updateStyles();
    }
    this.onUpdated.dispatch(this._pos, this._ratio);
    if (firstIsSlower) {
      this.onOverScrolled.dispatch(this._pos > 0 ? -1 : 1, first);
    }
  };
  /**
   * @param {?} value
   * @param {number} easeRatio
   * @return {undefined}
   */
  _p.moveToRatio = function(value, easeRatio) {
    this.moveToPos(value * this.movableHeight, easeRatio);
  };
  /**
   * @param {number} value
   * @param {number} easeRatio
   * @param {boolean} zoomAware
   * @return {undefined}
   */
  _p.moveToPos = function(value, easeRatio, zoomAware) {
    this._easeRatio = easeRatio === undef ? 1 : easeRatio;
    /** @type {number} */
    this._tPos = value;
    /** @type {number} */
    this._tRatio = this._tPos / (this.movableHeight > 0 ? this.movableHeight : 1);
    if (zoomAware) {
      this._tRatio = render(this._tRatio, -1, 0);
      /** @type {number} */
      this._tPos = this._tRatio * this.movableHeight;
    }
    if (!this._isRendering) {
      this.render();
    }
  };
  /**
   * @return {undefined}
   */
  _p.updateStyles = function() {
    this._moveElementTo(this.moveContainerStyle, 0 | this._pos);
    this._moveElementTo(this.indicatorStyle, this.indicatorMovableHeight * -this._ratio | 0);
  };
  _p._moveElementTo = aabb.moveY;
  /**
   * @param {string} b
   * @return {undefined}
   */
  _p.setActive = function(b) {
    /** @type {string} */
    this._isActive = b;
    /** @type {boolean} */
    this.isDown = false;
  };
  /** @type {function(!Object): undefined} */
  mixin.exports = SimpleScrollPane;
}, function(mixin, canCreateDiscussions, n) {
  /**
   * @param {number} r
   * @param {number} n
   * @param {number} x
   * @return {?}
   */
  mixin.exports = function(r, n, x) {
    return r < n ? n : r > x ? x : r;
  };
}, function(canCreateDiscussions, self, n) {
  /**
   * @param {string} name
   * @return {?}
   */
  function check(name) {
    /** @type {string} */
    (parent = parent || document.createElement("div")).innerHTML = name;
    var node;
    var child = parent.childNodes;
    /** @type {!Array} */
    var header = [];
    var offset = child.length;
    for (; offset--;) {
      if (1 === (node = child[offset]).nodeType) {
        header.unshift(node);
        parent.removeChild(node);
      }
    }
    return parent.innerHTML = "", header;
  }
  var parent;
  /** @type {function(string): ?} */
  self.createElements = check;
  /**
   * @param {string} type
   * @return {?}
   */
  self.createElement = function(type) {
    return check(type)[0];
  };
  /**
   * @param {!Node} e
   * @return {?}
   */
  self.removeSelf = function(e) {
    if (e.parentNode) {
      e.parentNode.removeChild(e);
    }
    return e;
  };
  /**
   * @param {string} item
   * @return {?}
   */
  self.clone = function(item) {
    return check(item.outerHTML)[0];
  };
  /**
   * @param {!NodeList} nodeList
   * @param {?} className
   * @param {boolean} nocash
   * @return {?}
   */
  self.filterByClass = function(nodeList, className, nocash) {
    /** @type {!Array} */
    var nodeArray = [];
    /** @type {number} */
    var i = 0;
    var nodeListLen = nodeList.length;
    for (; i < nodeListLen; i++) {
      if (nodeList[i].classList.contains(className)) {
        if (nocash) {
          return nodeList[i];
        }
        nodeArray.push(nodeList[i]);
      }
    }
    return nocash ? null : nodeArray;
  };
}, function(mixin, canCreateDiscussions, require) {
  /**
   * @return {undefined}
   */
  function init() {
    proto.constructor.call(this, {
      refDomId : "featured",
      diffMultiplier : .45,
      specMultiplier : 1,
      pointColor : 16777215,
      scatterDivider : 150,
      scatterPowInv : .4,
      lightColor : 46079,
      backgroundColor : 394758,
      path : "work",
      camera : new THREE.PerspectiveCamera(60, 1, .1, 10),
      pointCount : 64 * Math.ceil(window.screen.height / 30),
      parallax : 0,
      usePostprocessing : false,
      postprocessingToScreen : false
    });
  }
  var THREE = require(0);
  var obj = require(1);
  var Texture = require(4);
  var _ = require(2);
  var Ctor = require(10);
  var sfx = require(16);
  var user = require(32);
  var params = require(108);
  var ctx = require(33);
  var proto = Ctor.prototype;
  var opts = init.prototype = new Ctor;
  /** @type {function(): undefined} */
  opts.constructor = init;
  /**
   * @return {undefined}
   */
  opts.preInit = function() {
    if (!this.usePostprocessing) {
      this.sceneRenderTarget = Texture.createRenderTarget(1, 1, true);
      /** @type {boolean} */
      this.sceneRenderTarget.depthBuffer = true;
      /** @type {boolean} */
      this.sceneRenderTarget.stencilBuffer = true;
    }
    self = new THREE.Color;
    u = new THREE.Color;
    sfx.preload("under_water");
    params.preInit(this);
    proto.preInit.call(this);
  };
  /**
   * @return {undefined}
   */
  opts.init = function() {
    proto.init.call(this);
    /** @type {number} */
    this.camera.far = 100;
    this.postprocessingQueue.push(this.getSmaa());
    user.init(this);
    this.scene.add(user.bgMesh);
    params.init(this);
    this.scene.add(params.mesh);
    this.precompile();
  };
  /**
   * @return {undefined}
   */
  opts.resize = function() {
    proto.resize.call(this);
  };
  /**
   * @return {undefined}
   */
  opts.afterRender = function() {
    var gl = Texture.getColorState();
    var renderer = obj.renderer;
    /** @type {boolean} */
    renderer.autoClear = false;
    /** @type {boolean} */
    renderer.autoClearColor = false;
    /** @type {boolean} */
    renderer.autoClearStencil = false;
    /** @type {boolean} */
    renderer.autoClearDepth = false;
    renderer.setRenderTarget(null);
    renderer.setScissorTest(true);
    renderer.setViewport(this.left, obj.height - this.top - this.height, this.width, this.height);
    renderer.setScissor(this.left, obj.height - this.top - this.height, this.width, this.height);
    /** @type {number} */
    var h = obj.featureOverMaskHeight * obj.height;
    /** @type {number} */
    var y = Math.min(0, this.refDomRect.top - h) / this.height;
    /** @type {number} */
    var cy = Math.max(0, this.refDomRect.bottom - obj.height) / this.height + 1;
    ctx.renderVerticalGradientMask(this.usePostprocessing ? this.sharedPostprocessing.fromRenderTarget.texture : this.sceneRenderTarget.texture, y, y + h / this.height, cy - h / this.height, cy);
    renderer.setScissorTest(false);
    Texture.setColorState(gl);
  };
  /**
   * @param {number} fn
   * @param {number} w
   * @return {undefined}
   */
  opts.update = function(fn, w) {
    if (this.paddingTop = obj.height * obj.featureOverMaskHeight | 0, this.testViewport(), sfx.targetDistortion = this.refDomRect.top + 1 < obj.height && this.refDomRect.bottom > 1 ? 1 : 0, this.needsRender) {
      if (!n && obj.scrollTopVelocity > 0) {
        sfx.playEffect("under_water");
      }
      if (void 0 === i) {
        /** @type {number} */
        i = w;
      }
      i = i + .1 * (w - i);
      /** @type {number} */
      var x = Math.max(0, i);
      /** @type {number} */
      var iStripes = asStripeClasses.length;
      var colors = asStripeClasses[Math.floor(x) % iStripes];
      var match = asStripeClasses[Math.ceil(x) % iStripes];
      /** @type {number} */
      var value = x % 1;
      this.diffMultiplier = _.mix(colors[0], match[0], value);
      this.specMultiplier = _.mix(colors[1], match[1], value);
      this.pointColor = self.setHex(colors[2]).lerp(u.setHex(match[2]), value).getHex();
      this.scatterDivider = _.mix(colors[3], match[3], value);
      this.scatterPowInv = _.mix(colors[4], match[4], value);
      this.lightColor = self.setHex(colors[5]).lerp(u.setHex(match[5]), value).getHex();
      this.backgroundColor = self.setHex(colors[6]).lerp(u.setHex(match[6]), value).getHex();
      this.camera.updateMatrixWorld(true);
      this.updateCamera();
      /** @type {number} */
      this.camera.position.z = 8;
      /** @type {number} */
      this.camera.position.y = this.refDomRect.top / this.refDomRect.height * 4.5;
      this.camera.updateProjectionMatrix();
      this.updateMouse();
      this.scene.updateMatrixWorld(true);
      user.update(fn);
      params.update(fn);
      this.render();
    }
    n = this.needsRender;
  };
  var self = void 0;
  var u = void 0;
  var i = void 0;
  /** @type {boolean} */
  var n = false;
  /** @type {!Array} */
  var asStripeClasses = [[.2, 1, 16777215, 50, .7, 5197647, 1118481], [.5, 1, 16714566, 80, .5, 46079, 16711680], [.8, .4, 2276561, 67, .6, 4306382, 471354], [.3, .8, 16777215, 80, .5, 16731014, 1492713]];
  mixin.exports = new init;
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "attribute vec3 position;\n\nvarying vec2 v_uv;\n\nvoid main() {\n    v_uv = position.xy * 0.5 + 0.5;\n    gl_Position = vec4( position, 1.0 );\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "attribute vec3 position;\nvoid main() {\n    gl_Position = vec4( position, 1.0 );\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "uniform vec4 u_color;\n\nvoid main() {\n    gl_FragColor = u_color;\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "attribute vec3 position;\nattribute vec2 uv;\n\nuniform vec4 u_transform;\n\nvarying vec2 v_uv;\n\nvoid main() {\n    v_uv = uv;\n    gl_Position = vec4( position.xy * u_transform.zw + u_transform.xy, 0.0, 1.0 );\n}\n";
}, function(module, n, require) {
  /**
   * @param {string} data
   * @param {!Object} options
   * @return {undefined}
   */
  function Texture(data, options) {
    if (!element) {
      n.init();
    }
    /** @type {number} */
    this.width = 1;
    /** @type {number} */
    this.height = 1;
    /** @type {boolean} */
    this.useScissor = false;
    this.scissorRect = new THREE.Vector4;
    /** @type {null} */
    this.scene = null;
    /** @type {null} */
    this.camera = null;
    /** @type {string} */
    this.preserveScene = data;
    this.resolution = new THREE.Vector2(0, 0);
    this.fullResolution = new THREE.Vector2(0, 0);
    this.fromRenderTarget = self.createRenderTarget(1, 1, true);
    /** @type {boolean} */
    this.fromRenderTarget.depthBuffer = true;
    /** @type {boolean} */
    this.fromRenderTarget.stencilBuffer = true;
    this.toRenderTarget = this.fromRenderTarget.clone();
    this.prevSceneRenderTarget = data ? this.fromRenderTarget.clone() : null;
    this.sceneRenderTarget = data ? this.fromRenderTarget.clone() : null;
    /** @type {boolean} */
    this.useDepthTexture = !!options;
    if (this.useDepthTexture) {
      this.depthTexture = new THREE.DepthTexture;
      this.depthTexture.type = THREE.UnsignedShortType;
      this.depthTextureUniform = {
        value : this.depthTexture
      };
    }
    this.fromTexture = this.fromRenderTarget.texture;
    this.toTexture = this.toRenderTarget.texture;
    this.prevSceneTexture = data ? this.prevSceneRenderTarget.texture : null;
    this.sceneTexture = data ? this.sceneRenderTarget.texture : null;
    /** @type {boolean} */
    this.willToScreen = false;
    this.mesh = new THREE.Mesh;
    /** @type {!Array} */
    this.queue = [];
  }
  /**
   * @param {!Object} component
   * @return {?}
   */
  function c(component) {
    return component.enabled && component.needsRender();
  }
  var THREE = require(0);
  var self = require(4);
  var proto = Texture.prototype;
  /** @type {function(string, !Object): undefined} */
  n = module.exports = Texture;
  /**
   * @return {undefined}
   */
  proto.swap = function() {
    var e = this.fromRenderTarget;
    this.fromRenderTarget = this.toRenderTarget;
    this.toRenderTarget = e;
    this.fromTexture = this.fromRenderTarget.texture;
    this.toTexture = this.toRenderTarget.texture;
  };
  /**
   * @param {number} width
   * @param {number} height
   * @return {undefined}
   */
  proto.setSize = function(width, height) {
    /** @type {number} */
    this.width = width;
    /** @type {number} */
    this.height = height;
    this.resolution.set(width, height);
    this.fullResolution.set(width, height);
    if (this.preserveScene) {
      this.sceneRenderTarget.setSize(width, height);
      this.prevSceneRenderTarget.setSize(width, height);
    }
    this.fromRenderTarget.setSize(width, height);
    this.toRenderTarget.setSize(width, height);
  };
  /**
   * @return {undefined}
   */
  proto.dispose = function() {
    if (this.fromRenderTarget) {
      this.fromRenderTarget.dispose();
    }
    if (this.toRenderTarget) {
      this.toRenderTarget.dispose();
    }
    if (this.prevSceneRenderTarget) {
      this.prevSceneRenderTarget.dispose();
    }
    if (this.sceneRenderTarget) {
      this.sceneRenderTarget.dispose();
    }
  };
  /**
   * @param {!Object} shader
   * @param {string} material
   * @return {undefined}
   */
  proto.renderMaterial = function(shader, material) {
    if (this.mesh.material = shader, !material && this.useScissor) {
      var renderer = self.renderer;
      var size = this.scissorRect;
      renderer.setRenderTarget(null);
      renderer.setScissorTest(true);
      renderer.setViewport(size.x, this.height - size.y - size.w, size.z, size.w);
      renderer.setScissor(size.x, this.height - size.y - size.w, size.z, size.w);
      self.renderObject(this.mesh, material);
      renderer.setScissorTest(false);
    } else {
      self.renderObject(this.mesh, material);
    }
  };
  /**
   * @return {undefined}
   */
  proto.beforeRenderOut = function() {
  };
  /**
   * @return {undefined}
   */
  proto.afterRenderOut = function() {
  };
  /**
   * @param {string} obj
   * @param {!Object} id
   * @param {boolean} partial
   * @return {undefined}
   */
  proto.render = function(obj, id, partial) {
    var renderer = self.renderer;
    /** @type {boolean} */
    this.willToScreen = partial;
    /** @type {string} */
    this.scene = obj;
    /** @type {!Object} */
    this.camera = id;
    this.mesh.geometry = renderer.xr.enabled ? method : element;
    var fn = this.queue.filter(c);
    var func = void 0;
    if (renderer.setRenderTarget(null), renderer.setScissorTest(false), this.preserveScene) {
      var l = this.prevSceneRenderTarget;
      this.prevSceneRenderTarget = this.sceneRenderTarget;
      this.sceneRenderTarget = l;
      this.prevSceneTexture = this.prevSceneRenderTarget.texture;
      this.sceneTexture = this.sceneRenderTarget.texture;
    }
    if (fn.length) {
      this.beforeRenderOut();
      if (this.useDepthTexture) {
        this.fromRenderTarget.depthTexture = this.depthTexture;
      }
      renderer.setRenderTarget(this.fromRenderTarget);
      renderer.render(obj, id);
      if (this.useDepthTexture) {
        /** @type {null} */
        this.fromRenderTarget.depthTexture = null;
      }
      if (this.preserveScene) {
        self.copy(this.fromRenderTarget.texture, this.sceneRenderTarget);
      }
      var View = self.getColorState();
      /** @type {boolean} */
      renderer.autoClear = false;
      /** @type {number} */
      var f = 0;
      var fl = fn.length;
      for (; f < fl; f++) {
        var prop = f === fl - 1 && partial;
        (func = fn[f]).setPostprocessing(this);
        func.render(this, prop);
      }
      this.afterRenderOut();
      self.setColorState(View);
    } else {
      if (this.preserveScene) {
        if (this.useDepthTexture) {
          this.sceneRenderTarget.depthTexture = this.depthTexture;
        }
        renderer.setRenderTarget(this.sceneRenderTarget);
        renderer.render(obj, id);
        if (this.useDepthTexture) {
          /** @type {null} */
          this.sceneRenderTarget.depthTexture = null;
        }
      }
      var size = this.scissorRect;
      renderer.setRenderTarget(null);
      renderer.setScissorTest(true);
      renderer.setViewport(size.x, this.height - size.y - size.w, size.z, size.w);
      renderer.setScissor(size.x, this.height - size.y - size.w, size.z, size.w);
      if (this.preserveScene) {
        this.beforeRenderOut();
        self.copy(this.sceneRenderTarget.texture);
        this.afterRenderOut();
      } else {
        this.beforeRenderOut();
        renderer.setRenderTarget(null);
        renderer.render(obj, id);
        this.afterRenderOut();
      }
      renderer.setScissorTest(false);
    }
  };
  /** @type {null} */
  var element = n.geom = null;
  /** @type {null} */
  var method = n.vrGeom = null;
  /**
   * @return {undefined}
   */
  n.init = function() {
    (element = n.geom = n.geom || new THREE.BufferGeometry).setAttribute("position", new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 4, -1, 0, -1, 4, 0]), 3));
    element.setAttribute("a_uvClamp", new THREE.BufferAttribute(new Float32Array([0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1]), 4));
    (method = n.vrGeom = n.vrGeom || new THREE.BufferGeometry).setAttribute("position", new THREE.BufferAttribute(new Float32Array([-4, -1, 0, 0, -1, 0, 0, 4, 0, 0, -1, 0, 4, -1, 0, 0, 4, 0]), 3));
    method.setAttribute("a_uvClamp", new THREE.BufferAttribute(new Float32Array([0, 0, .5, 1, 0, 0, .5, 1, 0, 0, .5, 1, .5, 0, 1, 1, .5, 0, 1, 1, .5, 0, 1, 1]), 4));
  };
}, function(blob, canCreateDiscussions, require) {
  /**
   * @param {number} options
   * @return {undefined}
   */
  function start(options) {
    var ld = (options = assign({
      useHighPass : true,
      ITERATION : 4,
      amount : 1,
      radius : 0,
      threshold : 0,
      greyRatio : 0,
      smoothWidth : 1
    }, options)).ITERATION;
    this.directionX = new THREE.Vector2(1, 0);
    this.directionY = new THREE.Vector2(0, 1);
    var postLi = this.highPassRenderTarget = exports.createRenderTarget(1, 1, true);
    /** @type {!Array} */
    this.renderTargetsHorizontal = [];
    /** @type {!Array} */
    this.renderTargetsVertical = [];
    /** @type {!Array} */
    this.blurMaterials = [];
    /** @type {number} */
    var id = 0;
    for (; id < ld; id++) {
      this.renderTargetsHorizontal.push(postLi.clone());
      this.renderTargetsVertical.push(postLi.clone());
    }
    var array = {
      u_bloomWeights : {
        value : []
      },
      u_greyRatio : {
        value : 0
      }
    };
    /** @type {number} */
    var i = 0;
    for (; i < ld; i++) {
      array["u_blurTexture" + i] = {
        value : this.renderTargetsVertical[i].texture
      };
    }
    e.constructor.call(this, assign({
      uniforms : array,
      defines : {
        ITERATION : ld
      },
      fragmentShader : exports.precisionPrefix + require(97),
      blending : THREE.NoBlending
    }, options));
    this.highPassMaterial = new THREE.RawShaderMaterial({
      uniforms : {
        u_texture : {
          value : null
        },
        u_luminosityThreshold : {
          value : 1
        },
        u_smoothWidth : {
          value : 1
        }
      },
      vertexShader : exports.precisionPrefix + exports.vertexShader,
      fragmentShader : exports.precisionPrefix + require(98)
    });
    /** @type {number} */
    var indexLookupKey = 0;
    for (; indexLookupKey < this.ITERATION; indexLookupKey++) {
      /** @type {number} */
      var kernelRadius = 3 + 2 * indexLookupKey;
      this.blurMaterials[indexLookupKey] = new THREE.RawShaderMaterial({
        uniforms : {
          u_texture : {
            value : null
          },
          u_resolution : {
            value : new THREE.Vector2
          },
          u_direction : {
            value : null
          }
        },
        vertexShader : exports.precisionPrefix + exports.vertexShader,
        fragmentShader : exports.precisionPrefix + require(99),
        defines : {
          KERNEL_RADIUS : kernelRadius,
          SIGMA : kernelRadius
        }
      });
    }
  }
  var URI = require(49);
  var exports = require(4);
  var ctx = require(2);
  var assign = require(30);
  var THREE = require(0);
  var e = URI.prototype;
  /** @type {!Object} */
  var _this = start.prototype = Object.create(e);
  /** @type {function(number): undefined} */
  _this.constructor = start;
  /**
   * @param {!Object} args
   * @return {undefined}
   */
  _this.setPostprocessing = function(args) {
    e.setPostprocessing.call(this, args);
    var b = args.width;
    var len = args.height;
    /** @type {number} */
    var x = Math.ceil(b / 2);
    /** @type {number} */
    var height = Math.ceil(len / 2);
    this.highPassRenderTarget.setSize(x, height);
    /** @type {number} */
    var i = 0;
    for (; i < this.ITERATION; i++) {
      this.renderTargetsHorizontal[i].setSize(x, height);
      this.renderTargetsVertical[i].setSize(x, height);
      this.blurMaterials[i].uniforms.u_resolution.value = new THREE.Vector2(x, height);
      /** @type {number} */
      x = Math.ceil(x / 2);
      /** @type {number} */
      height = Math.ceil(height / 2);
    }
  };
  /**
   * @return {undefined}
   */
  _this.dispose = function() {
    if (this.highPassRenderTarget) {
      this.highPassRenderTarget.dispose();
    }
    /** @type {number} */
    var i = 0;
    for (; i < this.ITERATION; i++) {
      if (this.renderTargetsHorizontal[i]) {
        this.renderTargetsHorizontal[i].dispose();
      }
      if (this.renderTargetsVertical[i]) {
        this.renderTargetsVertical[i].dispose();
      }
    }
  };
  /**
   * @return {?}
   */
  _this.needsRender = function() {
    return !!this.amount;
  };
  /**
   * @param {!Object} obj
   * @param {!Object} value
   * @return {undefined}
   */
  _this.render = function(obj, value) {
    var segments = this.ITERATION;
    var shader = this.highPassMaterial;
    if (this.useHighPass) {
      shader.uniforms.u_texture.value = obj.fromTexture;
      shader.uniforms.u_luminosityThreshold.value = this.threshold;
      shader.uniforms.u_smoothWidth.value = this.smoothWidth;
      obj.renderMaterial(shader, this.highPassRenderTarget);
    }
    var inputRenderTarget = this.useHighPass ? this.highPassRenderTarget : obj.fromRenderTarget;
    /** @type {number} */
    var i = 0;
    for (; i < segments; i++) {
      var shader = this.blurMaterials[i];
      shader.uniforms.u_texture.value = inputRenderTarget.texture;
      shader.uniforms.u_direction.value = this.directionX;
      obj.renderMaterial(shader, this.renderTargetsHorizontal[i]);
      shader.uniforms.u_texture.value = this.renderTargetsHorizontal[i].texture;
      shader.uniforms.u_direction.value = this.directionY;
      obj.renderMaterial(shader, this.renderTargetsVertical[i]);
      inputRenderTarget = this.renderTargetsVertical[i];
    }
    this.material.uniforms.u_texture.value = obj.fromTexture;
    this.material.uniforms.u_greyRatio.value = this.greyRatio;
    /** @type {number} */
    var s = 0;
    for (; s < segments; s++) {
      /** @type {number} */
      var l = (segments - s) / segments;
      /** @type {number} */
      this.uniforms.u_bloomWeights.value[s] = this.amount * ctx.mix(l, 1.2 - l, this.radius) / Math.pow(2, segments - s - 1);
    }
    e.render.call(this, obj, value);
  };
  /** @type {function(number): undefined} */
  blob.exports = start;
}, function(module, canCreateDiscussions, require) {
  /**
   * @param {string} val
   * @param {!Array} transform
   * @return {?}
   */
  function render(val, transform) {
    switch(kindOf(val)) {
      case "Object":
        return function(b, t) {
          if (r(b)) {
            var n = {};
            return g(b, function(a, key) {
              this[key] = render(a, t);
            }, n), n;
          }
          return t ? t(b) : b;
        }(val, transform);
      case "Array":
        return function(keys, value) {
          /** @type {!Array} */
          var results = [];
          /** @type {number} */
          var i = -1;
          var length = keys.length;
          for (; ++i < length;) {
            results[i] = render(keys[i], value);
          }
          return results;
        }(val, transform);
      default:
        return createElementFrom(val);
    }
  }
  var createElementFrom = require(95);
  var g = require(23);
  var kindOf = require(22);
  var r = require(31);
  /** @type {function(string, !Array): ?} */
  module.exports = render;
}, function(mixin, canCreateDiscussions, __webpack_require__) {
  var kindOf = __webpack_require__(22);
  var isArray = __webpack_require__(31);
  var flatten = __webpack_require__(6);
  /**
   * @param {string} val
   * @return {?}
   */
  mixin.exports = function(val) {
    switch(kindOf(val)) {
      case "Object":
        return isArray(opts = val) ? flatten({}, opts) : opts;
      case "Array":
        return val.slice();
      case "RegExp":
        return flags = "", flags = flags + ((options = val).multiline ? "m" : ""), flags = flags + (options.global ? "g" : ""), flags = flags + (options.ignoreCase ? "i" : ""), new RegExp(options.source, flags);
      case "Date":
        return new Date(+val);
      default:
        return val;
    }
    var options;
    var flags;
    var opts;
  };
}, function(mixin, canCreateDiscussions, iter_f) {
  var next = iter_f(42);
  /**
   * @param {!Object} x
   * @return {?}
   */
  mixin.exports = function(x) {
    return next(x, "Object");
  };
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "varying vec2 v_uv;\nuniform sampler2D u_texture;\nuniform float u_greyRatio;\n\nuniform sampler2D u_blurTexture0;\n#if ITERATION > 1\nuniform sampler2D u_blurTexture1;\n#endif\n#if ITERATION > 2\nuniform sampler2D u_blurTexture2;\n#endif\n#if ITERATION > 3\nuniform sampler2D u_blurTexture3;\n#endif\n#if ITERATION > 4\nuniform sampler2D u_blurTexture4;\n#endif\nuniform float u_bloomWeights[ITERATION];\n\n#include <common>\n\t// based on https://www.shadertoy.com/view/MslGR8\n\tvec3 dithering( vec3 color ) {\n\t\t//Calculate grid position\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\n\t\t//Shift the individual colors differently, thus making it even harder to see the dithering pattern\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\n\t\t//modify shift acording to grid position.\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\n\t\t//shift the color by dither_shift\n\t\treturn color + dither_shift_RGB;\n\t}\n\nvoid main() {\n\tvec4 c = texture2D(u_texture, v_uv);\n\t// float a = 1.0 - v;//mix(1.0, 0.1, v);\n\n\tgl_FragColor = c + (\n\t\tu_bloomWeights[0] * texture2D(u_blurTexture0, v_uv)\n\t\t#if ITERATION > 1\n\t\t+ u_bloomWeights[1] * texture2D(u_blurTexture1, v_uv)\n\t\t#endif\n\t\t#if ITERATION > 2\n\t\t+ u_bloomWeights[2] * texture2D(u_blurTexture2, v_uv)\n\t\t#endif\n\t\t#if ITERATION > 3\n\t\t+ u_bloomWeights[3] * texture2D(u_blurTexture3, v_uv)\n\t\t#endif\n\t\t#if ITERATION > 4\n\t\t+ u_bloomWeights[4] * texture2D(u_blurTexture4, v_uv)\n\t\t#endif\n\t);// * a;\n\n\tvec3 luma = vec3( 0.299, 0.587, 0.114 );\n\tfloat v = dot( c.xyz, luma );\n\tvec3 blend = mix(vec3(0.0,0.0,1.0), vec3(1.0,0.0,1.0), v);\n\tblend = sqrt(gl_FragColor.rgb) * (2.0 * blend - 1.0) + 2.0 * gl_FragColor.rgb * (1.0 - blend), \n        2.0 * gl_FragColor.rgb * blend + gl_FragColor.rgb * gl_FragColor.rgb * (1.0 - 2.0 * blend), \n        step(gl_FragColor.rgb, vec3(0.5));\n\t\t\n\tgl_FragColor.rgb = mix(\n\t\tgl_FragColor.rgb,\n        blend,\n\t\t0.6 \n\t);\n\n\tfloat greyScale = dot(gl_FragColor.rgb, luma);\n\tgl_FragColor.rgb = mix(\n\t\tgl_FragColor.rgb,\n        vec3(greyScale * 0.8 + 0.1),\n\t\tu_greyRatio\n\t);\n\n\t// gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n\tgl_FragColor.a = 1.0;\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "uniform sampler2D u_texture;\n\nuniform float u_luminosityThreshold;\nuniform float u_smoothWidth;\n\nvarying vec2 v_uv;\n\nvoid main() {\n\n\tvec3 texel = texture2D( u_texture, v_uv ).rgb;\n\n\tvec3 luma = vec3( 0.299, 0.587, 0.114 );\n\n\tfloat v = dot( texel, luma );\n\n\tvec4 outputColor = vec4(0.0, 0.0, 0.0, 1.0);\n\n\tfloat alpha = smoothstep( u_luminosityThreshold, u_luminosityThreshold + u_smoothWidth, v );\n\n\toutputColor.rgb = mix( outputColor.rgb, texel, alpha );\n\n\tgl_FragColor = outputColor;\n\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "varying vec2 v_uv;\nuniform sampler2D u_texture;\nuniform vec2 u_resolution;\nuniform vec2 u_direction;\n\nfloat gaussianPdf(in float x, in float sigma) {\n\treturn 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;\n}\nvoid main() {\n\tvec2 invSize = 1.0 / u_resolution;\n\tfloat fSigma = float(SIGMA);\n\tfloat weightSum = gaussianPdf(0.0, fSigma);\n\tvec3 diffuseSum = texture2D( u_texture, v_uv).rgb * weightSum;\n\tfor( int i = 1; i < KERNEL_RADIUS; i ++ ) {\n\t\tfloat x = float(i);\n\t\tfloat w = gaussianPdf(x, fSigma);\n\t\tvec2 uvOffset = u_direction * invSize * x;\n\t\tvec3 sample1 = texture2D( u_texture, v_uv + uvOffset).rgb;\n\t\tvec3 sample2 = texture2D( u_texture, v_uv - uvOffset).rgb;\n\t\tdiffuseSum += (sample1 + sample2) * w;\n\t\tweightSum += 2.0 * w;\n\t}\n\tgl_FragColor = vec4(diffuseSum/weightSum, 1.0);\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "attribute vec3 position;\n\nuniform vec2 u_resolutionInv;\n\nvarying vec2 v_uv;\nvarying vec4 v_offsets[ 2 ];\n\nvoid SMAANeighborhoodBlendingVS( vec2 texcoord ) {\n  v_offsets[ 0 ] = texcoord.xyxy + u_resolutionInv.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component\n  v_offsets[ 1 ] = texcoord.xyxy + u_resolutionInv.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component\n}\n\nvoid main() {\n\tv_uv = position.xy * 0.5 + 0.5;\n\n  SMAANeighborhoodBlendingVS( v_uv );\n\n  // gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n  gl_Position = vec4( position, 1.0 );\n\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "uniform sampler2D u_weightsTexture;\nuniform sampler2D u_texture;\nuniform vec2 u_resolutionInv;\n\nvarying vec2 v_uv;\nvarying vec4 v_offsets[ 2 ];\n\nvec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {\n  // Fetch the blending weights for current pixel:\n  vec4 a;\n  a.xz = texture2D( blendTex, texcoord ).xz;\n  a.y = texture2D( blendTex, offset[ 1 ].zw ).g;\n  a.w = texture2D( blendTex, offset[ 1 ].xy ).a;\n\n  // Is there any blending weight with a value greater than 0.0?\n  if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {\n    return texture2D( colorTex, texcoord, 0.0 );\n  } else {\n    // Up to 4 lines can be crossing a pixel (one through each edge). We\n    // favor blending by choosing the line with the maximum weight for each\n    // direction:\n    vec2 offset;\n    offset.x = a.a > a.b ? a.a : -a.b; // left vs. right\n    offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs\n\n    // Then we go in the direction that has the maximum weight:\n    if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical\n      offset.y = 0.0;\n    } else {\n      offset.x = 0.0;\n    }\n\n    // Fetch the opposite color and lerp by hand:\n    vec4 C = texture2D( colorTex, texcoord, 0.0 );\n    texcoord += sign( offset ) * u_resolutionInv;\n    vec4 Cop = texture2D( colorTex, texcoord, 0.0 );\n    float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );\n\n    // WebGL port note: Added gamma correction\n    C.xyz = pow(abs(C.xyz), vec3(2.2));\n    Cop.xyz = pow(abs(Cop.xyz), vec3(2.2));\n    vec4 mixed = mix(C, Cop, s);\n    mixed.xyz = pow(abs(mixed.xyz), vec3(1.0 / 2.2));\n\n    return mixed;\n  }\n}\n\nvoid main() {\n\n  gl_FragColor = SMAANeighborhoodBlendingPS( v_uv, v_offsets, u_texture, u_weightsTexture );\n\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "attribute vec3 position;\n\nuniform vec2 u_resolutionInv;\n\nvarying vec2 v_uv;\nvarying vec4 v_offsets[ 3 ];\n\nvoid SMAAEdgeDetectionVS( vec2 texcoord ) {\n  v_offsets[ 0 ] = texcoord.xyxy + u_resolutionInv.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component\n  v_offsets[ 1 ] = texcoord.xyxy + u_resolutionInv.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component\n  v_offsets[ 2 ] = texcoord.xyxy + u_resolutionInv.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component\n}\n\nvoid main() {\n\n\tv_uv = position.xy * 0.5 + 0.5;\n\n  SMAAEdgeDetectionVS( v_uv );\n\n  // gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n  gl_Position = vec4( position, 1.0 );\n\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "uniform sampler2D u_texture;\n\nvarying vec2 v_uv;\nvarying vec4 v_offsets[ 3 ];\n\nvec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {\n  vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );\n\n  // Calculate color deltas:\n  vec4 delta;\n  vec3 C = texture2D( colorTex, texcoord ).rgb;\n\n  vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;\n  vec3 t = abs( C - Cleft );\n  delta.x = max( max( t.r, t.g ), t.b );\n\n  vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;\n  t = abs( C - Ctop );\n  delta.y = max( max( t.r, t.g ), t.b );\n\n  // We do the usual threshold:\n  vec2 edges = step( threshold, delta.xy );\n\n  // Then discard if there is no edge:\n  if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )\n    discard;\n\n  // Calculate right and bottom deltas:\n  vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;\n  t = abs( C - Cright );\n  delta.z = max( max( t.r, t.g ), t.b );\n\n  vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;\n  t = abs( C - Cbottom );\n  delta.w = max( max( t.r, t.g ), t.b );\n\n  // Calculate the maximum delta in the direct neighborhood:\n  float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );\n\n  // Calculate left-left and top-top deltas:\n  vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;\n  t = abs( C - Cleftleft );\n  delta.z = max( max( t.r, t.g ), t.b );\n\n  vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;\n  t = abs( C - Ctoptop );\n  delta.w = max( max( t.r, t.g ), t.b );\n\n  // Calculate the final maximum delta:\n  maxDelta = max( max( maxDelta, delta.z ), delta.w );\n\n  // Local contrast adaptation in action:\n  edges.xy *= step( 0.5 * maxDelta, delta.xy );\n\n  return vec4( edges, 0.0, 0.0 );\n}\n\nvoid main() {\n\n  gl_FragColor = SMAAColorEdgeDetectionPS( v_uv, v_offsets, u_texture );\n\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "attribute vec3 position;\n\nuniform vec2 u_resolutionInv;\n\nvarying vec2 v_uv;\nvarying vec4 v_offsets[ 3 ];\nvarying vec2 v_pixcoord;\n\nvoid SMAABlendingWeightCalculationVS( vec2 texcoord ) {\n  v_pixcoord = texcoord / u_resolutionInv;\n\n  // We will use these offsets for the searches later on (see @PSEUDO_GATHER4):\n  v_offsets[ 0 ] = texcoord.xyxy + u_resolutionInv.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components\n  v_offsets[ 1 ] = texcoord.xyxy + u_resolutionInv.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components\n\n  // And these for the searches, they indicate the ends of the loops:\n  v_offsets[ 2 ] = vec4( v_offsets[ 0 ].xz, v_offsets[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * u_resolutionInv.xxyy * float( SMAA_MAX_SEARCH_STEPS );\n\n}\n\nvoid main() {\n\tv_uv = position.xy * 0.5 + 0.5;\n\n  SMAABlendingWeightCalculationVS( v_uv );\n\n  // gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n  gl_Position = vec4( position, 1.0 );\n\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "\n#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * u_resolutionInv, 0.0 )\n\nuniform sampler2D u_edgesTexture;\nuniform sampler2D u_areaTexture;\nuniform sampler2D u_searchTexture;\nuniform vec2 u_resolutionInv;\n\nvarying vec2 v_uv;\nvarying vec4 v_offsets[3];\nvarying vec2 v_pixcoord;\n\nvec2 round( vec2 x ) {\n  return sign( x ) * floor( abs( x ) + 0.5 );\n}\n\nfloat SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {\n  // Not required if searchTex accesses are set to point:\n  // float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);\n  // e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +\n  //     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;\n  e.r = bias + e.r * scale;\n  return 255.0 * texture2D( searchTex, e, 0.0 ).r;\n}\n\nfloat SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {\n  /**\n  * @PSEUDO_GATHER4\n  * This texcoord has been offset by (-0.25, -0.125) in the vertex shader to\n  * sample between edge, thus fetching four edges in a row.\n  * Sampling with different offsets in each direction allows to disambiguate\n  * which edges are active from the four fetched ones.\n  */\n  vec2 e = vec2( 0.0, 1.0 );\n\n  for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for\n    e = texture2D( edgesTex, texcoord, 0.0 ).rg;\n    texcoord -= vec2( 2.0, 0.0 ) * u_resolutionInv;\n    if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;\n  }\n\n  // We correct the previous (-0.25, -0.125) offset we applied:\n  texcoord.x += 0.25 * u_resolutionInv.x;\n\n  // The searches are bias by 1, so adjust the coords accordingly:\n  texcoord.x += u_resolutionInv.x;\n\n  // Disambiguate the length added by the last step:\n  texcoord.x += 2.0 * u_resolutionInv.x; // Undo last step\n  texcoord.x -= u_resolutionInv.x * SMAASearchLength(searchTex, e, 0.0, 0.5);\n\n  return texcoord.x;\n}\n\nfloat SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {\n  vec2 e = vec2( 0.0, 1.0 );\n\n  for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for\n    e = texture2D( edgesTex, texcoord, 0.0 ).rg;\n    texcoord += vec2( 2.0, 0.0 ) * u_resolutionInv;\n    if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;\n  }\n\n  texcoord.x -= 0.25 * u_resolutionInv.x;\n  texcoord.x -= u_resolutionInv.x;\n  texcoord.x -= 2.0 * u_resolutionInv.x;\n  texcoord.x += u_resolutionInv.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );\n\n  return texcoord.x;\n}\n\nfloat SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {\n  vec2 e = vec2( 1.0, 0.0 );\n\n  for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for\n    e = texture2D( edgesTex, texcoord, 0.0 ).rg;\n    texcoord += vec2( 0.0, 2.0 ) * u_resolutionInv; // WebGL port note: Changed sign\n    if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;\n  }\n\n  texcoord.y -= 0.25 * u_resolutionInv.y; // WebGL port note: Changed sign\n  texcoord.y -= u_resolutionInv.y; // WebGL port note: Changed sign\n  texcoord.y -= 2.0 * u_resolutionInv.y; // WebGL port note: Changed sign\n  texcoord.y += u_resolutionInv.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign\n\n  return texcoord.y;\n}\n\nfloat SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {\n  vec2 e = vec2( 1.0, 0.0 );\n\n  for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for\n    e = texture2D( edgesTex, texcoord, 0.0 ).rg;\n    texcoord -= vec2( 0.0, 2.0 ) * u_resolutionInv; // WebGL port note: Changed sign\n    if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;\n  }\n\n  texcoord.y += 0.25 * u_resolutionInv.y; // WebGL port note: Changed sign\n  texcoord.y += u_resolutionInv.y; // WebGL port note: Changed sign\n  texcoord.y += 2.0 * u_resolutionInv.y; // WebGL port note: Changed sign\n  texcoord.y -= u_resolutionInv.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign\n\n  return texcoord.y;\n}\n\nvec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {\n  // Rounding prevents precision errors of bilinear filtering:\n  vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;\n\n  // We do a scale and bias for mapping to texel space:\n  texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );\n\n  // Move to proper place, according to the subpixel offset:\n  texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;\n\n  return texture2D( areaTex, texcoord, 0.0 ).rg;\n}\n\nvec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {\n  vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );\n\n  vec2 e = texture2D( edgesTex, texcoord ).rg;\n\n  if ( e.g > 0.0 ) { // Edge at north\n    vec2 d;\n\n    // Find the distance to the left:\n    vec2 coords;\n    coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );\n    coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * u_resolutionInv.y (@CROSSING_OFFSET)\n    d.x = coords.x;\n\n    // Now fetch the left crossing edges, two at a time using bilinear\n    // filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to\n    // discern what value each edge has:\n    float e1 = texture2D( edgesTex, coords, 0.0 ).r;\n\n    // Find the distance to the right:\n    coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );\n    d.y = coords.x;\n\n    // We want the distances to be in pixel units (doing this here allow to\n    // better interleave arithmetic and memory accesses):\n    d = d / u_resolutionInv.x - pixcoord.x;\n\n    // SMAAArea below needs a sqrt, as the areas texture is compressed\n    // quadratically:\n    vec2 sqrt_d = sqrt( abs( d ) );\n\n    // Fetch the right crossing edges:\n    coords.y -= 1.0 * u_resolutionInv.y; // WebGL port note: Added\n    float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;\n\n    // Ok, we know how this pattern looks like, now it is time for getting\n    // the actual area:\n    weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );\n  }\n\n  if ( e.r > 0.0 ) { // Edge at west\n    vec2 d;\n\n    // Find the distance to the top:\n    vec2 coords;\n\n    coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );\n    coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * u_resolutionInv.x;\n    d.x = coords.y;\n\n    // Fetch the top crossing edges:\n    float e1 = texture2D( edgesTex, coords, 0.0 ).g;\n\n    // Find the distance to the bottom:\n    coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );\n    d.y = coords.y;\n\n    // We want the distances to be in pixel units:\n    d = d / u_resolutionInv.y - pixcoord.y;\n\n    // SMAAArea below needs a sqrt, as the areas texture is compressed\n    // quadratically:\n    vec2 sqrt_d = sqrt( abs( d ) );\n\n    // Fetch the bottom crossing edges:\n    coords.y -= 1.0 * u_resolutionInv.y; // WebGL port note: Added\n    float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;\n\n    // Get the area for this direction:\n    weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );\n  }\n\n  return weights;\n}\n\nvoid main() {\n\n  gl_FragColor = SMAABlendingWeightCalculationPS( v_uv, v_pixcoord, v_offsets, u_edgesTexture, u_areaTexture, u_searchTexture, ivec4( 0.0 ) );\n\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "varying vec3 v_worldPosition;\n\nvoid main () {\n    v_worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    \n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "\nuniform vec3 u_color;\nuniform vec3 u_cameraPosition;\nuniform vec3 u_lightPosition;\nuniform vec3 u_lightColor;\n\nvarying vec3 v_worldPosition;\n\n#include <getScatter>\n#include <common>\n#include <dithering_pars_fragment>\n\nvoid main () {\n    vec3 toCameraWorld = v_worldPosition - u_cameraPosition;\n    vec3 nToCameraWorldDir = normalize(toCameraWorld);\n    float toCameraDist = length(toCameraWorld);\n\n    float scatter = getScatter(u_cameraPosition, nToCameraWorldDir, u_lightPosition, toCameraDist);\n\n    // vec3 color = u_color * 0.15 * (0.65 + 0.4 * scatter) + scatter * 0.75 * u_lightColor;\n    vec3 color = u_color * 0.15 * (0.65 + 0.4 * scatter) + scatter * u_lightColor;\n\n    gl_FragColor = vec4(dithering(color), 1.0);\n}";
}, function(canCreateDiscussions, self, require) {
  var tree = require(1);
  var projectConfig = require(3);
  var options = require(109);
  var TagHourlyStat = require(32);
  var THREE = require(0);
  /**
   * @param {!Object} type
   * @return {undefined}
   */
  self.preInit = function(type) {
    /** @type {!Object} */
    config = type;
    (texture = new THREE.Texture(tree.loader.add(projectConfig.cdnPath + "visuals/featured/sprite.png").content)).magFilter = texture.minFilter = THREE.LinearFilter;
    /** @type {boolean} */
    texture.needsUpdate = true;
  };
  /**
   * @return {undefined}
   */
  self.init = function() {
    options.init(config);
    var geometry = new THREE.BufferGeometry;
    /** @type {number} */
    value = size * height;
    var width = options.textureWidth;
    var offset = options.textureHeight;
    /** @type {number} */
    var n = width * offset;
    /** @type {!Float32Array} */
    var vertices = new Float32Array(3 * n);
    /** @type {!Float32Array} */
    var colors = new Float32Array(n);
    /** @type {!Float32Array} */
    var points = new Float32Array(n);
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var n3 = 0;
    for (; i < n; i++) {
      /** @type {number} */
      vertices[n3 + 0] = (i % width + .5) / width;
      /** @type {number} */
      vertices[n3 + 1] = (.5 + ~~(i / width)) / offset;
      /** @type {number} */
      vertices[n3 + 2] = .2 + .8 * Math.random();
      /** @type {number} */
      colors[i] = .5 + ~~(Math.random() * value);
      /** @type {number} */
      points[i] = .7 * Math.random() + .3;
      /** @type {number} */
      n3 = n3 + 3;
    }
    if (geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3)), geometry.setAttribute("a_spriteIndex", new THREE.BufferAttribute(colors, 1)), geometry.setAttribute("a_pointSize", new THREE.BufferAttribute(points, 1)), material = new THREE.ShaderMaterial({
      uniforms : {
        u_positionTexture : options.sharedUniforms.u_currPositionTexture,
        u_time : {
          value : 0
        },
        u_color : {
          value : new THREE.Color(16777215)
        },
        u_lightDistance : {
          value : 9
        },
        u_diffMultiplier : {
          value : .45
        },
        u_specMultiplier : {
          value : 1
        },
        u_viewportHeight : {
          value : 1
        },
        u_particleScale : {
          value : 12
        },
        u_spriteTexture : {
          value : texture
        },
        u_spriteTileTexelSizes : {
          value : new THREE.Vector2(1 / size, 1 / height)
        },
        u_spriteTileSizes : {
          value : new THREE.Vector2(size, height)
        },
        u_spriteTextureSize : {
          value : new THREE.Vector2(width, offset)
        },
        u_spriteCount : {
          value : value
        },
        u_spriteIndexOffset : {
          value : 0
        },
        u_depthFrom : {
          value : 1.021215625
        },
        u_depthTo : {
          value : -1.01572 / .96
        },
        u_lightColor : TagHourlyStat.sharedUniforms.u_lightColor,
        u_lightScatterDivider : TagHourlyStat.sharedUniforms.u_lightScatterDivider,
        u_lightScatterPowInv : TagHourlyStat.sharedUniforms.u_lightScatterPowInv,
        u_lightPosition : TagHourlyStat.sharedUniforms.u_lightPosition,
        u_cameraPosition : TagHourlyStat.sharedUniforms.u_cameraPosition,
        u_lightViewPosition : TagHourlyStat.sharedUniforms.u_lightViewPosition
      },
      vertexShader : require(111),
      fragmentShader : require(112),
      blending : THREE.NoBlending
    }), projectConfig.useFloatPacking) {
      var uniforms = material.uniforms;
      uniforms.u_positionTextureZW = options.sharedUniforms.u_currPositionTextureZW;
      uniforms.u_posPackDividers = options.sharedUniforms.u_posPackDividers;
      /** @type {boolean} */
      material.defines.IS_PACKED = true;
    }
    self.mesh = new THREE.Points(geometry, material);
    /** @type {boolean} */
    self.mesh.frustumCulled = false;
  };
  /**
   * @param {number} v
   * @return {undefined}
   */
  self.update = function(v) {
    options.update(v);
    material.uniforms.u_time.value += v;
    material.uniforms.u_viewportHeight.value = tree.height;
    material.uniforms.u_color.value.setHex(config.pointColor);
    material.uniforms.u_diffMultiplier.value = config.diffMultiplier;
    material.uniforms.u_specMultiplier.value = config.specMultiplier;
    /** @type {number} */
    material.uniforms.u_spriteIndexOffset.value = (material.uniforms.u_spriteIndexOffset.value + 1) % value;
  };
  /** @type {null} */
  self.mesh = null;
  var config = void 0;
  var material = void 0;
  var texture = void 0;
  var value = void 0;
  /** @type {number} */
  var size = 32;
  /** @type {number} */
  var height = 8;
}, function(canCreateDiscussions, options, require) {
  var CheckDailyStat = require(3);
  var exports = require(4);
  var TagHourlyStat = require(32);
  var PerlinNoise = require(2);
  var THREE = require(0);
  /**
   * @param {number} obj
   * @return {undefined}
   */
  options.init = function(obj) {
    /** @type {number} */
    scope = obj;
    size = obj.pointCount;
    var grid = PerlinNoise.powerTwoTextureSize(size);
    width = options.textureWidth = grid.w;
    height = options.textureHeight = grid.h;
    /** @type {number} */
    size = width * height;
    (function() {
      /** @type {!Float32Array} */
      var v = new Float32Array(4 * size);
      /** @type {number} */
      var is = 0;
      var e2ps = void 0;
      var latRad = void 0;
      var phi1Rad = void 0;
      /** @type {number} */
      var n = 0;
      for (; n < size; n++) {
        /** @type {number} */
        e2ps = 1.8 * (.7 + .3 * Math.random());
        /** @type {number} */
        latRad = (Math.random() - .5) * Math.PI;
        /** @type {number} */
        phi1Rad = Math.random() * Math.PI * 2;
        /** @type {number} */
        v[is + 0] = e2ps * Math.cos(phi1Rad) * Math.cos(latRad) + 2;
        /** @type {number} */
        v[is + 1] = e2ps * Math.sin(latRad);
        /** @type {number} */
        v[is + 2] = e2ps * Math.sin(phi1Rad) * Math.cos(latRad) * 2;
        /** @type {number} */
        v[is + 3] = n / size;
        /** @type {number} */
        is = is + 4;
      }
      if (CheckDailyStat.useFloatPacking) {
        /** @type {!Uint8Array} */
        var output = new Uint8Array(4 * size);
        /** @type {!Uint8Array} */
        var a = new Uint8Array(4 * size);
        !function(a, n, dst) {
          var cz = void 0;
          var magn = void 0;
          var o = void 0;
          /** @type {number} */
          var T = 0;
          /** @type {number} */
          var i = 0;
          /** @type {number} */
          var u = a.length;
          for (; T < u; T++) {
            /** @type {number} */
            o = a[i + 0] / textLeft * .5 + .5;
            /** @type {number} */
            cz = o % 1 - (magn = 255 * o % 1) / 255;
            /** @type {number} */
            n[i + 0] = 255 * cz;
            /** @type {number} */
            n[i + 1] = 255 * magn;
            /** @type {number} */
            o = a[i + 1] / textLeft * .5 + .5;
            /** @type {number} */
            cz = o % 1 - (magn = 255 * o % 1) / 255;
            /** @type {number} */
            n[i + 2] = 255 * cz;
            /** @type {number} */
            n[i + 3] = 255 * magn;
            /** @type {number} */
            o = a[i + 2] / textLeft * .5 + .5;
            /** @type {number} */
            cz = o % 1 - (magn = 255 * o % 1) / 255;
            /** @type {number} */
            dst[i + 0] = 255 * cz;
            /** @type {number} */
            dst[i + 1] = 255 * magn;
            /** @type {number} */
            o = a[i + 3] / unitHeight * .5 + .5;
            /** @type {number} */
            cz = o % 1 - (magn = 255 * o % 1) / 255;
            /** @type {number} */
            dst[i + 2] = 255 * cz;
            /** @type {number} */
            dst[i + 3] = 255 * magn;
            /** @type {number} */
            i = i + 4;
          }
        }(v, output, a);
        /** @type {boolean} */
        (res = exports.createDataTexture(output, width, height, true, true, true)).needsUpdate = true;
        /** @type {boolean} */
        (node = exports.createDataTexture(a, width, height, true, true, true)).needsUpdate = true;
      } else {
        /** @type {boolean} */
        (res = exports.createDataTexture(v, width, height, true, true, true)).needsUpdate = true;
      }
    })();
    uniforms_height.u_defaultPositionTexture = {
      value : res
    };
    uniforms_height.u_prevPositionTexture = {
      value : null
    };
    uniforms_height.u_currPositionTexture = {
      value : null
    };
    stage = exports.createRenderTarget(width, height, true, true, true);
    value = stage.clone();
    shader = new THREE.RawShaderMaterial({
      uniforms : {
        u_defaultPositionTexture : uniforms_height.u_defaultPositionTexture,
        u_textureSize : {
          value : new THREE.Vector2(width, height)
        },
        u_positionTexture : uniforms_height.u_prevPositionTexture,
        u_speed : {
          value : .0027
        },
        u_dieSpeed : {
          value : .012
        },
        u_curlSize : {
          value : .33
        },
        u_rebornCenter : {
          value : new THREE.Vector3(0, 0, 0)
        },
        u_time : {
          value : 0
        },
        u_attractor : TagHourlyStat.sharedUniforms.u_lightPosition
      },
      vertexShader : exports.vertexShader,
      fragmentShader : exports.precisionPrefix + require(110),
      blending : THREE.NoBlending,
      transparent : true,
      depthWrite : false,
      depthTest : false
    });
    exports.copy(res, value);
    if (CheckDailyStat.useFloatPacking) {
      uniforms_height.u_prevPositionTextureZW = {
        value : null
      };
      uniforms_height.u_currPositionTextureZW = {
        value : null
      };
      uniforms_height.u_defaultPositionTextureZW = {
        value : node
      };
      uniforms_height.u_posPackDividers = {
        value : new THREE.Vector2(textLeft, unitHeight)
      };
      g = stage.clone();
      p = stage.clone();
      shader.uniforms.u_defaultPositionTextureZW = uniforms_height.u_defaultPositionTextureZW;
      shader.uniforms.u_positionTextureZW = uniforms_height.u_prevPositionTextureZW;
      shader.uniforms.u_posPackDividers = uniforms_height.u_posPackDividers;
      /** @type {boolean} */
      shader.defines.IS_PACKED = true;
      source = new THREE.RawShaderMaterial({
        uniforms : shader.uniforms,
        vertexShader : shader.vertexShader,
        fragmentShader : shader.fragmentShader
      });
      THREE.Material.prototype.copy.call(source, shader);
      /** @type {boolean} */
      source.defines.IS_PACKED = true;
      /** @type {boolean} */
      source.defines.IS_PACK_TO_ZW = true;
      exports.copy(node, p);
    }
  };
  /**
   * @param {number} fn
   * @return {undefined}
   */
  options.update = function(fn) {
    var stack = exports.getColorState();
    n = stage;
    stage = value;
    value = n;
    uniforms_height.u_prevPositionTexture.value = stage.texture;
    uniforms_height.u_currPositionTexture.value = value.texture;
    if (CheckDailyStat.useFloatPacking) {
      n = g;
      g = p;
      p = n;
      uniforms_height.u_prevPositionTextureZW.value = g.texture;
      uniforms_height.u_currPositionTextureZW.value = p.texture;
    }
    shader.uniforms.u_time.value += .3 * fn;
    /** @type {number} */
    shader.uniforms.u_rebornCenter.value.y = 2 * scope.cameraPosition.y + 1;
    exports.render(shader, value);
    if (CheckDailyStat.useFloatPacking) {
      exports.render(source, p);
    }
    var n;
    exports.setColorState(stack);
  };
  var uniforms_height = options.sharedUniforms = {};
  var scope = void 0;
  var size = void 0;
  /** @type {number} */
  var width = options.textureWidth = 0;
  /** @type {number} */
  var height = options.textureHeight = 0;
  var stage = void 0;
  var value = void 0;
  var g = void 0;
  var p = void 0;
  var res = void 0;
  var node = void 0;
  var shader = void 0;
  var source = void 0;
  /** @type {number} */
  var textLeft = 32;
  /** @type {number} */
  var unitHeight = 4;
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "uniform sampler2D u_positionTexture;\nuniform sampler2D u_defaultPositionTexture;\n\n#ifdef IS_PACKED\nuniform sampler2D u_positionTextureZW;\nuniform sampler2D u_defaultPositionTextureZW;\nuniform vec2 u_posPackDividers;\n#include <halfFloatPacking>\n#include <samplePackedFloats>\n#endif\n\nuniform float u_time;\nuniform float u_speed;\nuniform float u_dieSpeed;\nuniform float u_curlSize;\nuniform vec3 u_attractor;\nuniform vec3 u_rebornCenter;\n\nvarying vec2 v_uv;\n\n#include <curl4Mid>\n\nvoid main() {\n\t#ifndef IS_PACKED\n\t\tvec4 positionInfo = texture2D(u_positionTexture, v_uv);\n\t#else\n\t\tvec4 positionInfo = samplePackedRGBA(u_positionTexture, u_positionTextureZW, v_uv, u_posPackDividers.xxxy);\n\t#endif\n\tpositionInfo.w -= u_dieSpeed;\n\n\tif(positionInfo.w < 0.0) {\n\t\t#ifndef IS_PACKED\n\t\t\tpositionInfo = texture2D(u_defaultPositionTexture, v_uv);\n\t\t#else\n\t\t\tpositionInfo = samplePackedRGBA(u_defaultPositionTexture, u_defaultPositionTextureZW, v_uv, u_posPackDividers.xxxy);\n\t\t#endif\n\t\tpositionInfo.w = positionInfo.w + 1.0;\n\t\tpositionInfo.xyz = positionInfo.xyz + u_rebornCenter;\n\t} else {\n\t\tvec3 toAttractor = positionInfo.xyz - u_attractor;\n\t\tfloat attractorWeight = smoothstep(2.7, 0.36, length(toAttractor));\n\t\tpositionInfo.xyz += curl(positionInfo.xyz * u_curlSize, u_time, 0.2 + (1.0 - positionInfo.w) * 0.2) * u_speed * (attractorWeight * attractorWeight * 4.0 + mix(2.0, 1.0, positionInfo.w));\n\t\ttoAttractor = positionInfo.xyz - u_attractor;\n\t\tpositionInfo.xyz += toAttractor * attractorWeight * -0.015;\n\t}\n\t#ifndef IS_PACKED\n\t\t\tgl_FragColor = positionInfo;\n\t#else\n\t\t#ifndef IS_PACK_TO_ZW\n    vec3 threshold = vec3(u_posPackDividers.x * 0.5 - 1.0);\n    positionInfo.xyz = clamp(positionInfo.xyz, -threshold, threshold);\n\t\t\tgl_FragColor = vec4(packHalfFloat(positionInfo.x, u_posPackDividers.x), packHalfFloat(positionInfo.y, u_posPackDividers.x));\n\t\t#else\n\t\t\tgl_FragColor = vec4(packHalfFloat(positionInfo.z, u_posPackDividers.x), packHalfFloat(positionInfo.w, u_posPackDividers.y));\n\t\t#endif\n\t#endif\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "attribute vec2 a_textureUv;\n\nattribute float a_spriteIndex;\nattribute float a_pointSize;\n\nuniform sampler2D u_positionTexture;\n#ifdef IS_PACKED\nuniform sampler2D u_positionTextureZW;\nuniform vec2 u_posPackDividers;\n#include <halfFloatPacking>\n#include <samplePackedFloats>\n#endif\n\nuniform float u_time;\nuniform float u_viewportHeight;\n\nuniform vec2 u_spriteTileSizes;\nuniform float u_spriteCount;\nuniform float u_spriteIndexOffset;\nuniform float u_particleScale;\n\nvarying vec3 v_worldPosition;\nvarying vec3 v_viewPosition;\nvarying float v_halfPointSize;\nvarying vec2 v_spriteUvOffset;\nvarying float v_brightness;\n\nvoid main () {\n\t#ifndef IS_PACKED\n    vec4 positionInfo = texture2D(u_positionTexture, position.xy);\n\t#else\n\t\tvec4 positionInfo = samplePackedRGBA(u_positionTexture, u_positionTextureZW, position.xy, u_posPackDividers.xxxy);\n\t#endif\n\n  // positionInfo.xyz = vec3(0.0);\n\n  vec3 pos = positionInfo.xyz;\n  v_worldPosition = (modelMatrix * vec4(pos, 1.0)).xyz;\n\n  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);\n  float pointSize = position.z * (smoothstep(0.0, 0.2, positionInfo.a) * smoothstep(1.0, 0.8, positionInfo.a) * 35.0) / abs(mvPosition.z) * u_viewportHeight / 1080.0 * u_particleScale;\n  // float pointSize = (a_pointSize * 15.0) / abs(mvPosition.z) * u_viewportHeight / 1080.0;\n\n  v_viewPosition = -mvPosition.xyz;\n\n  mvPosition.x += step(pointSize, 0.01) * 10000.0;\n\n  gl_Position = projectionMatrix * mvPosition;\n  pointSize = max(2.5, pointSize);\n  gl_PointSize = pointSize;\n\n  float spriteIndex = mod(a_spriteIndex + u_spriteIndexOffset, 256.0);\n  float spriteIndexXf = mod(spriteIndex, u_spriteTileSizes.x);\n  v_spriteUvOffset = vec2(\n    floor(spriteIndexXf),\n    floor((spriteIndex - spriteIndexXf + 0.5) / u_spriteTileSizes.x)\n  ) / u_spriteTileSizes;\n\n  v_brightness = smoothstep(0.9, 0.95, position.x);//smoothstep(0.15, 0.0, abs(positionInfo.w - 0.5));\n\n  v_halfPointSize = pointSize * 0.5 / u_viewportHeight * 2.0 / gl_Position.w;\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "uniform float u_lightDistance;\nuniform float u_diffMultiplier;\nuniform float u_specMultiplier;\n\nuniform vec3 u_cameraPosition;\nuniform vec3 u_lightColor;\nuniform vec3 u_lightPosition;\nuniform vec3 u_lightViewPosition;\n\nuniform vec3 u_color;\n\nuniform sampler2D u_spriteTexture;\nuniform vec2 u_spriteTileTexelSizes;\nuniform float u_depthFrom;\nuniform float u_depthTo;\n\nvarying vec3 v_worldPosition;\nvarying vec3 v_viewPosition;\nvarying float v_halfPointSize;\nvarying vec2 v_spriteUvOffset;\nvarying float v_brightness;\n\nfloat clampRange (float minVal, float maxVal, float val) {\n  return clamp((val - minVal) / (maxVal - minVal), 0.0, 1.0);\n}\n\n#include <getScatter>\n\nvoid main () {\n  vec2 uv = v_spriteUvOffset + gl_PointCoord.xy * u_spriteTileTexelSizes;\n  uv.y = 1.0 - uv.y;\n  vec3 N = pow(texture2D(u_spriteTexture, uv).xyz, vec3(2.2)) * 2.0 - 1.0;\n\n  if (N.z < 0.0) {\n    discard;\n  }\n  float depth = mix(u_depthFrom, u_depthTo, N.z);\n  N.z = sqrt(1.0 - N.x * N.x - N.y * N.y);\n  N = normalize(N);\n\n  vec3 viewGeometryPosition = -v_viewPosition + vec3(N.xy * 0.96, depth) * v_halfPointSize;\n\n  vec3 LtoG = u_lightViewPosition - viewGeometryPosition;\n  vec3 nLtoG = normalize(LtoG);\n  float distLtoG = length(LtoG);\n  float dotNL = dot(N, nLtoG);\n\n  float lightDistanceWeight =  pow(clampRange(u_lightDistance, 0.0, distLtoG), 5.0) * (1.0 + v_brightness);\n  \n  float diffuseFactor = smoothstep(-0.75 - v_brightness, 0.75, dotNL);\n\n  vec3 color = u_color * diffuseFactor * lightDistanceWeight * u_diffMultiplier;\n\n  // color += u_color * v_brightness;\n\n  float specDotValue = dot(reflect(normalize(viewGeometryPosition), N), nLtoG);\n\n  float spec = smoothstep(0.8 - v_brightness, 0.85, specDotValue) * u_specMultiplier * lightDistanceWeight;\n  color += spec * u_lightColor;\n\n  vec3 toCameraWorld = v_worldPosition - u_cameraPosition;\n  vec3 nToCameraWorldDir = normalize(toCameraWorld);\n  float toCameraDist = length(toCameraWorld);\n  float scatter = getScatter(u_cameraPosition, nToCameraWorldDir, u_lightPosition, toCameraDist);\n\n  color += color * 0.15 * (0.65 + 0.4 * scatter) + scatter * u_lightColor;\n\n  // gl_FragColor = vec4(N.xyz * 0.5 + 0.5, 1.0);\n  // gl_FragColor = vec4(normalize(LtoG) * 0.5 + 0.5, 1.0);\n  gl_FragColor = vec4(color, 1.0);\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "attribute vec3 position;\n\nuniform vec4 u_fromColor;\nuniform vec4 u_toColor;\nuniform float u_fromY;\nuniform float u_toY;\n\nvarying vec4 v_color;\n\nvoid main () {\n\tfloat ratio = 0.5 - position.y * 0.5;\n\tv_color = mix(u_fromColor, u_toColor, ratio);\n\tfloat y = 1.0 - mix(u_fromY, u_toY, ratio) * 2.0;\n\tgl_Position = vec4(position.x, y, 0.0, 1.0);\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "varying vec4 v_color;\n\nvoid main () {\n\tgl_FragColor = v_color;\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "attribute vec3 position;\nuniform vec4 u_ys;\nvarying vec2 v_uv;\nvarying float v_alpha;\n\nvoid main () {\n\tfloat ratio = 0.5 - position.y * 0.5;\n\tfloat y0 = mix(u_ys.x, u_ys.y, step(0.25, ratio));\n\tfloat y1 = mix(u_ys.z, u_ys.w, step(0.75, ratio));\n\tfloat y = mix(y0, y1, step(0.5, ratio));\n\ty = 1.0 - y * 2.0;\n\n\tv_alpha = step(abs(ratio - 0.5), 0.25);\n\n\tgl_Position = vec4(position.x, y, 0.0, 1.0);\n\tv_uv = gl_Position.xy * 0.5 + 0.5;\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "uniform sampler2D u_texture;\n\nvarying vec2 v_uv;\nvarying float v_alpha;\n\nvoid main() {\n    gl_FragColor = vec4(texture2D( u_texture, v_uv ).rgb, v_alpha);\n}\n";
}, function(module, canCreateDiscussions, require) {
  /**
   * @param {!Object} val
   * @return {undefined}
   */
  function render(val) {
    merge(this, {
      index : 0,
      dom : null,
      domRect : null,
      startedLoading : false,
      splitTextEffects : [],
      isVisible : false,
      isTextVisible : false,
      contextDomRect : null,
      inScreen : false,
      ratio : 0,
      tween : null
    }, val);
    this.id = this.dom.dataset.id;
    this.imageContainer = this.dom.querySelector(".featured-item-image");
    this.imageContainerInner = this.dom.querySelector(".featured-item-image-inner");
    this.contextContainer = this.dom.querySelector(".featured-item-context");
  }
  var platform = require(5);
  var projectConfig = require(3);
  var that = require(1);
  var a = require(51);
  var page = require(2);
  var options = require(15);
  var merge = require(6);
  var type = require(52);
  var Duplicity = require(11);
  var timeline = require(8);
  /** @type {function(!Object): undefined} */
  module.exports = render;
  var context = render.prototype;
  /**
   * @return {undefined}
   */
  context.preInit = function() {
    var me = this;
    that.loader.add(projectConfig.cdnPath + "work/" + this.id + "/" + (platform.isMobile ? "mobile_thumb.png" : "desktop_home_thumb.png"), {
      onLoad : function(item) {
        a.add(item, platform.isMobile ? 256 : 544, platform.isMobile ? 256 : 306, function(thumb) {
          /** @type {!Object} */
          me.thumb = thumb;
          me.imageContainerInner.appendChild(thumb);
        });
      }
    });
  };
  /**
   * @return {undefined}
   */
  context.init = function() {
    this.domRect = new Duplicity({
      refDom : this.dom
    });
    this.contextDomRect = new Duplicity({
      refDom : this.contextContainer
    });
    var dom = this.splitLineDoms = this.dom.querySelectorAll(".split-line-mask-effect");
    var o = this.splitTextEffects;
    /** @type {number} */
    var p = 0;
    var pos = dom.length;
    for (; p < pos; p++) {
      o[p] = new type({
        dom : dom[p]
      });
    }
  };
  /**
   * @return {undefined}
   */
  context.resize = function() {
    /** @type {string} */
    this.imageContainer.style.height = Math.floor(this.imageContainer.offsetWidth / 16 * 9) + "px";
    /** @type {string} */
    this.imageContainer.style.transform = this.contextContainer.style.transform = "translateZ(0)";
    this.domRect.testViewport(true);
    this.contextDomRect.testViewport(true);
    var result = this.splitTextEffects;
    var length = this.contextContainer.offsetWidth;
    /** @type {number} */
    var count = 0;
    /** @type {number} */
    var i = 0;
    var l = result.length;
    for (; i < l; i++) {
      var data = result[i];
      data.resize(length);
      data.delayBase = count;
      count = count + data.lineCount;
    }
    /** @type {number} */
    var indexIn = 0;
    var trlen = result.length;
    for (; indexIn < trlen; indexIn++) {
      result[indexIn].delayTotal = count;
    }
  };
  /**
   * @return {undefined}
   */
  context.loadImage = function() {
    if (!this.startedLoading) {
      /** @type {boolean} */
      this.startedLoading = true;
      var params = this;
      var t = this.thumb;
      that.loader.load(projectConfig.cdnPath + "work/" + this.id + "/" + (platform.isMobile ? "mobile.jpg" : "desktop_home.jpg"), {
        onLoad : function(item) {
          /** @type {!Object} */
          params.image = item;
          params.imageContainerInner.appendChild(item);
          if (params.inScreen) {
            /** @type {string} */
            item.style.transition = "opacity 1s";
            setTimeout(function() {
              /** @type {number} */
              item.style.opacity = 1;
            }, 50);
            setTimeout(function() {
              t.parentNode.removeChild(t);
              /** @type {null} */
              params.thumb = null;
            }, 1E3);
          } else {
            /** @type {number} */
            item.style.opacity = 1;
            t.parentNode.removeChild(t);
            /** @type {null} */
            params.thumb = null;
          }
        }
      });
    }
  };
  /**
   * @return {undefined}
   */
  context.reset = function() {
    timeline.killTweensOf(this.tween);
    /** @type {boolean} */
    this.isVisible = false;
    timeline.set(this, {
      ratio : 0
    });
    var itemPages = this.splitTextEffects;
    /** @type {number} */
    var currentItemPage = 0;
    var readersLength = itemPages.length;
    for (; currentItemPage < readersLength; currentItemPage++) {
      itemPages[currentItemPage].hide(0);
    }
  };
  /**
   * @return {undefined}
   */
  context.show = function() {
    timeline.killTweensOf(this.tween);
    this.tween = timeline.to(this, .75, {
      ratio : 1,
      ease : "linear"
    });
  };
  /**
   * @return {undefined}
   */
  context.update = function() {
    this.domRect.testViewport();
    this.contextDomRect.testViewport();
    if (this.domRect.bottom > 0 && this.domRect.top < .8 * that.height) {
      /** @type {boolean} */
      this.inScreen = true;
      this.loadImage();
    }
    if (!this.isVisible) {
      if (this.domRect.top < .8 * that.height) {
        /** @type {boolean} */
        this.isVisible = true;
        this.show();
      }
    }
    var itemPages = this.splitTextEffects;
    if (this.contextDomRect.top < that.height && this.contextDomRect.bottom > 0) {
      if (!this.isTextVisible) {
        /** @type {boolean} */
        this.isTextVisible = true;
        /** @type {number} */
        var currentItemPage = 0;
        var readersLength = itemPages.length;
        for (; currentItemPage < readersLength; currentItemPage++) {
          itemPages[currentItemPage].show(1);
        }
      }
    } else {
      if (this.isTextVisible) {
        /** @type {boolean} */
        this.isTextVisible = false;
        /** @type {number} */
        var currentItemPage = 0;
        var readersLength = itemPages.length;
        for (; currentItemPage < readersLength; currentItemPage++) {
          itemPages[currentItemPage].hide(.1);
        }
      }
    }
    var ratio = this.ratio;
    var height = page.fit(ratio, 0, .8, 1.6, 1, options.easeOutCubic);
    var border = page.fit(ratio, 0, .8, 10, 0, options.easeOutCubic);
    var zeroSizeMax = that.elasticMouse.x;
    var oy = that.elasticMouse.y;
    var pixelSizeTargetMax = this.domRect.left + .5 * this.domRect.width;
    var y = this.domRect.top + .5 * this.domRect.height * height + border;
    var fraction = page.smoothstep(1, .5, Math.abs(y / that.height / .5 - 1));
    /** @type {number} */
    var p = -.01 * (zeroSizeMax - pixelSizeTargetMax) * fraction;
    /** @type {number} */
    var value = -.01 * (oy - y) * fraction;
    /** @type {string} */
    this.imageContainer.style.transform = "translate(" + p + "px," + (border + 100 * value / that.height) + "vh) scale3d(1," + height + ",1)";
    ratio = itemPages[0].ratio;
    var numRatio = page.fit(ratio, 0, 1, 1.6, 1, options.easeOutCubic);
    var firstNum = page.fit(ratio, 0, 1, 20, 0, options.easeOutCubic);
    /** @type {string} */
    this.contextContainer.style.transform = "translate(" + (firstNum + 1.4 * p) + "px," + 100 * value / that.height * 1.4 + "vh) scale3d(" + numRatio + ",1,1)";
  };
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "uniform sampler2D u_texture;\nuniform vec2 u_textureSize;\nvarying vec2 v_uv;\n#include <cubic>\n#include <textureBicubic>\n\nvoid main () {\n\tgl_FragColor = textureBicubic(u_texture, v_uv, u_textureSize);\n}";
}, function(blob, canCreateDiscussions, require) {
  /**
   * @param {!Object} key
   * @return {undefined}
   */
  function data(key) {
    p.constructor.call(this, extend({
      duration : 0,
      delayBase : 0,
      delayTotal : 1,
      delayWeight : .2,
      inners : null,
      isVisible : false,
      textColor : 16777215,
      ratio : 0,
      tween : null
    }, key));
    this.dom.classList.add("split-line-up-effect");
    this.boundOnUpdate = this.update.bind(this);
  }
  var extend = require(6);
  var SettingsManager = require(53);
  var platform = require(2);
  var segIds = require(15);
  var timeline = require(8);
  var p = SettingsManager.prototype;
  /** @type {!Object} */
  var fxAccountsDialog = data.prototype = Object.create(p);
  /** @type {function(!Object): undefined} */
  blob.exports = data;
  /**
   * @return {undefined}
   */
  fxAccountsDialog.resize = function() {
    var _ref = this.lines || [];
    /** @type {number} */
    var _i = 0;
    var length = _ref.length;
    for (; _i < length; _i++) {
      var path = _ref[_i];
      /** @type {string} */
      path.style.width = "auto";
      /** @type {string} */
      path.style.height = "auto";
    }
    p.resize.call(this);
    _ref = this.lines;
    /** @type {number} */
    var k = 0;
    var mxk = _ref.length;
    for (; k < mxk; k++) {
      var a = _ref[k];
      /** @type {!Element} */
      var t = document.createElement("div");
      /** @type {string} */
      a.style.width = a.offsetWidth + 4 + "px";
      /** @type {string} */
      a.style.height = a.offsetHeight + "px";
      t.innerHTML = a.innerHTML;
      /** @type {string} */
      a.innerHTML = "";
      t.classList.add("split-line-inner");
      a.appendChild(t);
    }
    this.inners = this.dom.querySelectorAll(".split-line-inner");
    this.delayTotal = this.lineCount;
    this.update();
  };
  /**
   * @param {number} duration
   * @return {undefined}
   */
  fxAccountsDialog.show = function(duration) {
    timeline.killTweensOf(this.tween);
    /** @type {boolean} */
    this.isVisible = true;
    duration = this.duration = void 0 === duration ? 1 : duration;
    this.tween = timeline.to(this, duration, {
      ratio : 1,
      ease : "linear",
      onUpdate : this.boundOnUpdate
    });
  };
  /**
   * @param {number} duration
   * @return {undefined}
   */
  fxAccountsDialog.hide = function(duration) {
    timeline.killTweensOf(this.tween);
    /** @type {boolean} */
    this.isVisible = false;
    duration = this.duration = void 0 === duration ? 1 : duration;
    this.tween = timeline.to(this, duration, {
      ratio : 0,
      ease : "linear",
      onUpdate : this.boundOnUpdate
    });
  };
  /**
   * @return {undefined}
   */
  fxAccountsDialog.update = function() {
    if (this.lines) {
      var subMenuObjs = this.inners;
      var xx = this.ratio;
      /** @type {number} */
      var _gap = this.duration * this.delayWeight / this.delayTotal;
      /** @type {number} */
      var sita = 1 - _gap * this.delayTotal;
      /** @type {number} */
      var i = 0;
      var numsubMenuObjs = subMenuObjs.length;
      for (; i < numsubMenuObjs; i++) {
        var u = segIds.easeOutQuint(platform.cUnMix(_gap * i, sita + _gap * i, xx));
        /** @type {string} */
        subMenuObjs[i].style.transform = "translate3d(0," + (105 - 105 * u) + "%,0)";
      }
    }
  };
}, function(s, canCreateDiscussions, require) {
  /**
   * @return {undefined}
   */
  function Point() {
    parent.constructor.call(this, {
      id : "home",
      path : "",
      aliases : ["home"]
    });
  }
  var opts = require(121);
  var r = require(137);
  var api = require(157);
  var Promise = require(52);
  var List = require(11);
  var config = require(1);
  var platform = require(5);
  var Vignette = require(2);
  var parent = require(18).prototype;
  /** @type {!Object} */
  var p = Point.prototype = Object.create(parent);
  /** @type {function(): undefined} */
  p.constructor = Point;
  /**
   * @return {undefined}
   */
  p.preInit = function() {
    if (config.isSupportWebGL) {
      opts.preInit();
      r.preInit();
      api.preInit();
    }
  };
  /**
   * @return {undefined}
   */
  p.init = function() {
    if (config.isSupportWebGL) {
      opts.init();
      r.init();
      api.init();
    }
    var objectNodeBox = this.currentDom;
    data = new List({
      refDom : objectNodeBox.querySelector("#home-about .sec-context-inner")
    });
    /** @type {(null|string)} */
    var variable_encoded = "cn" === config.lang ? "" : null;
    /** @type {boolean} */
    var n = "cn" !== config.lang;
    self = new Promise({
      dom : objectNodeBox.querySelector("#home-about-title"),
      splitWith : variable_encoded,
      spaceBetweenWords : n
    });
    styles = self.dom.style;
    result = new Promise({
      dom : objectNodeBox.querySelector("#home-about-desc"),
      splitWith : variable_encoded,
      spaceBetweenWords : n
    });
    handle = result.dom.style;
    options = new Promise({
      dom : objectNodeBox.querySelector("#home-about-cta")
    });
    newNode = objectNodeBox.querySelector("#home-about-cta-wrapper");
    v = new List({
      refDom : newNode
    });
    attrValue = newNode.style;
    parent.init.call(this);
  };
  /**
   * @param {number} fn
   * @return {undefined}
   */
  p.show = function(fn) {
    if (!this.hasInitialized) {
      this.init(fn);
    }
    /** @type {boolean} */
    m = false;
    self.hide(0);
    result.hide(0);
    options.hide(0);
  };
  /**
   * @return {undefined}
   */
  p.hide = function() {
    if (config.isSupportWebGL) {
      api.pauseVideo();
    }
  };
  /**
   * @param {?} canCreateDiscussions
   * @return {?}
   */
  p.getScrollToFromRoute = function(canCreateDiscussions) {
    return "home";
  };
  /**
   * @return {undefined}
   */
  p.resize = function() {
    if (this.hasInitialized) {
      if (config.isSupportWebGL) {
        opts.resize();
        r.resize();
        api.resize();
      }
      /** @type {string} */
      styles.transform = handle.transform = attrValue.transform = "translateZ(0)";
      data.testViewport(true);
      self.resize(data.width);
      result.delayBase = self.lineCount;
      result.resize(data.width);
      options.delayBase = result.delayBase + result.lineCount;
      options.resize(data.width);
      self.delayTotal = result.delayTotal = options.delayTotal = options.delayBase + options.lineCount;
      /** @type {string} */
      attrValue.transform = "translateZ(0)";
      v.testViewport(true);
    }
  };
  /**
   * @param {number} e
   * @param {number} transform
   * @return {undefined}
   */
  p.update = function(e, transform) {
    if (this.hasInitialized) {
      data.testViewport();
      /** @type {number} */
      var val = 0;
      /** @type {number} */
      var y = 0;
      if (m) {
        if (!platform.isMobile && data.bottom > 0 && data.top < config.height) {
          var zeroSizeMax = config.elasticMouse.x;
          var oy = config.elasticMouse.y;
          var pixelSizeTargetMax = data.left + .5 * data.width;
          var o = data.top + .5 * data.height;
          var HeaderLevenshteinDistanceToLengthRatio = Vignette.smoothstep(1, .5, Math.abs(o / config.height / .5 - 1));
          /** @type {number} */
          var sign = -.015 * (zeroSizeMax - pixelSizeTargetMax) * HeaderLevenshteinDistanceToLengthRatio;
          /** @type {number} */
          var maxDistanceToConsiderSimilar = -.015 * (oy - o) * HeaderLevenshteinDistanceToLengthRatio;
          /** @type {string} */
          styles.transform = "translate3d(" + sign + "px," + maxDistanceToConsiderSimilar + "px,0)";
          /** @type {string} */
          handle.transform = "translate3d(" + 1.3 * sign + "px," + 1.3 * maxDistanceToConsiderSimilar + "px,0)";
          /** @type {number} */
          val = 1.4 * sign;
          /** @type {number} */
          y = 1.4 * maxDistanceToConsiderSimilar;
          /** @type {string} */
          attrValue.transform = "translate3d(" + val + "px," + y + "px,0)";
        }
      } else {
        if (data.bottom > 0 && data.top < .75 * config.height) {
          /** @type {boolean} */
          m = true;
          self.show(1.25);
          result.show(1.25);
          options.show(1.25);
        }
      }
      if (config.isSupportWebGL) {
        opts.update(e);
        api.update(e);
        v.testViewport();
        r.update(e, v, val, y, options.lastLineRatio);
      }
    }
    parent.update.call(this, e, transform);
  };
  var data = void 0;
  /** @type {boolean} */
  var m = false;
  var self = void 0;
  var styles = void 0;
  var result = void 0;
  var handle = void 0;
  var options = void 0;
  var newNode = void 0;
  var v = void 0;
  var attrValue = void 0;
  s.exports = new Point;
}, function(mixin, canCreateDiscussions, $) {
  /**
   * @return {undefined}
   */
  function b() {
    p.constructor.call(this, {
      refDomId : "home-hero",
      backgroundColor : 0,
      path : "",
      initialData : {
        cameraPositionZ : -2.5084,
        cameraRotationSpeed : -.0011,
        cameraRotationX : 0,
        cameraRotationY : 0,
        cameraRotationZ : -2.5084,
        homeHeroBgContainerRotationZ : -1.4203,
        u_time : 67.539,
        u_initRatio : 1,
        u_noiseTime : 1
      },
      parallax : 1.2,
      ROTATION_SPEED : 0,
      NODE_COUNT : 16,
      MAX_TUBE_COUNT : 1024,
      defaultCameraFov : 75,
      defaultLowColorHex : 397106,
      defaultLowColor : new THREE.Color(397106),
      defaultMidColorHex : 11864864,
      defaultMidColor : new THREE.Color(11864864),
      defaultHighColorHex : 15904687,
      defaultHighColor : new THREE.Color(15904687),
      fadeLowColorHex : 0,
      fadeLowColor : new THREE.Color(0),
      fadeMidColorHex : 2236962,
      fadeMidColor : new THREE.Color(2236962),
      fadeHighColorHex : 5592405,
      fadeHighColor : new THREE.Color(5592405),
      colors : [{
        bg0 : new THREE.Color(16777215),
        bg1 : new THREE.Color(14540253),
        tube0 : new THREE.Color(10066329),
        tube1 : new THREE.Color(4473924)
      }]
    });
  }
  var THREE = $(0);
  var r = $(34);
  var o = $(54);
  var _this = $(130);
  var scope = $(133);
  var u = $(10);
  var $realtime = $(33);
  var comp = $(3);
  var self = $(1);
  var CesiumMath = $(2);
  var p = u.prototype;
  /** @type {!Object} */
  var opts = b.prototype = Object.create(p);
  /** @type {function(): undefined} */
  opts.constructor = b;
  /**
   * @return {undefined}
   */
  opts.preInit = function() {
    THREE.ShaderChunk.homeHeroColorRemap = $(136).replace(/#define\sGLSLIFY\s./, "");
    p.preInit.call(this);
    this.sharedUniforms = {
      u_remapLowColorUniform : this.remapLowColorUniform = {
        value : new THREE.Color
      },
      u_remapMidColorUniform : this.remapMidColorUniform = {
        value : new THREE.Color
      },
      u_remapHighColorUniform : this.remapHighColorUniform = {
        value : new THREE.Color
      }
    };
    var action = this;
    self.loader.add(comp.assetPath + "visuals/homeHero/initial.buf", {
      type : "xhr",
      responseType : "arraybuffer",
      weight : 1,
      onLoad : function(data) {
        /** @type {!Float32Array} */
        action.initialData.splinePositions = new Float32Array(data);
      }
    });
    r.init(this);
    scope.init(this);
  };
  /**
   * @return {undefined}
   */
  opts.init = function() {
    p.init.call(this);
    o.init(this);
    _this.init(this);
    mesh = new THREE.Object3D;
    this.scene.add(mesh);
    mesh.add(this.camera);
    this.scene.add(scope.container);
    this.scene.add(_this.mesh);
    face = new THREE.Mesh(new THREE.SphereBufferGeometry(.2, 16, 12), new THREE.MeshBasicMaterial({
      color : 16777215
    }));
    this.scene.add(face);
    this.change();
    var globalBonePosition = this.initialData;
    if (this.camera.rotation.z = globalBonePosition.cameraPositionZ, this.camera.rotationSpeed = globalBonePosition.cameraRotationSpeed, this.camera.rotation.x = globalBonePosition.cameraRotationX, this.camera.rotation.y = globalBonePosition.cameraRotationY, this.camera.rotation.z = globalBonePosition.cameraRotationZ, scope.container.rotation.z = globalBonePosition.homeHeroBgContainerRotationZ, window.gui) {
      var gui = this.gui;
      var $scope = gui.addFolder("homeHeroColors");
      $scope.addColor(this, "defaultLowColorHex");
      $scope.addColor(this, "defaultMidColorHex");
      $scope.addColor(this, "defaultHighColorHex");
      $scope.addColor(this, "fadeLowColorHex");
      $scope.addColor(this, "fadeMidColorHex");
      $scope.addColor(this, "fadeHighColorHex");
      $scope.add(r.sharedUniforms.u_lightScatterDivider, "value", 1, 200).name("u_lightScatterDivider");
      $scope.add(r.sharedUniforms.u_lightScatterPowInv, "value", .01, 5).name("u_lightScatterPowInv");
      $scope.open();
    }
    this.precompile();
  };
  /**
   * @return {undefined}
   */
  opts.change = function() {
    /** @type {number} */
    this.camera.rotation.z = (Math.random() - .5) * Math.PI * 2;
    /** @type {number} */
    this.camera.rotationSpeed = (.001 + .001 * Math.random()) * (Math.random() > .5 ? 1 : -1);
    var c = this.colors[0];
    _this.changeColor(c.tube0, c.tube1);
    this.backgroundColor = c.bg0;
    scope.plane0.color.copy(c.bg1);
    scope.plane1.color.copy(c.bg0);
    /** @type {number} */
    hqindex = (hqindex + 1) % this.colors.length;
    l = l + Math.PI;
  };
  /**
   * @return {undefined}
   */
  opts.resize = function() {
    p.resize.call(this);
  };
  /**
   * @param {number} s
   * @return {undefined}
   */
  opts.update = function(s) {
    if (this.paddingBottom = 240, this.testViewport(), this.needsRender) {
      /** @type {number} */
      mesh.position.z = 14 - 6 * Math.cos(.35 * l);
      this.camera.rotation.x += .05 * (-.2 * CesiumMath.clamp(this.mouse.y, -1, 1) - this.camera.rotation.x);
      this.camera.rotation.y += .05 * (.2 * this.mouse.x - this.camera.rotation.y);
      this.camera.rotation.z += this.ROTATION_SPEED;
      scope.container.rotation.z -= .075 * s;
      this.camera.fov = CesiumMath.mix(135, 75, this.ratio);
      /** @type {number} */
      var height = 1 / (2 * Math.tan(.375 * Math.PI));
      /** @type {number} */
      var maxHeight = 1 / (2 * Math.tan(75 / 360 * Math.PI));
      /** @type {number} */
      this.camera.position.z = mesh.position.z * CesiumMath.mix(height / maxHeight, 1, CesiumMath.cUnMix(height, maxHeight, 1 / (2 * Math.tan(this.camera.fov / 360 * Math.PI))));
      this.scene.updateMatrixWorld();
      this.updateCamera();
      this.updateMouse();
      var endGrayscale = CesiumMath.cUnMix(.5, 1, this.inRatio);
      this.defaultLowColor.setHex(this.defaultLowColorHex);
      this.defaultMidColor.setHex(this.defaultMidColorHex);
      this.defaultHighColor.setHex(this.defaultHighColorHex);
      this.fadeLowColor.setHex(this.fadeLowColorHex);
      this.fadeMidColor.setHex(this.fadeMidColorHex);
      this.fadeHighColor.setHex(this.fadeHighColorHex);
      this.remapLowColorUniform.value.copy(this.fadeLowColor).lerp(this.defaultLowColor, endGrayscale);
      this.remapMidColorUniform.value.copy(this.fadeMidColor).lerp(this.defaultMidColor, endGrayscale);
      this.remapHighColorUniform.value.copy(this.fadeHighColor).lerp(this.defaultHighColor, endGrayscale);
      face.position.copy(this.mouse3);
      var renderer = self.renderer;
      renderer.setRenderTarget(null);
      o.update(s);
      _this.update(s);
      this.render();
      l = l + s;
    }
  };
  /**
   * @return {undefined}
   */
  opts.afterRender = function() {
    $realtime.renderVerticalGradient(.85 - 5 * (1 - this.ratio), 1, 0, 0, 0, Math.min(1, 1 - this.ratio + .4));
  };
  var mesh = void 0;
  /** @type {number} */
  var l = 0;
  /** @type {number} */
  var hqindex = 2;
  var face = void 0;
  mixin.exports = new b;
}, function(module$jscomp$1, exports$jscomp$1, __webpack_require__$jscomp$1) {
  (function(global$jscomp$0) {
    /** @type {function(?): ?} */
    var _typeof$jscomp$0 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(name) {
      return typeof name;
    } : function(obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    /** @type {!Object} */
    var numeric$jscomp$0 = exports$jscomp$1;
    if (void 0 !== global$jscomp$0) {
      global$jscomp$0.numeric = numeric$jscomp$0;
    }
    /** @type {string} */
    numeric$jscomp$0.version = "1.2.6";
    /**
     * @param {?} cb
     * @param {number} n
     * @return {?}
     */
    numeric$jscomp$0.bench = function(cb, n) {
      var start;
      var ret;
      var code;
      if (void 0 === n) {
        /** @type {number} */
        n = 15;
      }
      /** @type {number} */
      ret = .5;
      /** @type {!Date} */
      start = new Date;
      for (;;) {
        code = ret = ret * 2;
        for (; code > 3; code = code - 4) {
          cb();
          cb();
          cb();
          cb();
        }
        for (; code > 0;) {
          cb();
          code--;
        }
        if (new Date - start > n) {
          break;
        }
      }
      /** @type {number} */
      code = ret;
      for (; code > 3; code = code - 4) {
        cb();
        cb();
        cb();
        cb();
      }
      for (; code > 0;) {
        cb();
        code--;
      }
      return 1E3 * (3 * ret - 1) / (new Date - start);
    };
    /**
     * @param {string} str
     * @return {?}
     */
    numeric$jscomp$0._myIndexOf = function(str) {
      var j;
      var len = this.length;
      /** @type {number} */
      j = 0;
      for (; j < len; ++j) {
        if (this[j] === str) {
          return j;
        }
      }
      return -1;
    };
    /** @type {!Function} */
    numeric$jscomp$0.myIndexOf = Array.prototype.indexOf ? Array.prototype.indexOf : numeric$jscomp$0._myIndexOf;
    /** @type {function(new:!Function, ...*): ?} */
    numeric$jscomp$0.Function = Function;
    /** @type {number} */
    numeric$jscomp$0.precision = 4;
    /** @type {number} */
    numeric$jscomp$0.largeArray = 50;
    /**
     * @param {!Array} data
     * @return {?}
     */
    numeric$jscomp$0.prettyPrint = function(data) {
      /** @type {!Array} */
      var t = [];
      return function format(val) {
        var i;
        if (void 0 === val) {
          return t.push(Array(numeric$jscomp$0.precision + 8).join(" ")), false;
        }
        if ("string" == typeof val) {
          return t.push('"' + val + '"'), false;
        }
        if ("boolean" == typeof val) {
          return t.push(val.toString()), false;
        }
        if ("number" == typeof val) {
          var result = function format(v) {
            if (0 === v) {
              return "0";
            }
            if (isNaN(v)) {
              return "NaN";
            }
            if (v < 0) {
              return "-" + format(-v);
            }
            if (isFinite(v)) {
              /** @type {number} */
              var size = Math.floor(Math.log(v) / Math.log(10));
              /** @type {number} */
              var value = v / Math.pow(10, size);
              /** @type {string} */
              var result = value.toPrecision(numeric$jscomp$0.precision);
              return 10 === parseFloat(result) && (size++, result = (value = 1).toPrecision(numeric$jscomp$0.precision)), parseFloat(result).toString() + "e" + size.toString();
            }
            return "Infinity";
          }(val);
          /** @type {string} */
          var state = val.toPrecision(numeric$jscomp$0.precision);
          /** @type {string} */
          var a = parseFloat(val.toString()).toString();
          /** @type {!Array} */
          var r = [result, state, a, parseFloat(state).toString(), parseFloat(a).toString()];
          /** @type {number} */
          i = 1;
          for (; i < r.length; i++) {
            if (r[i].length < result.length) {
              result = r[i];
            }
          }
          return t.push(Array(numeric$jscomp$0.precision + 8 - result.length).join(" ") + result), false;
        }
        if (null === val) {
          return t.push("null"), false;
        }
        if ("function" == typeof val) {
          t.push(val.toString());
          /** @type {boolean} */
          var msg = false;
          for (i in val) {
            if (val.hasOwnProperty(i)) {
              if (msg) {
                t.push(",\n");
              } else {
                t.push("\n{");
              }
              /** @type {boolean} */
              msg = true;
              t.push(i);
              t.push(": \n");
              format(val[i]);
            }
          }
          return msg && t.push("}\n"), true;
        }
        if (val instanceof Array) {
          if (val.length > numeric$jscomp$0.largeArray) {
            return t.push("...Large Array..."), true;
          }
          /** @type {boolean} */
          msg = false;
          t.push("[");
          /** @type {number} */
          i = 0;
          for (; i < val.length; i++) {
            if (i > 0) {
              t.push(",");
              if (msg) {
                t.push("\n ");
              }
            }
            msg = format(val[i]);
          }
          return t.push("]"), true;
        }
        t.push("{");
        /** @type {boolean} */
        msg = false;
        for (i in val) {
          if (val.hasOwnProperty(i)) {
            if (msg) {
              t.push(",\n");
            }
            /** @type {boolean} */
            msg = true;
            t.push(i);
            t.push(": \n");
            format(val[i]);
          }
        }
        return t.push("}"), true;
      }(data), t.join("");
    };
    /**
     * @param {string} type
     * @return {?}
     */
    numeric$jscomp$0.parseDate = function(type) {
      return function render(data) {
        if ("string" == typeof data) {
          return Date.parse(data.replace(/-/g, "/"));
        }
        if (!(data instanceof Array)) {
          throw new Error("parseDate: parameter must be arrays of strings");
        }
        var i;
        /** @type {!Array} */
        var ret = [];
        /** @type {number} */
        i = 0;
        for (; i < data.length; i++) {
          ret[i] = render(data[i]);
        }
        return ret;
      }(type);
    };
    /**
     * @param {!Object} radix
     * @return {?}
     */
    numeric$jscomp$0.parseFloat = function(radix) {
      return function parse(value) {
        if ("string" == typeof value) {
          return parseFloat(value);
        }
        if (!(value instanceof Array)) {
          throw new Error("parseFloat: parameter must be arrays of strings");
        }
        var i;
        /** @type {!Array} */
        var current = [];
        /** @type {number} */
        i = 0;
        for (; i < value.length; i++) {
          current[i] = parse(value[i]);
        }
        return current;
      }(radix);
    };
    /**
     * @param {string} strData
     * @return {?}
     */
    numeric$jscomp$0.parseCSV = function(strData) {
      var i;
      var layer_i;
      var s;
      var crossfilterable_layers = strData.split("\n");
      /** @type {!Array} */
      var scope = [];
      /** @type {!RegExp} */
      var _digitExpr = /(([^'",]*)|('[^']*')|("[^"]*")),/g;
      /** @type {!RegExp} */
      var matchLetter = /^\s*(([+-]?[0-9]+(\.[0-9]*)?(e[+-]?[0-9]+)?)|([+-]?[0-9]*(\.[0-9]+)?(e[+-]?[0-9]+)?))\s*$/;
      /** @type {number} */
      var val = 0;
      /** @type {number} */
      layer_i = 0;
      for (; layer_i < crossfilterable_layers.length; layer_i++) {
        var c;
        var suff_array = (crossfilterable_layers[layer_i] + ",").match(_digitExpr);
        if (suff_array.length > 0) {
          /** @type {!Array} */
          scope[val] = [];
          /** @type {number} */
          i = 0;
          for (; i < suff_array.length; i++) {
            c = (s = suff_array[i]).substr(0, s.length - 1);
            if (matchLetter.test(c)) {
              /** @type {number} */
              scope[val][i] = parseFloat(c);
            } else {
              scope[val][i] = c;
            }
          }
          val++;
        }
      }
      return scope;
    };
    /**
     * @param {!Array} data
     * @return {?}
     */
    numeric$jscomp$0.toCSV = function(data) {
      var i;
      var l;
      var j;
      var littlesig;
      var calIds;
      var ja = numeric$jscomp$0.dim(data);
      j = ja[0];
      ja[1];
      /** @type {!Array} */
      calIds = [];
      /** @type {number} */
      i = 0;
      for (; i < j; i++) {
        /** @type {!Array} */
        littlesig = [];
        /** @type {number} */
        l = 0;
        for (; l < j; l++) {
          littlesig[l] = data[i][l].toString();
        }
        /** @type {string} */
        calIds[i] = littlesig.join(", ");
      }
      return calIds.join("\n") + "\n";
    };
    /**
     * @param {?} url
     * @return {?}
     */
    numeric$jscomp$0.getURL = function(url) {
      /** @type {!XMLHttpRequest} */
      var xhr = new XMLHttpRequest;
      return xhr.open("GET", url, false), xhr.send(), xhr;
    };
    /**
     * @param {!Object} el
     * @return {?}
     */
    numeric$jscomp$0.imageURL = function(el) {
      /**
       * @param {!Array} data
       * @param {number} c
       * @param {number} num
       * @return {?}
       */
      function Number(data, c, num) {
        if (void 0 === c) {
          /** @type {number} */
          c = 0;
        }
        if (void 0 === num) {
          num = data.length;
        }
        var i;
        /** @type {!Array} */
        var table = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 
        3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 
        1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 
        3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 
        3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 
        534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918E3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 
        3272380065, 1510334235, 755167117];
        /** @type {number} */
        var crc = -1;
        data.length;
        /** @type {number} */
        i = c;
        for (; i < num; i++) {
          /** @type {number} */
          crc = crc >>> 8 ^ table[255 & (crc ^ data[i])];
        }
        return -1 ^ crc;
      }
      var colBit;
      var rowBit;
      var branch;
      var wideValue;
      var t;
      var classFunction;
      var j;
      var i;
      var exponent;
      var c;
      var textNodesCount = el[0].length;
      var patchLen = el[0][0].length;
      /** @type {!Array} */
      var b = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, patchLen >> 24 & 255, patchLen >> 16 & 255, patchLen >> 8 & 255, 255 & patchLen, textNodesCount >> 24 & 255, textNodesCount >> 16 & 255, textNodesCount >> 8 & 255, 255 & textNodesCount, 8, 2, 0, 0, 0, -1, -2, -3, -4, -5, -6, -7, -8, 73, 68, 65, 84, 8, 29];
      c = Number(b, 12, 29);
      /** @type {number} */
      b[29] = c >> 24 & 255;
      /** @type {number} */
      b[30] = c >> 16 & 255;
      /** @type {number} */
      b[31] = c >> 8 & 255;
      /** @type {number} */
      b[32] = 255 & c;
      /** @type {number} */
      colBit = 1;
      /** @type {number} */
      rowBit = 0;
      /** @type {number} */
      j = 0;
      for (; j < textNodesCount; j++) {
        if (j < textNodesCount - 1) {
          b.push(0);
        } else {
          b.push(1);
        }
        /** @type {number} */
        t = 3 * patchLen + 1 + (0 === j) & 255;
        /** @type {number} */
        classFunction = 3 * patchLen + 1 + (0 === j) >> 8 & 255;
        b.push(t);
        b.push(classFunction);
        b.push(255 & ~t);
        b.push(255 & ~classFunction);
        if (0 === j) {
          b.push(0);
        }
        /** @type {number} */
        i = 0;
        for (; i < patchLen; i++) {
          /** @type {number} */
          branch = 0;
          for (; branch < 3; branch++) {
            /** @type {number} */
            rowBit = (rowBit + (colBit = (colBit + (t = (t = el[branch][j][i]) > 255 ? 255 : t < 0 ? 0 : Math.round(t))) % 65521)) % 65521;
            b.push(t);
          }
        }
        b.push(0);
      }
      return exponent = (rowBit << 16) + colBit, b.push(exponent >> 24 & 255), b.push(exponent >> 16 & 255), b.push(exponent >> 8 & 255), b.push(255 & exponent), wideValue = b.length - 41, b[33] = wideValue >> 24 & 255, b[34] = wideValue >> 16 & 255, b[35] = wideValue >> 8 & 255, b[36] = 255 & wideValue, c = Number(b, 37), b.push(c >> 24 & 255), b.push(c >> 16 & 255), b.push(c >> 8 & 255), b.push(255 & c), b.push(0), b.push(0), b.push(0), b.push(0), b.push(73), b.push(69), b.push(78), b.push(68), 
      b.push(174), b.push(66), b.push(96), b.push(130), "data:image/png;base64," + function(array) {
        var i;
        var temp;
        var y;
        var d;
        var num;
        var c;
        var a;
        /** @type {number} */
        var l = array.length;
        /** @type {string} */
        var lookup = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        /** @type {string} */
        var pix_color = "";
        /** @type {number} */
        i = 0;
        for (; i < l; i = i + 3) {
          /** @type {number} */
          num = ((3 & (temp = array[i])) << 4) + ((y = array[i + 1]) >> 4);
          /** @type {number} */
          c = ((15 & y) << 2) + ((d = array[i + 2]) >> 6);
          /** @type {number} */
          a = 63 & d;
          if (i + 1 >= l) {
            /** @type {number} */
            c = a = 64;
          } else {
            if (i + 2 >= l) {
              /** @type {number} */
              a = 64;
            }
          }
          /** @type {string} */
          pix_color = pix_color + (lookup.charAt(temp >> 2) + lookup.charAt(num) + lookup.charAt(c) + lookup.charAt(a));
        }
        return pix_color;
      }(b);
    };
    /**
     * @param {!Array} value
     * @return {?}
     */
    numeric$jscomp$0._dim = function(value) {
      /** @type {!Array} */
      var sortedIndices = [];
      for (; "object" === (void 0 === value ? "undefined" : _typeof$jscomp$0(value));) {
        sortedIndices.push(value.length);
        value = value[0];
      }
      return sortedIndices;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    numeric$jscomp$0.dim = function(value) {
      var object;
      var method;
      return "object" === (void 0 === value ? "undefined" : _typeof$jscomp$0(value)) ? "object" === (void 0 === (object = value[0]) ? "undefined" : _typeof$jscomp$0(object)) ? "object" === (void 0 === (method = object[0]) ? "undefined" : _typeof$jscomp$0(method)) ? numeric$jscomp$0._dim(value) : [value.length, object.length] : [value.length] : [];
    };
    /**
     * @param {string} res
     * @param {string} req
     * @return {?}
     */
    numeric$jscomp$0.mapreduce = function(res, req) {
      return Function("x", "accum", "_s", "_k", 'if(typeof accum === "undefined") accum = ' + req + ';\nif(typeof x === "number") { var xi = x; ' + res + '; return accum; }\nif(typeof _s === "undefined") _s = numeric.dim(x);\nif(typeof _k === "undefined") _k = 0;\nvar _n = _s[_k];\nvar i,xi;\nif(_k < _s.length-1) {\n    for(i=_n-1;i>=0;i--) {\n        accum = arguments.callee(x[i],accum,_s,_k+1);\n    }    return accum;\n}\nfor(i=_n-1;i>=1;i-=2) { \n    xi = x[i];\n    ' + res + ";\n    xi = x[i-1];\n    " + 
      res + ";\n}\nif(i === 0) {\n    xi = x[i];\n    " + res + "\n}\nreturn accum;");
    };
    /**
     * @param {string} formatters
     * @param {string} customFormatters
     * @return {?}
     */
    numeric$jscomp$0.mapreduce2 = function(formatters, customFormatters) {
      return Function("x", "var n = x.length;\nvar i,xi;\n" + customFormatters + ";\nfor(i=n-1;i!==-1;--i) { \n    xi = x[i];\n    " + formatters + ";\n}\nreturn accum;");
    };
    /**
     * @param {!Object} value
     * @param {!Object} curValue
     * @return {?}
     */
    numeric$jscomp$0.same = function validate(value, curValue) {
      var i;
      var length;
      if (!(value instanceof Array && curValue instanceof Array)) {
        return false;
      }
      if ((length = value.length) !== curValue.length) {
        return false;
      }
      /** @type {number} */
      i = 0;
      for (; i < length; i++) {
        if (value[i] !== curValue[i]) {
          if ("object" !== _typeof$jscomp$0(value[i])) {
            return false;
          }
          if (!validate(value[i], curValue[i])) {
            return false;
          }
        }
      }
      return true;
    };
    /**
     * @param {!Array} m
     * @param {number} v
     * @param {number} n
     * @return {?}
     */
    numeric$jscomp$0.rep = function(m, v, n) {
      if (void 0 === n) {
        /** @type {number} */
        n = 0;
      }
      var i;
      var len = m[n];
      /** @type {!Array} */
      var ret = Array(len);
      if (n === m.length - 1) {
        /** @type {number} */
        i = len - 2;
        for (; i >= 0; i = i - 2) {
          /** @type {number} */
          ret[i + 1] = v;
          /** @type {number} */
          ret[i] = v;
        }
        return -1 === i && (ret[0] = v), ret;
      }
      /** @type {number} */
      i = len - 1;
      for (; i >= 0; i--) {
        ret[i] = numeric$jscomp$0.rep(m, v, n + 1);
      }
      return ret;
    };
    /**
     * @param {?} x
     * @param {!Object} y
     * @return {?}
     */
    numeric$jscomp$0.dotMMsmall = function(x, y) {
      var i;
      var j;
      var k;
      var n;
      var q;
      var length;
      var ret;
      var result;
      var bar;
      var col;
      var i0;
      n = x.length;
      q = y.length;
      length = y[0].length;
      /** @type {!Array} */
      ret = Array(n);
      /** @type {number} */
      i = n - 1;
      for (; i >= 0; i--) {
        /** @type {!Array} */
        result = Array(length);
        bar = x[i];
        /** @type {number} */
        k = length - 1;
        for (; k >= 0; k--) {
          /** @type {number} */
          col = bar[q - 1] * y[q - 1][k];
          /** @type {number} */
          j = q - 2;
          for (; j >= 1; j = j - 2) {
            /** @type {number} */
            i0 = j - 1;
            /** @type {number} */
            col = col + (bar[j] * y[j][k] + bar[i0] * y[i0][k]);
          }
          if (0 === j) {
            /** @type {number} */
            col = col + bar[0] * y[0][k];
          }
          /** @type {number} */
          result[k] = col;
        }
        /** @type {!Array} */
        ret[i] = result;
      }
      return ret;
    };
    /**
     * @param {!Object} A
     * @param {!Object} j
     * @param {!Array} x
     * @return {undefined}
     */
    numeric$jscomp$0._getCol = function(A, j, x) {
      var n;
      /** @type {number} */
      n = A.length - 1;
      for (; n > 0; --n) {
        x[n] = A[n][j];
        x[--n] = A[n][j];
      }
      if (0 === n) {
        x[0] = A[0][j];
      }
    };
    /**
     * @param {!Object} x
     * @param {!Object} y
     * @return {?}
     */
    numeric$jscomp$0.dotMMbig = function(x, y) {
      var xj;
      var i;
      var j;
      /** @type {function(!Object, !Object, !Array): undefined} */
      var gc = numeric$jscomp$0._getCol;
      var q = y.length;
      /** @type {!Array} */
      var v = Array(q);
      var m = x.length;
      var n = y[0].length;
      /** @type {!Array} */
      var A = new Array(m);
      /** @type {function(!Object, ?): ?} */
      var VV = numeric$jscomp$0.dotVV;
      --q;
      /** @type {number} */
      i = --m;
      for (; -1 !== i; --i) {
        /** @type {!Array} */
        A[i] = Array(n);
      }
      /** @type {number} */
      i = --n;
      for (; -1 !== i; --i) {
        gc(y, i, v);
        j = m;
        for (; -1 !== j; --j) {
          0;
          xj = x[j];
          A[j][i] = VV(xj, v);
        }
      }
      return A;
    };
    /**
     * @param {?} x
     * @param {number} y
     * @return {?}
     */
    numeric$jscomp$0.dotMV = function(x, y) {
      var i;
      var n = x.length;
      /** @type {!Array} */
      var ret = (y.length, Array(n));
      /** @type {function(!Object, ?): ?} */
      var dotVV = numeric$jscomp$0.dotVV;
      /** @type {number} */
      i = n - 1;
      for (; i >= 0; i--) {
        ret[i] = dotVV(x[i], y);
      }
      return ret;
    };
    /**
     * @param {!Object} y
     * @param {!Object} x
     * @return {?}
     */
    numeric$jscomp$0.dotVM = function(y, x) {
      var p;
      var i;
      var n;
      var length;
      var ret;
      var URL;
      var j;
      n = y.length;
      length = x[0].length;
      /** @type {!Array} */
      ret = Array(length);
      /** @type {number} */
      i = length - 1;
      for (; i >= 0; i--) {
        /** @type {number} */
        URL = y[n - 1] * x[n - 1][i];
        /** @type {number} */
        p = n - 2;
        for (; p >= 1; p = p - 2) {
          /** @type {number} */
          j = p - 1;
          /** @type {number} */
          URL = URL + (y[p] * x[p][i] + y[j] * x[j][i]);
        }
        if (0 === p) {
          /** @type {number} */
          URL = URL + y[0] * x[0][i];
        }
        /** @type {number} */
        ret[i] = URL;
      }
      return ret;
    };
    /**
     * @param {!Object} x
     * @param {?} y
     * @return {?}
     */
    numeric$jscomp$0.dotVV = function(x, y) {
      var i;
      var i1;
      var n = x.length;
      /** @type {number} */
      var order = x[n - 1] * y[n - 1];
      /** @type {number} */
      i = n - 2;
      for (; i >= 1; i = i - 2) {
        /** @type {number} */
        i1 = i - 1;
        /** @type {number} */
        order = order + (x[i] * y[i] + x[i1] * y[i1]);
      }
      return 0 === i && (order = order + x[0] * y[0]), order;
    };
    /**
     * @param {number} a
     * @param {number} b
     * @return {?}
     */
    numeric$jscomp$0.dot = function(a, b) {
      /** @type {function(?): ?} */
      var d = numeric$jscomp$0.dim;
      switch(1E3 * d(a).length + d(b).length) {
        case 2002:
          return b.length < 10 ? numeric$jscomp$0.dotMMsmall(a, b) : numeric$jscomp$0.dotMMbig(a, b);
        case 2001:
          return numeric$jscomp$0.dotMV(a, b);
        case 1002:
          return numeric$jscomp$0.dotVM(a, b);
        case 1001:
          return numeric$jscomp$0.dotVV(a, b);
        case 1E3:
          return numeric$jscomp$0.mulVS(a, b);
        case 1:
          return numeric$jscomp$0.mulSV(a, b);
        case 0:
          return a * b;
        default:
          throw new Error("numeric.dot only works on vectors and matrices");
      }
    };
    /**
     * @param {!Array} obj
     * @return {?}
     */
    numeric$jscomp$0.diag = function(obj) {
      var k;
      var k1;
      var i;
      var tmp;
      var r = obj.length;
      /** @type {!Array} */
      var res = Array(r);
      /** @type {number} */
      k = r - 1;
      for (; k >= 0; k--) {
        /** @type {!Array} */
        tmp = Array(r);
        /** @type {number} */
        k1 = k + 2;
        /** @type {number} */
        i = r - 1;
        for (; i >= k1; i = i - 2) {
          /** @type {number} */
          tmp[i] = 0;
          /** @type {number} */
          tmp[i - 1] = 0;
        }
        if (i > k) {
          /** @type {number} */
          tmp[i] = 0;
        }
        tmp[k] = obj[k];
        /** @type {number} */
        i = k - 1;
        for (; i >= 1; i = i - 2) {
          /** @type {number} */
          tmp[i] = 0;
          /** @type {number} */
          tmp[i - 1] = 0;
        }
        if (0 === i) {
          /** @type {number} */
          tmp[0] = 0;
        }
        /** @type {!Array} */
        res[k] = tmp;
      }
      return res;
    };
    /**
     * @param {!Object} A
     * @return {?}
     */
    numeric$jscomp$0.getDiag = function(A) {
      var j;
      /** @type {number} */
      var i = Math.min(A.length, A[0].length);
      /** @type {!Array} */
      var edges = Array(i);
      /** @type {number} */
      j = i - 1;
      for (; j >= 1; --j) {
        edges[j] = A[j][j];
        edges[--j] = A[j][j];
      }
      return 0 === j && (edges[0] = A[0][0]), edges;
    };
    /**
     * @param {?} d
     * @return {?}
     */
    numeric$jscomp$0.identity = function(d) {
      return numeric$jscomp$0.diag(numeric$jscomp$0.rep([d], 1));
    };
    /**
     * @param {!Array} e
     * @param {string} n
     * @param {?} fun
     * @return {?}
     */
    numeric$jscomp$0.pointwise = function(e, n, fun) {
      if (void 0 === fun) {
        /** @type {string} */
        fun = "";
      }
      var i;
      var m;
      /** @type {!Array} */
      var args = [];
      /** @type {!RegExp} */
      var regex = /\[i\]$/;
      /** @type {string} */
      var s = "";
      /** @type {boolean} */
      var HAS_BROKEN_LINEHEIGHT = false;
      /** @type {number} */
      i = 0;
      for (; i < e.length; i++) {
        if (regex.test(e[i])) {
          s = m = e[i].substring(0, e[i].length - 3);
        } else {
          m = e[i];
        }
        if ("ret" === m) {
          /** @type {boolean} */
          HAS_BROKEN_LINEHEIGHT = true;
        }
        args.push(m);
      }
      return args[e.length] = "_s", args[e.length + 1] = "_k", args[e.length + 2] = 'if(typeof _s === "undefined") _s = numeric.dim(' + s + ');\nif(typeof _k === "undefined") _k = 0;\nvar _n = _s[_k];\nvar i' + (HAS_BROKEN_LINEHEIGHT ? "" : ", ret = Array(_n)") + ";\nif(_k < _s.length-1) {\n    for(i=_n-1;i>=0;i--) ret[i] = arguments.callee(" + e.join(",") + ",_s,_k+1);\n    return ret;\n}\n" + fun + "\nfor(i=_n-1;i!==-1;--i) {\n    " + n + "\n}\nreturn ret;", Function.apply(null, args);
    };
    /**
     * @param {!Array} e
     * @param {string} n
     * @param {?} fun
     * @return {?}
     */
    numeric$jscomp$0.pointwise2 = function(e, n, fun) {
      if (void 0 === fun) {
        /** @type {string} */
        fun = "";
      }
      var i;
      var m;
      /** @type {!Array} */
      var keys = [];
      /** @type {!RegExp} */
      var regex = /\[i\]$/;
      /** @type {string} */
      var s = "";
      /** @type {boolean} */
      var HAS_BROKEN_LINEHEIGHT = false;
      /** @type {number} */
      i = 0;
      for (; i < e.length; i++) {
        if (regex.test(e[i])) {
          s = m = e[i].substring(0, e[i].length - 3);
        } else {
          m = e[i];
        }
        if ("ret" === m) {
          /** @type {boolean} */
          HAS_BROKEN_LINEHEIGHT = true;
        }
        keys.push(m);
      }
      return keys[e.length] = "var _n = " + s + ".length;\nvar i" + (HAS_BROKEN_LINEHEIGHT ? "" : ", ret = Array(_n)") + ";\n" + fun + "\nfor(i=_n-1;i!==-1;--i) {\n" + n + "\n}\nreturn ret;", Function.apply(null, keys);
    };
    /**
     * @param {?} input
     * @param {?} value
     * @param {number} time
     * @param {number} sec
     * @param {?} callback
     * @return {undefined}
     */
    numeric$jscomp$0._biforeach = function render(input, value, time, sec, callback) {
      var name;
      if (sec !== time.length - 1) {
        /** @type {number} */
        name = time[sec] - 1;
        for (; name >= 0; name--) {
          render("object" === (void 0 === input ? "undefined" : _typeof$jscomp$0(input)) ? input[name] : input, "object" === (void 0 === value ? "undefined" : _typeof$jscomp$0(value)) ? value[name] : value, time, sec + 1, callback);
        }
      } else {
        callback(input, value);
      }
    };
    /**
     * @param {?} input
     * @param {?} value
     * @param {number} options
     * @param {number} i
     * @param {?} next
     * @return {?}
     */
    numeric$jscomp$0._biforeach2 = function callback(input, value, options, i, next) {
      if (i === options.length - 1) {
        return next(input, value);
      }
      var key;
      var r = options[i];
      /** @type {!Array} */
      var result = Array(r);
      /** @type {number} */
      key = r - 1;
      for (; key >= 0; --key) {
        result[key] = callback("object" === (void 0 === input ? "undefined" : _typeof$jscomp$0(input)) ? input[key] : input, "object" === (void 0 === value ? "undefined" : _typeof$jscomp$0(value)) ? value[key] : value, options, i + 1, next);
      }
      return result;
    };
    /**
     * @param {!Array} args
     * @param {number} e
     * @param {number} i
     * @param {?} error
     * @return {undefined}
     */
    numeric$jscomp$0._foreach = function debug(args, e, i, error) {
      var filename;
      if (i !== e.length - 1) {
        /** @type {number} */
        filename = e[i] - 1;
        for (; filename >= 0; filename--) {
          debug(args[filename], e, i + 1, error);
        }
      } else {
        error(args);
      }
    };
    /**
     * @param {!Array} props
     * @param {number} obj
     * @param {number} key
     * @param {?} object
     * @return {?}
     */
    numeric$jscomp$0._foreach2 = function merge(props, obj, key, object) {
      if (key === obj.length - 1) {
        return object(props);
      }
      var i;
      var n = obj[key];
      /** @type {!Array} */
      var result = Array(n);
      /** @type {number} */
      i = n - 1;
      for (; i >= 0; i--) {
        result[i] = merge(props[i], obj, key + 1, object);
      }
      return result;
    };
    numeric$jscomp$0.ops2 = {
      add : "+",
      sub : "-",
      mul : "*",
      div : "/",
      mod : "%",
      and : "&&",
      or : "||",
      eq : "===",
      neq : "!==",
      lt : "<",
      gt : ">",
      leq : "<=",
      geq : ">=",
      band : "&",
      bor : "|",
      bxor : "^",
      lshift : "<<",
      rshift : ">>",
      rrshift : ">>>"
    };
    numeric$jscomp$0.opseq = {
      addeq : "+=",
      subeq : "-=",
      muleq : "*=",
      diveq : "/=",
      modeq : "%=",
      lshifteq : "<<=",
      rshifteq : ">>=",
      rrshifteq : ">>>=",
      bandeq : "&=",
      boreq : "|=",
      bxoreq : "^="
    };
    /** @type {!Array} */
    numeric$jscomp$0.mathfuns = ["abs", "acos", "asin", "atan", "ceil", "cos", "exp", "floor", "log", "round", "sin", "sqrt", "tan", "isNaN", "isFinite"];
    /** @type {!Array} */
    numeric$jscomp$0.mathfuns2 = ["atan2", "pow", "max", "min"];
    numeric$jscomp$0.ops1 = {
      neg : "-",
      not : "!",
      bnot : "~",
      clone : ""
    };
    numeric$jscomp$0.mapreducers = {
      any : ["if(xi) return true;", "var accum = false;"],
      all : ["if(!xi) return false;", "var accum = true;"],
      sum : ["accum += xi;", "var accum = 0;"],
      prod : ["accum *= xi;", "var accum = 1;"],
      norm2Squared : ["accum += xi*xi;", "var accum = 0;"],
      norminf : ["accum = max(accum,abs(xi));", "var accum = 0, max = Math.max, abs = Math.abs;"],
      norm1 : ["accum += abs(xi)", "var accum = 0, abs = Math.abs;"],
      sup : ["accum = max(accum,xi);", "var accum = -Infinity, max = Math.max;"],
      inf : ["accum = min(accum,xi);", "var accum = Infinity, min = Math.min;"]
    };
    (function() {
      var i;
      var j;
      /** @type {number} */
      i = 0;
      for (; i < numeric$jscomp$0.mathfuns2.length; ++i) {
        j = numeric$jscomp$0.mathfuns2[i];
        numeric$jscomp$0.ops2[j] = j;
      }
      for (i in numeric$jscomp$0.ops2) {
        if (numeric$jscomp$0.ops2.hasOwnProperty(i)) {
          j = numeric$jscomp$0.ops2[i];
          var checkPixelRange;
          var isNumberEqual;
          /** @type {string} */
          var r = "";
          if (-1 !== numeric$jscomp$0.myIndexOf.call(numeric$jscomp$0.mathfuns2, i)) {
            /** @type {string} */
            r = "var " + j + " = Math." + j + ";\n";
            /**
             * @param {string} y
             * @param {string} self
             * @param {string} x
             * @return {?}
             */
            checkPixelRange = function(y, self, x) {
              return y + " = " + j + "(" + self + "," + x + ")";
            };
            /**
             * @param {string} y
             * @param {string} x
             * @return {?}
             */
            isNumberEqual = function(y, x) {
              return y + " = " + j + "(" + y + "," + x + ")";
            };
          } else {
            /**
             * @param {string} y
             * @param {string} self
             * @param {string} x
             * @return {?}
             */
            checkPixelRange = function(y, self, x) {
              return y + " = " + self + " " + j + " " + x;
            };
            /** @type {function(string, string): ?} */
            isNumberEqual = numeric$jscomp$0.opseq.hasOwnProperty(i + "eq") ? function(category, posProp) {
              return category + " " + j + "= " + posProp;
            } : function(left, posProp) {
              return left + " = " + left + " " + j + " " + posProp;
            };
          }
          numeric$jscomp$0[i + "VV"] = numeric$jscomp$0.pointwise2(["x[i]", "y[i]"], checkPixelRange("ret[i]", "x[i]", "y[i]"), r);
          numeric$jscomp$0[i + "SV"] = numeric$jscomp$0.pointwise2(["x", "y[i]"], checkPixelRange("ret[i]", "x", "y[i]"), r);
          numeric$jscomp$0[i + "VS"] = numeric$jscomp$0.pointwise2(["x[i]", "y"], checkPixelRange("ret[i]", "x[i]", "y"), r);
          numeric$jscomp$0[i] = Function("var n = arguments.length, i, x = arguments[0], y;\nvar VV = numeric." + i + "VV, VS = numeric." + i + "VS, SV = numeric." + i + 'SV;\nvar dim = numeric.dim;\nfor(i=1;i!==n;++i) { \n  y = arguments[i];\n  if(typeof x === "object") {\n      if(typeof y === "object") x = numeric._biforeach2(x,y,dim(x),0,VV);\n      else x = numeric._biforeach2(x,y,dim(x),0,VS);\n  } else if(typeof y === "object") x = numeric._biforeach2(x,y,dim(y),0,SV);\n  else ' + isNumberEqual("x", 
          "y") + "\n}\nreturn x;\n");
          numeric$jscomp$0[j] = numeric$jscomp$0[i];
          numeric$jscomp$0[i + "eqV"] = numeric$jscomp$0.pointwise2(["ret[i]", "x[i]"], isNumberEqual("ret[i]", "x[i]"), r);
          numeric$jscomp$0[i + "eqS"] = numeric$jscomp$0.pointwise2(["ret[i]", "x"], isNumberEqual("ret[i]", "x"), r);
          numeric$jscomp$0[i + "eq"] = Function("var n = arguments.length, i, x = arguments[0], y;\nvar V = numeric." + i + "eqV, S = numeric." + i + 'eqS\nvar s = numeric.dim(x);\nfor(i=1;i!==n;++i) { \n  y = arguments[i];\n  if(typeof y === "object") numeric._biforeach(x,y,s,0,V);\n  else numeric._biforeach(x,y,s,0,S);\n}\nreturn x;\n');
        }
      }
      /** @type {number} */
      i = 0;
      for (; i < numeric$jscomp$0.mathfuns2.length; ++i) {
        j = numeric$jscomp$0.mathfuns2[i];
        delete numeric$jscomp$0.ops2[j];
      }
      /** @type {number} */
      i = 0;
      for (; i < numeric$jscomp$0.mathfuns.length; ++i) {
        j = numeric$jscomp$0.mathfuns[i];
        numeric$jscomp$0.ops1[j] = j;
      }
      for (i in numeric$jscomp$0.ops1) {
        if (numeric$jscomp$0.ops1.hasOwnProperty(i)) {
          /** @type {string} */
          r = "";
          j = numeric$jscomp$0.ops1[i];
          if (-1 !== numeric$jscomp$0.myIndexOf.call(numeric$jscomp$0.mathfuns, i) && Math.hasOwnProperty(j)) {
            /** @type {string} */
            r = "var " + j + " = Math." + j + ";\n";
          }
          numeric$jscomp$0[i + "eqV"] = numeric$jscomp$0.pointwise2(["ret[i]"], "ret[i] = " + j + "(ret[i]);", r);
          numeric$jscomp$0[i + "eq"] = Function("x", 'if(typeof x !== "object") return ' + j + "x\nvar i;\nvar V = numeric." + i + "eqV;\nvar s = numeric.dim(x);\nnumeric._foreach(x,s,0,V);\nreturn x;\n");
          numeric$jscomp$0[i + "V"] = numeric$jscomp$0.pointwise2(["x[i]"], "ret[i] = " + j + "(x[i]);", r);
          numeric$jscomp$0[i] = Function("x", 'if(typeof x !== "object") return ' + j + "(x)\nvar i;\nvar V = numeric." + i + "V;\nvar s = numeric.dim(x);\nreturn numeric._foreach2(x,s,0,V);\n");
        }
      }
      /** @type {number} */
      i = 0;
      for (; i < numeric$jscomp$0.mathfuns.length; ++i) {
        j = numeric$jscomp$0.mathfuns[i];
        delete numeric$jscomp$0.ops1[j];
      }
      for (i in numeric$jscomp$0.mapreducers) {
        if (numeric$jscomp$0.mapreducers.hasOwnProperty(i)) {
          j = numeric$jscomp$0.mapreducers[i];
          numeric$jscomp$0[i + "V"] = numeric$jscomp$0.mapreduce2(j[0], j[1]);
          numeric$jscomp$0[i] = Function("x", "s", "k", j[1] + 'if(typeof x !== "object") {    xi = x;\n' + j[0] + ';\n    return accum;\n}if(typeof s === "undefined") s = numeric.dim(x);\nif(typeof k === "undefined") k = 0;\nif(k === s.length-1) return numeric.' + i + "V(x);\nvar xi;\nvar n = x.length, i;\nfor(i=n-1;i!==-1;--i) {\n   xi = arguments.callee(x[i]);\n" + j[0] + ";\n}\nreturn accum;\n");
        }
      }
    })();
    numeric$jscomp$0.truncVV = numeric$jscomp$0.pointwise(["x[i]", "y[i]"], "ret[i] = round(x[i]/y[i])*y[i];", "var round = Math.round;");
    numeric$jscomp$0.truncVS = numeric$jscomp$0.pointwise(["x[i]", "y"], "ret[i] = round(x[i]/y)*y;", "var round = Math.round;");
    numeric$jscomp$0.truncSV = numeric$jscomp$0.pointwise(["x", "y[i]"], "ret[i] = round(x/y[i])*y[i];", "var round = Math.round;");
    /**
     * @param {number} value
     * @param {number} n
     * @return {?}
     */
    numeric$jscomp$0.trunc = function(value, n) {
      return "object" === (void 0 === value ? "undefined" : _typeof$jscomp$0(value)) ? "object" === (void 0 === n ? "undefined" : _typeof$jscomp$0(n)) ? numeric$jscomp$0.truncVV(value, n) : numeric$jscomp$0.truncVS(value, n) : "object" === (void 0 === n ? "undefined" : _typeof$jscomp$0(n)) ? numeric$jscomp$0.truncSV(value, n) : Math.round(value / n) * n;
    };
    /**
     * @param {string} value
     * @return {?}
     */
    numeric$jscomp$0.inv = function(value) {
      var val;
      var b;
      var w;
      var x;
      var key;
      var i;
      var i1;
      var _a = numeric$jscomp$0.dim(value);
      /** @type {function(?): number} */
      var abs = Math.abs;
      var a = _a[0];
      var i2 = _a[1];
      var ret = numeric$jscomp$0.clone(value);
      var o = numeric$jscomp$0.identity(a);
      /** @type {number} */
      i = 0;
      for (; i < i2; ++i) {
        /** @type {number} */
        var k = -1;
        /** @type {number} */
        var i4 = -1;
        /** @type {number} */
        key = i;
        for (; key !== a; ++key) {
          if ((i1 = abs(ret[key][i])) > i4) {
            /** @type {number} */
            k = key;
            /** @type {number} */
            i4 = i1;
          }
        }
        b = ret[k];
        ret[k] = ret[i];
        ret[i] = b;
        x = o[k];
        o[k] = o[i];
        o[i] = x;
        value = b[i];
        /** @type {number} */
        i1 = i;
        for (; i1 !== i2; ++i1) {
          b[i1] /= value;
        }
        /** @type {number} */
        i1 = i2 - 1;
        for (; -1 !== i1; --i1) {
          x[i1] /= value;
        }
        /** @type {number} */
        key = a - 1;
        for (; -1 !== key; --key) {
          if (key !== i) {
            val = ret[key];
            w = o[key];
            value = val[i];
            /** @type {number} */
            i1 = i + 1;
            for (; i1 !== i2; ++i1) {
              val[i1] -= b[i1] * value;
            }
            /** @type {number} */
            i1 = i2 - 1;
            for (; i1 > 0; --i1) {
              w[i1] -= x[i1] * value;
              w[--i1] -= x[i1] * value;
            }
            if (0 === i1) {
              w[0] -= x[0] * value;
            }
          }
        }
      }
      return o;
    };
    /**
     * @param {undefined} a
     * @return {?}
     */
    numeric$jscomp$0.det = function(a) {
      var nodes = numeric$jscomp$0.dim(a);
      if (2 !== nodes.length || nodes[0] !== nodes[1]) {
        throw new Error("numeric: det() only works on square matrices");
      }
      var j;
      var k;
      var i;
      var v;
      var body;
      var diffframetime;
      var carry;
      var type;
      var n = nodes[0];
      /** @type {number} */
      var t = 1;
      var data = numeric$jscomp$0.clone(a);
      /** @type {number} */
      k = 0;
      for (; k < n - 1; k++) {
        /** @type {number} */
        i = k;
        /** @type {number} */
        j = k + 1;
        for (; j < n; j++) {
          if (Math.abs(data[j][k]) > Math.abs(data[i][k])) {
            /** @type {number} */
            i = j;
          }
        }
        if (i !== k) {
          carry = data[i];
          data[i] = data[k];
          data[k] = carry;
          /** @type {number} */
          t = t * -1;
        }
        v = data[k];
        /** @type {number} */
        j = k + 1;
        for (; j < n; j++) {
          /** @type {number} */
          diffframetime = (body = data[j])[k] / v[k];
          /** @type {number} */
          i = k + 1;
          for (; i < n - 1; i = i + 2) {
            /** @type {number} */
            type = i + 1;
            body[i] -= v[i] * diffframetime;
            body[type] -= v[type] * diffframetime;
          }
          if (i !== n) {
            body[i] -= v[i] * diffframetime;
          }
        }
        if (0 === v[k]) {
          return 0;
        }
        /** @type {number} */
        t = t * v[k];
      }
      return t * data[k][k];
    };
    /**
     * @param {!Array} a
     * @return {?}
     */
    numeric$jscomp$0.transpose = function(a) {
      var j;
      var i;
      var p;
      var s;
      var r;
      var width = a.length;
      var length = a[0].length;
      /** @type {!Array} */
      var result = Array(length);
      /** @type {number} */
      i = 0;
      for (; i < length; i++) {
        /** @type {!Array} */
        result[i] = Array(width);
      }
      /** @type {number} */
      j = width - 1;
      for (; j >= 1; j = j - 2) {
        s = a[j];
        p = a[j - 1];
        /** @type {number} */
        i = length - 1;
        for (; i >= 1; --i) {
          (r = result[i])[j] = s[i];
          r[j - 1] = p[i];
          (r = result[--i])[j] = s[i];
          r[j - 1] = p[i];
        }
        if (0 === i) {
          (r = result[0])[j] = s[0];
          r[j - 1] = p[0];
        }
      }
      if (0 === j) {
        p = a[0];
        /** @type {number} */
        i = length - 1;
        for (; i >= 1; --i) {
          result[i][0] = p[i];
          result[--i][0] = p[i];
        }
        if (0 === i) {
          result[0][0] = p[0];
        }
      }
      return result;
    };
    /**
     * @param {!Object} x
     * @return {?}
     */
    numeric$jscomp$0.negtranspose = function(x) {
      var k;
      var i;
      var _y;
      var rval;
      var elem;
      var n = x.length;
      var length = x[0].length;
      /** @type {!Array} */
      var ret = Array(length);
      /** @type {number} */
      i = 0;
      for (; i < length; i++) {
        /** @type {!Array} */
        ret[i] = Array(n);
      }
      /** @type {number} */
      k = n - 1;
      for (; k >= 1; k = k - 2) {
        rval = x[k];
        _y = x[k - 1];
        /** @type {number} */
        i = length - 1;
        for (; i >= 1; --i) {
          /** @type {number} */
          (elem = ret[i])[k] = -rval[i];
          /** @type {number} */
          elem[k - 1] = -_y[i];
          /** @type {number} */
          (elem = ret[--i])[k] = -rval[i];
          /** @type {number} */
          elem[k - 1] = -_y[i];
        }
        if (0 === i) {
          /** @type {number} */
          (elem = ret[0])[k] = -rval[0];
          /** @type {number} */
          elem[k - 1] = -_y[0];
        }
      }
      if (0 === k) {
        _y = x[0];
        /** @type {number} */
        i = length - 1;
        for (; i >= 1; --i) {
          /** @type {number} */
          ret[i][0] = -_y[i];
          /** @type {number} */
          ret[--i][0] = -_y[i];
        }
        if (0 === i) {
          /** @type {number} */
          ret[0][0] = -_y[0];
        }
      }
      return ret;
    };
    /**
     * @param {!Object} data
     * @param {number} start
     * @return {?}
     */
    numeric$jscomp$0._random = function get(data, start) {
      var i;
      var random;
      var end = data[start];
      /** @type {!Array} */
      var results = Array(end);
      if (start === data.length - 1) {
        /** @type {function(): number} */
        random = Math.random;
        /** @type {number} */
        i = end - 1;
        for (; i >= 1; i = i - 2) {
          /** @type {number} */
          results[i] = random();
          /** @type {number} */
          results[i - 1] = random();
        }
        return 0 === i && (results[0] = random()), results;
      }
      /** @type {number} */
      i = end - 1;
      for (; i >= 0; i--) {
        results[i] = get(data, start + 1);
      }
      return results;
    };
    /**
     * @param {!Object} value
     * @return {?}
     */
    numeric$jscomp$0.random = function(value) {
      return numeric$jscomp$0._random(value, 0);
    };
    /**
     * @param {string} a
     * @return {?}
     */
    numeric$jscomp$0.norm2 = function(a) {
      return Math.sqrt(numeric$jscomp$0.norm2Squared(a));
    };
    /**
     * @param {number} a
     * @param {number} b
     * @param {number} n
     * @return {?}
     */
    numeric$jscomp$0.linspace = function(a, b, n) {
      if (void 0 === n && (n = Math.max(Math.round(b - a) + 1, 1)), n < 2) {
        return 1 === n ? [a] : [];
      }
      var i;
      /** @type {!Array} */
      var ret = Array(n);
      /** @type {number} */
      i = --n;
      for (; i >= 0; i--) {
        /** @type {number} */
        ret[i] = (i * b + (n - i) * a) / n;
      }
      return ret;
    };
    /**
     * @param {?} str
     * @param {!Array} path
     * @param {!Array} to
     * @return {?}
     */
    numeric$jscomp$0.getBlock = function(str, path, to) {
      var utf8CharCodes = numeric$jscomp$0.dim(str);
      return function foo(x, k) {
        var i;
        var a = path[k];
        /** @type {number} */
        var length = to[k] - a;
        /** @type {!Array} */
        var ret = Array(length);
        if (k === utf8CharCodes.length - 1) {
          /** @type {number} */
          i = length;
          for (; i >= 0; i--) {
            ret[i] = x[i + a];
          }
          return ret;
        }
        /** @type {number} */
        i = length;
        for (; i >= 0; i--) {
          ret[i] = foo(x[i + a], k + 1);
        }
        return ret;
      }(str, 0);
    };
    /**
     * @param {?} name
     * @param {!NodeList} from
     * @param {!Object} to
     * @param {!Array} x
     * @return {?}
     */
    numeric$jscomp$0.setBlock = function(name, from, to, x) {
      var allElementsWithName = numeric$jscomp$0.dim(name);
      return function foo(x, y, k) {
        var i;
        var a = from[k];
        /** @type {number} */
        var b = to[k] - a;
        if (k === allElementsWithName.length - 1) {
          /** @type {number} */
          i = b;
          for (; i >= 0; i--) {
            x[i + a] = y[i];
          }
        }
        /** @type {number} */
        i = b;
        for (; i >= 0; i--) {
          foo(x[i + a], y[i], k + 1);
        }
      }(name, x, 0), name;
    };
    /**
     * @param {!Array} value
     * @param {!Array} props
     * @param {!Array} keys
     * @return {?}
     */
    numeric$jscomp$0.getRange = function(value, props, keys) {
      var i;
      var j;
      var data;
      var object;
      var length = props.length;
      var index = keys.length;
      /** @type {!Array} */
      var result = Array(length);
      /** @type {number} */
      i = length - 1;
      for (; -1 !== i; --i) {
        /** @type {!Array} */
        result[i] = Array(index);
        data = result[i];
        object = value[props[i]];
        /** @type {number} */
        j = index - 1;
        for (; -1 !== j; --j) {
          data[j] = object[keys[j]];
        }
      }
      return result;
    };
    /**
     * @param {!Array} a
     * @return {?}
     */
    numeric$jscomp$0.blockMatrix = function(a) {
      var allMatches = numeric$jscomp$0.dim(a);
      if (allMatches.length < 4) {
        return numeric$jscomp$0.blockMatrix([a]);
      }
      var len;
      var i;
      var j;
      var k;
      var match;
      var stepMatches = allMatches[0];
      var len2 = allMatches[1];
      /** @type {number} */
      len = 0;
      /** @type {number} */
      i = 0;
      /** @type {number} */
      j = 0;
      for (; j < stepMatches; ++j) {
        len = len + a[j][0].length;
      }
      /** @type {number} */
      k = 0;
      for (; k < len2; ++k) {
        i = i + a[0][k][0].length;
      }
      /** @type {!Array} */
      var data = Array(len);
      /** @type {number} */
      j = 0;
      for (; j < len; ++j) {
        /** @type {!Array} */
        data[j] = Array(i);
      }
      var x;
      var obj;
      var name;
      var prop;
      var all;
      /** @type {number} */
      var offset = 0;
      /** @type {number} */
      j = 0;
      for (; j < stepMatches; ++j) {
        x = i;
        /** @type {number} */
        k = len2 - 1;
        for (; -1 !== k; --k) {
          /** @type {number} */
          x = x - (match = a[j][k])[0].length;
          /** @type {number} */
          name = match.length - 1;
          for (; -1 !== name; --name) {
            all = match[name];
            obj = data[offset + name];
            /** @type {number} */
            prop = all.length - 1;
            for (; -1 !== prop; --prop) {
              obj[x + prop] = all[prop];
            }
          }
        }
        offset = offset + a[j][0].length;
      }
      return data;
    };
    /**
     * @param {!Array} a
     * @param {!Array} b
     * @return {?}
     */
    numeric$jscomp$0.tensor = function(a, b) {
      if ("number" == typeof a || "number" == typeof b) {
        return numeric$jscomp$0.mul(a, b);
      }
      var currentPageLinks = numeric$jscomp$0.dim(a);
      var times = numeric$jscomp$0.dim(b);
      if (1 !== currentPageLinks.length || 1 !== times.length) {
        throw new Error("numeric: tensor product is only defined for vectors");
      }
      var tags;
      var key;
      var k;
      var t;
      var _len8 = currentPageLinks[0];
      var i = times[0];
      /** @type {!Array} */
      var storeNames = Array(_len8);
      /** @type {number} */
      key = _len8 - 1;
      for (; key >= 0; key--) {
        /** @type {!Array} */
        tags = Array(i);
        t = a[key];
        /** @type {number} */
        k = i - 1;
        for (; k >= 3; --k) {
          /** @type {number} */
          tags[k] = t * b[k];
          /** @type {number} */
          tags[--k] = t * b[k];
          /** @type {number} */
          tags[--k] = t * b[k];
          /** @type {number} */
          tags[--k] = t * b[k];
        }
        for (; k >= 0;) {
          /** @type {number} */
          tags[k] = t * b[k];
          --k;
        }
        /** @type {!Array} */
        storeNames[key] = tags;
      }
      return storeNames;
    };
    /**
     * @param {number} x
     * @param {number} y
     * @return {undefined}
     */
    numeric$jscomp$0.T = function(x, y) {
      /** @type {number} */
      this.x = x;
      /** @type {number} */
      this.y = y;
    };
    /**
     * @param {?} selector
     * @param {boolean} expectedIds
     * @return {?}
     */
    numeric$jscomp$0.t = function(selector, expectedIds) {
      return new numeric$jscomp$0.T(selector, expectedIds);
    };
    /**
     * @param {string} bin
     * @param {string} array
     * @param {string} html
     * @param {string} images
     * @param {string} name
     * @return {?}
     */
    numeric$jscomp$0.Tbinop = function(bin, array, html, images, name) {
      var str;
      numeric$jscomp$0.indexOf;
      if ("string" != typeof name) {
        for (str in name = "", numeric$jscomp$0) {
          if (numeric$jscomp$0.hasOwnProperty(str) && (bin.indexOf(str) >= 0 || array.indexOf(str) >= 0 || html.indexOf(str) >= 0 || images.indexOf(str) >= 0) && str.length > 1) {
            /** @type {string} */
            name = name + ("var " + str + " = numeric." + str + ";\n");
          }
        }
      }
      return Function(["y"], "var x = this;\nif(!(y instanceof numeric.T)) { y = new numeric.T(y); }\n" + name + "\nif(x.y) {  if(y.y) {    return new numeric.T(" + images + ");\n  }\n  return new numeric.T(" + html + ");\n}\nif(y.y) {\n  return new numeric.T(" + array + ");\n}\nreturn new numeric.T(" + bin + ");\n");
    };
    numeric$jscomp$0.T.prototype.add = numeric$jscomp$0.Tbinop("add(x.x,y.x)", "add(x.x,y.x),y.y", "add(x.x,y.x),x.y", "add(x.x,y.x),add(x.y,y.y)");
    numeric$jscomp$0.T.prototype.sub = numeric$jscomp$0.Tbinop("sub(x.x,y.x)", "sub(x.x,y.x),neg(y.y)", "sub(x.x,y.x),x.y", "sub(x.x,y.x),sub(x.y,y.y)");
    numeric$jscomp$0.T.prototype.mul = numeric$jscomp$0.Tbinop("mul(x.x,y.x)", "mul(x.x,y.x),mul(x.x,y.y)", "mul(x.x,y.x),mul(x.y,y.x)", "sub(mul(x.x,y.x),mul(x.y,y.y)),add(mul(x.x,y.y),mul(x.y,y.x))");
    /**
     * @return {?}
     */
    numeric$jscomp$0.T.prototype.reciprocal = function() {
      var mul = numeric$jscomp$0.mul;
      var div = numeric$jscomp$0.div;
      if (this.y) {
        var d = numeric$jscomp$0.add(mul(this.x, this.x), mul(this.y, this.y));
        return new numeric$jscomp$0.T(div(this.x, d), div(numeric$jscomp$0.neg(this.y), d));
      }
      return new T(div(1, this.x));
    };
    /**
     * @param {!Object} y
     * @return {?}
     */
    numeric$jscomp$0.T.prototype.div = function(y) {
      if (y instanceof numeric$jscomp$0.T || (y = new numeric$jscomp$0.T(y)), y.y) {
        return this.mul(y.reciprocal());
      }
      var div = numeric$jscomp$0.div;
      return this.y ? new numeric$jscomp$0.T(div(this.x, y.x), div(this.y, y.x)) : new numeric$jscomp$0.T(div(this.x, y.x));
    };
    numeric$jscomp$0.T.prototype.dot = numeric$jscomp$0.Tbinop("dot(x.x,y.x)", "dot(x.x,y.x),dot(x.x,y.y)", "dot(x.x,y.x),dot(x.y,y.x)", "sub(dot(x.x,y.x),dot(x.y,y.y)),add(dot(x.x,y.y),dot(x.y,y.x))");
    /**
     * @return {?}
     */
    numeric$jscomp$0.T.prototype.transpose = function() {
      /** @type {function(!Array): ?} */
      var div = numeric$jscomp$0.transpose;
      var x = this.x;
      var v = this.y;
      return v ? new numeric$jscomp$0.T(div(x), div(v)) : new numeric$jscomp$0.T(div(x));
    };
    /**
     * @return {?}
     */
    numeric$jscomp$0.T.prototype.transjugate = function() {
      /** @type {function(!Array): ?} */
      var div = numeric$jscomp$0.transpose;
      var x = this.x;
      var decimals = this.y;
      return decimals ? new numeric$jscomp$0.T(div(x), numeric$jscomp$0.negtranspose(decimals)) : new numeric$jscomp$0.T(div(x));
    };
    /**
     * @param {string} res
     * @param {string} status
     * @param {string} e
     * @return {?}
     */
    numeric$jscomp$0.Tunop = function(res, status, e) {
      return "string" != typeof e && (e = ""), Function("var x = this;\n" + e + "\nif(x.y) {  " + status + ";\n}\n" + res + ";\n");
    };
    numeric$jscomp$0.T.prototype.exp = numeric$jscomp$0.Tunop("return new numeric.T(ex)", "return new numeric.T(mul(cos(x.y),ex),mul(sin(x.y),ex))", "var ex = numeric.exp(x.x), cos = numeric.cos, sin = numeric.sin, mul = numeric.mul;");
    numeric$jscomp$0.T.prototype.conj = numeric$jscomp$0.Tunop("return new numeric.T(x.x);", "return new numeric.T(x.x,numeric.neg(x.y));");
    numeric$jscomp$0.T.prototype.neg = numeric$jscomp$0.Tunop("return new numeric.T(neg(x.x));", "return new numeric.T(neg(x.x),neg(x.y));", "var neg = numeric.neg;");
    numeric$jscomp$0.T.prototype.sin = numeric$jscomp$0.Tunop("return new numeric.T(numeric.sin(x.x))", "return x.exp().sub(x.neg().exp()).div(new numeric.T(0,2));");
    numeric$jscomp$0.T.prototype.cos = numeric$jscomp$0.Tunop("return new numeric.T(numeric.cos(x.x))", "return x.exp().add(x.neg().exp()).div(2);");
    numeric$jscomp$0.T.prototype.abs = numeric$jscomp$0.Tunop("return new numeric.T(numeric.abs(x.x));", "return new numeric.T(numeric.sqrt(numeric.add(mul(x.x,x.x),mul(x.y,x.y))));", "var mul = numeric.mul;");
    numeric$jscomp$0.T.prototype.log = numeric$jscomp$0.Tunop("return new numeric.T(numeric.log(x.x));", "var theta = new numeric.T(numeric.atan2(x.y,x.x)), r = x.abs();\nreturn new numeric.T(numeric.log(r.x),theta.x);");
    numeric$jscomp$0.T.prototype.norm2 = numeric$jscomp$0.Tunop("return numeric.norm2(x.x);", "var f = numeric.norm2Squared;\nreturn Math.sqrt(f(x.x)+f(x.y));");
    /**
     * @return {?}
     */
    numeric$jscomp$0.T.prototype.inv = function() {
      var e = this;
      if (void 0 === e.y) {
        return new numeric$jscomp$0.T(numeric$jscomp$0.inv(e.x));
      }
      var array;
      var src;
      var ref;
      var r;
      var param;
      var result;
      var part;
      var h;
      var i;
      var k;
      var j;
      var _maxBuilderInputModifiedDate;
      var _builderInputModifiedDate;
      var c;
      var s;
      var y;
      var w;
      var tmp;
      var dimension = e.x.length;
      var parts = numeric$jscomp$0.identity(dimension);
      var values = numeric$jscomp$0.rep([dimension, dimension], 0);
      var data = numeric$jscomp$0.clone(e.x);
      var m = numeric$jscomp$0.clone(e.y);
      /** @type {number} */
      i = 0;
      for (; i < dimension; i++) {
        /** @type {number} */
        _maxBuilderInputModifiedDate = (c = data[i][i]) * c + (s = m[i][i]) * s;
        /** @type {number} */
        j = i;
        /** @type {number} */
        k = i + 1;
        for (; k < dimension; k++) {
          if ((_builderInputModifiedDate = (c = data[k][i]) * c + (s = m[k][i]) * s) > _maxBuilderInputModifiedDate) {
            /** @type {number} */
            j = k;
            /** @type {number} */
            _maxBuilderInputModifiedDate = _builderInputModifiedDate;
          }
        }
        if (j !== i) {
          tmp = data[i];
          data[i] = data[j];
          data[j] = tmp;
          tmp = m[i];
          m[i] = m[j];
          m[j] = tmp;
          tmp = parts[i];
          parts[i] = parts[j];
          parts[j] = tmp;
          tmp = values[i];
          values[i] = values[j];
          values[j] = tmp;
        }
        array = data[i];
        src = m[i];
        param = parts[i];
        result = values[i];
        c = array[i];
        s = src[i];
        /** @type {number} */
        k = i + 1;
        for (; k < dimension; k++) {
          y = array[k];
          w = src[k];
          /** @type {number} */
          array[k] = (y * c + w * s) / _maxBuilderInputModifiedDate;
          /** @type {number} */
          src[k] = (w * c - y * s) / _maxBuilderInputModifiedDate;
        }
        /** @type {number} */
        k = 0;
        for (; k < dimension; k++) {
          y = param[k];
          w = result[k];
          /** @type {number} */
          param[k] = (y * c + w * s) / _maxBuilderInputModifiedDate;
          /** @type {number} */
          result[k] = (w * c - y * s) / _maxBuilderInputModifiedDate;
        }
        /** @type {number} */
        k = i + 1;
        for (; k < dimension; k++) {
          ref = data[k];
          r = m[k];
          part = parts[k];
          h = values[k];
          c = ref[i];
          s = r[i];
          /** @type {number} */
          j = i + 1;
          for (; j < dimension; j++) {
            y = array[j];
            w = src[j];
            ref[j] -= y * c - w * s;
            r[j] -= w * c + y * s;
          }
          /** @type {number} */
          j = 0;
          for (; j < dimension; j++) {
            y = param[j];
            w = result[j];
            part[j] -= y * c - w * s;
            h[j] -= w * c + y * s;
          }
        }
      }
      /** @type {number} */
      i = dimension - 1;
      for (; i > 0; i--) {
        param = parts[i];
        result = values[i];
        /** @type {number} */
        k = i - 1;
        for (; k >= 0; k--) {
          part = parts[k];
          h = values[k];
          c = data[k][i];
          s = m[k][i];
          /** @type {number} */
          j = dimension - 1;
          for (; j >= 0; j--) {
            y = param[j];
            w = result[j];
            part[j] -= c * y - s * w;
            h[j] -= c * w + s * y;
          }
        }
      }
      return new numeric$jscomp$0.T(parts, values);
    };
    /**
     * @param {!Object} name
     * @return {?}
     */
    numeric$jscomp$0.T.prototype.get = function(name) {
      var part;
      var cur = this.x;
      var callbackCont = this.y;
      /** @type {number} */
      var i = 0;
      var length = name.length;
      if (callbackCont) {
        for (; i < length;) {
          cur = cur[part = name[i]];
          callbackCont = callbackCont[part];
          i++;
        }
        return new numeric$jscomp$0.T(cur, callbackCont);
      }
      for (; i < length;) {
        cur = cur[part = name[i]];
        i++;
      }
      return new numeric$jscomp$0.T(cur);
    };
    /**
     * @param {?} x
     * @param {number} data
     * @return {?}
     */
    numeric$jscomp$0.T.prototype.set = function(x, data) {
      var i;
      var a = this.x;
      var v = this.y;
      /** @type {number} */
      var j = 0;
      var l = x.length;
      var key = data.x;
      var value = data.y;
      if (0 === l) {
        return value ? this.y = value : v && (this.y = void 0), this.x = a, this;
      }
      if (value) {
        if (!v) {
          v = numeric$jscomp$0.rep(numeric$jscomp$0.dim(a), 0);
          this.y = v;
        }
        for (; j < l - 1;) {
          a = a[i = x[j]];
          v = v[i];
          j++;
        }
        return a[i = x[j]] = key, v[i] = value, this;
      }
      if (v) {
        for (; j < l - 1;) {
          a = a[i = x[j]];
          v = v[i];
          j++;
        }
        return a[i = x[j]] = key, key instanceof Array ? v[i] = numeric$jscomp$0.rep(numeric$jscomp$0.dim(key), 0) : v[i] = 0, this;
      }
      for (; j < l - 1;) {
        a = a[i = x[j]];
        j++;
      }
      return a[i = x[j]] = key, this;
    };
    /**
     * @param {number} offset
     * @param {number} limit
     * @return {?}
     */
    numeric$jscomp$0.T.prototype.getRows = function(offset, limit) {
      var i;
      var args;
      /** @type {number} */
      var length = limit - offset + 1;
      /** @type {!Array} */
      var array = Array(length);
      var left = this.x;
      var v = this.y;
      /** @type {number} */
      i = offset;
      for (; i <= limit; i++) {
        array[i - offset] = left[i];
      }
      if (v) {
        /** @type {!Array} */
        args = Array(length);
        /** @type {number} */
        i = offset;
        for (; i <= limit; i++) {
          args[i - offset] = v[i];
        }
        return new numeric$jscomp$0.T(array, args);
      }
      return new numeric$jscomp$0.T(array);
    };
    /**
     * @param {number} step
     * @param {number} value
     * @param {!Object} args
     * @return {?}
     */
    numeric$jscomp$0.T.prototype.setRows = function(step, value, args) {
      var i;
      var ret = this.x;
      var y = this.y;
      var a = args.x;
      var partials = args.y;
      /** @type {number} */
      i = step;
      for (; i <= value; i++) {
        ret[i] = a[i - step];
      }
      if (partials) {
        if (!y) {
          y = numeric$jscomp$0.rep(numeric$jscomp$0.dim(ret), 0);
          this.y = y;
        }
        /** @type {number} */
        i = step;
        for (; i <= value; i++) {
          y[i] = partials[i - step];
        }
      } else {
        if (y) {
          /** @type {number} */
          i = step;
          for (; i <= value; i++) {
            y[i] = numeric$jscomp$0.rep([a[i - step].length], 0);
          }
        }
      }
      return this;
    };
    /**
     * @param {!Object} i
     * @return {?}
     */
    numeric$jscomp$0.T.prototype.getRow = function(i) {
      var stamp = this.x;
      var pa = this.y;
      return pa ? new numeric$jscomp$0.T(stamp[i], pa[i]) : new numeric$jscomp$0.T(stamp[i]);
    };
    /**
     * @param {!Object} i
     * @param {!Object} v
     * @return {?}
     */
    numeric$jscomp$0.T.prototype.setRow = function(i, v) {
      var ret = this.x;
      var y = this.y;
      var a = v.x;
      var vy = v.y;
      return ret[i] = a, vy ? (y || (y = numeric$jscomp$0.rep(numeric$jscomp$0.dim(ret), 0), this.y = y), y[i] = vy) : y && (y = numeric$jscomp$0.rep([a.length], 0)), this;
    };
    /**
     * @param {?} d
     * @param {!Array} key
     * @return {?}
     */
    numeric$jscomp$0.T.prototype.getBlock = function(d, key) {
      var x = this.x;
      var v = this.y;
      /** @type {function(?, !Array, !Array): ?} */
      var div = numeric$jscomp$0.getBlock;
      return v ? new numeric$jscomp$0.T(div(x, d, key), div(v, d, key)) : new numeric$jscomp$0.T(div(x, d, key));
    };
    /**
     * @param {!NodeList} val
     * @param {!Object} from
     * @param {!Object} to
     * @return {?}
     */
    numeric$jscomp$0.T.prototype.setBlock = function(val, from, to) {
      if (!(to instanceof numeric$jscomp$0.T)) {
        to = new numeric$jscomp$0.T(to);
      }
      var x = this.x;
      var y = this.y;
      /** @type {function(?, !NodeList, !Object, !Array): ?} */
      var log = numeric$jscomp$0.setBlock;
      var e = to.x;
      var lat2 = to.y;
      if (lat2) {
        return y || (this.y = numeric$jscomp$0.rep(numeric$jscomp$0.dim(this), 0), y = this.y), log(x, val, from, e), log(y, val, from, lat2), this;
      }
      log(x, val, from, e);
      if (y) {
        log(y, val, from, numeric$jscomp$0.rep(numeric$jscomp$0.dim(e), 0));
      }
    };
    /**
     * @param {!Array} s
     * @param {number} a
     * @return {?}
     */
    numeric$jscomp$0.T.rep = function(s, a) {
      /** @type {function(number, number): undefined} */
      var Uint8Array = numeric$jscomp$0.T;
      if (!(a instanceof Uint8Array)) {
        a = new Uint8Array(a);
      }
      var i = a.x;
      var m = a.y;
      /** @type {function(!Array, number, number): ?} */
      var f = numeric$jscomp$0.rep;
      return m ? new Uint8Array(f(s, i), f(s, m)) : new Uint8Array(f(s, i));
    };
    /**
     * @param {!Object} obj
     * @return {?}
     */
    numeric$jscomp$0.T.diag = function(obj) {
      if (!(obj instanceof numeric$jscomp$0.T)) {
        obj = new numeric$jscomp$0.T(obj);
      }
      var x = obj.x;
      var b = obj.y;
      /** @type {function(!Array): ?} */
      var div = numeric$jscomp$0.diag;
      return b ? new numeric$jscomp$0.T(div(x), div(b)) : new numeric$jscomp$0.T(div(x));
    };
    /**
     * @return {?}
     */
    numeric$jscomp$0.T.eig = function() {
      if (this.y) {
        throw new Error("eig: not implemented for complex matrices.");
      }
      return numeric$jscomp$0.eig(this.x);
    };
    /**
     * @param {?} d
     * @return {?}
     */
    numeric$jscomp$0.T.identity = function(d) {
      return new numeric$jscomp$0.T(numeric$jscomp$0.identity(d));
    };
    /**
     * @return {?}
     */
    numeric$jscomp$0.T.prototype.getDiag = function() {
      var svg = numeric$jscomp$0;
      var x = this.x;
      var y = this.y;
      return y ? new svg.T(svg.getDiag(x), svg.getDiag(y)) : new svg.T(svg.getDiag(x));
    };
    /**
     * @param {string} value
     * @return {?}
     */
    numeric$jscomp$0.house = function(value) {
      var b = numeric$jscomp$0.clone(value);
      /** @type {number} */
      var free = (value[0] >= 0 ? 1 : -1) * numeric$jscomp$0.norm2(value);
      b[0] += free;
      var n = numeric$jscomp$0.norm2(b);
      if (0 === n) {
        throw new Error("eig: internal error");
      }
      return numeric$jscomp$0.div(b, n);
    };
    /**
     * @param {string} str
     * @return {?}
     */
    numeric$jscomp$0.toUpperHessenberg = function(str) {
      var list = numeric$jscomp$0.dim(str);
      if (2 !== list.length || list[0] !== list[1]) {
        throw new Error("numeric: toUpperHessenberg() only works on square matrices");
      }
      var k;
      var i;
      var j;
      var a;
      var b;
      var d;
      var results;
      var span;
      var row;
      var r;
      var m = list[0];
      var value = numeric$jscomp$0.clone(str);
      var data = numeric$jscomp$0.identity(m);
      /** @type {number} */
      i = 0;
      for (; i < m - 2; i++) {
        /** @type {!Array} */
        a = Array(m - i - 1);
        /** @type {number} */
        k = i + 1;
        for (; k < m; k++) {
          a[k - i - 1] = value[k][i];
        }
        if (numeric$jscomp$0.norm2(a) > 0) {
          b = numeric$jscomp$0.house(a);
          d = numeric$jscomp$0.getBlock(value, [i + 1, i], [m - 1, m - 1]);
          results = numeric$jscomp$0.tensor(b, numeric$jscomp$0.dot(b, d));
          /** @type {number} */
          k = i + 1;
          for (; k < m; k++) {
            span = value[k];
            row = results[k - i - 1];
            /** @type {number} */
            j = i;
            for (; j < m; j++) {
              span[j] -= 2 * row[j - i];
            }
          }
          d = numeric$jscomp$0.getBlock(value, [0, i + 1], [m - 1, m - 1]);
          results = numeric$jscomp$0.tensor(numeric$jscomp$0.dot(d, b), b);
          /** @type {number} */
          k = 0;
          for (; k < m; k++) {
            span = value[k];
            row = results[k];
            /** @type {number} */
            j = i + 1;
            for (; j < m; j++) {
              span[j] -= 2 * row[j - i - 1];
            }
          }
          /** @type {!Array} */
          d = Array(m - i - 1);
          /** @type {number} */
          k = i + 1;
          for (; k < m; k++) {
            d[k - i - 1] = data[k];
          }
          results = numeric$jscomp$0.tensor(b, numeric$jscomp$0.dot(b, d));
          /** @type {number} */
          k = i + 1;
          for (; k < m; k++) {
            r = data[k];
            row = results[k - i - 1];
            /** @type {number} */
            j = 0;
            for (; j < m; j++) {
              r[j] -= 2 * row[j];
            }
          }
        }
      }
      return {
        H : value,
        Q : data
      };
    };
    /** @type {number} */
    numeric$jscomp$0.epsilon = 2.220446049250313E-16;
    /**
     * @param {string} data
     * @param {number} maxiter
     * @return {?}
     */
    numeric$jscomp$0.QRFrancis = function(data, maxiter) {
      if (void 0 === maxiter) {
        /** @type {number} */
        maxiter = 1E4;
      }
      data = numeric$jscomp$0.clone(data);
      numeric$jscomp$0.clone(data);
      var a;
      var d;
      var u;
      var v;
      var y;
      var x;
      var det;
      var tr;
      var b;
      var ci;
      var subdata;
      var r;
      var row;
      var result;
      var i;
      var start;
      var j;
      var iter;
      var end = numeric$jscomp$0.dim(data)[0];
      var p = numeric$jscomp$0.identity(end);
      if (end < 3) {
        return {
          Q : p,
          B : [[0, end - 1]]
        };
      }
      var mul = numeric$jscomp$0.epsilon;
      /** @type {number} */
      iter = 0;
      for (; iter < maxiter; iter++) {
        /** @type {number} */
        start = 0;
        for (; start < end - 1; start++) {
          if (Math.abs(data[start + 1][start]) < mul * (Math.abs(data[start][start]) + Math.abs(data[start + 1][start + 1]))) {
            var QH1 = numeric$jscomp$0.QRFrancis(numeric$jscomp$0.getBlock(data, [0, 0], [start, start]), maxiter);
            var QH2 = numeric$jscomp$0.QRFrancis(numeric$jscomp$0.getBlock(data, [start + 1, start + 1], [end - 1, end - 1]), maxiter);
            /** @type {!Array} */
            r = Array(start + 1);
            /** @type {number} */
            i = 0;
            for (; i <= start; i++) {
              r[i] = p[i];
            }
            row = numeric$jscomp$0.dot(QH1.Q, r);
            /** @type {number} */
            i = 0;
            for (; i <= start; i++) {
              p[i] = row[i];
            }
            /** @type {!Array} */
            r = Array(end - start - 1);
            /** @type {number} */
            i = start + 1;
            for (; i < end; i++) {
              r[i - start - 1] = p[i];
            }
            row = numeric$jscomp$0.dot(QH2.Q, r);
            /** @type {number} */
            i = start + 1;
            for (; i < end; i++) {
              p[i] = row[i - start - 1];
            }
            return {
              Q : p,
              B : QH1.B.concat(numeric$jscomp$0.add(QH2.B, start + 1))
            };
          }
        }
        var mByte;
        var kByte;
        var len;
        if (u = data[end - 2][end - 2], v = data[end - 2][end - 1], y = data[end - 1][end - 2], tr = u + (x = data[end - 1][end - 1]), det = u * x - v * y, b = numeric$jscomp$0.getBlock(data, [0, 0], [2, 2]), tr * tr >= 4 * det) {
          /** @type {number} */
          mByte = .5 * (tr + Math.sqrt(tr * tr - 4 * det));
          /** @type {number} */
          kByte = .5 * (tr - Math.sqrt(tr * tr - 4 * det));
          b = numeric$jscomp$0.add(numeric$jscomp$0.sub(numeric$jscomp$0.dot(b, b), numeric$jscomp$0.mul(b, mByte + kByte)), numeric$jscomp$0.diag(numeric$jscomp$0.rep([3], mByte * kByte)));
        } else {
          b = numeric$jscomp$0.add(numeric$jscomp$0.sub(numeric$jscomp$0.dot(b, b), numeric$jscomp$0.mul(b, tr)), numeric$jscomp$0.diag(numeric$jscomp$0.rep([3], det)));
        }
        /** @type {!Array} */
        a = [b[0][0], b[1][0], b[2][0]];
        d = numeric$jscomp$0.house(a);
        /** @type {!Array} */
        r = [data[0], data[1], data[2]];
        row = numeric$jscomp$0.tensor(d, numeric$jscomp$0.dot(d, r));
        /** @type {number} */
        i = 0;
        for (; i < 3; i++) {
          subdata = data[i];
          result = row[i];
          /** @type {number} */
          j = 0;
          for (; j < end; j++) {
            subdata[j] -= 2 * result[j];
          }
        }
        r = numeric$jscomp$0.getBlock(data, [0, 0], [end - 1, 2]);
        row = numeric$jscomp$0.tensor(numeric$jscomp$0.dot(r, d), d);
        /** @type {number} */
        i = 0;
        for (; i < end; i++) {
          subdata = data[i];
          result = row[i];
          /** @type {number} */
          j = 0;
          for (; j < 3; j++) {
            subdata[j] -= 2 * result[j];
          }
        }
        /** @type {!Array} */
        r = [p[0], p[1], p[2]];
        row = numeric$jscomp$0.tensor(d, numeric$jscomp$0.dot(d, r));
        /** @type {number} */
        i = 0;
        for (; i < 3; i++) {
          ci = p[i];
          result = row[i];
          /** @type {number} */
          j = 0;
          for (; j < end; j++) {
            ci[j] -= 2 * result[j];
          }
        }
        /** @type {number} */
        start = 0;
        for (; start < end - 2; start++) {
          /** @type {number} */
          j = start;
          for (; j <= start + 1; j++) {
            if (Math.abs(data[j + 1][j]) < mul * (Math.abs(data[j][j]) + Math.abs(data[j + 1][j + 1]))) {
              QH1 = numeric$jscomp$0.QRFrancis(numeric$jscomp$0.getBlock(data, [0, 0], [j, j]), maxiter);
              QH2 = numeric$jscomp$0.QRFrancis(numeric$jscomp$0.getBlock(data, [j + 1, j + 1], [end - 1, end - 1]), maxiter);
              /** @type {!Array} */
              r = Array(j + 1);
              /** @type {number} */
              i = 0;
              for (; i <= j; i++) {
                r[i] = p[i];
              }
              row = numeric$jscomp$0.dot(QH1.Q, r);
              /** @type {number} */
              i = 0;
              for (; i <= j; i++) {
                p[i] = row[i];
              }
              /** @type {!Array} */
              r = Array(end - j - 1);
              /** @type {number} */
              i = j + 1;
              for (; i < end; i++) {
                r[i - j - 1] = p[i];
              }
              row = numeric$jscomp$0.dot(QH2.Q, r);
              /** @type {number} */
              i = j + 1;
              for (; i < end; i++) {
                p[i] = row[i - j - 1];
              }
              return {
                Q : p,
                B : QH1.B.concat(numeric$jscomp$0.add(QH2.B, j + 1))
              };
            }
          }
          /** @type {number} */
          len = Math.min(end - 1, start + 3);
          /** @type {!Array} */
          a = Array(len - start);
          /** @type {number} */
          i = start + 1;
          for (; i <= len; i++) {
            a[i - start - 1] = data[i][start];
          }
          d = numeric$jscomp$0.house(a);
          r = numeric$jscomp$0.getBlock(data, [start + 1, start], [len, end - 1]);
          row = numeric$jscomp$0.tensor(d, numeric$jscomp$0.dot(d, r));
          /** @type {number} */
          i = start + 1;
          for (; i <= len; i++) {
            subdata = data[i];
            result = row[i - start - 1];
            /** @type {number} */
            j = start;
            for (; j < end; j++) {
              subdata[j] -= 2 * result[j - start];
            }
          }
          r = numeric$jscomp$0.getBlock(data, [0, start + 1], [end - 1, len]);
          row = numeric$jscomp$0.tensor(numeric$jscomp$0.dot(r, d), d);
          /** @type {number} */
          i = 0;
          for (; i < end; i++) {
            subdata = data[i];
            result = row[i];
            /** @type {number} */
            j = start + 1;
            for (; j <= len; j++) {
              subdata[j] -= 2 * result[j - start - 1];
            }
          }
          /** @type {!Array} */
          r = Array(len - start);
          /** @type {number} */
          i = start + 1;
          for (; i <= len; i++) {
            r[i - start - 1] = p[i];
          }
          row = numeric$jscomp$0.tensor(d, numeric$jscomp$0.dot(d, r));
          /** @type {number} */
          i = start + 1;
          for (; i <= len; i++) {
            ci = p[i];
            result = row[i - start - 1];
            /** @type {number} */
            j = 0;
            for (; j < end; j++) {
              ci[j] -= 2 * result[j];
            }
          }
        }
      }
      throw new Error("numeric: eigenvalue iteration does not converge -- increase maxiter?");
    };
    /**
     * @param {!Array} A
     * @param {undefined} maxiter
     * @return {?}
     */
    numeric$jscomp$0.eig = function(A, maxiter) {
      var i;
      var k;
      var vec3;
      var j;
      var a;
      var b;
      var c;
      var d;
      var p1;
      var disc;
      var x;
      var y;
      var t;
      var q;
      var n1;
      var n2;
      var QH = numeric$jscomp$0.toUpperHessenberg(A);
      var self = numeric$jscomp$0.QRFrancis(QH.H, maxiter);
      /** @type {function(number, number): undefined} */
      var Question = numeric$jscomp$0.T;
      var m = A.length;
      var max = self.B;
      var XXt = numeric$jscomp$0.dot(self.Q, numeric$jscomp$0.dot(QH.H, numeric$jscomp$0.transpose(self.Q)));
      var Q = new Question(numeric$jscomp$0.dot(self.Q, QH.Q));
      var len = max.length;
      /** @type {function(?): number} */
      var sqrt = Math.sqrt;
      /** @type {number} */
      k = 0;
      for (; k < len; k++) {
        if ((i = max[k][0]) === max[k][1]) {
        } else {
          if (j = i + 1, a = XXt[i][i], b = XXt[i][j], c = XXt[j][i], d = XXt[j][j], 0 === b && 0 === c) {
            continue;
          }
          if ((disc = (p1 = -a - d) * p1 - 4 * (a * d - b * c)) >= 0) {
            if ((n1 = (a - (x = p1 < 0 ? -.5 * (p1 - sqrt(disc)) : -.5 * (p1 + sqrt(disc)))) * (a - x) + b * b) > (n2 = c * c + (d - x) * (d - x))) {
              /** @type {number} */
              t = (a - x) / (n1 = sqrt(n1));
              /** @type {number} */
              q = b / n1;
            } else {
              /** @type {number} */
              t = c / (n2 = sqrt(n2));
              /** @type {number} */
              q = (d - x) / n2;
            }
            vec3 = new Question([[q, -t], [t, q]]);
            Q.setRows(i, j, vec3.dot(Q.getRows(i, j)));
          } else {
            /** @type {number} */
            x = -.5 * p1;
            /** @type {number} */
            y = .5 * sqrt(-disc);
            if ((n1 = (a - x) * (a - x) + b * b) > (n2 = c * c + (d - x) * (d - x))) {
              /** @type {number} */
              t = (a - x) / (n1 = sqrt(n1 + y * y));
              /** @type {number} */
              q = b / n1;
              /** @type {number} */
              x = 0;
              /** @type {number} */
              y = y / n1;
            } else {
              /** @type {number} */
              t = c / (n2 = sqrt(n2 + y * y));
              /** @type {number} */
              q = (d - x) / n2;
              /** @type {number} */
              x = y / n2;
              /** @type {number} */
              y = 0;
            }
            vec3 = new Question([[q, -t], [t, q]], [[x, y], [y, -x]]);
            Q.setRows(i, j, vec3.dot(Q.getRows(i, j)));
          }
        }
      }
      var R = Q.dot(A).dot(Q.transjugate());
      var E = (m = A.length, numeric$jscomp$0.T.identity(m));
      /** @type {number} */
      j = 0;
      for (; j < m; j++) {
        if (j > 0) {
          /** @type {number} */
          k = j - 1;
          for (; k >= 0; k--) {
            var other = R.get([k, k]);
            var i = R.get([j, j]);
            if (numeric$jscomp$0.neq(other.x, i.x) || numeric$jscomp$0.neq(other.y, i.y)) {
              x = R.getRow(k).getBlock([k], [j - 1]);
              y = E.getRow(j).getBlock([k], [j - 1]);
              E.set([j, k], R.get([k, j]).neg().sub(x.dot(y)).div(other.sub(i)));
            } else {
              E.setRow(j, E.getRow(k));
            }
          }
        }
      }
      /** @type {number} */
      j = 0;
      for (; j < m; j++) {
        x = E.getRow(j);
        E.setRow(j, x.div(x.norm2()));
      }
      return E = E.transpose(), E = Q.transjugate().dot(E), {
        lambda : R.getDiag(),
        E : E
      };
    };
    /**
     * @param {!Array} a
     * @return {?}
     */
    numeric$jscomp$0.ccsSparse = function(a) {
      var v;
      var j;
      var i;
      var x = a.length;
      /** @type {!Array} */
      var counts = [];
      /** @type {number} */
      j = x - 1;
      for (; -1 !== j; --j) {
        for (i in v = a[j]) {
          /** @type {number} */
          i = parseInt(i);
          for (; i >= counts.length;) {
            /** @type {number} */
            counts[counts.length] = 0;
          }
          if (0 !== v[i]) {
            counts[i]++;
          }
        }
      }
      /** @type {number} */
      var n = counts.length;
      /** @type {!Array} */
      var Ai = Array(n + 1);
      /** @type {number} */
      Ai[0] = 0;
      /** @type {number} */
      j = 0;
      for (; j < n; ++j) {
        Ai[j + 1] = Ai[j] + counts[j];
      }
      /** @type {!Array} */
      var vertices = Array(Ai[n]);
      /** @type {!Array} */
      var args = Array(Ai[n]);
      /** @type {number} */
      j = x - 1;
      for (; -1 !== j; --j) {
        for (i in v = a[j]) {
          if (0 !== v[i]) {
            counts[i]--;
            /** @type {number} */
            vertices[Ai[i] + counts[i]] = j;
            args[Ai[i] + counts[i]] = v[i];
          }
        }
      }
      return [Ai, vertices, args];
    };
    /**
     * @param {!Array} b
     * @return {?}
     */
    numeric$jscomp$0.ccsFull = function(b) {
      var j;
      var i;
      var m;
      var bs;
      var o = b[0];
      var d = b[1];
      var minSamples = b[2];
      var cache = numeric$jscomp$0.ccsDim(b);
      var odatahash = cache[0];
      var numParameters = cache[1];
      var flipped = numeric$jscomp$0.rep([odatahash, numParameters], 0);
      /** @type {number} */
      j = 0;
      for (; j < numParameters; j++) {
        m = o[j];
        bs = o[j + 1];
        i = m;
        for (; i < bs; ++i) {
          flipped[d[i]][j] = minSamples[i];
        }
      }
      return flipped;
    };
    /**
     * @param {!Array} src
     * @param {!Array} response
     * @param {!Array} data
     * @param {!Array} list
     * @param {!Array} a
     * @return {?}
     */
    numeric$jscomp$0.ccsTSolve = function(src, response, data, list, a) {
      /**
       * @param {number} c
       * @return {undefined}
       */
      function func(c) {
        var i;
        if (0 === data[c]) {
          /** @type {number} */
          data[c] = 1;
          i = f[c];
          for (; i < f[c + 1]; ++i) {
            func(pts[i]);
          }
          /** @type {number} */
          a[r] = c;
          ++r;
        }
      }
      var j;
      var k;
      var c;
      var e;
      var i;
      var p;
      var t;
      var f = src[0];
      var pts = src[1];
      var v = src[2];
      /** @type {number} */
      var max = f.length - 1;
      /** @type {function(...?): number} */
      var m = Math.max;
      /** @type {number} */
      var r = 0;
      if (void 0 === list) {
        data = numeric$jscomp$0.rep([max], 0);
      }
      if (void 0 === list) {
        list = numeric$jscomp$0.linspace(0, data.length - 1);
      }
      if (void 0 === a) {
        /** @type {!Array} */
        a = [];
      }
      /** @type {number} */
      j = list.length - 1;
      for (; -1 !== j; --j) {
        func(list[j]);
      }
      a.length = r;
      /** @type {number} */
      j = a.length - 1;
      for (; -1 !== j; --j) {
        /** @type {number} */
        data[a[j]] = 0;
      }
      /** @type {number} */
      j = list.length - 1;
      for (; -1 !== j; --j) {
        k = list[j];
        data[k] = response[k];
      }
      /** @type {number} */
      j = a.length - 1;
      for (; -1 !== j; --j) {
        k = a[j];
        c = f[k];
        /** @type {number} */
        e = m(f[k + 1], c);
        i = c;
        for (; i !== e; ++i) {
          if (pts[i] === k) {
            data[k] /= v[i];
            break;
          }
        }
        t = data[k];
        i = c;
        for (; i !== e; ++i) {
          if ((p = pts[i]) !== k) {
            data[p] -= t * v[i];
          }
        }
      }
      return data;
    };
    /**
     * @param {?} lines
     * @return {undefined}
     */
    numeric$jscomp$0.ccsDFS = function(lines) {
      /** @type {!Array} */
      this.k = Array(lines);
      /** @type {!Array} */
      this.k1 = Array(lines);
      /** @type {!Array} */
      this.j = Array(lines);
    };
    /**
     * @param {number} j
     * @param {!Array} path
     * @param {!Array} x
     * @param {!Array} s
     * @param {!Object} arr
     * @param {!Array} map
     * @return {undefined}
     */
    numeric$jscomp$0.ccsDFS.prototype.dfs = function(j, path, x, s, arr, map) {
      var i;
      var id;
      var key;
      /** @type {number} */
      var index = 0;
      var x = arr.length;
      var data = this.k;
      var node = this.k1;
      var obj = this.j;
      if (0 === s[j]) {
        /** @type {number} */
        s[j] = 1;
        /** @type {number} */
        obj[0] = j;
        data[0] = id = path[j];
        node[0] = key = path[j + 1];
        for (;;) {
          if (id >= key) {
            if (arr[x] = obj[index], 0 === index) {
              return;
            }
            ++x;
            id = data[--index];
            key = node[index];
          } else {
            if (0 === s[i = map[x[id]]]) {
              /** @type {number} */
              s[i] = 1;
              data[index] = id;
              obj[++index] = i;
              id = path[i];
              node[index] = key = path[i + 1];
            } else {
              ++id;
            }
          }
        }
      }
    };
    /**
     * @param {!Array} data
     * @param {!Array} p
     * @param {!Array} c
     * @param {!Object} a
     * @param {number} index
     * @param {!Array} obj
     * @param {?} self
     * @return {?}
     */
    numeric$jscomp$0.ccsLPSolve = function(data, p, c, a, index, obj, self) {
      var i;
      var stx;
      var nTracks;
      var j;
      var subValue;
      var result;
      var key;
      var o;
      var l;
      var value = data[0];
      var x = data[1];
      var sizes = data[2];
      var input_8_bit_int_buffer = (value.length, p[0]);
      var prev = p[1];
      var d = p[2];
      stx = input_8_bit_int_buffer[index];
      nTracks = input_8_bit_int_buffer[index + 1];
      /** @type {number} */
      a.length = 0;
      i = stx;
      for (; i < nTracks; ++i) {
        self.dfs(obj[prev[i]], value, x, c, a, obj);
      }
      /** @type {number} */
      i = a.length - 1;
      for (; -1 !== i; --i) {
        /** @type {number} */
        c[a[i]] = 0;
      }
      i = stx;
      for (; i !== nTracks; ++i) {
        c[j = obj[prev[i]]] = d[i];
      }
      /** @type {number} */
      i = a.length - 1;
      for (; -1 !== i; --i) {
        subValue = value[j = a[i]];
        result = value[j + 1];
        key = subValue;
        for (; key < result; ++key) {
          if (obj[x[key]] === j) {
            c[j] /= sizes[key];
            break;
          }
        }
        l = c[j];
        key = subValue;
        for (; key < result; ++key) {
          if ((o = obj[x[key]]) !== j) {
            c[o] -= l * sizes[key];
          }
        }
      }
      return c;
    };
    /**
     * @param {!Array} fp
     * @param {number} s
     * @return {?}
     */
    numeric$jscomp$0.ccsLUP1 = function(fp, s) {
      var k;
      var key;
      var x;
      var i;
      var n;
      var r;
      var d;
      /** @type {number} */
      var m = fp[0].length - 1;
      /** @type {!Array} */
      var arr = [numeric$jscomp$0.rep([m + 1], 0), [], []];
      /** @type {!Array} */
      var self = [numeric$jscomp$0.rep([m + 1], 0), [], []];
      var item = arr[0];
      var obj = arr[1];
      var result = arr[2];
      var v = self[0];
      var temp = self[1];
      var t = self[2];
      var b = numeric$jscomp$0.rep([m], 0);
      var dest = numeric$jscomp$0.rep([m], 0);
      /** @type {function(!Array, !Array, !Array, !Object, number, !Array, ?): ?} */
      var debug = numeric$jscomp$0.ccsLPSolve;
      /** @type {function(?): number} */
      var parseFloat = (Math.max, Math.abs);
      var array = numeric$jscomp$0.linspace(0, m - 1);
      var o = numeric$jscomp$0.linspace(0, m - 1);
      var index = new numeric$jscomp$0.ccsDFS(m);
      if (void 0 === s) {
        /** @type {number} */
        s = 1;
      }
      /** @type {number} */
      k = 0;
      for (; k < m; ++k) {
        debug(arr, fp, b, dest, k, o, index);
        /** @type {number} */
        i = -1;
        /** @type {number} */
        n = -1;
        /** @type {number} */
        key = dest.length - 1;
        for (; -1 !== key; --key) {
          if (!((x = dest[key]) <= k)) {
            if ((r = parseFloat(b[x])) > i) {
              n = x;
              /** @type {number} */
              i = r;
            }
          }
        }
        if (parseFloat(b[k]) < s * i) {
          key = array[k];
          i = array[n];
          array[k] = i;
          /** @type {number} */
          o[i] = k;
          array[n] = key;
          o[key] = n;
          i = b[k];
          b[k] = b[n];
          b[n] = i;
        }
        i = item[k];
        n = v[k];
        d = b[k];
        obj[i] = array[k];
        /** @type {number} */
        result[i] = 1;
        ++i;
        /** @type {number} */
        key = dest.length - 1;
        for (; -1 !== key; --key) {
          r = b[x = dest[key]];
          /** @type {number} */
          dest[key] = 0;
          /** @type {number} */
          b[x] = 0;
          if (x <= k) {
            temp[n] = x;
            t[n] = r;
            ++n;
          } else {
            obj[i] = array[x];
            /** @type {number} */
            result[i] = r / d;
            ++i;
          }
        }
        item[k + 1] = i;
        v[k + 1] = n;
      }
      /** @type {number} */
      key = obj.length - 1;
      for (; -1 !== key; --key) {
        obj[key] = o[obj[key]];
      }
      return {
        L : arr,
        U : self,
        P : array,
        Pinv : o
      };
    };
    /**
     * @param {?} lines
     * @return {undefined}
     */
    numeric$jscomp$0.ccsDFS0 = function(lines) {
      /** @type {!Array} */
      this.k = Array(lines);
      /** @type {!Array} */
      this.k1 = Array(lines);
      /** @type {!Array} */
      this.j = Array(lines);
    };
    /**
     * @param {undefined} index
     * @param {?} map
     * @param {!Array} path
     * @param {!Array} str
     * @param {!Object} arr
     * @param {!Array} val
     * @param {?} depth
     * @return {undefined}
     */
    numeric$jscomp$0.ccsDFS0.prototype.dfs = function(index, map, path, str, arr, val, depth) {
      var s;
      var key;
      var childInd;
      /** @type {number} */
      var k = 0;
      var i = arr.length;
      var keys = this.k;
      var ind = this.k1;
      var out = this.j;
      if (0 === str[index]) {
        /** @type {number} */
        str[index] = 1;
        out[0] = index;
        keys[0] = key = map[val[index]];
        ind[0] = childInd = map[val[index] + 1];
        for (;;) {
          if (isNaN(key)) {
            throw new Error("Ow!");
          }
          if (key >= childInd) {
            if (arr[i] = val[out[k]], 0 === k) {
              return;
            }
            ++i;
            key = keys[--k];
            childInd = ind[k];
          } else {
            if (0 === str[s = path[key]]) {
              /** @type {number} */
              str[s] = 1;
              keys[k] = key;
              out[++k] = s;
              key = map[s = val[s]];
              ind[k] = childInd = map[s + 1];
            } else {
              ++key;
            }
          }
        }
      }
    };
    /**
     * @param {!Array} data
     * @param {!Array} t
     * @param {!Array} n
     * @param {!Object} params
     * @param {number} index
     * @param {!Array} name
     * @param {?} arr
     * @param {?} exports
     * @return {undefined}
     */
    numeric$jscomp$0.ccsLPSolve0 = function(data, t, n, params, index, name, arr, exports) {
      var i;
      var B;
      var len;
      var p;
      var o;
      var f;
      var k;
      var j;
      var x;
      var obj = data[0];
      var val = data[1];
      var y = data[2];
      var buf = (obj.length, t[0]);
      var s = t[1];
      var d = t[2];
      B = buf[index];
      len = buf[index + 1];
      /** @type {number} */
      params.length = 0;
      i = B;
      for (; i < len; ++i) {
        exports.dfs(s[i], obj, val, n, params, name, arr);
      }
      /** @type {number} */
      i = params.length - 1;
      for (; -1 !== i; --i) {
        /** @type {number} */
        n[arr[p = params[i]]] = 0;
      }
      i = B;
      for (; i !== len; ++i) {
        n[p = s[i]] = d[i];
      }
      /** @type {number} */
      i = params.length - 1;
      for (; -1 !== i; --i) {
        j = arr[p = params[i]];
        o = obj[p];
        f = obj[p + 1];
        k = o;
        for (; k < f; ++k) {
          if (val[k] === j) {
            n[j] /= y[k];
            break;
          }
        }
        x = n[j];
        k = o;
        for (; k < f; ++k) {
          n[val[k]] -= x * y[k];
        }
        n[j] = x;
      }
    };
    /**
     * @param {!Array} result
     * @param {number} j
     * @return {?}
     */
    numeric$jscomp$0.ccsLUP0 = function(result, j) {
      var i;
      var key;
      var k;
      var p;
      var name;
      var n;
      var l;
      /** @type {number} */
      var zmax = result[0].length - 1;
      /** @type {!Array} */
      var x = [numeric$jscomp$0.rep([zmax + 1], 0), [], []];
      /** @type {!Array} */
      var uid = [numeric$jscomp$0.rep([zmax + 1], 0), [], []];
      var s = x[0];
      var b = x[1];
      var v = x[2];
      var collectionParameters = uid[0];
      var updated = uid[1];
      var annotationStarts = uid[2];
      var c = numeric$jscomp$0.rep([zmax], 0);
      var all = numeric$jscomp$0.rep([zmax], 0);
      /** @type {function(!Array, !Array, !Array, !Object, number, !Array, ?, ?): undefined} */
      var callback = numeric$jscomp$0.ccsLPSolve0;
      /** @type {function(?): number} */
      var abs = (Math.max, Math.abs);
      var data = numeric$jscomp$0.linspace(0, zmax - 1);
      var a = numeric$jscomp$0.linspace(0, zmax - 1);
      var TAG = new numeric$jscomp$0.ccsDFS0(zmax);
      if (void 0 === j) {
        /** @type {number} */
        j = 1;
      }
      /** @type {number} */
      i = 0;
      for (; i < zmax; ++i) {
        callback(x, result, c, all, i, a, data, TAG);
        /** @type {number} */
        p = -1;
        /** @type {number} */
        name = -1;
        /** @type {number} */
        key = all.length - 1;
        for (; -1 !== key; --key) {
          if (!((k = all[key]) <= i)) {
            if ((n = abs(c[data[k]])) > p) {
              name = k;
              /** @type {number} */
              p = n;
            }
          }
        }
        if (abs(c[data[i]]) < j * p) {
          key = data[i];
          p = data[name];
          data[i] = p;
          /** @type {number} */
          a[p] = i;
          data[name] = key;
          a[key] = name;
        }
        p = s[i];
        name = collectionParameters[i];
        l = c[data[i]];
        b[p] = data[i];
        /** @type {number} */
        v[p] = 1;
        ++p;
        /** @type {number} */
        key = all.length - 1;
        for (; -1 !== key; --key) {
          n = c[data[k = all[key]]];
          /** @type {number} */
          all[key] = 0;
          /** @type {number} */
          c[data[k]] = 0;
          if (k <= i) {
            updated[name] = k;
            annotationStarts[name] = n;
            ++name;
          } else {
            b[p] = data[k];
            /** @type {number} */
            v[p] = n / l;
            ++p;
          }
        }
        s[i + 1] = p;
        collectionParameters[i + 1] = name;
      }
      /** @type {number} */
      key = b.length - 1;
      for (; -1 !== key; --key) {
        b[key] = a[b[key]];
      }
      return {
        L : x,
        U : uid,
        P : data,
        Pinv : a
      };
    };
    /** @type {function(!Array, number): ?} */
    numeric$jscomp$0.ccsLUP = numeric$jscomp$0.ccsLUP0;
    /**
     * @param {!Array} o
     * @return {?}
     */
    numeric$jscomp$0.ccsDim = function(o) {
      return [numeric$jscomp$0.sup(o[1]) + 1, o[0].length - 1];
    };
    /**
     * @param {!Array} b
     * @param {!Array} el
     * @param {!Array} n
     * @return {?}
     */
    numeric$jscomp$0.ccsGetBlock = function(b, el, n) {
      var cache = numeric$jscomp$0.ccsDim(b);
      var odatahash = cache[0];
      var oformathash = cache[1];
      if (void 0 === el) {
        el = numeric$jscomp$0.linspace(0, odatahash - 1);
      } else {
        if ("number" == typeof el) {
          /** @type {!Array} */
          el = [el];
        }
      }
      if (void 0 === n) {
        n = numeric$jscomp$0.linspace(0, oformathash - 1);
      } else {
        if ("number" == typeof n) {
          /** @type {!Array} */
          n = [n];
        }
      }
      var j;
      var a;
      var k;
      var _moduleName;
      var cl = el.length;
      var length = n.length;
      var types = numeric$jscomp$0.rep([oformathash], 0);
      /** @type {!Array} */
      var attrPos = [];
      /** @type {!Array} */
      var q = [];
      /** @type {!Array} */
      var disallowedKeys = [types, attrPos, q];
      var _modulesLookup = b[0];
      var c = b[1];
      var y = b[2];
      var obj = numeric$jscomp$0.rep([odatahash], 0);
      /** @type {number} */
      var name = 0;
      var data = numeric$jscomp$0.rep([odatahash], 0);
      /** @type {number} */
      a = 0;
      for (; a < length; ++a) {
        var coreTagKeyCount = _modulesLookup[_moduleName = n[a]];
        var rown = _modulesLookup[_moduleName + 1];
        j = coreTagKeyCount;
        for (; j < rown; ++j) {
          /** @type {number} */
          data[k = c[j]] = 1;
          obj[k] = y[j];
        }
        /** @type {number} */
        j = 0;
        for (; j < cl; ++j) {
          if (data[el[j]]) {
            /** @type {number} */
            attrPos[name] = j;
            q[name] = obj[el[j]];
            ++name;
          }
        }
        j = coreTagKeyCount;
        for (; j < rown; ++j) {
          /** @type {number} */
          data[k = c[j]] = 0;
        }
        /** @type {number} */
        types[a + 1] = name;
      }
      return disallowedKeys;
    };
    /**
     * @param {!Array} a
     * @param {!Array} b
     * @return {?}
     */
    numeric$jscomp$0.ccsDot = function(a, b) {
      var p;
      var j;
      var r;
      var current;
      var ref;
      var error;
      var pages;
      var n;
      var width;
      var index;
      var i;
      var args = a[0];
      var x = a[1];
      var v = a[2];
      var data = b[0];
      var result = b[1];
      var c = b[2];
      var arr = numeric$jscomp$0.ccsDim(a);
      var originalB = numeric$jscomp$0.ccsDim(b);
      var domain = arr[0];
      var paths = (arr[1], originalB[1]);
      var props = numeric$jscomp$0.rep([domain], 0);
      var t = numeric$jscomp$0.rep([domain], 0);
      /** @type {!Array} */
      var value = Array(domain);
      var circle = numeric$jscomp$0.rep([paths], 0);
      /** @type {!Array} */
      var frame = [];
      /** @type {!Array} */
      var object = [];
      /** @type {!Array} */
      var frameTags = [circle, frame, object];
      /** @type {number} */
      r = 0;
      for (; r !== paths; ++r) {
        current = data[r];
        ref = data[r + 1];
        /** @type {number} */
        width = 0;
        j = current;
        for (; j < ref; ++j) {
          index = result[j];
          i = c[j];
          error = args[index];
          pages = args[index + 1];
          p = error;
          for (; p < pages; ++p) {
            if (0 === t[n = x[p]]) {
              value[width] = n;
              /** @type {number} */
              t[n] = 1;
              /** @type {number} */
              width = width + 1;
            }
            props[n] = props[n] + v[p] * i;
          }
        }
        ref = (current = circle[r]) + width;
        circle[r + 1] = ref;
        /** @type {number} */
        j = width - 1;
        for (; -1 !== j; --j) {
          i = current + j;
          p = value[j];
          frame[i] = p;
          object[i] = props[p];
          /** @type {number} */
          t[p] = 0;
          /** @type {number} */
          props[p] = 0;
        }
        circle[r + 1] = circle[r] + width;
      }
      return frameTags;
    };
    /**
     * @param {?} node
     * @param {!Array} command
     * @return {?}
     */
    numeric$jscomp$0.ccsLUPSolve = function(node, command) {
      var q = node.L;
      var parent = node.U;
      var value = (node.P, command[0]);
      /** @type {boolean} */
      var undefined = false;
      if ("object" !== (void 0 === value ? "undefined" : _typeof$jscomp$0(value))) {
        value = (command = [[0, command.length], numeric$jscomp$0.linspace(0, command.length - 1), command])[0];
        /** @type {boolean} */
        undefined = true;
      }
      var j;
      var i;
      var v;
      var span;
      var key;
      var index;
      var keys = command[1];
      var values = command[2];
      /** @type {number} */
      var length = q[0].length - 1;
      /** @type {number} */
      var rown = value.length - 1;
      var data = numeric$jscomp$0.rep([length], 0);
      /** @type {!Array} */
      var e = Array(length);
      var res = numeric$jscomp$0.rep([length], 0);
      /** @type {!Array} */
      var args = Array(length);
      var counterHandlers = numeric$jscomp$0.rep([rown + 1], 0);
      /** @type {!Array} */
      var validatorsByName = [];
      /** @type {!Array} */
      var memo = [];
      /** @type {function(!Array, !Array, !Array, !Array, !Array): ?} */
      var callback = numeric$jscomp$0.ccsTSolve;
      /** @type {number} */
      var name = 0;
      /** @type {number} */
      j = 0;
      for (; j < rown; ++j) {
        /** @type {number} */
        key = 0;
        v = value[j];
        span = value[j + 1];
        i = v;
        for (; i < span; ++i) {
          index = node.Pinv[keys[i]];
          args[key] = index;
          res[index] = values[i];
          ++key;
        }
        /** @type {number} */
        args.length = key;
        callback(q, res, data, args, e);
        /** @type {number} */
        i = args.length - 1;
        for (; -1 !== i; --i) {
          /** @type {number} */
          res[args[i]] = 0;
        }
        if (callback(parent, data, res, e, args), undefined) {
          return res;
        }
        /** @type {number} */
        i = e.length - 1;
        for (; -1 !== i; --i) {
          /** @type {number} */
          data[e[i]] = 0;
        }
        /** @type {number} */
        i = args.length - 1;
        for (; -1 !== i; --i) {
          index = args[i];
          validatorsByName[name] = index;
          memo[name] = res[index];
          /** @type {number} */
          res[index] = 0;
          ++name;
        }
        /** @type {number} */
        counterHandlers[j + 1] = name;
      }
      return [counterHandlers, validatorsByName, memo];
    };
    /**
     * @param {string} textPromise
     * @param {number} text
     * @return {?}
     */
    numeric$jscomp$0.ccsbinop = function(textPromise, text) {
      return void 0 === text && (text = ""), Function("X", "Y", "var Xi = X[0], Xj = X[1], Xv = X[2];\nvar Yi = Y[0], Yj = Y[1], Yv = Y[2];\nvar n = Xi.length-1,m = Math.max(numeric.sup(Xj),numeric.sup(Yj))+1;\nvar Zi = numeric.rep([n+1],0), Zj = [], Zv = [];\nvar x = numeric.rep([m],0),y = numeric.rep([m],0);\nvar xk,yk,zk;\nvar i,j,j0,j1,k,p=0;\n" + text + "for(i=0;i<n;++i) {\n  j0 = Xi[i]; j1 = Xi[i+1];\n  for(j=j0;j!==j1;++j) {\n    k = Xj[j];\n    x[k] = 1;\n    Zj[p] = k;\n    ++p;\n  }\n  j0 = Yi[i]; j1 = Yi[i+1];\n  for(j=j0;j!==j1;++j) {\n    k = Yj[j];\n    y[k] = Yv[j];\n    if(x[k] === 0) {\n      Zj[p] = k;\n      ++p;\n    }\n  }\n  Zi[i+1] = p;\n  j0 = Xi[i]; j1 = Xi[i+1];\n  for(j=j0;j!==j1;++j) x[Xj[j]] = Xv[j];\n  j0 = Zi[i]; j1 = Zi[i+1];\n  for(j=j0;j!==j1;++j) {\n    k = Zj[j];\n    xk = x[k];\n    yk = y[k];\n" + 
      textPromise + "\n    Zv[j] = zk;\n  }\n  j0 = Xi[i]; j1 = Xi[i+1];\n  for(j=j0;j!==j1;++j) x[Xj[j]] = 0;\n  j0 = Yi[i]; j1 = Yi[i+1];\n  for(j=j0;j!==j1;++j) y[Yj[j]] = 0;\n}\nreturn [Zi,Zj,Zv];");
    };
    (function() {
      var k$jscomp$5;
      var A$jscomp$8;
      var B$jscomp$3;
      var C$jscomp$8;
      for (k$jscomp$5 in numeric$jscomp$0.ops2) {
        /** @type {string} */
        A$jscomp$8 = isFinite(eval("1" + numeric$jscomp$0.ops2[k$jscomp$5] + "0")) ? "[Y[0],Y[1],numeric." + k$jscomp$5 + "(X,Y[2])]" : "NaN";
        /** @type {string} */
        B$jscomp$3 = isFinite(eval("0" + numeric$jscomp$0.ops2[k$jscomp$5] + "1")) ? "[X[0],X[1],numeric." + k$jscomp$5 + "(X[2],Y)]" : "NaN";
        /** @type {string} */
        C$jscomp$8 = isFinite(eval("1" + numeric$jscomp$0.ops2[k$jscomp$5] + "0")) && isFinite(eval("0" + numeric$jscomp$0.ops2[k$jscomp$5] + "1")) ? "numeric.ccs" + k$jscomp$5 + "MM(X,Y)" : "NaN";
        numeric$jscomp$0["ccs" + k$jscomp$5 + "MM"] = numeric$jscomp$0.ccsbinop("zk = xk " + numeric$jscomp$0.ops2[k$jscomp$5] + "yk;");
        numeric$jscomp$0["ccs" + k$jscomp$5] = Function("X", "Y", 'if(typeof X === "number") return ' + A$jscomp$8 + ';\nif(typeof Y === "number") return ' + B$jscomp$3 + ";\nreturn " + C$jscomp$8 + ";\n");
      }
    })();
    /**
     * @param {!Array} data
     * @return {?}
     */
    numeric$jscomp$0.ccsScatter = function(data) {
      var i;
      var group = data[0];
      var a = data[1];
      var tokens = data[2];
      var cell_amount = numeric$jscomp$0.sup(a) + 1;
      var length = group.length;
      var strings = numeric$jscomp$0.rep([cell_amount], 0);
      /** @type {!Array} */
      var args = Array(length);
      /** @type {!Array} */
      var result = Array(length);
      var values = numeric$jscomp$0.rep([cell_amount], 0);
      /** @type {number} */
      i = 0;
      for (; i < length; ++i) {
        values[a[i]]++;
      }
      /** @type {number} */
      i = 0;
      for (; i < cell_amount; ++i) {
        strings[i + 1] = strings[i] + values[i];
      }
      var last;
      var e;
      var liveEventCtxStorage = strings.slice(0);
      /** @type {number} */
      i = 0;
      for (; i < length; ++i) {
        args[last = liveEventCtxStorage[e = a[i]]] = group[i];
        result[last] = tokens[i];
        liveEventCtxStorage[e] = liveEventCtxStorage[e] + 1;
      }
      return [strings, args, result];
    };
    /**
     * @param {!Array} zombie_tree_list
     * @return {?}
     */
    numeric$jscomp$0.ccsGather = function(zombie_tree_list) {
      var value;
      var name;
      var val;
      var thorin_sanitize;
      var i;
      var primitives = zombie_tree_list[0];
      var tree = zombie_tree_list[1];
      var status = zombie_tree_list[2];
      /** @type {number} */
      var minboxVal = primitives.length - 1;
      var _len = tree.length;
      /** @type {!Array} */
      var data = Array(_len);
      /** @type {!Array} */
      var kvs = Array(_len);
      /** @type {!Array} */
      var values = Array(_len);
      /** @type {number} */
      i = 0;
      /** @type {number} */
      value = 0;
      for (; value < minboxVal; ++value) {
        val = primitives[value];
        thorin_sanitize = primitives[value + 1];
        name = val;
        for (; name !== thorin_sanitize; ++name) {
          /** @type {number} */
          kvs[i] = value;
          data[i] = tree[name];
          values[i] = status[name];
          ++i;
        }
      }
      return [data, kvs, values];
    };
    /**
     * @param {?} value
     * @param {!Array} options
     * @param {number} name
     * @return {?}
     */
    numeric$jscomp$0.sdim = function is(value, options, name) {
      if (void 0 === options && (options = []), "object" !== (void 0 === value ? "undefined" : _typeof$jscomp$0(value))) {
        return options;
      }
      var i;
      for (i in void 0 === name && (name = 0), name in options || (options[name] = 0), value.length > options[name] && (options[name] = value.length), value) {
        if (value.hasOwnProperty(i)) {
          is(value[i], options, name + 1);
        }
      }
      return options;
    };
    /**
     * @param {!Array} b
     * @param {number} r
     * @param {number} g
     * @return {?}
     */
    numeric$jscomp$0.sclone = function merge(b, r, g) {
      if (void 0 === r) {
        /** @type {number} */
        r = 0;
      }
      if (void 0 === g) {
        g = numeric$jscomp$0.sdim(b).length;
      }
      var key;
      /** @type {!Array} */
      var a = Array(b.length);
      if (r === g - 1) {
        for (key in b) {
          if (b.hasOwnProperty(key)) {
            a[key] = b[key];
          }
        }
        return a;
      }
      for (key in b) {
        if (b.hasOwnProperty(key)) {
          a[key] = merge(b[key], r + 1, g);
        }
      }
      return a;
    };
    /**
     * @param {!Array} l
     * @return {?}
     */
    numeric$jscomp$0.sdiag = function(l) {
      var n;
      var j;
      var i = l.length;
      /** @type {!Array} */
      var names = Array(i);
      /** @type {number} */
      n = i - 1;
      for (; n >= 1; n = n - 2) {
        /** @type {number} */
        j = n - 1;
        /** @type {!Array} */
        names[n] = [];
        names[n][n] = l[n];
        /** @type {!Array} */
        names[j] = [];
        names[j][j] = l[j];
      }
      return 0 === n && (names[0] = [], names[0][0] = l[n]), names;
    };
    /**
     * @param {?} canCreateDiscussions
     * @return {?}
     */
    numeric$jscomp$0.sidentity = function(canCreateDiscussions) {
      return numeric$jscomp$0.sdiag(numeric$jscomp$0.rep([canCreateDiscussions], 1));
    };
    /**
     * @param {!Array} x
     * @return {?}
     */
    numeric$jscomp$0.stranspose = function(x) {
      var p;
      var i;
      var v;
      /** @type {!Array} */
      var data = [];
      x.length;
      for (p in x) {
        if (x.hasOwnProperty(p)) {
          for (i in v = x[p]) {
            if (v.hasOwnProperty(i)) {
              if ("object" !== _typeof$jscomp$0(data[i])) {
                /** @type {!Array} */
                data[i] = [];
              }
              data[i][p] = v[i];
            }
          }
        }
      }
      return data;
    };
    /**
     * @param {?} formatters
     * @param {?} customFormatters
     * @return {?}
     */
    numeric$jscomp$0.sLUP = function(formatters, customFormatters) {
      throw new Error("The function numeric.sLUP had a bug in it and has been removed. Please use the new numeric.ccsLUP function instead.");
    };
    /**
     * @param {!Object} obj
     * @param {?} a
     * @return {?}
     */
    numeric$jscomp$0.sdotMM = function(obj, a) {
      var config;
      var script;
      var key;
      var attrib;
      var i;
      var lo;
      var u;
      var _len8 = obj.length;
      var coffees = (a.length, numeric$jscomp$0.stranspose(a));
      var loc4 = coffees.length;
      /** @type {!Array} */
      var storeNames = Array(_len8);
      /** @type {number} */
      key = _len8 - 1;
      for (; key >= 0; key--) {
        /** @type {!Array} */
        u = [];
        config = obj[key];
        /** @type {number} */
        i = loc4 - 1;
        for (; i >= 0; i--) {
          for (attrib in lo = 0, script = coffees[i], config) {
            if (config.hasOwnProperty(attrib) && attrib in script) {
              /** @type {number} */
              lo = lo + config[attrib] * script[attrib];
            }
          }
          if (lo) {
            /** @type {number} */
            u[i] = lo;
          }
        }
        /** @type {!Array} */
        storeNames[key] = u;
      }
      return storeNames;
    };
    /**
     * @param {!Object} imageData
     * @param {?} a
     * @return {?}
     */
    numeric$jscomp$0.sdotMV = function(imageData, a) {
      var b;
      var i;
      var n;
      var e;
      var length = imageData.length;
      /** @type {!Array} */
      var result = Array(length);
      /** @type {number} */
      i = length - 1;
      for (; i >= 0; i--) {
        for (n in e = 0, b = imageData[i]) {
          if (b.hasOwnProperty(n) && a[n]) {
            /** @type {number} */
            e = e + b[n] * a[n];
          }
        }
        if (e) {
          /** @type {number} */
          result[i] = e;
        }
      }
      return result;
    };
    /**
     * @param {!Object} c
     * @param {?} a
     * @return {?}
     */
    numeric$jscomp$0.sdotVM = function(c, a) {
      var j;
      var i;
      var ref;
      var x;
      /** @type {!Array} */
      var a = [];
      for (j in c) {
        if (c.hasOwnProperty(j)) {
          for (i in ref = a[j], x = c[j], ref) {
            if (ref.hasOwnProperty(i)) {
              if (!a[i]) {
                /** @type {number} */
                a[i] = 0;
              }
              a[i] += x * ref[i];
            }
          }
        }
      }
      return a;
    };
    /**
     * @param {!Object} a
     * @param {?} b
     * @return {?}
     */
    numeric$jscomp$0.sdotVV = function(a, b) {
      var i;
      /** @type {number} */
      var apos = 0;
      for (i in a) {
        if (a[i] && b[i]) {
          /** @type {number} */
          apos = apos + a[i] * b[i];
        }
      }
      return apos;
    };
    /**
     * @param {undefined} a
     * @param {number} b
     * @return {?}
     */
    numeric$jscomp$0.sdot = function(a, b) {
      var column = numeric$jscomp$0.sdim(a).length;
      var x = numeric$jscomp$0.sdim(b).length;
      switch(1E3 * column + x) {
        case 0:
          return a * b;
        case 1001:
          return numeric$jscomp$0.sdotVV(a, b);
        case 2001:
          return numeric$jscomp$0.sdotMV(a, b);
        case 1002:
          return numeric$jscomp$0.sdotVM(a, b);
        case 2002:
          return numeric$jscomp$0.sdotMM(a, b);
        default:
          throw new Error("numeric.sdot not implemented for tensors of order " + column + " and " + x);
      }
    };
    /**
     * @param {!Object} data
     * @return {?}
     */
    numeric$jscomp$0.sscatter = function(data) {
      var index;
      var name;
      var i;
      var result;
      var readersLength = data[0].length;
      var n = data.length;
      /** @type {!Array} */
      var BIGGER_EQUAL = [];
      /** @type {number} */
      name = readersLength - 1;
      for (; name >= 0; --name) {
        if (data[n - 1][name]) {
          /** @type {!Array} */
          result = BIGGER_EQUAL;
          /** @type {number} */
          i = 0;
          for (; i < n - 2; i++) {
            if (!result[index = data[i][name]]) {
              /** @type {!Array} */
              result[index] = [];
            }
            result = result[index];
          }
          result[data[i][name]] = data[i + 1][name];
        }
      }
      return BIGGER_EQUAL;
    };
    /**
     * @param {!Object} a
     * @param {!Array} b
     * @param {!Array} list
     * @return {?}
     */
    numeric$jscomp$0.sgather = function walk(a, b, list) {
      var i;
      var n;
      var t;
      for (n in void 0 === b && (b = []), void 0 === list && (list = []), i = list.length, a) {
        if (a.hasOwnProperty(n)) {
          if (list[i] = parseInt(n), "number" == typeof(t = a[n])) {
            if (t) {
              if (0 === b.length) {
                n = i + 1;
                for (; n >= 0; --n) {
                  /** @type {!Array} */
                  b[n] = [];
                }
              }
              n = i;
              for (; n >= 0; --n) {
                b[n].push(list[n]);
              }
              b[i + 1].push(t);
            }
          } else {
            walk(t, b, list);
          }
        }
      }
      return list.length > i && list.pop(), b;
    };
    /**
     * @param {!Array} res
     * @return {?}
     */
    numeric$jscomp$0.cLU = function(res) {
      var i;
      var n;
      var j;
      var s;
      var x;
      var y;
      var ref = res[0];
      var b = res[1];
      var fileId = res[2];
      var k = ref.length;
      /** @type {number} */
      var end = 0;
      /** @type {number} */
      i = 0;
      for (; i < k; i++) {
        if (ref[i] > end) {
          end = ref[i];
        }
      }
      end++;
      var f;
      /** @type {!Array} */
      var p = Array(end);
      /** @type {!Array} */
      var data = Array(end);
      var a = numeric$jscomp$0.rep([end], 1 / 0);
      var arr = numeric$jscomp$0.rep([end], -1 / 0);
      /** @type {number} */
      j = 0;
      for (; j < k; j++) {
        i = ref[j];
        if ((n = b[j]) < a[i]) {
          a[i] = n;
        }
        if (n > arr[i]) {
          arr[i] = n;
        }
      }
      /** @type {number} */
      i = 0;
      for (; i < end - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          arr[i + 1] = arr[i];
        }
      }
      /** @type {number} */
      i = end - 1;
      for (; i >= 1; i--) {
        if (a[i] < a[i - 1]) {
          a[i - 1] = a[i];
        }
      }
      /** @type {number} */
      i = 0;
      for (; i < end; i++) {
        data[i] = numeric$jscomp$0.rep([arr[i] - a[i] + 1], 0);
        p[i] = numeric$jscomp$0.rep([i - a[i]], 0);
        i - a[i] + 1;
        arr[i] - i + 1;
      }
      /** @type {number} */
      j = 0;
      for (; j < k; j++) {
        data[i = ref[j]][b[j] - a[i]] = fileId[j];
      }
      /** @type {number} */
      i = 0;
      for (; i < end - 1; i++) {
        /** @type {number} */
        s = i - a[i];
        o = data[i];
        /** @type {number} */
        n = i + 1;
        for (; a[n] <= i && n < end; n++) {
          if (x = i - a[n], y = arr[i] - i, f = (values = data[n])[x] / o[s]) {
            /** @type {number} */
            j = 1;
            for (; j <= y; j++) {
              values[j + x] -= f * o[j + s];
            }
            /** @type {number} */
            p[n][i - a[n]] = f;
          }
        }
      }
      var key;
      var d;
      /** @type {!Array} */
      var o = [];
      /** @type {!Array} */
      var values = [];
      /** @type {!Array} */
      var Ai = [];
      /** @type {!Array} */
      var docIdOrder = [];
      /** @type {!Array} */
      var exports = [];
      /** @type {!Array} */
      var parameters = [];
      /** @type {number} */
      k = 0;
      /** @type {number} */
      key = 0;
      /** @type {number} */
      i = 0;
      for (; i < end; i++) {
        s = a[i];
        x = arr[i];
        d = data[i];
        /** @type {number} */
        n = i;
        for (; n <= x; n++) {
          if (d[n - s]) {
            /** @type {number} */
            o[k] = i;
            /** @type {number} */
            values[k] = n;
            Ai[k] = d[n - s];
            k++;
          }
        }
        d = p[i];
        n = s;
        for (; n < i; n++) {
          if (d[n - s]) {
            /** @type {number} */
            docIdOrder[key] = i;
            exports[key] = n;
            parameters[key] = d[n - s];
            key++;
          }
        }
        /** @type {number} */
        docIdOrder[key] = i;
        /** @type {number} */
        exports[key] = i;
        /** @type {number} */
        parameters[key] = 1;
        key++;
      }
      return {
        U : [o, values, Ai],
        L : [docIdOrder, exports, parameters]
      };
    };
    /**
     * @param {?} o
     * @param {undefined} value
     * @return {?}
     */
    numeric$jscomp$0.cLUsolve = function(o, value) {
      var j;
      var i;
      var q = o.L;
      var data = o.U;
      var b = numeric$jscomp$0.clone(value);
      var a = q[0];
      var p = q[1];
      var c = q[2];
      var prev = data[0];
      var keys = data[1];
      var sizes = data[2];
      var left = prev.length;
      var redActive = (a.length, b.length);
      /** @type {number} */
      i = 0;
      /** @type {number} */
      j = 0;
      for (; j < redActive; j++) {
        for (; p[i] < j;) {
          b[j] -= c[i] * b[p[i]];
          i++;
        }
        i++;
      }
      /** @type {number} */
      i = left - 1;
      /** @type {number} */
      j = redActive - 1;
      for (; j >= 0; j--) {
        for (; keys[i] > j;) {
          b[j] -= sizes[i] * b[keys[i]];
          i--;
        }
        b[j] /= sizes[i];
        i--;
      }
      return b;
    };
    /**
     * @param {!Array} b
     * @param {!Function} c
     * @return {?}
     */
    numeric$jscomp$0.cgrid = function(b, c) {
      if ("number" == typeof b) {
        /** @type {!Array} */
        b = [b, b];
      }
      var p;
      var i;
      var objectiveF;
      var o = numeric$jscomp$0.rep(b, -1);
      if ("function" != typeof c) {
        switch(c) {
          case "L":
            /**
             * @param {number} p
             * @param {number} n
             * @return {?}
             */
            c = function(p, n) {
              return p >= b[0] / 2 || n < b[1] / 2;
            };
            break;
          default:
            /**
             * @param {!Object} t
             * @param {!Object} cb
             * @return {?}
             */
            c = function(t, cb) {
              return true;
            };
        }
      }
      /** @type {number} */
      objectiveF = 0;
      /** @type {number} */
      p = 1;
      for (; p < b[0] - 1; p++) {
        /** @type {number} */
        i = 1;
        for (; i < b[1] - 1; i++) {
          if (c(p, i)) {
            /** @type {number} */
            o[p][i] = objectiveF;
            objectiveF++;
          }
        }
      }
      return o;
    };
    /**
     * @param {!Array} a
     * @return {?}
     */
    numeric$jscomp$0.cdelsq = function(a) {
      var j;
      var k;
      var signedTransactionsCounter;
      var i;
      var s;
      /** @type {!Array} */
      var signedTransactions = [[-1, 0], [0, -1], [0, 1], [1, 0]];
      var header = numeric$jscomp$0.dim(a);
      var width = header[0];
      var size = header[1];
      /** @type {!Array} */
      var test_many_vals = [];
      /** @type {!Array} */
      var states = [];
      /** @type {!Array} */
      var newNodeLists = [];
      /** @type {number} */
      j = 1;
      for (; j < width - 1; j++) {
        /** @type {number} */
        k = 1;
        for (; k < size - 1; k++) {
          if (!(a[j][k] < 0)) {
            /** @type {number} */
            signedTransactionsCounter = 0;
            for (; signedTransactionsCounter < 4; signedTransactionsCounter++) {
              i = j + signedTransactions[signedTransactionsCounter][0];
              s = k + signedTransactions[signedTransactionsCounter][1];
              if (!(a[i][s] < 0)) {
                test_many_vals.push(a[j][k]);
                states.push(a[i][s]);
                newNodeLists.push(-1);
              }
            }
            test_many_vals.push(a[j][k]);
            states.push(a[j][k]);
            newNodeLists.push(4);
          }
        }
      }
      return [test_many_vals, states, newNodeLists];
    };
    /**
     * @param {!Array} idealLength
     * @param {?} w
     * @return {?}
     */
    numeric$jscomp$0.cdotMV = function(idealLength, w) {
      var concatTasks;
      var i;
      var maxSell;
      var prices = idealLength[0];
      var _g = idealLength[1];
      var x_last = idealLength[2];
      var l = prices.length;
      /** @type {number} */
      maxSell = 0;
      /** @type {number} */
      i = 0;
      for (; i < l; i++) {
        if (prices[i] > maxSell) {
          maxSell = prices[i];
        }
      }
      maxSell++;
      concatTasks = numeric$jscomp$0.rep([maxSell], 0);
      /** @type {number} */
      i = 0;
      for (; i < l; i++) {
        concatTasks[prices[i]] += x_last[i] * w[_g[i]];
      }
      return concatTasks;
    };
    /**
     * @param {number} posx
     * @param {!Array} posy
     * @param {!Object} polymer
     * @param {string} params
     * @param {!Object} series
     * @return {undefined}
     */
    numeric$jscomp$0.Spline = function(posx, posy, polymer, params, series) {
      /** @type {number} */
      this.x = posx;
      /** @type {!Array} */
      this.yl = posy;
      /** @type {!Object} */
      this.yr = polymer;
      /** @type {string} */
      this.kl = params;
      /** @type {!Object} */
      this.kr = series;
    };
    /**
     * @param {!Object} value
     * @param {number} i
     * @return {?}
     */
    numeric$jscomp$0.Spline.prototype._at = function(value, i) {
      var elem;
      var acc;
      var x;
      var times = this.x;
      var keys = this.yl;
      var array = this.yr;
      var formats = this.kl;
      var simplex = this.kr;
      var add = numeric$jscomp$0.add;
      var $ = numeric$jscomp$0.sub;
      var f = numeric$jscomp$0.mul;
      elem = $(f(formats[i], times[i + 1] - times[i]), $(array[i + 1], keys[i]));
      acc = add(f(simplex[i + 1], times[i] - times[i + 1]), $(array[i + 1], keys[i]));
      /** @type {number} */
      var incrementX = (x = (value - times[i]) / (times[i + 1] - times[i])) * (1 - x);
      return add(add(add(f(1 - x, keys[i]), f(x, array[i + 1])), f(elem, incrementX * (1 - x))), f(acc, incrementX * x));
    };
    /**
     * @param {?} t
     * @return {?}
     */
    numeric$jscomp$0.Spline.prototype.at = function(t) {
      if ("number" == typeof t) {
        var c;
        var i;
        var n;
        var offsets = this.x;
        var l = offsets.length;
        /** @type {function(?): number} */
        var nativeFloor = Math.floor;
        /** @type {number} */
        c = 0;
        /** @type {number} */
        i = l - 1;
        for (; i - c > 1;) {
          if (offsets[n = nativeFloor((c + i) / 2)] <= t) {
            /** @type {number} */
            c = n;
          } else {
            /** @type {number} */
            i = n;
          }
        }
        return this._at(t, c);
      }
      l = t.length;
      var i;
      /** @type {!Array} */
      var val = Array(l);
      /** @type {number} */
      i = l - 1;
      for (; -1 !== i; --i) {
        val[i] = this.at(t[i]);
      }
      return val;
    };
    /**
     * @return {?}
     */
    numeric$jscomp$0.Spline.prototype.diff = function() {
      var i;
      var speed;
      var e;
      var v1 = this.x;
      var entries = this.yl;
      var def = this.yr;
      var offset = this.kl;
      var type = this.kr;
      var length = entries.length;
      var endOfCentralDirOffset = offset;
      var graphTypeBaseName = type;
      /** @type {!Array} */
      var pairs = Array(length);
      /** @type {!Array} */
      var args = Array(length);
      var callback = numeric$jscomp$0.add;
      var parseInt = numeric$jscomp$0.mul;
      var setTimeout = numeric$jscomp$0.div;
      var walk = numeric$jscomp$0.sub;
      /** @type {number} */
      i = length - 1;
      for (; -1 !== i; --i) {
        /** @type {number} */
        speed = v1[i + 1] - v1[i];
        e = walk(def[i + 1], entries[i]);
        pairs[i] = setTimeout(callback(parseInt(e, 6), parseInt(offset[i], -4 * speed), parseInt(type[i + 1], -2 * speed)), speed * speed);
        args[i + 1] = setTimeout(callback(parseInt(e, -6), parseInt(offset[i], 2 * speed), parseInt(type[i + 1], 4 * speed)), speed * speed);
      }
      return new numeric$jscomp$0.Spline(v1, endOfCentralDirOffset, graphTypeBaseName, pairs, args);
    };
    /**
     * @return {?}
     */
    numeric$jscomp$0.Spline.prototype.roots = function() {
      /**
       * @param {number} n
       * @return {?}
       */
      function sqrt(n) {
        return n * n;
      }
      /** @type {!Array} */
      var n = [];
      var array = this.x;
      var props = this.yl;
      var aliases = this.yr;
      var parts = this.kl;
      var lines = this.kr;
      if ("number" == typeof props[0]) {
        /** @type {!Array} */
        props = [props];
        /** @type {!Array} */
        aliases = [aliases];
        /** @type {!Array} */
        parts = [parts];
        /** @type {!Array} */
        lines = [lines];
      }
      var i;
      var index;
      var Tables_in_;
      var args;
      var a;
      var childEls;
      var line;
      var node;
      var Ymain;
      var Ytitle;
      var l;
      var p;
      var widthSoFar;
      var totalWidth;
      var fixed;
      var total_sum;
      var r;
      var x;
      var value;
      var ret;
      var max;
      var min;
      var v;
      var length = props.length;
      /** @type {number} */
      var apply = array.length - 1;
      /** @type {function(?): number} */
      var tree = (n = Array(length), Math.sqrt);
      /** @type {number} */
      i = 0;
      for (; i !== length; ++i) {
        args = props[i];
        a = aliases[i];
        childEls = parts[i];
        line = lines[i];
        /** @type {!Array} */
        node = [];
        /** @type {number} */
        index = 0;
        for (; index !== apply; index++) {
          if (index > 0 && a[index] * args[index] < 0) {
            node.push(array[index]);
          }
          /** @type {number} */
          total_sum = array[index + 1] - array[index];
          array[index];
          l = args[index];
          p = a[index + 1];
          /** @type {number} */
          Ymain = childEls[index] / total_sum;
          /** @type {number} */
          widthSoFar = (Ytitle = line[index + 1] / total_sum) + 3 * l + 2 * Ymain - 3 * p;
          /** @type {number} */
          totalWidth = 3 * (Ytitle + Ymain + 2 * (l - p));
          if ((fixed = sqrt(Ymain - Ytitle + 3 * (l - p)) + 12 * Ytitle * l) <= 0) {
            /** @type {!Array} */
            r = (x = widthSoFar / totalWidth) > array[index] && x < array[index + 1] ? [array[index], x, array[index + 1]] : [array[index], array[index + 1]];
          } else {
            /** @type {number} */
            x = (widthSoFar - tree(fixed)) / totalWidth;
            /** @type {number} */
            value = (widthSoFar + tree(fixed)) / totalWidth;
            /** @type {!Array} */
            r = [array[index]];
            if (x > array[index] && x < array[index + 1]) {
              r.push(x);
            }
            if (value > array[index] && value < array[index + 1]) {
              r.push(value);
            }
            r.push(array[index + 1]);
          }
          max = r[0];
          x = this._at(max, index);
          /** @type {number} */
          Tables_in_ = 0;
          for (; Tables_in_ < r.length - 1; Tables_in_++) {
            if (min = r[Tables_in_ + 1], value = this._at(min, index), 0 !== x) {
              if (0 === value || x * value > 0) {
                max = min;
                x = value;
              } else {
                /** @type {number} */
                var F = 0;
                for (; !((v = (x * min - value * max) / (x - value)) <= max || v >= min);) {
                  if ((ret = this._at(v, index)) * value > 0) {
                    /** @type {number} */
                    min = v;
                    value = ret;
                    if (-1 === F) {
                      /** @type {number} */
                      x = x * .5;
                    }
                    /** @type {number} */
                    F = -1;
                  } else {
                    if (!(ret * x > 0)) {
                      break;
                    }
                    /** @type {number} */
                    max = v;
                    x = ret;
                    if (1 === F) {
                      /** @type {number} */
                      value = value * .5;
                    }
                    /** @type {number} */
                    F = 1;
                  }
                }
                node.push(v);
                max = r[Tables_in_ + 1];
                x = this._at(max, index);
              }
            } else {
              node.push(max);
              max = min;
              x = value;
            }
          }
          if (0 === value) {
            node.push(min);
          }
        }
        /** @type {!Array} */
        n[i] = node;
      }
      return "number" == typeof this.yl[0] ? n[0] : n;
    };
    /**
     * @param {string} points
     * @param {!Object} index
     * @param {?} value
     * @param {?} name
     * @return {?}
     */
    numeric$jscomp$0.spline = function(points, index, value, name) {
      var i;
      var j = points.length;
      /** @type {!Array} */
      var values = [];
      /** @type {!Array} */
      var sumX = [];
      /** @type {!Array} */
      var result = [];
      var callback = numeric$jscomp$0.sub;
      var mul = numeric$jscomp$0.mul;
      var add = numeric$jscomp$0.add;
      /** @type {number} */
      i = j - 2;
      for (; i >= 0; i--) {
        /** @type {number} */
        sumX[i] = points[i + 1] - points[i];
        result[i] = callback(index[i + 1], index[i]);
      }
      if (!("string" != typeof value && "string" != typeof name)) {
        /** @type {string} */
        value = name = "periodic";
      }
      /** @type {!Array} */
      var b = [[], [], []];
      switch(void 0 === value ? "undefined" : _typeof$jscomp$0(value)) {
        case "undefined":
          values[0] = mul(3 / (sumX[0] * sumX[0]), result[0]);
          b[0].push(0, 0);
          b[1].push(0, 1);
          b[2].push(2 / sumX[0], 1 / sumX[0]);
          break;
        case "string":
          values[0] = add(mul(3 / (sumX[j - 2] * sumX[j - 2]), result[j - 2]), mul(3 / (sumX[0] * sumX[0]), result[0]));
          b[0].push(0, 0, 0);
          b[1].push(j - 2, 0, 1);
          b[2].push(1 / sumX[j - 2], 2 / sumX[j - 2] + 2 / sumX[0], 1 / sumX[0]);
          break;
        default:
          values[0] = value;
          b[0].push(0);
          b[1].push(0);
          b[2].push(1);
      }
      /** @type {number} */
      i = 1;
      for (; i < j - 1; i++) {
        values[i] = add(mul(3 / (sumX[i - 1] * sumX[i - 1]), result[i - 1]), mul(3 / (sumX[i] * sumX[i]), result[i]));
        b[0].push(i, i, i);
        b[1].push(i - 1, i, i + 1);
        b[2].push(1 / sumX[i - 1], 2 / sumX[i - 1] + 2 / sumX[i], 1 / sumX[i]);
      }
      switch(void 0 === name ? "undefined" : _typeof$jscomp$0(name)) {
        case "undefined":
          values[j - 1] = mul(3 / (sumX[j - 2] * sumX[j - 2]), result[j - 2]);
          b[0].push(j - 1, j - 1);
          b[1].push(j - 2, j - 1);
          b[2].push(1 / sumX[j - 2], 2 / sumX[j - 2]);
          break;
        case "string":
          /** @type {number} */
          b[1][b[1].length - 1] = 0;
          break;
        default:
          values[j - 1] = name;
          b[0].push(j - 1);
          b[1].push(j - 1);
          b[2].push(1);
      }
      values = "number" != typeof values[0] ? numeric$jscomp$0.transpose(values) : [values];
      /** @type {!Array} */
      var a = Array(values.length);
      if ("string" == typeof value) {
        /** @type {number} */
        i = a.length - 1;
        for (; -1 !== i; --i) {
          a[i] = numeric$jscomp$0.ccsLUPSolve(numeric$jscomp$0.ccsLUP(numeric$jscomp$0.ccsScatter(b)), values[i]);
          a[i][j - 1] = a[i][0];
        }
      } else {
        /** @type {number} */
        i = a.length - 1;
        for (; -1 !== i; --i) {
          a[i] = numeric$jscomp$0.cLUsolve(numeric$jscomp$0.cLU(b), values[i]);
        }
      }
      return a = "number" == typeof index[0] ? a[0] : numeric$jscomp$0.transpose(a), new numeric$jscomp$0.Spline(points, index, index, a, a);
    };
    /**
     * @param {!Array} x
     * @param {!Array} y
     * @return {undefined}
     */
    numeric$jscomp$0.fftpow2 = function fftpow2(x, y) {
      var n = x.length;
      if (1 !== n) {
        var i;
        var j;
        /** @type {function(?): number} */
        var cos = Math.cos;
        /** @type {function(?): number} */
        var sin = Math.sin;
        /** @type {!Array} */
        var xe = Array(n / 2);
        /** @type {!Array} */
        var ye = Array(n / 2);
        /** @type {!Array} */
        var xo = Array(n / 2);
        /** @type {!Array} */
        var yo = Array(n / 2);
        /** @type {number} */
        j = n / 2;
        /** @type {number} */
        i = n - 1;
        for (; -1 !== i; --i) {
          xo[--j] = x[i];
          yo[j] = y[i];
          --i;
          xe[j] = x[i];
          ye[j] = y[i];
        }
        fftpow2(xe, ye);
        fftpow2(xo, yo);
        /** @type {number} */
        j = n / 2;
        var t;
        var ci;
        var si;
        /** @type {number} */
        var k = -6.283185307179586 / n;
        /** @type {number} */
        i = n - 1;
        for (; -1 !== i; --i) {
          if (-1 === --j) {
            /** @type {number} */
            j = n / 2 - 1;
          }
          /** @type {number} */
          ci = cos(t = k * i);
          /** @type {number} */
          si = sin(t);
          /** @type {number} */
          x[i] = xe[j] + ci * xo[j] - si * yo[j];
          y[i] = ye[j] + ci * yo[j] + si * xo[j];
        }
      }
    };
    /**
     * @param {!Array} x
     * @param {!Array} y
     * @return {undefined}
     */
    numeric$jscomp$0._ifftpow2 = function fftpow2(x, y) {
      var n = x.length;
      if (1 !== n) {
        var i;
        var j;
        /** @type {function(?): number} */
        var cos = Math.cos;
        /** @type {function(?): number} */
        var sin = Math.sin;
        /** @type {!Array} */
        var xe = Array(n / 2);
        /** @type {!Array} */
        var ye = Array(n / 2);
        /** @type {!Array} */
        var xo = Array(n / 2);
        /** @type {!Array} */
        var yo = Array(n / 2);
        /** @type {number} */
        j = n / 2;
        /** @type {number} */
        i = n - 1;
        for (; -1 !== i; --i) {
          xo[--j] = x[i];
          yo[j] = y[i];
          --i;
          xe[j] = x[i];
          ye[j] = y[i];
        }
        fftpow2(xe, ye);
        fftpow2(xo, yo);
        /** @type {number} */
        j = n / 2;
        var t;
        var ci;
        var si;
        /** @type {number} */
        var k = 6.283185307179586 / n;
        /** @type {number} */
        i = n - 1;
        for (; -1 !== i; --i) {
          if (-1 === --j) {
            /** @type {number} */
            j = n / 2 - 1;
          }
          /** @type {number} */
          ci = cos(t = k * i);
          /** @type {number} */
          si = sin(t);
          /** @type {number} */
          x[i] = xe[j] + ci * xo[j] - si * yo[j];
          y[i] = ye[j] + ci * yo[j] + si * xo[j];
        }
      }
    };
    /**
     * @param {!Array} x
     * @param {!Array} y
     * @return {undefined}
     */
    numeric$jscomp$0.ifftpow2 = function(x, y) {
      numeric$jscomp$0._ifftpow2(x, y);
      numeric$jscomp$0.diveq(x, x.length);
      numeric$jscomp$0.diveq(y, y.length);
    };
    /**
     * @param {!Array} ax
     * @param {!Array} ay
     * @param {!Array} bx
     * @param {!Array} by
     * @return {undefined}
     */
    numeric$jscomp$0.convpow2 = function(ax, ay, bx, by) {
      var i;
      var axi;
      var bxi;
      var ayi;
      var byi;
      numeric$jscomp$0.fftpow2(ax, ay);
      numeric$jscomp$0.fftpow2(bx, by);
      /** @type {number} */
      i = ax.length - 1;
      for (; -1 !== i; --i) {
        axi = ax[i];
        ayi = ay[i];
        bxi = bx[i];
        byi = by[i];
        /** @type {number} */
        ax[i] = axi * bxi - ayi * byi;
        /** @type {number} */
        ay[i] = axi * byi + ayi * bxi;
      }
      numeric$jscomp$0.ifftpow2(ax, ay);
    };
    /**
     * @return {?}
     */
    numeric$jscomp$0.T.prototype.fft = function() {
      var k;
      var t;
      var options = this.x;
      var module = this.y;
      var n = options.length;
      /** @type {function(?): number} */
      var pow = Math.log;
      /** @type {number} */
      var v = pow(2);
      /** @type {number} */
      var i = Math.ceil(pow(2 * n - 1) / v);
      /** @type {number} */
      var m = Math.pow(2, i);
      var cx = numeric$jscomp$0.rep([m], 0);
      var cy = numeric$jscomp$0.rep([m], 0);
      /** @type {function(?): number} */
      var cos = Math.cos;
      /** @type {function(?): number} */
      var sin = Math.sin;
      /** @type {number} */
      var c = -3.141592653589793 / n;
      var x = numeric$jscomp$0.rep([m], 0);
      var context = numeric$jscomp$0.rep([m], 0);
      Math.floor(n / 2);
      /** @type {number} */
      k = 0;
      for (; k < n; k++) {
        x[k] = options[k];
      }
      if (void 0 !== module) {
        /** @type {number} */
        k = 0;
        for (; k < n; k++) {
          context[k] = module[k];
        }
      }
      /** @type {number} */
      cx[0] = 1;
      /** @type {number} */
      k = 1;
      for (; k <= m / 2; k++) {
        /** @type {number} */
        t = c * k * k;
        /** @type {number} */
        cx[k] = cos(t);
        /** @type {number} */
        cy[k] = sin(t);
        /** @type {number} */
        cx[m - k] = cos(t);
        /** @type {number} */
        cy[m - k] = sin(t);
      }
      var p = new numeric$jscomp$0.T(x, context);
      var path = new numeric$jscomp$0.T(cx, cy);
      return p = p.mul(path), numeric$jscomp$0.convpow2(p.x, p.y, numeric$jscomp$0.clone(path.x), numeric$jscomp$0.neg(path.y)), (p = p.mul(path)).x.length = n, p.y.length = n, p;
    };
    /**
     * @return {?}
     */
    numeric$jscomp$0.T.prototype.ifft = function() {
      var k;
      var t;
      var x = this.x;
      var module = this.y;
      var n = x.length;
      /** @type {function(?): number} */
      var logarithm = Math.log;
      /** @type {number} */
      var logRange = logarithm(2);
      /** @type {number} */
      var i = Math.ceil(logarithm(2 * n - 1) / logRange);
      /** @type {number} */
      var m = Math.pow(2, i);
      var cx = numeric$jscomp$0.rep([m], 0);
      var cy = numeric$jscomp$0.rep([m], 0);
      /** @type {function(?): number} */
      var cos = Math.cos;
      /** @type {function(?): number} */
      var sin = Math.sin;
      /** @type {number} */
      var c = 3.141592653589793 / n;
      var w = numeric$jscomp$0.rep([m], 0);
      var context = numeric$jscomp$0.rep([m], 0);
      Math.floor(n / 2);
      /** @type {number} */
      k = 0;
      for (; k < n; k++) {
        w[k] = x[k];
      }
      if (void 0 !== module) {
        /** @type {number} */
        k = 0;
        for (; k < n; k++) {
          context[k] = module[k];
        }
      }
      /** @type {number} */
      cx[0] = 1;
      /** @type {number} */
      k = 1;
      for (; k <= m / 2; k++) {
        /** @type {number} */
        t = c * k * k;
        /** @type {number} */
        cx[k] = cos(t);
        /** @type {number} */
        cy[k] = sin(t);
        /** @type {number} */
        cx[m - k] = cos(t);
        /** @type {number} */
        cy[m - k] = sin(t);
      }
      var p = new numeric$jscomp$0.T(w, context);
      var path = new numeric$jscomp$0.T(cx, cy);
      return p = p.mul(path), numeric$jscomp$0.convpow2(p.x, p.y, numeric$jscomp$0.clone(path.x), numeric$jscomp$0.neg(path.y)), (p = p.mul(path)).x.length = n, p.y.length = n, p.div(n);
    };
    /**
     * @param {?} fn
     * @param {string} value
     * @return {?}
     */
    numeric$jscomp$0.gradient = function(fn, value) {
      var length = value.length;
      var b = fn(value);
      if (isNaN(b)) {
        throw new Error("gradient: f(x) is a NaN!");
      }
      var i;
      var y;
      var x;
      var top;
      var c;
      var m;
      var j;
      var a;
      var thumb_width;
      /** @type {function(...?): number} */
      var max = Math.max;
      var data = numeric$jscomp$0.clone(value);
      /** @type {!Array} */
      var buffer = Array(length);
      /** @type {function(?): number} */
      var abs = (numeric$jscomp$0.div, numeric$jscomp$0.sub, max = Math.max, Math.abs);
      /** @type {function(...?): number} */
      var min = Math.min;
      /** @type {number} */
      var scrollTop = 0;
      /** @type {number} */
      i = 0;
      for (; i < length; i++) {
        /** @type {number} */
        var h = max(1E-6 * b, 1E-8);
        for (;;) {
          if (++scrollTop > 20) {
            throw new Error("Numerical gradient fails");
          }
          if (data[i] = value[i] + h, y = fn(data), data[i] = value[i] - h, x = fn(data), data[i] = value[i], isNaN(y) || isNaN(x)) {
            /** @type {number} */
            h = h / 16;
          } else {
            if (buffer[i] = (y - x) / (2 * h), top = value[i] - h, c = value[i], m = value[i] + h, j = (y - b) / h, a = (b - x) / h, thumb_width = max(abs(buffer[i]), abs(b), abs(y), abs(x), abs(top), abs(c), abs(m), 1E-8), !(min(max(abs(j - buffer[i]), abs(a - buffer[i]), abs(j - a)) / thumb_width, h / thumb_width) > .001)) {
              break;
            }
            /** @type {number} */
            h = h / 16;
          }
        }
      }
      return buffer;
    };
    /**
     * @param {?} e
     * @param {number} a
     * @param {number} p
     * @param {?} x
     * @param {number} start
     * @param {?} callback
     * @param {number} opt
     * @return {?}
     */
    numeric$jscomp$0.uncmin = function(e, a, p, x, start, callback, opt) {
      /** @type {function(?, string): ?} */
      var o = numeric$jscomp$0.gradient;
      if (void 0 === opt) {
        opt = {};
      }
      if (void 0 === p) {
        /** @type {number} */
        p = 1E-8;
      }
      if (void 0 === x) {
        /**
         * @param {!Function} b
         * @return {?}
         */
        x = function(b) {
          return o(e, b);
        };
      }
      if (void 0 === start) {
        /** @type {number} */
        start = 1E3;
      }
      var m;
      var res;
      var obj = (a = numeric$jscomp$0.clone(a)).length;
      var t = e(a);
      if (isNaN(t)) {
        throw new Error("uncmin: f(x0) is a NaN!");
      }
      /** @type {function(...?): number} */
      var ceil = Math.max;
      /** @type {function(string): ?} */
      var getStyle = numeric$jscomp$0.norm2;
      /** @type {number} */
      p = ceil(p, numeric$jscomp$0.epsilon);
      var n;
      var d;
      var b;
      var i;
      var j;
      var result;
      var y;
      var value;
      var r;
      var w;
      var data = opt.Hinv || numeric$jscomp$0.identity(obj);
      /** @type {function(number, number): ?} */
      var fn = numeric$jscomp$0.dot;
      var assign = (numeric$jscomp$0.inv, numeric$jscomp$0.sub);
      var equal = numeric$jscomp$0.add;
      /** @type {function(!Array, !Array): ?} */
      var g = numeric$jscomp$0.tensor;
      var prefixArray = numeric$jscomp$0.div;
      var add = numeric$jscomp$0.mul;
      var filter = numeric$jscomp$0.all;
      var isFinite = numeric$jscomp$0.isFinite;
      var expect = numeric$jscomp$0.neg;
      /** @type {number} */
      var val = 0;
      /** @type {string} */
      var messagestring = "";
      d = x(a);
      for (; val < start;) {
        if ("function" == typeof callback && callback(val, a, t, d, data)) {
          /** @type {string} */
          messagestring = "Callback returned true";
          break;
        }
        if (!filter(isFinite(d))) {
          /** @type {string} */
          messagestring = "Gradient has Infinity or NaN";
          break;
        }
        if (!filter(isFinite(n = expect(fn(data, d))))) {
          /** @type {string} */
          messagestring = "Search direction has Infinity or NaN";
          break;
        }
        if ((w = getStyle(n)) < p) {
          /** @type {string} */
          messagestring = "Newton step smaller than tol";
          break;
        }
        /** @type {number} */
        r = 1;
        res = fn(d, n);
        /** @type {number} */
        j = a;
        for (; val < start && !(r * w < p) && (j = equal(a, i = add(n, r)), (m = e(j)) - t >= .1 * r * res || isNaN(m));) {
          /** @type {number} */
          r = r * .5;
          ++val;
        }
        if (r * w < p) {
          /** @type {string} */
          messagestring = "Line search step size smaller than tol";
          break;
        }
        if (val === start) {
          /** @type {string} */
          messagestring = "maxit reached during line search";
          break;
        }
        value = fn(result = assign(b = x(j), d), i);
        y = fn(data, result);
        data = assign(equal(data, add((value + fn(result, y)) / (value * value), g(i, i))), prefixArray(equal(g(y, i), g(i, y)), value));
        a = j;
        t = m;
        d = b;
        ++val;
      }
      return {
        solution : a,
        f : t,
        gradient : d,
        invHessian : data,
        iterations : val,
        message : messagestring
      };
    };
    /**
     * @param {number} value
     * @param {number} max
     * @param {!Function} fn
     * @param {!Object} macro_context
     * @param {number} options
     * @param {string} message
     * @param {!Object} emitter
     * @return {undefined}
     */
    numeric$jscomp$0.Dopri = function(value, max, fn, macro_context, options, message, emitter) {
      /** @type {number} */
      this.x = value;
      /** @type {number} */
      this.y = max;
      /** @type {!Function} */
      this.f = fn;
      /** @type {!Object} */
      this.ymid = macro_context;
      /** @type {number} */
      this.iterations = options;
      /** @type {!Object} */
      this.events = emitter;
      /** @type {string} */
      this.message = message;
    };
    /**
     * @param {number} x
     * @param {number} index
     * @return {?}
     */
    numeric$jscomp$0.Dopri.prototype._at = function(x, index) {
      /**
       * @param {number} n
       * @return {?}
       */
      function f(n) {
        return n * n;
      }
      var i;
      var j;
      var t;
      var val;
      var name;
      var rightElement;
      var elem;
      var leftElement;
      var d;
      var indices = this.x;
      var v = this.y;
      var data = this.f;
      var rightMatrix = this.ymid;
      var add = (indices.length, Math.floor, numeric$jscomp$0.add);
      var mul = numeric$jscomp$0.mul;
      var func = numeric$jscomp$0.sub;
      return i = indices[index], j = indices[index + 1], val = v[index], name = v[index + 1], t = i + .5 * (j - i), rightElement = rightMatrix[index], elem = func(data[index], mul(val, 1 / (i - t) + 2 / (i - j))), leftElement = func(data[index + 1], mul(name, 1 / (j - t) + 2 / (j - i))), add(add(add(add(mul(val, (d = [f(x - j) * (x - t) / f(i - j) / (i - t), f(x - i) * f(x - j) / f(i - t) / f(j - t), f(x - i) * (x - t) / f(j - i) / (j - t), (x - i) * f(x - j) * (x - t) / f(i - j) / (i - t), (x - 
      j) * f(x - i) * (x - t) / f(i - j) / (j - t)])[0]), mul(rightElement, d[1])), mul(name, d[2])), mul(elem, d[3])), mul(leftElement, d[4]));
    };
    /**
     * @param {?} k
     * @return {?}
     */
    numeric$jscomp$0.Dopri.prototype.at = function(k) {
      var i;
      var x;
      var n;
      /** @type {function(?): number} */
      var nativeFloor = Math.floor;
      if ("number" != typeof k) {
        var w = k.length;
        /** @type {!Array} */
        var val = Array(w);
        /** @type {number} */
        i = w - 1;
        for (; -1 !== i; --i) {
          val[i] = this.at(k[i]);
        }
        return val;
      }
      var arr = this.x;
      /** @type {number} */
      i = 0;
      /** @type {number} */
      x = arr.length - 1;
      for (; x - i > 1;) {
        if (arr[n = nativeFloor(.5 * (i + x))] <= k) {
          /** @type {number} */
          i = n;
        } else {
          /** @type {number} */
          x = n;
        }
      }
      return this._at(k, i);
    };
    /**
     * @param {number} e
     * @param {number} b
     * @param {!Object} a
     * @param {?} fn
     * @param {number} x
     * @param {number} s
     * @param {?} callback
     * @return {?}
     */
    numeric$jscomp$0.dopri = function(e, b, a, fn, x, s, callback) {
      if (void 0 === x) {
        /** @type {number} */
        x = 1E-6;
      }
      if (void 0 === s) {
        /** @type {number} */
        s = 1E3;
      }
      var name;
      var output;
      var count;
      var message;
      var val;
      var item;
      var vY;
      var key;
      var c;
      var lambda;
      var n;
      var p;
      var result;
      /** @type {!Array} */
      var args = [e];
      /** @type {!Array} */
      var schema = [a];
      /** @type {!Array} */
      var array = [fn(e, a)];
      /** @type {!Array} */
      var matches = [];
      /** @type {!Array} */
      var step = [.075, .225];
      /** @type {!Array} */
      var hist = [44 / 45, -56 / 15, 32 / 9];
      /** @type {!Array} */
      var diffs = [19372 / 6561, -25360 / 2187, 64448 / 6561, -212 / 729];
      /** @type {!Array} */
      var HistGram = [9017 / 3168, -355 / 33, 46732 / 5247, 49 / 176, -5103 / 18656];
      /** @type {!Array} */
      var sn = [35 / 384, 0, 500 / 1113, 125 / 192, -2187 / 6784, 11 / 84];
      /** @type {!Array} */
      var meter = [.10013431883002395, 0, .3918321794184259, -.02982460176594817, .05893268337240795, -.04497888809104361, .023904308236133973];
      /** @type {!Array} */
      var diff = [.2, .3, .8, 8 / 9, 1, 1];
      /** @type {!Array} */
      var histogram = [-71 / 57600, 0, 71 / 16695, -71 / 1920, 17253 / 339200, -22 / 525, .025];
      /** @type {number} */
      var index = 0;
      /** @type {number} */
      var i = (b - e) / 10;
      /** @type {number} */
      var t = 0;
      var div = numeric$jscomp$0.add;
      var assertEquals = numeric$jscomp$0.mul;
      /** @type {function(...?): number} */
      var setTimeout = (Math.max, Math.min);
      /** @type {function(?): number} */
      var Mabs = Math.abs;
      var makeBasis = numeric$jscomp$0.norminf;
      /** @type {function(?, ?): number} */
      var pow = Math.pow;
      var isNaN = numeric$jscomp$0.any;
      var add = numeric$jscomp$0.lt;
      var multiply = numeric$jscomp$0.and;
      var _this = (numeric$jscomp$0.sub, new numeric$jscomp$0.Dopri(args, schema, array, matches, -1, ""));
      if ("function" == typeof callback) {
        n = callback(e, a);
      }
      for (; e < b && t < s;) {
        if (++t, e + i > b && (i = b - e), name = fn(e + diff[0] * i, div(a, assertEquals(.2 * i, array[index]))), output = fn(e + diff[1] * i, div(div(a, assertEquals(step[0] * i, array[index])), assertEquals(step[1] * i, name))), count = fn(e + diff[2] * i, div(div(div(a, assertEquals(hist[0] * i, array[index])), assertEquals(hist[1] * i, name)), assertEquals(hist[2] * i, output))), message = fn(e + diff[3] * i, div(div(div(div(a, assertEquals(diffs[0] * i, array[index])), assertEquals(diffs[1] * 
        i, name)), assertEquals(diffs[2] * i, output)), assertEquals(diffs[3] * i, count))), val = fn(e + diff[4] * i, div(div(div(div(div(a, assertEquals(HistGram[0] * i, array[index])), assertEquals(HistGram[1] * i, name)), assertEquals(HistGram[2] * i, output)), assertEquals(HistGram[3] * i, count)), assertEquals(HistGram[4] * i, message))), item = fn(e + i, c = div(div(div(div(div(a, assertEquals(array[index], i * sn[0])), assertEquals(output, i * sn[2])), assertEquals(count, i * sn[3])), assertEquals(message, 
        i * sn[4])), assertEquals(val, i * sn[5]))), (lambda = "number" == typeof(vY = div(div(div(div(div(assertEquals(array[index], i * histogram[0]), assertEquals(output, i * histogram[2])), assertEquals(count, i * histogram[3])), assertEquals(message, i * histogram[4])), assertEquals(val, i * histogram[5])), assertEquals(item, i * histogram[6]))) ? Mabs(vY) : makeBasis(vY)) > x) {
          if (e + (i = .2 * i * pow(x / lambda, .25)) === e) {
            /** @type {string} */
            _this.msg = "Step size became too small";
            break;
          }
        } else {
          if (matches[index] = div(div(div(div(div(div(a, assertEquals(array[index], i * meter[0])), assertEquals(output, i * meter[2])), assertEquals(count, i * meter[3])), assertEquals(message, i * meter[4])), assertEquals(val, i * meter[5])), assertEquals(item, i * meter[6])), args[++index] = e + i, schema[index] = c, array[index] = item, "function" == typeof callback) {
            var arg;
            var a;
            /** @type {number} */
            var o = e;
            var b = e + .5 * i;
            if (p = callback(b, matches[index - 1]), isNaN(result = multiply(add(n, 0), add(0, p))) || (o = b, n = p, p = callback(b = e + i, c), result = multiply(add(n, 0), add(0, p))), isNaN(result)) {
              var res;
              var value;
              /** @type {number} */
              var Q = 0;
              /** @type {number} */
              var l = 1;
              /** @type {number} */
              var k = 1;
              for (;;) {
                if ("number" == typeof n) {
                  /** @type {number} */
                  a = (k * p * o - l * n * b) / (k * p - l * n);
                } else {
                  a = b;
                  /** @type {number} */
                  key = n.length - 1;
                  for (; -1 !== key; --key) {
                    if (n[key] < 0 && p[key] > 0) {
                      /** @type {number} */
                      a = setTimeout(a, (k * p[key] * o - l * n[key] * b) / (k * p[key] - l * n[key]));
                    }
                  }
                }
                if (a <= o || a >= b) {
                  break;
                }
                value = callback(a, arg = _this._at(a, index - 1));
                if (isNaN(res = multiply(add(n, 0), add(0, value)))) {
                  b = a;
                  p = value;
                  result = res;
                  /** @type {number} */
                  k = 1;
                  if (-1 === Q) {
                    /** @type {number} */
                    l = l * .5;
                  } else {
                    /** @type {number} */
                    l = 1;
                  }
                  /** @type {number} */
                  Q = -1;
                } else {
                  o = a;
                  n = value;
                  /** @type {number} */
                  l = 1;
                  if (1 === Q) {
                    /** @type {number} */
                    k = k * .5;
                  } else {
                    /** @type {number} */
                    k = 1;
                  }
                  /** @type {number} */
                  Q = 1;
                }
              }
              return c = _this._at(.5 * (e + a), index - 1), _this.f[index] = fn(a, arg), _this.x[index] = a, _this.y[index] = arg, _this.ymid[index - 1] = c, _this.events = result, _this.iterations = t, _this;
            }
          }
          e = e + i;
          a = c;
          n = p;
          /** @type {number} */
          i = setTimeout(.8 * i * pow(x / lambda, .25), 4 * i);
        }
      }
      return _this.iterations = t, _this;
    };
    /**
     * @param {string} a
     * @param {string} dim
     * @return {?}
     */
    numeric$jscomp$0.LU = function(a, dim) {
      dim = dim || false;
      var j;
      var i;
      var k;
      var w;
      var x;
      var b;
      var key;
      var c;
      var mw;
      /** @type {function(?): number} */
      var Mabs = Math.abs;
      var len = a.length;
      /** @type {number} */
      var lastLine = len - 1;
      /** @type {!Array} */
      var out = new Array(len);
      if (!dim) {
        a = numeric$jscomp$0.clone(a);
      }
      /** @type {number} */
      k = 0;
      for (; k < len; ++k) {
        /** @type {number} */
        key = k;
        /** @type {number} */
        mw = Mabs((b = a[k])[k]);
        /** @type {number} */
        i = k + 1;
        for (; i < len; ++i) {
          if (mw < (w = Mabs(a[i][k]))) {
            /** @type {number} */
            mw = w;
            /** @type {number} */
            key = i;
          }
        }
        /** @type {number} */
        out[k] = key;
        if (key != k) {
          a[k] = a[key];
          a[key] = b;
          b = a[k];
        }
        x = b[k];
        /** @type {number} */
        j = k + 1;
        for (; j < len; ++j) {
          a[j][k] /= x;
        }
        /** @type {number} */
        j = k + 1;
        for (; j < len; ++j) {
          c = a[j];
          /** @type {number} */
          i = k + 1;
          for (; i < lastLine; ++i) {
            c[i] -= c[k] * b[i];
            c[++i] -= c[k] * b[i];
          }
          if (i === lastLine) {
            c[i] -= c[k] * b[i];
          }
        }
      }
      return {
        LU : a,
        P : out
      };
    };
    /**
     * @param {?} _
     * @param {string} a
     * @return {?}
     */
    numeric$jscomp$0.LUsolve = function(_, a) {
      var i;
      var j;
      var key;
      var b;
      var tile;
      var buffer = _.LU;
      var ln = buffer.length;
      var c = numeric$jscomp$0.clone(a);
      var map = _.P;
      /** @type {number} */
      i = ln - 1;
      for (; -1 !== i; --i) {
        c[i] = a[i];
      }
      /** @type {number} */
      i = 0;
      for (; i < ln; ++i) {
        key = map[i];
        if (map[i] !== i) {
          tile = c[i];
          c[i] = c[key];
          c[key] = tile;
        }
        b = buffer[i];
        /** @type {number} */
        j = 0;
        for (; j < i; ++j) {
          c[i] -= c[j] * b[j];
        }
      }
      /** @type {number} */
      i = ln - 1;
      for (; i >= 0; --i) {
        b = buffer[i];
        /** @type {number} */
        j = i + 1;
        for (; j < ln; ++j) {
          c[i] -= c[j] * b[j];
        }
        c[i] /= b[i];
      }
      return c;
    };
    /**
     * @param {string} ss
     * @param {string} bb
     * @param {string} d
     * @return {?}
     */
    numeric$jscomp$0.solve = function(ss, bb, d) {
      return numeric$jscomp$0.LUsolve(numeric$jscomp$0.LU(ss, d), bb);
    };
    /**
     * @param {string} a
     * @return {?}
     */
    numeric$jscomp$0.echelonize = function(a) {
      var k;
      var n;
      var i;
      var j;
      var data;
      var input;
      var t;
      var scale;
      var s = numeric$jscomp$0.dim(a);
      var m = s[0];
      var x = s[1];
      var r = numeric$jscomp$0.identity(m);
      /** @type {!Array} */
      var p = Array(m);
      /** @type {function(?): number} */
      var abs = Math.abs;
      var add = numeric$jscomp$0.diveq;
      a = numeric$jscomp$0.clone(a);
      /** @type {number} */
      k = 0;
      for (; k < m; ++k) {
        /** @type {number} */
        i = 0;
        data = a[k];
        input = r[k];
        /** @type {number} */
        n = 1;
        for (; n < x; ++n) {
          if (abs(data[i]) < abs(data[n])) {
            /** @type {number} */
            i = n;
          }
        }
        /** @type {number} */
        p[k] = i;
        add(input, data[i]);
        add(data, data[i]);
        /** @type {number} */
        n = 0;
        for (; n < m; ++n) {
          if (n !== k) {
            scale = (t = a[n])[i];
            /** @type {number} */
            j = x - 1;
            for (; -1 !== j; --j) {
              t[j] -= data[j] * scale;
            }
            t = r[n];
            /** @type {number} */
            j = m - 1;
            for (; -1 !== j; --j) {
              t[j] -= input[j] * scale;
            }
          }
        }
      }
      return {
        I : r,
        A : a,
        P : p
      };
    };
    /**
     * @param {!Array} o
     * @param {!Array} t
     * @param {string} result
     * @param {number} k
     * @param {number} d
     * @param {number} data
     * @param {boolean} isKanban
     * @return {?}
     */
    numeric$jscomp$0.__solveLP = function(o, t, result, k, d, data, isKanban) {
      var val;
      var s;
      var i;
      var x;
      var flipa = numeric$jscomp$0.sum;
      var fn = (numeric$jscomp$0.log, numeric$jscomp$0.mul);
      var callback = numeric$jscomp$0.sub;
      /** @type {function(number, number): ?} */
      var f = numeric$jscomp$0.dot;
      var assertEquals = numeric$jscomp$0.div;
      var add = numeric$jscomp$0.add;
      var l = o.length;
      var rows = result.length;
      /** @type {boolean} */
      var _ = false;
      /** @type {number} */
      var y = 1;
      /** @type {function(!Array): ?} */
      var _A_get = (numeric$jscomp$0.transpose(t), numeric$jscomp$0.svd, numeric$jscomp$0.transpose);
      /** @type {function(?): number} */
      var kmToMiles = (numeric$jscomp$0.leq, Math.sqrt);
      /** @type {function(?): number} */
      var Mabs = Math.abs;
      /** @type {function(...?): number} */
      var addToTotal = (numeric$jscomp$0.muleq, numeric$jscomp$0.norminf, numeric$jscomp$0.any, Math.min);
      var condaEnvsObservable = numeric$jscomp$0.all;
      var condaInfoObservable = numeric$jscomp$0.gt;
      /** @type {!Array} */
      var b = Array(l);
      /** @type {!Array} */
      var p = Array(rows);
      /** @type {function(string, string, string): ?} */
      var emit = (numeric$jscomp$0.rep([rows], 1), numeric$jscomp$0.solve);
      var value = callback(result, f(t, data));
      var d = f(o, o);
      /** @type {number} */
      i = 0;
      for (; i < d; ++i) {
        var i;
        var e;
        /** @type {number} */
        i = rows - 1;
        for (; -1 !== i; --i) {
          p[i] = assertEquals(t[i], value[i]);
        }
        var a = _A_get(p);
        /** @type {number} */
        i = l - 1;
        for (; -1 !== i; --i) {
          b[i] = flipa(a[i]);
        }
        /** @type {number} */
        y = .25 * Mabs(d / f(o, b));
        /** @type {number} */
        var _limit_bottom = 100 * kmToMiles(d / f(b, b));
        if (!isFinite(y) || y > _limit_bottom) {
          /** @type {number} */
          y = _limit_bottom;
        }
        x = add(o, fn(y, b));
        s = f(a, p);
        /** @type {number} */
        i = l - 1;
        for (; -1 !== i; --i) {
          s[i][i] += 1;
        }
        e = emit(s, assertEquals(x, y), true);
        var j = assertEquals(value, f(t, e));
        /** @type {number} */
        var total = 1;
        /** @type {number} */
        i = rows - 1;
        for (; -1 !== i; --i) {
          if (j[i] < 0) {
            /** @type {number} */
            total = addToTotal(total, -.999 * j[i]);
          }
        }
        if (val = callback(data, fn(e, total)), !condaEnvsObservable(condaInfoObservable(value = callback(result, f(t, val)), 0))) {
          return {
            solution : data,
            message : "",
            iterations : i
          };
        }
        if (data = val, y < k) {
          return {
            solution : val,
            message : "",
            iterations : i
          };
        }
        if (isKanban) {
          var d = f(o, x);
          var r = f(t, x);
          /** @type {boolean} */
          _ = true;
          /** @type {number} */
          i = rows - 1;
          for (; -1 !== i; --i) {
            if (d * r[i] < 0) {
              /** @type {boolean} */
              _ = false;
              break;
            }
          }
        } else {
          /** @type {boolean} */
          _ = !(data[l - 1] >= 0);
        }
        if (_) {
          return {
            solution : val,
            message : "Unbounded",
            iterations : i
          };
        }
      }
      return {
        solution : data,
        message : "maximum iteration count exceeded",
        iterations : i
      };
    };
    /**
     * @param {!Object} value
     * @param {!Array} i
     * @param {string} a
     * @param {number} callback
     * @param {number} undefined
     * @return {?}
     */
    numeric$jscomp$0._solveLP = function(value, i, a, callback, undefined) {
      var arity = value.length;
      var startLen = a.length;
      var add = (numeric$jscomp$0.sum, numeric$jscomp$0.log, numeric$jscomp$0.mul, numeric$jscomp$0.sub);
      /** @type {function(number, number): ?} */
      var scale = numeric$jscomp$0.dot;
      var ss = (numeric$jscomp$0.div, numeric$jscomp$0.add, numeric$jscomp$0.rep([arity], 0).concat([1]));
      var l = numeric$jscomp$0.rep([startLen, 1], -1);
      var d = numeric$jscomp$0.blockMatrix([[i, l]]);
      /** @type {string} */
      var expected = a;
      var fn = numeric$jscomp$0.rep([arity], 0).concat(Math.max(0, numeric$jscomp$0.sup(numeric$jscomp$0.neg(a))) + 1);
      var result = numeric$jscomp$0.__solveLP(ss, d, expected, callback, undefined, fn, false);
      var n = numeric$jscomp$0.clone(result.solution);
      if (n.length = arity, numeric$jscomp$0.inf(add(a, scale(i, n))) < 0) {
        return {
          solution : NaN,
          message : "Infeasible",
          iterations : result.iterations
        };
      }
      var args = numeric$jscomp$0.__solveLP(value, i, a, callback, undefined - result.iterations, n, true);
      return args.iterations += result.iterations, args;
    };
    /**
     * @param {!Object} obj
     * @param {!Array} context
     * @param {undefined} f
     * @param {!Array} a
     * @param {undefined} item
     * @param {number} options
     * @param {number} undefined
     * @return {?}
     */
    numeric$jscomp$0.solveLP = function(obj, context, f, a, item, options, undefined) {
      if (void 0 === undefined && (undefined = 1E3), void 0 === options && (options = numeric$jscomp$0.epsilon), void 0 === a) {
        return numeric$jscomp$0._solveLP(obj, context, f, options, undefined);
      }
      var i;
      var startLen = a.length;
      var newLen = a[0].length;
      var cl = context.length;
      var node = numeric$jscomp$0.echelonize(a);
      var yFields = numeric$jscomp$0.rep([newLen], 0);
      var fields = node.P;
      /** @type {!Array} */
      var args = [];
      /** @type {number} */
      i = fields.length - 1;
      for (; -1 !== i; --i) {
        /** @type {number} */
        yFields[fields[i]] = 1;
      }
      /** @type {number} */
      i = newLen - 1;
      for (; -1 !== i; --i) {
        if (0 === yFields[i]) {
          args.push(i);
        }
      }
      /** @type {function(!Array, !Array, !Array): ?} */
      var assign = numeric$jscomp$0.getRange;
      var props = numeric$jscomp$0.linspace(0, startLen - 1);
      var offset = numeric$jscomp$0.linspace(0, cl - 1);
      var x = assign(a, props, args);
      var res = assign(context, offset, fields);
      var value = assign(context, offset, args);
      /** @type {function(number, number): ?} */
      var map = numeric$jscomp$0.dot;
      var cb = numeric$jscomp$0.sub;
      var template = map(res, node.I);
      var d = cb(value, map(template, x));
      var pattern = cb(f, map(template, item));
      /** @type {!Array} */
      var result = Array(fields.length);
      /** @type {!Array} */
      var data = Array(args.length);
      /** @type {number} */
      i = fields.length - 1;
      for (; -1 !== i; --i) {
        result[i] = obj[fields[i]];
      }
      /** @type {number} */
      i = args.length - 1;
      for (; -1 !== i; --i) {
        data[i] = obj[args[i]];
      }
      var callback = cb(data, map(result, map(node.I, x)));
      var opts = numeric$jscomp$0._solveLP(callback, d, pattern, options, undefined);
      var json = opts.solution;
      if (json != json) {
        return opts;
      }
      var entries = map(node.I, cb(item, map(x, json)));
      /** @type {!Array} */
      var ret = Array(obj.length);
      /** @type {number} */
      i = fields.length - 1;
      for (; -1 !== i; --i) {
        ret[fields[i]] = entries[i];
      }
      /** @type {number} */
      i = args.length - 1;
      for (; -1 !== i; --i) {
        ret[args[i]] = json[i];
      }
      return {
        solution : ret,
        message : opts.message,
        iterations : opts.iterations
      };
    };
    /**
     * @param {string} e
     * @return {?}
     */
    numeric$jscomp$0.MPStoLP = function(e) {
      /**
       * @param {string} i
       * @return {?}
       */
      function createFilter(i) {
        throw new Error("MPStoLP: " + i + "\nLine " + j + ": " + e[j] + "\nCurrent state: " + watched[k] + "\n");
      }
      if (e instanceof String) {
        e.split("\n");
      }
      var j;
      var i;
      var key;
      var quote;
      /** @type {number} */
      var k = 0;
      /** @type {!Array} */
      var watched = ["Initial state", "NAME", "ROWS", "COLUMNS", "RHS", "BOUNDS", "ENDATA"];
      var s = e.length;
      /** @type {number} */
      var c = 0;
      var ret = {};
      /** @type {!Array} */
      var rect = [];
      /** @type {number} */
      var type = 0;
      var result = {};
      /** @type {number} */
      var method = 0;
      /** @type {!Array} */
      var object = [];
      /** @type {!Array} */
      var m = [];
      /** @type {!Array} */
      var TEST = [];
      /** @type {number} */
      j = 0;
      for (; j < s; ++j) {
        var values = (key = e[j]).match(/\S*/g);
        /** @type {!Array} */
        var str = [];
        /** @type {number} */
        i = 0;
        for (; i < values.length; ++i) {
          if ("" !== values[i]) {
            str.push(values[i]);
          }
        }
        if (0 !== str.length) {
          /** @type {number} */
          i = 0;
          for (; i < watched.length && key.substr(0, watched[i].length) !== watched[i]; ++i) {
          }
          if (i < watched.length) {
            if (k = i, 1 === i && (quote = str[1]), 6 === i) {
              return {
                name : quote,
                c : object,
                A : numeric$jscomp$0.transpose(m),
                b : TEST,
                rows : ret,
                vars : result
              };
            }
          } else {
            switch(k) {
              case 0:
              case 1:
                createFilter("Unexpected line");
              case 2:
                switch(str[0]) {
                  case "N":
                    if (0 === c) {
                      c = str[1];
                    } else {
                      createFilter("Two or more N rows");
                    }
                    break;
                  case "L":
                    /** @type {number} */
                    ret[str[1]] = type;
                    /** @type {number} */
                    rect[type] = 1;
                    /** @type {number} */
                    TEST[type] = 0;
                    ++type;
                    break;
                  case "G":
                    /** @type {number} */
                    ret[str[1]] = type;
                    /** @type {number} */
                    rect[type] = -1;
                    /** @type {number} */
                    TEST[type] = 0;
                    ++type;
                    break;
                  case "E":
                    /** @type {number} */
                    ret[str[1]] = type;
                    /** @type {number} */
                    rect[type] = 0;
                    /** @type {number} */
                    TEST[type] = 0;
                    ++type;
                    break;
                  default:
                    createFilter("Parse error " + numeric$jscomp$0.prettyPrint(str));
                }break;
              case 3:
                if (!result.hasOwnProperty(str[0])) {
                  /** @type {number} */
                  result[str[0]] = method;
                  /** @type {number} */
                  object[method] = 0;
                  m[method] = numeric$jscomp$0.rep([type], 0);
                  ++method;
                }
                var name = result[str[0]];
                /** @type {number} */
                i = 1;
                for (; i < str.length; i = i + 2) {
                  if (str[i] !== c) {
                    var key = ret[str[i]];
                    /** @type {number} */
                    m[name][key] = (rect[key] < 0 ? -1 : 1) * parseFloat(str[i + 1]);
                  } else {
                    /** @type {number} */
                    object[name] = parseFloat(str[i + 1]);
                  }
                }
                break;
              case 4:
                /** @type {number} */
                i = 1;
                for (; i < str.length; i = i + 2) {
                  /** @type {number} */
                  TEST[ret[str[i]]] = (rect[ret[str[i]]] < 0 ? -1 : 1) * parseFloat(str[i + 1]);
                }
                break;
              case 5:
                break;
              case 6:
                createFilter("Internal error");
            }
          }
        }
      }
      createFilter("Reached end of file without ENDATA");
    };
    numeric$jscomp$0.seedrandom = {
      pow : Math.pow,
      random : Math.random
    };
    (function(p, n, j, addedRenderer, i, result, v) {
      /**
       * @param {string} key
       * @return {undefined}
       */
      function ARC4(key) {
        var s;
        var left;
        var a = this;
        var keylen = key.length;
        /** @type {number} */
        var i = 0;
        /** @type {number} */
        var l = a.i = a.j = a.m = 0;
        /** @type {!Array} */
        a.S = [];
        /** @type {!Array} */
        a.c = [];
        if (!keylen) {
          /** @type {!Array} */
          key = [keylen++];
        }
        for (; i < j;) {
          /** @type {number} */
          a.S[i] = i++;
        }
        /** @type {number} */
        i = 0;
        for (; i < j; i++) {
          l = g(l + (s = a.S[i]) + key[i % keylen]);
          left = a.S[l];
          a.S[i] = left;
          a.S[l] = s;
        }
        /**
         * @param {string} val
         * @return {?}
         */
        a.g = function(val) {
          var h = a.S;
          var k = g(a.i + 1);
          var l = h[k];
          var m = g(a.j + l);
          var o = h[m];
          h[k] = o;
          h[m] = l;
          var r = h[g(l + o)];
          for (; --val;) {
            k = g(k + 1);
            o = h[m = g(m + (l = h[k]))];
            h[k] = o;
            h[m] = l;
            r = r * j + h[g(l + o)];
          }
          return a.i = k, a.j = m, r;
        };
        a.g(j);
      }
      /**
       * @param {string} b
       * @param {!Array} c
       * @param {number} d
       * @param {number} a
       * @return {?}
       */
      function s(b, c, d, a) {
        /** @type {string} */
        b = b + "";
        /** @type {number} */
        d = 0;
        /** @type {number} */
        a = 0;
        for (; a < b.length; a++) {
          c[g(a)] = g((d = d ^ 19 * c[g(a)]) + b.charCodeAt(a));
        }
        for (a in b = "", c) {
          /** @type {string} */
          b = b + String.fromCharCode(c[a]);
        }
        return b;
      }
      /**
       * @param {number} b
       * @return {?}
       */
      function g(b) {
        return b & j - 1;
      }
      /**
       * @param {string} b
       * @param {string} c
       * @return {?}
       */
      n.seedrandom = function(b, c) {
        var arc4;
        /** @type {!Array} */
        var key = [];
        return b = s(function parse(value, node, options, prop, type) {
          /** @type {!Array} */
          options = [];
          type = void 0 === value ? "undefined" : _typeof$jscomp$0(value);
          if (node && "object" == type) {
            for (prop in value) {
              if (prop.indexOf("S") < 5) {
                try {
                  options.push(parse(value[prop], node - 1));
                } catch (e) {
                }
              }
            }
          }
          return options.length ? options : value + ("string" != type ? "\x00" : "");
        }(c ? [b, p] : arguments.length ? b : [(new Date).getTime(), p, window], 3), key), s((arc4 = new ARC4(key)).S, p), n.random = function() {
          var f = arc4.g(6);
          var e = v;
          /** @type {number} */
          var i = 0;
          for (; f < i;) {
            /** @type {number} */
            f = (f + i) * j;
            /** @type {number} */
            e = e * j;
            i = arc4.g(1);
          }
          for (; f >= result;) {
            /** @type {number} */
            f = f / 2;
            /** @type {number} */
            e = e / 2;
            /** @type {number} */
            i = i >>> 1;
          }
          return (f + i) / e;
        }, b;
      };
      /** @type {number} */
      v = n.pow(j, 6);
      /** @type {number} */
      i = n.pow(2, i);
      /** @type {number} */
      result = 2 * i;
      s(n.random(), p);
    })([], numeric$jscomp$0.seedrandom, 256, 0, 52);
    (function(canCreateDiscussions) {
      /**
       * @param {?} value
       * @return {?}
       */
      function parse(value) {
        if ("object" !== (void 0 === value ? "undefined" : _typeof$jscomp$0(value))) {
          return value;
        }
        var j;
        /** @type {!Array} */
        var buffer = [];
        var valueLength = value.length;
        /** @type {number} */
        j = 0;
        for (; j < valueLength; j++) {
          buffer[j + 1] = parse(value[j]);
        }
        return buffer;
      }
      /**
       * @param {!Array} value
       * @return {?}
       */
      function func(value) {
        if ("object" !== (void 0 === value ? "undefined" : _typeof$jscomp$0(value))) {
          return value;
        }
        var j;
        /** @type {!Array} */
        var memo = [];
        var valueLength = value.length;
        /** @type {number} */
        j = 1;
        for (; j < valueLength; j++) {
          memo[j - 1] = func(value[j]);
        }
        return memo;
      }
      /**
       * @param {!Array} list
       * @param {!Array} input
       * @param {number} context
       * @param {number} x
       * @param {!Array} data
       * @param {!Object} component
       * @param {!Array} options
       * @param {!Array} o
       * @param {number} u
       * @param {number} d
       * @param {number} s
       * @param {!Array} v
       * @param {number} l
       * @param {!Array} message
       * @param {!Array} args
       * @param {string} onSuccess
       * @return {?}
       */
      function select(list, input, context, x, data, component, options, o, u, d, s, v, l, message, args, onSuccess) {
        /**
         * @return {?}
         */
        function callback() {
          message[1] = message[1] + 1;
          index = total;
          /** @type {number} */
          i = 1;
          for (; i <= d; i = i + 1) {
            index = index + 1;
            /** @type {number} */
            value = -o[i];
            /** @type {number} */
            j = 1;
            for (; j <= x; j = j + 1) {
              /** @type {number} */
              value = value + options[j][i] * data[j];
            }
            if (Math.abs(value) < num && (value = 0), i > s) {
              /** @type {number} */
              args[index] = value;
            } else {
              if (args[index] = -Math.abs(value), value > 0) {
                /** @type {number} */
                j = 1;
                for (; j <= x; j = j + 1) {
                  /** @type {number} */
                  options[j][i] = -options[j][i];
                }
                /** @type {number} */
                o[i] = -o[i];
              }
            }
          }
          /** @type {number} */
          i = 1;
          for (; i <= l; i = i + 1) {
            /** @type {number} */
            args[total + v[i]] = 0;
          }
          /** @type {number} */
          idx = 0;
          /** @type {number} */
          temp = 0;
          /** @type {number} */
          i = 1;
          for (; i <= d; i = i + 1) {
            if (args[total + i] < temp * args[input + i]) {
              /** @type {number} */
              idx = i;
              /** @type {number} */
              temp = args[total + i] / args[input + i];
            }
          }
          return 0 === idx ? 999 : 0;
        }
        /**
         * @return {?}
         */
        function f() {
          /** @type {number} */
          i = 1;
          for (; i <= x; i = i + 1) {
            /** @type {number} */
            value = 0;
            /** @type {number} */
            j = 1;
            for (; j <= x; j = j + 1) {
              /** @type {number} */
              value = value + list[j][i] * options[j][idx];
            }
            /** @type {number} */
            args[i] = value;
          }
          n = start;
          /** @type {number} */
          i = 1;
          for (; i <= x; i = i + 1) {
            /** @type {number} */
            args[n + i] = 0;
          }
          j = l + 1;
          for (; j <= x; j = j + 1) {
            /** @type {number} */
            i = 1;
            for (; i <= x; i = i + 1) {
              args[n + i] = args[n + i] + list[i][j] * args[j];
            }
          }
          /** @type {boolean} */
          O = true;
          i = l;
          for (; i >= 1; i = i - 1) {
            value = args[i];
            /** @type {number} */
            n = (index = noCourseIndex + i * (i + 3) / 2) - i;
            j = i + 1;
            for (; j <= l; j = j + 1) {
              /** @type {number} */
              value = value - args[index] * args[key + j];
              index = index + j;
            }
            if (value = value / args[n], args[key + i] = value, v[i] < s) {
              break;
            }
            if (value < 0) {
              break;
            }
            /** @type {boolean} */
            O = false;
            k = i;
          }
          if (!O) {
            /** @type {number} */
            s = args[a + k] / args[key + k];
            /** @type {number} */
            i = 1;
            for (; i <= l && !(v[i] < s) && !(args[key + i] < 0); i = i + 1) {
              if ((temp = args[a + i] / args[key + i]) < s) {
                /** @type {number} */
                s = temp;
                /** @type {number} */
                k = i;
              }
            }
          }
          /** @type {number} */
          value = 0;
          i = start + 1;
          for (; i <= start + x; i = i + 1) {
            /** @type {number} */
            value = value + args[i] * args[i];
          }
          if (Math.abs(value) <= num) {
            if (O) {
              return onSuccess[1] = 1, 999;
            }
            /** @type {number} */
            i = 1;
            for (; i <= l; i = i + 1) {
              /** @type {number} */
              args[a + i] = args[a + i] - s * args[key + i];
            }
            return args[a + l + 1] = args[a + l + 1] + s, 700;
          }
          /** @type {number} */
          value = 0;
          /** @type {number} */
          i = 1;
          for (; i <= x; i = i + 1) {
            /** @type {number} */
            value = value + args[start + i] * options[i][idx];
          }
          /** @type {number} */
          result = -args[total + idx] / value;
          /** @type {boolean} */
          U = true;
          if (!O) {
            if (s < result) {
              /** @type {number} */
              result = s;
              /** @type {boolean} */
              U = false;
            }
          }
          /** @type {number} */
          i = 1;
          for (; i <= x; i = i + 1) {
            data[i] = data[i] + result * args[start + i];
            if (Math.abs(data[i]) < num) {
              /** @type {number} */
              data[i] = 0;
            }
          }
          component[1] = component[1] + result * value * (result / 2 + args[a + l + 1]);
          /** @type {number} */
          i = 1;
          for (; i <= l; i = i + 1) {
            /** @type {number} */
            args[a + i] = args[a + i] - result * args[key + i];
          }
          if (args[a + l + 1] = args[a + l + 1] + result, !U) {
            /** @type {number} */
            value = -o[idx];
            /** @type {number} */
            j = 1;
            for (; j <= x; j = j + 1) {
              /** @type {number} */
              value = value + data[j] * options[j][idx];
            }
            if (idx > s) {
              /** @type {number} */
              args[total + idx] = value;
            } else {
              if (args[total + idx] = -Math.abs(value), value > 0) {
                /** @type {number} */
                j = 1;
                for (; j <= x; j = j + 1) {
                  /** @type {number} */
                  options[j][idx] = -options[j][idx];
                }
                /** @type {number} */
                o[idx] = -o[idx];
              }
            }
            return 700;
          }
          v[l = l + 1] = idx;
          index = noCourseIndex + (l - 1) * l / 2 + 1;
          /** @type {number} */
          i = 1;
          for (; i <= l - 1; i = i + 1) {
            args[index] = args[i];
            index = index + 1;
          }
          if (l === x) {
            args[index] = args[x];
          } else {
            /** @type {number} */
            i = x;
            for (; i >= l + 1 && 0 !== args[i] && (gc = Math.max(Math.abs(args[i - 1]), Math.abs(args[i])), gs = Math.min(Math.abs(args[i - 1]), Math.abs(args[i])), temp = args[i - 1] >= 0 ? Math.abs(gc * Math.sqrt(1 + gs * gs / (gc * gc))) : -Math.abs(gc * Math.sqrt(1 + gs * gs / (gc * gc))), gc = args[i - 1] / temp, gs = args[i] / temp, 1 !== gc); i = i - 1) {
              if (0 === gc) {
                /** @type {number} */
                args[i - 1] = gs * temp;
                /** @type {number} */
                j = 1;
                for (; j <= x; j = j + 1) {
                  temp = list[j][i - 1];
                  list[j][i - 1] = list[j][i];
                  list[j][i] = temp;
                }
              } else {
                /** @type {number} */
                args[i - 1] = temp;
                /** @type {number} */
                nu = gs / (1 + gc);
                /** @type {number} */
                j = 1;
                for (; j <= x; j = j + 1) {
                  /** @type {number} */
                  temp = gc * list[j][i - 1] + gs * list[j][i];
                  /** @type {number} */
                  list[j][i] = nu * (list[j][i - 1] + temp) - list[j][i];
                  /** @type {number} */
                  list[j][i - 1] = temp;
                }
              }
            }
            args[index] = args[l];
          }
          return 0;
        }
        /**
         * @return {?}
         */
        function select() {
          if (0 === args[n = (index = noCourseIndex + k * (k + 1) / 2 + 1) + k]) {
            return 798;
          }
          if (gc = Math.max(Math.abs(args[n - 1]), Math.abs(args[n])), gs = Math.min(Math.abs(args[n - 1]), Math.abs(args[n])), temp = args[n - 1] >= 0 ? Math.abs(gc * Math.sqrt(1 + gs * gs / (gc * gc))) : -Math.abs(gc * Math.sqrt(1 + gs * gs / (gc * gc))), gc = args[n - 1] / temp, gs = args[n] / temp, 1 === gc) {
            return 798;
          }
          if (0 === gc) {
            i = k + 1;
            for (; i <= l; i = i + 1) {
              temp = args[n - 1];
              args[n - 1] = args[n];
              args[n] = temp;
              n = n + i;
            }
            /** @type {number} */
            i = 1;
            for (; i <= x; i = i + 1) {
              temp = list[i][k];
              list[i][k] = list[i][k + 1];
              list[i][k + 1] = temp;
            }
          } else {
            /** @type {number} */
            nu = gs / (1 + gc);
            i = k + 1;
            for (; i <= l; i = i + 1) {
              /** @type {number} */
              temp = gc * args[n - 1] + gs * args[n];
              /** @type {number} */
              args[n] = nu * (args[n - 1] + temp) - args[n];
              /** @type {number} */
              args[n - 1] = temp;
              n = n + i;
            }
            /** @type {number} */
            i = 1;
            for (; i <= x; i = i + 1) {
              /** @type {number} */
              temp = gc * list[i][k] + gs * list[i][k + 1];
              /** @type {number} */
              list[i][k + 1] = nu * (list[i][k] + temp) - list[i][k + 1];
              /** @type {number} */
              list[i][k] = temp;
            }
          }
          return 0;
        }
        /**
         * @return {?}
         */
        function join() {
          /** @type {number} */
          n = index - k;
          /** @type {number} */
          i = 1;
          for (; i <= k; i = i + 1) {
            args[n] = args[index];
            index = index + 1;
            /** @type {number} */
            n = n + 1;
          }
          return args[a + k] = args[a + k + 1], v[k] = v[k + 1], (k = k + 1) < l ? 797 : 0;
        }
        /**
         * @return {?}
         */
        function NormalStatement() {
          return args[a + l] = args[a + l + 1], args[a + l + 1] = 0, v[l] = 0, l = l - 1, message[2] = message[2] + 1, 0;
        }
        var i;
        var j;
        var index;
        var n;
        var NINETY_EIGHT_HOURS;
        var k;
        var start;
        var key;
        var noCourseIndex;
        var total;
        var a;
        var idx;
        var r;
        var input;
        var temp;
        var value;
        var s;
        var result;
        var gc;
        var gs;
        var nu;
        var O;
        var U;
        var num;
        var fileSizeLimitation;
        var size;
        var ret;
        /** @type {number} */
        r = Math.min(x, d);
        /** @type {number} */
        index = 2 * x + r * (r + 5) / 2 + 2 * d + 1;
        /** @type {number} */
        num = 1E-60;
        do {
          /** @type {number} */
          fileSizeLimitation = 1 + .1 * (num = num + num);
          /** @type {number} */
          size = 1 + .2 * num;
        } while (fileSizeLimitation <= 1 || size <= 1);
        /** @type {number} */
        i = 1;
        for (; i <= x; i = i + 1) {
          args[i] = input[i];
        }
        i = x + 1;
        for (; i <= index; i = i + 1) {
          /** @type {number} */
          args[i] = 0;
        }
        /** @type {number} */
        i = 1;
        for (; i <= d; i = i + 1) {
          /** @type {number} */
          v[i] = 0;
        }
        if (NINETY_EIGHT_HOURS = [], 0 === onSuccess[1]) {
          if (function(elements, addedRenderer, n, i) {
            var k;
            var j;
            var i0;
            var i;
            var dx;
            var x;
            /** @type {number} */
            j = 1;
            for (; j <= n; j = j + 1) {
              if (i[1] = j, x = 0, (i0 = j - 1) < 1) {
                if ((x = elements[j][j] - x) <= 0) {
                  break;
                }
                /** @type {number} */
                elements[j][j] = Math.sqrt(x);
              } else {
                /** @type {number} */
                i = 1;
                for (; i <= i0; i = i + 1) {
                  dx = elements[i][j];
                  /** @type {number} */
                  k = 1;
                  for (; k < i; k = k + 1) {
                    /** @type {number} */
                    dx = dx - elements[k][j] * elements[k][i];
                  }
                  /** @type {number} */
                  dx = dx / elements[i][i];
                  elements[i][j] = dx;
                  /** @type {number} */
                  x = x + dx * dx;
                }
                if ((x = elements[j][j] - x) <= 0) {
                  break;
                }
                /** @type {number} */
                elements[j][j] = Math.sqrt(x);
              }
              /** @type {number} */
              i[1] = 0;
            }
          }(list, 0, x, NINETY_EIGHT_HOURS), 0 !== NINETY_EIGHT_HOURS[1]) {
            return void(onSuccess[1] = 2);
          }
          !function(l, addedRenderer, start, a) {
            var j;
            var i;
            var s;
            var t;
            /** @type {number} */
            i = 1;
            for (; i <= start; i = i + 1) {
              /** @type {number} */
              t = 0;
              /** @type {number} */
              j = 1;
              for (; j < i; j = j + 1) {
                /** @type {number} */
                t = t + l[j][i] * a[j];
              }
              /** @type {number} */
              a[i] = (a[i] - t) / l[i][i];
            }
            /** @type {number} */
            s = 1;
            for (; s <= start; s = s + 1) {
              /** @type {number} */
              a[i = start + 1 - s] = a[i] / l[i][i];
              /** @type {number} */
              t = -a[i];
              /** @type {number} */
              j = 1;
              for (; j < i; j = j + 1) {
                a[j] = a[j] + t * l[j][i];
              }
            }
          }(list, 0, x, input);
          (function(data, addedRenderer, idx) {
            var j;
            var index;
            var i;
            var len;
            var c;
            /** @type {number} */
            i = 1;
            for (; i <= idx; i = i + 1) {
              /** @type {number} */
              data[i][i] = 1 / data[i][i];
              /** @type {number} */
              c = -data[i][i];
              /** @type {number} */
              j = 1;
              for (; j < i; j = j + 1) {
                /** @type {number} */
                data[j][i] = c * data[j][i];
              }
              if (idx < (len = i + 1)) {
                break;
              }
              /** @type {number} */
              index = len;
              for (; index <= idx; index = index + 1) {
                c = data[i][index];
                /** @type {number} */
                data[i][index] = 0;
                /** @type {number} */
                j = 1;
                for (; j <= i; j = j + 1) {
                  data[j][index] = data[j][index] + c * data[j][i];
                }
              }
            }
          })(list, 0, x);
        } else {
          /** @type {number} */
          j = 1;
          for (; j <= x; j = j + 1) {
            /** @type {number} */
            data[j] = 0;
            /** @type {number} */
            i = 1;
            for (; i <= j; i = i + 1) {
              data[j] = data[j] + list[i][j] * input[i];
            }
          }
          /** @type {number} */
          j = 1;
          for (; j <= x; j = j + 1) {
            /** @type {number} */
            input[j] = 0;
            i = j;
            for (; i <= x; i = i + 1) {
              input[j] = input[j] + list[j][i] * data[i];
            }
          }
        }
        /** @type {number} */
        component[1] = 0;
        /** @type {number} */
        j = 1;
        for (; j <= x; j = j + 1) {
          data[j] = input[j];
          component[1] = component[1] + args[j] * data[j];
          /** @type {number} */
          args[j] = 0;
          i = j + 1;
          for (; i <= x; i = i + 1) {
            /** @type {number} */
            list[i][j] = 0;
          }
        }
        /** @type {number} */
        component[1] = -component[1] / 2;
        /** @type {number} */
        onSuccess[1] = 0;
        input = (total = (noCourseIndex = (a = (key = (start = x) + x) + r) + r + 1) + r * (r + 1) / 2) + d;
        /** @type {number} */
        i = 1;
        for (; i <= d; i = i + 1) {
          /** @type {number} */
          value = 0;
          /** @type {number} */
          j = 1;
          for (; j <= x; j = j + 1) {
            value = value + options[j][i] * options[j][i];
          }
          /** @type {number} */
          args[input + i] = Math.sqrt(value);
        }
        /** @type {number} */
        l = 0;
        /** @type {number} */
        message[1] = 0;
        /** @type {number} */
        message[2] = 0;
        /** @type {number} */
        ret = 0;
        for (;;) {
          if (999 === (ret = callback())) {
            return;
          }
          for (; 0 !== (ret = f());) {
            if (999 === ret) {
              return;
            }
            if (700 === ret) {
              if (k === l) {
                NormalStatement();
              } else {
                for (; select(), 797 === (ret = join());) {
                }
                NormalStatement();
              }
            }
          }
        }
      }
      /**
       * @param {!Array} data
       * @param {!Array} value
       * @param {!Array} a
       * @param {!Array} b
       * @param {number} o
       * @param {string} s
       * @return {?}
       */
      numeric$jscomp$0.solveQP = function(data, value, a, b, o, s) {
        data = parse(data);
        value = parse(value);
        a = parse(a);
        var i;
        var limit;
        var end;
        var chunk;
        var messageError;
        /** @type {!Array} */
        var x = [];
        /** @type {!Array} */
        var m = [];
        /** @type {!Array} */
        var xml = [];
        /** @type {!Array} */
        var sequenceSeed = [];
        /** @type {!Array} */
        var args = [];
        if (o = o || 0, s = s ? parse(s) : [void 0, 0], b = b ? parse(b) : [], limit = data.length - 1, end = a[1].length - 1, !b) {
          /** @type {number} */
          i = 1;
          for (; i <= end; i = i + 1) {
            /** @type {number} */
            b[i] = 0;
          }
        }
        /** @type {number} */
        i = 1;
        for (; i <= end; i = i + 1) {
          /** @type {number} */
          m[i] = 0;
        }
        /** @type {number} */
        chunk = Math.min(limit, end);
        /** @type {number} */
        i = 1;
        for (; i <= limit; i = i + 1) {
          /** @type {number} */
          xml[i] = 0;
        }
        /** @type {number} */
        x[1] = 0;
        /** @type {number} */
        i = 1;
        for (; i <= 2 * limit + chunk * (chunk + 5) / 2 + 2 * end + 1; i = i + 1) {
          /** @type {number} */
          sequenceSeed[i] = 0;
        }
        /** @type {number} */
        i = 1;
        for (; i <= 2; i = i + 1) {
          /** @type {number} */
          args[i] = 0;
        }
        return select(data, value, 0, limit, xml, x, a, b, 0, end, o, m, 0, args, sequenceSeed, s), messageError = "", 1 === s[1] && (messageError = "constraints are inconsistent, no solution!"), 2 === s[1] && (messageError = "matrix D in quadratic function is not positive definite!"), {
          solution : func(xml),
          value : func(x),
          unconstrained_solution : func(value),
          iterations : func(args),
          iact : func(m),
          message : messageError
        };
      };
    })();
    /**
     * @param {undefined} a
     * @return {?}
     */
    numeric$jscomp$0.svd = function(a) {
      /**
       * @param {number} b
       * @param {number} a
       * @return {?}
       */
      function pythag(b, a) {
        return (b = Math.abs(b)) > (a = Math.abs(a)) ? b * Math.sqrt(1 + a * a / b / b) : 0 == a ? b : a * Math.sqrt(1 + b * b / a / a);
      }
      var lastPresentValue;
      var prec = numeric$jscomp$0.epsilon;
      /** @type {number} */
      var tolerance = 1E-64 / prec;
      /** @type {number} */
      var c = 0;
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var j = 0;
      /** @type {number} */
      var k = 0;
      /** @type {number} */
      var l = 0;
      var A = numeric$jscomp$0.clone(a);
      var m = A.length;
      var n = A[0].length;
      if (m < n) {
        throw "Need more rows than columns";
      }
      /** @type {!Array} */
      var e = new Array(n);
      /** @type {!Array} */
      var q = new Array(n);
      /** @type {number} */
      i = 0;
      for (; i < n; i++) {
        /** @type {number} */
        e[i] = q[i] = 0;
      }
      var matrix = numeric$jscomp$0.rep([n, n], 0);
      /** @type {number} */
      var f = 0;
      /** @type {number} */
      var g = 0;
      /** @type {number} */
      var h = 0;
      /** @type {number} */
      var x = 0;
      /** @type {number} */
      var y = 0;
      /** @type {number} */
      var z = 0;
      /** @type {number} */
      var s = 0;
      /** @type {number} */
      i = 0;
      for (; i < n; i++) {
        /** @type {number} */
        e[i] = g;
        /** @type {number} */
        s = 0;
        /** @type {number} */
        l = i + 1;
        /** @type {number} */
        j = i;
        for (; j < m; j++) {
          /** @type {number} */
          s = s + A[j][i] * A[j][i];
        }
        if (s <= tolerance) {
          /** @type {number} */
          g = 0;
        } else {
          f = A[i][i];
          /** @type {number} */
          g = Math.sqrt(s);
          if (f >= 0) {
            /** @type {number} */
            g = -g;
          }
          /** @type {number} */
          h = f * g - s;
          /** @type {number} */
          A[i][i] = f - g;
          /** @type {number} */
          j = l;
          for (; j < n; j++) {
            /** @type {number} */
            s = 0;
            /** @type {number} */
            k = i;
            for (; k < m; k++) {
              /** @type {number} */
              s = s + A[k][i] * A[k][j];
            }
            /** @type {number} */
            f = s / h;
            /** @type {number} */
            k = i;
            for (; k < m; k++) {
              A[k][j] += f * A[k][i];
            }
          }
        }
        /** @type {number} */
        q[i] = g;
        /** @type {number} */
        s = 0;
        /** @type {number} */
        j = l;
        for (; j < n; j++) {
          /** @type {number} */
          s = s + A[i][j] * A[i][j];
        }
        if (s <= tolerance) {
          /** @type {number} */
          g = 0;
        } else {
          f = A[i][i + 1];
          /** @type {number} */
          g = Math.sqrt(s);
          if (f >= 0) {
            /** @type {number} */
            g = -g;
          }
          /** @type {number} */
          h = f * g - s;
          /** @type {number} */
          A[i][i + 1] = f - g;
          /** @type {number} */
          j = l;
          for (; j < n; j++) {
            /** @type {number} */
            e[j] = A[i][j] / h;
          }
          /** @type {number} */
          j = l;
          for (; j < m; j++) {
            /** @type {number} */
            s = 0;
            /** @type {number} */
            k = l;
            for (; k < n; k++) {
              /** @type {number} */
              s = s + A[j][k] * A[i][k];
            }
            /** @type {number} */
            k = l;
            for (; k < n; k++) {
              A[j][k] += s * e[k];
            }
          }
        }
        if ((y = Math.abs(q[i]) + Math.abs(e[i])) > x) {
          /** @type {number} */
          x = y;
        }
      }
      /** @type {number} */
      i = n - 1;
      for (; -1 != i; i = i + -1) {
        if (0 != g) {
          /** @type {number} */
          h = g * A[i][i + 1];
          /** @type {number} */
          j = l;
          for (; j < n; j++) {
            /** @type {number} */
            matrix[j][i] = A[i][j] / h;
          }
          /** @type {number} */
          j = l;
          for (; j < n; j++) {
            /** @type {number} */
            s = 0;
            /** @type {number} */
            k = l;
            for (; k < n; k++) {
              /** @type {number} */
              s = s + A[i][k] * matrix[k][j];
            }
            /** @type {number} */
            k = l;
            for (; k < n; k++) {
              matrix[k][j] += s * matrix[k][i];
            }
          }
        }
        /** @type {number} */
        j = l;
        for (; j < n; j++) {
          /** @type {number} */
          matrix[i][j] = 0;
          /** @type {number} */
          matrix[j][i] = 0;
        }
        /** @type {number} */
        matrix[i][i] = 1;
        g = e[i];
        /** @type {number} */
        l = i;
      }
      /** @type {number} */
      i = n - 1;
      for (; -1 != i; i = i + -1) {
        /** @type {number} */
        l = i + 1;
        g = q[i];
        /** @type {number} */
        j = l;
        for (; j < n; j++) {
          /** @type {number} */
          A[i][j] = 0;
        }
        if (0 != g) {
          /** @type {number} */
          h = A[i][i] * g;
          /** @type {number} */
          j = l;
          for (; j < n; j++) {
            /** @type {number} */
            s = 0;
            /** @type {number} */
            k = l;
            for (; k < m; k++) {
              /** @type {number} */
              s = s + A[k][i] * A[k][j];
            }
            /** @type {number} */
            f = s / h;
            /** @type {number} */
            k = i;
            for (; k < m; k++) {
              A[k][j] += f * A[k][i];
            }
          }
          /** @type {number} */
          j = i;
          for (; j < m; j++) {
            /** @type {number} */
            A[j][i] = A[j][i] / g;
          }
        } else {
          /** @type {number} */
          j = i;
          for (; j < m; j++) {
            /** @type {number} */
            A[j][i] = 0;
          }
        }
        A[i][i] += 1;
      }
      /** @type {number} */
      prec = prec * x;
      /** @type {number} */
      k = n - 1;
      for (; -1 != k; k = k + -1) {
        /** @type {number} */
        var S = 0;
        for (; S < 50; S++) {
          /** @type {boolean} */
          var T = false;
          /** @type {number} */
          l = k;
          for (; -1 != l; l = l + -1) {
            if (Math.abs(e[l]) <= prec) {
              /** @type {boolean} */
              T = true;
              break;
            }
            if (Math.abs(q[l - 1]) <= prec) {
              break;
            }
          }
          if (!T) {
            /** @type {number} */
            c = 0;
            /** @type {number} */
            s = 1;
            /** @type {number} */
            var k = l - 1;
            /** @type {number} */
            i = l;
            for (; i < k + 1 && (f = s * e[i], e[i] = c * e[i], !(Math.abs(f) <= prec)); i++) {
              h = pythag(f, g = q[i]);
              q[i] = h;
              /** @type {number} */
              c = g / h;
              /** @type {number} */
              s = -f / h;
              /** @type {number} */
              j = 0;
              for (; j < m; j++) {
                y = A[j][k];
                z = A[j][i];
                /** @type {number} */
                A[j][k] = y * c + z * s;
                /** @type {number} */
                A[j][i] = -y * s + z * c;
              }
            }
          }
          if (z = q[k], l == k) {
            if (z < 0) {
              /** @type {number} */
              q[k] = -z;
              /** @type {number} */
              j = 0;
              for (; j < n; j++) {
                /** @type {number} */
                matrix[j][k] = -matrix[j][k];
              }
            }
            break;
          }
          if (S >= 49) {
            throw "Error: no convergence.";
          }
          x = q[l];
          g = pythag(f = (((y = q[k - 1]) - z) * (y + z) + ((g = e[k - 1]) - (h = e[k])) * (g + h)) / (2 * h * y), 1);
          /** @type {number} */
          f = f < 0 ? ((x - z) * (x + z) + h * (y / (f - g) - h)) / x : ((x - z) * (x + z) + h * (y / (f + g) - h)) / x;
          /** @type {number} */
          c = 1;
          /** @type {number} */
          s = 1;
          /** @type {number} */
          i = l + 1;
          for (; i < k + 1; i++) {
            g = e[i];
            y = q[i];
            /** @type {number} */
            h = s * g;
            /** @type {number} */
            g = g * c;
            z = pythag(f, h);
            e[i - 1] = z;
            /** @type {number} */
            f = x * (c = f / z) + g * (s = h / z);
            /** @type {number} */
            g = -x * s + g * c;
            /** @type {number} */
            h = y * s;
            /** @type {number} */
            y = y * c;
            /** @type {number} */
            j = 0;
            for (; j < n; j++) {
              x = matrix[j][i - 1];
              z = matrix[j][i];
              /** @type {number} */
              matrix[j][i - 1] = x * c + z * s;
              /** @type {number} */
              matrix[j][i] = -x * s + z * c;
            }
            z = pythag(f, h);
            q[i - 1] = z;
            /** @type {number} */
            f = (c = f / z) * g + (s = h / z) * y;
            /** @type {number} */
            x = -s * g + c * y;
            /** @type {number} */
            j = 0;
            for (; j < m; j++) {
              y = A[j][i - 1];
              z = A[j][i];
              /** @type {number} */
              A[j][i - 1] = y * c + z * s;
              /** @type {number} */
              A[j][i] = -y * s + z * c;
            }
          }
          /** @type {number} */
          e[l] = 0;
          /** @type {number} */
          e[k] = f;
          q[k] = x;
        }
      }
      /** @type {number} */
      i = 0;
      for (; i < q.length; i++) {
        if (q[i] < prec) {
          /** @type {number} */
          q[i] = 0;
        }
      }
      /** @type {number} */
      i = 0;
      for (; i < n; i++) {
        /** @type {number} */
        j = i - 1;
        for (; j >= 0; j--) {
          if (q[j] < q[i]) {
            c = q[j];
            q[j] = q[i];
            q[i] = c;
            /** @type {number} */
            k = 0;
            for (; k < A.length; k++) {
              lastPresentValue = A[k][i];
              A[k][i] = A[k][j];
              A[k][j] = lastPresentValue;
            }
            /** @type {number} */
            k = 0;
            for (; k < matrix.length; k++) {
              lastPresentValue = matrix[k][i];
              matrix[k][i] = matrix[k][j];
              matrix[k][j] = lastPresentValue;
            }
            /** @type {number} */
            i = j;
          }
        }
      }
      return {
        U : A,
        S : q,
        V : matrix
      };
    };
  }).call(this, __webpack_require__$jscomp$1(123));
}, function(module, canCreateDiscussions, n) {
  var g;
  /** @type {function(!Window): ?} */
  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(metaWindow) {
    return typeof metaWindow;
  } : function(obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
  g = function() {
    return this;
  }();
  try {
    g = g || (new Function("return this"))();
  } catch (e) {
    if ("object" === ("undefined" == typeof window ? "undefined" : _typeof(window))) {
      /** @type {!Window} */
      g = window;
    }
  }
  module.exports = g;
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "attribute vec3 position;\n\nuniform float u_time;\nuniform vec2 u_firstUvSs;\n\nvarying vec2 v_velocityUv;\nvarying vec2 v_positionUv;\n\nvoid main() {\n    vec2 uv = position.xy * 0.5 + 0.5;\n    v_velocityUv = vec2(u_firstUvSs.x, uv.y);\n    v_positionUv = vec2(u_firstUvSs.y, uv.y);\n    gl_Position = vec4( position, 1.0 );\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "uniform sampler2D u_velocityTexture;\nuniform sampler2D u_positionTexture;\nuniform float u_noiseKernelSize;\nuniform float u_noiseTime;\nuniform float u_noiseStrength;\nuniform float u_dtRatio;\nuniform float u_initRatio;\nuniform float u_time;\n\n#ifdef IS_PACKED\nuniform sampler2D u_velocityTextureZW;\nuniform sampler2D u_positionTextureZW;\nuniform vec2 u_posPackDividers;\nuniform vec2 u_velPackDividers;\n#include <halfFloatPacking>\n#include <samplePackedFloats>\n#endif\n\nvarying vec2 v_velocityUv;\nvarying vec2 v_positionUv;\n\n#include <curl4Mid>\n\nvoid main () {\n\t#ifndef IS_PACKED\n  vec4 velocityInfo = texture2D(u_velocityTexture, v_velocityUv);\n  vec4 positionInfo = texture2D(u_positionTexture, v_positionUv);\n\t#else\n\t\tvec4 velocityInfo = samplePackedRGBA(u_velocityTexture, u_velocityTextureZW, v_velocityUv, u_velPackDividers.xxxy);\n\t\tvec4 positionInfo = samplePackedRGBA(u_positionTexture, u_positionTextureZW, v_positionUv, u_posPackDividers.xxxy);\n\t#endif\n  positionInfo.a -= 0.001 * u_dtRatio;\n\n  float hasReset = 0.0;\n  if (positionInfo.a + step(u_initRatio, v_positionUv.y) * 10.0 <= 0.0) {\n    velocityInfo = vec4(0.0, 0.0, (v_velocityUv.y - 0.5) * 0.01, 1.0);\n    hasReset = 1.0;\n  }\n  velocityInfo.xyz += curl(positionInfo.xyz * u_noiseKernelSize + 5.0, u_noiseTime, 0.05) * u_noiseStrength * mix(1.0, 10.0, hasReset) * vec3(1.0, 1.0, 0.3);\n  \n\t#ifndef IS_PACKED\n  gl_FragColor = velocityInfo;\n\t#else\n\t\t#ifndef IS_PACK_TO_ZW\n\t\t\tgl_FragColor = vec4(packHalfFloat(velocityInfo.x, u_velPackDividers.x), packHalfFloat(velocityInfo.y, u_velPackDividers.x));\n\t\t#else\n\t\t\tgl_FragColor = vec4(packHalfFloat(velocityInfo.z, u_velPackDividers.x), packHalfFloat(velocityInfo.w, u_velPackDividers.y));\n\t\t#endif\n\t#endif\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "attribute vec3 position;\n\nuniform float u_time;\nuniform vec2 u_firstUvSs;\nuniform vec2 u_neighbourNodeUvSOffsets;\n\nvarying vec2 v_velocityUv;\nvarying vec2 v_positionUv;\nvarying vec2 v_prevNodePositionUv;\n\nvoid main() {\n    vec2 uv = position.xy * 0.5 + 0.5;\n    v_velocityUv = uv;//vec2(u_firstUvSs.x, uv.y);\n    v_positionUv = uv;//vec2(u_firstUvSs.y, uv.y);\n    v_prevNodePositionUv = uv - vec2(u_neighbourNodeUvSOffsets.y, 0.0);\n    gl_Position = vec4( position, 1.0 );\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "uniform sampler2D u_velocityTexture;\nuniform sampler2D u_positionTexture;\nuniform sampler2D u_defaultDataTexture;\n\nuniform vec2 u_screenResolution;\n\nuniform float u_dtRatio;\nuniform float u_initRatio;\nuniform float u_fixedScale;\n\n#ifdef IS_PACKED\nuniform sampler2D u_velocityTextureZW;\nuniform sampler2D u_positionTextureZW;\nuniform sampler2D u_defaultDataTextureZW;\nuniform vec2 u_posPackDividers;\nuniform vec2 u_velPackDividers;\n#include <halfFloatPacking>\n#include <samplePackedFloats>\n#endif\n\nvarying vec2 v_velocityUv;\nvarying vec2 v_positionUv;\nvarying vec2 v_prevNodePositionUv;\n\nvoid main () {\n  float isNotFirstNode = step(1.0, gl_FragCoord.x);\n\t#ifndef IS_PACKED\n\t\tvec4 positionInfo = texture2D(u_positionTexture, v_positionUv);\n\t#else\n\t\tvec4 positionInfo = samplePackedRGBA(u_positionTexture, u_positionTextureZW, v_positionUv, u_posPackDividers.xxxy);\n\t#endif\n  vec4 prevNodePositionInfo;\n  positionInfo.w -= 0.001 * u_dtRatio;\n\n  float needsReset = 0.0;\n\n  if (positionInfo.w + step(u_initRatio, v_positionUv.y) * 10.0 <= 0.0) {\n    needsReset = 1.0;\n    positionInfo.w += 1.0;\n\n\t\t#ifndef IS_PACKED\n\t\t\tvec4 defaultInfo = texture2D(u_defaultDataTexture, v_positionUv);\n\t\t#else\n\t\t\tvec4 defaultInfo = samplePackedRGBA(u_defaultDataTexture, u_defaultDataTextureZW, v_positionUv, u_posPackDividers.xxxy);\n\t\t#endif\n\n    positionInfo.xyz = (defaultInfo.xyz) * (1.0 - v_positionUv.x);\n    positionInfo.xy += (-u_screenResolution * 0.4) * u_fixedScale;\n  } else {\n    if (isNotFirstNode > 0.5) {\n      #ifndef IS_PACKED\n        vec4 prevNodePositionInfo = texture2D(u_positionTexture, v_prevNodePositionUv);\n      #else\n        vec4 prevNodePositionInfo = samplePackedRGBA(u_positionTexture, u_positionTextureZW, v_prevNodePositionUv, u_posPackDividers.xxxy);\n      #endif\n      positionInfo.xyz = mix(prevNodePositionInfo.xyz, positionInfo.xyz, 0.1);\n\n      vec3 delta = positionInfo.xyz - prevNodePositionInfo.xyz;\n      if (length(delta) > 0.0) {\n        positionInfo.xyz = prevNodePositionInfo.xyz + normalize(delta) * mix(0.75, 0.01, clamp(positionInfo.w, 0.0, 1.0));\n      }\n    } else {\n      #ifndef IS_PACKED\n        vec4 velocityInfo = texture2D(u_velocityTexture, v_velocityUv);\n      #else\n        vec4 velocityInfo = samplePackedRGBA(u_velocityTexture, u_velocityTextureZW, v_velocityUv, u_velPackDividers.xxxy);\n      #endif\n\n      positionInfo.xyz += velocityInfo.xyz;\n      positionInfo.xy += vec2(0.03, 0.03);\n    }\n  }\n  positionInfo.xy -= vec2(0.02, 0.02);\n\n\t#ifndef IS_PACKED\n\t\t\tgl_FragColor = positionInfo;\n\t#else\n    vec3 threshold = vec3(u_posPackDividers.x * 0.5 - 1.0);\n    positionInfo.xyz = clamp(positionInfo.xyz, -threshold, threshold);\n  #ifndef IS_PACK_TO_ZW\n\t\t\tgl_FragColor = vec4(packHalfFloat(positionInfo.x, u_posPackDividers.x), packHalfFloat(positionInfo.y, u_posPackDividers.x));\n\t\t#else\n\t\t\tgl_FragColor = vec4(packHalfFloat(positionInfo.z, u_posPackDividers.x), packHalfFloat(positionInfo.w, u_posPackDividers.y));\n\t\t#endif\n\t#endif\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "attribute vec3 position;\nattribute vec2 a_uv;\n\nuniform vec2 u_positionOffset;\nuniform vec2 u_uvOffset;\nuniform vec2 u_neighbourNodeUvOffset;\n\nvarying vec2 v_prevNodeUv;\nvarying vec2 v_nextNodeUv;\n\nvoid main () {\n    vec2 uv = a_uv + u_uvOffset;\n    v_prevNodeUv = uv - u_neighbourNodeUvOffset;\n    v_nextNodeUv = uv + u_neighbourNodeUvOffset;\n    gl_Position = vec4( position.xy + u_positionOffset, 0.0, 1.0 );\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "uniform sampler2D u_positionTexture;\nuniform sampler2D u_rotationTexture;\n\n#ifdef IS_PACKED\nuniform sampler2D u_positionTextureZW;\nuniform vec2 u_posPackDividers;\n#include <halfFloatPacking>\n#include <samplePackedFloats>\n#endif\n\nvarying vec2 v_prevNodeUv;\nvarying vec2 v_nextNodeUv;\n\n#include <encodeNormal>\n#include <decodeNormal>\n\nvoid main () {\n\n\t#ifndef IS_PACKED\n    vec3 prevNodePosition = texture2D(u_positionTexture, v_prevNodeUv).xyz;\n    vec3 nextNodePosition = texture2D(u_positionTexture, v_nextNodeUv).xyz;\n\t#else\n\t\tvec3 prevNodePosition = samplePackedRGBA(u_positionTexture, u_positionTextureZW, v_prevNodeUv, u_posPackDividers.xxxy).xyz;\n\t\tvec3 nextNodePosition = samplePackedRGBA(u_positionTexture, u_positionTextureZW, v_nextNodeUv, u_posPackDividers.xxxy).xyz;\n\t#endif\n\n  vec3 tangent = normalize(prevNodePosition - nextNodePosition);\n\n  #ifdef IS_FIRST_NODE\n    // vec3 binormal = cross(tangent, normalize(prevNodePosition));\n    vec3 binormal = cross(tangent, vec3(0.0, 0.0, 1.0));\n    gl_FragColor = vec4(\n      encodeNormal(tangent), // tangent\n      encodeNormal(binormal) // binormal\n    );\n  #else\n    vec4 prevNodeRotation = texture2D(u_rotationTexture, v_prevNodeUv);\n    vec3 prevNodeBinormal = decodeNormal(prevNodeRotation.zw);\n    vec3 normal = normalize(cross(prevNodeBinormal, tangent));\n    gl_FragColor = vec4(\n      encodeNormal(tangent), // tangent\n      encodeNormal(cross(tangent, normal)) // binormal\n    );\n  #endif\n}\n";
}, function(canCreateDiscussions, self, require) {
  var THREE = require(0);
  var CheckDailyStat = require(3);
  var EffectChain = require(34);
  var TagHourlyStat = require(54);
  var exports = require(4);
  var util = require(2);
  var xtend = require(6);
  /**
   * @param {number} obj
   * @return {undefined}
   */
  self.init = function(obj) {
    /** @type {number} */
    config = obj;
    (function() {
      var len = config.MAX_TUBE_COUNT;
      /** @type {number} */
      var max = config.NODE_COUNT - 1;
      /** @type {number} */
      var n = max + 1;
      /** @type {number} */
      var clientHeight = max + 2;
      /** @type {number} */
      var count = n + 2;
      /** @type {!Float32Array} */
      var barycentric = new Float32Array(4 * count * 3);
      /** @type {!Float32Array} */
      var line_positions = new Float32Array(4 * count);
      /** @type {number} */
      var c = 2 * Math.PI / 4;
      /** @type {number} */
      var page = 0;
      /** @type {number} */
      var signedTransactionsCounter = 0;
      /** @type {number} */
      var tt = 0;
      for (; page < count; page++) {
        var d = util.clamp(page - 1, 0, max);
        /** @type {number} */
        var signedTxHex = (d + .5) / n;
        /** @type {number} */
        var g = 0 === page ? -1 : page === clientHeight ? 1 : 0;
        /** @type {number} */
        var R = 0;
        for (; R < 4; R++) {
          /** @type {number} */
          var d = R * c;
          /** @type {number} */
          barycentric[tt + 0] = 0;
          /** @type {number} */
          barycentric[tt + 1] = Math.sin(d) * (0 === g ? 1 : 0);
          /** @type {number} */
          barycentric[tt + 2] = Math.cos(d) * (0 === g ? 1 : 0);
          /** @type {number} */
          line_positions[signedTransactionsCounter] = signedTxHex;
          signedTransactionsCounter++;
          /** @type {number} */
          tt = tt + 3;
        }
      }
      /** @type {!Uint16Array} */
      var indices = new Uint16Array(4 * clientHeight * 6);
      /** @type {number} */
      var start = 0;
      /** @type {number} */
      var SnippetEnd = 0;
      /** @type {number} */
      var baseIndex = 1;
      /** @type {number} */
      var SnippetStartAndEnd = 4;
      /** @type {number} */
      var corner = 5;
      var length = void 0;
      /** @type {number} */
      var targetOffsetHeight = 0;
      for (; targetOffsetHeight < clientHeight; targetOffsetHeight++) {
        /** @type {number} */
        var C = 0;
        for (; C < 4; C++) {
          /** @type {number} */
          length = 3 === C ? -4 : 0;
          /** @type {number} */
          indices[start + 0] = SnippetEnd;
          /** @type {number} */
          indices[start + 1] = baseIndex + length;
          /** @type {number} */
          indices[start + 2] = SnippetStartAndEnd;
          /** @type {number} */
          indices[start + 3] = baseIndex + length;
          /** @type {number} */
          indices[start + 4] = corner + length;
          /** @type {number} */
          indices[start + 5] = SnippetStartAndEnd;
          SnippetEnd++;
          baseIndex++;
          SnippetStartAndEnd++;
          corner++;
          /** @type {number} */
          start = start + 6;
        }
      }
      /** @type {!Float32Array} */
      var array = new Float32Array(len);
      /** @type {!Float32Array} */
      var buffer = new Float32Array(len);
      /** @type {number} */
      var i = 0;
      for (; i < len; i++) {
        /** @type {number} */
        array[i] = (i + .5) / len;
        /** @type {number} */
        buffer[i] = i % 2;
      }
      (geometry = new THREE.InstancedBufferGeometry).setAttribute("position", new THREE.BufferAttribute(barycentric, 3));
      geometry.setAttribute("a_gpgpuUvS", new THREE.BufferAttribute(line_positions, 1));
      geometry.setIndex(new THREE.BufferAttribute(indices, 1));
      geometry.setAttribute("a_gpgpuUvT", new THREE.InstancedBufferAttribute(array, 1));
      geometry.setAttribute("a_interval", new THREE.InstancedBufferAttribute(buffer, 1));
    })();
    (function() {
      if (material = new THREE.ShaderMaterial({
        uniforms : xtend({
          u_positionTexture : TagHourlyStat.sharedUniforms.u_currPositionTexture,
          u_rotationTexture : TagHourlyStat.sharedUniforms.u_rotationTexture,
          u_radius : {
            value : .15
          },
          u_color0 : {
            value : new THREE.Color
          },
          u_color1 : {
            value : new THREE.Color
          },
          u_lightScatterDivider : EffectChain.sharedUniforms.u_lightScatterDivider,
          u_lightScatterPowInv : EffectChain.sharedUniforms.u_lightScatterPowInv,
          u_cameraPosition : EffectChain.sharedUniforms.u_cameraPosition,
          u_lightPosition : EffectChain.sharedUniforms.u_lightPosition
        }, config.sharedUniforms),
        blending : THREE.NoBlending,
        vertexShader : exports.precisionPrefix + require(131),
        fragmentShader : exports.precisionPrefix + require(132),
        depthTest : true,
        depthWrite : true
      }), CheckDailyStat.useFloatPacking) {
        var uniforms = material.uniforms;
        uniforms.u_positionTextureZW = TagHourlyStat.sharedUniforms.u_currPositionTextureZW;
        uniforms.u_posPackDividers = TagHourlyStat.sharedUniforms.u_posPackDividers;
        /** @type {boolean} */
        material.defines.IS_PACKED = true;
      }
      /** @type {boolean} */
      material.extensions.derivatives = true;
    })();
    self.mesh = new THREE.Mesh(geometry, material);
    /** @type {boolean} */
    self.mesh.frustumCulled = false;
  };
  /**
   * @param {number} fn
   * @return {undefined}
   */
  self.update = function(fn) {
  };
  /**
   * @param {!Object} e
   * @param {!Object} delta
   * @return {undefined}
   */
  self.changeColor = function(e, delta) {
    material.uniforms.u_color0.value.copy(e);
    material.uniforms.u_color1.value.copy(delta);
  };
  /** @type {null} */
  self.mesh = null;
  var geometry = void 0;
  var material = void 0;
  var config = void 0;
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "// attribute vec3 a_color;\n// attribute vec3 a_normal;\nattribute float a_gpgpuUvS;\nattribute float a_gpgpuUvT;\nattribute float a_interval;\n\nuniform float u_radius;\n\nuniform sampler2D u_positionTexture;\nuniform sampler2D u_rotationTexture;\n\n#ifdef IS_PACKED\nuniform sampler2D u_positionTextureZW;\nuniform vec2 u_posPackDividers;\n#include <halfFloatPacking>\n#include <samplePackedFloats>\n#endif\n\nvarying vec3 v_worldPosition;\n\n#include <decodeNormal>\n\nvoid main () {\n  vec2 uv = vec2(a_gpgpuUvS, a_gpgpuUvT);\n\t#ifndef IS_PACKED\n    vec4 positionInfo = texture2D(u_positionTexture, uv);\n\t#else\n\t\tvec4 positionInfo = samplePackedRGBA(u_positionTexture, u_positionTextureZW, uv, u_posPackDividers.xxxy);\n\t#endif\n  vec3 worldPosition = positionInfo.xyz;\n\n  vec4 rot = texture2D(u_rotationTexture, uv);\n  vec3 T = normalize(decodeNormal(rot.xy));\n  vec3 B = normalize(decodeNormal(rot.zw));\n  vec3 N = normalize(cross(T, B));\n\n  mat3 TBN = mat3(T, B, N);\n\n  worldPosition += (TBN * position) * u_radius * (1.0 - smoothstep(0.48, 0.5, abs(positionInfo.w - 0.5) + a_gpgpuUvS * 0.05));\n  v_worldPosition = worldPosition;\n\n  vec4 pos = vec4(worldPosition, 1.0);\n  vec4 modelViewPosition = modelViewMatrix * pos;\n\n  vec3 viewDirection = normalize(-modelViewPosition.xyz);\n  gl_Position = projectionMatrix * modelViewPosition;\n\n  gl_PointSize = 5.0;\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "#include <packing>\n\nuniform vec3 u_color0;\nuniform vec3 u_color1;\nuniform vec3 u_cameraPosition;\nuniform vec3 u_lightPosition;\n\nvarying vec3 v_worldPosition;\n\n#include <getScatter>\n// #include <getScatterLine>\n#include <homeHeroColorRemap>\n\nfloat sdTorus( vec3 p, vec2 t ) {\n  vec2 q = vec2(length(p.xz)-t.x,p.y);\n  return length(q)-t.y;\n}\n\nvoid main () {\n  vec3 worldNormal = cross(normalize(dFdx(v_worldPosition)), normalize(dFdy(v_worldPosition)));\n  vec3 lightToWorld = u_lightPosition - v_worldPosition;\n  vec3 nLightToWorld = normalize(lightToWorld);\n\n  vec3 toCameraWorld = v_worldPosition - u_cameraPosition;\n  vec3 nToCameraWorldDir = normalize(toCameraWorld);\n  float toCameraDist = length(toCameraWorld);\n\n  float scatter = getScatter(u_cameraPosition, nToCameraWorldDir, u_lightPosition, toCameraDist);\n\n  float diffuse = 0.5 + 0.5 * max(0.0, dot(nLightToWorld, worldNormal));\n  float specular = smoothstep(0.3, 1.0, dot(nLightToWorld, reflect(nToCameraWorldDir, worldNormal))) / (1.0 + length(lightToWorld));\n\n  float brightness = diffuse + specular;\n  brightness = brightness * (0.1 + 0.05 * scatter) + scatter;\n\n  gl_FragColor = vec4(homeHeroColorRemap(smoothstep(0.0, 1.0, brightness)), 1.0);\n}\n";
}, function(canCreateDiscussions, uploadManager, require) {
  /**
   * @param {!Object} c
   * @param {?} t
   * @param {?} n
   * @param {?} cm
   * @param {!Object} template
   * @return {undefined}
   */
  function draw(c, t, n, cm, template) {
    var uniforms = template.uniforms;
    uniforms.u_color.value.copy(this.color);
    var result = c.properties.get(template);
    if (result.program) {
      var gl = c.getContext();
      var program = result.program;
      gl.useProgram(program.program);
      program.getUniforms().setValue(gl, "u_color", uniforms.u_color.value);
    }
  }
  var THREE = require(0);
  var TagHourlyStat = require(34);
  var xtend = require(6);
  /**
   * @param {number} obj
   * @return {undefined}
   */
  uploadManager.init = function(obj) {
    /** @type {number} */
    ctx = obj;
    /** @type {number} */
    (ext = uploadManager.container = new THREE.Object3D).rotation.z = Math.random() * Math.PI * 2;
    (self = uploadManager.plane0 = new THREE.Mesh(new THREE.PlaneBufferGeometry(500, 500), new THREE.ShaderMaterial({
      uniforms : xtend({
        u_color : {
          value : new THREE.Color
        },
        u_lightScatterDivider : TagHourlyStat.sharedUniforms.u_lightScatterDivider,
        u_lightScatterPowInv : TagHourlyStat.sharedUniforms.u_lightScatterPowInv,
        u_cameraPosition : TagHourlyStat.sharedUniforms.u_cameraPosition,
        u_lightPosition : TagHourlyStat.sharedUniforms.u_lightPosition
      }, ctx.sharedUniforms),
      vertexShader : require(134),
      fragmentShader : require(135),
      blending : THREE.NoBlending,
      dithering : true
    }))).color = new THREE.Color;
    /** @type {function(!Object, ?, ?, ?, !Object): undefined} */
    self.onBeforeRender = draw;
    self.geometry.translate(-258, 0, 0);
    /** @type {number} */
    self.position.z = -40;
    ext.add(self);
    (me = uploadManager.plane1 = new THREE.Mesh(new THREE.PlaneBufferGeometry(4E3, 4E3), self.material)).color = new THREE.Color;
    me.geometry.translate(0, 0, 0);
    /** @type {function(!Object, ?, ?, ?, !Object): undefined} */
    me.onBeforeRender = draw;
    /** @type {number} */
    me.position.z = -70;
    ext.add(me);
  };
  /** @type {null} */
  var ext = uploadManager.container = null;
  /** @type {null} */
  var self = uploadManager.plane0 = null;
  /** @type {null} */
  var me = uploadManager.plane1 = null;
  var ctx = void 0;
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "varying vec3 v_worldPosition;\n\nvoid main () {\n    v_worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    \n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "\nuniform vec3 u_color;\nuniform vec3 u_cameraPosition;\nuniform vec3 u_lightPosition;\nvarying vec3 v_worldPosition;\n\n#include <getScatter>\n// #include <getScatterLine>\n#include <homeHeroColorRemap>\n#include <common>\n#include <dithering_pars_fragment>\n\nvoid main () {\n    vec3 toCameraWorld = v_worldPosition - u_cameraPosition;\n    vec3 nToCameraWorldDir = normalize(toCameraWorld);\n    float toCameraDist = length(toCameraWorld);\n\n    float scatter = getScatter(u_cameraPosition, nToCameraWorldDir, u_lightPosition, toCameraDist);\n\n    vec3 color = u_color * 0.15 * (0.65 + 0.4 * scatter) + scatter * 0.4;\n\n    gl_FragColor = vec4(dithering(smoothstep(vec3(0.0), vec3(1.0), color)), 1.0);\n\n    gl_FragColor.rgb = homeHeroColorRemap(gl_FragColor.rgb);\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "\nuniform vec3 u_remapLowColorUniform;\nuniform vec3 u_remapMidColorUniform;\nuniform vec3 u_remapHighColorUniform;\n\nvec3 homeHeroColorRemap (vec3 color) {\n  float b = max(max(gl_FragColor.r, gl_FragColor.g), gl_FragColor.b);\n  return b > 0.5 ? mix(u_remapMidColorUniform, u_remapHighColorUniform, b * 2.0 - 1.0) : mix(u_remapLowColorUniform, u_remapMidColorUniform, b * 2.0);\n}\n\nvec3 homeHeroColorRemap (float b) {\n  return b > 0.5 ? mix(u_remapMidColorUniform, u_remapHighColorUniform, b * 2.0 - 1.0) : mix(u_remapLowColorUniform, u_remapMidColorUniform, b * 2.0);\n}";
}, function(obj, canCreateDiscussions, require) {
  /**
   * @return {undefined}
   */
  function f() {
    parent.constructor.call(this, {
      refDomId : "home-about-context",
      path : "",
      backgroundColor : 394758,
      defaultCameraFov : 45,
      mouseRefToWindow : true,
      parallax : -.25,
      bgDownScale : 600 / window.screen.height,
      themeRatio : 0,
      colorFrom1Hex : 7720,
      colorFrom2Hex : 49663,
      colorTo1Hex : 592174,
      colorTo2Hex : 16387866,
      expandRatio : 0
    });
  }
  var THREE = require(0);
  var platform = require(5);
  var projectConfig = require(3);
  var options = require(1);
  var self = require(4);
  var Y = require(2);
  var xtend = require(6);
  var params = require(138);
  var findDistinct = require(12);
  var parent = require(10).prototype;
  /** @type {!Object} */
  var opts = f.prototype = Object.create(parent);
  /** @type {function(): undefined} */
  opts.constructor = f;
  /**
   * @return {undefined}
   */
  opts.preInit = function() {
    if (parent.preInit.call(this), params.preInit(this), !platform.isMobile) {
      /** @type {boolean} */
      (texture = new THREE.Texture(options.loader.add(projectConfig.cdnPath + "visuals/homeAbout/beethoven.png").content)).flipY = false;
      texture.minFilter = texture.magFilter = THREE.LinearFilter;
      /** @type {boolean} */
      texture.needsUpdate = true;
      (tex = new THREE.Texture(options.loader.add(projectConfig.cdnPath + "visuals/homeAbout/matcap.jpg").content)).minFilter = tex.magFilter = THREE.LinearFilter;
      /** @type {boolean} */
      tex.needsUpdate = true;
      this.sharedUniforms.u_matCapTexture = {
        value : tex
      };
      var readRenderBuffer = this;
      options.loader.add(projectConfig.assetPath + "visuals/homeAbout/beethoven.glb", {
        type : "any",
        weight : 1,
        hasLoading : true,
        loadFunc : function(name, e, res) {
          options.GLTFLoader.load(name, function(loaded) {
            /** @type {number} */
            (result = loaded.scene.children[0]).position.x = 0;
            result.rotation.set(0, y, 0);
            readRenderBuffer.scene.add(result);
            e();
          }, function(event) {
            if (event.lengthComputable) {
              res.dispatch(event.loaded / event.total);
            }
          }, function(animate_param) {
            console.log(animate_param);
          });
        }
      });
    }
  };
  /**
   * @return {undefined}
   */
  opts.init = function() {
    parent.init.call(this);
    this.scene.add(params.mesh);
    this.sharedUniforms.u_lightScatterDivider = {
      value : 15
    };
    this.sharedUniforms.u_lightScatterPowInv = {
      value : .3
    };
    this.sharedUniforms.u_cameraPosition = {
      value : this.cameraPosition
    };
    this.sharedUniforms.u_lightPosition = {
      value : this.mouse3
    };
    this.sharedUniforms.u_parallaxRatioUniform = this.parallaxRatioUniform;
    if (!platform.isMobile) {
      result.material = new THREE.ShaderMaterial({
        uniforms : xtend({
          u_infoTexture : {
            value : texture
          },
          u_matCapTexture : this.sharedUniforms.u_matCapTexture,
          u_bgTexture : params.sharedUniforms.u_lowTexture,
          u_aspect : params.sharedUniforms.u_aspect,
          u_inRatio : {
            value : 0
          },
          u_rotation : {
            value : new THREE.Quaternion
          },
          u_time : {
            value : 0
          }
        }, this.sharedUniforms),
        vertexShader : self.precisionPrefix + require(152),
        fragmentShader : self.precisionPrefix + require(153)
      });
      /** @type {boolean} */
      result.material.extensions.derivatives = true;
    }
    if (content = self.createRenderTarget(1, 1), (object = new THREE.Mesh(new THREE.PlaneBufferGeometry(1, 1), new THREE.RawShaderMaterial({
      uniforms : {
        u_texture : {
          value : content.texture
        },
        u_btnOffset : {
          value : new THREE.Vector2
        },
        u_btnScale : {
          value : new THREE.Vector2
        }
      },
      vertexShader : self.precisionPrefix + require(154),
      fragmentShader : self.precisionPrefix + require(155),
      depthTest : false,
      depthWrite : false
    }))).geometry.translate(.5, -.5, 0), object.frustumCulled = false, this.scene.add(object), t = new THREE.RawShaderMaterial({
      uniforms : {
        u_texture : params.sharedUniforms.u_texture,
        u_btnOffset : object.material.uniforms.u_btnOffset,
        u_btnScale : object.material.uniforms.u_btnScale,
        u_uvOffset : params.sharedUniforms.u_uvOffset,
        u_uvScale : params.sharedUniforms.u_uvScale
      },
      vertexShader : self.precisionPrefix + require(156),
      fragmentShader : self.copyMaterial.fragmentShader,
      depthTest : false,
      depthWrite : false
    }), window.gui) {
      var gui = this.gui;
      gui.addColor(this, "colorFrom1Hex");
      gui.addColor(this, "colorFrom2Hex");
      gui.addColor(this, "colorTo1Hex");
      gui.addColor(this, "colorTo2Hex");
      gui.add(params, "isSimActive");
    }
    this.precompile();
  };
  /**
   * @return {undefined}
   */
  opts.resize = function() {
    parent.resize.call(this);
    params.resize(options.width, this.fullHeight);
  };
  /**
   * @return {undefined}
   */
  opts.onDomRectUpdate = function() {
    /** @type {number} */
    this.paddingTop = options.height / 20 | 0;
    /** @type {number} */
    var value = this.expandRatio = Math.min(1, (options.height - this.refDomRect.top) / 240);
    /** @type {number} */
    var val = 1 + (options.width - this.refDomRect.width >> 1);
    this.paddingLeft = this.paddingRight = Y.mix(-60, val, value);
  };
  /**
   * @param {?} ctx
   * @return {undefined}
   */
  opts.beforeRender = function(ctx) {
  };
  /**
   * @param {number} v
   * @param {!Object} data
   * @param {number} _
   * @param {number} i
   * @param {number} count
   * @return {undefined}
   */
  opts.update = function(v, data, _, i, count) {
    if (this.testViewport(), this.needsRender) {
      var View = self.getColorState();
      /** @type {boolean} */
      self.renderer.autoClearColor = false;
      this.scene.updateMatrixWorld(true);
      this.updateCamera();
      this.updateMouse();
      /** @type {number} */
      var p = options.elasticMouse.x / options.width;
      /** @type {number} */
      var y = 1 - (options.elasticMouse.y - (this.refDomRect.top - this.paddingTop)) / this.fullHeight;
      this.themeRatio += .05 * ((this.upInRatio - this.lowInRatio > 0 ? 0 : 1) - this.themeRatio);
      /** @type {number} */
      arcFrom = (arcFrom + 5 * v) % (2 * Math.PI);
      params.stroke(p, y, .03 + .02 * Math.sin(arcFrom));
      params.update(v);
      if (!platform.isMobile) {
        result.material.uniforms.u_inRatio.value = this.themeRatio;
        result.position.set(-1.2 * Math.pow(this.camera.aspect, .5), 0, 0);
        result.position.x -= .015 * (this.mouse3.x - result.position.x);
        result.position.y -= .015 * (this.mouse3.y - result.position.y);
        result.rotation.x += .275 * (.075 * this.mouse.y - result.rotation.x);
        result.rotation.y += .275 * (y + .075 * this.mouse.x - result.rotation.y);
        /** @type {number} */
        result.rotation.z = 0;
        result.scale.set(1.1, 1.1, 1.1);
        result.material.uniforms.u_rotation.value.copy(result.quaternion);
        result.material.uniforms.u_time.value += v;
      }
      /** @type {boolean} */
      object.visible = count > 0;
      /** @type {number} */
      var x = data.width * count | 0;
      /** @type {number} */
      var value = data.height * count | 0;
      if (object.visible && x > 0 && value > 0) {
        var nav_item_id_prefix = data.left + _;
        var y = data.top + i;
        object.material.uniforms.u_btnOffset.value.set((nav_item_id_prefix - .5 * this.width - this.left) / this.width * 2, -(y - .5 * this.height - this.top) / this.height * 2);
        object.material.uniforms.u_btnScale.value.set(data.width / this.width * 2 * count, data.height / this.height * 2);
        content.setSize(x, value);
        self.render(t, content);
        findDistinct.blur9(8, .5, content);
        findDistinct.blur9(4, .5, content);
      } else {
        /** @type {boolean} */
        object.visible = false;
      }
      this.render();
      self.setColorState(View);
    }
  };
  var result = void 0;
  var texture = void 0;
  var tex = void 0;
  /** @type {number} */
  var arcFrom = 0;
  /** @type {number} */
  var y = 20 / 180 * Math.PI + .14;
  var content = void 0;
  var object = void 0;
  var t = void 0;
  obj.exports = new f;
}, function(canCreateDiscussions, opts, require) {
  /**
   * @return {undefined}
   */
  function __renderMultiSample() {
    var url = params;
    params = o;
    o = url;
    jObj.u_patternCurrRenderTexture.value = params.texture;
    jObj.u_patternPrevRenderTexture.value = o.texture;
  }
  /**
   * @param {number} i
   * @param {number} a
   * @return {?}
   */
  function func(i, a) {
    /** @type {number} */
    var numPts = 1 - Math.abs(a);
    return i = i / 1.12, util.mix(i, .85 * i, (1 - 2 * Math.abs(Math.abs(i) - .5)) * numPts);
  }
  /**
   * @param {number} place
   * @param {number} prop
   * @return {?}
   */
  function get(place, prop) {
    return .5 * func(2 * place - 1, 2 * prop - 1) + .5;
  }
  var THREE = require(0);
  var platform = require(5);
  var component = require(3);
  var data = require(1);
  var exports = require(4);
  var mori = require(12);
  var util = require(2);
  /**
   * @param {!Object} type
   * @return {undefined}
   */
  opts.preInit = function(type) {
    /** @type {!Object} */
    options = type;
    data.loader.add(component.assetPath + "visuals/homeAbout/bg.buf", {
      type : "xhr",
      responseType : "arraybuffer",
      weight : 1,
      onLoad : function(n) {
        /** @type {number} */
        var offset = 0;
        /** @type {!Uint8Array} */
        var data = new Uint8Array(n, offset, 16384);
        /** @type {number} */
        offset = offset + 16384;
        /** @type {!Int8Array} */
        var array = new Int8Array(n, offset, 32768);
        /** @type {number} */
        offset = offset + 32768;
        /** @type {!Int8Array} */
        var colors = new Int8Array(n, offset, 32768);
        /** @type {number} */
        offset = offset + 32768;
        /** @type {!Int8Array} */
        var points = new Int8Array(n, offset, 32768);
        /** @type {number} */
        offset = offset + 32768;
        /** @type {!Int8Array} */
        var sizes = new Int8Array(n, offset, 32768);
        /** @type {number} */
        offset = offset + 32768;
        /** @type {!Uint16Array} */
        var typedArray = new Uint16Array(n, offset, 48447);
        (geometry = new THREE.BufferGeometry).setAttribute("a_position", new THREE.BufferAttribute(data, 2, true));
        geometry.setAttribute("a_offsetRatioXY13", new THREE.BufferAttribute(array, 4, true));
        geometry.setAttribute("a_offsetRatioXY24", new THREE.BufferAttribute(colors, 4, true));
        geometry.setAttribute("a_normalXY13", new THREE.BufferAttribute(points, 4, true));
        geometry.setAttribute("a_normalXY24", new THREE.BufferAttribute(sizes, 4, true));
        geometry.setIndex(new THREE.BufferAttribute(typedArray, 1));
        (function() {
          start = new THREE.Color;
          jObj.u_patternCurrRenderTexture = {
            value : null
          };
          jObj.u_patternPrevRenderTexture = {
            value : null
          };
          jObj.u_patternDeltaTime = {
            value : 1
          };
          jObj.u_patternTexelSize = {
            value : new THREE.Vector2(1, 1)
          };
          jObj.u_aspect = {
            value : new THREE.Vector2(1, 1)
          };
          jObj.u_uvOffset = {
            value : new THREE.Vector2
          };
          jObj.u_uvScale = {
            value : new THREE.Vector2
          };
          jObj.u_color1 = {
            value : bindings = opts.color1 = new THREE.Color
          };
          jObj.u_color2 = {
            value : search = opts.color2 = new THREE.Color
          };
          jObj.u_rotation = {
            value : 0
          };
          params = new THREE.WebGLRenderTarget(1, 1, {
            format : THREE.RGBAFormat,
            magFilter : THREE.LinearFilter,
            minFilter : THREE.LinearFilter,
            depthBuffer : false,
            stencilBuffer : false
          });
          o = params.clone();
          context = params.clone();
          parent = params.clone();
          jObj.u_texture = {
            value : parent.texture
          };
          if (!platform.isMobile) {
            value = params.clone();
            jObj.u_lowTexture = {
              value : value.texture
            };
          }
          obj = new THREE.RawShaderMaterial({
            uniforms : {
              u_randomSeed : {
                value : new THREE.Vector4
              },
              u_aspect : jObj.u_aspect
            },
            vertexShader : exports.vertexShader,
            fragmentShader : exports.precisionPrefix + require(143),
            depthTest : false,
            depthWrite : false,
            transparent : true,
            blending : THREE.NoBlending
          });
          shader = new THREE.RawShaderMaterial({
            uniforms : {
              u_patternPrevRenderTexture : jObj.u_patternPrevRenderTexture,
              u_noiseTexture : {
                value : context.texture
              },
              u_aspect : jObj.u_aspect,
              u_a : {
                value : new THREE.Vector3
              },
              u_b : {
                value : new THREE.Vector3
              }
            },
            vertexShader : exports.vertexShader,
            fragmentShader : exports.precisionPrefix + require(144),
            depthTest : false,
            depthWrite : false,
            transparent : true,
            blending : THREE.NoBlending
          });
          post = new THREE.RawShaderMaterial({
            uniforms : {
              u_patternPrevRenderTexture : jObj.u_patternPrevRenderTexture,
              u_patternDeltaTime : jObj.u_patternDeltaTime,
              u_patternTexelSize : jObj.u_patternTexelSize,
              u_noiseTexture : {
                value : context.texture
              },
              u_noiseUvOffset : {
                value : 0
              }
            },
            vertexShader : exports.vertexShader,
            fragmentShader : exports.precisionPrefix + require(145),
            depthTest : false,
            depthWrite : false,
            transparent : true,
            blending : THREE.NoBlending
          });
          step = new THREE.RawShaderMaterial({
            uniforms : {
              u_patternPrevRenderTexture : jObj.u_patternPrevRenderTexture,
              u_patternTexelSize : jObj.u_patternTexelSize
            },
            vertexShader : exports.vertexShader,
            fragmentShader : exports.precisionPrefix + require(146),
            depthTest : false,
            depthWrite : false,
            transparent : true,
            blending : THREE.NoBlending
          });
          illegalResult = new THREE.RawShaderMaterial({
            uniforms : obj.uniforms,
            vertexShader : exports.vertexShader,
            fragmentShader : exports.precisionPrefix + require(147),
            depthTest : false,
            depthWrite : false,
            transparent : true,
            blending : THREE.NoBlending
          });
          me = new THREE.RawShaderMaterial({
            uniforms : {
              u_patternCurrRenderTexture : jObj.u_patternCurrRenderTexture,
              u_patternTexelSize : jObj.u_patternTexelSize,
              u_uvOffset : jObj.u_uvOffset,
              u_uvScale : jObj.u_uvScale,
              u_aspect : jObj.u_aspect,
              u_color1 : jObj.u_color1,
              u_color2 : jObj.u_color2,
              u_mouse : {
                value : new THREE.Vector2
              },
              u_highlightMultiplier : {
                value : .6
              }
            },
            vertexShader : exports.precisionPrefix + require(148),
            fragmentShader : exports.precisionPrefix + require(149),
            depthTest : false,
            depthWrite : false,
            blending : THREE.NoBlending
          });
          material = new THREE.RawShaderMaterial({
            uniforms : {
              u_texture : jObj.u_texture,
              u_uvOffset : jObj.u_uvOffset,
              u_uvScale : jObj.u_uvScale,
              u_aspect : jObj.u_aspect,
              u_constraintedMouse : {
                value : new THREE.Vector2
              },
              u_baseBlendRatio : {
                value : 0
              },
              u_clothEffectRatio : {
                value : 0
              },
              u_rotation : jObj.u_rotation
            },
            vertexShader : exports.precisionPrefix + require(150),
            fragmentShader : exports.precisionPrefix + require(151),
            depthTest : false,
            depthWrite : false,
            blending : THREE.NoBlending
          });
          /** @type {number} */
          (object = opts.mesh = new THREE.Mesh(geometry, material)).renderOrder = -100;
          /** @type {boolean} */
          object.frustumCulled = false;
        })();
      }
    });
  };
  /**
   * @param {number} b
   * @param {number} r
   * @param {number} x
   * @return {undefined}
   */
  opts.stroke = function(b, r, x) {
    /** @type {number} */
    body = b;
    /** @type {number} */
    status = r;
    /** @type {number} */
    message = x;
  };
  /**
   * @param {number} length
   * @param {number} val
   * @return {undefined}
   */
  opts.resize = function(length, val) {
    /** @type {number} */
    width = opts.simWidth = Math.ceil(length * options.bgDownScale);
    /** @type {number} */
    h = opts.simHeight = Math.ceil(val * options.bgDownScale);
    context.setSize(width, 2 * h);
    params.setSize(width, h);
    o.setSize(width, h);
    if (!platform.isMobile) {
      value.setSize(Math.ceil(width / 4 | 0), Math.ceil(h / 4 | 0));
    }
    jObj.u_patternTexelSize.value.set(1 / width, 1 / h);
    jObj.u_aspect.value.set(width / h, 1);
    var stack = exports.getColorState();
    exports.clearColorRGBA(1, 0, .5, .5, params);
    exports.setColorState(stack);
    obj.uniforms.u_randomSeed.value.set(Math.random(), Math.random(), Math.random(), Math.random());
    exports.render(obj, context);
    exports.render(illegalResult, params);
    /** @type {number} */
    content = 0;
  };
  /**
   * @param {number} i
   * @return {undefined}
   */
  opts.update = function(i) {
    /** @type {number} */
    var h = -Math.max(options.refDomRect.bottom - data.height, 0);
    me.uniforms.u_uvOffset.value.set(-options.left / options.width, h / options.height);
    me.uniforms.u_uvScale.value.set(data.width / options.width, (options.refDomRect.height + options.paddingTop + options.paddingBottom) / options.height);
    /** @type {number} */
    var min = 2 * ((data.elasticMouse.x - options.left) / options.width - .5);
    /** @type {number} */
    var l = 2 * (.5 - (data.elasticMouse.y - (options.refDomRect.top - options.paddingTop)) / (options.refDomRect.height + options.paddingTop + options.paddingBottom));
    if (me.uniforms.u_mouse.value.set(.5 * func(min, l) + .5, .5 * l + .5), opts.isSimActive) {
      parent.setSize(data.width, options.fullHeight);
      var stack = exports.getColorState();
      if (null != body) {
        if (null == file) {
          file = body;
          url = status;
          messageWarn = message;
        }
        __renderMultiSample();
        shader.uniforms.u_a.value.set(get(file, url), url, messageWarn);
        shader.uniforms.u_b.value.set(get(body, status), status, message);
        exports.render(shader, params);
        file = body;
        url = status;
        messageWarn = message;
        body = status = message;
      }
      /** @type {number} */
      var m = 0;
      for (; m < 6; m++) {
        __renderMultiSample();
        /** @type {number} */
        post.uniforms.u_noiseUvOffset.value = (post.uniforms.u_noiseUvOffset.value + .1 * i) % 1;
        exports.render(post, params);
      }
      __renderMultiSample();
      exports.render(step, params);
      exports.setColorState(stack);
      var value = options.themeRatio;
      start.setHex(options.colorTo1Hex);
      bindings.set(options.colorFrom1Hex).lerp(start, 1 - value);
      start.setHex(options.colorTo2Hex);
      search.set(options.colorFrom2Hex).lerp(start, 1 - value);
      /** @type {number} */
      me.uniforms.u_highlightMultiplier.value = .6 * value;
      var y = util.clamp(min, -1, 1);
      var n = util.clamp(l, -1, 1);
      /** @type {number} */
      var zoom = Math.max(Math.abs(y), Math.abs(n));
      /** @type {number} */
      var w = Math.atan2(n, y);
      exports.render(me, parent);
      if (!platform.isMobile) {
        exports.copy(parent.texture, value);
        mori.blur9(4, .5, value);
      }
      material.uniforms.u_constraintedMouse.value.set(Math.cos(w) * zoom, Math.sin(w) * zoom);
      content = content + (l <= -1 || l >= 1 ? .1 * (0 - content) : .1 * (1 - content));
      var REPORT_ATTACHMENT_NAME = material.uniforms.u_clothEffectRatio.value = content;
      /** @type {number} */
      material.uniforms.u_baseBlendRatio.value = (.1 + .9 * util.clamp(util.smoothstep(0, .3, zoom), 0, 1)) * REPORT_ATTACHMENT_NAME;
      jObj.u_rotation.value = options.expandRatio;
    }
  };
  var jObj = opts.sharedUniforms = {};
  /** @type {null} */
  var object = opts.mesh = null;
  /** @type {null} */
  var bindings = opts.color1 = null;
  /** @type {null} */
  var search = opts.color2 = null;
  /** @type {boolean} */
  opts.isSimActive = true;
  var me = void 0;
  var context = void 0;
  var params = void 0;
  var o = void 0;
  var parent = void 0;
  var value = void 0;
  var shader = void 0;
  var post = void 0;
  var step = void 0;
  var illegalResult = void 0;
  var obj = void 0;
  var options = void 0;
  var file = void 0;
  var url = void 0;
  var messageWarn = void 0;
  var body = void 0;
  var status = void 0;
  var message = void 0;
  var start = void 0;
  var material = void 0;
  var geometry = void 0;
  /** @type {number} */
  var content = 0;
  /** @type {number} */
  var width = opts.simWidth = 1;
  /** @type {number} */
  var h = opts.simHeight = 1;
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "uniform sampler2D u_texture;\nvarying vec2 v_uv[9];\n\nvoid main() {\n\n    #ifdef USE_RGBA\n        vec4 color = texture2D( u_texture, v_uv[0] ) * 0.1633;\n        color += texture2D( u_texture,  v_uv[1] ) * 0.1531;\n        color += texture2D( u_texture,  v_uv[2] ) * 0.1531;\n        color += texture2D( u_texture,  v_uv[3] ) * 0.12245;\n        color += texture2D( u_texture,  v_uv[4] ) * 0.12245;\n        color += texture2D( u_texture,  v_uv[5] ) * 0.0918;\n        color += texture2D( u_texture,  v_uv[6] ) * 0.0918;\n        color += texture2D( u_texture,  v_uv[7] ) * 0.051;\n        color += texture2D( u_texture,  v_uv[8] ) * 0.051;\n\n        gl_FragColor = color;\n    #else\n        vec4 center = texture2D( u_texture, v_uv[0] );\n        vec3 color = center.rgb * 0.1633;\n        color += texture2D( u_texture,  v_uv[1] ).rgb * 0.1531;\n        color += texture2D( u_texture,  v_uv[2] ).rgb * 0.1531;\n        color += texture2D( u_texture,  v_uv[3] ).rgb * 0.12245;\n        color += texture2D( u_texture,  v_uv[4] ).rgb * 0.12245;\n        color += texture2D( u_texture,  v_uv[5] ).rgb * 0.0918;\n        color += texture2D( u_texture,  v_uv[6] ).rgb * 0.0918;\n        color += texture2D( u_texture,  v_uv[7] ).rgb * 0.051;\n        color += texture2D( u_texture,  v_uv[8] ).rgb * 0.051;\n\n        gl_FragColor = vec4(color, center.a);\n    #endif\n\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "\nuniform sampler2D u_texture;\nuniform vec2 u_delta;\n\nvarying vec2 v_uv;\n\nvoid main() {\n\n    #ifdef USE_RGBA\n        vec4 color = texture2D( u_texture, v_uv ) * 0.1633;\n\n        vec2 delta = u_delta;\n        color += texture2D( u_texture,  v_uv - delta ) * 0.1531;\n        color += texture2D( u_texture,  v_uv + delta ) * 0.1531;\n\n        delta += u_delta;\n        color += texture2D( u_texture,  v_uv - delta ) * 0.12245;\n        color += texture2D( u_texture,  v_uv + delta ) * 0.12245;\n\n        delta += u_delta;\n        color += texture2D( u_texture,  v_uv - delta ) * 0.0918;\n        color += texture2D( u_texture,  v_uv + delta ) * 0.0918;\n\n        delta += u_delta;\n        color += texture2D( u_texture,  v_uv - delta ) * 0.051;\n        color += texture2D( u_texture,  v_uv + delta ) * 0.051;\n\n        gl_FragColor = color;\n\n    #else\n        vec4 center = texture2D( u_texture, v_uv );\n        vec3 color = center.rgb * 0.1633;\n\n        vec2 delta = u_delta;\n        color += texture2D( u_texture,  v_uv - delta ).rgb * 0.1531;\n        color += texture2D( u_texture,  v_uv + delta ).rgb * 0.1531;\n\n        delta += u_delta;\n        color += texture2D( u_texture,  v_uv - delta ).rgb * 0.12245;\n        color += texture2D( u_texture,  v_uv + delta ).rgb * 0.12245;\n\n        delta += u_delta;\n        color += texture2D( u_texture,  v_uv - delta ).rgb * 0.0918;\n        color += texture2D( u_texture,  v_uv + delta ).rgb * 0.0918;\n\n        delta += u_delta;\n        color += texture2D( u_texture,  v_uv - delta ).rgb * 0.051;\n        color += texture2D( u_texture,  v_uv + delta ).rgb * 0.051;\n\n        gl_FragColor = vec4(color, center.a);\n\n    #endif\n\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "#include <packing>\n\nuniform sampler2D u_texture;\nuniform float u_cameraFarSubNear;\nuniform float u_cameraNearMulFar;\nuniform float u_cameraNear;\nuniform float u_cameraFar;\n\nvarying vec2 v_uv[9];\n\n#if FROM_LINEAR\nfloat tap (vec2 uv) {\n    return unpackRGBAToDepth(texture2D(u_texture, uv));\n}\n#else\nfloat tap (vec2 uv) {\n    return u_cameraNearMulFar / (unpackRGBAToDepth(texture2D(u_texture, uv) * u_cameraFarSubNear - u_cameraFar);\n}\n#endif\n\n#if TO_LINEAR\nfloat encode (float depth) {\n    return packDepthToRGBA(depth);\n}\n#else\nfloat encode (float depth) {\n    return packDepthToRGBA((u_cameraNear + depth) * u_cameraFar) / (u_cameraFarSubNear * viewZ);\n}\n#endif\n\nvoid main() {\n        vec4 color = tap(v_uv[0]) * 0.1633;\n        color += tap( v_uv[1]) * 0.1531;\n        color += tap( v_uv[2]) * 0.1531;\n        color += tap( v_uv[3]) * 0.12245;\n        color += tap( v_uv[4]) * 0.12245;\n        color += tap( v_uv[5]) * 0.0918;\n        color += tap( v_uv[6]) * 0.0918;\n        color += tap( v_uv[7]) * 0.051;\n        color += tap( v_uv[8]) * 0.051;\n\n        gl_FragColor = encode(color);\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "#include <packing>\n\nuniform sampler2D u_texture;\nuniform vec2 u_delta;\nuniform float u_cameraFarSubNear;\nuniform float u_cameraNearMulFar;\nuniform float u_cameraNear;\nuniform float u_cameraFar;\n\nvarying vec2 v_uv;\n\n#if FROM_LINEAR\nfloat tap (vec2 uv) {\n    return unpackRGBAToDepth(texture2D(u_texture, uv));\n}\n#else\nfloat tap (vec2 uv) {\n    return u_cameraNearMulFar / (unpackRGBAToDepth(texture2D(u_texture, uv) * u_cameraFarSubNear - u_cameraFar);\n}\n#endif\n\n#if TO_LINEAR\nfloat encode (float depth) {\n    return packDepthToRGBA(depth);\n}\n#else\nfloat encode (float depth) {\n    return packDepthToRGBA((u_cameraNear + depth) * u_cameraFar) / (u_cameraFarSubNear * viewZ);\n}\n#endif\n\nvoid main() {\n        vec4 color = tap(v_uv) * 0.1633;\n\n        vec2 delta = u_delta;\n        color += tap(v_uv - delta) * 0.1531;\n        color += tap(v_uv + delta) * 0.1531;\n\n        delta += u_delta;\n        color += tap(v_uv - delta) * 0.12245;\n        color += tap(v_uv + delta) * 0.12245;\n\n        delta += u_delta;\n        color += tap(v_uv - delta) * 0.0918;\n        color += tap(v_uv + delta) * 0.0918;\n\n        delta += u_delta;\n        color += tap(v_uv - delta) * 0.051;\n        color += tap(v_uv + delta) * 0.051;\n\n        gl_FragColor = encode(color);\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "uniform vec4 u_randomSeed;\nuniform vec2  u_aspect;\nvarying vec2 v_uv;\n\n#include <snoise2>\n\nvec4 getNoise (vec2 uv) {\n    return vec4(\n        snoise2((uv * 5.0 + 4.0 + u_randomSeed.xy * 421.0) * u_aspect),\n        snoise2((uv * 5.0 + 5.0 + u_randomSeed.zw * 5.0) * u_aspect),\n        snoise2((uv * 1.0 + 4.0 + u_randomSeed.xy * 63.0) * u_aspect),\n        snoise2((uv * 1.0 + 100.0 + 4.0 + u_randomSeed.xy * 243.0) * u_aspect)\n    ) * 0.35 + 0.5;\n}\n\nvoid main () {\n    vec4 noise0 = getNoise(v_uv * 0.5);\n    vec4 noise1 = getNoise(v_uv * 0.5 - vec2(0.0, 0.5));\n    gl_FragColor = mix(noise0, noise1, clamp((v_uv.y - 0.5) / 0.5, 0.0, 1.0));\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "uniform sampler2D u_patternPrevRenderTexture;\nuniform sampler2D u_noiseTexture;\nuniform vec2  u_aspect;\nuniform vec3 u_a;\nuniform vec3 u_b;\n\nvarying vec2 v_uv;\n\nfloat stroke (vec2 p, vec3 a, vec3 b) {\n    vec2 pa = (p - a.xy) * u_aspect;\n    vec2 ba = (b.xy - a.xy) * u_aspect;\n    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);\n    float r = mix(a.z, b.z, h);\n    return 1.0 - (length(pa - ba * h) - r) / r;\n}\n\nvoid main () {\n    vec4 noise = texture2D(u_noiseTexture,v_uv);\n    vec4 info = texture2D(u_patternPrevRenderTexture, fract(v_uv + (noise.xy - 0.5) / u_aspect * 0.0075));\n    float sd = clamp(stroke(v_uv, u_a, u_b), 0.0, 1.0);\n    info.y = max(info.y, sd);\n\n    info.zw = mix(info.zw, vec2(0.5, 0.5), sd);\n\n    gl_FragColor = info;\n\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "\nuniform sampler2D u_patternPrevRenderTexture;\nuniform float u_patternDeltaTime;\nuniform vec2 u_patternTexelSize;\nuniform sampler2D u_noiseTexture;\nuniform float u_noiseUvOffset;\n\nvarying vec2 v_uv;\n\n#include <snoise2>\n\nvoid main () {\n    vec4 noise = texture2D(u_noiseTexture, fract(v_uv * vec2(1.0, 0.5) + vec2(0.0, u_noiseUvOffset))) * 2.0 - 1.0;\n    vec2 uv = v_uv + 1.0;\n\n    float deltaA = 1.0 - noise.z * 0.1;\n    float deltaB = 0.25 + noise.y * 0.1;\n    float feed = 0.06 + noise.x * 0.05;\n    float killRate = 0.065 + noise.w * 0.005;\n\n    vec4 infoLeftTop = texture2D(u_patternPrevRenderTexture, fract(uv + vec2(-1.0, 1.0) * u_patternTexelSize));\n    vec4 infoTop = texture2D(u_patternPrevRenderTexture, fract(uv + vec2(0.0, 1.0) * u_patternTexelSize));\n    vec4 infoRightTop = texture2D(u_patternPrevRenderTexture, fract(uv + vec2(1.0, 1.0) * u_patternTexelSize));\n    vec4 infoLeft = texture2D(u_patternPrevRenderTexture, fract(uv + vec2(-1.0, 0.0) * u_patternTexelSize));\n    vec4 infoCenter = texture2D(u_patternPrevRenderTexture, fract(uv + vec2(0.0, 0.0) * u_patternTexelSize));\n    vec4 infoRight = texture2D(u_patternPrevRenderTexture, fract(uv + vec2(1.0, 0.0) * u_patternTexelSize));\n    vec4 infoLeftBottom = texture2D(u_patternPrevRenderTexture, fract(uv + vec2(-1.0, -1.0) * u_patternTexelSize));\n    vec4 infoBottom = texture2D(u_patternPrevRenderTexture, fract(uv + vec2(0.0, -1.0) * u_patternTexelSize));\n    vec4 infoRightBottom = texture2D(u_patternPrevRenderTexture, fract(uv + vec2(1.0, -1.0) * u_patternTexelSize));\n    vec2 dir = noise.zw;\n    vec4 weight0 = vec4(\n        0.05 *(1.0 + 0.75 * (dot(vec2(-0.7071, 0.7071), dir))),\n        0.2 *(1.0 + 0.75 * (dot(vec2(0.0, 1.0), dir))),\n        0.05 *(1.0 + 0.75 * (dot(vec2(0.7071, 0.7071), dir))),\n        0.2 *(1.0 + 0.75 * (dot(vec2(-1.0, 0.0), dir)))\n    );\n    vec4 weight1 = vec4(\n        0.2 *(1.0 + 0.75 * (dot(vec2(1.0, 0.0), dir))),\n        0.05 *(1.0 + 0.75 * (dot(vec2(-0.7071, -0.7071), dir))),\n        0.2 *(1.0 + 0.75 * (dot(vec2(0.0, -1.0), dir))),\n        0.05 *(1.0 + 0.75 * (dot(vec2(0.7071, -0.7071), dir)))\n    );\n    float sum = weight0.x + weight0.y + weight0.z + weight0.w + weight1.x + weight1.y + weight1.z + weight1.w;\n    weight0 /= sum;\n    weight1 /= sum;\n\n    // weight0 = vec4(0.125);\n    // weight1 = vec4(0.125);\n\n    vec2 mixedAB =\n        infoLeftTop.xy * weight0.x +\n        infoTop.xy * weight0.y +\n        infoRightTop.xy * weight0.z +\n        infoLeft.xy * weight0.w +\n        infoCenter.xy * -1.0 +\n        infoRight.xy * weight1.x +\n        infoLeftBottom.xy * weight1.y +\n        infoBottom.xy * weight1.z +\n        infoRightBottom.xy * weight1.w;\n\n    float a = infoCenter.x;\n    float b = infoCenter.y;\n    float abb = a * b * b;\n\n    float newA = a + ( ( deltaA * mixedAB.x ) - abb + ( feed * ( 1.0 - a ) ) ) * u_patternDeltaTime;\n    float newB = b + ( ( deltaB * mixedAB.y ) + abb - ( ( killRate + feed ) * b ) ) * u_patternDeltaTime;\n\n    gl_FragColor = vec4(clamp(newA, 0.0, 1.0), clamp(newB, 0.0, 1.0), infoCenter.zw);\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "uniform sampler2D u_patternPrevRenderTexture;\nuniform vec2 u_patternTexelSize;\n\nvarying vec2 v_uv;\n\nvoid main () {\n    vec3 halfTexelSize = vec3(u_patternTexelSize * 0.5, 0.0);\n    vec3 v = vec3(0.0, 0.0, texture2D(u_patternPrevRenderTexture, v_uv - halfTexelSize.xy).y);\n    vec3 vx = vec3(1.0, 0.0, texture2D(u_patternPrevRenderTexture, v_uv + halfTexelSize.xz).y);\n    vec3 vy = vec3(0.0, 1.0, texture2D(u_patternPrevRenderTexture, v_uv + halfTexelSize.zy).y);\n    vec3 dvx = vx - v;\n    vec3 dvy = vy - v;\n\n    vec3 n = vec3(0.0, 0.0, 1.0);\n    \n    if (distance(dvx, dvy) > 0.0) {\n        n = cross(normalize(dvx), normalize(dvy));\n    }\n\n    vec4 infoCenter = texture2D(u_patternPrevRenderTexture, v_uv);\n\n    infoCenter.zw = mix(n.xy * 0.5 + 0.5, infoCenter.zw, n.z * 0.95);\n\n    gl_FragColor = infoCenter;\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "uniform vec4 u_randomSeed;\nuniform vec2  u_aspect;\nvarying vec2 v_uv;\n\n#include <snoise2>\n\nvoid main () {\n    gl_FragColor = vec4(\n\t\tsnoise2((v_uv * 12.0 + 4.0 + u_randomSeed.xy * 421.0) * u_aspect),\n\t\tsnoise2((v_uv * 12.0 + 5.0 + u_randomSeed.zw * 5.0) * u_aspect),\n\t\t0.5,\n\t\t0.5\n\t);\n\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "attribute vec3 position;\nuniform vec2 u_uvOffset;\nuniform vec2 u_uvScale;\nuniform vec2 u_aspect;\nuniform vec2 u_mouse;\n\nvarying vec2 v_uv;\nvarying vec2 v_toMouse;\n\nvoid main() {\n    v_uv = position.xy * 0.5 + 0.5;//(position.xy * 0.5 + 0.5 - u_uvOffset) / u_uvScale;\n    vec2 mouse = u_mouse;//(u_mouse - u_uvOffset) / u_uvScale;\n    v_toMouse = (mouse - v_uv) * u_aspect ;\n    gl_Position = vec4( position, 1.0 );\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "uniform sampler2D u_patternCurrRenderTexture;\nuniform vec2 u_patternTexelSize;\nuniform vec3 u_color1;\nuniform vec3 u_color2;\nuniform float u_highlightMultiplier;\n\nvarying vec2 v_uv;\nvarying vec2 v_toMouse;\n\nvoid main () {\n    vec4 infoCenter = texture2D(u_patternCurrRenderTexture, v_uv);\n    infoCenter.y = smoothstep(0.1, 0.25, infoCenter.y);\n    vec3 toMouse3 = normalize(vec3(v_toMouse, 0.08 - infoCenter.x * 0.01));\n    vec3 N = vec3(clamp(infoCenter.zw * 4.0 - 2.0, vec2(-1.0), vec2(1.0)), 0.0);\n    N.z = sqrt(1.0 - N.x * N.x - N.y * N.y);\n    gl_FragColor = vec4(mix(u_color1, u_color2, infoCenter.y) + max(0.0, dot(N, toMouse3)) * u_highlightMultiplier, 1.0);\n\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "attribute vec2 a_position;\nattribute vec4 a_offsetRatioXY13;\nattribute vec4 a_offsetRatioXY24;\nattribute vec4 a_normalXY13;\nattribute vec4 a_normalXY24;\n\nuniform vec2 u_uvOffset;\nuniform vec2 u_uvScale;\nuniform vec2 u_aspect;\nuniform vec2 u_constraintedMouse;\nuniform float u_baseBlendRatio;\nuniform float u_clothEffectRatio;\nuniform float u_rotation;\n\nvarying vec2 v_uv;\nvarying vec3 v_normal;\n\n#include <rotate2d>\n\nvec2 blendValues(vec4 ac, vec4 bd, vec2 blendRatios) {\n    vec4 y0y1 = mix(ac, bd, blendRatios.x);\n    return mix(\n        y0y1.xy,\n        y0y1.zw,\n        blendRatios.y\n    );\n}\n\nvoid main() {\n    vec2 position = a_position;\n    vec2 rotatedCenterPosition =  rotate2d(position.xy -0.5, -0.1);\n    v_uv = mix(position.xy, rotatedCenterPosition * vec2(1.0, 0.915) + 0.5, u_rotation);\n    position.xy = mix(position.xy, rotatedCenterPosition * vec2(1.12, 0.915) + 0.5, u_rotation);\n    \n    vec2 blendRatios = clamp(u_constraintedMouse * 0.5 + 0.5, 0.0, 1.0);\n\n    vec2 offsetRatios =  blendValues(a_offsetRatioXY13, a_offsetRatioXY24, blendRatios);\n    vec3 normal = vec3(blendValues(a_normalXY13, a_normalXY24, blendRatios), 0.0);\n    normal.z = sqrt(max(0.0, 1.0 - normal.x * normal.x - normal.y * normal.y));\n\n    vec2 oriPos = position * 2.0 - 1.0;\n    v_normal = normalize(mix(vec3(0.0, 0.0, 1.0), normal, clamp(length(oriPos - u_constraintedMouse), 0.0, 1.0) * u_baseBlendRatio));\n\n    oriPos += offsetRatios * abs(blendRatios - 0.5) * u_clothEffectRatio;\n\n    vec2 ratioXY = abs(cos(oriPos * 3.1415926 * 0.5));\n    float ratio = ratioXY.x * ratioXY.y;\n\n    vec2 pos = oriPos;// + u_constraintedMouse * ratio * 0.1;\n    pos = mix(pos + (u_constraintedMouse - pos) * vec2(0.2, 0.1) * ((1.0 - abs(pos.yx - u_constraintedMouse.yx) / 2.0)), pos, pos * pos);\n    pos = mix(oriPos, pos, u_clothEffectRatio);\n\n\tpos = pos * 0.5 + 0.5;\n\tpos = pos * u_uvScale + u_uvOffset;\n\tpos = (pos * 2.0 - 1.0);\n\n    gl_Position = vec4(pos, 0.0, 1.0 );\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "uniform sampler2D u_texture;\n// uniform sampler2D u_matCapTexture;\n\nvarying vec2 v_uv;\nvarying vec3 v_normal;\n\nvoid main () {\n    vec4 color = texture2D(u_texture, v_uv);\n\tvec3 normal = normalize(v_normal);\n\t\n\tfloat dotWeight = dot(normal.xy, vec2(-0.7071, 0.7071));\n\tcolor.rgb += smoothstep(0.0, 1.0, dotWeight) * 0.275;\n\tcolor.rgb *= smoothstep(-1.0, 0.5, dotWeight);\n\n\tgl_FragColor = color;\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "\nuniform float u_time;\n\n// varying vec3 v_offset;\nvarying vec3 v_viewPosition;\nvarying vec2 v_uv;\nvarying vec2 v_uvA;\nvarying vec2 v_uvB;\n\n#include <snoise3> \n\nvoid main () {\n    vec4 worldPosition = modelMatrix * vec4(position, 1.0);\n\n    // v_offset = vec3(\n    //     snoise3(position.xyz + vec3(0.0, 0.0, u_time)),\n    //     snoise3(position.xyz + vec3(0.0, 0.0, u_time) + 100.0),\n    //     snoise3(position.xyz + vec3(0.0, 0.0, u_time) + 200.0)\n    // );\n    // worldPosition.xyz += v_offset * 0.025;\n\n    v_uvA = uv * vec2(0.5, 1.0);\n    v_uvB = v_uvA + vec2(0.5, 0.0);\n\n    vec4 mvPosition = viewMatrix * worldPosition;;\n    v_viewPosition = mvPosition.xyz;\n    gl_Position = projectionMatrix * mvPosition;\n    \n    v_uv = gl_Position.xy / gl_Position.w * 0.5 + 0.5;\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "\nuniform sampler2D u_infoTexture;\nuniform sampler2D u_matCapTexture;\nuniform sampler2D u_bgTexture;\nuniform float u_inRatio;\n\nuniform vec2 u_aspect;\n\n// varying vec3 v_offset;\nvarying vec3 v_viewPosition;\nvarying vec2 v_uv;\nvarying vec2 v_uvA;\nvarying vec2 v_uvB;\n\nuniform mat3 normalMatrix;\n\n#include <getScatterLine>\n#include <snoise4>\n\nvoid main () {\n    vec3 infoA = texture2D(u_infoTexture, v_uvA).rgb;\n    vec3 infoB = texture2D(u_infoTexture, v_uvB).rgb;\n    \n    vec3 modelNormal = vec3(infoA.rg * 2.0 - 1.0, 0.0);\n    modelNormal.z = sqrt(1.0 - modelNormal.x * modelNormal.x - modelNormal.y * modelNormal.y);\n    vec3 n = normalMatrix * modelNormal;//normalize(modelNormal + vec3(normalize(v_offset).xy * 0.125, 0.0));\n    vec3 r = reflect( normalize(v_viewPosition), n );\n    float m = 2. * sqrt(\n        pow( r.x, 2. ) +\n        pow( r.y, 2. ) +\n        pow( r.z + 1., 2. )\n    );\n    vec2 matcapUv = r.xy / m + .5;\n    vec3 matcapColor = texture2D(u_matCapTexture, matcapUv).rgb;\n\n    vec3 baseColor = vec3(infoB.b * matcapColor.g);\n    vec3 whiteColor = vec3(max(infoB.g, matcapColor.g));\n    vec3 color = mix(whiteColor, baseColor, u_inRatio) * infoB.r;\n\n    float edgeRatio = smoothstep(1.0, 0.3, infoA.b);\n    vec2 bgUvOffset = n.xy * vec2(edgeRatio * 0.4) * u_aspect;\n    // vec3 bgColor1 = texture2D(u_bgTexture, (v_uv - 0.5) - bgUvOffset + 0.5).rgb;\n    // vec3 bgColor2 = texture2D(u_bgTexture, (v_uv - 0.5) + bgUvOffset + 0.5).rgb;\n    // color = mix(color, color * (0.3 + edgeRatio) + mix(bgColor2, bgColor1, n.z), mix(0.4, 0.8, u_inRatio));\n\n    vec3 bgColor2 = texture2D(u_bgTexture, ((v_uv - 0.5) + bgUvOffset) * infoA.b + 0.5).rgb;\n    color = mix(color, color * (0.3 + edgeRatio * infoB.b) + bgColor2 * infoB.r, mix(0.3, 0.6, u_inRatio));\n    gl_FragColor = vec4(color, 1.0);\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "attribute vec3 position;\nattribute vec2 uv;\n\nuniform vec2 u_btnOffset;\nuniform vec2 u_btnScale;\n\nvarying vec2 v_uv;\n\n#include <rotate2d>\n\nvoid main () {\n    v_uv = uv;\n    gl_Position = vec4(position.xy * u_btnScale + u_btnOffset, 0.0, 1.0);\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "\nuniform sampler2D u_texture;\n\nvarying vec2 v_uv;\n\nvoid main () {\n    gl_FragColor = texture2D(u_texture, v_uv);\n    gl_FragColor.rgb = 0.075 + gl_FragColor.rgb * 0.8;\n    // gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "attribute vec3 position;\nattribute vec2 uv;\n\nuniform vec2 u_btnOffset;\nuniform vec2 u_btnScale;\n\nuniform vec2 u_uvOffset;\nuniform vec2 u_uvScale;\n\nvarying vec2 v_uv;\n\n#include <rotate2d>\n\nvoid main () {\n    v_uv = (position.xy * u_btnScale + u_btnOffset) * 0.5 + 0.5;\n\tv_uv = (v_uv - u_uvOffset) / u_uvScale;\n    gl_Position = vec4(position.xy * 2.0 + vec2(-1.0, 1.0), 0.0, 1.0);\n}";
}, function(module, canCreateDiscussions, require) {
  /**
   * @return {undefined}
   */
  function Helper() {
    /** @type {boolean} */
    var share = window.screen.height <= 900;
    parent.constructor.call(this, {
      refDomId : "home-video",
      path : "",
      backgroundColor : 0,
      videoWidth : browser.isMobile ? 480 : share ? 1440 : 1920,
      videoHeight : browser.isMobile ? 480 : share ? 900 : 1080,
      cameraWidth : 1920,
      cameraHeight : 1080,
      mouseProjectionDistanceRatio : 1.025,
      parallax : 0
    });
  }
  /**
   * @param {!AudioBuffer} o
   * @param {number} v
   * @param {number} x
   * @param {number} y
   * @param {number} i
   * @param {number} r
   * @param {number} px
   * @return {undefined}
   */
  function r(o, v, x, y, i, r, px) {
    /** @type {number} */
    x = x - .5;
    /** @type {number} */
    y = y - .5;
    var spaceClick = utils.distanceTo(x, y);
    var bearingRad = Math.atan2(y, x) + px;
    /** @type {number} */
    x = Math.cos(bearingRad) * spaceClick + .5;
    /** @type {number} */
    y = Math.sin(bearingRad) * spaceClick + .5;
    x = x + r;
    y = y + r;
    /** @type {number} */
    x = x * i;
    /** @type {number} */
    y = y * i;
    /** @type {number} */
    o[v + 0] = x;
    /** @type {number} */
    o[v + 1] = y;
  }
  /**
   * @return {undefined}
   */
  function render() {
    if (!minDpr) {
      if (X) {
        /** @type {boolean} */
        Y = true;
      } else {
        /** @type {boolean} */
        X = true;
        /** @type {boolean} */
        minDpr = true;
        var whitespace = video.play();
        if (whitespace) {
          whitespace.then(parse).catch(parse);
        } else {
          parse();
        }
      }
    }
  }
  /**
   * @return {undefined}
   */
  function reset() {
    if (minDpr) {
      if (X) {
        /** @type {boolean} */
        Y = false;
      } else {
        /** @type {boolean} */
        X = true;
        /** @type {boolean} */
        minDpr = false;
        video.pause();
        parse();
      }
    }
  }
  /**
   * @return {undefined}
   */
  function parse() {
    /** @type {boolean} */
    X = false;
    var y = Y;
    /** @type {null} */
    Y = null;
    if (true === y) {
      render();
    } else {
      if (false === y) {
        reset();
      }
    }
  }
  /**
   * @return {undefined}
   */
  function onHeadClick() {
    /** @type {boolean} */
    J = false;
  }
  /**
   * @return {undefined}
   */
  function update() {
    if (minDpr && video.readyState >= video.HAVE_FUTURE_DATA && (ignoreLowBandwidth || video.currentTime > endTime)) {
      /** @type {boolean} */
      K = true;
      /** @type {boolean} */
      ignoreLowBandwidth = true;
      /** @type {boolean} */
      texture.needsUpdate = true;
      /** @type {number} */
      var sequence_values = Math.floor(60 * video.currentTime);
      if (browser.isUC) {
        /** @type {number} */
        value = sequence_values;
        if (currentTime === video.currentTime) {
          time = time + options.deltaTime;
          /** @type {number} */
          time = time % 12;
          /** @type {number} */
          value = Math.floor(60 * time);
        } else {
          time = video.currentTime;
        }
      } else {
        if (0 === (value = function() {
          _this.renderGeometry(g, limitObj, p);
          _this.renderer.readRenderTargetPixels(p, 0, 0, a, h, pixelBuffer);
          /** @type {number} */
          var x = w >> 1;
          /** @type {number} */
          var found = 0;
          /** @type {number} */
          var y = 0;
          for (; y < i; y++) {
            /** @type {number} */
            found = found | (pixelBuffer[4 * (x + y * w + a * x)] > 127 ? 1 << y : 0);
          }
          return found;
        }())) {
          value = prevValue + 1;
        } else {
          prevValue = value;
        }
      }
    }
    if (value > 720) {
      /** @type {number} */
      value = value - 720;
    }
  }
  var browser = require(5);
  var projectConfig = require(3);
  var options = require(1);
  var utils = require(2);
  var TagHourlyStat = require(12);
  var THREE = require(0);
  var manager = require(10);
  var _this = require(4);
  var patch = require(6);
  var me = require(158);
  var parent = manager.prototype;
  /** @type {!Object} */
  var controller = Helper.prototype = Object.create(parent);
  /** @type {function(): undefined} */
  controller.constructor = Helper;
  /**
   * @return {undefined}
   */
  controller.preInit = function() {
    parent.preInit.call(this);
    this.sceneRenderTarget = _this.createRenderTarget(1, 1, true);
    /** @type {boolean} */
    this.sceneRenderTarget.depthBuffer = true;
    /** @type {boolean} */
    this.sceneRenderTarget.stencilBuffer = true;
    this.blurredSceneRenderTarget = _this.createRenderTarget(1, 1, true);
    me.init();
    (tex = new THREE.Texture(options.loader.add(projectConfig.cdnPath + "visuals/homeVideo/model_n.jpg").content)).wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.magFilter = tex.minFilter = THREE.LinearFilter;
    /** @type {boolean} */
    tex.flipY = false;
    /** @type {boolean} */
    tex.needsUpdate = true;
    (texture1 = new THREE.Texture(options.loader.add(projectConfig.cdnPath + "visuals/homeVideo/bottom_n.jpg", {
      loadThrough : false
    }).content)).wrapS = texture1.wrapT = THREE.RepeatWrapping;
    /** @type {boolean} */
    texture1.needsUpdate = true;
    (video = options.loader.add(projectConfig.videoCdnPath + "visuals/homeVideo/" + this.videoHeight + ".mp4", {
      crossOrigin : "anonymous"
    }).content).addEventListener("ended", onHeadClick);
    (texture = new THREE.Texture(video)).magFilter = texture.minFilter = THREE.LinearFilter;
    /** @type {boolean} */
    texture.generateMipmaps = false;
    var jimple = this;
    options.loader.add(projectConfig.assetPath + "visuals/homeVideo/room.glb", {
      type : "any",
      weight : 1,
      hasLoading : true,
      loadFunc : options.GLTFLoadFunc,
      onLoad : function(data) {
        var n = data.scene.children;
        jimple._initMaterials(n);
      }
    });
    options.loader.add(projectConfig.assetPath + "visuals/homeVideo/tagline.buf", {
      type : "xhr",
      responseType : "arraybuffer",
      weight : 1,
      onLoad : function(buffer) {
        l = new THREE.BufferGeometry;
        /** @type {number} */
        var byteOffset = 0;
        l.setAttribute("position", new THREE.BufferAttribute(new Float32Array(buffer, byteOffset, 8160), 2));
        /** @type {number} */
        byteOffset = byteOffset + 32640;
        l.setAttribute("a_info", new THREE.BufferAttribute(new Uint8Array(buffer, byteOffset, 4080), 1, true));
        /** @type {number} */
        byteOffset = byteOffset + 4080;
        l.setIndex(new THREE.BufferAttribute(new Uint16Array(buffer, byteOffset, 12051), 1));
      }
    });
    options.loader.add(projectConfig.assetPath + "visuals/homeVideo/data.buf", {
      type : "xhr",
      responseType : "arraybuffer",
      weight : 1,
      onLoad : function(data) {
        /** @type {!Float32Array} */
        result = new Float32Array(data);
        /** @type {number} */
        param = result.length / 3;
      }
    });
  };
  /**
   * @return {undefined}
   */
  controller.init = function() {
    if (parent.init.call(this), i = utils.powerTwoCeilingBase(param), a = w * i, p = _this.createRenderTarget(a, h, true, true), pixelBuffer = new Uint8Array(a * h * 4), (g = new THREE.BufferGeometry).setAttribute("position", new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 4, -1, 0, -1, 4, 0]), 3)), g.setAttribute("uv", new THREE.BufferAttribute(new Float32Array([0, 1, a / this.videoWidth * 2.5, 1, 0, 1 - h / this.videoHeight * 2.5]), 2)), program.u_timePixelUvClamp.value.set((a + .5) / this.videoWidth, 
    1 - (w + .5) / this.videoHeight), limitObj = new THREE.RawShaderMaterial({
      uniforms : {
        u_texture : program.u_videoTexture
      },
      depthTest : false,
      depthWrite : false,
      transparent : true,
      blending : THREE.NoBlending,
      vertexShader : _this.precisionPrefix + require(159),
      fragmentShader : _this.precisionPrefix + require(29)
    }), camera = this.camera.clone(), (object = new THREE.PointLight(9282756, .8, 5, 2)).position.set(0, 0, 0), this.scene.add(object), video.muted = true, video.setAttribute("playsinline", "playsinline"), video.setAttribute("webkit-playsinline", "webkit-playsinline"), video.loop = true, lookAt = new THREE.Vector3, resultObject = new THREE.RawShaderMaterial({
      uniforms : {
        u_texture : {
          value : this.blurredSceneRenderTarget.texture
        },
        u_offset2d : program.u_offset2d,
        u_scale2d : program.u_scale2d,
        u_opacity : program.u_opacity,
        u_aspect : {
          value : new THREE.Vector2(this.cameraHeight / this.cameraWidth, 1)
        },
        u_ratio : {
          value : 0
        },
        u_showRatio : {
          value : 0
        },
        u_taglineWidth : {
          value : 7
        },
        u_time : {
          value : 0
        },
        u_solidLineInfo : {
          value : new THREE.Vector4(0, 0, -.9975, 1)
        },
        u_outlineLineInfo : {
          value : new THREE.Vector4(0, 0, .9975, 0)
        }
      },
      vertexShader : _this.precisionPrefix + require(160),
      fragmentShader : _this.precisionPrefix + require(161),
      transparent : true
    }), window.gui) {
      var gui = this.gui;
      var app = gui.addFolder("video scatter");
      app.add(program.u_lightScatterDivider, "value", 0, 100, 1E-4).name("u_lightScatterDivider");
      app.add(program.u_lightScatterPowInv, "value", 0, 1, 1E-4).name("u_lightScatterPowInv");
      app.open();
      var folder = gui.addFolder("video pointLight");
      folder.addColor(object, "color");
      folder.add(this, "mouseProjectionDistanceRatio", 0, 2, 1E-4);
      folder.add(object, "intensity", 0, 1, 1E-4);
      folder.add(object, "distance", 0, 50, 1E-4);
      folder.add(object, "decay", 0, 5, 1E-4);
      folder.open();
      var self = gui.addFolder("video playback");
      self.add(video, "play");
      self.add(video, "pause");
      self.open();
    }
    this.precompile();
  };
  /**
   * @param {!Object} i
   * @return {undefined}
   */
  controller._initMaterials = function(i) {
    vectorHelix = new THREE.Vector3(0, 0, 0);
    program = {
      u_videoTexture : {
        value : texture
      },
      u_videoAspect : {
        value : new THREE.Vector2(this.videoWidth, this.videoHeight)
      },
      u_videoResolution : {
        value : new THREE.Vector2(this.videoWidth, this.videoHeight)
      },
      u_videoUvOffset : {
        value : new THREE.Vector2(0, 0)
      },
      u_videoUvScale : {
        value : new THREE.Vector2(1, 1)
      },
      u_resolution : {
        value : new THREE.Vector2(1, 1)
      },
      u_cameraPosition : {
        value : this.camera.position
      },
      u_reflectionCameraPosition : {
        value : me.reflectionCamera.position
      },
      u_lightPosition : {
        value : vectorHelix
      },
      u_lightScatterDivider : {
        value : 70
      },
      u_lightScatterPowInv : {
        value : .5
      },
      u_scale2d : {
        value : new THREE.Vector2(1, 1)
      },
      u_offset2d : {
        value : new THREE.Vector2(0, 0)
      },
      u_textureMap : {
        value : new THREE.Vector4(0, 0, 1, 1)
      },
      u_timePixelUvClamp : {
        value : new THREE.Vector2
      },
      u_opacity : {
        value : 1
      }
    };
    var e = i.length;
    var geometry = void 0;
    for (; e--;) {
      var child = i[e];
      var result = patch(THREE.UniformsUtils.merge([THREE.UniformsLib.lights]), {
        u_diffuse : {
          value : new THREE.Color(16777215)
        },
        u_specular : {
          value : new THREE.Color(16777215)
        },
        u_shininess : {
          value : 1
        },
        u_mvp : {
          value : new THREE.Matrix4
        }
      }, program);
      var material = child.material = child.originalMaterial = new THREE.ShaderMaterial({
        uniforms : result,
        vertexShader : require(55),
        fragmentShader : require(56),
        lights : true,
        blending : THREE.NoBlending,
        transparent : false,
        dithering : true
      });
      var source = child.reflectionMaterial = new THREE.ShaderMaterial({
        uniforms : result,
        vertexShader : require(55),
        fragmentShader : require(56),
        lights : true,
        blending : THREE.NoBlending,
        transparent : false,
        dithering : true
      });
      switch(child.reflectionMaterial.defines.IS_REFLECTION = true, child.name) {
        case "model":
          node = child;
          result.u_normalTexture = {
            value : tex
          };
          /** @type {boolean} */
          source.defines.IS_MODEL = material.defines.IS_MODEL = true;
          source.vertexColors = material.vertexColors = THREE.VertexColors;
          /** @type {boolean} */
          source.extensions.derivatives = material.extensions.derivatives = true;
          break;
        case "walls":
          result.u_diffuse.value.setHex(4210752);
          break;
        case "bottom":
          result.u_diffuse.value.setHex(2236962);
          result.u_specular.value.setHex(14671871);
          geometry = child.geometry;
          result.u_normalTexture = {
            value : texture1
          };
          /** @type {boolean} */
          source.defines.IS_BOTTOM = material.defines.IS_BOTTOM = true;
          source.vertexColors = material.vertexColors = THREE.VertexColors;
          /** @type {boolean} */
          source.extensions.derivatives = material.extensions.derivatives = true;
          break;
        case "panel":
          t = child;
          result.u_diffuse.value.setHex(0);
          result.u_specular.value.setHex(0);
          result.u_reflectionTexture = {
            value : me.renderTarget.texture
          };
          result.u_reflectionTextureMatrix = {
            value : me.textureMatrix
          };
          /** @type {boolean} */
          source.defines.IS_PANEL = material.defines.IS_PANEL = true;
      }
      keys.push(child);
      this.scene.add(child);
    }
    var data = geometry.attributes.uv.array;
    /** @type {!Float32Array} */
    var colors = new Float32Array(data.length);
    /** @type {number} */
    var fontFamily = 35 / 180 * Math.PI;
    /** @type {number} */
    var v = 0;
    /** @type {number} */
    var index = 0;
    /** @type {number} */
    var endStreams = data.length / 2;
    for (; v < endStreams; v++) {
      var d = data[index + 0];
      var q = data[index + 1];
      r(data, index, d, q, 6, 0, 0);
      r(colors, index, d, q, 9, 1.21, fontFamily);
      /** @type {number} */
      index = index + 2;
    }
    geometry.setAttribute("a_uv2", new THREE.BufferAttribute(colors, 2));
    var topLeft = new THREE.Vector3(-4.36079, .6, -4);
    var bottomRight = new THREE.Vector3(4.36079, 3.87477, -3.98);
    var g = t.geometry;
    var config = new THREE.Vector3(0, .5 * (topLeft.y - bottomRight.y), 3.98);
    var o = new THREE.Vector3(.5 / 4.36079, .5 / Math.abs(bottomRight.y - topLeft.y), 1);
    g.rotateX(Math.PI / 2);
    /** @type {number} */
    t.rotation.x = 0;
    g.translate(config.x, config.y, config.z);
    g.scale(o.x, o.y, o.z);
    t.position.set(-config.x, -config.y, -config.z);
    t.scale.set(1 / o.x, 1 / o.y, 1 / o.z);
  };
  /**
   * @return {undefined}
   */
  controller.resize = function() {
    parent.resize.call(this);
    me.resize(options.width, options.height);
  };
  /**
   * @return {undefined}
   */
  controller.onDomRectUpdate = function() {
    /** @type {number} */
    this.paddingTop = 0 | utils.cMap(this.refDomRect.top, 0, options.height / 2, options.height / 20, options.height / 10);
  };
  /** @type {function(): undefined} */
  controller.playVideo = render;
  /** @type {function(): undefined} */
  controller.pauseVideo = reset;
  /**
   * @param {?} ctx
   * @return {undefined}
   */
  controller.beforeRender = function(ctx) {
    /** @type {number} */
    var i = keys.length;
    for (; i--;) {
      /** @type {boolean} */
      keys[i].visible = true;
    }
    /** @type {boolean} */
    node.visible = false;
  };
  /**
   * @param {!Function} renderer
   * @return {undefined}
   */
  controller.afterRender = function(renderer) {
    var camera = _this.getColorState();
    /** @type {boolean} */
    _this.renderer.autoClear = true;
    /** @type {boolean} */
    _this.renderer.autoClearColor = false;
    /** @type {boolean} */
    _this.renderer.autoClearDepth = false;
    /** @type {number} */
    var newWidth = Math.ceil(.25 * this.width) || 0;
    /** @type {number} */
    var tabHeight = Math.ceil(.25 * this.height) || 0;
    this.blurredSceneRenderTarget.setSize(newWidth, tabHeight);
    TagHourlyStat.blur9(4, .25, this.sceneRenderTarget, null, this.blurredSceneRenderTarget, true);
    renderer.setRenderTarget(null);
    renderer.setScissorTest(true);
    renderer.setViewport(this.left, options.height - this.top - this.height, this.width, this.height);
    renderer.setScissor(this.left, options.height - this.top - this.height, this.width, this.height);
    _this.copy(this.sceneRenderTarget.texture);
    /** @type {number} */
    var i = keys.length;
    for (; i--;) {
      /** @type {boolean} */
      keys[i].visible = false;
    }
    /** @type {boolean} */
    node.visible = true;
    renderer.render(this.scene, this.camera);
    /** @type {number} */
    i = keys.length;
    for (; i--;) {
      /** @type {boolean} */
      keys[i].visible = true;
    }
    /** @type {boolean} */
    node.visible = false;
    _this.renderGeometry(l, resultObject);
    renderer.setScissorTest(false);
    _this.setColorState(camera);
  };
  /**
   * @param {number} i
   * @return {undefined}
   */
  controller.update = function(i) {
    if (this.testViewport(), this.needsRender) {
      /** @type {number} */
      var height = Math.min(this.viewportHeight, options.height);
      /** @type {number} */
      var h = Math.min(0, height - this.height) * utils.sign(this.viewportTop >= this.top ? -1 : 1);
      program.u_resolution.value.set(this.width, this.height);
      /** @type {number} */
      program.u_videoUvOffset.value.x = -this.left;
      /** @type {number} */
      program.u_videoUvOffset.value.y = this.top - options.height + this.height - .5 * h;
      var params = program.u_offset2d.value;
      var point = program.u_scale2d.value;
      var result = program.u_videoUvScale.value;
      /** @type {number} */
      params.y = h / this.height;
      /** @type {number} */
      var scale = Math.max(1, 1 / (this.videoHeight / this.videoWidth * this.width / height));
      if (point.x = this.cameraWidth / this.cameraHeight * this.videoHeight / this.videoWidth * scale, point.y = this.width / this.height * this.videoHeight / this.videoWidth * scale, result.y = point.y, result.x = scale, this.updateMouse(1 / point.x, 1 / point.y, -params.x, -params.y), U && this.playVideo(), options.onUpdateEnded.addOnce(update, this), K) {
        currentTime = video.currentTime;
        if (value >= param) {
          /** @type {number} */
          value = 0;
        }
        /** @type {number} */
        var i = 3 * value;
        camera.position.fromArray(result, i);
        lookAt.set(0, 1.2, -4);
        camera.lookAt(lookAt);
        this.camera.lookAt(lookAt);
        /** @type {number} */
        this.camera.aspect = camera.aspect = this.cameraWidth / this.cameraHeight;
        /** @type {number} */
        var distance_to_screen = 35 * Math.PI / 180;
        /** @type {number} */
        var d = 45 * Math.PI / 180;
        /** @type {number} */
        var camwidth_at_default_face_cm = this.cameraHeight * d / (1 * this.cameraWidth);
        /** @type {number} */
        this.camera.fov = camera.fov = 2 * Math.atan(camwidth_at_default_face_cm / 2 / distance_to_screen) * 180 / Math.PI;
        this.camera.updateProjectionMatrix();
        camera.updateProjectionMatrix();
        var h = utils.cUnMix(0, 60, value);
        /** @type {number} */
        h = h * (value > 360 ? utils.cUnMix(360, 420, value) : utils.cUnMix(360, 300, value));
        /** @type {number} */
        h = h * utils.cUnMix(720, 660, value);
        if (J) {
          /** @type {number} */
          h = h * utils.cUnMix(60 * endTime, 60 * (endTime + 1), value);
        }
        program.u_opacity.value = h;
        /** @type {number} */
        resultObject.uniforms.u_solidLineInfo.value.y = .1 + (value > 360 ? -.14 : .175);
        /** @type {number} */
        resultObject.uniforms.u_outlineLineInfo.value.y = .1 + (value > 360 ? .175 : -.14);
        /** @type {number} */
        resultObject.uniforms.u_ratio.value = value / 720;
      }
      /** @type {boolean} */
      var letterCandidate = this.inRatio > .7;
      if (letterCandidate !== initialLetter) {
        /** @type {boolean} */
        initialLetter = letterCandidate;
        TweenLite.to(resultObject.uniforms.u_showRatio, letterCandidate ? 2 : 1.35, {
          value : letterCandidate ? 1 : 0
        });
      }
      /** @type {number} */
      resultObject.uniforms.u_time.value = (resultObject.uniforms.u_time.value + .2 * i) % 1;
      object.position.copy(this.mouse3);
      /** @type {number} */
      object.position.y = Math.max(object.position.y, .04);
      vectorHelix.copy(object.position);
      this.camera.position.copy(camera.position);
      this.camera.quaternion.copy(camera.quaternion);
      this.camera.rotateY(-.015 * utils.clamp(this.mouse.x, -1, 1));
      this.camera.rotateX(.015 * utils.clamp(this.mouse.y, -1, 1));
      this.scene.updateMatrixWorld(true);
      this.camera.updateMatrixWorld(true);
      camera.updateMatrixWorld(true);
      /** @type {number} */
      var length = keys.length;
      for (; length--;) {
        var object = keys[length];
        var mat = object.material.uniforms.u_mvp.value;
        mat.multiplyMatrices(camera.matrixWorldInverse, object.matrixWorld);
        mat.premultiply(camera.projectionMatrix);
      }
      if (ignoreLowBandwidth) {
        me.update(t, this.scene, this.camera);
        this.render();
      }
    } else {
      if (U) {
        this.pauseVideo();
      }
    }
    /** @type {boolean} */
    K = false;
  };
  /** @type {number} */
  var w = 8;
  var i = void 0;
  var a = void 0;
  /** @type {number} */
  var h = w;
  var p = void 0;
  var pixelBuffer = void 0;
  var g = void 0;
  var limitObj = void 0;
  /** @type {!Array} */
  var keys = [];
  var camera = void 0;
  var video = void 0;
  var texture = void 0;
  var tex = void 0;
  var texture1 = void 0;
  var result = void 0;
  var param = void 0;
  var lookAt = void 0;
  var program = void 0;
  var node = void 0;
  var t = void 0;
  var object = void 0;
  var vectorHelix = void 0;
  /** @type {boolean} */
  var U = true;
  var l = void 0;
  var resultObject = void 0;
  /** @type {boolean} */
  var initialLetter = false;
  /** @type {number} */
  var currentTime = 0;
  /** @type {number} */
  var time = 0;
  /** @type {number} */
  var prevValue = 0;
  /** @type {number} */
  var value = 0;
  /** @type {number} */
  var endTime = .75;
  /** @type {boolean} */
  var X = false;
  /** @type {null} */
  var Y = null;
  /** @type {boolean} */
  var minDpr = false;
  /** @type {boolean} */
  var K = false;
  /** @type {boolean} */
  var ignoreLowBandwidth = false;
  /** @type {boolean} */
  var J = true;
  module.exports = new Helper;
}, function(canCreateDiscussions, options, require) {
  var THREE = require(0);
  var Texture = require(4);
  var viewer = require(1);
  /**
   * @return {undefined}
   */
  options.init = function() {
    p = new THREE.Plane;
    point = new THREE.Vector3;
    position = new THREE.Vector3;
    pos = new THREE.Vector3;
    transform = new THREE.Matrix4;
    a = new THREE.Vector3(0, 0, -1);
    self = new THREE.Vector4;
    vertex = new THREE.Vector4;
    target = new THREE.Vector3;
    view = new THREE.Vector3;
    x = new THREE.Vector4;
    camera = options.reflectionCamera = new THREE.PerspectiveCamera;
    matrix = options.textureMatrix = new THREE.Matrix4;
    /** @type {boolean} */
    (renderTarget = options.renderTarget = Texture.createRenderTarget(1, 1)).depthBuffer = true;
  };
  /**
   * @param {number} el
   * @param {number} x
   * @return {undefined}
   */
  options.resize = function(el, x) {
    /** @type {number} */
    var mousewheelVel = el / 16;
    renderTarget.setSize(~~(8.72158 * mousewheelVel), ~~Math.abs((3.87477 - .6) * mousewheelVel));
  };
  /**
   * @param {?} object
   * @param {!Object} el
   * @param {!Object} data
   * @return {undefined}
   */
  options.update = function(object, el, data) {
    if (position.setFromMatrixPosition(object.matrixWorld), pos.setFromMatrixPosition(data.matrixWorld), transform.extractRotation(object.matrixWorld), point.set(0, 0, 1), point.applyMatrix4(transform), target.subVectors(position, pos), target.dot(point) > 0) {
      return;
    }
    target.reflect(point).negate();
    target.add(position);
    transform.extractRotation(data.matrixWorld);
    a.set(0, 0, -1);
    a.applyMatrix4(transform);
    a.add(pos);
    view.subVectors(position, a);
    view.reflect(point).negate();
    view.add(position);
    camera.position.copy(target);
    camera.up.set(0, 1, 0);
    camera.up.applyMatrix4(transform);
    camera.up.reflect(point);
    camera.lookAt(view);
    camera.far = data.far;
    camera.updateMatrixWorld();
    camera.projectionMatrix.copy(data.projectionMatrix);
    /** @type {number} */
    camera.userData.recursion = 0;
    matrix.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1);
    matrix.multiply(camera.projectionMatrix);
    matrix.multiply(camera.matrixWorldInverse);
    matrix.multiply(object.matrixWorld);
    p.setFromNormalAndCoplanarPoint(point, position);
    p.applyMatrix4(camera.matrixWorldInverse);
    self.set(p.normal.x, p.normal.y, p.normal.z, p.constant);
    var m = camera.projectionMatrix;
    /** @type {number} */
    x.x = (Math.sign(self.x) + m.elements[8]) / m.elements[0];
    /** @type {number} */
    x.y = (Math.sign(self.y) + m.elements[9]) / m.elements[5];
    /** @type {number} */
    x.z = -1;
    /** @type {number} */
    x.w = (1 + m.elements[10]) / m.elements[14];
    self.multiplyScalar(2 / self.dot(x));
    m.elements[2] = self.x;
    m.elements[6] = self.y;
    /** @type {number} */
    m.elements[10] = self.z + 1 - y;
    m.elements[14] = self.w;
    var renderer = viewer.renderer;
    /** @type {number} */
    var z = 0;
    for (; z < el.children.length; z++) {
      var self = el.children[z];
      if (self.reflectionMaterial) {
        self.material = self.reflectionMaterial;
      }
    }
    /** @type {boolean} */
    object.visible = false;
    var textureTarget = renderer.getRenderTarget();
    var tmpEnabled = renderer.xr.enabled;
    var currentSceneAutoUpdate = renderer.shadowMap.autoUpdate;
    /** @type {boolean} */
    renderer.xr.enabled = false;
    /** @type {boolean} */
    renderer.shadowMap.autoUpdate = false;
    renderer.setRenderTarget(renderTarget);
    renderer.clear();
    renderer.render(el, camera);
    renderer.setRenderTarget(null);
    renderer.xr.enabled = tmpEnabled;
    renderer.shadowMap.autoUpdate = currentSceneAutoUpdate;
    renderer.setRenderTarget(textureTarget);
    renderer.setScissorTest(false);
    var b = data.bounds;
    if (void 0 !== b) {
      var a = renderer.getSize();
      var scale = renderer.getPixelRatio();
      /** @type {number} */
      vertex.x = b.x * a.width * scale;
      /** @type {number} */
      vertex.y = b.y * a.height * scale;
      /** @type {number} */
      vertex.z = b.z * a.width * scale;
      /** @type {number} */
      vertex.w = b.w * a.height * scale;
      renderer.state._viewport(vertex);
    }
    /** @type {boolean} */
    object.visible = true;
    /** @type {number} */
    var i = 0;
    for (; i < el.children.length; i++) {
      var pointcloud = el.children[i];
      if (pointcloud.originalMaterial) {
        pointcloud.material = pointcloud.originalMaterial;
      }
    }
  };
  /** @type {null} */
  var renderTarget = options.renderTarget = null;
  /** @type {null} */
  var matrix = options.textureMatrix = null;
  /** @type {null} */
  var camera = options.reflectionCamera = null;
  var p = void 0;
  var point = void 0;
  var position = void 0;
  var pos = void 0;
  var transform = void 0;
  var a = void 0;
  var self = void 0;
  var vertex = void 0;
  var target = void 0;
  var x = void 0;
  var view = void 0;
  /** @type {number} */
  var y = 0;
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "attribute vec3 position;\nattribute vec2 uv;\n\nvarying vec2 v_uv;\n\nvoid main() {\n    v_uv = uv;\n    gl_Position = vec4( position, 1.0 );\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "attribute vec2 position;\nattribute float a_info;\n\nuniform vec4 u_solidLineInfo;\nuniform vec4 u_outlineLineInfo;\n\nuniform vec2 u_offset2d;\nuniform vec2 u_scale2d;\nuniform vec2 u_aspect;\nuniform float u_ratio;\nuniform float u_taglineWidth;\nuniform float u_showRatio;\nuniform float u_time;\n\nvarying vec2 v_uv;\n// varying vec3 v_color;\nvarying float v_showRatio;\nvarying float v_blink;\n\nconst float offset = 0.2;\n\n#include <rotate2d>\n\nvec3 getPos (vec2 p, vec4 lineInfo) {\n\tvec4 pos = vec4(p.xy * 1.5 + lineInfo.xy, 0.0, 1.0);\n\n\tpos.xyw *= u_aspect.xyx;\n    pos.xyw *= u_scale2d.xyx;\n    pos.xy += u_offset2d;\n\n\tpos.x += mix(-1.0, -1.0 - pos.w * u_taglineWidth * offset, lineInfo.w);\n\tpos.x -= (pos.w * u_taglineWidth * (1.0 - offset) - 2.0) * mix(0.85, 1.0, lineInfo.w) * u_ratio;\n\n\treturn vec3((rotate2d((pos.xy - u_offset2d) / u_aspect.xy / u_scale2d.xy - lineInfo.xy - 0.5, -0.1) + 0.5 + lineInfo.xy) * u_aspect.xy * u_scale2d.xy + u_offset2d, lineInfo.z);\n}\n\nvoid main () {\n\tfloat rnd1 = fract(a_info * 3225.434);\n\tfloat rnd2 = fract(a_info * 433.326236);\n\tv_showRatio = smoothstep(rnd1 * 0.35, 1.0 - rnd2 * 0.35, u_showRatio);\n\t\n\tvec4 lineInfo = mix(u_solidLineInfo, u_outlineLineInfo, step(0.5, a_info));\n\n\tvec4 pos = vec4(getPos(position * vec2(1.0, 1.0 + rnd1 * 5.0 * (1.0 - v_showRatio)) + vec2(0.0, rnd2 * sign(lineInfo.y) * (1.0 - v_showRatio * v_showRatio)), lineInfo), 1.0);\n\n\tv_uv = pos.xy * 0.5 + 0.5;\n\n\tpos.w = 1.0;\n\tgl_Position = pos;\n\tv_blink = max(0.05, step(0.0, -lineInfo.y));\n\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "uniform sampler2D u_texture;\nuniform float u_opacity;\n\nvarying vec2 v_uv;\nvarying float v_showRatio;\nvarying float v_blink;\n\nvoid main () {\n\tvec3 blurredColor = texture2D(u_texture, v_uv).rgb;\n\tgl_FragColor = vec4(mix(blurredColor, vec3(1.0), v_blink), u_opacity * v_showRatio);\n}";
}, function(module, canCreateDiscussions, require) {
  /**
   * @return {undefined}
   */
  function Class() {
    parent.constructor.call(this, {
      id : "about",
      path : "about",
      domRect : null,
      aliases : ["about"],
      audioId : "about"
    });
  }
  /**
   * @return {undefined}
   */
  function click() {
    if (widget.onClick()) {
      /** @type {boolean} */
      _ = true;
    }
  }
  var widget = require(163);
  var pn2 = (require(3), require(5));
  var s = require(1);
  var _Events = require(11);
  var Vignette = require(2);
  var core = require(9);
  var self = require(28);
  var transport = require(19);
  var parent = require(18).prototype;
  /** @type {!Object} */
  var opts = Class.prototype = Object.create(parent);
  /** @type {function(): undefined} */
  opts.constructor = Class;
  /**
   * @param {!Object} type
   * @param {!Object} data
   * @return {undefined}
   */
  opts.preInit = function(type, data) {
    this.domRect = new _Events({
      refDom : data
    });
    if (s.isSupportWebGL) {
      widget.preInit();
    }
    /** @type {(Element|null)} */
    objectNodeBox = document.getElementById("about-lusion");
    /** @type {!CSSStyleDeclaration} */
    m = objectNodeBox.querySelector(".sec-context-inner").style;
    /** @type {(Element|null)} */
    noValueContainer = document.getElementById("about-services");
    /** @type {!CSSStyleDeclaration} */
    styles = noValueContainer.querySelector(".sec-context-inner").style;
  };
  /**
   * @param {number} obj
   * @return {undefined}
   */
  opts.init = function(obj) {
    if (s.isSupportWebGL) {
      widget.init();
      var t = this.currentDom;
      core.add(t, "click", click);
      value = t.dataset.baseText;
    }
    parent.init.call(this);
  };
  /**
   * @param {number} width
   * @return {undefined}
   */
  opts.show = function(width) {
  };
  /**
   * @return {undefined}
   */
  opts.hide = function() {
  };
  /**
   * @param {?} canCreateDiscussions
   * @return {?}
   */
  opts.getScrollToFromRoute = function(canCreateDiscussions) {
    return "about";
  };
  /**
   * @return {undefined}
   */
  opts.resize = function() {
    if (this.hasInitialized) {
      this.domRect.testViewport(true);
      if (s.isSupportWebGL) {
        widget.resize();
      }
    }
  };
  /**
   * @param {number} fn
   * @param {number} t
   * @return {undefined}
   */
  opts.update = function(fn, t) {
    if (this.hasInitialized) {
      if (s.isSupportWebGL) {
        widget.update(fn, t, Math.ceil(this.domRect.refDomRect.height));
      }
      /** @type {number} */
      var i = (t - s.height) / (.75 * s.height);
      var opacity = Vignette.smoothstep(0, .5, Math.max(0, 1 - Math.abs(i)));
      if (m.opacity = opacity, opacity > 0) {
        /** @type {number} */
        var u = Math.max(Math.abs(i) - .25, 0) * Math.sign(i) * -200;
        /** @type {string} */
        m.transform = "translate3d(0," + (i * s.height * .75 + u) + "px,0)";
      }
      if (i = (t - 3 * s.height) / (.75 * s.height), opacity = Vignette.smoothstep(0, .5, Math.max(0, 1 - Math.abs(i))), styles.opacity = opacity, opacity > 0) {
        /** @type {number} */
        var d = Math.max(Math.abs(i) - .25, 0) * Math.sign(i) * -200;
        /** @type {string} */
        styles.transform = "translate3d(0," + (i * s.height * .75 + d) + "px,0)";
      }
      if (s.isSupportWebGL) {
        /** @type {boolean} */
        var CodeMirror_folding_widget = false;
        if (pn2.isMobile || (s.scrollTop > 5 || _) && s.mouse.y < widget.bottom && transport.isIdle()) {
          if (_) {
            if (self.baseText === value) {
              self.setBaseText();
            }
          } else {
            self.setBaseText(value);
          }
          /** @type {boolean} */
          CodeMirror_folding_widget = true;
        } else {
          if (self.baseText === value) {
            self.setBaseText();
          }
        }
        /** @type {boolean} */
        widget.isClickable = CodeMirror_folding_widget;
      }
    }
    parent.update.call(this, fn, t);
  };
  var objectNodeBox = void 0;
  var m = void 0;
  var noValueContainer = void 0;
  var styles = void 0;
  var value = void 0;
  /** @type {boolean} */
  var _ = false;
  module.exports = new Class;
}, function(self, canCreateDiscussions, require) {
  /**
   * @return {undefined}
   */
  function b() {
    p.constructor.call(this, {
      refDomId : "about-hero",
      backgroundColor : 460811,
      path : "about",
      parallax : 1.2,
      speed : .8,
      actionSpeedScale : 1,
      lineCount : 384,
      bloomAmount : 6,
      bloomRadius : .1,
      bloomThreshold : 0,
      bloomSmoothWidth : .75,
      particleDieSpeed : 1,
      usePostprocessing : true,
      isClickable : false
    });
  }
  var THREE = require(0);
  var event = require(57);
  var obj = require(172);
  var params = require(175);
  var scope = require(176);
  var sfx = require(16);
  var SettingsManager = require(10);
  var State = require(59);
  var platform = require(5);
  var TagHourlyStat = require(3);
  var options = require(1);
  var utils = require(2);
  var p = SettingsManager.prototype;
  /** @type {!Object} */
  var opts = b.prototype = Object.create(p);
  /** @type {function(): undefined} */
  opts.constructor = b;
  /**
   * @return {undefined}
   */
  opts.preInit = function() {
    p.preInit.call(this);
    if (TagHourlyStat.USE_SMAA) {
      this.postprocessingQueue.push(this.getSmaa());
    }
    result = this.getBloom();
    this.postprocessingQueue.push(result);
    sfx.preload("obstacle");
    sfx.preload("obstacle2");
    event.preInit(this);
    params.preInit(this);
  };
  /**
   * @return {undefined}
   */
  opts.init = function() {
    p.init.call(this);
    bone = new THREE.Object3D;
    /** @type {number} */
    (node = new State).positionAmplitude = .22;
    /** @type {number} */
    node.positionFrequency = 4;
    /** @type {number} */
    node.rotationAmplitude = .15;
    /** @type {number} */
    node.rotationFrequency = 1;
    event.init(this);
    this.scene.add(event.container);
    params.init(this);
    this.scene.add(params.container);
    obj.init(this);
    this.scene.add(obj.mesh);
    scope.init(this);
    this.scene.add(scope.mesh);
    currentV3Focus = new THREE.Vector3(0, .65, 0);
    /** @type {!Array} */
    points = [{
      position : (new THREE.Vector3(0, 3.5, 4.5)).multiplyScalar(.7),
      refOffset : new THREE.Vector3(-.55, 0, .5),
      weight : 1
    }, {
      position : (new THREE.Vector3(platform.isMobile ? 3 : 1, 1.75, platform.isMobile ? 0 : 3)).multiplyScalar(.5),
      refOffset : new THREE.Vector3(.75, 0, 0),
      weight : 3
    }, {
      position : (new THREE.Vector3(platform.isMobile ? 4 : 2, 2, 0)).multiplyScalar(.5),
      refOffset : new THREE.Vector3(1, 0, platform.isMobile ? 0 : -1),
      weight : 1.5
    }, {
      position : (new THREE.Vector3(1, 1, -12)).multiplyScalar(.5),
      refOffset : new THREE.Vector3(-1, -2, 0),
      weight : 0
    }];
    /** @type {number} */
    sum = 0;
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var numPts = points.length;
    for (; i < numPts; i++) {
      var c = points[i];
      c.threshold = sum;
      sum = sum + c.weight;
    }
    if (window.gui) {
      var collection = this.gui;
      var $ = collection.addFolder("model");
      $.add(this, "speed", 0, 1, 1E-4).listen();
      $.add(event, "wireSpeed", 0, 3, 1E-4);
      $.add(event, "emit");
      $.add({
        jump : function() {
          event.playMixedAction(true);
        }
      }, "jump");
      $.add({
        slide : function() {
          event.playMixedAction(false);
        }
      }, "slide");
      $.open();
      var other = collection.addFolder("post");
      other.add(this, "bloomAmount", 0, 20, 1E-4).name("bloomAmount");
      other.add(this, "bloomRadius", -2, 2, 1E-4).name("bloomRadius");
      other.add(this, "bloomThreshold", -2, 2, 1E-4).name("bloomThreshold");
      other.add(this, "bloomSmoothWidth", -2, 2, 1E-4).name("bloomSmoothWidth");
      other.open();
    }
    this.precompile();
  };
  /**
   * @return {undefined}
   */
  opts.resize = function() {
    p.resize.call(this);
  };
  /**
   * @param {number} e
   * @param {number} f
   * @param {number} duration
   * @return {undefined}
   */
  opts.update = function(e, f, duration) {
    /** @type {number} */
    this.offsetTop = Math.min(f, duration - options.height);
    if (M) {
      /** @type {number} */
      e = 0;
    }
    if (this.testViewport(), this.needsRender) {
      /** @type {number} */
      e = e * (this.speed * this.actionSpeedScale);
      node.update(e);
      /** @type {number} */
      var max = utils.clamp(f / duration, 0, 1) * sum;
      var root = void 0;
      var value1 = void 0;
      var endGrayscale = void 0;
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var cell_amount = points.length - 1;
      for (; i < cell_amount; i++) {
        var c = points[i];
        var a = points[i + 1];
        if (max >= c.threshold && max <= a.threshold) {
          root = c;
          value1 = a;
          /** @type {number} */
          endGrayscale = (max - c.threshold) / c.weight;
          break;
        }
      }
      this.camera.position.copy(root.position).lerp(value1.position, endGrayscale);
      bone.position.copy(root.refOffset).lerp(value1.refOffset, endGrayscale);
      bone.position.add(this.camera.position);
      this.camera.position.x *= this.camera.aspect;
      bone.position.x *= this.camera.aspect;
      this.camera.lookAt(currentV3Focus);
      bone.quaternion.copy(this.camera.quaternion);
      bone.updateMatrix();
      bone.matrix.multiplyMatrices(bone.matrix, node.matrix);
      bone.matrix.decompose(this.camera.position, this.camera.quaternion, this.camera.scale);
      if (M) {
        1 / 60;
      }
      this.camera.position.x += .002 * (Math.random() - .5);
      this.camera.position.y += .002 * (Math.random() - .5);
      this.camera.position.z += .002 * (Math.random() - .5);
      this.scene.updateMatrixWorld();
      this.updateCamera();
      this.updateMouse();
      var renderer = options.renderer;
      renderer.setRenderTarget(null);
      event.update(e);
      obj.update(e);
      params.update(e);
      scope.update(e);
      result.amount = this.bloomAmount;
      result.radius = this.bloomRadius;
      result.threshold = this.bloomThreshold;
      result.smoothWidth = this.bloomSmoothWidth;
      result.greyRatio = utils.cUnMix(.6, .8, max / sum);
      this.render();
      event.renderWires();
    }
  };
  /**
   * @return {undefined}
   */
  opts.afterRender = function() {
  };
  /**
   * @param {?} $notyfy
   * @return {?}
   */
  opts.onClick = function($notyfy) {
    if (!event._actionId && self.exports.isClickable) {
      return valueArrayF = valueArrayF ^ 1, event.playMixedAction(valueArrayF), sfx.playEffect(valueArrayF ? "obstacle" : "obstacle2"), true;
    }
  };
  var node = void 0;
  var currentV3Focus = void 0;
  var bone = void 0;
  /** @type {number} */
  var sum = 0;
  var result = void 0;
  /** @type {number} */
  var valueArrayF = 1;
  var points = void 0;
  /** @type {boolean} */
  var M = false;
  self.exports = new b;
}, function(canCreateDiscussions, self, require) {
  var THREE = require(0);
  var exports = require(4);
  /**
   * @param {!Object} obj
   * @return {undefined}
   */
  self.init = function(obj) {
    width = obj.geometry.attributes.position.count;
    /** @type {number} */
    height = Math.min(width, 1.25 * Math.min(window.screen.width, window.screen.height));
    /** @type {number} */
    n = Math.ceil(Math.sqrt(height));
    /** @type {number} */
    d = Math.ceil(height / n);
    /** @type {number} */
    r = d * size;
    res = exports.createRenderTarget(n, r, true, true, true);
    x = res.clone();
    (function(target) {
      var attributes = target.geometry.attributes;
      var geometry = new THREE.BufferGeometry;
      /** @type {!Float32Array} */
      var line_positions = new Float32Array(2 * height);
      /** @type {!Float32Array} */
      var vertices = new Float32Array(3 * height);
      /** @type {!Float32Array} */
      var array = new Float32Array(4 * height);
      /** @type {!Float32Array} */
      var colors = new Float32Array(4 * height);
      var pos = attributes.position.array;
      var a = attributes.skinWeight.array;
      var col = attributes.skinIndex.array;
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var hour = 0;
      /** @type {number} */
      var n3 = 0;
      /** @type {number} */
      var offset = 0;
      for (; i < height; i++) {
        /** @type {number} */
        var scale = ~~(i / height * width);
        /** @type {number} */
        var imageWidth = 3 * scale;
        /** @type {number} */
        var k = 4 * scale;
        /** @type {number} */
        line_positions[hour + 0] = (i % n + .5) / n * 2 - 1;
        /** @type {number} */
        line_positions[hour + 1] = (.5 + ~~(i / n)) / r * 2 - 1;
        vertices[n3 + 0] = pos[imageWidth + 0];
        vertices[n3 + 1] = pos[imageWidth + 1];
        vertices[n3 + 2] = pos[imageWidth + 2];
        array[offset + 0] = a[k + 0];
        array[offset + 1] = a[k + 1];
        array[offset + 2] = a[k + 2];
        array[offset + 3] = a[k + 3];
        colors[offset + 0] = col[k + 0];
        colors[offset + 1] = col[k + 1];
        colors[offset + 2] = col[k + 2];
        colors[offset + 3] = col[k + 3];
        /** @type {number} */
        hour = hour + 2;
        /** @type {number} */
        n3 = n3 + 3;
        /** @type {number} */
        offset = offset + 4;
      }
      geometry.setAttribute("a_glPosition", new THREE.BufferAttribute(line_positions, 2));
      geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
      geometry.setAttribute("skinWeight", new THREE.BufferAttribute(array, 4));
      geometry.setAttribute("skinIndex", new THREE.BufferAttribute(colors, 4));
      /** @type {boolean} */
      geometry.attributes.a_glPosition.needsUpdate = true;
      /** @type {boolean} */
      geometry.attributes.position.needsUpdate = true;
      /** @type {boolean} */
      geometry.attributes.skinWeight.needsUpdate = true;
      /** @type {boolean} */
      geometry.attributes.skinIndex.needsUpdate = true;
      shaderMaterial = new THREE.ShaderMaterial({
        uniforms : {
          u_glPositionOffset : {
            value : new THREE.Vector2
          }
        },
        vertexShader : require(166),
        fragmentShader : require(167),
        depthTest : false,
        depthWrite : false,
        blending : THREE.NoBlending,
        skinning : true
      });
      (object = new THREE.Points(geometry, shaderMaterial)).updateMatrixWorld = THREE.SkinnedMesh.prototype.updateMatrixWorld;
      object.bindMatrix = target.bindMatrix;
      object.bindMode = target.bindMode;
      object.bindMatrixInverse = target.bindMatrixInverse;
      /** @type {boolean} */
      object.isSkinnedMesh = true;
      object.skeleton = target.skeleton;
      /** @type {boolean} */
      object.frustumCulled = false;
    })(obj);
    (function(instance) {
      var attributes = instance.geometry.attributes;
      var geometry = new THREE.InstancedBufferGeometry;
      /** @type {!Float32Array} */
      var colors = new Float32Array(height * size * 3);
      var o = attributes.normal.array;
      /** @type {number} */
      var j = 0;
      /** @type {number} */
      var index = 0;
      for (; j < height; j++) {
        /** @type {number} */
        var g = 3 * ~~(j / height * width);
        /** @type {number} */
        colors[index + 0] = (j % n + .5) / n;
        /** @type {number} */
        colors[index + 1] = (.5 + ~~(j / n)) / r;
        /** @type {number} */
        colors[index + 2] = Math.max(0, (o[g + 0] + o[g + 1] + o[g + 2]) / 1.731);
        /** @type {number} */
        index = index + 3;
      }
      geometry.setAttribute("position", new THREE.BufferAttribute(colors, 3));
      /** @type {!Float32Array} */
      array = new Float32Array(2 * size);
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var start = 0;
      for (; i < size; i++) {
        /** @type {number} */
        array[start + 1] = i / size;
        /** @type {number} */
        start = start + 2;
      }
      geometry.setAttribute("a_instanceUvOffset", new THREE.InstancedBufferAttribute(array, 2));
      material = new THREE.ShaderMaterial({
        uniforms : {
          u_positionTexture : {
            value : null
          },
          u_isReflection : {
            value : 0
          }
        },
        vertexShader : require(168),
        fragmentShader : require(169),
        depthTest : true,
        depthWrite : false,
        blending : THREE.AdditiveBlending,
        transparent : true
      });
      /** @type {boolean} */
      (_object = self.mesh = new THREE.Points(geometry, material)).frustumCulled = false;
      /** @type {number} */
      _object.renderOrder = -1;
      /** @type {boolean} */
      _object.needsRenderReflection = true;
    })(obj);
    post = new THREE.RawShaderMaterial({
      uniforms : {
        u_positionTexture : {
          value : null
        },
        u_noiseKernelSize : {
          value : .35
        },
        u_noiseTime : {
          value : 0
        },
        u_noiseStrength : {
          value : .01
        },
        u_dieSpeed : {
          value : 1
        },
        u_speed : {
          value : 1
        }
      },
      vertexShader : exports.vertexShader,
      fragmentShader : exports.precisionPrefix + require(165),
      depthTest : false,
      depthWrite : false,
      blending : THREE.NoBlending
    });
  };
  /**
   * @return {undefined}
   */
  self.emit = function() {
    /** @type {boolean} */
    _ = true;
  };
  /**
   * @param {number} str
   * @return {undefined}
   */
  self.update = function(str) {
    var stack = exports.getColorState();
    if (_) {
      /** @type {number} */
      shaderMaterial.uniforms.u_glPositionOffset.value.y = index / size * 2;
      /** @type {number} */
      index = (index + 1) % size;
      /** @type {boolean} */
      exports.renderer.autoClearColor = false;
      exports.renderObject(object, x);
      /** @type {boolean} */
      _ = false;
    }
    _step = res;
    res = x;
    x = _step;
    post.uniforms.u_positionTexture.value = res.texture;
    /** @type {number} */
    post.uniforms.u_speed.value = str;
    /** @type {number} */
    post.uniforms.u_dieSpeed.value = str;
    post.uniforms.u_noiseTime.value += str;
    exports.render(post, x);
    material.uniforms.u_positionTexture.value = x.texture;
    exports.setColorState(stack);
    var _step;
  };
  /** @type {null} */
  var _object = self.mesh = null;
  var width = void 0;
  var height = void 0;
  var n = void 0;
  var d = void 0;
  var r = void 0;
  /** @type {number} */
  var index = 0;
  var object = void 0;
  var shaderMaterial = void 0;
  var post = void 0;
  var material = void 0;
  var array = void 0;
  var res = void 0;
  var x = void 0;
  /** @type {boolean} */
  var _ = false;
  /** @type {number} */
  var size = self.MAX_INSTANCES = 4;
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "uniform sampler2D u_positionTexture;\n\nuniform float u_noiseKernelSize;\nuniform float u_noiseTime;\nuniform float u_noiseStrength;\nuniform float u_dieSpeed;\n\nuniform float u_speed;\n\nvarying vec2 v_uv;\n\n// #include <curl4Mid>\n\nvoid main () {\n\tvec4 positionInfo = texture2D(u_positionTexture, v_uv);\n\t\n\tif (positionInfo.w > 0.0) {\n\t\tpositionInfo.w -= u_dieSpeed;\n\n\t\tfloat ratio = smoothstep(1.0, (0.9 - v_uv.x) * 0.5, positionInfo.w);\n\t\t// positionInfo.xy += (positionInfo.xy - vec2(0.0, 0.5)) * 0.04 * ratio;\n\t\tpositionInfo.z -= u_speed * (25.0 * 20.0 / 127.0 + ratio * 10.0);\n\n\t\t// vec3 velocity = curl(positionInfo.xyz * u_noiseKernelSize, u_noiseTime, 0.6) *  u_noiseStrength * ratio;\n\n\t\t// positionInfo.xyz += velocity;\n\t}\n\n\tgl_FragColor = positionInfo;\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "\nattribute vec2 a_glPosition;\n\nuniform vec2 u_glPositionOffset;\n\nvarying vec4 v_color;\n\n#include <skinning_pars_vertex>\n\nvoid main() {\n\t#include <skinbase_vertex>\n    #include <beginnormal_vertex>\n    #include <skinnormal_vertex>\n    #include <begin_vertex>\n    #include <skinning_vertex>\n    v_color = vec4(transformed, 1.0);\n    gl_Position = vec4(a_glPosition + u_glPositionOffset, 0.0, 1.0);\n    gl_PointSize = 1.0;\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "\nvarying vec4 v_color;\n\nvoid main () {\n\tgl_FragColor = v_color;\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "attribute vec2 a_instanceUvOffset;\nuniform sampler2D u_positionTexture;\nuniform float u_isReflection;\n\nvarying vec3 v_color;\nvarying float v_alpha;\n\nvoid main () {\n\tvec4 positionInfo = texture2D(u_positionTexture, position.xy + a_instanceUvOffset);\n\n\t// #2b8db2 - vec3(0.169,0.553,0.698)\n\t// #ff3b59 - vec3(1.0,0.231,0.349)\n\n\n\tv_color = mix(vec3(0.169,0.553,0.698), vec3(1.0,0.231,0.349), position.z) * (1.0 + smoothstep(0.5, 0.0, positionInfo.y) * 7.0 * u_isReflection);\n\tv_alpha = positionInfo.w * smoothstep(1.0, 0.9, positionInfo.w) * mix(1.0, 0.5, u_isReflection) * position.x;\n\n\tvec4 mvPosition = modelViewMatrix * vec4(positionInfo.xyz, 1.0);\n\tgl_Position = projectionMatrix * mvPosition;\n\tgl_Position.z = step(positionInfo.w, 0.0) * 1000.0 / gl_Position.w;\n\tgl_PointSize = (1.0 * 12.0/ -mvPosition.z + 4.0 * pow(position.x, 3.0) * positionInfo.w);\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "\n\nvarying vec3 v_color;\nvarying float v_alpha;\n\nvoid main () {\n\n\tfloat a = smoothstep(0.5, 0.3, length(gl_PointCoord.xy - 0.5));\n\tgl_FragColor = vec4(v_color, v_alpha) * a;\n\t// gl_FragColor = vec4(v_color, v_alpha);\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "\n#include <skinning_pars_vertex>\n\nvarying vec3 v_color;\nvarying vec3 v_viewNormal;\nvarying vec3 v_worldPosition;\n\nuniform float u_time;\n\nvoid main() {\n\t#include <skinbase_vertex>\n    #include <beginnormal_vertex>\n    #include <skinnormal_vertex>\n    #include <begin_vertex>\n    #include <skinning_vertex>\n    v_color = color;\n    v_viewNormal = normalMatrix * objectNormal;\n    v_worldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "uniform float u_isReflection;\nuniform float u_time;\nuniform float u_emitRatio;\nuniform float u_boost;\n\nvarying vec3 v_color;\nvarying vec3 v_viewNormal;\nvarying vec3 v_worldPosition;\n\nvoid main () {\n    vec3 viewNormal = normalize(v_viewNormal);\n\n    float lineLength = 0.2;\n    float modTime = mod(u_time + v_color.x * (1.0 + lineLength), (1.0 + lineLength));\n    float b = 0.04 + max(0.0, dot(viewNormal, normalize(vec3(1.0, 1.0, 1.0)))) * 1.25;\n    float t = smoothstep( v_color.y, v_color.y - lineLength,modTime - lineLength) * step(v_color.y - lineLength, modTime - lineLength);\n    // vec3 color = b * mix(#ff339c, #33e4ff, step(0.5, v_color.z));\n    // 2b8db2 - vec3(0.169,0.553,0.698)\n    // ff3b59 - vec3(1.0,0.231,0.349)\n    // b3c4ee - vec3(0.702,0.769,0.933)\n    // 00f6ff - vec3(0.0,0.965,1.0)\n    vec3 color = mix(vec3(0.169,0.553,0.698), vec3(1.0,0.231,0.349), b) * (0.65 + t * 3.0) * mix(vec3(0.702,0.769,0.933), vec3(0.0,0.965,1.0), step(0.5, v_color.z)) * (0.75 + (0.025 +t) * u_emitRatio * 12.0);\n\n    color *= mix(1.0, 1.0 + smoothstep(0.5, 0.0, v_worldPosition.y) * 2.5, u_isReflection);\n    \n    gl_FragColor = vec4(color * mix(1.0, 0.75, u_isReflection) * u_boost, 1.0);\n}";
}, function(canCreateDiscussions, self, glslify) {
  var THREE = glslify(0);
  /**
   * @param {number} obj
   * @return {undefined}
   */
  self.init = function(obj) {
    /** @type {number} */
    data = obj;
    var t = new THREE.InstancedBufferGeometry;
    var params = new THREE.BoxBufferGeometry(1, 1, 1);
    var lineCount = data.lineCount;
    /** @type {!Float32Array} */
    var d = new Float32Array(4 * lineCount);
    /** @type {!Float32Array} */
    var array = new Float32Array(4 * lineCount);
    /** @type {number} */
    var lineIndex = 0;
    /** @type {number} */
    var start = 0;
    for (; lineIndex < lineCount; lineIndex++) {
      /** @type {number} */
      var f = Math.random() * Math.PI;
      /** @type {number} */
      d[start + 0] = Math.cos(f);
      /** @type {number} */
      d[start + 1] = Math.sin(f);
      /** @type {number} */
      d[start + 2] = Math.random();
      /** @type {number} */
      d[start + 3] = Math.random();
      /** @type {number} */
      array[start + 0] = 1;
      /** @type {number} */
      array[start + 1] = .35 * (.2 + .8 * Math.random());
      /** @type {number} */
      array[start + 2] = .6 + .4 * Math.random();
      /** @type {number} */
      array[start + 3] = Math.random() > .5 ? 1 : 0;
      /** @type {number} */
      start = start + 4;
    }
    t.setAttribute("position", params.attributes.position);
    t.setAttribute("normal", params.attributes.normal);
    t.setAttribute("a_offsets", new THREE.InstancedBufferAttribute(d, 4));
    t.setAttribute("a_infos", new THREE.InstancedBufferAttribute(array, 4));
    t.setIndex(params.index);
    material = new THREE.ShaderMaterial({
      uniforms : {
        u_time : {
          value : 0
        },
        u_radius : {
          value : .02
        },
        u_fullLength : {
          value : 20
        },
        u_innerSpace : {
          value : 2.5
        },
        u_thickness : {
          value : 4
        },
        u_isReflection : {
          value : 0
        }
      },
      vertexShader : glslify(173),
      fragmentShader : glslify(174),
      blending : THREE.NoBlending
    });
    /** @type {boolean} */
    (_object = self.mesh = new THREE.Mesh(t, material)).frustumCulled = false;
    /** @type {boolean} */
    _object.needsRenderReflection = true;
    /** @type {number} */
    _object.renderOrder = 0;
  };
  /**
   * @param {number} str
   * @return {undefined}
   */
  self.update = function(str) {
    material.uniforms.u_time.value += str;
  };
  /** @type {null} */
  var _object = self.mesh = null;
  var data = void 0;
  var material = void 0;
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "\nattribute vec4 a_offsets;\nattribute vec4 a_infos;\n\nuniform float u_time;\nuniform float u_radius;\nuniform float u_fullLength;\nuniform float u_innerSpace;\nuniform float u_thickness;\nuniform float u_isReflection;\n\nvarying vec3 v_color;\nvarying vec3 v_worldPosition;\n\n#include <snoise3>\n\nvoid main () {\n\tvec3 offset = vec3(a_offsets.xy * (u_innerSpace + u_thickness * a_offsets.w), 0.0);\n\n\tfloat radius = a_infos.x * u_radius * mix(1.0, 0.5 + offset.y * 0.5, u_isReflection);\n\tfloat lineLength = a_infos.y * u_fullLength + radius;\n\tfloat baseOffsetZ = a_offsets.z * u_fullLength;\n\tfloat animationLength = lineLength * 2.0 + u_fullLength;\n\n\toffset.z = -mod(baseOffsetZ + u_time * a_infos.z * 30.0, animationLength) + 1.0;// + animationLength * 0.25;\n\tvec3 pos = position * vec3(0.0, 0.0, mix(radius, lineLength, step(0.0, position.z)) + radius);\n\n\tpos += offset;\n\n\tvec3 viewNormal = normalMatrix * normal; // not distorted one but it is sort of okay\n\n\t// #2b8db2 - vec3(0.169,0.553,0.698)\n\t// #ff3b59 - 0.952, 0.709, 0.035\n\tv_color = mix(mix(vec3(0.169,0.553,0.698), vec3(1.0,0.231,0.349), a_infos.w), vec3(1.0), 0.15 + viewNormal.z * 0.6) * mix(0.75, 0.5 - offset.y * 0.06, u_isReflection);\n\n\tpos += position * vec3(radius, radius, 0.0);\n\tpos.y = max(pos.y, 0.01);\n\n\tpos.z += 1.0;\n\n\tv_worldPosition = (modelMatrix * vec4(pos, 1.0)).xyz;\n\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "uniform float u_isReflection;\nvarying vec3 v_color;\nvarying vec3 v_worldPosition;\n\nvoid main () {\n\n\t// #07080b - vec3(0.027,0.031,0.043)\n\tvec3 color = mix(vec3(0.027,0.031,0.043), v_color * mix(1.0, (1.0 + smoothstep(2.0, 0.0, v_worldPosition.y) * 3.0), u_isReflection), smoothstep(-20.0, -15.0, v_worldPosition.z));\n\tgl_FragColor = vec4(color, 1.0);\n}";
}, function(canCreateDiscussions, params, require) {
  var THREE = require(0);
  var binsearch = require(12);
  var array = require(36);
  var Theme = require(58);
  var projectConfig = require(3);
  var app = require(1);
  /**
   * @param {!Object} type
   * @return {undefined}
   */
  params.preInit = function(type) {
    /** @type {!Object} */
    opts = type;
    (texture = new THREE.Texture(app.loader.add(projectConfig.cdnPath + "visuals/aboutHero/floor.jpg").content)).wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = texture.minFilter = THREE.LinearFilter;
    /** @type {boolean} */
    texture.needsUpdate = true;
    texture.repeat.set(16, 16);
  };
  /**
   * @return {undefined}
   */
  params.init = function() {
    (self = new Theme).clearColor = opts.backgroundColor;
    /** @type {string} */
    (item = new THREE.Mesh(new THREE.PlaneBufferGeometry(20, 20), new THREE.MeshNormalMaterial({
      normalMap : texture
    }))).material.type = "ShaderMaterial";
    item.material.uniforms = THREE.UniformsUtils.merge([THREE.ShaderLib.normal.uniforms]);
    item.material.vertexShader = THREE.ShaderChunk.normal_vert;
    item.material.fragmentShader = THREE.ShaderChunk.normal_frag;
    item.material.fragmentShader = array.replace(item.material.fragmentShader, "gl_FragColor = vec4( packNormalToRGB( normal ), opacity );", "\n    vec3 color = texture2DProj(u_reflectionTexture, v_reflectionCoord + vec4(normal.x, normal.z, 0.0, 0.0) * 0.02).rgb * (1.0 + smoothstep(0.75, -0.75, normal.y));\n    gl_FragColor = vec4(mix(vec3(0.027, 0.0313, 0.043), color, smoothstep(18.0, 0.0, vViewPosition.z)), 1.0);\n    ");
    self.injectUniforms(item.material);
    self.injectShaders(item.material, "logdepthbuf_vertex");
    /** @type {number} */
    item.position.z = -6;
    /** @type {number} */
    item.rotation.x = -Math.PI / 2;
    (params.container = new THREE.Object3D).add(item);
  };
  /**
   * @param {number} value
   * @return {undefined}
   */
  params.update = function(value) {
    app.renderer.setClearColor(0, 0);
    /** @type {number} */
    texture.offset.y = (texture.offset.y - .2667 * value * texture.repeat.y) % 1;
    /** @type {number} */
    var newWidth = Math.max(512, Math.ceil(.5 * opts.width));
    /** @type {number} */
    var newHeight = Math.max(512, Math.ceil(.5 * opts.height));
    self.setSize(newWidth, newHeight);
    self.update(app.renderer, opts.scene, opts.camera, item);
    binsearch.blur9(4, .5, self.renderTarget);
    window._floor = self.renderTarget.texture;
  };
  /** @type {null} */
  params.container = null;
  var opts = void 0;
  var self = void 0;
  var item = void 0;
  var texture = void 0;
}, function(canCreateDiscussions, self, glslify) {
  var THREE = glslify(0);
  var menuItemElement = glslify(57);
  /**
   * @return {undefined}
   */
  self.init = function() {
    var geom = new THREE.InstancedBufferGeometry;
    var cubeGeom = new THREE.BoxBufferGeometry(1, 1, 1);
    /** @type {!Float32Array} */
    var array = new Float32Array(192);
    /** @type {!Float32Array} */
    var verts = new Float32Array(192);
    /** @type {!Float32Array} */
    var vertices = new Float32Array(192);
    /** @type {number} */
    var l = 0;
    /** @type {number} */
    var i = 0;
    for (; l < 64; l++) {
      /** @type {number} */
      var t01 = l / 63;
      /** @type {number} */
      var cosine0 = 2 * Math.abs(t01 - .5);
      /** @type {number} */
      array[i + 0] = .05 + .3 * Math.pow(Math.random(), 3);
      /** @type {number} */
      array[i + 1] = .025;
      /** @type {number} */
      array[i + 2] = .2 + Math.pow(Math.random(), 2) * (.8 + cosine0);
      /** @type {number} */
      verts[i + 0] = 6 * t01 - 3;
      /** @type {number} */
      verts[i + 1] = .8 * Math.random() * (1 + cosine0 * cosine0 * 3) - .4;
      /** @type {number} */
      verts[i + 2] = 4 * Math.abs(t01 - .5) * (Math.random() > .5 ? 1 : -1) + .5 * Math.random() - .25 - .5 * t01;
      /** @type {number} */
      vertices[i + 0] = Math.random() > .5 ? 1 : 0;
      /** @type {number} */
      vertices[i + 1] = Math.random();
      /** @type {number} */
      vertices[i + 2] = Math.random();
      /** @type {number} */
      i = i + 3;
    }
    geom.setAttribute("position", cubeGeom.attributes.position);
    geom.setAttribute("normal", cubeGeom.attributes.normal);
    geom.setAttribute("a_sizes", new THREE.InstancedBufferAttribute(array, 3));
    geom.setAttribute("a_offsets", new THREE.InstancedBufferAttribute(verts, 3));
    geom.setAttribute("a_infos", new THREE.InstancedBufferAttribute(vertices, 3));
    geom.setIndex(cubeGeom.index);
    material = new THREE.ShaderMaterial({
      uniforms : {
        u_time : {
          value : 0
        },
        u_isLower : {
          value : 0
        },
        u_ratio : {
          value : 0
        },
        u_fromZ : {
          value : 4
        },
        u_toZ : {
          value : -20
        },
        u_isReflection : {
          value : 0
        }
      },
      vertexShader : glslify(177),
      fragmentShader : glslify(178),
      blending : THREE.NoBlending
    });
    /** @type {boolean} */
    (_object = self.mesh = new THREE.Mesh(geom, material)).frustumCulled = false;
    /** @type {boolean} */
    _object.needsRenderReflection = true;
    /** @type {number} */
    _object.renderOrder = 0;
  };
  /**
   * @param {number} fn
   * @return {undefined}
   */
  self.update = function(fn) {
    /** @type {number} */
    material.uniforms.u_isLower.value = "jump" === menuItemElement._actionId ? 1 : 0;
    var _startingFret = menuItemElement._actionRatio;
    material.uniforms.u_ratio.value = _startingFret;
  };
  /** @type {null} */
  var _object = self.mesh = null;
  var material = void 0;
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "\nattribute vec3 a_sizes;\nattribute vec3 a_offsets;\nattribute vec3 a_infos;\n\nuniform float u_time;\nuniform float u_isLower;\nuniform float u_ratio;\nuniform float u_fromZ;\nuniform float u_toZ;\nuniform float u_isReflection;\n\nvarying float v_opacity;\nvarying vec3 v_color;\nvarying vec3 v_worldPosition;\n\n#include <snoise3>\n\nfloat cubicBezier (float c0, float c1, float c2, float c3, float t) {\n  float c = (c1 - c0) * 3.0;\n  float b = (c2 - c1) * 3.0 - c;\n  float a = c3 - c0 - c - b;\n  float t2 = t * t;\n  float t3 = t2 * t;\n  return a * t3 + b * t2 + c * t + c0;\n}\n\nvoid main () {\n\tfloat xWeight = abs(a_offsets.x) / 3.0;\n\tfloat c0 = mix(0.1 + a_infos.y * 0.15, -0.2 + a_infos.y * 0.5, xWeight);\n\tfloat c1 = mix(0.1 + a_infos.z * 0.25, a_infos.z * 0.5, xWeight);\n\tfloat ratio = cubicBezier(0.0, c0, c1, 1.0, u_ratio);\n\n\tv_opacity = smoothstep(0.0, 0.5, max(0.0, 1.0 - abs(ratio - 0.2) / mix(0.2, 0.2 + 0.6 * a_infos.y, step(0.2, ratio))));\n\n\tvec3 pos = position * a_sizes * smoothstep(0.0, 0.1, v_opacity) + a_offsets + vec3(0.0, mix(1.25, 0.4, u_isLower), mix(u_fromZ, u_toZ, ratio));\n\tvec3 viewNormal = normalMatrix * normal;\n\n\tv_color = mix(\n\t\tmix(vec3(0.169,0.553,0.698), vec3(1.0,0.231,0.349), a_infos.x),\n\t\tvec3(1.0),\n\t\t0.15 + viewNormal.z * 0.6\n\t) * mix(0.55, 0.5 - pos.y * 0.06, u_isReflection);\n\n\n\tv_worldPosition = (modelMatrix * vec4(pos, 1.0)).xyz;\n\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "uniform float u_isReflection;\nvarying float v_opacity;\nvarying vec3 v_color;\nvarying vec3 v_worldPosition;\n\nvoid main () {\n\tvec3 color = mix(vec3(0.027,0.031,0.043), v_color, smoothstep(-20.0, -15.0, v_worldPosition.z) * v_opacity);\n\tgl_FragColor = vec4(color, 1.0);\n}";
}, function(mixin, canCreateDiscussions, require) {
  /**
   * @return {undefined}
   */
  function a() {
    p.constructor.call(this, {
      id : "project",
      isTemplate : true,
      aliases : ["work/?"]
    });
    this.domRect = new Map;
  }
  var SettingsManager = require(18);
  var Map = require(11);
  var projectConfig = require(3);
  var config = require(1);
  var opts = require(180);
  var EventDriven = require(184);
  var DOMEventProxy = require(185);
  var p = SettingsManager.prototype;
  /** @type {!Object} */
  var params = a.prototype = Object.create(p);
  /** @type {function(): undefined} */
  params.constructor = a;
  /**
   * @param {!Object} target
   * @param {!Object} data
   * @return {undefined}
   */
  params.preInit = function(target, data) {
    var url = this.getProjectIdFromPathInfo(target);
    if (config.isSupportWebGL) {
      if (!opts.hasInitialized) {
        opts.preInit();
      }
      opts.preload(url);
    }
  };
  /**
   * @param {!Function} obj
   * @return {undefined}
   */
  params.init = function(obj) {
    var c = this.getProjectIdFromPathInfo(obj);
    var type = this.getRefIdFormPathInfo(obj);
    var t = this.domCaches[type];
    if (!opts.hasInitialized && config.isSupportWebGL) {
      opts.init();
    }
    t.lazyLoadSet = new EventDriven({
      dom : t,
      imgPath : projectConfig.cdnPath + "work/" + c + "/case/"
    });
    t.resizerSet = new DOMEventProxy({
      containers : t.querySelectorAll(".resizer-container")
    });
    true;
    p.init.call(this);
  };
  /**
   * @param {!Function} obj
   * @return {?}
   */
  params.getProjectIdFromPathInfo = function(obj) {
    var i = this.getRefIdFormPathInfo(obj);
    return this.domCaches[i].dataset.id;
  };
  /**
   * @param {number} p
   * @return {undefined}
   */
  params.show = function(p) {
    var e = this.getProjectIdFromPathInfo(p);
    var f = this.getRefIdFormPathInfo(p);
    var c = this.domCaches[f];
    this.domRect.refDom = c;
    this.domRect.path = p.pagePath;
    if (config.isSupportWebGL) {
      opts.change(c, e);
    }
    c.lazyLoadSet.add();
  };
  /**
   * @return {undefined}
   */
  params.hide = function() {
  };
  /**
   * @param {?} canCreateDiscussions
   * @return {undefined}
   */
  params.getScrollToFromRoute = function(canCreateDiscussions) {
  };
  /**
   * @return {undefined}
   */
  params.resize = function() {
    if (this.hasInitialized) {
      this.domRect.refDom.lazyLoadSet.resize();
      this.domRect.refDom.resizerSet.resize();
      if (config.isSupportWebGL) {
        opts.resize();
      }
    }
  };
  /**
   * @param {number} e
   * @param {number} transform
   * @return {undefined}
   */
  params.update = function(e, transform) {
    if (this.hasInitialized) {
      var renderer = config.renderer;
      this.domRect.testViewport(true);
      this.domRect.refDom.lazyLoadSet.update();
      if (config.isSupportWebGL) {
        if (this.domRect.height > 1) {
          renderer.setRenderTarget(null);
          renderer.setScissorTest(true);
          renderer.setViewport(this.domRect.left, config.height - this.domRect.top - this.domRect.height, this.domRect.width, this.domRect.height);
          renderer.setScissor(this.domRect.left, config.height - this.domRect.top - this.domRect.height, this.domRect.width, this.domRect.height);
          renderer.setClearColor(1250067, 1);
          renderer.clear(true, true, true);
          renderer.setScissorTest(false);
          p.update.call(this, e, transform);
        }
        opts.update(e);
      } else {
        p.update.call(this, e, transform);
      }
    }
  };
  mixin.exports = new a;
}, function(module, canCreateDiscussions, require) {
  /**
   * @return {undefined}
   */
  function Helper() {
    r.constructor.call(this, {
      backgroundColor : 0,
      imgWidth : device.isMobile ? 512 : 2048,
      imgHeight : device.isMobile ? 512 : 1024,
      parallax : 0,
      hasInitialized : false,
      defaultCameraFov : 30
    });
  }
  /**
   * @param {string} e
   * @return {?}
   */
  function send(e) {
    return component.assetPath + "work/" + e + "/" + (device.isMobile ? "mobile" : "desktop");
  }
  var component = require(3);
  var context = require(1);
  var device = require(5);
  var ctx = require(2);
  var THREE = require(0);
  var Hand = require(10);
  var buffer = require(181);
  var r = Hand.prototype;
  /** @type {!Object} */
  var base = Helper.prototype = Object.create(r);
  /** @type {function(): undefined} */
  base.constructor = Helper;
  /**
   * @return {undefined}
   */
  base.init = function() {
    var geometry = new THREE.PlaneBufferGeometry(this.imgWidth / this.imgHeight, 1);
    geometry.translate(0, .5, 0);
    material = new THREE.ShaderMaterial({
      uniforms : {
        u_diffuseTexture : {
          value : null
        },
        u_depthTexture : {
          value : null
        },
        u_aspect : {
          value : new THREE.Vector2
        },
        u_displacement : {
          value : new THREE.Vector2
        },
        u_textureSize : {
          value : new THREE.Vector2(this.imgWidth, this.imgHeight)
        },
        u_depth : {
          value : 0
        },
        u_fStop : {
          value : 0
        },
        u_scrollRatio : {
          value : 0
        },
        u_time : {
          value : 0
        },
        u_mouse3 : {
          value : this.mouse3
        }
      },
      vertexShader : require(182),
      fragmentShader : require(183),
      depthTest : false,
      depthWrite : false
    });
    if (context.gl.getExtension("EXT_shader_texture_lod")) {
      /** @type {boolean} */
      material.extensions.shaderTextureLOD = true;
    }
    /** @type {boolean} */
    (ground = new THREE.Mesh(geometry, material)).frustumCulled = false;
    this.scene.add(ground);
    /** @type {boolean} */
    this.hasInitialized = true;
  };
  /**
   * @param {string} value
   * @return {undefined}
   */
  base.preload = function(value) {
    var duration = send(value);
    context.loader.add(duration + ".jpg");
    context.loader.add(duration + "_depth.png");
  };
  /**
   * @param {!Object} n
   * @param {string} e
   * @return {undefined}
   */
  base.change = function(n, e) {
    var promise = send(e);
    /** @type {!Object} */
    this.refDom = n;
    var image = context.loader.itemUrls[promise + ".jpg"].content;
    var video = context.loader.itemUrls[promise + "_depth.png"].content;
    if (!(item && item.image === image)) {
      if (item) {
        item.dispose();
        texture.dispose();
      }
      item = new THREE.Texture(image);
      (texture = new THREE.Texture(video)).minFilter = texture.magFilter = THREE.LinearFilter;
      material.uniforms.u_diffuseTexture.value = item;
      material.uniforms.u_depthTexture.value = texture;
      /** @type {boolean} */
      item.needsUpdate = texture.needsUpdate = true;
      o = buffer.getImageData(video);
    }
    this.testViewport();
  };
  /**
   * @return {undefined}
   */
  base.resize = function() {
    if (this.refDom) {
      r.resize.call(this);
    }
  };
  /**
   * @param {number} fn
   * @return {undefined}
   */
  base.update = function(fn) {
    if (this.refDom && (this.paddingBottom = 500, this.testViewport(), this.needsRender)) {
      var width = context.width;
      var scale = context.height;
      var w = this.imgWidth;
      var h = this.imgHeight;
      var value = ctx.getCoverScale(w / h, 1, width / scale, 1);
      /** @type {number} */
      var height = width / scale;
      /** @type {number} */
      this.camera.position.z = .5 / Math.tan(this.camera.fov / 2 * Math.PI / 180);
      ground.scale.set(value / height * width / this.width, value * scale / this.height, 1);
      /** @type {number} */
      var left = this.refDomRect.top / scale;
      /** @type {number} */
      ground.position.y = (this.bottom - context.height) / scale / 2 - .5;
      var l = context.easedMouse.x;
      var offset = context.easedMouse.y;
      l = ctx.cUnMix(0, context.width, l);
      offset = ctx.cUnMix(0, context.height, offset);
      /** @type {number} */
      l = (l - .5) / Math.max(1, w / this.width) + .5;
      /** @type {number} */
      offset = (offset - .5) / Math.max(1, h / this.height) + .5;
      /** @type {number} */
      var first_harvest = Math.round(l * (o.width - 1));
      /** @type {number} */
      var i = Math.round(offset * (o.height - 1));
      /** @type {number} */
      var iMinPercent = o.data[4 * (first_harvest + i * o.width)] / 255;
      material.uniforms.u_depth.value += .1 * (iMinPercent - material.uniforms.u_depth.value);
      material.uniforms.u_fStop.value += .1 * (ctx.cMap(context.easedMouseVel.length(), 0, 50, 3, 0) - material.uniforms.u_fStop.value);
      /** @type {number} */
      material.uniforms.u_displacement.value.x = 18 * (l - .5) / w;
      /** @type {number} */
      material.uniforms.u_displacement.value.y = 18 * -(offset - .5) / h;
      material.uniforms.u_time.value += fn * Math.min(Math.abs(left), 1) * .25;
      /** @type {number} */
      material.uniforms.u_scrollRatio.value = Math.min(Math.abs(left), 1);
      material.uniforms.u_aspect.value.set(w / h, 1);
      this.mouse3.set(l, 1 - offset, .001);
      this.render();
    }
  };
  var ground = void 0;
  var material = void 0;
  var item = void 0;
  var texture = void 0;
  var o = void 0;
  module.exports = new Helper;
}, function(canCreateDiscussions, handler, n) {
  /**
   * @param {!Object} image
   * @param {number} x
   * @param {string} y
   * @param {string} w
   * @param {string} h
   * @return {?}
   */
  function getImageData(image, x, y, w, h) {
    return x = x || 0, y = y || 0, w = w || image.naturalWidth, h = h || image.naturalHeight, canvas = handler.canvas = canvas || document.createElement("canvas"), context = handler.ctx = context || canvas.getContext("2d"), canvas.width = w, canvas.height = h, context.drawImage(image, -x, -y), canvas;
  }
  /** @type {null} */
  var canvas = handler.canvas = null;
  /** @type {null} */
  var context = handler.ctx = null;
  /**
   * @param {!Object} image
   * @param {number} callback
   * @param {string} size
   * @param {string} width
   * @param {string} height
   * @return {?}
   */
  handler.getImageData = function(image, callback, size, width, height) {
    return callback = callback || 0, size = size || 0, width = width || image.naturalWidth, height = height || image.naturalHeight, getImageData(image, callback, size, width, height), context.getImageData(0, 0, width, height);
  };
  /** @type {function(!Object, number, string, string, string): ?} */
  handler.drawImageToCanvas = getImageData;
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "varying vec2 v_uv;\n\nvoid main () {\n\tv_uv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "uniform sampler2D u_diffuseTexture;\nuniform sampler2D u_depthTexture;\nuniform vec2 u_displacement;\nuniform vec2 u_textureSize;\nuniform vec2 u_aspect;\nuniform float u_depth;\nuniform float u_fStop;\nuniform float u_time;\nuniform float u_scrollRatio;\nuniform vec3 u_mouse3;\n\nvarying vec2 v_uv;\n#include <snoise2>\n#include <cubic>\n\n#ifdef TEXTURE_LOD_EXT\n#include <textureLodBicubic>\n#endif\n\nfloat blendSoftLight(float base, float blend) {\n\treturn (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));\n}\n\nvec3 blendSoftLight(vec3 base, vec3 blend) {\n\treturn vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));\n}\n\nvec2 mirrored(vec2 v) {\n    vec2 m = mod(v, 2.0);\n    return mix(m, 2.0 - m, step(1.0, m));\n}\n\nvoid main () {\n\tvec4 depthInfo = texture2D(u_depthTexture, v_uv);\n\tfloat deltaDepth = abs(depthInfo.r - u_depth);\n\n\tvec2 uv = v_uv + (depthInfo.r) * u_displacement * (0.5 + length(v_uv - 0.5) * 0.5) + u_displacement;\n\tvec2 displacedUv = uv;\n\tuv = mirrored(uv + vec2(\n\t\tsnoise2(uv * u_aspect * vec2(4.0) + vec2(0.0, -u_time - 1000.0)),\n\t\tsnoise2(uv * u_aspect * vec2(4.0) + vec2(0.0, -u_time))\n\t) * 0.01 * u_scrollRatio * smoothstep(-depthInfo.r, -depthInfo.r + 1.0, u_scrollRatio - 0.5) * depthInfo.r);\n\n\n\t#ifdef TEXTURE_LOD_EXT\n\t\tfloat lod = max(0.0, deltaDepth - 0.0) * u_fStop;\n\t\tvec4 diffuse0 = textureLodBicubic(u_diffuseTexture, uv, floor(lod), u_textureSize);\n\t\tvec4 diffuse1 = textureLodBicubic(u_diffuseTexture, uv, floor(lod + 1.0), u_textureSize);\n\t\tvec4 diffuse = mix(diffuse0, diffuse1, fract(lod));\n\t#else\n\t\tvec4 diffuse = texture2D(u_diffuseTexture, uv);\n\t#endif\n\n\t// diffuse.rgb = mix(diffuse.rgb, (texture2D(u_diffuseTexture, displacedUv).rgb + diffuse.rgb) * 0.5, u_scrollRatio);\n\tdiffuse.rgb = mix(diffuse.rgb, blendSoftLight(diffuse.rgb, texture2D(u_diffuseTexture, displacedUv).rgb), u_scrollRatio);\n\n\t// diffuse.rgb *= 1.0 - smoothstep(-depthInfo.r, -depthInfo.r + 1.0, u_scrollRatio - 0.5) * 0.5;\n\tdiffuse.rgb *= 1.0 -u_scrollRatio * 0.75;\n\n\tgl_FragColor = diffuse;\n}";
}, function(def, canCreateDiscussions, $) {
  /**
   * @param {!Object} local
   * @return {undefined}
   */
  function init(local) {
    callback(this, {
      dom : null,
      imgPath : "",
      count : 0,
      loadedCount : 0,
      readyCount : 0,
      useEffect : false
    }, local);
    var args = this.imgContainers = this.dom.querySelectorAll(".lazy-load-img");
    this.count = args.length;
    /** @type {number} */
    var options_idx = 0;
    var orig_count = this.count;
    for (; options_idx < orig_count; options_idx++) {
      var options = args[options_idx];
      options.style.backgroundColor = options.dataset.color || "#000";
      if (this.useEffect) {
        /** @type {number} */
        options.stagger = .3 + 2 * options_idx % 3 * .35;
        options.domRect = new KeepAlive({
          refDom : options
        });
      }
    }
  }
  /**
   * @return {undefined}
   */
  function reset() {
    console.log(this.src);
    var el = this.container;
    /** @type {number} */
    el.dataset.hasLoaded = 1;
    /** @type {string} */
    el.style.height = "auto";
    el.appendChild(this);
    this.loadedCount++;
  }
  var self = $(25);
  var KeepAlive = $(11);
  var callback = $(6);
  var context = init.prototype;
  /**
   * @return {undefined}
   */
  context.add = function() {
    var _selectionMap = this.imgContainers;
    /** @type {number} */
    var i = 0;
    var count = this.count;
    for (; i < count; i++) {
      var e = _selectionMap[i];
      if (!e.dataset.hasStarted) {
        /** @type {number} */
        e.dataset.hasStarted = 1;
        /** @type {!Image} */
        var m = new Image;
        m.container = e;
        self.add(m, this.imgPath + e.dataset.filename, reset);
      }
    }
  };
  /**
   * @return {undefined}
   */
  context.resize = function() {
    var _soundPool = this.imgContainers;
    /** @type {number} */
    var id = 0;
    var ld = this.count;
    for (; id < ld; id++) {
      var s = _soundPool[id];
      var o = s.dataset;
      if (!o.hasLoaded) {
        /** @type {string} */
        s.style.height = Math.ceil(s.offsetWidth * o.height / o.width) + "px";
      }
      if (this.useEffect) {
        this.beforeViewportTest(s, this);
        s.domRect.testViewport(true);
      }
    }
  };
  /**
   * @return {undefined}
   */
  context.update = function() {
    var aImmutable = this.imgContainers;
    /** @type {boolean} */
    var t = this.readyCount === this.count;
    /** @type {number} */
    var aName = 0;
    var bName = this.count;
    for (; aName < bName; aName++) {
      var value = aImmutable[aName];
      if (!(t || !value.dataset.hasLoaded || value.classList.contains("is-ready"))) {
        value.classList.add("is-ready");
        this.readyCount++;
      }
      if (this.useEffect) {
        value.domRect.testViewport();
        this.applyEffect(value, this);
      }
    }
  };
  /** @type {function(!Object): undefined} */
  def.exports = init;
}, function(module, canCreateDiscussions, getCb) {
  /**
   * @param {!Object} b
   * @return {undefined}
   */
  function render(b) {
    cb(this, {
      containers : null,
      count : 0
    }, b);
    var options = this.containers;
    this.count = options.length;
    /** @type {number} */
    var i = 0;
    var count = this.count;
    for (; i < count; i++) {
      var o = options[i];
      o.style.backgroundColor = o.dataset.color || "#000";
    }
  }
  var cb = getCb(6);
  /**
   * @return {undefined}
   */
  render.prototype.resize = function() {
    var containers = this.containers;
    /** @type {number} */
    var name = 0;
    var targetName = this.count;
    for (; name < targetName; name++) {
      var b = containers[name];
      var t = b.dataset;
      /** @type {string} */
      b.style.height = Math.ceil(b.offsetWidth * t.height / t.width) + "px";
    }
  };
  /** @type {function(!Object): undefined} */
  module.exports = render;
}, function(canCreateDiscussions, opts, createElement) {
  var options = createElement(1);
  var img = createElement(2);
  var o = createElement(187);
  /**
   * @return {undefined}
   */
  opts.preInit = function() {
    if (options.isSupportWebGL) {
      o.preInit();
    }
    /** @type {!CSSStyleDeclaration} */
    c = document.querySelector("#contact-context .sec-context-inner").style;
  };
  /**
   * @return {undefined}
   */
  opts.init = function() {
    if (options.isSupportWebGL) {
      o.init();
    }
    /** @type {boolean} */
    isScrollAnimation = true;
  };
  /**
   * @return {undefined}
   */
  opts.resize = function() {
    if (isScrollAnimation && options.isSupportWebGL) {
      o.resize();
    }
  };
  /**
   * @param {number} fn
   * @return {undefined}
   */
  opts.update = function(fn) {
    if (isScrollAnimation) {
      if (options.isSupportWebGL) {
        o.update(fn);
      }
      /** @type {number} */
      var h = Math.min(o.refDomRect.top / options.height, 1);
      /** @type {string} */
      c.transform = "translate3d(0," + (h * -options.height + h * options.height * .4) + "px,0)";
      c.opacity = img.cUnMix(.6, .1, h);
    }
  };
  /** @type {boolean} */
  var isScrollAnimation = false;
  var c = void 0;
}, function(mixin, canCreateDiscussions, require) {
  /**
   * @return {undefined}
   */
  function init() {
    opts.constructor.call(this, {
      refDomId : "contact",
      backgroundColor : 1052688,
      parallax : 2,
      path : "contact",
      downScale : .2,
      defaultCameraFov : 70,
      mouseProjectionPlane : new THREE.Plane(new THREE.Vector3(0, 1, 0)),
      envMap : null
    });
  }
  var THREE = require(0);
  var canvas = require(1);
  var base = require(10);
  var event = require(188);
  var renderer = require(61);
  var self = require(60);
  var c = require(2);
  var obj = require(199);
  var opts = base.prototype;
  var o = init.prototype = new base;
  /** @type {function(): undefined} */
  o.constructor = init;
  /**
   * @return {undefined}
   */
  o.preInit = function() {
    opts.preInit.call(this);
    this.scene.fog = new THREE.FogExp2(this.backgroundColor, .07);
    event.preInit(this);
    obj.preInit(this);
  };
  /**
   * @return {undefined}
   */
  o.init = function() {
    opts.init.call(this);
    vector = new THREE.Vector3;
    mesh = new THREE.Object3D;
    this.scene.add(mesh);
    mesh.add(this.camera);
    renderer.init();
    self.init(this);
    this.scene.add(self.container);
    event.init();
    obj.init();
    this.scene.add(event.container);
    this.scene.add(obj.container);
    this.precompile();
  };
  /**
   * @return {undefined}
   */
  o.resize = function() {
    /** @type {number} */
    this.paddingTop = canvas.height * canvas.featureOverMaskHeight | 0;
    opts.resize.call(this);
  };
  /**
   * @param {number} fn
   * @return {undefined}
   */
  o.update = function(fn) {
    if (this.testViewport(), this.needsRender) {
      /** @type {number} */
      var rad = .5 * Math.cos(c.clamp(-(this.refDomRect.top - this.paddingTop - canvas.height) / this.fullHeight, 0, 1) * Math.PI) + .5;
      /** @type {number} */
      this.camera.position.z = 12;
      /** @type {number} */
      this.camera.position.y = 5;
      /** @type {number} */
      this.camera.position.x = 0;
      var from = new THREE.Vector3(0, 5, 2);
      this.camera.lookAt(from);
      this.updateMouse();
      vector.copy(this.camera.position).sub(from).length();
      this.camera.position.copy(from);
      this.camera.rotateX(.2 * (1 - canvas.elasticMouse.y / canvas.height * 2));
      this.camera.rotateY(-.2 * (canvas.elasticMouse.x / canvas.width * 2 - 1));
      vector.set(0, 0, 1);
      this.camera.fov = c.mix(45, 75, 1 - rad);
      /** @type {number} */
      var data = 1 / (2 * Math.tan(.125 * Math.PI));
      /** @type {number} */
      var _height = 1 / (2 * Math.tan(75 / 360 * Math.PI));
      var twoNdotV = c.mix(data / _height * .5, 1, c.cUnMix(data, _height, 1 / (2 * Math.tan(this.camera.fov / 360 * Math.PI))));
      this.camera.position.copy(from);
      var gravityVector = (new THREE.Vector3(0, 5, 12 + 4 * rad)).sub(from).multiplyScalar(twoNdotV);
      var height = gravityVector.length();
      this.camera.translateOnAxis(gravityVector.normalize(), height);
      this.camera.lookAt(from);
      obj.update(fn);
      this.scene.updateMatrixWorld(true);
      this.updateCamera();
      /** @type {number} */
      var width = Math.ceil(this.width * this.downScale);
      /** @type {number} */
      var h = Math.ceil(this.height * this.downScale);
      var currentSceneAutoUpdate = canvas.renderer.shadowMap.autoUpdate;
      /** @type {boolean} */
      canvas.renderer.shadowMap.autoUpdate = false;
      /** @type {boolean} */
      canvas.renderer.shadowMap.needsUpdate = false;
      /** @type {boolean} */
      self.container.visible = true;
      renderer.resize(this.width, this.height, width, h);
      renderer.render(fn, this.scene, this.camera);
      /** @type {boolean} */
      self.container.visible = false;
      /** @type {boolean} */
      canvas.renderer.shadowMap.needsUpdate = true;
      event.update(fn);
      /** @type {boolean} */
      canvas.renderer.shadowMap.needsUpdate = false;
      this.render();
      self.resize(this.width, this.height, width, h);
      self.update(fn, this.scene, this.camera);
      canvas.renderer.shadowMap.autoUpdate = currentSceneAutoUpdate;
      /** @type {boolean} */
      canvas.renderer.shadowMap.needsUpdate = false;
    }
  };
  var mesh = void 0;
  var vector = void 0;
  mixin.exports = new init;
}, function(canCreateDiscussions, opts, require) {
  /**
   * @param {!Object} object
   * @param {!Object} data
   * @param {!Object} options
   * @param {undefined} value
   * @return {undefined}
   */
  function update(object, data, options, value) {
    var val = object.position.fromArray(data.from).distanceTo(target.fromArray(data.to));
    var e = object.position.fromArray(options.from).distanceTo(target.fromArray(options.to));
    object.position.fromArray(data.from).lerp(target.fromArray(options.from), value);
    object.target.position.fromArray(data.to).lerp(target.fromArray(options.to), value);
    object.lookAt(object.target.position);
    object.position.copy(object.target.position);
    object.translateZ(self.mix(val, e, value));
    object.color.setHex(data.color).lerp(RadialProgressChart.setHex(options.color), value);
    object.intensity = self.mix(data.intensity, options.intensity, value);
    object.distance = self.mix(data.distance, options.distance, value);
    object.angle = self.mix(data.angle, options.angle, value);
    object.decay = self.mix(data.decay, options.decay, value);
  }
  var THREE = require(0);
  var UsersStatus = require(12);
  var self = require(2);
  var smooth = require(15);
  var s = require(60);
  var Buffer = require(58);
  var projectConfig = require(3);
  var a = require(1);
  var clone = require(6);
  var AuctionMediator = require(59);
  /**
   * @param {!Object} type
   * @return {undefined}
   */
  opts.preInit = function(type) {
    /** @type {!Object} */
    options = type;
    model = opts.container = new THREE.Object3D;
    (texture = new THREE.Texture(a.loader.add(projectConfig.cdnPath + "visuals/contact/floor.png").content)).wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.magFilter = texture.minFilter = THREE.LinearFilter;
    /** @type {boolean} */
    texture.needsUpdate = true;
  };
  /**
   * @return {undefined}
   */
  opts.init = function() {
    if (RadialProgressChart = new THREE.Color, target = new THREE.Vector3, (m = new AuctionMediator).positionAmplitude = 2, m.positionFrequency = .7, m.rotationAmplitude = 0, m.rotationFrequency = 1, (g = new AuctionMediator).positionAmplitude = 2, g.positionFrequency = .7, g.rotationAmplitude = 0, g.rotationFrequency = 1, (object = new THREE.SpotLight(34047, 2.69, 30, 30.3 / 180 * Math.PI, .7, 1)).position.set(-16.8, 8, -.24), object.castShadow = true, object.shadow.bias = -.0012, object.shadow.camera.near = 
    3, object.shadow.camera.far = 22, object.shadow.mapSize.width = 1024, object.shadow.mapSize.height = 1024, model.add(object), model.add(object.target), s.addToSpotLight(object), (obj = new THREE.SpotLight(14812731, 3.5917, 18, 35.128 / 180 * Math.PI, .7, 1.2)).position.set(12, 3, 3), obj.castShadow = true, obj.shadow.bias = -.0015, obj.shadow.camera.near = 2, obj.shadow.camera.far = 30, obj.shadow.mapSize.width = 768, obj.shadow.mapSize.height = 768, model.add(obj), model.add(obj.target), s.addToSpotLight(obj), 
    that = new Buffer, (data = new THREE.Mesh(new THREE.PlaneBufferGeometry(500, 500), new THREE.MeshStandardMaterial({
      bumpMap : texture,
      color : new THREE.Color(12891292),
      roughness : .85,
      metalness : .05,
      dithering : true
    }))).material.type = "ShaderMaterial", data.material.uniforms = clone(THREE.UniformsUtils.merge([THREE.ShaderLib.standard.uniforms]), {
      u_mirrorTexture : {
        value : that.renderTarget.texture
      },
      u_mirrorTextureMatrix : {
        value : that.textureMatrix
      }
    }), data.material.vertexShader = THREE.ShaderChunk.meshphysical_vert, data.material.fragmentShader = THREE.ShaderChunk.meshphysical_frag, data.material.vertexShader = data.material.vertexShader.replace("void main() {", require(194).replace(/#define\sGLSLIFY\s./, "") + "\n\nvoid main() {"), data.material.vertexShader = data.material.vertexShader.replace("#include <fog_vertex>", "#include <fog_vertex>\n\n" + require(195).replace(/#define\sGLSLIFY\s./, "")), data.material.fragmentShader = data.material.fragmentShader.replace("#include <lights_physical_fragment>", 
    require(196).replace(/#define\sGLSLIFY\s./, "") + "\n\n#include <lights_physical_fragment>"), data.material.fragmentShader = data.material.fragmentShader.replace("void main() {", require(197).replace(/#define\sGLSLIFY\s./, "") + "\n\nvoid main() {"), data.material.fragmentShader = data.material.fragmentShader.replace("gl_FragColor = vec4( outgoingLight, diffuseColor.a );", require(198).replace(/#define\sGLSLIFY\s./, "") + "\n\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );"), data.receiveShadow = 
    true, data.rotation.x = -Math.PI / 2, data.needsRenderDepth = true, data.isFloor = true, model.position.z = -1, model.add(data), window.gui) {
      var currentFolder = options.gui;
      var gui = currentFolder.addFolder("contact light0");
      gui.addColor(object, "color");
      gui.add(object.position, "x", -20, 20, 1E-4);
      gui.add(object.position, "y", -20, 20, 1E-4);
      gui.add(object.position, "z", -20, 20, 1E-4);
      gui.add(object.target.position, "x", -20, 20, 1E-4);
      gui.add(object.target.position, "y", -20, 20, 1E-4);
      gui.add(object.target.position, "z", -20, 20, 1E-4);
      gui.add(object, "intensity", 0, 20, 1E-4);
      gui.add(object, "distance", 0, 50, 1E-4);
      gui.add(object, "angle", 0, Math.PI, 1E-4);
      gui.add(object, "penumbra", 0, 1, 1E-4);
      gui.add(object, "decay", 0, 5, 1E-4);
      gui.open();
      var folder = currentFolder.addFolder("contact light1");
      folder.addColor(obj, "color");
      folder.add(obj.position, "x", -20, 20, 1E-4);
      folder.add(obj.position, "y", -20, 20, 1E-4);
      folder.add(obj.position, "z", -20, 20, 1E-4);
      folder.add(obj.target.position, "x", -20, 20, 1E-4);
      folder.add(obj.target.position, "y", -20, 20, 1E-4);
      folder.add(obj.target.position, "z", -20, 20, 1E-4);
      folder.add(obj, "intensity", 0, 20, 1E-4);
      folder.add(obj, "distance", 0, 50, 1E-4);
      folder.add(obj, "angle", 0, Math.PI, 1E-4);
      folder.add(obj, "penumbra", 0, 1, 1E-4);
      folder.add(obj, "decay", 0, 5, 1E-4);
      folder.open();
      var self = currentFolder.addFolder("floor");
      self.addColor(data.material, "color");
      self.add(data.material, "roughness", 0, 1, 1E-4);
      self.add(data.material, "metalness", 0, 1, 1E-4);
      self.open();
    }
  };
  /**
   * @param {number} s
   * @return {undefined}
   */
  opts.update = function(s) {
    /** @type {number} */
    var j = Math.floor(i) % nodes.length;
    /** @type {number} */
    var type = (j + 1) % nodes.length;
    /** @type {number} */
    var n = i % 1;
    var template = self.fit(n, 0, .2, 0, 1, smooth.easeInOutBack);
    var length = self.fit(n, 0, .2, 0, 1, smooth.easeInOutQuint);
    update(object, nodes[j].left, nodes[type].left, template);
    update(obj, nodes[j].right, nodes[type].right, length);
    m.update(s);
    g.update(s);
    object.updateMatrix();
    object.matrix.multiply(m.matrix);
    object.matrix.decompose(object.position, object.quaternion, object.scale);
    obj.updateMatrix();
    obj.matrix.multiply(g.matrix);
    obj.matrix.decompose(obj.position, obj.quaternion, obj.scale);
    that.setSize(Math.ceil(.25 * options.width), Math.ceil(.25 * options.height));
    that.update(a.renderer, options.scene, options.camera, data);
    UsersStatus.blur9(1, 1, that.renderTarget);
    i = i + .2 * s;
  };
  /** @type {null} */
  var model = opts.container = null;
  var object = void 0;
  var m = void 0;
  var obj = void 0;
  var g = void 0;
  var data = void 0;
  var texture = void 0;
  var that = void 0;
  var options = void 0;
  var RadialProgressChart = void 0;
  var target = void 0;
  /** @type {number} */
  var i = 0;
  /** @type {!Array} */
  var nodes = [{
    left : {
      color : 34047,
      from : [-16.8, 8, -.24],
      to : [3, 0, 0],
      intensity : 2.69,
      distance : 30,
      angle : .5288,
      decay : 1
    },
    right : {
      color : 14812731,
      from : [12, 3, 3],
      to : [0, 2, 0],
      intensity : 3.5917,
      distance : 18,
      angle : .6131,
      decay : 1.2
    }
  }, {
    left : {
      color : 7719638,
      from : [-12.469, 5.2441, 7.848],
      to : [0, 0, -5],
      intensity : 3.5,
      distance : 24,
      angle : .6,
      decay : 1.2908
    },
    right : {
      color : 16774211,
      from : [12, 8, 2.938],
      to : [0, 0, -3.633],
      intensity : 2.2448,
      distance : 17.3,
      angle : .7405,
      decay : 1.0663
    }
  }, {
    left : {
      color : 14604903,
      from : [-12.082, 6.427, -8.248],
      to : [0, -2, 0],
      intensity : 3.5917,
      distance : 20.203,
      angle : .4,
      decay : 1.2908
    },
    right : {
      color : 6741722,
      from : [5.591, 2.8972, 10.978],
      to : [0, 0, -5.633],
      intensity : 2.2448,
      distance : 15.713,
      angle : .74,
      decay : 1.0663
    }
  }, {
    left : {
      color : 5818111,
      from : [-6.469, 3, 12.848],
      to : [0, 3, -5],
      intensity : 3.2,
      distance : 20,
      angle : .8,
      decay : 1.2908
    },
    right : {
      color : 15912844,
      from : [5, 3.346, -6.938],
      to : [0, 0, -5],
      intensity : 2,
      distance : 17.3,
      angle : .7405,
      decay : 1.0663
    }
  }];
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "attribute vec3 position;\n\nuniform float u_vertZ;\n\n// varying vec2 v_uv;\n\nvoid main() {\n    // v_uv = position.xy * 0.5 + 0.5;\n    gl_Position = vec4( position.xy, u_vertZ, 1.0 );\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "varying vec3 v_worldPosition;\nvarying vec3 v_viewPosition;\n\nvoid main () {\n    v_worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;\n    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n    v_viewPosition = -mvPosition.xyz;\n    gl_Position = projectionMatrix * mvPosition;\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "#if NUM_SPOT_LIGHTS > 0\n    uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n#endif\n\nuniform sampler2D u_depthTexture;\nuniform mat4 u_projectionViewInverse;\nuniform vec4 u_visualUvInfo;\nuniform vec3 u_cameraPosition;\nuniform vec2 u_resolution;\nuniform float u_noiseTime;\nuniform float u_time;\n\nvarying vec3 v_worldPosition;\nvarying vec3 v_viewPosition;\n\n#include <common>\n#include <packing>\n\n#include <bsdfs>\n#include <lights_pars_begin>\n\n#include <shadowmap_pars_fragment>\n\n#include <snoise3> \n\nfloat sampleShadowMask (SpotLight spotLight, mat4 shadowMatrix, in vec4 worldPosition) {\n    vec4 shadowCoord = shadowMatrix * worldPosition;\n    float shadowBias = spotLight.shadowBias;\n\n    shadowCoord.xyz /= shadowCoord.w;\n    shadowCoord.z += shadowBias;\n\n    bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n    bool inFrustum = all( inFrustumVec );\n    bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n    bool frustumTest = all( frustumTestVec );\n\n    return texture2DCompare( spotShadowMap[SPOTLIGHT_INDEX], shadowCoord.xy, shadowCoord.z );\n}\n\nvoid main () {\n    vec2 screenUv = gl_FragCoord.xy / u_resolution;\n    float depth = unpackRGBAToDepth(texture2D(u_depthTexture, screenUv));\n    vec3 ndcPos = vec3(screenUv, depth) * 2.0 - 1.0;\n    vec4 depthPosition = u_projectionViewInverse * vec4(ndcPos, 1.0);\n    depthPosition.xyz /= depthPosition.w;\n\n    vec3 depthGeomPosition = (viewMatrix * vec4(depthPosition.xyz, 1.0)).xyz;\n\n    vec2 fog = vec2(0.0);\n    vec3 geomPosition = -v_viewPosition;\n    vec3 ray = depthGeomPosition - geomPosition;\n    float maxDist = length(ray);\n    float stepDistance = clamp(maxDist / float(MAX_RAY_STEP), 0.05, 1.0);\n    vec3 rayDir = normalize(ray);\n    vec3 rayStep = rayDir * stepDistance;\n\n    if (rayDir.z > 0.0) {\n        discard;\n    }\n\n    vec3 worldRay = depthPosition.xyz - v_worldPosition;\n    vec3 worldRayDir = normalize(worldRay);\n    vec3 worldRayStep = worldRayDir * stepDistance;\n\n    float jitter = -rand(screenUv + u_noiseTime);\n\n    vec4 viewPosition = vec4(geomPosition + rayStep * jitter, 1.0);\n    vec4 worldPosition = vec4(v_worldPosition + worldRayStep * jitter, 1.0);\n\n    float dist = 0.0;\n\n    SpotLight spotLight = spotLights[SPOTLIGHT_INDEX];\n    mat4 shadowMatrix = spotShadowMatrix[SPOTLIGHT_INDEX];\n\n    for (int i = 0; i < MAX_RAY_STEP; i++) {\n        viewPosition.xyz += rayStep;\n        worldPosition.xyz += worldRayStep;\n        dist += stepDistance;\n\n\t\tvec3 lVector = spotLight.position - viewPosition.xyz;\n\t\tfloat angleCos = dot(normalize(lVector), spotLight.direction );\n\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\n\t\t    float lightDistance = length( lVector );\n            float light = spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n            \n            float shadowMask = sampleShadowMask(spotLight, shadowMatrix, worldPosition);\n\n            float fogWeight = min(10.0, shadowMask * stepDistance);\n\n            float lightWeight = (1.0 - fog.y) * fogWeight;\n            fog += vec2(light, 0.05) * lightWeight;\n            \n            if (fog.y > 0.95) {\n                break;\n            }\n            if (dist > maxDist) {\n                break;\n            }\n\t\t} else {\n            break;\n        }\n    }\n\n    gl_FragColor = vec4(fog.x * spotLight.color * 0.08, 1.0);\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "uniform sampler2D u_texture;\nuniform vec2 u_delta;\n\n#ifdef USE_VARYING\n    varying vec2 v_uv[9];\n#else\n    varying vec2 v_uv;\n#endif\n\nvoid main() {\n    \n    #ifdef USE_VARYING\n        vec4 center = texture2D( u_texture, v_uv[0] );\n        vec3 color = center.rgb;\n        color += texture2D( u_texture,  v_uv[1] ).rgb;\n        color += texture2D( u_texture,  v_uv[2] ).rgb;\n        color += texture2D( u_texture,  v_uv[3] ).rgb;\n        color += texture2D( u_texture,  v_uv[4] ).rgb;\n        color += texture2D( u_texture,  v_uv[5] ).rgb;\n        color += texture2D( u_texture,  v_uv[6] ).rgb;\n        color += texture2D( u_texture,  v_uv[7] ).rgb;\n        color += texture2D( u_texture,  v_uv[8] ).rgb;\n\n        color /= 9.0;\n\n    #else\n        vec4 center = texture2D( u_texture, v_uv );\n        vec3 color = center.rgb;\n\n        vec2 delta = u_delta;\n        color += texture2D( u_texture,  v_uv - delta ).rgb;\n        color += texture2D( u_texture,  v_uv + delta ).rgb;\n\n        delta += u_delta;\n        color += texture2D( u_texture,  v_uv - delta ).rgb;\n        color += texture2D( u_texture,  v_uv + delta ).rgb;\n\n        delta += u_delta;\n        color += texture2D( u_texture,  v_uv - delta ).rgb;\n        color += texture2D( u_texture,  v_uv + delta ).rgb;\n\n        delta += u_delta;\n        color += texture2D( u_texture,  v_uv - delta ).rgb;\n        color += texture2D( u_texture,  v_uv + delta ).rgb;\n\n        color /= 9.0;\n\n    #endif\n    gl_FragColor = vec4(max(color, center.rgb), center.a);\n\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "\n#include <common>\n#include <dithering_pars_fragment>\n\nuniform sampler2D u_texture;\nuniform vec2 u_resolution;\n\nvarying vec2 v_uv;\n\nvoid main() {\n    gl_FragColor = texture2D( u_texture, v_uv + vec2(0.0, 4.0 / u_resolution.y) );\n\n    // #100616 = vec3(0.063,0.024,0.086)\n    gl_FragColor.rgb += vec3(0.063,0.024,0.086);\n\n    #include <dithering_fragment>\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "\nuniform mat4 u_mirrorTextureMatrix;\nvarying vec4 v_mirrorCoord;";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "\nv_mirrorCoord = u_mirrorTextureMatrix * vec4( transformed, 1.0 );\nvUv = (vUv - 0.25) * 100.0 + 0.25;";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "\nvec3 info = texture2D(bumpMap, vUv * 0.5).xyz;\nfloat wetWeight = info.b;\nvec2 uvOffset =  - vec2(0.2, 0.4);\nnormal.xy = info.xy * 2.0 - 1.0;\n\ninfo = texture2D(bumpMap, vUv * 1.3213 + uvOffset).xyz;\nnormal.xy += info.xy * 2.0 - 1.0;\nnormal.xy *= mix(0.5, 0.25, wetWeight);\n\nnormal.y *= -1.0;\nnormal.z = sqrt(1.0 - normal.x * normal.x - normal.y * normal.y);\nvec3 worldNormal = normal;\nnormal = normalMatrix * normalize(normal);\n\nmetalnessFactor = mix(metalnessFactor, 1.0, wetWeight * 0.5);\nroughnessFactor = mix(roughnessFactor, roughnessFactor * 0.5, wetWeight);\n\ndiffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.071,0.071,0.071), wetWeight * 0.75);";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "uniform sampler2D u_mirrorTexture;\nuniform sampler2D u_floorTexture;\nuniform sampler2D u_floorDetailsTexture;\nvarying vec4 v_mirrorCoord;\nvarying vec3 v_worldPosition;\n\nuniform mat3 normalMatrix;";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "outgoingLight += texture2DProj(u_mirrorTexture, v_mirrorCoord + vec4(0.0, 1.0 - wetWeight, 0.0, 0.0)).rgb * wetWeight * 0.5;// * smoothstep(13.0, 10.0, length(v_worldPosition.xz));";
}, function(canCreateDiscussions, params, require) {
  var platform = require(5);
  var component = require(3);
  var Game = require(1);
  var Buffer = require(200);
  var opts = require(203);
  var THREE = require(0);
  /**
   * @param {!Object} id
   * @return {undefined}
   */
  params.preInit = function(id) {
    /** @type {!Object} */
    node = id;
    /** @type {number} */
    (el = params.container = new THREE.Object3D).position.z = -2;
    opts.preInit(id);
    el.add(opts.container);
    prefix = require(204).replace(/#define\sGLSLIFY\s./, "");
    w = require(205).replace(/#define\sGLSLIFY\s./, "");
    y = require(206).replace(/#define\sGLSLIFY\s./, "");
    b = require(207).replace(/#define\sGLSLIFY\s./, "");
    Game.loader.add(component.assetPath + "visuals/contact/animation.glb", {
      type : "any",
      weight : 1,
      hasLoading : true,
      loadFunc : function(name, e, res) {
        Game.GLTFLoader.load(name, function(json) {
          (object = json.scene.children[0].children[1]).add(json.scene.children[0].children[0]);
          object.animations = json.animations;
          e();
        }, function(event) {
          if (event.lengthComputable) {
            res.dispatch(event.loaded / event.total);
          }
        }, function(animate_param) {
          console.log(animate_param);
        });
      }
    });
    /** @type {string} */
    var wholeMonthDiff = component.assetPath + "visuals/contact/" + (platform.isMobile ? "low/" : "high/");
    resp = Game.loader.add(wholeMonthDiff + "cloth_pos.png").content;
    normalImage = Game.loader.add(wholeMonthDiff + "cloth_norm.png").content;
    Game.loader.add(wholeMonthDiff + "cloth.json", {
      onLoad : function(item) {
        /** @type {!Object} */
        ret = item;
      }
    });
  };
  /**
   * @return {undefined}
   */
  params.init = function() {
    opts.init();
    var json = (that = new Buffer({
      image : resp,
      normalImage : normalImage,
      indices : new Uint16Array(ret.indices),
      data : ret,
      fps : 60,
      instanceCount : opts.INSTANCE_COUNT,
      loop : true
    })).geometry;
    var geometry = new THREE.InstancedBufferGeometry;
    if (geometry.setAttribute("position", json.attributes.position), geometry.setIndex(json.index), geometry.setAttribute("a_vaFramePixelIndexOffset", json.attributes.a_vaFramePixelIndexOffset), geometry.setAttribute("a_vaSubFramePixelIndexOffset", json.attributes.a_vaSubFramePixelIndexOffset), geometry.setAttribute("a_instancePosition", opts.attributes.instancePositions), geometry.setAttribute("a_instanceRotation", opts.attributes.instanceRotations), (mesh = new THREE.Mesh(geometry, that.overrideDefaultMaterial(new THREE.MeshStandardMaterial({
      color : 16777215,
      roughness : .4,
      metalness : .15,
      side : THREE.DoubleSide,
      shadowSide : THREE.FrontSide
    }), "standard"))).customDepthMaterial = that.overrideDefaultMaterial(new THREE.MeshDepthMaterial({}), "depth"), mesh.customDepthMaterial.depthPacking = THREE.RGBADepthPacking, mesh.material.vertexShader = prefix + mesh.material.vertexShader, mesh.material.vertexShader = mesh.material.vertexShader.replace("#include <project_vertex>", w), mesh.material.vertexShader = mesh.material.vertexShader.replace("#include <defaultnormal_vertex>", y), mesh.material.vertexShader = mesh.material.vertexShader.replace("#include <fog_vertex>", 
    b), mesh.customDepthMaterial.vertexShader = prefix + mesh.customDepthMaterial.vertexShader, mesh.customDepthMaterial.vertexShader = mesh.customDepthMaterial.vertexShader.replace("#include <project_vertex>", w), mesh.customDepthMaterial.transparent = true, mesh.customDepthMaterial.blending = THREE.NoBlending, mesh.frustumCulled = false, mesh.receiveShadow = true, mesh.castShadow = true, mesh.needsRenderDepth = true, mesh.needsRenderReflection = true, el.add(mesh), json = object.geometry, geometry = 
    THREE.BufferGeometry.prototype.copy.call(new THREE.InstancedBufferGeometry, json), object.geometry = geometry, geometry.setAttribute("a_instancePosition", opts.attributes.instancePositions), geometry.setAttribute("a_instanceRotation", opts.attributes.instanceRotations), geometry.animations = object.animations, geometry.bones = json.bones, geometry.skinIndices = json.skinIndices, geometry.skinWeights = json.skinWeights, object.material = new THREE.MeshStandardMaterial({
      color : 394758,
      roughness : .2,
      metalness : .8,
      skinning : true,
      shadowSide : THREE.FrontSide
    }), object.material.type = "ShaderMaterial", object.material.uniforms = THREE.UniformsUtils.merge([THREE.ShaderLib.standard.uniforms]), object.material.vertexShader = THREE.ShaderChunk.meshphysical_vert, object.material.fragmentShader = THREE.ShaderChunk.meshphysical_frag, object.material.vertexShader = prefix + object.material.vertexShader, object.material.vertexShader = object.material.vertexShader.replace("#include <project_vertex>", w), object.material.vertexShader = object.material.vertexShader.replace("#include <defaultnormal_vertex>", 
    y), object.material.vertexShader = object.material.vertexShader.replace("#include <fog_vertex>", b), object.customDepthMaterial = new THREE.MeshDepthMaterial({}), object.customDepthMaterial.depthPacking = THREE.RGBADepthPacking, object.customDepthMaterial.type = "ShaderMaterial", object.customDepthMaterial.skinning = true, object.customDepthMaterial.uniforms = THREE.UniformsUtils.merge([THREE.ShaderLib.depth.uniforms]), object.customDepthMaterial.vertexShader = prefix + THREE.ShaderLib.depth.vertexShader, 
    object.customDepthMaterial.vertexShader = object.customDepthMaterial.vertexShader.replace("#include <project_vertex>", w), object.customDepthMaterial.fragmentShader = THREE.ShaderLib.depth.fragmentShader, object.customDepthMaterial.transparent = true, object.customDepthMaterial.blending = THREE.NoBlending, object.frustumCulled = false, object.receiveShadow = true, object.castShadow = true, object.needsRenderReflection = true, object.needsRenderDepth = true, el.add(object), mixer = new THREE.AnimationMixer(object), 
    (obj = mixer.clipAction(object.geometry.animations[0], object)).setLoop(THREE.LoopRepeat), obj.clampWhenFinished = true, obj.playScale = 1, obj.weight = 1, obj.play(), window.gui) {
      var gui = node.gui;
      var self = gui.addFolder("va");
      self.addColor(mesh.material, "color");
      self.add(mesh.material, "roughness", 0, 1, 1E-4);
      self.add(mesh.material, "metalness", 0, 1, 1E-4);
      self.open();
      var folder = gui.addFolder("model");
      folder.addColor(object.material, "color");
      folder.add(object.material, "roughness", 0, 1, 1E-4);
      folder.add(object.material, "metalness", 0, 1, 1E-4);
      folder.open();
    }
  };
  /**
   * @param {number} name
   * @return {undefined}
   */
  params.update = function(name) {
    opts.update(name);
    mixer.update(name);
    that.time = mixer.time + 1;
    that.update(0, opts.vertexAnimationBlendSides);
  };
  /** @type {null} */
  var el = params.container = null;
  var object = void 0;
  var resp = void 0;
  var normalImage = void 0;
  var ret = void 0;
  var node = void 0;
  var that = void 0;
  var mesh = void 0;
  var mixer = void 0;
  var obj = void 0;
  var prefix = void 0;
  var y = void 0;
  var w = void 0;
  var b = void 0;
}, function(context, canCreateDiscussions, isogram) {
  /**
   * @param {!Object} options
   * @return {undefined}
   */
  function init(options) {
    this.textureWidth = options.image.naturalWidth;
    this.textureHeight = options.image.naturalHeight;
    /** @type {number} */
    this.time = 0;
    /** @type {boolean} */
    this.isPlaying = true;
    this.fps = options.fps || 60;
    this.indices = options.indices;
    this.vertexCount = options.data.vertexCountMax;
    /** @type {number} */
    this.frame = 0;
    this.frameCount = options.data.frameCount;
    this.actionFrameCount = options.data.actionFrameCount;
    /** @type {boolean} */
    this.useBlend = this.frameCount !== this.actionFrameCount;
    this.instanceCount = options.instanceCount;
    this.subFrameCount = options.data.subFrameCount;
    /** @type {number} */
    this.actionStretchedFrameCount = this.actionFrameCount * options.data.subFrameCount;
    /** @type {number} */
    this.duration = this.actionStretchedFrameCount / this.fps;
    /** @type {boolean} */
    this.loop = !!options.loop;
    /** @type {boolean} */
    this.useNormalImage = !!options.normalImage;
    this.geometry = options.geometry || init.generateGeometry(this);
    var texture = new THREE.Texture(options.image);
    if (texture.magFilter = THREE.NearestFilter, texture.minFilter = THREE.NearestFilter, texture.generateMipMaps = false, texture.flipY = false, texture.needsUpdate = true, this.useNormalImage && (texture.format = THREE.RGBFormat), this.uniforms = {
      u_vaTexture : {
        value : texture
      },
      u_vaTextureSize : {
        value : new THREE.Vector2(this.textureWidth, this.textureHeight)
      }
    }, this.useNormalImage) {
      var texture = new THREE.Texture(options.normalImage);
      texture.magFilter = THREE.NearestFilter;
      texture.minFilter = THREE.NearestFilter;
      /** @type {boolean} */
      texture.generateMipMaps = false;
      /** @type {boolean} */
      texture.flipY = false;
      /** @type {boolean} */
      texture.needsUpdate = true;
      texture.format = THREE.RGBFormat;
      this.uniforms.u_vaNormalTexture = {
        value : texture
      };
      this.uniforms.u_vaNormalTextureSize = {
        value : new THREE.Vector2(this.textureWidth / 2, this.textureHeight)
      };
    }
    this.useBlend;
  }
  var THREE = isogram(0);
  /** @type {function(!Object): undefined} */
  context.exports = init;
  var body = init.prototype;
  /**
   * @param {!Object} params
   * @param {string} type
   * @return {?}
   */
  body.overrideDefaultMaterial = function(params, type) {
    /** @type {string} */
    params.type = "ShaderMaterial";
    var config = THREE.ShaderLib[type];
    var i;
    for (i in params.uniforms = THREE.UniformsUtils.merge([config.uniforms]), this.uniforms) {
      params.uniforms[i] = this.uniforms[i];
    }
    params.vertexShader = config.vertexShader;
    params.fragmentShader = config.fragmentShader;
    params.vertexShader = params.vertexShader.replace("void main() {", (this.useBlend ? "#define USE_VA_BLEND\n" : "\n") + isogram(201).replace(/#define\sGLSLIFY\s./, "") + "void main() {" + isogram(202).replace(/#define\sGLSLIFY\s./, ""));
    params.vertexShader = params.vertexShader.replace("#include <beginnormal_vertex>", "");
    params.vertexShader = params.vertexShader.replace("#include <begin_vertex>", "");
    if (this.useNormalImage && params.defines) {
      /** @type {boolean} */
      params.defines.USE_VA_NORMAL_TEXTURE = true;
    }
    return params;
  };
  /**
   * @param {number} t
   * @param {number} w
   * @return {undefined}
   */
  body.update = function(t, w) {
    if (this.isPlaying) {
      this.time += t;
      if (this.time > this.duration) {
        if (this.loop) {
          /** @type {number} */
          this.time = this.time % this.duration;
        } else {
          /** @type {boolean} */
          this.isPlaying = false;
        }
      }
      /** @type {number} */
      var timePassedFraction = this.time / this.duration;
      /** @type {number} */
      var decimal = timePassedFraction * this.actionFrameCount;
      /** @type {number} */
      var frameTotal = Math.floor(decimal);
      /** @type {number} */
      var decimalIndex = Math.ceil(decimal);
      /** @type {number} */
      var a = decimal % 1;
      /** @type {number} */
      this.frame = frameTotal % this.actionFrameCount;
      var options = this.geometry.attributes.a_vaFramePixelIndexOffset;
      var data = options.array;
      var item = this.geometry.attributes.a_vaSubFramePixelIndexOffset;
      var dest = item.array;
      /** @type {number} */
      var len = 2 * this.vertexCount;
      if (this.useBlend) {
        /** @type {number} */
        var type = 0;
        /** @type {number} */
        var is = 0;
        /** @type {number} */
        var bp = 0;
        for (; type < this.instanceCount; type++) {
          /** @type {number} */
          var m = ~~(frameTotal + type / this.instanceCount * this.actionFrameCount) % this.actionFrameCount;
          var r = w[type];
          /** @type {number} */
          var sd = Math.floor(r) + 1;
          /** @type {number} */
          var y = Math.ceil(r) + 1;
          /** @type {number} */
          var travis_job = r - sd + 1;
          /** @type {number} */
          data[bp + 0] = (m + this.actionFrameCount * sd) * len;
          /** @type {number} */
          data[bp + 1] = (m + this.actionFrameCount * y) * len;
          /** @type {number} */
          data[bp + 2] = travis_job;
          /** @type {number} */
          data[bp + 3] = travis_job;
          /** @type {number} */
          m = ~~(decimalIndex + type / this.instanceCount * this.actionFrameCount) % this.actionFrameCount;
          /** @type {number} */
          dest[is + 0] = (m + this.actionFrameCount * sd) * len;
          /** @type {number} */
          dest[is + 1] = (m + this.actionFrameCount * y) * len;
          /** @type {number} */
          dest[is + 2] = a;
          /** @type {number} */
          is = is + 3;
          /** @type {number} */
          bp = bp + 4;
        }
      } else {
        /** @type {number} */
        var y = 0;
        /** @type {number} */
        var bp = 0;
        for (; y < this.instanceCount; y++) {
          /** @type {number} */
          var z = ~~(frameTotal + y / this.instanceCount * this.actionFrameCount) % this.actionFrameCount;
          /** @type {number} */
          data[bp + 0] = z * len;
          /** @type {number} */
          bp = bp + 3;
        }
      }
      /** @type {boolean} */
      options.needsUpdate = true;
      /** @type {boolean} */
      item.needsUpdate = true;
      if (!this.indices) {
        /** @type {number} */
        this.geometry.drawRange.count = (this.framePixelIndexOffsets[this.frame + 1] - this.framePixelIndexOffsets[this.frame]) / 2;
      }
    }
  };
  /**
   * @param {!Object} geometry
   * @return {?}
   */
  init.generateGeometry = function(geometry) {
    var height = geometry.vertexCount;
    var indices = geometry.indices;
    /** @type {!Float32Array} */
    var buffer = new Float32Array(3 * height);
    /** @type {number} */
    var targetOffsetHeight = 0;
    /** @type {number} */
    var _superSample = 0;
    /** @type {number} */
    var beginPos = 0;
    /** @type {number} */
    var perHeight = height / 3;
    for (; targetOffsetHeight < perHeight; targetOffsetHeight++) {
      /** @type {number} */
      buffer[beginPos + 0] = _superSample;
      /** @type {number} */
      buffer[beginPos + 1] = 0;
      /** @type {number} */
      buffer[beginPos + 2] = 0;
      /** @type {number} */
      buffer[beginPos + 3] = _superSample + 1;
      /** @type {number} */
      buffer[beginPos + 4] = 0;
      /** @type {number} */
      buffer[beginPos + 5] = 0;
      /** @type {number} */
      buffer[beginPos + 6] = _superSample + 2;
      /** @type {number} */
      buffer[beginPos + 7] = 0;
      /** @type {number} */
      buffer[beginPos + 8] = 0;
      /** @type {number} */
      _superSample = _superSample + 3;
      /** @type {number} */
      beginPos = beginPos + 9;
    }
    var bufferedGeometry = new THREE.InstancedBufferGeometry;
    return bufferedGeometry.setAttribute("position", new THREE.BufferAttribute(buffer, 3)), bufferedGeometry.setAttribute("a_vaFramePixelIndexOffset", new THREE.InstancedBufferAttribute(new Float32Array(4 * geometry.instanceCount), 4)), bufferedGeometry.setAttribute("a_vaSubFramePixelIndexOffset", new THREE.InstancedBufferAttribute(new Float32Array(3 * geometry.instanceCount), 3)), indices && bufferedGeometry.setIndex(new THREE.BufferAttribute(indices, 1)), bufferedGeometry;
  };
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "uniform sampler2D u_vaTexture;\nuniform vec2 u_vaTextureSize;\nattribute vec4 a_vaFramePixelIndexOffset;\nattribute vec3 a_vaSubFramePixelIndexOffset;\n\n#ifdef USE_VA_NORMAL_TEXTURE\nuniform sampler2D u_vaNormalTexture;\nuniform vec2 u_vaNormalTextureSize;\n#endif\n\nfloat decodePositionFloat (vec2 enc) {\n  float divider = 100.0;\n  enc.x *= 255.0 / 256.0;\n  enc.y *= 1.0 / 256.0;\n  return ((enc.x + enc.y) * 2.0 - 1.0) * divider;\n}\n\nvec3 decodeNormal (vec2 enc) {\n  vec2 fenc = enc * 4.0 - 2.0;\n  float f = dot(fenc, fenc);\n  // if g is zero, it will be an issue\n  float g = max(0.001, sqrt(1.0 - f/4.0));\n  vec3 n;\n  n.xy = fenc*g;\n  n.z = 1.0 - f/2.0;\n  return n;\n}\n\nfloat computeData (float index, float frameIndexOffset, inout vec3 p, inout vec3 n) {\n\n  float pixelIndex = index * 2.0 + frameIndexOffset + 0.5;\n  vec2 uv = (floor(vec2(\n    mod(pixelIndex, u_vaTextureSize.x),\n    pixelIndex / u_vaTextureSize.x\n  )) + 0.5) / u_vaTextureSize;\n  vec4 data0 = texture2D(u_vaTexture, uv);\n  vec4 data1 = texture2D(u_vaTexture, uv + vec2(1.0 / u_vaTextureSize.x, 0.0));\n\n  p = vec3(\n    decodePositionFloat(vec2(data0.x, data1.x)),\n    decodePositionFloat(vec2(data0.y, data1.y)),\n    decodePositionFloat(vec2(data0.z, data1.z))\n  );\n\n  #ifdef USE_VA_NORMAL_TEXTURE\n      pixelIndex = index + frameIndexOffset * 0.5 + 0.5;\n      uv = (floor(vec2(\n        mod(pixelIndex, u_vaNormalTextureSize.x),\n        pixelIndex / u_vaNormalTextureSize.x\n      )) + 0.5) / u_vaNormalTextureSize;\n\n    vec3 nn = texture2D(u_vaNormalTexture, uv).xyz;\n    n = normalize(decodeNormal(nn.xy));\n    return nn.z;\n  #else\n    n = normalize(decodeNormal(vec2(data0.w, data1.w)));\n  #endif\n\n  return 0.0;\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "vec3 transformed = vec3(0.0);\nvec3 objectNormal = vec3(0.0);\n\ncomputeData(position.x, a_vaFramePixelIndexOffset.x, transformed, objectNormal);\n\n#ifdef USE_VA_BLEND\n    vec3 blendedPosition = vec3(0.0);\n    vec3 blendedNormal = vec3(0.0);\n    \n    float looseness = computeData(position.x, a_vaFramePixelIndexOffset.y, blendedPosition, blendedNormal);\n\n    float blendWeight = mix(a_vaFramePixelIndexOffset.z, a_vaFramePixelIndexOffset.w, looseness);\n\n    transformed = mix(transformed, blendedPosition, blendWeight);\n    objectNormal = normalize(mix(objectNormal, blendedNormal, blendWeight));\n\n    vec3 tmpPos = vec3(0.0);\n    vec3 tmpNormal = vec3(0.0);\n\n    computeData(position.x, a_vaSubFramePixelIndexOffset.x, tmpPos, tmpNormal);\n    computeData(position.x, a_vaSubFramePixelIndexOffset.y, blendedPosition, blendedNormal);\n    \n    tmpPos = mix(tmpPos, blendedPosition, blendWeight);\n    tmpNormal = normalize(mix(tmpNormal, blendedNormal, blendWeight));\n\n    transformed = mix(transformed, tmpPos, a_vaSubFramePixelIndexOffset.z);\n    objectNormal = normalize(mix(objectNormal, tmpNormal, a_vaSubFramePixelIndexOffset.z));\n\n#endif";
}, function(canCreateDiscussions, params, require) {
  /**
   * @param {!Object} a
   * @return {undefined}
   */
  function update(a) {
    /** @type {number} */
    var l = Math.floor(2 * delta * Math.PI / (1.5 * m_total_iterations));
    /** @type {!Array} */
    var b = [];
    /** @type {number} */
    var i = 0;
    for (; i < l; i++) {
      /** @type {number} */
      b[i] = i;
    }
    b = min(b);
    /** @type {boolean} */
    var r = true;
    for (; b.length;) {
      /** @type {number} */
      var jointAngle = b.pop() / l * Math.PI * 2;
      /** @type {boolean} */
      var e = false;
      a.position.set(Math.cos(jointAngle) * delta, 0, Math.sin(jointAngle) * delta);
      /** @type {number} */
      var lightAngle = Math.PI + jointAngle + 90 * (Math.random() - .5) * Math.PI / 180;
      a.directionForce.set(0, 0, 0);
      a.direction.set(Math.cos(lightAngle), 0, Math.sin(lightAngle));
      /** @type {number} */
      var i = 0;
      for (; i < numVerts; i++) {
        var e = result[i];
        if (e !== a && a.position.distanceTo(e.position) < 1.5 * m_total_iterations) {
          /** @type {boolean} */
          e = true;
          break;
        }
      }
      if (!e) {
        /** @type {boolean} */
        r = false;
        break;
      }
    }
    if (r) {
      /** @type {number} */
      var jointAngle = Math.random() * Math.PI * 2;
      a.position.set(Math.cos(jointAngle) * delta, 0, Math.sin(jointAngle) * delta);
      /** @type {number} */
      var lightAngle = Math.PI + jointAngle + 30 * (Math.random() - .5) * Math.PI / 180;
      a.direction.set(Math.cos(lightAngle), 0, Math.sin(lightAngle));
    }
    a.prevDirection.copy(a.direction);
    /** @type {number} */
    a.rotation.y = Math.atan2(-a.direction.z, a.direction.x);
    /** @type {number} */
    a.side = 0;
  }
  var platform = require(5);
  var parent = (require(3), require(1));
  var input = require(2);
  var THREE = require(0);
  var min = require(44);
  /**
   * @param {!Object} module
   * @return {undefined}
   */
  params.preInit = function(module) {
    /** @type {!Object} */
    key = module;
    m = new THREE.Vector3;
    normal = new THREE.Vector3;
    g = new THREE.Vector3;
    localUp = new THREE.Vector3(0, 1, 0);
    params.container = new THREE.Object3D;
    entity.instancePositions = new THREE.InstancedBufferAttribute(new Float32Array(3 * numVerts), 3);
    entity.instanceRotations = new THREE.InstancedBufferAttribute(new Float32Array(4 * numVerts), 4);
  };
  /**
   * @return {undefined}
   */
  params.init = function() {
    var t = new THREE.CylinderBufferGeometry(0, .6, 2);
    t.rotateZ(-.5 * Math.PI);
    var m = new THREE.MeshNormalMaterial;
    /** @type {number} */
    var i = 0;
    for (; i < numVerts; i++) {
      var d = new THREE.Mesh(t, m);
      /** @type {number} */
      d.position.z = 1E3;
      /** @type {number} */
      d.runnerIndex = i;
      d.direction = new THREE.Vector3;
      d.pendingDirection = new THREE.Vector3;
      d.prevDirection = new THREE.Vector3;
      d.directionForce = new THREE.Vector3;
      /** @type {number} */
      d.angle = 0;
      /** @type {number} */
      d.prevAngle = 0;
      /** @type {number} */
      d.side = 0;
      /** @type {number} */
      d.inTime = i / numVerts * 2;
      /** @type {boolean} */
      d.visible = false;
      /** @type {number} */
      params.vertexAnimationBlendSides[i] = 0;
      result.push(d);
    }
  };
  /**
   * @param {number} t
   * @return {undefined}
   */
  params.update = function(t) {
    var mesh = entity.instancePositions;
    var positions = mesh.array;
    var position = entity.instanceRotations;
    var array = position.array;
    /** @type {number} */
    var k = 0;
    /** @type {number} */
    var name = 0;
    /** @type {number} */
    var start = 0;
    for (; k < numVerts; k++) {
      var r = result[k];
      /** @type {boolean} */
      r.visible = r.inTime < v;
      if (r.visible) {
        /** @type {number} */
        r.rotation.y = Math.atan2(-r.direction.z, r.direction.x);
        r.position.add(m.copy(r.direction).multiplyScalar(strokeRadius));
        if (r.position.length() > delta) {
          update(r);
        }
      }
      positions[name + 0] = r.position.x;
      positions[name + 1] = r.position.y;
      positions[name + 2] = r.position.z;
      r.rotation.y += Math.PI / 2;
      array[start + 0] = r.quaternion.x;
      array[start + 1] = r.quaternion.y;
      array[start + 2] = r.quaternion.z;
      array[start + 3] = r.quaternion.w;
      r.rotation.y -= Math.PI / 2;
      /** @type {number} */
      name = name + 3;
      /** @type {number} */
      start = start + 4;
    }
    /** @type {boolean} */
    mesh.needsUpdate = true;
    /** @type {boolean} */
    position.needsUpdate = true;
    /** @type {number} */
    var j = 0;
    for (; j < numVerts; j++) {
      var p = result[j];
      if (p.visible) {
        p.pendingDirection.set(0, 0, 0);
        g.set(0, 0, 0);
        if (0 == j) {
          normal.set(key.mouse3.x - p.position.x, 0, key.mouse3.z - p.position.z + 2);
          if (normal.length() > 0) {
            m.copy(normal).multiplyScalar(.05);
            g.add(m);
          }
        }
        /** @type {number} */
        var i = 0;
        for (; i < numVerts; i++) {
          if (j !== i) {
            var l = result[i];
            normal.copy(p.position).sub(l.position);
            var m_iterations_done = normal.length();
            if (m_iterations_done < m_total_iterations) {
              /** @type {number} */
              var averageMass2 = 0 == i ? 2 : 1;
              normal.normalize();
              if (p.direction.dot(normal) < 0) {
                m.copy(p.direction).reflect(normal).multiplyScalar(.2 * (1 - m_iterations_done / m_total_iterations) * averageMass2);
                g.add(m);
                m.copy(normal).multiplyScalar(.035 * (1 - m_iterations_done / m_total_iterations) * averageMass2);
                g.add(m);
              }
            }
          }
        }
        p.pendingDirection.add(g);
        p.directionForce.multiplyScalar(.2);
        p.directionForce.add(p.pendingDirection);
      }
    }
    /** @type {number} */
    var i = 0;
    for (; i < numVerts; i++) {
      var data = result[i];
      if (data.visible) {
        data.prevDirection.copy(data.direction);
        data.pendingDirection.copy(data.directionForce).add(data.direction).normalize();
        data.direction.copy(data.pendingDirection);
        data.direction.applyAxisAngle(localUp, .04 * parent.simplex.noise2D(10 * i, .2 * v));
        var frame = data.prevDirection.angleTo(data.direction);
        /** @type {number} */
        frame = frame * (10 * (m.copy(data.prevDirection).cross(data.direction).y > 0 ? -1 : 1));
        data.side += .1 * (frame - data.side);
        data.side = input.clamp(data.side, -1, 1);
        params.vertexAnimationBlendSides[i] = data.side;
      }
    }
    v = v + t;
  };
  /** @type {null} */
  params.container = null;
  var entity = params.attributes = {};
  /** @type {!Array} */
  params.vertexAnimationBlendSides = [];
  /** @type {!Array} */
  var result = [];
  /** @type {number} */
  var delta = platform.isMac ? 12 : platform.isMobile ? 11 : 13;
  /** @type {number} */
  var numVerts = params.INSTANCE_COUNT = platform.isMac ? 16 : platform.isMobile ? 14 : 24;
  /** @type {number} */
  var m_total_iterations = 5;
  /** @type {number} */
  var strokeRadius = .07;
  var key = void 0;
  var m = void 0;
  var normal = void 0;
  var g = void 0;
  var localUp = void 0;
  /** @type {number} */
  var v = 0;
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "attribute vec3 a_instancePosition;\nattribute vec4 a_instanceRotation;\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "\ntransformed = transformed + 2.0 * cross(a_instanceRotation.xyz, cross(a_instanceRotation.xyz, transformed) + a_instanceRotation.w * transformed) + a_instancePosition;\n\n#include <project_vertex>\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "objectNormal = objectNormal + 2.0 * cross(a_instanceRotation.xyz, cross(a_instanceRotation.xyz, objectNormal) + a_instanceRotation.w * objectNormal);\n\n#include <defaultnormal_vertex>\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "\n#ifdef USE_FOG\nvec3 geomDir = normalize((modelMatrix * vec4(transformed, 1.0)).xyz - cameraPosition);\nfogDepth = -(viewMatrix * vec4(geomDir * (cameraPosition.y / geomDir.y) + cameraPosition, 1.0)).z;\n#endif";
}, function(canCreateDiscussions, opts, require) {
  /**
   * @param {!Node} canvas
   * @param {?} options
   * @return {?}
   */
  function init(canvas, options) {
    if (!params.gl) {
      options = setupDefaultSchema({
        antialias : true,
        alpha : false
      }, options);
      var gl = self.gl = canvas.getContext("webgl", options) || canvas.getContext("experimental-webgl", options);
      return (gl.getExtension("OES_texture_float") || gl.getExtension("OES_texture_half_float")) && gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS) ? (params.renderTargetFloatType = utils.isIOS || !gl.getExtension("OES_texture_float") ? THREE.HalfFloatType : THREE.FloatType, params.dataFloatType = THREE.FloatType, params.useFloatPacking = false) : (params.renderTargetFloatType = params.dataFloatType = THREE.UnsignedByteType, params.useFloatPacking = true), true;
    }
    return false;
  }
  var self = require(1);
  var params = require(3);
  var utils = require(5);
  var WSHandler = require(209);
  var requestHelpers = require(210);
  var Canvasse = require(33);
  var callbacks = require(4);
  var module = require(36);
  var tmp = require(50);
  var setupDefaultSchema = require(211);
  var THREE = require(0);
  /**
   * @param {!Node} metadata
   * @param {?} done
   * @return {?}
   */
  opts.checkIsSupported = function(metadata, done) {
    if (window.WebGLRenderingContext) {
      try {
        return init(metadata, done);
      } catch (e) {
        return false;
      }
    }
    return false;
  };
  /**
   * @return {undefined}
   */
  opts.preInit = function() {
    if (params.USE_SMAA) {
      tmp.setTextures(self.loader.add(params.cdnPath + "visuals/shared/smaa-area.png").content, self.loader.add(params.cdnPath + "visuals/shared/smaa-search.png").content);
    }
  };
  /**
   * @return {undefined}
   */
  opts.init = function() {
    init(self.canvas);
    module.addChunk("getScatter", require(212));
    module.addChunk("getScatterLine", require(213));
    module.addChunk("cubic", require(214));
    module.addChunk("textureBicubic", require(215));
    module.addChunk("textureLodBicubic", require(216));
    module.addChunk("snoise2", require(217));
    module.addChunk("snoise3", require(218));
    module.addChunk("snoise4", require(219));
    module.addChunk("rotate2d", require(220));
    module.addChunk("curl4Low", require(221));
    module.addChunk("curl4Mid", require(222));
    module.addChunk("simplexNoiseDerivatives4", require(223));
    module.addChunk("encodeNormal", require(224));
    module.addChunk("decodeNormal", require(225));
    module.addChunk("halfFloatPacking", require(226));
    module.addChunk("samplePackedFloats", require(227));
    (renderer = self.renderer = new THREE.WebGLRenderer({
      canvas : self.canvas,
      context : self.gl
    })).shadowMap.type = THREE.PCFShadowMap;
    /** @type {boolean} */
    renderer.shadowMap.enabled = true;
    callbacks.init(renderer, params.renderTargetFloatType, params.dataFloatType);
    self.resolution = new THREE.Vector2;
    self.GLTFLoader = new WSHandler;
    self.GLTFLoadFunc = requestHelpers.createQuickLoadFunc(self.GLTFLoader);
    Canvasse.init();
    target = new THREE.Vector2;
  };
  /**
   * @return {undefined}
   */
  opts.start = function() {
  };
  /**
   * @param {number} w
   * @param {number} h
   * @return {undefined}
   */
  opts.resize = function(w, h) {
    self.resolution.set(w, h);
    renderer.setRenderTarget(null);
    renderer.getSize(target);
    if (target.width !== w || target.height !== h) {
      renderer.setSize(w, h, false);
    }
  };
  /**
   * @return {undefined}
   */
  opts.reset = function() {
  };
  /**
   * @param {!Object} obj
   * @return {undefined}
   */
  opts.render = function(obj) {
  };
  var renderer = void 0;
  var target = void 0;
}, function(mixin, canCreateDiscussions, require) {
  /** @type {function(?): ?} */
  var Object = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(canCreateDiscussions) {
    return typeof canCreateDiscussions;
  } : function(obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
  var THREE = require(0);
  mixin.exports = THREE.GLTFLoader = function() {
    /**
     * @param {string} e
     * @return {undefined}
     */
    function GLTFLoader(e) {
      this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager;
      /** @type {null} */
      this.dracoLoader = null;
    }
    /**
     * @return {?}
     */
    function GLTFRegistry() {
      var controllerTypes = {};
      return {
        get : function(name) {
          return controllerTypes[name];
        },
        add : function(name, type) {
          /** @type {string} */
          controllerTypes[name] = type;
        },
        remove : function(name) {
          delete controllerTypes[name];
        },
        removeAll : function() {
          controllerTypes = {};
        }
      };
    }
    /**
     * @return {undefined}
     */
    function Link() {
      if (!THREE.DDSLoader) {
        throw new Error("THREE.GLTFLoader: Attempting to load .dds texture without importing THREE.DDSLoader");
      }
      /** @type {string} */
      this.name = EXTENSIONS.MSFT_TEXTURE_DDS;
      this.ddsLoader = new THREE.DDSLoader;
    }
    /**
     * @param {!Object} json
     * @return {undefined}
     */
    function GLTFMaterialsCommonExtension(json) {
      /** @type {string} */
      this.name = EXTENSIONS.KHR_LIGHTS_PUNCTUAL;
      var pm = json.extensions && json.extensions[EXTENSIONS.KHR_LIGHTS_PUNCTUAL] || {};
      this.lightDefs = pm.lights || [];
    }
    /**
     * @param {?} post_cmd
     * @return {undefined}
     */
    function Buffer(post_cmd) {
      /** @type {string} */
      this.name = EXTENSIONS.KHR_MATERIALS_UNLIT;
    }
    /**
     * @param {string} data
     * @return {undefined}
     */
    function GLTFBinaryExtension(data) {
      /** @type {string} */
      this.name = EXTENSIONS.KHR_BINARY_GLTF;
      /** @type {null} */
      this.content = null;
      /** @type {null} */
      this.body = null;
      /** @type {!DataView} */
      var raw = new DataView(data, 0, dataOffset);
      if (this.header = {
        magic : THREE.LoaderUtils.decodeText(new Uint8Array(data.slice(0, 4))),
        version : raw.getUint32(4, true),
        length : raw.getUint32(8, true)
      }, this.header.magic !== u) {
        throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
      }
      if (this.header.version < 2) {
        throw new Error("THREE.GLTFLoader: Legacy binary file detected. Use LegacyGLTFLoader instead.");
      }
      /** @type {!DataView} */
      var view = new DataView(data, dataOffset);
      /** @type {number} */
      var offset = 0;
      for (; offset < view.byteLength;) {
        /** @type {number} */
        var len = view.getUint32(offset, true);
        /** @type {number} */
        offset = offset + 4;
        /** @type {number} */
        var id = view.getUint32(offset, true);
        if (offset = offset + 4, id === win.JSON) {
          /** @type {!Uint8Array} */
          var blob = new Uint8Array(data, dataOffset + offset, len);
          this.content = THREE.LoaderUtils.decodeText(blob);
        } else {
          if (id === win.BIN) {
            /** @type {number} */
            var start = dataOffset + offset;
            this.body = data.slice(start, start + len);
          }
        }
        /** @type {number} */
        offset = offset + len;
      }
      if (null === this.content) {
        throw new Error("THREE.GLTFLoader: JSON content not found.");
      }
    }
    /**
     * @param {!Object} roots
     * @param {?} rootValueTypes
     * @return {undefined}
     */
    function f(roots, rootValueTypes) {
      if (!rootValueTypes) {
        throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
      }
      /** @type {string} */
      this.name = EXTENSIONS.KHR_DRACO_MESH_COMPRESSION;
      /** @type {!Object} */
      this.json = roots;
      this.dracoLoader = rootValueTypes;
      THREE.DRACOLoader.getDecoderModule();
    }
    /**
     * @param {?} xmlUser
     * @return {undefined}
     */
    function User(xmlUser) {
      /** @type {string} */
      this.name = EXTENSIONS.KHR_TEXTURE_TRANSFORM;
    }
    /**
     * @return {?}
     */
    function update() {
      return {
        name : EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,
        specularGlossinessParams : ["color", "map", "lightMap", "lightMapIntensity", "aoMap", "aoMapIntensity", "emissive", "emissiveIntensity", "emissiveMap", "bumpMap", "bumpScale", "normalMap", "displacementMap", "displacementScale", "displacementBias", "specularMap", "specular", "glossinessMap", "glossiness", "alphaMap", "envMap", "envMapIntensity", "refractionRatio"],
        getMaterialType : function() {
          return THREE.ShaderMaterial;
        },
        extendParams : function(material, options, $) {
          var extension = options.extensions[this.name];
          var json = THREE.ShaderLib.standard;
          var uniforms = THREE.UniformsUtils.clone(json.uniforms);
          /** @type {string} */
          var s = ["#ifdef USE_SPECULARMAP", "\tuniform sampler2D specularMap;", "#endif"].join("\n");
          /** @type {string} */
          var u = ["#ifdef USE_GLOSSINESSMAP", "\tuniform sampler2D glossinessMap;", "#endif"].join("\n");
          /** @type {string} */
          var c = ["vec3 specularFactor = specular;", "#ifdef USE_SPECULARMAP", "\tvec4 texelSpecular = texture2D( specularMap, vUv );", "\ttexelSpecular = sRGBToLinear( texelSpecular );", "\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tspecularFactor *= texelSpecular.rgb;", "#endif"].join("\n");
          /** @type {string} */
          var l = ["float glossinessFactor = glossiness;", "#ifdef USE_GLOSSINESSMAP", "\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );", "\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tglossinessFactor *= texelGlossiness.a;", "#endif"].join("\n");
          /** @type {string} */
          var frag = ["PhysicalMaterial material;", "material.diffuseColor = diffuseColor.rgb;", "material.specularRoughness = clamp( 1.0 - glossinessFactor, 0.04, 1.0 );", "material.specularColor = specularFactor.rgb;"].join("\n");
          var fragmentShader = json.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", s).replace("#include <metalnessmap_pars_fragment>", u).replace("#include <roughnessmap_fragment>", c).replace("#include <metalnessmap_fragment>", l).replace("#include <lights_physical_fragment>", frag);
          delete uniforms.roughness;
          delete uniforms.metalness;
          delete uniforms.roughnessMap;
          delete uniforms.metalnessMap;
          uniforms.specular = {
            value : (new THREE.Color).setHex(1118481)
          };
          uniforms.glossiness = {
            value : .5
          };
          uniforms.specularMap = {
            value : null
          };
          uniforms.glossinessMap = {
            value : null
          };
          material.vertexShader = json.vertexShader;
          material.fragmentShader = fragmentShader;
          material.uniforms = uniforms;
          material.defines = {
            STANDARD : ""
          };
          material.color = new THREE.Color(1, 1, 1);
          /** @type {number} */
          material.opacity = 1;
          /** @type {!Array} */
          var result = [];
          if (Array.isArray(extension.diffuseFactor)) {
            var st = extension.diffuseFactor;
            material.color.fromArray(st);
            material.opacity = st[3];
          }
          if (void 0 !== extension.diffuseTexture && result.push($.assignTexture(material, "map", extension.diffuseTexture)), material.emissive = new THREE.Color(0, 0, 0), material.glossiness = void 0 !== extension.glossinessFactor ? extension.glossinessFactor : 1, material.specular = new THREE.Color(1, 1, 1), Array.isArray(extension.specularFactor) && material.specular.fromArray(extension.specularFactor), void 0 !== extension.specularGlossinessTexture) {
            var value = extension.specularGlossinessTexture;
            result.push($.assignTexture(material, "glossinessMap", value));
            result.push($.assignTexture(material, "specularMap", value));
          }
          return Promise.all(result);
        },
        createMaterial : function(material) {
          var source = new THREE.ShaderMaterial({
            defines : material.defines,
            vertexShader : material.vertexShader,
            fragmentShader : material.fragmentShader,
            uniforms : material.uniforms,
            fog : true,
            lights : true,
            opacity : material.opacity,
            transparent : material.transparent
          });
          return source.isGLTFSpecularGlossinessMaterial = true, source.color = material.color, source.map = void 0 === material.map ? null : material.map, source.lightMap = null, source.lightMapIntensity = 1, source.aoMap = void 0 === material.aoMap ? null : material.aoMap, source.aoMapIntensity = 1, source.emissive = material.emissive, source.emissiveIntensity = 1, source.emissiveMap = void 0 === material.emissiveMap ? null : material.emissiveMap, source.bumpMap = void 0 === material.bumpMap ? 
          null : material.bumpMap, source.bumpScale = 1, source.normalMap = void 0 === material.normalMap ? null : material.normalMap, material.normalScale && (source.normalScale = material.normalScale), source.displacementMap = null, source.displacementScale = 1, source.displacementBias = 0, source.specularMap = void 0 === material.specularMap ? null : material.specularMap, source.specular = material.specular, source.glossinessMap = void 0 === material.glossinessMap ? null : material.glossinessMap, 
          source.glossiness = material.glossiness, source.alphaMap = null, source.envMap = void 0 === material.envMap ? null : material.envMap, source.envMapIntensity = 1, source.refractionRatio = .98, source.extensions.derivatives = true, source;
        },
        cloneMaterial : function(material) {
          var mat = material.clone();
          /** @type {boolean} */
          mat.isGLTFSpecularGlossinessMaterial = true;
          var color_props = this.specularGlossinessParams;
          /** @type {number} */
          var j = 0;
          var clen = color_props.length;
          for (; j < clen; j++) {
            mat[color_props[j]] = material[color_props[j]];
          }
          return mat;
        },
        refreshUniforms : function(data, linkedEntities, force, radius, material, outer_wall) {
          if (true === material.isGLTFSpecularGlossinessMaterial) {
            var uvScaleMap;
            var uniforms = material.uniforms;
            var defines = material.defines;
            uniforms.opacity.value = material.opacity;
            uniforms.diffuse.value.copy(material.color);
            uniforms.emissive.value.copy(material.emissive).multiplyScalar(material.emissiveIntensity);
            uniforms.map.value = material.map;
            uniforms.specularMap.value = material.specularMap;
            uniforms.alphaMap.value = material.alphaMap;
            uniforms.lightMap.value = material.lightMap;
            uniforms.lightMapIntensity.value = material.lightMapIntensity;
            uniforms.aoMap.value = material.aoMap;
            uniforms.aoMapIntensity.value = material.aoMapIntensity;
            if (material.map) {
              uvScaleMap = material.map;
            } else {
              if (material.specularMap) {
                uvScaleMap = material.specularMap;
              } else {
                if (material.displacementMap) {
                  uvScaleMap = material.displacementMap;
                } else {
                  if (material.normalMap) {
                    uvScaleMap = material.normalMap;
                  } else {
                    if (material.bumpMap) {
                      uvScaleMap = material.bumpMap;
                    } else {
                      if (material.glossinessMap) {
                        uvScaleMap = material.glossinessMap;
                      } else {
                        if (material.alphaMap) {
                          uvScaleMap = material.alphaMap;
                        } else {
                          if (material.emissiveMap) {
                            uvScaleMap = material.emissiveMap;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            if (void 0 !== uvScaleMap) {
              if (uvScaleMap.isWebGLRenderTarget) {
                uvScaleMap = uvScaleMap.texture;
              }
              if (true === uvScaleMap.matrixAutoUpdate) {
                uvScaleMap.updateMatrix();
              }
              uniforms.uvTransform.value.copy(uvScaleMap.matrix);
            }
            if (material.envMap) {
              uniforms.envMap.value = material.envMap;
              uniforms.envMapIntensity.value = material.envMapIntensity;
              /** @type {number} */
              uniforms.flipEnvMap.value = material.envMap.isCubeTexture ? -1 : 1;
              uniforms.reflectivity.value = material.reflectivity;
              uniforms.refractionRatio.value = material.refractionRatio;
              uniforms.maxMipLevel.value = data.properties.get(material.envMap).__maxMipLevel;
            }
            uniforms.specular.value.copy(material.specular);
            uniforms.glossiness.value = material.glossiness;
            uniforms.glossinessMap.value = material.glossinessMap;
            uniforms.emissiveMap.value = material.emissiveMap;
            uniforms.bumpMap.value = material.bumpMap;
            uniforms.normalMap.value = material.normalMap;
            uniforms.displacementMap.value = material.displacementMap;
            uniforms.displacementScale.value = material.displacementScale;
            uniforms.displacementBias.value = material.displacementBias;
            if (null !== uniforms.glossinessMap.value && void 0 === defines.USE_GLOSSINESSMAP) {
              /** @type {string} */
              defines.USE_GLOSSINESSMAP = "";
              /** @type {string} */
              defines.USE_ROUGHNESSMAP = "";
            }
            if (null === uniforms.glossinessMap.value && void 0 !== defines.USE_GLOSSINESSMAP) {
              delete defines.USE_GLOSSINESSMAP;
              delete defines.USE_ROUGHNESSMAP;
            }
          }
        }
      };
    }
    /**
     * @param {!Object} x
     * @param {!Object} y
     * @param {?} lastTagName
     * @param {?} lastAttributeName
     * @return {undefined}
     */
    function State(x, y, lastTagName, lastAttributeName) {
      THREE.Interpolant.call(this, x, y, lastTagName, lastAttributeName);
    }
    /**
     * @param {string} val
     * @param {string} n
     * @return {?}
     */
    function normalize(val, n) {
      return "string" != typeof val || "" === val ? "" : /^(https?:)?\/\//i.test(val) ? val : /^data:.*,.*$/i.test(val) ? val : /^blob:.*$/i.test(val) ? val : n + val;
    }
    /**
     * @param {!Object} obj
     * @param {!Object} data
     * @param {!Object} source
     * @return {undefined}
     */
    function callback(obj, data, source) {
      var prop;
      for (prop in source.extensions) {
        if (void 0 === obj[prop]) {
          data.userData.gltfExtensions = data.userData.gltfExtensions || {};
          data.userData.gltfExtensions[prop] = source.extensions[prop];
        }
      }
    }
    /**
     * @param {!Object} element
     * @param {!Object} options
     * @return {undefined}
     */
    function next(element, options) {
      if (void 0 !== options.extras) {
        if ("object" === Object(options.extras)) {
          element.userData = options.extras;
        } else {
          console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + options.extras);
        }
      }
    }
    /**
     * @param {?} mesh
     * @param {!Object} config
     * @return {undefined}
     */
    function render(mesh, config) {
      if (mesh.updateMorphTargets(), void 0 !== config.weights) {
        /** @type {number} */
        var i = 0;
        var l = config.weights.length;
        for (; i < l; i++) {
          mesh.morphTargetInfluences[i] = config.weights[i];
        }
      }
      if (config.extras && Array.isArray(config.extras.targetNames)) {
        var indices = config.extras.targetNames;
        if (mesh.morphTargetInfluences.length === indices.length) {
          mesh.morphTargetDictionary = {};
          /** @type {number} */
          i = 0;
          l = indices.length;
          for (; i < l; i++) {
            /** @type {number} */
            mesh.morphTargetDictionary[indices[i]] = i;
          }
        } else {
          console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
        }
      }
    }
    /**
     * @param {!Object} attrs
     * @param {!Object} obj
     * @return {?}
     */
    function merge(attrs, obj) {
      if (Object.keys(attrs).length !== Object.keys(obj).length) {
        return false;
      }
      var key;
      for (key in attrs) {
        if (attrs[key] !== obj[key]) {
          return false;
        }
      }
      return true;
    }
    /**
     * @param {!Object} result
     * @param {!NodeList} fn
     * @return {?}
     */
    function getValue(result, fn) {
      if (result.length !== fn.length) {
        return false;
      }
      /** @type {number} */
      var a = 0;
      var length = result.length;
      for (; a < length; a++) {
        if (result[a] !== fn[a]) {
          return false;
        }
      }
      return true;
    }
    /**
     * @param {!NodeList} context
     * @param {!Object} startNode
     * @return {?}
     */
    function filter(context, startNode) {
      /** @type {number} */
      var p = 0;
      var pos = context.length;
      for (; p < pos; p++) {
        var obj = context[p];
        if (item = obj.primitive, node = startNode, self = void 0, other = void 0, self = item.extensions ? item.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION] : void 0, other = node.extensions ? node.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION] : void 0, self && other ? self.bufferView === other.bufferView && merge(self.attributes, other.attributes) : item.indices === node.indices && merge(item.attributes, node.attributes)) {
          return obj.promise;
        }
      }
      var item;
      var node;
      var self;
      var other;
      return null;
    }
    /**
     * @param {!Object} source
     * @return {?}
     */
    function validate(source) {
      if (source.isInterleavedBufferAttribute) {
        var length = source.count;
        var size = source.itemSize;
        var buffer = source.array.slice(0, length * size);
        /** @type {number} */
        var i = 0;
        for (; i < length; ++i) {
          buffer[i] = source.getX(i);
          if (size >= 2) {
            buffer[i + 1] = source.getY(i);
          }
          if (size >= 3) {
            buffer[i + 2] = source.getZ(i);
          }
          if (size >= 4) {
            buffer[i + 3] = source.getW(i);
          }
        }
        return new THREE.BufferAttribute(buffer, size, source.normalized);
      }
      return source.clone();
    }
    /**
     * @param {!Object} json
     * @param {!Object} extensions
     * @param {!Object} options
     * @return {undefined}
     */
    function GLTFParser(json, extensions, options) {
      this.json = json || {};
      this.extensions = extensions || {};
      this.options = options || {};
      this.cache = new GLTFRegistry;
      /** @type {!Array} */
      this.primitiveCache = [];
      /** @type {!Array} */
      this.multiplePrimitivesCache = [];
      /** @type {!Array} */
      this.multiPassGeometryCache = [];
      this.textureLoader = new THREE.TextureLoader(this.options.manager);
      this.textureLoader.setCrossOrigin(this.options.crossOrigin);
      this.fileLoader = new THREE.FileLoader(this.options.manager);
      this.fileLoader.setResponseType("arraybuffer");
    }
    /**
     * @param {!Object} e
     * @param {!Object} data
     * @param {?} app
     * @return {?}
     */
    function test(e, data, app) {
      /**
       * @param {string} provider
       * @param {?} name
       * @return {?}
       */
      function filter(provider, name) {
        return app.getDependency("accessor", provider).then(function(val) {
          e.setAttribute(name, val);
        });
      }
      var obj = data.attributes;
      /** @type {!Array} */
      var result = [];
      var i;
      for (i in obj) {
        var prop = arr[i];
        if (prop) {
          if (!(prop in e.attributes)) {
            result.push(filter(obj[i], prop));
          }
        }
      }
      if (void 0 !== data.indices && !e.index) {
        var embedResult = app.getDependency("accessor", data.indices).then(function(name) {
          e.setIndex(name);
        });
        result.push(embedResult);
      }
      return next(e, data), Promise.all(result).then(function() {
        return void 0 !== data.targets ? function(e, cell, app) {
          /** @type {boolean} */
          var id = false;
          /** @type {boolean} */
          var slug = false;
          /** @type {number} */
          var n = 0;
          var i = cell.length;
          for (; n < i && (void 0 !== (x = cell[n]).POSITION && (id = true), void 0 !== x.NORMAL && (slug = true), !id || !slug); n++) {
          }
          if (!id && !slug) {
            return Promise.resolve(e);
          }
          /** @type {!Array} */
          var pingPromises = [];
          /** @type {!Array} */
          var awaitableQueries = [];
          /** @type {number} */
          n = 0;
          i = cell.length;
          for (; n < i; n++) {
            var x = cell[n];
            if (id) {
              var follower_old = void 0 !== x.POSITION ? app.getDependency("accessor", x.POSITION).then(function(tempFilePath) {
                return validate(tempFilePath);
              }) : e.attributes.position;
              pingPromises.push(follower_old);
            }
            if (slug) {
              follower_old = void 0 !== x.NORMAL ? app.getDependency("accessor", x.NORMAL).then(function(tempFilePath) {
                return validate(tempFilePath);
              }) : e.attributes.normal;
              awaitableQueries.push(follower_old);
            }
          }
          return Promise.all([Promise.all(pingPromises), Promise.all(awaitableQueries)]).then(function(array) {
            var val = array[0];
            var data = array[1];
            /** @type {number} */
            var k = 0;
            var colspan = cell.length;
            for (; k < colspan; k++) {
              var outputData = cell[k];
              /** @type {string} */
              var methodName = "morphTarget" + k;
              if (id && void 0 !== outputData.POSITION) {
                var v = val[k];
                /** @type {string} */
                v.name = methodName;
                var pos = e.attributes.position;
                /** @type {number} */
                var i = 0;
                var l = v.count;
                for (; i < l; i++) {
                  v.setXYZ(i, v.getX(i) + pos.getX(i), v.getY(i) + pos.getY(i), v.getZ(i) + pos.getZ(i));
                }
              }
              if (slug && void 0 !== outputData.NORMAL) {
                var v = data[k];
                /** @type {string} */
                v.name = methodName;
                var normals = e.attributes.normal;
                /** @type {number} */
                i = 0;
                l = v.count;
                for (; i < l; i++) {
                  v.setXYZ(i, v.getX(i) + normals.getX(i), v.getY(i) + normals.getY(i), v.getZ(i) + normals.getZ(i));
                }
              }
            }
            return id && (e.morphAttributes.position = val), slug && (e.morphAttributes.normal = data), e;
          });
        }(e, data.targets, app) : e;
      });
    }
    GLTFLoader.prototype = {
      constructor : GLTFLoader,
      crossOrigin : "anonymous",
      load : function(url, data, done, next) {
        var sectionName;
        var scope = this;
        sectionName = void 0 !== this.resourcePath ? this.resourcePath : void 0 !== this.path ? this.path : THREE.LoaderUtils.extractUrlBase(url);
        scope.manager.itemStart(url);
        /**
         * @param {?} err
         * @return {undefined}
         */
        var callback = function(err) {
          if (next) {
            next(err);
          } else {
            console.error(err);
          }
          scope.manager.itemError(url);
          scope.manager.itemEnd(url);
        };
        var loader = new THREE.FileLoader(scope.manager);
        loader.setPath(this.path);
        loader.setResponseType("arraybuffer");
        loader.load(url, function(n) {
          try {
            scope.parse(n, sectionName, function(butt) {
              data(butt);
              scope.manager.itemEnd(url);
            }, callback);
          } catch (configOptions) {
            callback(configOptions);
          }
        }, done, callback);
      },
      setCrossOrigin : function(value) {
        return this.crossOrigin = value, this;
      },
      setPath : function(value) {
        return this.path = value, this;
      },
      setResourcePath : function(path) {
        return this.resourcePath = path, this;
      },
      setDRACOLoader : function(canCreateDiscussions) {
        return this.dracoLoader = canCreateDiscussions, this;
      },
      parse : function(data, type, end, callback) {
        var message;
        var extensions = {};
        if ("string" == typeof data) {
          /** @type {string} */
          message = data;
        } else {
          if (THREE.LoaderUtils.decodeText(new Uint8Array(data, 0, 4)) === u) {
            try {
              extensions[EXTENSIONS.KHR_BINARY_GLTF] = new GLTFBinaryExtension(data);
            } catch (jsonNote) {
              return void(callback && callback(jsonNote));
            }
            message = extensions[EXTENSIONS.KHR_BINARY_GLTF].content;
          } else {
            message = THREE.LoaderUtils.decodeText(new Uint8Array(data));
          }
        }
        /** @type {*} */
        var json = JSON.parse(message);
        if (void 0 === json.asset || json.asset.version[0] < 2) {
          if (callback) {
            callback(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported. Use LegacyGLTFLoader instead."));
          }
        } else {
          if (json.extensionsUsed) {
            /** @type {number} */
            var i = 0;
            for (; i < json.extensionsUsed.length; ++i) {
              var a = json.extensionsUsed[i];
              var _ = json.extensionsRequired || [];
              switch(a) {
                case EXTENSIONS.KHR_LIGHTS_PUNCTUAL:
                  extensions[a] = new GLTFMaterialsCommonExtension(json);
                  break;
                case EXTENSIONS.KHR_MATERIALS_UNLIT:
                  extensions[a] = new Buffer(json);
                  break;
                case EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                  extensions[a] = new update(json);
                  break;
                case EXTENSIONS.KHR_DRACO_MESH_COMPRESSION:
                  extensions[a] = new f(json, this.dracoLoader);
                  break;
                case EXTENSIONS.MSFT_TEXTURE_DDS:
                  extensions[EXTENSIONS.MSFT_TEXTURE_DDS] = new Link(json);
                  break;
                case EXTENSIONS.KHR_TEXTURE_TRANSFORM:
                  extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM] = new User(json);
                  break;
                default:
                  if (_.indexOf(a) >= 0) {
                    console.warn('THREE.GLTFLoader: Unknown extension "' + a + '".');
                  }
              }
            }
          }
          var parser = new GLTFParser(json, extensions, {
            path : type || this.resourcePath || "",
            crossOrigin : this.crossOrigin,
            manager : this.manager
          });
          parser.parse(function(scene, scenes, cameras, animations, asset) {
            var result = {
              scene : scene,
              scenes : scenes,
              cameras : cameras,
              animations : animations,
              asset : asset.asset,
              parser : parser,
              userData : {}
            };
            callback(extensions, result, asset);
            end(result);
          }, callback);
        }
      }
    };
    var EXTENSIONS = {
      KHR_BINARY_GLTF : "KHR_binary_glTF",
      KHR_DRACO_MESH_COMPRESSION : "KHR_draco_mesh_compression",
      KHR_LIGHTS_PUNCTUAL : "KHR_lights_punctual",
      KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS : "KHR_materials_pbrSpecularGlossiness",
      KHR_MATERIALS_UNLIT : "KHR_materials_unlit",
      KHR_TEXTURE_TRANSFORM : "KHR_texture_transform",
      MSFT_TEXTURE_DDS : "MSFT_texture_dds"
    };
    /**
     * @param {string} i
     * @return {?}
     */
    GLTFMaterialsCommonExtension.prototype.loadLight = function(i) {
      var obj;
      var data = this.lightDefs[i];
      var color = new THREE.Color(16777215);
      if (void 0 !== data.color) {
        color.fromArray(data.color);
      }
      var userDistanceToEndStep = void 0 !== data.range ? data.range : 0;
      switch(data.type) {
        case "directional":
          (obj = new THREE.DirectionalLight(color)).target.position.set(0, 0, -1);
          obj.add(obj.target);
          break;
        case "point":
          (obj = new THREE.PointLight(color)).distance = userDistanceToEndStep;
          break;
        case "spot":
          (obj = new THREE.SpotLight(color)).distance = userDistanceToEndStep;
          data.spot = data.spot || {};
          data.spot.innerConeAngle = void 0 !== data.spot.innerConeAngle ? data.spot.innerConeAngle : 0;
          data.spot.outerConeAngle = void 0 !== data.spot.outerConeAngle ? data.spot.outerConeAngle : Math.PI / 4;
          obj.angle = data.spot.outerConeAngle;
          /** @type {number} */
          obj.penumbra = 1 - data.spot.innerConeAngle / data.spot.outerConeAngle;
          obj.target.position.set(0, 0, -1);
          obj.add(obj.target);
          break;
        default:
          throw new Error('THREE.GLTFLoader: Unexpected light type, "' + data.type + '".');
      }
      return obj.decay = 2, void 0 !== data.intensity && (obj.intensity = data.intensity), obj.name = data.name || "light_" + i, Promise.resolve(obj);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    Buffer.prototype.getMaterialType = function(name) {
      return THREE.MeshBasicMaterial;
    };
    /**
     * @param {!Object} object
     * @param {?} target
     * @param {?} options
     * @return {?}
     */
    Buffer.prototype.extendParams = function(object, target, options) {
      /** @type {!Array} */
      var promises = [];
      object.color = new THREE.Color(1, 1, 1);
      /** @type {number} */
      object.opacity = 1;
      var result = target.pbrMetallicRoughness;
      if (result) {
        if (Array.isArray(result.baseColorFactor)) {
          var buffer = result.baseColorFactor;
          object.color.fromArray(buffer);
          object.opacity = buffer[3];
        }
        if (void 0 !== result.baseColorTexture) {
          promises.push(options.assignTexture(object, "map", result.baseColorTexture));
        }
      }
      return Promise.all(promises);
    };
    /** @type {string} */
    var u = "glTF";
    /** @type {number} */
    var dataOffset = 12;
    var win = {
      JSON : 1313821514,
      BIN : 5130562
    };
    /**
     * @param {!Object} self
     * @param {?} app
     * @return {?}
     */
    f.prototype.decodePrimitive = function(self, app) {
      var json = this.json;
      var t = this.dracoLoader;
      var provider = self.extensions[this.name].bufferView;
      var sources = self.extensions[this.name].attributes;
      var result = {};
      var hashTable = {};
      var window = {};
      var i;
      for (i in sources) {
        if (i in arr) {
          result[arr[i]] = sources[i];
        }
      }
      for (i in self.attributes) {
        if (void 0 !== arr[i] && void 0 !== sources[i]) {
          var accessor = json.accessors[self.attributes[i]];
          var TypedArray = WEBGL_COMPONENT_TYPES[accessor.componentType];
          window[arr[i]] = TypedArray;
          /** @type {boolean} */
          hashTable[arr[i]] = true === accessor.normalized;
        }
      }
      return app.getDependency("bufferView", provider).then(function(blob) {
        return new Promise(function(enterEventHandler) {
          t.decodeDracoFile(blob, function(e) {
            var key;
            for (key in e.attributes) {
              var json = e.attributes[key];
              var current = hashTable[key];
              if (void 0 !== current) {
                json.normalized = current;
              }
            }
            enterEventHandler(e);
          }, result, window);
        });
      });
    };
    /**
     * @param {!Object} node
     * @param {!Object} data
     * @return {?}
     */
    User.prototype.extendTexture = function(node, data) {
      return node = node.clone(), void 0 !== data.offset && node.offset.fromArray(data.offset), void 0 !== data.rotation && (node.rotation = data.rotation), void 0 !== data.scale && node.repeat.fromArray(data.scale), void 0 !== data.texCoord && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), node.needsUpdate = true, node;
    };
    /** @type {!Object} */
    State.prototype = Object.create(THREE.Interpolant.prototype);
    /** @type {function(!Object, !Object, ?, ?): undefined} */
    State.prototype.constructor = State;
    /**
     * @param {?} i
     * @return {?}
     */
    State.prototype.copySampleValue_ = function(i) {
      var result = this.resultBuffer;
      var values = this.sampleValues;
      var stride = this.valueSize;
      var offsetN = i * stride * 3 + stride;
      /** @type {number} */
      var j = 0;
      for (; j !== stride; j++) {
        result[j] = values[offsetN + j];
      }
      return result;
    };
    /** @type {function(?): ?} */
    State.prototype.beforeStart_ = State.prototype.copySampleValue_;
    /** @type {function(?): ?} */
    State.prototype.afterEnd_ = State.prototype.copySampleValue_;
    /**
     * @param {number} multiplier
     * @param {(boolean|number|string)} message
     * @param {(boolean|number|string)} args
     * @param {(boolean|number|string)} lastDummyAlign
     * @return {?}
     */
    State.prototype.interpolate_ = function(multiplier, message, args, lastDummyAlign) {
      var result = this.resultBuffer;
      var window = this.sampleValues;
      var key = this.valueSize;
      /** @type {number} */
      var c = 2 * key;
      /** @type {number} */
      var stdDev = 3 * key;
      /** @type {number} */
      var factor = lastDummyAlign - message;
      /** @type {number} */
      var count = (args - message) / factor;
      /** @type {number} */
      var i = count * count;
      /** @type {number} */
      var j = i * count;
      /** @type {number} */
      var prefix = multiplier * stdDev;
      /** @type {number} */
      var out = prefix - stdDev;
      /** @type {number} */
      var x1 = -2 * j + 3 * i;
      /** @type {number} */
      var len = j - i;
      /** @type {number} */
      var w = 1 - x1;
      /** @type {number} */
      var z = len - i + count;
      /** @type {number} */
      var id = 0;
      for (; id !== key; id++) {
        var y = window[out + id + key];
        /** @type {number} */
        var x = window[out + id + c] * factor;
        var t = window[prefix + id + key];
        /** @type {number} */
        var width = window[prefix + id] * factor;
        /** @type {number} */
        result[id] = w * y + z * x + x1 * t + len * width;
      }
      return result;
    };
    /** @type {number} */
    var value = 0;
    /** @type {number} */
    var name = 1;
    /** @type {number} */
    var ENTER = 2;
    /** @type {number} */
    var undefined = 3;
    /** @type {number} */
    var EXIT = 4;
    /** @type {number} */
    var ANCHOR = 5;
    /** @type {number} */
    var id = 6;
    var WEBGL_COMPONENT_TYPES = (Number, THREE.Matrix3, THREE.Matrix4, THREE.Vector2, THREE.Vector3, THREE.Vector4, THREE.Texture, {
      5120 : Int8Array,
      5121 : Uint8Array,
      5122 : Int16Array,
      5123 : Uint16Array,
      5125 : Uint32Array,
      5126 : Float32Array
    });
    var WEBGL_FILTERS = {
      9728 : THREE.NearestFilter,
      9729 : THREE.LinearFilter,
      9984 : THREE.NearestMipMapNearestFilter,
      9985 : THREE.LinearMipMapNearestFilter,
      9986 : THREE.NearestMipMapLinearFilter,
      9987 : THREE.LinearMipMapLinearFilter
    };
    var WEBGL_WRAPPINGS = {
      33071 : THREE.ClampToEdgeWrapping,
      33648 : THREE.MirroredRepeatWrapping,
      10497 : THREE.RepeatWrapping
    };
    var WEBGL_TYPE_SIZES = (THREE.BackSide, THREE.FrontSide, THREE.NeverDepth, THREE.LessDepth, THREE.EqualDepth, THREE.LessEqualDepth, THREE.GreaterEqualDepth, THREE.NotEqualDepth, THREE.GreaterEqualDepth, THREE.AlwaysDepth, THREE.AddEquation, THREE.SubtractEquation, THREE.ReverseSubtractEquation, THREE.ZeroFactor, THREE.OneFactor, THREE.SrcColorFactor, THREE.OneMinusSrcColorFactor, THREE.SrcAlphaFactor, THREE.OneMinusSrcAlphaFactor, THREE.DstAlphaFactor, THREE.OneMinusDstAlphaFactor, THREE.DstColorFactor, 
    THREE.OneMinusDstColorFactor, THREE.SrcAlphaSaturateFactor, {
      SCALAR : 1,
      VEC2 : 2,
      VEC3 : 3,
      VEC4 : 4,
      MAT2 : 4,
      MAT3 : 9,
      MAT4 : 16
    });
    var arr = {
      POSITION : "position",
      NORMAL : "normal",
      TEXCOORD_0 : "uv",
      TEXCOORD_1 : "uv2",
      COLOR_0 : "color",
      WEIGHTS_0 : "skinWeight",
      JOINTS_0 : "skinIndex"
    };
    var PATH_PROPERTIES = {
      scale : "scale",
      translation : "position",
      rotation : "quaternion",
      weights : "morphTargetInfluences"
    };
    var INTERPOLATION = {
      CUBICSPLINE : THREE.InterpolateSmooth,
      LINEAR : THREE.InterpolateLinear,
      STEP : THREE.InterpolateDiscrete
    };
    /** @type {string} */
    var desc = "OPAQUE";
    /** @type {string} */
    var _START_TO_END = "MASK";
    /** @type {string} */
    var _START_TO_START = "BLEND";
    var exportTypes = {
      "image/png" : THREE.RGBAFormat,
      "image/jpeg" : THREE.RGBFormat
    };
    return GLTFParser.prototype.parse = function(format, type) {
      var i = this.json;
      this.cache.removeAll();
      this.markDefs();
      this.getMultiDependencies(["scene", "animation", "camera"]).then(function(gltf) {
        var headLoad = gltf.scenes || [];
        var licenseRow = headLoad[i.scene || 0];
        var transportDelay = gltf.animations || [];
        var ocClient = gltf.cameras || [];
        format(licenseRow, headLoad, ocClient, transportDelay, i);
      }).catch(type);
    }, GLTFParser.prototype.markDefs = function() {
      var ret = this.json.nodes || [];
      var skins = this.json.skins || [];
      var objectPropAccess = this.json.meshes || [];
      var mode = {};
      var colors = {};
      /** @type {number} */
      var j = 0;
      var n = skins.length;
      for (; j < n; j++) {
        var joints = skins[j].joints;
        /** @type {number} */
        var i = 0;
        var length = joints.length;
        for (; i < length; i++) {
          /** @type {boolean} */
          ret[joints[i]].isBone = true;
        }
      }
      /** @type {number} */
      var p = 0;
      var len = ret.length;
      for (; p < len; p++) {
        var obj = ret[p];
        if (void 0 !== obj.mesh) {
          if (void 0 === mode[obj.mesh]) {
            /** @type {number} */
            mode[obj.mesh] = colors[obj.mesh] = 0;
          }
          mode[obj.mesh]++;
          if (void 0 !== obj.skin) {
            /** @type {boolean} */
            objectPropAccess[obj.mesh].isSkinnedMesh = true;
          }
        }
      }
      this.json.meshReferences = mode;
      this.json.meshUses = colors;
    }, GLTFParser.prototype.getDependency = function(type, name) {
      /** @type {string} */
      var msg = type + ":" + name;
      var entry = this.cache.get(msg);
      if (!entry) {
        switch(type) {
          case "scene":
            entry = this.loadScene(name);
            break;
          case "node":
            entry = this.loadNode(name);
            break;
          case "mesh":
            entry = this.loadMesh(name);
            break;
          case "accessor":
            entry = this.loadAccessor(name);
            break;
          case "bufferView":
            entry = this.loadBufferView(name);
            break;
          case "buffer":
            entry = this.loadBuffer(name);
            break;
          case "material":
            entry = this.loadMaterial(name);
            break;
          case "texture":
            entry = this.loadTexture(name);
            break;
          case "skin":
            entry = this.loadSkin(name);
            break;
          case "animation":
            entry = this.loadAnimation(name);
            break;
          case "camera":
            entry = this.loadCamera(name);
            break;
          case "light":
            entry = this.extensions[EXTENSIONS.KHR_LIGHTS_PUNCTUAL].loadLight(name);
            break;
          default:
            throw new Error("Unknown type: " + type);
        }
        this.cache.add(msg, entry);
      }
      return entry;
    }, GLTFParser.prototype.getDependencies = function(name) {
      var result = this.cache.get(name);
      if (!result) {
        var app = this;
        var navLinksArr = this.json[name + ("mesh" === name ? "es" : "s")] || [];
        /** @type {!Promise<Array<?>>} */
        result = Promise.all(navLinksArr.map(function(canCreateDiscussions, provider) {
          return app.getDependency(name, provider);
        }));
        this.cache.add(name, result);
      }
      return result;
    }, GLTFParser.prototype.getMultiDependencies = function(s) {
      var contentClasses = {};
      /** @type {!Array} */
      var specs = [];
      /** @type {number} */
      var i = 0;
      var l = s.length;
      for (; i < l; i++) {
        var file = s[i];
        var dependencies = this.getDependencies(file);
        dependencies = dependencies.then(function(c, undefined) {
          contentClasses[c] = undefined;
        }.bind(this, file + ("mesh" === file ? "es" : "s")));
        specs.push(dependencies);
      }
      return Promise.all(specs).then(function() {
        return contentClasses;
      });
    }, GLTFParser.prototype.loadBuffer = function(name) {
      var meta = this.json.buffers[name];
      var parent = this.fileLoader;
      if (meta.type && "arraybuffer" !== meta.type) {
        throw new Error("THREE.GLTFLoader: " + meta.type + " buffer type is not supported.");
      }
      if (void 0 === meta.uri && 0 === name) {
        return Promise.resolve(this.extensions[EXTENSIONS.KHR_BINARY_GLTF].body);
      }
      var options = this.options;
      return new Promise(function(type, stepCallback) {
        parent.load(normalize(meta.uri, options.path), type, void 0, function() {
          stepCallback(new Error('THREE.GLTFLoader: Failed to load buffer "' + meta.uri + '".'));
        });
      });
    }, GLTFParser.prototype.loadBufferView = function(name) {
      var src = this.json.bufferViews[name];
      return this.getDependency("buffer", src.buffer).then(function(flatColVals) {
        var nrOfSamples = src.byteLength || 0;
        var colStartSampleNr = src.byteOffset || 0;
        return flatColVals.slice(colStartSampleNr, colStartSampleNr + nrOfSamples);
      });
    }, GLTFParser.prototype.loadAccessor = function(key) {
      var cq = this;
      var json = this.json;
      var accessor = this.json.accessors[key];
      if (void 0 === accessor.bufferView && void 0 === accessor.sparse) {
        return Promise.resolve(null);
      }
      /** @type {!Array} */
      var settingPromises = [];
      return void 0 !== accessor.bufferView ? settingPromises.push(this.getDependency("bufferView", accessor.bufferView)) : settingPromises.push(null), void 0 !== accessor.sparse && (settingPromises.push(this.getDependency("bufferView", accessor.sparse.indices.bufferView)), settingPromises.push(this.getDependency("bufferView", accessor.sparse.values.bufferView))), Promise.all(settingPromises).then(function(componentStack) {
        var array;
        var self;
        var arraybuffer = componentStack[0];
        var itemSize = WEBGL_TYPE_SIZES[accessor.type];
        var TypedArray = WEBGL_COMPONENT_TYPES[accessor.componentType];
        var elementBytes = TypedArray.BYTES_PER_ELEMENT;
        /** @type {number} */
        var initialStreakDateGivenByUser = elementBytes * itemSize;
        var height = accessor.byteOffset || 0;
        var initialStreakDateGivenByUserBkp = void 0 !== accessor.bufferView ? json.bufferViews[accessor.bufferView].byteStride : void 0;
        /** @type {boolean} */
        var parameters = true === accessor.normalized;
        if (initialStreakDateGivenByUserBkp && initialStreakDateGivenByUserBkp !== initialStreakDateGivenByUser) {
          /** @type {string} */
          var m = "InterleavedBuffer:" + accessor.bufferView + ":" + accessor.componentType;
          var b = cq.cache.get(m);
          if (!b) {
            array = new TypedArray(arraybuffer);
            b = new THREE.InterleavedBuffer(array, initialStreakDateGivenByUserBkp / elementBytes);
            cq.cache.add(m, b);
          }
          self = new THREE.InterleavedBufferAttribute(b, itemSize, height / elementBytes, parameters);
        } else {
          array = null === arraybuffer ? new TypedArray(accessor.count * itemSize) : new TypedArray(arraybuffer, height, accessor.count * itemSize);
          self = new THREE.BufferAttribute(array, itemSize, parameters);
        }
        if (void 0 !== accessor.sparse) {
          /** @type {number} */
          var SCALAR = WEBGL_TYPE_SIZES.SCALAR;
          var Tab = WEBGL_COMPONENT_TYPES[accessor.sparse.indices.componentType];
          var id = accessor.sparse.indices.byteOffset || 0;
          var hex = accessor.sparse.values.byteOffset || 0;
          var tab = new Tab(componentStack[1], id, accessor.sparse.count * SCALAR);
          var b = new TypedArray(componentStack[2], hex, accessor.sparse.count * itemSize);
          if (null !== arraybuffer) {
            self.setArray(self.array.slice());
          }
          /** @type {number} */
          var i = 0;
          var tabs = tab.length;
          for (; i < tabs; i++) {
            var data = tab[i];
            if (self.setX(data, b[i * itemSize]), itemSize >= 2 && self.setY(data, b[i * itemSize + 1]), itemSize >= 3 && self.setZ(data, b[i * itemSize + 2]), itemSize >= 4 && self.setW(data, b[i * itemSize + 3]), itemSize >= 5) {
              throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
            }
          }
        }
        return self;
      });
    }, GLTFParser.prototype.loadTexture = function(key) {
      var instance;
      var material = this;
      var json = this.json;
      var options = this.options;
      var text = this.textureLoader;
      var URL = window.URL || window.webkitURL;
      var self = json.textures[key];
      var patterns = self.extensions || {};
      var url = (instance = patterns[EXTENSIONS.MSFT_TEXTURE_DDS] ? json.images[patterns[EXTENSIONS.MSFT_TEXTURE_DDS].source] : json.images[self.source]).uri;
      /** @type {boolean} */
      var f = false;
      return void 0 !== instance.bufferView && (url = material.getDependency("bufferView", instance.bufferView).then(function(arrayBuf) {
        /** @type {boolean} */
        f = true;
        /** @type {!Blob} */
        var blob = new Blob([arrayBuf], {
          type : instance.mimeType
        });
        return url = URL.createObjectURL(blob);
      })), Promise.resolve(url).then(function(a) {
        var t = THREE.Loader.Handlers.get(a);
        return t || (t = patterns[EXTENSIONS.MSFT_TEXTURE_DDS] ? material.extensions[EXTENSIONS.MSFT_TEXTURE_DDS].ddsLoader : text), new Promise(function(scriptSrc, next) {
          t.load(normalize(a, options.path), scriptSrc, void 0, next);
        });
      }).then(function(texture) {
        if (true === f) {
          URL.revokeObjectURL(url);
        }
        /** @type {boolean} */
        texture.flipY = false;
        if (void 0 !== self.name) {
          texture.name = self.name;
        }
        if (instance.mimeType in exportTypes) {
          texture.format = exportTypes[instance.mimeType];
        }
        var sampler = (json.samplers || {})[self.sampler] || {};
        return texture.magFilter = WEBGL_FILTERS[sampler.magFilter] || THREE.LinearFilter, texture.minFilter = WEBGL_FILTERS[sampler.minFilter] || THREE.LinearMipMapLinearFilter, texture.wrapS = WEBGL_WRAPPINGS[sampler.wrapS] || THREE.RepeatWrapping, texture.wrapT = WEBGL_WRAPPINGS[sampler.wrapT] || THREE.RepeatWrapping, texture;
      });
    }, GLTFParser.prototype.assignTexture = function(object, name, source) {
      var material = this;
      return this.getDependency("texture", source.index).then(function(data) {
        if (material.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM]) {
          var type = void 0 !== source.extensions ? source.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM] : void 0;
          if (type) {
            data = material.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM].extendTexture(data, type);
          }
        }
        object[name] = data;
      });
    }, GLTFParser.prototype.loadMaterial = function(type) {
      var side;
      var json = this.json;
      var results = this.extensions;
      var options = json.materials[type];
      var material = {};
      var extensions = options.extensions || {};
      /** @type {!Array} */
      var promises = [];
      if (extensions[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
        var editor = results[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
        side = editor.getMaterialType(options);
        promises.push(editor.extendParams(material, options, this));
      } else {
        if (extensions[EXTENSIONS.KHR_MATERIALS_UNLIT]) {
          var editor = results[EXTENSIONS.KHR_MATERIALS_UNLIT];
          side = editor.getMaterialType(options);
          promises.push(editor.extendParams(material, options, this));
        } else {
          side = THREE.MeshStandardMaterial;
          var record = options.pbrMetallicRoughness || {};
          if (material.color = new THREE.Color(1, 1, 1), material.opacity = 1, Array.isArray(record.baseColorFactor)) {
            var st = record.baseColorFactor;
            material.color.fromArray(st);
            material.opacity = st[3];
          }
          if (void 0 !== record.baseColorTexture) {
            promises.push(this.assignTexture(material, "map", record.baseColorTexture));
          }
          material.metalness = void 0 !== record.metallicFactor ? record.metallicFactor : 1;
          material.roughness = void 0 !== record.roughnessFactor ? record.roughnessFactor : 1;
          if (void 0 !== record.metallicRoughnessTexture) {
            promises.push(this.assignTexture(material, "metalnessMap", record.metallicRoughnessTexture));
            promises.push(this.assignTexture(material, "roughnessMap", record.metallicRoughnessTexture));
          }
        }
      }
      if (true === options.doubleSided) {
        material.side = THREE.DoubleSide;
      }
      var how = options.alphaMode || desc;
      return how === _START_TO_START ? material.transparent = true : (material.transparent = false, how === _START_TO_END && (material.alphaTest = void 0 !== options.alphaCutoff ? options.alphaCutoff : .5)), void 0 !== options.normalTexture && side !== THREE.MeshBasicMaterial && (promises.push(this.assignTexture(material, "normalMap", options.normalTexture)), material.normalScale = new THREE.Vector2(1, 1), void 0 !== options.normalTexture.scale && material.normalScale.set(options.normalTexture.scale, 
      options.normalTexture.scale)), void 0 !== options.occlusionTexture && side !== THREE.MeshBasicMaterial && (promises.push(this.assignTexture(material, "aoMap", options.occlusionTexture)), void 0 !== options.occlusionTexture.strength && (material.aoMapIntensity = options.occlusionTexture.strength)), void 0 !== options.emissiveFactor && side !== THREE.MeshBasicMaterial && (material.emissive = (new THREE.Color).fromArray(options.emissiveFactor)), void 0 !== options.emissiveTexture && side !== THREE.MeshBasicMaterial && 
      promises.push(this.assignTexture(material, "emissiveMap", options.emissiveTexture)), Promise.all(promises).then(function() {
        var json;
        return json = side === THREE.ShaderMaterial ? results[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(material) : new side(material), void 0 !== options.name && (json.name = options.name), json.normalScale && (json.normalScale.y = -json.normalScale.y), json.map && (json.map.encoding = THREE.sRGBEncoding), json.emissiveMap && (json.emissiveMap.encoding = THREE.sRGBEncoding), json.specularMap && (json.specularMap.encoding = THREE.sRGBEncoding), next(json, options), options.extensions && 
        callback(results, json, options), json;
      });
    }, GLTFParser.prototype.loadGeometries = function(results) {
      /**
       * @param {!Object} object
       * @return {?}
       */
      function filter(object) {
        return extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(object, a).then(function(id) {
          return test(id, object, a);
        });
      }
      var primitives;
      var a = this;
      var extensions = this.extensions;
      var context = this.primitiveCache;
      var json_results = function(obj) {
        if (obj.length < 2) {
          return false;
        }
        var o = obj[0];
        var elements = o.targets || [];
        if (void 0 === o.indices) {
          return false;
        }
        /** @type {number} */
        var z = 1;
        var depth = obj.length;
        for (; z < depth; z++) {
          var self = obj[z];
          if (o.mode !== self.mode) {
            return false;
          }
          if (void 0 === self.indices) {
            return false;
          }
          if (self.extensions && self.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION]) {
            return false;
          }
          if (!merge(o.attributes, self.attributes)) {
            return false;
          }
          var expressions = self.targets || [];
          if (elements.length !== expressions.length) {
            return false;
          }
          /** @type {number} */
          var i = 0;
          var eL = elements.length;
          for (; i < eL; i++) {
            if (!merge(elements[i], expressions[i])) {
              return false;
            }
          }
        }
        return true;
      }(results);
      if (json_results) {
        /** @type {!Array} */
        primitives = results;
        /** @type {!Array} */
        results = [results[0]];
      }
      /** @type {!Array} */
      var model = [];
      /** @type {number} */
      var i = 0;
      var l = results.length;
      for (; i < l; i++) {
        var handle;
        var node = results[i];
        var map = filter(context, node);
        if (map) {
          model.push(map);
        } else {
          handle = node.extensions && node.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION] ? filter(node) : test(new THREE.BufferGeometry, node, a);
          context.push({
            primitive : node,
            promise : handle
          });
          model.push(handle);
        }
      }
      return Promise.all(model).then(function(value) {
        if (json_results) {
          var data = value[0];
          if (null !== (object = function(keySpecs, key, obj) {
            /** @type {number} */
            var i = 0;
            var patchLen = keySpecs.length;
            for (; i < patchLen; i++) {
              var spec = keySpecs[i];
              if (key === spec.baseGeometry && getValue(obj, spec.primitives)) {
                return spec.geometry;
              }
            }
            return null;
          }(self = a.multiPassGeometryCache, data, primitives))) {
            return [object.geometry];
          }
          var that = new THREE.BufferGeometry;
          var key;
          for (key in that.name = data.name, that.userData = data.userData, data.attributes) {
            that.setAttribute(key, data.attributes[key]);
          }
          for (key in data.morphAttributes) {
            that.morphAttributes[key] = data.morphAttributes[key];
          }
          /** @type {!Array} */
          var settingPromises = [];
          /** @type {number} */
          var i = 0;
          var length = primitives.length;
          for (; i < length; i++) {
            settingPromises.push(a.getDependency("accessor", primitives[i].indices));
          }
          return Promise.all(settingPromises).then(function(inputs) {
            /** @type {!Array} */
            var x = [];
            /** @type {number} */
            var start = 0;
            /** @type {number} */
            var type = 0;
            var length = primitives.length;
            for (; type < length; type++) {
              var input = inputs[type];
              /** @type {number} */
              var i = 0;
              var cols = input.count;
              for (; i < cols; i++) {
                x.push(input.array[i]);
              }
              that.addGroup(start, input.count, type);
              start = start + input.count;
            }
            return that.setIndex(x), self.push({
              geometry : that,
              baseGeometry : data,
              primitives : primitives
            }), [that];
          });
        }
        if (value.length > 1 && void 0 !== THREE.BufferGeometryUtils) {
          /** @type {number} */
          i = 1;
          length = results.length;
          for (; i < length; i++) {
            if (results[0].mode !== results[i].mode) {
              return value;
            }
          }
          var self;
          var object;
          if (object = function(values, scope) {
            /** @type {number} */
            var i = 0;
            var j = values.length;
            for (; i < j; i++) {
              var data = values[i];
              if (getValue(scope, data.baseGeometries)) {
                return data.geometry;
              }
            }
            return null;
          }(self = a.multiplePrimitivesCache, value)) {
            if (null !== object.geometry) {
              return [object.geometry];
            }
          } else {
            that = THREE.BufferGeometryUtils.mergeBufferGeometries(value, true);
            if (self.push({
              geometry : that,
              baseGeometries : value
            }), null !== that) {
              return [that];
            }
          }
        }
        return value;
      });
    }, GLTFParser.prototype.loadMesh = function(name) {
      var jQuery = this;
      var json = this.json;
      var extensions = this.extensions;
      var options = json.meshes[name];
      var ret = options.primitives;
      /** @type {!Array} */
      var settingPromises = [];
      /** @type {number} */
      var i = 0;
      var rl = ret.length;
      for (; i < rl; i++) {
        var falseySection = void 0 === ret[i].material ? new THREE.MeshStandardMaterial({
          color : 16777215,
          emissive : 0,
          metalness : 1,
          roughness : 1,
          transparent : false,
          depthTest : true,
          side : THREE.FrontSide
        }) : this.getDependency("material", ret[i].material);
        settingPromises.push(falseySection);
      }
      return Promise.all(settingPromises).then(function(item2) {
        return jQuery.loadGeometries(ret).then(function(items) {
          /** @type {boolean} */
          var useArrays = 1 === items.length && items[0].groups.length > 0;
          /** @type {!Array} */
          var tabs = [];
          /** @type {number} */
          var i = 0;
          var count = items.length;
          for (; i < count; i++) {
            var child;
            var geometry = items[i];
            var a = ret[i];
            var material = useArrays ? item2 : item2[i];
            if (a.mode === EXIT || a.mode === ANCHOR || a.mode === id || void 0 === a.mode) {
              if (true === (child = true === options.isSkinnedMesh ? new THREE.SkinnedMesh(geometry, material) : new THREE.Mesh(geometry, material)).isSkinnedMesh) {
                child.normalizeSkinWeights();
              }
              if (a.mode === ANCHOR) {
                child.drawMode = THREE.TriangleStripDrawMode;
              } else {
                if (a.mode === id) {
                  child.drawMode = THREE.TriangleFanDrawMode;
                }
              }
            } else {
              if (a.mode === name) {
                child = new THREE.LineSegments(geometry, material);
              } else {
                if (a.mode === undefined) {
                  child = new THREE.Line(geometry, material);
                } else {
                  if (a.mode === ENTER) {
                    child = new THREE.LineLoop(geometry, material);
                  } else {
                    if (a.mode !== value) {
                      throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + a.mode);
                    }
                    child = new THREE.Points(geometry, material);
                  }
                }
              }
            }
            if (Object.keys(child.geometry.morphAttributes).length > 0) {
              render(child, options);
            }
            child.name = options.name || "mesh_" + name;
            if (items.length > 1) {
              child.name += "_" + i;
            }
            next(child, options);
            tabs.push(child);
            var materials = useArrays ? child.material : [child.material];
            /** @type {boolean} */
            var canViewMyFiles = void 0 !== geometry.attributes.color;
            /** @type {boolean} */
            var canViewSiteFiles = void 0 === geometry.attributes.normal;
            /** @type {boolean} */
            var canUploadFiles = true === child.isSkinnedMesh;
            /** @type {boolean} */
            var reverseName = Object.keys(geometry.morphAttributes).length > 0;
            /** @type {boolean} */
            var reverseIsSingle = reverseName && void 0 !== geometry.morphAttributes.normal;
            /** @type {number} */
            var index = 0;
            var length = materials.length;
            for (; index < length; index++) {
              material = materials[index];
              if (child.isPoints) {
                /** @type {string} */
                var url = "PointsMaterial:" + material.uuid;
                var result = jQuery.cache.get(url);
                if (!result) {
                  result = new THREE.PointsMaterial;
                  THREE.Material.prototype.copy.call(result, material);
                  result.color.copy(material.color);
                  result.map = material.map;
                  /** @type {boolean} */
                  result.lights = false;
                  jQuery.cache.add(url, result);
                }
                material = result;
              } else {
                if (child.isLine) {
                  /** @type {string} */
                  url = "LineBasicMaterial:" + material.uuid;
                  var source = jQuery.cache.get(url);
                  if (!source) {
                    source = new THREE.LineBasicMaterial;
                    THREE.Material.prototype.copy.call(source, material);
                    source.color.copy(material.color);
                    /** @type {boolean} */
                    source.lights = false;
                    jQuery.cache.add(url, source);
                  }
                  material = source;
                }
              }
              if (canViewMyFiles || canViewSiteFiles || canUploadFiles || reverseName) {
                /** @type {string} */
                url = "ClonedMaterial:" + material.uuid + ":";
                if (material.isGLTFSpecularGlossinessMaterial) {
                  /** @type {string} */
                  url = url + "specular-glossiness:";
                }
                if (canUploadFiles) {
                  /** @type {string} */
                  url = url + "skinning:";
                }
                if (canViewMyFiles) {
                  /** @type {string} */
                  url = url + "vertex-colors:";
                }
                if (canViewSiteFiles) {
                  /** @type {string} */
                  url = url + "flat-shading:";
                }
                if (reverseName) {
                  /** @type {string} */
                  url = url + "morph-targets:";
                }
                if (reverseIsSingle) {
                  /** @type {string} */
                  url = url + "morph-normals:";
                }
                var source = jQuery.cache.get(url);
                if (!source) {
                  source = material.isGLTFSpecularGlossinessMaterial ? extensions[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].cloneMaterial(material) : material.clone();
                  if (canUploadFiles) {
                    /** @type {boolean} */
                    source.skinning = true;
                  }
                  if (canViewMyFiles) {
                    source.vertexColors = THREE.VertexColors;
                  }
                  if (canViewSiteFiles) {
                    /** @type {boolean} */
                    source.flatShading = true;
                  }
                  if (reverseName) {
                    /** @type {boolean} */
                    source.morphTargets = true;
                  }
                  if (reverseIsSingle) {
                    /** @type {boolean} */
                    source.morphNormals = true;
                  }
                  jQuery.cache.add(url, source);
                }
                material = source;
              }
              materials[index] = material;
              if (material.aoMap && void 0 === geometry.attributes.uv2 && void 0 !== geometry.attributes.uv) {
                console.log("THREE.GLTFLoader: Duplicating UVs to support aoMap.");
                geometry.setAttribute("uv2", new THREE.BufferAttribute(geometry.attributes.uv.array, 2));
              }
              if (material.isGLTFSpecularGlossinessMaterial) {
                child.onBeforeRender = extensions[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].refreshUniforms;
              }
            }
            child.material = useArrays ? materials : materials[0];
          }
          if (1 === tabs.length) {
            return tabs[0];
          }
          var tabView = new THREE.Group;
          /** @type {number} */
          i = 0;
          /** @type {number} */
          count = tabs.length;
          for (; i < count; i++) {
            tabView.add(tabs[i]);
          }
          return tabView;
        });
      });
    }, GLTFParser.prototype.loadCamera = function(name) {
      var t;
      var r = this.json.cameras[name];
      var c = r[r.type];
      if (c) {
        return "perspective" === r.type ? t = new THREE.PerspectiveCamera(THREE.Math.radToDeg(c.yfov), c.aspectRatio || 1, c.znear || 1, c.zfar || 2E6) : "orthographic" === r.type && (t = new THREE.OrthographicCamera(c.xmag / -2, c.xmag / 2, c.ymag / 2, c.ymag / -2, c.znear, c.zfar)), void 0 !== r.name && (t.name = r.name), next(t, r), Promise.resolve(t);
      }
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
    }, GLTFParser.prototype.loadSkin = function(i) {
      var skin = this.json.skins[i];
      var imageData = {
        joints : skin.joints
      };
      return void 0 === skin.inverseBindMatrices ? Promise.resolve(imageData) : this.getDependency("accessor", skin.inverseBindMatrices).then(function(data) {
        return imageData.inverseBindMatrices = data, imageData;
      });
    }, GLTFParser.prototype.loadAnimation = function(name) {
      var animation = this.json.animations[name];
      /** @type {!Array} */
      var result = [];
      /** @type {!Array} */
      var promises = [];
      /** @type {!Array} */
      var rv = [];
      /** @type {!Array} */
      var pingPromises = [];
      /** @type {!Array} */
      var s = [];
      /** @type {number} */
      var channelId = 0;
      var waveNumChannels = animation.channels.length;
      for (; channelId < waveNumChannels; channelId++) {
        var channel = animation.channels[channelId];
        var sampler = animation.samplers[channel.sampler];
        var id = channel.target;
        var memberType = void 0 !== id.node ? id.node : id.id;
        var type = void 0 !== animation.parameters ? animation.parameters[sampler.input] : sampler.input;
        var i = void 0 !== animation.parameters ? animation.parameters[sampler.output] : sampler.output;
        result.push(this.getDependency("node", memberType));
        promises.push(this.getDependency("accessor", type));
        rv.push(this.getDependency("accessor", i));
        pingPromises.push(sampler);
        s.push(id);
      }
      return Promise.all([Promise.all(result), Promise.all(promises), Promise.all(rv), Promise.all(pingPromises), Promise.all(s)]).then(function(n) {
        var c = n[0];
        var r = n[1];
        var index = n[2];
        var vv = n[3];
        var step = n[4];
        /** @type {!Array} */
        var tracks = [];
        /** @type {number} */
        var i = 0;
        var cl = c.length;
        for (; i < cl; i++) {
          var node = c[i];
          var item = r[i];
          var entry = index[i];
          var sampler = vv[i];
          var target = step[i];
          if (void 0 !== node) {
            var MeshRenderRegion;
            switch(node.updateMatrix(), node.matrixAutoUpdate = true, PATH_PROPERTIES[target.path]) {
              case PATH_PROPERTIES.weights:
                MeshRenderRegion = THREE.NumberKeyframeTrack;
                break;
              case PATH_PROPERTIES.rotation:
                MeshRenderRegion = THREE.QuaternionKeyframeTrack;
                break;
              case PATH_PROPERTIES.position:
              case PATH_PROPERTIES.scale:
              default:
                MeshRenderRegion = THREE.VectorKeyframeTrack;
            }
            var formattedUpdate = node.name ? node.name : node.uuid;
            var cur_start_pt_index = void 0 !== sampler.interpolation ? INTERPOLATION[sampler.interpolation] : THREE.InterpolateLinear;
            /** @type {!Array} */
            var patches = [];
            if (PATH_PROPERTIES[target.path] === PATH_PROPERTIES.weights) {
              node.traverse(function(disconnectedDevice) {
                if (true === disconnectedDevice.isMesh && disconnectedDevice.morphTargetInfluences) {
                  patches.push(disconnectedDevice.name ? disconnectedDevice.name : disconnectedDevice.uuid);
                }
              });
            } else {
              patches.push(formattedUpdate);
            }
            /** @type {number} */
            var i = 0;
            /** @type {number} */
            var patchLen = patches.length;
            for (; i < patchLen; i++) {
              var new_region = new MeshRenderRegion(patches[i] + "." + PATH_PROPERTIES[target.path], THREE.AnimationUtils.arraySlice(item.array, 0), THREE.AnimationUtils.arraySlice(entry.array, 0), cur_start_pt_index);
              if ("CUBICSPLINE" === sampler.interpolation) {
                /**
                 * @param {number} events
                 * @return {?}
                 */
                new_region.createInterpolant = function(events) {
                  return new State(this.times, this.values, this.getValueSize() / 3, events);
                };
                /** @type {boolean} */
                new_region.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
              }
              tracks.push(new_region);
            }
          }
        }
        var clipName = void 0 !== animation.name ? animation.name : "animation_" + name;
        return new THREE.AnimationClip(clipName, void 0, tracks);
      });
    }, GLTFParser.prototype.loadNode = function(path) {
      var json = this.json;
      var _this = this.extensions;
      var editor = this;
      var codes = json.meshReferences;
      var meshes = json.meshUses;
      var data = json.nodes[path];
      return (true === data.isBone ? Promise.resolve(new THREE.Bone) : void 0 !== data.mesh ? editor.getDependency("mesh", data.mesh).then(function(object) {
        var result;
        if (codes[data.mesh] > 1) {
          /** @type {number} */
          var format = meshes[data.mesh]++;
          (result = object.clone()).name += "_instance_" + format;
          result.onBeforeRender = object.onBeforeRender;
          /** @type {number} */
          var i = 0;
          var patchLen = result.children.length;
          for (; i < patchLen; i++) {
            result.children[i].name += "_instance_" + format;
            result.children[i].onBeforeRender = object.children[i].onBeforeRender;
          }
        } else {
          /** @type {!Object} */
          result = object;
        }
        return result;
      }) : void 0 !== data.camera ? editor.getDependency("camera", data.camera) : data.extensions && data.extensions[EXTENSIONS.KHR_LIGHTS_PUNCTUAL] && void 0 !== data.extensions[EXTENSIONS.KHR_LIGHTS_PUNCTUAL].light ? editor.getDependency("light", data.extensions[EXTENSIONS.KHR_LIGHTS_PUNCTUAL].light) : Promise.resolve(new THREE.Object3D)).then(function(node) {
        if (void 0 !== data.name && (node.name = THREE.PropertyBinding.sanitizeNodeName(data.name)), next(node, data), data.extensions && callback(_this, node, data), void 0 !== data.matrix) {
          var matrix = new THREE.Matrix4;
          matrix.fromArray(data.matrix);
          node.applyMatrix(matrix);
        } else {
          if (void 0 !== data.translation) {
            node.position.fromArray(data.translation);
          }
          if (void 0 !== data.rotation) {
            node.quaternion.fromArray(data.rotation);
          }
          if (void 0 !== data.scale) {
            node.scale.fromArray(data.scale);
          }
        }
        return node;
      });
    }, GLTFParser.prototype.loadScene = function() {
      /**
       * @param {string} type
       * @param {!Object} state
       * @param {!Node} data
       * @param {?} callback
       * @return {?}
       */
      function init(type, state, data, callback) {
        var node = data.nodes[type];
        return callback.getDependency("node", type).then(function(des) {
          return void 0 === node.skin ? des : callback.getDependency("skin", node.skin).then(function($Imagesmain) {
            /** @type {!Array} */
            var defs = [];
            /** @type {number} */
            var i = 0;
            var patchLen = (skin = $Imagesmain).joints.length;
            for (; i < patchLen; i++) {
              defs.push(callback.getDependency("node", skin.joints[i]));
            }
            return Promise.all(defs);
          }).then(function(xmlNodes) {
            var fld = true === des.isGroup ? des.children : [des];
            /** @type {number} */
            var fp = 0;
            var len = fld.length;
            for (; fp < len; fp++) {
              var threeMesh = fld[fp];
              /** @type {!Array} */
              var bones = [];
              /** @type {!Array} */
              var boneInverses = [];
              /** @type {number} */
              var i = 0;
              var l = xmlNodes.length;
              for (; i < l; i++) {
                var node = xmlNodes[i];
                if (node) {
                  bones.push(node);
                  var vertex = new THREE.Matrix4;
                  if (void 0 !== skin.inverseBindMatrices) {
                    vertex.fromArray(skin.inverseBindMatrices.array, 16 * i);
                  }
                  boneInverses.push(vertex);
                } else {
                  console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', skin.joints[i]);
                }
              }
              threeMesh.bind(new THREE.Skeleton(bones, boneInverses), threeMesh.matrixWorld);
            }
            return des;
          });
          var skin;
        }).then(function(doc) {
          state.add(doc);
          /** @type {!Array} */
          var self = [];
          if (node.children) {
            var s = node.children;
            /** @type {number} */
            var f = 0;
            var g = s.length;
            for (; f < g; f++) {
              var c = s[f];
              self.push(init(c, doc, data, callback));
            }
          }
          return Promise.all(self);
        });
      }
      return function(id) {
        var data = this.json;
        var ext = this.extensions;
        var json = this.json.scenes[id];
        var doc = new THREE.Scene;
        if (void 0 !== json.name) {
          doc.name = json.name;
        }
        next(doc, json);
        if (json.extensions) {
          callback(ext, doc, json);
        }
        var cells = json.nodes || [];
        /** @type {!Array} */
        var self = [];
        /** @type {number} */
        var i = 0;
        var ncells = cells.length;
        for (; i < ncells; i++) {
          self.push(init(cells[i], doc, data, this));
        }
        return Promise.all(self).then(function() {
          return doc;
        });
      };
    }(), GLTFLoader;
  }();
}, function(isSlidingUp, canCreateDiscussions, n) {
  /**
   * @param {!Object} res
   * @param {undefined} user
   * @param {string} options
   * @return {?}
   */
  canCreateDiscussions.createQuickLoadFunc = function(res, user, options) {
    return function(stats, scriptSrc, commandManager) {
      return res.load(user ? stats.replace(user, options) : stats, scriptSrc, function(event) {
        if (event.lengthComputable) {
          commandManager.dispatch(event.loaded / event.total);
        }
      }, function(animate_param) {
        console.log(animate_param);
      });
    };
  };
}, function(module, canCreateDiscussions, new_val_func) {
  /**
   * @param {!Object} n
   * @param {!Object} prop
   * @return {?}
   */
  function f(n, prop) {
    var e;
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var length = arguments.length;
    for (; ++i < length;) {
      if (e = arguments[i]) {
        h(e, d, n);
      }
    }
    return n;
  }
  /**
   * @param {undefined} m
   * @param {?} key
   * @return {undefined}
   */
  function d(m, key) {
    var n = this[key];
    if (isNaN(m) && isNaN(n)) {
      f(n, m);
    } else {
      this[key] = m;
    }
  }
  var h = new_val_func(23);
  var isNaN = new_val_func(31);
  /** @type {function(!Object, !Object): ?} */
  module.exports = f;
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "uniform float u_lightScatterDivider;\nuniform float u_lightScatterPowInv;\n\nfloat getScatter(vec3 start, vec3 dir, vec3 lightPos, float d) {\n  // light to ray origin\n  vec3 q = start - lightPos;\n\n  // coefficients\n  float b = dot(dir, q);\n  float c = dot(q, q);\n\n  // evaluate integral\n  // float s = 1.0 / sqrt(c - b*b);\n  float t = c - b*b;\n  // float s = t <= 0.0 ? 1.0 : 1.0 / sqrt(t);\n  float s = 1.0 / sqrt(max(0.0001, t));\n  float l = s * (atan( (d + b) * s) - atan( b*s ));\n\n  return pow(max(0.0, l / u_lightScatterDivider), u_lightScatterPowInv);\n}\n\n\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "#include <getScatter>\n\n// this function is not entirely safe as it removed some sceneriaos for performance issue.\nvec2 getScatterLine(vec3 start, vec3 dir, vec3 lightPos0, vec3 lightPos1, float d) {\n\n    // from http://www.geometrictools.com/GTEngine/Include/Mathematics/GteDistRaySegment.h\n    // It returns the min distance between the ray and the segment\n    // defined by lightPos0 and lightPos1\n    // It can also set two optional targets :\n    // - The closest point on the ray\n    // - The closest point on the segment\n\n    vec3 segCenter = (lightPos0 + lightPos1) * 0.5;\n    vec3 segDir = normalize(lightPos1 - lightPos0);\n    vec3 diff = start - segCenter;\n\n    float segExtent = distance(lightPos0, lightPos1) * 0.5;\n    float a01 = -dot(dir, segDir);\n    float b0 = dot(diff, dir);\n    float b1 = - dot(diff, segDir);\n    float det = abs( 1.0 - a01 * a01 );\n    float s = clamp((a01 * b0 - b1) / max(0.0001, det), - segExtent, segExtent);\n    vec3 lightPos = segDir * s + segCenter;\n\n    return vec2(\n        getScatter(start, dir, segExtent > 0.0 ? lightPos : lightPos0, d),\n        s / segExtent * 0.5 + 0.5\n    );\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "vec4 cubic(float v){\n    vec4 n = vec4(1.0, 2.0, 3.0, 4.0) - v;\n    vec4 s = n * n * n;\n    float x = s.x;\n    float y = s.y - 4.0 * s.x;\n    float z = s.z - 4.0 * s.y + 6.0 * s.x;\n    float w = 6.0 - x - y - z;\n    return vec4(x, y, z, w) * (1.0/6.0);\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "vec4 textureBicubic(sampler2D tex, vec2 texCoords, vec2 texSize) {\n   vec2 invTexSize = 1.0 / texSize;\n   texCoords = texCoords * texSize - 0.5;\n    vec2 fxy = fract(texCoords);\n    texCoords -= fxy;\n    vec4 xcubic = cubic(fxy.x);\n    vec4 ycubic = cubic(fxy.y);\n    vec4 c = texCoords.xxyy + vec2 (-0.5, +1.5).xyxy;\n    vec4 s = vec4(xcubic.xz + xcubic.yw, ycubic.xz + ycubic.yw);\n    vec4 offset = c + vec4 (xcubic.yw, ycubic.yw) / s;\n    offset *= invTexSize.xxyy;\n    vec4 sample0 = texture2D(tex, offset.xz);\n    vec4 sample1 = texture2D(tex, offset.yz);\n    vec4 sample2 = texture2D(tex, offset.xw);\n    vec4 sample3 = texture2D(tex, offset.yw);\n    float sx = s.x / (s.x + s.y);\n    float sy = s.z / (s.z + s.w);\n    return mix(mix(sample3, sample2, sx), mix(sample1, sample0, sx), sy);\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "vec4 textureLodBicubic(sampler2D tex, vec2 texCoords, float lod, vec2 texSize) {\n   texSize = texSize / pow(2.0, lod);\n   vec2 invTexSize = 1.0 / texSize;\n   texCoords = texCoords * texSize - 0.5;\n    vec2 fxy = fract(texCoords);\n    texCoords -= fxy;\n    vec4 xcubic = cubic(fxy.x);\n    vec4 ycubic = cubic(fxy.y);\n    vec4 c = texCoords.xxyy + vec2 (-0.5, +1.5).xyxy;\n    vec4 s = vec4(xcubic.xz + xcubic.yw, ycubic.xz + ycubic.yw);\n    vec4 offset = c + vec4 (xcubic.yw, ycubic.yw) / s;\n    offset *= invTexSize.xxyy;\n    vec4 sample0 = texture2DLodEXT(tex, offset.xz, lod);\n    vec4 sample1 = texture2DLodEXT(tex, offset.yz, lod);\n    vec4 sample2 = texture2DLodEXT(tex, offset.xw, lod);\n    vec4 sample3 = texture2DLodEXT(tex, offset.yw, lod);\n    float sx = s.x / (s.x + s.y);\n    float sy = s.z / (s.z + s.w);\n    return mix(mix(sample3, sample2, sx), mix(sample1, sample0, sx), sy);\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "//\n// Description : Array and textureless GLSL 2D simplex noise function.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute(vec3 x) {\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat snoise2(vec2 v)\n  {\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n// First corner\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n\n// Other corners\n  vec2 i1;\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n  //i1.y = 1.0 - i1.x;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\n  // x1 = x0 - i1 + 1.0 * C.xx ;\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n\n// Permutations\n  i = mod289(i); // Avoid truncation effects in permutation\n  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n    + i.x + vec3(0.0, i1.x, 1.0 ));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n\n// Gradients: 41 points uniformly over a line, mapped onto a diamond.\n// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n\n// Normalise gradients implicitly by scaling m\n// Approximation of: m *= inversesqrt( a0*a0 + h*h );\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n// Compute final noise value at P\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise3(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0; }\n\nfloat mod289(float x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0; }\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat permute(float x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat taylorInvSqrt(float r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec4 grad4(float j, vec4 ip)\n  {\n  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\n  vec4 p,s;\n\n  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\n  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\n  s = vec4(lessThan(p, vec4(0.0)));\n  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;\n\n  return p;\n  }\n\n// (sqrt(5) - 1)/4 = F4, used once below\n#define F4 0.309016994374947451\n\nfloat snoise4(vec4 v)\n  {\n  const vec4  C = vec4( 0.138196601125011,  // (5 - sqrt(5))/20  G4\n                        0.276393202250021,  // 2 * G4\n                        0.414589803375032,  // 3 * G4\n                       -0.447213595499958); // -1 + 4 * G4\n\n// First corner\n  vec4 i  = floor(v + dot(v, vec4(F4)) );\n  vec4 x0 = v -   i + dot(i, C.xxxx);\n\n// Other corners\n\n// Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)\n  vec4 i0;\n  vec3 isX = step( x0.yzw, x0.xxx );\n  vec3 isYZ = step( x0.zww, x0.yyz );\n//  i0.x = dot( isX, vec3( 1.0 ) );\n  i0.x = isX.x + isX.y + isX.z;\n  i0.yzw = 1.0 - isX;\n//  i0.y += dot( isYZ.xy, vec2( 1.0 ) );\n  i0.y += isYZ.x + isYZ.y;\n  i0.zw += 1.0 - isYZ.xy;\n  i0.z += isYZ.z;\n  i0.w += 1.0 - isYZ.z;\n\n  // i0 now contains the unique values 0,1,2,3 in each channel\n  vec4 i3 = clamp( i0, 0.0, 1.0 );\n  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\n  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\n\n  //  x0 = x0 - 0.0 + 0.0 * C.xxxx\n  //  x1 = x0 - i1  + 1.0 * C.xxxx\n  //  x2 = x0 - i2  + 2.0 * C.xxxx\n  //  x3 = x0 - i3  + 3.0 * C.xxxx\n  //  x4 = x0 - 1.0 + 4.0 * C.xxxx\n  vec4 x1 = x0 - i1 + C.xxxx;\n  vec4 x2 = x0 - i2 + C.yyyy;\n  vec4 x3 = x0 - i3 + C.zzzz;\n  vec4 x4 = x0 + C.wwww;\n\n// Permutations\n  i = mod289(i);\n  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\n  vec4 j1 = permute( permute( permute( permute (\n             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\n           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\n           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\n           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\n\n// Gradients: 7x7x6 points over a cube, mapped onto a 4-cross polytope\n// 7*7*6 = 294, which is close to the ring size 17*17 = 289.\n  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\n\n  vec4 p0 = grad4(j0,   ip);\n  vec4 p1 = grad4(j1.x, ip);\n  vec4 p2 = grad4(j1.y, ip);\n  vec4 p3 = grad4(j1.z, ip);\n  vec4 p4 = grad4(j1.w, ip);\n\n// Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n  p4 *= taylorInvSqrt(dot(p4,p4));\n\n// Mix contributions from the five corners\n  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);\n  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);\n  m0 = m0 * m0;\n  m1 = m1 * m1;\n  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))\n               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;\n\n  }";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "vec2 rotate2d(vec2 v, float a) {\n\tfloat s = sin(a);\n\tfloat c = cos(a);\n\treturn mat2(c, -s, s, c) * v;\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "#include <simplexNoiseDerivatives4>\n\nvec3 curl( in vec3 p, in float noiseTime, in float persistence ) {\n\n    vec3 p1 = p + vec3(123.4, 129845.6, -1239.1);\n\n    vec4 xNoisePotentialDerivatives = simplexNoiseDerivatives4(vec4(p, noiseTime));\n    vec4 yNoisePotentialDerivatives = simplexNoiseDerivatives4(vec4(p1, noiseTime));\n\n    return vec3(\n        yNoisePotentialDerivatives[1] - xNoisePotentialDerivatives[1],\n        yNoisePotentialDerivatives[2] - xNoisePotentialDerivatives[2],\n        yNoisePotentialDerivatives[0] - xNoisePotentialDerivatives[0]\n    );\n\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "#include <simplexNoiseDerivatives4>\n\nvec3 curl( in vec3 p, in float noiseTime, in float persistence ) {\n\n    vec4 xNoisePotentialDerivatives = vec4(0.0);\n    vec4 yNoisePotentialDerivatives = vec4(0.0);\n    vec4 zNoisePotentialDerivatives = vec4(0.0);\n\n    for (int i = 0; i < 2; ++i) {\n\n        float twoPowI = pow(2.0, float(i));\n        float scale = 0.5 * twoPowI * pow(max(0.0, persistence), float(i));\n\n        xNoisePotentialDerivatives += simplexNoiseDerivatives4(vec4(p * twoPowI, noiseTime)) * scale;\n        yNoisePotentialDerivatives += simplexNoiseDerivatives4(vec4((p + vec3(123.4, 129845.6, -1239.1)) * twoPowI, noiseTime)) * scale;\n        zNoisePotentialDerivatives += simplexNoiseDerivatives4(vec4((p + vec3(-9519.0, 9051.0, -123.0)) * twoPowI, noiseTime)) * scale;\n    }\n\n    return vec3(\n        zNoisePotentialDerivatives[1] - yNoisePotentialDerivatives[2],\n        xNoisePotentialDerivatives[2] - zNoisePotentialDerivatives[0],\n        yNoisePotentialDerivatives[0] - xNoisePotentialDerivatives[1]\n    );\n\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "vec4 mod289(vec4 x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nfloat mod289(float x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat permute(float x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r) {\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat taylorInvSqrt(float r) {\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec4 grad4(float j, vec4 ip) {\n    const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\n    vec4 p,s;\n\n    p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\n    p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\n    s = vec4(lessThan(p, vec4(0.0)));\n    p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;\n\n    return p;\n}\n\n#define F4 0.309016994374947451\n\nvec4 simplexNoiseDerivatives4 (vec4 v) {\n    const vec4  C = vec4( 0.138196601125011,0.276393202250021,0.414589803375032,-0.447213595499958);\n\n    vec4 i  = floor(v + dot(v, vec4(F4)) );\n    vec4 x0 = v -   i + dot(i, C.xxxx);\n\n    vec4 i0;\n    vec3 isX = step( x0.yzw, x0.xxx );\n    vec3 isYZ = step( x0.zww, x0.yyz );\n    i0.x = isX.x + isX.y + isX.z;\n    i0.yzw = 1.0 - isX;\n    i0.y += isYZ.x + isYZ.y;\n    i0.zw += 1.0 - isYZ.xy;\n    i0.z += isYZ.z;\n    i0.w += 1.0 - isYZ.z;\n\n    vec4 i3 = clamp( i0, 0.0, 1.0 );\n    vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\n    vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\n\n    vec4 x1 = x0 - i1 + C.xxxx;\n    vec4 x2 = x0 - i2 + C.yyyy;\n    vec4 x3 = x0 - i3 + C.zzzz;\n    vec4 x4 = x0 + C.wwww;\n\n    i = mod289(i);\n    float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\n    vec4 j1 = permute( permute( permute( permute (\n             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\n           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\n           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\n           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\n\n\n    vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\n\n    vec4 p0 = grad4(j0,   ip);\n    vec4 p1 = grad4(j1.x, ip);\n    vec4 p2 = grad4(j1.y, ip);\n    vec4 p3 = grad4(j1.z, ip);\n    vec4 p4 = grad4(j1.w, ip);\n\n    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n    p4 *= taylorInvSqrt(dot(p4,p4));\n\n    vec3 values0 = vec3(dot(p0, x0), dot(p1, x1), dot(p2, x2)); //value of contributions from each corner at point\n    vec2 values1 = vec2(dot(p3, x3), dot(p4, x4));\n\n    vec3 m0 = max(0.5 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0); //(0.5 - x^2) where x is the distance\n    vec2 m1 = max(0.5 - vec2(dot(x3,x3), dot(x4,x4)), 0.0);\n\n    vec3 temp0 = -6.0 * m0 * m0 * values0;\n    vec2 temp1 = -6.0 * m1 * m1 * values1;\n\n    vec3 mmm0 = m0 * m0 * m0;\n    vec2 mmm1 = m1 * m1 * m1;\n\n    float dx = temp0[0] * x0.x + temp0[1] * x1.x + temp0[2] * x2.x + temp1[0] * x3.x + temp1[1] * x4.x + mmm0[0] * p0.x + mmm0[1] * p1.x + mmm0[2] * p2.x + mmm1[0] * p3.x + mmm1[1] * p4.x;\n    float dy = temp0[0] * x0.y + temp0[1] * x1.y + temp0[2] * x2.y + temp1[0] * x3.y + temp1[1] * x4.y + mmm0[0] * p0.y + mmm0[1] * p1.y + mmm0[2] * p2.y + mmm1[0] * p3.y + mmm1[1] * p4.y;\n    float dz = temp0[0] * x0.z + temp0[1] * x1.z + temp0[2] * x2.z + temp1[0] * x3.z + temp1[1] * x4.z + mmm0[0] * p0.z + mmm0[1] * p1.z + mmm0[2] * p2.z + mmm1[0] * p3.z + mmm1[1] * p4.z;\n    float dw = temp0[0] * x0.w + temp0[1] * x1.w + temp0[2] * x2.w + temp1[0] * x3.w + temp1[1] * x4.w + mmm0[0] * p0.w + mmm0[1] * p1.w + mmm0[2] * p2.w + mmm1[0] * p3.w + mmm1[1] * p4.w;\n\n    return vec4(dx, dy, dz, dw) * 49.0;\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "// vec2 encodeNormal (vec3 n) {\n//     float scale = 1.7777;\n//     vec2 enc = n.xy / (n.z+1.0);\n//     enc /= scale;\n//     enc = enc*0.5+0.5;\n//     return enc;\n// }\n\nvec2 encodeNormal (vec3 n) {\n    float p = sqrt(n.z * 8.0 + 8.0);\n    return n.xy / p + 0.5;\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "vec3 decodeNormal (vec2 enc) {\n  vec2 fenc = enc * 4.0 - 2.0;\n  float f = dot(fenc, fenc);\n  // if g is zero, it will be an issue\n  // float g = max(0.001, sqrt( max(1.0 - f, 0.0) * 0.25));\n  // vec3 n;\n  // n.xy = fenc*g;\n  // n.z = 1.0 - f*0.5;\n  // return n;\n\n  // seems to be okay if g is 1.0;\n  return vec3(fenc, 1.0 - f * 0.5);\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "vec2 packFloatRG(float v) {\n    vec2 enc = vec2(1.0, 255.0) * v;\n    enc = fract (enc);\n    enc.x -= enc.y / 255.0;\n    return enc;\n}\n\nvec2 packHalfFloat (float v, float divider) {\n    return packFloatRG(v / divider + 0.5);\n}\n\nvec2 packUnsignedHalfFloat (float v, float divider) {\n    return packFloatRG(v / divider);\n}\n\nfloat unpackRGFloat(vec2 enc) {\n    return dot( enc, vec2(1.0, 1.0/255.0) );\n}\n\nfloat unpackHalfFloat (vec2 enc, float divider) {\n    return (unpackRGFloat(enc) - 0.5) * divider;\n}\n\nfloat unpackUnsignedHalfFloat (vec2 enc, float divider) {\n    return unpackRGFloat(enc) * divider;\n}\n\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "float samplePackedR (sampler2D tex0, vec2 uv, float divider) {\n\tvec4 c0 = texture2D(tex0, uv);\n\treturn unpackHalfFloat(c0.xy, divider);\n}\n\nfloat samplePackedUnsignedR (sampler2D tex0, vec2 uv, float divider) {\n\tvec4 c0 = texture2D(tex0, uv);\n\treturn unpackUnsignedHalfFloat(c0.xy, divider);\n}\n\nvec2 samplePackedRG (sampler2D tex0, vec2 uv, vec2 divider) {\n\tvec4 c0 = texture2D(tex0, uv);\n\treturn vec2(\n\t\tunpackHalfFloat(c0.xy, divider.x),\n\t\tunpackHalfFloat(c0.zw, divider.y)\n\t);\n}\n\nvec2 samplePackedUnsignedRG (sampler2D tex0, vec2 uv, vec2 divider) {\n\tvec4 c0 = texture2D(tex0, uv);\n\treturn vec2(\n\t\tunpackUnsignedHalfFloat(c0.xy, divider.x),\n\t\tunpackUnsignedHalfFloat(c0.zw, divider.y)\n\t);\n}\n\nvec3 samplePackedRGB (sampler2D tex0, sampler2D tex1, vec2 uv, vec3 divider) {\n\tvec4 c0 = texture2D(tex0, uv);\n\tvec4 c1 = texture2D(tex1, uv);\n\treturn vec3(\n\t\tunpackHalfFloat(c0.xy, divider.x),\n\t\tunpackHalfFloat(c0.zw, divider.y),\n\t\tunpackHalfFloat(c1.xy, divider.z)\n\t);\n}\n\nvec3 samplePackedUnsignedRGB (sampler2D tex0, sampler2D tex1, vec2 uv, vec3 divider) {\n\tvec4 c0 = texture2D(tex0, uv);\n\tvec4 c1 = texture2D(tex1, uv);\n\treturn vec3(\n\t\tunpackUnsignedHalfFloat(c0.xy, divider.x),\n\t\tunpackUnsignedHalfFloat(c0.zw, divider.y),\n\t\tunpackUnsignedHalfFloat(c1.xy, divider.z)\n\t);\n}\n\nvec4 samplePackedRGBA (sampler2D tex0, sampler2D tex1, vec2 uv, vec4 divider) {\n\tvec4 c0 = texture2D(tex0, uv);\n\tvec4 c1 = texture2D(tex1, uv);\n\treturn vec4(\n\t\tunpackHalfFloat(c0.xy, divider.x),\n\t\tunpackHalfFloat(c0.zw, divider.y),\n\t\tunpackHalfFloat(c1.xy, divider.z),\n\t\tunpackHalfFloat(c1.zw, divider.w)\n\t);\n}\n\nvec4 samplePackedUnsignedRGBA (sampler2D tex0, sampler2D tex1, vec2 uv, vec4 divider) {\n\tvec4 c0 = texture2D(tex0, uv);\n\tvec4 c1 = texture2D(tex1, uv);\n\treturn vec4(\n\t\tunpackUnsignedHalfFloat(c0.xy, divider.x),\n\t\tunpackUnsignedHalfFloat(c0.zw, divider.y),\n\t\tunpackUnsignedHalfFloat(c1.xy, divider.z),\n\t\tunpackUnsignedHalfFloat(c1.zw, divider.w)\n\t);\n}";
}, function(module, t, aFunctionName) {
  var result;
  !function() {
    /**
     * @param {!Function} b
     * @return {undefined}
     */
    function c(b) {
      var r;
      r = "function" == typeof b ? b : b ? function() {
        /** @type {number} */
        var c = 0;
        /** @type {number} */
        var e = 0;
        /** @type {number} */
        var n = 0;
        /** @type {number} */
        var i = 1;
        /** @type {function(string): ?} */
        var f = (width = 4022871197, function(e) {
          e = e.toString();
          /** @type {number} */
          var i = 0;
          for (; i < e.length; i++) {
            /** @type {number} */
            var x = .02519603282416938 * (width = width + e.charCodeAt(i));
            /** @type {number} */
            x = x - (width = x >>> 0);
            /** @type {number} */
            width = (x = x * width) >>> 0;
            /** @type {number} */
            width = width + 4294967296 * (x = x - width);
          }
          return 2.3283064365386963E-10 * (width >>> 0);
        });
        var width;
        c = f(" ");
        e = f(" ");
        n = f(" ");
        /** @type {number} */
        var index = 0;
        for (; index < arguments.length; index++) {
          if ((c = c - f(arguments[index])) < 0) {
            c = c + 1;
          }
          if ((e = e - f(arguments[index])) < 0) {
            e = e + 1;
          }
          if ((n = n - f(arguments[index])) < 0) {
            n = n + 1;
          }
        }
        return f = null, function() {
          /** @type {number} */
          var a = 2091639 * c + 2.3283064365386963E-10 * i;
          return c = e, e = n, n = a - (i = 0 | a);
        };
      }(b) : Math.random;
      this.p = cb(r);
      /** @type {!Uint8Array} */
      this.perm = new Uint8Array(512);
      /** @type {!Uint8Array} */
      this.permMod12 = new Uint8Array(512);
      /** @type {number} */
      var property = 0;
      for (; property < 512; property++) {
        this.perm[property] = this.p[255 & property];
        /** @type {number} */
        this.permMod12[property] = this.perm[property] % 12;
      }
    }
    /**
     * @param {!Object} r
     * @return {?}
     */
    function cb(r) {
      var id;
      /** @type {!Uint8Array} */
      var data = new Uint8Array(256);
      /** @type {number} */
      id = 0;
      for (; id < 256; id++) {
        /** @type {number} */
        data[id] = id;
      }
      /** @type {number} */
      id = 0;
      for (; id < 255; id++) {
        /** @type {number} */
        var key = id + ~~(r() * (256 - id));
        /** @type {number} */
        var row = data[id];
        /** @type {number} */
        data[id] = data[key];
        /** @type {number} */
        data[key] = row;
      }
      return data;
    }
    /** @type {number} */
    var byPage = .5 * (Math.sqrt(3) - 1);
    /** @type {number} */
    var px = (3 - Math.sqrt(3)) / 6;
    /** @type {number} */
    var size = 1 / 6;
    /** @type {number} */
    var scaleX = (Math.sqrt(5) - 1) / 4;
    /** @type {number} */
    var padding = (5 - Math.sqrt(5)) / 20;
    c.prototype = {
      grad3 : new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      grad4 : new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]),
      noise2D : function(lower, upper) {
        var x;
        var p;
        var callbackInfo = this.permMod12;
        var s = this.perm;
        var a = this.grad3;
        /** @type {number} */
        var ii = 0;
        /** @type {number} */
        var tbm = 0;
        /** @type {number} */
        var i = 0;
        /** @type {number} */
        var offset = (lower + upper) * byPage;
        /** @type {number} */
        var mask = Math.floor(lower + offset);
        /** @type {number} */
        var maskT = Math.floor(upper + offset);
        /** @type {number} */
        var bit = (mask + maskT) * px;
        /** @type {number} */
        var r = lower - (mask - bit);
        /** @type {number} */
        var l = upper - (maskT - bit);
        if (r > l) {
          /** @type {number} */
          x = 1;
          /** @type {number} */
          p = 0;
        } else {
          /** @type {number} */
          x = 0;
          /** @type {number} */
          p = 1;
        }
        /** @type {number} */
        var e = r - x + px;
        /** @type {number} */
        var d = l - p + px;
        /** @type {number} */
        var scalar = r - 1 + 2 * px;
        /** @type {number} */
        var mag = l - 1 + 2 * px;
        /** @type {number} */
        var result = 255 & mask;
        /** @type {number} */
        var n = 255 & maskT;
        /** @type {number} */
        var value = .5 - r * r - l * l;
        if (value >= 0) {
          /** @type {number} */
          var j = 3 * callbackInfo[result + s[n]];
          /** @type {number} */
          ii = (value = value * value) * value * (a[j] * r + a[j + 1] * l);
        }
        /** @type {number} */
        var y = .5 - e * e - d * d;
        if (y >= 0) {
          /** @type {number} */
          var j = 3 * callbackInfo[result + x + s[n + p]];
          /** @type {number} */
          tbm = (y = y * y) * y * (a[j] * e + a[j + 1] * d);
        }
        /** @type {number} */
        var distance = .5 - scalar * scalar - mag * mag;
        if (distance >= 0) {
          /** @type {number} */
          var j = 3 * callbackInfo[result + 1 + s[n + 1]];
          /** @type {number} */
          i = (distance = distance * distance) * distance * (a[j] * scalar + a[j + 1] * mag);
        }
        return 70 * (ii + tbm + i);
      },
      noise3D : function(z, n, x) {
        var basename;
        var remaining;
        var ext;
        var queryString;
        var direction;
        var lower;
        var v;
        var T;
        var margin;
        var s;
        var DAYS = this.permMod12;
        var m = this.perm;
        var mat = this.grad3;
        /** @type {number} */
        var l = (z + n + x) * (1 / 3);
        /** @type {number} */
        var offset = Math.floor(z + l);
        /** @type {number} */
        var max = Math.floor(n + l);
        /** @type {number} */
        var u = Math.floor(x + l);
        /** @type {number} */
        var width = (offset + max + u) * size;
        /** @type {number} */
        var i = z - (offset - width);
        /** @type {number} */
        var j = n - (max - width);
        /** @type {number} */
        var h = x - (u - width);
        if (i >= j) {
          if (j >= h) {
            /** @type {number} */
            direction = 1;
            /** @type {number} */
            lower = 0;
            /** @type {number} */
            v = 0;
            /** @type {number} */
            T = 1;
            /** @type {number} */
            margin = 1;
            /** @type {number} */
            s = 0;
          } else {
            if (i >= h) {
              /** @type {number} */
              direction = 1;
              /** @type {number} */
              lower = 0;
              /** @type {number} */
              v = 0;
              /** @type {number} */
              T = 1;
              /** @type {number} */
              margin = 0;
              /** @type {number} */
              s = 1;
            } else {
              /** @type {number} */
              direction = 0;
              /** @type {number} */
              lower = 0;
              /** @type {number} */
              v = 1;
              /** @type {number} */
              T = 1;
              /** @type {number} */
              margin = 0;
              /** @type {number} */
              s = 1;
            }
          }
        } else {
          if (j < h) {
            /** @type {number} */
            direction = 0;
            /** @type {number} */
            lower = 0;
            /** @type {number} */
            v = 1;
            /** @type {number} */
            T = 0;
            /** @type {number} */
            margin = 1;
            /** @type {number} */
            s = 1;
          } else {
            if (i < h) {
              /** @type {number} */
              direction = 0;
              /** @type {number} */
              lower = 1;
              /** @type {number} */
              v = 0;
              /** @type {number} */
              T = 0;
              /** @type {number} */
              margin = 1;
              /** @type {number} */
              s = 1;
            } else {
              /** @type {number} */
              direction = 0;
              /** @type {number} */
              lower = 1;
              /** @type {number} */
              v = 0;
              /** @type {number} */
              T = 1;
              /** @type {number} */
              margin = 1;
              /** @type {number} */
              s = 0;
            }
          }
        }
        /** @type {number} */
        var y = i - direction + size;
        /** @type {number} */
        var py = j - lower + size;
        /** @type {number} */
        var bottom = h - v + size;
        /** @type {number} */
        var scalar = i - T + 2 * size;
        /** @type {number} */
        var deltaY = j - margin + 2 * size;
        /** @type {number} */
        var oy = h - s + 2 * size;
        /** @type {number} */
        var v_next_x = i - 1 + .5;
        /** @type {number} */
        var v_next_y = j - 1 + .5;
        /** @type {number} */
        var ox = h - 1 + .5;
        /** @type {number} */
        var w = 255 & offset;
        /** @type {number} */
        var _ = 255 & max;
        /** @type {number} */
        var name = 255 & u;
        /** @type {number} */
        var ys = .6 - i * i - j * j - h * h;
        if (ys < 0) {
          /** @type {number} */
          basename = 0;
        } else {
          /** @type {number} */
          var fVal = 3 * DAYS[w + m[_ + m[name]]];
          /** @type {number} */
          basename = (ys = ys * ys) * ys * (mat[fVal] * i + mat[fVal + 1] * j + mat[fVal + 2] * h);
        }
        /** @type {number} */
        var distance = .6 - y * y - py * py - bottom * bottom;
        if (distance < 0) {
          /** @type {number} */
          remaining = 0;
        } else {
          /** @type {number} */
          var i = 3 * DAYS[w + direction + m[_ + lower + m[name + v]]];
          /** @type {number} */
          remaining = (distance = distance * distance) * distance * (mat[i] * y + mat[i + 1] * py + mat[i + 2] * bottom);
        }
        /** @type {number} */
        var k = .6 - scalar * scalar - deltaY * deltaY - oy * oy;
        if (k < 0) {
          /** @type {number} */
          ext = 0;
        } else {
          /** @type {number} */
          var i = 3 * DAYS[w + T + m[_ + margin + m[name + s]]];
          /** @type {number} */
          ext = (k = k * k) * k * (mat[i] * scalar + mat[i + 1] * deltaY + mat[i + 2] * oy);
        }
        /** @type {number} */
        var p = .6 - v_next_x * v_next_x - v_next_y * v_next_y - ox * ox;
        if (p < 0) {
          /** @type {number} */
          queryString = 0;
        } else {
          /** @type {number} */
          var i = 3 * DAYS[w + 1 + m[_ + 1 + m[name + 1]]];
          /** @type {number} */
          queryString = (p = p * p) * p * (mat[i] * v_next_x + mat[i + 1] * v_next_y + mat[i + 2] * ox);
        }
        return 32 * (basename + remaining + ext + queryString);
      },
      noise4D : function(y, z, n, i) {
        var r;
        var g;
        var b;
        var c;
        var spike;
        var millis;
        var repeat;
        var siteName;
        var faceid;
        var seconds;
        var boff;
        var middlePathName;
        var descriptionIdToTry;
        var minutes;
        var s;
        var tmpSlug;
        var abilityCmdid;
        var S = this.perm;
        var m = this.grad4;
        /** @type {number} */
        var a = (y + z + n + i) * scaleX;
        /** @type {number} */
        var h = Math.floor(y + a);
        /** @type {number} */
        var dx = Math.floor(z + a);
        /** @type {number} */
        var val = Math.floor(n + a);
        /** @type {number} */
        var end = Math.floor(i + a);
        /** @type {number} */
        var delta = (h + dx + val + end) * padding;
        /** @type {number} */
        var offset = y - (h - delta);
        /** @type {number} */
        var l = z - (dx - delta);
        /** @type {number} */
        var max = n - (val - delta);
        /** @type {number} */
        var len = i - (end - delta);
        /** @type {number} */
        var E = 0;
        /** @type {number} */
        var ry = 0;
        /** @type {number} */
        var O = 0;
        /** @type {number} */
        var U = 0;
        if (offset > l) {
          E++;
        } else {
          ry++;
        }
        if (offset > max) {
          E++;
        } else {
          O++;
        }
        if (offset > len) {
          E++;
        } else {
          U++;
        }
        if (l > max) {
          ry++;
        } else {
          O++;
        }
        if (l > len) {
          ry++;
        } else {
          U++;
        }
        if (max > len) {
          O++;
        } else {
          U++;
        }
        /** @type {number} */
        var w = offset - (millis = E >= 3 ? 1 : 0) + padding;
        /** @type {number} */
        var v = l - (repeat = ry >= 3 ? 1 : 0) + padding;
        /** @type {number} */
        var x = max - (siteName = O >= 3 ? 1 : 0) + padding;
        /** @type {number} */
        var dy = len - (faceid = U >= 3 ? 1 : 0) + padding;
        /** @type {number} */
        var e = offset - (seconds = E >= 2 ? 1 : 0) + 2 * padding;
        /** @type {number} */
        var d = l - (boff = ry >= 2 ? 1 : 0) + 2 * padding;
        /** @type {number} */
        var dz = max - (middlePathName = O >= 2 ? 1 : 0) + 2 * padding;
        /** @type {number} */
        var sy = len - (descriptionIdToTry = U >= 2 ? 1 : 0) + 2 * padding;
        /** @type {number} */
        var t1 = offset - (minutes = E >= 1 ? 1 : 0) + 3 * padding;
        /** @type {number} */
        var t2 = l - (s = ry >= 1 ? 1 : 0) + 3 * padding;
        /** @type {number} */
        var v2 = max - (tmpSlug = O >= 1 ? 1 : 0) + 3 * padding;
        /** @type {number} */
        var value = len - (abilityCmdid = U >= 1 ? 1 : 0) + 3 * padding;
        /** @type {number} */
        var v_next_x = offset - 1 + 4 * padding;
        /** @type {number} */
        var v_next_y = l - 1 + 4 * padding;
        /** @type {number} */
        var v1 = max - 1 + 4 * padding;
        /** @type {number} */
        var t3 = len - 1 + 4 * padding;
        /** @type {number} */
        var clock_text = 255 & h;
        /** @type {number} */
        var j = 255 & dx;
        /** @type {number} */
        var baseNewPath = 255 & val;
        /** @type {number} */
        var ButtonTooltip = 255 & end;
        /** @type {number} */
        var oe = .6 - offset * offset - l * l - max * max - len * len;
        if (oe < 0) {
          /** @type {number} */
          r = 0;
        } else {
          /** @type {number} */
          var i = S[clock_text + S[j + S[baseNewPath + S[ButtonTooltip]]]] % 32 * 4;
          /** @type {number} */
          r = (oe = oe * oe) * oe * (m[i] * offset + m[i + 1] * l + m[i + 2] * max + m[i + 3] * len);
        }
        /** @type {number} */
        var p = .6 - w * w - v * v - x * x - dy * dy;
        if (p < 0) {
          /** @type {number} */
          g = 0;
        } else {
          /** @type {number} */
          var i = S[clock_text + millis + S[j + repeat + S[baseNewPath + siteName + S[ButtonTooltip + faceid]]]] % 32 * 4;
          /** @type {number} */
          g = (p = p * p) * p * (m[i] * w + m[i + 1] * v + m[i + 2] * x + m[i + 3] * dy);
        }
        /** @type {number} */
        var t = .6 - e * e - d * d - dz * dz - sy * sy;
        if (t < 0) {
          /** @type {number} */
          b = 0;
        } else {
          /** @type {number} */
          var i = S[clock_text + seconds + S[j + boff + S[baseNewPath + middlePathName + S[ButtonTooltip + descriptionIdToTry]]]] % 32 * 4;
          /** @type {number} */
          b = (t = t * t) * t * (m[i] * e + m[i + 1] * d + m[i + 2] * dz + m[i + 3] * sy);
        }
        /** @type {number} */
        var k = .6 - t1 * t1 - t2 * t2 - v2 * v2 - value * value;
        if (k < 0) {
          /** @type {number} */
          c = 0;
        } else {
          /** @type {number} */
          var i = S[clock_text + minutes + S[j + s + S[baseNewPath + tmpSlug + S[ButtonTooltip + abilityCmdid]]]] % 32 * 4;
          /** @type {number} */
          c = (k = k * k) * k * (m[i] * t1 + m[i + 1] * t2 + m[i + 2] * v2 + m[i + 3] * value);
        }
        /** @type {number} */
        var he = .6 - v_next_x * v_next_x - v_next_y * v_next_y - v1 * v1 - t3 * t3;
        if (he < 0) {
          /** @type {number} */
          spike = 0;
        } else {
          /** @type {number} */
          var fn = S[clock_text + 1 + S[j + 1 + S[baseNewPath + 1 + S[ButtonTooltip + 1]]]] % 32 * 4;
          /** @type {number} */
          spike = (he = he * he) * he * (m[fn] * v_next_x + m[fn + 1] * v_next_y + m[fn + 2] * v1 + m[fn + 3] * t3);
        }
        return 27 * (r + g + b + c + spike);
      }
    };
    /** @type {function(!Object): ?} */
    c._buildPermutationTable = cb;
    if (!(void 0 === (result = function() {
      return c;
    }.call(t, aFunctionName, t, module)))) {
      module.exports = result;
    }
    /** @type {function(!Function): undefined} */
    t.SimplexNoise = c;
    /** @type {function(!Function): undefined} */
    module.exports = c;
  }();
}, function(record, str, aFunctionName) {
  var result;
  !function() {
    /**
     * @param {!Function} e
     * @param {!Object} f
     * @param {?} s
     * @return {?}
     */
    function b(e, f, s) {
      return e.call.apply(e.bind, arguments);
    }
    /**
     * @param {!Function} h
     * @param {!Object} el
     * @param {?} f
     * @return {?}
     */
    function run(h, el, f) {
      if (!h) {
        throw Error();
      }
      if (2 < arguments.length) {
        /** @type {!Array<?>} */
        var spec = Array.prototype.slice.call(arguments, 2);
        return function() {
          /** @type {!Array<?>} */
          var param = Array.prototype.slice.call(arguments);
          return Array.prototype.unshift.apply(param, spec), h.apply(el, param);
        };
      }
      return function() {
        return h.apply(el, arguments);
      };
    }
    /**
     * @param {!Function} _
     * @param {!Object} t
     * @param {?} color
     * @return {?}
     */
    function callback(_, t, color) {
      return (callback = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? b : run).apply(null, arguments);
    }
    /**
     * @param {number} a
     * @param {undefined} b
     * @return {undefined}
     */
    function Controller(a, b) {
      /** @type {number} */
      this.a = a;
      this.o = b || a;
      this.c = this.o.document;
    }
    /**
     * @param {!Object} f
     * @param {!Object} e
     * @param {!Object} l
     * @param {?} t
     * @return {?}
     */
    function parse(f, e, l, t) {
      if (e = f.c.createElement(e), l) {
        var j;
        for (j in l) {
          if (l.hasOwnProperty(j)) {
            if ("style" == j) {
              e.style.cssText = l[j];
            } else {
              e.setAttribute(j, l[j]);
            }
          }
        }
      }
      return t && e.appendChild(f.c.createTextNode(t)), e;
    }
    /**
     * @param {!Object} target
     * @param {string} elem
     * @param {boolean} n
     * @return {undefined}
     */
    function update(target, elem, n) {
      if (!(target = target.c.getElementsByTagName(elem)[0])) {
        /** @type {!Element} */
        target = document.documentElement;
      }
      target.insertBefore(n, target.lastChild);
    }
    /**
     * @param {!Node} row
     * @return {undefined}
     */
    function f(row) {
      if (row.parentNode) {
        row.parentNode.removeChild(row);
      }
    }
    /**
     * @param {!Object} el
     * @param {!Array} a
     * @param {!Array} b
     * @return {undefined}
     */
    function h(el, a, b) {
      a = a || [];
      b = b || [];
      var keys = el.className.split(/\s+/);
      /** @type {number} */
      var i = 0;
      for (; i < a.length; i = i + 1) {
        /** @type {boolean} */
        var o = false;
        /** @type {number} */
        var j = 0;
        for (; j < keys.length; j = j + 1) {
          if (a[i] === keys[j]) {
            /** @type {boolean} */
            o = true;
            break;
          }
        }
        if (!o) {
          keys.push(a[i]);
        }
      }
      /** @type {!Array} */
      a = [];
      /** @type {number} */
      i = 0;
      for (; i < keys.length; i = i + 1) {
        /** @type {boolean} */
        o = false;
        /** @type {number} */
        j = 0;
        for (; j < b.length; j = j + 1) {
          if (keys[i] === b[j]) {
            /** @type {boolean} */
            o = true;
            break;
          }
        }
        if (!o) {
          a.push(keys[i]);
        }
      }
      /** @type {string} */
      el.className = a.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
    }
    /**
     * @param {!Object} n
     * @param {?} string
     * @return {?}
     */
    function c(n, string) {
      var prop = n.className.split(/\s+/);
      /** @type {number} */
      var p = 0;
      var pos = prop.length;
      for (; p < pos; p++) {
        if (prop[p] == string) {
          return true;
        }
      }
      return false;
    }
    /**
     * @param {!Object} obj
     * @param {!Object} node
     * @param {string} mixin
     * @return {undefined}
     */
    function next(obj, node, mixin) {
      /**
       * @return {undefined}
       */
      function error() {
        if (failWhale && andTmp && tmp) {
          failWhale(e);
          /** @type {null} */
          failWhale = null;
        }
      }
      node = parse(obj, "link", {
        rel : "stylesheet",
        href : node,
        media : "all"
      });
      /** @type {boolean} */
      var andTmp = false;
      /** @type {boolean} */
      var tmp = true;
      /** @type {null} */
      var e = null;
      var failWhale = mixin || null;
      if (isVowel) {
        /**
         * @return {undefined}
         */
        node.onload = function() {
          /** @type {boolean} */
          andTmp = true;
          error();
        };
        /**
         * @return {undefined}
         */
        node.onerror = function() {
          /** @type {boolean} */
          andTmp = true;
          /** @type {!Error} */
          e = Error("Stylesheet failed to load");
          error();
        };
      } else {
        setTimeout(function() {
          /** @type {boolean} */
          andTmp = true;
          error();
        }, 0);
      }
      update(obj, "head", node);
    }
    /**
     * @param {!Object} target
     * @param {string} src
     * @param {!Function} callback
     * @param {number} timeout
     * @return {?}
     */
    function loadScript(target, src, callback, timeout) {
      var layersRootNode = target.c.getElementsByTagName("head")[0];
      if (layersRootNode) {
        var node = parse(target, "script", {
          src : src
        });
        /** @type {boolean} */
        var a = false;
        return node.onload = node.onreadystatechange = function() {
          if (!(a || this.readyState && "loaded" != this.readyState && "complete" != this.readyState)) {
            /** @type {boolean} */
            a = true;
            if (callback) {
              callback(null);
            }
            /** @type {null} */
            node.onload = node.onreadystatechange = null;
            if ("HEAD" == node.parentNode.tagName) {
              layersRootNode.removeChild(node);
            }
          }
        }, layersRootNode.appendChild(node), setTimeout(function() {
          if (!a) {
            /** @type {boolean} */
            a = true;
            if (callback) {
              callback(Error("Script load timeout"));
            }
          }
        }, timeout || 5E3), node;
      }
      return null;
    }
    /**
     * @return {undefined}
     */
    function Simple() {
      /** @type {number} */
      this.a = 0;
      /** @type {null} */
      this.c = null;
    }
    /**
     * @param {number} val
     * @return {?}
     */
    function push(val) {
      return val.a++, function() {
        val.a--;
        y(val);
      };
    }
    /**
     * @param {number} data
     * @param {!Object} err
     * @return {undefined}
     */
    function _(data, err) {
      /** @type {!Object} */
      data.c = err;
      y(data);
    }
    /**
     * @param {number} val
     * @return {undefined}
     */
    function y(val) {
      if (0 == val.a && val.c) {
        val.c();
        /** @type {null} */
        val.c = null;
      }
    }
    /**
     * @param {string} a
     * @return {undefined}
     */
    function F(a) {
      this.a = a || "-";
    }
    /**
     * @param {!Object} content
     * @param {string} str
     * @return {undefined}
     */
    function Buffer(content, str) {
      /** @type {!Object} */
      this.c = content;
      /** @type {number} */
      this.f = 4;
      /** @type {string} */
      this.a = "n";
      var array = (str || "n4").match(/^([nio])([1-9])$/i);
      if (array) {
        this.a = array[1];
        /** @type {number} */
        this.f = parseInt(array[2], 10);
      }
    }
    /**
     * @param {string} names
     * @return {?}
     */
    function r(names) {
      /** @type {!Array} */
      var t = [];
      names = names.split(/,\s*/);
      /** @type {number} */
      var i = 0;
      for (; i < names.length; i++) {
        var f = names[i].replace(/['"]/g, "");
        if (-1 != f.indexOf(" ") || /^\d/.test(f)) {
          t.push("'" + f + "'");
        } else {
          t.push(f);
        }
      }
      return t.join(",");
    }
    /**
     * @param {!Object} data
     * @return {?}
     */
    function fn(data) {
      return data.a + data.f;
    }
    /**
     * @param {!Object} x
     * @return {?}
     */
    function loop(x) {
      /** @type {string} */
      var fStyle = "normal";
      return "o" === x.a ? fStyle = "oblique" : "i" === x.a && (fStyle = "italic"), fStyle;
    }
    /**
     * @param {string} textScript
     * @return {?}
     */
    function parseSearchFilters(textScript) {
      /** @type {number} */
      var id = 4;
      /** @type {string} */
      var notify = "n";
      /** @type {null} */
      var argArr = null;
      return textScript && ((argArr = textScript.match(/(normal|oblique|italic)/i)) && argArr[1] && (notify = argArr[1].substr(0, 1).toLowerCase()), (argArr = textScript.match(/([1-9]00|normal|bold)/i)) && argArr[1] && (/bold/i.test(argArr[1]) ? id = 7 : /[1-9]00/.test(argArr[1]) && (id = parseInt(argArr[1].substr(0, 1), 10)))), notify + id;
    }
    /**
     * @param {string} c
     * @param {!Object} w
     * @return {undefined}
     */
    function initialize(c, w) {
      /** @type {string} */
      this.c = c;
      this.f = c.o.document.documentElement;
      /** @type {!Object} */
      this.h = w;
      this.a = new F("-");
      /** @type {boolean} */
      this.j = false !== w.events;
      /** @type {boolean} */
      this.g = false !== w.classes;
    }
    /**
     * @param {!Object} data
     * @return {undefined}
     */
    function refresh(data) {
      if (data.g) {
        var r = c(data.f, data.a.c("wf", "active"));
        /** @type {!Array} */
        var x = [];
        /** @type {!Array} */
        var item = [data.a.c("wf", "loading")];
        if (!r) {
          x.push(data.a.c("wf", "inactive"));
        }
        h(data.f, x, item);
      }
      set(data, "inactive");
    }
    /**
     * @param {!Object} source
     * @param {string} name
     * @param {!Object} n
     * @return {undefined}
     */
    function set(source, name, n) {
      if (source.j && source.h[name]) {
        if (n) {
          source.h[name](n.c, fn(n));
        } else {
          source.h[name]();
        }
      }
    }
    /**
     * @return {undefined}
     */
    function vsImgList() {
      this.c = {};
    }
    /**
     * @param {!Object} compiler
     * @param {!Function} callback
     * @return {undefined}
     */
    function equaliseTransform(compiler, callback) {
      /** @type {!Object} */
      this.c = compiler;
      /** @type {!Function} */
      this.f = callback;
      this.a = parse(this.c, "span", {
        "aria-hidden" : "true"
      }, this.f);
    }
    /**
     * @param {!Object} args
     * @return {undefined}
     */
    function toArray(args) {
      update(args.c, "body", args.a);
    }
    /**
     * @param {!Object} n
     * @return {?}
     */
    function notify(n) {
      return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + r(n.c) + ";font-style:" + loop(n) + ";font-weight:" + n.f + "00;";
    }
    /**
     * @param {string} g
     * @param {number} b
     * @param {number} c
     * @param {string} a
     * @param {string} f
     * @param {string} h
     * @return {undefined}
     */
    function Matrix(g, b, c, a, f, h) {
      /** @type {string} */
      this.g = g;
      /** @type {number} */
      this.j = b;
      /** @type {string} */
      this.a = a;
      /** @type {number} */
      this.c = c;
      this.f = f || 3E3;
      this.h = h || void 0;
    }
    /**
     * @param {string} v
     * @param {(Array|number|string)} b
     * @param {number} c
     * @param {number} angle
     * @param {string} w
     * @param {string} h
     * @param {string} src
     * @return {undefined}
     */
    function init(v, b, c, angle, w, h, src) {
      /** @type {string} */
      this.v = v;
      /** @type {(Array|number|string)} */
      this.B = b;
      /** @type {number} */
      this.c = c;
      /** @type {number} */
      this.a = angle;
      this.s = src || "BESbswy";
      this.f = {};
      this.w = w || 3E3;
      this.u = h || null;
      /** @type {null} */
      this.m = this.j = this.h = this.g = null;
      this.g = new equaliseTransform(this.c, this.s);
      this.h = new equaliseTransform(this.c, this.s);
      this.j = new equaliseTransform(this.c, this.s);
      this.m = new equaliseTransform(this.c, this.s);
      v = notify(v = new Buffer(this.a.c + ",serif", fn(this.a)));
      /** @type {string} */
      this.g.a.style.cssText = v;
      v = notify(v = new Buffer(this.a.c + ",sans-serif", fn(this.a)));
      /** @type {string} */
      this.h.a.style.cssText = v;
      v = notify(v = new Buffer("serif", fn(this.a)));
      /** @type {string} */
      this.j.a.style.cssText = v;
      v = notify(v = new Buffer("sans-serif", fn(this.a)));
      /** @type {string} */
      this.m.a.style.cssText = v;
      toArray(this.g);
      toArray(this.h);
      toArray(this.j);
      toArray(this.m);
    }
    /**
     * @return {?}
     */
    function a() {
      if (null === g) {
        /** @type {(Array<string>|null)} */
        var sArrDayId = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
        /** @type {boolean} */
        g = !!sArrDayId && (536 > parseInt(sArrDayId[1], 10) || 536 === parseInt(sArrDayId[1], 10) && 11 >= parseInt(sArrDayId[2], 10));
      }
      return g;
    }
    /**
     * @param {!Object} options
     * @param {?} e
     * @param {?} className
     * @return {?}
     */
    function compare(options, e, className) {
      var k;
      for (k in m) {
        if (m.hasOwnProperty(k) && e === options.f[m[k]] && className === options.f[m[k]]) {
          return true;
        }
      }
      return false;
    }
    /**
     * @param {!Object} self
     * @return {undefined}
     */
    function render(self) {
      var t;
      var min = self.g.a.offsetWidth;
      var max = self.h.a.offsetWidth;
      if (!(t = min === self.f.serif && max === self.f["sans-serif"])) {
        t = a() && compare(self, min, max);
      }
      if (t) {
        if (now() - self.A >= self.w) {
          if (a() && compare(self, min, max) && (null === self.u || self.u.hasOwnProperty(self.a.c))) {
            open(self, self.v);
          } else {
            open(self, self.B);
          }
        } else {
          (function(e) {
            setTimeout(callback(function() {
              render(this);
            }, e), 50);
          })(self);
        }
      } else {
        open(self, self.v);
      }
    }
    /**
     * @param {!Object} e
     * @param {?} fn
     * @return {undefined}
     */
    function open(e, fn) {
      setTimeout(callback(function() {
        f(this.g.a);
        f(this.h.a);
        f(this.j.a);
        f(this.m.a);
        fn(this.a);
      }, e), 0);
    }
    /**
     * @param {number} input
     * @param {number} val
     * @param {string} s
     * @return {undefined}
     */
    function test(input, val, s) {
      /** @type {number} */
      this.c = input;
      /** @type {number} */
      this.a = val;
      /** @type {number} */
      this.f = 0;
      /** @type {boolean} */
      this.m = this.j = false;
      /** @type {string} */
      this.s = s;
    }
    /**
     * @param {!Object} data
     * @return {undefined}
     */
    function main(data) {
      if (0 == --data.f && data.j) {
        if (data.m) {
          if ((data = data.a).g) {
            h(data.f, [data.a.c("wf", "active")], [data.a.c("wf", "loading"), data.a.c("wf", "inactive")]);
          }
          set(data, "active");
        } else {
          refresh(data.a);
        }
      }
    }
    /**
     * @param {number} _args
     * @return {undefined}
     */
    function TaskNode(_args) {
      /** @type {number} */
      this.j = _args;
      this.a = new vsImgList;
      /** @type {number} */
      this.h = 0;
      /** @type {boolean} */
      this.f = this.g = true;
    }
    /**
     * @param {!Object} argv
     * @param {!Object} data
     * @param {!Array} options
     * @param {number} component
     * @param {string} event
     * @return {undefined}
     */
    function draw(argv, data, options, component, event) {
      /** @type {boolean} */
      var instance = 0 == --argv.h;
      if (argv.f || argv.g) {
        setTimeout(function() {
          var e = event || null;
          var window = component || {};
          if (0 === options.length && instance) {
            refresh(data.a);
          } else {
            data.f += options.length;
            if (instance) {
              /** @type {boolean} */
              data.j = instance;
            }
            var i;
            /** @type {!Array} */
            var c = [];
            /** @type {number} */
            i = 0;
            for (; i < options.length; i++) {
              var name = options[i];
              var helloComponent = window[name.c];
              var value = data.a;
              var val = name;
              if (value.g && h(value.f, [value.a.c("wf", val.c, fn(val).toString(), "loading")]), set(value, "fontloading", val), value = null, null === treatAsDotted) {
                if (window.FontFace) {
                  /** @type {(Array<string>|null)} */
                  val = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);
                  /** @type {(Array<string>|null)} */
                  var exp = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                  /** @type {boolean} */
                  treatAsDotted = val ? 42 < parseInt(val[1], 10) : !exp;
                } else {
                  /** @type {boolean} */
                  treatAsDotted = false;
                }
              }
              value = treatAsDotted ? new Matrix(callback(data.g, data), callback(data.h, data), data.c, name, data.s, helloComponent) : new init(callback(data.g, data), callback(data.h, data), data.c, name, data.s, e, helloComponent);
              c.push(value);
            }
            /** @type {number} */
            i = 0;
            for (; i < c.length; i++) {
              c[i].start();
            }
          }
        }, 0);
      }
    }
    /**
     * @param {number} c
     * @param {number} a
     * @return {undefined}
     */
    function Unitcell(c, a) {
      /** @type {number} */
      this.c = c;
      /** @type {number} */
      this.a = a;
    }
    /**
     * @param {number} content
     * @param {number} options
     * @return {undefined}
     */
    function Modal(content, options) {
      /** @type {number} */
      this.c = content;
      /** @type {number} */
      this.a = options;
    }
    /**
     * @param {!Object} c
     * @param {string} g
     * @return {undefined}
     */
    function RunHandlerTask(c, g) {
      this.c = c || client;
      /** @type {!Array} */
      this.a = [];
      /** @type {!Array} */
      this.f = [];
      this.g = g || "";
    }
    /**
     * @param {!Function} matrix
     * @return {undefined}
     */
    function _getMatrixAsString(matrix) {
      /** @type {!Function} */
      this.f = matrix;
      /** @type {!Array} */
      this.a = [];
      this.c = {};
    }
    /**
     * @param {number} input
     * @param {number} arg1
     * @return {undefined}
     */
    function A(input, arg1) {
      /** @type {number} */
      this.c = input;
      /** @type {number} */
      this.a = arg1;
    }
    /**
     * @param {number} movementA
     * @param {string} circleB
     * @return {undefined}
     */
    function getCollisionSphere(movementA, circleB) {
      /** @type {number} */
      this.c = movementA;
      /** @type {string} */
      this.a = circleB;
    }
    /**
     * @param {number} c
     * @param {!Function} f
     * @return {undefined}
     */
    function Matrix2D(c, f) {
      /** @type {number} */
      this.c = c;
      /** @type {!Function} */
      this.f = f;
      /** @type {!Array} */
      this.a = [];
    }
    /** @type {function(): number} */
    var now = Date.now || function() {
      return +new Date;
    };
    /** @type {boolean} */
    var isVowel = !!window.FontFace;
    /**
     * @param {string} v
     * @return {?}
     */
    F.prototype.c = function(v) {
      /** @type {!Array} */
      var rgb = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        rgb.push(arguments[i].replace(/[\W_]+/g, "").toLowerCase());
      }
      return rgb.join(this.a);
    };
    /**
     * @return {undefined}
     */
    Matrix.prototype.start = function() {
      var doc = this.c.o.document;
      var options = this;
      /** @type {number} */
      var start = now();
      /** @type {!Promise} */
      var p2 = new Promise(function(spyOnMethods, ify) {
        !function test() {
          if (now() - start >= options.f) {
            ify();
          } else {
            doc.fonts.load(function(n) {
              return loop(n) + " " + n.f + "00 300px " + r(n.c);
            }(options.a), options.h).then(function(inRevIdx) {
              if (1 <= inRevIdx.length) {
                spyOnMethods();
              } else {
                setTimeout(test, 25);
              }
            }, function() {
              ify();
            });
          }
        }();
      });
      /** @type {null} */
      var _takingTooLongTimeout = null;
      /** @type {!Promise} */
      var p1 = new Promise(function(canCreateDiscussions, _nextEventFunc) {
        /** @type {number} */
        _takingTooLongTimeout = setTimeout(_nextEventFunc, options.f);
      });
      Promise.race([p1, p2]).then(function() {
        if (_takingTooLongTimeout) {
          clearTimeout(_takingTooLongTimeout);
          /** @type {null} */
          _takingTooLongTimeout = null;
        }
        options.g(options.a);
      }, function() {
        options.j(options.a);
      });
    };
    var m = {
      D : "serif",
      C : "sans-serif"
    };
    /** @type {null} */
    var g = null;
    /**
     * @return {undefined}
     */
    init.prototype.start = function() {
      this.f.serif = this.j.a.offsetWidth;
      this.f["sans-serif"] = this.m.a.offsetWidth;
      /** @type {number} */
      this.A = now();
      render(this);
    };
    /** @type {null} */
    var treatAsDotted = null;
    /**
     * @param {!Object} e
     * @return {undefined}
     */
    test.prototype.g = function(e) {
      var a = this.a;
      if (a.g) {
        h(a.f, [a.a.c("wf", e.c, fn(e).toString(), "active")], [a.a.c("wf", e.c, fn(e).toString(), "loading"), a.a.c("wf", e.c, fn(e).toString(), "inactive")]);
      }
      set(a, "fontactive", e);
      /** @type {boolean} */
      this.m = true;
      main(this);
    };
    /**
     * @param {!Object} item
     * @return {undefined}
     */
    test.prototype.h = function(item) {
      var data = this.a;
      if (data.g) {
        var r = c(data.f, data.a.c("wf", item.c, fn(item).toString(), "active"));
        /** @type {!Array} */
        var x = [];
        /** @type {!Array} */
        var n = [data.a.c("wf", item.c, fn(item).toString(), "loading")];
        if (!r) {
          x.push(data.a.c("wf", item.c, fn(item).toString(), "inactive"));
        }
        h(data.f, x, n);
      }
      set(data, "fontinactive", item);
      main(this);
    };
    /**
     * @param {!Object} context
     * @return {undefined}
     */
    TaskNode.prototype.load = function(context) {
      this.c = new Controller(this.j, context.context || this.j);
      /** @type {boolean} */
      this.g = false !== context.events;
      /** @type {boolean} */
      this.f = false !== context.classes;
      (function(res, n, i) {
        /** @type {!Array} */
        var data = [];
        var alt = i.timeout;
        !function(value) {
          if (value.g) {
            h(value.f, [value.a.c("wf", "loading")]);
          }
          set(value, "loading");
        }(n);
        data = function(shapePath, data, callback) {
          var i;
          /** @type {!Array} */
          var res = [];
          for (i in data) {
            if (data.hasOwnProperty(i)) {
              var o = shapePath.c[i];
              if (o) {
                res.push(o(data[i], callback));
              }
            }
          }
          return res;
        }(res.a, i, res.c);
        var coords = new test(res.c, n, alt);
        res.h = data.length;
        /** @type {number} */
        n = 0;
        i = data.length;
        for (; n < i; n++) {
          data[n].load(function(settings, s, callback) {
            draw(res, coords, settings, s, callback);
          });
        }
      })(this, new initialize(this.c, context), context);
    };
    /**
     * @param {string} item
     * @return {undefined}
     */
    Unitcell.prototype.load = function(item) {
      var req = this;
      var id = req.a.projectId;
      var rev = req.a.version;
      if (id) {
        var index = req.c.o;
        /** @type {string} */
        loadScript(this.c, (req.a.api || "https://fast.fonts.net/jsapi") + "/" + id + ".js" + (rev ? "?v=" + rev : ""), function(i) {
          if (i) {
            item([]);
          } else {
            /**
             * @return {?}
             */
            index["__MonotypeConfiguration__" + id] = function() {
              return req.a;
            };
            (function fn() {
              if (index["__mti_fntLst" + id]) {
                var map1;
                var crossfilterable_layers = index["__mti_fntLst" + id]();
                /** @type {!Array} */
                var a = [];
                if (crossfilterable_layers) {
                  /** @type {number} */
                  var layer_i = 0;
                  for (; layer_i < crossfilterable_layers.length; layer_i++) {
                    var def = crossfilterable_layers[layer_i].fontfamily;
                    if (null != crossfilterable_layers[layer_i].fontStyle && null != crossfilterable_layers[layer_i].fontWeight) {
                      map1 = crossfilterable_layers[layer_i].fontStyle + crossfilterable_layers[layer_i].fontWeight;
                      a.push(new Buffer(def, map1));
                    } else {
                      a.push(new Buffer(def));
                    }
                  }
                }
                item(a);
              } else {
                setTimeout(function() {
                  fn();
                }, 50);
              }
            })();
          }
        }).id = "__MonotypeAPIScript__" + id;
      } else {
        item([]);
      }
    };
    /**
     * @param {string} $
     * @return {undefined}
     */
    Modal.prototype.load = function($) {
      var i;
      var l;
      var data = this.a.urls || [];
      var tables = this.a.families || [];
      var $fiver = this.a.testStrings || {};
      var a = new Simple;
      /** @type {number} */
      i = 0;
      l = data.length;
      for (; i < l; i++) {
        next(this.c, data[i], push(a));
      }
      /** @type {!Array} */
      var postBody = [];
      /** @type {number} */
      i = 0;
      l = tables.length;
      for (; i < l; i++) {
        if ((data = tables[i].split(":"))[1]) {
          var args = data[1].split(",");
          /** @type {number} */
          var i = 0;
          for (; i < args.length; i = i + 1) {
            postBody.push(new Buffer(data[0], args[i]));
          }
        } else {
          postBody.push(new Buffer(data[0]));
        }
      }
      _(a, function() {
        $(postBody, $fiver);
      });
    };
    /** @type {string} */
    var client = "https://fonts.googleapis.com/css";
    var alpha = {
      latin : "BESbswy",
      "latin-ext" : "\u00e7\u00f6\u00fc\u011f\u015f",
      cyrillic : "\u0439\u044f\u0416",
      greek : "\u03b1\u03b2\u03a3",
      khmer : "\u1780\u1781\u1782",
      Hanuman : "\u1780\u1781\u1782"
    };
    var fontWeights = {
      thin : "1",
      extralight : "2",
      "extra-light" : "2",
      ultralight : "2",
      "ultra-light" : "2",
      light : "3",
      regular : "4",
      book : "4",
      medium : "5",
      "semi-bold" : "6",
      semibold : "6",
      "demi-bold" : "6",
      demibold : "6",
      bold : "7",
      "extra-bold" : "8",
      extrabold : "8",
      "ultra-bold" : "8",
      ultrabold : "8",
      black : "9",
      heavy : "9",
      l : "3",
      r : "4",
      b : "7"
    };
    var typeMap = {
      i : "i",
      italic : "i",
      n : "n",
      normal : "n"
    };
    /** @type {!RegExp} */
    var moveRegex = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
    var justDebugged = {
      Arimo : true,
      Cousine : true,
      Tinos : true
    };
    /**
     * @param {string} callback
     * @return {undefined}
     */
    A.prototype.load = function(callback) {
      var a = new Simple;
      var b = this.c;
      var list = new RunHandlerTask(this.a.api, this.a.text);
      var la = this.a.families;
      !function(region, term) {
        var length = term.length;
        /** @type {number} */
        var i = 0;
        for (; i < length; i++) {
          var location = term[i].split(":");
          if (3 == location.length) {
            region.f.push(location.pop());
          }
          /** @type {string} */
          var path = "";
          if (2 == location.length && "" != location[1]) {
            /** @type {string} */
            path = ":";
          }
          region.a.push(location.join(path));
        }
      }(list, la);
      var result = new _getMatrixAsString(la);
      !function(item) {
        var integerLength = item.f.length;
        /** @type {number} */
        var idx = 0;
        for (; idx < integerLength; idx++) {
          var a = item.f[idx].split(":");
          var i = a[0].replace(/\+/g, " ");
          /** @type {!Array} */
          var args = ["n4"];
          if (2 <= a.length) {
            var e;
            if (e = [], r = a[1]) {
              var r;
              var patchLen = (r = r.split(",")).length;
              /** @type {number} */
              var i = 0;
              for (; i < patchLen; i++) {
                var value;
                if ((value = r[i]).match(/^[\w-]+$/)) {
                  if (null == (val = moveRegex.exec(value.toLowerCase()))) {
                    /** @type {string} */
                    value = "";
                  } else {
                    if (value = null == (value = val[2]) || "" == value ? "n" : typeMap[value], null == (val = val[1]) || "" == val) {
                      /** @type {string} */
                      val = "4";
                    } else {
                      var shape = fontWeights[val];
                      var val = shape || (isNaN(val) ? "4" : val.substr(0, 1));
                    }
                    /** @type {string} */
                    value = [value, val].join("");
                  }
                } else {
                  /** @type {string} */
                  value = "";
                }
                if (value) {
                  e.push(value);
                }
              }
            }
            if (0 < e.length) {
              /** @type {!Array} */
              args = e;
            }
            if (3 == a.length) {
              /** @type {!Array} */
              e = [];
              if (0 < (a = (a = a[2]) ? a.split(",") : e).length && (a = alpha[a[0]])) {
                item.c[i] = a;
              }
            }
          }
          if (!item.c[i]) {
            if (a = alpha[i]) {
              item.c[i] = a;
            }
          }
          /** @type {number} */
          a = 0;
          for (; a < args.length; a = a + 1) {
            item.a.push(new Buffer(i, args[a]));
          }
        }
      }(result);
      next(b, function(e) {
        if (0 == e.a.length) {
          throw Error("No fonts to load!");
        }
        if (-1 != e.c.indexOf("kit=")) {
          return e.c;
        }
        var bL = e.a.length;
        /** @type {!Array} */
        var drilldownLevelLabels = [];
        /** @type {number} */
        var i = 0;
        for (; i < bL; i++) {
          drilldownLevelLabels.push(e.a[i].replace(/ /g, "+"));
        }
        return bL = e.c + "?family=" + drilldownLevelLabels.join("%7C"), 0 < e.f.length && (bL = bL + ("&subset=" + e.f.join(","))), 0 < e.g.length && (bL = bL + ("&text=" + encodeURIComponent(e.g))), bL;
      }(list), push(a));
      _(a, function() {
        callback(result.a, result.c, justDebugged);
      });
    };
    /**
     * @param {string} $
     * @return {undefined}
     */
    getCollisionSphere.prototype.load = function($) {
      var peripheralId = this.a.id;
      var win = this.c.o;
      if (peripheralId) {
        loadScript(this.c, (this.a.api || "https://use.typekit.net") + "/" + peripheralId + ".js", function(data) {
          if (data) {
            $([]);
          } else {
            if (win.Typekit && win.Typekit.config && win.Typekit.config.fn) {
              data = win.Typekit.config.fn;
              /** @type {!Array} */
              var postBody = [];
              /** @type {number} */
              var i = 0;
              for (; i < data.length; i = i + 2) {
                var value = data[i];
                var crossfilterable_layers = data[i + 1];
                /** @type {number} */
                var layer_i = 0;
                for (; layer_i < crossfilterable_layers.length; layer_i++) {
                  postBody.push(new Buffer(value, crossfilterable_layers[layer_i]));
                }
              }
              try {
                win.Typekit.load({
                  events : false,
                  classes : false,
                  async : true
                });
              } catch (e) {
              }
              $(postBody);
            }
          }
        }, 2E3);
      } else {
        $([]);
      }
    };
    /**
     * @param {string} callback
     * @return {undefined}
     */
    Matrix2D.prototype.load = function(callback) {
      var action = this.f.id;
      var o = this.c.o;
      var type = this;
      if (action) {
        if (!o.__webfontfontdeckmodule__) {
          o.__webfontfontdeckmodule__ = {};
        }
        /**
         * @param {?} canCreateDiscussions
         * @param {!Object} $o
         * @return {undefined}
         */
        o.__webfontfontdeckmodule__[action] = function(canCreateDiscussions, $o) {
          /** @type {number} */
          var i = 0;
          var patchLen = $o.fonts.length;
          for (; i < patchLen; ++i) {
            var a = $o.fonts[i];
            type.a.push(new Buffer(a.name, parseSearchFilters("font-weight:" + a.weight + ";font-style:" + a.style)));
          }
          callback(type.a);
        };
        loadScript(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + function(state) {
          return state.o.location.hostname || state.a.location.hostname;
        }(this.c) + "/" + action + ".js", function(canCreateDiscussions) {
          if (canCreateDiscussions) {
            callback([]);
          }
        });
      } else {
        callback([]);
      }
    };
    var obj = new TaskNode(window);
    /**
     * @param {boolean} options
     * @param {?} config
     * @return {?}
     */
    obj.a.c.custom = function(options, config) {
      return new Modal(config, options);
    };
    /**
     * @param {boolean} formatters
     * @param {?} customFormatters
     * @return {?}
     */
    obj.a.c.fontdeck = function(formatters, customFormatters) {
      return new Matrix2D(customFormatters, formatters);
    };
    /**
     * @param {boolean} formatters
     * @param {?} customFormatters
     * @return {?}
     */
    obj.a.c.monotype = function(formatters, customFormatters) {
      return new Unitcell(customFormatters, formatters);
    };
    /**
     * @param {boolean} formatters
     * @param {?} customFormatters
     * @return {?}
     */
    obj.a.c.typekit = function(formatters, customFormatters) {
      return new getCollisionSphere(customFormatters, formatters);
    };
    /**
     * @param {boolean} event
     * @param {?} link
     * @return {?}
     */
    obj.a.c.google = function(event, link) {
      return new A(link, event);
    };
    var mockGoogleMaps = {
      load : callback(obj.load, obj)
    };
    if (!(void 0 === (result = function() {
      return mockGoogleMaps;
    }.call(str, aFunctionName, str, record)))) {
      record.exports = result;
    }
  }();
}]);
