import { LearnKatakana } from "./_partials/learnKatakana";

export const metadata = {
  title: "Katakana | Belajar",
  description: "Belajar huruf Katakana",
};

function Page() {
  return (
    <div>
      <p>{`< back`}</p>
      <LearnKatakana />
    </div>
  );
}

export default Page;
