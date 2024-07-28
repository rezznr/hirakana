// src/components/Question.tsx
import { useState, useEffect } from "react";

interface QuestionProps {
  question: string;
  options: string[];
  answer: string;
  onAnswer: (isCorrect: boolean) => void;
  reset: boolean;
}

const Question: React.FC<QuestionProps> = ({
  question,
  options,
  answer,
  onAnswer,
  reset,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  useEffect(() => {
    setSelectedOption(null);
    setHasAnswered(false);
  }, [reset]);

  const handleOptionClick = (option: string) => {
    if (!hasAnswered) {
      setSelectedOption(option);
      onAnswer(option === answer);
      setHasAnswered(true);
    }
  };

  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {options.map((option) => (
          <li key={option} onClick={() => handleOptionClick(option)}>
            {option}
          </li>
        ))}
      </ul>
      {selectedOption !== null && (
        <p>{selectedOption === answer ? "Correct!" : "Incorrect"}</p>
      )}
    </div>
  );
};

export default Question;
