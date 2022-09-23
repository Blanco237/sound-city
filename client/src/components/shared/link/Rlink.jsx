import React from "react";

import classes from "./link.module.css";

const Rlink = ({ text, href, styles, color = "blue", onClick }) => {
  return (
    <h2 className={`${styles} ${classes.body} relative`} onClick={onClick}>
        <span
          className={`w-4/5 absolute bottom-0 left-[1.5rem] h-[5px] ${
            color === "blue" ? "bg-fade" : "bg-fade-white"
          }`}
        ></span>
        {text}
    </h2>
  );
};

export default Rlink;
