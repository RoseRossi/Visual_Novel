import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Lab(props) {
  const { nodes, materials } = useGLTF("/assets/models/lab.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder023.geometry}
        material={materials.ceramica}
        position={[6.294, -4.779, 1.304]}
        rotation={[0, 0.469, 0]}
        scale={0.598}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder019.geometry}
        material={materials.ceramica}
        position={[1.593, -4.779, 1.195]}
        rotation={[Math.PI, -0.511, Math.PI]}
        scale={0.598}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder018.geometry}
        material={materials.cristal}
        position={[3.617, -4.376, 0.904]}
        scale={0.957}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder017.geometry}
        material={materials.cristal}
        position={[-7.958, -4.157, 0.784]}
        scale={[0.336, 0.63, 0.336]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials.ceramica}
        position={[-9.165, -4.779, -1.961]}
        rotation={[Math.PI, -0.511, Math.PI]}
        scale={0.598}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder014.geometry}
        material={materials.cristal}
        position={[-5.178, 4.346, -3.223]}
        scale={0.674}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011.geometry}
        material={materials.ceramica}
        position={[5.661, -4.779, -3.316]}
        scale={0.598}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={materials.cristal}
        position={[-2.272, -4.157, -6.032]}
        scale={[0.336, 0.63, 0.336]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={materials.cristal}
        position={[-5.18, 1.53, -3.291]}
        scale={0.957}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={materials.cristal}
        position={[3.533, -4.473, -4.283]}
        scale={0.957}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["metal plomo"]}
        position={[0.647, -5.18, -5.647]}
        scale={[1.622, 0.271, 2.004]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials["metal plomo"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_2.geometry}
          material={materials.metal}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials.cristal}
        position={[-1.359, -4.82, -1.575]}
        scale={[0.704, 0.864, 0.704]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.plastico}
        position={[2.361, -4.42, -1.24]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.8, 0.59, 0.8]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials.cristal}
          position={[0, 0.223, 1.991]}
          scale={[0.259, 1.624, 0.259]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.madera}
        position={[-2.218, -5.655, -6.36]}
        scale={[9.955, 13.525, 11.65]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder022.geometry}
        material={materials.ceramica}
        position={[5.72, -5.149, -9.408]}
        rotation={[0, -1.5, 0]}
        scale={[0.185, 0.212, 0.177]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder021.geometry}
        material={materials.ceramica}
        position={[-2.087, -5.149, -9.408]}
        rotation={[0, -0.64, 0]}
        scale={[0.185, 0.212, 0.177]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder016.geometry}
        material={materials.cristal}
        position={[-10.788, 0.74, -5.462]}
        rotation={[0, 0.718, 0]}
        scale={[0.544, 0.605, 0.544]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder015.geometry}
        material={materials.ceramica}
        position={[-6.983, -5.149, -0.147]}
        rotation={[Math.PI, -0.913, Math.PI]}
        scale={[0.185, 0.212, 0.177]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder013.geometry}
        material={materials.cristal}
        position={[-5.847, -5.25, -0.896]}
        rotation={[0, 1.018, 0]}
        scale={[0.623, 0.241, 0.623]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder012.geometry}
        material={materials.ceramica}
        position={[-1.109, -5.149, 0.182]}
        rotation={[0, 1.018, 0]}
        scale={[0.185, 0.212, 0.177]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials.cristal}
        position={[-4.115, -4.784, -0.856]}
        rotation={[-Math.PI, 0.937, -Math.PI]}
        scale={[0.623, 0.693, 0.623]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials.cristal}
        position={[5.28, 0.74, -5.462]}
        scale={[0.544, 0.605, 0.544]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials.cristal}
        position={[5.555, -4.75, -1.744]}
        rotation={[0, 1.018, 0]}
        scale={[0.623, 0.693, 0.623]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.lata}
        position={[-5.224, 0.32, -3.78]}
        rotation={[0, -0.505, 0]}
        scale={2.208}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus001.geometry}
        material={materials["metal plomo"]}
        position={[-5.235, -0.053, -4.026]}
        rotation={[-Math.PI, 1.349, 0]}
        scale={[2.23, 3.001, 2.23]}
      />
      <group
        position={[-5.221, -5.228, -3.657]}
        rotation={[Math.PI, -1.319, Math.PI]}
        scale={[2.048, 0.421, 2.048]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.oro}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials.metal}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/lab.glb");