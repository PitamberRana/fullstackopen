import React from "react";

const Myh1 = ({ fname, lname }) => {
  return (
    <h1>
      My name is {fname} {lname}
    </h1>
  );
};
// const Myh1 = () => React.createElement("h1", {}, "This is the new Heading");

export default Myh1;
