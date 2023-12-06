import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Body(props) {
  const { nodes, materials } = useGLTF("/assets/models/body_bag.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Bodybag_1_LOD0_BodyBad_0.geometry}
        material={materials.BodyBad}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/body_bag.glb");

