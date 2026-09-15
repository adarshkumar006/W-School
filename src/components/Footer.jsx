import { Link } from "react-router-dom";
import { School } from "../data/schoolData";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">

      <div className="container">

        <div className="row g-4">

          {/* School Info */}
          <div className="col-12 col-md-6 col-lg-4">
            <h4 className="fw-bold mb-3">
              {School.schoolName}
            </h4>

            <p className="text-secondary">
              Excellence in Education
            </p>

            <p className="text-light">
              We are committed to providing quality education,
              developing strong values and creating a bright future
              for every student.
            </p>

            <div className="d-flex gap-3 fs-4">
              <a href="#" className="text-white">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#" className="text-white">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#" className="text-white">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-3 col-lg-2">
            <h5 className="fw-bold mb-3">Quick Links</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-secondary text-decoration-none">
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/about" className="text-secondary text-decoration-none">
                  About
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/academics" className="text-secondary text-decoration-none">
                  Academics
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/facility" className="text-secondary text-decoration-none">
                  Facility
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/gallery" className="text-secondary text-decoration-none">
                  Gallery
                </Link>
              </li>

              <li>
                <Link to="/contact" className="text-secondary text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="fw-bold mb-3">Contact Us</h5>

            <p className="text-secondary mb-3">
              <i className="bi bi-geo-alt-fill text-warning me-2"></i>
              Kanpur, Uttar Pradesh, India
            </p>

            <p className="text-secondary mb-3">
              <i className="bi bi-telephone-fill text-warning me-2"></i>
              +91 XXXXX XXXXX
            </p>

            <p className="text-secondary mb-3">
              <i className="bi bi-envelope-fill text-warning me-2"></i>
              info@wonderstarinternationalschool.com
            </p>
          </div>

          {/* School Timing */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="fw-bold mb-3">School Hours</h5>

            <p className="text-secondary mb-2">
              <i className="bi bi-clock-fill text-warning me-2"></i>
              Monday - Saturday
            </p>

            <p className="text-secondary mb-3">
              8:00 AM - 3:00 PM
            </p>

            <Link
              to="/contact"
              className="btn btn-warning fw-semibold px-4"
            >
              Contact Us
            </Link>
          </div>

        </div>

        <hr className="border-secondary my-4" />

        {/* Bottom Footer */}
        <div className="row align-items-center">

          <div className="col-md-6 text-center text-md-start">
            <small className="text-secondary">
              © {new Date().getFullYear()} {School.schoolName}.
              All Rights Reserved.
            </small>
          </div>

          <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
            <p className="text-danger">
             This website is developed by <a href="https://pinweb.in/" target="_blank" >Pinweb PVT. LTD.</a>
            </p>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
