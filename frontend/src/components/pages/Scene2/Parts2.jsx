import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { BackScene } from "./BackScene";
import LightsScene2 from "./LightsScene2";
import "./Parts2.css";

const Parts2 = () => {
  const canvasRef = useRef();
  const cameraRef = useRef();
  const [isInInitialPosition, setIsInInitialPosition] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);


  const handleCameraPosition = (position) => {
    cameraRef.current.position.set(position[0], position[1], position[2]);
    setSelectedOption(position);
    /*if (cameraRef.current) {
      cameraRef.current.position.set(position[0], position[1], position[2]);
      setIsInInitialPosition(false); 
    }*/
  };

  //random comment 
  
  const handleBackToInitialPosition = () => {
    cameraRef.current.position.set(15, -3, -70);
    setSelectedOption(null);
    /*if (cameraRef.current) {
      cameraRef.current.position.set(15, -3, -70); 
      setIsInInitialPosition(true);
    }*/
  };


  // Renderiza el contenido según la opción
  const renderContent = () => {
    switch (selectedOption?.toString()) {
      case [10, -3, -60].toString():
        return (
          <div className="container-Scene2">
            <div className="card-Scene2">
              <h className="titulo-Scene2"> Contenido para A </h>
              <p className="text-Scene2"> Aquí va el contenido específico para la opción A. </p>
            </div>
          </div>
        );

      case [14, -3, -55].toString():
        return (
          <div className="container-Scene2">
            <div className="card-Scene2">
              <h className="titulo-Scene2"> Contenido para B </h>
              <p className="text-Scene2"> Aquí va el contenido específico para la opción B. </p>
            </div>
          </div>
        );

      case [8, -3, -60].toString():
        return (
          <div className="container-Scene2">
            <div className="card-Scene2">
              <h className="titulo-Scene2"> Contenido para C </h>
              <p className="text-Scene2"> Aquí va el contenido específico para la opción C. </p>
            </div>
          </div>
        );

      default:
        return null; 
    }
  };

  return (
    <>
    {selectedOption == null &&(
      <div className= "container-Scene2" >
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
    )}

    {selectedOption && renderContent()}

      {/**A) la víctima */}

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
          <OrbitControls/>
          <BackScene roughness={100} metalness={100} specular={100} />
          <LightsScene2></LightsScene2>
        </Canvas>
      </div>

      {selectedOption && (
        <button className="back-button" onClick={handleBackToInitialPosition}>
          Regresar
        </button>
      )}
    </>
  );
};

export default Parts2;