import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Notebook(props) {
  const notebookRef = useRef(); // Crear una referencia

  const { nodes, materials } = useGLTF("/assets/models/notebook.glb");

  return (
    <group ref={notebookRef} position={[-9, 0, 0]} {...props} dispose={null}>
      <group rotation={[-Math.PI / 1, 0, 0]}>
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.secretpaper_line5_0.geometry}
            material={materials.line5}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.secretpaper_line3_0.geometry}
            material={materials.line3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.secretpaper_secretpaper_0.geometry}
            material={materials.secretpaper}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/notebook.glb");
