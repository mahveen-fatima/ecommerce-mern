import React from 'react';
import { CiGlobe } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw] mt-10 mb-10">
      <div className="container mx-auto px-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-20 roboto-regular poppins-regular">

          <div>
            <h3 className="font-bold pb-6">Resources</h3>
            <ul className="space-y-2 text-gray-500 text-sm font-helvetica">
              <li><a href="#" className="">Find A Store</a></li>
              <li><a href="#" className="">Become A Member</a></li>
              <li><a href="#" className="">Send Us Feedback</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold pb-6">Help</h3>
            <ul className="space-y-2 text-gray-500 text-sm font-helvetica">
              <li><a href="#" >Get Help</a></li>
              <li><a href="#" >Order Status</a></li>
              <li><a href="#" >Delivery</a></li>
              <li><a href="#" >Returns</a></li>
              <li><a href="#" >Payment Options</a></li>
              <li><a href="#" >Contact Us On Nike.com Inquiries</a></li>
              <li><a href="#" >Contact Us On All Other Inquiries</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold pb-6">Company</h3>
            <ul className="space-y-2 text-gray-500 text-sm font-helvetica">
              <li><a href="#">About Nike</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Report a Concern</a></li>
            </ul>
          </div>

          <div className="space-y-2 flex justify-end items-center left-0 text-gray-500 text-sm font-helvetica">
  <CiGlobe />
  <p className="ml-2">India</p>
</div>


        </div>
        
        <div className="mt-8  text-sm py-8 text-start">
          <p>&copy; 2025 Nike, Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
