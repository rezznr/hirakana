"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Level from "@/components/level/level";

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

const LevelPage = ({ level }: { level: string }) => {
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [loading, setLoading] = useState(true);
  const [accessDenied, setAccessDenied] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAccess = () => {
      const completedLevels = JSON.parse(
        localStorage.getItem("completedLevels") || "[]"
      );
      const levelInt = parseInt(level as string);

      if (levelInt === 1) {
        // Level pertama selalu bisa diakses
        return true;
      }

      // Cek apakah level sebelumnya telah diselesaikan dengan nilai >= 70 atau telah diselesaikan sebelumnya
      const previousLevel = completedLevels.find(
        (lvl: { level: number; score: number }) => lvl.level === levelInt - 1
      );

      const currentLevel = completedLevels.find(
        (lvl: { level: number; score: number }) => lvl.level === levelInt
      );

      if ((previousLevel && previousLevel.score >= 70) || currentLevel) {
        return true;
      }

      return false;
    };

    if (!checkAccess()) {
      // If the user does not have access, display access denied message
      setAccessDenied(true);
      setLoading(false);
      return;
    }

    if (level) {
      fetch(`/api/questions`, {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Find the questions for the specific level
          const levelData = data.levels.find(
            (lvl: LevelData) => lvl.level === parseInt(level as string)
          );
          if (levelData) {
            setQuestions(levelData.questions);
          } else {
            console.error("Level not found");
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching questions:", error);
          setLoading(false);
        });
    }
  }, [level, router]);

  const completed = (completedLevel: number, score: number) => {
    const completedLevels = JSON.parse(
      localStorage.getItem("completedLevels") || "[]"
    );
    const updatedLevels = completedLevels.map(
      (lvl: { level: number; score: number }) =>
        lvl.level === completedLevel ? { level: completedLevel, score } : lvl
    );
    if (
      !updatedLevels.find(
        (lvl: { level: number; score: number }) => lvl.level === completedLevel
      )
    ) {
      updatedLevels.push({ level: completedLevel, score });
    }
    localStorage.setItem("completedLevels", JSON.stringify(updatedLevels));
    router.push(`/latihan/katakana/level/${level}/hasil`);
  };

  if (loading) return <div>Loading...</div>;

  if (accessDenied)
    return (
      <div>
        <p>
          Anda belum menyelesaikan level sebelumnya. Selesaikan level sebelumnya
          untuk mengakses level ini.
        </p>
        <button onClick={() => router.back()}>Kembali</button>
      </div>
    );

  return (
    <>
      <Level
        questions={questions}
        level={parseInt(level as string)}
        onComplete={completed}
      />
    </>
  );
};

export { LevelPage };
