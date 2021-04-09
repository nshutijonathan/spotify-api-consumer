import React from "react";

const Loader = (props) => {
  return (
    <img
      src={
        "https://raw.githubusercontent.com/nshutijonathan/Breaking-Bad-Api/master/src/img/spinner.gif"
      }
      style={{ width: "200px", margin: "auto", display: "block" }}
      alt="Loading"
    />
  );
};

export default Loader;
