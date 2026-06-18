import { useEffect, useRef, useState } from "react";
import "./Certificates.css";

function Certificates() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

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

  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    card.style.transform = "perspective(800px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) scale(1.06)";
    card.style.boxShadow = "0 20px 50px rgba(56,189,248,0.25)";
    const shine = card.querySelector(".cert-shine");
    if (shine) {
      shine.style.background =
        "radial-gradient(circle at " + x + "px " + y + "px, rgba(255,255,255,0.12), transparent 70%)";
    }
  };

  const handleMouseLeave = (card) => {
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
    card.style.boxShadow = "";
    const shine = card.querySelector(".cert-shine");
    if (shine) shine.style.background = "transparent";
  };

  const certificates = [
    {
      title: "Java Full Stack Development",
      issuer: "EduSkills",
      date: "2024",
      badge: "💻",
      color: "#f89820",
      img: require("../assets/javafull.jpg")
    },
    {
      title: "Salesforce Agentblazer Program",
      issuer: "Salesforce",
      date: "2025",
      badge: "☁️",
      color: "#00A1E0",
      img: require("../assets/salesforce.jpg")
    },
    {
      title: "Zscaler Zero Trust Associate",
      issuer: "Zscaler",
      date: "2025",
      badge: "🔐",
      color: "#00BCD4",
      img: require("../assets/zscaler.jpg")
    },
    {
      title: "JavaScript via Spring Boot",
      issuer: "Infosys Springboard",
      date: "2024",
      badge: "🟨",
      color: "#F7DF1E",
      img: require("../assets/infosysjavascript.jpg")
    },
    {
      title: "Management Development Programme",
      issuer: "NSIC Ltd. — Ministry of MSME, Govt. of India",
      date: "2026",
      badge: "🏛️",
      color: "#34d399",
      img: require("../assets/nsic.jpeg")
    },
    {
      title: "MERN Stack Development",
      issuer: "EduSkills",
      date: "2025",
      badge: "⚛️",
      color: "#61DAFB",
      img: require("../assets/mern.png")
    },
    {
      title: "Juniper Networking Virtual Internship",
      issuer: "Juniper Networks",
      date: "2025",
      badge: "🌐",
      color: "#84cc16",
      img: require("../assets/juniper.jpg")
    },
    {
      title: "AI/ML Virtual Internship",
      issuer: "Google Developer Experts",
      date: "2024",
      badge: "🤖",
      color: "#4285F4",
      img: require("../assets/aiml.jpg")
    },
    {
      title: "C++ Programming Internship",
      issuer: "ITM Gwalior",
      date: "2023",
      badge: "⚙️",
      color: "#00599C",
      img: require("../assets/c++.jpg")
    }
  ];

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className={"cert-section" + (visible ? " show" : "")}
    >
      <p className="section-tag">— My Achievements</p>
      <h2>Certificates</h2>
      <p className="section-sub">Courses, certifications and internships I have completed</p>

      <div className="cert-grid">
        {certificates.map((cert, i) => (
          <div
            className="cert-card"
            key={i}
            style={{ animationDelay: i * 0.08 + "s" }}
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
          >
            <div className="cert-shine"></div>
            <div className="cert-topbar" style={{ background: cert.color }}></div>

            {/* IMAGE */}
            {cert.img
              ? (
                <div className="cert-img-wrapper">
                  <img src={cert.img} alt={cert.title} />
                </div>
              )
              : (
                <div className="cert-badge-wrap" style={{ boxShadow: "0 0 20px " + cert.color + "55" }}>
                  <span>{cert.badge}</span>
                </div>
              )
            }

            <div className="cert-info">
              <p className="cert-title">{cert.title}</p>
              <p className="cert-issuer" style={{ color: cert.color }}>{cert.issuer}</p>
              <span className="cert-date">📅 {cert.date}</span>
            </div>

            <div className="cert-glow-line" style={{ background: cert.color }}></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;