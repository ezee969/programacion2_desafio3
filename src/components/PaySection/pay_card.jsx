import React from 'react';
import CheckDescription from './check_desc';
import MutedDesc from './muted_desc';

export default function PayCard() {
  return (
    <div className='flex flex-col gap-5 p-10 bg-white border rounded lg:w-5/12 xl:w-96'>
      <div>
        <p className='text-sm font-semibold text-gray-600'>FREE</p>
        <div className='flex gap-1'>
          <p className='text-4xl font-bold lg:text-5xl'>$0</p>
          <p className='text-gray-500 place-self-end'>/ mo.</p>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <CheckDescription text={'1 users'} styles={'font-semibold'} />
        <CheckDescription text={'5GB storage'} />
        <CheckDescription text={'Unlimited public projects'} />
        <CheckDescription text={'Community access'} />
        <MutedDesc text={'Unlimited private projects'} />
        <MutedDesc text={'Dedicated support'} />
        <MutedDesc text={'Free linked domain'} />
        <MutedDesc text={'Monthly status reports'} />
      </div>
      <button className='w-full py-2 text-blue-500 transition-all border border-blue-500 rounded hover:bg-blue-500 hover:text-white'>
        Choose plan
      </button>
    </div>
  );
}
