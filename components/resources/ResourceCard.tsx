import Link from "next/link";

export default function ResourceCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div
        className="
        h-full
        p-8
        rounded-3xl
        border
        border-slate-200
        bg-white
        hover:shadow-lg
        transition
        "
      >
        <h3 className="text-xl font-semibold">{title}</h3>

        <p className="mt-4 text-slate-600">{description}</p>

        <div className="mt-6 text-teal-700 text-sm font-medium">Explore →</div>
      </div>
    </Link>
  );
}
