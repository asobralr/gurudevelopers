import { useEffect } from "react";
import { initGA, logPageView } from "../utils/analytics";
import "@/src/styles/index.scss";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  return <Component {...pageProps} />;
}
