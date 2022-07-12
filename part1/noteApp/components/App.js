import React, { useState } from "react";
import Display from "./display";
import MyButton from "./myButton";
import Myh1 from "./Myh1";

const App = () => {
  const [counter, setCounter] = useState(0);
  const increaseCount = () => setCounter(counter + 1);
  const decreaseCount = () => setCounter(counter - 1);
  // setTimeout(() => setCounter(counter + 1), 2000);

  console.log("rendering...", counter);
  let name = "Anthony";
  return (
    <div>
      <h2>{counter}</h2>
      <Display text={counter} />
      <MyButton buttonHandler={increaseCount} />
      <Myh1 fname={name} lname="Gwame1" count={counter} />
      <Myh1 fname="Gunthony" lname="Gwame2" count={counter} />
      <Myh1 fname="Panthony" lname="Gwame3" count={counter} />

      <button onClick={increaseCount}>+</button>

      <button onClick={decreaseCount}>-</button>
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
