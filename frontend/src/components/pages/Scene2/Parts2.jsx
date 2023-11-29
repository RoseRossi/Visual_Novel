import React, { useRef, useState } from "react";
import { Canvas} from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { BackScene } from "./BackScene";
import { Pierro } from "./Pierro";
import { Lab } from "./Lab";
import { Youngman } from "./Youngman";
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
  //Para A
  const firstTxtA = "[El cadáver… Está marcado en varias zonas que los forenses estuvieron tocando. El hedor de la sangre es demasiado fuerte… y las moscas comienzan a pulular cerca…]"
  const [currentText, setCurrentText] = useState(firstTxtA);
  //Para B
  const firstTitleB = "Detective";
  const firstTxtB = "[Podía ver como el equipo de Pierro trabajaba con sus equipo las muestras de la victima que habían tomado con anterioridad... ¿Con quién hablo primero?]";
  const [currentTitleB, setCurrentTitleB] = useState(firstTitleB);
  const [currentTextB, setCurrentTextB] = useState(firstTxtB);
  const [showContinueButton1, setShowContinueButton1] = useState(false);
  const [showContinueButton2, setShowContinueButton2] = useState(false);
  const [continueCounter, setContinueCounter] = useState(0);

  const handleCameraPosition = (position) => {
    cameraRef.current.position.set(position[0], position[1], position[2]);
    setSelectedOption(position);
  };

  const handleBackToInitialPosition = () => {
    cameraRef.current.position.set(15, -3, -70);
    setSelectedOption(null);
    setCurrentText(firstTxtA)
    setCurrentTitleB(firstTitleB)
    setCurrentTextB(firstTxtB)
  };

  //Para Opcion B
  const handleObjB1Click = (titulo, texto) => {
    setCurrentTitleB(titulo);
    setCurrentTextB(texto);
    setShowContinueButton1(true);
  };

  const handleObjB2Click = (titulo, texto) => {
    setCurrentTitleB(titulo);
    setCurrentTextB(texto);
    setShowContinueButton2(true);
  };

  const handleContinueButton1Click = () => {
    setContinueCounter((prevCounter) => prevCounter + 1);
    switch (continueCounter) {
      case 1:
        setCurrentTitleB("Pierro");
        setCurrentTextB("No puedes esperar ser el último en llegar y que no hayamos hecho nuestro trabajo, todos tenemos vidas, detective.");
        setShowContinueButton1(true);
        break;
      case 2:
        setCurrentTitleB("Detective");
        setCurrentTextB("¿Encontraron algo en particular?");
        break;
      case 3:
        setCurrentTitleB("Pierro");
        setCurrentTextB("La víctima tenía una llave en su cuello, pero parece una llave de joyero, es más parecida a un accesorio personal. Un diente en el hombro de la víctima y poco más, si quieres más detalles tendrás que esperar al informe forense o verlo por tu cuenta.");
        break;
      case 4:
        setCurrentTitleB(firstTitleB);
        setCurrentTextB(firstTxtB);
        setShowContinueButton1(false);
        setContinueCounter(0); 
        break;
      default:
        break;
    }
  };

  const handleContinueButton2Click = () => {
    setContinueCounter((prevCounter) => prevCounter + 1);
    switch (continueCounter) {
      case 1:
        setCurrentTitleB("Detective");
        setCurrentTextB("Un placer, ¿Encontraron algo en particular?");
        setShowContinueButton2(true);
        break;
      case 2:
        setCurrentTitleB("Henry");
        setCurrentTextB("Pues… Nada que no le haya dicho el jefe Pierro, detective… Aunque encontraron este mapa entre los arbustos tras el árbol. No sabemos porqué nos lo entregaron a nosotros, pero supongo que le sería más útil a la policía.");
        break;
      case 3:
        setCurrentTitleB("Detective");
        setCurrentTextB("Excelente, Henry. Te lo agradezco.");
        break;
      case 4:
        setCurrentTitleB(firstTitleB);
        setCurrentTextB(firstTxtB);
        setShowContinueButton2(false);
        setContinueCounter(0); 
        break;
      default:
        break;
    }
  };

  const handlePierroHover = (event) => {
    event.nativeEvent.target.style.cursor = "pointer";
  };

  const handlePierroHoverOut = (event) => {
    event.nativeEvent.target.style.cursor = "auto";
  };

  const handleJovenHover = (event) => {
    event.nativeEvent.target.style.cursor = "pointer";
  };

  const handleJovenHoverOut = (event) => {
    event.nativeEvent.target.style.cursor = "auto";
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
          <div className="containerB-Scene2">
            <div className="cardB-Scene2">
              <h className="tituloB-Scene2">{currentTitleB}</h>
              <p className="textB-Scene2">{currentTextB}</p>
            </div>
              {showContinueButton1 &&  (
                <button className="continue-button" onClick={handleContinueButton1Click}>
                  Continuar
                </button>
              )}
              {showContinueButton2 &&  (
                <button className="continue-button" onClick={handleContinueButton2Click}>
                  Continuar
                </button>
              )}
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
    {renderContent()}

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
          <Pierro 
            position={[14.25, -2.79, -53.5]}
            scale={0.4} 
            rotation-y={Math.PI}
            onClick={() => {handleObjB1Click("Detective","Creí que había sido claro con que no debían tocar la escena hasta que llegase, Pierro.")}}
            onPointerOver={handlePierroHover}
            onPointerOut={handlePierroHoverOut}
          />
          <Lab position-x={13.5} position-y={-3} position-z={-53.2} scale={0.06} rotation-y={Math.PI}/>
          <Youngman 
            position={[13, -3.9,-53.8]}
            scale={0.7} 
            rotation-y={Math.PI-0.6}
            onClick={() => {handleObjB2Click("Joven","Mucho gusto, detective. Mi nombre es Henry.")}}
            onPointerOver={handleJovenHover}
            onPointerOut={handleJovenHoverOut}
          />
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