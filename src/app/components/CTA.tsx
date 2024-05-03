import Link from "next/link";
import Circles from "./Circles";

const CTA = () => {
  return (
    <div className="pt-20 pb-10 relative bor border-cta-lilac overflow-hidden bg-primary-indigo-light px-5 md:px-[70px]">
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
          <p className="text-[40px] font-semibold text-center md:text-left">“Stand out online and make an impact”</p>
          <Link href={'#'} className="px-[50px] py-[25px] min-w-max bg-cta-lilac hover:bg-secondary-dark-lilac font-semibold text-white rounded-[20px]">Start Now</Link>
        </div>
        <p className="font-medium text-xl text-center md:text-left mt-11">David Smith - CEO of a Tech Startup</p>
      </div>

      <div className="absolute -top-[190px] scale-75 -left-[170px]">
        <Circles />
      </div>

    </div>
  );
}

export default CTA;