import React, { useRef, useEffect, useMemo } from 'react';
import { extend, useFrame, useThree } from 'react-three-fiber';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';

import { DEFAULT_LAYER, OCCLUSION_LAYER } from '../layers';

import VolumetricLightShader from '../../shaders/VolumetricLight/Light';
import AdditiveBlendingShader from '../../shaders/VolumetricLight/AdditiveBlending';

extend({
  EffectComposer,
  RenderPass,
  ShaderPass,
});

export default () => {
  const { gl, scene, camera, size } = useThree();
  const composer = useRef();
  const occlusionComposer = useRef();

  const occlusionRenderTarget = useMemo(
    () => new THREE.WebGLRenderTarget(),
    []
  );

  useEffect(() => {
    occlusionComposer.current.setSize(size.width, size.height);
    composer.current.setSize(size.width, size.height);
  }, [size]);

  useFrame(() => {
    gl.setClearColor(0x000000);
    camera.layers.set(OCCLUSION_LAYER);
    occlusionComposer.current.render();
    camera.layers.set(DEFAULT_LAYER);
    gl.setClearColor(0x090611);
    composer.current.render();
  }, 10);

  return (
    <>
      <effectComposer
        ref={occlusionComposer}
        args={[gl, occlusionRenderTarget]}
        renderToScreen={false}
      >
        <renderPass attachArray="passes" scene={scene} camera={camera} />
        <shaderPass
          attachArray="passes"
          args={[VolumetricLightShader]}
          needsSwap={false}
        />
      </effectComposer>
      <effectComposer ref={composer} args={[gl]}>
        <renderPass attachArray="passes" scene={scene} camera={camera} />
        <shaderPass
          attachArray="passes"
          args={[AdditiveBlendingShader]}
          uniforms-tAdd-value={occlusionRenderTarget.texture}
          renderToScreen
        />
      </effectComposer>
    </>
  );
};
