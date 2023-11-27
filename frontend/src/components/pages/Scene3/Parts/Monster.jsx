import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Monster(props) {
  const { nodes, materials } = useGLTF("/assets/models/monster.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={[-0.01, 0.01, 0.01]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Anorexy_Anorexy_0.geometry}
            material={materials.Anorexy}
            rotation={[-Math.PI, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Entity_1_1_Entity_1_1_0.geometry}
            material={materials.Entity_1_1}
            rotation={[-Math.PI, 0, 0]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/monster.glb");