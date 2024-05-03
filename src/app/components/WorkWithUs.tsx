import people from '@/assets/work with us/f7_person-3.svg'
import star from '@/assets/work with us/solar_star-linear.svg'
import process from '@/assets/work with us/uit_process.svg'
import WorkElements, { WorkElementData } from './WorkWithUs/WorkElements';
import WorkStars from './WorkWithUs/WorkStars';

const elements: WorkElementData[] = [
  {
    icon: people,
    num: 10000,
    numText: '+',
    text: 'Happy Customers'
  },
  {
    icon: process,
    num: 20000,
    numText: '+',
    text: 'Success Processes'
  },
  {
    icon: star,
    num: 10,
    numText: '+ Years',
    text: 'of Experience'
  },
]

const WorkWithUs = () => {
  return (
    <div className="relative bg-cta-indigo-dark px-5  md:px-[70px] py-[80px] overflow-hidden">
      <p className="font-semibold text-[32px] leading-tight text-center relative z-10">Work with Nusa Tech</p>
      <WorkElements elements={elements}/>
      <WorkStars/>
    </div>
  );
}

export default WorkWithUs;

