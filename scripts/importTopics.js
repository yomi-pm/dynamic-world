import dotenv from "dotenv";
dotenv.config();

import fs from "fs";
import { createClient } from "@sanity/client";

const topics = JSON.parse(fs.readFileSync("./topics.json", "utf8"));

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2025-01-01",
  useCdn: false,
});

async function importTopics() {
  try {
    console.log(`Found ${topics.length} topics`);

    for (const topic of topics) {
      try {
        const result = await client.create({
          _type: "projectTopic",

          ...topic,

          slug: {
            _type: "slug",
            current: topic.title
              .toLowerCase()
              .replace(/[^\w\s-]/g, "")
              .replace(/\s+/g, "-"),
          },
        });

        console.log(`✓ Imported: ${result.title}`);
      } catch (error) {
        console.error(`✗ Failed: ${topic.title}`);
        console.error(error);
      }
    }

    console.log("Import complete");
  } catch (error) {
    console.error(error);
  }
}
