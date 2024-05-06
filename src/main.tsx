import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navigator from "./Navigator"
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <body>
      <script src="./script.js"></script>
      {/* <body> */}
      <main>
        <Navigator />
        <App />
      </main>
    </body>
    {/* </body> */}
  </React.StrictMode>,
);
