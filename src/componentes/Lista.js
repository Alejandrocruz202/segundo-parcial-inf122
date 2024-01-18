import React from "react";
import Boton from "./Boton";
import Nota from "./Nota"
import { useState } from "react";
import "../estilos/Lista.css";
function Lista(){
    const [notas, setNotas] = useState([]);
    const [mensaje, setMensaje] = useState([]);
    
    const [echas,setEchas] = useState(0);
    const [faltan,setFaltan] = useState(1);
    const agregarNota = () => {
        setFaltan(faltan+1);
        
    };
    const cumplir=()=>{
        if(faltan>0){
            setEchas(echas+1);setFaltan(faltan-1)
        }
        
        
    }
    
    return(
        <div className="main">
            <h1>Mis metas</h1>
            <div className="meter">
                <input
                className="input"
                type="text"
                />
                <Boton texto="Agregar" funclik={agregarNota}>Nueva meta</Boton>
            </div>
            <div className="complete"><div className="completada">completadas: {echas}</div><div className="pendiente">pendientes: {faltan}</div></div>
            
            <Nota texto="ayudaaaaaa" good={cumplir}/>
        </div>
    );
    
}
export default Lista;
