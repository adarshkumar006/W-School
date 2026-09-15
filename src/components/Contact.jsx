import { Link } from "react-router-dom";
import { School } from "../data/schoolData";
const Contact = () => {
  return (
    <div>

      {/* ================= HERO ================= */}
      <section
        className="position-relative d-flex align-items-center"
        style={{
          minHeight: "65vh",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1497366754035-f200968a6e72)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(90deg, rgba(3,18,38,0.92), rgba(3,18,38,0.55), rgba(3,18,38,0.2))",
          }}
        ></div>

        <div className="container position-relative text-white">
          <div className="col-lg-8">

            <span className="badge rounded-pill bg-info text-dark px-3 py-2 mb-3">
              GET IN TOUCH
            </span>

            <h1 className="display-3 fw-bold mb-3">
              We'd Love to
              <span className="text-info"> Hear From You</span>
            </h1>

            <p className="lead text-light mb-4">
              Whether you are a parent, student or visitor, our team is
              always ready to help you with your questions and enquiries.
            </p>

            <Link
              to="/contact"
              className="btn btn-info btn-lg rounded-pill px-4 fw-semibold"
            >
              Contact Our Team
              <i className="bi bi-arrow-down ms-2"></i>
            </Link>

          </div>
        </div>
      </section>


      {/* ================= CONTACT INFO ================= */}
      <section id="contact" className="py-5 bg-light">

        <div className="container py-4">

          <div className="text-center mb-5">

            <span className="text-info fw-bold">
              CONTACT INFORMATION
            </span>

            <h2 className="display-6 fw-bold mt-2">
              We're Here to Help
            </h2>

            <p
              className="text-secondary mx-auto"
              style={{ maxWidth: "650px" }}
            >
              Get in touch with {School.schoolName} through phone,
              email or by visiting our campus.
            </p>

          </div>


          <div className="row g-4">

            {/* Address */}
            <div className="col-12 col-md-6 col-lg-3">

              <div className="bg-white rounded-4 shadow-sm p-4 h-100 text-center">

                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-circle bg-info bg-opacity-10 text-info mb-3"
                  style={{
                    width: "65px",
                    height: "65px",
                    fontSize: "27px",
                  }}
                >
                    <img src="public/vicepri.jpeg"  height={70} width={70} className="rounded-circle"/>
                  <i className="bi bi-geo-alt-fill"></i>
                </div>

                <h5 className="fw-bold">
                  Visit Us
                </h5>

                <p className="text-secondary mb-0">
                        {School.schoolName}
                  <br />
                  kanpur, Uttar Pradesh
                </p>

              </div>

            </div>


            {/* Phone */}
            <div className="col-12 col-md-6 col-lg-3">

              <div className="bg-white rounded-4 shadow-sm p-4 h-100 text-center">

                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-circle bg-info bg-opacity-10 text-info mb-3"
                  style={{
                    width: "65px",
                    height: "65px",
                    fontSize: "27px",
                  }}
                >
                    <img src="public/vicepri.jpeg"  height={70} width={70} className="rounded-circle"/>
                  <i className="bi bi-telephone-fill"></i>
                </div>

                <h5 className="fw-bold">
                  Call Us
                </h5>

                <p className="text-secondary mb-0">
                  +91 98765 43210
                  <br />
                  +91 91234 56789
                </p>

              </div>

            </div>


            {/* Email */}
            <div className="col-12 col-md-6 col-lg-3">

              <div className="bg-white rounded-4 shadow-sm p-4 h-100 text-center">

                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-circle bg-info bg-opacity-10 text-info mb-3"
                  style={{
                    width: "65px",
                    height: "65px",
                    fontSize: "27px",
                  }}
                >
                    <img src="public/vicepri.jpeg"  height={70} width={70} className="rounded-circle"/>
                  <i className="bi bi-envelope-fill"></i>
                </div>

                <h5 className="fw-bold">
                  Email Us
                </h5>

                <p className="text-secondary mb-0">
                  info@wonderstar.in
                  <br />
                  admissions@wonderstar.in
                </p>

              </div>

            </div>


            {/* Office */}
            <div className="col-12 col-md-6 col-lg-3">

              <div className="bg-white rounded-4 shadow-sm p-4 h-100 text-center">

                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-circle bg-info bg-opacity-10 text-info mb-3"
                  style={{
                    width: "65px",
                    height: "65px",
                    fontSize: "27px",
                  }}
                >
                    <img src="public/vicepri.jpeg"  height={70} width={70} className="rounded-circle"/>
                  <i className="bi bi-clock-fill"></i>
                </div>

                <h5 className="fw-bold">
                  Office Hours
                </h5>

                <p className="text-secondary mb-0">
                  Monday - Saturday
                  <br />
                  8:00 AM - 4:00 PM
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT FORM ================= */}
      <section className="py-5">

        <div className="container py-4">

          <div className="row g-5 align-items-center">

            {/* Left Content */}
            <div className="col-lg-5">

              <span className="text-info fw-bold">
                SEND AN ENQUIRY
              </span>

              <h2 className="display-6 fw-bold mt-2">
                Let's Start a Conversation
              </h2>

              <p className="text-secondary mt-3">
                Have a question about admissions, academics, facilities
                or school activities? Send us a message and our team
                will get back to you.
              </p>


              <div className="mt-4">

                <div className="d-flex align-items-start mb-4">

                  <div className="text-info fs-4 me-3">
                    <i className="bi bi-check-circle-fill"></i>
                  </div>

                  <div>
                    <h6 className="fw-bold mb-1">
                      Admission Enquiries
                    </h6>
                    <p className="text-secondary mb-0">
                      Get information about admission and enrollment.
                    </p>
                  </div>

                </div>


                <div className="d-flex align-items-start mb-4">

                  <div className="text-info fs-4 me-3">
                    <i className="bi bi-check-circle-fill"></i>
                  </div>

                  <div>
                    <h6 className="fw-bold mb-1">
                      General Information
                    </h6>
                    <p className="text-secondary mb-0">
                      Ask us anything about our school and programs.
                    </p>
                  </div>

                </div>


                <div className="d-flex align-items-start">

                  <div className="text-info fs-4 me-3">
                    <i className="bi bi-check-circle-fill"></i>
                  </div>

                  <div>
                    <h6 className="fw-bold mb-1">
                      Quick Response
                    </h6>
                    <p className="text-secondary mb-0">
                      Our team will try to respond as soon as possible.
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* Form */}
            <div className="col-lg-7">

              <div
                className="p-4 p-md-5 rounded-4 shadow-lg"
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e9ecef",
                }}
              >

                <h4 className="fw-bold mb-4">
                  Send Us a Message
                </h4>

                <form>

                  <div className="row g-3">

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Full Name
                      </label>

                      <div className="input-group">
                        <span className="input-group-text bg-white">
                          <i className="bi bi-person"></i>
                        </span>

                        <input
                          type="text"
                          className="form-control py-2"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>


                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Email Address
                      </label>

                      <div className="input-group">
                        <span className="input-group-text bg-white">
                          <i className="bi bi-envelope"></i>
                        </span>

                        <input
                          type="email"
                          className="form-control py-2"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>


                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Phone Number
                      </label>

                      <div className="input-group">
                        <span className="input-group-text bg-white">
                          <i className="bi bi-telephone"></i>
                        </span>

                        <input
                          type="tel"
                          className="form-control py-2"
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>


                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Enquiry Type
                      </label>

                      <select className="form-select py-2">
                        <option>Select enquiry</option>
                        <option>Admission</option>
                        <option>Academics</option>
                        <option>Facilities</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>


                    <div className="col-12">

                      <label className="form-label fw-semibold">
                        Message
                      </label>

                      <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Write your message..."
                      ></textarea>

                    </div>


                    <div className="col-12">

                      <button
                        type="submit"
                        className="btn btn-info text-dark fw-semibold px-4 py-2 rounded-pill"
                      >
                        Send Message
                        <i className="bi bi-send-fill ms-2"></i>
                      </button>

                    </div>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= MAP ================= */}
      <section className="py-5 bg-light">

        <div className="container">

          <div className="text-center mb-4">

            <span className="text-info fw-bold">
              FIND US
            </span>

            <h2 className="fw-bold mt-2">
              Visit Our Campus
            </h2>

          </div>


          <div
            className="rounded-4 overflow-hidden shadow"
            style={{ height: "400px" }}
          >

            <iframe
              title="{School.schoolName} Location"
              src="https://www.google.com/maps?q=kanpur,Uttar%20Pradesh&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section
        className="py-5 text-white"
        style={{
          background:
            "linear-gradient(135deg, #06283D, #087E8B)",
        }}
      >

        <div className="container py-4">

          <div className="row align-items-center">

            <div className="col-lg-8 text-center text-lg-start">

              <h2 className="display-6 fw-bold">
                Ready to Connect With Us?
              </h2>

              <p className="text-light mb-0">
                We are happy to answer your questions and help you
                discover more about {School.schoolName}.
              </p>

            </div>

            <div className="col-lg-4 text-center text-lg-end mt-4 mt-lg-0">

              <Link
                to="/"
                className="btn btn-light btn-lg rounded-pill px-4 fw-semibold"
              >
                Back to Home
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Contact;
