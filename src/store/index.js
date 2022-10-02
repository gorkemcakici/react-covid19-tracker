import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectedCountry: {
    name: "Global",
    iso2: "Global",
  },
  allCountries: [],
    data: null,
  dailyData: []
};
const countrySlice = createSlice({
  name: "contry",
  initialState,
  reducers: {
    setSelectedCountry(state, action) {
      state.selectedCountry = action.payload;
    },
    setAllCountries(state, action) {
      state.allCountries.push(action.payload);
      },
      setDailyData(state, action) {
      state.dailyData.push(action.payload);
    },
    setData(state, action) {
      state.data = action.payload;
    },

  },
});
export const { setSelectedCountry, setAllCountries, setData, setDailyData } =
  countrySlice.actions;

export const store = configureStore({
  reducer: countrySlice.reducer,
});
