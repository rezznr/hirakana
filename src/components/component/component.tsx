import { gerbang, lamp2, lamp3, orang1, orang2 } from "@assets/img";
import Image from "next/image";
import React from "react";

function Component() {
  return (
    <div>
      <Image
        className="absolute -z-20 left-[3%] w-[25%] bottom-0 hidden lg:block"
        src={gerbang}
        width={300}
        height={300}
        alt=""
      />
      <Image
        className="absolute -z-10 left-[15%] bottom-0 w-[10%] hidden lg:block"
        src={orang2}
        width={120}
        height={120}
        alt=""
      />
      <Image
        className="absolute -z-10 right-5 bottom-0 w-[10%] hidden lg:block"
        src={orang1}
        width={120}
        alt=""
      />
      <Image
        className="absolute right-[5%] top-0 w-[9%] block md:hidden"
        src={lamp3}
        width={50}
        alt=""
      />
      <Image
        className="absolute right-[15%] top-0 w-[10%] block md:hidden"
        src={lamp2}
        width={50}
        alt=""
      />
    </div>
  );
}

export { Component };
