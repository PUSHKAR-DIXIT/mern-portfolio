import { useEffect, useRef, useState } from "react";
import "./Projects.css";

function Projects() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Simon Game",
      problem: "Users needed an interactive memory game to improve focus.",
      solution:
        "Built a browser-based Simon Game with sound, levels, and restart logic.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/PUSHKAR-DIXIT/simon-game"
    },
    {
      title: "Complexity Analyzer",
      problem: "Understanding time complexity is difficult for beginners.",
      solution:
        "Created a tool that explains algorithm complexity with examples.",
      tech: ["Java", "DSA"],
      github: "https://github.com/PUSHKAR-DIXIT/Complexity-Analyzer"
    },
    {
      title: "MERN Portfolio",
      problem: "Static portfolios don’t scale or store dynamic data.",
      solution:
        "Built a full MERN portfolio with MongoDB and admin control.",
      tech: ["React", "Node", "Express", "MongoDB"],
      github: "https://github.com/your-github/mern-portfolio"
    },
    {
      title: "Spotify Clone",
      problem:
        "Learning frontend layout and UI design needs real-world practice.",
      solution:
        "Built a responsive Spotify-inspired UI using HTML & CSS.",
      tech: ["HTML", "CSS", "Responsive Design"],
      github: "https://github.com/PUSHKAR-DIXIT/spotify-clone"
    }
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`projects ${visible ? "show" : ""}`}
    >
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.title}</h3>

            <p><strong>Problem:</strong> {p.problem}</p>
            <p><strong>Solution:</strong> {p.solution}</p>

            <div className="tech">
              {p.tech.map((t, idx) => (
                <span key={idx}>{t}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={p.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

