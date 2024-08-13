import Image from "next/image";

import Heading from "@/components/Heading";
import productImage from "@/public/assets/product-image.png";

export const ProductShowcase = () => {
  return (
    <section className="xl:px-96 lg:px-20 py-[96px] px-5 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
      <Heading
        heading="A more effective way to track progress"
        subHeading="Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts."
        tagTitle="Boost your productivity"
      />
      <div className="pt-10">
        <Image src={productImage} alt="product image" />
      </div>
    </section>
  );
};
