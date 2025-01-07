import React from 'react'
import nikePhoto from "../../src//assets/nikePhoto.jpg"

const Hero = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw] font-helvetica'>
        <div className="relative bg-black">

        <img
        src={nikePhoto}
        alt="Nike Banner"
        className="sm:w-full sm:h-[700px] object-cover "
        />
        </div>

        <div className="relative inset-0 flex flex-col justify-center items-center mt-7 font-helvetica text-[#111111]">
            <p className='text-sm md:text-lg pb-1'>Nike Shoes</p>
            <h1 className=" text-4xl md:text-7xl roboto-black poppins-black  leading-tight tracking-tight">
            GET COMFORTABLE WITH WINNING
            </h1>
            <p className=" text-sm md:text-lg poppins-regular roboto-regular font-semibold">
            Comfort you want with support you need to power your wins.
            </p>
            <button className="mt-6 px-4 py-2 bg-[#111111] text-white font-semibold rounded-full shadow-lg hover:bg-gray-900 transition-all poppins-regular roboto-regular  text-center">
            Shop Now
            </button>
      </div>

    </div>
  )
}

export default Hero