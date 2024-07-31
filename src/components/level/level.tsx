"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Question from "@/components/question/question";

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
  const router = useRouter();

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
      // Redirect to the level selection page
    }
  };

  return (
    <div>
      <p>Level {level}</p>
      <Question
        {...questions[currentQuestion]}
        onAnswer={handleAnswer}
        reset={resetQuestion}
      />
      {isAnswered && (
        <button onClick={handleNextQuestion}>
          {currentQuestion < questions.length - 1 ? "Next" : "Done"}
        </button>
      )}
    </div>
  );
};

export default Level;
