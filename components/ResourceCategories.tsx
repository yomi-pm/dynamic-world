import Container from "./Container";
import Section from "./Section";

export default function ResourceCategories() {
  const categories = [
    {
      title: "Research Topics",
      description: "Explore research ideas, objectives and methodologies.",
    },
    {
      title: "Proposal Writing",
      description: "Learn how to develop strong research proposals.",
    },
    {
      title: "Literature Review",
      description: "Frameworks and strategies for effective reviews.",
    },
    {
      title: "Methodology",
      description: "Research design, sampling and methods guidance.",
    },
    {
      title: "Data Analysis",
      description: "Statistical analysis and interpretation resources.",
    },
    {
      title: "Bioinformatics",
      description: "Genomics, transcriptomics and bioinformatics support.",
    },
  ];

  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Explore Research Resources</h2>

          <p className="mt-4 text-slate-600">
            Resources and guides covering every stage of the research process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="
                p-8
                rounded-3xl
                border
                border-slate-200
                bg-white
                hover:shadow-lg
                transition
              "
            >
              <h3 className="text-xl font-semibold">{category.title}</h3>

              <p className="mt-4 text-slate-600">{category.description}</p>

              <div className="mt-6 text-teal-700 text-sm font-medium">
                Explore →
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
