import { localStorage, pathName, url } from "../../../config";
import ResultPage from "@/components/result/result";

type Params = {
  params: {
    level: string;
  };
};

function Page({ params: { level } }: Params) {
  return (
    <div>
      <ResultPage
        localStorageName={localStorage}
        url={url}
        level={level}
        pathName={pathName}
      />
    </div>
  );
}

export default Page;
