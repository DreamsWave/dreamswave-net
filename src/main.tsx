import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import "@fontsource-variable/montserrat";
import "@fontsource/press-start-2p";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
