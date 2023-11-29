import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Rag(props) {
  const { nodes, materials } = useGLTF("/assets/models/bloody_rag.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Clue_BloodRagpPlane1_lambert1_0.geometry}
        material={materials.lambert1}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/bloody_rag.glb");