import React, { useContext, useState, useEffect } from "react";
import { fetchData } from "./util/fetchData";
export const StateContext = React.createContext();

export function useStateContext() {
  return useContext(StateContext);
}

export function GlobalStateProvider({ children }) {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    const getData = async () => {
      setData(await fetchData());
    };
    getData();
  }, [setData]);

  const handleChangeCountry = async (country) => {
    const fetchedData = await fetchData(country);
    console.log("country", country);
    console.log("fetchedData", fetchedData);
    setData(fetchedData);
    setCountry(country);
  };

  return (
    <StateContext.Provider
      value={{
        handleChangeCountry,
        data,
        country,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
