import React from 'react';

const CountrySelector = ({ countries, selected, onChange }) => {
  return (
    <div className="dropdown">
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
      >
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelector;
