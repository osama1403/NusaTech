import Link from "next/link";


const pricingPlans: SinglePricingData[] = [
  {
    name: 'Starter Plan',
    price: 500,
    link: '#',
    specs: [
      'Responsive website design and development (5 pages)',
      'Basic SEO',
      'Social media management'
    ]
  },
  {
    name: 'Business  Plan',
    price: 1000,
    link: '#',
    specs: [
      'Responsive website design and development (10 pages)',
      'Advanced SEO',
      'Social media management',
      'PPC advertising campaign'
    ]
  },
  {
    name: 'Premium Plan',
    price: 2000,
    link: '#',
    specs: [
      'Advanced Business plan',
      'Regular content creation',
      'Performance analysis and monthly reporting'
    ]
  }
]
const Pricing = () => {
  return (
    <div className="px-5 md:px-[70px] py-[80px]">
      <h1 className="text-4xl font-semibold text-center">Pricing Plans</h1>
      <h1 className="text-xl leading-normal font-semibold mt-5 text-center">The Best Solution for Our Clients</h1>
      <div className="mt-[50px] flex flex-col w-full items-center lg:flex-row lg:items-stretch justify-center gap-10 lg:gap-5">
        {pricingPlans.map((el, idx) => <SinglePricing key={idx} data={el}/>)}
      </div>
    </div>
  );
}

export default Pricing;

interface SinglePricingData {
  name: string;
  price: number;
  specs: string[];
  link: string;
}

const SinglePricing = ({ data }: { data: SinglePricingData }) => {
  return (
    <div className="max-w-sm lg:max-w-[310px] w-full basis-0 grow bg-secondary-cream rounded-[30px] py-[45px] px-[18px] flex flex-col gap-4 items-center justify-between">
      <div className="w-full">
        <p className="text-center text-2xl font-semibold text-neutural-black">{data.name}</p>
        <p className="text-center text-[40px] font-semibold text-cta-orange my-[9px]">${data.price}</p>
        <ul className=" leading-normal list-disc list-outside ml-5 px-[10px] font-normal text-base text-neutural-black">
          {data.specs.map((el, idx) => <li key={idx}>{el}</li>)}
        </ul>
      </div>

      <Link href={data.link} className={' px-5 py-3 text-neutural-black bg-cta-orange hover:opacity-90 rounded-[20px] font-semibold'}>Book Now</Link>
    </div>
  )

}