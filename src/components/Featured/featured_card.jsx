import React from 'react';
import squareImg from '../../utils/images/square.png';

export default function FeaturedCard() {
  return (
    <div className='flex flex-col gap-3  lg:max-w-sm '>
      <img className='h-auto w-16 rounded' src={squareImg} alt='' />
      <p className='font-bold text-xl lg:text-2xl'>Featured title</p>
      <p>
        Paragraph of text beneath the heading to explain the heading. We'll add
        onto it with another sentence and probably just keep going until we run
        out of words.
      </p>
      <p className='text-blue-500'>Call to action →</p>
    </div>
  );
}
