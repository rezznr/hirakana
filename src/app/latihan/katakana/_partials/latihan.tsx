"use client";

import Loading from "@/app/loading";
import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { IoArrowBackSharp } from "react-icons/io5";

// Define interfaces
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

// Main component
const Latihan: React.FC = () => {
  const [completedLevels, setCompletedLevels] = useState<CompletedLevel[]>([]);
  const [questionsData, setQuestionsData] = useState<QuestionsData | null>(
    null
  );
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState<string | null>(null); // Add error state
  const router = useRouter();

  // Fetch questions data from API
  const fetchQuestionsData = useCallback(async () => {
    try {
      const response = await fetch("/api/questions", {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch questions data");
      }

      const data: QuestionsData = await response.json();
      setQuestionsData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to load questions data.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Fetch completed levels from local storage
    const savedLevels = localStorage.getItem("completedLevels");
    if (savedLevels) {
      setCompletedLevels(JSON.parse(savedLevels));
    }

    fetchQuestionsData(); // Call the fetch function
  }, [fetchQuestionsData]);

  useEffect(() => {
    if (completedLevels.length > 0) {
      localStorage.setItem("completedLevels", JSON.stringify(completedLevels));
    }
  }, [completedLevels]);

  // Handle level selection
  const handleSelectLevel = useCallback(
    (level: number) => {
      router.push(`/latihan/katakana/level/${level}`);
    },
    [router]
  );

  const handleLevelSelect = useCallback(
    (level: number) => {
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
    },
    [completedLevels, handleSelectLevel]
  );

  const canSelectLevel = useCallback(
    (lvl: LevelData) => {
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
    },
    [completedLevels]
  );

  // Memoize background and text color classes to avoid recalculating on every render
  const getBackgroundClass = useCallback(
    (level: number) => {
      const completedLevel = completedLevels.find((cl) => cl.level === level);
      if (!completedLevel) {
        return "bg-radial-gradient";
      }
      const score = completedLevel.score;
      if (score === 100) return "bg-radial-gradient-100";
      if (score >= 90) return "bg-radial-gradient-90";
      if (score >= 80) return "bg-radial-gradient-80";
      if (score >= 70) return "bg-radial-gradient-70";
      return "bg-radial-gradient-60";
    },
    [completedLevels]
  );

  const getTextColor = useCallback(
    (level: number) => {
      const completedLevel = completedLevels.find((cl) => cl.level === level);
      if (!completedLevel) {
        return "text-black";
      }
      const score = completedLevel.score;
      if (score === 100) return "text-[#006310]";
      if (score >= 90) return "text-[#0E6300]";
      if (score >= 70) return "text-[#5B6300]";
      return "text-[#630000]";
    },
    [completedLevels]
  );

  // Render loading state
  if (loading) {
    return <Loading message="Mengambil data soal. Mohon tunggu sebentar..." />;
  }

  // Render error state
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  // Render main content
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
          onClick={() => router.push("/latihan")}
          className="bg-gradient-to-r from-slate-100 to-blue-400 transform transition-colors px-4 py-2 rounded-xl relative right-[55vh] cursor-pointer hover:scale-105 active:scale-100"
        >
          <IoArrowBackSharp className="text-2xl " />
        </div>
      </div>
      <div className="flex font-poppins items-center justify-center">
        <div className="flex flex-wrap gap-5 justify-center p-10">
          {questionsData?.levels.map((lvl) => (
            <button
              className={`flex justify-center transition-transform shadow-xl items-center rounded-[17px] text-center w-[80%] lg:w-[27%] md:w-[33%] ${
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
              <div className="p-4">
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
