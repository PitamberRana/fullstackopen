import React from "react";
import Myh1 from "./Myh1";

const App = () => {
  let name = "Anthony";
  return (
    <div>
      <Myh1 fname={name} lname="Gwame1" />
      <Myh1 fname="Gunthony" lname="Gwame2" />
      <Myh1 fname="Panthony" lname="Gwame3" />
    </div>
  );
};
// const App = () => React.createElement("div", {}, Myh1(), Myh1());

export default App;
