import { School } from "../data/schoolData";
let Admission = () => {
  return (
    <div>

      {/* Header */}
      <div className="container text-center bg-primary text-white p-5 mt-4 rounded-3">
        <h1 className="fw-bold">
          Admissions Open
        </h1>

        <p className="lead mb-0">
          Start your child's journey with {School.schoolName}
        </p>
      </div>


      {/* Admission Information */}
      <div className="container mt-5">

        <div className="row g-4">

          {/* Left Side */}
          <div className="col-md-5">

            <div className="card shadow h-100">
              <div className="card-body p-4">

                <h3 className="fw-bold mb-4">
                  Admission Information
                </h3>

                <p>
            {School.schoolName} welcomes students who are
                  passionate about learning and growing.
                </p>

                <ul className="list-group list-group-flush">

                  <li className="list-group-item">
                    <strong>Classes:</strong> Nursery to Class XII
                  </li>

                  <li className="list-group-item">
                    <strong>Session:</strong> 2026-27
                  </li>

                  <li className="list-group-item">
                    <strong>Admission:</strong> Based on availability
                  </li>

                  <li className="list-group-item">
                    <strong>School Type:</strong> Co-Educational
                  </li>

                </ul>

                <div className="alert alert-info mt-4">
                  <strong>Note:</strong> Please fill in all required
                  information correctly.
                </div>

              </div>
            </div>

          </div>


          {/* Right Side - Form */}
          <div className="col-md-7">

            <div className="card shadow">

              <div className="card-body p-4">

                <h3 className="fw-bold mb-4">
                  Admission Enquiry Form
                </h3>

                <form>

                  {/* Student Name */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Student Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter student's full name"
                    />
                  </div>


                  {/* Parent Name */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Parent / Guardian Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter parent name"
                    />
                  </div>


                  {/* Email + Phone */}
                  <div className="row">

                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">
                        Email
                      </label>

                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Enter phone number"
                      />
                    </div>

                  </div>


                  {/* Class */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Applying For Class
                    </label>

                    <select className="form-select">
                      <option>Select Class</option>
                      <option>Nursery</option>
                      <option>LKG</option>
                      <option>UKG</option>
                      <option>Class I</option>
                      <option>Class II</option>
                      <option>Class III</option>
                      <option>Class IV</option>
                      <option>Class V</option>
                      <option>Class VI</option>
                      <option>Class VII</option>
                      <option>Class VIII</option>
                      <option>Class IX</option>
                      <option>Class X</option>
                      <option>Class XI</option>
                      <option>Class XII</option>
                    </select>
                  </div>


                  {/* Message */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Message
                    </label>

                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Write your message..."
                    ></textarea>
                  </div>


                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                  >
                    Submit Admission Enquiry
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* Admission Process */}
      <div className="container my-5">

        <h2 className="text-center fw-bold mb-4">
          Admission Process
        </h2>

        <div className="row g-4 text-center">

          <div className="col-md-3">
            <div className="card shadow h-100 p-3">
              <div className="card-body">
                <h2>01</h2>
                <h5 className="fw-bold">Enquiry</h5>
                <p className="text-muted">
                  Submit your admission enquiry form.
                </p>
              </div>
            </div>
          </div>


          <div className="col-md-3">
            <div className="card shadow h-100 p-3">
              <div className="card-body">
                <h2>02</h2>
                <h5 className="fw-bold">Interaction</h5>
                <p className="text-muted">
                  Attend the required interaction or assessment.
                </p>
              </div>
            </div>
          </div>


          <div className="col-md-3">
            <div className="card shadow h-100 p-3">
              <div className="card-body">
                <h2>03</h2>
                <h5 className="fw-bold">Documents</h5>
                <p className="text-muted">
                  Submit the required documents.
                </p>
              </div>
            </div>
          </div>


          <div className="col-md-3">
            <div className="card shadow h-100 p-3">
              <div className="card-body">
                <h2>04</h2>
                <h5 className="fw-bold">Confirmation</h5>
                <p className="text-muted">
                  Complete the admission process.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>


      {/* CTA */}
      <div className="container mb-5">
        <div className="bg-dark text-white text-center p-5 rounded-3">

          <h2 className="fw-bold">
            Have Questions About Admission?
          </h2>

          <p className="mb-4">
            Contact our admission office for more information.
          </p>

          <a
            href="/contact"
            className="btn btn-warning px-4"
          >
            Contact Us
          </a>

        </div>
      </div>

    </div>
  );
};

export default Admission;
