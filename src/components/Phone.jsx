
const Phone = () => {
  const phoneNumber = "919876543210"; // apna number daalein

  return (
    <a
      href={`tel:+${phoneNumber}`}
      className="phone-btn"
      title="Call Us"
    >
      <i className="bi bi-telephone-fill"></i>
    </a>
  );
};

export default Phone;
