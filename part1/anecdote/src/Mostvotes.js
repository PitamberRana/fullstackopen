const Mostvotes = (props) => {
  let highestVote = Math.max(...props.newvotes);
  let indexOfHighestVote = props.newvotes.indexOf(highestVote);
  let anecdote = props.handler[indexOfHighestVote];
  if (highestVote === 0) {
    return <h3> No Votes Yet !!!</h3>;
  }
  return (
    <div>
      <h3>"Anecdote with the most Votes : "</h3>
      <h2 style={{ fontStyle: "italic" }}> {anecdote}</h2>
      <h1> has {highestVote} votes.</h1>
    </div>
  );
};
export default Mostvotes;
