import React, { useRef, useEffect } from 'react';
import { extend, useFrame, useThree } from 'react-three-fiber';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

extend({
  EffectComposer,
  RenderPass,
  UnrealBloomPass,
});

export default () => {
  const { gl, scene, camera, size } = useThree();
  const composer = useRef();

  const params = [[window.innerWidth, window.innerHeight], 0.3, 0.4, 0.85];
  useEffect(() => void composer.current.setSize(size.width, size.height), [
    size,
  ]);
  useFrame(() => {
    composer.current.render();
  }, 1);

  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" args={[scene, camera]} />
      <unrealBloomPass attachArray="passes" args={params} />
    </effectComposer>
  );
};
