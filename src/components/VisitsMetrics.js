import React from 'react';
import {AreaChart, Area, Tooltip, ResponsiveContainer, XAxis} from "recharts";

const data=[
    {
        "dia": "Nov 22",
        "visitas": 4,
      },
      {
        "dia": "Nov 23",
        "visitas": 3,
      },
      {
        "dia": "Nov 24",
        "visitas": 2,
      },
      {
        "dia": "Nov 25",
        "visitas": 2,
      },
      {
        "dia": "Nov 26",
        "visitas": 1,
      },
      {
        "dia": "Nov 27",
        "visitas": 4,
      },
      {
        "dia": "Nov 28",
        "visitas": 6,
      }
];


function VisitsMetrics() {
    return (
        <div className="visitsChart">
            <h3>Visitas diarias</h3>
            <span>Nov 22 - Nov 28</span>
            <ResponsiveContainer width="100%" height="80%">
                <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#1890ff" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#1890ff" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="dia" />
                    <Tooltip />
                    <Area type="monotone" dataKey="visitas" stroke="#1890ff" fillOpacity={1} fill="url(#colorVisits)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default VisitsMetrics


