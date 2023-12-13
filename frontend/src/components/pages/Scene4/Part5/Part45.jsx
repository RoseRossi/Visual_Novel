import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import "./Part45.css";
import {Detective} from "../../Scene1/Parts/Detective.jsx";
import {Thomas} from "../../Scene1/Parts/Thomas.jsx";
import {Monster} from "../../Scene3/Parts/Monster.jsx";
import useSound from 'use-sound';

const Parts4p4 = () => {
  const audioRef = useRef(null);
  const [play] = useSound("../assets/sounds/terror.mp3");
  const [playSound, setPlaySound] = useState(false);
    const texts = [
        "[Habían otras dos patrullas, dos policías hacían guardia fuera y otro estaba dormido dentro de la patrulla]",
        "[Me levanté y corrí dentro, tenía la sensación de que algo malo les iba a pasar si no estaba ahí]",
        "A-Ayuda",
        "[Una voz entrecortada, como sofocada. debía darme prisa]",
        "[Encontré a Thomas y el comisario tirados en el piso, siendo arrastrados al centro del círculo donde el recolector.., me asesinó, Debía salvar a Thomas]",
        "[Tomé a Thomas con todas mis fuerzas, logrando sacarlo. El comisario fue absorbido por el agujero en el centro…]",
        "Detective, que gusto verlo. Supongo que vienen de su parte",
        "[Esa maldita voz]",
        "Tú… ¿Qué me hiciste?",
        "Lo mantuve vivo, ¿Eso no era lo que quería?",
        "No de esta manera",
        "Es muy exigente y ni siquiera he recibido un gracias… Que desconsiderado…",
        "¿Detective?",
        "Déjalo ir… por favor",
        "Me temo que eso no es posible. Como verá, usted no es el único que está pasando hambre… y si yo no puedo alimentarme, usted no seguirá con vida…",
        "[Tenía una idea… Comencé a soltar a Thomas, lentamente… Comenzó a gritar que no lo soltara]",
        "[Le guiñé el ojo y se calló. Sabía que podía confiar en mí, no iba a defraudar a este  niño,,,]",
        "Buena elección, detective… disfrutemos de esta cena juntos",
        "[Cuando terminó su frase salí disparado hacia uno de los [Objeto mundano de modelo simple] y me lancé al agujero, no sabía si funcionaría… sólo podía confiar en que los gritos de lo que sea que fuese eso, fuesen una buena señal…]",
        "[Por favor… que esto acabe de una vez y que Thomas esté a salvo… Sentí como todo desaparecía a mi alrededor…]",

      ]
      ;
      const titles = [
        "Detective",
        "",
        "Thomas",
        "",
        "",
        "",
        "???",
        "Detective",
        "Detective",
        "???",
        "Detective",
        "???",
        "Thomas",
        "Detective",
        "???",
        "Detective",
        "",
        "???",
        "",
        "",
      ]
    
      const models = [
        {
            component: <Detective />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
          },
          {
            component: <Detective />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
          },
          {
            component: <Thomas />,
            position: { x: 0.5, y: -7, z: 5 },
            scale: 5,
          },
          {
            component: <Detective />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
          },
          {
            component: <Detective />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
          },
          {
            component: <Detective />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
          },
          {
            component: <Monster />,
            position: { x: -1, y: -4, z: 3 },
            scale: 5,
            },
          {
            component: <Detective />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
          },
          {
            component: <Detective />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
          },
          {
            component: <Monster />,
            position: { x: -1, y: -4, z: 3 },
            scale: 5,
            },
          {
            component: <Detective />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
          },
          {
            component: <Monster />,
            position: { x: -1, y: -4, z: 3 },
            scale: 5,
            },
          {
            component: <Thomas />,
            position: { x: 0.5, y: -7, z: 5 },
            scale: 5,
          },
          {
            component: <Detective />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
          },
          {
            component: <Monster />,
            position: { x: -1, y: -4, z: 3 },
            scale: 5,
            },
            {
                component: <Detective />,
                position: { x: 0.5, y: -9.2, z: 5 },
                scale: 5,
              },
            {
                component: <Detective />,
                position: { x: 0.5, y: -9.2, z: 5 },
                scale: 5,
              },
              {
                component: <Monster />,
                position: { x: -1, y: -4, z: 3 },
                scale: 5,
                },
              {
                component: <Detective />,
                position: { x: 0.5, y: -9.2, z: 5 },
                scale: 5,
              },
                {
                    component: <Detective />,
                    position: { x: 0.5, y: -9.2, z: 5 },
                    scale: 5,
                  },

      ];
    
    const [modelIndex, setModelIndex] = useState(0);
    const [textIndex, setTextIndex] = useState(0);
    const [showAdditionalButtons,setShowAdditionalButtons] = useState(false);
    const navigate = useNavigate();

    const handleContinueClick = () => {
        if (textIndex === texts.length - 1) {
        navigate('/Scene2-parts');
        return;
        }
        if (textIndex === 0) {
            setShowAdditionalButtons(true);
          }
          const newIndex = (modelIndex + 1) % models.length;
          setModelIndex(newIndex);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    };

    const canvasRef = useRef();
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.style.width = "50vw"; 
        canvas.style.height = "50vh";
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

    useEffect(() => {
      resizeCanvas();
    }, []);

    return (
        <div className="scene44-bg">
          <audio ref={audioRef} loop>
            <source src="../assets/sounds/terror.mp3" type="audio/mpeg" />
          </audio>
          <div 
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: "100vw", 
              maxHeight: "100vh", 
              overflow: "hidden",
            }}
          >
            <div className="container-1" style={{ marginRight: "-60px" }}>
              <div className="container-2">
                <div className="scene1part1-container">
                  <h1 className="title-part1">{titles[textIndex]}</h1>
                  <p className="scene1part1-text">{texts[textIndex]}
                  </p>
                </div>
                    <button onClick={handleContinueClick} className="button_continue" type="submit">
                    Continuar
                    </button>
              </div>
            </div>
            <div style={{ position: "relative", marginRight: "15rem", marginTop:"10rem" }}>
              <Canvas
                shadows={true}
                camera={{ position: [2, 1, 7] }}
                ref={canvasRef}
                style={{ width: "50vw", height: "50vh" }}
              >
                <ambientLight intensity={1} />
                <OrbitControls 
                   enableZoom={false}
                   maxPolarAngle={Math.PI / 2}
                   maxAzimuthAngle={Math.PI / 3} 
                   minAzimuthAngle={-Math.PI / 12}
                />
                {models.map((model, index) => (
                  <group key={index}>
                    {index === modelIndex && (
                      <group position={[model.position.x, model.position.y, model.position.z]} scale={model.scale}>
                        {model.component}
                      </group>
                    )}
                  </group>
                ))}
              </Canvas>
            </div>
          </div>
        </div>
    );
};

export default Parts4p4;