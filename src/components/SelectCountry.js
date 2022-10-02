import { useSelector, useDispatch } from "react-redux";
import { setSelectedCountry } from "../store";
const SelectCountry = () => {
  const countries = useSelector((state) => state.allCountries);
  const selectedCountry = useSelector((state) => state.selectedCountry);

  const dispatch = useDispatch();

  const change = (e) => {
    if (e.target.value === "Global") {
      dispatch(
        setSelectedCountry({
          name: "Global",
          iso2: "Global",
        })
      );
    } else {
      const country = countries.filter((item) => item.iso2 === e.target.value);
      dispatch(
        setSelectedCountry({
          name: country[0].name,
          iso2: e.target.value,
        })
      );
    }
  };
  
  return (
    <div className="w-full md:w-3/4 lg:w-1/2">
      <select
        onChange={(e) => change(e)}
        value={selectedCountry.iso2}
        className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 outline-none "
      >
        <option>Global</option>

        {countries.map((country, index) => (
          <option key={index} value={country.iso2}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCountry;
