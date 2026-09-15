import { useState } from "react";
import { Link } from "react-router-dom";
import Mode from "./Mode";

const Navbar = () => {

  // Navbar open/close state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container">

        {/* Mobile Brand */}
        <a className="navbar-brand d-lg-none fw-bold" href="#">
          <span className="text-danger">WSIS</span>
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler border border-secondary shadow-none ms-auto"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Menu */}
        <div
          className={`collapse navbar-collapse ${
            isOpen ? "show" : ""
          }`}
        >

          <ul className="navbar-nav mx-auto align-items-lg-center">

            {/* Home */}
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-warning  fw-semibold px-3" to="/">
                Home
              </Link>
            </li>

            {/* About */}
            <li className="nav-item " >
              <Link className="nav-link btn btn-outline-warning  fw-semibold px-3" to="/about">
                About
              </Link>
            </li>

            {/* Academics */}
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-warning fw-semibold px-3" to="/academics">
                Academics
              </Link>
            </li>
            {/* Admission */}

            <li className="nav-item">
              <Link className="nav-link btn btn-outline-warning fw-semibold px-3" to="/admission">
                Admission
              </Link>
            </li>

            {/* Facilities */}
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-warning fw-semibold px-3" to="/facilities">
                Facilities
              </Link>
            </li>

            {/* Gallery */}
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-warning fw-semibold px-3" to="/gallery">
                Gallery
              </Link>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-warning fw-semibold px-3" to="/contact">
                Contact
              </Link>
            </li>

          </ul>

        </div>
      </div>
      <div>
        <Link to="/login" className="btn btn-primary rounded-2 px-4 fw-semibold py-2 me-1">
          Login
        </Link>
      </div>
      <Mode/>
    </nav>
  );
};

export default Navbar;
