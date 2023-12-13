import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Hand(props) {
  const { nodes, materials } = useGLTF("/assets/models/hand.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mainMeshNode_Material_0_0.geometry}
        material={materials.Material_0}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/hand.glb");