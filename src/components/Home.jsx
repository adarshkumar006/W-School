import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Footer'
import { Link } from "react-router-dom";
import { School } from "../data/schoolData";

const Home = () => {
  return (
    <>
      {/* =================================================
          HERO / BACKGROUND IMAGE SLIDER
      ================================================= */}

      <section className="position-relative">

        <div
          id="schoolCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="4000"
        >

          {/* Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#schoolCarousel"
              data-bs-slide-to="0"
              className="active"
            ></button>

            <button
              type="button"
              data-bs-target="#schoolCarousel"
              data-bs-slide-to="1"
            ></button>

            <button
              type="button"
              data-bs-target="#schoolCarousel"
              data-bs-slide-to="2"
            ></button>

            <button
              type="button"
              data-bs-target="#schoolCarousel"
              data-bs-slide-to="3"
            ></button>
          </div>

          {/* Slides */}
          <div className="carousel-inner">

            {/* Slide 1 */}
            <div className="carousel-item active">

              <img
                src="public/award4.jpeg"
                className="d-block w-100"
                alt="School Campus"
                style={{
                  height: "90vh",
                  objectFit: "cover"
                }}
              />

              <div
                className="carousel-caption d-flex flex-column justify-content-center align-items-center"
                style={{
                  top: 0,
                  bottom: 0,
                  background: "rgba(0,0,0,0.50)"
                }}
              >
                <div className="container">

                  <span className="badge bg-primary px-3 py-2 mb-3">
                    Welcome to {School.schoolName}
                  </span>

                  <h1 className="display-3 fw-bold">
                    Building Bright Minds
                  </h1>

                  <p className="lead mx-auto" style={{ maxWidth: "750px" }}>
                    Inspiring young minds with knowledge, confidence,
                    creativity and strong values for a better tomorrow.
                  </p>

                  <div className="mt-4">
                    <Link
                      to="/contact"
                      className="btn btn-primary btn-lg px-4 me-2"
                    >
                      Contact Us
                    </Link>

                    <Link
                      to="/facilities"
                      className="btn btn-outline-light btn-lg px-4"
                    >
                      Explore Facilities
                    </Link>
                  </div>

                </div>
              </div>
            </div>


            {/* Slide 2 */}
            <div className="carousel-item">

              <img
                src="public/award7.jpeg"
                className="d-block w-100"
                alt="Students Learning"
                style={{
                  height: "120vh",
                  objectFit: "cover"
                }}
              />

              <div
                className="carousel-caption d-flex flex-column justify-content-center align-items-center"
                style={{
                  top: 0,
                  bottom: 0,
                  background: "rgba(0,0,0,0.50)"
                }}
              >
                <div className="container">

                  <h1 className="display-3 fw-bold">
                    Learn. Grow. Succeed.
                  </h1>

                  <p className="lead mx-auto" style={{ maxWidth: "750px" }}>
                    A supportive learning environment where every student
                    gets the opportunity to discover their potential.
                  </p>

                  <Link
                    to="/gallery"
                    className="btn btn-light btn-lg px-4 mt-3"
                  >
                    View Gallery
                  </Link>

                </div>
              </div>
            </div>


            {/* Slide 3 */}
            <div className="carousel-item">

              <img
                src="public/award9.jpeg"
                className="d-block w-100"
                alt="Classroom"
                style={{
                  height: "100vh",
                  objectFit: "cover"
                }}
              />

              <div
                className="carousel-caption d-flex flex-column justify-content-center align-items-center"
                style={{
                  top: 0,
                  bottom: 0,
                  background: "rgba(0,0,0,0.50)"
                }}
              >
                <div className="container">

                  <span className="badge bg-warning text-dark px-3 py-2 mb-3">
                    Excellence in Education
                  </span>

                  <h1 className="display-3 fw-bold">
                    Education Beyond Classrooms
                  </h1>

                  <p className="lead mx-auto" style={{ maxWidth: "750px" }}>
                    Developing academic skills, creativity, leadership and
                    character through meaningful learning experiences.
                  </p>

                </div>
              </div>
            </div>


            {/* Slide 4 */}
            <div className="carousel-item">

              <img
                src="public/award10.jpeg"
                className="d-block w-100"
                alt="Students"
                style={{
                  height: "130vh",
                  objectFit: "cover"
                }}
              />

              <div
                className="carousel-caption d-flex flex-column justify-content-center align-items-center"
                style={{
                  top: 0,
                  bottom: 0,
                  background: "rgba(0,0,0,0.50)"
                }}
              >
                <div className="container">

                  <h1 className="display-3 fw-bold">
                    Together We Build the Future
                  </h1>

                  <p className="lead mx-auto" style={{ maxWidth: "750px" }}>
                    Empowering students to become confident, responsible
                    and successful citizens.
                  </p>

                  <Link
                    to="/contact"
                    className="btn btn-primary btn-lg px-4 mt-3"
                  >
                    Join Our Community
                  </Link>

                </div>
              </div>
            </div>

          </div>


          {/* Previous Button */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#schoolCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>


          {/* Next Button */}
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#schoolCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>

        </div>
      </section>


      {/* =================================================
          QUICK HIGHLIGHTS
      ================================================= */}

      <section className="py-4 bg-white shadow-sm">
        <div className="container">

          <div className="row g-4 text-center">

            <div className="col-6 col-lg-3">
              <div className="p-3">
                <div className="fs-1 text-primary">🎓</div>
                <h5 className="fw-bold">Quality Education</h5>
                <p className="text-secondary mb-0">
                  Focused learning
                </p>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="p-3">
                <div className="fs-1 text-success">🏫</div>
                <h5 className="fw-bold">Modern Campus</h5>
                <p className="text-secondary mb-0">
                  Safe & comfortable
                </p>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="p-3">
                <div className="fs-1 text-warning">⚽</div>
                <h5 className="fw-bold">Sports & Activities</h5>
                <p className="text-secondary mb-0">
                  Overall development
                </p>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="p-3">
                <div className="fs-1 text-danger">💡</div>
                <h5 className="fw-bold">Smart Learning</h5>
                <p className="text-secondary mb-0">
                  Modern technology
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =================================================
          WHY CHOOSE US
      ================================================= */}

      <section className="py-5 bg-light">

        <div className="container">

          <div className="text-center mb-5">

            <span className="text-primary fw-bold">
              WHY CHOOSE US
            </span>

            <h2 className="fw-bold mt-2">
              Creating Future-Ready Students
            </h2>

            <p className="text-secondary mx-auto" style={{ maxWidth: "650px" }}>
              We focus on academics as well as the overall development
              of every student.
            </p>

          </div>


          <div className="row g-4">

            <div className="col-md-6 col-lg-4">

              <div className="card border-0 shadow-sm h-100 p-4">

                <div className="fs-1 mb-3">📚</div>

                <h4 className="fw-bold">
                  Strong Academics
                </h4>

                <p className="text-secondary">
                  Our learning approach encourages students to understand
                  concepts, think creatively and solve problems effectively.
                </p>

              </div>

            </div>


            <div className="col-md-6 col-lg-4">

              <div className="card border-0 shadow-sm h-100 p-4">

                <div className="fs-1 mb-3">👨‍🏫</div>

                <h4 className="fw-bold">
                  Experienced Teachers
                </h4>

                <p className="text-secondary">
                  Dedicated teachers guide students and help them develop
                  confidence, discipline and a love for learning.
                </p>

              </div>

            </div>


            <div className="col-md-6 col-lg-4">

              <div className="card border-0 shadow-sm h-100 p-4">

                <div className="fs-1 mb-3">🌱</div>

                <h4 className="fw-bold">
                  Holistic Development
                </h4>

                <p className="text-secondary">
                  We encourage students to participate in sports, cultural
                  activities and other extracurricular programs.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          PRINCIPAL MESSAGE
      ================================================= */}

      <section className="py-5">

        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-5 text-center">

              <img
                src="public/principal.jpeg"
                alt="School Leadership"
                className="img-fluid rounded-4 shadow"
                style={{
                  maxHeight: "450px",
                  width: "90%",
                  objectFit: "cover"
                }}
              />

            </div>


            <div className="col-lg-7">

              <span className="text-primary fw-bold">
                PRINCIPAL'S MESSAGE
              </span>

              <h2 className="fw-bold mt-2">
                Education Is the Foundation of a Successful Life
              </h2>

              <p className="text-secondary mt-3">
                At {School.schoolName}, we believe education is not
                limited to textbooks and classrooms. Our goal is to help
                every child become confident, responsible and compassionate.
              </p>

              <p className="text-secondary">
                We are committed to creating an environment where students
                can explore their interests, develop their talents and
                prepare themselves for the challenges of tomorrow.
              </p>

              <h5 className="fw-bold mb-0">
                Principal
              </h5>

              <small className="text-secondary">
               {School.schoolName}
              </small>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          SCHOOL STATS
      ================================================= */}

      <section className="py-5 bg-primary text-white">

        <div className="container">

          <div className="row text-center g-4">

            <div className="col-6 col-lg-3">

              <h2 className="display-5 fw-bold">
                20+
              </h2>

              <p className="mb-0">
                Years of Excellence
              </p>

            </div>


            <div className="col-6 col-lg-3">

              <h2 className="display-5 fw-bold">
                1000+
              </h2>

              <p className="mb-0">
                Students
              </p>

            </div>


            <div className="col-6 col-lg-3">

              <h2 className="display-5 fw-bold">
                50+
              </h2>

              <p className="mb-0">
                Teachers
              </p>

            </div>


            <div className="col-6 col-lg-3">

              <h2 className="display-5 fw-bold">
                25+
              </h2>

              <p className="mb-0">
                Activities
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          ACADEMIC EXCELLENCE
      ================================================= */}

      <section className="py-5 bg-light">

        <div className="container">

          <div className="text-center mb-5">

            <span className="text-primary fw-bold">
              OUR FOCUS
            </span>

            <h2 className="fw-bold mt-2">
              Learning Beyond the Classroom
            </h2>

          </div>


          <div className="row g-4">

            <div className="col-md-4">

              <div className="card border-0 shadow-sm h-100 overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
                  className="card-img-top"
                  alt="Academic Learning"
                  style={{ height: "220px", objectFit: "cover" }}
                />

                <div className="card-body p-4">

                  <h4 className="fw-bold">
                    Academic Excellence
                  </h4>

                  <p className="text-secondary">
                    Building strong foundations through effective teaching
                    and continuous learning.
                  </p>

                </div>

              </div>

            </div>


            <div className="col-md-4">

              <div className="card border-0 shadow-sm h-100 overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1546519638-68e109498ffc"
                  className="card-img-top"
                  alt="Sports"
                  style={{ height: "220px", objectFit: "cover" }}
                />

                <div className="card-body p-4">

                  <h4 className="fw-bold">
                    Sports & Fitness
                  </h4>

                  <p className="text-secondary">
                    Encouraging teamwork, discipline and healthy lifestyles
                    through sports.
                  </p>

                </div>

              </div>

            </div>


            <div className="col-md-4">

              <div className="card border-0 shadow-sm h-100 overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
                  className="card-img-top"
                  alt="Student Activities"
                  style={{ height: "220px", objectFit: "cover" }}
                />

                <div className="card-body p-4">

                  <h4 className="fw-bold">
                    Student Activities
                  </h4>

                  <p className="text-secondary">
                    Developing creativity and confidence through cultural
                    and extracurricular activities.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          FINAL CTA
      ================================================= */}

      <section className="py-5">

        <div className="container">

          <div
            className="rounded-4 text-white text-center p-5"
            style={{
              background:
                "linear-gradient(135deg, #0d6efd, #212529)"
            }}
          >

            <h2 className="display-6 fw-bold">
              Give Your Child a Bright Future
            </h2>

            <p
              className="lead mt-3 mx-auto"
              style={{ maxWidth: "700px" }}
            >
              Join {School.schoolName} and become part of a community
              dedicated to learning, growth and excellence.
            </p>

            <Link
              to="/contact"
              className="btn btn-light btn-lg px-5 mt-3"
            >
              Get In Touch
            </Link>

          </div>

        </div>

      </section>
            <Footer/>
    </>
  );
};

export default Home;
