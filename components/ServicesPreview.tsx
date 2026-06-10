import Container from "./Container";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

import { Card } from "@/components/ui/card";

import { BarChart3, HeartPulse, LineChart, GraduationCap } from "lucide-react";

export default function ServicesPreview() {
  const services = [
    {
      title: "Research Analytics",
      description:
        "Transform raw research data into actionable insights through statistical analysis, interpretation, and reporting.",
      icon: BarChart3,
    },

    {
      title: "Public Health Analytics",
      description:
        "Survey analysis, monitoring & evaluation reporting, and public health intelligence for healthcare research projects.",
      icon: HeartPulse,
    },

    {
      title: "Data Visualization",
      description:
        "Interactive dashboards and publication-ready visualizations using Power BI and modern reporting tools.",
      icon: LineChart,
    },

    {
      title: "Dissertation Support",
      description:
        "End-to-end academic research support including proposal development, data analysis, and interpretation.",
      icon: GraduationCap,
    },
  ];

  return (
    <Section>
      <Container>
        <SectionHeading
          title="Expert Research Support"
          subtitle="Work with our team for support with research design, methodology, data analysis, bioinformatics, academic writing and publication support."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="
                  p-8
                  rounded-3xl
                  border-slate-200
                  hover:shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-slate-700" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
