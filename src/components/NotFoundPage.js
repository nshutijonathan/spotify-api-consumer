import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Header />
      Not Found .Goto <Link to="/dashboard">Home</Link>
    </React.Fragment>
  );
};

export default NotFoundPage;
