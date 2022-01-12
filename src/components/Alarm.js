import React from 'react'
import {RiAlarmWarningLine,RiAlarmWarningFill} from "react-icons/ri"
import OnOff from './OnOff';
import { db } from "../firebase/firebaseConfig";
import { useObjectVal } from "react-firebase-hooks/database";
/*
    Alarm Component
    This component is one of the cards that will show on the main page dashboard.
    It shows a label with the alarm status, a button to switch between the two states and
    it's corresponding icon.
*/

function Alarm() {
    //Call to firebase API to get the alarmn status, using Firebase reactHooks
    const [activo, loadingActivo, errorActivo] = useObjectVal(
        db.ref("/Puerta/alarm"));

    //Component's data
    const data={
        // Card's Title :: String
        titulo : "Alarma",
        //Card's Info :: String
        info : "Estado de la alarma",
        //Card's Icon :: SVG
        icono: activo ? RiAlarmWarningFill: RiAlarmWarningLine,
    };

    return (
        <div  className="interactive">
            <h3>{data.titulo}</h3>
            <span>{data.info}</span>
            <div className="interactive-info">
                <div className="interactive-icon">
                    <data.icono/>
                </div>
                <OnOff messages={["Activada", "Desactivada"]} 
                 path={"/Puerta/alarm"} />
            </div>
        </div>
    )
}

export default Alarm;
