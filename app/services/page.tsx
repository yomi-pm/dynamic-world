import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Research Support Services",

  description:
    "Expert support for research topic development, proposal writing, methodology, data analysis, bioinformatics, academic writing and publication support.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Research Topic Development",
      description:
        "Get help identifying relevant, researchable and impactful project topics.",
    },

    {
      title: "Proposal Writing",
      description:
        "Support with proposal development, structure, objectives and methodology.",
    },

    {
      title: "Research Methodology",
      description:
        "Guidance on research design, sampling techniques, instruments and study methods.",
    },

    {
      title: "Data Analysis",
      description:
        "Statistical analysis, interpretation, dashboards and reporting using SPSS, Excel and Power BI.",
    },

    {
      title: "Bioinformatics Support",
      description:
        "Assistance with genomics, transcriptomics, sequence analysis and bioinformatics workflows.",
    },

    {
      title: "Academic Writing & Editing",
      description:
        "Improve clarity, structure and quality of academic manuscripts and reports.",
    },

    {
      title: "Publication Support",
      description:
        "Support with manuscript preparation, journal selection and publication readiness.",
    },

    {
      title: "Research Training",
      description:
        "Workshops and capacity-building programs for students, researchers and institutions.",
    },
  ];

  return (
    <>
      <section className="py-28 bg-gradient-to-b from-slate-50 to-white border-b">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-flex px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium">
              Expert Research Support
            </div>

            <h1 className="text-6xl font-bold tracking-tight mt-6">
              Research Support Services
            </h1>

            <p className="mt-6 text-xl text-slate-600 leading-9">
              Work with our team for expert support across every stage of the
              research process.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="
                p-8
                rounded-3xl
                border
                border-slate-200
                bg-white
                "
              >
                <h2 className="text-2xl font-semibold">{service.title}</h2>

                <p className="mt-4 text-slate-600 leading-7">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="p-12 rounded-3xl bg-slate-900 text-white">
            <h2 className="text-4xl font-bold">
              Need Support With Your Research?
            </h2>

            <p className="mt-6 text-slate-300 max-w-2xl">
              Whether you're working on a project, dissertation, thesis or
              publication, we are here to help.
            </p>

            <button
              className="
              mt-8
              px-6
              py-3
              bg-white
              text-slate-900
              rounded-xl
              font-medium
              "
            >
              Contact Us
            </button>
          </div>
        </Container>
      </section>
    </>
  );
}
