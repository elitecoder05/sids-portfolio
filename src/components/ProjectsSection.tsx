import mobizoImg1 from "../../mobizo.png";
import mobizoImg2 from "../../mobizo2.png";
import flitzyImg from "../../flitzy.png";
import vignansImg from "../../vignans.png";
import upcImg from "../../upc profiles.png";

const projects = [
  {
    label: "Mobile Development",
    title: "Mobizo — 12 Shipped Projects",
    role: "Software Developer",
    description:
      "Built 12 full-scale projects from the ground up. Owned the entire lifecycle — repository setup, architecture, development, testing, and deployment.",
    highlights: [
      "Architected scalable app structure supporting complex business logic",
      "Integrated RESTful APIs with optimized data fetching and caching",
      "Managed full deployment pipeline for both iOS and Android",
      "Owned everything — not contributing to an existing codebase, building from zero",
    ],
    tech: [
      "React Native",
      "React",
      "TypeScript",
      "JavaScript",
      "iOS",
      "Android",
      "Node.js",
      "Express",
      "GraphQL",
      "REST APIs",
      "Postgres",
      "MongoDB",
      "Redis",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "AWS",
      "Firebase",
      "Testing (Jest / Detox)",
      "State Management (Redux / Zustand)",
      "ORM (Prisma / TypeORM)",
    ],
    images: [mobizoImg1, mobizoImg2],
  },
  {
    label: "Founding Engineer",
    title: "Flitzy — Core Mobile Infrastructure",
    role: "Founding Software Engineer",
    description:
      "Joined as a founding engineer and built the core mobile app infrastructure from scratch. Developed all mobile screens and worked directly with the backend team on API optimization and system design.",
    highlights: [
      "Built complete mobile app architecture as founding team member",
      "Developed all user-facing screens and interaction flows",
      "Collaborated on API contract design for optimal mobile performance",
      "Made critical early-stage engineering decisions that shaped the product",
    ],
    tech: [
      "React Native",
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express",
      "Postgres",
      "MongoDB",
      "Redis",
      "Docker",
      "Kubernetes",
      "GraphQL",
      "REST APIs",
      "AWS / GCP",
      "Auth (OAuth / JWT)",
      "CI/CD",
      "Observability",
      "Performance",
    ],
    images: [flitzyImg],
  },
  {
    label: "Client Work",
    title: "Vignan Institute of Information Technology",
    role: "Contract Developer",
    description:
      "Delivered production systems for an institutional client managing thousands of users — a mobile analytics app for administrators and a full-stack assessment platform.",
    highlights: [
      "Vignan Insights: Mobile app enabling administrators to analyze student feedback and make data-driven decisions",
      "Assessment Portal: Full-stack platform with online exams, anti-cheating measures, and auto-generated PDF performance reports",
      "Both systems deployed and actively used across the institution",
    ],
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Postgres",
      "Redis",
      "Docker",
      "Auth",
      "PDF Generation (Puppeteer / PDFKit)",
      "Accessibility",
      "Testing",
      "CI/CD",
      "Security",
    ],
    images: [vignansImg],
  },
  {
    label: "Business Software",
    title: "Accounting Software — UPC Window Businesses",
    role: "Developer",
    description:
      "Built and maintained accounting software used daily across multiple UPC window profile businesses in Hyderabad. This is production software handling real financial operations.",
    highlights: [
      "Manages invoicing, inventory tracking, and financial reporting",
      "Used by multiple businesses for day-to-day operations",
      "Built for reliability — handles real money and business-critical workflows",
      "Ongoing maintenance and feature additions based on business needs",
    ],
    tech: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express",
      "Postgres",
      "MySQL",
      "MongoDB",
      "SQL",
      "Accounting Domain Logic",
      "Payments",
      "Reporting",
      "PDF Generation",
      "Docker",
      "CI/CD",
      "Unit & Integration Testing",
    ],
    images: [upcImg],
  },
];

export function ProjectsSection() {
  return (
    <section id="work" className="bg-surface">
      <div className="section-container">
        <p className="section-label">Proof of Work</p>
        <h2 className="section-title mb-12">Shipped. Deployed. Used.</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="project-card flex flex-col">
              {project.images && project.images.length > 0 && (
                <div className="mb-4 w-full flex items-center justify-center gap-4">
                  {project.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center bg-white border border-border rounded-lg overflow-hidden shadow-sm p-2"
                    >
                      <img
                        src={img}
                        alt={`${project.title} logo ${idx + 1}`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              )}
              <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                {project.label}
              </span>
              <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-foreground/80">
                    <span className="text-accent mt-1 shrink-0">—</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                {project.tech.map((t) => (
                  <span key={t} className="skill-tag text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
