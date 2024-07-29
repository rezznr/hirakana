"use client";
import { useState } from "react";
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
  onComplete: (score: number) => void;
}

const Level: React.FC<LevelProps> = ({ level, questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [resetQuestion, setResetQuestion] = useState(false);

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
      const score = (correctAnswers / questions.length) * 100;
      onComplete(score);
    }
  };

  return (
    <div>
      <p>level {level}</p>
      <Question
        {...questions[currentQuestion]}
        onAnswer={handleAnswer}
        reset={resetQuestion}
      />
      {isAnswered && <button onClick={handleNextQuestion}>Next</button>}
    </div>
  );
};

export default Level;
