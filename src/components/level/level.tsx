// src/components/Level.tsx
import { useState } from "react";
import Question from "@/components/question/question";
import questions from "@/data/latihan/hiragana/question.json";

interface LevelProps {
  level: number;
  onComplete: (score: number) => void;
}

const Level: React.FC<LevelProps> = ({ level, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const levelQuestions =
    questions.levels.find((lvl) => lvl.level === level)?.questions || [];
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
    if (currentQuestion < levelQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const score = (correctAnswers / levelQuestions.length) * 100;
      onComplete(score);
    }
  };

  return (
    <div>
      <Question
        {...levelQuestions[currentQuestion]}
        onAnswer={handleAnswer}
        reset={resetQuestion}
      />
      {isAnswered && <button onClick={handleNextQuestion}>Next</button>}
    </div>
  );
};

export default Level;
