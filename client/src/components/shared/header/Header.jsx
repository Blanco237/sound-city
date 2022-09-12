import React, { useState } from "react";

import logo from "../../../assets/logo.png";

import { Turn as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="w-full bg-secondary flex px-6 py-2 justify-between text-white fixed">
      <div className="md:w-1/6 flex items-center gap-2 text-xl font-medium">
        <img
          src={logo}
          alt="Souncity logo"
          className="md:w-[15%] w-1/12 drop-shadow-lg shadow-primary logo"
        />
        Sound City
      </div>
      <nav className="flex">
        <ul className={`flex items-center md:h-full gap-5 md:static absolute transition-all duration-500  left-0 py-5 w-screen md:w-fit md:flex-row flex-col bg-secondary ${isOpen? 'top-16' : 'top-[-99rem]'}`}>
          {["Home", "Explore", "Login", "Register"].map((item, index) => {
            return ["Login", "Register"].includes(item) ? (
              <button
                key={item}
                className="px-5 py-1 bg-primary rounded-2xl shadow-none hover:shadow-glow hover:shadow-primary transition-shadow duration-500"
              >
                {item}
              </button>
            ) : (
              <li key={index + item} className='w-full md:w-fit text-center '>{item}</li>
            );
          })}
        </ul>
        <div className="md:hidden"><Hamburger toggled={isOpen} toggle={setOpen} rounded /></div>
      </nav>
    </header>
  );
};

export default Header;
