"use client";

import Image from "next/image";

import starImage from "@/public/assets/star.png";
import springImage from "@/public/assets/spring.png";

import Button from "@/components/Button";
import Heading from "@/components/Heading";

export const CallToAction = () => {
  return (
    <section className="overflow-x-clip xl:px-96 lg:px-20 py-[96px] px-5 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
      <div className="relative">
        <Heading
          heading="Sign up for free today"
          subHeading="Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts."
        />
        <Image
          src={starImage}
          width={360}
          height={360}
          alt="star Image"
          className="hidden md:block absolute -left-[250px] -top-[137px]"
        />
        <Image
          src={springImage}
          width={360}
          height={360}
          alt="spring Image"
          className="hidden md:block absolute -right-[231px] -top-[19px]"
        />
      </div>
      <div className="flex items-center justify-center gap-2 pt-[40px]">
        <Button onClick={() => {}} title="Get for free" />
        <Button
          className="bg-transparent text-black"
          onClick={() => {}}
          title="Learn More"
          arrow
        />
      </div>
    </section>
  );
};
