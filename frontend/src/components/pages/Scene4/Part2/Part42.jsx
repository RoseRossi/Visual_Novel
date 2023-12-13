import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import "./Part42.css";
import { Thomas } from "../../Scene1/Parts/Thomas.jsx";
import { Detective } from "../../Scene1/Parts/Detective.jsx";

const Parts4p2 = () => {

  const texts = [
    "[El camino a mi oficina es nostálgico… intenté abrir la puerta, pero no tenía mi llave] Carajo...",
    "Buenos días, caballero ¿Está perdido?",
    "[Esa voz era familiar]",
    "¡Thomas! [Lo tomé por los hombros. En su rostro había desconfianza y confusión]",
    "¿Lo conozco?",
    "Escucha, Thomas; no hay tiempo para esto. Tenemos que encontrar al recolector de huesos antes de que escape de la zona, si no lo ha hecho aún…",
    "¿Cómo sabe del recolector de huesos?, eso es información clasificada. Espere ¿Eso es sangre?",
    "[Señaló mi ropa, ésta no era mi ropa… y en efecto, estaba manchada de sangre… eso explicaba las miradas aterradas de camino a aquí]",
    "Es probable que sea mi sangre. Escucha tengo pruebas, Thomas; y sé dónde se refugiaba ",
    "Espere un momento, aquí.",
    "[Me dirigió a su oficina y cerró la puerta con llave… pude ver como iba de lado a lado hablando con el comisario y con la cadete Martha…]",
    "¿Qué hago ahora?",
  ]
  ;
  const titles = [
    "Detective",
    "",
    "Detective",
    "Detective",
    "Thomas",
    "Detective",
    "Thomas",
    "",
    "Detective",
    "Thomas",
    "",
    "Detective",
  ]

  const models = [
    {
      component: <Detective />,
      position: { x: 0.5, y: -9, z: 5 },
      scale: 5,
    },
    {
      component: <Thomas />,
      position: { x: 0.5, y: -7, z: 5 },
      scale: 5,
    },
    {
      component: <Detective />,
      position: { x: 0.5, y: -9, z: 5 },
      scale: 5,
    },
    {
      component: <Detective />,
      position: { x: 0.5, y: -9, z: 5 },
      scale: 5,
    },
    {
      component: <Thomas />,
      position: { x: 0.5, y: -7, z: 5 },
      scale: 5,
    },
    {
      component: <Detective />,
      position: { x: 0.5, y: -9, z: 5 },
      scale: 5,
    },
    {
      component: <Thomas />,
      position: { x: 0.5, y: -7, z: 5 },
      scale: 5,
    },
    {
      component: <Detective />,
      position: { x: 0.5, y: -9, z: 5 },
      scale: 5,
    },
    {
      component: <Detective />,
      position: { x: 0.5, y: -9, z: 5 },
      scale: 5,
    },
    {
      component: <Thomas />,
      position: { x: 0.5, y: -7, z: 5 },
      scale: 5,
    },
    {
      component: <Detective />,
      position: { x: 0.5, y: -9, z: 5 },
      scale: 5,
    },
    {
      component: <Detective />,
      position: { x: 0.5, y: -9, z: 5 },
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

  const handleOptionClick = (id) => {
    if (id === "S4A"){
        console.log("sí op a");
        navigate('/Scene2-parts');
        return;
    }else{
        console.log(id);
        navigate('/Scene4-parts3');
        return;
    }
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
    <div className="scene42-bg">
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
              {showAdditionalButtons && textIndex === 11 &&(
            <div>
              <div>
              <button onClick={() =>handleOptionClick("S4A")} className="options_scene4p2" id="S4A">A. Escapar</button>
              </div>
              <div>
              <button onClick={() =>handleOptionClick("S4B")} className="options_scene4p2" id="S4B">B. Quedarse</button>
              </div>
            </div>
          )}
            </div>
            {textIndex !== 11 && (
                <button onClick={handleContinueClick} className="button_continue" type="submit">
                Continuar
                </button>
            )}
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