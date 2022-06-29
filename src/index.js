import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./global-style";
import "normalize.css";
import { firebase } from "./lib/firebase.prod";
import { firebaseCtx } from "./context/firebase";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <firebaseCtx.Provider value={{ firebase }}>
        <GlobalStyle />
        <App />
      </firebaseCtx.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
