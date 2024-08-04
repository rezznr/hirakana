import { url } from "../../../page";
import ResultPage from "./_partials/result";

type Params = {
  params: {
    level: string;
  };
};

function Page({ params: { level } }: Params) {
  return (
    <div>
      <ResultPage url={url} level={level} />
    </div>
  );
}

export default Page;
