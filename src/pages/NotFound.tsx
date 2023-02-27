import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/books", {
      state: "No Books Found? You can try creating a new one!",
    });
  }, 3000);
  return <h1>NotFound</h1>;
}

export default NotFound;
