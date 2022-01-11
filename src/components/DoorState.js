import React from 'react'
import {BsFillDoorOpenFill,BsFillDoorClosedFill} from "react-icons/bs";
import { db } from "../firebase/firebaseConfig";
import { useObjectVal } from "react-firebase-hooks/database";

/*
    DoorState Component
    This component is one of the cards that will show on the main page dashboard.
    It shows a label with the Door status(Open/Closed and
    it's corresponding icon.
*/
function DoorState() {
    //Fetching door status data with firebase reacthooks 
    const [estado, loadingEstado, errorEstado] = useObjectVal(
        db.ref("/Puerta/status")
    );

    return (
        <div className="nonInteractive">
            <h3>Puerta</h3>
            <span>Estado de la puerta</span>
            <div className="nonInteractive-info">
                <div className="nonInteractive-icon">
                    {/* Logic used to change between icons */}
                    {!estado ? "" : estado==="Abierta" ? <BsFillDoorOpenFill/> : <BsFillDoorClosedFill/>}
                </div>
                <h3>{estado}</h3>
            </div>
        </div>
    )
}

export default DoorState;
