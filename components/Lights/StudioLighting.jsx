import React from 'react';
import { useSelector } from 'react-redux';

import PointLight from './Point';

const StudioLighting = () => {
  const lights = useSelector(state => state.lights);

  return (
    <>
      <PointLight
        visible={lights}
        intensity={0.25}
        position={[3.4312996864318848, 2.002431631088257, 5.763840675354004]}
        rotation={[-0.4173854870126512, 0.5551711881098526, 0.2645436633227689]}
      />
      <PointLight
        visible={lights}
        intensity={1.25}
        castShadow
        position={[-7.554739475250244, 3.2171201705932617, 1.5081813335418701]}
        rotation={[
          -1.6962481320831813,
          -1.1083215728627136,
          -1.6589609904901512,
        ]}
      />
      <PointLight
        visible={lights}
        intensity={0.5}
        position={[-10.956842422485352, 5.48071813583374, 14.525115013122559]}
        rotation={[
          -0.6240219169355661,
          -0.6012189161136243,
          -0.3867541328569509,
        ]}
      />
    </>
  );
};

export default StudioLighting;
