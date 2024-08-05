import { Latihan } from "./_partials/latihan";

export const pathName = "Katakana";
export const apiURL = "/api/latihan/katakana";
export const url = "/latihan/katakana";
export const localStorage = "katakanaTrainCompletedLevels";

export const metadata = {
  title: `Latihan | ${pathName}`,
};

const LatihanPage = () => {
  return (
    <>
      <Latihan
        localStorageName={localStorage}
        apiURL={apiURL}
        pathName={pathName}
        url={url}
      />
    </>
  );
};

export default LatihanPage;
