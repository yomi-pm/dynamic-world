export default function TopicSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>

      {children}
    </section>
  );
}
