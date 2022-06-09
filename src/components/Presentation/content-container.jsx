import React from 'react';

export default function ContentContainer() {
  return (
    <div className='flex flex-col items-center justify-center gap-3 m-auto lg:w-5/12'>
      <p className='text-3xl font-semibold text-center text-white md:text-4xl lg:text-5xl'>
        Present your business in a whole new way
      </p>
      <p className='mb-6 text-xl text-center text-gray-500'>
        Quickly design and customize responsive mobile-first sites with
        Bootstrap, the world’s most popular front-end open source toolkit!
      </p>
      <div className='flex flex-col justify-center w-full gap-3 md:gap-8 md:flex-row'>
        <button className='w-full py-2 text-xl text-white transition-all bg-blue-600 rounded hover:bg-blue-700 md:w-40'>
          Get Started
        </button>
        <button className='w-full py-2 text-xl text-white transition-all border border-white rounded hover:bg-white hover:text-black md:w-40'>
          Learn More
        </button>
      </div>
    </div>
  );
}
