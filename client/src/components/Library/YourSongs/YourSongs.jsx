import React from 'react'
import Card from '../../shared/Card/Card';
import Heading from '../../shared/heading/Heading';

import music from './music.jpg';

const YourSongs = () => {

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
                [...Array(10)].map((_,i) => {
                    return <Card {...song} full={true}/>
                })
            }
        </div>
    </section>
  )
}

export default YourSongs