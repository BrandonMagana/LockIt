import React from 'react'
import {BsFillDoorOpenFill,BsFillDoorClosedFill} from "react-icons/bs";
import {VscHistory} from "react-icons/vsc";
import {CgLogOut} from "react-icons/cg";
import {Link} from "react-router-dom";

function sidebar() {
    return (
        <div className="sidebar">
            <div className="upper_container">
                <div className="brand">
                    <div className="brand-icon">
                        <BsFillDoorOpenFill/>
                    </div>
                    <h1>LockIt!</h1>
                </div>
                <div className="links">
                    <ul>
                        {/* <Link to="/"> */}
                            <li>
                                <BsFillDoorClosedFill/>
                                <p className="none">Vista General</p>
                            </li>
                        {/* </Link> */}
                            <li>
                        {/* <Link to="/reports"> */}
                                <VscHistory/>
                                Historial
                        {/* </Link> */}
                            </li>
                            <li>
                        {/* <Link to="/"> */}
                                <CgLogOut/>
                                Cerrar Sesión
                        {/* </Link>  */}
                            </li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default sidebar;