import { Latihan } from "./_partials/latihan";

export const pathName = "Hiragana";
export const apiURL = "/api/questions";
export const url = "/latihan/katakana";

export const metadata = {
  title: `Latihan | ${pathName}`,
};

const LatihanPage = () => {
  return (
    <>
      <Latihan apiURL={apiURL} pathName={pathName} url={url} />
    </>
  );
};

export default LatihanPage;
