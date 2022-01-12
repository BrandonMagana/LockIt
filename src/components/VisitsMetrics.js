import React from 'react';
import {AreaChart, Area, Tooltip, ResponsiveContainer, XAxis} from "recharts";
import {useListKeys, useObject } from 'react-firebase-hooks/database';
import { db } from "../firebase/firebaseConfig";

//Number to text dictionary that is used for creating a dictionary of visits per day
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

function VisitsMetrics() {
  //Getting all keys that represents a date from database subtree called "historial"
  const [keys, loadingKeys, keysError] = useListKeys(db.ref("Puerta/historial"));

  //Returns all data from the data base subtree called "historial"
  const [Snapshot, loadingSnapshot, SnapshotError] = useObject(db.ref("Puerta/historial"));
  
  let historial=[]
  
  //pushing dictionary (day : visits) to historial array
  if(!loadingSnapshot && !loadingKeys){
      for(let i=0; i<keys.length; i++){
              let day={}
              day["dia"] = number2Text[keys[i].slice(0,2)] + " " +keys[i].slice(3, 5)
              day["visitas"]=Snapshot.val()[keys[i]]["visitas"]
              historial.push(day);
      }
  }


  return (
        <div className="visitsChart">
            <h3>Visitas diarias</h3>
            {!loadingSnapshot && !loadingKeys ? <> 
            <span>{historial[0]["dia"]} - {historial[historial.length-1]["dia"]}</span>
            {/* Setting up the chart */}
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


