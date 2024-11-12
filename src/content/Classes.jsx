import React from 'react';


const Classes = () => {
  const boxes = [
    {
      named: 'Juniors',
      page: "Lorem ipsum dolor sit amet.",
      btn: 'More'
    },
    {
      named: 'Rahul',
      page: "Lorem ipsum dolor sit amet.",
      btn: 'More'
    },
    {
      named: 'Ramu',
      page: "Lorem ipsum dolor sit amet.",
      btn: 'More'
    },
    {
      named: 'Sonu',
      page: "Lorem ipsum dolor sit amet.",
      btn: 'More'
    },
    {
      named: 'Sushil',
      page: "Lorem ipsum dolor sit amet.",
      btn: 'more'
    }
  ];

  return (
    <div className=" w-full h-full flex flex-wrap justify-center gap-4 ">
      {boxes.map((box, index) => (
        <div key={index} className=" w-80 sm:w-60     p-2 h-fit border-2 border-blue-200 flex flex-col text-center  rounded-full sh">
          <h1 className="text-blue-900 font-bold ">{box.named}</h1>
          <p className="mb-4">{box.page}</p>
          <button className="w-32 h-fit border-2 border-blue-400 text-black py-1 font-bold  m-auto mb-2 rounded-2xl">
            {box.btn}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Classes;
