
import "bootstrap/dist/css/bootstrap.min.css";
import { School } from "../data/schoolData";

const Home = () => {
  const slides = [
    {
      image: "/award4.jpeg",
      title: "Building Bright Minds",
      text: "Inspiring young minds with knowledge, confidence, creativity and strong values.",
      button: "Explore Facilities",
      link: "#facility",
    },
    {
      image: "/award7.jpeg",
      title: "Learn. Grow. Succeed.",
      text: "A supportive environment where every student can discover their potential.",
      button: "View Gallery",
      link: "#gallery",
    },
    {
      image: "/award9.jpeg",
      title: "Education Beyond Classrooms",
      text: "Developing academic skills, creativity, leadership and character.",
      button: "Explore Academics",
      link: "#academics",
    },
    {
      image: "/award10.jpeg",
      title: "Together We Build the Future",
      text: "Empowering students to become confident and responsible citizens.",
      button: "Admissions Open",
      link: "#admission",
    },
  ];

  const highlights = [
    ["🎓", "Quality Education", "Focused learning"],
    ["🏫", "Modern Campus", "Safe & comfortable"],
    ["⚽", "Sports & Activities", "Overall development"],
    ["💡", "Smart Learning", "Modern technology"],
  ];

  return (
    <>
      {/* ================= HERO ================= */}
      <section id="home">
        <div
          id="schoolCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#schoolCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
              />
            ))}
          </div>

          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={slide.title}
              >
                <img
                  src={slide.image}
                  className="d-block w-100"
                  alt={slide.title}
                  style={{
                    height: "clamp(500px, 85vh, 750px)",
                    objectFit: "cover",
                  }}
                />

                <div
                  className="carousel-caption d-flex align-items-center justify-content-center"
                  style={{
                    inset: 0,
                    background: "rgba(0,0,0,.55)",
                  }}
                >
                  <div className="container">
                    <span className="badge bg-warning text-dark px-3 py-2 mb-3">
                      {School.schoolName}
                    </span>

                    <h1 className="display-4 fw-bold">
                      {slide.title}
                    </h1>

                    <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
                      {slide.text}
                    </p>

                    <a
                      href={slide.link}
                      className="btn btn-warning btn-lg px-4 mt-2 fw-semibold"
                    >
                      {slide.button}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#schoolCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#schoolCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" />
          </button>
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="py-4 bg-white shadow-sm">
        <div className="container">
          <div className="row g-3 text-center">
            {highlights.map(([icon, title, text]) => (
              <div className="col-6 col-lg-3" key={title}>
                <div className="p-3 h-100">
                  <div className="fs-1">{icon}</div>
                  <h5 className="fw-bold">{title}</h5>
                  <p className="text-secondary mb-0">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
