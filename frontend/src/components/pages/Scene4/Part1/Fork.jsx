
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Fork(props) {
  const { nodes, materials } = useGLTF("/assets/models/fork.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fork__0.geometry}
        material={materials["Scene_-_Root"]}
        position={[-0.08, -0.054, 0]}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/fork.glb");