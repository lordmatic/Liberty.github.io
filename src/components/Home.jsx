import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#2b012b]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#ccd6f6]'>My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'> Liberty Joseph </h1>
        <h2 className='text-3xl sm:text-5xl font-bold text-[#8892b0]'>
          I'm a Full-Stack Developer.
        </h2>
        <p className='text-[#f1f2f5] py-4 max-w-[700px] text-justify'>
          I am an easy going person, time conscious, friendly, promise keeper, 
          always willing to learn new skills. I am helpful 
          and polite with a good sense of humour. I am able 
          to work independently in busy environments and also 
          within a team setting. I am a problem solving person. <br></br>
          <b> <em>Continued Excellence:</em> </b>
          I maintain a track record of excellence helping other dynamically,
          and by rendering a helping hands has proven its self through every engagement
          and every relationship with people. 
          I am available for always for open discussion and new ideas.
        </p>
        
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
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



