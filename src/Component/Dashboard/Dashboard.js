import React, { useEffect, useState , PureComponent} from 'react';
import {   Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


const Dashboard = () => {
    const [charts , setCharts] = useState([]);
  useEffect(() => {
    fetch('data.json').then(res => res.json())
    .then(data => setCharts(data))
  },[]);
  const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
  };
  

    return (
        <div className='charts'>
            <div>
            <LineChart width={900} height={500} data = {charts}>
            <Line  dataKey="sell"/>
            <XAxis dataKey={'month'}></XAxis>
            <YAxis dataKey={'sell'}></YAxis>
               
            </LineChart>
            </div>
            <div>
                <BarChart width={900} height={500} data={charts}>
                    <XAxis dataKey="month" stroke="#8884d8" />
                    <YAxis dataKey={'sell'}></YAxis>
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="sell" fill="#8884d8" barSize={30} />
                </BarChart>
            </div>
        </div>
      
        
        
    );
};

export default Dashboard;