const DisplayHistory = ({ increaseCountfromButton }) => {
  if (increaseCountfromButton.length > 0) {
    return <h3> this shows the history : {increaseCountfromButton} </h3>;
  }
  return <h3> there is no history yet</h3>;
};

export default DisplayHistory;
