
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div className='bg-custom-bg '>
      <nav className={`fixed top-0 left-0 mb-0 w-full z-50 py-4 md:py-4 ${styles.navbar}`}>
        <div className='flex justify-between items-center w-full'>
          <div>
            <ScrollLink to="header" smooth={true} offset={-70} duration={500} className='lg:text-[26px] font-bold hover:text-orange-500 cursor-pointer ml-7 text-[27px] sm:ml-7 md:text-[29px] lg:text-[35px]'> friskay </ScrollLink>
          </div>
          <div className='md:hidden'>
            <ion-icon onClick={toggleMenu} name={menuOpen ? 'close' : 'menu'} className='text-6xl cursor-pointer p-7 w-28 h-28' />
          </div>
        </div>
        <div className={`absolute left-0 w-full bg-white flex flex-col items-center px-5 transition-transform duration-500 ease-in-out ${menuOpen ? 'top-16' : '-top-full' } md:relative md:top-auto md:flex md:flex-row md:items-center md:bg-transparent md:w-auto md:z-auto md:visible md:flex`}>
          <ul className={`flex flex-col md:flex-row md:items-center md:gap-10 gap-8 ${menuOpen ? 'block' : 'hidden'} md:flex`}>
            <li><ScrollLink to="header" smooth={true} offset={-70} duration={500} className='hover:text-orange-500 cursor-pointer'>Home</ScrollLink></li>
            <li><ScrollLink to="ourfood" smooth={true} offset={-400} duration={500} className='hover:text-orange-500 cursor-pointer'>Our Food</ScrollLink></li>
            <li><ScrollLink to="ingredients" smooth={true} offset={-70} duration={500} className='hover:text-orange-500 cursor-pointer'>Ingredients</ScrollLink></li>
            <li><ScrollLink to="studies" smooth={true} offset={60} duration={500} className='hover:text-orange-500 cursor-pointer'>Studies</ScrollLink></li>
            <li><ScrollLink to="footer" smooth={true} offset={-70} duration={500} className='hover:text-orange-500 cursor-pointer'>FAQ</ScrollLink></li>
          </ul>
        </div>
      </nav>
      <main className={styles.main}>
        {/* main content */}
      </main>
    </div>
  );
};

export default Navbar;
