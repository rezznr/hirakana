import { gerbang, lamp3, orang1, orang2 } from "@assets/img";
import Image from "next/image";
import React from "react";

function Component() {
  return (
    <div>
      <Image
        className="fixed left-[3%] bottom-0 hidden md:block"
        src={gerbang}
        width={300}
        height={300}
        alt=""
      />
      <Image
        className="fixed left-[15%] bottom-0 hidden md:block"
        src={orang2}
        width={120}
        height={120}
        alt=""
      />
      <Image
        className="fixed right-5 bottom-0 hidden md:block"
        src={orang1}
        width={120}
        alt=""
      />
      <Image
        className="fixed right-5 top-0 w-[15%] block md:hidden"
        src={lamp3}
        width={50}
        alt=""
      />
    </div>
  );
}

export { Component };
