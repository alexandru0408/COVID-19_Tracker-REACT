import "../styles/styles.scss";
import { GlobalStateProvider } from "../components/GlobalStateProvider";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalStateProvider>
      <Component {...pageProps} />
    </GlobalStateProvider>
  );
}

export default MyApp;
