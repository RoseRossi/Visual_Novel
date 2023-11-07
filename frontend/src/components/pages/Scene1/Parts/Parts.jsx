import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Snowman } from "./Snowman";
import { Html, OrbitControls } from "@react-three/drei";
import "./parts.css";

const Parts = () => {
  const canvasRef = useRef();

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.style.width = "50vw"; // Ancho en unidades de vista
      canvas.style.height = "50vh"; // Alto en unidades de vista
    }
  };

  useEffect(() => {
    resizeCanvas();
  }, []);

  const boxRef = useRef();
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
        maxWidth: "100vw", // Ancho máximo en unidades de vista
        maxHeight: "100vh", // Alto máximo en unidades de vista
        overflow: "hidden", // Para evitar las barras de desplazamiento
      }}
    >
      <div className="container-1" style={{ marginRight: "-60px" }}>
        <div className="container-2">
          <div className="scene1part1-container">
            <h className="title-part1">Thomas</h>
            <p className="scene1part1-text">
              El bastardo hizo un árbol de navidad… en agosto
            </p>
          </div>
          <button onClick={Part2} className="button_continue" type="submit">
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
          <OrbitControls makeDefault />
          <Snowman
            position-x={-3}
            position-y={-2}
            position-z={1}
            rotation-y={-Math.PI * -0.03}
            scale={2.7}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default Parts;
