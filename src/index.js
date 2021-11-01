import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ResultsContextProvider from "./contexts/ResultsContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <ResultsContextProvider>
      <Router>
        <App />
      </Router>
    </ResultsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
