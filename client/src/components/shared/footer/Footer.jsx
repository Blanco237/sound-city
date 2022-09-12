import React from "react";

import styles from './footer.module.css';

import logo from "../../../assets/logo.png";
import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";

import Heading from "../heading/Heading";

const Footer = () => {
  const Contact = [
    {
      icon: <FaPhone />,
      text: "+237 650740206",
    },
    {
      icon: <FaEnvelope />,
      text: "asongrandywork@gmail.com",
    },
    {
      icon: <FaLocationArrow />,
      text: "Molyko, Buea",
    },
  ];

  return (
    <footer className={`flex flex-col gap-2 py-3 text-white ${styles.body}`}>
      <section className=" w-full flex flex-col justify-center items-center gap-4 md:mb-0 mb-4">
        <img src={logo} alt="Sound City Logo" className="md:w-[5%] w-1/12 drop-shadow-lg shadow-primary logo"/>
        <h2 className="text-2xl font-medium">Sound City</h2>
      </section>
      <section className="flex md:flex-row flex-col gap-7 px-4 justify-around items-start w-full">
        <div className="md:w-1/5 flex flex-col gap-2">
          <Heading text="Miraculous Music" /> 
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            expedita autem? Laboriosam rem cumque, consectetur omnis sed ad
            accusantium illum impedit labore est numquam iste eveniet similique
            doloribus consequuntur doloremque!
          </p>
        </div>
        <div className="md:w-1/5 gap-2 flex flex-col">
          <Heading text="Contact Us" />
          <ul>
            {Contact.map((item, index) => {
              return (
                <li key={item.text} className='flex gap-4 items-center mt-2'>
                  <span className="p-3 bg-primary rounded-lg">{item.icon}</span>
                  <p>{item.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center gap-1 mt-2">
        <Heading styles='w-1/2' text="" />
        <p>Developed by <a href="https://github.com/Blanco237" target="_blank" rel="noreferrer" className="text-primary ">Blanco237</a></p>
      </section>
    </footer>
  );
};

export default Footer;
