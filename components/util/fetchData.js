import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  try {
    let changeableURL = url;
    if (country) {
      changeableURL = `${url}/countries/${country}`;
    }
    const { data } = await axios.get(changeableURL);

    console.log("data", data);

    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    // console.log("data", data);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {
    console.log("error", error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    // console.log("countries", response);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log("error", error);
  }
};
