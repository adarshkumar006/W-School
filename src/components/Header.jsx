import { School } from "../data/schoolData";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="school-header">
      <div className="container py-4">
        <div className="row align-items-center">

          {/* LEFT - Logo */}
          <div className="col-md-2 text-center mb-3 mb-md-0">
            <div className="logo-box">
              <img
                src="/logo.jpeg"
                alt="School Logo"
                className="school-logo"
              />
            </div>
          </div>

          {/* CENTER - School Name */}
          <div className="col-md-6 text-center text-md-start">
            <span className="welcome-text">
              ✨ WELCOME TO
            </span>

            <h1 className="school-title">
              {School.schoolName}
            </h1>

            <p className="school-tagline">
              Shaping Minds • Building Character • Creating Leaders
            </p>

            <div className="school-badges">
              <span>🎓 Quality Education</span>
              <span>⭐ Excellence</span>
            </div>
          </div>

          {/* RIGHT - CTA */}
          <div className="col-md-4 mt-4 mt-md-0">
            <div className="header-card">

              <div className="header-info">
                <span>📍</span>
                <div>
                  <small>OUR CAMPUS</small>
                  <strong>Kanpur, Uttar Pradesh</strong>
                </div>
              </div>

              <div className="header-info">
                <span>📞</span>
                <div>
                  <small>CALL US</small>
                  <strong>+91 98765 43210</strong>
                </div>
              </div>

              <Link className="btn btn-outline-warning" to="/admission">
                🎓 Admission Enquiry
                <span> →</span>
              </Link>

            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;