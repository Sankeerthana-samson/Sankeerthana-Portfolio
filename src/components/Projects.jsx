function Projects() {
  const projects = [
    {
      number: "01",
      title: "ADDI UPSTREAM AGENT",
      category: "Python + Devin AI",
      description:
        "Automates upstream test data setup and reduces manual preparation effort.",
      technologies: ["Python", "Devin AI", "Healthcare QA"],
      result: "90% manual effort saved",
    },
    {
      number: "02",
      title: "GITLAB COLLISION CHECK AGENT",
      category: "Python + Devin AI",
      description:
        "Automates codebase merge collision and conflict analysis.",
      technologies: ["Python", "Devin AI", "GitLab"],
      result: "95% time savings",
    },
    {
      number: "03",
      title: "MAINFRAME VERSION CHECK AGENT",
      category: "Python + Devin AI",
      description:
        "Automates mainframe environment version audits.",
      technologies: ["Python", "Devin AI", "IBM z/OS"],
      result: "80% time savings",
    },
    {
      number: "04",
      title: "CMOD LOG PARSING AGENT",
      category: "Python + Devin AI",
      description:
        "Automates CMOD log parsing and verification workflows.",
      technologies: ["Python", "Devin AI", "CMOD"],
      result: "60% time savings",
    },
    {
      number: "05",
      title: "FIFTH AI AGENT",
      category: "Python + Devin AI",
      description:
        "Custom enterprise automation capability supporting test workflow optimization and QA operations.",
      technologies: ["Python", "Devin AI", "Automation"],
      result: "Custom enterprise automation capability",
    },
  ];

  const stats = [
    { value: "7+", label: "Years Experience" },
    { value: "1,000+", label: "Claims Validated" },
    { value: "90%+", label: "Pre-Production Defect Isolation" },
    { value: "95%", label: "Maximum Automation Time Savings" },
    { value: "0", label: "Critical Production Defect Record" },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="section-heading">
        <span>05 / AI AUTOMATION</span>
        <h2>AI Automation</h2>
      </div>

      <p className="section-subtitle">AI-Powered Quality Engineering</p>
      <p className="section-intro">
        Sankeerthana built custom AI and Python automation agents using Devin AI
        for enterprise testing workflows, mainframe validation, and quality
        operations.
      </p>

      <div className="project-metrics" aria-label="Key metrics">
        {stats.map((stat) => (
          <div className="project-stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-number">{project.number}</div>

            <div className="project-main">
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <p className="project-metric">
                <strong>{project.result}</strong>
                <span>result</span>
              </p>

              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;