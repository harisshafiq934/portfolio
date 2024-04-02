import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import Github from "../assets/github.svg"
import LinkedIn from "../assets/linkedin.svg"
const NavBar = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setNav(false); // Close the nav menu if screen size is increased beyond mobile
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="containe mx-auto ">
    <div className="flex justify-between items-center w-full h-20 px-8 text-white   ">
      <div>
        <h1 className="text-5xl font-signature ml-2">Haris</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-semibold text-gray-200 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
<div className="lg:flex hidden items-center space-x-5 ">
    <a href="https://github.com/harisshafiq934">
    
    <img src={Github} alt="github" />
    </a>
    <a href="https://www.linkedin.com/in/harisshafiq934/">

    <img src={LinkedIn} alt="linkedin" />
    </a>
</div>
      <div
        onClick={toggleNav}
        className="cursor-pointer pr-4 z-10 text-gray-200 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <div
          onClick={closeNav}
          className="fixed top-0 left-0 w-full h-full bg-black  z-100"
        >
          <ul className="flex flex-col justify-center items-center h-full">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl text-gray-500"
              >
                <Link
                  onClick={closeNav}
                  to={link}
                  smooth
                  duration={500}
                  className="hover:text-gray-200"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
  );
};

export default NavBar;
