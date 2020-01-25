import React, { useRef } from 'react';
import { extend, useFrame, useThree } from 'react-three-fiber';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { CopyShader } from 'three/examples/jsm/shaders/CopyShader';
import { FilmShader } from 'three/examples/jsm/shaders/FilmShader';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader';

import BadTV from '../../Shaders/BadTV';
import BadTVStatic from '../../Shaders/BadTV/Static';

extend({
  EffectComposer,
  RenderPass,
  ShaderPass,
});

export default () => {
  const { gl, scene, camera } = useThree();
  const clock = new THREE.Clock();
  const composer = useRef();
  const shaderRef = useRef();
  const staticRef = useRef();
  const scanlineRef = useRef();

  useFrame(() => {
    if (shaderRef.current) {
      shaderRef.current.uniforms.time.value += clock.getDelta();
    }
    if (staticRef.current) {
      staticRef.current.uniforms.time.value += clock.getDelta();
    }
    if (scanlineRef.current) {
      scanlineRef.current.uniforms.time.value += clock.getDelta();
    }
    composer.current.render();
  }, 1);

  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" args={[scene, camera]} />
      <shaderPass
        uniforms-nIntensity-value={0.4}
        uniforms-sIntensity-value={0.9}
        uniforms-sCount-value={800}
        ref={scanlineRef}
        attachArray="passes"
        args={[FilmShader]}
      />
      <shaderPass
        uniforms-distortion-value={3.0}
        uniforms-distortion2-value={1.0}
        uniforms-speed-value={0.3}
        uniforms-speed-rollSpeed={0.1}
        ref={shaderRef}
        attachArray="passes"
        args={[BadTV]}
      />
      <shaderPass
        uniforms-amount-value={0.005}
        uniforms-angle-value={0.0}
        attachArray="passes"
        args={[RGBShiftShader]}
      />
      <shaderPass
        uniforms-size-value={1.0}
        uniforms-amount-value={0.5}
        ref={staticRef}
        attachArray="passes"
        args={[BadTVStatic]}
      />
      <shaderPass attachArray="passes" args={[CopyShader]} />
    </effectComposer>
  );
};
