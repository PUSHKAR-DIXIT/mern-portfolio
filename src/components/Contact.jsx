import "./Contact.css";

function Contact({ profile }) {
  if (!profile) return null;

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <div className="contact-wrapper">
        
        {/* LEFT : CONTACT FORM */}
        <form
          className="contact-form"
          action="https://formsubmit.co/pushkardixit561@gmail.com"
          method="POST"
        >
          {/* Disable captcha */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Email subject */}
          <input
            type="hidden"
            name="_subject"
            value="New Portfolio Message 🚀"
          />

          {/* Table template */}
          <input type="hidden" name="_template" value="table" />

          {/* Redirect after submit (IMPORTANT) */}
          <input
            type="hidden"
            name="_next"
            value="https://pushkardixit-portfolio.vercel.app/"
          />

          {/* Honeypot anti-spam */}
          <input
            type="text"
            name="_honey"
            style={{ display: "none" }}
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
          />

          <button type="submit">Send Message</button>
        </form>

        {/* RIGHT : CONTACT INFO */}
        <div className="contact-info">
          <h3>Connect With Me</h3>

          <p><strong>Email:</strong> pushkardixit561@gmail.com</p>
          <p><strong>Phone:</strong> +91-8641075968</p>

          <div className="contact-links">
            <a
              href="https://github.com/Pushkar-DIXIT"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/pushkar-dixit-502bb4327"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href={`mailto:${profile.email}`}>
              Email Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
