"use client";

import { useMemo, useState } from "react";
import TopicCard from "./TopicCard";

interface Topic {
  _id: string;
  title: string;
  category: string;
  background: string;
  slug: {
    current: string;
  };
}

export default function TopicGridClient({ topics }: { topics: Topic[] }) {
  const [search, setSearch] = useState("");

  const filteredTopics = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return topics;

    return topics.filter(
      (topic) =>
        topic.title?.toLowerCase().includes(query) ||
        topic.background?.toLowerCase().includes(query) ||
        topic.category?.toLowerCase().includes(query),
    );
  }, [search, topics]);

  return (
    <div className="pb-24">
      {/* Search */}
      <div className="mb-10">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search research topics..."
          className="
          w-full
          h-16
          rounded-2xl
          border
          border-slate-200
          bg-white
          shadow-sm
          px-6
          text-lg
          outline-none
          transition
          focus:ring-2
          focus:ring-teal-600
          "
        />
      </div>

      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold">All Topics</h2>

        <span className="text-slate-500">
          {filteredTopics.length} topic
          {filteredTopics.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Topic Grid */}
      {filteredTopics.length > 0 ? (
        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >
          {filteredTopics.map((topic) => (
            <TopicCard key={topic._id} topic={topic} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <h3 className="text-2xl font-semibold">No topics found</h3>

          <p className="text-slate-500 mt-3">
            Try another keyword or category.
          </p>
        </div>
      )}
    </div>
  );
}
