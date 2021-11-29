import React,{useState} from 'react'    
import {BiLockOpen, BiLock} from "react-icons/bi"
import Toggle from "./Toggle";

function Lock() {
    const [toggled,setToggled] = useState(false);
    const data={
        titulo : "Candado",
        subtitulo :"Estado de la cerradura",
        icono: toggled ? BiLock : BiLockOpen,
        mensaje: toggled ? "Bloqueada" : "Desbloqueada"
    };
    return (
        <div  className="interactive">
            <h3>{data.titulo}</h3>
            <span>{data.subtitulo}</span>
            <div className="interactive-info">
                <div className="interactive-icon">
                <data.icono/>
                </div>
                <h3 className="interactive-message">{data.mensaje}</h3>
                <Toggle onChange={(event) =>setToggled(event.target.checked)}/>
            </div>
        </div>
    )
}

export default Lock
