import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Photo(props) {
  const { nodes, materials } = useGLTF("/assets/models/photo.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[0.036, 0.119, 0]}
        rotation={[-Math.PI, 0, Math.PI / 2]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials["front.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials["back.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/photo.glb");