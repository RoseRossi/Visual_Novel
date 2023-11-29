import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Bones(props) {
  const { nodes, materials } = useGLTF("/assets/models/bones.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[ -1, 0.5, 0.5]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.Cemetery_MATSG}
      />
    </group>
    </group>
  );
}

useGLTF.preload("/assets/models/bones.glb");