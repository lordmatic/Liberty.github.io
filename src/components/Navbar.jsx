import React, { useState } from 'react';
import {FaBars,FaTimes,FaGithub,FaLinkedin,FaFacebook, } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {Link} from "react-scroll" ;

import Logo from '../assets/logo1.png';


const Navbar = () => {
      const[nav, setNav] = useState(false)
      const handleClick = () => setNav(!nav)


    return(
         <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'> <div>
           <img src={Logo} alt='Logo Image' style={{ width: '90px' }} />
         </div>
            {/* Menu*/}
         
             <ul className="hidden md:flex">
                 <li>  
                      <Link to="home" smooth={true} duration={500}> HOME </Link>
                  </li>
                 <li> 
                    <Link to="about" smooth={true} duration={500}> ABOUT </Link>
                 </li>
                 <li> 
                    <Link to="skills" smooth={true} duration={500}> SKILLS </Link>
                 </li>
                 <li> 
                 <Link to="contact" smooth={true} duration={500}> CONTACT </Link>
                 </li>
                  
             </ul>
         

          {/* Hamburger*/}
          <div onClick={handleClick} className="md:hidden z-10" >
             {!nav ? <FaBars /> : <FaTimes/>}
          </div>

          {/* Mobile menu*/}
              <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'} >
                 <li className="py-6 text-4xl">  <Link onClick={handleClick} to="home" smooth={true} duration={500}>HOME </Link></li>
                 <li className="py-6 text-4xl">  <Link onClick={handleClick} to="about" smooth={true} duration={500}>ABOUT</Link></li>
                 <li className="py-6 text-4xl">  <Link onClick={handleClick} to="skills" smooth={true} duration={500}>SKILLS </Link></li>
                 <li className="py-6 text-4xl">  <Link onClick={handleClick} to="work" smooth={true} duration={500}>WORK </Link></li>
                 <li className="py-6 text-4xl">  <Link onClick={handleClick} to="contact" smooth={true} duration={500}>CONTACT </Link></li>       
             </ul>

          {/* Social icons*/}
          <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'><a
              className='flex justify-between items-center w-full text-white -300' href='/'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ff9966]'><a
              className='flex justify-between items-center w-full text-white -300'href='https://www.linkedin.com/in/liberty-joseph-15795075/'>
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#19194d]'><a
              className='flex justify-between items-center w-full text-white file: -300' href='https://www.facebook.com/999doctor/'>
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ff6600]'><a
              className='flex justify-between items-center w-full text-white -300' href="https://github.com/lordmatic">
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333399]'><a
              className='flex justify-between items-center w-full text-white -300' href='https://www.lordmatic.com/contact/'>
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>

          </div>
       </div>
    )
    
}
export default Navbar;