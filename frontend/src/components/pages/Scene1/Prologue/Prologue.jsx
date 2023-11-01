import React from "react";
import "./prologue.css";


const Prologue = () => {
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
        <button className="button_continue" type="submit">Continuar</button>
      </div>
    </div>
    </>
  );
};

export default Prologue;
