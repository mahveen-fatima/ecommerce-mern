import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black  py-10  className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw]'">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-bold">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-gray-400">Find A Store</a></li>
              <li><a href="#" className="hover:text-gray-400">Become A Member</a></li>
              <li><a href="#" className="hover:text-gray-400">Send Us Feedback</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">About Nike</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Our Story</a></li>
              <li><a href="#" className="hover:text-gray-400">Careers</a></li>
              <li><a href="#" className="hover:text-gray-400">Investors</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Follow Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Instagram</a></li>
              <li><a href="#" className="hover:text-gray-400">Twitter</a></li>
              <li><a href="#" className="hover:text-gray-400">Facebook</a></li>
            </ul>
          </div>

          {/* <div>
            <h3 className="font-bold">Get Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">FAQs</a></li>
              <li><a href="#" className="hover:text-gray-400">Terms of Use</a></li>
              <li><a href="#" className="hover:text-gray-400">Return Policy</a></li>
            </ul>
          </div> */}
        </div>
        
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2025 Nike, Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
