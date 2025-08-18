import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4 text-softGray">
              <FaFacebook size={24} className="cursor-pointer hover:text-neonTeal" />
              <FaTwitter size={24} className="cursor-pointer hover:text-neonTeal" />
              <FaInstagram size={24} className="cursor-pointer hover:text-neonTeal" />
              <a 
                href="https://www.linkedin.com/in/jay-prajapati-834316224/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-neonTeal"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm text-softGray/80">
                &copy; 2024 Jay Portfolio. All rights reserved.
              </p>
  
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;