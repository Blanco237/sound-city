import React, { useState, useEffect } from "react";

import ReactPaginate from "react-paginate";
import useMusic from "../../../hooks/useMusic";

import Card from "../../shared/Card/Card";
import Heading from "../../shared/heading/Heading";

import music from './music-load.png';

const MusicList = () => {

    const { songs, handleSongs, allSongs } = useMusic();
  
  const [pageNumber, setPageNumber] = useState(0);

  const songsPerPage = 12;
  const pagesVisited = pageNumber * songsPerPage;
  const pageCount = Math.ceil(allSongs.length / songsPerPage);

  const updateSongs = () => {
    const tempSongs = allSongs.slice(pagesVisited, pagesVisited + songsPerPage);
    handleSongs(tempSongs);
  };

  useEffect(() => {
    updateSongs();
  }, [allSongs]);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    scrollToTop();
  };

  const PrintSongs = ({ songs }) => {
    return (
      <>
        {songs.map((song, index) => {
          return <Card {...song} full={true} key={song.sid} />;
        })}
      </>
    );
  };

  useEffect(() => {
    updateSongs();
  }, [pageNumber]);

  const scrollToTop = () => {
    window.scrollTo({
        top: 300,
        left: 0,
        behavior: 'smooth'
    });
  }

  return (
    <section className="section gap-6 pb-10">
      <div>
        <Heading text={"Public Uploads"} styles={"text-white"} />
      </div>
      {
        songs.length === 0 ? <div className="w-full flex gap-4">
          {
            [...Array(4)].map((_,i) => {
              return <Card image={music} extstyles={`animate-pulse`} />
            })
          }
        </div> : <div className={`grid grid-cols-2 md:grid-cols-4 gap-2`}>
        <PrintSongs songs={songs} />
      </div>
      }
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"flex gap-2 justify-end items-center text-primary"}
        pageLinkClassName={"border border-primary rounded py-1 px-2 hover:bg-[#3bc7e7d0] hover:text-white transition-all"}
        previousLinkClassName={"border border-primary rounded py-1 px-2 bg-primary text-white active:bg-[#3bc8e7a1] transition-all active:border-[#3bc8e7a1] hover:bg-[#3bc7e7d0]"}
        nextLinkClassName={"border border-primary rounded py-1 px-2 bg-primary text-white active:bg-[#3bc8e7a1] transition-all active:border-[#3bc8e7a1] hover:bg-[#3bc7e7d0]"}
        disabledLinkClassName={"bg-gray border-gray hover:border-gray hover:bg-gray active:border-gray active:bg-gray"}
        activeLinkClassName={"bg-[#3bc8e7a1]"}
      />
    </section>
  );
};

export default MusicList;
