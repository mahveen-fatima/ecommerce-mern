// import React from 'react'
// import trending1 from "../assets/trending1.png"
// import trending2 from "../assets/trending2.png"

// const Trending = () => {
//   return (
//     <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw]'>
    
//         <div className='block text-[#111111] mr-[-6px] '>
//             <h2 className='font-helvetica font-bold roboto-regular poppins-regular text-left text-xl sm:text-3xl my-4'>Trending</h2>
//         </div>


//         <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">

//         <div className="relative w-full md:w-1/2">
//         <img
//           src={trending1}
//           alt="Photo 1"
//           className="w-full h-auto object-cover"
//         />
//         <div className="absolute bottom-24 right-32 w-full flex flex-col justify-center items-center bg-black bg-opacity-5 pb-2">
//           <p className="text-[#fff] font-bold font-helvetica roboto-regular poppins-regular text-xl sm:text-xl">Find Your Perfect Running Shoe</p>
          
//           <div className='absolute -bottom-12 right-28 w-full flex flex-col justify-center items-center'>
//           <button className='bg-white text-black font-bold font-helvetica roboto-regular poppins-regular text-lg sm:text-lg px-3 py-1 rounded-full'>Explore</button>
//           </div>
//         </div> 

//         </div>

        


//         <div className="relative w-full md:w-1/2">

//         <img
//           src={trending2}
//           alt="Photo 2"
//           className="w-full h-auto object-cover"
//         />
//         <div className="absolute bottom-24 right-36 w-full flex flex-col justify-center items-center  pb-2">
//           <p className="text-[#fff] font-bold font-helvetica roboto-regular poppins-regular text-xl sm:text-lg">Find Your Bra</p>
//         </div> 

//         <div className='absolute bottom-24 right-36 w-full flex flex-col justify-center items-center  pb-2'>
//           <button className='bg-white text-black font-bold font-helvetica roboto-regular poppins-regular text-lg sm:text-lg px-3 py-1 rounded-full'>Explore</button>
//         </div>

//         </div>

//      </div>
//     </div>
//   )
// }

// export default Trending


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
