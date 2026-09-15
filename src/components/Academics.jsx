import { School } from "../data/schoolData";
const Academics = () => {
  return (
    <>
      {/* ================= ACADEMICS HERO ================= */}
      <section
        className="position-relative text-white d-flex align-items-center"
        style={{
          minHeight: "55vh",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ background: "rgba(0,0,0,0.62)" }}
        ></div>

        <div className="container position-relative text-center">
          <span className="badge bg-primary px-3 py-2 mb-3">
            ACADEMICS
          </span>

          <h1 className="display-3 fw-bold">
            Excellence Through Education
          </h1>

          <p className="lead mx-auto mt-3" style={{ maxWidth: "750px" }}>
            Empowering students with knowledge, skills and confidence
            to succeed in an ever-changing world.
          </p>
        </div>
      </section>


      {/* ================= INTRODUCTION ================= */}
      <section className="py-5">

        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <span className="text-primary fw-bold">
                OUR ACADEMIC APPROACH
              </span>

              <h2 className="display-6 fw-bold mt-2">
                Learning That Inspires Curiosity
              </h2>

              <p className="text-secondary mt-4">
                At{School.schoolName}, we believe that effective
                education is not simply about memorizing information.
                Students are encouraged to understand concepts, ask
                questions and develop independent thinking.
              </p>

              <p className="text-secondary">
                Our teaching approach combines strong academic
                foundations with practical learning, technology,
                creativity and collaborative activities.
              </p>

              <div className="mt-4">

                <div className="d-flex mb-3">
                  <span className="text-primary fs-4 me-3">✓</span>
                  <span className="fw-semibold">
                    Concept-based learning
                  </span>
                </div>

                <div className="d-flex mb-3">
                  <span className="text-primary fs-4 me-3">✓</span>
                  <span className="fw-semibold">
                    Experienced teachers
                  </span>
                </div>

                <div className="d-flex">
                  <span className="text-primary fs-4 me-3">✓</span>
                  <span className="fw-semibold">
                    Technology-supported education
                  </span>
                </div>

              </div>

            </div>


            <div className="col-lg-6">

              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754"
                alt="Classroom Learning"
                className="img-fluid rounded-4 shadow"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ================= ACADEMIC LEVELS ================= */}
      <section className="py-5 bg-light">

        <div className="container">

          <div className="text-center mb-5">

            <span className="text-primary fw-bold">
              ACADEMIC LEVELS
            </span>

            <h2 className="fw-bold mt-2">
              Education for Every Stage
            </h2>

            <p className="text-secondary mx-auto" style={{ maxWidth: "650px" }}>
              Our academic programs are designed to support students
              at every stage of their educational journey.
            </p>

          </div>


          <div className="row g-4">

            {/* Primary */}
            <div className="col-md-6 col-lg-4">

              <div className="card border-0 shadow-sm h-100 overflow-hidden">

                <img
                  src="/award1.jpeg"
                  alt="Primary Education"
                  className="card-img-top"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body p-4">

                  <span className="badge bg-primary mb-3">
                    Foundation
                  </span>

                  <h4 className="fw-bold">
                    Primary School
                  </h4>

                  <p className="text-secondary">
                    Developing strong foundations in language,
                    mathematics, science and creative learning.
                  </p>

                  <ul className="text-secondary ps-3">
                    <li>Strong basic concepts</li>
                    <li>Activity-based learning</li>
                    <li>Creative development</li>
                  </ul>

                </div>

              </div>

            </div>


            {/* Middle */}
            <div className="col-md-6 col-lg-4">

              <div className="card border-0 shadow-sm h-100 overflow-hidden">

                <img
                  src="/award3.jpeg"
                  alt="Middle School"
                  className="card-img-top"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body p-4">

                  <span className="badge bg-success mb-3">
                    Development
                  </span>

                  <h4 className="fw-bold">
                    Middle School
                  </h4>

                  <p className="text-secondary">
                    Encouraging deeper understanding, critical thinking
                    and independent learning.
                  </p>

                  <ul className="text-secondary ps-3">
                    <li>Critical thinking</li>
                    <li>Practical activities</li>
                    <li>Problem solving</li>
                  </ul>

                </div>

              </div>

            </div>


            {/* Secondary */}
            <div className="col-md-6 col-lg-4">

              <div className="card border-0 shadow-sm h-100 overflow-hidden">

                <img
                  src="/award5.jpeg"
                  alt="Secondary Education"
                  className="card-img-top"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body p-4">

                  <span className="badge bg-warning text-dark mb-3">
                    Preparation
                  </span>

                  <h4 className="fw-bold">
                    Secondary School
                  </h4>

                  <p className="text-secondary">
                    Preparing students for higher education and future
                    career opportunities.
                  </p>

                  <ul className="text-secondary ps-3">
                    <li>Advanced concepts</li>
                    <li>Career awareness</li>
                    <li>Exam preparation</li>
                  </ul>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SUBJECTS ================= */}
      <section className="py-5">

        <div className="container">

          <div className="text-center mb-5">

            <span className="text-primary fw-bold">
              CURRICULUM
            </span>

            <h2 className="fw-bold mt-2">
              Core Subjects
            </h2>

            <p className="text-secondary">
              Building knowledge across diverse areas of learning.
            </p>

          </div>


          <div className="row g-4">

            <div className="col-6 col-md-4 col-lg-3">
              <div className="border rounded-4 p-4 text-center h-100 shadow-sm">
                <div className="fs-1 mb-3">📖</div>
                <h5 className="fw-bold">English</h5>
                <p className="text-secondary mb-0">
                  Language & Communication
                </p>
              </div>
            </div>


            <div className="col-6 col-md-4 col-lg-3">
              <div className="border rounded-4 p-4 text-center h-100 shadow-sm">
                <div className="fs-1 mb-3">🔢</div>
                <h5 className="fw-bold">Mathematics</h5>
                <p className="text-secondary mb-0">
                  Logic & Problem Solving
                </p>
              </div>
            </div>


            <div className="col-6 col-md-4 col-lg-3">
              <div className="border rounded-4 p-4 text-center h-100 shadow-sm">
                <div className="fs-1 mb-3">🔬</div>
                <h5 className="fw-bold">Science</h5>
                <p className="text-secondary mb-0">
                  Explore & Discover
                </p>
              </div>
            </div>


            <div className="col-6 col-md-4 col-lg-3">
              <div className="border rounded-4 p-4 text-center h-100 shadow-sm">
                <div className="fs-1 mb-3">🌍</div>
                <h5 className="fw-bold">Social Studies</h5>
                <p className="text-secondary mb-0">
                  Society & Culture
                </p>
              </div>
            </div>


            <div className="col-6 col-md-4 col-lg-3">
              <div className="border rounded-4 p-4 text-center h-100 shadow-sm">
                <div className="fs-1 mb-3">💻</div>
                <h5 className="fw-bold">Computer</h5>
                <p className="text-secondary mb-0">
                  Digital Skills
                </p>
              </div>
            </div>


            <div className="col-6 col-md-4 col-lg-3">
              <div className="border rounded-4 p-4 text-center h-100 shadow-sm">
                <div className="fs-1 mb-3">🎨</div>
                <h5 className="fw-bold">Art</h5>
                <p className="text-secondary mb-0">
                  Creativity & Expression
                </p>
              </div>
            </div>


            <div className="col-6 col-md-4 col-lg-3">
              <div className="border rounded-4 p-4 text-center h-100 shadow-sm">
                <div className="fs-1 mb-3">⚽</div>
                <h5 className="fw-bold">Physical Education</h5>
                <p className="text-secondary mb-0">
                  Fitness & Teamwork
                </p>
              </div>
            </div>


            <div className="col-6 col-md-4 col-lg-3">
              <div className="border rounded-4 p-4 text-center h-100 shadow-sm">
                <div className="fs-1 mb-3">🎵</div>
                <h5 className="fw-bold">Music</h5>
                <p className="text-secondary mb-0">
                  Creativity & Confidence
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* ================= TEACHING APPROACH ================= */}
      <section className="py-5 bg-light">

        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <img
                src="/staff.jpeg"
                alt="Teacher"
                className="img-fluid rounded-4 shadow"
              />

            </div>


            <div className="col-lg-6">

              <span className="text-primary fw-bold">
                TEACHING & LEARNING
              </span>

              <h2 className="display-6 fw-bold mt-2">
                A Modern Approach to Learning
              </h2>

              <p className="text-secondary mt-4">
                Our teachers use engaging methods to make learning
                meaningful, practical and enjoyable for students.
              </p>


              <div className="row g-3 mt-3">

                <div className="col-sm-6">
                  <div className="bg-white rounded-3 p-3 shadow-sm">
                    <h6 className="fw-bold">
                      💡 Interactive Learning
                    </h6>
                    <small className="text-secondary">
                      Students actively participate in lessons.
                    </small>
                  </div>
                </div>


                <div className="col-sm-6">
                  <div className="bg-white rounded-3 p-3 shadow-sm">
                    <h6 className="fw-bold">
                      💻 Digital Learning
                    </h6>
                    <small className="text-secondary">
                      Technology supports modern education.
                    </small>
                  </div>
                </div>


                <div className="col-sm-6">
                  <div className="bg-white rounded-3 p-3 shadow-sm">
                    <h6 className="fw-bold">
                      👥 Group Activities
                    </h6>
                    <small className="text-secondary">
                      Developing teamwork and communication.
                    </small>
                  </div>
                </div>


                <div className="col-sm-6">
                  <div className="bg-white rounded-3 p-3 shadow-sm">
                    <h6 className="fw-bold">
                      🧠 Critical Thinking
                    </h6>
                    <small className="text-secondary">
                      Encouraging students to think independently.
                    </small>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ACADEMIC STATS ================= */}
      <section className="py-5 bg-primary text-white">

        <div className="container">

          <div className="text-center mb-5">

            <h2 className="fw-bold">
              Our Academic Focus
            </h2>

            <p className="mb-0">
              Supporting students throughout their learning journey.
            </p>

          </div>


          <div className="row text-center g-4">

            <div className="col-6 col-lg-3">
              <h2 className="display-5 fw-bold">100%</h2>
              <p className="mb-0">Student Support</p>
            </div>

            <div className="col-6 col-lg-3">
              <h2 className="display-5 fw-bold">50+</h2>
              <p className="mb-0">Qualified Teachers</p>
            </div>

            <div className="col-6 col-lg-3">
              <h2 className="display-5 fw-bold">8+</h2>
              <p className="mb-0">Core Subjects</p>
            </div>

            <div className="col-6 col-lg-3">
              <h2 className="display-5 fw-bold">25+</h2>
              <p className="mb-0">Learning Activities</p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="py-5">

        <div className="container">

          <div
            className="rounded-4 p-4 p-md-5 text-center text-white"
            style={{
              background:
                "linear-gradient(135deg, #0d6efd, #212529)",
            }}
          >

            <h2 className="display-6 fw-bold">
              Let's Build a Brighter Future Together
            </h2>

            <p className="lead mx-auto mt-3" style={{ maxWidth: "700px" }}>
              At Wonderstar Star Internatonal School, every lesson is an opportunity
              to learn, grow and move one step closer to a brighter future.
            </p>

            <a
              href="/contact"
              className="btn btn-light btn-lg px-5 mt-3"
            >
              Contact Us
            </a>

          </div>

        </div>

      </section>
    </>
  );
};

export default Academics;
