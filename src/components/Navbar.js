import React from 'react'
import {BsFillDoorOpenFill} from "react-icons/bs";

function Navbar({registro}) {
    return (
        <div className="navbar-container">
            <div className="brand">
                    <div className="brand-icon">
                        <BsFillDoorOpenFill/>
                    </div>
                    <h1>LockIt!</h1>
            </div>
            {registro ? <a className="registro">Registrate</a> : ""}
        </div>
    )
}

export default Navbar
