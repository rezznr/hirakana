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

  const canSelectLevel = (lvl: LevelData) => {
    const previousLevelScore = completedLevels.find(
      (completedLevel) => completedLevel.level === lvl.level - 1
    )?.score;
    return lvl.level === 1 || (previousLevelScore && previousLevelScore >= 70);
  };

  const getBackgroundClass = (level: number) => {
    const completedLevel = completedLevels.find((cl) => cl.level === level);
    if (!completedLevel) {
      return "bg-radial-gradient";
    }
    const score = completedLevel.score;
    if (score === 100) return "bg-radial-gradient-100";
    if (score >= 90) return "bg-radial-gradient-90";
    if (score >= 80) return "bg-radial-gradient-80";
    if (score >= 70) return "bg-radial-gradient-70";
    if (score < 70) return "bg-radial-gradient-60";
  };

  if (!questionsData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative flex flex-col items-center gap-10 font-sans">
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-black text-[33px] font-extrabold italic">
          Latihan Huruf Katakana
        </h2>
        <div className="w-[222px] h-[45px] bg-gradient-to-r from-[#DFF9FF] to-[#5FFBF1] rounded-tl-[11px] rounded-tr-[11px] flex items-center justify-center">
          <h3 className="text-3xl text-center font-extrabold font-sans">
            Pilih Level
          </h3>
        </div>
      </div>
      <div className="flex font-sans items-center justify-center w-[40%]">
        <div className="flex flex-wrap gap-5 justify-center p-10">
          {questionsData.levels.map((lvl) => (
            <button
              className={`flex justify-center  transition-transform active:bg-red-500 shadow-xl items-center border rounded-[17px] text-center w-[80%] lg:w-[27%] md:w-[33%] ${
                canSelectLevel(lvl)
                  ? `${getBackgroundClass(lvl.level)} hover:scale-110`
                  : "bg-radial-gradient-0 cursor-not-allowed"
              }`}
              key={lvl.level}
              onClick={() => handleLevelSelect(lvl.level)}
              disabled={!canSelectLevel(lvl)}
            >
              <div className=" p-4">
                <p className="text-black text-[22px] font-bold font-pottaOne">
                  LEVEL {lvl.level}
                </p>
                <p>
                  {completedLevels.some((cl) => cl.level === lvl.level)
                    ? `${Math.floor(
                        completedLevels.find((cl) => cl.level === lvl.level)
                          ?.score ?? 0
                      )}%`
                    : "-"}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Latihan };
