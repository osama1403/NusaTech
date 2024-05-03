import Image from "next/image";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Services from "./components/Services";
import ChooseUs from "./components/ChooseUs";
import WorkWithUs from "./components/WorkWithUs";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import PlanetsTestimonials from "./components/PlanetsTestimonials";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Services />
      <ChooseUs />
      <WorkWithUs />
      <div className="relative">
        <Testimonials />
        <Pricing />
        <PlanetsTestimonials />
      </div>
      <CTA/>
    </>
  );
}
