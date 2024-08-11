import Link from "next/link";
import React from "react";
import { MdHome } from "react-icons/md";

export function BackHomeBtn() {
  return (
    <div className=" group">
      <Link
        className="flex items-center bg-[#F94C76]/50 rounded-xl hover:bg-[#F94C76]/90 hover:scale-105 active:scale-100 transform transition duration-300 py-5 px-4 font-extrabold font-poppins"
        href={"/"}
      >
        <MdHome className="inline-block text-xl md:text-2xl" />
      </Link>
      <div className="absolute bottom-auto mb-2 hidden group-hover:flex justify-center items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <span className="bg-[#F94C76]/50 text-white text-sm rounded-xl py-1 px-2 shadow-lg whitespace-nowrap">
          Kembali ke menu Awal
        </span>
      </div>
    </div>
  );
}
