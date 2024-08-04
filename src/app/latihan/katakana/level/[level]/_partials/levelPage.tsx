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

// Main component
const LevelPage = ({ level }: { level: string }) => {
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [loading, setLoading] = useState(true);
  const [accessDenied, setAccessDenied] = useState(false);
  const router = useRouter();

  // Fetch questions for the level
  const fetchQuestions = useCallback(async () => {
    try {
      const response = await fetch(`/api/questions`, {
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
        setQuestions(levelData.questions);
      } else {
        console.error("Level not found");
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
    } finally {
      setLoading(false);
    }
  }, [level]);

  // Check access to the level
  const checkAccess = useCallback(() => {
    const completedLevels = JSON.parse(
      localStorage.getItem("completedLevels") || "[]"
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
  }, [level]);

  useEffect(() => {
    if (!checkAccess()) {
      setAccessDenied(true);
      setLoading(false);
      return;
    }

    fetchQuestions();
  }, [fetchQuestions, checkAccess]);

  // Handle level completion
  const completed = useCallback(
    (completedLevel: number, score: number) => {
      const completedLevels = JSON.parse(
        localStorage.getItem("completedLevels") || "[]"
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

      localStorage.setItem("completedLevels", JSON.stringify(updatedLevels));

      // Immediately navigate to the results page
      router.push(`/latihan/katakana/level/${level}/hasil`);
    },
    [level, router]
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
          onClick={() => router.push("/latihan/katakana")}
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
        questions={questions}
        level={parseInt(level, 10)}
        onComplete={completed}
      />
    </>
  );
};

export { LevelPage };
