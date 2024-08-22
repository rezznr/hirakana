"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MdSkipNext, MdOutlineLoop, MdGridOn } from "react-icons/md";
import { FaBookOpenReader } from "react-icons/fa6";
import Loading from "@/app/loading";

interface CompletedLevel {
  level: number;
  score: number;
}

const ResultPage = ({
  level,
  url,
  localStorageName,
  pathName,
}: {
  level: string;
  url: string;
  localStorageName: string;
  pathName: string;
}) => {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [currentLevel, setCurrentLevel] = useState<CompletedLevel | null>(null);
  const router = useRouter();
  let buttonMenu =
    "flex flex-col items-center gap-2 md:gap-3 bg-[#F94C76]/30 rounded-xl p-3 md:p-5 hover:bg-[#ffb2b2]/70 hover:scale-105 active:scale-100 transform transition duration-300 px-6 md:px-10 font-extrabold font-poppins text-sm md:text-base lg:text-lg";

  useEffect(() => {
    // Fetch completed levels from localStorage
    const storedCompletedLevels: CompletedLevel[] = JSON.parse(
      localStorage.getItem(localStorageName) || "[]"
    );

    // Find the completed level using the level parameter from the URL
    const currentLevel = storedCompletedLevels.find(
      (lvl) => lvl.level === parseInt(level)
    );
    setCurrentLevel(currentLevel || null);
    setLoading(false);
  }, [level, localStorageName]);

  useEffect(() => {
    // Set message based on current level score
    if (currentLevel) {
      if (currentLevel.score === 100) {
        setMessage(
          "Sempurna! Kamu benar-benar menguasai tantangan ini! Luar biasa!"
        );
      } else if (currentLevel.score >= 95) {
        setMessage(
          "Luar biasa! Hanya sedikit lagi untuk mencapai kesempurnaan. Tetap pertahankan!"
        );
      } else if (currentLevel.score >= 90) {
        setMessage(
          "Kerja hebat! Prestasi kamu mendekati sempurna. Teruskan semangat ini!"
        );
      } else if (currentLevel.score >= 85) {
        setMessage(
          "Hebat! Kamu hampir mencapai tingkat tertinggi, sedikit lagi untuk menjadi sempurna!"
        );
      } else if (currentLevel.score >= 80) {
        setMessage(
          "Kerja yang baik! Kamu telah menunjukkan kemampuan yang kuat. Teruskan kerja kerasmu!"
        );
      } else if (currentLevel.score >= 75) {
        setMessage(
          "Bagus sekali! Kamu telah menguasai sebagian besar tantangan ini. Tingkatkan sedikit lagi untuk hasil yang lebih baik!"
        );
      } else if (currentLevel.score >= 70) {
        setMessage(
          "Bagus! Kamu telah menyelesaikan level ini dengan baik. Pertahankan momentum ini!"
        );
      } else {
        setMessage(
          `Jangan putus asa! Kamu sudah berusaha dengan baik.\n Pertimbangkan untuk membaca ulang materi ${pathName} agar lebih siap dalam mencoba lagi.`
        );
      }
    }
  }, [currentLevel, pathName]);

  const handleRetry = () => {
    // Redirect to the current level for retry
    if (currentLevel) {
      router.push(`${url}/level/${currentLevel.level}`);
    }
  };
  const handleBacktoLevelMenu = () => {
    // Redirect to the level menu
    router.push(url);
  };
  const handleReadMenu = () => {
    // Redirect to the level menu
    router.push(`/belajar/${pathName.toLocaleLowerCase()}`);
  };

  const handleContinue = () => {
    // Redirect to the next level
    if (currentLevel) {
      if (currentLevel.level === 10) {
        // If the current level is the last level, redirect to the home page
        router.push(url);
      } else {
        router.push(`${url}/level/${currentLevel.level + 1}`);
      }
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col items-center justify-center relative font-poppins px-4 md:px-0">
      <div className="absolute flex items-center justify-center w-[120px] md:w-[141px] h-[54px] bg-[#ffb2b2] rounded-[9px] -top-4 z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white py-3">
          Hasil
        </h2>
      </div>

      {currentLevel ? (
        <div className="flex flex-col items-center justify-center gap-5 w-full max-w-[400px] h-[400px] md:max-w-[629px] md:h-[344px] relative bg-[#ff4d4d]/10 rounded-2xl mt-4 p-4">
          <div className="flex flex-col items-center justify-center gap-3 md:gap-5 max-w-xl">
            <h2 className="text-xl md:text-2xl font-extrabold text-center">
              Level {currentLevel.level}
            </h2>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold">
            SCORE: {Math.floor(currentLevel.score)}%
          </h3>
          <p className="text-xl md:text-2xl text-center font-extrabold">
            {message}
          </p>
          <div className="flex justify-center items-center mt-8 gap-4 md:gap-8">
            <div>
              <button className={buttonMenu} onClick={handleBacktoLevelMenu}>
                <MdGridOn className="inline-block text-2xl md:text-3xl" />
                <p className="text-sm md:text-base">Level</p>
              </button>
            </div>
            <div>
              <button className={buttonMenu} onClick={handleRetry}>
                <MdOutlineLoop className="inline-block text-2xl md:text-3xl" />
                <p className="text-sm md:text-base">Ulangi</p>
              </button>
            </div>
            {currentLevel.score >= 70 && currentLevel.level !== 10 ? (
              <div>
                <button className={buttonMenu} onClick={handleContinue}>
                  <MdSkipNext className="inline-block text-2xl md:text-3xl" />
                  <p className="text-sm md:text-base">Selanjutnya</p>
                </button>
              </div>
            ) : (
              <div>
                <button className={buttonMenu} onClick={handleReadMenu}>
                  <FaBookOpenReader className="inline-block text-2xl md:text-3xl" />
                  <p className="text-sm md:text-base">Baca</p>
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-5 w-full max-w-[400px] h-[400px] md:max-w-[629px] md:h-[344px] relative bg-[#ff4d4d]/10 rounded-2xl mt-4 p-4">
          <div className="flex flex-col items-center justify-center gap-3 md:gap-5 max-w-xl">
            <p className="text-xl md:text-2xl font-extrabold text-center">
              Level {level} belum diselesaikan atau tidak ditemukan.
            </p>
            <p className="text-lg md:text-xl font-bold text-center">
              Selesaikan Level yang tersedia terlebih dahulu
            </p>
            <div>
              <button
                className={`mt-8 ${buttonMenu}`}
                onClick={handleBacktoLevelMenu}
              >
                <MdGridOn className="inline-block text-2xl md:text-3xl" />
                <p>Level</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultPage;
