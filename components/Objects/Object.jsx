import { config, useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AnimatedOpacityMesh from '../Animation/Meshes/AnimatedOpacityMesh';

export default ({ objKey, meshes }) => {
  const dispatch = useDispatch();
  const activeObject = useSelector(state => state.activeObject);

  // Are we leaving or entering
  const [direc, setDirection] = useState(1);

  const { posAnim, opacityAnim } = useSpring({
    posAnim: activeObject === objKey ? 0 : 10,
    opacityAnim: activeObject === objKey ? 1 : 0,
    config: { ...config.slow },
    onRest: () =>
      dispatch({
        type: activeObject === objKey ? 'ITEM_DISPLAYED' : 'ITEM_HIDDEN',
        objKey,
      }),
  });

  useEffect(() => {
    setDirection(activeObject === objKey ? 1 : -1);
  }, [activeObject]);

  return (
    <a.group position={posAnim.interpolate(p => [p * direc, 0, 0])}>
      {meshes.map(mesh => (
        <AnimatedOpacityMesh
          key={mesh.name + objKey}
          mesh={mesh}
          opacity={opacityAnim}
        />
      ))}
    </a.group>
  );
};
