/*
Modelo hecho en Blender
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Snowman(props) {
  const { nodes, materials } = useGLTF("/assets/models/snowman.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cuerpo.geometry}
        material={materials.Nieve}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabeza.geometry}
        material={materials.Nieve}
        position={[0, 1.5, 0]}
        scale={0.6}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nariz.geometry}
        material={materials.Nariz}
        position={[0, 1.5, 0.75]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.1, 0.2, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.OjoDerecho.geometry}
        material={materials.Ojos}
        position={[-0.25, 1.688, 0.5]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.OjoIzquierdo.geometry}
        material={materials.Ojos}
        position={[0.25, 1.688, 0.5]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Boton1.geometry}
        material={materials.Ojos}
        position={[0, 0.5, 0.867]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Boton2.geometry}
        material={materials.Ojos}
        position={[0, 0.035, 1]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Boton3.geometry}
        material={materials.Ojos}
        position={[0, -0.413, 0.92]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bufanda.geometry}
        material={materials.Bufanda}
        position={[0, 1, 0]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sombrero.geometry}
        material={materials.Sombrero}
        position={[0, 2.276, 0]}
        scale={0.3}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/snowman.glb");