import React from 'react';
import PayCardFree from './pay_card';
import PayCardPro from './pay_card_pro';
import PayCardEnterprise from './pay_card_enterprise';

export default function PaySection() {
  return (
    <div className='flex flex-col gap-10 py-20 bg-gray-100 border-b px-14 md:px-20'>
      <div className='flex flex-col gap-2 text-center '>
        <p className='text-2xl font-bold lg:text-4xl'>Pay as you grow</p>
        <p className='text-xl font-light'>With our no hassle pricing plans</p>
      </div>
      <div className='flex flex-col flex-wrap justify-center gap-10 lg:flex-row '>
        <PayCardFree />
        <PayCardPro />
        <PayCardEnterprise />
      </div>
    </div>
  );
}
