import { apiURL, url } from "../../page";
import { LevelPage } from "./_partials/levelPage";

export async function generateMetadata({ params: { level } }: Params) {
  return {
    title: `Latihan | Level ${level}`,
    description: `This is Level ${level} of Latihan Japanese.`,
    keywords: `level, ${level}, hiragana, katakana, japanese`,
    author: "RezaNR",
  };
}

type Params = {
  params: {
    level: string;
  };
};

function page({ params: { level } }: Params) {
  return (
    <>
      <LevelPage apiURL={apiURL} url={url} level={level} />
    </>
  );
}

export default page;
