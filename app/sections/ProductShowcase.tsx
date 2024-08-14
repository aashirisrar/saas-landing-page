import Image from "next/image";

import Heading from "@/components/Heading";
import productImage from "@/public/assets/product-image.png";
import pyramidImage from "@/public/assets/pyramid.png";
import tubeImage from "@/public/assets/tube.png";

export const ProductShowcase = () => {
  return (
    <section className="xl:px-96 lg:px-20 py-[96px] px-5 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-x-clip">
      <Heading
        heading="A more effective way to track progress"
        subHeading="Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts."
        tagTitle="Boost your productivity"
      />
      <div className="pt-10 relative">
        <Image src={productImage} alt="product image" />
        <Image
          src={pyramidImage}
          alt="pyramid image"
          height={262}
          width={262}
          className="hidden md:block absolute -right-36 -top-32"
        />
        <Image
          src={tubeImage}
          alt="tube image"
          height={262}
          width={262}
          className="hidden md:block absolute bottom-24 -left-36"
        />
      </div>
    </section>
  );
};
