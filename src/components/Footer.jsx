import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT */}
        <div className="footer-left">
          <h3>Pushkar Dixit</h3>
          <p>MERN Stack Developer</p>
        </div>

        {/* CENTER */}
        <div className="footer-center">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/pushkar-dixit-502bb4"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:your@email.com">Email</a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Pushkar Dixit. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
