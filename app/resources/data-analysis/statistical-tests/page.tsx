import Container from "@/components/Container";

export default function StatisticalTestsPage() {
  return (
    <Container>
      <section className="py-24">
        <h1 className="text-5xl font-bold">Statistical Tests Guide</h1>

        <p className="mt-6 text-xl text-slate-600 max-w-3xl">
          Learn how to choose the right statistical test for your research
          questions and data.
        </p>
      </section>
      <section className="pb-24">
        <h2 className="text-3xl font-bold">Common Statistical Tests</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="p-8 rounded-3xl border">
            <h3 className="text-xl font-semibold">Chi-Square Test</h3>

            <p className="mt-4 text-slate-600">
              Used to examine relationships between categorical variables.
            </p>
          </div>

          <div className="p-8 rounded-3xl border">
            <h3 className="text-xl font-semibold">Independent T-Test</h3>

            <p className="mt-4 text-slate-600">
              Compares means between two independent groups.
            </p>
          </div>

          <div className="p-8 rounded-3xl border">
            <h3 className="text-xl font-semibold">ANOVA</h3>

            <p className="mt-4 text-slate-600">
              Compares means across three or more groups.
            </p>
          </div>

          <div className="p-8 rounded-3xl border">
            <h3 className="text-xl font-semibold">Correlation Analysis</h3>

            <p className="mt-4 text-slate-600">
              Measures the strength of relationships between variables.
            </p>
          </div>
        </div>
      </section>
      <section className="pb-24">
        <div className="p-10 rounded-3xl bg-slate-50 border">
          <h2 className="text-3xl font-bold">Statistical Test Selector</h2>

          <p className="mt-4 text-slate-600">
            Not sure which statistical test to use? Our upcoming Statistical
            Test Selector will help you choose the right test based on your
            research objectives and variables.
          </p>
        </div>
      </section>
      <section className="pb-24">
        <div className="p-10 rounded-3xl bg-slate-900 text-white">
          <h2 className="text-3xl font-bold">
            Need Help Analyzing Research Data?
          </h2>

          <p className="mt-4 text-slate-300">
            Work with our team for statistical analysis, SPSS support, Power BI
            dashboards, interpretation and reporting.
          </p>
        </div>
      </section>
    </Container>
  );
}
