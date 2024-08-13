import Navbar from "@/app/sections/Navbar";
import { Hero } from "@/app/sections/Hero";
import { LogoTicker } from "@/app/sections/LogoTicker";
import { ProductShowcase } from "./sections/ProductShowcase";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
    </>
  );
}
