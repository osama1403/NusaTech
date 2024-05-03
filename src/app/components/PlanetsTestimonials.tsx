'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import star from '@/assets/ph_star-four-fill.svg'
import Earth from '@/assets/Earth.svg'
import Moon from '@/assets/Moon.svg'
import { useRef } from "react";
import Image from 'next/image';

const PlanetsTestimonials = () => {
  const s = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: s, offset: ['start start', 'end start'] })
  const planetsY = useTransform(scrollYProgress, [0, 1], ['0px', s.current?.clientHeight?`${(s.current.clientHeight*(3/5)).toFixed(0)}px`: '600px'])
  const starsY = useTransform(scrollYProgress, [0, 1], ['0px','600px'])

  return (
    <div ref={s} className="absolute inset-0 bg-primary-indigo-light overflow-hidden -z-10">
      <motion.div className="absolute w-[240px] h-auto top-[160px] right-8" style={{ y: planetsY }}>
        <Image src={Earth} alt='' className="w-full h-auto" />
      </motion.div>

      <motion.div className="absolute w-[240px] h-auto top-[465px] left-8" style={{ y: planetsY }}>
        <Image src={Moon} alt='' className="w-full h-auto" />
      </motion.div>

      <motion.div className='absolute top-[150px] right-[360px] w-6 h-6 opacity-50' style={{ y: starsY }}>
        <Image alt='' src={star} className='w-full h-full' />
      </motion.div>

      <motion.div className='absolute top-[35%] left-[50%] w-6 h-6 opacity-50' style={{ y: starsY }}>
        <Image alt='' src={star} className='w-full h-full' />
      </motion.div>

      <motion.div className='absolute top-[50%] left-[35%] w-6 h-6 opacity-50' style={{ y: starsY }}>
        <Image alt='' src={star} className='w-full h-full' />
      </motion.div>

      <motion.div className='absolute top-[60%] left-[90%] w-6 h-6 opacity-50' style={{ y: starsY }}>
        <Image alt='' src={star} className='w-full h-full' />
      </motion.div>

      <motion.div className='absolute top-[65%] left-[90px] w-6 h-6 opacity-50' style={{ y: starsY }}>
        <Image alt='' src={star} className='w-full h-full' />
      </motion.div>


    </div>
  );
}

export default PlanetsTestimonials;