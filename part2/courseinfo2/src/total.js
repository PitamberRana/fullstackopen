const Total = ({ parts }) => {
  const total = parts.reduce(
    (previousVal, curVal) => previousVal + curVal.exercises,
    0
  );

  return <h3>Total number of exercises {total}</h3>;
};

export default Total;
