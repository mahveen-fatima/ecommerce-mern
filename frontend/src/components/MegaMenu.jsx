import React, { useState } from "react";

const MegaMenu = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw]">
      <div className="relative lg:px-[9vw]">
        
        <div
          className="cursor-pointer p-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        ></div>

        {/* Dropdown Menu */}
        <div
          className={`w-full mb-10 border-b border-gray-200 overflow-hidden transition-all duration-300 pb-14 ${
            isHovered ? "max-h-[800px] opacity-100" : "max-h-[220px] opacity-100"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="grid grid-cols-4 gap-4 p-6 roboto-regular poppins-regular font-helvetica">
            
            <div>
              <h3 className="mb-7 text-xl text-black">Icons</h3>
              <ul className="space-y-3 text-base text-[#707072] mb-6">
                <li>Air Force 1</li>
                <li>Huarache</li>
                <li>Air Max 90</li>
                <li>Air Max 95</li>
                <li>Air Max 97</li>
                <li>Air Max 270</li>
                <li>Air Max 720</li>
                <li>All Air Max</li>
                <li>Vapormax</li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-7 text-xl text-black">Shoes</h3>
              <ul className="space-y-3 text-base text-[#707072] mb-6">
                <li>All Shoes</li>
                <li>Custom Shoes</li>
                <li>Jordan Shoes</li>
                <li>Running Shoes</li>
                <li>Basketball Shoes</li>
                <li>Football Shoes</li>
                <li>Gym & Training Shoes</li>
                <li>Lifestyle Shoes</li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-7 text-xl text-black">Clothing</h3>
              <ul className="space-y-3 text-base text-[#707072] mb-6">
                <li>All Clothing</li>
                <li>Modest Wear</li>
                <li>Hoodies & Pullovers</li>
                <li>Shirts & Tops</li>
                <li>Jackets</li>
                <li>Compression & Nike Pro</li>
                <li>Trousers & Leggings</li>
                <li>Shorts</li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-7 text-xl text-black">Kids'</h3>
              <ul className="space-y-3 text-base text-[#707072] mb-6">
                <li>Infant & Toddler Shoes</li>
                <li>Kids' Shoes</li>
                <li>Kids' Jordan Shoes</li>
                <li>Kids' Basketball Shoes</li>
                <li>Kids' Running Shoes</li>
                <li>Kids' Clothing</li>
                <li>Kids' Backpacks</li>
                <li>Kids' Socks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;

