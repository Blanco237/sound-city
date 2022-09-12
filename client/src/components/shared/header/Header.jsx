import React, { useState } from "react";

import logo from "../../../assets/logo.png";

import { Turn as Hamburger } from "hamburger-react";
import Login from "../../modals/login/Login";
import Register from "../../modals/register/Register"

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [showLogin, setLogin] = useState(false);
  const [showRegister, setRegister] = useState(false);

  return (
    <>
    <header className="w-full bg-midnight flex px-6 py-2 justify-between text-white fixed z-50">
      <div className="md:w-1/6 flex items-center gap-2 text-xl font-medium">
        <img
          src={logo}
          alt="Souncity logo"
          className="md:w-[15%] w-1/12 drop-shadow-lg shadow-primary logo"
        />
        Sound City
      </div>
      <nav className="flex">
        <ul className={`flex items-center md:h-full gap-5 md:static absolute transition-all duration-500  left-0 py-5 w-screen md:w-fit md:flex-row flex-col bg-midnight ${isOpen? 'top-16' : 'top-[-99rem]'}`}>
          {["Home", "Explore"].map((item, index) => {
            return (
              <li key={index + item} className='w-full md:w-fit text-center '>{item}</li>
            );
          })}
          <button className="btn-primary" onClick={() => setLogin(true)}>Login</button>
          <button className="btn-primary" onClick={() => setRegister(true)}>Register</button>
        </ul>
        <div className="md:hidden"><Hamburger toggled={isOpen} toggle={setOpen} rounded /></div>
      </nav>
    </header>
    {showLogin && <Login closeModal={() => setLogin(false)} />}
    {showRegister && <Register closeModal={() => setRegister(false)} />}
    </>
  );
};

export default Header;
