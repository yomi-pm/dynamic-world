import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata = {
  title: "About Research Desk",

  description:
    "Learn about Research Desk's mission to make high-quality research support, knowledge and expertise accessible to every researcher.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-28 bg-gradient-to-b from-slate-50 to-white border-b">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-flex px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium">
              About Research Desk
            </div>

            <h1 className="text-6xl font-bold tracking-tight mt-6">
              Helping Researchers Do Better Research
            </h1>

            <p className="mt-6 text-xl text-slate-600 leading-9">
              Research Desk is a research support platform dedicated to helping
              students, academics and researchers successfully carry out
              high-quality research.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold">Our Mission</h2>

              <p className="mt-6 text-slate-600 leading-8">
                To make high-quality research support, knowledge and expertise
                accessible to every researcher.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">Our Vision</h2>

              <p className="mt-6 text-slate-600 leading-8">
                To become the most trusted research support and knowledge
                platform for researchers in Nigeria and, eventually, across
                Africa.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <h2 className="text-4xl font-bold">Who We Serve</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              "Undergraduate Students",
              "MSc Students",
              "PhD Students",
              "Academic Researchers",
              "Research Professionals",
              "Institutions & Research Teams",
            ].map((item) => (
              <div
                key={item}
                className="
                p-6
                rounded-2xl
                border
                border-slate-200
                bg-white
                "
              >
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="p-12 rounded-3xl bg-slate-50 border">
            <h2 className="text-4xl font-bold">What We Do</h2>

            <p className="mt-6 text-slate-600 leading-8 max-w-3xl">
              Research Desk provides practical resources, guides, tutorials,
              tools and expert support covering every stage of the research
              process — from topic selection and proposal writing to
              methodology, data analysis, bioinformatics, academic writing and
              publication support.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
