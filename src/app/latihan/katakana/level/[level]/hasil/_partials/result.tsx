"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface CompletedLevel {
  level: number;
  score: number;
}

const ResultPage = ({ level }: { level: string }) => {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [currentLevel, setCurrentLevel] = useState<CompletedLevel | null>(null);
  const router = useRouter();

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

  const handleContinue = () => {
    // Redirect to the next level
    if (currentLevel) {
      router.push(`/latihan/katakana/level/${currentLevel.level + 1}`);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {currentLevel ? (
        <>
          <h1>Hasil Level {currentLevel.level}</h1>
          <p>Skor Anda: {Math.floor(currentLevel.score)}%</p>
          <p>{message}</p>
          {currentLevel.score < 70 ? (
            <button onClick={handleRetry}>Coba Lagi</button>
          ) : (
            <button onClick={handleContinue}>Lanjut ke Level Berikutnya</button>
          )}
        </>
      ) : (
        <p>Level {level} belum diselesaikan atau tidak ditemukan.</p>
      )}
    </div>
  );
};

export default ResultPage;
