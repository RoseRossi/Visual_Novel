import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useNavigate } from 'react-router-dom';
import "./parts5.css"



const Parts5 = () => {
    const texts = [
        //bad ending (1)
        "Tenemos un hombre blanco de 1.80… signos evidentes de tortura y destripamiento; cuerpo irreconocible, rostro… se puede percibir vagamente que es el detective Thomas Johns… quién desapareció hace dos días desde que el comisario Smith emitió la orden de expedición hacía las bodegas abandonadas en el puerto… El comisario continúa desaparecido…creo… que debería cambiar de trabajo…",

        //Good ending (2 - 6)
        "Anne, date prisa. Debo pasar por el cementerio antes de que vayamos al laboratorio…",
        "Ya voy detective, necesitaba recoger el nuevo equipo que Pierro nos pidió probar",
        "Trae las flores, yo cargo el coche",
        "[Cargamos los aparatos en el coche, y nos dirigimos al cementerio… ya había memorizado el camino entre tantas tumbas…]",
        "Buenas tardes, detective. Disculpe la demora…",

        //Neutral ending (7 - 10)
        "[Escapé de la comisaría y volví a las bodegas… debo reponerme y darle caza a este miserable… Aunque…me siento… muy cansado… y hambriento]",
        "[Thomas olía muy bien… quizás pueda… ir por algo de comer…]",
        "El detective pierde la fuerza dentro de su propio cuerpo y se vuelve esclavo de su hambre, no puede evitar sentir cómo algo se burla de él, mientras ahora sólo se cuestiona y tortura por haber podido hacer las cosas diferente…",
        "[No he podido dormir en días… siento que me observan…]",

        //Index 11
        ""

    ];
    const titles = [
        //Bad ending
        "Oficial Martinez",

        //Good ending
        "Thomas",
        "Anne",
        "Thomas",
        "Thomas",
        "Thomas",

        //Neutral ending
        "Detective",
        "Detective",
        "",
        "Thomas",
        ""
    ]
    const models = [
    ]


    const [modelIndex, setModelIndex] = useState(0);
    const [textIndex, setTextIndex] = useState(0);

    const navigate = useNavigate();

    const handleContinueClick = () => {
        console.log("textIndex actual",textIndex);
        console.log("modelIndex actual",modelIndex);
        if (textIndex === texts.length - 1) {
            navigate('/Scene');
            return;
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
                                        <button onClick={handleContinueClick} className="button_continue" type="submit">
                                            Continuar
                                        </button>
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

export default Parts5;