import React from "react";

const Myh1 = ({ fname, lname, count }) => {
  console.log(fname);
  return (
    <h1>
      My name is {fname} {lname} {count}
    </h1>
  );
};
// const Myh1 = () => React.createElement("h1", {}, "This is the new Heading");

export default Myh1;
