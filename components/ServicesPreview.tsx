import Container from "./Container";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

import { Card } from "@/components/ui/card";
import Link from "next/link";

import { BarChart3, Dna, FileText, GraduationCap } from "lucide-react";

export default function ServicesPreview() {
  const services = [
    {
      title: "Data Analysis",
      description:
        "Statistical analysis, interpretation, reporting and visualization support for academic and professional research projects.",
      icon: BarChart3,
    },

    {
      title: "Bioinformatics Support",
      description:
        "Genomics, transcriptomics, sequence analysis and bioinformatics workflows for life science researchers.",
      icon: Dna,
    },

    {
      title: "Research Methodology",
      description:
        "Guidance on research design, sampling techniques, instrument development and study implementation.",
      icon: FileText,
    },

    {
      title: "Academic Research Support",
      description:
        "Proposal development, dissertation support, data interpretation and publication readiness assistance.",
      icon: GraduationCap,
    },
  ];

  return (
    <Section>
      <Container>
        <SectionHeading
          title="Expert Research Support"
          subtitle="Work with our team for support with research methodology, data analysis, bioinformatics, academic writing and publication support."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="
                  p-6
                  md:p-8
                  rounded-3xl
                  border-slate-200
                  transition-all
                  duration-300
                  hover:shadow-xl
                  hover:-translate-y-1
                "
              >
                <div
                  className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-slate-100
                  flex
                  items-center
                  justify-center
                  "
                >
                  <Icon className="w-6 h-6 text-slate-700" />
                </div>

                <h3
                  className="
                  mt-6
                  text-lg
                  md:text-xl
                  font-semibold
                  tracking-tight
                  "
                >
                  {service.title}
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
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="
              inline-flex
              items-center
              justify-center
              px-6
              py-3
              rounded-xl
              bg-slate-900
              text-white
              font-medium
              hover:bg-slate-800
              transition-colors
            "
          >
            View All Services
          </Link>
        </div>
      </Container>
    </Section>
  );
}
