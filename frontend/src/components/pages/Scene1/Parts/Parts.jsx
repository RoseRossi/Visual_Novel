import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import "./parts.css";
import { Feather } from "./Feather";
import { Notebook } from "./Notebook";
import { Clock } from "three";

const FeatherAnimation = () => {
  const featherRef = useRef();
  const clock = new Clock();

  useFrame(({clock}) => {
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
      component: (
        <group>
          <Notebook position={[0, 0, 0]} scale={0.8} rotation={[-Math.PI/4, Math.PI, 0]} />
          <FeatherAnimation />
        </group>
      ),
      position: {x: -4, y: -2, z: 1},
    },
    {
      component: <Feather />,
      position: { x: -3, y: 0, z: 1 },
      scale: 0.5,
    }
  ];

  const [modelIndex, setModelIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const handleContinueClick = () => {
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

  const Part2 = () => {
    return (
      <>
        <div className="container">
          <div className="scene1part1-container">
            <h className="title-part1">Mila</h>
            <p className="scene1part1-text">Funciona?</p>
          </div>
        </div>
      </>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "100vw", 
        maxHeight: "100vh", 
        overflow: "hidden",
        background: `url('./assets/images/bgPrologue.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-1" style={{ marginRight: "-60px" }}>
        <div className="container-2">
          <div className="scene1part1-container">
            <h className="title-part1">{titles[textIndex]}</h>
            <p className="scene1part1-text">{texts[textIndex]}
            </p>
          </div>
          <button onClick={handleContinueClick} className="button_continue" type="submit">
            Continuar
          </button>
        </div>
      </div>
      <div style={{ position: "relative", marginRight: "15rem", marginTop:"15rem" }}>
        <Canvas
          shadows={true}
          camera={{ position: [2, 1, 7] }}
          ref={canvasRef}
          style={{ width: "50vw", height: "50vh" }}
        >
          <ambientLight intensity={1} />
          <OrbitControls makeDefault />
          {models.map((model, index) => (
            <group key={index}>
              {index === modelIndex && (
                <group position={[model.position.x, model.position.y, model.position.z]} scale={model.scale}>
                  {model.component}
                </group>
              )}
            </group>
          ))}
          {/* {models[modelIndex]}
          <Snowman
            position-x={-3}
            position-y={-2}
            position-z={1}
            rotation-y={-Math.PI * -0.03}
            scale={2.7}
          /> */}
        </Canvas>
      </div>
    </div>
  );
};

export default Parts;
