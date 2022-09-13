import React from "react";

import classes from "./link.module.css";

const Rlink = ({ text, href, styles, color = "blue", onClick }) => {
  return (
    <a className={`${styles} ${classes.body} relative`} href={href} onClick={onClick}>
      <h2>
        <span
          className={`w-4/5 absolute bottom-0 left-[1.5rem] h-[5px] ${
            color === "blue" ? "bg-fade" : "bg-fade-white"
          }`}
        ></span>
        {text}
      </h2>
    </a>
  );
};

export default Rlink;
