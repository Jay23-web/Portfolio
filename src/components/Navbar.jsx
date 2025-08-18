import React, { useState } from "react";
import jay from "../../public/jay.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experiance",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="bg-navyBlack  w-full s max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50   border-b border-white">
        <div className="flex justify-between items-center h-16">
          <div className=" flex space-x-2 items-center" >
            <img src={jay} className="h-12 w-12 rounded-full" alt="Jay Logo" />
            <div className="leading-tight">
              <h1 className="font-cursive text-2xl font-bold text-softWhite tracking-wide drop-shadow-lg">
                Jay</h1>

              <p className="text-sm text-softGray   tracking-widest
">Web Developer</p>
              {/* 
              <p className="text-sm font-semibold  tracking-wider bg-gradient-to-r from-[#000000] to-[#001fbc] text-transparent bg-clip-text">Web Developer</p> */}
            </div>
          </div>
          {/* desktop navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 hover:text-neonTeal hover:border-b-2 hover:border-neonTeal duration-200 cursor-pointer "

                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>

            <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>
        {/* mobile navbar */}
        {menu && (
          <div className="bg-darkNavy">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="group relative hover:scale-105  duration-200 hover:text-blue-500 hover:border-b-2 font-semibold cursor-pointer"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>

                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;