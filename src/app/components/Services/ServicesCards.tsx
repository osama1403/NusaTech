'use client'
import { motion } from 'framer-motion'
import email from '@/assets/services/Email Open.png'
import laptop from '@/assets/services/Laptop Metrics.png'
import search from '@/assets/services/Paid Search.png'
import webMarketing from '@/assets/services/Web Marketing.png'
import Service from "./Service";

const variants = {
  initial: { scale: 1, opacity: 0 },
  animate: { scale: [1.1, 1], opacity: 1, transition: { duration: 0.3 } }
}
const ServicesCards = () => {
  return (
    <motion.div transition={{ staggerChildren: 0.15, when: 'beforeChildren' }} viewport={{ margin: '-200px' }} initial='initial' whileInView='animate' className="mt-[70px] mx-4 flex flex-wrap items-stretch gap-5">

      <motion.div variants={variants} className=" basis-[48%] lg:basis-0 flex justify-center grow">
        <Service icon={laptop} link='#' title='Seo Marketing' />
      </motion.div>
      <motion.div variants={variants} className=" basis-[48%] lg:basis-0 flex justify-center grow">
        <Service icon={webMarketing} link='#' title='Research Topic Trends' />
      </motion.div>
      <motion.div variants={variants} className=" basis-[48%] lg:basis-0 flex justify-center grow">
        <Service icon={email} link='#' title='Email Marketing' />
      </motion.div>
      <motion.div variants={variants} className=" basis-[48%] lg:basis-0 flex justify-center grow">
        <Service icon={search} link='#' title='Google PPC' />
      </motion.div>

    </motion.div>
  );
}

export default ServicesCards;