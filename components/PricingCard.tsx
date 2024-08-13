"use client";

import { BiCheck } from "react-icons/bi";
import Button from "./Button";

interface PricingCardProps {
  data: {
    title: string;
    monthlyPrice: number;
    buttonText: string;
    popular: boolean;
    inverse: boolean;
    features: string[];
  };
}

const PricingCard: React.FC<PricingCardProps> = ({ data }) => {
  return (
    <div className="w-[320px] shadow-md p-10 rounded-3xl border border-[#F1F1F1]">
      <div className="flex flex-col gap-[30px]">
        <div className="leading-[28px] tracking-tighter font-bold text-[18px] text-[#000000]/50">
          {data?.title}
        </div>
        <div className="inline-flex items-end gap-1">
          <div className="font-bold text-4xl leading-[36px] tracking-tighter">
            ${data?.monthlyPrice}
          </div>
          <span className="text-[16px] font-bold tracking-tight leading-6 text-[#000000]/50">
            /month
          </span>
        </div>
        <div>
          <Button className="w-full" title="Get for free" onClick={() => {}} />
        </div>
      </div>
      <div className="pt-[32px] flex flex-col justify-center gap-5">
        {data.features.map((feature) => (
          <div className="flex items-center gap-2">
            <BiCheck className="w-6 h-6" />
            <span className="text-[14px] leading-5">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
