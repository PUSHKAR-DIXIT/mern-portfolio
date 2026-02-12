import { useEffect, useState } from "react";
import axios from "axios";
import "./Certificates.css";

function Certificates() {
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/certificates`)
      .then(res => setCerts(res.data))
      .catch(err => console.log(err));
  };

  return (
    <section id="certificates" className="cert-section">
      <h2>Certificates</h2>

      <div className="cert-row">
        {certs.map(cert => (
          <div key={cert._id} className="cert-card">
            <img
              src={`${process.env.REACT_APP_API_URL}/${cert.image}`}
              alt={cert.title}
            />
            <p>{cert.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
