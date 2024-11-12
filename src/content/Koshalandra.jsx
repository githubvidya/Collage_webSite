import React from 'react';
import Classes from './Classes';

const Koshalandra = () => {


  return (

    <>
   
    <div className="  flex  flex-col lg:flex-row w-full lg:w-3/4 h-auto lg:h-1/2 border border-gray-300 rounded-lg p-4  bg-blue-200 lg:m-2  shadow-lg m-auto">
      {/* Left Section - Image */}
      <div className=" flex justify-center w-full h-fit m-auto md:w-fit  ">
        <img
          src="https://cdn.pixabay.com/photo/2023/12/15/17/13/woman-8451051_1280.jpg"
          alt="Profile"
          className="w-64 h-44  object-cover rounded-xl"
        />
      </div>

      {/* Right Section - Text Content */}
      <div className="flex  flex-col  flex-1 text-center lg:text-left lg:pl-1 m-auto ">
        <h3 className="text-lg font-semibold text-black">
          Fifteen words to demonstrate the layout as per the requirements.
        </h3>
        <p className="text-sm leading-5 p-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod, lacus vel tempus vehicula,
          nunc lectus luctus lorem, eget tempor elit ipsum id ex. 
        </p>
        <div className="text-gray-800 font-medium">
          <strong>John Doe</strong>
          <span className="text-gray-500"> - Position Title</span>
        </div>
      </div>
    </div>
    </>
  );
};

export default Koshalandra;
