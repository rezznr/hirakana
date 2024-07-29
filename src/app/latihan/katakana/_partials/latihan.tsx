"use client";

import { useState, useEffect } from "react";

interface CompletedLevel {
  level: number;
  score: number;
}

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

interface LevelData {
  level: number;
  questions: Question[];
}

interface QuestionsData {
  levels: LevelData[];
}

const Latihan: React.FC<{ onSelectLevel: (level: number) => void }> = ({
  onSelectLevel,
}) => {
  const [completedLevels, setCompletedLevels] = useState<CompletedLevel[]>([]);
  const [questionsData, setQuestionsData] = useState<QuestionsData | null>(
    null
  );

  useEffect(() => {
    const savedLevels = localStorage.getItem("completedLevels");
    if (savedLevels) {
      setCompletedLevels(JSON.parse(savedLevels));
    }

    // Fetch questions data from API
    fetch("/api/questions", {
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data fetched from API:", data);
        setQuestionsData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (completedLevels.length > 0) {
      localStorage.setItem("completedLevels", JSON.stringify(completedLevels));
    }
  }, [completedLevels]);

  const handleLevelSelect = (level: number) => {
    const previousLevelScore = completedLevels.find(
      (lvl) => lvl.level === level - 1
    )?.score;
    if (level === 1 || (previousLevelScore && previousLevelScore >= 70)) {
      onSelectLevel(level);
    }
  };

  const handleLevelComplete = (level: number, score: number) => {
    setCompletedLevels((prev) => {
      const updatedLevels = prev.map((lvl) =>
        lvl.level === level ? { level, score } : lvl
      );
      if (!updatedLevels.find((lvl) => lvl.level === level)) {
        updatedLevels.push({ level, score });
      }
      return updatedLevels;
    });
  };

  if (!questionsData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative flex flex-col items-center gap-10 font-sans">
      <h2 className="text-black text-[33px] font-extrabold">
        Latihan Huruf Katakana
      </h2>
      <div className="flex flex-col gap-5 font-sans items-center justify-center">
        <h3 className="text-2xl">Pilih Level</h3>
        <div className="grid grid-cols-3 gap-5">
          {questionsData.levels.map((lvl) => (
            <button
              className="border border-purple-950 rounded-lg bg-white text-center"
              key={lvl.level}
              onClick={() => handleLevelSelect(lvl.level)}
            >
              <p className="text-xl p-5">
                Level {lvl.level}{" "}
                {completedLevels.some((cl) => cl.level === lvl.level)
                  ? `(Score: ${
                      completedLevels.find((cl) => cl.level === lvl.level)
                        ?.score
                    }%)`
                  : ""}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Latihan };
