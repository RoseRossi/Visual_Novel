import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Ring(props) {
  const { nodes, materials } = useGLTF("/assets/models/scene/ring.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.material0}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/scene/ring.glb");