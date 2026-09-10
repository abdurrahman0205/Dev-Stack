import Logo from '../assets/logo-text.png'

const NavBar = () => {
  return (
  <header className="border-b border-[#F1F5F9]">
      <nav className="container mx-auto py-3 flex justify-between items-center">
      
        <div>
          <img src={Logo} alt="" />
        
        </div>
        <ul className="flex justify-between gap-4 font-medium text-[#475569]">
        <li className="text-[#DB2777] cursor-pointer">Home</li>
        <li className='cursor-pointer'>Technologies</li>
        <li className='cursor-pointer'>Projects</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Contact</li>
        </ul>

        <ul className="flex justify-between gap-4 items-center">
          <li className='text-[#334155] cursor-pointer'>Sign in</li>
          <li><button className="btn bg-[#D91B7E] text-white rounded-3xl cursor-pointer border-0">Sign Up</button></li>
        </ul>
     
      
    </nav>     
 </header>
  );
};

export default NavBar;