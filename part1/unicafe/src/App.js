import MyButton from "./Button";
import Statistics from "./Statistics";
import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickGood = () => setGood(good + 1);
  const clickNeutral = () => setNeutral(neutral + 1);
  const clickBad = () => setBad(bad + 1);
  return (
    <div>
      <h1> Give Feedback</h1>
      <MyButton handler={clickGood} buttonName="Good" /> &nbsp; &nbsp;
      <MyButton handler={clickNeutral} buttonName="Neutral" /> &nbsp; &nbsp;
      <MyButton handler={clickBad} buttonName="Bad" />
      <h2> Statistics </h2>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
