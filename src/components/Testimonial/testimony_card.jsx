import React from 'react';
import chatImg from '../../utils/images/chat.png';

export default function TestimonyCard({ text }) {
  return (
    <div className='flex w-full max-w-xl gap-5 p-6 border rounded lg:w-6/12 xl:w-6/12'>
      <div className='flex items-start'>
        <img className='w-40 h-auto xl:w-20' src={chatImg} alt='' />
      </div>
      <div className='flex flex-col gap-2'>
        <p>{text}</p>
        <p className='text-gray-500 text-md'>-Client name, Location</p>
      </div>
    </div>
  );
}
