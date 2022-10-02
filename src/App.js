import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Title from "components/Title";
import Card from "components/Card";
import axios from "axios";
import SelectCountry from "components/SelectCountry";
import LoadingSpinner from "components/LoadingSpinner";
import { setAllCountries, setData, setDailyData } from "store";
import Chart from "./components/Chart";
function App() {
  const countries = useSelector((state) => state.allCountries);
  const selectedCountry = useSelector((state) => state.selectedCountry);
  const data = useSelector((state) => state.data);
  const dailyData = useSelector((state) => state.dailyData);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://covid19.mathdro.id/api/countries")
      .then((response) => {
        response.data.countries.forEach((country) => {
          dispatch(setAllCountries(country));
        });
      })
      .catch((e) => console.log(e));
  }, [dispatch]);
  useEffect(() => {
    axios
      .get("https://covid19.mathdro.id/api/daily")
      .then((response) => {
        response.data.forEach((data) => {
          dispatch(setDailyData(data));
        });
      })
      .catch((e) => console.log(e));
  }, [dispatch]);

  useEffect(() => {
    if (selectedCountry.iso2 === "Global") {
      axios
        .get("https://covid19.mathdro.id/api")
        .then((response) => {
          dispatch(setData(response.data));
        })
        .catch((e) => console.log(e));
    } else {
      axios
        .get(`https://covid19.mathdro.id/api/countries/${selectedCountry.iso2}`)
        .then((response) => {
          dispatch(setData(response.data));
        })
        .catch((e) => console.log(e));
    }
  }, [dispatch, selectedCountry]);

  if (!data || countries.length === 0 || dailyData.length === 0) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center p-10 gap-y-20 flex-shrink">
        <Title />
        <Card />
        <SelectCountry />
        <Chart />
      </div>
    </>
  );
}

export default App;
