import Image from "next/image";
import Link from "next/link";
import Logo from '@/assets/Logo.svg'
import LocationIcon from '@/assets/icons/Location.svg'
import MobileIcon from '@/assets/icons/Mobile.svg'
import PhoneIcon from '@/assets/icons/Phone.svg'

const Footer = () => {
  return (
    <div className="pt-16 px-5 md:px-[70px] bg-cta-indigo-dark">
      <div className="flex flex-col lg:flex-row gap-10 text-center lg:text-left">

        <div className="">
          <div className="p-[10px] inline-block lg:mx-auto">
            <Link href={'#'} >
              <Image src={Logo} width={215} height={50} alt="" />
            </Link>
          </div>
          <p className="text-xl  leading-normal font-medium text-neutural-white mt-[25px]">
            Nusa Tech is a leading digital marketing agency dedicated to driving success for businesses online. With expertise in SEO, PPC, social media, content creation, and more, we offer tailored solutions to maximize ROI.
          </p>
        </div>

        <div className="min-w-fit">
          <p className="text-primary-lilac font-semibold text-2xl">Our Services</p>
          <div className="mt-[40px] space-y-6 ">
            <Link href={'#'} className="block font-medium leading-normal text-neutural-white hover:text-primary-lilac ">SEO Marketing</Link>
            <Link href={'#'} className="block font-medium leading-normal text-neutural-white hover:text-primary-lilac ">Research Topic Trends</Link>
            <Link href={'#'} className="block font-medium leading-normal text-neutural-white hover:text-primary-lilac ">Email Marketing</Link>
            <Link href={'#'} className="block font-medium leading-normal text-neutural-white hover:text-primary-lilac ">Google PPC</Link>
          </div>
        </div>
        <div className="min-w-fit">
          <p className="text-primary-lilac font-semibold text-2xl">Explore More</p>
          <div className="mt-[40px] space-y-6">
            <Link href={'#'} className="block font-medium leading-normal text-neutural-white hover:text-primary-lilac ">About Us</Link>
            <Link href={'#'} className="block font-medium leading-normal text-neutural-white hover:text-primary-lilac ">Feature</Link>
            <Link href={'#'} className="block font-medium leading-normal text-neutural-white hover:text-primary-lilac ">Our Works</Link>
            <Link href={'#'} className="block font-medium leading-normal text-neutural-white hover:text-primary-lilac ">Resources</Link>
            <Link href={'#'} className="block font-medium leading-normal text-neutural-white hover:text-primary-lilac ">Privacy Policy</Link>
          </div>
        </div>

        <div className="min-w-fit flex flex-col items-center lg:items-start">
          <p className="text-primary-lilac font-semibold text-2xl ">Contact Us</p>

          <div className="mt-[40px] space-y-[10px] ">

            <div className="flex gap-2">
              <div className="w-10 h-10 p-[10px] rounded-full bg-neutural-white flex items-center justify-center">
                <Image alt="location icon" src={LocationIcon} className="w-full h-full object-cover" />
              </div>
              <p className="font-medium leading-normal text-neutural-white max-w-[248px]">Jl. Medan Merdeka No. 35 Jakarta Selatan</p>
            </div>

            <div className="flex gap-2">
              <div className="w-10 h-10 p-[10px] rounded-full bg-neutural-white flex items-center justify-center">
                <Image alt="location icon" src={PhoneIcon} className="w-full h-full object-cover" />
              </div>
              <p className="font-medium leading-normal text-neutural-white max-w-[248px]">(021) 234567</p>
            </div>
            <div className="flex gap-2">
              <div className="w-10 h-10 p-[10px] rounded-full bg-neutural-white flex items-center justify-center">
                <Image alt="location icon" src={MobileIcon} className="w-full h-full object-cover" />
              </div>
              <p className="font-medium leading-normal text-neutural-white max-w-[248px]">+1 298 123 45</p>
            </div>

          </div>

        </div>

      </div>
      <div className="flex flex-col lg:flex-row items-center gap-10 justify-between py-8 px-2 mt-16 border-t-2 border-neutural-white">
        <p className="text-center leading-normal text-xl text-neutural-white font-medium">Nusa tech 2024 © All right reserved</p>
        <Link href={''} className="text-center leading-normal text-xl text-neutural-white font-medium hover:text-cta-lilac"> Terms & Conditions</Link>
      </div>


    </div>
  );
}

export default Footer;