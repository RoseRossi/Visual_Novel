import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

/**
 * 
 * @param {/Register}
 * @returns component Register
 */
const Register = ({
    ...props
}) => {

    const [email, setEmail] = ("");
    const [contraseña, setContraseña] = ("");
    const [name, setName] = ("");

    const navigate = useNavigate();

    return (
        <>
        <h1 className="title">CONDENA COMPARTIDA</h1>
            <form  className="formRegister">

                <label className="texts">Nombre</label>
                    <input className="box"
                        name="name"
                        type="text"
                        placeholder=""
                        value={name}
                    />

                <label className="texts">Email</label>
                    <input className="box"
                        name="email"
                        type="text"
                        placeholder=""
                        value={email}
                    />
                
                <label className="texts">Contraseña</label>
                    <input className="box"
                        name="contraseña"
                        type="password"
                        placeholder=""
                        value={contraseña}
                    />
                <button className="button" style={{ cursor: 'pointer'}} type="submit">Registrarse</button>
                </form>
        </>
    );
}

export default Register;