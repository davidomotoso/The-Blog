import React from "react";
import ReactDOM from "react-dom/client";
import Blog from "./Blog/assets/Blog";
import { SearchProvider } from "./Blog/partials/SearchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SearchProvider>
      <Blog />
    </SearchProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
