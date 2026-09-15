
const Facility = () => {
  return (
    <>
      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section
        className="position-relative text-white"
        style={{
          minHeight: "60vh",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1562774053-701939374585)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(90deg, rgba(7,25,45,0.92), rgba(7,25,45,0.45))",
          }}
        ></div>

        <div className="container position-relative h-100">
          <div
            className="row align-items-center"
            style={{ minHeight: "60vh" }}
          >
            <div className="col-lg-7">

              <span className="badge bg-info text-dark px-3 py-2 mb-3">
                CAMPUS & FACILITIES
              </span>

              <h1 className="display-3 fw-bold">
                Designed for
                <span className="text-info"> Learning & Growth</span>
              </h1>

              <p className="lead mt-4 text-light">
                Explore a modern, safe and student-friendly campus
                designed to support academic excellence, creativity,
                sports and overall development.
              </p>

              <a
                href="#facilities"
                className="btn btn-info btn-lg px-4 mt-3"
              >
                Explore Facilities
              </a>

            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="py-5">

        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-5">

              <span className="fw-bold text-info">
                OUR CAMPUS
              </span>

              <h2 className="display-6 fw-bold mt-2">
                A Campus Built Around Students
              </h2>

              <p className="text-secondary mt-4">
                Our facilities are designed to provide students with
                comfortable spaces where they can learn, collaborate,
                explore their interests and develop new skills.
              </p>

              <p className="text-secondary">
                From modern classrooms and laboratories to sports
                facilities and activity spaces, every part of our
                campus contributes to a complete educational experience.
              </p>

            </div>


            <div className="col-lg-7">

              <div className="row g-3">

                <div className="col-6">

                  <img
                    src="https://images.unsplash.com/photo-1564981797816-1043664bf78d"
                    alt="School Facility"
                    className="img-fluid rounded-4 shadow-sm w-100"
                    style={{
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />

                </div>

                <div className="col-6">

                  <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754"
                    alt="Classroom"
                    className="img-fluid rounded-4 shadow-sm w-100"
                    style={{
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />

                </div>

                <div className="col-12">

                  <img
                    src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
                    alt="Students Campus"
                    className="img-fluid rounded-4 shadow-sm w-100"
                    style={{
                      height: "240px",
                      objectFit: "cover",
                    }}
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FACILITIES
      ===================================================== */}

      <section
        id="facilities"
        className="py-5"
        style={{ backgroundColor: "#f4f8fb" }}
      >

        <div className="container">

          <div className="text-center mb-5">

            <span className="fw-bold text-info">
              WHAT WE OFFER
            </span>

            <h2 className="display-6 fw-bold mt-2">
              Explore Our Facilities
            </h2>

            <p
              className="text-secondary mx-auto"
              style={{ maxWidth: "650px" }}
            >
              A thoughtfully designed campus providing students with
              the resources they need for learning, creativity and
              personal growth.
            </p>

          </div>


          <div className="row g-4">

            {/* Facility 1 */}
            <div className="col-md-6 col-lg-4">

              <div className="card border-0 rounded-4 overflow-hidden shadow-sm h-100">

                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754"
                  alt="Smart Classroom"
                  className="w-100"
                  style={{
                    height: "230px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body p-4">

                  <span className="fs-2">💻</span>

                  <h4 className="fw-bold mt-3">
                    Smart Classrooms
                  </h4>

                  <p className="text-secondary">
                    Technology-enabled classrooms designed to make
                    lessons interactive, engaging and easier to understand.
                  </p>

                </div>

              </div>

            </div>


            {/* Facility 2 */}
            <div className="col-md-6 col-lg-4">

              <div className="card border-0 rounded-4 overflow-hidden shadow-sm h-100">

                <img
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d"
                  alt="Science Laboratory"
                  className="w-100"
                  style={{
                    height: "230px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body p-4">

                  <span className="fs-2">🔬</span>

                  <h4 className="fw-bold mt-3">
                    Science Laboratories
                  </h4>

                  <p className="text-secondary">
                    Practical learning spaces where students can
                    experiment, observe and understand scientific concepts.
                  </p>

                </div>

              </div>

            </div>


            {/* Facility 3 */}
            <div className="col-md-6 col-lg-4">

              <div className="card border-0 rounded-4 overflow-hidden shadow-sm h-100">

                <img
                  src="https://images.unsplash.com/photo-1507842217343-583bb7270b66"
                  alt="Library"
                  className="w-100"
                  style={{
                    height: "230px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body p-4">

                  <span className="fs-2">📚</span>

                  <h4 className="fw-bold mt-3">
                    Library
                  </h4>

                  <p className="text-secondary">
                    A peaceful reading environment with resources that
                    encourage curiosity and independent learning.
                  </p>

                </div>

              </div>

            </div>


            {/* Facility 4 */}
            <div className="col-md-6 col-lg-4">

              <div className="card border-0 rounded-4 overflow-hidden shadow-sm h-100">

                <img
                  src="https://images.unsplash.com/photo-1546519638-68e109498ffc"
                  alt="Sports Ground"
                  className="w-100"
                  style={{
                    height: "230px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body p-4">

                  <span className="fs-2">🏆</span>

                  <h4 className="fw-bold mt-3">
                    Sports Facilities
                  </h4>

                  <p className="text-secondary">
                    Sports areas that encourage fitness, teamwork,
                    discipline and a healthy competitive spirit.
                  </p>

                </div>

              </div>

            </div>


            {/* Facility 5 */}
            <div className="col-md-6 col-lg-4">

              <div className="card border-0 rounded-4 overflow-hidden shadow-sm h-100">

                <img
                  src="https://images.unsplash.com/photo-1529390079861-591de354faf5"
                  alt="Activity Room"
                  className="w-100"
                  style={{
                    height: "230px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body p-4">

                  <span className="fs-2">🎨</span>

                  <h4 className="fw-bold mt-3">
                    Activity Rooms
                  </h4>

                  <p className="text-secondary">
                    Dedicated spaces for art, music, cultural activities
                    and creative expression.
                  </p>

                </div>

              </div>

            </div>


            {/* Facility 6 */}
            <div className="col-md-6 col-lg-4">

              <div className="card border-0 rounded-4 overflow-hidden shadow-sm h-100">

                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
                  alt="Computer Lab"
                  className="w-100"
                  style={{
                    height: "230px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body p-4">

                  <span className="fs-2">🖥️</span>

                  <h4 className="fw-bold mt-3">
                    Computer Lab
                  </h4>

                  <p className="text-secondary">
                    Digital learning facilities helping students build
                    essential technology skills for the future.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SPECIAL FACILITIES
      ===================================================== */}

      <section className="py-5">

        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
                alt="Modern School Environment"
                className="img-fluid rounded-4 shadow"
              />

            </div>


            <div className="col-lg-6">

              <span className="text-info fw-bold">
                MORE THAN CLASSROOMS
              </span>

              <h2 className="display-6 fw-bold mt-2">
                Everything Students Need to Feel at Home
              </h2>

              <p className="text-secondary mt-4">
                We aim to create a campus that is comfortable,
                accessible and supportive for students, teachers
                and visitors.
              </p>


              <div className="row g-3 mt-3">

                <div className="col-sm-6">

                  <div className="border rounded-3 p-3 h-100">
                    <h6 className="fw-bold">
                      🚌 Transport
                    </h6>
                    <small className="text-secondary">
                      Convenient transportation facilities.
                    </small>
                  </div>

                </div>


                <div className="col-sm-6">

                  <div className="border rounded-3 p-3 h-100">
                    <h6 className="fw-bold">
                      🩺 Health & Safety
                    </h6>
                    <small className="text-secondary">
                      Student safety remains a priority.
                    </small>
                  </div>

                </div>


                <div className="col-sm-6">

                  <div className="border rounded-3 p-3 h-100">
                    <h6 className="fw-bold">
                      🌳 Green Campus
                    </h6>
                    <small className="text-secondary">
                      Clean and pleasant surroundings.
                    </small>
                  </div>

                </div>


                <div className="col-sm-6">

                  <div className="border rounded-3 p-3 h-100">
                    <h6 className="fw-bold">
                      📶 Digital Connectivity
                    </h6>
                    <small className="text-secondary">
                      Technology-supported learning.
                    </small>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FACILITY STATS
      ===================================================== */}

      <section
        className="py-5 text-white"
        style={{ backgroundColor: "#08263d" }}
      >

        <div className="container">

          <div className="row text-center g-4">

            <div className="col-6 col-lg-3">
              <div className="fs-1 fw-bold text-info">20+</div>
              <p className="mb-0">Years of Excellence</p>
            </div>

            <div className="col-6 col-lg-3">
              <div className="fs-1 fw-bold text-info">10+</div>
              <p className="mb-0">Modern Facilities</p>
            </div>

            <div className="col-6 col-lg-3">
              <div className="fs-1 fw-bold text-info">50+</div>
              <p className="mb-0">Dedicated Teachers</p>
            </div>

            <div className="col-6 col-lg-3">
              <div className="fs-1 fw-bold text-info">1000+</div>
              <p className="mb-0">Students</p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="py-5">

        <div className="container">

          <div
            className="rounded-4 p-4 p-md-5 text-center text-white"
            style={{
              background:
                "linear-gradient(135deg, #087f8c, #08263d)",
            }}
          >

            <h2 className="display-6 fw-bold">
              Come and Experience Our Campus
            </h2>

            <p
              className="lead mx-auto mt-3"
              style={{ maxWidth: "700px" }}
            >
              Discover a learning environment where modern facilities,
              dedicated teachers and student-focused education come together.
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

export default Facility;
