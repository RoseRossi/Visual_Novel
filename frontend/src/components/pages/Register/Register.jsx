import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import json from '../../../endponits.json';

/**
 * 
 * @param {/Register}
 * @returns component Register
 */
const Register = ({
    ...props
}) => {

    const [email, setEmail] = React.useState("");
    const [contraseña, setContraseña] = React.useState("");
    const [name, setName] = React.useState("");

    const navigate = useNavigate();

    /**
     * Verifica si el usuario esta registrado
     */
    const fectUserRegistered = async ({
            email,
            contraseña,
            name
    }) => {
        try {
            const isUserRegistered = json.registerUser;
            const response = await fetch(isUserRegistered, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email, 
                                       password: contraseña,
                                       name: name,
                                       lastname: "",
                }),
            });
            const data = await response.json();
            
            if (data.register) {
                alert("Bienvenido");
            } else {
                alert("Error al registrarse");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleonChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleonChangeContraseña = (event) => {
        setContraseña(event.target.value);
    }

    const handleonChangeName = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fectUserRegistered({ email, contraseña, name });
    };

    return (
        <>
        <h1 className="title">CONDENA COMPARTIDA</h1>
            <form onSubmit={handleSubmit} className="formRegister">

                <label className="texts">Nombre</label>
                    <input className="box"
                        name="name"
                        type="text"
                        placeholder=""
                        onChange={handleonChangeName}
                    />

                <label className="texts">Email</label>
                    <input className="box"
                        name="email"
                        type="text"
                        placeholder=""
                        onChange={handleonChangeEmail}
                    />
                
                <label className="texts">Contraseña</label>
                    <input className="box"
                        name="contraseña"
                        type="password"
                        placeholder=""
                        onChange={handleonChangeContraseña}
                    />
                <button className="button" style={{ cursor: 'pointer'}} type="submit">Registrarse</button>
                </form>
        </>
    );
}

export default Register;