import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

const Service = ({ title, icon, link }: { title: string, icon: StaticImageData, link: string }) => {
  return (
    <div className="w-full h-full max-w-xs flex flex-col justify-between items-center py-10 px-4 bg-primary-lilac rounded-3xl hover:scale-105 transition ">
      <Image src={icon} alt="" className="w-[100px] h-[100px]"/>
      <p className="text-2xl text-center leading-snug text-secondary-cream font-semibold mt-[46px]">{title}</p>
      <Link href={link} className="bg-primary-indigo-dark hover:bg-secondary-dark-lilac px-5 py-3 mt-[32px] rounded-[20px] transition">Learn More</Link>
    </div>
    
  );
}

export default Service;