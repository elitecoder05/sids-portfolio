import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { LeadershipSection } from "@/components/LeadershipSection";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sidharth Varma Gurijala — React Native Developer" },
      {
        name: "description",
        content:
          "Production-grade mobile apps built from scratch. React Native specialist with shipped apps, real business impact, and end-to-end ownership.",
      },
      { property: "og:title", content: "Sidharth Varma Gurijala — React Native Developer" },
      {
        property: "og:description",
        content:
          "I build production-grade mobile apps from scratch. 2 shipped apps, 3 production systems.",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Navbar />
      <main className="pt-14">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <LeadershipSection />
        <ContactSection />
      </main>
      <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        <div className="section-container py-0">
          Sidharth Varma Gurijala — Built with precision.
        </div>
      </footer>
    </>
  );
}
