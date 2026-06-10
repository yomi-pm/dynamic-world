import { client } from "@/sanity/client";
import TopicGridClient from "./TopicGridClient";

export default async function TopicGrid() {
  const topics = await client.fetch(`
    *[_type=="projectTopic"]
    | order(title asc)
    {
      _id,
      title,
      category,
      background,
      slug
    }
  `);

  return (
    <div className="pb-24">
      <TopicGridClient topics={topics} />
    </div>
  );
}
