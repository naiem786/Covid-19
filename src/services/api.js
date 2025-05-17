import axios from 'axios';

const COVID_BASE = 'https://disease.sh/v3/covid-19/historical';
const COUNTRIES_BASE = 'https://restcountries.com/v3.1/all';

export async function fetchHistorical(countryCode) {
  const url = `${COVID_BASE}/${countryCode}?lastdays=1500`;
  const { data } = await axios.get(url);
  return data.timeline;
}

export async function fetchCountries() {
  const { data } = await axios.get(COUNTRIES_BASE);
  return data.map(c => ({
    name: c.name.common,
    code: c.cca2.toLowerCase()
  })).sort((a, b) => a.name.localeCompare(b.name));
}