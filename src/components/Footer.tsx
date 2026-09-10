import FooterLogo from '../assets/logo-text.png'

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto">

        <div className=" pb-15 text-[#64748B] text-[13px] 
        grid grid-cols-12 items-start ">
          <div className="col-span-6">
            <img src={FooterLogo} alt="" />
            <p className="my-4">Curated tools, technologies, and resources for developers building
modern software.</p>
            <ul className="text-[#475569] font-medium flex gap-4 mt-6">
            <li className='cursor-pointer'>GitHub</li>
            <li className='cursor-pointer'>Twitter</li>
            <li className='cursor-pointer'>LinkedIn</li>
            </ul>
          </div>
          
          <ul className="col-span-2">
          <li className="font-semibold text-[#0F172A] text-[13px]">PRODUCT</li>
          <li className='cursor-pointer mt-3'>Home</li>
          <li className='cursor-pointer mt-1'>Technologies</li>
          <li className='cursor-pointer mt-1'>Projects</li>
          </ul>
          
          <ul className="col-span-2">
          <li className="font-semibold text-[#0F172A] text-[13px]">COMPANY</li>
          <li className='cursor-pointer mt-3'>About</li>
          <li className='cursor-pointer mt-1'>Contact</li>
          <li className='cursor-pointer mt-1'>Careers</li>
          </ul>
          
          <ul className="col-span-2">
          <li className="font-semibold text-[#0F172A] text-[13px]">LEGAL</li>
          <li className='cursor-pointer mt-3'>Privacy Policy</li>
          <li className='cursor-pointer mt-1'>Terms of Service</li>
          </ul>


        </div>

        <div className="grid grid-cols-2 items-center text-[12px] text-[#94A3B8] pb-11 pt-7 border-t border-[#F1F5F9]">
          <p className="justify-start">© 2026 Dev Stack. All rights reserved.</p>
          <ul className="flex gap-4 justify-end">
            <li className='cursor-pointer mt-1'>Privacy</li>
            <li className='cursor-pointer mt-1'>Terms</li>
          </ul>
        </div>


      </div>
    </footer>
  );
};

export default Footer;