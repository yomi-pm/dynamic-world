import Container from "./Container";
import Section from "./Section";

export default function HowItHelps() {
  const items = [
    {
      title: "Learn",
      description: "Access practical guides, tutorials and research resources.",
    },

    {
      title: "Conduct",
      description:
        "Get support with methodology, data collection and analysis.",
    },

    {
      title: "Publish",
      description: "Improve academic writing and publication success.",
    },
  ];

  return (
    <Section>
      <Container>
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">How Research Desk Helps</h2>

          <p className="mt-4 text-slate-600">
            Support for every stage of the research journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="
              p-8
              rounded-3xl
              border
              border-slate-200
              bg-white
              "
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>

              <p className="mt-4 text-slate-600 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
