import { useEffect, useState } from "react";
import { client } from "./lib/axios";
import Country from "./Country";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [targetedCountry, setTargetedCountry] = useState(null);
  const [weather, setWeather] = useState(null);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const searchCountry = countries.filter((item) =>
    item.name.common.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    client.get("/api/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  const handleShowCountry = (name) => {
    client.get(`/api/name/${name}`).then((res) => {
      console.log(res.data);
      setTargetedCountry(res.data);
    });
  };

  useEffect(() => {
    if (targetedCountry) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${targetedCountry.latlng[0]}&lon=${targetedCountry.latlng[1]}&appid=${process.env.REACT_APP_API_KEY}
          `
        )
        .then((res) => {
          console.log(res.data);
          setWeather(res.data);
        })
        .catch((error) => {
          console.error("Failed to fetch weather data:", error);
        });
    }
  }, [targetedCountry]);

  return (
    <>
      <input value={search} onChange={handleSearchChange} />
      <div className="App">
        {searchCountry &&
          searchCountry.length < 10 &&
          searchCountry.map((item, index) => (
            <div key={index}>
              {item.name.common}
              <button onClick={() => handleShowCountry(item.name.common)}>
                show
              </button>
            </div>
          ))}
      </div>
      {targetedCountry && (
        <Country weatherData={weather} countryData={targetedCountry} />
      )}
    </>
  );
};

export default App;
