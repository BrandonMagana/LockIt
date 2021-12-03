import React from 'react'

function Topbar({name}) {
    return (
        <div className="topbar">
            <h1>{name}</h1>
            <div className="info">
                <h4>Equipo 7 Lock-It!</h4>
            </div>
        </div>
    )
}

export default Topbar
