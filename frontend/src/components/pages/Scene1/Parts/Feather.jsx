import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Feather(props) {
  const { nodes, materials } = useGLTF("/assets/models/quill.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Quill_LP_01_-_Default_0"].geometry}
        material={materials["01_-_Default"]}
        position={[-0.029, 0.383, -2.469]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.482}
      />
    </group>
  );
}

useGLTF.preload("/quill.glb");