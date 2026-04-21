const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "React",
      "React Native",
      "Vue",
      "Svelte",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "CSS / HTML",
      "Accessibility",
      "Responsive Design",
    ],
  },
  {
    category: "Mobile",
    skills: [
      "iOS (Swift)",
      "Android (Kotlin)",
      "React Native",
      "Expo",
      "Flutter",
      "Mobile Architecture",
      "App Store Deployment",
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      "Node.js",
      "Deno",
      "Express",
      "NestJS",
      "Python (Django/Flask)",
      "Go",
      "GraphQL",
      "REST APIs",
      "gRPC",
    ],
  },
  {
    category: "Databases & Storage",
    skills: [
      "Postgres",
      "MySQL",
      "MongoDB",
      "Redis",
      "Firebase",
      "DynamoDB",
      "S3 / Object Storage",
      "Prisma / ORMs",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS",
      "GCP",
      "Azure",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD (GitHub Actions)",
      "Monitoring & Observability",
    ],
  },
  {
    category: "Testing & Quality",
    skills: [
      "Jest",
      "Mocha",
      "Cypress",
      "Playwright",
      "Detox",
      "Unit / Integration / E2E Testing",
    ],
  },
  {
    category: "Architecture & Design",
    skills: [
      "System Design",
      "Microservices",
      "Event-Driven",
      "Domain-Driven Design",
      "Performance Optimization",
      "Security",
    ],
  },
  {
    category: "Tools & Workflow",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Storybook", "Postman", "Swagger"],
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
