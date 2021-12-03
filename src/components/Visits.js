import React from 'react'
import  {BsPeopleFill} from "react-icons/bs";
import { db } from "../firebase/firebaseConfig";
import { useObjectVal } from "react-firebase-hooks/database";

const dateConverter={
    Dec : "12",
    Nov : "11",
    Oct : "10",
    Sep : "09",
    Aug : "08",
    Jul : "07",
    Jun : "06",
    May : "05",
    Apr : "04",
    Mar : "03",
    Feb : "02",
    Jan : "01"
}
function Visits() {
        

        let fecha= new Date().toDateString();
        fecha=fecha.slice(4)
        fecha= fecha.replace(" ", "_");
        fecha= fecha.replace(" ", "_");
        let prefix = fecha.slice(0,3);
        prefix = dateConverter[prefix]
        fecha = prefix + fecha.slice(3) 

    const [visitas, loadingVisitas, errorVisitas] = useObjectVal(
        db.ref(`Puerta/historial/${fecha}/visitas`))
    const [visita, loadingVisita, errorVisita] = useObjectVal(
            db.ref(`Puerta/isCamera`))

    return (
        <div className="nonInteractive">
            {!loadingVisita && !loadingVisitas ? 
            <>
            <h3>Número de Visitas</h3>
            <span>Visitas recibidas el día de hoy</span>
            <div className="nonInteractive-info">
                <div className="nonInteractive-icon">
                <BsPeopleFill/>
                <p className="vistante"> {visita === 0 ?  "" : "Tienes Visita!"}</p>
                </div>
                <div className="visitas">
                    <h3>{visitas}</h3>
                    <div className="info-visitas">
                    <p> {visitas === null ? "0 Visitas" : visitas <= 1 ? "Visita" : "Visitas"}</p>
                    </div>
                </div>
            </div> 
            </> :" "
            }
        </div>
    )
}

export default Visits