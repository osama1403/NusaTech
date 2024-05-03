'use client'
import Image, { StaticImageData } from "next/image";
import { motion, animate, useInView, inView } from 'framer-motion'
import { useEffect, useRef } from "react";


export interface WorkElementData {
  icon: StaticImageData,
  num: number,
  numText: string,
  text: string
}

const WorkElements = ({ elements }: { elements: WorkElementData[] }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { margin:'-200px', once: true })
  return (
    <div ref={ref} className="mt-[70px] flex flex-row flex-wrap-reverse justify-center relative z-10 gap-10 md:justify-evenly">
      <WorkElement data={elements[0]} view={inView} />
      <WorkElement data={elements[1]} view={inView} />
      <WorkElement data={elements[2]} view={inView} />
    </div>
  );
}

export default WorkElements;


const WorkElement = ({ data, view }: { data: WorkElementData, view: boolean }) => {
  const numref = useRef<HTMLParagraphElement>(null)
  useEffect(() => {
    if (view) {
      animate(0, data.num, {
        duration: 1.5,
        velocity: data.num,
        onUpdate(latest) {
          if (numref.current) numref.current.innerText = `${latest.toFixed(0)}`
        },
      })
    }
  }, [view])
  return (
    <div className={`flex flex-col items-center transition-all duration-300 ${view?'scale-100 opacity-100':'scale-110 opacity-0'}`}>
      <div className="bg-primary-lilac rounded-full overflow-hidden w-[100px] h-[100px] p-4 mb-5">
        <Image alt='' src={data.icon} className='w-full h-full object-cover' />
      </div>
      <p className='text-3xl font-semibold '><span ref={numref}>{data.num}</span>{data.numText}</p>
      <p className='text-xl leading-normal '>{data.text}</p>
    </div>
  )
}