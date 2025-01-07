import React , { useEffect, useState } from "react";
// import {NavLink} from "react-router-dom"


const Banner = () => {
    const [activeText, setActiveText] = useState(0);
    const texts = [
      {
        title: "New Styles On Sale: Up To 40% Off",
        subtitles: "Shop All Our New Markdowns",
        subtitleStyles: "underline decoration-black text-xs font-semibold cursor-pointer"

      },
      {
        title: "Move, Shop, Customise & Celebrate With Us",
        subtitle:
          "No matter what you feel like doing today, It’s better as a Member.",
        button: "Join Us",
      },
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveText((prev) => (prev + 1) % texts.length);
      }, 6000); 
      return () => clearInterval(interval);
    }, [texts.length]);
  
    return (
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw] bg-[#f5f5f5] shadow-[#e5e5e5] leading-tight'>
      <div className="relative overflow-hidden w-full h-full font-helvetica py-10">
        {texts.map((text, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center transform transition-all duration-700 ease-in ${
              activeText === index
                ? "translate-x-0"
                : activeText > index
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
          >
            <h3 className="sm:pt-2 sm:pb-1 text-sm pb-1 md:text-lg">{text.title}</h3>
            <p className="text-[10px] font-semibold">{text.subtitle}</p>
            <p className={text.subtitleStyles}>{text.subtitles}</p>
            {text.button && (
              <button className="py-2 text-xs font-semibold text-black  transition underline decoration-black cursor-pointer">
                {text.button}
              </button>
            )}
          </div>
        ))}
      </div>
      </div>
    );
}

export default Banner
