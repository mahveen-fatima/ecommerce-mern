import React from 'react';
import trending1 from '../assets/trending1.png';
import trending2 from '../assets/trending2.png';

const Trending = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw] font-helvetica roboto-regular poppins-regular mt-24">
      <div className="block text-[#111111]">
        <h2 className=" text-left text-xl sm:text-2xl my-5">
          Trending
        </h2>
      </div>

      
      <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">
        {/* First Trending Item */}
        <div className="relative w-full md:w-1/2">
          <img
            src={trending1}
            alt="Find Your Perfect Running Shoe"
            className="w-full h-auto object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 md:bottom-8 md:left-8 w-full p-4 ">
            <p className="text-white  text-2xl sm:text-xl pb-1 ">
              Find Your Perfect Running Shoe
            </p>
            <button className="my-2 bg-white text-black  text-xm sm:text-base px-3 py-2 rounded-full">
              Explore
            </button>
          </div>
        </div>

        
        <div className="relative w-full md:w-1/2">
          <img
            src={trending2}
            alt="Find Your Bra"
            className="w-full h-auto object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 md:bottom-8 md:left-8 w-full  p-4">
            <p className="text-white  text-2xl sm:text-xl pb-1">
              Find Your Bra
            </p>
            <button className="my-2 bg-white text-black  text-xm sm:text-base px-3 py-2 rounded-full">
              Explore
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Trending;
