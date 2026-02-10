import "./Bio.css";
import profileImg from "../assets/profile.jpg";

function Bio({ profile }) {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <h1>
          Hi, I’m <span>{profile.name}</span>
        </h1>
        <h2>{profile.role}</h2>
        <p>{profile.bio}</p>

        <div className="hero-buttons">
          <a href="#contact" className="btn primary">Contact Me</a>
          <a href="/resume.pdf" download className="btn secondary">Download CV</a>
        </div>
      </div>

      <div className="hero-right">
        <img src={profileImg} alt="profile" />
      </div>
    </section>
  );
}

export default Bio;
