import Container from "./Container";

export default function TrustBar() {
  const items = [
    "Research Topics",
    "Methodology",
    "Data Analysis",
    "Bioinformatics",
    "Academic Writing",
    "Publication Support",
  ];

  return (
    <section className="border-y bg-slate-50">
      <Container>
        <div className="py-8 flex flex-wrap justify-center gap-10 text-sm font-medium text-slate-600">
          {items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </Container>
    </section>
  );
}
