import React, { useRef, useEffect } from 'react';
import { extend, useThree } from 'react-three-fiber';
import { Object3D } from 'three';

extend({ Object3D });

export default () => {
  const { scene } = useThree();
  const light = useRef();
  const obj = useRef();
  useEffect(() => {
    scene.add(light.current.target);
    scene.add(obj.current);

    light.current.target = obj.current;
  }, [scene, light]);

  return (
    <spotLight ref={light} position={[1, 0, 0]} args={['red']}>
      <object3D ref={obj} position={[1, 0, 0]} />
    </spotLight>
  );
};
