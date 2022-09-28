import React from 'react'
import { useParams } from 'react-router-dom'
import Player from '../../components/Play/Player'

const Play = () => {

    const { id } = useParams();

    console.log(id);

  return (
    <div className='md:pt-[7rem] pt-[6rem] bg-secondary'>
        <Player />
    </div>
  )
}

export default Play