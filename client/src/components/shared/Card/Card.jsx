import React from "react";

import styles from "./card.module.css";

import {
  FaEllipsisH,
  FaRegPlayCircle,
  FaArrowAltCircleUp as Arrow,
} from "react-icons/fa";

const Card = ({ image, title, artist, type }) => {
  const [menuOpen, setOpen] = React.useState(false);

  return (
    <aside className="md:w-1/4 w-1/2 text-white text-left flex-shrink-0">
      <section className="overflow-hidden rounded-md w-full relative ">
        <img
          src={image}
          alt={title + "-" + artist}
          className={`${styles.image} w-full`}
        />
        <div
          className={`absolute w-full h-full bg-gradient-to-t from-primary to-transparent top-0 left-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-all`}
        >
          <span
            className={`absolute top-4 right-2 text-lg cursor-pointer hover:scale-110 transition-all ${
              type === "artist" ? "hidden" : ""
            }`}
            onClick={() => setOpen((open) => !open)}
          >
            <FaEllipsisH />
          </span>
          <ul
            className={`absolute right-7 top-4 w-2/5 px-1 py-2 bg-white text-gray rounded-md text-sm flex-col gap-2 ${
              menuOpen ? "flex" : "hidden"
            }`}
          >
            <li className="cursor-pointer hover:text-primary transition-colors">
              Add To Favorites
            </li>
            <li className="cursor-pointer hover:text-primary transition-colors">
              Add To Queue
            </li>
            <li className="cursor-pointer hover:text-primary transition-colors">
              Download Now
            </li>
          </ul>
          <span className="text-4xl cursor-pointer hover:scale-125 transition-all">
            {type === "artist" ? <Arrow /> : <FaRegPlayCircle />}
          </span>
        </div>
      </section>
      <section className="mt-2">
        <h3 className="font-bold">{title}</h3>
        <h4 className="text-gray">{artist}</h4>
      </section>
    </aside>
  );
};

export default Card;
