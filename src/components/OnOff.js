import React,{useState}from 'react'
import { db } from "../firebase/firebaseConfig";
import { useObjectVal } from "react-firebase-hooks/database";


function OnOff({messages, status,path}) {
    
    const [activo, loadingActivo, errorActivo] = useObjectVal(
    db.ref(path))
    function ChangeStatus(){
        // console.log(activo + "activo");
        if(activo===0){
            db.ref(path).set(1);
        }else{
            db.ref(path).set(0);
        }
    }
    return (
        <button className="on-off" onClick={()=>ChangeStatus()}>
            {activo === 1 ? messages[0] : messages[1]}  
        </button>
    )
}

export default OnOff;
