import { LevelPage } from "./_partials/levelPage";

export const metadata = {
  title: "Level 1",
  // buat jadi dynamic
};

type Params = {
  params: {
    level: string;
  };
};

function page({ params: { level } }: Params) {
  return (
    <>
      <LevelPage level={level} />
    </>
  );
}

export default page;
