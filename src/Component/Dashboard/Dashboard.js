import React, { useEffect, useState } from 'react';
import {  Line, LineChart, XAxis } from 'recharts';

const Dashboard = () => {
    const [charts , setCharts] = useState([]);
  useEffect(() => {
    fetch('data.json').then(res => res.json())
    .then(data => {
        setCharts(data)
    })
  },[]);
  

    return (
        <div>
            <LineChart width={500} height={800} data = {charts}>
            <Line  dataKey="sell"/>
               
            </LineChart>
        </div>
      
        
        
    );
};

export default Dashboard;