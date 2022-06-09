import React from 'react';
import crossImg from '../../utils/images/cross.png';

export default function MutedDesc({ text }) {
  return (
    <p className='flex gap-1 text-gray-500 items-center'>
      <img className='h-auto w-3' src={crossImg} alt='' />
      {text}
    </p>
  );
}
