function Experience() {
  const experiences = [
    {
      company: "IBM",
      role: "Senior Quality Assurance Lead / Mainframe QA Specialist",
      period: "2023 – Present",
      bullets: [
        "AI-Driven Test Automation & Innovation",
        "Engineered 5 custom AI agents using Python and Devin AI.",
        "Automated testing workflows across IBM z/OS and CMOD environments.",
        "Created an ADDI Upstream Agent; saved 90% of manual effort through upstream test data setup automation.",
        "Built a GitLab Collision Check Agent; reduced codebase merge collision analysis effort by 95%.",
        "Engineered a Mainframe Version Check Agent; achieved 80% time savings in automated environment audits.",
        "Built a CMOD Log Parsing Agent; achieved 60% time savings.",
        "Served as Lead QA for major releases and validated 1,000+ claims.",
        "Validated batch processing and online logging channels across APT, WGS, CIW, CS90 and ITS Host/Home platforms.",
        "Executed JCL batch jobs, audited VSAM data outputs, verified layouts using COBOL Copybooks, and tested EDI 837/835 workflows.",
        "Achieved 90%+ pre-production defect isolation with zero critical production defects across major release cycles."
      ]
    },
    {
      company: "CARELON",
      role: "Benefit Analyst",
      period: "2020 – 2023",
      bullets: [
        "Configured and validated healthcare benefit structures.",
        "Validated medical policy rules, commercial and Medicare plans, claim edit logic, and accumulator rules.",
        "Supported claim adjudication and batch and online testing.",
        "Converted business requirements into test scenarios and partnered with mainframe testing teams."
      ]
    },
    {
      company: "OPTUM",
      role: "Claims Associate",
      period: "2019 – 2020",
      bullets: [
        "Processed and audited high-volume healthcare claims.",
        "Verified member eligibility, provider network coding, and benefit application.",
        "Identified unhandled claim edits and system adjudication errors.",
        "Provided root-cause analysis inputs to technical quality teams."
      ]
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="section-heading">
        <span>04 / EXPERIENCE</span>
        <h2>Experience</h2>
      </div>

      <div className="experience-list">
        {experiences.map((experience, index) => (
          <article className="experience-item" key={experience.company}>
            <div className="experience-marker">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="experience-content">
              <p>{experience.period}</p>
              <h3>{experience.company}</h3>
              <span>{experience.role}</span>

              <ul>
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;