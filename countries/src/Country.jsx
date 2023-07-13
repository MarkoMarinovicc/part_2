import React from "react";

const Country = ({ countryData, weatherData }) => {
  if (!countryData) {
    return null;
  }

  return (
    <div>
      <h2>{countryData.name?.common}</h2>
      <p>Capital {countryData.capital}</p>
      <p>Area {countryData.area}</p>
      <h2>Language</h2>
      <ul>
        {countryData.languages &&
          Object.values(countryData.languages).map((language, index) => (
            <li key={index}>{language}</li>
          ))}
      </ul>
      <img src={countryData.coatOfArms && countryData.coatOfArms.svg} alt="" />
      <p>Weather in {countryData.name?.common}</p>
      <p>Temperture {weatherData?.main.feels_like / 10}</p>
      <p>Wind {weatherData?.wind.speed}</p>
    </div>
  );
};

export default Country;
