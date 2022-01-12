import React from 'react'
import { db } from "../firebase/firebaseConfig";
import { useObjectVal } from "react-firebase-hooks/database";

/*  
    On off Component
    This component is an implementation of a toogle button, that conects a component to 
    its boolean value on the realtime firebase data base
*/

function OnOff({messages,path}) {
    //Getting current value from database using firebase react hooks
    const [activo, loadingActivo, errorActivo] = useObjectVal(
    db.ref(path))
    //Changing value fuction, it sets the opposite value on the database
    function ChangeStatus(){
        if(activo===0){
            db.ref(path).set(1);
        }else{
            db.ref(path).set(0);
        }
    }
    return (
        // Button that is being displayed on screen
        <button className="on-off" onClick={()=>ChangeStatus()}>
            {activo === 1 ? messages[0] : messages[1]}  
        </button>
    )
}

export default OnOff;
