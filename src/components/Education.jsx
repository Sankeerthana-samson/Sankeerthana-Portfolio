function Education() {
  const education = [
    {
      title: "Bachelor of Technology (B.Tech)",
      degree: "Computer Science & Engineering",
    },
  ];

  return (
    <section className="education-section" id="education">
      <div className="section-heading">
        <span>EDUCATION</span>
      </div>

      <div className="education-list">
        {education.map((entry, index) => (
          <article className="education-card" key={entry.title}>
            <span className="education-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="education-content">
              <p>Qualification</p>
              <h3>{entry.title}</h3>
              <span>{entry.degree}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
