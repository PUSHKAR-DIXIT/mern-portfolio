import { useEffect, useRef, useState } from "react";
import "./Skills.css";

function Skills() {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      title: "Programming Languages",
      items: ["C++", "Java", "JavaScript"]
    },
    {
      title: "Frontend Development",
      items: ["React.js", "HTML5", "CSS3", "Responsive Design"]
    },
    {
      title: "Backend Development",
      items: ["Node.js", "Express.js", "REST APIs"]
    },
    {
      title: "Databases",
      items: ["MongoDB", "MySQL", "SQL Queries"]
    },
    {
      title: "Tools & Technologies",
      items: ["Git & GitHub", "VS Code", "Postman", "MS Tools"]
    },
    {
      title: "Computer Science Fundamentals",
      items: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOP)",
        "DBMS",
        "Operating Systems (Basics)"
      ]
    }
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`skills ${visible ? "show" : ""}`}
    >
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div
            className="skill-card"
            key={i}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <h3>{skill.title}</h3>
            <ul>
              {skill.items.map((item, idx) => (
                <li key={idx}>✓ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
