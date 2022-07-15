const App = ({ notes }) => {
  return (
    <div>
      <h1> Note contents</h1>
      {notes.map((x) => (
        <div key={x.id}> {x.content} </div>
      ))}
    </div>
  );
};

export default App;
