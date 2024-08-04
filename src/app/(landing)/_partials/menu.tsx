import Image from "next/image";
import Link from "next/link";
import React from "react";
import { menu } from "./menu.data";

function Menu() {
  return (
    <div className="flex flex-col gap-10 md:flex-row md:gap-20">
      {menu.map((item, i) => (
        <Link className="font-bold font-sans" href={item.link} key={i}>
          <div className="bg-gradient-to-b from-[#fc4774] to-[#dca7a2] rounded-[17px] shadow flex flex-col items-center justify-center hover:scale-110 active:scale-95 transition-transform md:w-[170px] md:h-[180px]">
            <Image
              className="p-5"
              src={item.icon}
              alt={`${item.name}-menu`}
              width={150}
              height={150}
            />
            <p className="text-black text-[22px]">{item.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Menu;
