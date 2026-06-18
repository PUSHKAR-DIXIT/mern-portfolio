import { useEffect, useRef, useState } from "react";
import "./Projects.css";

function Projects() {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Simon Game",
      desc: "Browser-based Simon memory game with sound, levels, and restart logic.",
      problem: "Users needed an interactive memory game to improve focus.",
      solution: "Built with sound effects, progressive levels and clean restart logic.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/PUSHKAR-DIXIT/simon-game",
      img:require("../assets/simon.jpg")
    },
    {
      title: "Complexity Analyzer",
      desc: "A tool that explains algorithm time complexity with examples.",
      problem: "Understanding time complexity is difficult for beginners.",
      solution: "Created a tool that explains algorithm complexity with examples.",
      tech: ["Java", "DSA"],
      github: "https://github.com/PUSHKAR-DIXIT/Complexity-Analyzer",
      img: require("../assets/codecomplexity.jpg")
    },
    {
      title: "MERN Portfolio",
      desc: "Full stack portfolio with MongoDB backend and admin control.",
      problem: "Static portfolios don't scale or store dynamic data.",
      solution: "Built a full MERN portfolio with MongoDB and admin control.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/your-github/mern-portfolio",
      img: require("../assets/home.jpg")
    },
    {
      title: "Spotify Clone",
      desc: "Responsive Spotify-inspired UI built with HTML & CSS.",
      problem: "Learning frontend layout and UI design needs real-world practice.",
      solution: "Built a responsive Spotify-inspired UI using HTML & CSS.",
      tech: ["HTML", "CSS", "Responsive Design"],
      github: "https://github.com/PUSHKAR-DIXIT/spotify-clone",
      img: require("../assets/spotify.jpg")
    },
    {
      title: "Cloud Cost Analyzer",
      desc: "A tool to analyze and optimize cloud infrastructure costs.",
      problem: "Cloud bills are hard to track and optimize for developers.",
      solution: "Built an analyzer that breaks down cloud usage and suggests cost savings.",
      tech: ["React", "Node.js", "AWS", "MongoDB"],
      github: "https://github.com/PUSHKAR-DIXIT/cloud-cost-analyzer",
      img: require("../assets/cloudanalyzer.jpg")
    }
  ];

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const cards = container.querySelectorAll(".project-card");
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    cards.forEach((card, i) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(containerCenter - cardCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setActiveIndex(closest);
  };

  const scrollTo = (i) => {
    const container = scrollRef.current;
    if (!container) return;
    const cards = container.querySelectorAll(".project-card");
    if (cards[i]) {
      const cardCenter = cards[i].offsetLeft + cards[i].offsetWidth / 2;
      container.scrollTo({
        left: cardCenter - container.offsetWidth / 2,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={"projects" + (visible ? " show" : "")}
    >
      <p className="section-tag">— What I've Built</p>
      <h2>Projects</h2>
      <p className="section-sub">Some of my recent work</p>

      {/* Scroll Container */}
      <div className="projects-scroll" ref={scrollRef} onScroll={handleScroll}>
        {projects.map((p, i) => (
          <div
            className={"project-card" + (activeIndex === i ? " active" : "")}
            key={i}
            onClick={() => scrollTo(i)}
          >
            {/* Image */}
            <div className="project-img">
              {p.img
                ? <img src={p.img} alt={p.title} />
                : <div className="project-img-placeholder">
                    <span>🖥️</span>
                    <p>Screenshot Coming Soon</p>
                  </div>
              }
            </div>

            {/* Content */}
            <div className="project-content">
              <h3>{p.title}</h3>
              <p className="project-desc">{p.desc}</p>

              <div className="project-detail">
                <p><span className="label">Problem:</span> {p.problem}</p>
                <p><span className="label">Solution:</span> {p.solution}</p>
              </div>

              <div className="tech">
                {p.tech.map((t, idx) => <span key={idx}>{t}</span>)}
              </div>

              <div className="project-links">
                <a href={p.github} target="_blank" rel="noreferrer">
                  🔗 GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="project-dots">
        {projects.map((_, i) => (
          <button
            key={i}
            className={"dot-btn" + (activeIndex === i ? " active" : "")}
            onClick={() => scrollTo(i)}
          />
        ))}
      </div>

    </section>
  );
}

export default Projects;