import React from 'react'

import music from './music.jpg'

import styles from './recent.module.css'


import Heading from '../../shared/heading/Heading'
import Card from '../../shared/Card/Card'

const FeaturedAlbums = () => {

    const artist = {
        image: music,
        title: 'Great Deon Lee',
        artist: 'Eva Cornish & Brain Hill'
    }

  return (
    <section className='section gap-4 pb-4 pt-10'>
        <header className='w-full flex justify-between text-white'>
            <Heading text={'Featured Albums'} />
            <button>View More</button>
        </header>
        <div className={`flex gap-1 overflow-x-scroll ${styles.scroll}`}>
            {
                [...Array(10)].map((_,i) => {
                    return <Card {...artist} key={Math.random()} />
                })
            }
        </div>
    </section>
  )
}

export default FeaturedAlbums