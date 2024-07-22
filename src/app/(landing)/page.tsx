import Menu from "./_partials/menu";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center gap-10 ">
      <div className="flex flex-col items-center uppercase gap-3">
        <h2 className="text-black text-[33px] italic font-extrabold font-['Poppins']">
          Pembelajaran Huruf Jepang
        </h2>
        <h3 className="text-black text-[23px] font-extrabold font-['Poppins']">
          Hiragana Dan Katakana
        </h3>
      </div>
      <Menu />

      <div className="flex flex-col gap-5 "></div>
    </main>
  );
}
