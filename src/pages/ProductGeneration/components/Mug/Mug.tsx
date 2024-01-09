import * as THREE from 'three';
import React, { ForwardRefExoticComponent, useRef, useState } from 'react';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useControls } from 'leva';
import { Euler, Vector3 } from 'three';
import { degToRad } from 'three/src/math/MathUtils';

type GLTFResult = GLTF & {
  nodes: {
    defaultMaterial_1: THREE.Mesh;
    defaultMaterial_2: THREE.Mesh;
    defaultMaterial_3: THREE.Mesh;
  };
  materials: {
    phong1: THREE.MeshStandardMaterial;
    ['printable.001']: THREE.MeshStandardMaterial;
  };
};

const Mug = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF('/models/mug_text.glb') as GLTFResult;
  const texture = useTexture('/textures/4.jpg');

  useControls({
    angle: {
      min: degToRad(15),
      max: degToRad(270),
      value: Math.PI / 4,
      step: 0.01,
      onChange: (angle) => {
        const x = Math.cos(angle);
        const z = Math.sin(angle);
        const angleOfRotation = Math.atan2(x, z);

        setRotation(() => new Euler(0, angleOfRotation, 0))
        setPosition((pos : Vector3) => new Vector3(x, pos.y, z));
      }
    },
    posY: {
      min: 0,
      max: 1,
      value: 0,
      step: 0.01,
      onChange: (newY) => {
        setPosition((pos) => new Vector3(pos.x, newY, pos.z))
      }
    },
    scale: {
      min: 0.5,
      max: 3,
      value: 1.5,
      step: 0.01,
      onChange: (newY) => {
        // setScale((pos) => new Vector3(pos.x, newY, pos.z))
      }
    },
  })

  const [position, setPosition] = useState(new Vector3(-0.35, 0, 0.8));
  const [rotation, setRotation] = useState(new Euler(0, 0, 0));
  const [scale, setScale] = useState(new Euler(0, 0, 0));


  return (
    <group {...props} dispose={null}>
      <group position={[0.029, 0, 0.029]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.247, 0.778, -0.029]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_1.geometry}
              material={materials.phong1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_2.geometry}
              material={nodes.defaultMaterial_2.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_3.geometry}
            >
              <meshBasicMaterial transparent opacity={0}/>

              <Decal
                debug
                position={position}
                rotation={rotation}
                scale={1}
              >
                <meshBasicMaterial
                  map={texture}
                  transparent
                  polygonOffset
                  polygonOffsetFactor={-1}
                />
              </Decal>

            </mesh>

          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models/mug_text.glb');

export default Mug;