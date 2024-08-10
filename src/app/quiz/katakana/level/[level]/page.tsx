import { apiUrl, localStorage, url } from "../../config";
import { LevelPage } from "@/components/levelPage/levelPage";

export async function generateMetadata({ params: { level } }: Params) {
  return {
    title: `Quiz | Level ${level}`,
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
      <LevelPage
        localStorageName={localStorage}
        apiURL={apiUrl}
        url={url}
        level={level}
      />
    </>
  );
}

export default page;
