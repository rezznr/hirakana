"use client";

import { useState } from "react";
import Level from "@/components/level/level";

const Home: React.FC = () => {
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  const handleLevelSelect = (level: number) => {
    if (completedLevels.includes(level - 1) || level === 1) {
      setSelectedLevel(level);
    }
  };

  const handleLevelComplete = () => {
    if (selectedLevel !== null && !completedLevels.includes(selectedLevel)) {
      setCompletedLevels([...completedLevels, selectedLevel]);
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
                {completedLevels.includes(index + 1) ? "(Completed)" : ""}
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

export default Home;
