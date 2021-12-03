import React from 'react';
import {AreaChart, Area, Tooltip, ResponsiveContainer, XAxis} from "recharts";
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
const data=[
    {
        "dia": "Nov 22",
        "visitas": 4,
      },
      {
        "dia": "Nov 23",
        "visitas": 3,
      },
      {
        "dia": "Nov 24",
        "visitas": 2,
      },
      {
        "dia": "Nov 25",
        "visitas": 2,
      },
      {
        "dia": "Nov 26",
        "visitas": 1,
      },
      {
        "dia": "Nov 27",
        "visitas": 4,
      },
      {
        "dia": "Nov 28",
        "visitas": 6,
      }
];


function VisitsMetrics() {
  const [values, loading, error] = useListVals(db.ref("Puerta/historial"));
  const [keys, loadingkeys, errorkeys] = useListKeys(db.ref("Puerta/historial"));
  const [snapshot, loadiNng, errRor] = useObject(db.ref("Puerta/historial"));
  let historial=[]
  
  if(!loadiNng && !loadingkeys && !loading){
      for(let i=0; i<keys.length; i++){
              let x={}
              x["dia"]=number2Text[keys[i].slice(0,2)] + " " +keys[i].slice(3, 5)
              x["visitas"]=snapshot.val()[keys[i]]["visitas"]
              historial.push(x);
      }
  }


  return (
        <div className="visitsChart">
            <h3>Visitas diarias</h3>
            {!loadiNng && !loadingkeys && !loading ? <> 
            <span>{historial[0]["dia"]} - {historial[historial.length-1]["dia"]}</span>
            <ResponsiveContainer width="100%" height="80%">
                <AreaChart data={historial} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#1890ff" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#1890ff" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="dia" />
                    <Tooltip />
                    <Area type="monotone" dataKey="visitas" stroke="#1890ff" fillOpacity={1} fill="url(#colorVisits)" />
                </AreaChart>
            </ResponsiveContainer>
            </> : ""}
        </div>
    )
}

export default VisitsMetrics


