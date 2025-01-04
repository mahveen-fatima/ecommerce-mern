// src/components/Header.jsx
import React, { useState } from "react";
import jordan from "../../src/assets/jordan.png";

const Header = () => {
  // State to track user login status and username
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  // Function to toggle login state (for testing purposes)
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header>
      <div  className="bg-[#f5f5f5] px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw]  hidden lg:block">
      <div className="flex justify-between items-center py-2 z-3">
        {/* Logo Section */}
        <div className="flex items-center">
          <img className="w-5 h-5 mt-1" src={jordan} alt="logo" />
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-2 text-xs font-bold text-[#111111] font-helvetica">
          <a href="#" className="hover:text-gray-500">
            Find a Store
          </a>
          <span>|</span>
          <a href="#" className="hover:text-gray-500">
            Help
          </a>
          <span>|</span>
          <a href="#" className="hover:text-gray-500">
            Join Us
          </a>
          <span>|</span>
          <a
            href="#"
            className="hover:text-gray-500"
            onClick={toggleLogin}
          >
            {isLoggedIn ? `Hi, ${username || "User"}` : "Sign In"}
          </a>
        </nav>
      </div>
      </div>
    </header>
  );
};

export default Header;
