import { useEffect, useState } from "react";
import axios from "axios";
import "./Certificates.css";

function Certificates() {
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/certificates")
      .then(res => setCerts(res.data));
  }, []);

  return (
    <section id="certificates" className="cert-section">
      <h2>Certificates</h2>

      <div className="cert-row">
        {certs.map(cert => (
          <div key={cert._id} className="cert-card">
            <img src={cert.image} alt={cert.title} />
            <p>{cert.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
