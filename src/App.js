import React, { useState, useEffect } from 'react';
import { fetchHistorical, fetchCountries } from './services/api';
import CountrySelector from './components/CountrySelector';
import StatsCards from './components/StatsCards';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import Loader from './components/Loader';

function App() {
  const [countries, setCountries] = useState([]);
  const [selected, setSelected] = useState('usa');
  const [timeline, setTimeline] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    async function init() {
      try {
        const list = await fetchCountries();
        setCountries(list);
      } catch (err) {
        setError('Failed to load countries');
      }
    }
    init();
  }, []);

  useEffect(() => {
    if (!selected) return;
    setLoading(true);
    fetchHistorical(selected)
      .then(data => setTimeline(data))
      .catch(() => setError('Error fetching data'))
      .finally(() => setLoading(false));
  }, [selected]);

  function getFilteredTimeline(timeline, start, end) {
    if (!timeline) return { cases: {}, recovered: {}, deaths: {} };

    const filterByDateRange = (data) => {
      return Object.entries(data)
        .filter(([date]) => {
          const d = new Date(date);
          return (!start || new Date(start) <= d) && (!end || d <= new Date(end));
        })
        .reduce((acc, [date, value]) => {
          acc[date] = value;
          return acc;
        }, {});
    };

    return {
      cases: filterByDateRange(timeline.cases),
      recovered: filterByDateRange(timeline.recovered),
      deaths: filterByDateRange(timeline.deaths)
    };
  }

  const filteredTimeline = getFilteredTimeline(timeline, startDate, endDate);

  if (error) return <div className="error">{error}</div>;
  if (loading || !timeline) return <Loader />;

  return (
    <div className="container">
      <h1 className="white-heading">COVID-19 Dashboard</h1>
     <div className="controls">
  <div className="country-selector">
    <CountrySelector
      countries={countries}
      selected={selected}
      onChange={setSelected}
    />
  </div>
  <div className="date-inputs">
    <input
      type="date"
      name="startDate"
      value={startDate}
      onChange={(e) => setStartDate(e.target.value)}
    />
    <input
      type="date"
      name="endDate"
      value={endDate}
      onChange={(e) => setEndDate(e.target.value)}
    />
  </div>
</div>

      <StatsCards timeline={filteredTimeline} />
      <div className="charts-wrapper">
        <LineChart timeline={filteredTimeline} />
        <PieChart timeline={filteredTimeline} />
      </div>
    </div>
  );
}

export default App;