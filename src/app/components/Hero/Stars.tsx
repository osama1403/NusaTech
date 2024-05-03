'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import star from '@/assets/ph_star-four-fill.svg'
import Image from 'next/image';
interface circle {
  inset: string;
  color: string;
}
interface star {
  inset: string;
  size: number
}

const elements: { foreground: circle[], background: circle[], stars: star[] } = {
  foreground: [
    { inset: 'auto 70px 55px auto', color: '#FFA800' },
    { inset: 'auto 235px 30px auto', color: '#FFA800' },
    { inset: 'auto 465px 125px auto', color: '#FFA800' },
    { inset: 'auto 675px 65px auto', color: '#FFA800' },
    { inset: 'auto 1120px 15px auto', color: '#FFA800' },
    { inset: '270px 535px auto auto', color: '#FFA800' },
    { inset: 'auto 995px 130px auto', color: '#AC6CFF' },

  ], background: [
    { inset: 'auto auto 110px 32px', color: '#EADAFF' },
    { inset: '80px auto auto 38px', color: '#F2BFAF' },
    { inset: '55px 75px auto auto', color: '#E2FF30' },
  ],
  stars: [
    { inset: '100px 80px auto auto', size: 25 },
    { inset: '295px 610px auto auto', size: 40 },
    { inset: '470px 735px auto auto', size: 25 },
  ]
}

const Stars = () => {
  const s = useRef(null)
  const { scrollYProgress } = useScroll({ target: s, offset: ['start start', 'end start'] })
  const starsDiag = useTransform(scrollYProgress, [0, 1], ['0px', '-150px'])
  const starsY = useTransform(scrollYProgress, [0, 1], ['0px', '400px'])

  return (
    <motion.div ref={s} className="absolute inset-0 " >
      {elements.foreground.map((el, idx) => { return (<motion.div key={`fore${idx}`} className='absolute w-[15px] h-[15px] rounded-full z-10' style={{ backgroundColor: el.color, inset: el.inset, x: starsDiag, y: starsDiag }}></motion.div>) })}
      {elements.background.map((el, idx) => { return (<motion.div key={`back${idx}`} className='absolute w-[15px] h-[15px] rounded-full z-10' style={{ backgroundColor: el.color, inset: el.inset, y: starsY }}></motion.div>) })}
      {elements.stars.map((el, idx) => {
        return (
          <motion.div key={`star${idx}`} className='absolute ' style={{ width: el.size + 'px', height: el.size + 'px', inset: el.inset, y: starsY }}>
            <Image alt='' src={star}  className='w-full h-full'/>
          </motion.div>
        )
      })}
    </motion.div>
  );
}

export default Stars;