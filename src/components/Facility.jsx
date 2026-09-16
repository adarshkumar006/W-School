const Facility = () => {
  const facilities = [
    {
      icon: "💻",
      title: "Smart Classrooms",
      text: "Interactive classrooms with modern learning technology.",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754",
    },
    {
      icon: "🔬",
      title: "Science Labs",
      text: "Practical spaces for experiments and scientific learning.",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
    },
    {
      icon: "📚",
      title: "Library",
      text: "A peaceful space that encourages reading and self-learning.",
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
    },
    {
      icon: "🏆",
      title: "Sports Facilities",
      text: "Facilities that promote fitness, teamwork and discipline.",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc",
    },
    {
      icon: "🎨",
      title: "Activity Rooms",
      text: "Creative spaces for art, music and cultural activities.",
      image:
        "https://images.unsplash.com/photo-1529390079861-591de354faf5",
    },
    {
      icon: "🖥️",
      title: "Computer Lab",
      text: "Technology-focused learning for essential digital skills.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72",
    },
  ];

  return (
    <>
    
        <div className="container text-center">
          <span className="badge bg-warning text-dark px-4 py-2 rounded-pill" style={{height:'40px',width:'240px', fontSize:'18px'}}>
          <b>  CAMPUS & FACILITIES</b>
          </span>

          <h1 className="fw-bold display-6 mt-3 mb-2">
            Facilities That Inspire Learning
          </h1>

          <p
            className="mb-0 opacity-75 mx-auto"
            style={{ maxWidth: "650px" }}
          >
            Modern, safe and student-friendly facilities designed
            for learning, creativity and overall development.
          </p>
        </div>
     

      {/* Facilities */}
      <section
        id="facility"
        className="py-5"
        style={{ background: "#faf8f8" }}
      >
        <div className="container">

          <div className="text-center mb-5">
            <span className="text-danger fw-bold small">
              OUR FACILITIES
            </span>

            <h2 className="fw-bold mt-2">
              Everything Students Need
            </h2>

            <p
              className="text-secondary mx-auto mb-0"
              style={{ maxWidth: "600px" }}
            >
              Our campus provides the right environment for
              academic and personal growth.
            </p>
          </div>

          <div className="row g-4">
            {facilities.map((item) => (
              <div
                className="col-12 col-sm-6 col-lg-4"
                key={item.title}
              >
                <div
                  className="card border-0 rounded-4 overflow-hidden h-100"
                  style={{
                    boxShadow: "0 5px 18px rgba(0,0,0,.07)",
                    transition: "all .35s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 30px rgba(0,0,0,.14)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 5px 18px rgba(0,0,0,.07)";
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-100"
                    style={{
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body p-4">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "#fff0f0",
                        fontSize: "23px",
                      }}
                    >
                      {item.icon}
                    </div>

                    <h5 className="fw-bold">
                      {item.title}
                    </h5>

                    <p className="text-secondary small mb-0">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Small Highlight Section */}
      <section className="py-4">
        <div className="container">
          <div className="row g-3 text-center">

            {[
              ["🏫", "Modern Campus"],
              ["🛡️", "Safe Environment"],
              ["🌱", "Student Growth"],
              ["💡", "Smart Learning"],
            ].map(([icon, title]) => (
              <div className="col-6 col-lg-3" key={title}>
                <div
                  className="p-3 rounded-4 border h-100"
                  style={{
                    transition: "all .3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-5px)";
                    e.currentTarget.style.borderColor =
                      "#dc3545";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(0)";
                    e.currentTarget.style.borderColor =
                      "#dee2e6";
                  }}
                >
                  <div className="fs-3">{icon}</div>
                  <h6 className="fw-bold mt-2 mb-0">
                    {title}
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

export default Facility;
