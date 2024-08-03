"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MdSkipNext, MdOutlineLoop, MdGridOn } from "react-icons/md";

interface CompletedLevel {
  level: number;
  score: number;
}

const ResultPage = ({ level }: { level: string }) => {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [currentLevel, setCurrentLevel] = useState<CompletedLevel | null>(null);
  const router = useRouter();
  let buttonMenu =
    "flex flex-col items-center gap-3 bg-[#F94C76]/30 rounded-xl p-5 hover:bg-[#ffb2b2]/40 hover:scale-105 active:scale-100 transform transition duration-300 px-10 font-extrabold font-poppins";

  useEffect(() => {
    // Fetch completed levels from localStorage
    const storedCompletedLevels: CompletedLevel[] = JSON.parse(
      localStorage.getItem("completedLevels") || "[]"
    );

    // Find the completed level using the level parameter from the URL
    const currentLevel = storedCompletedLevels.find(
      (lvl) => lvl.level === parseInt(level)
    );
    setCurrentLevel(currentLevel || null);
    setLoading(false);
  }, [level]);

  useEffect(() => {
    // Set message based on current level score
    if (currentLevel) {
      if (currentLevel.score >= 90) {
        setMessage("Luar biasa! Anda sangat hebat!");
      } else if (currentLevel.score >= 70) {
        setMessage("Bagus sekali! Anda telah lulus level ini.");
      } else {
        setMessage("Jangan menyerah! Cobalah lagi untuk lulus.");
      }
    }
  }, [currentLevel]);

  const handleRetry = () => {
    // Redirect to the current level for retry
    if (currentLevel) {
      router.push(`/latihan/katakana/level/${currentLevel.level}`);
    }
  };
  const handleBacktoLevelMenu = () => {
    // Redirect to the level menu
    router.push(`/latihan/katakana/`);
  };

  const handleContinue = () => {
    // Redirect to the next level
    if (currentLevel) {
      if (currentLevel.level === 10) {
        // If the current level is the last level, redirect to the home page
        router.push("/latihan/katakana");
      } else {
        router.push(`/latihan/katakana/level/${currentLevel.level + 1}`);
      }
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center relative font-poppins">
      <div className="absolute flex items-center justify-center w-[141px] h-[54px] bg-[#ffb2b2] rounded-[9px] -top-4 z-10">
        <h2 className="text-4xl font-extrabold text-white py-5">Hasil</h2>
      </div>

      {currentLevel ? (
        <div className="flex flex-col items-center justify-center gap-5 font-poppins w-[400px] h-[200px] md:w-[629px] md:h-[344px] relative bg-[#ff4d4d]/10 rounded-2xl mt-8">
          <h2 className="text-3xl font-extrabold">
            Level {currentLevel.level}
          </h2>
          <h3 className="text-3xl font-extrabold">
            SCORE: {Math.floor(currentLevel.score)}%
          </h3>
          <p className="text-3xl font-extrabold">{message}</p>
          <div className="flex justify-center items-center mt-10 gap-10">
            <div>
              <button className={buttonMenu} onClick={handleBacktoLevelMenu}>
                <MdGridOn className="inline-block text-4xl" />
                <p>Level</p>
              </button>
            </div>
            <div>
              <button className={buttonMenu} onClick={handleRetry}>
                <MdOutlineLoop className="inline-block text-4xl" />
                <p>Retry</p>
              </button>
            </div>
            {currentLevel.score >= 70 && currentLevel.level !== 10 ? (
              <div>
                <button className={buttonMenu} onClick={handleContinue}>
                  <MdSkipNext className="inline-block text-4xl" />
                  <p className="">Next</p>
                </button>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-5 font-poppins w-[400px] h-[200px] md:w-[629px] md:h-[344px] relative bg-[#ff4d4d]/10 rounded-2xl mt-8 ">
          <div className="flex flex-col items-center justify-center gap-5 max-w-xl">
            <p className="text-2xl font-extrabold text-center">
              Level {level} belum diselesaikan atau tidak ditemukan.
            </p>
            <p className="text-xl font-bold text-center">
              Selesaikan Level yang tersedia terlebih dahulu
            </p>
            <div>
              <button className={buttonMenu} onClick={handleBacktoLevelMenu}>
                <MdGridOn className="inline-block text-4xl" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultPage;
