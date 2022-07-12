const MyButton = ({ buttonHandler }) => {
  return (
    <button onClick={buttonHandler}> CLICK ME FROM ANOTHER COMPONENT</button>
  );
};
export default MyButton;
