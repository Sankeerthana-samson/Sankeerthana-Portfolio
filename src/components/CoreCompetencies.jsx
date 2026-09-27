function CoreCompetencies() {
  const competencyGroups = [
    {
      title: "Mainframe & File Testing",
      description: "Healthcare mainframe QA across transaction files, batch processing, and validation workflows.",
      skills: [
        "IBM z/OS Workspace",
        "Reflection",
        "CMOD",
        "JCL Execution",
        "VSAM Datasets",
        "COBOL Copybooks",
        "APT",
        "WGS",
        "CIW",
        "CS90",
      ],
    },
    {
      title: "Healthcare Domain Expertise",
      description: "Claims adjudication, edit processing, and healthcare transaction validation expertise.",
      skills: [
        "EDI 837/835",
        "Claims Adjudication",
        "Edit Processing",
        "ITS Host/Home",
        "Medicare",
        "Batch & Online Claims Logging",
      ],
    },
    {
      title: "AI Agents & Test Automation",
      description: "Python-led automation and Devin AI agents for enterprise QA acceleration.",
      skills: [
        "Devin AI Agents",
        "Python",
        "ADDI Upstream",
        "GitLab Collision Check",
        "REST API",
        "Selenium",
        "Appium",
        "Cucumber",
      ],
    },
    {
      title: "Quality Leadership & Operations",
      description: "Defect triage, cross-module coordination, and operational quality leadership.",
      skills: [
        "Defect Triage",
        "Cross-Module Impact Analysis",
        "RPC Team Alignment",
        "SQL Querying",
        "GitLab",
        "MS Excel",
      ],
    },
  ];

  return (
    <section className="core-competencies-section" id="core-competencies">
      <div className="section-heading">
        <span>02 / CORE COMPETENCIES</span>
        <h2>Core Competencies</h2>
      </div>

      <div className="core-competencies-grid">
        {competencyGroups.map((group) => (
          <article className="core-competency-card" key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.description}</p>

            <div className="core-competency-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CoreCompetencies;
