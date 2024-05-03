import ServicesCards from './Services/ServicesCards'

const Services = () => {
  return (
    <div className="pt-[70px] pb-[120px] bg-secondary-cream ">
      <div className="mx-auto flex flex-col items-center">
        <h1 className="text-[32px] text-primary-indigo-dark font-semibold">Services</h1>
        <div className="w-20 h-[3px] rounded-full bg-primary-indigo-light"></div>
      </div>
      <p className="text-center text-xl font-medium text-neutural-black leading-normal mt-5">Innovative tactics drive optimal engagement for digital success and audience connection.</p>
     <ServicesCards/>
    </div>
  );
}

export default Services;