import React, { useEffect, useRef, useState } from "react";
import { useThree } from '@react-three/fiber';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { BackScene } from "./BackScene";
import { Pierro } from "./Pierro";
import { Lab } from "./Lab";
import { Youngman } from "./Youngman";
import LightsScene2 from "./LightsScene2";
import { Html } from "@react-three/drei"
import "./Parts2.css";

const Parts2 = () => {
  const canvasRef = useRef();
  const cameraRef = useRef();
  const [isInInitialPosition, setIsInInitialPosition] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  // Identificadores únicos para cada opción
  const OPTION_A = "optionA";
  const OPTION_B = "optionB";
  const OPTION_B1 = "optionB1";
  const OPTION_B2 = "optionB2";
  const OPTION_C = "optionC";
  const [optionTitles, setOptionTitles] = useState({});
  const [optionTexts, setOptionTexts] = useState({});
  
  useEffect(() => {
    console.log('Inside useEffect:', optionTitles, optionTexts);
    {selectedOption && renderContent()}; // Intenta forzar la ejecución de renderContent
  }, [optionTitles, optionTexts]);
  

  const handleCameraPosition = (position) => {
    cameraRef.current.position.set(position[0], position[1], position[2]);
    setSelectedOption(position);
    /*if (cameraRef.current) {
      cameraRef.current.position.set(position[0], position[1], position[2]);
      setIsInInitialPosition(false); 
    }*/
  };

  const handleBackToInitialPosition = () => {
    cameraRef.current.position.set(15, -3, -70);
    setSelectedOption(null);
    /*if (cameraRef.current) {
      cameraRef.current.position.set(15, -3, -70); 
      setIsInInitialPosition(true);
    }*/
  };

  const handleClick = (optionId) => {
    console.log('handleClick called with optionId:', optionId);
    console.log('Current optionTitles:', optionTitles);
    console.log('Current optionTexts:', optionTexts);
  
    const options = {
      [OPTION_A]: {
        title: "Título para la opción A",
        text: "Texto para la opción A...",
      },
      [OPTION_B]: {
        title: "Detective",
        text: "[Podía ver el equipo de Pierro trabajando con las muestras de la víctima que habían tomado con anterioridad... ¿Con quién hablo primero?]",
      },
      [OPTION_B1]: {
        title: "Título para la opción B1",
        text: "Texto para la opción B1...",
      },
      [OPTION_B2]: {
        title: "Título para la opción B2",
        text: "Texto para la opción B2...",
      },
      [OPTION_C]: {
        title: "Título para la opción C",
        text: "Texto para la opción C...",
      },
    };
  
    const selectedOptionData = options[optionId];
  
    if (selectedOptionData) {
      setOptionTitles({
        ...optionTitles,
        [optionId]: selectedOptionData.title,
      });
      setOptionTexts({
        ...optionTexts,
        [optionId]: selectedOptionData.text,
      });
    }
  };
 

  // Renderiza el contenido según la opción
  const renderContent = () => {
    const selectedOptionId = selectedOption?.toString();
    if (!selectedOptionId) {
      return null;
    }
    
    switch (selectedOption?.toString()) {
      case [10, -3, -60].toString():
        return (
          <div className="container-Scene2">
            <div className="card-Scene2">
              <h className="titulo-Scene2">{optionTitles[OPTION_A]} </h>
              <p className="text-Scene2"> {optionTexts[OPTION_A]} </p>
            </div>
          </div>
        );

      case [14, -3, -55].toString():
        return (
          <div className="container-Scene2">
            <div className="card-Scene2">
              <h className="titulo-Scene2">{optionTitles[OPTION_B]} </h>
              <p className="text-Scene2">{optionTexts[OPTION_B]}</p>
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
  {selectedOption && renderContent()}

  return (
    <>
    {selectedOption == null &&(
      
      <div className= "container-Scene2" >
        <div className="card-Scene2">
          <h3 className="titulo-Scene2"> Detective </h3>
          <p className="text-Scene2"> Hay mucho que hacer.. ¿Por dónde empiezo? </p>
          <div>
            <button className="options_scene1" id="S1A" onClick={() => {handleCameraPosition([10, -3, -60]); handleClick(OPTION_A)}}>
              A. La víctima
            </button>
          </div>
          <div>
            <button className="options_scene1" id="S1B" onClick={() => {handleCameraPosition([14, -3, -55]); handleClick(OPTION_B)}}>
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
    {renderContent()}

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
          <Html position={[14.35, -2.5, -53.3]} center distanceFactor={4}>
            <p className="click-me" onClick={() => handleClick("optionB1")}>Click</p>
          </Html>
          <Pierro position-x={14.25} position-y={-2.79} position-z={-53.5} scale={0.4} rotation-y={Math.PI}/>
          <Lab position-x={13.5} position-y={-3} position-z={-53.2} scale={0.06} rotation-y={Math.PI}/>
          <Html position={[13, -2.6, -53.8]} center distanceFactor={4}>
            <p className="click-me" onClick={() => alert("Si funciona el Click")} >Click</p>
          </Html>
          <Youngman position-x={13} position-y={-3.9} position-z={-53.8} scale={0.7} rotation-y={Math.PI-0.6}/>
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