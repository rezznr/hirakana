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
    <div className="flex flex-col gap-5 font-poppins">
      <div className="flex justify-center items-center bg-[#fffdfc] rounded-[17px] shadow py-5 px-10">
        <h2 className="text-2xl font-bold">{question}</h2>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {options?.map((option) => {
          let buttonClass =
            "p-5 rounded-xl uppercase font-bold transform transition ";
          if (selectedOption === option) {
            buttonClass += option === answer ? " bg-green-500" : " bg-red-500";
          } else {
            buttonClass +=
              "bg-white hover:text-black hover:bg-gray/75 hover:scale-105";
          }
          return (
            <button
              className={buttonClass}
              key={option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
      {/* {selectedOption !== null && (
        <p>{selectedOption === answer ? "Correct!" : "Incorrect"}</p>
      )} */}
    </div>
  );
};

export default Question;
