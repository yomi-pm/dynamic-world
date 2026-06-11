import dotenv from "dotenv";
dotenv.config();

import fs from "fs";
import { createClient } from "@sanity/client";

console.log("=== STARTING IMPORT ===");

// Verify environment variables
console.log("Project ID:", process.env.SANITY_PROJECT_ID);
console.log("Token exists:", !!process.env.SANITY_API_TOKEN);

// Verify topics file exists
console.log("topics.json exists:", fs.existsSync("./topics.json"));

let topics = [];

try {
  topics = JSON.parse(fs.readFileSync("./topics.json", "utf8"));

  console.log("Topics loaded successfully");
  console.log("Is array:", Array.isArray(topics));
  console.log("Topic count:", topics.length);
} catch (error) {
  console.error("Failed to load topics.json");
  console.error(error);
  process.exit(1);
}

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2025-01-01",
  useCdn: false,
});

// Test Sanity connection
async function testConnection() {
  try {
    console.log("\n=== TESTING SANITY CONNECTION ===");

    const result = await client.fetch(`count(*[_type == "projectTopic"])`);

    console.log("Connected successfully");
    console.log("Current projectTopic count:", result);

    return true;
  } catch (error) {
    console.error("Sanity connection failed");
    console.error(error);
    return false;
  }
}

async function importTopics() {
  console.log("\n=== STARTING IMPORT PROCESS ===");

  const connected = await testConnection();

  if (!connected) {
    console.log("Aborting import.");
    return;
  }

  for (const topic of topics) {
    try {
      console.log(`Importing: ${topic.title}`);

      const doc = {
        _type: "projectTopic",

        ...topic,

        slug: {
          _type: "slug",
          current: topic.title
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-"),
        },
      };

      const result = await client.create(doc);

      console.log(`✓ Imported: ${result.title || topic.title}`);
    } catch (error) {
      console.error(`✗ Failed to import: ${topic.title}`);
      console.error(error);
    }
  }

  console.log("\n=== IMPORT COMPLETE ===");
}

importTopics()
  .then(() => {
    console.log("Finished successfully");
  })
  .catch((error) => {
    console.error("FATAL ERROR");
    console.error(error);
  });
