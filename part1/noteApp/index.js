console.log("hello");

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

// ReactDOM.render(App(), document.querySelector("#root"));

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);

// let mycount = 1;
// const refresh = () =>
//   ReactDOM.createRoot(document.querySelector("#root")).render(
//     <App counter={mycount} />
//   );

// setInterval(() => {
//   refresh();
//   mycount++;
// }, 2000);

// ReactDOM.render(
//   React.createElement("div", {}, "this is the first REact Element"),
//   document.querySelector("#root")
// );
