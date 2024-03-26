'use client';
import React from 'react';
import ParticlesComponent from '../components/ParticleComponent';

const page = () => {
  return (
    <div className="w-full h-screen relative flex justify-center items-center">
      <ParticlesComponent />
      <div className="absolute z-50 flex flex-col gap-y-10">
        <div className='w-40 h-40 bg-white '></div>
        <div className='w-40 h-40 bg-white '></div>
      </div>
    </div>
  );
};

export default page;
