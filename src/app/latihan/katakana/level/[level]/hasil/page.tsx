import { localStorage, url } from "../../../page";
import ResultPage from "./_partials/result";

type Params = {
  params: {
    level: string;
  };
};

function Page({ params: { level } }: Params) {
  return (
    <div>
      <ResultPage localStorageName={localStorage} url={url} level={level} />
    </div>
  );
}

export default Page;
