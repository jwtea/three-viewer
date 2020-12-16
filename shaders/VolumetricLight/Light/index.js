import { Vector2 } from 'three';

import frag from './frag.glsl';
import vert from './vert.glsl';

const volumetricLight = {
  uniforms: {
    tDiffuse: { value: null },
    lightPosition: { value: new Vector2(0.5, 0.5) },
    exposure: { value: 0.2 },
    decay: { value: 0.95 },
    density: { value: 0.5 },
    weight: { value: 0.7 },
    samples: { value: 100 },
  },
  vertexShader: vert,
  fragmentShader: frag,
};

export default volumetricLight;
