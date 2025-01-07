import React from 'react'

const SportsCard = ({image, text}) => {
  return (
    <div className="relative min-w-[250px] flex-shrink-0 rounded-lg p-4 px-0 lg:w-1/3 gap-0">
    <img
      src={image}
      alt={text}
      className="lg:h-[350px] object-cover bg-[#f5f5f5]"
    />
    <div className="relative">
      <button className="absolute bottom-10 left-5 py-2 px-3 bg-white text-black rounded-full hover:bg-gray-200 transition-all">
        {text}
      </button>
    </div>
  </div>
  )
}

export default SportsCard