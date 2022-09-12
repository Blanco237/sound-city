import React from 'react'

import music from './music.jpg'

import styles from './recent.module.css'


import Heading from '../../shared/heading/Heading'
import Card from '../../shared/Card/Card'

const RecentlyPlayed = () => {

    const song = {
        image: music,
        title: 'Dream Your Moments (Duet)',
        artist: 'Eva Cornish & Brain Hill'
    }

  return (
    <section className='section gap-4 pb-2'>
        <header className='w-full flex justify-between text-white'>
            <Heading text={'Recently Played'} />
            <button>View More</button>
        </header>
        <div className={`flex gap-1 overflow-x-scroll ${styles.scroll}`}>
            {
                [...Array(10)].map((_,i) => {
                    return <Card {...song} />
                })
            }
        </div>
    </section>
  )
}

export default RecentlyPlayed