import { useEffect, useRef, useState } from "react";
import "./Education.css";

function Education() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className={`education ${visible ? "show" : ""}`}
    >
      <h2>Education</h2>

      <div className="education-container">
        <div className="edu-card">
          <h3>Bachelor of Technology (B.Tech)</h3>
          <p className="edu-college">
            Computer Science & Engineering <br />
            ITM University, Gwalior
          </p>
          <p className="edu-year">2023 – 2027</p>
          <p className="edu-desc">
            Currently pursuing B.Tech in Computer Science & Engineering with
            strong interest in Full Stack Development. Gaining solid knowledge
            of Data Structures, Algorithms, DBMS, OS and MERN Stack.
          </p>
        </div>

        <div className="edu-card">
          <h3>Higher Secondary (12th)</h3>
          <p className="edu-college">
            Kiddys Corner Higher Secondary School
          </p>
          <p className="edu-year">Passed in 2023</p>
          <p className="edu-desc">
            Completed higher secondary education with PCM stream,
            building strong analytical and problem-solving foundation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
