import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { DataStateProvider } from "./context/DataStateContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DataStateProvider>
      <App />
    </DataStateProvider>
  </React.StrictMode>
);
