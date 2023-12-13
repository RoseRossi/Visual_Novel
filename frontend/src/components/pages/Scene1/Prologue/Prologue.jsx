import React from "react";
import "./prologue.css";
import { useNavigate } from 'react-router-dom';
import { fetchPutDataProgressUser } from "../../../../api/fetchs.jsx";

const Prologue = () => {
  const navigate =  useNavigate();
  const handleContinueClick = async () => {
    // const response = await fetchPutDataProgressUser({
    //   email: "",
    //   scene: "1",
    //   total: "1"
    // });
    navigate('/Scene1-parts');
  };
  return (
    <>
      <div className="introduction">
        <div className="scene-introduction">
          <h2>Capítulo 1</h2>
          <h1>PRÓLOGO</h1>
          <div className="prologue-container">
          <p>
            [La escena es grotesca… demasiada sangre y ha pasado el suficiente tiempo para que despierte el hedor a
            sangre… Y sobre todo, partes de la víctima. Desperdigadas entre las ramas… está tan… desperdigado… que
            aparenta no haber muerto aquí, sin embargo, hay la suficiente sangre para saber que simplemente fue un
            homicidio cuidado en su repulsiva estética]
          </p>
          </div>
          <button className="button_continue" type="submit" onClick={handleContinueClick}>Continuar</button>
        </div>
      </div>
    </>
  );
};

export default Prologue;
