"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";

export const CallToAction = () => {
  return (
    <section className="xl:px-96 lg:px-20 py-[96px] px-5 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
      <Heading
        heading="Sign up for free today"
        subHeading="Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts."
      />
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
