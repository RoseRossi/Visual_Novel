import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import "./parts.css";


const Parts = () => {
  const boxRef = useRef();
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

  const [textIndex, setTextIndex] = useState(0);

  const handleContinueClick = () => {
    setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const Part2 =()=>{
    return(
      <>
        <div className="container">
              <div className="scene1part1-container">
                <h className="title-part1">Mila</h>
                    <p className="scene1part1-text">
                        Funciona?
                    </p>
              </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container">
          <div className="scene1part1-container">
            <h className="title-part1">{titles[textIndex]}</h>
                <p className="scene1part1-text">{texts[textIndex]}</p>
          </div>
          <button onClick={handleContinueClick} className="button_continue" type="submit">
            Continuar
          </button>
        </div>
      <Canvas
            shadows = {true}
            camera={{position: [2,1,7]}}
      >
        <mesh ref={boxRef} position={[-30,5,-5]} castShadow>
            <boxGeometry args={[10,10,10]} />
            <meshStandardMaterial color="#54C1EF"  />
        </mesh>
      </Canvas>
    </>
  );
};

export default Parts;
