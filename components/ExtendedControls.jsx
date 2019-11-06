/* eslint-disable no-underscore-dangle */
import React, { useRef, useEffect } from 'react';
import { extend, useRender, useThree } from 'react-three-fiber';
import { useDispatch, useSelector } from 'react-redux';
import CameraControls from 'camera-controls';
import * as THREE from 'three';

CameraControls.install({ THREE });
extend({ CameraControls });

/**
 * The camera should rotate if the controls are not being used to rotate the camera
 * and that the auto rotate is enabled
 * @param {*} autoRotate
 * @param {*} controls
 */
const shouldRotate = (autoRotate, controls) =>
  autoRotate && controls.current._state !== 0;

const Controls = () => {
  const { camera, gl } = useThree();
  const controls = useRef();
  const resetCamera = useSelector(state => state.resetCamera);
  const dispatch = useDispatch();
  const clock = new THREE.Clock();

  let autoRotate = true;
  let resetDispatched = false;

  useEffect(() => {
    if (resetCamera) {
      autoRotate = false;
      controls.current.reset(true);
    }
  }, [resetCamera]);

  useRender(() => {
    const delta = clock.getDelta();

    if (shouldRotate(autoRotate, controls)) {
      controls.current.rotate(delta / 2, 0, true);
    }

    // Will be false when there has been no movement
    const updated = controls.current.update(delta);
    if (updated === false && resetCamera && !resetDispatched) {
      resetDispatched = true;
      dispatch({ type: 'CAMERA_RESET_COMPLETE' });
    }
  });

  return (
    <cameraControls
      ref={controls}
      truckSpeed={0}
      minDistance={1}
      maxDistance={6}
      dampingFactor={0.3}
      enabled={!resetCamera}
      enableDamping
      args={[camera, gl.domElement]}
    />
  );
};

export default Controls;
