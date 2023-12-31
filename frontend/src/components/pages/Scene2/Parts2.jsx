import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { BackScene } from "./BackScene";
import { Pierro } from "./Pierro";
import { Lab } from "./Lab";
import { Ring } from "./Ring";
import { Blood } from "./Blood";
import { Youngman } from "./Youngman";
import LightsScene2 from "./LightsScene2";
import "./Parts2.css";
import { Evidence } from "./Evidence"
import { Body } from "./Body";
import { Rag } from "./Rag"
import useSound from 'use-sound';

import { canNextScene } from "../../../api/utils.jsx";
import { fetchPutDataProgressUser } from "../../../api/fetchs.jsx";

const Parts2 = () => {
  const canvasRef = useRef();
  const canvasARef = useRef();
  const cameraRef = useRef();
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionP, setSelectedOptionP] = useState(null);
  const audioRef = useRef(null);
  const [play] = useSound("../assets/sounds/scene2.mp3");
  const [playA] = useSound("../assets/sounds/scene2A.mp3");
  const [playB] = useSound("../assets/sounds/scene2B.mp3");
  const [playC] = useSound("../assets/sounds/scene2C.mp3");
  const [playSound, setPlaySound] = useState(false);
  //Para C
  const firstTxtC = "[Exploras los alrededores en busca de detalles. Encuentras un camino de gotas de sangre que termina por desvanecerse en el camino y un anillo de oro con un símbolo extraño, está ensangrentado...]"
  const [currentTextC, setCurrentTextC] = useState(firstTxtC);
  //Para A
  const firstTxtA = "[El cadáver… Está marcado en varias zonas que los forenses estuvieron tocando. El hedor de la sangre es demasiado fuerte… y las moscas comienzan a pulular cerca…]"
  const [currentText, setCurrentText] = useState(firstTxtA);
  //Para B
  const firstTitleB = "Detective";
  const firstTxtB = "[Podía ver como el equipo de Pierro trabajaba con sus equipo las muestras de la victima que habían tomado con anterioridad... ¿Con quién hablo primero?]";
  const [currentTitleB, setCurrentTitleB] = useState(firstTitleB);
  const [currentTextB, setCurrentTextB] = useState(firstTxtB);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const [continueCounter, setContinueCounter] = useState(0);

  const handleCameraPosition = (position) => {
    cameraRef.current.position.set(position[0], position[1], position[2]);
    setSelectedOption(position);
  };

  // Scene.
  const [scene_, setScene_] = useState({
    scene: 2,
    total: 0,
    prev: '/Scene1-parts'
  });

  const handleBackToInitialPosition = () => {
    cameraRef.current.position.set(15, -3, -70);
    setSelectedOption(null);
    setCurrentText(firstTxtA)
    setCurrentText(firstTitleB)
    setCurrentText(firstTitleB)
    setCurrentText(firstTxtC)
  };

  //new cosa para B
  const handleModelClick = (titulo, texto, isPierro, isYoungman) => {
    setCurrentTitleB(titulo);
    setCurrentTextB(texto);
    setShowContinueButton(true);
    setContinueCounter(0); // Reiniciar contador
    if (isPierro == "Pierro"){
      setSelectedOptionP(isPierro);
    } else if (isYoungman == "Youngman"){
      setSelectedOptionP(isYoungman);
    }
    
  };

  const handleContinueButtonClick = () => {
    console.log("entra")
    setContinueCounter((prevCounter) => prevCounter + 1);
    switch (continueCounter) {
      case 1:
        if (selectedOptionP === "Pierro") {
          setCurrentTitleB("Pierro");
          setCurrentTextB("No puedes esperar ser el último en llegar y que no hayamos hecho nuestro trabajo, todos tenemos vidas, detective.");
        } else if (selectedOptionP === "Youngman") {
          setCurrentTitleB("Detective");
          setCurrentTextB("Un placer, ¿Encontraron algo en particular?");
        }
        break;
      case 2:
        if (selectedOptionP === "Pierro") {
          setCurrentTitleB("Detective");
          setCurrentTextB("¿Encontraron algo en particular?");
        } else if (selectedOptionP === "Youngman") {
          setCurrentTitleB("Henry");
          setCurrentTextB("Pues… Nada que no le haya dicho el jefe Pierro, detective… Aunque encontraron este mapa entre los arbustos tras el árbol. No sabemos porqué nos lo entregaron a nosotros, pero supongo que le sería más útil a la policía.");
        }
        break;
      case 3:
        if (selectedOptionP === "Pierro") {
          setCurrentTitleB("Pierro");
          setCurrentTextB("La víctima tenía una llave en su cuello, pero parece una llave de joyero, es más parecida a un accesorio personal. Un diente en el hombro de la víctima y poco más, si quieres más detalles tendrás que esperar al informe forense o verlo por tu cuenta.");
        } else if (selectedOptionP === "Youngman") {
          setCurrentTitleB("Detective");
          setCurrentTextB("Excelente, Henry. Te lo agradezco.");
        }
        break;
      case 4:
        setCurrentTitleB(firstTitleB);
        setCurrentTextB(firstTxtB);
        setShowContinueButton(false);
        break;
    }
  };


  // Renderiza el contenido según la opción
  const renderContent = () => {

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
                <OrbitControls enableRotate={false} enableZoom={false} enablePan={false} />
                <Evidence
                  scale={3}
                  position={[-8, 0, 0]}
                  rotation={[0, Math.PI / -9, Math.PI / -9]}
                  onPointerOver={handleEvidenceHover}
                  onPointerOut={handleEvidenceHoverOut}
                  onClick={() => { handleObjAClick("Ahora entiendo por qué los cambios constantes de equipo, estas evidencias son un desastre") }}
                />
                <Body
                  scale={4}
                  rotation={[Math.PI / 9, Math.PI / 2, 0]}
                  onPointerOver={handleBodyHover}
                  onPointerOut={handleBodyHoverOut}
                  onClick={() => { handleObjAClick("Cada vez es peor... ¿Algún día pondremos atrapar a este monstruo?") }}
                />
                <Rag
                  scale={0.5}
                  position={[9, -1.5, 0]}
                  onPointerOver={handleRagHover}
                  onPointerOut={handleRagHoverOut}
                  onClick={() => { handleObjAClick("Esto debería estar con las evidencias... Me pregunto qué otra cosa se les habrá pasado") }}
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
          <>

            <div className="container-Scene2">
              <audio ref={audioRef} loop>
                <source src="../assets/sounds/scene2B.mp3" type="audio/mpeg" />
              </audio>
              <div className="cardB-Scene2">
                <h className="tituloB-Scene2">{currentTitleB}</h>
                <p className="textB-Scene2">{currentTextB}</p>
              </div>
              <div className="canvasB" ref={canvasARef}>
                <Canvas>
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[0, 10, 0]} intensity={1.5} />
                  <OrbitControls enableRotate={false} enableZoom={false} enablePan={false} />

                  <Pierro
                    position={[-7, 5, -6.5]}
                    rotation-y={0.8}
                    scale={4}
                    onClick={() => { handleModelClick("Detective", "Creí que había sido claro con que no debían tocar la escena hasta que llegase, Pierro.", "Pierro", " ") }}
                    onPointerOver={handlePierroHover}
                    onPointerOut={handlePierroHoverOut}
                  />
                  <Lab position={[0, 0, 0]} scale={0.2} />
                  <Youngman
                    position={[2, -3.5, -1]}
                    scale={3.5}
                    onClick={() => { handleModelClick("Joven", "Mucho gusto, detective. Mi nombre es Henry.", " ", "Youngman") }}
                    onPointerOver={handleJovenHover}
                    onPointerOut={handleJovenHoverOut}
                  />
                </Canvas>
              </div>
              {showContinueButton && (
                <button className="continue-button" onClick={handleContinueButtonClick}>
                  Continuar
                </button>
              )}
            </div>
          </>
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
              <Ring position-x={6} position-y={3} position-z={-53.8} scale={0.5} rotation-y={Math.PI - 1.5}
                onPointerOver={handleRingHover}
                onPointerOut={handleRingHoverOut}
                onClick={() => { handleObjCClick("[Será mejor llevarlo contigo.] He terminado aquí. Veré cómo le va a Edward") }} />
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

  const nextSceneUpdate = async () => {
    // Verificate if exist user in localStorage.
    if (localStorage.getItem("default")) {

      const data = JSON.parse(localStorage.getItem("default"));
      const response = await fetchPutDataProgressUser({
        email: data.email,
        scene: 3,
        total: data.total
      });

      if (response.status) {

        localStorage.setItem("default", JSON.stringify({
          email: data.email,
          scene: 3,
          total: data.total,
          isLogged: data.isLogged
        }));

        navigate('/Scene3-parts');
      } else {
        alert("No se pudo actualizar el progreso, intente nuevamente");
      }
    }
  }

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
      audioRef.current.play();
    }
  }

  useEffect(() => {
    document.addEventListener("click", playAudio);
    // Validate if can enter to this scene.
    if (!canNextScene(scene_.scene)) {navigate(scene_.prev);}
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

  const navigate = useNavigate();
  return (
    
    <>
      {selectedOption == null && (
        <div className="container-Scene2" >
          <audio ref={audioRef} loop>
            <source src="../assets/sounds/scene2.mp3" type="audio/mpeg" />
          </audio>
          <div className="card-Scene2">
            <h3 className="titulo-Scene2"> Detective </h3>
            <p className="text-Scene2"> Hay mucho que hacer.. ¿Por dónde empiezo? </p>
            <div>
              <button className="options_scene1" id="S1A" onClick={() => { handleCameraPosition([10, -3, -60]) }}>
                A. La víctima
              </button>
            </div>
            <div>
              <button className="options_scene1" id="S1B" onClick={() => { handleCameraPosition([14, -3, -55]) }}>
                B. El equipo de autopsia
              </button>
            </div>
            <div>
              <button className="options_scene1" id="S1C" onClick={() => { handleCameraPosition([8, -2, -55]); }}>
                C. Los alrededores
              </button>
              <button className="options_scene1" id="S1D" onClick={nextSceneUpdate}>
                Mejor me voy...
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
          style={{ width: "100vw", height: "100vh" }}
          gl={{ antialias: true }}
          onCreated={({ camera }) => (cameraRef.current = camera)}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 10, 0]} intensity={1.5} />
          <OrbitControls />
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