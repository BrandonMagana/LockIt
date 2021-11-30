import React from 'react'
import {BsFillDoorOpenFill} from "react-icons/bs";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar-container">
            <div className="brand">
                <Link to="/">
                    <div className="brand-icon">
                        <BsFillDoorOpenFill/>
                    </div>
                    <h1>LockIt!</h1>
                </Link>
            </div>
            {/* {registro ? <Link to="/signup"><a className="registro">Registrate</a> 
            </Link>: ""} */}
        </div>
    )
}

export default Navbar
