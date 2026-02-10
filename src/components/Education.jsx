import "./Education.css";

function Education() {
  return (
    <section id="Education" className="Education">
      <h2>Education</h2>

      <div className="education-container">
        {/* BTECH */}
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
            of Data Structures, Algorithms, DBMS, Operating Systems, and modern
            web technologies including MERN Stack.
          </p>
        </div>

        {/* 12TH */}
        <div className="edu-card">
          <h3>Higher Secondary (12th)</h3>
          <p className="edu-college">
            Kiddys Corner Higher Secondary School
          </p>
          <p className="edu-year">Passed in 2023</p>
          <p className="edu-desc">
            Completed higher secondary education with PCM (Physics, Chemistry,
            Mathematics) stream, building a strong analytical and problem-solving
            foundation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
