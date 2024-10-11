import React from 'react';
import { PiVirus } from 'react-icons/pi';

const HomeLoader = () => {
  return (
    <div className='flex justify-center col-span-3'>
      <PiVirus className="text-red-500 text-2xl md:text-5xl animate-spin max-md:scale-[2]" />
    </div>
  );
};

export default HomeLoader;
