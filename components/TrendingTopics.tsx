import Link from "next/link";
import { client } from "@/sanity/client";

export default async function TrendingTopics() {
  const topics = await client.fetch(
    `
    *[_type=="projectTopic"]
    | order(likeCount desc)[0...6]{
      _id,
      title,
      category,
      slug,
      likeCount
    }
    `,
  );

  if (!topics?.length) return null;

  return (
    <section className="py-20 border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            🔥 Trending Research Topics
          </h2>

          <p className="mt-3 text-slate-600">
            Discover the research topics getting the most attention from
            students and researchers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic: any, index: number) => (
            <Link
              key={topic._id}
              href={`/project-topics/${topic.slug.current}`}
              className="
                group
                p-6
                rounded-3xl
                border
                border-slate-200
                bg-white
                hover:shadow-lg
                hover:-translate-y-1
                transition-all
              "
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">#{index + 1}</span>

                <span className="text-sm text-slate-500">
                  👍 {topic.likeCount || 0}
                </span>
              </div>

              <div className="mt-4">
                <span
                  className="
                  inline-flex
                  px-3
                  py-1
                  rounded-full
                  bg-teal-50
                  text-teal-700
                  text-xs
                  font-medium
                  "
                >
                  {topic.category}
                </span>
              </div>

              <h3
                className="
                mt-4
                font-semibold
                text-lg
                leading-7
                group-hover:text-teal-700
                transition-colors
                "
              >
                {topic.title}
              </h3>

              <div className="mt-6 text-sm font-medium text-teal-700">
                View Topic →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
