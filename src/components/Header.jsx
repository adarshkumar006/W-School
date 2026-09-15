import { School } from "../data/schoolData";

const Header = () => {
  return (
    <div className=" text-white py-3" style={{backgroundColor:'navy'}}>
      <div className="container">
        <div className="row align-items-center">

          {/* School Name */}
          <div className="col-md-5 d-flex align-items-center">
            
            {/* Logo ke liye space */}
            <div>
             <img src="logo.jpeg" alt="Logo" style={{ width: "100px", height: "100px" }} className="rounded-circle me-5" />
            </div>

            <div>
              <h3 className="mb-0 fw-bold">
              {School.schoolName}
              </h3>

              <small className="text-secondary">
               <b> Excellence in Education </b>
              </small>
             
            </div>

          </div>

          {/* Location */}
          <div className="col-md-3 mt-2 mt-md-0">
            <div className="d-flex align-items-center">
              <span className="fs-5 text-primary me-2">📍</span>

              <div>
                <small className="text-secondary d-block">
                <b>  Location</b>
                </small>

                <span className="fw-semibold">
                  Kanpur, Uttar Pradesh
                </span>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="col-md-2 mt-2 px-1 mt-md-0">
            <div className="d-flex align-items-center">
              <span className="fs-3 text-primary me-2">☎</span>

              <div>
                <small className="text-secondary d-block">
               <b>Call Us</b>
                </small>

                <span className="fw-semibold">
                  +91 98765 43210
                </span>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="col-md-2 mt-2 mt-md-0">
            <div className="d-flex align-items-center">
              <span className="fs-3 text-primary me-2">✉</span>

              <div>
                <small className="text-secondary d-block">
                <b> Email Us </b>
                </small>

                <span className="fw-semibold">
                  info@school.com
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;