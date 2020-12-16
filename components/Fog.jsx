import React from 'react';
import { extend } from 'react-three-fiber';
import { Fog } from 'three';

extend({ Fog });
export default () => <Fog args={['black', 1, 10]} />;
