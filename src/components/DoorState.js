import React from 'react'
import {BsFillDoorOpenFill,BsFillDoorClosedFill} from "react-icons/bs";
import { db } from "../firebase/firebaseConfig";
import { useObjectVal } from "react-firebase-hooks/database";

function DoorState() {
    const [estado, loadingEstado, errorEstado] = useObjectVal(
        db.ref("/Puerta/status")
    );

    return (
        <div className="nonInteractive">
            <h3>Puerta</h3>
            <span>Estado de la puerta</span>
            <div className="nonInteractive-info">
                <div className="nonInteractive-icon">
                    {!estado ? "" : estado==="Abierta" ? <BsFillDoorOpenFill/> : <BsFillDoorClosedFill/>}
                </div>
                <h3>{estado}</h3>
            </div>
        </div>
    )
}

export default DoorState;
