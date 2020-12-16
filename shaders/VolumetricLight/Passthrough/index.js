import frag from './frag.glsl';
import vert from './vert.glsl';

const passthrough = {
  uniforms: {
    tDiffuse: { value: null },
  },
  vertexShader: vert,
  fragmentShader: frag,
};

export default passthrough;
