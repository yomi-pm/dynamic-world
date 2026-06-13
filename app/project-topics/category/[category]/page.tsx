import { client } from "@/sanity/client";
import TopicCard from "@/components/project-topics/TopicCard";
import Pagination from "@/components/project-topics/Pagination";
import Container from "@/components/Container";
import Link from "next/link";
import { categories } from "@/lib/categories";

const PAGE_SIZE = 12;

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: any) {
  const { category } = await params;

  const categoryData = categories.find((c) => c.slug === category);

  return {
    title: `${categoryData?.title} Research Topics for Undergraduate and Postgraduate Students | Research Desk`,

    description: `Explore ${categoryData?.title} research topics, project ideas, objectives and methodology suggestions for students and researchers.`,

    alternates: {
      canonical: `/project-topics/category/${category}`,
    },
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { category } = await params;

  const resolvedSearchParams = await searchParams;

  const page = Number(resolvedSearchParams.page || "1");

  const start = (page - 1) * PAGE_SIZE;

  const totalTopics = await client.fetch(
    `
    count(
      *[
        _type=="projectTopic" &&
        category==$category
      ]
    )
    `,
    {
      category,
    },
  );

  const totalPages = Math.ceil(totalTopics / PAGE_SIZE);

  const topics = await client.fetch(
    `
    *[
      _type=="projectTopic" &&
      category==$category
    ]
    | order(title asc)
    [$start...$end]{
      _id,
      title,
      category,
      background,
      slug,
      likeCount
    }
    `,
    {
      category,
      start,
      end: start + PAGE_SIZE,
    },
  );

  const categoryData = categories.find((c) => c.slug === category);

  const relatedCategories = categories.filter((c) => c.slug !== category);

  return (
    <Container>
      {/* HERO */}

      <section className="py-12 md:py-20">
        <div className="max-w-4xl">
          <div className="inline-flex px-4 py-2 rounded-full bg-slate-100 text-sm">
            Research Topics
          </div>

          <h1
            className="
            mt-6
            text-3xl
            md:text-5xl
            font-bold
            tracking-tight
            leading-tight
            "
          >
            {categoryData?.title} Research Topics
          </h1>

          <p
            className="
            mt-6
            text-lg
            text-slate-600
            leading-8
            "
          >
            {categoryData?.description}
          </p>

          <p className="mt-6 text-sm text-slate-500">
            {totalTopics} research topics available
          </p>
        </div>
      </section>

      {/* SEO CONTENT */}

      <section className="pb-12">
        <div className="max-w-4xl text-slate-700 leading-8 space-y-6">
          <p>
            Browse our collection of {categoryData?.title.toLowerCase()}{" "}
            research topics designed for undergraduate, postgraduate and
            academic research projects. These topics can help students identify
            relevant research areas, formulate objectives, develop research
            questions and select appropriate methodologies.
          </p>

          <p>
            Whether you are preparing a final year project, dissertation, thesis
            or independent research study, these topics provide inspiration and
            direction for developing a strong research proposal.
          </p>
        </div>
      </section>

      {/* TOPICS */}

      <section className="pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {topics.map((topic: any) => (
            <TopicCard key={topic._id} topic={topic} />
          ))}
        </div>

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          basePath={`/project-topics/category/${category}`}
        />
      </section>

      {/* RELATED CATEGORIES */}

      <section className="pb-24">
        <h2 className="text-2xl font-bold">Explore Other Categories</h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {relatedCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/project-topics/category/${category.slug}`}
              className="
                px-4
                py-2
                rounded-full
                bg-slate-100
                hover:bg-slate-200
                transition
              "
            >
              {category.title}
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
}
