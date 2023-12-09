import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Monster(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/assets/models/monster.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[ 0, 0, 0]}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.268}
        >
          <group
            name="64df3ac280ff4c1d91bb8fc5513ce1aefbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials["Scene_-_Root"]}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials["Scene_-_Root"]}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials["Scene_-_Root"]}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <group name="Object_6" />
                  <group name="body" />
                  <group name="tongue" />
                  <group name="eyes" />
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

export default Monster;
useGLTF.preload("/assets/models/monster.glb");
