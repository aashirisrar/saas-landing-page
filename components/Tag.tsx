"use client";

import { cn } from "@/libs/utls";

interface TagProps {
  title: string;
  popular?: boolean;
}

const Tag: React.FC<TagProps> = ({ title, popular }) => {
  return (
    <div
      className={cn(
        "leading-5 font-medium text-sm tracking-tight border border-[#222222]/10 inline-flex px-3 py-1 rounded-[8px]",
        popular
          ? "bg-clip-text text-transparent bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#8BCB92,#71C2EF,#3BFFFF,#DD7DDF)] border-white/20"
          : ""
      )}
    >
      {title}
    </div>
  );
};

export default Tag;
