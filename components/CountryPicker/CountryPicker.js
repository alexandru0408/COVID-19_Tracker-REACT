import { useEffect, useState } from "react";
import { fetchCountries } from "../util/fetchData";
import { useStateContext } from "../GlobalStateProvider";

const CountryPicker = () => {
  const [fetchdCountries, setFetchedCountries] = useState([]);
  const globalState = useStateContext();
  useEffect(() => {
    const getCountires = async () => {
      setFetchedCountries(await fetchCountries());
    };
    getCountires();
  }, [setFetchedCountries]);

  console.log("fetchdCountries", fetchdCountries);

  return (
    <div className="country-picker">
      <select
        name="countries"
        onChange={(e) => globalState.handleChangeCountry(e.target.value)}
      >
        <option value="">Global</option>
        {fetchdCountries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryPicker;
