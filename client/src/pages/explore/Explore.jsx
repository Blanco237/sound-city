import React from 'react'
import MusicList from '../../components/Explore/MusicList/MusicList'
import Search from '../../components/Explore/Search/Search'
import { MusicProvider } from '../../Context/MusicContext'

const Explore = () => {
  return (
    <div className='md:pt-[7rem] pt-[3rem] bg-secondary'>
        <MusicProvider>
            <Search/>
            <MusicList />
        </MusicProvider>

    </div>
  )
}

export default Explore