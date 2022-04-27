import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Welcome to my world and I am glad you are here. Please check my skill.</p>
            </div>
            <div>
              <p className="text-justify">
                I have been a positive and enthusiastic front-end Web developer and I recently completed my Full-Stack Software engineering training.  I have worked part-time since 2017 till this date at my own company (Lordmatic.com) since 2017 till this date. <br></br> My passion and resilience have kept building me for excellent results.  
                 My goals are to secure a position in a reputable organization and expand my skills, knowledge, leanings, and career opportunity while making a significant contribution to the success of the company.
                 <br></br>I specialize in creating software for clients ranging from individuals and small businesses and charitable organizations. 
              </p>
              <p> We could work together and I am available for discussion.
               </p>  
               
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;