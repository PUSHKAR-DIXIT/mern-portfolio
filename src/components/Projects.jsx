import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Simon Game",
      problem: "Users needed an interactive memory game to improve focus.",
      solution:
        "Built a browser-based Simon Game with sound, levels, and restart logic.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/PUSHKAR-DIXIT/simon-game",
      live: "#"
    },
    {
      title: "Complexity Analyzer",
      problem:
        "Understanding time complexity is difficult for beginners.",
      solution:
        "Created a tool that explains algorithm complexity with examples.",
      tech: ["Java", "DSA"],
      github: "https://github.com/PUSHKAR-DIXIT/Complexity-Analyzer",
      live: "#"
    },
    {
      title: "MERN Portfolio",
      problem:
        "Static portfolios don’t scale or store dynamic data.",
      solution:
        "Built a full MERN portfolio with MongoDB, certificate uploads, and admin control.",
      tech: ["React", "Node", "Express", "MongoDB"],
      github: "https://github.com/your-github/mern-portfolio",
      live: "#"
    },
    {
  title: "Spotify Clone",
  problem:
    "Learning frontend layout and UI design is difficult without real-world practice projects.",
  solution:
    "Built a responsive Spotify-inspired music streaming UI using pure HTML and CSS, focusing on layout, styling, and user experience.",
  tech: ["HTML", "CSS", "Responsive Design"],
  github: "https://github.com/PUSHKAR-DIXIT/spotify-clone",
  live: ""
}

  ];

  return (
    <section id="projects" className="projects">
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
              {/* {p.live !== "#" && (
                <a href={p.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              )} */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
