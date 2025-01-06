import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import classic1 from "../assets/classic1.png";
import classic2 from "../assets/classic2.png";
import classic3 from "../assets/classic3.png";
import classic4 from "../assets/classic4.png";
import classic5 from "../assets/classic5.png";
import classic6 from "../assets/classic6.png";
import classic7 from "../assets/classic7.png";
import classic8 from "../assets/classic8.png";
import classic9 from "../assets/classic9.jpg";

const ClassicSpotlight = () => {
  const photos = [
    classic1,
    classic2,
    classic3,
    classic4,
    classic5,
    classic6,
    classic7,
    classic8,
    classic9,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerRow = 5; // Number of photos to display at a time
  const totalPhotos = photos.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPhotos) % totalPhotos);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPhotos);
  };

  const visiblePhotos = Array.from({ length: itemsPerRow }, (_, i) =>
    photos[(currentIndex + i) % totalPhotos]
  );

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw] mt-24">
      <div className="block text-[#111111]">
        <h2 className="text-left text-xl sm:text-2xl my-5">Classic Spotlight</h2>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Photo Grid */}
        <div className="grid grid-cols-5 gap-4">
          {visiblePhotos.map((photo, index) => (
            <div
              key={index}
              className="relative border rounded-md p-2 flex items-center justify-center bg-[#f5f5f5]"
            >
              <img
                src={photo}
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-2">
          {/* Prev Button */}
          <button
            className="bg-white text-black p-4 rounded-full cursor-pointer transform"
            onClick={handlePrev}
          >
            <AiOutlineLeft />
          </button>

          {/* Next Button */}
          <button
            className="bg-white text-black p-4 rounded-full cursor-pointer transform"
            onClick={handleNext}
          >
            <AiOutlineRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassicSpotlight;



