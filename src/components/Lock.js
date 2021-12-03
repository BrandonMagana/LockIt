import React from 'react'    
import {BiLockOpen, BiLock} from "react-icons/bi"
import OnOff from "./OnOff";
import { db } from "../firebase/firebaseConfig";
import { useObjectVal } from "react-firebase-hooks/database";

function Lock() {
    const [activo, loadingActivo, errorActivo] = useObjectVal(
    db.ref("/Puerta/lock"));

    const data={
        titulo : "Candado",
        subtitulo :"Estado de la cerradura",
        icono: activo ? BiLockOpen:BiLock,
    };

    return (
        <div  className="interactive">
            <h3>{data.titulo}</h3>
            <span>{data.subtitulo}</span>
            <div className="interactive-info">
                <div className="interactive-icon">
                    <data.icono/>
                </div>
                <OnOff messages={["Bloqueada","Desbloqueda"]} 
                status={activo} path={"/Puerta/lock"} />
            </div>
        </div>
    )
}

export default Lock
