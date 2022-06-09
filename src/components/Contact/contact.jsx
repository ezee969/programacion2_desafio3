import React from 'react';
import ContactForm from './contact_form';
import emailImg from '../../utils/images/email.png';

export default function Contact() {
  return (
    <div className='flex flex-col items-center gap-8 py-20 bg-gray-100 border-b px-14 md:px-20'>
      <img className='w-20 h-auto' src={emailImg} alt='' />
      <div className='flex flex-col gap-2 text-center '>
        <p className='text-2xl font-bold lg:text-3xl'>Get in touch </p>
        <p className='text-xl font-light'>We'd love to hear from you</p>
      </div>
      <ContactForm />
    </div>
  );
}
