import React, { useState } from 'react';
import { navLinks } from '../constance';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full flex py-6 justify-between items-center flex-1'>
      <img src={logo} alt='hoobank' className='w-[124px] h-[32px]' />
      <ul className='list-none hidden sm:flex justify-end items-center flex-1'>
        {navLinks.map((item, index) => (
          <li
            key={item.id}
            className={`text-white font-poppins font-normal text-[16px] cursor-pointer ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            }`}
          >
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[24px] h-[24px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${toggle ? 'flex' : 'hidden'} absolute right-0 top-20`}
        >
          <ul className='list-none bg-black-gradient flex flex-col justify-end items-center flex-1 p-6 mx-4 my-2 rounded-xl sidebar min-w-[140px]'>
            {navLinks.map((item, index) => (
              <li
                key={item.id}
                className={`text-white font-poppins font-normal text-[16px] cursor-pointer ${
                  index === navLinks.length - 1 ? 'mb-0' : 'mb-2'
                }`}
              >
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
