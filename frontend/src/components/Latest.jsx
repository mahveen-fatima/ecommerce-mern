import React from 'react'
import latest1 from "../assets/latest1.jpg"
import latest2 from "../assets/latest2.jpg"

const Latest = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw] font-helvetica roboto-regular poppins-regular mt-24">
        <div className="block text-[#111111]">
            <h2 className=" text-left text-xl sm:text-2xl my-5">
            The Latest
            </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">
        <div className="relative w-full md:w-1/2">
            <img
                src={latest1}
                alt="Find Your Perfect Running Shoe"
                className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 md:bottom-8 md:left-8 w-full p-4 ">
            <p className="text-white  text-2xl sm:text-lg pb-1 ">Run Ready</p>
            <p className="text-white  text-2xl sm:text-xl pb-1 ">
              The Nike Swift Collection
            </p>
            <button className="my-2 bg-white text-black  text-xm sm:text-base px-3 py-2 rounded-full">
              Shop
            </button>
            </div>
        </div>

        <div className="relative w-full md:w-1/2">
            <img
                src={latest2}
                alt="Find Your Perfect Running Shoe"
                className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 md:bottom-8 md:left-8 w-full p-4 ">
            <p className="text-white  text-2xl sm:text-lg pb-1 ">Run Ready</p>
            <p className="text-white  text-2xl sm:text-xl pb-1 ">
              The Nike Stride Collection
            </p>
            <button className="my-2 bg-white text-black  text-xm sm:text-base px-3 py-2 rounded-full">
              Shop
            </button>
            </div>
        </div>


        </div>
        
    </div>
  )
}

export default Latest