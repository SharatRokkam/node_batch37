import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateBook from "../pages/CreateBook";
import EditBook from "../pages/EditBook";
import Home from "../pages/Home";
import ShowBook from "../pages/ShowBook";
import DeleteBook from "../pages/DeleteBook";

export default function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="bg-red-400 text-center">Tailwind</div> */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/create" element={<CreateBook />} />
          <Route path="/books/details/:id" element={<ShowBook />} />
          <Route path="/books/edit/:id" element={<EditBook />} />
          <Route path="/books/delete/:id" element={<DeleteBook />} />
        </Routes>
      </Router>
    </>
  );
}
