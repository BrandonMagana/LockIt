import React from 'react'
import {BsFillDoorOpenFill} from "react-icons/bs";
import {Link} from "react-router-dom";
/* Navbar component 
    It's a navegation bar that will be displayed at the top of the landing page
*/
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
        </div>
    )
}

export default Navbar
