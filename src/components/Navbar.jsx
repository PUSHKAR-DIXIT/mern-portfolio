import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const NavLink = ({ id, label }) => (
    <a
      href={`#${id}`}
      className={`nav-item ${active === id ? "active" : ""}`}
      onClick={() => setOpen(false)}
    >
      {label}
    </a>
  );

  return (
    <nav className="navbar">
      {/* LEFT LINKS */}
      <div className={`nav-left ${open ? "open" : ""}`}>
        <NavLink id="home" label="Home" />
        <NavLink id="about" label="About" />
        <NavLink id="education" label="Education" />
        <NavLink id="skills" label="Skills" />
        <NavLink id="projects" label="Projects" />
        <NavLink id="certificates" label="Certificates" />
        <NavLink id="contact" label="Contact" />
        <a href="/resume.pdf" className="resume-btn">Resume</a>
      </div>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
