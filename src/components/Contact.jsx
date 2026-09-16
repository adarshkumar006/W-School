import { School } from "../data/schoolData";

const Contact = () => {
  return (
    <>
      {/* Contact Header */}
      
        <div className="container text-center">
          <span className="badge bg-warning text-dark px-4 py-2 rounded-pill" style={{height:'40px',width:'190px', fontSize:'18px'}}>
         <b>CONTACT US</b>
          </span>

          <h1 className="fw-bold display-5 mt-3 mb-2">
            Get In Touch
          </h1>

          <p className="mb-0 opacity-75 mx-auto" style={{ maxWidth: "650px" }}>
            We are here to help you with admissions, enquiries and school
            information.
          </p>
        </div>
      

      {/* Contact Section */}
      <section id="contact" className="py-5">
        <div className="container">
          <div className="row g-4 align-items-stretch">

            {/* Contact Information */}
            <div className="col-12 col-lg-5">
              <div
                className="h-100 rounded-4 p-4 text-dark"
                style={{
                  background:
                    "linear-gradient(135deg, #e4dbdb, #f3e9ea)",
                  boxShadow: "0 8px 25px rgba(0,0,0,.12)",
                }}
              >
                <span className="small fw-bold text-danger">
                  CONTACT INFORMATION
                </span>

                <h3 className="fw-bold mt-2">
                  {School.schoolName}
                </h3>

                <p className="opacity-75">
                  Feel free to contact us for any school-related enquiry.
                  Our team will be happy to assist you.
                </p>

                {/* Address */}
                <div className="d-flex gap-3 mt-4">
                  <div className="fs-4">📍</div>
                  <div>
                    <h6 className="fw-bold mb-1">Address</h6>
                    <p className="mb-0 opacity-75">
                      Kingston Public School,
                      <br />
                      Prayagraj, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="d-flex gap-3 mt-4">
                  <div className="fs-4">📞</div>
                  <div>
                    <h6 className="fw-bold mb-1">Phone</h6>
                    <p className="mb-0 opacity-75">
                      +91 XXXXX XXXXX
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="d-flex gap-3 mt-4">
                  <div className="fs-4">✉️</div>
                  <div>
                    <h6 className="fw-bold mb-1">Email</h6>
                    <p className="mb-0 opacity-75">
                      info@kingstonpublicschool.com
                    </p>
                  </div>
                </div>

                {/* Timing */}
                <div className="d-flex gap-3 mt-4">
                  <div className="fs-4">🕒</div>
                  <div>
                    <h6 className="fw-bold mb-1">Office Hours</h6>
                    <p className="mb-0 opacity-75">
                      Monday – Saturday
                      <br />
                      9:00 AM – 3:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-12 col-lg-7">
              <div
                className="card border-0 rounded-4 h-100 p-4 "
                style={{
                  boxShadow: "0 8px 25px rgba(0,0,0,.08)",
                }}
              >
                <div className="mb-4">
                  <span className="text-danger fw-bold small">
                    SEND A MESSAGE
                  </span>

                  <h3 className="fw-bold mt-2 ">
                    How Can We Help?
                  </h3>

                  <p className="text-secondary mb-0">
                    Fill out the form and our team will get back to you.
                  </p>
                </div>

                <form>
                  <div className="row g-3">

                    {/* Name */}
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        Your Name
                      </label>

                      <input
                        type="text"
                        className="form-control rounded-3"
                        placeholder="Enter your name"
                      />
                    </div>

                    {/* Phone */}
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        className="form-control rounded-3"
                        placeholder="Enter phone number"
                      />
                    </div>

                    {/* Email */}
                    <div className="col-12">
                      <label className="form-label fw-semibold">
                        Email Address
                      </label>

                      <input
                        type="email"
                        className="form-control rounded-3"
                        placeholder="Enter email address"
                      />
                    </div>

                    {/* Subject */}
                    <div className="col-12">
                      <label className="form-label fw-semibold">
                        Subject
                      </label>

                      <select className="form-select rounded-3">
                        <option>Select an enquiry</option>
                        <option>Admission Enquiry</option>
                        <option>General Enquiry</option>
                        <option>Fee Related</option>
                        <option>School Information</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="col-12">
                      <label className="form-label fw-semibold">
                        Message
                      </label>

                      <textarea
                        className="form-control rounded-3"
                        rows="4"
                        placeholder="Write your message..."
                      ></textarea>
                    </div>

                    {/* Button */}
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary rounded-pill px-4 fw-semibold"
                      >
                        Send Message →
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

   
    
    </>
  );
};

export default Contact;
