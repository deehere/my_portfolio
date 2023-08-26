import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#2f0a0a] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-900'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hello there. I'm Devanshi Singhal, glad you're here. Please take a look around.</p>
            </div>
            <div>
              <p> I am an Electrical Engineer turned Python Developer. I have always 
                been fascinated by the power of technology to solve complex problems 
                and improve our daily lives. As an Electrical Engineer, I gained 
                experience in designing, analyzing, and operation of electrical systems 
                for various applications. However, I found myself increasingly drawn to the 
                world of software development and began to explore this field in my spare time. 
                I quickly discovered the versatility and power of Python and was amazed at the 
                many ways it could be used to solve a wide range of problems.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;