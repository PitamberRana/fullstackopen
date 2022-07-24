import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Filter";
import Content from "./Content";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((response) => {
      // console.log(response.data);
      setCountries(response.data);
    });
  }, []);
  const handleFilterChange = (e) => {
    setNewFilter(e.target.value);
    const filteredCountries = countries.filter((country) =>
      country.name.toLowerCase().match(e.target.value)
    );
    // console.log(filteredCountries);
    setCountries(filteredCountries);
  };
  // console.log(countries);

  return (
    <div>
      <Filter value={newFilter} onChange={handleFilterChange} />
      <Content countries={countries} setCountries={setCountries} />
    </div>
  );
};
export default App;
