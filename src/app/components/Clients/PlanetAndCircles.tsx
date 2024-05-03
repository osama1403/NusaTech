'use client'
import Image from "next/image";
import Circles from "../Circles";
import mercury from '@/assets/Mercury.svg'
import { motion, useScroll, useTransform } from 'framer-motion'
import star from '@/assets/ph_star-four-fill.svg'
import { useRef } from "react";
import bottom from '@/assets/bottom.svg'
const PlanetAndCircles = () => {
  const s = useRef(null)
  const { scrollYProgress } = useScroll({ target: s, offset: ['start start', 'end start'] })
  const starsY = useTransform(scrollYProgress, [0, 1], ['0px', '400px'])

  return (
    <div ref={s} className="absolute inset-0 ">
      <div className="absolute -top-[170px] -right-[153px]">
        <Circles />
      </div>
      <div className="absolute w-[240px] h-auto top-[70px] -left-[100px]">
        <Image src={mercury} alt='' className="w-full h-auto"></Image>
      </div>
      <motion.div className='absolute top-[300px] right-[85px] w-5 h-5 ' style={{ y: starsY }}>
        <Image alt='' src={star} className='w-full h-full' />
      </motion.div>
      <motion.div className='absolute top-[500px] left-[85px] w-6 h-6 ' style={{ y: starsY }}>
        <Image alt='' src={star} className='w-full h-full' />
      </motion.div>

      <Image alt="" src={bottom} className="absolute bottom-0 left-0 right-0 w-full " />

    </div>
  );
}

export default PlanetAndCircles;