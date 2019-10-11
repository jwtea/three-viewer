import React, { useRef, useEffect } from 'react';
import { extend, useFrame, useThree } from 'react-three-fiber';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';

import { useSelector } from 'react-redux';

import { LuminosityShader } from 'three/examples/jsm/shaders/LuminosityShader.js';
import { SobelOperatorShader } from 'three/examples/jsm/shaders/SobelOperatorShader.js';

extend({
  EffectComposer,
  RenderPass,
  ShaderPass,
});

export default () => {
  const { gl, scene, camera, size } = useThree();
  const composer = useRef();
  const sobel = useRef();

  const effects = useSelector(state => state.effects);
  useEffect(() => void composer.current.setSize(size.width, size.height), [
    size,
  ]);
  useFrame(
    () => {
      sobel.current.uniforms.resolution.value.x =
        window.innerWidth * window.devicePixelRatio;
      sobel.current.uniforms.resolution.value.y =
        window.innerHeight * window.devicePixelRatio;

      composer.current.render();
    },
    effects ? 1 : 0
  );

  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" args={[scene, camera]} />
      <shaderPass attachArray="passes" args={[LuminosityShader]} />
      <shaderPass
        ref={sobel}
        attachArray="passes"
        args={[SobelOperatorShader]}
      />
    </effectComposer>
  );
};
