import React from 'react'
import Alarm from './Alarm'
import Lock from './Lock'
import DoorState from './DoorState'
import Topbar from './Topbar'
import Visits from './Visits'
import VisitsMetrics from './VisitsMetrics'

function Metrics() {
    return (
        <div className="metrics">
            <Topbar name="Vista General" user="Equipo 7 Lock-It!"/>
            <div className="grid_one">
                <Lock/>
                <Alarm/>
                <DoorState/>   
            </div>
            <div className="grid_two">
                <VisitsMetrics/>
                <Visits/>
            </div>
        </div>
    )
}

export default Metrics