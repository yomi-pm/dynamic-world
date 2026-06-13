import { NextResponse } from "next/server";
import { client } from "@/sanity/client";

export async function POST(request: Request) {
  try {
    const { topicId } = await request.json();
    if (!topicId) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing topicId",
        },
        { status: 400 },
      );
    }

    const topic = await client.getDocument(topicId);

    if (!topic) {
      return NextResponse.json(
        {
          success: false,
          message: "Topic not found",
        },
        { status: 404 },
      );
    }

    const currentLikes = topic.likeCount || 0;

    const updated = await client
      .patch(topicId)
      .set({
        likeCount: currentLikes + 1,
      })
      .commit();

    return NextResponse.json({
      success: true,
      likeCount: updated.likeCount,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 },
    );
  }
}
