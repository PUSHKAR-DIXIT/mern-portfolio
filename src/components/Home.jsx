import { useEffect, useRef } from "react";
import profileImg from "../assets/profile.jpg";
import "./Home.css";

function Home() {
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="home" className="home hidden">
      <div className="home-left">
        <h1>
          Hi, I'm <span>Pushkar Dixit</span>
        </h1>

        <h2>B.Tech CSE Student | MERN Stack Developer</h2>

        <p>
          A passionate Computer Science student focused on building modern,
          responsive and user-centric web applications.
        </p>

        <div className="home-buttons">
          <a href="#contact" className="btn primary">Hire Me</a>
          <a href="#projects" className="btn outline">View Projects</a>
        </div>
      </div>

      <div className="home-right">
        <img src={profileImg} alt="Pushkar Dixit" />
      </div>
    </section>
  );
}

export default Home;
