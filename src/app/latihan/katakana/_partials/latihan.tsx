"use client";

import { useState, useEffect } from "react";
import Level from "@/components/level/level";

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

const Latihan: React.FC = () => {
  const [completedLevels, setCompletedLevels] = useState<CompletedLevel[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [questionsData, setQuestionsData] = useState<QuestionsData | null>(
    null
  );

  // Load completed levels from localStorage once when component mounts
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
        console.log("Data fetched from API:", data); // Logging for debugging
        setQuestionsData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Logging for debugging
      });
  }, []);

  // Save completed levels to localStorage whenever they change
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
      setSelectedLevel(level);
    }
  };

  const handleLevelComplete = (score: number) => {
    if (selectedLevel !== null) {
      const existingLevelIndex = completedLevels.findIndex(
        (lvl) => lvl.level === selectedLevel
      );
      if (existingLevelIndex !== -1) {
        // Update existing level score
        const updatedLevels = [...completedLevels];
        updatedLevels[existingLevelIndex].score = score;
        setCompletedLevels(updatedLevels);
      } else {
        // Add new level score
        setCompletedLevels([
          ...completedLevels,
          { level: selectedLevel, score },
        ]);
      }
      setSelectedLevel(null);
    }
  };

  if (!questionsData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative flex flex-col items-center gap-10 font-sans">
      <h2 className="text-black text-[33px] font-extrabold">
        Latihan Huruf Katakana
      </h2>
      {selectedLevel === null ? (
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
      ) : (
        <Level
          level={selectedLevel}
          questions={
            questionsData.levels.find((lvl) => lvl.level === selectedLevel)
              ?.questions || []
          }
          onComplete={handleLevelComplete}
        />
      )}
    </div>
  );
};

export default Latihan;
