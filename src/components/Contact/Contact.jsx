import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./contact.css";

function Contact() {
    const formRef = useRef(null);
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(null);
    const [copied, setCopied] = useState(false);

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        setSuccess(null);
        try{
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            const result = await emailjs.sendForm(
                serviceId,
                templateId,
                formRef.current,
                publicKey
            );
            // console.log("EmailJS result:", result);
            // console.log(formRef.current);
            setSending(false);
            setSuccess(true);
            formRef.current.reset();
        } catch (err) {
            console.error("EmailJS error:", err);
            setSending(false);
            setSuccess(false);
            }
        };

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
              <div className="email-icon-wrapper">
                    <a
                        href="#"
                        className="contact-link"
                        aria-label="Copy email address"
                        onClick={(e) => {
                        e.preventDefault();
                        navigator.clipboard.writeText("shalinisingh2376@gmail.com");
                        setCopied(true);

                        setTimeout(() => setCopied(false), 1500);
                        }}
                    >
                        <FaEnvelope />
                    </a>
                        {copied && <span className="copy-tooltip">Copied!</span>}
                </div>

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
            ref={formRef}
            className="contact-form"
            onSubmit={handleContactSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="from_name" type="text" placeholder="Your name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="reply_to"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell me about your project or say hi..."
                required
              />
            </div>

            <button type="submit" className="contact-submit-btn">
              {sending ? "Sending…" : "Send Message"}
            </button>
            {success === true && <p className="submit-success">Thanks — message sent!</p>}
            {success === false && <p className="submit-error">Sorry — failed to send. Try again later.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
