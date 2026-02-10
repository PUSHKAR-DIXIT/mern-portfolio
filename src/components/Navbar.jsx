import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Left Name */}
        <div className="nav-logo">Pushkar</div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links */}
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#education" onClick={() => setOpen(false)}>Education</a></li>
          <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
          <li><a href="#certificates" onClick={() => setOpen(false)}>Certificates</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
