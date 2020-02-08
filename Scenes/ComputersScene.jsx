/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, Suspense } from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { useDispatch } from 'react-redux';

const ComputersScene = props => {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, '/computers.glb', loader => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco-gltf/');
    loader.setDRACOLoader(dracoLoader);
  });

  const dispatch = useDispatch();

  const onMonitorHover = (id, state) =>
    dispatch({ type: 'MONITOR_HOVERED', id, state });

  const onMonitorPress = (id, target, position) =>
    dispatch({ type: 'MONITOR_PRESSED', id, target, position });
  return (
    <group ref={group} {...props}>
      <scene>
        <object3D name="Table" position={[0, 49.227291107177734, 0]}>
          <mesh name="Leg1" position={[97.5, -8.5, -47.5]}>
            <bufferGeometry attach="geometry" {...gltf.__$[2].geometry} />
            <meshStandardMaterial
              attach="material"
              {...gltf.__$[2].material}
              name="Steel - Worn Edges"
            />
          </mesh>
          <mesh name="Leg11" position={[-97.5, -8.5, -47.5]}>
            <bufferGeometry attach="geometry" {...gltf.__$[3].geometry} />
            <meshStandardMaterial
              attach="material"
              {...gltf.__$[3].material}
              name="Steel - Worn Edges"
            />
          </mesh>
          <mesh name="Leg12" position={[97.5, -8.5, 47.5]}>
            <bufferGeometry attach="geometry" {...gltf.__$[4].geometry} />
            <meshStandardMaterial
              attach="material"
              {...gltf.__$[4].material}
              name="Steel - Worn Edges"
            />
          </mesh>
          <mesh name="Leg13" position={[-97.5, -8.5, 47.5]}>
            <bufferGeometry attach="geometry" {...gltf.__$[5].geometry} />
            <meshStandardMaterial
              attach="material"
              {...gltf.__$[5].material}
              name="Steel - Worn Edges"
            />
          </mesh>
          <mesh name="Top" position={[0, 34, 0]}>
            <bufferGeometry attach="geometry" {...gltf.__$[6].geometry} />
            <meshStandardMaterial
              attach="material"
              {...gltf.__$[6].material}
              name="Aluminum - Brushed 90° - Shader"
            />
          </mesh>
        </object3D>
        <mesh
          onClick={() =>
            onMonitorPress(
              5,
              [-63.860862731933594, 105.26611328125, -26.79033660888672],
              [-63.860862731933594, 105.26611328125, -100]
            )
          }
          name="Cube5"
          position={[-63.860862731933594, 108.26611328125, -26.79033660888672]}
          rotation={[
            -3.141592653589793,
            1.2246468525851679e-16,
            -3.141592653589793,
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[7].geometry} />
          <meshStandardMaterial
            attach="material"
            color="blue"
            {...gltf.__$[7].material}
            name="Steel - Worn Edges"
          />
        </mesh>
        <mesh
          onPointerOver={() => onMonitorHover(4, true)}
          onPointerOut={() => onMonitorHover(4, false)}
          name="Cube4"
          position={[-0.34899747371673584, 108.26611328125, -26.79033660888672]}
          rotation={[
            -3.141592653589793,
            1.2246468525851679e-16,
            -3.141592653589793,
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[8].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[8].material}
            name="Steel - Worn Edges"
          />
        </mesh>
        <mesh
          onPointerOver={() => onMonitorHover(4, true)}
          onPointerOut={() => onMonitorHover(4, false)}
          name="Cube3"
          position={[59.6510009765625, 108.26611328125, -26.79033660888672]}
          rotation={[
            -3.141592653589793,
            1.2246468525851679e-16,
            -3.141592653589793,
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[9].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[9].material}
            name="Steel - Worn Edges"
          />
        </mesh>
        <mesh
          name="Cube1"
          position={[58.925453186035156, 108.26611328125, 25.41634178161621]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[10].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[10].material}
            name="Steel - Worn Edges"
          />
        </mesh>
        <mesh
          name="Cube"
          position={[0.06375996768474579, 108.26611328125, 25.41634178161621]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[11].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[11].material}
            name="Steel - Worn Edges"
          />
        </mesh>
        <mesh
          name="Cube2"
          position={[-64.771240234375, 108.26611328125, 25.41634178161621]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[12].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[12].material}
            name="Steel - Worn Edges"
          />
        </mesh>
        <mesh
          name="Cylinder5"
          position={[-77.10540771484375, 89.61669158935547, 17.078052520751953]}
          rotation={[1.5707962925663537, 0, -3.141592653589793]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[13].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[13].material}
            name="Copper - Worn"
          />
        </mesh>
        <mesh
          name="Cylinder4"
          position={[
            -13.593539237976074,
            89.61669158935547,
            17.078052520751953,
          ]}
          rotation={[1.5707962925663537, 0, -3.141592653589793]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[14].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[14].material}
            name="Copper - Worn"
          />
        </mesh>
        <mesh
          name="Cylinder3"
          position={[46.40645980834961, 89.61669158935547, 17.078052520751953]}
          rotation={[1.5707962925663537, 0, -3.141592653589793]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[15].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[15].material}
            name="Copper - Worn"
          />
        </mesh>
        <mesh
          name="Cylinder1"
          position={[72.16999053955078, 89.61669158935547, -18.45204734802246]}
          rotation={[1.5707962925663537, 0, 0]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[16].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[16].material}
            name="Copper - Worn"
          />
        </mesh>
        <mesh
          name="Cylinder"
          position={[13.30830192565918, 89.61669158935547, -18.45204734802246]}
          rotation={[1.5707962925663537, 0, 0]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[17].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[17].material}
            name="Copper - Worn"
          />
        </mesh>
        <mesh
          name="Cylinder2"
          position={[-51.52669906616211, 89.61669158935547, -18.45204734802246]}
          rotation={[1.5707962925663537, 0, 0]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[18].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[18].material}
            name="Copper - Worn"
          />
        </mesh>
        <mesh
          name="Table1"
          position={[0, 20.431137084960938, 84.82725524902344]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[19].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[19].material}
            name="Car Paint - Red - Flakes"
          />
        </mesh>
        <mesh
          name="Table"
          position={[0, 20.431137084960938, -85.17274475097656]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[20].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[20].material}
            name="Car Paint - Red - Flakes"
          />
        </mesh>
      </scene>
    </group>
  );
};

export default () => {
  return (
    <Suspense fallback={null}>
      <ComputersScene />
    </Suspense>
  );
};
