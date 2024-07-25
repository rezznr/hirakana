"use client";

import React, { useState, useEffect } from "react";
import Question from "@/components/question/question";

interface QuestionData {
  question: string;
  options: string[];
  answer: string;
}

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch("/quiz/quiz.json");
      const data = await response.json();
      setQuestions(data);
    };
    fetchQuestions();
  }, []);

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  if (currentQuestionIndex >= questions.length) {
    return (
      <div>
        <h1>Kuis Selesai!</h1>
        <p>
          Skor Anda: {score} dari {questions.length}
        </p>
      </div>
    );
  }

  return (
    <div>
      <Question
        question={questions[currentQuestionIndex].question}
        options={questions[currentQuestionIndex].options}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export { Quiz };
