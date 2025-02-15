import { Link } from "react-router-dom";
import React from "react";

function NotFound() {
  return (
    <>
      <h1>NotFound</h1>
      <Link to="/">Home</Link>
    </>
  );
}

export default NotFound;
