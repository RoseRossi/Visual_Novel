import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function BackScene(props) {
  const { nodes, materials } = useGLTF("/assets/models/scene/unbs.glb");
  return (
    <group {...props} dispose={null}>
      <ambientLight intensity={0.1} />
      <directionalLight position={[5, 5, 5]} intensity={0.2}/>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group
          position={[0.005, -0.063, -0.032]}
          rotation={[-0.063, 0.034, 2.797]}
        >
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
              geometry={nodes.tree001_0001.geometry}
              material={materials["arbre-tronc"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tree001_0002.geometry}
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
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["3td_Africa_Grass01044_0"].geometry}
            material={materials["3td_Africa_Grass01"]}
            position={[1.654, -67.14, 0]}
            rotation={[1.669, -0.867, 0.087]}
            scale={0.422}
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
            geometry={nodes["bat1-structure_0"].geometry}
            material={materials["bat1-structure"]}
            position={[-2.673, -70.706, 5.811]}
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
            geometry={nodes["bat10-fenetres002_0"].geometry}
            material={materials["bat10-fenetres"]}
            position={[14.533, -39.925, 4.974]}
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
            geometry={nodes["bat10-toiture002_0"].geometry}
            material={materials["bat10-toiture."]}
            position={[17.838, -41.885, 2.923]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["bat11-fenetres002_0"].geometry}
            material={materials["bat11-fenetres"]}
            position={[15.164, -65.771, 1.034]}
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
            geometry={nodes["bat11-structure002_0"].geometry}
            material={materials["bat11-structure"]}
            position={[18.489, -62.075, 3.341]}
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
            geometry={nodes["bat12-fenetres002_0"].geometry}
            material={materials["bat12-fenetres"]}
            position={[14.676, -72.571, 1.125]}
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
            geometry={nodes["bat12-structure002_0"].geometry}
            material={materials["bat12-structure"]}
            position={[14.127, -68.884, 0.147]}
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
            geometry={nodes["bat2-fenetres_0"].geometry}
            material={materials["bat2-fenetres"]}
            position={[0.709, -64.018, 1.103]}
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
            geometry={nodes["bat2-structure_0"].geometry}
            material={materials["bat2-structure"]}
            position={[0.875, -64.024, 0.337]}
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
            geometry={nodes["bat3-fenetres_0"].geometry}
            material={materials["bat3-fenetres"]}
            position={[-0.344, -55.195, 1.117]}
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
            geometry={nodes["bat3-structure_0"].geometry}
            material={materials["bat3-structure"]}
            position={[-0.278, -56.851, 0]}
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
            geometry={nodes["bat5-rembarde_0"].geometry}
            material={materials["bat5-rembarde"]}
            position={[-0.251, -41.977, 1.526]}
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
            geometry={nodes["bat5-toiture_0"].geometry}
            material={materials["bat5-toiture"]}
            position={[-0.993, -39.522, 10.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["bat6-fenetres_0"].geometry}
            material={materials["bat6-fenetres"]}
            position={[-0.928, -28.448, 1.238]}
            rotation={[-1.571, 1.568, 1.571]}
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
            geometry={nodes["bat6-structure-src001_0"].geometry}
            material={materials["3td_Africa_Grass01"]}
            position={[-0.226, -28.442, 0.208]}
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
            geometry={nodes["bat8-fenetres002_0"].geometry}
            material={materials["bat8-fenetres"]}
            position={[14.241, -37.51, 2.348]}
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
            geometry={nodes["bat8-structure002_0"].geometry}
            material={materials["bat8-structure"]}
            position={[14.2, -34.438, 0]}
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
            geometry={nodes["bat9-structure002_0"].geometry}
            material={materials["bat9-structure"]}
            position={[13.985, -54.766, 0]}
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
            geometry={nodes.caisse004_0.geometry}
            material={materials.caisse}
            position={[13.772, -56.4, 0.215]}
            rotation={[0, 0, -1.011]}
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
            geometry={nodes.ground1_0.geometry}
            material={materials.ground1}
            position={[8.133, -69.683, -0.092]}
            scale={0.035}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Leaves0119_14_S_0.geometry}
            material={materials.Leaves0119_14_S}
            position={[2.65, -52.645, 0]}
            rotation={[Math.PI / 2, 0.623, -Math.PI]}
            scale={0.137}
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
            geometry={nodes.terre_0.geometry}
            material={materials.terre}
            position={[0.171, -48.623, 0.021]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.trottoir_0.geometry}
            material={materials.trottoir}
            position={[8.133, -69.683, -0.092]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/scene/unbs.glb");
