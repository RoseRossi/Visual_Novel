import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Youngman(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/assets/models/characters/youngman.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.918}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="John_Robert_Horner_68">
                <group name="John_Robert_Horner_Skeleton_67">
                  <group name="GLTF_created_0">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <skinnedMesh
                      name="Object_8"
                      geometry={nodes.Object_8.geometry}
                      material={materials.Wolf3D_Avatar}
                      skeleton={nodes.Object_8.skeleton}
                    />
                    <group name="Wolf3D_Avatar_69" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/characters/youngman.glb");
