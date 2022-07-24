import axios from "axios";
import { useState, useEffect } from "react";
const CountryDetails = ({ country }) => {
  const [weather, setWeather] = useState([
    { temperature: "", wind: "", icon: "" },
  ]);

  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=62a54f65377a47da8d580600222307&q=${country.name}`
      )
      .then((response) => {
        // console.log(response.data);
        // console.log(
        //   `current weather in ${response.data.location.name} is ${response.data.current.feelslike_c} ℃`
        // );
        const newObj = {
          ...weather,
          temperature: response.data.current.temp_c,
          icon: response.data.current.condition.icon,
          wind: response.data.current.wind_mph,
        };
        setWeather(newObj);
      });
  }, []);
  console.log(weather);
  return (
    <div>
      <h1>{country.name}</h1>
      <p> Capital : {country.capital}</p>
      <p> Area : {country.area}</p>
      <h2> Languages :</h2>
      <ol>
        {country.languages.map((x) => (
          <li key={x.name}>{x.name}</li>
        ))}
      </ol>
      <img
        style={{ height: "200px", width: "300px" }}
        src={country.flag}
        alt="Country Flag"
      ></img>
      <h2> Weather in {country.capital}</h2>
      <p> Temperature : {weather.temperature} ℃</p>
      <img src={weather.icon} alt="weather png"></img>
      <p> Wind: {weather.wind} mph</p>
    </div>
  );
};

export default CountryDetails;
