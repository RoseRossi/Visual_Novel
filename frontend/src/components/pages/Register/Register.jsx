import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import { fectUserRegistered } from "../../../api/fetchs.jsx";

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
    const [isRegister, setIsRegister] = React.useState(false);

    const navigate = useNavigate();

    const handleonChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleonChangeContraseña = (event) => {
        setContraseña(event.target.value);
    }

    const handleonChangeName = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsRegister(true);
        if (email !== "" && contraseña !== "" && name !== "") {
            const response = await fectUserRegistered({ 
                email, 
                contraseña,
                name
            });
            
            if (response.register) {
                alert("Registrado correctamente");
                navigate("/");
            }
            else {
                alert("No se pudo registrar, intente nuevamente o ya esta registrado");
            }
        }
        setIsRegister(false);
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
                <button className="button" 
                        disabled={isRegister}
                        style={{ cursor: 'pointer'}} 
                        type="submit">Registrarse
                </button>

            </form>
        </>
    );
}

export default Register;