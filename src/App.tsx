import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import BookList from "./pages/BookList";
import Home from "./pages/Home";
import NewBook from "./pages/NewBook";

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
        <Route path="/books" element={<BookList />} />
        <Route />
      </Routes>
    </>
  );
}

export default App;
