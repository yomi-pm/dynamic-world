import { client } from "@/sanity/client";
import TopicSection from "@/components/project-topics/TopicSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const topic = await client.fetch(
    `
    *[
      _type=="projectTopic" &&
      slug.current==$slug
    ][0]{
      title,
      background
    }
    `,
    { slug },
  );

  if (!topic) {
    return {
      title: "Research Topic Not Found",
    };
  }

  return {
    title: topic.title,
    description: topic.background?.slice(0, 160),
  };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const topic = await client.fetch(
    `
    *[
      _type=="projectTopic" &&
      slug.current==$slug
    ][0]{
      title,
      category,
      background,
      objectives,
      researchQuestions,
      methodology,
      keywords,
      researchArea,
      sampleSuggestion
    }
    `,
    { slug },
  );

  if (!topic) {
    return (
      <div className="max-w-4xl mx-auto py-24 px-6">
        <h1 className="text-4xl font-bold">Topic Not Found</h1>

        <p className="mt-4 text-slate-600">
          The requested research topic could not be found.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      {/* CATEGORY BADGE */}

      <div className="mb-6">
        <span
          className="
          inline-flex
          bg-teal-50
          text-teal-700
          px-4
          py-2
          rounded-full
          text-sm
          font-medium
          "
        >
          {topic.category}
        </span>
      </div>

      {/* TITLE */}

      <h1
        className="
        text-5xl
        md:text-6xl
        font-bold
        tracking-tight
        leading-tight
        "
      >
        {topic.title}
      </h1>

      {/* META INFO */}

      <div
        className="
        flex
        flex-wrap
        gap-4
        mt-10
        "
      >
        {topic.researchArea && (
          <div
            className="
            px-4
            py-2
            rounded-xl
            bg-slate-100
            text-sm
            "
          >
            {topic.researchArea}
          </div>
        )}

        <div
          className="
          px-4
          py-2
          rounded-xl
          bg-slate-100
          text-sm
          "
        >
          {topic.objectives?.length || 0} Objectives
        </div>

        <div
          className="
          px-4
          py-2
          rounded-xl
          bg-slate-100
          text-sm
          "
        >
          {topic.researchQuestions?.length || 0} Research Questions
        </div>
      </div>

      {/* BACKGROUND */}

      <TopicSection title="Background">
        <p className="leading-8 text-slate-700">{topic.background}</p>
      </TopicSection>

      {/* OBJECTIVES */}

      {topic.objectives?.length > 0 && (
        <TopicSection title="Research Objectives">
          <ul className="space-y-4">
            {topic.objectives.map((objective: string, index: number) => (
              <li
                key={index}
                className="
                  p-5
                  rounded-2xl
                  bg-slate-50
                  border
                  border-slate-200
                  "
              >
                {objective}
              </li>
            ))}
          </ul>
        </TopicSection>
      )}

      {/* QUESTIONS */}

      {topic.researchQuestions?.length > 0 && (
        <TopicSection title="Research Questions">
          <ul className="space-y-4">
            {topic.researchQuestions.map((question: string, index: number) => (
              <li
                key={index}
                className="
                  p-5
                  rounded-2xl
                  bg-slate-50
                  border
                  border-slate-200
                  "
              >
                {question}
              </li>
            ))}
          </ul>
        </TopicSection>
      )}

      {/* METHODOLOGY */}

      {topic.methodology && (
        <TopicSection title="Suggested Methodology">
          <div
            className="
            p-6
            rounded-3xl
            bg-slate-50
            border
            border-slate-200
            "
          >
            <p className="leading-8">{topic.methodology}</p>
          </div>
        </TopicSection>
      )}

      {/* SAMPLE SIZE */}

      {topic.sampleSuggestion && (
        <TopicSection title="Suggested Sample">
          <div
            className="
            p-6
            rounded-3xl
            bg-slate-50
            border
            border-slate-200
            "
          >
            {topic.sampleSuggestion}
          </div>
        </TopicSection>
      )}

      {/* KEYWORDS */}

      {topic.keywords?.length > 0 && (
        <TopicSection title="Keywords">
          <div
            className="
            flex
            flex-wrap
            gap-3
            "
          >
            {topic.keywords.map((keyword: string, index: number) => (
              <span
                key={index}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-slate-100
                  text-sm
                  "
              >
                {keyword}
              </span>
            ))}
          </div>
        </TopicSection>
      )}

      {/* CTA */}

      <section
        className="
        mt-24
        p-10
        rounded-3xl
        bg-slate-900
        text-white
        "
      >
        <h2 className="text-3xl font-bold">Need Help With Data Analysis?</h2>

        <p className="mt-4 text-slate-300 leading-8">
          Get support with statistical analysis, dashboards, interpretation,
          Chapter 4 reporting, and public health research analytics.
        </p>

        <button
          className="
          mt-8
          bg-white
          text-slate-900
          px-6
          py-3
          rounded-xl
          font-medium
          "
        >
          Request Consultation
        </button>
      </section>
    </div>
  );
}
