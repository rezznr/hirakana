import { LevelPage } from "./_partials/levelPage";

export const metadata = {
  title: "Detail Pembayaran",
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
