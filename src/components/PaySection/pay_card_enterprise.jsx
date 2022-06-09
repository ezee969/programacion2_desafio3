import React from 'react';
import CheckDescription from './check_desc';

export default function PayCardEnterprise() {
  return (
    <div className='flex flex-col gap-5 p-10 bg-white border rounded lg:w-5/12 xl:w-96'>
      <div>
        <p className='text-sm font-semibold text-gray-600'>ENTERPRISE</p>
        <div className='flex gap-1'>
          <p className='text-4xl font-bold lg:text-5xl'>$49</p>
          <p className='text-gray-500 place-self-end'>/ mo.</p>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <CheckDescription text={'Unlimited users'} styles={'font-semibold'} />
        <CheckDescription text={'5GB storage'} />
        <CheckDescription text={'Unlimited public projects'} />
        <CheckDescription text={'Community access'} />
        <CheckDescription text={'Unlimited private projects'} />
        <CheckDescription text={'Dedicated support'} />
        <CheckDescription text={'Unlimited linked domains'} />
        <CheckDescription
          text={'Monthly status reports'}
          styles={'text-gray-500'}
        />
      </div>
      <button className='w-full py-2 text-blue-500 transition-all border border-blue-500 rounded hover:bg-blue-500 hover:text-white'>
        Choose plan
      </button>
    </div>
  );
}
