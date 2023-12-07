import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSound from 'use-sound';
import "./home.css";
import { fectIsUserRegistered , fetchSendEmail } from "../../api/fetchs.jsx";
import CodeEmail from "./Validate/CodeEmail.jsx";

const Home = ({ ...props }) => {
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const audioRef = useRef(null);
    const [play] = useSound("../assets/sounds/bot.mp3");
    const [isRegister, setIsRegister] = useState(false);
    const [isSendEmail, setIsSendEmail] = useState(false);
    const [codeValue, setCodeValue] = useState("000000");

    const [playSound, setPlaySound] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleContraseñaChange = (event) => {
        setContraseña(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setPlaySound(true);
        setIsRegister(true);
        
        if (email !== "" && 
            contraseña !== "")
        {
            const response = await fectIsUserRegistered({ 
                email,
                contraseña 
            });

            if (response.isLogged) {
                const responseEmail = await fetchSendEmail({
                    email: email
                });
               
                if (responseEmail.isSend) {
                    setIsSendEmail(true);
                    setCodeValue(responseEmail.code);
                }
                //navigate('/Prologue');
                setIsRegister(false);
                return;
            }

            alert("No se pudo iniciar sesion, intente nuevamente");
        }
        setIsRegister(false);
    }

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
        <>
            <div className="home-bg">
                <h1 className="titulo">CONDENA COMPARTIDA</h1>

                <audio ref={audioRef} loop>
                    <source src="../assets/sounds/inicio.mp3" type="audio/mpeg" />
                </audio>
                {   !isSendEmail ?
                    <form className="formlogin" onSubmit={handleSubmit}>
                        <label className="textos">Email</label>
                        <input
                            className="almacen"
                            name="email"
                            type="text"
                            placeholder=""
                            value={email}
                            onChange={handleEmailChange}
                        />

                        <label className="textos">Contraseña</label>
                        <input
                            className="almacen"
                            name="contraseña"
                            type="password"
                            placeholder=""
                            value={contraseña}
                            onChange={handleContraseñaChange}
                        />
                        <button  
                                disabled={isRegister} 
                                className="boton" 
                                style={{ cursor: 'pointer' }} 
                                type="submit"
                        >
                                Ingresar
                        </button>
                        <Link to="/Register" className="register">Registrarse</Link>
                    </form>
                    :
                    <CodeEmail stateChange={
                        {
                            isSendEmail: isSendEmail,
                            setIsSendEmail: setIsSendEmail
                        }
                    } 
                    codeValue={codeValue}
                    dataUser={
                        {
                            email: email,
                            contraseña: contraseña
                        }
                    }
                    />
                }
            </div>
        </>
    );
}

export default Home;
