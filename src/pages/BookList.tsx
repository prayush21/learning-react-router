import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

function BookList() {
  const { state } = useLocation();
  console.log("location", location);

  return <h1>BookList {state ? `- ${state}` : ""}</h1>;
}

export default BookList;
