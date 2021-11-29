import React from 'react'
import Sidebar from '../components/Sidebar'
import History from '../components/History'

function Logs() {
    return (
        <div className="dashboard">
            <Sidebar/>
            <History/>
        </div>
    )
}

export default Logs
