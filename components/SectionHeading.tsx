export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-3xl mb-12">

      <h2 className="text-4xl font-bold tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="text-slate-600 mt-4 text-lg">
          {subtitle}
        </p>
      )}

    </div>
  );
}