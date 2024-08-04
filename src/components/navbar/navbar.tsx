import Image from "next/image";
import React from "react";
import { logo } from "@assets/img/index";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="relative top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-4 md:px-16 lg:px-32 py-10">
        <Link href="/">
          <Image
            className="h-auto"
            width={150}
            height={50}
            src={logo}
            alt="nav-logo"
          />
        </Link>
        {/* <div className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-gray-800 hover:text-gray-600">
            About
          </Link>
          <Link href="/services" className="text-gray-800 hover:text-gray-600">
            Services
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-gray-600">
            Contact
          </Link>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
