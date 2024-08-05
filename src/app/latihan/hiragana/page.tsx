import { Latihan } from "./_partials/latihan";

export const pathName = "Hiragana";
export const apiURL = "/api/latihan/hiragana";
export const url = "/latihan/hiragana";
export const localStorage = "hiraganaTrainCompletedLevels";

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
