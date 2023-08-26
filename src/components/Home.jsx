import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#2F0A0A]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hey, my name is</p>
        <h1 className='text-5xl sm:text-7xl font-bold text-[#f6cccc]'>
          Devanshi Singhal
        </h1>
        <h2 className='text-5xl sm:text-7xl font-bold text-[#b08888]'>
          I'm a Web Designer.
        </h2>
        <p className='text-[#b08888] font-bold py-4 max-w-[700px]'>
        I am an Electrical Engineer turned Python Developer. I have always been 
        fascinated by the power of technology to solve complex problems and improve 
        our daily lives.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-900 hover:border-pink-900'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;