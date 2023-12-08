import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import "./Part42.css";

const Parts4p2 = () => {

  const texts = [
    "[El camino a mi oficina es nostálgico… intenté abrir la puerta, pero no tenía mi llave] Carajo...",
    "Buenos días, caballero ¿Está perdido?",
    "[Esa voz era familiar]",
    "¡Thomas! [Lo tomé por los hombros. En su rostro había desconfianza y confusión]",
    "¿Lo conozco?",
    "Escucha, Thomas; no hay tiempo para esto. Tenemos que encontrar al recolector de huesos antes de que escape de la zona, si no lo ha hecho aún…",
  ]
  ;
  const titles = [
    "Detective",
    "",
    "Detective",
    "Detective",
    "Thomas",
    "Detective",
    
  ]

  const models = [
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
      component: <Thomas />,
      position: { x: 0.5, y: -7, z: 5 },
      scale: 5,
    },
    {
      component: (
        <group>
          <Notebook position={[0, 0, 0]} scale={0.8} rotation={[-Math.PI/4, Math.PI, 0]} />
          <FeatherAnimation />
        </group>
      ),
      position: {x: -4, y: -2, z: 1},
    },
    {
      component: <Police />,
      position: { x: -1, y: -11.5, z: 5 },
      scale: 3.7,
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
  useEffect(() => {
    resizeCanvas();
  }, []);


  return (
    <div className="scene1-bg">
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
              {showAdditionalButtons && textIndex === 1 &&(
            <div>
              <div>
              <button className="options_scene1" id="S1A">A. Thomas,  respeta a los muertos… esto es horrible</button>
              </div>
              <div>
              <button className="options_scene1" id="S1B">B. Hahaha buena esa, Thomas. Hasta brilla y todo con la luz de las farolas</button>
              </div>
              <div>
              <button className="options_scene1" id="S1C">C. *Darle un zape* no seas pagano…</button>
              </div>
              <div>
              <button className="options_scene1" id="S1D">D. *No decir nada*</button>
              </div>
            </div>
          )}
          {showAdditionalButtons && textIndex === 7 &&(
            <div>
              <div>
              <button className="options_scene1" id="S2A">A. No le haga caso, Martinez… sólo está bromeando </button>
              </div>
              <div>
              <button className="options_scene1" id="S2B">B. Es cierto, Martinez. realmente no tenemos ninguna posibilidad… sólo mírelo y mírese…</button>
              </div>
              <div>
              <button className="options_scene1" id="S2C">C. Pensar en lo inevitable no le hará ningún bien, Martinez</button>
              </div>
              <div>
              <button className="options_scene1" id="S2D">D. (No diré nada…)</button>
              </div>
            </div>
          )}
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

export default Parts4p2;