import CountryDetails from "./CountryDetails";

const Content = ({ countries, setCountries }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (
    (countries.length >= 2 && countries.length < 10) ||
    countries.length === 0
  ) {
    return (
      <ul>
        {countries.map((country, idx) => (
          <li key={idx}>
            {country.name}
            <button
              onClick={() => {
                setCountries([country]);
              }}
            >
              show
            </button>
          </li>
        ))}
      </ul>
    );
  } else {
    // console.log(countries);
    return <CountryDetails country={countries[0]} />;
  }
};
export default Content;
