import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div className="sticky">
      <nav className="flex-row justify-between items-center px-8 py-5 hidden sm:flex">
        <ul className="flex flex-row justify-center space-x-5 items-center">
          <li className="transition-all ease-in-out hover:scale-110 flex-col">
            <Link className="font-medium text-sm text-white">Home</Link>
            <div className="hover:bg-red-500 h-0.5 w-100"></div>
          </li>
          <li className="transition-all ease-in-out hover:scale-110">
            <Link className="font-medium text-sm text-white">Movies</Link>
            <div className="hover:bg-red-500 h-0.5 w-100"></div>
          </li>
          <li className="transition-all ease-in-out hover:scale-110">
            <Link className="font-medium text-sm text-white">Tickets</Link>
            <div className="hover:bg-red-500 h-0.5 w-100"></div>
          </li>
          <li className="transition-all ease-in-out hover:scale-110">
            <Link className="font-medium text-sm text-white">Mobile app</Link>
            <div className="hover:bg-red-500 h-0.5 w-100"></div>
          </li>
          <li className="transition-all ease-in-out hover:scale-110">
            <Link className="font-medium text-sm text-white">Settings</Link>
            <div className="hover:bg-red-500 h-0.5 w-100"></div>
          </li>
        </ul>
        <ul className="flex flex-row justify-center items-center space-x-4">
          <li className="px-5 py-2 bg-white rounded-sm shadow-lg">
            <Link className="text-center text-black text-xs font-medium transition-all ease-in-out hover:scale-110 ">
              SIGN-UP
            </Link>
          </li>
          <li className="transition-all ease-in-out hover:scale-110 px-5 py-2 bg-black rounded-sm shadow-lg">
            <Link className="text-white text-xs font-medium text-center ">
              SIGN-IN
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="flex sm:hidden">
        <div className="absolute right-5 top-4">
          {menuToggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              onClick={() => setMenuToggle(false)}
              cursor="pointer"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
              color="white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              onClick={() => setMenuToggle(true)}
              cursor="pointer"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
              color="white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
        <div
          className={`bg-white flex-col translate-x-2 transition-all ease-out p-4 absolute top-4 w-1/2 ${
            menuToggle ? "flex" : "hidden"
          }`}
        >
          <ul className="flex flex-col justify-center space-y-4 mb-3 items-center">
            <li className="transition-all ease-in-out hover:scale-110">
              <Link className="font-medium text-sm text-black">Home</Link>
            </li>
            <li className="transition-all ease-in-out hover:scale-110">
              <Link className="font-medium text-sm text-black">Movies</Link>
            </li>
            <li className="transition-all ease-in-out hover:scale-110">
              <Link className="font-medium text-sm text-black">Tickets</Link>
            </li>
            <li className="transition-all ease-in-out hover:scale-110">
              <Link className="font-medium text-sm text-black">Mobile app</Link>
            </li>
            <li className="transition-all ease-in-out hover:scale-110">
              <Link className="font-medium text-sm text-black">Settings</Link>
            </li>
          </ul>
          <ul className="flex flex-col justify-center items-center space-y-3">
            <li className="px-5 py-2 bg-white rounded-sm shadow-lg">
              <Link className="text-center text-black text-xs font-medium">
                SIGN-UP
              </Link>
            </li>
            <li className="px-5 py-2 bg-black rounded-sm shadow-lg">
              <Link className="text-white text-xs font-medium text-center ">
                SIGN-IN
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
