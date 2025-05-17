🌐 COVID-19 Dashboard
A modern, responsive dashboard built with React that visualizes historical COVID-19 data across countries. Users can view interactive line charts and pie charts representing case statistics over time.

Live Demo
https://naiem786.github.io/Covid-19/

📁 Project Structure
src/
  ├── components/
  │     ├── CountrySelector.jsx
  │     ├── StatsCards.jsx
  │     ├── LineChart.jsx
  │     ├── PieChart.jsx
  │     └── Loader.jsx
  ├── services/
  │     └── api.js
  ├── App.jsx
  ├── index.js
  └── styles.css

✨ Features
  🔍 Country-wise selection with dynamic data fetching
  📈 Line chart showing historical trends of cases, recoveries, and deaths
  🥧 Pie chart showing current distribution of active, recovered, and deceased cases
  💡 Clean UI with loading and error states
  📦 Uses disease.sh and REST Countries API for live data

🛠️ Tech Stack
  React
  Axios
  Recharts
  CSS
