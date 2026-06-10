import { client } from "@/sanity/client";

export default async function CategoryStats() {
	const count = await client.fetch(
		`count(*[
      _type=="projectTopic" &&
      category=="public-health"
    ])`,
	);

	return <div>{count} Topics</div>;
}
