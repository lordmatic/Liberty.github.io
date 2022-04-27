import React from 'react';
import Lifeand from '../assets/lifeand.png';
import Lordmatic from '../assets/lordmatic.png';
import Ohe from '../assets/ohe.png';
import Newjoy from "../assets/newjoy.png";
import Ccfoodbank from "../assets/ccfoodbank.png";
import Manifold from "../assets/manifold.png";


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work \\</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-9'>

            {/* Grid Item */}
          <div
            style={ {backgroundImage: `url(${Lifeand})` }}
            className='shadow-lg shadow-[#5799e9] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-black tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.lifeandrelationship.com/'>
                 <button className='text-center rounded-lg px-4 py-4 m-4 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                  
                </a>
                <a href='/'>
                 { /* <button className='text-center rounded-lg px-4 py-4 m-4 bg-white text-gray-700 font-bold text-lg'>
                    Code
  </button> */ }
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Lordmatic})` }}
            className='shadow-lg shadow-[#5799e9] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-black tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="https://www.lordmatic.com/">
                
                  <button className='text-center rounded-lg px-4 py-4 m-4 bg-white text-gray-700 font-bold text-lg'>
                    Demo 
                  </button>
                </a>
                <a href="/">
                 { /* <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code 
</button> */}
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Ohe})` }}
            className='shadow-lg shadow-[#5799e9] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-black tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.ohenisicommunity.org/'>
                  <button className='text-center rounded-lg px-4 py-4 m-4 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                 { /*<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button> */}
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Newjoy})` }}
            className='shadow-lg shadow-[#5799e9] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-black tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.nigc.org.uk/'>
                  <button className='text-center rounded-lg px-4 py-4 m-4 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                 { /* <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button> */}
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Ccfoodbank})` }}
            className='shadow-lg shadow-[#5799e9] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="https://www.ccfoodbank.org.uk/">
                  <button className='text-center rounded-lg px-4 py-4 m-4 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  { /* <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                </button> */ }
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Manifold})` }}
            className='shadow-lg shadow-[#5799e9] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="https://www.manifoldcrown.org/contact-us/">
                  <button className='text-center rounded-lg px-4 py-4 m-4 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                 { /*<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
              </button> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;