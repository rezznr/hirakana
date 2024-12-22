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

  const buttonMenu =
    "flex flex-col items-center gap-2 md:gap-3 bg-[#F94C76]/30 rounded-xl p-3 md:p-5 hover:bg-[#ffb2b2]/70 hover:scale-105 active:scale-100 transform transition duration-300 px-6 md:px-10 font-extrabold font-poppins text-sm md:text-base lg:text-lg";

  useEffect(() => {
    const storedCompletedLevels: CompletedLevel[] = JSON.parse(
      localStorage.getItem(localStorageName) || "[]"
    );

    const currentLevel = storedCompletedLevels.find(
      (lvl) => lvl.level === parseInt(level)
    );
    setCurrentLevel(currentLevel || null);
    setLoading(false);
  }, [level, localStorageName]);

  useEffect(() => {
    if (currentLevel) {
      if (currentLevel.score === 100) {
        setMessage(
          "Sempurna! 🌟 Kamu telah menguasai materi ini dengan sempurna. Keren sekali!"
        );
      } else if (currentLevel.score >= 95) {
        setMessage(
          "Luar biasa! ⭐ Tinggal selangkah lagi menuju kesempurnaan. Tetap semangat!"
        );
      } else if (currentLevel.score >= 90) {
        setMessage(
          "Kerja hebat! 🎯 Pemahamanmu sudah sangat baik. Coba lagi untuk hasil yang sempurna!"
        );
      } else if (currentLevel.score >= 85) {
        setMessage(
          "Hebat! 💪 Kamu sudah hampir menguasai semuanya. Sedikit lagi untuk mencapai puncak!"
        );
      } else if (currentLevel.score >= 80) {
        setMessage(
          "Bagus sekali! 📈 Teruskan semangat belajarmu. Kamu bisa lebih baik lagi!"
        );
      } else if (currentLevel.score >= 75) {
        setMessage(
          "Kerja bagus! 👍 Coba pelajari kembali materi yang masih kurang untuk hasil yang lebih baik."
        );
      } else if (currentLevel.score >= 70) {
        setMessage(
          "Cukup baik! 🎯 Kamu sudah di jalur yang benar. Tingkatkan dengan membaca ulang materinya ya!"
        );
      } else if (currentLevel.score >= 60) {
        setMessage(
          `Semangat! 📚 Sepertinya kamu perlu mengulang beberapa konsep ${pathName}. Yuk baca lagi materinya sebelum mencoba kembali!`
        );
      } else if (currentLevel.score >= 50) {
        setMessage(
          `Jangan menyerah! 💡 Ada beberapa konsep ${pathName} yang masih perlu dipahami lebih dalam. Mulai dengan membaca materinya lagi ya!`
        );
      } else {
        setMessage(
          `Ayo mulai dari awal! 📖 Sebelum mencoba lagi, yuk pahami dulu dasar-dasar ${pathName} dengan membaca materinya. Kamu pasti bisa!`
        );
      }
    }
  }, [currentLevel, pathName]);

  const handleRetry = () => {
    if (currentLevel) {
      router.push(`${url}/level/${currentLevel.level}`);
    }
  };

  const handleBacktoLevelMenu = () => {
    router.push(url);
  };

  const handleReadMenu = () => {
    router.push(`/belajar/${pathName.toLocaleLowerCase()}`);
  };

  const handleContinue = () => {
    if (currentLevel) {
      if (currentLevel.level === 10) {
        router.push(url);
      } else {
        router.push(`${url}/level/${currentLevel.level + 1}`);
      }
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative bg-[#ff4d4d]/10 shadow-lg rounded-2xl w-full max-w-md md:max-w-2xl p-6 md:p-8 mt-8">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffb2b2] text-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
          <h2 className="text2xl md:text-3xl font-extrabold">Hasil</h2>
        </div>

        {currentLevel ? (
          <div className="flex flex-col items-center justify-center mt-16 space-y-4">
            <h2 className="text-xl md:text-2xl font-extrabold">
              Level {currentLevel.level}
            </h2>
            <div className="w-32 h-32 bg-[#ffb2b2]/20 rounded-full flex items-center justify-center shadow-inner">
              <span className="text-2xl md:text-3xl font-extrabold">
                {Math.floor(currentLevel.score)}%
              </span>
            </div>
            <p className="text-xl md:text-2xl text-center font-extrabold px-4">
              {message}
            </p>
            <div className="flex flex-wrap justify-center items-center mt-8 gap-4 md:gap-6">
              <button className={buttonMenu} onClick={handleBacktoLevelMenu}>
                <MdGridOn className="inline-block text-2xl md:text-3xl" />
                <p className="text-sm md:text-base">Level</p>
              </button>
              <button className={buttonMenu} onClick={handleRetry}>
                <MdOutlineLoop className="inline-block text-2xl md:text-3xl" />
                <p className="text-sm md:text-base">Ulangi</p>
              </button>
              {currentLevel.score >= 70 && currentLevel.level !== 10 ? (
                <button className={buttonMenu} onClick={handleContinue}>
                  <MdSkipNext className="inline-block text-2xl md:text-3xl" />
                  <p className="text-sm md:text-base">Selanjutnya</p>
                </button>
              ) : (
                <button className={buttonMenu} onClick={handleReadMenu}>
                  <FaBookOpenReader className="inline-block text-2xl md:text-3xl" />
                  <p className="text-sm md:text-base">Baca Materi</p>
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-16 space-y-4">
            <h2 className="text-xl md:text-2xl font-extrabold">
              Level {level} belum diselesaikan atau tidak ditemukan.
            </h2>
            <p className="text-lg md:text-xl font-bold text-center">
              Selesaikan Level yang tersedia terlebih dahulu
            </p>
            <button
              className={`${buttonMenu} mt-4`}
              onClick={handleBacktoLevelMenu}
            >
              <MdGridOn className="inline-block text-2xl md:text-3xl" />
              <p className="text-sm md:text-base">Level</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultPage;