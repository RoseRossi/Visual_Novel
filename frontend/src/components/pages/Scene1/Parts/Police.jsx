import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Police(props) {
  const { nodes, materials } = useGLTF("/assets/models/characters/police.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.policeman_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.policeman_gun}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.policeman_head}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/characters/police.glb");

