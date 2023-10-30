import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSound from 'use-sound';
import "./home.css";

const Home = ({ ...props }) => {
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const audioRef = useRef(null);
    const navigate = useNavigate();
    const [play] = useSound("../assets/bot.mp3");

    const [playSound, setPlaySound] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleContraseñaChange = (event) => {
        setContraseña(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
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
                <button className="boton" style={{ cursor: 'pointer' }} type="submit" onClick={handleButtonClick}>Ingresar</button>
                <Link to="/Register" className="register">Registrarse</Link>
            </form>
        </>
    );
}

export default Home;
