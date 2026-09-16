import { School } from "../data/schoolData";

const Gallery = () => {
  const staffMembers = [
    {
      image: "/manager.jpeg",
      name: "Sikha Kanti",
      role: "School Manager",
      category: "Management",
    },
    {
      image: "/Director.jpeg",
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
      image: "/vicePri.jpeg",
      name: "Vice Principal",
      role: "Vice Principal",
      category: "Leadership",
    },
    {
      image: "/staff.jpeg",
      name: "Teaching Staff",
      role: "Teaching Team",
      category: "Staff",
    },
    {
      image: "/cordinator1.jpeg",
      name: "Dipti Mishra",
      role: "School Coordinator",
      category: "Coordination",
    },
  ];

  const studentImages = [
    {
      image: "/award1.jpeg",
      title: "Academic Excellence",
      category: "Academics",
    },
    {
      image: "/award2.jpeg",
      title: "Student Activities",
      category: "Activities",
    },
    {
      image: "/award3.jpeg",
      title: "Campus Moments",
      category: "Campus Life",
    },
    {
      image: "/award4.jpeg",
      title: "Learning Together",
      category: "Academics",
    },
    {
      image: "/award5.jpeg",
      title: "School Events",
      category: "Events",
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
      title: "Memorable Moments",
      category: "Events",
    },
  ];

  return (
    <>
    
        <div className="container text-center">
          <span className="badge bg-warning text-dark px-4 py-2 rounded-pill" style={{height:'40px',width:'190px', fontSize:'18px'}}>
           <b>OUR GALLERY</b> 
          </span>

          <h1 className="fw-bold display-6 mt-3 mb-2">
            Moments That Inspire
          </h1>

          <p
            className="mb-0 opacity-75 mx-auto"
            style={{ maxWidth: "650px" }}
          >
            Explore memorable moments, achievements and the people
            who make {School.schoolName} special.
          </p>
        </div>
   {/* Leadership */}
<section id="leadership" className="py-5">
  <div className="container">

    {/* Heading */}
    <div className="text-center mb-5">
      <span className="text-danger fw-bold small">
        OUR TEAM
      </span>

      <h2 className="fw-bold mt-2">
        Leadership & Staff
      </h2>

      <p
        className="text-secondary mx-auto mb-0"
        style={{ maxWidth: "650px" }}
      >
        Meet the dedicated people who guide and support our students.
      </p>
    </div>

    {/* Staff Cards */}
    <div className="row g-4">
      {staffMembers.map((member) => (
        <div
          className="col-12 col-sm-6 col-lg-4"
          key={member.name}
        >
          <div
            className="card border-0 rounded-4 overflow-hidden h-100"
            style={{
              background: "#fff",
              boxShadow: "0 5px 18px rgba(0,0,0,.08)",
              transition: "all .35s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 15px 30px rgba(0,0,0,.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 5px 18px rgba(0,0,0,.08)";
            }}
          >

            {/* Image Area */}
            <div
              style={{
                width: "100%",
                height: "360px",
                overflow: "hidden",
                background: "#f5f5f5",
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: member.imageFit || "cover",
                  objectPosition: member.imagePosition || "top center",
                  display: "block",
                }}
              />
            </div>

            {/* Details */}
            <div
              className="text-center p-3"
              style={{
                minHeight: "125px",
                background: "#fff",
              }}
            >

              {/* Category */}
              <span
                className="badge rounded-pill mb-2"
                style={{
                  background: "#fff1f1",
                  color: "#dc3545",
                  border: "1px solid #f3c2c2",
                }}
              >
                {member.category}
              </span>

              {/* Name */}
              <h5 className="fw-bold mb-1">
                {member.name}
              </h5>

              {/* Role */}
              <p className="text-danger fw-semibold mb-0">
                {member.role}
              </p>

            </div>

          </div>
        </div>
      ))}
    </div>

  </div>
</section>
      {/* Student Gallery */}
      <section
        id="gallery"
        className="py-5"
        style={{ background: "#f8f9fa" }}
      >
        <div className="container">

          <div className="text-center mb-5">
            <span className="text-danger fw-bold small">
              STUDENT LIFE
            </span>

            <h2 className="fw-bold mt-2">
              Moments & Memories
            </h2>

            <p
              className="text-secondary mx-auto mb-0"
              style={{ maxWidth: "650px" }}
            >
              A glimpse into learning, activities, celebrations
              and everyday school life.
            </p>
          </div>

          <div className="row g-3">
            {studentImages.map((item) => (
              <div
                className="col-6 col-md-4 col-lg-3"
                key={item.image}
              >
                <div
                  className="position-relative overflow-hidden rounded-4 shadow-sm"
                  style={{
                    height: "250px",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    const img =
                      e.currentTarget.querySelector("img");

                    if (img) {
                      img.style.transform = "scale(1.08)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    const img =
                      e.currentTarget.querySelector("img");

                    if (img) {
                      img.style.transform = "scale(1)";
                    }
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-100 h-100"
                    style={{
                      objectFit: "cover",
                      transition: "transform .5s ease",
                    }}
                  />

                  <div
                    className="position-absolute bottom-0 start-0 w-100 p-3 text-white"
                    style={{
                      background:
                        "linear-gradient(transparent, rgba(0,0,0,.85))",
                    }}
                  >
                    <small className="text-warning fw-semibold">
                      {item.category}
                    </small>

                    <h6 className="fw-bold mb-0 mt-1">
                      {item.title}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    
    </>
  );
};

export default Gallery;
