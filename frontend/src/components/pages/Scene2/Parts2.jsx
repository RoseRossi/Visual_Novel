import React, { useRef, useState, useEffect } from "react";
import { useThree } from '@react-three/fiber';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sparkles} from "@react-three/drei";
import { BackScene } from "./BackScene";
import { Pierro } from "./Pierro";
import { Lab } from "./Lab";
import { Ring } from "./Ring";
import { Blood } from "./Blood";
import { Youngman } from "./Youngman";
import LightsScene2 from "./LightsScene2";
import { Center, Float, Html, Text, Text3D } from "@react-three/drei"
import "./Parts2.css";
import useSound from 'use-sound';

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
  const [optionTitles, setOptionTitles] = useState();
  const [optionTexts, setOptionTexts] = useState();
  const firstTxtC = "[Exploras los alrededores en busca de detalles. Encuentras un camino de gotas de sangre que termina por desvanecerse en el camino y un anillo de oro con un símbolo extraño, está ensangrentado...]"
  const [currentText, setCurrentText] = useState(firstTxtC);
  const audioRef = useRef(null);
  const [play] = useSound("../assets/sounds/scene2.mp3");
  const [playA] = useSound("../assets/sounds/scene2A.mp3");
  const [playB] = useSound("../assets/sounds/scene2B.mp3");
  const [playC] = useSound("../assets/sounds/scene2C.mp3");
  
  const [playSound, setPlaySound] = useState(false);
  

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
    setCurrentText(firstTxtC)
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
          <div className="container-Scene2">
            <div className="card-Scene2">
              <h className="titulo-Scene2">{optionTitles[OPTION_A]} </h>
              <p className="text-Scene2"> {optionTexts[OPTION_A]} </p>
                <audio ref={audioRef} loop>
                    <source src="../assets/sounds/scene2A.mp3" type="audio/mpeg" />
                </audio>
            </div>
          </div>
        );

      case [14, -3, -55].toString():
        return (
          <div className="container-Scene2">
            <div className="card-Scene2">
              <h className="titulo-Scene2">{optionTitles[OPTION_B]} </h>
              <p className="text-Scene2">{optionTexts[OPTION_B]}</p>
              <audio ref={audioRef} loop>
                    <source src="../assets/sounds/scene2B.mp3" type="audio/mpeg" />
                </audio>
            </div>
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
              <p className="textA-Scene2"> {currentText}  </p>
            </div>
            <Canvas>
            <Ring position-x={6} position-y={3} position-z={-53.8} scale={0.5} rotation-y={Math.PI-1.5}
                  onPointerOver={handleRingHover}
                  onPointerOut={handleRingHoverOut}
                  onClick={() => {handleObjAClick("[Será mejor llevarlo contigo.] He terminado aquí. Veré cómo le va a Edward")}}/>
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
          <h className="titulo-Scene2"> Detective </h>
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
            <button className="options_scene1" id="S1C" onClick={() => {handleCameraPosition([8, -2, -55]); handleShowDialog(OPTION_C)}}>
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
          <Html position={[14.35, -2.5, -53.3]} center distanceFactor={4}>
            <p className="click-me" onClick={() => handleShowDialog(OPTION_B1)}>Click</p>
          </Html>
          <Pierro position-x={14.25} position-y={-2.79} position-z={-53.5} scale={0.4} rotation-y={Math.PI}/>
          <Lab position-x={13.5} position-y={-3} position-z={-53.2} scale={0.06} rotation-y={Math.PI}/>
          <Html position={[13, -2.6, -53.8]} center distanceFactor={4}>
            <p className="click-me" onClick={() => handleShowDialog(OPTION_B2)}>Click</p>
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