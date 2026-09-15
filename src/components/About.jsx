import { School } from "../data/schoolData";
const About = () => {
  return (
    <>
      {/* ================= ABOUT HERO ================= */}
      <section
        className="position-relative text-white d-flex align-items-center"
        style={{
          minHeight: "55vh",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1562774053-701939374585)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ background: "rgba(0, 0, 0, 0.62)" }}
        ></div>

        <div className="container position-relative text-center">
          <span className="badge bg-primary px-3 py-2 mb-3">
            ABOUT OUR SCHOOL
          </span>

          <h1 className="display-3 fw-bold">
            Shaping Minds, Building Futures
          </h1>

          <p
            className="lead mx-auto mt-3"
            style={{ maxWidth: "750px" }}
          >
            Discover our vision, values and commitment towards providing
            quality education and developing confident future leaders.
          </p>
        </div>
      </section>


      {/* ================= INTRODUCTION ================= */}
      <section className="py-5">
        <div className="container">

          <div className="row align-items-center g-5">

            {/* Image */}
            <div className="col-lg-6">
              <div className="position-relative">

                <img
                  src="public/award9.jpeg"
                  alt="Students studying"
                  className="img-fluid rounded-4 shadow"
                />

                <div
                  className="position-absolute bottom-0 start-0 bg-primary text-white p-3 p-md-4 rounded-4 shadow"
                  style={{ margin: "0 0 20px 20px" }}
                >
                  <h3 className="fw-bold mb-0">20+</h3>
                  <small>Years of Excellence</small>
                </div>

              </div>
            </div>


            {/* Content */}
            <div className="col-lg-6">

              <span className="text-primary fw-bold">
                WHO WE ARE
              </span>

              <h2 className="display-6 fw-bold mt-2">
                A Place Where Every Child Can Thrive
              </h2>

              <p className="text-secondary mt-4">
                {School.schoolName} is committed to creating a
                positive and inspiring environment where students can
                learn, explore and develop their unique abilities.
              </p>

              <p className="text-secondary">
                We believe that education is more than academic
                achievement. It is about developing character,
                confidence, creativity, discipline and a strong sense
                of responsibility.
              </p>

              <p className="text-secondary">
                Through dedicated teachers, modern learning approaches
                and a wide range of activities, we encourage every
                student to discover their potential.
              </p>

              <div className="row mt-4 g-3">

                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <span className="fs-3 text-primary me-3">✓</span>
                    <span className="fw-semibold">
                      Student Focused
                    </span>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <span className="fs-3 text-primary me-3">✓</span>
                    <span className="fw-semibold">
                      Quality Education
                    </span>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <span className="fs-3 text-primary me-3">✓</span>
                    <span className="fw-semibold">
                      Safe Environment
                    </span>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <span className="fs-3 text-primary me-3">✓</span>
                    <span className="fw-semibold">
                      Holistic Growth
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= MISSION & VISION ================= */}
      <section className="py-5 bg-light">

        <div className="container">

          <div className="text-center mb-5">

            <span className="text-primary fw-bold">
              OUR PURPOSE
            </span>

            <h2 className="fw-bold mt-2">
              Vision & Mission
            </h2>

            <p className="text-secondary mx-auto" style={{ maxWidth: "650px" }}>
              Our educational philosophy is built around academic
              excellence, character and continuous growth.
            </p>

          </div>


          <div className="row g-4">

            {/* Vision */}
            <div className="col-lg-6">

              <div className="card border-0 shadow-sm h-100 p-4 p-md-5">

                <div
                  className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "65px",
                    height: "65px",
                    fontSize: "28px",
                  }}
                >
                  👁
                </div>

                <h3 className="fw-bold">
                  Our Vision
                </h3>

                <p className="text-secondary mt-3 mb-0">
                  To create responsible, confident and knowledgeable
                  individuals who are prepared to make a meaningful
                  contribution to society and the world.
                </p>

              </div>

            </div>


            {/* Mission */}
            <div className="col-lg-6">

              <div className="card border-0 shadow-sm h-100 p-4 p-md-5">

                <div
                  className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "65px",
                    height: "65px",
                    fontSize: "28px",
                  }}
                >
                  🎯
                </div>

                <h3 className="fw-bold">
                  Our Mission
                </h3>

                <p className="text-secondary mt-3 mb-0">
                  To provide an inclusive and engaging learning
                  environment that develops academic skills, creativity,
                  leadership, discipline and strong moral values.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CORE VALUES ================= */}
      <section className="py-5">

        <div className="container">

          <div className="text-center mb-5">

            <span className="text-primary fw-bold">
              WHAT WE BELIEVE
            </span>

            <h2 className="fw-bold mt-2">
              Our Core Values
            </h2>

          </div>


          <div className="row g-4">

            <div className="col-12 col-md-6 col-lg-3">

              <div className="text-center p-4 h-100">

                <div className="display-5 mb-3">
                  🤝
                </div>

                <h5 className="fw-bold">
                  Respect
                </h5>

                <p className="text-secondary">
                  We encourage respect, kindness and understanding
                  towards everyone.
                </p>

              </div>

            </div>


            <div className="col-12 col-md-6 col-lg-3">

              <div className="text-center p-4 h-100">

                <div className="display-5 mb-3">
                  ⭐
                </div>

                <h5 className="fw-bold">
                  Excellence
                </h5>

                <p className="text-secondary">
                  We inspire students to give their best and continuously
                  improve.
                </p>

              </div>

            </div>


            <div className="col-12 col-md-6 col-lg-3">

              <div className="text-center p-4 h-100">

                <div className="display-5 mb-3">
                  ❤️
                </div>

                <h5 className="fw-bold">
                  Integrity
                </h5>

                <p className="text-secondary">
                  Honesty and strong character are at the heart of our
                  educational values.
                </p>

              </div>

            </div>


            <div className="col-12 col-md-6 col-lg-3">

              <div className="text-center p-4 h-100">

                <div className="display-5 mb-3">
                  💡
                </div>

                <h5 className="fw-bold">
                  Innovation
                </h5>

                <p className="text-secondary">
                  We encourage curiosity, creativity and innovative
                  thinking.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= LEARNING APPROACH ================= */}
      <section className="py-5 bg-light">

        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6 order-2 order-lg-1">

              <span className="text-primary fw-bold">
                OUR APPROACH
              </span>

              <h2 className="display-6 fw-bold mt-2">
                Education That Goes Beyond Books
              </h2>

              <p className="text-secondary mt-4">
                Our approach combines classroom learning with practical
                experiences, creative activities, sports and technology.
              </p>


              {/* Progress Items */}

              <div className="mt-4">

                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-semibold">
                    Academic Development
                  </span>
                  <span className="text-primary">95%</span>
                </div>

                <div className="progress mb-4" style={{ height: "8px" }}>
                  <div
                    className="progress-bar"
                    style={{ width: "95%" }}
                  ></div>
                </div>


                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-semibold">
                    Personality Development
                  </span>
                  <span className="text-primary">90%</span>
                </div>

                <div className="progress mb-4" style={{ height: "8px" }}>
                  <div
                    className="progress-bar"
                    style={{ width: "90%" }}
                  ></div>
                </div>


                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-semibold">
                    Sports & Activities
                  </span>
                  <span className="text-primary">85%</span>
                </div>

                <div className="progress" style={{ height: "8px" }}>
                  <div
                    className="progress-bar"
                    style={{ width: "85%" }}
                  ></div>
                </div>

              </div>

            </div>


            <div className="col-lg-6 order-1 order-lg-2">

              <img
                src="public/award3.jpeg"
                alt="Students"
                className="img-fluid rounded-4 shadow"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ================= LEADERSHIP ================= */}
      <section className="py-5">

        <div className="container">

          <div className="text-center mb-5">

            <span className="text-primary fw-bold">
              LEADERSHIP
            </span>

            <h2 className="fw-bold mt-2">
              Guiding the Next Generation
            </h2>

          </div>


          <div className="row justify-content-center">

            <div className="col-lg-8">

              <div className="card border-0 shadow-sm rounded-4 overflow-hidden">

                <div className="row g-0 align-items-center">

                  <div className="col-md-5">

                    <img
                      src="public/vicePri.jpeg"
                      alt="Vice Principal"
                      className="img-fluid w-100"
                      style={{
                        height: "350px",
                        objectFit: "cover",
                      }}
                    />

                  </div>


                  <div className="col-md-7">

                    <div className="p-4 p-md-5">

                      <span className="text-primary fw-semibold">
                         VICE PRINCIPAL'S MESSAGE
                      </span>

                      <h3 className="fw-bold mt-2">
                        "Every Child Has the Potential to Shine"
                      </h3>

                      <p className="text-secondary mt-3">
                        Our responsibility is to provide every student
                        with the right guidance, opportunities and
                        encouragement to discover their strengths and
                        achieve their dreams.
                      </p>

                      <h6 className="fw-bold mb-0">
                       Vice Principal
                      </h6>

                      <small className="text-secondary">
                        {School.schoolName}
                      </small>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}
      <section className="py-5 bg-primary text-white">

        <div className="container">

          <div className="row text-center g-4">

            <div className="col-6 col-lg-3">
              <h2 className="display-5 fw-bold">20+</h2>
              <p className="mb-0">Years of Excellence</p>
            </div>

            <div className="col-6 col-lg-3">
              <h2 className="display-5 fw-bold">1000+</h2>
              <p className="mb-0">Students</p>
            </div>

            <div className="col-6 col-lg-3">
              <h2 className="display-5 fw-bold">50+</h2>
              <p className="mb-0">Teachers</p>
            </div>

            <div className="col-6 col-lg-3">
              <h2 className="display-5 fw-bold">25+</h2>
              <p className="mb-0">Activities</p>
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
              Be a Part of Our Journey
            </h2>

            <p className="lead mx-auto mt-3" style={{ maxWidth: "700px" }}>
              Discover an environment where students are encouraged to
              learn, grow and achieve their dreams.
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

export default About;
