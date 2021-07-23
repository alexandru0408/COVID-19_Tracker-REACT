import Cards from "../components/Cards/cards";
import CountryPicker from "../components/CountryPicker/CountryPicker";
import Chart from "../components/Chart/Chart";
import { useStateContext } from "../components/GlobalStateProvider";

export default function HomeView(props) {
  const globalState = useStateContext();

  return (
    <div className="home-view">
      <div className="home-view__top">
        <div className="home-view__logo"></div>
      </div>
      <Cards data={globalState.data} />
      <CountryPicker />
      <Chart data={globalState.data} country={globalState.country} />
    </div>
  );
}
