import React from 'react'    
import {BiLockOpen, BiLock} from "react-icons/bi"
import OnOff from "./OnOff";
import { db } from "../firebase/firebaseConfig";
import { useObjectVal } from "react-firebase-hooks/database";

/*
    Lock Component
    This component is one of the cards that will show on the main page dashboard.
    It shows a label with the Lock status, a button to switch between the two states(Locked/Unlocked) and
    it's corresponding icon.
*/

function Lock() {
    //Fetching the lock's data from firebase realtime database using firebase react hooks
    const [activo, loadingActivo, errorActivo] = useObjectVal(
    db.ref("/Puerta/lock"));

    const data={
        // Card's Title
        titulo : "Candado",
        // Card's Info
        info :"Estado de la cerradura",
        // Card's Icon
        icono: activo ? BiLock : BiLockOpen
    };

    return (
        <div  className="interactive">
            <h3>{data.titulo}</h3>
            <span>{data.info}</span>
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
