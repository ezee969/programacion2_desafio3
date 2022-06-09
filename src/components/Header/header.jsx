import React, { useState } from 'react';
import Navbar from './navbar';
import MenuBut from './menu_button';
import Toggle from '../Toggle/toggle';

export default function Header({ windowWidth }) {
  const [toggleNav, setToggleNav] = useState(false);

  const handleMenuButton = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <nav
      className='bg-zinc-900 text-white py-3 px-11
                    md:px-16 
                    lg:px-22 lg:justify-between lg:flex lg:py-4
                    xl:px-28
                    2xl:px-80'
    >
      <div className='flex justify-between items-center min-w-full'>
        <p className='text-xl'>Start Tailwind</p>
        {windowWidth < 1024 ? (
          <MenuBut handleNavVis={handleMenuButton} />
        ) : (
          <Navbar />
        )}
      </div>
      <Toggle show={toggleNav}>
        <Navbar />
      </Toggle>
    </nav>
  );
}
