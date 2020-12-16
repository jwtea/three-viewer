import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { useFrame, useThree } from 'react-three-fiber';
import * as THREE from 'three';

export function rn(start, end) {
  if (start == null) start = 0;
  if (end == null) end = 1;
  return start + Math.random() * (end - start);
}

function ri(start, end) {
  if (start == null) start = 0;
  if (end == null) end = 1;
  return Math.floor(start + Math.random() * (end - start + 1));
}

const Triangles = ({ position, onClick, rotation }) => {
  const { size } = useThree();
  const geom = useRef();

  const gridSize = 100;
  const width = Math.ceil(size.width / gridSize);
  const height = Math.ceil(size.height / gridSize);

  const grid = [];
  const verts = [];
  const faces = [];

  const cellSize = 18;
  const noise = 1;
  const speed = 1;
  const waveHeight = 20;

  const colors = [
    new THREE.Color(0x50514f),
    new THREE.Color(0xf25f5c),
    new THREE.Color(0xffe066),
    new THREE.Color(0x247ba0),
    new THREE.Color(0x70c1b3),
  ];

  for (let i = 0; i <= width; i++) {
    grid[i] = [];
    for (let j = 0; j <= height; j++) {
      const id = verts.length;
      const rnd = rn(0, noise);
      const newVertex = new THREE.Vector3(
        (i - width * 0.5) * cellSize + rnd,
        rnd,
        (height * 0.5 - j) * cellSize + rnd
      );
      verts.push(newVertex);
      grid[i][j] = id;
    }
  }

  for (let i = 1; i <= width; i++) {
    for (let j = 1; j <= height; j++) {
      let face1;
      let face2;
      const d = grid[i][j];
      const b = grid[i][j - 1];
      const c = grid[i - 1][j];
      const a = grid[i - 1][j - 1];
      if (ri(0, 1)) {
        face1 = new THREE.Face3(a, b, c);
        face2 = new THREE.Face3(b, c, d);
      } else {
        face1 = new THREE.Face3(a, b, d);
        face2 = new THREE.Face3(a, c, d);
      }

      face1.color = colors[Math.floor(Math.random() * colors.length)];
      face2.color = colors[Math.floor(Math.random() * colors.length)];

      faces.push(face1, face2);
    }
  }

  let step = 0;
  useFrame(() => {
    step++;
    for (let i = 0; i < geom.current.vertices.length; i++) {
      const v = geom.current.vertices[i];
      if (!v.oy) {
        v.oy = v.y;
      } else {
        const crossChop = Math.sqrt(speed) * Math.cos(-v.x - v.z * 0.7);
        const delta = Math.sin(
          speed * step * 0.02 -
            speed * v.x * 0.025 +
            speed * v.z * 0.015 +
            crossChop
        );
        const trochoidDelta = (delta + 1 ** 2) / 4;

        v.y = v.oy + trochoidDelta * waveHeight;
      }
    }

    geom.current.dynamic = true;
    geom.current.computeFaceNormals();
    geom.current.verticesNeedUpdate = true;
    geom.current.normalsNeedUpdate = true;
  });

  const matOpts = {
    shininess: 150,
    flatShading: true,
    vertexColors: THREE.FaceColors,
    side: THREE.DoubleSide,
  };

  return (
    <mesh onClick={onClick} position={position} rotation={rotation}>
      <geometry ref={geom} attach="geometry" vertices={verts} faces={faces} />
      <meshPhongMaterial attach="material" args={[matOpts]} />
    </mesh>
  );
};

Triangles.propTypes = {
  position: PropTypes.array,
  onClick: PropTypes.func,
  rotation: PropTypes.array,
};

Triangles.defaultProps = {
  position: [0, 0, 0],
  onClick: () => {},
  rotation: [0, 0, 0],
};

export default Triangles;
