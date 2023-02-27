import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Book() {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams({
    date: "21-11-2000",
    name: "prayush",
  });
  console.log("searchParams", searchParams.get("date"));
  console.log("Params", params);

  return <h1>Book {params.id}</h1>;
}

export default Book;
