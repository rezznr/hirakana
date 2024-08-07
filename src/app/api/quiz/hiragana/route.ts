import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { promises as fs } from "fs";
import path from "path";

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

function linearCongruentialGenerator(seed: number) {
  const a = 1664525;
  const c = 1013904223;
  const m = 2 ** 32;
  let state = seed;

  return function () {
    state = (a * state + c) % m;
    return state / m;
  };
}

function shuffleArray<T>(array: T[], rng: () => number): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export async function GET(request: NextRequest) {
  // Path ke file JSON
  const filePath = path.join(
    process.cwd(),
    "src",
    "data",
    "quiz",
    "hiragana.json"
  );

  // Membaca file JSON
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data: Data = JSON.parse(jsonData);

  const seed = Date.now();
  const rng = linearCongruentialGenerator(seed);

  for (const level of data.levels) {
    level.questions = shuffleArray(level.questions, rng);
    for (const question of level.questions) {
      question.options = shuffleArray(question.options, rng);
    }
  }

  return NextResponse.json(data);
}
