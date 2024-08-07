import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

type Question = {
  id: string;
  question: string;
  options: string[];
  answer: string;
};

type Level = {
  level: number;
  questions: Question[];
};

type Data = {
  levels: Level[];
};

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generateUniqueId(): string {
  return Math.random().toString(36).substr(2, 9);
}

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "src",
    "data",
    "latihan",
    "hiragana.json"
  );

  // Membaca file JSON
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data: Data = JSON.parse(jsonData);
  data.levels = data.levels.map((level) => ({
    ...level,
    questions: shuffleArray(
      level.questions.map((question) => ({
        ...question,
        id: generateUniqueId(),
        options: shuffleArray(question.options),
      }))
    ),
  }));

  return NextResponse.json(data);
}
