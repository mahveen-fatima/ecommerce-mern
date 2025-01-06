import React from 'react'
import dontmiss from "../assets/dontmiss.jpg"

const DontMiss = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw] mt-24 roboto-regular poppins-regular font-helvetica">
      <div className="block text-[#111111]">
        <h2 className="text-left text-xl sm:text-2xl my-5 ">Don't Miss</h2>
      </div>

      <div>
        <img src={dontmiss} alt="" />
      </div>

      <div className='text-center'>
        <h3 className='text-center mt-5 text-lg'>Men's Air Jordon 4RM</h3>
        <h1 className='roboto-black poppins-black text-center text-6xl font-helvetica leading-tight'>RIDE EASY</h1>
        <p className='text-center text-lg mb-5'>A new take on the iconic style, the 4RM puts bold colour blocking in a comfortable low profile.</p>
        <button className='bg-[#111] text-white rounded-full py-2 px-4 hover:bg-gray-500'>Shop</button>
      </div>

    </div>
  )
}

export default DontMiss