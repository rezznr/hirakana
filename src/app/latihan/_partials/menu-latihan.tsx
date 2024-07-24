import Image from "next/image";
import Link from "next/link";
import React from "react";
import { menu } from "./menu.data";

function MenuLatihan() {
  return (
    <div className="flex sm:flex-col lg:flex-row gap-4">
      {menu.map((item, i) => (
        <Link
          className="flex flex-col items-center font-bold"
          href={item.link}
          key={i}
        >
          <div className="w-[170px] h-[147px] bg-green-100/opacity-0 rounded-[17px] shadow border-2 border-black flex items-center justify-center">
            <Image
              className="p-5"
              src={item.icon}
              alt={`${item.name}-menu`}
              width={150}
              height={150}
            />
          </div>
          <p className="text-black text-[22px] font-black font-['Poppins']">
            {item.name}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default MenuLatihan;
