function Certifications() {
  const certifications = [
    {
      title: "IBM Watsonx Certified",
      subtitle: "Enterprise AI & Data Platform Certification",
    },
    {
      title: "Claude AI Certification",
      subtitle: "Generative AI Workflow Certification",
    },
  ];

  return (
    <section className="certifications-section" id="certifications">
      <div className="section-heading">
        <span>06 / CERTIFICATIONS</span>
        <h2>Certifications</h2>
      </div>

      <div className="certifications-grid">
        {certifications.map((certification, index) => (
          <article
            className="certification-card"
            key={`${certification.title}-${index}`}
          >
            <span className="certification-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <p>Certification</p>
              <h3>{certification.title}</h3>
              <span>{certification.subtitle}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;