import React, { useRef } from 'react';

import HDR from '../components/Lights/HDRScene';
import ScrewModel from '../components/Models/ScrewModel';
import BaseScene from './BaseScene';

const imagePaths = ['px.hdr', 'nx.hdr', 'py.hdr', 'ny.hdr', 'pz.hdr', 'nz.hdr'];
const HDRPath = '/textures/hdr/studio/';

export default () => (
  <BaseScene>
    <ambientLight />
    <HDR HDRPath={HDRPath} imagePaths={imagePaths} enableBackground={false}>
      <ScrewModel />
    </HDR>
  </BaseScene>
);
