import React from 'react';

export default function Navbar() {
  return (
    <ul className={`flex gap-4 flex-col lg:flex-row lg:gap-5 `}>
      <li className='cursor-pointer'>Home</li>
      <li className='cursor-pointer text-gray-400'>About</li>
      <li className='cursor-pointer text-gray-400'>Contact</li>
      <li className='cursor-pointer text-gray-400'>Services</li>
    </ul>
  );
}
