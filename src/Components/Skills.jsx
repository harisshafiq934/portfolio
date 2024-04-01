import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";

import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import Redux from "../assets/redux.png"
import Bootstrap from "../assets/bootstrap.svg"
import Sass from "../assets/sass.svg"
function Skills() {

    const techs = [
        {
          id: 1,
          src: html,
          title: "HTML",
          style: "shadow-orange-500",
        },
        {
          id: 2,
          src: css,
          title: "CSS",
          style: "shadow-blue-500",
        },
        {
          id: 3,
          src: javascript,
          title: "JavaScript",
          style: "shadow-yellow-500",
        },
        {
          id: 4,
          src: reactImage,
          title: "React",
          style: "shadow-blue-600",
        },
        {
          id: 5,
          src: tailwind,
          title: "Tailwind",
          style: "shadow-sky-400",
        },
        {
          id: 6,
          src: Sass,
          title: "Sass",
          style: "shadow-pink-400",
        },
        {
          id: 7,
          src: Redux,
          title: "Redux",
          style: "shadow-purple-400",
        },
        {
          id: 8,
          src: github,
          title: "GitHub",
          style: "shadow-gray-400",
        },
        {
            id: 9,
            src: Bootstrap,
            title: "Bootstrap",
            style: "shadow-purple-400",
          },
      ];
  return (
<div className='container mx-auto'>
<div className='lg:mt-20 mt-10'>
    <div className='text-center'>
<h3 className='text-[#CCCCCC] font-bold text-2xl'> 
My Tech Stack
</h3>
<p className='text-[#A7A7A7] font-medium mt-3'> Technologies I’ve been working with recently</p>
    </div>

    <div className=" grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-8 text-center px-12 py-8">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 text-[#A7A7A7]">{title}</p>
            </div>
          ))}
        </div>
    </div>    
</div>

)
}

export default Skills