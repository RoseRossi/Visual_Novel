import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useNavigate } from 'react-router-dom';
import "./parts5.css"



const Parts5GE = () => {
    const texts = [
        //Good ending (2 - 6)
        "Anne, date prisa. Debo pasar por el cementerio antes de que vayamos al laboratorio…",
        "Ya voy detective, necesitaba recoger el nuevo equipo que Pierro nos pidió probar",
        "Trae las flores, yo cargo el coche",
        "[Cargamos los aparatos en el coche, y nos dirigimos al cementerio… ya había memorizado el camino entre tantas tumbas…]",
        "Buenas tardes, detective. Disculpe la demora…",
    ];
    const titles = [
        //Good ending
        "Thomas",
        "Anne",
        "Thomas",
        "Thomas",
        "Thomas",
    ]

    const [modelIndex, setModelIndex] = useState(0);
    const [textIndex, setTextIndex] = useState(0);

    const [showButton, setShowButton] = useState(true);

    const handleContinueClick = () => {
        console.log("textIndex actual",textIndex);
        console.log("modelIndex actual",modelIndex);
        if (textIndex === texts.length - 2) {
            setShowButton(false);
          }

        const newIndex = (textIndex + 1) % texts.length;
        setModelIndex(newIndex);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      };

    const index=1;

    const canvasRef = useRef();

        return (
            <Suspense key={index} fallback={<div>Loading...</div>}>
            <div className="scene5-bg">
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
                                            <p className="scene1part1-text">{texts[textIndex]}</p>
                                        </div>
                                        {showButton && (
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
                                    </Canvas>
                                </div>
                            </div>
            </div>
            </Suspense>
        );
    };

export default Parts5GE;
