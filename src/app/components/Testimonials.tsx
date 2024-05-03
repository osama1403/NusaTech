'use client'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image';
import michael from '@/assets/testimonials/michaelLee.jpeg'
import jessica from '@/assets/testimonials/jessicaTaylor.jpeg'
import david from '@/assets/testimonials/davidSmith.jpeg'

const testimonials: TestimonialData[] = [
  {
    name: 'Michael Lee',
    role: 'Small Business Owner of a Local Cafe',
    text: "Impressed with Nusa Tech's professionalism and competence. They understand our needs and provide innovative solutions, with outstanding customer service.",
    image: michael
  },
  {
    name: 'Jessica Taylor',
    role: 'Director of Marketing Startup',
    text: "Nusa Tech significantly improved our online presence. From website design to PPC campaigns, they deliver outstanding results. Highly recommended!",
    image: jessica
  },
  {
    name: 'David Smith',
    role: 'CEO of Digital Startup',
    text: "Very satisfied with Nusa Tech's work. They've improved our brand visibility online and provided valuable insights. Thank you!",
    image: david
  },
]
const Testimonials = () => {
  return (
    <div className=" px-5 md:px-[70px] py-[100px]">
      <motion.p initial={{ x: -200, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 0.4 } }} viewport={{ margin: '-20px' }} className='font-semibold text-4xl '>What Our Customers say about Nusa Tech <span className='inline-block mb-2 w-[200px] h-[3px] rounded-full bg-neutural-white ml-3'></span></motion.p>

      <motion.div className='mt-[100px] flex flex-col items-center xl:items-stretch xl:flex-row gap-10 xl:gap-5 ' initial='initial' whileInView={'show'} transition={{ staggerChildren: 0.2 }} viewport={{ margin: '-200px' }}>
        {<SingleTestimonial data={testimonials[0]} />}
        {<SingleTestimonial data={testimonials[1]} />}
        {<SingleTestimonial data={testimonials[2]} />}
      </motion.div>

    </div>
  );
}

export default Testimonials;



interface TestimonialData {
  name: string;
  role: string;
  text: string;
  image: StaticImageData;
}

const testimonialVariants = {
  initial: { opacity: 0, scale: 1 },
  show: { opacity: 1, scale: [0.9, 1], transition: { duration: 0.35, ease: 'easeOut' } }
}

const SingleTestimonial = ({ data }: { data: TestimonialData }) => {
  return (
    <motion.div className=' p-10 max-w-md basis-0 grow rounded-tr-[40px] rounded-bl-[40px] bg-secondary-cream' variants={testimonialVariants}>
      <div className='flex flex-col items-center xs:flex-row xs:items-start gap- xs:gap-[30px]'>
        <Image alt='person' src={data.image} width={100} height={100} className='w-[100px] h-[100px] shrink-0 rounded-full object-cover' />

        <div className='text-primary-indigo-light mt-2 text-center xs:text-start'>
          <p className='text-2xl font-semibold '>{data.name}</p>
          <p className=' font-medium leading-normal'>{data.role}</p>
        </div>

      </div>
      <p className='text-neutural-black mt-10 font-medium leading-normal text-center xs:text-start'>
        {data.text}
      </p>
    </motion.div>
  )
}