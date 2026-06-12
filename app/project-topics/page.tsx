import Container from "@/components/Container";
import ProjectTopicsHero from "@/components/project-topics/ProjectTopicsHero";
import CategoryFilter from "@/components/project-topics/CategoryFilter";
import FeaturedTopics from "@/components/project-topics/FeaturedTopics";
import TopicCard from "@/components/project-topics/TopicCard";
import Pagination from "@/components/project-topics/Pagination";
import { client } from "@/sanity/client";

const PAGE_SIZE = 12;

export default async function ProjectTopicsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const resolvedSearchParams = await searchParams;

  const page = Number(resolvedSearchParams.page || "1");

  const start = (page - 1) * PAGE_SIZE;

  const totalTopics = await client.fetch(`count(*[_type=="projectTopic"])`);

  const totalPages = Math.ceil(totalTopics / PAGE_SIZE);

  const topics = await client.fetch(
    `
    *[_type=="projectTopic"]
    | order(_createdAt desc)
    [$start...$end]{
      _id,
      title,
      category,
      background,
      slug
    }
    `,
    {
      start,
      end: start + PAGE_SIZE,
    },
  );

  return (
    <>
      <ProjectTopicsHero />

      <Container>
        <CategoryFilter />

        <FeaturedTopics />

        {/* TOPICS */}

        <section className="pb-20">
          <div className="mb-8">
            <p className="text-slate-500">
              {totalTopics} research topics available
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {topics.map((topic: any) => (
              <TopicCard key={topic._id} topic={topic} />
            ))}
          </div>

          <Pagination
            currentPage={page}
            totalPages={totalPages}
            basePath="/project-topics"
          />
        </section>
      </Container>
    </>
  );
}
