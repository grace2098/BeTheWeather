import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import CustomTooltip  from '../subComponents/Customtooltip';
const data = [
   {hour: '1am', temp: 22 },
   {hour: '2am', temp: 23 },
   {hour: '3am', temp: 24 },
   {hour: '4am', temp: 25 },
   {hour: '5am', temp: 26 },
]
const Hourforcastlinechart = () => {
  return (
    
    <ResponsiveContainer width="400" height={100}>
        <LineChart data={data}>
            <XAxis dataKey="hour" stroke="var(--accent)" tick={{ fill: "var(--text)", fontSize: 12 }}  />
            <YAxis stroke="var(--accent)" tick={{ fill: "var(--text)", fontSize: 12 }}  />
            <Tooltip content={<CustomTooltip />}/>
            <Line type="monotone" dataKey="temp" stroke='var(--accent)' />
        </LineChart>
      
    </ResponsiveContainer>
  )
}

export default Hourforcastlinechart
