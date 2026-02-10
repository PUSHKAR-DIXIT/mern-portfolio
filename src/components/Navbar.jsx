import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("home");

useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll("section[id]");
    const scrollPos = window.scrollY + window.innerHeight / 3;

    let current = "home";

    sections.forEach((section) => {
      if (
        scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight
      ) {
        current = section.id;
      }
    });

    setActive(current);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <nav className="navbar">
      <div className="nav-left">
           <a href="#home" className={`nav-item ${active === "home" ? "active" : ""}`}>Home</a>
        <a href="#about" className={`nav-item ${active === "about" ? "active" : ""}`}>About</a>
      <a href="#Education" className={`nav-item ${active === "Education" ? "active" : ""}`}>Education</a>
        <a href="#skills" className={`nav-item ${active === "skills" ? "active" : ""}`}>Skills</a>
        <a href="#projects" className={`nav-item ${active === "projects" ? "active" : ""}`}>Projects</a>
        <a href="#certificates" className={`nav-item ${active === "certificates" ? "active" : ""}`}>Certificates</a>
        <a href="#contact" className={`nav-item ${active === "contact" ? "active" : ""}`}>Contact</a>
      </div>

      <a href="/resume.pdf" download className="resume-btn">
        Download CV
      </a>
    </nav>
  );
}

export default Navbar;
