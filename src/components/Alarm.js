import React from 'react'
import {RiAlarmWarningLine,RiAlarmWarningFill} from "react-icons/ri"
import OnOff from './OnOff';
import { db } from "../firebase/firebaseConfig";
import { useObjectVal } from "react-firebase-hooks/database";

function Alarm() {
    const [activo, loadingActivo, errorActivo] = useObjectVal(
        db.ref("/Puerta/alarm"));

    const data={
        titulo : "Alarma",
        subtitulo : "Estado de la alarma",
        icono: activo ? RiAlarmWarningFill: RiAlarmWarningLine,
    };

    return (
        <div  className="interactive">
            <h3>{data.titulo}</h3>
            <span>{data.subtitulo}</span>
            <div className="interactive-info">
                <div className="interactive-icon">
                    <data.icono/>
                </div>
                <OnOff messages={["Activada", "Desactivada"]} 
                status={activo} path={"/Puerta/alarm"} />
            </div>
        </div>
    )
}

export default Alarm;
