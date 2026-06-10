import Container from "./Container";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";

export default function FeaturedCaseStudy() {
  return (
    <Section>

      <Container>

        <SectionHeading
          title="Featured Case Study"
          subtitle="A demonstration of how data can be transformed into actionable public health insights."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-center bg-slate-50 rounded-3xl p-10">

          <div>

            <div className="text-sm text-teal-700 font-medium">
              Public Health Analytics
            </div>

            <h3 className="text-3xl font-bold mt-4">
              Immunization Uptake Analysis
            </h3>

            <p className="mt-6 text-slate-600 leading-8">
              Survey analysis of immunization uptake,
              awareness, perception and barriers
              among mothers of under-five children.
            </p>

            <Button className="mt-8">
              View Case Study
            </Button>

          </div>

          <div className="h-72 rounded-2xl bg-white border">
            {/* screenshot later */}
          </div>

        </div>

      </Container>

    </Section>
  );
}