// src/components/Level.tsx
import { useState } from "react";
import Question from "@/components/question/question";
import questions from "@/data/question.json";

interface LevelProps {
  level: number;
  onComplete: () => void;
}

const Level: React.FC<LevelProps> = ({ level, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const levelQuestions =
    questions.levels.find((lvl) => lvl.level === level)?.questions || [];

  const handleNextQuestion = () => {
    if (currentQuestion < levelQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div>
      <Question {...levelQuestions[currentQuestion]} />
      <button onClick={handleNextQuestion}>Next</button>
    </div>
  );
};

export default Level;
