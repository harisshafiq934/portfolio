import React from 'react'

function Projects() {
    const portfolios = [
        {
          id: 1,
          src: "",
        },
        {
          id: 2,
          src: "",
        },
        {
          id: 3,
          src: "",
        },
        {
          id: 4,
          src: "",
        },
        {
          id: 5,
          src: "",
        },
        {
          id: 6,
          src: "",
        },
      ];
  return (
    <div className='container mx-auto' name="portfolio">
<div className='lg:mt-20 mt-10'>
<div className='text-center'>
    <h2 className='text-[#CCCCCC] font-bold text-2xl'>
        Projects
    </h2>
    <p className='text-[#A7A7A7] font-medium mt-3'>
    Things I’ve built so far  
    </p>
</div>
<div
      
      className="bg-gradient-to-b  to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
       

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
</div>

    </div>
  )
}

export default Projects