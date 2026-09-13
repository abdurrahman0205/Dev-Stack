import BannerImage from '../assets/banner-stack.png'

const Banner = () => {
  return (
    <section className='pt-20 pb-15'>
      <div className='container mx-auto items-center grid grid-cols-1 text-center md:text-left md:grid-cols-2'>

        <div className='place-items-start'>
          <h1 className='text-5xl font-bold font-Inter'>Build Your Ideal
          <br/><span className='bg-linear-to-r from-[#FF5722] from-0% via-[#D81B7E] via-50% to-[#7C3AED] to-100% bg-clip-text text-transparent'>Development Stack</span></h1>
          
          <p className='my-3 text-[#475569] text-[16px]'>Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that fits your
          next project.</p>
          <div className='grid grid-cols-2 gap-5 my-17 font-Inter font-medium'>
                  <button className='text-white px-5 py-2 rounded-md bg-linear-to-r from-[#F97316] from-0% to-[#EC4899] to-100%'>Explore Technologies</button>
          <button className='outline outline-[#E5E7EB] rounded-md'>Learn More</button>    
   
          </div>
        </div>  
        <div className='place-items-center'>
           <img src={BannerImage} alt="Dev Stack Banner Image" />
        </div>

      </div>
    </section>
  );
};

export default Banner;