import RocketAndPlanet from "./Hero/RocketAndPlanet";
import Stars from "./Hero/Stars";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="w-full relative hero min-h-[690px] overflow-hidden px-5 lg:px-[70px] py-[60px]">
        
        <RocketAndPlanet />
        <Stars />

        <div className="relative z-10 space-y-7 sm:space-y-12 md:space-y-7 mt-0 sm:mt-10 md:mt-0">

          <h1 className="w-full max-w-[700px] mx-auto lg:mx-0 text-center lg:text-start text-5xl md:text-[61px] font-bold text-white z-40 leading-[1.3]" >
            <span className="text-primary-lilac">Boost</span> Your Bussiness with <span className="text-primary-lilac">Digital Marketing</span> Excellence
          </h1>
          <p className="text-[20px] leading-normal text-center lg:text-start px-4 lg:px-0 mx-auto lg:mx-0 max-w-[630px] ">Unlock New Opportunities and Expand Your Reach Across Digital Platforms with Our Comprehensive Solutions.</p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-[30px] ">
            <Link href='#' className="text-base bg-cta-lilac hover:bg-secondary-dark-lilac font-semibold rounded-[20px] px-9 py-4 sm:px-[50px] sm:py-[25px] ">
              Contact Us
            </Link>
            <Link href='#' className="text-base text-cta-lilac bg-secondary-lilac-light hover:bg-primary-honey hover:text-secondary-dark-lilac font-semibold rounded-[20px] px-9 py-4 sm:px-[50px] sm:py-[25px] ">
              Learn more
            </Link>

          </div>
        </div>



      </div>

    </>
  );
}

export default Hero;
