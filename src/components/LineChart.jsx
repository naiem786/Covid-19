import React from 'react';
import {
  LineChart as RechartLineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer
} from 'recharts';

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
          <XAxis dataKey="date" hide />
          <YAxis />
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