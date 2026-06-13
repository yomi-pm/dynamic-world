"use client";

import { useEffect, useState } from "react";
import { ThumbsUp } from "lucide-react";

interface LikeButtonProps {
  topicId: string;
  initialLikes: number;
}

export default function LikeButton({ topicId, initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [loading, setLoading] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const hasLiked = localStorage.getItem(`liked-topic-${topicId}`);

    if (hasLiked) {
      setLiked(true);
    }
  }, [topicId]);

  async function handleLike() {
    if (loading || liked) return;

    setLoading(true);

    try {
      const response = await fetch("/api/topics/like", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topicId,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setLikes(data.likeCount);

        localStorage.setItem(`liked-topic-${topicId}`, "true");

        setLiked(true);
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }

  return (
    <button
      onClick={handleLike}
      disabled={liked || loading}
      className={`
        inline-flex
        items-center
        gap-2
        px-4
        py-2
        rounded-xl
        border
        transition
        ${
          liked
            ? "bg-teal-50 border-teal-200 text-teal-700"
            : "bg-white border-slate-200 hover:bg-slate-50"
        }
      `}
    >
      <ThumbsUp className="w-4 h-4" />

      <span>
        {likes} {likes === 1 ? "Like" : "Likes"}
      </span>

      {liked && <span className="text-xs">✓</span>}
    </button>
  );
}
