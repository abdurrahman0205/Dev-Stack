import FooterLogo from '../assets/logo-text.png'

const Footer = () => {
  return (
    <footer className=' mt-25 pt-22 border-t border-[#F1F5F9]'>
      <div className="container mx-auto">

        <div className=" pb-15 text-[#64748B] text-[13px] 
        grid grid-cols-12 items-start ">
          <div className="col-span-6">
            <img src={FooterLogo} alt="" />
            <p className="my-4">Curated tools, technologies, and resources for developers building
modern software.</p>
            <ul className="text-[#475569] font-medium flex gap-4 mt-6">
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
          
          <ul className="col-span-2">
          <li className="font-semibold text-[#0F172A] text-[13px]">PRODUCT</li>
          <li className='mt-3'><a href="#">Home</a></li>
          <li className='mt-1'><a href="#">Technologies</a></li>
          <li className='mt-1'><a href="#">Projects</a></li>
          </ul>
          
          <ul className="col-span-2">
          <li className="font-semibold text-[#0F172A] text-[13px]">COMPANY</li>
          <li className='mt-3'><a href="#">About</a></li>
          <li className='mt-1'><a href="#">Contact</a></li>
          <li className='mt-1'><a href="#">Careers</a></li>
          </ul>
          
          <ul className="col-span-2">
          <li className="font-semibold text-[#0F172A] text-[13px]">LEGAL</li>
          <li className='mt-3'><a href="#">Privacy Policy</a></li>
          <li className='mt-1'><a href="#">Terms of Service</a></li>
          </ul>


        </div>

        <div className="grid grid-cols-2 items-center text-[12px] text-[#94A3B8] pb-11 pt-7 border-t border-[#F1F5F9]">
          <p className="justify-start">© 2026 Dev Stack. All rights reserved.</p>
          <ul className="flex gap-4 justify-end">
            <li className='mt-1'><a href="#">Privacy</a></li>
            <li className='mt-1'><a href="#">Terms</a></li>
          </ul>
        </div>


      </div>
    </footer>
  );
};

export default Footer;