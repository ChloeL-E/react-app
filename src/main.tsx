import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// strict mode is a built in component in react and doesnt have a visual representation. It is used to catch potential issues e.g. impure components
// it only works in dvelopement. use it to fix problems
