import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

export default function Header() {
  const [isopen, setisopen] = useState(false);
  const navbar = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Projects",
      to: "/projects"
  },
    {
      name: "CV",
      to: "/cv",
    },
   
  ];

  return (
    <header className="shadow-lg z-[1] sticky top-0 h-18">
      <nav className="bg-white">
        <div className="flex justify-between pl-8 sm:pl-20 pr-20 w-full items-center">
          <div className="text-amber-700 text-2xl flex items-center animate-bounce animate-infinite
 ">
            <b>(っ◕‿◕)っ</b>
          </div>

          <div className="h-[80px] flex  justify-evenly p-8">
            <div
              onClick={() => setisopen(!isopen)}
              className="sm:hidden bg-white text-amber-900 flex items-center right-10 w-8 h-8 top-6 p-2 rounded-lg shadow-md absolute cursor-pointer"
            >
              {isopen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
          <div>
            <ul
              className={` flex justify-end sm:z-auto bg-white   absolute sm:static left-[-0px] w-full  sm:w-auto sm:pl-0  transition-all duration-500 ease-in ${
                isopen ? "top-14" : "top-[-500px]"
              } flex-col  sm:flex-row justify-between    `}
            >
              {navbar.map((item, index) => (
                <li key={index} className="m-2">
                  <NavLink
                    className={({ isActive }) =>
                      ` ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 block py-2 pr-4 pl-3 duration-200hover:bg-gray-50 lg:hover:bg-transparent lg:border-b hover:text-orange-700 lg:p-0`
                    }
                    to={item.to}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

