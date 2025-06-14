import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css"

createRoot(document.getElementById("root")).render(
  //<StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<App />}
        />
      </Routes>
    </BrowserRouter>
  //</StrictMode>
);
