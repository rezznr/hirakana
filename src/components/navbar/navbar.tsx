import Image from "next/image";
import React from "react";
import { logo } from "@assets/img/index";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="px-[20vh] pt-10 absolute">
      <Link href="/">
        <Image width={150} src={logo} alt="nav-logo" />
      </Link>
    </nav>
  );
}

export default Navbar;
