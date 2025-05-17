import React from 'react';

const StatsCards = ({ timeline }) => {
  const dates = Object.keys(timeline.cases);
  const lastDate = dates[dates.length - 1];
  return (
    <div className="stats">
      <div className="card cases">Cases: {timeline.cases[lastDate]}</div>
      <div className="card recovered">Recovered: {timeline.recovered[lastDate]}</div>
      <div className="card deaths">Deaths: {timeline.deaths[lastDate]}</div>
    </div>
  );
};

export default StatsCards