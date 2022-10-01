import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { notify } from 'react-notify-toast';
import { useNavigate, useParams } from 'react-router-dom'
import AxiosInstance from '../../api/api';
import OtherTitles from '../../components/Play/OtherTitles';
import Player from '../../components/Play/Player'

const Play = () => {

    const { sid } = useParams();
    const [song, setSong] = useState(null);
    const navigator = useNavigate()

    useEffect(() => {
      const getSong = async () => {
        try{
        const res = await AxiosInstance.get(`/songs/get/${sid}`);
        if(res.data.error){
          notify.show("Error Loading Song", "error");
          navigator("../explore", {replace: true});
        }
        else{
          setSong(res.data);
          AxiosInstance.post('/songs/updateCount', { sid });
        }
      }
      catch(e){
        notify.show("Error Loading Song", "error",2000);
        setTimeout(window.location.reload, 2000);
      }
      }

      getSong();

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }, [sid])

    

  return (
    <div className='md:pt-[7rem] pt-[6rem] pb-5 bg-secondary flex flex-col gap-10'>
        {
          song? <Player song={song}/> : <div className='w-full text-center text-white text-5xl h-60 grid place-items-center'>Loading... </div>
        }
        {
          song? <OtherTitles sid={song.sid}/> : <div className='w-full text-center text-white text-5xl h-60 grid place-items-center'>Loading... </div>
        }
        
    </div>
  )
}

export default Play