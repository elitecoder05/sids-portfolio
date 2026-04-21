export function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="section-container w-full">
        <div className="max-w-3xl">
          <p className="section-label mb-4">Sidharth Varma Gurijala</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-foreground">
            I build production-grade mobile apps from scratch.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            React Native specialist. 2 shipped apps, 3 production systems, real business impact. Architecture to deployment — I own the entire stack.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-foreground/20 bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-16 flex gap-10 text-sm text-muted-foreground">
            <div>
              <span className="stat-number text-2xl">2</span>
              <p className="mt-1">Shipped Apps</p>
            </div>
            <div>
              <span className="stat-number text-2xl">3</span>
              <p className="mt-1">Production Systems</p>
            </div>
            <div>
              <span className="stat-number text-2xl">400+</span>
              <p className="mt-1">Developers Mentored</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
