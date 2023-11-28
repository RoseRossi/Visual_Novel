import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import {BackScene} from "./BackScene"; // Asumiendo que BackScene es un componente de React
import LightsScene2 from "./LightsScene2";
import "./Parts2.css"

const Parts2 = () => {
  const canvasRef = useRef();

  return (
    <>
      <div className="container-Scene2">
                  <div className="card-Scene2"> 
                      <h className="titulo-Scene2"> Detective </h>
                      <p className="text-Scene2"> Hay mucho que hacer... ¿Por dónde empiezo? </p>
                      <div>
                      <button className="options_scene1" id="S1A">A. La víctima </button>
                      </div>
                      <div>
                      <button className="options_scene1" id="S1B">B. El equipo de autopsia</button>
                      </div>
                      <div>
                      <button className="options_scene1" id="S1C">C. Los alrededores</button>
                      </div>
                  </div>
      </div>
      <Canvas
        shadows
        camera={{ position: [15, -3, -70]}} // Modifica la posición inicial de la cámara
        style={{ width: "100vw", height: "100vh" }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 0]} intensity={1.5} />
        <OrbitControls />
        <BackScene  roughness={100} metalness={100} specular={100}/>
        <LightsScene2></LightsScene2>
      </Canvas>
    </>
  );
};

export default Parts2;
