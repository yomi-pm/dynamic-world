import type { Metadata } from "next";
import Container from "@/components/Container";
import ResourceCard from "@/components/resources/ResourceCard";
import ResourceCategoryGrid from "@/components/resources/ResourceCategoryGrid";

export const metadata: Metadata = {
  title: "Research Topics",

  description:
    "Explore research topics, project ideas, objectives and methodologies across Public Health, Nursing, Microbiology, Medical Laboratory Science and related disciplines.",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="py-28 bg-gradient-to-b from-slate-50 to-white border-b">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-flex px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium">
              Research Knowledge Hub
            </div>

            <h1 className="text-6xl font-bold tracking-tight mt-6">
              Research Resources
            </h1>

            <p className="mt-6 text-xl text-slate-600 leading-9">
              Explore practical resources, guides, tutorials and tools covering
              every stage of the research process.
            </p>
          </div>
        </Container>
      </section>
      <section className="py-24">
        <Container>
          <div className="mb-12">
            <h2 className="text-4xl font-bold">Browse Resources</h2>

            <p className="mt-4 text-slate-600">
              Explore research resources by category.
            </p>
          </div>

          <ResourceCategoryGrid />
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="mb-12">
            <h2 className="text-4xl font-bold">Browse Methodology Topics</h2>

            <p className="mt-4 text-slate-600">
              Explore essential methodology concepts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard
              title="Research Design"
              description="Understand qualitative, quantitative and mixed methods designs."
              href="/resources/methodology/research-design"
            />

            <ResourceCard
              title="Sampling Methods"
              description="Learn probability and non-probability sampling techniques."
              href="/resources/methodology/sampling-methods"
            />

            <ResourceCard
              title="Data Collection"
              description="Explore questionnaires, interviews and observational methods."
              href="/resources/methodology/data-collection"
            />

            <ResourceCard
              title="Validity & Reliability"
              description="Ensure quality and trustworthiness in research."
              href="/resources/methodology/validity-reliability"
            />

            <ResourceCard
              title="Research Ethics"
              description="Understand ethical considerations in research."
              href="/resources/methodology/research-ethics"
            />

            <ResourceCard
              title="Research Variables"
              description="Independent, dependent and confounding variables."
              href="/resources/methodology/research-variables"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
