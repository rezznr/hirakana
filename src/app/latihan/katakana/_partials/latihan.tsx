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

  useEffect(() => {
    const savedLevels = localStorage.getItem("completedLevels");
    if (savedLevels) {
      setCompletedLevels(JSON.parse(savedLevels));
    }

    // Fetch questions data from API
    fetch("/api/questions")
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

  useEffect(() => {
    localStorage.setItem("completedLevels", JSON.stringify(completedLevels));
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
            {[...Array(10)].map((_, index) => (
              <button
                className="border border-purple-950 rounded-lg bg-white text-center"
                key={index}
                onClick={() => handleLevelSelect(index + 1)}
              >
                <p className="text-xl p-5">
                  Level {index + 1}{" "}
                  {completedLevels.some((lvl) => lvl.level === index + 1)
                    ? `(Score: ${
                        completedLevels.find((lvl) => lvl.level === index + 1)
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
