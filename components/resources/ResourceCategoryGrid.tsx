import Link from "next/link";

export default function ResourceCategoryGrid() {
  const categories = [
    {
      title: "Research Topics",
      description: "Research ideas, objectives and methodologies.",
      href: "/project-topics",
    },

    {
      title: "Proposal Writing",
      description: "Learn how to write strong research proposals.",
      href: "/resources",
    },

    {
      title: "Literature Review",
      description: "Frameworks and practical review strategies.",
      href: "/resources",
    },

    {
      title: "Methodology",
      description: "Research design, sampling and data collection.",
      href: "/resources/methodology",
    },

    {
      title: "Data Analysis",
      description: "Statistics, interpretation and visualization.",
      href: "/resources/data-analysis",
    },

    {
      title: "Bioinformatics",
      description: "Genomics, transcriptomics and omics analysis.",
      href: "/resources",
    },

    {
      title: "Publication Support",
      description: "Publishing strategies and journal selection.",
      href: "/resources",
    },

    {
      title: "Academic Writing",
      description: "Improve clarity, structure and scientific writing.",
      href: "/resources",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Link key={category.title} href={category.href}>
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
            <h3 className="text-xl font-semibold">{category.title}</h3>

            <p className="mt-4 text-slate-600">{category.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
