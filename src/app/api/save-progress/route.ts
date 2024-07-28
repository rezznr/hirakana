// src/app/api/save-progress/route.ts
import { NextRequest, NextResponse } from "next/server";

interface CompletedLevel {
  level: number;
  score: number;
}

let userProgress: CompletedLevel[] = [];

export async function POST(request: NextRequest) {
  const { completedLevels } = await request.json();
  userProgress = completedLevels;
  return NextResponse.json({ message: "Progress saved successfully" });
}

export async function GET() {
  return NextResponse.json({ completedLevels: userProgress });
}
