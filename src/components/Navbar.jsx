import { useState } from "react";
import { Link } from "react-router-dom";
import Mode from "./Mode";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top shadow-sm"
      style={{ backgroundColor: "#770c0c" }}
    >
      <div className="container">

        {/* Brand */}
        <a
          className="navbar-brand fw-bold d-flex align-items-center"
          href="#home"
          onClick={closeMenu}
        >
          <span className="text-warning">WSIS</span>
         
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler shadow-none"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          
          <ul className="navbar-nav mx-auto gap-lg-2" >

            <li className="nav-item">
              <a
                className="nav-link fw-semibold px-3 btn btn-outline-danger"
                style={{color:'white'}}
                href="#home"
                onClick={closeMenu}
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link fw-semibold px-3 btn btn-outline-danger"
               style={{color:'white'}}
                href="#about"
                onClick={closeMenu}
              >
                About
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link fw-semibold px-3 btn btn-outline-danger"
                style={{color:'white'}}
                href="#academics"
                onClick={closeMenu}
              >
                Academics
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link fw-semibold px-3 btn btn-outline-danger"
                style={{color:'white'}}
                href="#admission"
                onClick={closeMenu}
              >
                Admission
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link fw-semibold px-3 btn btn-outline-danger"
               style={{color:'white'}}
                href="#facility"
                onClick={closeMenu}
              >
                Facilities
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link fw-semibold px-3 btn btn-outline-danger"
                style={{color:'white'}}
                href="#gallery"
                onClick={closeMenu}
              >
                Gallery
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link fw-semibold px-3 btn btn-outline-danger"
                style={{color:'white'}}
                
                href="#contact"
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>

          </ul>

          {/* Login */}
          <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0">
            <Link
              to="/login"
              className="btn btn-warning px-4 fw-semibold rounded-pill"
              onClick={closeMenu}
            >
              Login
            </Link>

            <Mode />
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
