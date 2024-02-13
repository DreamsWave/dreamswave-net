import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App.tsx";
import "@fontsource-variable/montserrat";
import "@fontsource/press-start-2p";
import "./index.css";
import { store } from "./store.ts";
import { ThemeProvider } from "styled-components";
import theme from "./theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
