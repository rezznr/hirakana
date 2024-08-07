"use client";
import { useState, useCallback } from "react";
import Question from "@/components/question/question";
import { GrLinkNext } from "react-icons/gr";
import { MdDone, MdGridOn } from "react-icons/md";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";

// Define the QuestionData interface
interface QuestionData {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

// Define the LevelProps interface
interface LevelProps {
  level: number;
  questions: QuestionData[];
  onComplete: (level: number, score: number) => void;
  url: string;
}

// Main component
const Level: React.FC<LevelProps> = ({ level, questions, onComplete, url }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [resetQuestion, setResetQuestion] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showLoading, setShowLoading] = useState(false); // New loading state
  const router = useRouter();

  // Function to open the confirmation modal
  const handleButtonClick = () => {
    setShowModal(true);
  };

  // Function to confirm and redirect to the menu
  const handleConfirm = () => {
    setShowModal(false);
    router.push(url);
  };

  // Function to close the confirmation modal
  const handleClose = () => {
    setShowModal(false);
  };

  // Handle answer selection
  const handleAnswer = useCallback(
    (isCorrect: boolean) => {
      if (isCorrect) {
        setCorrectAnswers((prev) => prev + 1);
      }
      setIsAnswered(true);
    },
    [setCorrectAnswers]
  );

  // Handle transition to the next question or completion
  const handleNextQuestion = useCallback(() => {
    setIsAnswered(false);
    setResetQuestion(!resetQuestion);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // Display loading state
      setShowLoading(true);

      // Calculate the score
      const score = (correctAnswers / questions.length) * 100;

      // Call the onComplete function and immediately navigate to the results page
      onComplete(level, score);
    }
  }, [
    currentQuestion,
    questions.length,
    correctAnswers,
    level,
    onComplete,
    resetQuestion,
  ]);

  // Determine if the current question is the last one
  const isLastQuestion = currentQuestion >= questions.length - 1;

  // Set button text and styling based on the question state
  const buttonText = isLastQuestion ? "Done" : "Next";
  const ButtonIcon = isLastQuestion ? MdDone : GrLinkNext;
  const buttonClass = isLastQuestion
    ? "bg-gradient-to-b from-[#B3FF77] to-[#FFC3C3] hover:bg-[#7DFF17]/80"
    : "bg-gradient-to-b from-[#FFB5B5] to-[#EDE1D5] hover:bg-[#FF9696]/80";

  return (
    <div className="flex flex-col w-[95%] items-center justify-center gap-5 md:w-full">
      <div className="font-sans shadow-lg bg-gradient-to-b from-[#FF9696] to-[#FFD3D3] py-5 px-16 flex flex-col items-center rounded-tl-[11px] rounded-tr-[11px]">
        <h2 className="text-3xl text-[#251C1C] font-extrabold ">
          Level {level}
        </h2>
      </div>
      {/* Display loading if showLoading is true */}
      {showLoading ? (
        <Loading message="Menghitung Nilai, Mohon Tunggu sebentar" />
      ) : (
        <>
          {currentQuestion < questions.length && (
            <Question
              {...questions[currentQuestion]}
              onAnswer={handleAnswer}
              reset={resetQuestion}
            />
          )}
          {isAnswered && (
            <button
              className={`font-bold text-2xl py-3 px-20 rounded-3xl flex flex-row items-center justify-center gap-3 hover:scale-105 active:scale-95 transform transition duration-300 font-poppins ${buttonClass}`}
              onClick={handleNextQuestion}
            >
              {buttonText}
              <ButtonIcon className="inline-block ml-2" />
            </button>
          )}
        </>
      )}
      <div className="fixed group bottom-6 md:bottom-24">
        <button
          className="flex items-center bg-[#F94C76]/30 rounded-xl hover:bg-[#F94C76]/50 hover:scale-105 active:scale-100 transform transition duration-300 py-5 px-4 font-extrabold font-poppins"
          onClick={handleButtonClick}
        >
          <MdGridOn className="inline-block text-xl md:text-2xl" />
        </button>
        <div className="absolute bottom-auto mb-2 hidden group-hover:flex justify-center items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <span className="bg-red-300 text-white text-sm rounded-xl py-1 px-2 shadow-lg whitespace-nowrap">
            Kembali ke menu Level
          </span>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-sm relative">
            <button
              className="absolute text-xl top-1 right-5 text-gray-500 hover:text-gray-700"
              onClick={handleClose}
            >
              &times;
            </button>
            <h3 className="text-lg font-bold mb-4">
              Apakah Kamu yakin ingin kembali ke menu?
            </h3>
            <p className="mb-6">Jawaban akan direset.</p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-red-300 px-4 font-bold py-2 rounded hover:bg-red-200"
                onClick={handleConfirm}
              >
                Ya, Kembali
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                onClick={handleClose}
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Level;
