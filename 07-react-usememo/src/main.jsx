import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Pastikan ada elemen dengan id="root" di index.html
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
