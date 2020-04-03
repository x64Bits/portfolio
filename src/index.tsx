import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";
import "./declarations.d.ts";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
// PWA Yea!
serviceWorker.register();
