// src/components/Question.tsx
import { useState } from "react";

interface QuestionProps {
  question: string;
  options: string[];
  answer: string;
}

const Question: React.FC<QuestionProps> = ({ question, options, answer }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
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
      {selectedOption && (
        <p>{selectedOption === answer ? "Correct!" : "Incorrect"}</p>
      )}
    </div>
  );
};

export default Question;
