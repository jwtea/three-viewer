import frag from './frag.glsl';
import vert from './vert.glsl';

const badTvStatic = {
  uniforms: {
    tDiffuse: { type: 't', value: null },
    time: { type: 'f', value: 0.0 },
    amount: { type: 'f', value: 0.5 },
    size: { type: 'f', value: 4.0 },
  },
  vertexShader: vert,
  fragmentShader: frag,
};

export default badTvStatic;
