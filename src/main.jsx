import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Lexend", "sans-serif"],
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
