"use client";
import { useState } from "react";
// import { useRouter } from "next/navigation";
import Question from "@/components/question/question";
import { GrLinkNext } from "react-icons/gr";
import { MdDone } from "react-icons/md";

interface QuestionData {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

interface LevelProps {
  level: number;
  questions: QuestionData[];
  onComplete: (level: number, score: number) => void;
}

const Level: React.FC<LevelProps> = ({ level, questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [resetQuestion, setResetQuestion] = useState(false);
  // const router = useRouter();

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }
    setIsAnswered(true);
  };

  const handleNextQuestion = () => {
    setIsAnswered(false);
    setResetQuestion(!resetQuestion);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate the score
      const score = (correctAnswers / questions.length) * 100;
      // Log the score for the level
      console.log(`Score for level ${level}: ${score}%`);
      // Call the onComplete function
      onComplete(level, score);
    }
  };
  const isLastQuestion = currentQuestion >= questions.length - 1;
  const buttonText = isLastQuestion ? "Done" : "Next";
  const ButtonIcon = isLastQuestion ? MdDone : GrLinkNext;
  const buttonClass = isLastQuestion
    ? "bg-[#7DFF17] hover:bg-[#7DFF17]/80"
    : "bg-[#FFE27D] hover:bg-[#FFE27D]/80";

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="font-sans shadow-lg bg-[#ff9595] py-5 px-10 flex flex-col items-center rounded-tl-[11px] rounded-tr-[11px]">
        <h2 className="text-3xl font-extrabold italic">Hiragana</h2>
        <p className="text-2xl font-extrabold underline">Level {level}</p>
      </div>
      <Question
        {...questions[currentQuestion]}
        onAnswer={handleAnswer}
        reset={resetQuestion}
      />
      {isAnswered && (
        <button
          className={`font-bold text-xl py-3 px-10 rounded-xl flex flex-row items-center justify-center gap-3 ${buttonClass}`}
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
