console.log("hello");

import ReactDOM from "react-dom/client";
import App from "./components/App";

// ReactDOM.render(App(), document.querySelector("#root"));
ReactDOM.createRoot(document.querySelector("#root")).render(<App />);

// ReactDOM.render(
//   React.createElement("div", {}, "this is the first REact Element"),
//   document.querySelector("#root")
// );
