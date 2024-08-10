"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Level from "@/components/level/level";
import Loading from "@/app/loading";

// Define interfaces
interface QuestionData {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

interface LevelData {
  level: number;
  questions: QuestionData[];
}

// Linear Congruential Generator Function
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

// Shuffle Array Function
function shuffleArray<T>(array: T[], rng: () => number): T[] {
  const shuffledArray = [...array]; // Copy the array to avoid mutating the original array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

// Main component
const LevelPage = ({
  level,
  apiURL,
  url,
  localStorageName,
}: {
  level: string;
  apiURL: string;
  url: string;
  localStorageName: string;
}) => {
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [loading, setLoading] = useState(true);
  const [accessDenied, setAccessDenied] = useState(false);
  const router = useRouter();

  // Fetch questions for the level
  const fetchQuestions = useCallback(async () => {
    try {
      const response = await fetch(apiURL, {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch questions");
      }

      const data = await response.json();
      // Find the questions for the specific level
      const levelData = data.levels.find(
        (lvl: LevelData) => lvl.level === parseInt(level, 10)
      );

      if (levelData) {
        // Menggunakan LCM untuk mengacak soal berdasarkan id
        const seed = Date.now(); // Menggunakan waktu saat ini sebagai seed untuk pengacakan
        const rng = linearCongruentialGenerator(seed);
        const shuffledQuestions: QuestionData[] = shuffleArray<QuestionData>(
          levelData.questions,
          rng
        );
        setQuestions(shuffledQuestions); // Assign shuffled questions to state
      } else {
        console.error("Level not found");
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
    } finally {
      setLoading(false);
    }
  }, [level, apiURL]);

  // Check access to the level
  const checkAccess = useCallback(() => {
    const completedLevels = JSON.parse(
      localStorage.getItem(localStorageName) || "[]"
    );

    const levelInt = parseInt(level, 10);

    if (levelInt === 1) {
      return true; // Level 1 is always accessible
    }

    // Check if the previous level has been completed with a score >= 70 or already completed
    const previousLevel = completedLevels.find(
      (lvl: { level: number; score: number }) => lvl.level === levelInt - 1
    );

    const currentLevel = completedLevels.find(
      (lvl: { level: number; score: number }) => lvl.level === levelInt
    );

    return (previousLevel && previousLevel.score >= 70) || currentLevel;
  }, [level, localStorageName]);

  useEffect(() => {
    if (!checkAccess()) {
      setAccessDenied(true);
      setLoading(false);
      return;
    }

    fetchQuestions(); // Fetch and shuffle questions each time the component is mounted
  }, [fetchQuestions, checkAccess]);

  // Handle level completion
  const completed = useCallback(
    (completedLevel: number, score: number) => {
      const completedLevels = JSON.parse(
        localStorage.getItem(localStorageName) || "[]"
      );
      const updatedLevels = completedLevels.map(
        (lvl: { level: number; score: number }) =>
          lvl.level === completedLevel ? { level: completedLevel, score } : lvl
      );

      if (
        !updatedLevels.find(
          (lvl: { level: number; score: number }) =>
            lvl.level === completedLevel
        )
      ) {
        updatedLevels.push({ level: completedLevel, score });
      }

      localStorage.setItem(localStorageName, JSON.stringify(updatedLevels));

      // Immediately navigate to the results page
      router.push(`${url}/level/${level}/hasil`);
    },
    [level, router, url, localStorageName]
  );

  // Render loading state
  if (loading) {
    return <Loading message="Mengambil data soal. Mohon tunggu sebentar..." />;
  }

  // Render access denied state
  if (accessDenied) {
    return (
      <div className="flex flex-col items-center justify-center font-poppins mt-28 gap-4">
        <p className="text-2xl font-bold text-center max-w-2xl">
          Kamu belum menyelesaikan level sebelumnya. Selesaikan level sebelumnya
          untuk mengakses level ini.
        </p>
        <button
          className="font-bold text-2xl py-3 px-10 rounded-xl flex flex-row items-center justify-center gap-3 transform transition duration-300 hover:scale-105 active:scale-110 font-pottaOne bg-gradient-to-b from-[#ffdf2d] to-[#e7e688] hover:bg-[#7DFF17]/80"
          onClick={() => router.push(url)}
        >
          Kembali
        </button>
      </div>
    );
  }

  // Render main content
  return (
    <>
      <Level
        url={url}
        questions={questions}
        level={parseInt(level, 10)}
        onComplete={completed}
      />
    </>
  );
};

export { LevelPage };
