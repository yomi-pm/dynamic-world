import Container from "./Container";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function FeaturedResources() {
  const resources = [
    {
      title: "Public Health Research Topics",
      description:
        "Explore high-quality research topics, objectives and methodology ideas for public health projects.",
      href: "/project-topics",
    },

    {
      title: "Statistical Test Guide",
      description:
        "Understand when to use Chi-Square, t-tests, ANOVA, Correlation and Regression in research.",
      href: "/resources",
    },

    {
      title: "Research Proposal Templates",
      description:
        "Access practical proposal structures and examples to guide your research writing.",
      href: "/resources",
    },
  ];

  return (
    <Section>
      <Container>
        <SectionHeading
          title="Featured Research Resources"
          subtitle="Explore some of our most popular resources designed to support every stage of the research process."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <Link key={resource.title} href={resource.href} className="group">
              <Card
                className="
                h-full
                p-5
                md:p-7
                rounded-3xl
                border-slate-200
                transition-all
                duration-300
                hover:shadow-lg
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
                  {resource.title}
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
                  {resource.description}
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
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
