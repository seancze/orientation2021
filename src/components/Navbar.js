import React, { useState } from "react";
import { Link } from "react-router-dom";
import sutdLogo from "../assets/images/sutd_logo.svg";

const Navbar = () => {
  const [navState, setNavState] = useState(false);

  return (
    <>
      <nav className="fixed w-full bg-root-red py-4 z-999">
        <div className="section-container flex justify-between items-center">
          <div className="w-16">
            <a href="https://www.sutd.edu.sg" target="_blank">
              <img src={sutdLogo} alt="SUTD Logo" />
            </a>
          </div>
          {/* <button
            className="md:hidden cursor-pointer"
            onClick={() => setNavState(!navState)}
          >
            {navState ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 16h16"
                ></path>
              </svg>
            )}
          </button> */}
          {/* <ul className="hidden md:flex">
            <li className="nav-link">
              <Link to="/about">About Us</Link>
            </li>
          </ul> */}
        </div>
      </nav>
      {navState && (
        <div className="fixed z-999 bg-root-red mt-20 p-10 w-full text-right">
          {/* <ul className="flex flex-col">
            <li className="nav-link">
              <Link to="/about">About Us</Link>
            </li>
          </ul> */}
        </div>
      )}
    </>
  );
};

export default Navbar;
