'use client'
import Image from "next/image";
import star from '@/assets/ph_star-four-fill.svg'
import { ReactElement } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import companies from '../components/Clients/companies'
import PlanetAndCircles from "./Clients/PlanetAndCircles";
import { motion } from 'framer-motion'

const Clients = () => {
  return (
    <div className="clients min-h-[715px] relative overflow-hidden">
      <PlanetAndCircles />

      <div className="py-[70px] relative z-10">
        <div className="flex items-center justify-center text-[32px] font-semibold">
          <h1>Our Clients</h1>
          <Image alt="" src={star} className="w-6 h-6" />
        </div>

        <motion.div className="hidden md:grid my-[70px] px-[15px] max-w-[1000px] mx-auto  grid-cols-10 items-center justify-center gap-x-[30px] gap-y-5" initial='initial' whileInView='animate' viewport={{ margin: '-200px' }}  >
          <Row companies={companies.lg_first} delay={0} colspan={8} colstart={2} />
          <Row companies={companies.lg_second} delay={0} colspan={10} colstart={1}/>
          <Row companies={companies.lg_third} delay={0.15} colspan={8} colstart={2}/>
          <Row companies={companies.lg_fourth} delay={0.3}  colspan={6} colstart={3}/>
        </motion.div>

        <motion.div className="grid md:hidden mt-[70px] px-[15px] max-w-[1000px] mx-auto  grid-cols-6 items-center justify-center gap-x-[30px] gap-y-5" initial='initial' whileInView='animate' viewport={{ margin: '-200px' }}  >
          <Row companies={companies.sm_first} delay={0} colspan={6} colstart={1} />
          <Row companies={companies.sm_second} delay={0} colspan={4} colstart={2}/>
          <Row companies={companies.sm_third} delay={0.15} colspan={6} colstart={1}/>
          <Row companies={companies.sm_fourth} delay={0.3}  colspan={4} colstart={2}/>
          <Row companies={companies.sm_fifth} delay={0.3}  colspan={6} colstart={1}/>
          <Row companies={companies.sm_sixth} delay={0.3}  colspan={4} colstart={2}/>
          <Row companies={companies.sm_seventh} delay={0.3}  colspan={2} colstart={3}/>
        </motion.div>
      </div>


    </div>
  );
}

export default Clients;

const Row = ({ companies, delay, colspan, colstart }: { companies: StaticImport[], delay: number, colspan: number, colstart: number }): ReactElement => {
  return (
    <motion.div transition={{ delay, staggerChildren: 0.15, when: 'beforeChildren' }} variants={{ initial: { opacity: 1 }, animate: { opacity: 1 } }} className={`flex items-center justify-center gap-[30px]`} style={{ gridColumnStart: colstart, gridColumnEnd: colstart + colspan }}>
      {companies.map((el, idx) => <Client img={el} key={idx} />)}
    </motion.div>
  )
}

const Client = ({ img }: { img: string | StaticImport }): ReactElement => {
  return (
    <motion.div variants={{ initial: { scale: 0.8, opacity: 0 }, animate: { scale: [1.05,1.1,1], opacity: 1 ,transition:{duration:0.3,ease:'easeInOut'}} }} className="w-full max-w-[170px] aspect-[2/1] rounded-full bg-neutural-white justify-center flex items-center">
      <Image alt="" src={img} className="w-[70%] " />
    </motion.div>
  )
}