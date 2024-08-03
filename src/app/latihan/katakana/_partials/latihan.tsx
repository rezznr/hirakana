"use client";

import Loading from "@/app/loading";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { IoArrowBackSharp } from "react-icons/io5";

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

const Latihan: React.FC<{}> = () => {
  const [completedLevels, setCompletedLevels] = useState<CompletedLevel[]>([]);
  const [questionsData, setQuestionsData] = useState<QuestionsData | null>(
    null
  );
  const router = useRouter();

  const handleSelectLevel = (level: number) => {
    router.push(`/latihan/katakana/level/${level}`);
  };

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

  // const handleLevelSelect = (level: number) => {
  //   const previousLevelScore = completedLevels.find(
  //     (lvl) => lvl.level === level - 1
  //   )?.score;
  //   if (level === 1 || (previousLevelScore && previousLevelScore >= 70)) {
  //     handleSelectLevel(level);
  //   }
  // };
  const handleLevelSelect = (level: number) => {
    // Cek apakah level pertama
    if (level === 1) {
      handleSelectLevel(level);
      return;
    }

    // Cek apakah level sebelumnya telah diselesaikan dengan nilai >= 70 atau telah diselesaikan sebelumnya
    const previousLevel = completedLevels.find(
      (lvl) => lvl.level === level - 1
    );
    const currentLevel = completedLevels.find((lvl) => lvl.level === level);

    if ((previousLevel && previousLevel.score >= 70) || currentLevel) {
      handleSelectLevel(level);
    }
  };

  const canSelectLevel = (lvl: LevelData) => {
    // Level pertama selalu dapat diakses
    if (lvl.level === 1) {
      return true;
    }
    // Cek apakah level sebelumnya sudah pernah dikerjakan
    const previousLevel = completedLevels.find(
      (completedLevel) => completedLevel.level === lvl.level - 1
    );
    // Jika level sebelumnya pernah dikerjakan dan nilainya >= 70, maka level ini dapat diakses
    if (previousLevel && previousLevel.score >= 70) {
      return true;
    }
    // Cek apakah level ini sendiri sudah pernah dikerjakan (untuk kasus seperti level 2 diakses setelah level 3 selesai)
    const currentLevel = completedLevels.find(
      (completedLevel) => completedLevel.level === lvl.level
    );

    return currentLevel !== undefined;
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

  const getTextColor = (level: number) => {
    const completedLevel = completedLevels.find((cl) => cl.level === level);
    if (!completedLevel) {
      return "text-black";
    }
    const score = completedLevel.score;
    if (score === 100) return "text-[#006310]";
    if (score >= 90) return "text-[#0E6300]";
    if (score >= 70) return "text-[#5B6300]";
    if (score < 70) return "text-[#630000]";
  };

  if (!questionsData) {
    return <Loading />;
  }

  return (
    <div className="relative flex flex-col justify-center items-center font-poppins">
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-black text-[33px] font-extrabold italic">
          Latihan Huruf Katakana
        </h2>
        <div className="w-[222px] h-[45px] bg-gradient-to-r from-[#ffe6df] to-[#ff9595] rounded-tl-[11px] rounded-tr-[11px] flex items-center justify-center">
          <h3 className="text-3xl text-center font-extrabold font-poppins">
            Pilih Level
          </h3>
        </div>
        <div
          onClick={() => router.back()}
          className="bg-gradient-to-r from-slate-100 to to-blue-400 p-2 rounded-xl relative right-[30vh] cursor-pointer hover:scale-105 active:scale-100"
        >
          <IoArrowBackSharp className="text-2xl " />
        </div>
      </div>
      <div className="flex font-poppins items-center justify-center w-[40%]">
        <div className="flex flex-wrap gap-5 justify-center p-10">
          {questionsData.levels.map((lvl) => (
            <button
              className={`flex justify-center  transition-transform shadow-xl items-center  rounded-[17px] text-center w-[80%] lg:w-[27%] md:w-[33%] ${
                canSelectLevel(lvl)
                  ? `${getBackgroundClass(
                      lvl.level
                    )} hover:scale-110 active:scale-100`
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
                <p
                  className={`font-poppins font-bold text-xl ${getTextColor(
                    lvl.level
                  )}`}
                >
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
