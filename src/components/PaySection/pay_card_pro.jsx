import React from 'react';
import starImg from '../../utils/images/estrella.png';
import CheckDescription from './check_desc';
import MutedDesc from './muted_desc';

export default function PayCardPro() {
  return (
    <div className='flex flex-col gap-5 p-10 bg-white border rounded lg:w-5/12 xl:w-96'>
      <div>
        <p className='flex gap-1 text-sm font-semibold text-gray-600'>
          <img className='w-5 h-auto' src={starImg} alt='iconoEstrella' />
          PRO
        </p>
        <div className='flex gap-1'>
          <p className='text-4xl font-bold lg:text-5xl'>$9</p>
          <p className='text-gray-500 place-self-end'>/ mo.</p>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <CheckDescription text={'5 users'} styles={'font-semibold'} />
        <CheckDescription text={'5GB storage'} />
        <CheckDescription text={'Unlimited public projects'} />
        <CheckDescription text={'Community access'} />
        <CheckDescription text={'Unlimited private projects'} />
        <CheckDescription text={'Dedicated support'} />
        <CheckDescription text={'Free linked domain'} />
        <MutedDesc text={'Monthly status reports'} />
      </div>
      <button className='w-full py-2 text-white transition-all bg-blue-500 border border-blue-500 rounded hover:bg-blue-600'>
        Choose plan
      </button>
    </div>
  );
}
