const Display = (props) => {
  return (
    <tr>
      <td>{props.name} </td>
      <td> {props.num}</td>
    </tr>
  );
};

export default Display;
