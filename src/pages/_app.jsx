import { GoogleAnalytics } from "nextjs-google-analytics";
import "@/src/styles/index.scss";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }) {
  <GoogleAnalytics trackPageViews gaMeasurementId="G-0HDCB44PRE" />;
  return <Component {...pageProps} />;
}
