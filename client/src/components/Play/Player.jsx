import React from "react";
import { useState } from "react";
import { FaPlay, FaPlayCircle, FaVolumeUp } from "react-icons/fa";
import Heading from "../shared/heading/Heading";

import music from "./music.jpg";

const Player = () => {
  const [showVolume, setShowVolume] = useState(false);

  const song = {
    image: music,
    title: "Dream Your Moments (Duet)",
    artist: "Eva Cornish & Brain Hill",
    album: "Love and War",
  };

  return (
    <section className="section pb-10 gap-4">
      <Heading text={"Now Playing"} styles={"text-white"} />
      <section className="flex w-full gap-4 md:flex-row flex-col">
        <div className="md:w-2/12 w-3/5 bg-black rounded-md overflow-hidden shadow-[#3bc7e76b] shadow-glow">
          <img src={song.image} alt={song.title} className="w-full" />
        </div>
        <aside className="flex flex-col gap-3 text-primary">
          <h1 className="text-4xl text-white">{song.title}</h1>
          <h2 className="text-2xl ">{song.artist}</h2>
          <h2 className="text-xl ">
            Album:{" "}
            {song.album ? (
              song.album
            ) : (
              <span className="text-gray">No Album</span>
            )}
          </h2>
          <h3 className="text-gray">Played 5 times</h3>
        </aside>
        <div className="ml-[auto] self-end flex gap-5 text-white md:flex-row flex-row-reverse">
          <div
            role={"button"}
            className="bg-primary px-3 py-3 rounded-full grid place-items-center shadow cursor-pointer stateful"
          >
            <span>
              <FaPlay />
            </span>
          </div>
          <div role={"button"} className="relative">
            <span className="bg-primary px-3 py-3 rounded-full grid place-items-center shadow cursor-pointer stateful" onClick={() => setShowVolume((showVolume) => !showVolume)}>
              <FaVolumeUp />
            </span>
            {showVolume && <div className="absolute bg-primary grid place-items-center p-2 rounded-2xl -top-12 -left-14 isolate animate-in slide-in-from-bottom-8 fade-in-20">
              <span className="absolute w-5 h-5 bg-inherit rotate-45 -bottom-1 z-[-1]"></span>
              <input type={"range"} className="cursor-pointer" />
            </div>}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Player;
