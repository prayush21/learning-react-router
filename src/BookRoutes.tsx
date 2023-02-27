import React from "react";
import { Route, Routes } from "react-router-dom";
import Book from "./pages/Book";
import BookLayout from "./pages/BookLayout";
import BookList from "./pages/BookList";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";

function BookRoutes() {
  return (
    <>
      <Routes>
        <Route element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default BookRoutes;
