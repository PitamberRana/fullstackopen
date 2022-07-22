const Part = ({ part, exercises }) => (
  <p>
    {part} {exercises}
  </p>
);

const Content = ({ parts }) => (
  <div>
    {parts.map((elem) => (
      <Part key={elem.id} part={elem.name} exercises={elem.exercises} />
    ))}
  </div>
);

export default Content;
