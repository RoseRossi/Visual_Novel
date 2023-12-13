import React, { useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./parts5.css"

const Parts5BE = () => {
    const texts = [
        //bad ending (1)
        "Tenemos un hombre blanco de 1.80… signos evidentes de tortura y destripamiento; cuerpo irreconocible, rostro… se puede percibir vagamente que es el detective Thomas Johns… quién desapareció hace dos días desde que el comisario Smith emitió la orden de expedición hacía las bodegas abandonadas en el puerto… El comisario continúa desaparecido…creo… que debería cambiar de trabajo…",

    ];
    const titles = [
        //Bad ending
        "Oficial Martinez"
    ]

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
                                            <h1 className="title-part1">{titles[0]}</h1>
                                            <p className="scene1part1-text">{texts[0]}</p>
                                        </div>
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

export default Parts5BE;