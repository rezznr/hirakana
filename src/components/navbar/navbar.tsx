import Image from "next/image";
import React from "react";
import { logo } from "@assets/img/index";
import Link from "next/link";

function Navbar() {
  return (
    <div className="px-[20vh] pt-10 absolute">
      <Link href="/">
        <Image width={150} src={logo} alt="nav-logo" />
      </Link>
    </div>
  );
}

export default Navbar;
