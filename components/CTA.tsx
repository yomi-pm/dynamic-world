import Container from "./Container";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-32 bg-slate-900 text-white">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-5xl font-bold">
            Need Support With Your Research?
          </h2>

          <p className="mt-6 text-slate-300 text-lg">
            Work with our team of specialists for data analysis, bioinformatics,
            methodology support, academic writing and publication assistance.
          </p>

          <Button className="mt-10" variant="secondary">
            Request Consultation
          </Button>
        </div>
      </Container>
    </section>
  );
}
