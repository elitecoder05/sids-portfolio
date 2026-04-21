const skillGroups = [
  {
    category: "Mobile Development",
    skills: ["React Native", "JavaScript", "TypeScript"],
  },
  {
    category: "Backend & Systems",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    category: "Engineering Fundamentals",
    skills: ["Data Structures & Algorithms", "System Thinking"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills">
      <div className="section-container">
        <p className="section-label">Technical Skills</p>
        <h2 className="section-title mb-12">What I Work With</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
