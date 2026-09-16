import { School } from "../data/schoolData";

const Admission = () => {
  return (
    <>
     
        <div className="container text-center">
          <span className="badge bg-warning text-dark px-4 py-2 rounded-pill"  style={{height:'40px',width:'220px', fontSize:'18px'}}>
         <b>ADMISSIONS OPEN</b>
          </span>

          <h1 className="fw-bold mt-3 mb-2">
            Start Your Child's Journey
          </h1>

          <p className="mb-0 opacity-75">
            Join {School.schoolName} and build a brighter future.
          </p>
        </div>
    

      {/* Admission Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4 align-items-stretch">

            {/* Information */}
            <div className="col-lg-5">
              <div
                className="bg-white rounded-4 shadow-sm h-100 p-4"
                style={{ borderTop: "4px solid #dc3545" }}
              >
                <span className="text-danger fw-bold small">
                  ADMISSION INFORMATION
                </span>

                <h2 className="fw-bold mt-2">
                  Join Our School
                </h2>

                <p className="text-secondary">
                  {School.schoolName} provides a supportive environment
                  where students can learn, grow and achieve their goals.
                </p>

                <div className="mt-4">
                  {[
                    ["Classes", "Nursery to Class XII"],
                    ["Session", "2026–27"],
                    ["School Type", "Co-Educational"],
                    ["Admission", "Subject to availability"],
                  ].map(([title, value]) => (
                    <div
                      key={title}
                      className="d-flex justify-content-between border-bottom py-3"
                    >
                      <span className="fw-semibold">{title}</span>
                      <span className="text-secondary text-end">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="alert alert-danger mt-4 mb-0">
                  <small>
                    Please provide correct information in the enquiry form.
                  </small>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="col-lg-7">
              <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                <span className="text-danger fw-bold small">
                  ENQUIRY FORM
                </span>

                <h2 className="fw-bold mt-2 mb-4">
                  Admission Enquiry
                </h2>

                <form>
                  <div className="row g-3">

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Student Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Student's full name"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Parent / Guardian
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Parent name"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email address"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone number"
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-semibold">
                        Applying For
                      </label>

                      <select className="form-select">
                        <option value="">Select Class</option>
                        <option>Nursery</option>
                        <option>LKG</option>
                        <option>UKG</option>
                        <option>Class I - V</option>
                        <option>Class VI - VIII</option>
                        <option>Class IX - X</option>
                        <option>Class XI - XII</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-semibold">
                        Message
                      </label>

                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Write your enquiry..."
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary w-100 py-2 fw-semibold rounded-pill"
                      >
                        Submit Enquiry →
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
<div className="container my-4">
  <div
    className="text-center p-4 rounded-4 shadow-sm mx-auto"
    style={{
      maxWidth: "650px",
      background: "#fff",
      border: "1px solid #eee",
      transition: "all 0.3s ease",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-5px)";
      e.currentTarget.style.boxShadow =
        "0 12px 25px rgba(0,0,0,0.12)";
      e.currentTarget.style.borderColor = "#dc3545";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow =
        "0 2px 8px rgba(0,0,0,0.08)";
      e.currentTarget.style.borderColor = "#eee";
    }}
  >
    <h5 className="fw-bold mb-1">
      Need More Information?
    </h5>

    <p className="text-secondary mb-3">
      Our admission team is happy to assist you.
    </p>

    <a
      href="#contact"
      className="btn btn-primary rounded-pill px-4 fw-semibold"
    >
      Contact Us →
    </a>
  </div>
</div>     
    </>
  );
};

export default Admission;
