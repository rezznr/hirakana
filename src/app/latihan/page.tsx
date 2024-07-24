import MenuLatihan from "./_partials/menu-latihan";

function Page() {
  return (
    <div className="relative flex flex-col items-center gap-10 ">
      <div className="flex flex-col items-center uppercase gap-3">
        <h2 className="text-black text-[33px] italic font-extrabold font-['Poppins']">
          Latihan Huruf
        </h2>
        <h3 className="text-black text-[23px] font-extrabold font-['Poppins']">
          Hiragana Dan Katakana
        </h3>
      </div>
      <MenuLatihan />
      <div className="flex flex-col gap-5 "></div>
    </div>
  );
}

export default Page;
