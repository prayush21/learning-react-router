import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import BookRoutes from "./BookRoutes";
import Book from "./pages/Book";
import BookLayout from "./pages/BookLayout";
import BookList from "./pages/BookList";
import Home from "./pages/Home";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/books">Books</Link>
            {/* <a href="/books">Books</a> */}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
