import React, {useState} from 'react';

import {BsCircleFill} from "react-icons/bs";
import Topbar from "./Topbar";
import { useListVals, useListKeys,useObject } from 'react-firebase-hooks/database';
import { db } from "../firebase/firebaseConfig";

const number2Text={
    "01" : "Ene",
    "02" : "Feb",
    "03" : "Mar",
    "04" : "Abr",
    "05" : "May",
    "06" : "Jun",
    "07" : "Jul",
    "08" : "Ago",
    "09" : "Sep",
    "10" : "Oct",
    "11" : "Nov",
    "12" : "Dic" 
}

function History() {
    const [values, loading, error] = useListVals(db.ref("Puerta/historial"));
    const [keys, loadingkeys, errorkeys] = useListKeys(db.ref("Puerta/historial"));
    const [snapshot, loadiNng, errRor] = useObject(db.ref("Puerta/historial"));
    let historial=[]
    
    if(!loadiNng && !loadingkeys && !loading){
        for(let i=0; i<keys.length; i++){
            for(let j=0; j<values[i]["visitas"];j++){
                let x={}
                x["fecha"]=number2Text[keys[i].slice(0,2)] + keys[i].slice(2).replace("_", " ").replace("_", " ")
                x["hora"]=snapshot.val()[keys[i]]["hora"+ j]
                historial.push(x);
         }
        }
    }
    
    return (
       <div>
            <div className="history">
                <Topbar name="Historial de visitas" user="Equipo 7 Lock-It!"/>
                <span>Fecha y hora en las que se han recibido visitas</span>
            </div>
            {!loading && !loadingkeys && !loadiNng ?
                <div className="report">
                    {historial.map(log =>{
                        return(
                            <div key={log.hora} className="log">
                                <div className="icono">
                                        <BsCircleFill/> 
                                </div>
                                <h3>{log.fecha} - {log.hora}</h3>   
                            </div>
                        );
                    })}
                </div> : ""
            }
        </div>
    )
}

export default History
