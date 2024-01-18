import React from "react";
import "../estilos/Nota.css";
import { useState } from "react";
function Nota({texto,borrar,good}){
    const [nuevoTexto, setNuevoTexto] = useState(texto.texto);
    
    return(
        <div className="meta">
            <div className="txt1">{texto}</div>
            <div className="bt"><button className="borrar " onClick={borrar}>eliminar</button>
            <button className="borrar " onClick={good}> completado</button></div>
            
        </div>
    );
}
export default Nota;