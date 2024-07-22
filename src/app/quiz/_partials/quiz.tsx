const quizQuestions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    id: 2,
    question: "What is the capital of England?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "London",
  },
  {
    id: 3,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    id: 4,
    question: "What is the capital of England?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "London",
  },
];

const random = [2, 1, 4, 3];

export function Quiz() {
  const shuffledQuestions = random.map((id) =>
    quizQuestions.find((question) => question.id === id)
  );

  return (
    <div>
      {shuffledQuestions.map((question, index) => (
        <div key={index}>
          <p>{question?.id}</p>
          <h2>{question?.question}</h2>
          {question?.options.map((option, index) => (
            <div key={index}>
              <input type="radio" value={option} name={`question${index}`} />
              <label>{option}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
