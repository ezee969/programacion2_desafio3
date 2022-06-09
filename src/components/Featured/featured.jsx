import React from 'react';
import FeaturedCard from './featured_card';

export default function Featured() {
  return (
    <div className='flex flex-col justify-center border-b gap-12 py-20 px-14 md:px-20 lg:flex-row bg-white'>
      <FeaturedCard />
      <FeaturedCard />
      <FeaturedCard />
    </div>
  );
}
