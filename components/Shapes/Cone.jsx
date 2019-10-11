import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const clickAction = {
  type: 'UPDATE_TEXT',
  text: 'This is driven from the canvas',
};

const Cone = ({ position, rotation }) => {
  const dispatch = useDispatch();
  const [color, setColor] = useState('red');
  return (
    <mesh
      position={position}
      rotation={rotation}
      onClick={() => dispatch(clickAction)}
      onPointerOver={() => setColor('red')}
      onPointerOut={() => setColor('blue')}
    >
      <coneBufferGeometry
        scale={[0, 0, 0]}
        attach="geometry"
        args={[5, 20, 32]}
      />
      <meshBasicMaterial
        attach="material"
        color={color}
        opacity={0.5}
        transparent
      />
    </mesh>
  );
};

Cone.propTypes = {
  position: PropTypes.array.isRequired,
  rotation: PropTypes.array,
};

Cone.defaultProps = {
  rotation: [0, 0, 0],
};

export default Cone;
