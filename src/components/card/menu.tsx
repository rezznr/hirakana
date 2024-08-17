import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface Menu {
  name: string;
  icon: StaticImageData;
  link: string;
}

function Menus({ name, icon, link }: Menu) {
  return (
    <Link className="font-bold font-sans" href={link}>
      <div className="bg-gradient-to-b from-[#fc4774] to-[#dca7a2] rounded-[17px] shadow flex flex-col items-center justify-center hover:scale-110 active:scale-95 transition-transform w-[200px] md:w-[170px] md:h-[180px]">
        <Image
          className="p-5"
          src={icon}
          alt={`${name}-menu`}
          width={150}
          height={150}
          loading="lazy"
        />
        <p className="text-black text-[22px]">{name}</p>
      </div>
    </Link>
  );
}

export { Menus };
