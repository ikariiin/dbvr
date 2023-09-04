import "./global.css";

import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "./features/app";

createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
