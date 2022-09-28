import React, { useDeferredValue } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useMusic from "../../../hooks/useMusic";

const Search = () => {
  const { allSongs, handleSongs } = useMusic();

  const [name, setName] = useState("");
  const deferredName = useDeferredValue(name);

  const tempSongs = useMemo(() => {
    return allSongs.filter(
      (song) => song.title.includes(deferredName) || song.artist.includes(deferredName)
    );
  }, [deferredName]);

  useEffect(() => {
    if(tempSongs) handleSongs(tempSongs);
  }, [tempSongs]);

  return (
    <section className="section items-center gap-8 pb-20 pt-16">
      <h1 className="md:text-4xl text-3xl md:w-1/2 text-center font-medium text-white">
        Explore Our Large <span className="text-primary">Music Library</span>{" "}
        uploaded by
        <span className="text-primary"> Our Users</span>
      </h1>
      <div className="md:w-7/12 flex  items-center justify-center gap-1">
        <input
          type={"text"}
          placeholder="Enter Song/Artist Name"
          className="w-10/12 px-2 py-3 shadow-gray shadow-md rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="bg-primary text-2xl text-white px-4 py-3 rounded-md active:bg-[#3bc8e7a1] transition-colors hover:bg-[#3bc7e7d0] ">
          <FaSearch />
        </button>
      </div>
    </section>
  );
};

export default Search;
