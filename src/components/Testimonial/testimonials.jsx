import React from 'react';
import TestimonyCard from './testimony_card';

export default function Testimonials() {
  return (
    <div className='flex flex-col items-center gap-5 py-20 bg-white border border-b px-14 md:px-20'>
      <div className='flex flex-col gap-2 py-5 mb-3 text-center'>
        <p className='text-2xl font-bold lg:text-4xl'>Customer testimonials</p>
        <p className='text-xl font-light'>Our customers love working with us</p>
      </div>
      <TestimonyCard
        text={
          'Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others!'
        }
      />
      <TestimonyCard
        text={
          'The whole team was a huge help with putting things together for our company and brand. We will be hiring them again in the near future for additional work!'
        }
      />
    </div>
  );
}
