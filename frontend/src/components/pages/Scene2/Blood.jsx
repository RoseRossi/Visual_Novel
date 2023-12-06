import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Blood(props) {
  const { nodes, materials } = useGLTF("/assets/models/scene//blood.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Remesh_Mat_0.geometry}
        material={materials.material}
        scale={0.003}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/scene//blood.glb");
