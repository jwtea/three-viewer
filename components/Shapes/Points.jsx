import React, { useCallback, useMemo, useRef } from 'react';
import * as THREE from 'three';

import frag from '../../shaders/frag.glsl';
import vert from '../../shaders/vert.glsl';

function Points({ pointCount }) {
  const attrib = useRef();
  const hover = useCallback(e => {
    e.stopPropagation();
    attrib.current.array[e.index * 4 + 3] = 1;
    attrib.current.needsUpdate = true;
  }, []);

  const unhover = useCallback(e => {
    attrib.current.array[e.index * 4 + 3] = 0.1;
    attrib.current.needsUpdate = true;
  }, []);

  const uniforms = useMemo(
    () => ({
      size: { value: 15 },
      texture: { value: new THREE.TextureLoader().load('/textures/disc.png') },
    }),
    []
  );
  const [positions, colors] = useMemo(() => {
    const pos = [];
    const cols = [];
    for (let i = 0; i < pointCount; i++) {
      pos.push(5 - Math.random() * 10);
      pos.push(5 - Math.random() * 10);
      pos.push(5 - Math.random() * 10);

      cols.push(1); // r
      cols.push(0.5); // g
      cols.push(0.5); // b
      cols.push(0.1); // alpha
    }
    return [new Float32Array(pos), new Float32Array(cols)];
  }, [pointCount]);

  return (
    <points onPointerOver={hover} onPointerOut={unhover}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          ref={attrib}
          attachObject={['attributes', 'rgba']}
          count={colors.length / 4}
          array={colors}
          itemSize={4}
        />
      </bufferGeometry>
      <shaderMaterial
        attach="material"
        uniforms={uniforms}
        vertexShader={vert}
        fragmentShader={frag}
        alphaTest={0.5}
        depthWrite={false}
        vertexColors
        transparent
      />
    </points>
  );
}

export default Points;
