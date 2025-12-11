import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        {/* LEFT: Intro + Links */}
        <div className="contact-info">
          <h1 className="contact-heading">Let’s Connect</h1>
          <p className="contact-subtitle">
            I’m open to full-time roles, internships, and interesting project
            collaborations. Feel free to reach out if you’d like to work together
            or just say Hi👋.
          </p>

          <div className="contact-details">
              <a 
                href="mailto:shalinisingh2376@gmail.com" 
                rel="noopener noreferrer" 
                className="contact-link" 
                aria-label="Email"
              >
                 <FaEnvelope />
              </a>

              <a
                href="https://github.com/shalini2376"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                 <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/shalini0403"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <FaLinkedin />
              </a>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="contact-form-card">
          <h2 className="contact-form-title">Send me a message</h2>
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for your message! 😊");
            }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Your name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Tell me about your project or say hi..."
                required
              />
            </div>

            <button type="submit" className="contact-submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
