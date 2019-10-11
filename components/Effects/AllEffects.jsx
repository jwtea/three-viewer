import React, { useRef, useEffect } from 'react';
import { extend, useFrame, useThree } from 'react-three-fiber';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass';
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass';

extend({
  EffectComposer,
  RenderPass,
  GlitchPass,
  BokehPass,
  UnrealBloomPass,
  AfterimagePass,
  FilmPass,
});

export default () => {
  const { gl, scene, camera, size } = useThree();
  const composer = useRef();
  useEffect(() => void composer.current.setSize(size.width, size.height), [
    size,
  ]);
  useFrame(() => composer.current.render(), 1);

  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" args={[scene, camera]} />
      <afterimagePass attachArray="passes" />
      {/* noiseIntensity?: number, scanlinesIntensity?: number, scanlinesCount?: number, grayscale?: number */}
      {/* <filmPass attachArray="passes" args={[10, 10, 10, 10]} /> */}
      {/* resolution: Vector2, strength: number, radius: number, threshold: number */}
      {/* <unrealBloomPass attachArray="passes" args={[[1, 1], 1, 1, 1]} /> */}
      {/* <bokehPass
        attachArray="passes"
        args={[
          scene,
          camera,
          {
            focus: 100,
            aspect: 2,
            maxblur: 10,
            width: 400,
          },
        ]}
      /> */}
      {/* <glitchPass attachArray="passes" renderToScreen /> */}
    </effectComposer>
  );
};
