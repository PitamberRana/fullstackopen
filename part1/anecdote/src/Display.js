const Display = (props) => {
  return (
    <div>
      <h2 style={{ color: "teal" }}>{props.handler}</h2>
      <h2>
        has <span style={{ color: "red" }}>{props.vote}</span> votes.
      </h2>
    </div>
  );
};
export default Display;
