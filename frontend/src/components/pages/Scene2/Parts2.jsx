import React, { useRef, useState, useEffect } from "react";
import { useThree } from '@react-three/fiber';
import { Canvas} from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { BackScene } from "./BackScene";
import { Pierro } from "./Pierro";
import { Lab } from "./Lab";
import { Ring } from "./Ring";
import { Blood } from "./Blood";
import { Youngman } from "./Youngman";
import LightsScene2 from "./LightsScene2";
import "./Parts2.css";
import {Evidence} from "./Evidence"
import { Body } from "./Body";
import {Rag} from "./Rag"
import useSound from 'use-sound';

const Parts2 = () => {
  const canvasRef = useRef();
  const canvasARef = useRef();
  const cameraRef = useRef();
  const [selectedOption, setSelectedOption] = useState(null);
  const [optionTitles, setOptionTitles] = useState();
  const [optionTexts, setOptionTexts] = useState();
  const audioRef = useRef(null);
  const [play] = useSound("../assets/sounds/scene2.mp3");
  const [playA] = useSound("../assets/sounds/scene2A.mp3");
  const [playB] = useSound("../assets/sounds/scene2B.mp3");
  const [playC] = useSound("../assets/sounds/scene2C.mp3");
  
  const firstTxtC = "[Exploras los alrededores en busca de detalles. Encuentras un camino de gotas de sangre que termina por desvanecerse en el camino y un anillo de oro con un símbolo extraño, está ensangrentado...]"
  const [currentTextC, setCurrentTextC] = useState(firstTxtC);

  const [playSound, setPlaySound] = useState(false);
  const firstTxtA = "[El cadáver… Está marcado en varias zonas que los forenses estuvieron tocando. El hedor de la sangre es demasiado fuerte… y las moscas comienzan a pulular cerca…]"
  const [currentText, setCurrentText] = useState(firstTxtA);

  const handleCameraPosition = (position) => {
    cameraRef.current.position.set(position[0], position[1], position[2]);
    setSelectedOption(position);
  };

  //random comment 
  
  const handleBackToInitialPosition = () => {
    cameraRef.current.position.set(15, -3, -70);
    setSelectedOption(null);
    setCurrentText(firstTxtA)
  };

  const handleShowDialog = (optionId) => {
    // Aquí puedes realizar acciones específicas al mostrar el diálogo
    // como cambiar el título y el texto según el identificador de la opción.
    switch (optionId) {
      case OPTION_A:
        setOptionTitles((prevTitles) => ({
          ...prevTitles,
          [OPTION_A]: "Título para la opción A",
        }));
        setOptionTexts((prevTexts) => ({
          ...prevTexts,
          [OPTION_A]: "Texto para la opción A...",
        }));
        break;
  
      case OPTION_B:
        setOptionTitles((prevTitles) => ({
          ...prevTitles,
          [OPTION_B]: "Título para la opción B",
        }));
        setOptionTexts((prevTexts) => ({
          ...prevTexts,
          [OPTION_B]: "Texto para la opción B...",
        }));
        break;
  
      case OPTION_B1:
        setOptionTitles((prevTitles) => ({
          ...prevTitles,
          [OPTION_B1]: "Título para la opción B1",
        }));
        setOptionTexts((prevTexts) => ({
          ...prevTexts,
          [OPTION_B1]: "Texto para la opción B1...",
        }));
        break;
  
      case OPTION_B2:
        setOptionTitles((prevTitles) => ({
          ...prevTitles,
          [OPTION_B2]: "Título para la opción B2",
        }));
        setOptionTexts((prevTexts) => ({
          ...prevTexts,
          [OPTION_B2]: "Texto para la opción B2...",
        }));
        break;
  
      case OPTION_C:
        setOptionTitles((prevTitles) => ({
          ...prevTitles,
          [OPTION_C]: "Título para la opción C",
        }));
        setOptionTexts((prevTexts) => ({
          ...prevTexts,
          [OPTION_C]: "Texto para la opción C...",
        }));
        break;
  
      default:
        // Manejar otros casos si es necesario
        break;
    }
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

    const handleObjCClick = (textoC) => {
      setCurrentTextC(textoC);
    };

    const handleRingHover = (event) => {
      event.nativeEvent.target.style.cursor = "pointer";
    };
  
    const handleRingHoverOut = (event) => {
      event.nativeEvent.target.style.cursor = "auto";
    };

    const handleObjAClick = (texto) => {
      setCurrentText(texto);
    };

    switch (selectedOption?.toString()) {
      case [10, -3, -60].toString():
        return (
          <div className="containerAall">
            <audio ref={audioRef} loop>
                    <source src="../assets/sounds/scene2A.mp3" type="audio/mpeg" />
                </audio>
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
            <audio ref={audioRef} loop>
                    <source src="../assets/sounds/scene2B.mp3" type="audio/mpeg" />
                </audio>
            <div className="card-Scene2">
              <h className="titulo-Scene2">{optionTitles[OPTION_B]} </h>
              <p className="text-Scene2">{optionTexts[OPTION_B]}</p>
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
//para lo del audio controls 
      case [8, -2, -55].toString():
        return (
          <div className="container-Scene2">
            <audio ref={audioRef} loop >
                    <source src="../assets/sounds/scene2C.mp3" type="audio/mpeg" />
                </audio>
            <div className="card-Scene2">
              <p className="textA-Scene2"> {currentTextC}  </p>
            </div>
            <Canvas>
            <Ring position-x={6} position-y={3} position-z={-53.8} scale={0.5} rotation-y={Math.PI-1.5}
                  onPointerOver={handleRingHover}
                  onPointerOut={handleRingHoverOut}
                  onClick={() => {handleObjCClick("[Será mejor llevarlo contigo.] He terminado aquí. Veré cómo le va a Edward")}}/>
            <Sparkles
                  color="red" 
                  count={10}
                  size={2}
                  speed={2}
                  scale={4}  
                  position={[0, -1, 0]}
                />
            <Blood />
            </Canvas>
          </div>
          
        );

      default:
        return null; 
    
    }
  };

  const playAudio = () => {
    if (audioRef.current) {
        audioRef.current.volume = 0.1;
        audioRef.current.play();
      }
  }

  useEffect(() => {
      document.addEventListener("click", playAudio);
      return () => {
          document.removeEventListener("click", playAudio);
      };
  }, []);

  useEffect(() => {
      if (playSound) {
          play();
          playA();
          playB();
          playC();
          setPlaySound(false);
      }
  }, [playSound]);

  return (
    <>
    {selectedOption == null &&(
      
      <div className= "container-Scene2" >
          <audio ref={audioRef} loop>
                    <source src="../assets/sounds/scene2.mp3" type="audio/mpeg" />
                </audio>
        <div className="card-Scene2">
          <h3 className="titulo-Scene2"> Detective </h3>
          <p className="text-Scene2"> Hay mucho que hacer.. ¿Por dónde empiezo? </p>
          <div>
            <button className="options_scene1" id="S1A" onClick={() => {handleCameraPosition([10, -3, -60]); handleShowDialog(OPTION_A)}}>
              A. La víctima
            </button>
          </div>
          <div>
            <button className="options_scene1" id="S1B" onClick={() => {handleCameraPosition([14, -3, -55]); handleShowDialog(OPTION_B)}}>
              B. El equipo de autopsia
            </button>
          </div>
          <div>
            <button className="options_scene1" id="S1C" onClick={() => {handleCameraPosition([8, -3, -60]); handleShowDialog(OPTION_C)}}>
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