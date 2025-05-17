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

  if (error) return <div className="error">{error}</div>;
  if (loading || !timeline) return <Loader />;

  return (
    <div className="container">
      <h1>COVID-19 and Population Dashboard</h1>
      <CountrySelector
        countries={countries}
        selected={selected}
        onChange={setSelected}
      />
      <StatsCards timeline={timeline} />
      <LineChart timeline={timeline} />
      <PieChart timeline={timeline} />
    </div>
  );
}

export default App;