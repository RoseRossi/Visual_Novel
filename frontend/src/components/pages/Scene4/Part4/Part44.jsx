import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import "./Part44.css";
import {Detective} from "../../Scene1/Parts/Detective.jsx";
import {Thomas} from "../../Scene1/Parts/Thomas.jsx";
import useSound from 'use-sound';


const Parts4p4 = () => {
  const audioRef = useRef(null);
  const [play] = useSound("../assets/sounds/sonido.mp3");
  const [playSound, setPlaySound] = useState(false);

    const texts = [
        "[Desperté cuando ya habían llegado a las bodegas, ellos salieron antes y me dejaron en el coche…]",
        "[Decidí bajar para seguirlos… el recolector podía seguir aquí… no estaban a salvo]",
        "[Entre más me acercaba al centro del lugar, algo olía muy bien… me rugió el estómago… no había comido nada apropiado en dos días…]",
        "[Escuché voces, entre los pasajes de las bodegas… Parecían ellos pero también comencé a escuchar susurros… susurros que recordaba vagamente… estaba aquí]",
        "[No recuerdo el momento en el que perdí el conocimiento… ni en qué momento comenzaron los sonidos horribles de alguien masticando…y gritos desgarradores de un hombre…]",
        "¿Thomas?",
        "[Mi voz se escuchaba horrible, como si cortase y sentí como me atragantaba, el hambre se iba y era un sabor delicioso…]",
        "[Abrí los ojos sólo para ver que me estaba comiendo el cuerpo sin vida del comisario… Tenía un golpe en la cabeza, expuesto]",
        "[Thomas por otro lado, tenía las rodillas destrozadas… Sólo podía moverse arrastrándose, y pude ver que la puerta en la que se apoyaba estaba cerrada…]",
        "[Olía delicioso… mi cuerpo se movió instintivamente hacia él… mis movimientos no eran cómodos pero no me lastimaba…]",
        "Detective, por favor…",
        "Ahora me reconoces, Thomas…",
        "Por favor… no haga esto, detective.",
        "Me encantaría detenerme, Thomas. Pero hueles tan bien… ",
      ]
      ;
      const titles = [
        "Detective",
        "",
        "",
        "",
        "",
        "Detective",
        "",
        "",
        "",
        "",
        "Thomas",
        "Detective",
        "Thomas",
        "Detective",
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
            component: <Thomas />,
            position: { x: 0.5, y: -7, z: 5 },
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
        navigate('/Scene5-parts1');
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
        setPlaySound(false);
      }
    }, [playSound]);

    useEffect(() => {
      resizeCanvas();
    }, []);

    return (
        <div className="scene44-bg">
          <audio ref={audioRef} loop>
            <source src="../assets/sounds/sonido.mp3" type="audio/mpeg" />
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