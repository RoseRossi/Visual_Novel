import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Detective3(props) {
  const { nodes, materials } = useGLTF("/assets/models/characters/detective.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["50S_MAN_NEW_HEAD058_WinterCoat001_0"].geometry}
            material={materials["WinterCoat.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["50S_MAN_NEW_HEAD058_WinterCoat001_0_1"].geometry}
            material={materials["WinterCoat.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["50S_MAN_NEW_HEAD058_WinterCoat001_0_2"].geometry}
            material={materials["WinterCoat.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["50S_MAN_NEW_HEAD058_WinterCoat001_0_3"].geometry}
            material={materials["WinterCoat.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["50S_MAN_NEW_HEAD058_WinterCoat001_0_4"].geometry}
            material={materials["WinterCoat.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["50S_MAN_NEW_HEAD058_WinterCoat001_0_5"].geometry}
            material={materials["WinterCoat.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["50S_MAN_NEW_HEAD058_WinterCoat001_0_6"].geometry}
            material={materials["WinterCoat.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["50S_MAN_NEW_HEAD058_WinterCoat001_0_7"].geometry}
            material={materials["WinterCoat.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["50S_MAN_NEW_HEAD058_WinterCoat001_0_8"].geometry}
            material={materials["WinterCoat.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["50S_MAN_NEW_HEAD058_WinterCoat001_0_9"].geometry}
            material={materials["WinterCoat.001"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD_11004_0"].geometry}
          material={materials["11.004"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD002_SHOES_0"].geometry}
          material={materials.SHOES}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD003_Material006_0"].geometry}
          material={materials["Material.006"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD004_Material006_0"].geometry}
          material={materials["Material.006"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD005_Material006_0"].geometry}
          material={materials["Material.006"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD006_Material006_0"].geometry}
          material={materials["Material.006"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD007_Material006_0"].geometry}
          material={materials["Material.006"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD008_Material006_0"].geometry}
          material={materials["Material.006"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD009_Material006_0"].geometry}
          material={materials["Material.006"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD010_Material006_0"].geometry}
          material={materials["Material.006"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD011_WinterCoat001_0"].geometry}
          material={materials["WinterCoat.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD012_WinterCoat001_0"].geometry}
          material={materials["WinterCoat.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD013_WinterCoat001_0"].geometry}
          material={materials["WinterCoat.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD014_WinterCoat001_0"].geometry}
          material={materials["WinterCoat.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD015_WinterCoat001_0"].geometry}
          material={materials["WinterCoat.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD016_WinterCoat001_0"].geometry}
          material={materials["WinterCoat.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD017_WinterCoat001_0"].geometry}
          material={materials["WinterCoat.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD018_WinterCoat001_0"].geometry}
          material={materials["WinterCoat.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD019_WinterCoat001_0"].geometry}
          material={materials["WinterCoat.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD020_WinterCoat001_0"].geometry}
          material={materials["WinterCoat.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD021_WinterCoat001_0"].geometry}
          material={materials["WinterCoat.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD022_WinterCoat001_0"].geometry}
          material={materials["WinterCoat.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD023_WinterCoat001_0"].geometry}
          material={materials["WinterCoat.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD024_11004_0"].geometry}
          material={materials["11.004"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD025_11004_0"].geometry}
          material={materials["11.004"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD026_11004_0"].geometry}
          material={materials["11.004"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD027_11004_0"].geometry}
          material={materials["11.004"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD028_11004_0"].geometry}
          material={materials["11.004"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD029_11004_0"].geometry}
          material={materials["11.004"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD030_11004_0"].geometry}
          material={materials["11.004"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD031_11004_0"].geometry}
          material={materials["11.004"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD032_11004_0"].geometry}
          material={materials["11.004"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD033_11004_0"].geometry}
          material={materials["11.004"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD034_11004_0"].geometry}
          material={materials["11.004"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD035_11004_0"].geometry}
          material={materials["11.004"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD036_11004_0"].geometry}
          material={materials["11.004"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD037_11004_0"].geometry}
          material={materials["11.004"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD038_11004_0"].geometry}
          material={materials["11.004"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD039_FBHead_preview_mat_0"].geometry}
          material={materials.FBHead_preview_mat}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD040_FBHead_preview_mat_0"].geometry}
          material={materials.FBHead_preview_mat}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD042_m_hair_0"].geometry}
          material={materials.m_hair}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD043_m_hair001_0"].geometry}
          material={materials["m_hair.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD044_m_hair001_0"].geometry}
          material={materials["m_hair.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD045_m_hair001_0"].geometry}
          material={materials["m_hair.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD046_m_hair001_0"].geometry}
          material={materials["m_hair.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD047_m_hair001_0"].geometry}
          material={materials["m_hair.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD048_m_hair001_0"].geometry}
          material={materials["m_hair.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD049_m_hair001_0"].geometry}
          material={materials["m_hair.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD050_m_hair001_0"].geometry}
          material={materials["m_hair.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD051_11004_0"].geometry}
          material={materials["11.004"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD052_11004_0"].geometry}
          material={materials["11.004"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD053_Scene_-_Root002_0"].geometry}
          material={materials["Scene_-_Root.002"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD054_Material008_0"].geometry}
          material={materials["Material.008"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD055_Material010_0"].geometry}
          material={materials["Material.010"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD056_WinterCoat001_0"].geometry}
          material={materials["WinterCoat.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD057_WinterCoat001_0"].geometry}
          material={materials["WinterCoat.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD059_WinterCoat001_0"].geometry}
          material={materials["WinterCoat.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD060_WinterCoat001_0"].geometry}
          material={materials["WinterCoat.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD061_WinterCoat001_0"].geometry}
          material={materials["WinterCoat.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["50S_MAN_NEW_HEAD062_WinterCoat001_0"].geometry}
          material={materials["WinterCoat.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

export default Detective3;
useGLTF.preload("/assets/models/characters/detective.glb");