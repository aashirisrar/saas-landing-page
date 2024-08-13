"use client";

interface TagProps {
  title: string;
}

const Tag: React.FC<TagProps> = ({ title }) => {
  return (
    <div className="leading-5 font-medium text-sm tracking-tight border border-[#222222]/10 inline-flex px-3 py-1 rounded-[8px]">
      {title}
    </div>
  );
};

export default Tag;
