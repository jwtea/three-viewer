import { animated as a } from '@react-spring/three';
import React from 'react';

import shader from '../../shaders/Dissolve';

export default ({ threshold }) => {
  return (
    <a.shaderMaterial
      attach="material"
      // wireframe
      uniforms={shader.uniforms}
      uniforms-uThreshold-value={threshold}
      vertexShader={shader.vertexShader}
      fragmentShader={shader.fragmentShader}
      wireframeLinewidth={10}
      lights
      transparent
    />
  );
};
