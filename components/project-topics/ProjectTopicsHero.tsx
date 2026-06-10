import Container from "@/components/Container";

export default function ProjectTopicsHero() {
  return (
    <section
      className="
      py-32
      border-b
      bg-gradient-to-b
      from-slate-50
      to-white
      "
    >
      <Container>
        <div className="max-w-4xl">
          <div className="inline-flex rounded-full bg-teal-50 text-teal-700 px-4 py-2 text-sm font-medium">
            Research Topic Database
          </div>

          <h1
            className="
            text-6xl
            font-bold
            tracking-tight
            mt-6
            max-w-4xl
            "
          >
            Discover Research Topics, Objectives & Methodologies
          </h1>

          <p
            className="
  mt-8
  text-xl
  text-slate-600
  leading-9
  max-w-3xl
  "
          >
            Explore research ideas across Public Health, Nursing, Microbiology,
            Bioinformatics, Education and more.
          </p>
          <div className="flex gap-12 mt-12">
            <div>
              <div className="text-3xl font-bold">500+</div>

              <div className="text-slate-500">Research Topics</div>
            </div>

            <div>
              <div className="text-3xl font-bold">50+</div>

              <div className="text-slate-500">Templates</div>
            </div>

            <div>
              <div className="text-3xl font-bold">20+</div>

              <div className="text-slate-500">Statistical Guides</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
