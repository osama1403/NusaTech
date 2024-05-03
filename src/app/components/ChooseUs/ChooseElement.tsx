import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion'

export interface Choose {
  img: StaticImageData,
  title: string,
  text: string,
  link: string,
  imgLeft: boolean
}

const viewPort = { margin: '-250px',once:true }

const Variant = (imgLeft: boolean) => {
  return (
    {
      initial: {
        opacity: 0,
        x: imgLeft ? -200 : 200
      },
      show: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.7,
          ease: 'easeOut',

        }
      }
    }
  )
}

const ChooseElement = ({ data }: { data: Choose }) => {
  return (
    <motion.div className="md:flex md:flex-row items-center gap-10 lg:gap-28" initial='initial' whileInView={'show'} viewport={viewPort}>

      <motion.div className={`basis-0 grow max-w-md md:max-w-[530px] mx-auto ${data.imgLeft ? 'order-1' : 'order-2'}`} variants={Variant(data.imgLeft)}>
        <Image alt="" src={data.img} className={`w-full aspect-square rounded-[40px] object-cover ${data.imgLeft ? 'rounded-bl-none ' : 'rounded-br-none'}`}></Image>
      </motion.div>

      <motion.div className={`basis-0 mt-10 md:mt-0 grow flex flex-col items-center md:items-start ${data.imgLeft ? 'order-2' : 'order-1'} `} variants={Variant(!data.imgLeft)}>
        <h1 className="text-4xl lg:text-5xl text-center md:text-left font-bold leading-tight max-w-[600px]">{data.title}</h1>
        <p className="text-xl lg:text-2xl text-center md:text-left leading-snug mt-8 max-w-[550px] ">{data.text}</p>
        <Link href={data.link} className=" rounded-[20px] mt-[60px] px-[50px] py-[25px] bg-cta-lilac hover:bg-secondary-dark-lilac">Learn More</Link>
        
      </motion.div>
    </motion.div>

  );
}

export default ChooseElement;