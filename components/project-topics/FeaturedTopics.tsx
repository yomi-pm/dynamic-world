import Link from "next/link";
import { Card } from "@/components/ui/card";
import { client } from "@/sanity/client";

export default async function FeaturedTopics() {
  const topics = await client.fetch(
    `
    *[_type=="projectTopic"]
    | order(likeCount desc)[0...3]{
      _id,
      title,
      category,
      background,
      slug,
      likeCount
    }
    `,
  );

  if (!topics?.length) return null;

  return (
    <section className="pb-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">🔥 Most Popular Topics</h2>

        <p className="text-slate-600 mt-2">
          The most liked research topics on Research Desk.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {topics.map((topic: any) => (
          <Link key={topic._id} href={`/project-topics/${topic.slug.current}`}>
            <Card
              className="
                h-full
                p-8
                rounded-3xl
                border-slate-200
                hover:shadow-lg
                hover:-translate-y-1
                transition-all
                duration-300
                cursor-pointer
              "
            >
              <div className="flex items-center justify-between">
                <span
                  className="
                  text-teal-700
                  text-sm
                  font-medium
                  "
                >
                  {topic.category}
                </span>

                <span
                  className="
                  text-sm
                  text-slate-500
                  "
                >
                  👍 {topic.likeCount || 0}
                </span>
              </div>

              <h3
                className="
                text-xl
                font-semibold
                mt-4
                line-clamp-3
                "
              >
                {topic.title}
              </h3>

              <p
                className="
                mt-4
                text-slate-600
                line-clamp-4
                "
              >
                {topic.background}
              </p>

              <div
                className="
                mt-6
                text-sm
                font-medium
                text-teal-700
                "
              >
                View Topic →
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
