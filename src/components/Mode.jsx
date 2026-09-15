import { useState } from "react";

const Mode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);

    document.body.style.backgroundColor = !darkMode
      ? "#121212"
      : "#ffffff";

    document.body.style.color = !darkMode
      ? "#ffffff"
      : "#000000";
  };

  return (
    <button
      onClick={toggleMode}
      className="btn btn-outline-secondary text-white fs-4 p-0 ms-3 me-4"
      title={darkMode ? "Light Mode" : "Dark Mode"}
    >
      <i
        className={
          darkMode
            ? "bi bi-sun-fill"
            : "bi bi-moon-fill"
        }
      ></i>
    </button>
  );
};

export default Mode;