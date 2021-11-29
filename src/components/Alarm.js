import React, {useState} from 'react'
import {RiAlarmWarningLine,RiAlarmWarningFill} from "react-icons/ri"
import Toggle from './Toggle';

function Alarm() {
    const [toggled,setToggled] = useState(false);
    const data={
        titulo : "Alarma",
        subtitulo : "Estado de la alarma",
        icono: toggled ? RiAlarmWarningLine: RiAlarmWarningFill,
        mensaje: toggled ? "Activada": "Desactivada"
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

export default Alarm;
