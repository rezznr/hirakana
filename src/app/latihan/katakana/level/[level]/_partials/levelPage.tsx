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
  const router = useRouter();

  useEffect(() => {
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
  }, [level]);

  const handleLevelComplete = (completedLevel: number, score: number) => {
    // Update the local storage with the completed level and score
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

    // Navigate back to the latihan page
    router.push("/latihan/hiragana");
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Level
        questions={questions}
        level={parseInt(level as string)}
        onComplete={handleLevelComplete}
      />
    </div>
  );
};

export { LevelPage };
