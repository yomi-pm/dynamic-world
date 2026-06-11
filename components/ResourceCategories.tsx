import Container from "./Container";
import Section from "./Section";
import Link from "next/link";

export default function ResourceCategories() {
  const categories = [
    {
      title: "Research Topics",
      description:
        "Explore project ideas, objectives, research questions and methodology suggestions.",
      href: "/project-topics",
    },

    {
      title: "Proposal Writing",
      description:
        "Learn how to structure compelling research proposals and concept notes.",
      href: "/resources",
    },

    {
      title: "Literature Review",
      description:
        "Frameworks, strategies and best practices for effective literature reviews.",
      href: "/resources",
    },

    {
      title: "Methodology",
      description:
        "Research design, sampling, data collection and methodological guidance.",
      href: "/resources",
    },

    {
      title: "Data Analysis",
      description:
        "Statistical analysis, interpretation and reporting support for research projects.",
      href: "/resources",
    },

    {
      title: "Bioinformatics",
      description:
        "Resources and expert support for genomics, transcriptomics and sequence analysis.",
      href: "/resources",
    },
  ];

  return (
    <Section>
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="
            text-3xl
            md:text-5xl
            font-bold
            tracking-tight
            "
          >
            Explore Research Resources
          </h2>

          <p
            className="
            mt-4
            text-slate-600
            max-w-2xl
            mx-auto
            leading-7
            "
          >
            Practical resources, guides and expert insights covering every stage
            of the research process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.title} href={category.href} className="group">
              <div
                className="
                h-full
                p-6
                md:p-8
                rounded-3xl
                border
                border-slate-200
                bg-white
                transition-all
                duration-300
                hover:shadow-xl
                hover:-translate-y-1
                "
              >
                <h3
                  className="
                  text-lg
                  md:text-xl
                  font-semibold
                  tracking-tight
                  group-hover:text-teal-700
                  transition-colors
                  "
                >
                  {category.title}
                </h3>

                <p
                  className="
                  mt-4
                  text-slate-600
                  leading-7
                  text-sm
                  md:text-base
                  "
                >
                  {category.description}
                </p>

                <div
                  className="
                  mt-6
                  text-sm
                  font-medium
                  text-teal-700
                  "
                >
                  Explore Resource →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
