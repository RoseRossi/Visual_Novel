import React, { useRef, useState } from "react";
import { Canvas} from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { BackScene } from "./BackScene";
import LightsScene2 from "./LightsScene2";
import "./Parts2.css";
import {Evidence} from "./Evidence"
import { Body } from "./Body";
import {Rag} from "./Rag"

const Parts2 = () => {
  const canvasRef = useRef();
  const canvasARef = useRef();
  const cameraRef = useRef();
  const [selectedOption, setSelectedOption] = useState(null);
  const firstTxtA = "[El cadáver… Está marcado en varias zonas que los forenses estuvieron tocando. El hedor de la sangre es demasiado fuerte… y las moscas comienzan a pulular cerca…]"
  const [currentText, setCurrentText] = useState(firstTxtA);

  const handleCameraPosition = (position) => {
    cameraRef.current.position.set(position[0], position[1], position[2]);
    setSelectedOption(position);
  };

  const handleBackToInitialPosition = () => {
    cameraRef.current.position.set(15, -3, -70);
    setSelectedOption(null);
    setCurrentText(firstTxtA)
  };

  // Renderiza el contenido según la opción
  const renderContent = () => {

    const handleRagHover = (event) => {
      event.nativeEvent.target.style.cursor = "pointer";
    };
  
    const handleRagHoverOut = (event) => {
      event.nativeEvent.target.style.cursor = "auto";
    };
  
    const handleBodyHover = (event) => {
      event.nativeEvent.target.style.cursor = "pointer";
    };
  
    const handleBodyHoverOut = (event) => {
      event.nativeEvent.target.style.cursor = "auto";
    };
  
    const handleEvidenceHover = (event) => {
      event.nativeEvent.target.style.cursor = "pointer";
    };
  
    const handleEvidenceHoverOut = (event) => {
      event.nativeEvent.target.style.cursor = "auto";
    };

    const handleObjAClick = (texto) => {
      setCurrentText(texto);
    };

    switch (selectedOption?.toString()) {
      case [10, -3, -60].toString():
        return (
          <div className="containerAall">
            <div className="containerA-Scene2">
              <div className="cardA-Scene2">
                <p className="textA-Scene2"> {currentText}  </p>
              </div>
            </div>
            <div className="canvasA" ref={canvasARef}>
              <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[0, 10, 0]} intensity={1.5} />
                <OrbitControls enableRotate={false} enableZoom={false} enablePan={false}/>
                <Evidence
                  scale={3}
                  position={[-8, 0, 0]}
                  rotation={[0, Math.PI / -9, Math.PI / -9]}
                  onPointerOver={handleEvidenceHover}
                  onPointerOut={handleEvidenceHoverOut}
                  onClick={() => {handleObjAClick("Ahora entiendo por qué los cambios constantes de equipo, estas evidencias son un desastre")}}
                />
                <Body
                  scale={4}
                  rotation={[Math.PI / 9, Math.PI / 2, 0]}
                  onPointerOver={handleBodyHover}
                  onPointerOut={handleBodyHoverOut}
                  onClick={() => {handleObjAClick("Cada vez es peor... ¿Algún día pondremos atrapar a este monstruo?")}}
                />
                <Rag
                  scale={0.5}
                  position={[9, -1.5, 0]}
                  onPointerOver={handleRagHover}
                  onPointerOut={handleRagHoverOut}
                  onClick={() => {handleObjAClick("Esto debería estar con las evidencias... Me pregunto qué otra cosa se les habrá pasado")}}
                />
                <Sparkles
                  color="black" 
                  count={10}
                  size={2}
                  speed={2}
                  scale={4} 
                  position={[0, 2, 0]}
                />
                <LightsScene2></LightsScene2>
              </Canvas>
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

      <div ref={canvasRef}>
        <Canvas
          shadows
          camera={{ position: [15, -3, -70] }}
          style={{ width: "100vw", height: "100vh"}}
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