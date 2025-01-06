import React, {useRef} from 'react'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import SportsCard from './SportsCard';
import {sports} from '../assets/assets';


const ShopBySport = () => {

      const carouselRef = useRef(null);
    
    
      const scrollLeft = () => {
        if (carouselRef.current) {
          carouselRef.current.scrollBy({
            left: -300,
            behavior: "smooth",
          });
        }
      };
    
      const scrollRight = () => {
        if (carouselRef.current) {
          carouselRef.current.scrollBy({
            left: 300,
            behavior: "smooth",
          });
        }
      };
    
      
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[4vw] mt-20 roboto-regular poppins-regular">
        <div className="relative w-full p-4">
          <h2 className="text-2xl mb-4 roboto-regular poppins-regular">Shop By Sport</h2>
    
          {/* Navigation Arrows */}
          
          <div className="absolute top-4 right-4 flex space-x-2 pb-2">
         
            <button
              onClick={scrollLeft}
              className="transform bg-gray-100 p-4 rounded-full shadow hover:bg-gray-200"
            >
              <AiOutlineLeft className="text-xl" />
            </button>
            <button
              onClick={scrollRight}
              className="transform bg-gray-100 p-4 rounded-full shadow hover:bg-gray-200"
            >
              <AiOutlineRight className="text-xl" />
            </button>
          </div>
    
          {/* Product Cards */}
          <div
            ref={carouselRef}
            className="flex overflow-x-scroll space-x-3 scrollbar-hide"
          >
            {sports.map((product, index) => (
            <SportsCard
              key={index}
              image={product.image}
              text={product.text}
            />
          ))}
          </div>
        </div>
        </div>
  )

}
export default ShopBySport