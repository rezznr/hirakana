import Image from "next/image";
import Link from "next/link";
import React from "react";
import { menu } from "./menu.data";

function Menu() {
  return (
    <div className="flex sm:flex-col lg:flex-row gap-4">
      {menu.map((item, i) => (
        <Link className="font-bold" href={item.link} key={i}>
          <div className="w-[170px] h-[180px] bg-gradient-to-b from-[#fc4774] to-[#dca7a2] rounded-[17px] shadow flex flex-col items-center justify-center hover:scale-105 active:animate-ping">
            <Image
              className="p-5"
              src={item.icon}
              alt={`${item.name}-menu`}
              width={150}
              height={150}
            />
            <p className="text-black text-[22px] font-black font-['Poppins']">
              {item.name}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Menu;
