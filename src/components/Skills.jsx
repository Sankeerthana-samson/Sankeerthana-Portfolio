function Skills() {
  const skillGroups = [
    {
      title: "Mainframe & File Testing",
      skills: ["IBM z/OS", "Reflection", "CMOD", "JCL", "VSAM", "COBOL Copybooks", "APT", "WGS", "CIW", "CS90"],
    },
    {
      title: "Healthcare Domain",
      skills: ["EDI 837", "EDI 835", "Claims Adjudication", "Edit Processing", "ITS Host/Home", "Medicare", "Batch Claims", "Online Claims Logging"],
    },
    {
      title: "AI & Test Automation",
      skills: ["Devin AI Agents", "Python", "ADDI Upstream", "GitLab Collision Check", "REST API", "Selenium", "Appium", "Cucumber"],
    },
    {
      title: "Quality Engineering & Operations",
      skills: ["Defect Triage", "Cross-Module Impact Analysis", "RPC Team Alignment", "SQL Querying", "GitLab", "MS Excel"],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="section-heading">
        <span>03 / SKILLS</span>
        <h2>Skills</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;