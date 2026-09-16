import { School } from "../data/schoolData";

const About = () => {


  return (
    <>
      {/* ================= HERO ================= */}
     
        <div className="container text-center">
          <span className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-semibold" style={{height:'40px',width:'220px', fontSize:'18px'}}>
           <b> ABOUT OUR SCHOOL</b>
          </span>

          <h1 className="display-6 fw-bold mt-3 mb-2">
            Shaping Minds, Building Futures
          </h1>

          <p
            className="lead mx-auto opacity-75"
            style={{ maxWidth: "680px" }}
          >
            Empowering students with knowledge, confidence, character
            and creativity for a brighter future.
          </p>
        </div>
    
      {/* ================= ABOUT ================= */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* IMAGE */}
            <div className="col-lg-5">
              <div className="position-relative">
                <img
                  src="/award3.jpeg"
                  alt="Students"
                  className="img-fluid rounded-4 shadow-lg w-100"
                  style={{
                    height: "330px",
                    objectFit: "cover",
                  }}
                />

                <div
                  className="position-absolute bottom-0 start-0 bg-white shadow rounded-4 p-3"
                  style={{ margin: "0 0 -20px 20px" }}
                >
                  <h3 className="fw-bold text-danger mb-0">20+</h3>
                  <small className="text-secondary">
                    Years of Excellence
                  </small>
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="col-lg-7">
              <span className="text-danger fw-bold small">
                WHO WE ARE
              </span>

              <h2 className="display-6 fw-bold mt-2">
                Education With Purpose
              </h2>

              <p className="text-secondary mt-3">
                <strong>{School.schoolName}</strong> is committed to
                creating a supportive environment where every student
                can learn, grow and discover their potential.
              </p>

              <p className="text-secondary">
                We believe education goes beyond textbooks. Our focus is
                on academic excellence, confidence, discipline,
                creativity and character development.
              </p>

              <div className="row g-3 mt-3">
                {[
                  "Quality Education",
                  "Student Focused",
                  "Safe Environment",
                  "Holistic Growth",
                ].map((item) => (
                  <div className="col-sm-6" key={item}>
                    <div className="d-flex align-items-center">
                      <span className="text-danger fs-5 me-2">✓</span>
                      <span className="fw-semibold small">
                        {item}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

{/* ================= OUR PURPOSE ================= */}
<section
  className="py-5"
  style={{ background: "#f8f9fa" }}
>
  <div className="container">

    {/* Heading */}
    <div className="text-center mb-5">
      <span className="text-danger fw-bold small">
        OUR PURPOSE
      </span>

      <h2 className="fw-bold mt-2">
        What Drives Us Forward
      </h2>

      <p
        className="text-secondary mx-auto mb-0"
        style={{ maxWidth: "650px" }}
      >
        Our commitment is to create an environment where every
        student can learn, grow and achieve their potential.
      </p>
    </div>

    {/* Cards */}
    <div className="row g-4">

      {[
        {
          icon: "👁️",
          title: "Our Vision",
          text: "To develop confident, responsible and knowledgeable individuals ready to contribute positively to society.",
        },
        {
          icon: "🎯",
          title: "Our Mission",
          text: "To provide engaging education that develops skills, creativity, leadership and strong moral values.",
        },
        {
          icon: "⭐",
          title: "Our Values",
          text: "We promote respect, integrity, discipline, kindness and excellence in every student.",
        },
        {
          icon: "🚀",
          title: "Our Goals",
          text: "To prepare students with the knowledge, confidence and skills needed for a successful future.",
        },
      ].map((item) => (

        <div className="col-12 col-sm-6 col-lg-3" key={item.title}>
          <div
            className="card border-0 h-100 rounded-4 p-4 text-center"
            style={{
              transition: "all .35s ease",
              borderTop: "4px solid #dc3545",
              boxShadow: "0 5px 20px rgba(0,0,0,.07)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow =
                "0 15px 35px rgba(0,0,0,.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 5px 20px rgba(0,0,0,.07)";
            }}
          >

            {/* Icon */}
            <div
              className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
              style={{
                width: "65px",
                height: "65px",
                background: "#fff0f0",
                fontSize: "28px",
                transition: "transform .35s ease",
              }}
            >
              {item.icon}
            </div>

            <h4 className="fw-bold mb-3">
              {item.title}
            </h4>

            <p className="text-secondary small mb-0">
              {item.text}
            </p>

          </div>
        </div>

      ))}

    </div>
  </div>
</section>
    </>
  );
};

export default About;
