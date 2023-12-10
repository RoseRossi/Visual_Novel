import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import "./Part43.css";

const Parts4p3 = () => {

  const [texts, setTexts] = useState([
    "[Lo mejor es cooperar… Necesito su ayuda después de todo…]",
    "Gracias por esperar, este es el comisario Smith. ",
    "Dijo que tenía pruebas, ¿Puede decirnos cuales?",
    "",
  ]);

  const [titles, setTitles] = useState([
    "Detective",
    "Thomas",
    "Smith",
    "Detective",
  ]);

  const models = [
    /*{
      component: <Thomas />,
      position: { x: 0.5, y: -7, z: 5 },
      scale: 5,
    },*/
  ];

  const [modelIndex, setModelIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [showAdditionalButtons,setShowAdditionalButtons] = useState(false);
  const navigate = useNavigate();
  const [shownOptions, setShownOptions] = useState(new Set());
  const [humanidad, setHumanidad] = useState(0);

  //setShownOptions(new Set());
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


  const [handPicked, setHandPicked] = useState(true); // Nuevo estado para verificar si la mano fue recogida
  const [photoPicked, setPhotoPicked] = useState(true);
  const [objectPicked, setObjectPicked] = useState(true);

  const handleOptionClick = (id) => {
    setShownOptions(prevShownOptions => new Set(prevShownOptions.add(id)));
    switch (id) {
      case "S4A":
        // If option A is selected
        if (handPicked) {
          setHumanidad(humanidad - 3);
          setTexts([
            "Encontré esta mano… en el piso, en unas bodegas.",
            "Espere, es… Comisario se parece a…",
            "Voy a vomitar…",
            "[Esto había sido una muy mala idea… el comisario vomitaba en la papelera y Thomas miraba con melancolía la mano]",
            "¿Tiene… algo más?",
          ]);
          setTitles([
              "Detective",
              "Thomas",
              "Smith",
              "Detective",
              "Thomas",
            ]);
          // ...
        } else {
          setTexts([
              "Había una mano tirada en el piso…",
              "¿Recuerda cómo se veía?",
              "[Les describí lo que vi, omití información pero nada que no fueran a encontrar después…]",
          ]);
          setTitles([
              "Detective",
              "Thomas",
              "Detective",
          ]);
        }
        break;
      case "S4B":
        // If option B is selected
        if (photoPicked) {
            setTexts([
                "Encontré esta foto.",
                "[El rostro de Thomas palideció]",
                "Pero… ¿cuándo me tomaron esta foto? Soy yo",
                "¿No recuerda algún altercado? ¿o la ropa que llevaba ese día?",
                "Es mi uniforme, comisario. Estoy todos los días aquí. Y no puedo ver bien el fondo…",
                "[Siguieron conversando pero no llegaron a nada…]",
                "¿Tiene… algo más?",
            ]);
            setTitles([
                "Detective",
                "Detective",
                "Thomas",
                "Smith",
                "Thomas",
                "Detective",
                "Thomas",
            ]);
        } else {
            setTexts([
              "[Les describí lo que ví, omití información pero nada que no fuesen a encontrar después…]",
              "¿Tiene… algo más?",
            ]);
            setTitles([
              "Detective",
              "Thomas",
            ]);
        }
        break;
      case "S4C":
        // If option C is selected
        if (objectPicked) {
            setTexts([
              "Encontré un [Objeto mundano de modelo simple]",
              "Esto me está mareando… ¿Cómo pudo traer eso?",
              "El comisario se sentó aludiendo a su mareo mientras se sostenía la cabeza...[También cuestionaba mis acciones, pero entre más lo sostenía más me gustaba su presencia…]",
              "Parece un… [Objeto] pero… está demasiado destruido y se ve… huele a sangre y mierda…",
              "Lenguaje… Pero si huele a … ¿De dónde sacó eso?",
              "Estaba en el piso, en medio de un círculo rojo corroído en el piso, pensé que podría ser importante… ",
            ]);
            setTitles([
                "Detective",
                "Thomas",
                "Detective",
                "Thomas",
                "Smith",
                "Detective",
            ]);
        } else {
            setTexts([
              "[Les describí lo que ví, omití información pero nada que no fuesen a encontrar después…]",
              "Podemos dejar lo que trajo con el equipo forense…",
              "[Sólo los observaba… me sentía muy débil y adolorido]",
            ]);
            setTitles([
                "Detective",
                "Smith",
                "Detective",
            ]);
        }
        break;
      default:
        setTexts(["Texto predeterminado para otras opciones"]);
    }
    const newIndex = (modelIndex + 1) % models.length;
     setModelIndex(newIndex);
     setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const element = document.getElementById('S4A');
  if (element) {
    element.addEventListener("show", () => {
      document.querySelector(".button_continue").style.display = "none";
    });
  }
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
  useEffect(() => {
    
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
              {showAdditionalButtons && textIndex === 3 && !shownOptions.has("S4A")  &&(
            <div>
              <div>
              <button onClick={() =>handleOptionClick("S4A")} className="options_scene4p2" id="S4A" >A. La Mano </button>
              </div>
            </div>   
          )}
            {showAdditionalButtons && textIndex === 4 && !shownOptions.has("S4B") &&(
                <div>
                  <div>
                  <button onClick={() =>handleOptionClick("S4B")} className="options_scene4p2" id="S4B">B. La Foto</button>
                  </div>
                </div>
            )}
            {showAdditionalButtons && textIndex === 6 && !shownOptions.has("S4C") && (
                <div>
                  <div>
                  <button onClick={() =>handleOptionClick("S4C")} className="options_scene4p2" id="S4C">C. Objeto mundano de modelo simple</button>
                  </div>
                </div>
            )}
            </div>
              <button onClick={handleContinueClick} className="button_continue" type="submit" >
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

export default Parts4p3;