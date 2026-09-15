
const WhatsApp = () => {
  const phoneNumber = "919876543210"; // yahan apna WhatsApp number daalein

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      title="Chat on WhatsApp"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
};

export default WhatsApp;