"use client";

import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";

import Logo from "@/public/assets/logosaas.png";

const Navbar = () => {
  return (
    <header className="sticky top-0">
      <div className="flex justify-center items-center text-white bg-black py-3 text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <BsArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="p-5 lg:px-20">
        <div className="flex items-center justify-between">
          <Image src={Logo} alt="Saas Logo" height={40} width={40} />
          <BiMenu className="h-5 w-5 md:hidden" />
          <nav className="hidden md:flex gap-6 text-black/60 items-center">
            <Link href="#">About</Link>
            <Link href="#">Features</Link>
            <Link href="#">Customers</Link>
            <Link href="#">Updates</Link>
            <Link href="#">Help</Link>
            <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
