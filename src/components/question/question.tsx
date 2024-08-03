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
      <div className="flex justify-center items-center rounded shadow-xl py-5 px-10 bg-gradient-to-tr from-[#fffdfc] to-[#e1f7fd]">
        <h2 className="text-2xl font-bold text-[#FC4774]">{question}</h2>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {options?.map((option) => {
          let buttonClass =
            "p-5 rounded-xl uppercase font-extrabold transform transition duration-300 ";

          if (selectedOption === option) {
            // Determine if the selected option is correct or not
            buttonClass +=
              option === answer ? "animated-bg-green" : "animated-bg-red";
          } else {
            buttonClass +=
              "bg-gradient-to-br from-[#ff7e9e] to-[#ffc2d1] active:scale-100 hover:bg-[#ff7e9e]/90 hover:scale-105";
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
