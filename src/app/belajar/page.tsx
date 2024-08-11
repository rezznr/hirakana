import MenuBelajar from "./_partials/menu-belajar";
import { BackHomeBtn } from "@/components/backHomeBtn/backHome";

function Page() {
  return (
    <div className="relative flex flex-col items-center gap-8 px-4 md:gap-16 md:px-8 lg:px-16">
      <div className="flex flex-col items-center uppercase gap-2 md:gap-3 font-poppins">
        <h2 className="text-black italic font-extrabold text-2xl md:text-3xl lg:text-4xl">
          Belajar Huruf
        </h2>
        <h3 className="text-black font-extrabold text-xl md:text-2xl lg:text-3xl">
          Hiragana Dan Katakana
        </h3>
      </div>
      <MenuBelajar />
      <BackHomeBtn />
    </div>
  );
}

export default Page;
