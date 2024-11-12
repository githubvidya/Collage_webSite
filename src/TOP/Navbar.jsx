import React, { useState } from "react";
import "./Img.css";
import logo from "../TOP/TopPhoto/dic.png";

const Navbar = () => {
  const list = ["Home", "Content", "Blog", "Address", "Contact", "Blog", "Address", "Contact"];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="">
        <div
          className=" w-full h-16 flex items-center justify-between px-6 lg:h-20
       lg:px-10  bg-blue-200 text-black relative "
        >
          <div className="flex items-center">
            <div className="w-28 h-40 md:h-48 md:w-32 flex items-center justify-center border-b-4 border-black bg-slate-700 rounded-b-full z-10">
              <div className="w-20 h-20 md:w-24 md:h-24  mt-8 md:mt-14 bg-black rounded-full overflow-hidden flex items-center justify-center">
                <img className="object-contain" src={logo} alt="Logo" />
              </div>
            </div> 
          </div>

          <div className="hidden lg:flex items-right gap-10 font-bold text-xl ">
            {list.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="hover:text-red-400"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="w-8 h-8 flex flex-col justify-center items-center gap-1"
            >
              <span className="w-full h-1 bg-slate-700 transition-transform transform-gpu"></span>
              <span className="w-full h-1 bg-slate-700 transition-transform transform-gpu"></span>
              <span className="w-full h-1 bg-slate-700 transition-transform transform-gpu"></span>
            </button>
          </div>

          {isOpen && (
            <div className="absolute top-14 left-0 w-full  bg-blue-200 lg:hidden flex flex-col items-center gap-6 py-6">
              {list.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="text-xl font-semibold hover:text-red-400"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="w-3/4 lg:w-2/4 h-4 clip-custom bg-blue-500 text-white lg:text-xl p-4 an"><h1 className=" absolute top-0 right-0  flex  w-full  h-100 pl-14 ann" >Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ex iusto.</h1></div>
      </div>
    </>
  );
};

export default Navbar;
