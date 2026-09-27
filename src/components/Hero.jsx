function Hero() {
  const keywords = [
    "IBM z/OS",
    "AI Automation",
    "Healthcare Claims",
    "Quality Engineering",
    "Python",
    "Devin AI",
  ];

  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <p className="small-text">Senior Mainframes QE &amp; AI Automation Specialist</p>

        <h1>
          <span>Sankeerthana</span>
          <strong>Marupalli</strong>
        </h1>

        <p className="hero-description">
          Senior Quality Assurance Lead with 7+ years of experience in healthcare
          claims adjudication, EDI transaction standards, IBM z/OS mainframe
          architectures, and AI-augmented quality engineering.
        </p>

        <div className="hero-keywords" aria-label="Professional keywords">
          {keywords.map((keyword) => (
            <span key={keyword}>{keyword}</span>
          ))}
        </div>

        <div className="hero-actions">
          <a className="hero-button hero-button-primary" href="#experience">
            View Experience <span aria-hidden="true">→</span>
          </a>
          <a className="hero-button hero-button-secondary" href="#projects">
            AI Automation <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="hero-character">
        <div
          className="hero-visual-placeholder"
          aria-label="Sankeerthana portrait illustration"
        >
          <img
            className="hero-illustration"
            src="/images/portfolio-portrait.png"
            alt="Sankeerthana portrait illustration"
          />
          <span className="placeholder-corner placeholder-corner-top" />
          <span className="placeholder-corner placeholder-corner-bottom" />
        </div>
      </div>
    </section>
  );
}

export default Hero;