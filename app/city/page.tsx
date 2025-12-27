"use client";

import React from "react";

// ---------------------
// Types
// ---------------------
type Country = {
  name: string;
  cities: string[];
};

type Continent = {
  name: string;
  countries: Country[];
};

// ---------------------
// Dataset (typed)
// ---------------------
const dataset: Continent[] = [
  {
    name: "Asia",
    countries: [
      { name: "India", cities: ["Delhi", "Mumbai", "Bengaluru", "Kolkata", "Chennai"] },
      { name: "Japan", cities: ["Tokyo", "Osaka", "Kyoto", "Nagoya"] },
      { name: "China", cities: ["Beijing", "Shanghai", "Shenzhen", "Guangzhou"] },
      { name: "UAE", cities: ["Dubai", "Abu Dhabi", "Sharjah"] },
    ],
  },
  {
    name: "Europe",
    countries: [
      { name: "Germany", cities: ["Berlin", "Hamburg", "Munich", "Frankfurt"] },
      { name: "France", cities: ["Paris", "Lyon", "Marseille", "Nice"] },
      { name: "United Kingdom", cities: ["London", "Manchester", "Birmingham", "Liverpool"] },
    ],
  },
];

// ==========================================================
// Component
// ==========================================================
export default function City() {
  const [countryList, setCountryList] = React.useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = React.useState<string>("");
  const [cityList, setCityList] = React.useState<Country | null>(null);
  const [selectedCity, setSelectedCity] = React.useState<string>("");

  // load all countries
  function getCountries() {
    const list: Country[] = [];

    dataset.forEach((continent) => {
      continent.countries.forEach((c) => list.push(c));
    });

    setCountryList(list);
  }

  // load countries on mount
  React.useEffect(() => {
    getCountries();
  }, []);

  // when selectedCountry changes → update city list + reset city
  React.useEffect(() => {
    const match = countryList.find((c) => c.name === selectedCountry) || null;

    setCityList(match);
    setSelectedCity(""); // << reset select dropdown
  }, [selectedCountry, countryList]);

  // ---------------------
  // handlers
  // ---------------------
  function actSelectedCountry(e: React.ChangeEvent<HTMLInputElement>) {
    setSelectedCountry(e.target.value);
  }

  function actSelectedCity(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedCity(e.target.value);
  }

  return (
    <div>
      <h1>Question 1</h1>

      <p>Select Country</p>
      <div>
        {countryList.map((item, index) => (
          <div key={index}>
            <input
              type="radio"
              value={item.name}
              name="country"
              onChange={actSelectedCountry}
              checked={selectedCountry === item.name}
            />
            <label>{item.name}</label>
          </div>
        ))}
      </div>

      <p>Select City</p>
      <select value={selectedCity} onChange={actSelectedCity}>
        <option value="">-- Select City --</option>
        {cityList?.cities?.map((city, index) => (
          <option value={city} key={index}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}
