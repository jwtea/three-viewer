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

const Controls = ({ pTar, pPos }) => {
  const { camera, gl } = useThree();
  const controls = useRef();
  const resetCamera = useSelector(state => state.resetCamera);
  const dispatch = useDispatch();
  const clock = new THREE.Clock();
  const target = useSelector(state => state.controlsTarget);
  const position = useSelector(state => state.controlsPosition);
  const autoRotate = useSelector(state => state.autoRotate);

  useEffect(() => {
    dispatch({ type: 'SET_CONTROLS', target: pTar, position: pPos });
  }, [pTar, pPos]);

  useEffect(() => {
    const positions = [].concat(...[position, target]);
    positions.push(true);
    controls.current.setLookAt(...positions);
  }, [target, position]);

  useRender(() => {
    const delta = clock.getDelta();

    if (autoRotate) {
      controls.current.rotate(delta / 2, 0, true);
    }

    controls.current.update(delta);
  });

  return (
    <cameraControls
      ref={controls}
      truckSpeed={0}
      dampingFactor={0.3}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={0}
      enabled={!resetCamera}
      enableDamping
      args={[camera, gl.domElement]}
    />
  );
};

export default Controls;
