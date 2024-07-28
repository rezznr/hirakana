// src/components/level/level.tsx
import { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

interface LevelProps {
  level: number;
  questions: Question[];
  onComplete: (score: number) => void;
}

const Level: React.FC<LevelProps> = ({ level, questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer: string) => {
    if (questions[currentQuestionIndex].answer === answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onComplete((score / questions.length) * 100);
    }
  };

  if (questions.length === 0) {
    return <div>No questions available for this level.</div>;
  }

  return (
    <div>
      <h2>Level {level}</h2>
      <div>
        <p>{questions[currentQuestionIndex].question}</p>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Level;
