import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  // 🔹 Static profile (backend temporarily removed)
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
        <Education />
        <Experience />
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
