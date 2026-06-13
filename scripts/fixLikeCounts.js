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

async function fixLikeCounts() {
  const topics = await client.fetch(`
    *[
      _type=="projectTopic" &&
      !defined(likeCount)
    ]{
      _id
    }
  `);

  console.log(`Found ${topics.length} topics missing likeCount`);

  for (const topic of topics) {
    await client
      .patch(topic._id)
      .set({
        likeCount: 0,
      })
      .commit();

    console.log(`Updated ${topic._id}`);
  }

  console.log("Done!");
}

fixLikeCounts();
