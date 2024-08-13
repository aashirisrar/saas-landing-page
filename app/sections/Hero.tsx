"use client";

import Image from "next/image";

import Button from "@/components/Button";
import Tag from "@/components/Tag";
import cogImage from "@/public/assets/cog.png";
import cylinderImage from "@/public/assets/cylinder.png";
import noodeImage from "@/public/assets/noodle.png";

export const Hero = () => {
  return (
    <section className="xl:px-96 lg:px-20 px-5 pt-8 md:pt-5 pb-20 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="md:flex items-center">
        <div className="md:w-[478px]">
          <Tag title="Version 2.0 is here" />
          <div className="flex flex-col gap-6 pt-6">
            <div className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
              Pathway to productivity
            </div>
            <div className="text-[28px] text-[#010D3E] tracking-tight leading-7">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </div>
          </div>
          <div className="flex gap-1 pt-[30px]">
            <Button onClick={() => {}} title="Get for free" />
            <Button
              className="bg-transparent text-black"
              onClick={() => {}}
              title="Learn More"
              arrow
            />
          </div>
        </div>
        <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
          <Image
            alt="cog image"
            src={cogImage}
            className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
          />
          <Image
            src={cylinderImage}
            width={220}
            height={220}
            alt="cylinder image"
            className="hidden md:block -top-8 -left-32 md:absolute"
          />
          <Image
            src={noodeImage}
            width={220}
            alt="cylinder image"
            className="hidden lg:block top-[524px] left-[448px] md:absolute rotate-[30deg]"
          />
        </div>
      </div>
    </section>
  );
};
