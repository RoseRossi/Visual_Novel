import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function BackScene(props) {
  const { nodes, materials } = useGLTF("/assets/models/scene/backscene.glb");
  return (
    <group {...props} dispose={null}>

      <ambientLight intensity={0.1} />
      <directionalLight position={[5, 5, 5]} intensity={0.2}/>

      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[2.934, -73.896, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lampadaire_0.geometry}
            material={materials.lampadaire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lampadaire_1.geometry}
            material={materials["lampadaire-verre"]}
          />
        </group>
        <group position={[2.006, -67.38, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["fence-coin_0"].geometry}
            material={materials["fence-emit"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["fence-coin_1"].geometry}
            material={materials["fence-or-classic"]}
          />
        </group>
        <group position={[2.006, -66.131, 0.443]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.fence_0.geometry}
            material={materials["fence-classic"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.fence_1.geometry}
            material={materials["fence-or-classic"]}
          />
        </group>
        <group
          position={[2.681, -55.077, 0]}
          rotation={[0, 0, 1.827]}
          scale={0.693}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tree001_0.geometry}
            material={materials["arbre-tronc"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tree001_0_1.geometry}
            material={materials["arbre-tronc"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tree001_0_2.geometry}
            material={materials["arbre-tronc"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tree001_1.geometry}
            material={materials["arbre-feuille"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tree001_2.geometry}
            material={materials["arbre-feuille-variante"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tree001_3.geometry}
            material={materials["arbre-feuille-variante2"]}
          />
        </group>
        <group
          position={[2.65, -52.645, 0]}
          rotation={[Math.PI / 2, 0.623, -Math.PI]}
          scale={0.137}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Leaves0119_14_S_0.geometry}
            material={materials.Leaves0119_14_S}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Leaves0119_14_S_1.geometry}
            material={materials.TexturesCom_Leaves0119_1_alphamasked_S}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Leaves0119_14_S_2.geometry}
            material={materials.TexturesCom_Leaves0119_2_alphamasked_S}
          />
        </group>
        <group
          position={[1.654, -67.14, 0]}
          rotation={[1.669, -0.867, 0.087]}
          scale={0.422}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["3td_Africa_Grass01044_0"].geometry}
            material={materials["3td_Africa_Grass01"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["3td_Africa_Grass01044_1"].geometry}
            material={materials["DryWeeds-CC0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["3td_Africa_Grass01044_2"].geometry}
            material={materials.fgrass1_v2_256}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat1-structure_0"].geometry}
          material={materials["bat1-structure"]}
          position={[-2.673, -70.706, 5.811]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat11-structure_0"].geometry}
          material={materials["bat11-structure"]}
          position={[8.122, 14.563, 3.341]}
          rotation={[0, 0, -0.703]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat9-toiture_0"].geometry}
          material={materials["bat9-toiture"]}
          position={[-0.035, -1.307, 3.948]}
          rotation={[0, 0, -0.368]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat10-toiture_0"].geometry}
          material={materials["bat10-toiture."]}
          position={[4.294, 8.618, 2.923]}
          rotation={[0, 0, -0.58]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat6-fenetres_0"].geometry}
          material={materials["bat6-fenetres"]}
          position={[-0.928, -28.448, 1.238]}
          rotation={[-Math.PI / 2, 1.568, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat5-rembarde_0"].geometry}
          material={materials["bat5-rembarde"]}
          position={[-0.251, -41.977, 1.526]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat3-rembarde_0"].geometry}
          material={materials["bat3-rembarde"]}
          position={[-0.026, -54.755, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat6-moulure_0"].geometry}
          material={materials["bat6-moulure"]}
          position={[-0.596, -30.825, 2.838]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat7-moulure_0"].geometry}
          material={materials["bat7-moulure"]}
          position={[0.322, -12.899, 3.538]}
          rotation={[0, 0, -0.093]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat7-fenetres_0"].geometry}
          material={materials["bat7-fenetres"]}
          position={[-0.397, -18.866, 1.121]}
          rotation={[Math.PI / 2, 1.478, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat7-structure_0"].geometry}
          material={materials["bat7-structure"]}
          position={[0.047, -18.918, 0]}
          rotation={[0, 0, -0.093]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat8-structure_0"].geometry}
          material={materials["bat8-structure"]}
          position={[1.298, -9.732, 0]}
          rotation={[0, 0, -0.182]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat8-moulure_0"].geometry}
          material={materials["bat8-moulure"]}
          position={[0.727, -13.723, 6.212]}
          rotation={[0, 0, -0.182]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat8-fenetres_0"].geometry}
          material={materials["bat8-fenetres"]}
          position={[1.816, -6.703, 2.348]}
          rotation={[0, 0, -0.182]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ground3_0.geometry}
          material={materials.ground3}
          position={[8.133, -69.683, -0.092]}
          scale={0.035}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat9-fenetres_0"].geometry}
          material={materials["bat9-fenetres"]}
          position={[4.927, 2.324, 3.893]}
          rotation={[0, 0, -0.368]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat9-structure_0"].geometry}
          material={materials["bat9-structure"]}
          position={[4.39, 0.065, 0]}
          rotation={[0, 0, -0.368]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat9-moulure_0"].geometry}
          material={materials["bat9-moulure"]}
          position={[4.102, 0.176, 0.337]}
          rotation={[0, 0, -0.368]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat10-fenetres_0"].geometry}
          material={materials["bat10-fenetres"]}
          position={[5.985, 5.169, 4.974]}
          rotation={[0, 0, -0.58]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat10-moulure_0"].geometry}
          material={materials["bat10-moulure"]}
          position={[7.033, 6.823, 0.337]}
          rotation={[0, 0, -0.58]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat10-structure_0"].geometry}
          material={materials["bat10-structure"]}
          position={[7.305, 6.645, 0]}
          rotation={[0, 0, -0.58]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat11-moulure_0"].geometry}
          material={materials["bat11-moulure"]}
          position={[11.338, 13.19, 0.156]}
          rotation={[0, 0, -0.703]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat11-fenetres_0"].geometry}
          material={materials["bat11-fenetres"]}
          position={[13.048, 15.231, 1.034]}
          rotation={[0, 0, -0.703]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat2-moulure_0"].geometry}
          material={materials["bat2-moulure"]}
          position={[-2.391, -64.026, 3.341]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat2-fenetres_0"].geometry}
          material={materials["bat2-fenetres"]}
          position={[0.709, -64.018, 1.103]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat2-structure_0"].geometry}
          material={materials["bat2-structure"]}
          position={[0.875, -64.024, 0.337]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat3-fenetres_0"].geometry}
          material={materials["bat3-fenetres"]}
          position={[-0.344, -55.195, 1.117]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat12-fenetres_0"].geometry}
          material={materials["bat12-fenetres"]}
          position={[17.966, 19.875, 1.125]}
          rotation={[0, 0, -0.894]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat12-structure_0"].geometry}
          material={materials["bat12-structure"]}
          position={[15.434, 17.14, 0.147]}
          rotation={[0, 0, -0.894]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat12-moulure_0"].geometry}
          material={materials["bat12-moulure"]}
          position={[16.652, 18.609, 2.682]}
          rotation={[0, 0, -0.894]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat1-fenetres_0"].geometry}
          material={materials["bat1-fenetres"]}
          position={[0.494, -72.446, 1.189]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat1-toiture_0"].geometry}
          material={materials["bat1-toiture"]}
          position={[-2.17, -68.045, 13.283]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat3-toiture_0"].geometry}
          material={materials["bat3-toiture"]}
          position={[-2.17, -54.427, 9.219]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat5-toiture_0"].geometry}
          material={materials["bat5-toiture"]}
          position={[-0.993, -39.522, 10.849]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat2-toiture_0"].geometry}
          material={materials["bat2-toiture"]}
          position={[-3.033, -65.352, 13.374]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat12-toiture_0"].geometry}
          material={materials["bat12-toiture"]}
          position={[16.818, 22.446, 13.524]}
          rotation={[0, 0, -0.894]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat11-toiture_0"].geometry}
          material={materials["bat11-toiture"]}
          position={[10.736, 17.662, 9.878]}
          rotation={[0, 0, -0.703]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat7-toiture_0"].geometry}
          material={materials["bat7-toiture"]}
          position={[-2.038, -16.407, 11.007]}
          rotation={[0, 0, -0.093]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat6-toiture_0"].geometry}
          material={materials["bat6-toiture"]}
          position={[-1.795, -25.355, 8.803]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat4-fenetres_0"].geometry}
          material={materials["bat4-fenetres"]}
          position={[-0.645, -51.751, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat4-structure_0"].geometry}
          material={materials["bat4-structure"]}
          position={[0.222, -51.751, 0.147]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat4-toiture_0"].geometry}
          material={materials["bat4-toiture"]}
          position={[-3.278, -49.306, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat5-fenetres_0"].geometry}
          material={materials["bat5-fenetres"]}
          position={[-0.325, -41.741, 9.585]}
          rotation={[0, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat8-toiture_0"].geometry}
          material={materials["bat8-toiture"]}
          position={[1.298, -9.732, 0]}
          rotation={[0, 0, -0.182]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat3-structure_0"].geometry}
          material={materials["bat3-structure"]}
          position={[-0.278, -56.851, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat5-structure_0"].geometry}
          material={materials["bat5-structure"]}
          position={[-0.026, -43.283, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat6-structure-src001_0"].geometry}
          material={materials["bat6-structure"]}
          position={[-0.226, -28.442, 0.208]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat1-structure002_0"].geometry}
          material={materials["bat1-structure"]}
          position={[25.809, 36.645, 5.811]}
          rotation={[0, 0, 0.656]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat11-structure002_0"].geometry}
          material={materials["bat11-structure"]}
          position={[18.489, -62.075, 3.341]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat9-toiture002_0"].geometry}
          material={materials["bat9-toiture"]}
          position={[17.62, -51.895, 3.948]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat10-toiture002_0"].geometry}
          material={materials["bat10-toiture."]}
          position={[17.838, -41.885, 2.923]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat6-fenetres002_0"].geometry}
          material={materials["bat6-fenetres"]}
          position={[24.03, 3.28, 1.238]}
          rotation={[0, 0, -0.653]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat3-rembarde002_0"].geometry}
          material={materials["bat3-rembarde"]}
          position={[33.439, 22.391, 0]}
          rotation={[0, 0, 0.656]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat6-moulure002_0"].geometry}
          material={materials["bat6-moulure"]}
          position={[25.21, 5.369, 2.838]}
          rotation={[0, 0, -0.653]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat7-moulure002_0"].geometry}
          material={materials["bat7-moulure"]}
          position={[14.688, -31.163, 3.538]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat7-fenetres002_0"].geometry}
          material={materials["bat7-fenetres"]}
          position={[14.851, -25.155, 1.121]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat7-structure002_0"].geometry}
          material={materials["bat7-structure"]}
          position={[14.404, -25.145, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat8-structure002_0"].geometry}
          material={materials["bat8-structure"]}
          position={[14.2, -34.438, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat8-moulure002_0"].geometry}
          material={materials["bat8-moulure"]}
          position={[14.038, -30.409, 6.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat8-fenetres002_0"].geometry}
          material={materials["bat8-fenetres"]}
          position={[14.241, -37.51, 2.348]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat9-fenetres002_0"].geometry}
          material={materials["bat9-fenetres"]}
          position={[14.297, -57.067, 3.893]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat9-moulure002_0"].geometry}
          material={materials["bat9-moulure"]}
          position={[14.293, -54.766, 0.337]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat10-fenetres002_0"].geometry}
          material={materials["bat10-fenetres"]}
          position={[14.533, -39.926, 4.974]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat10-moulure002_0"].geometry}
          material={materials["bat10-moulure"]}
          position={[14.562, -41.883, 0.337]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat10-structure002_0"].geometry}
          material={materials["bat10-structure"]}
          position={[14.238, -41.883, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat11-moulure002_0"].geometry}
          material={materials["bat11-moulure"]}
          position={[15.148, -63.108, 0.156]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat11-fenetres002_0"].geometry}
          material={materials["bat11-fenetres"]}
          position={[15.164, -65.77, 1.034]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat2-moulure002_0"].geometry}
          material={materials["bat2-moulure"]}
          position={[29.659, 31.18, 3.341]}
          rotation={[0, 0, 0.656]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat2-fenetres002_0"].geometry}
          material={materials["bat2-fenetres"]}
          position={[27.207, 29.283, 1.103]}
          rotation={[0, 0, 0.656]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat2-structure002_0"].geometry}
          material={materials["bat2-structure"]}
          position={[27.072, 29.186, 0.337]}
          rotation={[0, 0, 0.656]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat3-fenetres002_0"].geometry}
          material={materials["bat3-fenetres"]}
          position={[33.422, 22.933, 1.117]}
          rotation={[0, 0, 0.656]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat12-fenetres002_0"].geometry}
          material={materials["bat12-fenetres"]}
          position={[14.676, -72.571, 1.125]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat12-structure002_0"].geometry}
          material={materials["bat12-structure"]}
          position={[14.127, -68.884, 0.147]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat12-moulure002_0"].geometry}
          material={materials["bat12-moulure"]}
          position={[14.51, -70.754, 2.682]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat1-fenetres002_0"].geometry}
          material={materials["bat1-fenetres"]}
          position={[22.238, 36.093, 1.189]}
          rotation={[0, 0, 0.656]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat1-toiture002_0"].geometry}
          material={materials["bat1-toiture"]}
          position={[27.033, 34.23, 13.283]}
          rotation={[0, 0, 0.656]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat3-toiture002_0"].geometry}
          material={materials["bat3-toiture"]}
          position={[35.339, 23.439, 9.219]}
          rotation={[0, 0, 0.656]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat2-toiture002_0"].geometry}
          material={materials["bat2-toiture"]}
          position={[29.359, 32.623, 13.374]}
          rotation={[0, 0, 0.656]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat12-toiture002_0"].geometry}
          material={materials["bat12-toiture"]}
          position={[17.399, -73.285, 13.524]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat11-toiture002_0"].geometry}
          material={materials["bat11-toiture"]}
          position={[18.5, -66.129, 9.878]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat7-toiture002_0"].geometry}
          material={materials["bat7-toiture"]}
          position={[16.713, -27.452, 11.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat6-toiture002_0"].geometry}
          material={materials["bat6-toiture"]}
          position={[22.841, 0.296, 8.803]}
          rotation={[0, 0, -0.653]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat4-fenetres002_0"].geometry}
          material={materials["bat4-fenetres"]}
          position={[35.762, 20.387, 0.293]}
          rotation={[0, 0, 0.656]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat4-structure002_0"].geometry}
          material={materials["bat4-structure"]}
          position={[35.075, 19.859, 0.147]}
          rotation={[0, 0, 0.656]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat4-toiture002_0"].geometry}
          material={materials["bat4-toiture"]}
          position={[39.34, 20.056, 0]}
          rotation={[0, 0, 0.656]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat8-toiture002_0"].geometry}
          material={materials["bat8-toiture"]}
          position={[14.2, -34.438, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat3-structure002_0"].geometry}
          material={materials["bat3-structure"]}
          position={[32.361, 24.205, 0]}
          rotation={[0, 0, 0.656]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat6-structure-src002_0"].geometry}
          material={materials["bat6-structure"]}
          position={[23.469, 3.701, 0.208]}
          rotation={[0, 0, -0.653]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat5-structure003_0"].geometry}
          material={materials["bat5-structure"]}
          position={[28.116, -47.533, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat3-structure003_0"].geometry}
          material={materials["bat3-structure"]}
          position={[18.848, -3.549, 0]}
          rotation={[0, 0, -0.376]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat5-fenetres003_0"].geometry}
          material={materials["bat5-fenetres"]}
          position={[28.414, -49.075, 9.585]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat4-toiture003_0"].geometry}
          material={materials["bat4-toiture"]}
          position={[31.368, -41.51, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat4-structure003_0"].geometry}
          material={materials["bat4-structure"]}
          position={[27.868, -39.065, 0.147]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat9-structure002_0"].geometry}
          material={materials["bat9-structure"]}
          position={[13.985, -54.766, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat4-fenetres003_0"].geometry}
          material={materials["bat4-fenetres"]}
          position={[28.734, -39.065, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat2-toiture003_0"].geometry}
          material={materials["bat2-toiture"]}
          position={[19.172, -15.988, 13.374]}
          rotation={[0, 0, -0.086]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat5-toiture003_0"].geometry}
          material={materials["bat5-toiture"]}
          position={[29.082, -51.294, 10.849]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat3-toiture003_0"].geometry}
          material={materials["bat3-toiture"]}
          position={[19.717, -6.498, 9.219]}
          rotation={[0, 0, -0.376]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat1-toiture003_0"].geometry}
          material={materials["bat1-toiture"]}
          position={[19.081, -13.728, 13.283]}
          rotation={[0, 0, -0.24]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat1-fenetres003_0"].geometry}
          material={materials["bat1-fenetres"]}
          position={[17.541, -8.82, 1.189]}
          rotation={[0, 0, -0.24]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat3-fenetres003_0"].geometry}
          material={materials["bat3-fenetres"]}
          position={[18.3, -5.112, 1.117]}
          rotation={[0, 0, -0.376]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat2-structure003_0"].geometry}
          material={materials["bat2-structure"]}
          position={[15.165, -16.975, 0.337]}
          rotation={[0, 0, -0.086]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat2-fenetres003_0"].geometry}
          material={materials["bat2-fenetres"]}
          position={[15.329, -16.995, 1.103]}
          rotation={[0, 0, -0.086]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat2-moulure003_0"].geometry}
          material={materials["bat2-moulure"]}
          position={[18.418, -17.254, 3.341]}
          rotation={[0, 0, -0.086]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat3-rembarde003_0"].geometry}
          material={materials["bat3-rembarde"]}
          position={[17.843, -5.405, 0]}
          rotation={[0, 0, -0.376]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat5-rembarde003_0"].geometry}
          material={materials["bat5-rembarde"]}
          position={[28.341, -48.839, 1.526]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["bat1-structure003_0"].geometry}
          material={materials["bat1-structure"]}
          position={[20.203, -11.263, 5.811]}
          rotation={[0, 0, -0.24]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ground1_0.geometry}
          material={materials.ground1}
          position={[8.133, -69.683, -0.092]}
          scale={0.035}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ground2_0.geometry}
          material={materials.ground2}
          position={[8.133, -69.683, -0.092]}
          scale={0.035}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.trottoir_0.geometry}
          material={materials.trottoir}
          position={[8.133, -69.683, -0.092]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.zeppelin_0.geometry}
          material={materials.zeppelin}
          position={[244.656, 257.971, 202.071]}
          rotation={[Math.PI / 2, -0.121, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.caisse004_0.geometry}
          material={materials.caisse}
          position={[13.772, -56.4, 0.215]}
          rotation={[0, 0, -1.011]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_0.geometry}
          material={materials.tonneau}
          position={[14.114, -43.169, 0.435]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.planche001_0.geometry}
          material={materials.planche}
          position={[13.993, -43.638, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cerclage_0.geometry}
          material={materials.cerclage}
          position={[2.675, -39.488, 0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.terre_0.geometry}
          material={materials.terre}
          position={[0.171, -48.623, 0.021]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/scene/backscene.glb");