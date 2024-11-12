import React from 'react';
// import Photo from 'https://cdn.pixabay.com/photo/2016/03/25/03/04/tony-randall-male-1278144_640.jpg'; 

const Gallary = () => {
  let act = [
    {
      photo: 'https://indianhighschool.edu.in/images/inner-img/assembly-img2.jpg', // Add image URL or component reference here
      text: 'This is a text for a paragraph that is related to this paragraph. Sorry for the incorrect spelling, this is the main paragraph.'
    },
    {
      photo: 'https://indianhighschool.edu.in/images/inner-img/curricular-activity1.jpg',
      text: 'This is a text for a paragraph that is related to this paragraph. Sorry for the incorrect spelling, this is the main paragraph.'
    },
    {
      photo: 'https://indianhighschool.edu.in/images/inner-img/assembly-img2.jpg',
      text: 'This is a text for a paragraph that is related to this paragraph. Sorry for the incorrect spelling, this is the main paragraph.'
    },
    {
      photo: 'https://indianhighschool.edu.in/images/inner-img/assembly-img2.jpg',
      text: 'This is a text for a paragraph that is related to this paragraph. Sorry for the incorrect spelling, this is the main paragraph.'
    },
    {
      photo: 'https://indianhighschool.edu.in/images/inner-img/curricular-activity8.jpg',
      text: 'This is a text for a paragraph that is related to this paragraph. Sorry for the incorrect spelling, this is the main paragraph.'
    },
    {
      photo: 'https://indianhighschool.edu.in/images/inner-img/curricular-activity8.jpg',
      text: 'This is a text for a paragraph that is related to this paragraph. Sorry for the incorrect spelling, this is the main paragraph.'
    }
  ];

  return (
    <>
      <div className="  w-11/12 m-auto h-full p-2  mt-5">
        <h1 className="flex place-content-center mt-3 w-full h-100 text-xl font-bold text-emerald-900">
          Activity
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
          {act.map((e, index) => (
            <div 
              key={index}
              className="border-2 border-black p-4 rounded-lg shadow-lg  bg-blue-200"
            >
              <div className="flex flex-col items-center">
                <img src={e.photo} alt={`Activity ${index + 1}`} className="w-full h-48 object-cover mb-3 rounded border-2 border-black" />
                <p className="text-center text-gray-800">
                  {e.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallary;
