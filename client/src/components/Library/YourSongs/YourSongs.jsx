import React from 'react'
import Card from '../../shared/Card/Card';
import Heading from '../../shared/heading/Heading';

import music from './music.jpg';

const YourSongs = ({ songs }) => {

    const song = {
        image: music,
        title: 'Dream Your Moments (Duet)',
        artist: 'Eva Cornish & Brain Hill'
    }

  return (
    <section className='section gap-4 '>
        <header className='text-white'>
            <Heading text={'Your Songs'} />
        </header>
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-2`}>
            {
                songs?.length===0? <h3 className='text-gray text-2xl'>No Songs Uploaded</h3> :
                songs.map((song) => {
                    return <Card {...song} full={true} key={song.sid}/>
                })
            }
        </div>
    </section>
  )
}

export default YourSongs