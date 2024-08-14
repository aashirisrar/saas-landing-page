import Image from "next/image";
import Link from "next/link";
import {
  BsInstagram,
  BsLinkedin,
  BsPinterest,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

import Logo from "@/public/assets/logosaas.png";

export const Footer = () => {
  return (
    <section className="xl:px-96 lg:px-20 py-[40px] px-5 bg-black leading-5 text-[14px] text-[#BCBCBC]">
      <div className="flex flex-col items-center justify-center gap-6">
        <div>
          <Image alt="logo-footer" width={40} height={40} src={Logo} />
        </div>
        <div className="flex flex-col items-center justify-center gap-6 text-[14px] leading-[20px]">
          <Link href="#">About</Link>
          <Link href="#">Features</Link>
          <Link href="#">Customers</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Help</Link>
          <Link href="#">Careers</Link>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Link href="#">
            <BsTwitter className="w-6 h-6" />
          </Link>
          <Link href="#">
            <BsInstagram className="w-6 h-6" />
          </Link>
          <Link href="#">
            <BsLinkedin className="w-6 h-6" />
          </Link>
          <Link href="#">
            <BsPinterest className="w-6 h-6" />
          </Link>
          <Link href="#">
            <BsYoutube className="w-6 h-6" />
          </Link>
        </div>
        <div>© 2024 Your Company, Inc. All rights reserved.</div>
      </div>
    </section>
  );
};
