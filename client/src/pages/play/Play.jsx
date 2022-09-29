import React from 'react'
import { useParams } from 'react-router-dom'
import OtherTitles from '../../components/Play/OtherTitles';
import Player from '../../components/Play/Player'

const Play = () => {

    const { id } = useParams();

    console.log(id);

  return (
    <div className='md:pt-[7rem] pt-[6rem] pb-5 bg-secondary flex flex-col gap-10'>
        <Player />
        <OtherTitles />
    </div>
  )
}

export default Play