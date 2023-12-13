import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls} from "@react-three/drei";
import "./parts.css";
import useSound from "use-sound";
import { Link, useNavigate } from "react-router-dom";
import { AmbientLight, DirectionalLight } from 'three';

const Bag = React.lazy(() => import("./Bag"));
const Bones = React.lazy(() => import("./Bones"));
const Monster = React.lazy(() => import("./Monster"));
const Detective3 = React.lazy(() => import("./Detective3"));


const Parts3 = () => {
    const texts = [ //39 objetos
        /* 0 index*/"[Ha pasado un día desde que encontraron la escena del crimen… Edward está encargándose del papeleo y todos no notaran cuando vaya a investigar. El mapa es de la zona industrial, y hay marcas de lápiz borrado descuidadamente alrededor de una de las bodegas más pequeñas]",
        "[Me acerco a la zona marcada en el mapa… Tengo un mal presentimiento]",
        "[Qué lugar tan… desagradable…]",
        "[No dejo de sentir que alguien me observa]",
        /* 4 index "bag"*/"[aunque está cubierto, el olor sólo me deja una idea de qué puede ser…]",
        /* 5 index "bones"*/"[...Una pila de huesos a medio roer, con carne podrida y larvas… Con un terrible hedor… que me hace retroceder]",
        /* 6 index "no model"*/"Detective… Llega justo a tiempo.",
        /* 7 index*/"[Un golpe seco y todo se fue a negro]",
        /* 8 index "no model"*/"[...]",
        "[...]",
        "[Dolor… Un agudo dolor en mi abdomen, desde dentro. Me arrastró a la consciencia de nuevo]",
        "[MIERDA, MIERDA MIERDA]",
        "[Un hombre, comía de mí… desesperado, como un animal]",
        "[Podía sentir cómo arrancaba carne de mi cuerpo ahora irreconocible, que engullía… como si nada saciará su hambre… con cada parte de mí, sentía tanto dolor que necesitaba quedar inconsciente… no noté cómo nuestro alrededor se iluminaba de un rojo carmesí]",
        /* 14 index "monster"*/"Hazme un favor y muere de una vez. No puedo trabajar con tan poca carne…",
        "[Su voz era casi como escuchar sierras… si eso siquiera era posible]",
        "[No podía concentrarme, no podía hacer nada… iba a morir en manos de una bestia…]",
        "[No quiero morir… aún tengo mucho que hacer… empezando por este animal…]",
        "[Pude sentir como todo se sentía lejano… conocía este sentimiento… cuando cometes tantas estupideces en este trabajo, te acostumbras a estar a punto de morir…]",
        "[No quiero morir…]",
        "[No… quiero…]",
        "[Susurros en un lenguaje que no conocía, pero con lo que he visto, no me sorprendería si se tratase de magia…]",
        "[Mi cuerpo comenzó a sentirse caliente y los susurros se hicieron más fuertes, hasta volverse voces… voces tan fuertes que dolía escucharlas]",
        "[No podía ver… pero sabía que algo estaba frente a mí, no era el recolector… era algo más, algo que helaba la poca sangre que me quedaba]",
        /* 24 index "monster"*/"Al parecer, mi impaciente devorador olvidó que seguía con vida, detective…",
        "[Era una voz aún más horrible, intentaba ser amable y tener modales… pero se escuchaba gargantuesca y desagradable]",
        "¿Qui… quién eres",
        "[Apenas si pude escupir eso, no sentía mi cuerpo… no existía, ahora sólo estaba aquí con lo que sea que fuese eso]",
        /* 28 index "monster"*/"Le ofrezco un trato, detective… usted no quiere morir y yo… necesito un favor",
        "[¿Un trato?]",
        "¿Qué favor?",
        "[Pude volver a hablar… es una mala señal en estas circunstancias]",
        /* 32 index "monster"*/"No se preocupe, es algo que igual ya está haciendo…",
        "¿Qué?",
        /* 34 index "monster"*/"Morir",
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
        },//index=null
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },//index=0
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
            position: { x: -1, y: -3, z: 3.6 },
            scale: 7,
            rotation: { x: 10, y: 0, z: 0 },
        }, //index=3
        {
            component: <Bones />,
            position: { x: -1, y: 0, z: 3 },
            scale: 0.05,
        },//index=4
        {
            component: <Bones />,
            position: { x: -1, y: 15, z: 3 },
            scale: 0.05,
        },//index=5
        {
            component: <Bones />,
            position: { x: -1, y: 15, z: 3 },
            scale: 0.05,
        },
        {
            component: <Bones />,
            position: { x: -1, y: 15, z: 3 },
            scale: 0.05,
        },
        {
            component: <Bones />,
            position: { x: -1, y: 15, z: 3 },
            scale: 0.05,
        },
        {
            component: <Bones />,
            position: { x: -1, y: 15, z: 3 },
            scale: 0.05,
        },
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },//index=10
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
            component: <Bones />,
            position: { x: -1, y: 15, z: 3 },
            scale: 0.05,
        },    //index=13   
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
            position: { x: -1, y: -4, z: 3 },
            scale: 5,
        },    //index=23
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
            position: { x: -1, y: -4, z: 3 },
            scale: 5,
        },    //index=27
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
            position: { x: -1, y: -4, z: 3 },
            scale: 5,
        },    //index=31
        {
            component: <Detective3 />,
            position: { x: 0.5, y: -9.2, z: 5 },
            scale: 5,
        },
        {
            component: <Monster />,
            position: { x: -1, y: -4, z: 3 },
            scale: 5,
        },    //index=33
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
    ]

    /*const renderModel = (modelIndex) => {
        if (textIndex === 4) {
            return <Bag />;
        } else if (textIndex === 5) {
            return <Bones />;
        } else if (textIndex === 6 || textIndex === 8) {
          // No mostrar ningún modelo
            return null;
        } else if (textIndex === 14 || textIndex === 24 || textIndex === 28 || textIndex === 32 || textIndex === 34) {
            return <Monster />;
        } else {
            return <Detective3 />;
        }
    };*/

    const [modelIndex, setModelIndex] = useState(0);
    const [textIndex, setTextIndex] = useState(0);

    const navigate = useNavigate();

    const audioRef = useRef(null);
    const [playA] = useSound("../assets/sounds/bonk.mp3");
    const [playB] = useSound("../assets/sounds/fear.mp3", { volume: 0.3, loop: true });
    const [playC] = useSound("../assets/sounds/chew.mp3", { volume: 0.1, loop: true });
    const [playSound, setPlaySound] = useState(false);

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
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
            if (textIndex === 7) {
                playA();
            } else if (textIndex === 8) {
                playB();
            }
            setPlaySound(false);
        }
    }, [playSound, textIndex]);

    const blackLightColor = '#000000';
    const redLightColor = '#ff0000';

    const calculateLightColor = () => {
        if (textIndex === 10) return redLightColor;
        if (textIndex === 12) return redLightColor;
        if (textIndex === 20) return blackLightColor;
        return '#ffffff'; // Luz blanca predeterminada para otros casos
    };

    const calculateBackgroundColor = () => {
        if (textIndex === 10) return blackLightColor;
        if (textIndex === 12) return redLightColor;
        if (textIndex === 20) return blackLightColor;
        return '#ffffff'; // Color de fondo blanco predeterminado para otros casos
    };

    const handleContinueClick = () => {
        console.log("textIndex actual",textIndex);
        console.log("modelIndex actual",modelIndex);
        if (textIndex === texts.length - 1) {
            navigate('/Scene4-parts1');
            return;
          }
        const newIndex = (textIndex + 1) % texts.length;
        setModelIndex(newIndex);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      };

    const index=1;

    const canvasRef = useRef();
    /*const resizeCanvas = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.style.width = "50vw"; 
            canvas.style.height = "50vh";
        }
    };*/


        return (
            <Suspense key={index} fallback={<div>Loading...</div>}>
            <div className="scene3-bg">
                {/*{texts.map((text, index) => (*/}
                    {/*<Suspense key={index} fallback={<div>Loading...</div>}className={`scene3-bg`} style={{ backgroundColor: calculateBackgroundColor() }}>*/}
                        {/*<div className={`scene3-bg`}>*/}
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
                                        
                                        {models.map((model, modelIndex) => (
                                            <group key={modelIndex}>
                                                {modelIndex === textIndex && (
                                                    <group position={[model.position.x, model.position.y, model.position.z]} scale={model.scale} >
                                                        {/*renderModel(modelIndex)*/}
                                                        {model.component}
                                                    </group>
                                                )}
                                            </group>
                                        ))}
                                        <ambientLight intensity={0.5} color={calculateLightColor()} />
                                        <directionalLight intensity={1} position={[5, 5, 5]} color={calculateLightColor()} />
    
                                    </Canvas>
                                    <audio ref={audioRef} loop>
                                        <source src="../assets/sounds/fear.mp3" type="audio/mpeg" />
                                    </audio>
                                </div>
                            </div>
                        {/*</div>*/}
                    {/*</Suspense>*/}
                {/*}))}*/}
            </div>
            </Suspense>
        );
    };

export default Parts3;