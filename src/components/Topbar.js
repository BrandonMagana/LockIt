import React from 'react'

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
