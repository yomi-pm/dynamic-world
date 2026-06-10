import Container from "./Container";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { Card } from "@/components/ui/card";

export default function FeaturedResources() {
  const resources = [
    {
      title: "Public Health Project Topics",
      description:
        "Explore research topics for undergraduate and postgraduate studies.",
    },
    {
      title: "Statistical Test Guide",
      description:
        "Learn when to use Chi-Square, ANOVA, Correlation and Regression.",
    },
    {
      title: "Research Proposal Templates",
      description: "Ready-to-use proposal structures and examples.",
    },
  ];

  return (
    <Section>
      <Container>
        <SectionHeading
          title="Featured Research Resources"
          subtitle="Explore some of our most popular research resources and guides."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <Card key={resource.title} className="p-6 rounded-2xl">
              <h3 className="font-semibold text-xl">{resource.title}</h3>

              <p className="mt-4 text-slate-600">{resource.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
