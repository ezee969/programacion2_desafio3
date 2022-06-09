import React from 'react';
import menuImg from '../../utils/images/download.svg';

export default function MenuBut({ handleNavVis }) {
  return (
    <div className='border border-gray-600 rounded py-1 px-3 cursor-pointer'>
      <img
        onClick={handleNavVis}
        className='h-auto w-8'
        src={menuImg}
        alt='dropdown button'
      />
    </div>
  );
}
