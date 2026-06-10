import Container from "@/components/Container";

export default function ResearchDesignPage() {
  return (
    <Container>
      <section className="py-24">
        <h1 className="text-5xl font-bold">Research Design</h1>

        <p className="mt-6 text-xl text-slate-600 max-w-3xl">
          Research design refers to the overall strategy used to answer research
          questions and achieve research objectives.
        </p>
      </section>

      <section className="pb-24">
        <h2 className="text-3xl font-bold">Types of Research Design</h2>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl border">
            <h3 className="text-xl font-semibold">Quantitative Research</h3>

            <p className="mt-4 text-slate-600">
              Focuses on numerical data and statistical analysis.
            </p>
          </div>

          <div className="p-8 rounded-3xl border">
            <h3 className="text-xl font-semibold">Qualitative Research</h3>

            <p className="mt-4 text-slate-600">
              Explores experiences, perceptions and meanings.
            </p>
          </div>

          <div className="p-8 rounded-3xl border">
            <h3 className="text-xl font-semibold">Mixed Methods</h3>

            <p className="mt-4 text-slate-600">
              Combines qualitative and quantitative approaches.
            </p>
          </div>

          <div className="p-8 rounded-3xl border">
            <h3 className="text-xl font-semibold">Experimental Design</h3>

            <p className="mt-4 text-slate-600">
              Investigates cause-and-effect relationships.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
