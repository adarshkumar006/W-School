import { School } from "../data/schoolData";

const Academics = () => {
  const levels = [
    {
      icon: "🌱",
      title: "Primary",
      text: "Strong foundations through activity-based and creative learning.",
    },
    {
      icon: "📚",
      title: "Middle School",
      text: "Developing critical thinking, concepts and problem-solving skills.",
    },
    {
      icon: "🎓",
      title: "Secondary",
      text: "Preparing students for higher education and future opportunities.",
    },
  ];

  const subjects = [
    ["📖", "English"],
    ["🔢", "Mathematics"],
    ["🔬", "Science"],
    ["🌍", "Social Studies"],
    ["💻", "Computer"],
    ["🎨", "Art & Craft"],
    ["⚽", "Physical Education"],
    ["🎵", "Music"],
  ];

  return (
    <>
      {/* ================= COMPACT HEADER ================= */}
     
        <div className="container text-center ">
          <span className="badge bg-warning text-dark px-4 py-2 rounded-pill" style={{height:'40px',width:'190px', fontSize:'18px'}}>
           <b> ACADEMICS</b>
          </span>

          <h1 className="fw-bold display-6 mt-3">
            Excellence Through Education
          </h1>

          <p className="mb-0 mx-auto opacity-75"
            style={{ maxWidth: "650px" }}
          >
            Building knowledge, confidence and skills for a successful future.
          </p>
        </div>
     

      {/* ================= APPROACH ================= */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-4">

            <div className="col-lg-6">
              <span className="text-danger fw-bold small">
                OUR APPROACH
              </span>

              <h2 className="fw-bold mt-2">
                Learning That Inspires Curiosity
              </h2>

              <p className="text-secondary mt-3">
                At <strong>{School.schoolName}</strong>, learning goes
                beyond memorizing information. Students are encouraged
                to understand concepts, ask questions and think
                independently.
              </p>

              <div className="row g-3 mt-3">
                {[
                  "Concept-Based Learning",
                  "Experienced Teachers",
                  "Digital Education",
                  "Practical Activities",
                ].map((item) => (
                  <div className="col-sm-6" key={item}>
                    <div className="d-flex align-items-center">
                      <span className="text-danger fw-bold fs-5 me-2">
                        ✓
                      </span>
                      <small className="fw-semibold">{item}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <img
                src="/award1.jpeg"
                alt="Academic Learning"
                className="img-fluid rounded-4 shadow w-100"
                style={{
                  height: "300px",
                  objectFit: "cover",
                }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= ACADEMIC LEVELS ================= */}
      <section
        className="py-5"
        style={{ background: "#f8f9fa" }}
      >
        <div className="container">

          <div className="text-center mb-4">
            <span className="text-danger fw-bold small">
              ACADEMIC LEVELS
            </span>

            <h2 className="fw-bold mt-2">
              Education for Every Stage
            </h2>
          </div>

          <div className="row g-4">
            {levels.map((item) => (
              <div className="col-md-4" key={item.title}>
                <div
                  className="card border-0 rounded-4 shadow-sm h-100 p-4 text-center"
                  style={{
                    transition: "all .3s ease",
                    borderTop: "4px solid #dc3545",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 30px rgba(0,0,0,.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 5px 15px rgba(0,0,0,.08)";
                  }}
                >
                  <div className="fs-1 mb-2">{item.icon}</div>

                  <h4 className="fw-bold">{item.title}</h4>

                  <p className="text-secondary mb-0">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SUBJECTS ================= */}
      <section className="py-5">
        <div className="container">

          <div className="text-center mb-4">
            <span className="text-danger fw-bold small">
              CURRICULUM
            </span>

            <h2 className="fw-bold mt-2">
              Core Subjects
            </h2>
          </div>

          <div className="row g-3">
            {subjects.map(([icon, subject]) => (
              <div
                className="col-6 col-md-4 col-lg-3"
                key={subject}
              >
                <div
                  className="border rounded-4 p-3 text-center h-100"
                  style={{
                    transition: "all .3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-5px)";
                    e.currentTarget.style.borderColor = "#dc3545";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "#dee2e6";
                  }}
                >
                  <div className="fs-2">{icon}</div>
                  <h6 className="fw-bold mt-2 mb-0">
                    {subject}
                  </h6>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </>
  );
};

export default Academics;
