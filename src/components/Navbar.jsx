import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants';
import { close, logo, menu } from '../assets';
import '../index.css';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`w-full flex py-6 justify-between items-center navbar fixed top-0 left-0 z-50 ${scrolled ? 'bg-black' : 'bg-transparent'}`} style={{ paddingTop: '1rem', paddingLeft: '4rem', paddingRight: '4rem' }}>
      <div className="mx-4 w-[124px]">
        <img src={logo} alt="hoobank" className="w-full h-auto" />
      </div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} ${toggle ? 'text-black' : 'text-white'}`}>
            <a href={`#${nav.id}`} className={`nav-link ${scrolled ? '' : 'text-white'}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain' onClick={() => setToggle(prev => !prev)} />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 ${scrolled ? 'bg-black-gradient' : 'bg-transparent'} absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} ${toggle ? 'text-black' : 'text-white'}`}>
                <a href={`#${nav.id}`} className={`nav-link ${scrolled ? '' : 'text-white'}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
