import React from 'react'

function Topbar({name}) {
    return (
        <div className="topbar">
            <h1>{name}</h1>
            <div className="info">
                <h4>Brandon Magaña</h4>
            </div>
        </div>
    )
}

export default Topbar
