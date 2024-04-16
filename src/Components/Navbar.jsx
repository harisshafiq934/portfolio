import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import Github from "../assets/github.svg";
import LinkedIn from "../assets/linkedin.svg";

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
      link: "portfolio",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "about",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="bg-black ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center w-full py-3 text-white">
          <div>
            <h1 className="text-3xl md:text-5xl font-signature">Haris</h1>
          </div>

          <div className="md:hidden">
            {nav ? (
              <FaTimes onClick={closeNav} size={30} className="text-gray-200 cursor-pointer" />
            ) : (
              <FaBars onClick={toggleNav} size={30} className="text-gray-200 cursor-pointer" />
            )}
          </div>

          <ul className={`md:flex hidden ${nav ? 'flex' : 'hidden'} md:space-x-5`}>
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize font-semibold text-gray-200 hover:scale-105 duration-200"
              >
                <Link to={link} smooth duration={500} onClick={closeNav}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center space-x-5">
            <a href="https://github.com/harisshafiq934">
              <img src={Github} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/harisshafiq934/">
              <img src={LinkedIn} alt="linkedin" />
            </a>  
          </div>
        </div>
      </div>

      {nav && (
        <div className=" bg-black">
          <ul className="flex flex-col justify-center items-center h-full">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-3xl text-gray-200"
              >
                <Link to={link} smooth duration={500} onClick={closeNav}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
