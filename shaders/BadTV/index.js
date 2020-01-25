import frag from './frag.glsl';
import vert from './vert.glsl';

const badTv = {
  uniforms: {
    tDiffuse: { type: 't', value: null },
    time: { type: 'f', value: 0.0 },
    distortion: { type: 'f', value: 3.0 },
    distortion2: { type: 'f', value: 5.0 },
    speed: { type: 'f', value: 0.2 },
    rollSpeed: { type: 'f', value: 0.1 },
  },
  vertexShader: vert,
  fragmentShader: frag,
};

export default badTv;
