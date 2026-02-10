import "./Skills.css";

function Skills() {
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
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div className="skill-card" key={i}>
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
