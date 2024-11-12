import React from 'react';

const Footer = () => {
  const links = [
    { name: "Admissions", link: "/admissions" },
    { name: "Programs", link: "/programs" },
    { name: "Faculty", link: "/faculty" },
    { name: "Events", link: "/events" },
    { name: "Alumni", link: "/alumni" },
    { name: "Research", link: "/research" },
    { name: "Programs", link: "/programs" },
    { name: "Faculty", link: "/faculty" },
    { name: "Events", link: "/events" },
    { name: "Alumni", link: "/alumni" },
    { name: "Research", link: "/research" },
    { name: "Programs", link: "/programs" },
    { name: "Faculty", link: "/faculty" },
    { name: "Events", link: "/events" },
    { name: "Alumni", link: "/alumni" },
    { name: "Research", link: "/research" },
    { name: "Contact Us", link: "/contact" }
  ];

  return (
  <>
  
  <footer className="w-full bg-blue-300 py-8">
      <div className="container mx-auto px-4 flex flex-wrap md:flex-nowrap justify-between">
        {/* Left Section: Links and Tagline */}
        <div className="w-full md:w-1/2  
          flex flex-col">
          <h2 className="text-lg font-semibold m-auto text-center">Divyabha Intermediate College, Shripalpur - Proudly affiliated with UP Board, committed to excellence in education and shaping bright futures.</h2>
          <ul className="flex flex-wrap gap-7">
            {links.map((item, index) => (
              <li key={index}>
                <a href={item.link} className="text-black text-bold hover:text-blue-600">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Information Board */}
        <div className="w-full md:w-1/2">
          <h2 className="text-lg font-semibold mb-4">Information Board</h2>
          <div className="bg-white h-60 border-2 border-black p-4 rounded shadow-lg text-gray-800 space-y-2">
            {/* this is information bord */}
          </div>
        </div>
      </div>
    </footer>
    <p className="text-center text-gray-700 text-bolder">@Divyabha Intermediate College, Shripalpur</p>

  </>

  );
};

export default Footer;
