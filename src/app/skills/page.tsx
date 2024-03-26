'use client';
import React from 'react';
import ParticlesComponent from '../components/ParticleComponent';

const page = () => {
  return (
    <div className="w-full h-screen relative flex justify-center items-center">
      <ParticlesComponent />
      <div className="absolute z-50 ">Hello World</div>
    </div>
  );
};

export default page;
