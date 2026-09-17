import { School } from "../data/schoolData";

const Footer = () => {
  return (
    <footer
      className="text-dark pt-5 pb-3 mt-5"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container">

        <div className="row g-4">

          {/* School Info */}
          <div className="col-12 col-md-6 col-lg-4">
            <h4 className="fw-bold mb-3">
              {School.schoolName}
            </h4>

            <p className="text-success fw-semibold mb-2">
              Excellence in Education
            </p>

            <p className="text-dark opacity-75">
              We are committed to providing quality education,
              developing strong values and creating a bright future
              for every student.
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-3 fs-4 mt-3">
              <a
                href="#"
                className="text-dark"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>

              <a
                href="#"
                className="text-dark"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>

              <a
                href="#"
                className="text-dark"
                aria-label="YouTube"
              >
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-3 col-lg-2">
            <h5 className="fw-bold mb-3">
              Quick Links
            </h5>

            <ul className="list-unstyled">

              <li className="mb-2">
                <a
                  href="#home"
                  className="text-dark text-decoration-none opacity-75"
                >
                  Home
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="#about"
                  className="text-dark text-decoration-none opacity-75"
                >
                  About
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="#academics"
                  className="text-dark text-decoration-none opacity-75"
                >
                  Academics
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="#admission"
                  className="text-dark text-decoration-none opacity-75"
                >
                  Admission
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="#facility"
                  className="text-dark text-decoration-none opacity-75"
                >
                  Facilities
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="#gallery"
                  className="text-dark text-decoration-none opacity-75"
                >
                  Gallery
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-dark text-decoration-none opacity-75"
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="fw-bold mb-3">
              Contact Us
            </h5>

            <p className="text-dark opacity-75 mb-3">
              <i className="bi bi-geo-alt-fill text-warning me-2"></i>
              Kanpur, Uttar Pradesh, India
            </p>

            <p className="text-dark opacity-75 mb-3">
              <i className="bi bi-telephone-fill text-warning me-2"></i>
              +91 XXXXX XXXXX
            </p>

            <p className="text-dark opacity-75 mb-3">
              <i className="bi bi-envelope-fill text-warning me-2"></i>
              info@wonderstarinternationalschool.com
            </p>
          </div>

          {/* School Timing */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="fw-bold mb-3">
              School Hours
            </h5>

            <p className="text-dark opacity-75 mb-2">
              <i className="bi bi-clock-fill text-warning me-2"></i>
              Monday - Saturday
            </p>

            <p className="text-dark opacity-75 mb-3">
              8:00 AM - 3:00 PM
            </p>

            <a
              href="#contact"
              className="btn btn-warning fw-semibold px-4 rounded-pill"
            >
              Contact Us
            </a>
          </div>

        </div>

        <hr className="border-light opacity-25 my-4" />

        {/* Bottom Footer */}
        <div className="row align-items-center g-2">

          <div className="col-12 col-md-6 text-center text-md-start">
            <small className="text-white opacity-75">
              © {new Date().getFullYear()} {School.schoolName}.
              All Rights Reserved.
            </small>
          </div>

          <div className="col-12 col-md-6 text-center text-md-end">
            <small className="text-white opacity-75">
              This website is developed by{" "}
              <a
                href="https://pinweb.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warning fw-semibold text-decoration-none"
              >
                Pinweb PVT. LTD.
              </a>
            </small>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
