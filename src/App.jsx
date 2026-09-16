
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import Academics from "./components/Academics";
import Admission from "./components/Admission";
import Facility from "./components/Facility";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

const MainWebsite = () => {
  return (
    <>
      <Header />
      <Navbar />

      <Home />

      <section id="about">
        <About />
      </section>

      <section id="academics">
        <Academics />
      </section>

      <section id="admission">
        <Admission />
      </section>

      <section id="facility">
        <Facility />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

const App = () => {
  return (
    <Routes>
      {/* Main Single Page Website */}
      <Route path="/" element={<MainWebsite />} />

      {/* Separate Login Page */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
