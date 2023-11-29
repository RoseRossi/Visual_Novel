import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import "./parts.css";
import { Bag } from "./Bag";
import { Bones } from "./Bones";
import { Monster } from "./Monster";
import { Detective3 } from "./Detective3";
import useSound from 'use-sound';
import { Link, useNavigate } from "react-router-dom";

const Parts3 = () => {
    const texts = [ //39 objetos
        "[Ha pasado un día desde que encontraron la escena del crimen… Edward está encargándose del papeleo y todos no notaran cuando vaya a investigar. El mapa es de la zona industrial, y hay marcas de lápiz borrado descuidadamente alrededor de una de las bodegas más pequeñas]",
        "[Me acerco a la zona marcada en el mapa… Tengo un mal presentimiento]",
        "[Qué lugar tan… desagradable…]",
        "[No dejo de sentir que alguien me observa]",
        "[aunque está cubierto, el olor sólo me deja una idea de qué puede ser…]",
        "[...Una pila de huesos a medio roer, con carne podrida y larvas… Con un terrible hedor… que me hace retroceder]",
        "Detective… Llega justo a tiempo.",
        "[Un golpe seco y todo se fue a negro]",
        "[...]",
        "[...]",
        "[Dolor… Un agudo dolor en mi abdomen, desde dentro. Me arrastró a la consciencia de nuevo]",
        "[MIERDA, MIERDA MIERDA]",
        "[Un hombre, comía de mí… desesperado, como un animal]",
        "[Podía sentir cómo arrancaba carne de mi cuerpo ahora irreconocible, que engullía… como si nada saciará su hambre… con cada parte de mí, sentía tanto dolor que necesitaba quedar inconsciente… no noté cómo nuestro alrededor se iluminaba de un rojo carmesí]",
        "Hazme un favor y muere de una vez. No puedo trabajar con tan poca carne…",
        "[Su voz era casi como escuchar sierras… si eso siquiera era posible]",
        "[No podía concentrarme, no podía hacer nada… iba a morir en manos de una bestia…]",
        "[No quiero morir… aún tengo mucho que hacer… empezando por este animal…]",
        "[Pude sentir como todo se sentía lejano… conocía este sentimiento… cuando cometes tantas estupideces en este trabajo, te acostumbras a estar a punto de morir…]",
        "[No quiero morir…]",
        "[No… quiero…]",
        "[Susurros en un lenguaje que no conocía, pero con lo que he visto, no me sorprendería si se tratase de magia…]",
        "[Mi cuerpo comenzó a sentirse caliente y los susurros se hicieron más fuertes, hasta volverse voces… voces tan fuertes que dolía escucharlas]",
        "[No podía ver… pero sabía que algo estaba frente a mí, no era el recolector… era algo más, algo que helaba la poca sangre que me quedaba]",
        "Al parecer, mi impaciente devorador olvidó que seguía con vida, detective…",
        "[Era una voz aún más horrible, intentaba ser amable y tener modales… pero se escuchaba gargantuesca y desagradable]",
        "¿Qui… quien eres",
        "[Apenas si pude escupir eso, no sentía mi cuerpo… no existía, ahora sólo estaba aquí con lo que sea que fuese eso]",
        "Le ofrezco un trato, detective… usted no quiere morir y yo… necesito un favor",
        "[¿Un trato?]",
        "¿Qué favor?",
        "[Pude volver a hablar… es una mala señal en estas circunstancias]",
        "No se preocupe, es algo que igual ya está haciendo…",
        "¿Qué?",
        "Morir",
        "[Sentí un abrasador dolor que me destrozaba desde adentro, se sentía como fuego pero casi frío...]",
        "[Creo haber gritado con todas mis fuerzas un “Sí”, pero no puedo recordarlo]",
        "[Todo es… borroso… no siento nada]",
        "[Estoy… ¿Estoy muerto?]",

    ];
    const titles = [
        "",
        "",
        "",
        "",
        "",
        "",
        "Recolector de huesos",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Recolector de huesos",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "???",
        "Detective",
        "",
        "",
        "???",
        "Detective",
        "",
        "",
        "???",
        "Detective",
        "???",
        "",
        "",
        "",

    ]
    
    const models = [
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },
        {
            component: <Bag />,
            position: { x: -1, y: 0.5, z: 3.6 },
            scale: 7,
        },
        {
            component: <Bones />,
            position: { x: -1, y: 0, z: 3 },
            scale: 0.05,
        },
        {
            component: <Monster />,
            position: { x: 0.5, y: -15, z: 5 },
            scale: 5,
        },
        {
            component: <Monster />,
            position: { x: 0.5, y: -15, z: 5 },
            scale: 5,
        },
        {
            component: <Monster />,
            position: { x: 0.5, y: -15, z: 5 },
            scale: 5,
        },
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },
        {
            component: <Monster />,
            position: { x: 0.5, y: -15, z: 5 },
            scale: 5,
        },
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },
        {
            component: <Monster />,
            position: { x: -0.5, y: -2, z: 1.5 },
            scale: 3,
        },
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },
        {
            component: <Monster />,
            position: { x: -0.5, y: -2, z: 1.5 },
            scale: 3,
        },
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },
        {
            component: <Monster />,
            position: { x: -0.5, y: -2, z: 1.5 },
            scale: 3,
        },
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },
        {
            component: <Monster />,
            position: { x: -0.5, y: -2, z: 1.5 },
            scale: 3,
        },
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },
        

    ];
    
    

    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const [backgrounds, setBackgrounds] = useState(["black", "url('/public/images/wh.jpg')", "url('/public/images/red.jpg')"]);
    const [dialogCount, setDialogCount] = useState(0);

    const changeBackground = (index) => {
        setBackgroundIndex(index);
    };

    const [modelIndex, setModelIndex] = useState(0);
    const [textIndex, setTextIndex] = useState(0);
    const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);

    const handleContinueClick = () => {
        setDialogCount(dialogCount + 1);
    
        if (textIndex === 0 || textIndex % 3 === 0) {
            changeBackground(1);
        } else if (textIndex % 2 === 0) {
            changeBackground(2);
        } else if (dialogCount === 39) {
            setDialogCount(0);
            changeBackground(1);
        } else {
            changeBackground(3);
        }
    
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
        
    return (
        <div className={`scene1-bg dynamic-background ${backgroundIndex === 1 ? 'scene3-bg-black' : ''} ${backgroundIndex === 2 ? 'scene3-bg-wh' : ''} ${backgroundIndex === 3 ? 'scene3-bg-red' : ''}`}>
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
                            <h className="title-part1">{titles[textIndex]}</h>
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
                        <ambientLight intensity={1} />
                        <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
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

export default Parts3;