import React from "react";
import Myh1 from "./Myh1";

import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  setTimeout(() => setCounter(counter + 1), 1000);

  console.log("rendering...", counter);
  let name = "Anthony";
  return (
    <div>
      <h2>{counter}</h2>
      <Myh1 fname={name} lname="Gwame1" count={counter} />
      <Myh1 fname="Gunthony" lname="Gwame2" count={counter} />
      <Myh1 fname="Panthony" lname="Gwame3" count={counter} />
    </div>
  );
};
// const App = props => {
//   let name = "Anthony";
//   return (
//     <div>
//       <Myh1 fname={name} lname="Gwame1" count={props.counter} />
//       <Myh1 fname="Gunthony" lname="Gwame2" count={props.counter} />
//       <Myh1 fname="Panthony" lname="Gwame3" count={props.counter} />
//     </div>
//   );
// };
// const App = () => React.createElement("div", {}, Myh1(), Myh1());

export default App;
