export function LeadershipSection() {
  return (
    <section id="leadership">
      <div className="section-container">
        <p className="section-label">Leadership & Authority</p>
        <h2 className="section-title mb-12">Beyond Code</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="project-card text-center">
            <div className="stat-number mb-2">400+</div>
            <p className="text-sm font-semibold text-foreground mb-1">Developers Mentored</p>
            <p className="text-sm text-muted-foreground">
              In mobile app development through hands-on workshops and technical sessions
            </p>
          </div>
          <div className="project-card text-center">
            <div className="stat-number mb-2">3</div>
            <p className="text-sm font-semibold text-foreground mb-1">Production Systems</p>
            <p className="text-sm text-muted-foreground">
              Built for institutional use — handling real users and real operations
            </p>
          </div>
          <div className="project-card text-center">
            <div className="stat-number mb-2">150+</div>
            <p className="text-sm font-semibold text-foreground mb-1">DSA Problems Solved</p>
            <p className="text-sm text-muted-foreground">
              Strong engineering fundamentals backing every architectural decision
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex gap-3 items-start">
            <span className="text-accent font-bold text-lg leading-none mt-0.5">01</span>
            <p className="text-sm text-foreground/80">
              Led app development initiatives across developer communities
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-accent font-bold text-lg leading-none mt-0.5">02</span>
            <p className="text-sm text-foreground/80">
              Conducted hands-on React Native workshops for aspiring developers
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-accent font-bold text-lg leading-none mt-0.5">03</span>
            <p className="text-sm text-foreground/80">
              Led technical communities and engineering initiatives
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
