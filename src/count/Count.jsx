import React from 'react';
import './Bg.css';

const Count = () => {
  let arr = [
    {
      h3: 'Heading',
      h1: '45%'
    },
    {
      h3: 'Heading',
      h1: '45%'
    },
    {
      h3: 'Heading',
      h1: '45%'
    },
    {
      h3: 'Heading',
      h1: '45%'
    },
    {
      h3: 'Heading',
      h1: '45%'
    },
  ];

  return (
    <>
      <div className="w-full h-100 bg mt-6 relative pb-4 md:h-max">
        <div className="w-full h-100 flex flex-col  font-bold pt-5 items-center">
          <h1 className="text-blue-50 text-bold">Divyabha Intermidiate Collage , Shripalpur</h1>
          <p className="text-center md:text-2xl mt-3 text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, cumque! Lorem ipsum dolor sit.
          </p>
        </div>

        <div className="text-white font-bold w-full h-100  flex flex-wrap mt-9 ">
          {
            arr.map((e, index) => (
              <div
                key={index}
                className="text-white font-bold w-48 h-24 border-r-2  border-l-2  flex flex-col m-auto text-center"
              >
                <h3 className=" mb-3 mt-3">{e.h1}</h3>
                <h1 className=" font-extrabold text-xl">{e.h3}</h1>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Count;
