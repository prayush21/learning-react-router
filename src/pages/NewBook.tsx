import React from "react";
import { useSearchParams } from "react-router-dom";

function NewBook() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("searchParams", searchParams);

  return <h1>NewBook</h1>;
}

export default NewBook;
