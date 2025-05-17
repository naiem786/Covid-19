import React from 'react';
import {
  LineChart as RechartLineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer
} from 'recharts';
import { format, parse } from 'date-fns';
const LineChart = ({ timeline }) => {
  const data = Object.keys(timeline.cases).map(date => ({
    date,
    cases: timeline.cases[date],
    recovered: timeline.recovered[date],
    deaths: timeline.deaths[date]
  }));

  return (
    <div className="chart">
      <h2>Cases Over Time</h2>
      <ResponsiveContainer width="100%" height={400}>
        <RechartLineChart data={data}>

<XAxis
  dataKey="date"
  tickFormatter={(dateStr) => {
    const parsedDate = parse(dateStr, 'M/d/yy', new Date());
    return isNaN(parsedDate) ? '' : format(parsedDate, 'MMM yyyy');
  }}
/>  
<YAxis
  tickFormatter={(value) => {
    if (value >= 1e6) return `${(value / 1e6).toFixed(1)}M`;
    if (value >= 1e3) return `${(value / 1e3).toFixed(1)}K`;
    return value;
  }}
/>
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#ccc" />
          <Line type="monotone" dataKey="cases" stroke="#8884d8" />
          <Line type="monotone" dataKey="recovered" stroke="#82ca9d" />
          <Line type="monotone" dataKey="deaths" stroke="#ff5c5c" />
        </RechartLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;