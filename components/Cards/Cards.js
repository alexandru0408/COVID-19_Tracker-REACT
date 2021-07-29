import Card from "./Card/Card";
import { useStateContext } from "../GlobalStateProvider";

const Cards = ({ data }) => {
  const globalState = useStateContext();

  const { confirmed, recovered, deaths, lastUpdate } = data;
  console.log("globalState.data", globalState.data);
  if (!confirmed) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cards">
      <div className="cards__grid">
        <Card
          title="Infected"
          detail="Number of active cases of COVID-19"
          value={confirmed.value}
          date={lastUpdate}
          type="infected"
        />
        <Card
          title="Recovered"
          detail="Number of recoveries from COVID-19"
          value={recovered.value}
          date={lastUpdate}
          type="recovered"
        />
        <Card
          title="Deaths"
          detail="Number of deaths caused by COVID-19"
          value={deaths.value}
          date={lastUpdate}
          type="deaths"
        />
      </div>
    </div>
  );
};

export default Cards;
