import Link from "next/link";

export default function CategoryFilter() {
  const categories = [
    {
      label: "All Topics",
      href: "/project-topics",
    },
    {
      label: "Public Health",
      href: "/project-topics/category/public-health",
    },
    {
      label: "Nursing",
      href: "/project-topics/category/nursing",
    },
    {
      label: "Microbiology",
      href: "/project-topics/category/microbiology",
    },
    {
      label: "Bioinformatics",
      href: "/project-topics/category/bioinformatics",
    },
    {
      label: "Medical Laboratory Science",
      href: "/project-topics/category/medical-laboratory-science",
    },
    {
      label: "Education",
      href: "/project-topics/category/education",
    },
  ];

  return (
    <div className="py-10">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Link
            key={category.href}
            href={category.href}
            className="
              px-5
              py-2.5
              rounded-full
              border
              border-slate-200
              bg-white
              text-sm
              font-medium
              text-slate-700
              hover:bg-slate-50
              hover:border-slate-300
              hover:text-slate-900
              transition-all
              duration-200
            "
          >
            {category.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
