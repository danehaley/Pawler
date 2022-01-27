import "../styles/globals.css";
import { AppContextProvider } from "../contexts/CallContext";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <div className="bg-zinc-50">
        <Component {...pageProps} />
      </div>
    </AppContextProvider>
  );
}

export default MyApp;
