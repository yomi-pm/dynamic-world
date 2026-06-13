import Link from "next/link";

export default function TopicCard({ topic }: any) {
  if (!topic?.slug?.current) {
    return null;
  }

  return (
    <Link href={`/project-topics/${topic.slug.current}`}>
      <article
        className="
        h-full
        min-h-[320px]
        bg-white
        border
        border-slate-200
        rounded-3xl
        p-8
        flex
        flex-col
        justify-between
        hover:shadow-lg
        hover:-translate-y-1
        transition-all
        duration-300
        "
      >
        <div className="mb-4">
          <span
            className="
            text-xs
            font-medium
            text-teal-700
            bg-teal-50
            px-3
            py-1
            rounded-full
            "
          >
            {topic.category}
          </span>
        </div>

        <h2
          className="
          text-xl
          font-semibold
          leading-8
          "
        >
          {topic.title}
        </h2>

        <p
          className="
          mt-4
          text-slate-600
          line-clamp-3
          "
        >
          {topic.background}
        </p>

        <div
          className="
  mt-5
  flex
  items-center
  justify-between
  "
        >
          <span
            className="
    text-sm
    text-slate-500
    "
          >
            👍 {topic.likeCount || 0} Likes
          </span>

          <span
            className="
    text-sm
    font-medium
    text-teal-700
    "
          >
            View Topic →
          </span>
        </div>

        <div className="mt-6 text-sm font-medium text-teal-700">
          View Topic →
        </div>
      </article>
    </Link>
  );
}
