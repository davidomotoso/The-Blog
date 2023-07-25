import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Blog from "./Blog/assets/Blog";
// import Blog from "./mytest/blog";
// import App from "./App";
// import Todo from "./components/Todo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Blog /> */}
    {/* <Todo /> */}
    <Blog />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
