import { Link } from "react-router-dom";
import { School } from "../data/schoolData";

const Gallery = () => {

  // ================= STAFF DATA =================
  const staffMembers = [
    {
      image: "/manager.jpeg",
      name: "Sikha Kanti",
      role: "School Manager",
      category: "Management",
    },
    {
      image: "/director.jpeg",
      name: "Shri J.P. Umrao",
      role: "Director",
      category: "Leadership",
    },

    {
      image: "/principal.jpeg",
      name: "B.B. Katiyar",
      role: "Principal",
      category: "Leadership",
    },

    {
      image: "/vicepri.jpeg",
      name: "Vice Principal",
      role: "Vice Principal",
      category: "Leadership",
    },

    {
      image: "/staff.jpeg",
      name: "Teaching Staff",
      category: "Staff",
    },

    {
      image: "/cordinator.jpeg",
      name: "Dipti Mishra",
      role: "School Cordinator",
      category: "Cordinator",
    },
  ];


  // ================= STUDENT IMAGES =================
  const studentImages = [
    {
      image: "/award1.jpeg",
      category: "Academics",
    },
    {
      image: "/award2.jpeg",
      category: "Activities",
    },
    {
      image: "/award3.jpeg",
      category: "Activities",
    },
    {
      image: "/award4.jpeg",
      category: "Academics",
    },
    {
      image: "/award5.jpeg",
    },
    {
      image: "/award6.jpeg",
      title: "Happy Students",
      category: "Campus Life",
    },
    {
      image: "/award7.jpeg",
      title: "Creative Learning",
      category: "Activities",
    },
    {
      image: "/award8.jpeg",
    },
  ];


  return (
    <div>

      {/* ==================================================
          HERO
      ================================================== */}

      <section
        className="position-relative d-flex align-items-center"
        style={{
          minHeight: "75vh",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(90deg, rgba(5,20,40,0.9), rgba(5,20,40,0.45), rgba(5,20,40,0.15))",
          }}
        ></div>


        <div className="container position-relative text-white">

          <div className="col-lg-8">

            <span className="badge rounded-pill bg-info text-dark px-3 py-2 mb-3">
              OUR GALLERY
            </span>

            <h1 className="display-3 fw-bold mb-3">
              Moments That
              <span className="text-info"> Inspire</span>
            </h1>

            <p className="lead mb-4 text-light">
              Explore the vibrant life of {School.schoolName} through
              memorable moments, celebrations, learning experiences and
              student achievements.
            </p>

            <a
              href="#leadership"
              className="btn btn-info btn-lg rounded-pill px-4 fw-semibold"
            >
              Meet Our Team
              <i className="bi bi-arrow-down ms-2"></i>
            </a>

          </div>

        </div>

      </section>


      {/* ==================================================
          INTRO
      ================================================== */}

      <section className="py-5 bg-light">

        <div className="container py-4">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <span className="text-info fw-bold">
                LIFE AT Wonderstar
              </span>

              <h2 className="display-6 fw-bold text-dark mt-2">
                The People Behind Our School
              </h2>

              <p className="text-secondary mt-3">
                A great school is built by great people. Our dedicated
                management, leadership, teachers and staff work together
                to create a positive and inspiring environment for every
                student.
              </p>

              <p className="text-secondary">
                Meet the people who contribute every day towards academic
                excellence, discipline, creativity and the overall growth
                of our students.
              </p>

              <div className="row mt-4">

                <div className="col-6">
                  <h3 className="fw-bold text-info">
                    25+
                  </h3>

                  <p className="text-secondary mb-0">
                    Dedicated Staff
                  </p>
                </div>

                <div className="col-6">
                  <h3 className="fw-bold text-info">
                    1000+
                  </h3>

                  <p className="text-secondary mb-0">
                    Students
                  </p>
                </div>

              </div>

            </div>


            <div className="col-lg-6">

              <div className="row g-3">

                <div className="col-7">

                  <img
                    src="https://images.unsplash.com/photo-1564981797816-1043664bf78d"
                    className="img-fluid rounded-4 shadow"
                    style={{
                      height: "330px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    alt="School"
                  />

                </div>


                <div className="col-5 d-flex align-items-end">

                  <img
                    src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
                    className="img-fluid rounded-4 shadow"
                    style={{
                      height: "230px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    alt="Students"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          SCHOOL LEADERSHIP & STAFF
      ================================================== */}

      <section
        id="leadership"
        className="py-5"
      >

        <div className="container py-4">

          {/* Heading */}

          <div className="text-center mb-5">

            <span className="text-info fw-bold">
              OUR TEAM
            </span>

            <h2 className="display-6 fw-bold mt-2">
              School Leadership & Staff
            </h2>

            <p
              className="text-secondary mx-auto"
              style={{ maxWidth: "700px" }}
            >
              Meet the dedicated professionals who guide, inspire and
              support our students throughout their educational journey.
            </p>

          </div>


          {/* ==================================================
              MANAGER + COORDINATOR
          ================================================== */}

          <div className="row justify-content-center g-4 mb-5">

            {/* MANAGER */}

            <div className="col-12 col-md-6 col-lg-5">

              <div className="card border-0 shadow-lg rounded-4 overflow-hidden h-75">

                <div className="row g-0 align-items-center">

                  <div className="col-5">

                    <img
                      src={staffMembers[0].image}
                      className="img-fluid w-100 h-100"
                      style={{
                        minHeight: "230px",
                        objectFit: "cover",
                      }}
                      alt={staffMembers[0].name}
                    />

                  </div>


                  <div className="col-7">

                    <div className="p-4">

                      <span className="badge bg-info text-dark rounded-pill mb-2">
                        {staffMembers[0].category}
                      </span>

                      <h4 className="fw-bold mb-1">
                        {staffMembers[0].name}
                      </h4>

                      <p className="text-info fw-semibold mb-2">
                        {staffMembers[0].role}
                      </p>

                      <p className="text-secondary small mb-0">
                        Providing vision, guidance and strong leadership
                        for the continuous growth of our school.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* COORDINATOR */}

            <div className="col-12 col-md-6 col-lg-5">

              <div className="card border-0 shadow-lg rounded-4 overflow-hidden h-75">

                <div className="row g-0 align-items-center">

                  <div className="col-5 ">

                    <img
                      src={staffMembers[5].image}
                      className="img-fluid w-100 h-100 "
                      style={{
                        minHeight: "200px",
                        objectFit: "cover",
                      }}
                      alt={staffMembers[5].name}
                    />

                  </div>


                  <div className="col-7">

                    <div className="p-4">

                      <span className="badge bg-info text-dark rounded-pill mb-2">
                        {staffMembers[5].category}
                      </span>

                      <h4 className="fw-bold mb-1">
                        {staffMembers[5].name}
                      </h4>

                      <p className="text-info fw-semibold mb-2">
                        {staffMembers[5].role}
                      </p>

                      <p className="text-secondary small mb-0">
                        Coordinating academic activities and helping
                        maintain smooth communication across the school.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* ==================================================
              DIRECTOR / PRINCIPAL / VICE PRINCIPAL
          ================================================== */}

          <div className="row g-4 justify-content-center mb-5">

            {staffMembers.slice(1, 4).map((member, index) => (

              <div
                className="col-12 col-sm-6 col-lg-4"
                key={index}
              >

                <div
                  className="card border-0 shadow-sm rounded-4 overflow-hidden h-100"
                  style={{
                    transition: "0.3s",
                  }}
                >

                  <img
                    src={member.image}
                    className="card-img-top"
                    style={{
                      height: "460px",
                      objectFit: "cover",
                    }}
                    alt={member.name}
                  />


                  <div className="card-body text-center p-4">

                    <span className="badge bg-light text-info border rounded-pill mb-2">
                      {member.category}
                    </span>

                    <h4 className="fw-bold mb-1">
                      {member.name}
                    </h4>

                    <p className="text-info fw-semibold mb-2">
                      {member.role}
                    </p>

                    <p className="text-secondary small mb-0">
                      Dedicated to creating an inspiring and
                      student-focused learning environment.
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>


          {/* ==================================================
              OTHER STAFF
          ================================================== */}

          <div className="text-center mb-4">

            <span className="text-info fw-bold">
              OUR DEDICATED TEAM
            </span>

            <h3 className="fw-bold mt-2">
              Teaching & Administrative Staff
            </h3>

          </div>


          {/* OTHER STAFF CARDS */}

          <div className="row g-4 justify-content-center">

            {staffMembers.slice(4, 5).map((member, index) => (

              <div
                className="col-12 col-sm-8 col-md-6 col-lg-5"
                key={index}
              >

                {/* <div className="bg-white rounded-4 shadow overflow-hidden h-100"> */}

                  {/* BIG CENTER IMAGE */}

                  <div
                    className="d-flex justify-content-center align-items-center p-4"
                    style={{
                      background:
                        "linear-gradient(135deg, #f8fafc, #eef7f9)",
                    }}
                  >

                    <img
                      src={member.image}
                      className="rounded-4 shadow-sm"
                      style={{
                        height: "420px",
                        width: "720px",
                        objectFit: "cover",
                      }}
                      alt={member.name}
                    />

                  </div>


                  {/* STAFF DETAILS */}

                  <div className="p-4 text-center">

                    <h3 className="fw-bold mb-1">
                      {member.name}
                    </h3>

                    <p className="text-info fw-semibold mb-2">
                      {member.role}
                    </p>

                    <span className="badge bg-light text-secondary">
                      {member.category}
                    </span>

                  </div>

                </div>

            //   </div>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          STUDENTS SECTION
      ================================================== */}

      <section
        className="py-5 bg-light"
        id="students"
      >

        <div className="container py-4">

          <div className="text-center mb-5">

            <span className="text-info fw-bold">
              OUR STUDENTS
            </span>

            <h2 className="display-6 fw-bold mt-2">
              Young Minds, Bright Futures
            </h2>

            <p
              className="text-secondary mx-auto"
              style={{ maxWidth: "700px" }}
            >
              Every student brings their own dreams, talents and
              creativity. Here are some memorable moments from
              student life at Wonderstar Star International School.
            </p>

          </div>


          {/* Student Gallery */}

          <div className="row g-4">

            {studentImages.map((item, index) => (

              <div
                className={`col-12 col-sm-6 ${
                  index === 0 || index === 5
                    ? "col-lg-6"
                    : "col-lg-3"
                }`}
                key={index}
              >

                <div
                  className="position-relative overflow-hidden rounded-4 shadow-sm"
                  style={{
                    height:
                      index === 0 || index === 5
                        ? "360px"
                        : "280px",
                    cursor: "pointer",
                  }}
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-100 h-100"
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                  />


                  {/* Image Overlay */}

                  <div
                    className="position-absolute bottom-0 start-0 w-100 p-4 text-white"
                    style={{
                      background:
                        "linear-gradient(transparent, rgba(0,0,0,0.85))",
                    }}
                  >

                    <small className="text-info fw-semibold">
                      {item.category}
                    </small>

                    {item.title && (
                      <h4 className="fw-bold mb-0 mt-1">
                        {item.title}
                      </h4>
                    )}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          STUDENT LIFE HIGHLIGHTS
      ================================================== */}

      <section className="py-5">

        <div className="container py-4">

          <div className="text-center mb-5">

            <span className="text-info fw-bold">
              STUDENT LIFE
            </span>

            <h2 className="display-6 fw-bold mt-2">
              More Than Just Classrooms
            </h2>

          </div>


          <div className="row g-4">

            <div className="col-12 col-sm-6 col-lg-3">

              <div className="text-center p-4">

                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-circle bg-info bg-opacity-10 text-info mb-3"
                  style={{
                    width: "70px",
                    height: "70px",
                    fontSize: "30px",
                  }}
                >
                  <i className="bi bi-book"></i>
                </div>

                <h5 className="fw-bold">
                  Academic Excellence
                </h5>

                <p className="text-secondary">
                  Encouraging curiosity, knowledge and independent
                  thinking.
                </p>

              </div>

            </div>


            <div className="col-12 col-sm-6 col-lg-3">

              <div className="text-center p-4">

                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-circle bg-info bg-opacity-10 text-info mb-3"
                  style={{
                    width: "70px",
                    height: "70px",
                    fontSize: "30px",
                  }}
                >
                  <i className="bi bi-trophy"></i>
                </div>

                <h5 className="fw-bold">
                  Sports & Fitness
                </h5>

                <p className="text-secondary">
                  Building teamwork, confidence and a healthy lifestyle.
                </p>

              </div>

            </div>


            <div className="col-12 col-sm-6 col-lg-3">

              <div className="text-center p-4">

                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-circle bg-info bg-opacity-10 text-info mb-3"
                  style={{
                    width: "70px",
                    height: "70px",
                    fontSize: "30px",
                  }}
                >
                  <i className="bi bi-palette"></i>
                </div>

                <h5 className="fw-bold">
                  Creativity
                </h5>

                <p className="text-secondary">
                  Giving students opportunities to explore their talents.
                </p>

              </div>

            </div>


            <div className="col-12 col-sm-6 col-lg-3">

              <div className="text-center p-4">

                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-circle bg-info bg-opacity-10 text-info mb-3"
                  style={{
                    width: "70px",
                    height: "70px",
                    fontSize: "30px",
                  }}
                >
                  <i className="bi bi-people"></i>
                </div>

                <h5 className="fw-bold">
                  Teamwork
                </h5>

                <p className="text-secondary">
                  Helping students develop communication and leadership.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          CTA
      ================================================== */}

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

              <h2 className="fw-bold display-6">
                Be Part of Our Story
              </h2>

              <p className="mb-0 text-light">
                Discover a school where every student gets the
                opportunity to learn, grow and shine.
              </p>

            </div>


            <div className="col-lg-4 text-center text-lg-end mt-4 mt-lg-0">

              <Link
                to="/contact"
                className="btn btn-light btn-lg rounded-pill px-4 fw-semibold"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Gallery;
