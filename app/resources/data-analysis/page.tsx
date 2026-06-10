import Container from "@/components/Container";
import ResourceCard from "@/components/resources/ResourceCard";

export default function DataAnalysisPage() {
  return (
    <>
      <section className="py-28 bg-gradient-to-b from-slate-50 to-white border-b">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-flex px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium">
              Data Analysis Resources
            </div>

            <h1 className="text-6xl font-bold tracking-tight mt-6">
              Data Analysis Resources
            </h1>

            <p className="mt-6 text-xl text-slate-600 leading-9">
              Learn statistical analysis, data cleaning, visualization and
              interpretation for academic and research projects.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="mb-12">
            <h2 className="text-4xl font-bold">Browse Data Analysis Topics</h2>

            <p className="mt-4 text-slate-600">
              Practical resources for research data analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard
              title="Statistical Tests"
              description="Learn when and how to use common statistical tests."
              href="/resources/data-analysis/statistical-tests"
            />

            <ResourceCard
              title="Data Cleaning"
              description="Prepare and clean research data for analysis."
              href="/resources/data-analysis/data-cleaning"
            />

            <ResourceCard
              title="Survey Data Analysis"
              description="Analyze questionnaire and survey data effectively."
              href="/resources/data-analysis/survey-analysis"
            />

            <ResourceCard
              title="Descriptive Statistics"
              description="Summarize and explore research data."
              href="/resources/data-analysis/descriptive-statistics"
            />

            <ResourceCard
              title="Data Visualization"
              description="Create charts and visuals that communicate insights."
              href="/resources/data-analysis/data-visualization"
            />

            <ResourceCard
              title="Power BI for Research"
              description="Build dashboards and research reports."
              href="/resources/data-analysis/power-bi"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
