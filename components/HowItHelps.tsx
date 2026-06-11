import Container from "./Container";
import Section from "./Section";

export default function HowItHelps() {
  const items = [
    {
      number: "01",
      title: "Learn",
      description:
        "Access practical research guides, tutorials, templates and educational resources designed to build your research skills.",
    },

    {
      number: "02",
      title: "Conduct",
      description:
        "Get support with topic development, methodology, data collection, statistical analysis and bioinformatics workflows.",
    },

    {
      number: "03",
      title: "Publish",
      description:
        "Improve academic writing, manuscript preparation and publication readiness with expert guidance.",
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
            How Research Desk Helps
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
            Practical support and trusted resources for every stage of the
            research journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="
              p-6
              md:p-8
              rounded-3xl
              border
              border-slate-200
              bg-white
              transition-all
              duration-300
              hover:shadow-lg
              hover:-translate-y-1
              "
            >
              <div
                className="
                text-sm
                font-semibold
                text-teal-700
                tracking-wider
                "
              >
                {item.number}
              </div>

              <h3
                className="
                mt-4
                text-xl
                md:text-2xl
                font-semibold
                tracking-tight
                "
              >
                {item.title}
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
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
