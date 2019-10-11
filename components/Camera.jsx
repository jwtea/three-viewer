import React, { useEffect, useRef } from 'react';
import { useFrame, useThree } from 'react-three-fiber';

export default () => {
  const ref = useRef();
  const { size, setDefaultCamera } = useThree();

  useEffect(() => setDefaultCamera(ref.current), []);
  useFrame(() => ref.current.updateMatrixWorld());

  return (
    <perspectiveCamera
      ref={ref}
      aspect={size.width / size.height}
      radius={(size.width + size.height) / 4}
      onUpdate={self => self.updateProjectionMatrix()}
    />
  );
};
