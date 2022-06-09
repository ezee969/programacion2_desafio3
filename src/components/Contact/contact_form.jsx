import React from 'react';

export default function ContactForm() {
  return (
    <form className='flex flex-col w-full gap-5 lg:max-w-md xl:max-w-xl'>
      <input
        placeholder='Full name'
        className='px-2 py-4 border-2 rounded placeholder:text-slate-900'
        type='text'
      />
      <input
        placeholder='Email address'
        className='px-2 py-4 border-2 rounded placeholder:text-slate-900'
        type='text'
      />
      <input
        placeholder='Phone number'
        className='px-2 py-4 border-2 rounded placeholder:text-slate-900'
        type='text'
      />
      <textarea
        placeholder='Message'
        className='h-40 px-2 py-4 border-2 rounded placeholder:text-slate-900'
        type='text'
      />
      <button className='py-3 text-xl font-medium text-white bg-blue-400 rounded'>
        Submit
      </button>
    </form>
  );
}
