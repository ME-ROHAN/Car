// modal.js
import React from 'react';
import Link from 'next/link';

const Modal = ({ mods }) => {
  
  const clickedhand = () => {
    mods(false);
  };
  
  return (
    <div className='fixed  inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 z-50'>
      <div className='relative h-1/2 w-1/2 bg-white p-8 rounded-lg shadow-lg flex justify-center items-center max-w-md'>
        <button className='absolute top-4 right-4 text-black font-bold text-5xl' onClick={clickedhand}>×</button>
        <div className='text-center'>
          <a href="/" className='block text-black text-3xl font-bold mb-4'>Home</a>
          <a href="/Contact" className='block text-black font-bold text-3xl'>Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Modal;
