const experiences = [
  {
    role: "Founding Software Engineer",
    company: "Flitzy India",
    bullets: [
      "Built core mobile infrastructure from zero as part of the founding engineering team",
      "Developed all mobile screens and owned the mobile product end-to-end",
      "Made architectural decisions that shaped the product's technical foundation",
    ],
  },
  {
    role: "Software Developer",
    company: "Mobizo",
    bullets: [
      "Built and shipped 12 production projects (iOS + Android) from scratch",
      "Owned complete development lifecycle — architecture through deployment",
      "Integrated complex API systems with performance-optimized data handling",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-surface">
      <div className="section-container">
        <p className="section-label">Experience</p>
        <h2 className="section-title mb-12">Where I've Built</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((exp) => (
            <div key={exp.company} className="project-card">
              <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
              <p className="text-sm text-accent font-medium mb-4">{exp.company}</p>
              <ul className="space-y-3">
                {exp.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-foreground/80">
                    <span className="text-accent mt-0.5 shrink-0">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
