import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.target.reset();
  }

  return (
    <section className="contact-section" id="contact">
      <div className="section-heading">
        <span>07 / CONTACT</span>
        <h2>Contact</h2>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <p className="contact-label">LET&apos;S CONNECT</p>

          <h3>
            Interested in quality engineering,
            <span>
              <br />AI automation,
              <br />and healthcare systems?
            </span>
          </h3>

          <p className="contact-description">
            Interested in quality engineering, AI automation, mainframe systems,
            healthcare claims testing, or enterprise automation?
            <br />
            Let&apos;s connect.
          </p>

          <div className="contact-links">
            <a href="mailto:sankeerthana.marupalli@email.com">
              <span>Email</span>
              <strong>sankeerthana.marupalli@email.com ↗</strong>
            </a>

            <a
              href="https://github.com/Sankeerthana-samson"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              <strong>github.com/Sankeerthana-samson ↗</strong>
            </a>

            <a
              href="https://www.linkedin.com/in/sankeerthana-samson-b961141a1/"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              <strong>linkedin.com/in/sankeerthana-samson-b961141a1/ ↗</strong>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Sankeerthana Marupalli"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="sankeerthana.marupalli@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell me about your project or opportunity..."
              required
            />
          </div>

          <button type="submit">Send Message ↗</button>

          {submitted && (
            <p className="form-success">
              Thanks! Your message has been received.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;