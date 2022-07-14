import Display from "./Display";

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad;
  const avg = (props.good - props.bad) / total;
  const pos = (props.good / total) * 100 + `%`;
  if (total !== 0) {
    return (
      <div>
        <table>
          <tbody>
            <Display num={props.good} name="Good" />
            <Display num={props.neutral} name="Neutral" />
            <Display num={props.bad} name="Bad" />
            <Display num={total} name="All" />
            <Display num={avg} name="Average" />
            <Display num={pos} name="Positive" />
          </tbody>
        </table>
      </div>
    );
  }
  return <div>"No Feedbacks Yet!!" </div>;
};
export default Statistics;
