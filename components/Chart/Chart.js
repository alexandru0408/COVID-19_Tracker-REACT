import { useEffect, useState } from "react";
import { fetchDailyData } from "../util/fetchData";
import { Line, Bar } from "react-chartjs-2";

const Chart = ({ data, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const getDailyData = async () => {
      setDailyData(await fetchDailyData());
    };
    console.log("dailyData", dailyData);
    getDailyData();
  }, [setDailyData]);
  console.log("country", country);
  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            background: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barChart = data.confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0,0,255,.5)",
              "rgba(0,255,0,.5)",
              "rgba(255,0,0,.5)",
            ],
            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: {
          display: true,
          text: `Current situtaion in ${country}`,
        },
      }}
    />
  ) : null;

  return <div className="chart">{country ? barChart : lineChart}</div>;
};

export default Chart;
