import React from 'react';

export default function Toggle({ children, show }) {
  const content = 'max-h-0';
  const contentShow = 'h-auto max-h-screen py-3';

  return (
    <div
      className={`${
        show ? contentShow : content
      } transition-all duration-500 overflow-hidden`}
    >
      {children}
    </div>
  );
}
