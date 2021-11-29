import React from 'react'
import  {BsPeopleFill} from "react-icons/bs";
function visits() {
    return (
        <div className="nonInteractive">
            <h3>Número de Visitas</h3>
            <span>Visitas recibidas el día de hoy</span>
            <div className="nonInteractive-info">
                <div className="nonInteractive-icon">
                <BsPeopleFill/>
                </div>
                <div className="visitas">
                <h3>3</h3>
                <p>Visitas</p>
                </div>
            </div>
        </div>
    )
}

export default visits