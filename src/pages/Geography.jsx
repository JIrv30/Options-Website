import React from 'react';
import Geog1 from '../assets/Geog1.jpg';

const Geography = () => {
  return (
    <div className="relative w-full h-screen">
      <img src={Geog1} alt="Geography" className="object-contain w-full h-full" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white space-y-6 p-8">
      </div>
    </div>
  );
};

export default Geography;
