import React from 'react'
import {BsFillDoorOpenFill,BsFillDoorClosedFill} from "react-icons/bs";

function DoorState() {
    return (
        <div className="nonInteractive">
            <h3>Puerta</h3>
            <span>Estado de la puerta</span>
            <div className="nonInteractive-info">
                <div className="nonInteractive-icon">
                    <BsFillDoorOpenFill/>
                </div>
                <h3>Abierta</h3>
            </div>
        </div>
    )
}

export default DoorState;
