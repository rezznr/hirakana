import ResultPage from "./_partials/result";

type Params = {
  params: {
    level: string;
  };
};

function Page({ params: { level } }: Params) {
  return (
    <div className="">
      <ResultPage level={level} />
    </div>
  );
}

export default Page;
