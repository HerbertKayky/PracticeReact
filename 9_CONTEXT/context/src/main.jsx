import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { CounterContextProvider } from "./context/CounterContext.jsx";
import { TitleColorContextProvider } from "./context/TitleColorContext.jsx";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    {/* 2 - Criando provider */}
    <ThemeContextProvider>
      <CounterContextProvider>
        <TitleColorContextProvider>
          <App />
        </TitleColorContextProvider>
      </CounterContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
