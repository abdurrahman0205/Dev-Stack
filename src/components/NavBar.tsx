import Logo from '../assets/logo-text.png'

const NavBar = () => {
  return (
  <header className="border-b border-[#F1F5F9]">
      <nav className="container mx-auto py-3 flex justify-between items-center"> {/*max-w-7xl*/}
      
        <div>
          <img src={Logo} alt="" />
        
        </div>
        <ul className="flex justify-between gap-4 text-[#475569] text-[15px]">
        <li className="text-[#DB2777]"><a href="#">Home</a></li>
        <li className=''><a href="#">Technologies</a></li>
        <li className='cursor-pointer'><a href="#">Projects</a></li>
        <li className=''><a href="#">About</a></li>
        <li className=''><a href="#">Contact</a></li>
        </ul>

        <ul className="text-[15px] flex justify-between gap-4 items-center">
          <li className='text-[#334155]'><button className='cursor-pointer btn border-0 bg-white hover:shadow-none'>Sign In</button></li>
          <li><button className="btn bg-[#D91B7E] text-white rounded-3xl cursor-pointer border-0">Sign Up</button></li>
        </ul>
     
      
    </nav>     
 </header>
  );
};

export default NavBar;