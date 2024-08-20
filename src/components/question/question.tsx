import { useState, useEffect, useCallback } from "react";

interface QuestionProps {
  question: string;
  options: string[];
  answer: string;
  onAnswer: (isCorrect: boolean) => void;
  reset: boolean;
  questionNumber: number;
  totalQuestions: number;
}

const Question: React.FC<QuestionProps> = ({
  question,
  options,
  answer,
  onAnswer,
  reset,
  questionNumber,
  totalQuestions,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Reset selected option when the `reset` prop changes
  useEffect(() => {
    setSelectedOption(null);
  }, [reset]);

  // Handle option click
  const handleOptionClick = useCallback(
    (option: string) => {
      if (selectedOption === null) {
        setSelectedOption(option);
        onAnswer(option === answer);
      }
    },
    [selectedOption, answer, onAnswer]
  );

  return (
    <>
      <div className="flex flex-col gap-5 font-poppins">
        <div className="flex flex-col justify-center items-center rounded shadow-xl py-5 px-10 bg-gradient-to-tr from-[#fffdfc] to-[#e1f7fd]">
          <h2 className="text-2xl font-bold text-[#FC4774]">
            {questionNumber}. {question}
          </h2>
          {/* <p className="font-poppins font-bold">
            {questionNumber}/{totalQuestions}
          </p> */}
        </div>
        <div className="grid grid-cols-2 gap-5">
          {options.map((option) => {
            // Determine button styling based on the selected option and correctness
            const isSelected = selectedOption === option;
            const isCorrect = option === answer;
            let buttonClass =
              "p-5 rounded-xl uppercase font-extrabold transform transition duration-300 md:text-xl ";

            if (isSelected) {
              buttonClass += isCorrect
                ? "bg-gradient-to-br from-green-500 to-green-400 scale-95 md:scale-100"
                : "bg-gradient-to-br from-red-500 to-red-400 scale-95 md:scale-100";
            } else {
              buttonClass +=
                "bg-gradient-to-br from-[#ff7e9e] to-[#ffc2d1] hover:scale-105 active:scale-100 hover:bg-[#ff7e9e]/90";
            }

            return (
              <button
                className={buttonClass}
                key={option}
                onClick={() => handleOptionClick(option)}
                disabled={selectedOption !== null} // Disable button after selection
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Question;
