import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSound from 'use-sound';
import "./home.css";
import json from '../../endponits.json';

const Home = ({ ...props }) => {
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const audioRef = useRef(null);
    const navigate = useNavigate();
    const [play] = useSound("../assets/bot.mp3");
    const [isRegister, setIsRegister] = useState(false);

    const [playSound, setPlaySound] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleContraseñaChange = (event) => {
        setContraseña(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsRegister(true);
        fectUserRegistered({ email, contraseña });
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
    
    /**
     * Verifica si el usuario esta registrado
     */
    const fectUserRegistered = async ({
        email,
        contraseña,
    }) => {
        try {
            const isUserRegistered = json.isUserRegistered;
            const response = await fetch(isUserRegistered, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, contraseña }),
            });
            const data = await response.json();
         
            if (data.isLogged ) {
                alert("Bienvenido");
            } else {
                alert("Usuario o contraseña incorrecta");
            }
            setIsRegister(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handleButtonClick = () => {
        setPlaySound(true);
    }
    

    return (
        <>
            <h1 className="titulo">CONDENA COMPARTIDA</h1>

            <audio ref={audioRef} loop>
                <source src="../assets/inicio.mp3" type="audio/mpeg" />
            </audio>

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
                        onClick={handleButtonClick}>
                        Ingresar
                </button>
                <Link to="/Register" className="register">Registrarse</Link>
            </form>
        </>
    );
}

export default Home;
