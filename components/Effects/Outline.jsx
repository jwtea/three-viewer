import React, { useEffect, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { extend, useFrame, useThree } from 'react-three-fiber';
import { Vector2 } from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader';

extend({
  EffectComposer,
  RenderPass,
  OutlinePass,
  ShaderPass,
});

export default () => {
  const { gl, scene, camera, size } = useThree();

  const composer = useRef();
  const outlineRef = useRef();

  const hoveredObjects = useSelector(state => state.hoveredObjects);

  const aspect = useMemo(() => new Vector2(size.width, size.height), [size]);

  const pixelRatio = gl.getPixelRatio();

  useEffect(() => composer.current.setSize(size.width, size.height), [size]);
  useFrame(() => composer.current.render(), 1);

  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" args={[scene, camera]} />
      <outlinePass
        visibleEdgeColor="blue"
        edgeStrength={10}
        edgeThickness={2}
        attachArray="passes"
        selectedObjects={hoveredObjects}
        ref={outlineRef}
        args={[aspect, scene, camera]}
      />
      <shaderPass
        attachArray="passes"
        args={[FXAAShader]}
        uniforms-resolution-value={[
          1 / (size.width * pixelRatio),
          1 / (size.height * pixelRatio),
        ]}
      />
    </effectComposer>
  );
};
