import PropTypes from 'prop-types';
import React from 'react';

import Plane from '../Shapes/Plane';

const RectAreaLight = ({
  debug,
  color,
  position,
  intensity,
  rotation,
  visible,
}) => {
  return (
    <>
      {debug ? <Plane position={position} rotation={rotation} /> : null}

      <rectAreaLight
        visible={visible}
        rotation={rotation}
        color={color}
        intensity={intensity}
        position={position}
      />
    </>
  );
};

RectAreaLight.propTypes = {
  debug: PropTypes.bool,
  color: PropTypes.string,
  position: PropTypes.array.isRequired,
  intensity: PropTypes.number,
  rotation: PropTypes.array.isRequired,
  visible: PropTypes.bool,
};

RectAreaLight.defaultProps = {
  debug: false,
  color: 'white',
  intensity: 1,
  visible: false,
};

export default RectAreaLight;
