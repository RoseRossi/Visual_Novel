import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useThree } from '@react-three/fiber';
import { Canvas} from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { Center, Float, Html, Text, Text3D } from "@react-three/drei"
import "./parts.css";
import useSound from 'use-sound';
import { Hand } from "./Hand";
import { Fork } from "./Fork";
import { Photo } from "./Photo";

    const Parts4p1 = () => {
    const canvasARef = useRef();
    const audioRef = useRef(null);
  
    const [currentTextC, setCurrentTextC] = useState(
      "¿Qué... pasó? [Me siento extraño, ajeno a mi cuerpo y siento náuseas... Ese hedor... Debo recoger todo lo que pueda e ir a la comisaría]"
    );

    const handleObjectHover = (event) => {
      event.nativeEvent.target.style.cursor = "pointer";
    };
  
    const handleObjectHoverOut = (event) => {
      event.nativeEvent.target.style.cursor = "auto";
    };
  
    const handleObjCClick = (textoC) => {
      setCurrentTextC(textoC);
    };
  
    return (
      <div className="scene3-bg">
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
          <audio ref={audioRef} loop>
            <source src="../assets/sounds/scene2C.mp3" type="audio/mpeg" />
          </audio>
          <div className="card-Scene2">
            <p className="textA-Scene2"> {currentTextC} </p>
          </div>
          <Canvas>
            <Hand
              position-x={6}
              position-y={3}
              position-z={5}
              scale={3}
              rotation-y={Math.PI - 1.5}
              onPointerOver={handleObjectHover}
              onPointerOut={handleObjectHoverOut}
              onClick={() =>
                handleObjCClick(
                  "[Es una mano masculina cercenada con las uñas encarnadas, está fresca y tiene muy buen aroma. Es casi apetecible..."
                )
              }
            />
            <Sparkles color="red" count={10} size={2} speed={2} scale={4} position={[0, -1, 0]} />
            <Fork
              position-x={1}
              position-y={3}
              position-z={5}
              scale={3}
              rotation-y={Math.PI - 1.5}
              onPointerOver={handleObjectHover}
              onPointerOut={handleObjectHoverOut}
              onClick={() =>
                handleObjCClick(
                  "Emana un aura intimidante, se ve inofensivo, aunque huela mal."
                )
              }
            />
            <Photo
              position-x={-4}
              position-y={3}
              position-z={5}
              scale={3}
              rotation-y={Math.PI - 1.5}
              onPointerOver={handleObjectHover}
              onPointerOut={handleObjectHoverOut}
              onClick={() =>
                handleObjCClick(
                  "Es una fotografía, está borrosa, pero creo reconocer a la persona en ella."
                )
              }
            />
          </Canvas>
        </div>
      </div>
    );
  };
  
  export default Parts4p1;