import dotenv from "dotenv";
dotenv.config();

import { createClient } from "@sanity/client";

const client = createClient({
	projectId: process.env.SANITY_PROJECT_ID,
	dataset: "production",
	token: process.env.SANITY_API_TOKEN,
	apiVersion: "2025-01-01",
	useCdn: false,
});

async function deleteTopics() {
	const topics = await client.fetch(
		`*[_type == "projectTopic"]{ _id, title }`,
	);

	console.log(`Found ${topics.length} topics`);

	for (const topic of topics) {
		await client.delete(topic._id);
		console.log(`Deleted: ${topic.title}`);
	}

	console.log("Done");
}

deleteTopics();
