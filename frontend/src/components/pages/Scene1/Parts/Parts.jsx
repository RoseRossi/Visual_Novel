import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import "./parts.css";
import { Feather } from "./Feather";
import { Notebook } from "./Notebook";
import { Clock } from "three";
import { Thomas } from "./Thomas";
import { Police } from "./Police";
import { Detective } from "./Detective"


import { canNextScene } from "../../../../api/utils.jsx";

const FeatherAnimation = () => {
  const featherRef = useRef();
  const clock = new Clock();

  useFrame(({ clock }) => {
    if (featherRef.current) {
      featherRef.current.position.x = Math.sin(clock.getElapsedTime()) * 1;
    }
  });
  
  return (
    <Feather ref={featherRef} position={[0, 2, -0.7]} scale={0.2} rotation={[-Math.PI / 2, Math.PI, 0]} />
  );
};

const Parts = () => {

  const texts = [
    "El bastardo hizo un árbol de navidad…en agosto",
    "Haha...",
    "Oficial Martinez… ¿Ya sabemos quién es? [Un pequeño y robusto policía tomó su libreta y comenzó a darme los detalles del irreconocible caballero… un luchador, bastante fornido y medía el doble que una persona promedio… No era una presa fácil, sin embargo, ahí estaba… un torso troceado, con mordidas en zonas tan importantes y su rostro, o lo que quedaba de él… con una profunda expresión de terror…]",
    "Detective, ¿cree que haya sido…?",
    "[Sabía a quién se refería… asentí, sabía que se trataba del recolector de huesos, seguía el mismo patrón… un grotesco baño de sangre y vísceras mordisqueadas; una parte de la víctima engullida y vomitada; otra desaparecida y esa… expresión en sus rostros… tan fácil de reconstruir la agonía y el miedo tan primitivo que se preservaba inmortalizado en sus ojos]",
    "Me da miedo pensar en lo que nos podría pasar a nosotros… a nuestras familias.",
    "Martinez… Si el recolector de huesos quisiera comernos, ya nos habría comido…",
    "Debería decir algo…",
    "Estaré con los testigos, Detective. Iré a buscarlo si encuentro algo relevante",
  ];
  const titles = [
    "Thomas",
    "Detective",
    "Detective",
    "Thomas",
    "",
    "Oficial Martinez",
    "Thomas",
    "Detective",
    "Thomas",
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
          <Notebook position={[0, 0, 0]} scale={0.8} rotation={[-Math.PI / 4, Math.PI, 0]} />
          <FeatherAnimation />
        </group>
      ),
      position: { x: -4, y: -2, z: 1 },
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
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);
  const navigate = useNavigate();

  // Methods.
  const [scene_, setScene_] = useState({
    scene: 1,
    total: 0,
    prev: '/Prologue'
  });

  const handleOptionClick = (id) => {
    if (id === "S4A"){
        console.log("sí op a");
        handleContinueClick();
        return;
    }else{
        console.log(id);
        handleContinueClick();
        return;
    }
  };

  const handleContinueClick = async () => {
    
    // Verificate if exist user in localStorage.
    if (localStorage.getItem("default") && 
        textIndex === texts.length - 1) {

      const data = JSON.parse(localStorage.getItem("default"));
      const response = await fetchPutDataProgressUser({
        email: data.email,
        scene: 2,
        total: data.total
      });

      if (response.status) {
        navigate('/Scene2-parts');
      } else {
        alert("No se pudo actualizar el progreso, intente nuevamente");
      }
            
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
    // Validate if can enter to this scene.
    if (!canNextScene(scene_.scene)) {navigate(scene_.prev);}
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
              {showAdditionalButtons && textIndex === 1 && (
                <div>
                  <div>
                    <button onClick={() =>handleOptionClick("S1A")} className="options_scene1" id="S1A">A. Thomas,  respeta a los muertos… esto es horrible</button>
                  </div>
                  <div>
                    <button onClick={() =>handleOptionClick("S1B")} className="options_scene1" id="S1B">B. Hahaha buena esa, Thomas. Hasta brilla y todo con la luz de las farolas</button>
                  </div>
                  <div>
                    <button onClick={() =>handleOptionClick("S1C")} className="options_scene1" id="S1C">C. *Darle un zape* no seas pagano…</button>
                  </div>
                  <div>
                    <button onClick={() =>handleOptionClick("S1D")} className="options_scene1" id="S1D">D. *No decir nada*</button>
                  </div>
                </div>
              )}
              {showAdditionalButtons && textIndex === 7 && (
                <div>
                  <div>
                    <button onClick={() =>handleOptionClick("S2A")} className="options_scene1" id="S2A">A. No le haga caso, Martinez… sólo está bromeando </button>
                  </div>
                  <div>
                    <button onClick={() =>handleOptionClick("S2B")} className="options_scene1" id="S2B">B. Es cierto, Martinez. realmente no tenemos ninguna posibilidad… sólo mírelo y mírese…</button>
                  </div>
                  <div>
                    <button onClick={() =>handleOptionClick("S2C")} className="options_scene1" id="S2C">C. Pensar en lo inevitable no le hará ningún bien, Martinez</button>
                  </div>
                  <div>
                    <button onClick={() =>handleOptionClick("S2D")} className="options_scene1" id="S2D">D. (No diré nada…)</button>
                  </div>
                </div>
              )}
            </div>
            {textIndex !== 7 && textIndex !== 1 && (
              <button onClick={handleContinueClick} className="button_continue" type="submit">
                Continuar
              </button>
            )}
          </div>
        </div>
        <div style={{ position: "relative", marginRight: "15rem", marginTop: "10rem" }}>
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

export default Parts;