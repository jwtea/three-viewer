import frag from './frag.glsl';
import vert from './vert.glsl';

const additiveBlending = {
  uniforms: {
    tDiffuse: { value: null },
    tAdd: { value: null },
  },
  vertexShader: vert,
  fragmentShader: frag,
};

export default additiveBlending;
