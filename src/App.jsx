import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AddBooks } from "./AddBooks.jsx";
import { Books } from "./Books";
import { EditBook } from "./EditBook.jsx";
import { Takebooks } from "./Takebooks.jsx";
import { Navbar } from "./Navbar.jsx";

function App() {
  const navigate = useNavigate();

  const [takebooks, settakebooks] = useState([]);

  const returndeletfun = async (dataid) => {
    // const api =`https://63e0923b65b57fe60644f2ba.mockapi.io/books/${dataid}`

    await fetch(`https://63e0923b65b57fe60644f2ba.mockapi.io/books/${dataid}`, {
      method: "DELETE",
    });

    navigate(`/books/take`);
  };

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books" element={<Books />} />
        <Route path="/addbooks" element={<AddBooks />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route
          path="/books/take"
          element={<Takebooks takebooks={takebooks} />}
        />
        <Route path="*" element={<Books />} />
      </Routes>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <div className="text-light">
      <footer className="py-3 bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-6 ">
              <ul className="nav flex-column">
                <li className="nav-item mb-1">
                  <span href="#" className="nav-link p-0  text-white">
                    Home
                  </span>
                </li>
                <li className="nav-item mb-2">
                  <span href="#" className="nav-link p-0   text-white">
                    Features
                  </span>
                </li>
                <li className="nav-item mb-2">
                  <span href="#" className="nav-link p-0   text-white">
                    Pricing
                  </span>
                </li>
                <li className="nav-item mb-2">
                  <span href="#" className="nav-link p-0   text-white">
                    FAQs
                  </span>
                </li>
                <li className="nav-item mb-2">
                  <span href="#" className="nav-link p-0   text-white">
                    About
                  </span>
                </li>
              </ul>
            </div>

            <div className="col-md-8 mt-3 text-center">
              <p>
                A library is a collection of books, and possibly other materials
                and media, that is accessible for use by its members and members
                of allied institutions.
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-between py-1 my-1 border-top">
            <p>© 2021 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-light" href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-light" href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-light" href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
