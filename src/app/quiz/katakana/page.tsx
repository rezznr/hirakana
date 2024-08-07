import { Latihan } from "./_partials/latihan";
import { apiUrl, localStorage, pathName, url } from "./config";

export const metadata = {
  title: `Quiz | ${pathName}`,
};

const LatihanPage = () => {
  return (
    <>
      <Latihan
        localStorageName={localStorage}
        apiURL={apiUrl}
        pathName={pathName}
        url={url}
      />
    </>
  );
};

export default LatihanPage;
