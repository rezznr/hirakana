import MenuLatihan from "./_partials/menu-latihan";

function Page() {
  return (
    <div className="relative flex flex-col items-center gap-8 px-4 md:gap-16 md:px-8 lg:px-16">
      <div className="flex flex-col items-center uppercase gap-2 md:gap-3 font-poppins">
        <h2 className="text-black italic font-extrabold text-3xl md:text-4xl lg:text-5xl">
          Latihan Huruf
        </h2>
        <h3 className="text-black font-extrabold text-2xl md:text-3xl lg:text-4xl">
          Hiragana Dan Katakana
        </h3>
      </div>
      <MenuLatihan />
      <div className="flex flex-col gap-4 md:gap-6 lg:gap-8"></div>
    </div>
  );
}

export default Page;
