import React from 'react';
import {BsCircleFill} from "react-icons/bs";
import Topbar from "./Topbar";
const data=[{
    key:"1",
    fecha:"28 Nov",
    hora:"10:03 pm"
},
{
    key:"2",
    fecha:"29 Nov",
    hora:"10:03 pm"
},
{
    key:"3",
    fecha:"30 Nov",
    hora:"10:03 pm"
},
{
    key:"4",
    fecha:"01 Dic",
    hora:"10:03 pm"
}]

function History() {
    return (
       <div>
            <div className="history">
                <Topbar name="Historial de visitas"/>
            </div>
                <div className="report">
                    {data.map(log =>{
                        return(
                            <div className="log">
                                <div className="icono">
                                        <BsCircleFill/> 
                                </div>
                                <h3>{log.fecha} - {log.hora}</h3>   
                            </div>
                        );
                    })}
            </div>
        </div>
    )
}

export default History
