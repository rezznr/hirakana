import React from "react";
import { Quiz } from "./_partials/quiz";

function Page() {
  return (
    <div className="flex flex-col justify-center items-center p-20">
      <h2>Quiz</h2>
      <Quiz />
    </div>
  );
}

export default Page;
