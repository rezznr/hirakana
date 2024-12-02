"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface Menu {
  name: string;
  icon: StaticImageData;
  link: string;
}

function Menus({ name, icon, link }: Menu) {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <Link className="font-bold font-sans" href={link}>
      <div className="bg-gradient-to-b from-[#fc4774] to-[#dca7a2] rounded-[17px] shadow flex flex-col items-center justify-center hover:scale-110 active:scale-95 transition-transform w-[200px] md:w-[170px] md:h-[180px]">
        {/* Skeleton Loader */}
        {loading && (
          <div className="flex flex-col justify-center items-center w-full h-full space-y-3 animate-pulse">
            <div className="w-[150px] h-[150px] bg-gradient-to-b from-[#fc4774] to-[#dca7a2] rounded-xl" />
            {/* <div className="w-2/3 h-[20px] bg-gray-300 rounded-md" /> */}
          </div>
        )}

        {/* Image */}
        <Image
          className={`p-5 transition-opacity duration-500 ${
            loading ? "hidden opacity-0" : "opacity-100"
          }`}
          src={icon}
          alt={`${name}-menu`}
          width={150}
          height={150}
          onLoad={handleLoadingComplete}
          loading="eager"
        />

        {/* Menu Name */}
        <p className={`text-black text-[22px]`}>{name}</p>
      </div>
    </Link>
  );
}

export { Menus };
