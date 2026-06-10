import { client } from "@/sanity/client";
import TopicCard from "@/components/project-topics/TopicCard";
import Container from "@/components/Container";
import { categories } from "@/lib/categories";

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: any) {
  const { category } = await params;

  const categoryData = categories.find((c) => c.slug === category);

  return {
    title: `${categoryData?.title} Research Topics`,
    description: categoryData?.description,
  };
}

export default async function CategoryPage({ params }: any) {
  const { category } = await params;

  const topics = await client.fetch(
    `
    *[
      _type=="projectTopic" &&
      category==$category
    ]{
      _id,
      title,
      category,
      background,
      slug
    }
    `,
    {
      category,
    },
  );

  const categoryData = categories.find((c) => c.slug === category);

  return (
    <Container>
      <section className="py-20">
        <h1 className="text-5xl font-bold">
          {categoryData?.title} Research Topics
        </h1>

        <p className="mt-4 text-xl text-slate-600">
          {categoryData?.description}
        </p>
      </section>

      <div className="grid lg:grid-cols-3 gap-8 pb-24">
        {topics.map((topic: any) => (
          <TopicCard key={topic._id} topic={topic} />
        ))}
      </div>
    </Container>
  );
}
