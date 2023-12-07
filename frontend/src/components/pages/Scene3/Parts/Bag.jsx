import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/assets/models/bag.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bag_Bag_0.geometry}
        material={materials.material}
        scale={1.404}
      />
    </group>
  );
}

export default Bag;
useGLTF.preload("/assets/models/bag.glb");
