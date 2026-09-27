function About() {
  const focusAreas = [
    "Mainframe QA",
    "Healthcare Claims",
    "EDI 837/835",
    "AI-Augmented Quality Engineering",
    "Batch and Online Testing",
    "Quality Leadership",
    "Test Automation",
  ];

  return (
    <section className="about-section" id="about">
      <div className="section-heading">
        <span>01 / ABOUT</span>
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            Results-driven Senior Quality Assurance Lead with 7+ years of
            experience in healthcare claims adjudication, EDI transaction
            standards (837/835), and IBM z/OS mainframe architectures.
          </p>

          <p>
            I lead quality engineering initiatives across batch and online
            healthcare processing, automate validation workflows using Python and
            Devin AI, and partner with cross-functional teams to deliver reliable,
            high-impact enterprise releases.
          </p>
        </div>

        <div className="about-tags" aria-label="Areas of focus">
          {focusAreas.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="about-education" aria-label="Education">
        <div className="section-heading section-heading-inline">
          <span>EDUCATION</span>
        </div>

        <div className="about-education-card">
          <div className="education-card-header">
            <span className="education-badge">B.Tech</span>
            <span className="education-year">Computer Science &amp; Engineering</span>
          </div>

          <h3>Bachelor of Technology (B.Tech)</h3>
          <p>Computer Science &amp; Engineering</p>
        </div>
      </div>
    </section>
  );
}

export default About;