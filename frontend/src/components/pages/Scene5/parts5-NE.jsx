import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useNavigate } from 'react-router-dom';
import "./parts5.css"



const Parts5NE = () => {
    const texts = [
        //Neutral ending (7 - 10)
        "[Escapé de la comisaría y volví a las bodegas… debo reponerme y darle caza a este miserable… Aunque…me siento… muy cansado… y hambriento]",
        "[Thomas olía muy bien… quizás pueda… ir por algo de comer…]",
        "El detective pierde la fuerza dentro de su propio cuerpo y se vuelve esclavo de su hambre, no puede evitar sentir cómo algo se burla de él, mientras ahora sólo se cuestiona y tortura por haber podido hacer las cosas diferente…",
        "[No he podido dormir en días… siento que me observan…]",
    ];
    const titles = [
        //Neutral ending
        "Detective",
        "Detective",
        "",
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
          //Poner la variación del diálogo
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

export default Parts5NE;