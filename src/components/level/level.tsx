"use client";
import { useState, useCallback } from "react";
import Question from "@/components/question/question";
import { GrLinkNext } from "react-icons/gr";
import { MdDone } from "react-icons/md";

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
}

// Main component
const Level: React.FC<LevelProps> = ({ level, questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [resetQuestion, setResetQuestion] = useState(false);

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
      // Calculate the score
      const score = (correctAnswers / questions.length) * 100;

      // Call the onComplete function
      onComplete(level, score);

      // Hide the question immediately after completion
      setCurrentQuestion(questions.length); // Move past the last question
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
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="font-sans shadow-lg bg-gradient-to-b from-[#FF9696] to-[#FFD3D3] py-5 px-16 flex flex-col items-center rounded-tl-[11px] rounded-tr-[11px]">
        <h2 className="text-3xl text-[#251C1C] font-extrabold ">
          Level {level}
        </h2>
      </div>
      {currentQuestion < questions.length && (
        <Question
          {...questions[currentQuestion]}
          onAnswer={handleAnswer}
          reset={resetQuestion}
        />
      )}
      {isAnswered && (
        <button
          className={`font-bold text-2xl py-3 px-20 rounded-3xl flex flex-row items-center justify-center gap-3 hover:scale-105 active:scale-95 transform transition duration-300 font-pottaOne ${buttonClass}`}
          onClick={handleNextQuestion}
        >
          {buttonText}
          <ButtonIcon className="inline-block ml-2" />
        </button>
      )}
    </div>
  );
};

export default Level;
