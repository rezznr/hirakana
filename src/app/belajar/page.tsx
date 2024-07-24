import React from "react";
import MenuBelajar from "./_partials/menu-belajar";

function Page() {
  return (
    <div className="relative flex flex-col items-center gap-10 ">
      <div className="flex flex-col items-center uppercase gap-3">
        <h2 className="text-black text-[33px] italic font-extrabold font-['Poppins']">
          Belajar Huruf
        </h2>
        <h3 className="text-black text-[23px] font-extrabold font-['Poppins']">
          Hiragana Dan Katakana
        </h3>
      </div>
      <MenuBelajar />
      <div className="flex flex-col gap-5 "></div>
    </div>
  );
}

export default Page;
