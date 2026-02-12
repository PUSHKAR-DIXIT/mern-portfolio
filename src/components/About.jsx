import { useEffect, useRef, useState } from "react";
import aboutImg from "../assets/about.jpg";
import "./About.css";

function About() {
  
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
   <section id="about" className={`about ${visible ? "show" : ""}`} ref={sectionRef}>

      <div className="about-left">
        <img src={aboutImg} alt="About Pushkar" />
      </div>

      <div className="about-right">
        <h2>About Me</h2>

        <p>
          I am a B.Tech Computer Science and Engineering student at ITM College,
          with a strong interest in full-stack web development. I specialize in
          the MERN stack and enjoy building scalable, real-world applications
          with clean and maintainable code.
        </p>

        <p>
          Along with web development, I have a solid foundation in Java, C++,
          Data Structures and problem solving. I have worked on multiple projects
          including a MERN Portfolio, Simon Game and a Complexity Analyzer.
          I am continuously learning new technologies and improving my skills
          to grow as a professional software developer.
        </p>
      </div>
    </section>
  );
}

export default About;
