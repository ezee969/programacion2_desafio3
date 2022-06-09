import React from 'react';
import checkImg from '../../utils/images/comprobar.png';

export default function CheckDescription({ text, styles }) {
  return (
    <p className={`${styles} flex gap-1 items-center`}>
      <img className='h-auto w-3' src={checkImg} alt='checkImg' />
      {text}
    </p>
  );
}
