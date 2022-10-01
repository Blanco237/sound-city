import React from "react";

import styles from "./recent.module.css";

import Heading from "../../shared/heading/Heading";
import Card from "../../shared/Card/Card";
import { useState } from "react";
import { useEffect } from "react";
import AxiosInstance from "../../../api/api";
import { notify } from "react-notify-toast";

import music from "./music-load.png";

const RecentlyPlayed = () => {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const getRecent = async () => {
      const res = await AxiosInstance.get("/songs/recent");
      if (res.data.error) {
        notify.show(res.data.error, "error", 2500);
        return;
      }
      setRecent(res.data);
    };

    getRecent();
  }, []);

  return (
    <section className="section gap-4 pb-2">
      <header className="w-full flex justify-between text-white">
        <Heading text={"Recently Played"} />
        <button>View More</button>
      </header>
      {recent.length === 0 ? (
        <div className="w-full flex gap-4">
          {[...Array(4)].map((_, i) => {
            return <Card image={music} extstyles={`animate-pulse`} />;
          })}
        </div>
      ) : (
        <div className={`flex gap-1 overflow-x-scroll ${styles.scroll}`}>
          {recent.map((song) => {
            return <Card {...song} key={song.sid} />;
          })}
        </div>
      )}
    </section>
  );
};

export default RecentlyPlayed;
