import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // const [profile, setProfile] = useState(null);

  // useEffect(() => {
  //   axios.get("http://localhost:5000/api/profile")
  //     .then(res => setProfile(res.data))
  //     .catch(err => console.log(err));
  // }, []);

  // if (!profile) return <p>Loading...</p>;
  const profile = {
  name: "Pushkar Dixit",
  role: "MERN Stack Developer",
  email: "your@email.com"
};

  return (
    <>
      <Navbar />

      <main style={{ marginTop: "80px" }}>
        <Home />
        <About profile={profile} />
        <Education/>
        <Skills />
        <Projects />
        <Certificates />
        <Contact profile={profile} />
        <Footer />
      </main>
    </>
  );
}

export default App;
