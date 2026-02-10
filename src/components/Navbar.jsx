import { useEffect, useState } from "react";
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

    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const link = (id, label) => (
    <li>
      <a
        href={`#${id}`}
        className={active === id ? "active" : ""}
        onClick={() => setOpen(false)}
      >
        {label}
      </a>
    </li>
  );

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">Pushkar</div>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {link("home", "Home")}
          {link("about", "About")}
          {link("education", "Education")}
          {link("skills", "Skills")}
          {link("projects", "Projects")}
          {link("certificates", "Certificates")}
          {link("contact", "Contact")}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
