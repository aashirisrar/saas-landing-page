"use client";

import Image from "next/image";

interface TestimonialCardColumnProps {
  testimonials: {
    text: string;
    imageSrc: any;
    name: string;
    username: string;
  }[];
}

const TestimonialCardColumn: React.FC<TestimonialCardColumnProps> = ({
  testimonials,
}) => {
  return (
    <div className="flex flex-col items-center justify-center pt-10 gap-6">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.username}
          className="shadow-md w-[325px] p-10 border border-[#222222]/10 rounded-3xl"
        >
          <div>{testimonial.text}</div>
          <div className="pt-[20px] flex gap-3">
            <div className="relative min-h-[40px] min-w-[40px]">
              <Image
                alt={testimonial.username}
                fill
                src={testimonial?.imageSrc}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="font-medium leading-[20px] tracking-tight">
                {testimonial.name}
              </div>
              <div className="leading-[20px] tracking-tight">
                {testimonial.username}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCardColumn;
