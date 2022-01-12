import React from 'react'
/*
    Topbar Component
    This component got some basic info such as:
    *Current page name
    *Username
    This will be displayed at the top of the page
*/
function Topbar({name, user}) {
    return (
        <div className="topbar">
            <h1>{name}</h1>
            <div className="info">
                <h4>{user}</h4>
            </div>
        </div>
    )
}

export default Topbar
