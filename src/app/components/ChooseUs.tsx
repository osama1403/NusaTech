'use client'
import { motion } from 'framer-motion'
import ChooseElement, { Choose } from './ChooseUs/ChooseElement';
import chooseUsImage1 from '@/assets/choose us/chooseUsImg1.jpg'
import chooseUsImage2 from '@/assets/choose us/chooseUsImg2.jpg'
import chooseUsImage3 from '@/assets/choose us/chooseUsImg3.jpeg'

const viewPort = { margin: '-250px', once: true }


const elements: Choose[] = [
  {
    img: chooseUsImage1,
    imgLeft: true,
    title: 'Solutions Tailored Specifically To Your Needs',
    text: 'We provide customized solutions for your business needs, ensuring relevance and success.',
    link: '#'
  },
  {
    img: chooseUsImage2,
    imgLeft: false,
    title: 'Creative Excellence Elevates Every Project',
    text: 'Creative excellence drives our work. From concept to execution, we aim for exceptional results.',
    link: '#'
  },
  {
    img: chooseUsImage3,
    imgLeft: true,
    title: 'Client Satisfaction is Our Main Focus',
    text: 'Our main goal is your satisfaction, and we work tirelessly to ensure that you are pleased with the results we achieve together.',
    link: '#'
  },
]

const ChooseUs = () => {
  return (
    <div className=" bg-neutural-black px-10 lg:px-[70px] py-[80px]">

      <motion.p initial={{ x: -200, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 0.4 } }} viewport={viewPort} className='font-semibold text-4xl '>Why Choose Us? <span className='inline-block ml-3 mb-2 w-[200px] h-[3px] rounded-full bg-neutural-white'></span></motion.p>

      <div className='mt-20 space-y-20'>
        <ChooseElement data={elements[0]} />
        <ChooseElement data={elements[1]} />
        <ChooseElement data={elements[2]} />
      </div>


    </div>
  );
}

export default ChooseUs;