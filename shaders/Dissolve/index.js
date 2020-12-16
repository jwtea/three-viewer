import { ShaderLib, UniformsUtils } from 'three';

import frag from './frag.glsl';
import vert from './vert.glsl';

const dissolve = {
  uniforms: UniformsUtils.merge([
    ShaderLib.phong.uniforms,
    {
      uTime: { value: 0.0 },
      uThreshold: {
        value: 0.0,
      },
      uEdgeWidth: {
        value: 0.01,
      },
      uEdgeColor: {
        value: [20, 20, 20],
      },
      uColor: {
        value: [20, 20, 20],
      },
      uFrequency: {
        value: 1,
      },
    },
  ]),
  vertexShader: vert,
  fragmentShader: frag,
};

export default dissolve;
