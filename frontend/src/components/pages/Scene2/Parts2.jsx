import React, { useRef, useState } from "react";
import { Center, Float, Html, Text, Text3D } from "@react-three/drei"
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { BackScene } from "./BackScene";
import LightsScene2 from "./LightsScene2";
import "./Parts2.css";
import {Pierro} from "./Pierro";
import {Lab} from "./Lab";
import {Youngman} from "./Youngman";

const Parts2 = () => {
  const canvasRef = useRef();
  const cameraRef = useRef();
  const [isInInitialPosition, setIsInInitialPosition] = useState(true);
  const [showDialog, setShowDialog] = useState(false);

  const handleCameraPosition = (position) => {
    if (cameraRef.current) {
      cameraRef.current.position.set(position[0], position[1], position[2]);
      setIsInInitialPosition(false); // Cambiamos el estado al mover la cámara
    }
  };

  const handleBackToInitialPosition = () => {
    if (cameraRef.current) {
      cameraRef.current.position.set(15, -3, -70); // Posición inicial
      setIsInInitialPosition(true); // Cambiamos el estado al volver a la posición inicial
    }
  };


  return (
    <>
      <div className={isInInitialPosition ? "container-Scene2" : "hidden"}>
        <div className="card-Scene2">
          <h className="titulo-Scene2"> Detective </h>
          <p className="text-Scene2"> Hay mucho que hacer... ¿Por dónde empiezo? </p>
          <div>
            <button className="options_scene1" id="S1A" onClick={() => handleCameraPosition([10, -3, -60])}>
              A. La víctima
            </button>
          </div>
          <div>
            <button className="options_scene1" id="S1B" onClick={() => handleCameraPosition([14, -3, -55])}>
              B. El equipo de autopsia
            </button>
          </div>
          <div>
            <button className="options_scene1" id="S1C" onClick={() => handleCameraPosition([8, -3, -60])}>
              C. Los alrededores
            </button>
          </div>
        </div>
      </div>
      <div ref={canvasRef}>
        <Canvas
          shadows
          camera={{ position: [15, -3, -70] }}
          style={{ width: "100vw", height: "100vh" }}
          gl={{ antialias: true }}
          onCreated={({ camera }) => (cameraRef.current = camera)}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 10, 0]} intensity={1.5} />
          <OrbitControls />
          <Html position={[14.35, -2.5, -53.3]} center distanceFactor={4}>
            <p className="click-me">Click</p>
          </Html>
          <Pierro position-x={14.25} position-y={-2.79} position-z={-53.5} scale={0.4} rotation-y={Math.PI}/>
          <Lab position-x={13.5} position-y={-3} position-z={-53.2} scale={0.06} rotation-y={Math.PI}/>
          <Html position={[13, -2.6, -53.8]} center distanceFactor={4}>
            <p className="click-me">Click</p>
          </Html>
          <Youngman position-x={13} position-y={-3.9} position-z={-53.8} scale={0.7} rotation-y={Math.PI-0.6}/>
          <BackScene roughness={100} metalness={100} specular={100} />
          <LightsScene2></LightsScene2>
        </Canvas>
      </div>

      {(!isInInitialPosition && (
        <button className="back-button" onClick={handleBackToInitialPosition}>
          Regresar
        </button>
      )) || null}
    </>
  );
};

export default Parts2;
