// analytics.js
import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("G-0HDCB44PRE");
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
