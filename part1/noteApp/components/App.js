import React, { useState } from "react";
import Display from "./display";
import DisplayHistory from "./DisplayHistory";
import MyButton from "./myButton";
import Myh1 from "./Myh1";

const App = () => {
  const [counter, setCounter] = useState(0);
  const increaseCount = () => setCounter(counter + 1);
  const decreaseCount = () => setCounter(counter - 1);

  // setTimeout(() => setCounter(counter + 1), 2000);

  console.log("rendering...", counter);

  const [DisplayHistoryState, setDisplayHistoryState] = useState([]);
  const increaseCountfromButton = () => {
    increaseCount();
    setDisplayHistoryState([...DisplayHistoryState, "Button"]);
  };

  const increaseCountfromApp = () => {
    increaseCount();
    setDisplayHistoryState([...DisplayHistoryState, "iApp"]);
  };
  const decreaseCountfromApp = () => {
    decreaseCount();
    setDisplayHistoryState([...DisplayHistoryState, "dApp"]);
  };
  let name = "Anthony";
  return (
    <div>
      <h2>{counter}</h2>
      <Display text={counter} />
      <DisplayHistory increaseCountfromButton={DisplayHistoryState} />
      <MyButton buttonHandler={increaseCountfromButton} />
      <Myh1 fname={name} lname="Gwame1" count={counter} />
      <Myh1 fname="Gunthony" lname="Gwame2" count={counter} />
      <Myh1 fname="Panthony" lname="Gwame3" count={counter} />
      <button onClick={increaseCountfromApp}>+</button>
      <button onClick={decreaseCountfromApp}>-</button>
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
