'use client'

import Image from "next/image";
import Smoke1 from '@/assets/Smoke1.svg'
import Smoke2 from '@/assets/Smoke2.svg'
import spaceShuttle from '@/assets/space-shuttle.png'
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Moon from '../../../assets/Moon.svg'
import Earth from '../../../assets/Earth.svg'
import Circles from "../Circles";

const Rocket = () => {
  const r = useRef(null)
  const { scrollYProgress } = useScroll({ target: r, offset: ['start start', 'end start'] })
  const smoke1x = useTransform(scrollYProgress, [0, 1], ['0px', '-200px'])
  const smoke2x = useTransform(scrollYProgress, [0, 1], ['0px', '200px'])
  const shuttleY = useTransform(scrollYProgress, [0, 1], ['0px', '-350px'])
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0px', '350px'])

  return (

    <div ref={r} className="absolute inset-0 ">
      <div className="absolute -top-[170px] -left-[153px]">
        <Circles />
      </div>
      <motion.div className="hidden lg:block w-[1227px] h-auto bottom-0 -right-[315px] absolute z-10" style={{ x: smoke2x }}>
        <Image src={Smoke2} alt="smoke" className="w-full h-auto " />
      </motion.div>

      <motion.div className=" hidden lg:block  top-[120px] right-[180px] w-[290px] h-auto absolute z-10" style={{ y: shuttleY }}>
        <Image src={spaceShuttle} alt="space-shuttle" width={290} height={500} className="w-full h-auto" />
      </motion.div>

      <motion.div className=" hidden lg:block w-[1915px] h-auto -bottom-4 -right-[475px] absolute z-10" style={{ x: smoke1x }}>
        <Image src={Smoke1} alt="smoke" className="w-full h-auto " />
      </motion.div>

      {/* Moon */}
      <motion.div className="w-32 md:w-56 h-auto absolute -top-[30px] md:-top-[72px] left-[calc(50%-64px)]" animate={{ rotate: '-360deg', transition: { duration: 45, repeat: Infinity, ease: 'linear' } }} style={{ y: backgroundY }}>
        <Image alt="" src={Moon} width={224} height={224} className="w-full h-auto" />
      </motion.div>

      {/* Earth */}
      <motion.div className=" w-[300px] md:w-[400px] h-auto  absolute -right-32 md:-right-[235px] top-1/3 md:top-[130px]" animate={{ rotate: '360deg', transition: { duration: 45, repeat: Infinity, ease: 'linear' } }} style={{ y: backgroundY }}>
        <Image alt="" src={Earth} width={400} height={400} className=" w-full h-auto" />
      </motion.div>



    </div>
  );
}

export default Rocket;