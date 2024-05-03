'use client'
import star from '@/assets/ph_star-four-fill.svg'
import Image from "next/image";
import Circles from "../Circles";
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react';

const WorkStars = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const starsY = useTransform(scrollYProgress, [0, 1], ['0px', '450px'])
 
  // const starsYfar = useTransform(scrollYProgress, [0, 1], ['0px', '50px'])
  return (
    <div ref={ref} className="inset-0 absolute">
      <div className="absolute -top-[100px] -left-[200px]">
        <Circles />
      </div>
      
      <motion.div className='absolute -top-[100px] right-[185px] w-5 h-5 ' style={{ y: starsY }}>
        <Image alt='' src={star} className='w-full h-full' />
      </motion.div>
      <motion.div className='absolute -top-[200px] right-[50%] opacity-70 w-5 h-5 ' style={{ y: starsY }}>
        <Image alt='' src={star} className='w-full h-full' />
      </motion.div>
      <motion.div className='absolute top-[100px] left-[85px] w-6 h-6 opacity-50' style={{ y: starsY }}>
        <Image alt='' src={star} className='w-full h-full' />
      </motion.div>
    </div>
  );
}

export default WorkStars;