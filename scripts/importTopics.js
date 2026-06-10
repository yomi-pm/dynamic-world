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
  for (const topic of topics) {
    console.log(
      JSON.stringify(
        {
          _type: "projectTopic",
          ...topic,
        },
        null,
        2,
      ),
    );
    await client.create({
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

    console.log(`Imported: ${topic.title}`);
  }

  console.log("Import complete");
}

importTopics();
