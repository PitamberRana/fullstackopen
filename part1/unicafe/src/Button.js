const MyButton = (props) => {
  return (
    <>
      <button onClick={props.handler}> {props.buttonName}</button>
    </>
  );
};
export default MyButton;
