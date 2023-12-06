import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Feather(props) {
  const { nodes, materials } = useGLTF("/assets/models/quill.glb");

  const featherGroupRef = useRef();
  const tipRef = useRef();

  useFrame((state, delta) => {
    if (featherGroupRef.current && tipRef.current) {
      // Ajusta la velocidad de movimiento lineal y rotación circular según sea necesario
      const linearSpeed = 0.005;
      const circularSpeed = 3;
      const circularRadius = 2;

      // Incrementa la posición en el eje X para simular que la pluma está escribiendo de derecha a izquierda
      featherGroupRef.current.position.x -= linearSpeed;

      // Calcula la posición en el círculo utilizando el tiempo para la punta de la pluma
      const circularAngle = state.clock.elapsedTime * circularSpeed;
      const circularX = circularRadius * Math.cos(circularAngle);
      const circularY = circularRadius * Math.sin(circularAngle);

      // Aplica la posición al grupo que representa la punta de la pluma
      tipRef.current.position.x = circularX;
      tipRef.current.position.y = circularY;

      featherGroupRef.current.position.y = 1;
      featherGroupRef.current.position.z = 4;

      // Ajusta el límite de reinicio según sea necesario (aproximadamente la mitad de la distancia)
      const resetLimit = -2; // La posición de reinicio en el eje X
      if (featherGroupRef.current.position.x < resetLimit) {
        featherGroupRef.current.position.x = 1.5; // Reinicia la posición cuando alcanza el límite
      }
    }
  });

  return (
    <group ref={featherGroupRef} {...props} dispose={null}>
      <group>
        <group rotation={[-Math.PI / 2, 3, 2]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group>
              {/* Grupo que representa la punta de la pluma */}
              <group ref={tipRef} position={[-0.029, 0.383, -2.469]} scale={0.482}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["Quill_LP_01_-_Default_0"].geometry}
                  material={materials["01_-_Default"]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/quill.glb");
