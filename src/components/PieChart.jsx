import React from 'react';
import { PieChart as RechartPieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const PieChart = ({ timeline }) => {
  const dates = Object.keys(timeline.cases);
  const lastDate = dates[dates.length - 1];

  const data = [
    { name: 'Recovered', value: timeline.recovered[lastDate] },
    { name: 'Deaths', value: timeline.deaths[lastDate] },
    {
      name: 'Active',
      value:
        timeline.cases[lastDate] -
        (timeline.recovered[lastDate] + timeline.deaths[lastDate])
    }
  ];

  const COLORS = ['#82ca9d', '#ff5c5c', '#8884d8'];

  return (
    <div className="chart">
      <h2>Current Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <RechartPieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </RechartPieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChart;