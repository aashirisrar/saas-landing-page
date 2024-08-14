import Heading from "@/components/Heading";
import TestimonialCardColumn from "@/components/TestimonialCardColumn";
import avatar1 from "@/public/assets/avatar-1.png";
import avatar2 from "@/public/assets/avatar-2.png";
import avatar3 from "@/public/assets/avatar-3.png";
import avatar4 from "@/public/assets/avatar-4.png";
import avatar5 from "@/public/assets/avatar-5.png";
import avatar6 from "@/public/assets/avatar-6.png";
import avatar7 from "@/public/assets/avatar-7.png";
import avatar8 from "@/public/assets/avatar-8.png";
import avatar9 from "@/public/assets/avatar-9.png";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9,
    name: "Casey Harper",
    username: "@casey09",
  },
];

export const Testimonials = () => {
  const testimonialsColumnOne = testimonials.slice(0, 3);
  const testimonialsColumnSecond = testimonials.slice(3, 6);
  const testimonialsColumnThird = testimonials.slice(6, 9);
  return (
    <section className="bg-white xl:px-96 lg:px-20 px-5 lg:pb-[96px]">
      <Heading
        tagTitle="Testimonials"
        heading="What our users say"
        subHeading="From intuitive design to powerful features, our app has become an essential tool for users around the world."
      />
      <div className="flex flex-row gap-6 items-center justify-center">
        <div>
          <TestimonialCardColumn testimonials={testimonialsColumnOne} />
        </div>
        <div className="hidden md:block">
          <TestimonialCardColumn testimonials={testimonialsColumnSecond} />
        </div>
        <div className="hidden lg:block">
          <TestimonialCardColumn testimonials={testimonialsColumnThird} />
        </div>
      </div>
    </section>
  );
};
