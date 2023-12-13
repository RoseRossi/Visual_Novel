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
    const navigate = useNavigate();
    const [play] = useSound("../assets/sounds/scene2.mp3");
    const [playSound, setPlaySound] = useState(false);
    const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);

    const handleContinueClick = () => {
          navigate('/Scene4-parts2');
          return;
    }

    const handleOptionClick = (id) => {
        if (id === "S4A"){
            console.log("sí op a");
            handleBackClick();
            return;
        }else{
            console.log(id);
            handleBackClick();
            return;
        }
      };

      const finalText = "[Puede que aún haya algo más...] "
      const handleBackClick = () => {
        setCurrentTextC(finalText);
        setShowAdditionalButtons(false);
        setClickedObject(null);  
      };

      const [clickedObject, setClickedObject] = useState(null);
  
    const [currentTextC, setCurrentTextC] = useState(
      "¿Qué... pasó? [Me siento extraño, ajeno a mi cuerpo y siento náuseas... Ese hedor... Debo recoger todo lo que pueda e ir a la comisaría]"
    );

    const handleObjectHover = (event) => {
      event.nativeEvent.target.style.cursor = "pointer";
    };
  
    const handleObjectHoverOut = (event) => {
      event.nativeEvent.target.style.cursor = "auto";
    };
  
    const handleObjCClick = (textoC, objectName) => {
        console.log("clickedObject inside handleObjCClick:", objectName);
      setCurrentTextC(textoC);
      setShowAdditionalButtons(true);
      setClickedObject(objectName);
    };

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.volume = 0.1;
            audioRef.current.play();
        }
    }

    useEffect(() => {
        document.addEventListener("click", playAudio);
        return () => {
            document.removeEventListener("click", playAudio);
        };
    }, []);

    useEffect(() => {
        if (playSound) {
            play();
            setPlaySound(false);
        }
    }, [playSound]);
  
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
        <div className= "container-Scene42" >
            <audio ref={audioRef} loop>
                <source src="../assets/sounds/scene2C.mp3" type="audio/mpeg" />
            </audio>
            <div className="card-Scene42">
                <p className="textA-Scene2"> {currentTextC} </p>
            </div>
            {showAdditionalButtons && clickedObject === "Hand" && (
                <div>
                  <div>
                    <button onClick={() =>handleOptionClick("S1A")} className="options_scene14" id="S1A">A. *Recogerla*  Quizás… sea útil, de alguna manera...</button>
                  </div>
                  <div>
                    <button onClick={() =>handleOptionClick("S1B")} className="options_scene14" id="S1B">B. *Comerla* [Estaba hambriento. Y con cada mordida podía deleitarme con un sabor tan delicioso y refrescante... no me enorgullezco de esto...]</button>
                  </div>
                  <div>
                    <button onClick={() =>handleOptionClick("S1C")} className="options_scene14" id="S1C">C. *Dejarla* [No tengo nada para guardarla o tomarla sin dañar la evidencia. Cuando traiga al equipo la recogerán si sirve de algo]</button>
                  </div>
                </div>
              )}
              {showAdditionalButtons && clickedObject === "Fork" && (
                <div>
                  <div>
                    <button onClick={() =>handleOptionClick("S1A")} className="options_scene14" id="S1A">A. *Recogerlo*  Esto no debería estar tirado aquí, aunque no es importante.</button>
                  </div>
                  <div>
                    <button onClick={() =>handleOptionClick("S1B")} className="options_scene14" id="S1B">B. *Tirarlo* No necesito ser un cura para saber que esto está maldito.</button>
                  </div>
                  <div>
                    <button onClick={() =>handleOptionClick("S1C")} className="options_scene14" id="S1C">C. *Ignorarlo* Mejor no estorbarle...</button>
                  </div>
                </div>
              )}
              {showAdditionalButtons && clickedObject === "Photo" && (
                <div>
                  <div>
                    <button onClick={() =>handleOptionClick("S1A")} className="options_scene14" id="S1A">A. *Recogerla*  [Creo que es... Thomas... pero no estoy seguro. El equipo podrá darle más uso]</button>
                  </div>
                  <div>
                    <button onClick={() =>handleOptionClick("S1B")} className="options_scene14" id="S1B">B. *Quemarla* [No necesito esto tirado por ahí...]</button>
                  </div>
                  <div>
                    <button onClick={() =>handleOptionClick("S1C")} className="options_scene14" id="S1C">C. *Dejarla* [No sirve para nada...]</button>
                  </div>
                </div>
              )}
            {(
                  <button className="button_continue" onClick={handleContinueClick}>
                    Ir a la Comisaria
                  </button>
                )}
        </div>
        <Canvas
          style={{ position: "absolute", top: 0, left: 0 }}
          camera={{ position: [0, 0, 10], fov: 70 }}
          gl={{ antialias: true }}
        >
          <ambientLight intensity={0.5} />
          <Hand
            position-x={0}
            position-y={-2}
            position-z={1}
            scale={0.13}
            rotation-z={1}
            rotation-x={-1}
            rotation-y={0}
            onPointerOver={handleObjectHover}
            onPointerOut={handleObjectHoverOut}
            onClick={() =>
              handleObjCClick(
                "[Es una mano masculina cercenada con las uñas encarnadas, está fresca y tiene muy buen aroma. Es casi apetecible...]", "Hand"
              )
            }
          />
          <Sparkles
                color="red" 
                count={10}
                size={5}
                speed={2}
                scale={4}  
                position={[0, -1.5, 1]}
            />
          <Fork
            position-x={4}
            position-y={-1}
            position-z={5}
            scale={0.2}
            rotation-z={1}
            rotation-y={3}
            onPointerOver={handleObjectHover}
            onPointerOut={handleObjectHoverOut}
            onClick={() =>
              handleObjCClick(
                "Emana un aura intimidante, se ve inofensivo, aunque huela mal.", "Fork"
              )
            }
        />
            <Sparkles
                color="silver" 
                count={10}
                size={5}
                speed={2}
                scale={4}  
                position={[8, -1.5, 0]}
            />
          <Photo
            position-x={-8}
            position-y={-2}
            position-z={1}
            scale={1.5}
            rotation-y={Math.PI - 1.5}
            onPointerOver={handleObjectHover}
            onPointerOut={handleObjectHoverOut}
            onClick={() =>
              handleObjCClick(
                "Es una fotografía, está borrosa, pero creo reconocer a la persona en ella.", "Photo"
              )
            }
          />
          <Sparkles
                color="yellow" 
                count={10}
                size={5}
                speed={2}
                scale={4}  
                position={[-7, -1.5, 1]}
            />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    </div>
  );
};

export default Parts4p1;