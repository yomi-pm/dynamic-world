import Container from "@/components/Container";

export default function FeaturedResourcesSection() {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <h2 className="text-4xl font-bold">Featured Resources</h2>

        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          <div className="p-8 rounded-3xl bg-white border">
            <h3 className="font-semibold text-xl">
              Public Health Research Topics
            </h3>
          </div>

          <div className="p-8 rounded-3xl bg-white border">
            <h3 className="font-semibold text-xl">
              Statistical Test Selection Guide
            </h3>
          </div>

          <div className="p-8 rounded-3xl bg-white border">
            <h3 className="font-semibold text-xl">
              Research Proposal Template
            </h3>
          </div>
        </div>
      </Container>
    </section>
  );
}
