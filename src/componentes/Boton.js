import React from "react";
import "../estilos/Boton.css"
function Boton({funclik,texto}){
    return(
        <button className="boton1" onClick={funclik}>{texto}</button>
    );
}
export default Boton;