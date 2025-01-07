import React from 'react'

const MemberCard = ({ image, subtitle, title, button }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">
      <div className="relative w-full md:w-1/3">
        <div className="min-w-[250px] flex-shrink-0 rounded-lg p-4 px-0 w-[100px] lg:w-[450px] gap-0">
          <img
            src={image}
            alt={subtitle}
            className="w-[600px] lg:h-[450px] object-cover"
          />
          <div className="absolute bottom-0 left-0 md:bottom-8 md:left-8 w-full p-4 roboto-regular poppins-regular font-helvetica">
            <h3 className="text-white text-2xl sm:text-base pb-1 font-medium whitespace-nowrap">{subtitle}</h3>
            <h5 className="text-white text-2xl md:text-xl pb-1 whitespace-nowrap">{title}</h5>
            <button className="my-2 bg-white text-black  text-xm sm:text-base px-3 py-2 rounded-full">
              {button}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberCard;
