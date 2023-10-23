import React from "react";
import React, { useState, useContext, useRef} from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/user";
import UserContext from "../../context/user/UserContext";
import ReCAPTCHA from "react-google-recaptcha";

/**
 * 
 * @param {*} param0 
 * @returns component Home
 */
const Home = ({
    ...props
}) => {
    return (
        <>
            <h1>Visual Web Novel a</h1>
        </>
    );
}

export default Home;