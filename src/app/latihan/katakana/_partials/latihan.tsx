"use client";

import { useState, useEffect } from "react";
import Level from "@/components/level/level";

const Latihan = () => {
  const [completedLevels, setCompletedLevels] = useState<
    { level: number; score: number }[]
  >([]);
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  useEffect(() => {
    const savedLevels = localStorage.getItem("completedLevels");
    if (savedLevels) {
      setCompletedLevels(JSON.parse(savedLevels));
    }
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

  return (
    <div>
      <h1>Japanese Learning App</h1>
      {selectedLevel === null ? (
        <div>
          <h2>Select Level</h2>
          <ul>
            {[...Array(10)].map((_, index) => (
              <li key={index} onClick={() => handleLevelSelect(index + 1)}>
                Level {index + 1}{" "}
                {completedLevels.some((lvl) => lvl.level === index + 1)
                  ? `(Score: ${
                      completedLevels.find((lvl) => lvl.level === index + 1)
                        ?.score
                    }%)`
                  : ""}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Level level={selectedLevel} onComplete={handleLevelComplete} />
      )}
    </div>
  );
};

export { Latihan };
