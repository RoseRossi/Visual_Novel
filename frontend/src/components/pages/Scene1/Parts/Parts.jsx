import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import "./parts.css";


const Parts = () => {
  const boxRef = useRef();
  const Part2 =()=>{
    return(
      <>
        <div className="container">
              <div className="scene1part1-container">
                <h className="title-part1">Mila</h>
                    <p className="scene1part1-text">
                        Funciona?
                    </p>
              </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container">
          <div className="scene1part1-container">
            <h className="title-part1">Thomas</h>
                <p className="scene1part1-text">
                    El bastardo hizo un árbol de navidad… en agosto
                </p>
          </div>
          <button onClick={Part2} className="button_continue" type="submit">Continuar</button>
        </div>
      <Canvas
            shadows = {true}
            camera={{position: [2,1,7]}}
      >
        <mesh ref={boxRef} position={[-30,5,-5]} castShadow>
            <boxGeometry args={[10,10,10]} />
            <meshStandardMaterial color="#54C1EF"  />
        </mesh>
      </Canvas>
    </>
  );
};

export default Parts;
