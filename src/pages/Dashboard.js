import React from 'react'
import Sidebar from "../components/Sidebar";
import Metrics from "../components/Metrics";

function Dashboard() {
    return (
        <div className="dashboard">
            <Sidebar/>
            <Metrics/>
        </div>
    )
}

export default Dashboard
