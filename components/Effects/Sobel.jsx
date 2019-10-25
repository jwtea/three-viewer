import React, { useRef, useEffect } from 'react';
import { extend, useFrame, useThree } from 'react-three-fiber';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';

import { useSelector } from 'react-redux';

import { LuminosityShader } from 'three/examples/jsm/shaders/LuminosityShader';
import { SobelOperatorShader } from 'three/examples/jsm/shaders/SobelOperatorShader';

extend({
  EffectComposer,
  RenderPass,
  ShaderPass,
});

export default () => {
  const { gl, scene, camera, size } = useThree();

  const composer = useRef();

  const effects = useSelector(state => state.effects);

  const pixelRatio = gl.getPixelRatio();

  useEffect(() => composer.current.setSize(size.width, size.height), [size]);
  useFrame(() => composer.current.render(), effects ? 1 : 0);

  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" args={[scene, camera]} />
      <shaderPass attachArray="passes" args={[LuminosityShader]} />
      <shaderPass
        uniforms-resolution-value={[
          size.width * pixelRatio,
          size.height * pixelRatio,
        ]}
        attachArray="passes"
        args={[SobelOperatorShader]}
      />
    </effectComposer>
  );
};
