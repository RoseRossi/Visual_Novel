import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Bag(props) {
  const { nodes, materials } = useGLTF("/assets/models/bag.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[ 0, 0, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bag_Bag_0.geometry}
        material={materials.material}
        scale={1.404}
      />
    </group>
    </group>
  );
}

export default Bag;
useGLTF.preload("/assets/models/bag.glb");
