import React, { useState, useRef, useEffect } from "react";

import WaveSurfer from "wavesurfer.js";

import { FaPause, FaPlay, FaVolumeUp } from "react-icons/fa";
import music from "./music.jpg";

import Heading from "../shared/heading/Heading";

const Player = () => {
  const wavesurfer = useRef(null);

  const [showVolume, setShowVolume] = useState(false);
  const [playTime, setPlayTime] = useState("00:00");
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const song = {
    image: music,
    title: "Dream Your Moments (Duet)",
    artist: "Eva Cornish & Brain Hill",
    album: "Love and War",
  };

  useEffect(() => {
    if (wavesurfer.current) wavesurfer.current.destroy();

    wavesurfer.current = WaveSurfer.create({
      container: document.querySelector("#waveform"),
      barWidth: 2,
      barHeight: 2,
      barGap: 1,
      barRadius: 1,
      height: 80,
      responsive: true,
      progressColor: "#3bc8e7",
      waveColor: "#273891",
      cursorColor: "#3bc8e7",
    });

    wavesurfer.current.on("ready", () => {
      // wavesurfer.current.play();
    });

    wavesurfer.current.on("audioprocess", () => {
      setPlayTime(getCurrentTime());
    })

    wavesurfer.current.on("play", () => {
        setIsPlaying(true);
    })

    wavesurfer.current.on("pause", () => {
        setIsPlaying(false);
    })

    wavesurfer.current.load(
      "https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3"
    );

  }, []);

  const playPause = async () => {
    await wavesurfer.current.playPause();
  }

  const format = (seconds) => {
    return new Date(seconds * 1000).toISOString().substring(14, 19)
  }

  const getDuration = () => {
    if(wavesurfer.current){
      return format(wavesurfer.current.getDuration())
    }

    return "00:00";
  }

  const getCurrentTime = () => {
    if(wavesurfer.current){
      return format(wavesurfer.current.getCurrentTime())
    }

    return "00:00";
  }

  const changeVolume = (e) => {
    const vol = parseFloat(Number(e.target.value)/100);
    wavesurfer.current.setVolume(vol);
    setVolume(e.target.value)
  }

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
          onClick={playPause}>
            <span>
              {
                isPlaying ? <FaPause /> : <FaPlay />
              }
            </span>
          </div>
          <div role={"button"} className="relative">
            <span
              className="bg-primary px-3 py-3 rounded-full grid place-items-center shadow cursor-pointer stateful"
              onClick={() => setShowVolume((showVolume) => !showVolume)}
            >
              <FaVolumeUp />
            </span>
            {showVolume && (
              <div className="absolute bg-primary grid place-items-center p-2 rounded-2xl -top-12 -left-14 isolate animate-in slide-in-from-bottom-8 fade-in-20">
                <span className="absolute w-5 h-5 bg-inherit rotate-45 -bottom-1 z-[-1]"></span>
                <input type={"range"} className="cursor-pointer" onChange={changeVolume} value={volume}/>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="w-full flex items-center justify-center gap-1 text-white">
        <p className="w-1/12 md:text-base text-sm">{playTime}</p>
        <div className="w-10/12" id="waveform"></div>
        <p className="w-1/12 md:text-base text-sm">{getDuration()}</p>
      </section>
    </section>
  );
};

export default Player;
